document.addEventListener('DOMContentLoaded', function () {
/*        var showdate = moment().format('YYYY-MM-DD');
        var nowdays = new Date();

        $('#inputDate').DatePicker({
          mode: 'single',
          position: 'right',
          onBeforeShow: function(el){
            if($('#inputDate').val())
              $('#inputDate').DatePickerSetDate($('#inputDate').val(), true);
          },
          onChange: function(date, el) {
            $(el).val((date.getMonth()+1)+'/'+date.getDate()+'/'+date.getFullYear());
            if($('#closeOnSelect input').attr('checked')) {
              $(el).DatePickerHide();
            }
          }
        });

        $('.btn1').click(function(){
                $('div').toggle(500);
        });
        $('.btn2').click(function(){
                var date = $('#simple-calendar').val();
                var dateStr = date.replace(/-/ig, '');
                $.ajax({
                        url: "http://www.baidu.com/",
                        xhrFields: {
                        withCredentials: true
                },
                type: "GET",
                data: {},
                success: function(msg) {
                                $("#lbdate").text(date);
                                $("#lbamount").text(33);
                                $("#lbrevenue").text(3333);
                                $(".txtcontent").text(msg);
                         }
                });
        });*/
        $(function() {

                var showdate = moment().format('YYYY-MM-DD');
                var nowdays = new Date();

                var dateConfig = {
                        showOn: 'both',               //二个都显示
                        buttonImage: 'calendar.gif',  //加载图片
                        buttonImageOnly: true,        //显示图片的地方有一个突出部分，这个就是隐藏那玩意的
                        changeFirstDay: false,        //这个参数干什么的呢，星期一是日历的第一个，不可以改动的
                        minDate: nowdays,             //显示最小时间是今天
                        dateFormat: 'yy-mm-dd',       //日期格式
                        yearRange: '-20:+20'          //前后20年，不过这根minDate是今天有冲突，自己去试吧。
                };

                $('#goodplugin').datepick(dateConfig);
                $('#goodplugin').val(showdate);

                $('.btn1').click(function(){
                        $('div').toggle(500);
                });
                $('.btn2').click(function(){
                        var date = $('#goodplugin').val();
                        // var dateStr = date.replace(/-/ig, '');
                        $.ajax({
                                url: "http://www.baidu.com",
                                xhrFields: { withCredentials: true },
                                type: "GET",
                                data: {},
                                success: function(msg) {
                                        $("#lbdate").text(date);
                                        $("#lbamount").text(33);
                                        $("#lbrevenue").text(3333);
                                        $(".txtcontent").text(msg);
                                 }
                        });
                });
        });
});
