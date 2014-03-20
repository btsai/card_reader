function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "rowMessage";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.rowMessage = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        layout: "vertical",
        className: "rowMessage",
        apiName: "Ti.UI.TableViewRow",
        id: "rowMessage",
        classes: []
    });
    $.__views.rowMessage && $.addTopLevelView($.__views.rowMessage);
    $.__views.__alloyId1 = Ti.UI.createView({
        layout: "horizontal",
        apiName: "Ti.UI.View",
        classes: [ "row" ],
        id: "__alloyId1"
    });
    $.__views.rowMessage.add($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: "20dp",
            fontFamily: "DroidSans",
            fontWeight: "bold"
        },
        apiName: "Ti.UI.Label",
        classes: [ "name" ],
        text: "Action: ",
        id: "__alloyId2"
    });
    $.__views.__alloyId1.add($.__views.__alloyId2);
    $.__views.action = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: "20dp",
            fontFamily: "DroidSans"
        },
        apiName: "Ti.UI.Label",
        id: "action",
        classes: []
    });
    $.__views.__alloyId1.add($.__views.action);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.action.text = args.action.replace("android.nfc.action.", "");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;