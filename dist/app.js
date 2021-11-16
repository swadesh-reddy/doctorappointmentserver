"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const morgan_1 = __importDefault(require("morgan"));
const path = __importStar(require("path"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const doctor_1 = __importDefault(require("./routes/doctor"));
const formidable = require('express-formidable');
class Main {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.mongoConfig();
        this.routerConfig();
        this.logs();
        this.loadStaticFilesConfig();
    }
    config() {
        this.app.use(express_1.default.json()); // for parsing application/json
        this.app.use(express_1.default.urlencoded({ extended: true }));
        // this.app .use(formidable())
        this.app.use((0, cors_1.default)());
        // for parsing multipart/form-data
        this.app.use(express_1.default.static('public'));
        // this.app.use(formidable());
        this.app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
            res.header("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type,Authorization');
            next();
        });
    }
    logs() {
        this.app.use((0, morgan_1.default)('dev'));
    }
    mongoConfig() {
        mongoose_1.default.connect(database_1.default.dbProd, database_1.default.parse);
        mongoose_1.default.connection.on('connected', () => {
            console.log('connected to database');
        });
        mongoose_1.default.connection.on('error', (err) => {
            console.log('mongoErr', err);
        });
    }
    routerConfig() {
        this.app.use('/doctor', doctor_1.default);
    }
    loadStaticFilesConfig() {
        this.app.use(express_1.default.static(path.join(__dirname, 'public')));
    }
}
exports.default = new Main().app;
