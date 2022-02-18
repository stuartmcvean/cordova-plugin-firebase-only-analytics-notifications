module.exports = {
  getAppName: function (context) {
    var ConfigParser = require("cordova-lib").configparser;
    var config = new ConfigParser("config.xml");
    return config.name();
  }
};