var nfc = null;
var nfcAdapter = null;
var dispatchFilter = null;

$.index.addEventListener('open', function(e) {
  nfc = require('ti.nfc');
  if (nfc){
  	setupNfc();
  }
	else {
    $.warning.text = 'nfc module is not loaded on this device';
    alert($.warning.text);
	}
});

$.index.open();

function setupNfc() {
	nfcAdapter = nfc.createNfcAdapter({
		onTagDiscovered: handleTagDiscovery,
	});
	
	if (!nfcAdapter.isEnabled()) {
	  $.warning.text = 'NFC is not enabled on this device';
		return;
	}

	var act = Ti.Android.currentActivity;
	act.addEventListener('newintent', function(e) {
		nfcAdapter.onNewIntent(e.intent);
	});
}

function handleTagDiscovery(e){
  alert('Tag discovered: ' + JSON.stringify(e.tag));
}
