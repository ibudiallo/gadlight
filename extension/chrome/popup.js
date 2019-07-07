/* global chrome */


var Dupe = {
	pageUrl:null,
	init:function(){
		var man = chrome.runtime.getManifest();
		var version = man.version;
		var vbox = document.getElementById("version-line");
		vbox.innerText = "Version: "+version;
		console.log(version);
	}
};

chrome.tabs.query({ active: true, currentWindow: true }, function(tabs){
	Dupe.pageUrl = tabs[0].url;
});

window.onload = function(){
	Dupe.init();
};