/* global chrome, document, window */

var Gad = {
	init: function(){
		var man = chrome.runtime.getManifest();
		var version = man.version;
		var vbox = document.getElementById("version-line");
		vbox.innerText = "Version: "+version;
	}
};

window.onload = function(){
	Gad.init();
};
