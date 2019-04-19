"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const react_1 = __importDefault(require("react"));
const server_1 = require("react-dom/server");
const server_2 = require("@loadable/server");
const app = express_1.default();
app.use(express_1.default.static(path_1.default.join(__dirname, '../../public')));
if (process.env.NODE_ENV !== 'production') {
    /* eslint-disable global-require, import/no-extraneous-dependencies */
    const { default: webpackConfig } = require('../../webpack.config.babel');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpack = require('webpack');
    /* eslint-enable global-require, import/no-extraneous-dependencies */
    const compiler = webpack(webpackConfig);
    app.use(webpackDevMiddleware(compiler, {
        logLevel: 'silent',
        publicPath: '/dist/web',
        writeToDisk(filePath) {
            return /dist\/node\//.test(filePath) || /loadable-stats/.test(filePath);
        },
    }));
}
const nodeStats = path_1.default.resolve(__dirname, '../../public/dist/node/loadable-stats.json');
const webStats = path_1.default.resolve(__dirname, '../../public/dist/web/loadable-stats.json');
app.get('*', (req, res) => {
    const nodeExtractor = new server_2.ChunkExtractor({ statsFile: nodeStats });
    const { default: App } = nodeExtractor.requireEntrypoint();
    const webExtractor = new server_2.ChunkExtractor({ statsFile: webStats });
    const jsx = webExtractor.collectChunks(react_1.default.createElement(App, null));
    const html = server_1.renderToString(jsx);
    res.set('content-type', 'text/html');
    res.send(`<!DOCTYPE html>
<html>
<head>
${webExtractor.getLinkTags()}
${webExtractor.getStyleTags()}
</head>
<body>
  <div id="main">${html}</div>
  ${webExtractor.getScriptTags()}
</body>
</html>`);
});
// eslint-disable-next-line no-console
app.listen(9000, () => console.log('Server started http://localhost:9000'));
//# sourceMappingURL=main.js.map