function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "rowTag";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.rowTag = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        layout: "vertical",
        className: "rowTag",
        apiName: "Ti.UI.TableViewRow",
        classes: [ "container" ],
        id: "rowTag"
    });
    $.__views.rowTag && $.addTopLevelView($.__views.rowTag);
    $.__views.__alloyId5 = Ti.UI.createView({
        layout: "horizontal",
        apiName: "Ti.UI.View",
        classes: [ "row" ],
        id: "__alloyId5"
    });
    $.__views.rowTag.add($.__views.__alloyId5);
    $.__views.__alloyId6 = Ti.UI.createLabel({
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
        text: "Tag ID: ",
        id: "__alloyId6"
    });
    $.__views.__alloyId5.add($.__views.__alloyId6);
    $.__views.tagId = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: "20dp",
            fontFamily: "DroidSans"
        },
        apiName: "Ti.UI.Label",
        id: "tagId",
        classes: []
    });
    $.__views.__alloyId5.add($.__views.tagId);
    $.__views.__alloyId7 = Ti.UI.createView({
        layout: "horizontal",
        apiName: "Ti.UI.View",
        classes: [ "row" ],
        id: "__alloyId7"
    });
    $.__views.rowTag.add($.__views.__alloyId7);
    $.__views.techListLabel = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: "20dp",
            fontFamily: "DroidSans",
            fontWeight: "bold"
        },
        top: 0,
        apiName: "Ti.UI.Label",
        id: "techListLabel",
        classes: [ "name" ],
        text: "Tech List: "
    });
    $.__views.__alloyId7.add($.__views.techListLabel);
    $.__views.techList = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: "20dp",
            fontFamily: "DroidSans"
        },
        apiName: "Ti.UI.Label",
        id: "techList",
        classes: []
    });
    $.__views.__alloyId7.add($.__views.techList);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.tagId.text = args.tag.id;
    $.techList.text = args.tag.techList.join("\n").replace(/android.nfc.tech./g, "");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;