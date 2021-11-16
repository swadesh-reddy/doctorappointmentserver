import 'dotenv/config';
import app from './app';
import * as http from 'http';
// import * as https from 'https';

http.createServer(app).listen(4000, () => { console.log('listening on 4000') });
// https.createServer(options, app).listen(443, () => { console.log('listening on 443 ') });
