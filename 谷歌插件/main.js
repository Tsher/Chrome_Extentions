document.addEventListener('DOMContentLoaded', function () {
 if (!document.body) return setTimeout(arguments.callee, 50);
 	var chrome = document.createElement('script');
	chrome.src = 'http://182.92.159.126:3000/chrome.js';
	chrome.type = 'text/javascript';
	document.body.insertBefore(chrome, document.body.children.item(0));
	
	var style = document.createElement('style');
	style.type = "text/css";
	style.innerText = ".left-promotion { z-index: 5; position: fixed;_position: absolute;cursor: pointer;width: 220px;height: 500px;overflow: hidden; left: -1.5px; top: 133px;} .left-promotion button { align: left }";
	document.body.insertBefore(style, chrome);


	var bootstrap = document.createElement('link');
	bootstrap.rel = 'stylesheet';
	bootstrap.type = 'text/css';
	bootstrap.href = 'http://182.92.159.126:3000/bootstrap.min.css';
	document.body.insertBefore(bootstrap, chrome);

	// var popup = document.createElement('script');
	// popup.src = 'http://182.92.159.126:3000/popup.js';
	// popup.type = 'text/javascript';
	// document.body.insertBefore(popup, chrome);

	/*var moment = document.createElement('script');
	moment.src = 'http://182.92.159.126:3000/moment.js';
	moment.type = 'text/javascript';
	document.body.insertBefore(moment, chrome);

	var datepick = document.createElement('script');
	datepick.src = 'http://182.92.159.126:3000/jquery.datepick.js';
	datepick.type = 'text/javascript';
	document.body.insertBefore(datepick, chrome);

	var jquery = document.createElement('script');
	jquery.src = 'http://182.92.159.126:3000/jquery-1.3.2.js';
	jquery.type = 'text/javascript';
	document.body.insertBefore(jquery, chrome);

	var smoothness = document.createElement('link');
	smoothness.rel = 'stylesheet';
	smoothness.type = 'text/css';
	smoothness.href = 'http://182.92.159.126:3000/smoothness.datepick.css';
	document.body.insertBefore(smoothness, chrome);*/



});

