"use strict";

var _react = _interopRequireWildcard(require("react"));

var _addons = _interopRequireDefault(require("@storybook/addons"));

var _shared = require("./shared");

var _theming = require("@storybook/theming");

var _jsonSchemaRefParser = _interopRequireDefault(require("json-schema-ref-parser"));

var _jsonSchemaViewJs = _interopRequireDefault(require("json-schema-view-js"));

var _jsonFormatterJs = _interopRequireDefault(require("json-formatter-js"));

var _coreEvents = require("@storybook/core-events");

var _esm = require("flatted/esm");

var _style = require("./style");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var NotesPanel = _theming.styled.div({
  padding: 10,
  overflow: 'auto',
  height: '100%'
});

var TextArea = _theming.styled.textarea({
  width: '100%',
  height: '100%'
});

var Button = _theming.styled.button({
  marginBottom: '10px'
});

var Row = _theming.styled.div({
  width: '50%',
  padding: '10px'
});

var Wrapper = _theming.styled.div({
  display: 'flex',
  height: '100%'
});

var SchemaView = function SchemaView(_ref) {
  var schema = _ref.schema,
      sample = _ref.sample;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showRow = _useState2[0],
      setshowRow = _useState2[1];

  var schemaEl = (0, _react.useRef)(null);
  var sampleEl = (0, _react.useRef)(null);

  var toggleRaw = function toggleRaw(e) {
    e.preventDefault();
    setshowRow(!showRow);
  };

  (0, _react.useEffect)(function () {
    var schemaView = new _jsonSchemaViewJs.default(schema, 2);
    schemaEl.current.appendChild(schemaView.render());
    var sampleView = new _jsonFormatterJs.default(sample, 2, {
      theme: 'dark'
    });
    sampleEl.current.appendChild(sampleView.render());
  }, []);
  return _react.default.createElement(_react.Fragment, null, _react.default.createElement(Button, {
    type: "button",
    onClick: toggleRaw
  }, "Toggle raw"), _react.default.createElement(Wrapper, null, _react.default.createElement(Row, null, _react.default.createElement("div", {
    style: {
      display: showRow ? 'none' : 'block'
    },
    ref: schemaEl
  }), _react.default.createElement(TextArea, {
    style: {
      display: showRow ? 'block' : 'none'
    }
  }, (0, _esm.stringify)(schema, null, 4))), _react.default.createElement(Row, {
    style: {
      background: '#222'
    }
  }, _react.default.createElement("div", {
    style: {
      display: showRow ? 'none' : 'block'
    },
    ref: sampleEl
  }), _react.default.createElement(TextArea, {
    style: {
      display: showRow ? 'block' : 'none'
    }
  }, (0, _esm.stringify)(sample, null, 4)))));
};

var Panel = function Panel(_ref2) {
  var api = _ref2.api,
      active = _ref2.active,
      channel = _ref2.channel;

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      schema = _useState4[0],
      setSchema = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      sample = _useState6[0],
      setSample = _useState6[1];

  var onChange =
  /*#__PURE__*/
  function () {
    var _ref3 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(id) {
      var storySchema, storySample, parsedSchema;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              storySchema = api.getParameters(id, 'schema');
              storySample = api.getParameters(id, 'sample');

              if (!(!storySchema || !storySample)) {
                _context.next = 6;
                break;
              }

              setSchema(null);
              setSample(null);
              return _context.abrupt("return");

            case 6:
              _context.next = 8;
              return _jsonSchemaRefParser.default.dereference(storySchema, {
                dereference: {
                  circular: 'ignore'
                }
              });

            case 8:
              parsedSchema = _context.sent;
              setSchema(parsedSchema);
              setSample(storySample);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onChange(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    channel.on(_coreEvents.STORY_RENDERED, onChange);
    return function () {
      channel.removeListener(_coreEvents.STORY_RENDERED, onChange);
    };
  }, []);

  if (!schema || !sample || !active) {
    // do not render when tab is not active
    return _react.default.createElement(NotesPanel, null, "No Sample & Schema detected");
  }

  return _react.default.createElement(NotesPanel, null, _react.default.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: _style.style
    }
  }), _react.default.createElement(SchemaView, {
    schema: schema,
    sample: sample
  }));
};

_addons.default.register(_shared.ADDON_ID, function (api) {
  _addons.default.addPanel(_shared.PANEL_ID, {
    title: _shared.PANEL_NAME,
    render: function render(_ref4) {
      var active = _ref4.active;
      return _react.default.createElement(Panel, {
        channel: _addons.default.getChannel(),
        api: api,
        active: active
      });
    }
  });
});