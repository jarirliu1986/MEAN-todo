/**
 * Created by Jarir on 2016.10.3.
 */
var configValues = require('./config');

module.exports = {
    getDbConnectionString: function () {
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd +
                '@ds049436.mlab.com:49436/nodetodosample';
    }
}
