"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// We simulate that "moment" is called in "A" and "B"
const react_1 = __importStar(require("react"));
const moment_1 = __importDefault(require("moment"));
require("./A.css");
class A extends react_1.Component {
    moment() {
        return moment_1.default;
    }
    render() {
        return (react_1.default.createElement("div", null, "A"));
    }
}
// We keep a reference to prevent uglify remove
exports.default = A;
//# sourceMappingURL=A.js.map