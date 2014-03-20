function Controller() {
    function setupNfc() {
        nfcAdapter = nfc.createNfcAdapter({
            onTagDiscovered: handleTagDiscovery
        });
        if (!nfcAdapter.isEnabled()) {
            $.warning.text = "NFC is not enabled on this device";
            return;
        }
    }
    function handleTagDiscovery(e) {
        alert("Tag discovered: " + JSON.stringify(e.tag));
    }
    function onClear() {
        $.records.setData([]);
        $.instructions.zIndex = 1e4;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        exitOnClose: false,
        apiName: "Ti.UI.Window",
        classes: [ "container" ],
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.warning = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: "40dp",
        color: "#000",
        font: {
            fontSize: "20dp",
            fontFamily: "DroidSans",
            fontWeight: "bold"
        },
        top: 0,
        left: 0,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        apiName: "Ti.UI.Label",
        id: "warning",
        classes: [ "name" ]
    });
    $.__views.index.add($.__views.warning);
    $.__views.instructions = Ti.UI.createLabel({
        width: Ti.UI.FILL,
        height: Ti.UI.SIZE,
        color: "#000",
        font: {
            fontSize: "36dp",
            fontFamily: "DroidSans"
        },
        top: "48dp",
        left: "20dp",
        right: "20dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        text: "Place your Felica cards against the back of the tablet.",
        apiName: "Ti.UI.Label",
        id: "instructions",
        classes: [ "instructions" ]
    });
    $.__views.index.add($.__views.instructions);
    $.__views.records = Ti.UI.createTableView({
        top: "48dp",
        bottom: "48dp",
        left: "4dp",
        right: "4dp",
        backgroundColor: "white",
        font: {
            fontSize: "20dp",
            fontFamily: "DroidSans"
        },
        apiName: "Ti.UI.TableView",
        id: "records",
        classes: []
    });
    $.__views.index.add($.__views.records);
    $.__views.__alloyId0 = Ti.UI.createButton({
        left: 0,
        right: 0,
        bottom: 0,
        height: "40dp",
        title: "Clear",
        apiName: "Ti.UI.Button",
        id: "__alloyId0",
        classes: []
    });
    $.__views.index.add($.__views.__alloyId0);
    onClear ? $.__views.__alloyId0.addEventListener("click", onClear) : __defers["$.__views.__alloyId0!click!onClear"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var nfc = null;
    var nfcAdapter = null;
    $.index.addEventListener("open", function() {
        nfc = require("ti.nfc");
        if (nfc) setupNfc(); else {
            $.warning.text = "nfc module is not loaded on this device";
            alert($.warning.text);
        }
    });
    onClear({});
    $.index.open();
    __defers["$.__views.__alloyId0!click!onClear"] && $.__views.__alloyId0.addEventListener("click", onClear);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;