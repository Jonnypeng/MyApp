var exit = document.getElementById("exit");
var yesExit = document.getElementById("yesExit");
var noExit = document.getElementById("noExit");
onload();
function onload(){
	document.addEventListener("deviceready",onDeviceReady,false);
		function onDeviceReady(){
			document.addEventListener("backbutton",onBackButton,false);
			document.addEventListener("menubutton",onMenuButton,false);
			document.addEventListener("volumedownbutton",onVolumeDownButton,false);
			document.addEventListener("volumeupbutton",onVolumeUpButton,false);
		};

		function onBackButton(){
			exit.style.display = "block";
			yesExit.onclick = function (){
				navigator.app.exitApp();
			};
			noExit.onclick = function (){
			exit.style.display = "none";
		};

		};

		function onMenuButton(){
			navigator.app.exitApp();
		};

		function onVolumeDownButton(){
			alert("这是音量下键所触发的信息");
		};

		function onVolumeUpButton(){
			alert("这是音量上键所触发的信息");
		};
};




