"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        var _a, _b, _c, _d, _e;
        (_a = this.app) === null || _a === void 0 ? void 0 : _a.set("port", process.env.PORT || 3000);
        (_b = this.app) === null || _b === void 0 ? void 0 : _b.use((0, morgan_1.default)('dev'));
        (_c = this.app) === null || _c === void 0 ? void 0 : _c.use((0, cors_1.default)());
        (_d = this.app) === null || _d === void 0 ? void 0 : _d.use(express_1.default.json());
        (_e = this.app) === null || _e === void 0 ? void 0 : _e.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        var _a, _b;
        (_a = this.app) === null || _a === void 0 ? void 0 : _a.use("/", indexRoutes_1.default);
        (_b = this.app) === null || _b === void 0 ? void 0 : _b.use("/api/games", gamesRoutes_1.default);
    }
    start() {
        var _a;
        (_a = this.app) === null || _a === void 0 ? void 0 : _a.listen(this.app.get('port'), () => {
            var _a;
            console.log('Server on port', (_a = this.app) === null || _a === void 0 ? void 0 : _a.get('port'));
        });
    }
}
const server = new Server();
server.start();
