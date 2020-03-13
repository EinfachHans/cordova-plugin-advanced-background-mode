var plugin = function () {
  return cordova.plugins.backgroundMode;
};
var BackgroundMode = /** @class */ (function () {
  function BackgroundMode() {
  }

  BackgroundMode.enable = function () {
    var plu = plugin();
    return plu.enable.apply(plu, arguments);
  };

  BackgroundMode.disable = function () {
    var plu = plugin();
    return plu.disable.apply(plu, arguments);
  };

  BackgroundMode.setEnabled = function (enable) {
    var plu = plugin();
    return plu.setEnabled.apply(plu, arguments);
  };

  BackgroundMode.getDefaults = function () {
    var plu = plugin();
    return plu.getDefaults.apply(plu, arguments);
  };

  BackgroundMode.getSettings = function () {
    var plu = plugin();
    return plu.getSettings.apply(plu, arguments);
  };

  BackgroundMode.setDefaults = function (overrides) {
    var plu = plugin();
    return plu.setDefaults.apply(plu, arguments);
  };

  BackgroundMode.configure = function (options) {
    var plu = plugin();
    return plu.configure.apply(plu, arguments);
  };

  BackgroundMode.disableWebViewOptimizations = function () {
    var plu = plugin();
    return plu.disableWebViewOptimizations.apply(plu, arguments);
  };

  BackgroundMode.disableBatteryOptimizations = function () {
    var plu = plugin();
    return plu.disableBatteryOptimizations.apply(plu, arguments);
  };

  BackgroundMode.openAppStartSettings = function (options) {
    var plu = plugin();
    return plu.openAppStartSettings.apply(plu, arguments);
  };

  BackgroundMode.moveToBackground = function () {
    var plu = plugin();
    return plu.moveToBackground.apply(plu, arguments);
  };

  BackgroundMode.moveToForeground = function () {
    var plu = plugin();
    return plu.moveToForeground.apply(plu, arguments);
  };

  BackgroundMode.excludeFromTaskList = function () {
    var plu = plugin();
    return plu.excludeFromTaskList.apply(plu, arguments);
  };

  BackgroundMode.includeToTaskList = function () {
    var plu = plugin();
    return plu.includeToTaskList.apply(plu, arguments);
  };

  BackgroundMode.overrideBackButton = function () {
    var plu = plugin();
    return plu.overrideBackButton.apply(plu, arguments);
  };

  BackgroundMode.isScreenOff = function (fn) {
    var plu = plugin();
    return plu.isScreenOff.apply(plu, arguments);
  };

  BackgroundMode.wakeUp = function () {
    var plu = plugin();
    return plu.wakeUp.apply(plu, arguments);
  };

  BackgroundMode.unlock = function () {
    var plu = plugin();
    return plu.unlock.apply(plu, arguments);
  };

  BackgroundMode.isEnabled = function () {
    var plu = plugin();
    return plu.isEnabled.apply(plu, arguments);
  };

  BackgroundMode.isActive = function () {
    var plu = plugin();
    return plu.isActive.apply(plu, arguments);
  };

  BackgroundMode.fireEvent = function (event) {
    var plu = plugin();
    return plu.fireEvent.apply(plu, arguments);
  };

  BackgroundMode.on = function (event, callback, scope) {
    var plu = plugin();
    return plu.on.apply(plu, arguments);
  };

  BackgroundMode.un = function (event, callback) {
    var plu = plugin();
    return plu.un.apply(plu, arguments);
  };
  
  return BackgroundMode;
}());
export default BackgroundMode;
