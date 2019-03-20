import addons, { makeDecorator } from '@storybook/addons'
import { ADDON_INIT } from './shared';

export const withSchema = (data = {}) => makeDecorator({
    name: 'withSchema',
    parameterName: 'schema',
    skipIfNoParametersOrOptions: false,
    wrapper: (storyFn, context, { parameters }) => {
        addons.getChannel().emit(ADDON_INIT, {
            parameters,
            schema: data.schema,
            sample: data.sample
        });

        return storyFn(context);
    }
});
