const config = require('../constants/config-options.js');
const fs = require('fs');

// const currentConfig = fs.readFileSync('');
const currentConfig = {
    [config.ADMIN_FILE_NAME]: 'hi',
    [config.BUILD_CREATE]: 'bye',
    [config.CTRL_PANEL_ENABLED]: 'sup'
}
// do some stuff
// now it's an object with the properties I need


class ServerConfig {
    constructor() {
        const values = Object.values(config);
        for (let i = 0; i < values.length; i += 1) {
            this[values[i]] = currentConfig[values[i]]
        };
    }

    updateConfigValues(serverConfigKey, val) {
        this[serverConfigKey] = val;
    }
}

module.exports = ServerConfig;