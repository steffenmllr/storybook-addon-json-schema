import React, { Fragment, useEffect, useRef, useState } from 'react'
import addons, { types } from '@storybook/addons';
import { ADDON_INIT, ADDON_ID, PANEL_ID, PANEL_NAME } from './shared';
import { styled } from '@storybook/theming';
import RefParser from 'json-schema-ref-parser';
import JSONSchemaView from 'json-schema-view-js';
import JSONFormatter from 'json-formatter-js'

import { style } from './style';

const NotesPanel = styled.div({
    padding: 10,
    overflow: 'auto',
    height: '100%'
});

const TextArea = styled.textarea({
    width: '100%',
    height: '100%',
});

const Button = styled.button({
    marginBottom: '10px'
});


const Row = styled.div({
    width: '50%',
    padding: '10px'
});

const Wrapper = styled.div({
    display: 'flex',
    height: '100%'
});


const SchemaView = ({ schema, sample }) => {
    const [showRow, setshowRow] = useState(false)
    const schemaEl = useRef(null);
    const sampleEl = useRef(null);


    const toggleRaw = (e) => {
        e.preventDefault();
        setshowRow(!showRow);
    }

    useEffect(() => {
        const schemaView = new JSONSchemaView(schema, 2);
        schemaEl.current.appendChild(schemaView.render());

        const sampleView = new JSONFormatter(sample, 2, { theme: 'dark' });
        sampleEl.current.appendChild(sampleView.render());
    }, []);

    return (
        <Fragment>
            <Button type="button" onClick={toggleRaw}>Toggle raw</Button>
            <Wrapper>

                <Row>
                    <div style={{ display: showRow ? 'none' : 'block' }} ref={schemaEl} />
                    <TextArea style={{ display: showRow ? 'block' : 'none' }}>{JSON.stringify(schema, null, 4)}</TextArea>
                </Row>
                <Row style={{ background: '#222' }}>
                    <div style={{ display: showRow ? 'none' : 'block' }} ref={sampleEl} />
                    <TextArea style={{ display: showRow ? 'block' : 'none' }}>{JSON.stringify(sample, null, 4)}</TextArea>
                </Row>
            </Wrapper>
        </Fragment>
    );
};

const Panel = ({ api, active, channel }) => {
    const [schema, setSchema] = useState(null)
    const [sample, setSample] = useState(null)
    let stopListeningOnStory = null

    const onInit = async data => {
        if (!data) return setSchema(null);
        console.log('data', data)

        if (data.schema) {
            const parsedSchema = await RefParser.dereference(data.schema)
            setSchema(parsedSchema)
        }

        if (data.sample) {
            setSample(data.sample);
        }

    }

    useEffect(() => {
        channel.on(ADDON_INIT, onInit)
        stopListeningOnStory = api.onStory(() => onInit({}));
        return () => {
            if (stopListeningOnStory) {
                stopListeningOnStory()
            }
            channel.removeListener(ADDON_INIT, onInit)
        }
        // Attach style, not pretty

    }, []);

    if (!schema || !sample || !active) {
        // do not render when tab is not active
        return <NotesPanel>No Sample & Schema detected</NotesPanel>
    }

    return (
        <NotesPanel>
            <style dangerouslySetInnerHTML={{ __html: style }} />
            <SchemaView schema={schema} sample={sample} />
        </NotesPanel>
    );
};

// https://storybook.js.org/addons/api/#addonapiregister
addons.register(ADDON_ID, api => {
    // Also need to set a unique name to the panel.
    addons.addPanel(PANEL_ID, {
        title: PANEL_NAME,
        render: ({ active }) => (
            <Panel channel={addons.getChannel()} api={api} active={active} />
        ),
    })
})
