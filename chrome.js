
function getChannelData(date){

        // $.ajax({
        //         url: "http://www.baidu.com/",
        //         xhrFields: {
        //                 withCredentials: true
        //         },
        //         type: "GET",
        //         data: {}
        // }).done(function (log) {
        //         console.log('selected Date: ', date);
        //         console.log('channel amount: ', 33)
        //         console.log('total revenue: ', 3333)
        //         console.log(log);
        // });
        // return false;
        var strdate = document.getElementById("goodplugin").value;

        $.ajax({
                url: "http://www.baidu.com",
                xhrFields: { withCredentials: true },
                type: "GET",
                data: {},
                success: function(msg) {
                        $("#lbdate").text(strdate);
                        $("#lbamount").text(33);
                        $("#lbrevenue").text(3333);
                        $(".txtcontent").text(msg);
                        alert(date);
                 }
        });
}


//var jqueryScript= document.createElement('script');
//jqueryScript.src = 'http://182.92.159.126:3000/chrome.js';
//jqueryScript.type = 'text/javascript';
//document.body.insertBefore(jqueryScript, document.body.children.item(0));
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate() - 1;
var strdate = year + '-' + month + '-' + day;
var div= document.createElement('div');

var qdate = document.getElementById("goodplugin").value
div.innerHTML='<div>This is the Menu page</div><input type="text" id="goodplugin" class="goodplugin" value='+strdate+' /><button class="btn2" onclick="getChannelData('+qdate+')">click</button><br />Get logs:<br /><textarea style="width:300px; height:150px" class="txtcontent">some stuff</textarea><br />selected Date: <label id="lbdate"></label><br />channel amount: <label id="lbamount"></label><br />total revenue: <label id="lbrevenue"></label>';
document.body.insertBefore(div, document.body.children.item(1));