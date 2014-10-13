
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


//var jqueryScript= document.createElement('script');
//jqueryScript.src = 'http://182.92.159.126:3000/chrome.js';
//jqueryScript.type = 'text/javascript';
//document.body.insertBefore(jqueryScript, document.body.children.item(0));

var div= document.createElement('div');
div.innerHTML='<div>This is the Menu page</div><input type="text" id="goodplugin" class="goodplugin" /><button class="btn2">ick</button><br />Get logs:<br /><textarea style="width:300px; height:150px" class="txtcontent">some stuff</textarea><br />selected Date: <label id="lbdate"></label><br />channel amount: <label id="lbamount"></label><br />total revenue: <label id="lbrevenue"></label>';
document.body.insertBefore(div, document.body.children.item(1));