"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withSchema = void 0;

var _addons = _interopRequireWildcard(require("@storybook/addons"));

var _shared = require("./shared");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var withSchema = function withSchema() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _addons.makeDecorator)({
    name: 'withSchema',
    parameterName: 'schema',
    skipIfNoParametersOrOptions: false,
    wrapper: function wrapper(storyFn, context, _ref) {
      var parameters = _ref.parameters;

      _addons.default.getChannel().emit(_shared.ADDON_INIT, {
        parameters: parameters,
        schema: data.schema,
        sample: data.sample
      });

      return storyFn(context);
    }
  });
};

exports.withSchema = withSchema;