import _ from 'lodash';
import { join } from 'path';

let config = {
    viewDir: join(__dirname, '..', 'views'),
    staticDir: join(__dirname, '..', 'assets'),
    port: 8081,
    memoryFlag: false,
}

if (process.env.NODE_ENV === 'development') {
    let localConfig = {
        port: 8081
    }
    config = _.assign(config, localConfig)
}

if (process.env.NODE_ENV === 'production') {
    let localConfig = {
        port: 8082,
        memoryFlag: 'memory'
    }
    config = _.assign(config, localConfig)
}

export default config;
