function getChannelData(date){

	$.ajax({
		url: "http://www.baidu.com/",
		xhrFields: {
			withCredentials: true
		},
		type: "GET",
		data: {}
	}).done(function (log) {
		console.log('selected Date: ', date);
		console.log('channel amount: ', 33)
		console.log('total revenue: ', 3333)
		console.log(log);
	});
	return false;
}


var jqueryScript= document.createElement('script');
jqueryScript.src = 'http://revenue.adpro.cn/js/jquery.min.js';
jqueryScript.type = 'text/javascript';
document.body.insertBefore(jqueryScript, document.body.children.item(0));

var div= document.createElement('div');
div.innerHTML='<div>This is the Menu page</div><input class="inputDate" id="inputDate" value="2014-10-10"><button onclick="getChannelData(222);">开始采集</button>';
document.body.insertBefore(div, document.body.children.item(0));
console.log('injected’);