function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "rowRecord";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.rowRecord = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        layout: "vertical",
        className: "rowRecord",
        apiName: "Ti.UI.TableViewRow",
        id: "rowRecord",
        classes: []
    });
    $.__views.rowRecord && $.addTopLevelView($.__views.rowRecord);
    $.__views.__alloyId3 = Ti.UI.createView({
        layout: "horizontal",
        apiName: "Ti.UI.View",
        classes: [ "row" ],
        id: "__alloyId3"
    });
    $.__views.rowRecord.add($.__views.__alloyId3);
    $.__views.__alloyId4 = Ti.UI.createLabel({
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
        text: "Record Type: ",
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    $.__views.recordType = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: "20dp",
            fontFamily: "DroidSans"
        },
        apiName: "Ti.UI.Label",
        id: "recordType",
        classes: []
    });
    $.__views.__alloyId3.add($.__views.recordType);
    $.__views.tagData = Ti.UI.createTextArea({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        backgroundColor: "#f0f0f0",
        borderColor: "gray",
        borderWidth: 0,
        color: "black",
        textAlign: "left",
        focusable: false,
        editable: false,
        font: {
            fontSize: "16dp",
            fontFamily: "DroidSans"
        },
        apiName: "Ti.UI.TextArea",
        id: "tagData",
        classes: []
    });
    $.__views.rowRecord.add($.__views.tagData);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.recordType.text = args.record.recordType;
    $.tagData.value = JSON.stringify(args.record, function(key, value) {
        return "source" === key ? void 0 : value;
    }, 2);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;