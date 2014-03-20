/* 
 * NFC Tag Viewer Example Application
 * 
 * This application demonstrates how to use the NFC module to enable
 * NFC message dispatching, even when the application is not running.
 *
 * The setup for this module uses intent-filters in the tiapp.xml file to specify which
 * types of NFC messages the application wants to receive. By using intent-filters in
 * the tiapp.xml file, the application will be automatically started if a matching
 * NFC message is dispatched. 
 * 
 * Before running this application, add code similar to the following to your application's
 * tiapp.xml file. Note the following:
 *   - The activity name for your application may be different
 *   - android:launchMode="singleTask" is needed so that new intents that result from
 *     NFC message dispatching do not start a new activity in your application
 *   - The NFC specific intent filters can be modified to your application needs.
 * 
 *  <android xmlns:android="http://schemas.android.com/apk/res/android">
 *    <manifest>
 *      <application>
 *        <activity android:name=".TagviewerActivity"
 *            android:label="TagViewer" android:theme="@style/Theme.Titanium"
 *            android:configChanges="keyboardHidden|orientation"
 *            android:launchMode="singleTask">
 *          <intent-filter>
 *            <action android:name="android.intent.action.MAIN" />
 *            <category android:name="android.intent.category.LAUNCHER" />
 *          </intent-filter>
 *          <intent-filter>
 *            <action android:name="android.nfc.action.NDEF_DISCOVERED"/>
 *            <category android:name="android.intent.category.DEFAULT"/>
 *            <data android:mimeType="text/plain"/>
 *          </intent-filter>
 *          <intent-filter>
 *            <action android:name="android.nfc.action.NDEF_DISCOVERED"/>
 *            <category android:name="android.intent.category.DEFAULT"/>
 *            <data android:scheme="http"/>
 *          </intent-filter>
 *        </activity>
 *      </application>
 *    </manifest>
 *  </android>
 */

var nfc = null;
var nfcAdapter = null;
var dispatchFilter = null;

$.index.addEventListener('open', function(e) {
	// Must wait until the activity has been opened before setting up NFC
  nfc = require('ti.nfc');
  if (nfc){
  	setupNfc();
  }
	else {
    $.warning.text = 'nfc module is not loaded on this device';
    alert($.warning.text);
	}
});

// Force the instructions into the data area
onClear({});

$.index.open();

function setupNfc() {
	// Create the NFC adapter to be associated with this activity. 
	// There should only be ONE adapter created per activity.
	nfcAdapter = nfc.createNfcAdapter({
		onTagDiscovered: handleTagDiscovery,
	});
	
	
	// It's possible that the device does not support NFC. Check it here
	// before we go any further.
	if (!nfcAdapter.isEnabled()) {
	  $.warning.text = 'NFC is not enabled on this device';
		return;
	}
	// else {
	  // alert('NFC is enabled on this device.');
	// }
	
	// // All tag scans are received by the activity as a new intent. Each
	// // scan intent needs to be passed to the nfc adapter for processing.
	var act = Ti.Android.currentActivity;
	act.addEventListener('newintent', function(e) {
	  // alert('new intent.');
		nfcAdapter.onNewIntent(e.intent);
	});

  // // To enable NFC dispatching only while the application is in the foreground,
  // // the application must signal the module whenever the application state changes.
  // act.addEventListener('resume', function(e) {
    // nfcAdapter.enableForegroundDispatch(dispatchFilter);
  // });
  // act.addEventListener('pause', function(e) {
    // nfcAdapter.disableForegroundDispatch();
  // });
// 
  // // This application is only interested in receiving NFC messages while
  // // in the foreground. So the dispatch filter must be defined to identify
  // // what types of NFC messages to receive.
  // dispatchFilter = nfc.createNfcForegroundDispatchFilter({
    // intentFilters: [
      // // The discovery could be restricted to only text with
      // // { action: nfc.ACTION_NDEF_DISCOVERED, mimeType: 'text/plain' },
      // { action: nfc.ACTION_NDEF_DISCOVERED, mimeType: '*/*' },
      // // The discovery could be restricted by host with
      // //{ action: nfc.ACTION_NDEF_DISCOVERED, scheme: 'http', host: 'www.appcelerator.com' }
      // { action: nfc.ACTION_NDEF_DISCOVERED, scheme: 'http' }
    // ],
    // // The techList can be specified to filter TECH_DISCOVERED messages by technology
    // techLists: [
      // [ "android.nfc.tech.NfcF" ],
      // [ "android.nfc.tech.Ndef" ],
      // [ "android.nfc.tech.MifareClassic" ],
      // [ "android.nfc.tech.NfcA" ]
    // ]
  // });

}

function handleTagDiscovery(e){
  // alert('Tag discovered:: ' + data.messages[0].records[0].getPayload());
  alert('Tag discovered: ' + JSON.stringify(e.tag));

  // // Add rows for the message, tag, and each of the records
  // var data = [];
  // data.push(Alloy.createController('rowMessage', { action: e.action }).getView());
  // data.push(Alloy.createController('rowTag', { tag: e.tag }).getView());
  // if (e.messages) {
    // var message = e.messages[0];
    // if (message.records) {
      // var i, len;
      // for (i=0, len=message.records.length; i<len; i++) {
        // data.push(Alloy.createController('rowRecord', { record: message.records[i] }).getView());
      // }
    // }
  // }
  // // $.instructions.zIndex = -10000;
  // $.records.setData(data);
}

function onClear(e) {
	$.records.setData([]);
	$.instructions.zIndex = 10000;
}


