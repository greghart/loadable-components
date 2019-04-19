"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = require("react-dom");
// eslint-disable-next-line import/no-extraneous-dependencies
const component_1 = require("@loadable/component");
const App_1 = __importDefault(require("./App"));
component_1.loadableReady(() => {
    const root = document.getElementById('main');
    react_dom_1.hydrate(react_1.default.createElement(App_1.default, null), root);
});
//# sourceMappingURL=main-web.js.map