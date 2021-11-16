import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';
import * as path from 'path';
import cors from 'cors';
import express, { Request, Response } from 'express';
import db from './config/database';
import productrouter from './routes/doctor'

const formidable = require('express-formidable');
class Main {
    public app: express.Application;
    constructor() {
        this.app = express();
        this.config();
        this.mongoConfig();
        this.routerConfig();
        this.logs();
        this.loadStaticFilesConfig();
    }
    private config(): void {
        this.app.use(express.json()) // for parsing application/json
        this.app.use(express.urlencoded({ extended: true }))
    // this.app .use(formidable())
        this.app.use(cors());
        // for parsing multipart/form-data
        this.app.use(express.static('public'));
        // this.app.use(formidable());
        this.app.use((req: Request, res: Response, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
            res.header("Access-Control-Allow-Headers", 'Origin, X-Requested-With, Content-Type,Authorization');
            next();
        });
    }


    private logs(): void {
        this.app.use(morgan('dev'));
    }
    private mongoConfig(): void {

        mongoose.connect(db.dbProd, db.parse);

        mongoose.connection.on('connected', () => {
            console.log('connected to database');
        });
        mongoose.connection.on('error', (err: any) => {
            console.log('mongoErr', err);
        })
    }
    private routerConfig(): void {
        
        this.app.use('/doctor', productrouter);
    }
    private loadStaticFilesConfig(): void {
        this.app.use(express.static(path.join(__dirname, 'public')));
    }
}
export default new Main().app;