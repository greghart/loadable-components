"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// eslint-disable-next-line import/no-extraneous-dependencies
const component_1 = __importDefault(require("@loadable/component"));
require("./main.css");
const A = component_1.default(() => Promise.resolve().then(() => __importStar(require('./letters/A'))));
const B = component_1.default(() => Promise.resolve().then(() => __importStar(require('./letters/B'))));
const C = component_1.default(() => Promise.resolve().then(() => __importStar(require(/* webpackPreload: true */ './letters/C'))));
const D = component_1.default(() => Promise.resolve().then(() => __importStar(require(/* webpackPrefetch: true */ './letters/D'))));
const E = component_1.default(() => Promise.resolve().then(() => __importStar(require('./letters/E'))), { ssr: false });
// const X = loadable(props => import(`./letters/${props.letter}`))
// We keep some references to prevent uglify remove
// A.C = C
// A.D = D
const Moment = component_1.default.lib(() => Promise.resolve().then(() => __importStar(require('moment'))));
const App = () => (react_1.default.createElement("div", null,
    react_1.default.createElement(A, null),
    react_1.default.createElement("br", null),
    react_1.default.createElement(B, null),
    react_1.default.createElement("br", null),
    react_1.default.createElement("br", null),
    react_1.default.createElement(E, null),
    react_1.default.createElement(C, null),
    react_1.default.createElement(D, null),
    react_1.default.createElement("br", null),
    react_1.default.createElement(Moment, null, moment => react_1.default.createElement("div", null, "moment"))));
exports.default = App;
//# sourceMappingURL=App.js.map