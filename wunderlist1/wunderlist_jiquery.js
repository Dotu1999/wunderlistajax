$(document).ready(function(){ 
    //Đóng mở cửa sổ create -list
    $('.create-list').click(function(){
        $('#addacout').css("display","block");
        $('#create-new-list').attr("style","display:block");
    });
    $('.Cancel').click(function(){
        $('#addacout').css("display","none");
        $('#create-new-list').attr("style","display:none");
    });
    //thêm create list mới vào danh sách create list
    var a1=$('#icon1');
    $('.Save').click(function(){
        if($('#textlist').val()!='')
        {
            
           $.ajax({
                    url : "../addlist.php",
                    type : "post",
                    dataType:"text",
                    data : {
                         name : $('#textlist').val(),
                    },
                    success : function (result){
                        alert(result);
                        var clr=$(a1).clone();
                        clr.children('.namefoder').html($('#textlist').val());
                        clr.children('.idlist').html(result);
                        $('#textlist').val('');
                        $('#listicon').append(clr);
                    }
                });
            //alert($('#textlist').val());
            // var clr=$(a1).clone();
            // clr.children('.namefoder').html($('#textlist').val());
            // $('#listicon').append(clr);
            $('#addacout').css("display","none");
            $('#create-new-list').attr("style","display:none");
        }
    });
    $('#textlist').keypress(function(event){

        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
                if($('#textlist').val()!='')
            {
                $.ajax({
                        url : "../addlist.php",
                        type : "post",
                        dataType:"text",
                        data : {
                             name : $('#textlist').val(),
                        },
                        success : function (result){
                            var clr=$(a1).clone();
                            clr.children('.namefoder').html($('#textlist').val());
                            clr.children('.idlist').html(result);
                            $('#textlist').val('');
                            $('#listicon').append(clr);
                        }
                    });
                $('#addacout').css("display","none");
                $('#create-new-list').attr("style","display:none");
            }
        }
    });
    //bấm vào ibox hoặc stared thì tiêu đề ở giữa thay đổi theo,click list-icon nào thì màu nền của nó chuyển sang màu xanh dương
    $('.inbox').click(function(){
        $('#inbox1').html($('.inbox').children('text').html());
        $('.starred').removeClass("cssrow");
        $('.list-icon').removeClass("cssrow");
        $(this).addClass("cssrow");
    });
    $('.starred').click(function(){
        $('#inbox1').html($('.starred').children('text').html());
        $('.inbox').removeClass("cssrow");
        $('.list-icon').removeClass("cssrow");
        $(this).addClass("cssrow");
    });
    //var listbody1=$('#listbody:first-child')
    $('#listicon').on('click','.list-icon',function(){
        $('#inbox1').html($(this).children('div').html());
        $('.list-icon').removeClass("cssrow");
        $(this).addClass("cssrow");
        $('.starred').removeClass("cssrow");
        $('.inbox').removeClass("cssrow");
        $('#idlist-betwen').html($(this).children('.idlist').html());
        $('#showcompleted').css('display','none');
        $('#addnote').val('');
        $('#remind').val('');
        $('#create_day').val('');
        //click để hiện task
        $.ajax({
                        url : "../showtask.php",
                        type : "post",
                        dataType:'json',
                        data : {
                             idlist :$('#idlist-betwen').html(),
                        },
                        success : function (result){
                            $('#listbody').html('');
                            $.each (result, function (key, item){
                                var clr=$(a).clone();
                                clr.removeClass("list-body11");
                                clr.addClass("list-body")
                                clr.children('span:eq(0)').html(item['name']);
                                clr.children('.idtask').html(item['id']);
                                clr.children('.create_day').html(item['create_day']);
                                clr.children('.remind_day').html(item['remind']);
                                clr.children('.conten_note').html(item['note']);
                                if(item['star']==1){
                                    $(clr).children('div').html($('#star-red').html());
                                }
                                if(item['star']==0){
                                    $(clr).children('div').html($('#star-white').html());
                                }
                                $('#listbody').append(clr);
                            });
                        }
                    });
    });
    //bấm list-toggle để thu nhỏ phần bên trái
    var i=1;
    $('.list-toggle').click(function(){
        if(i==1)
        {$('.left').css("width","40px");
        i=2;}
        else{
            $('.left').css("width","280px");
            i=1;
        }
    });
    // bấm vào user để hiện thị hoặc ẩn cửa sổ acout setting
    $('.user').click(function(event){
        event.stopPropagation();
        $('.list-avarta').toggle();
        $('#bell1').css("display","none");
        $('#masage').css("display",'none');
    })
    var c2=document.getElementsByClassName('.list-avatar');
    $('body').click(function(e){
        if(e.target!=c2){
           $('.list-avarta').css("display",'none');
       }
    })
    //
    var c3=document.getElementsByClassName('bell')[0];
    $('body').click(function(e){
       if(e.target!=c3){
           $('#bell1').css("display",'none');
       }
    })
    //
    var c4=document.getElementsByClassName('conversationsrtl-flip')[0];
    $('body').click(function(e){
       if(e.target!=c4){
           $('#masage').css("display",'none');
       }
    })
    //bấm vào acount seting để hiện cửa sổ acount
    $('.list-avarta').children('ul').children('li:eq(2)').click(function(){
        $('.Account-Setting').css("display","flex");
        $('#create-new-list').css("display","flex");
        $('.list-avarta').css("display","none");
        $('.inner-account').css("display","block");
    });
    //bấm vào acount để hiện acount trên cửa sổ
    $('#acountss').click(function(){
        $('.inner-account').css("display","block");
        $('.inner-general').css("display","none")
    })
    //bấm vào general để hiện inner-general
    $('#Generals').click(function(){
        $('.inner-account').css("display","none");
        $('.inner-general').css("display","flex")
    })
    //bấm vào done để tắt màn hình acount
    $('#done').click(function(){
        $('.Account-Setting').css("display","none");
        $('#create-new-list').css("display","none");
    })
    //bấm vào show để ẩn phần xóa
    $('.show').click(function(){
        //$('#showcompleted').toggle();
        $.ajax({
                        url : "../showtask0.php",
                        type : "post",
                        dataType:'json',
                        data : {
                             idlist :$('#idlist-betwen').html(),
                        },
                        success : function (result){
                            $('#showcompleted').html('');
                            $.each (result, function (key, item){
                                var clr=$(b).clone();
                                clr.children('span:eq(0)').html(item['name']);
                                clr.children('.idtask').html(item['id']);
                                clr.children('.create_day').html(item['create_day']);
                                clr.children('.remind_day').html(item['remind']);
                                clr.children('.conten_note').html(item['note']);
                                if(item['star']==1){
                                    $(clr).children('div').html($('#star-red').html());
                                }
                                if(item['star']==0){
                                    $(clr).children('div').html($('#star-white').html());
                                }
                                $('#showcompleted').append(clr);
                            });
                            $('#showcompleted').toggle();
                        }
                    });

    })
    //bấm enter để tạo 1 list-body mới
    var a=$('.list-body11');
    $('#inputadd').keypress(function(event){

        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
                if($('#inputadd').val()!='')
            {
                $.ajax({
                        url : "../addtask.php",
                        type : "post",
                        dataType:'json',
                        data : {
                             name :$('#inputadd').val(),
                             idlist:$('#idlist-betwen').html()
                        },
                        success : function (result){
                            //$.each (result, function (key, item){
                                var clr=$(a).clone();
                                clr.removeClass("list-body11");
                                clr.addClass("list-body");
                                clr.children('span').html(result['name']);
                                clr.children('.idtask').html(result['idtask']);
                                $('#listbody').prepend(clr);
                                $('#inputadd').val('');
                            //});
                        }
                    });
            
                // var clr=$(a).clone();
                // clr.removeClass("list-body11");
                // clr.addClass("list-body")
                // clr.children('span').html($('#inputadd').val());
                // $('#listbody').prepend(clr);
                // $('#inputadd').val('');
            }
        }
    });
    //bấm vào task-check để chuyển list-body từ trên xuống dứoi
    var b=$('.showcompleted:eq(0)')
    $('#listbody').on('click','.task-check',function(event){
        event.stopPropagation();
        w=$(this);
        $.ajax({
                        url : "../changetask0.php",
                        type : "post",
                        dataType:'text',
                        data : {
                             id:$(this).parent().children('.idtask').html(),
                        },
                        success : function (result){
                            var clr=$(b).clone();
                            $('#showcompleted').prepend(clr);
                            $(w).parent().remove();
                            clr.children('span:eq(0)').html($(w).parent().children('span:eq(0)').html());
                            clr.children('.idtask').html($(w).parent().children('.idtask').html());
                            clr.children('div').html($(w).parent().children('div').html());
                            clr.children('.create_day').html($(w).parent().children('.create_day').html());
                        }
                    });
        // var clr=$(b).clone();
        // $('#showcompleted').prepend(clr);
        // $(this).parent().remove();
        // clr.children('span').html($(this).parent().children('span').html());
        // clr.children('.idtask').html($(this).parent().children('.idtask').html());
    })
    //bấm vào task-checked để đẩy phần tử từ dưới lên
    var c=$('.list-body:eq(0)')
    $('#showcompleted').on('click','.task-checked',function(event){
        event.stopPropagation();
        w=$(this);
        $.ajax({
                        url : "../changetask1.php",
                        type : "post",
                        dataType:'text',
                        data : {
                             id:$(this).parent().children('.idtask').html(),
                        },
                        success : function (result){
                            var clr=$(c).clone();
                            $('#listbody').append(clr);
                            $(w).parent().remove();
                            clr.children('span:eq(0)').html($(w).parent().children('span:eq(0)').html());
                            clr.children('.idtask').html($(w).parent().children('.idtask').html());
                            clr.children('div').html($(w).parent().children('div').html());
                            clr.children('.create_day').html($(w).parent().children('.create_day').html());
                        }
                    });
        // var clr=$(c).clone();
        // $('#listbody').append(clr);
        // $(this).parent().remove();
        // clr.children('span').html($(this).parent().children('span').html());
        // clr.children('.idtask').html($(this).parent().children('.idtask').html());
    })
   //click vào list-body để thì nền chuyển màu xanh
   $('#listbody').on('click','.list-body',function(){
       $('.showcompleted').css("background-color","#FFF");
       $('.list-body').css("background-color","#FFF");
       $(this).css("background-color","#E0EEFA");
       $('.title:eq(0)').children('input').val($(this).children('span').html());
       $('.title:eq(0)').children('span:eq(0)') .html($('#iddetail').html());
       $('#idtask-right').html($(this).children('.idtask').html());
       conten=$(this).children('span:eq(0)');
       conten1=$(this).children('.create_day');
       conten2=$(this).children('.remind_day');
       conten3=$(this).children('.conten_note');
       $('#create_day').val($(conten1).html());
       $('#remind').val($(conten2).html());
       $('#addnote').val($(conten3).html());
       //Sủa tên task
        $('.title:eq(0)').children('input').keypress(function(event){
            w=$(this);

                var keycode = (event.keyCode ? event.keyCode : event.which);
                if(keycode == '13'){
                        if($(w).val()!='')
                    {
                        $.ajax({
                                url : "../sua_task.php",
                                type : "post",
                                dataType:"text",
                                data : {
                                     name : $(w).val(),
                                     id: $('#idtask-right').html()
                                },
                                success : function (result){
                                    $(conten).html(result);
                                }
                            });
                    }
                }
            });
        //update create day
            $('#post_dueday').click(function(){
               $.ajax({
                                    url : "../update_createday.php",
                                    type : "post",
                                    dataType:"text",
                                    data : {
                                         id : $('#idtask-right').html(),
                                         create_day: $('#create_day').val(),
                                    },
                                    success : function (result){
                                        $(conten1).html($('#create_day').val());
                                    }
                                });
            });
        //update remind day
            $('#post_remind').click(function(){
               $.ajax({
                                    url : "../remind.php",
                                    type : "post",
                                    dataType:"text",
                                    data : {
                                         id : $('#idtask-right').html(),
                                         remind: $('#remind').val(),
                                    },
                                    success : function (result){
                                        $(conten2).html($('#remind').val());
                                    }
                                });
            });
        //update note
        $('#addnote').keypress(function(event){
            //w=$(this);

                var keycode = (event.keyCode ? event.keyCode : event.which);
                if(keycode == '13'){
                        if($(this).val()!='')
                    {
                        $.ajax({
                                url : "../addnote.php",
                                type : "post",
                                dataType:"text",
                                data : {
                                     note : $(this).val(),
                                     id: $('#idtask-right').html()
                                },
                                success : function (result){
                                    $(conten3).html($('#addnote').val());
                                }
                            });
                    }
                }
            });
        
        //hiển thị comment
        $.ajax({
                        url : "../showcomment.php",
                        type : "post",
                        dataType:'json',
                        data : {
                             idtask :$('#idtask-right').html(),
                        },
                        success : function (result){
                            $('.spaceright').html('');
                            $.each (result, function (key, item){
                                var copycoment=$('.addcoment:eq(0)').clone();
                                $('.spaceright').append(copycoment);
                                $(copycoment).children('div').children('div').html(item['title']);
                                $(copycoment).children('div').children('.idcomment').html(item['id']);
                            });

                        }
                    });
        //hiển thị file
        $.ajax({
                        url : "../showfile.php",
                        type : "post",
                        dataType:'json',
                        data : {
                             idtask :$('#idtask-right').html(),
                        },
                        success : function (result){
                            
                             $('.spacefile:eq(0)').html('');

                            $.each (result, function (key, item){
                                // alert(item['name']);
                                var copyfile=$('.conten_file:eq(0)').clone();
                                //alert(copyfile);
                                $('.spacefile:eq(0)').append(copyfile);
                                $(copyfile).children('span').html(item['name']);
                                $(copyfile).children('div').html(item['id']);
                            });

                        }
                    });

   });
   $('#showcompleted').on('click','.showcompleted',function(){
        $('.list-body').css("background-color","#FFF");
        $('.showcompleted').css("background-color","#FFF");
        $(this).css("background-color","#E4E9E4");
        $('.title:eq(0)').children('input').val($(this).children('span').html());
        $('.title:eq(0)').children('span:eq(0)') .html($('#notich').html());
        $('#idtask-right').html($(this).children('.idtask').html());
        conten=$(this).children('span:eq(0)');
        conten1=$(this).children('.create_day');
        conten2=$(this).children('.remind_day');
        conten3=$(this).children('.conten_note');
        $('#create_day').val($(conten1).html());
        $('#remind').val($(conten2).html());
        $('#addnote').val($(conten3).html());
        //Sủa tên task
        $('.title:eq(0)').children('input').keypress(function(event){
            w=$(this);

                var keycode = (event.keyCode ? event.keyCode : event.which);
                if(keycode == '13'){
                        if($(w).val()!='')
                    {
                        $.ajax({
                                url : "../sua_task.php",
                                type : "post",
                                dataType:"text",
                                data : {
                                     name : $(w).val(),
                                     id: $('#idtask-right').html()
                                },
                                success : function (result){
                                    $(conten).html(result);
                                }
                            });
                    }
                }
            });
        //update create day
            $('#post_dueday').click(function(){
               $.ajax({
                                    url : "../update_createday.php",
                                    type : "post",
                                    dataType:"text",
                                    data : {
                                         id : $('#idtask-right').html(),
                                         create_day: $('#create_day').val(),
                                    },
                                    success : function (result){
                                        $(conten1).html($('#create_day').val());
                                    }
                                });
            });
        //update remind day
            $('#post_remind').click(function(){
               $.ajax({
                                    url : "../remind.php",
                                    type : "post",
                                    dataType:"text",
                                    data : {
                                         id : $('#idtask-right').html(),
                                         remind: $('#remind').val(),
                                    },
                                    success : function (result){
                                        $(conten2).html($('#remind').val());
                                    }
                                });
            });
            //update note
        $('#addnote').keypress(function(event){
            //w=$(this);

                var keycode = (event.keyCode ? event.keyCode : event.which);
                if(keycode == '13'){
                        if($(this).val()!='')
                    {
                        $.ajax({
                                url : "../addnote.php",
                                type : "post",
                                dataType:"text",
                                data : {
                                     note : $(this).val(),
                                     id: $('#idtask-right').html()
                                },
                                success : function (result){
                                    $(conten3).html($('#addnote').val());
                                }
                            });
                    }
                }
            });
        //hiển thị comment
        $.ajax({
                        url : "../showcomment.php",
                        type : "post",
                        dataType:'json',
                        data : {
                             idtask :$('#idtask-right').html(),
                        },
                        success : function (result){
                            $('.spaceright').html('');
                            $.each (result, function (key, item){
                                var copycoment=$('.addcoment:eq(0)').clone();
                                $('.spaceright').append(copycoment);
                                $(copycoment).children('div').children('div').html(item['title']);
                                $(copycoment).children('div').children('.idcomment').html(item['id']);
                            });

                        }
                    });
         //hiển thị file
        $.ajax({
                        url : "../showfile.php",
                        type : "post",
                        dataType:'json',
                        data : {
                             idtask :$('#idtask-right').html(),
                        },
                        success : function (result){
                            
                             $('.spacefile:eq(0)').html('');

                            $.each (result, function (key, item){
                                // alert(item['name']);
                                var copyfile=$('.conten_file:eq(0)').clone();
                                //alert(copyfile);
                                $('.spacefile:eq(0)').append(copyfile);
                                $(copyfile).children('span').html(item['name']);
                                $(copyfile).children('div').html(item['id']);
                            });

                        }
                    });


   });
//Bấm phải chuột vào list-body để hiện click-right3;
$("#listbody").contextmenu(function(event){
    event.preventDefault();
    $('.Mouse-right1').css("display","none");
    $('.Mouse-right2').css("display","none");
    $('.Mouse-right4').css("display","none");
    $('.list-avarta').css('display','none');
    $('.Mouse-right3').css("display","block");
    var x=event.pageX;
    var y=event.pageY;
    $('.Mouse-right3').css("top",y+"px");
    $('.Mouse-right3').css("left",x+"px");
})
//bấm body để ẩn các chuột phải
$('body').click(function(){
    // $('.list-avarta').css('display','none');
    $('.Mouse-right3').css("display","none");
    $('.Mouse-right1').css("display","none");
    $('.Mouse-right2').css("display","none");
    $('.Mouse-right4').css("display","none");
});
//click phải hiển thị mouse right 2
$("#listicon").contextmenu(function(event){
    $('.list-avarta').css('display','none');
    $('.Mouse-right4').css("display","none");
    $('.Mouse-right3').css("display","none");
    $('.Mouse-right1').css("display","none");
    event.preventDefault();
    $('.Mouse-right2').css("display","block");
    var x=event.pageX;
    var y=event.pageY;
    $('.Mouse-right2').css("top",y+"px");
    $('.Mouse-right2').css("left",x+"px");
})
//click phải hiển thị mouse right 1
$("#ibox_starred").contextmenu(function(event){
    $('.list-avarta').css('display','none');
    $('.Mouse-right4').css("display","none");
    $('.Mouse-right3').css("display","none");
    $('.Mouse-right2').css("display","none");
    $('.Mouse-right1').css("display","block");
    var x=event.pageX;
    var y=event.pageY;
    $('.Mouse-right1').css("top",y+"px");
    $('.Mouse-right1').css("left",x+"px");
    event.preventDefault();
})
//click phải hiển thị mouse right 4
$("#showcompleted").contextmenu(function(event){
    event.preventDefault();
    $('.list-avarta').css('display','none');
    $('.Mouse-right3').css("display","none");
    $('.Mouse-right2').css("display","none");
    $('.Mouse-right1').css("display","none");
    $('.Mouse-right4').css("display","block");
    var x=event.pageX;
    var y=event.pageY;
    $('.Mouse-right4').css("top",y+"px");
    $('.Mouse-right4').css("left",x+"px");
})
//click để xóa 1 create list
$('#listicon').on('contextmenu','.list-icon',function(){
    dele2=$(this);
    $('#delete3').click(function(){
         $.ajax({
                        url : "../deletelist.php",
                        type : "post",
                        dataType:"text",
                        data : {
                             id : dele2.children('.idlist').html(),
                        },
                        success : function (result){
                            dele2.remove();
                        }
                    });
    });


})  
//click để xóa 1 list-body
$('#listbody').on("contextmenu",".list-body",function(){
    dele3=$(this);
    $('#delete1').click(function(){
        $.ajax({
                        url : "../delete_task.php",
                        type : "post",
                        dataType:"text",
                        data : {
                             id : dele3.children('.idtask').html(),
                        },
                        success : function (result){
                            dele3.remove();
                        }
                    });
        // dele3.remove();
    });
})
//click để xóa 1 showcompleted
$("#showcompleted").on("contextmenu",".showcompleted",function(){
    dele4=$(this);
    $('#delete2').click(function(){
        $.ajax({
                        url : "../delete_task.php",
                        type : "post",
                        dataType:"text",
                        data : {
                             id : dele4.children('.idtask').html(),
                        },
                        success : function (result){
                            dele4.remove();
                        }
                    });
        //dele4.remove();
    });
})
//bấm close-right để ẩn cửa sổ phải
$('.close-right').click(function(){
    $('.right').css("display","none");
});
//click đúp vào list-body để hiển thị cột bên phải
$('#listbody').on("dblclick",".list-body",function(){
    $('.right').css("display","flex");
});
//click đúp vào  showcompleted để hiển thị cột bên phải
$("#showcompleted").on("dblclick",".showcompleted",function(){
    $('.right').css("display","flex");
});

//hover lên addcoment để hiện dấu x để xóa
// $('.spaceright').on('click','.addcoment',function(){
//     $('.deletespace').css("display","block");
//})
$('.spaceright').on('click','.addcoment .deletespace',function(){
    w=$(this);
    $.ajax({
                        url : "../delete_comment.php",
                        type : "post",
                        dataType:"text",
                        data : {
                             id : $(this).parent().children('div').children('.idcomment').html(),
                        },
                        success : function (result){
                                $(w).parent().remove();
                        }
                    });
    //alert($(this).parent().children('div').children('.idcomment').html());
    //alert($('.idcomment').html());
    // $(this).parent().remove();
})
//bấm chuông
$('.bell').click(function(){
    $('#bell1').toggle();
   
})
//bấm vào masage
$('.conversationsrtl-flip').click(function(){
    $('#masage').toggle();
})
//bấm vào sort
$('#iconsorrt').click(function(){
    $('#sort1').slideToggle();
    $('#more1').css("display","none");
})
//bấm vào more
$('#moreicon').click(function(e){
    $('#more1').slideToggle();
    $('#sort1').css("display","none");
})
// bấm vào sao đổi nền
// $('#listbody').on('click','.list-body .svg2',function(event){
//     //$('#listbody').prepend($(this).parent());
//     $(this).wrap("<div></div>");
//     $(this).parent().html($('#star-red').html());
//     $(this).unwrap();
//     //event.stopPropagation();
// })
// $('#listbody').on('click','.list-body div .redsao',function(event){
//     $(this).parent().html($('.svgone').html());
//     $(this).unwrap();
//     //event.stopPropagation();
// })
$('#listbody').on('click','.list-body div',function(event){
    //alert("hello");
    event.stopPropagation();
    star=$(this);
    $.ajax({
                        url : "../change_star.php",
                        type : "post",
                        dataType:"json",
                        data : {
                             id : $(this).parent().children('.idtask').html(),
                        },
                        success : function (result){
                            //console.log(result);
                            if(result['star']==1){
                                $(star).html($('#star-red').html());

                            }
                            if(result['star']==0){
                                $(star).html($('#star-white').html());
                            }
                        }
                    });
})
$('#showcompleted').on('click','.showcompleted div',function(event){
    //alert("hello");
    event.stopPropagation();
    star=$(this);
    $.ajax({
                        url : "../change_star.php",
                        type : "post",
                        dataType:"json",
                        data : {
                             id : $(this).parent().children('.idtask').html(),
                        },
                        success : function (result){
                            //console.log(result);
                            if(result['star']==1){
                                $(star).html($('#star-red').html());

                            }
                            if(result['star']==0){
                                $(star).html($('#star-white').html());
                            }
                        }
                    });
})
//bấm inputright tạo avatacoment
            $('.inputright').keypress(function(event){

                var keycode = (event.keyCode ? event.keyCode : event.which);
                if(keycode == '13'){
                        if($('.inputright').val()!=''&&$('#idtask-right').html()!='')
                    {
                        $.ajax({
                                    url : "../addcoment.php",
                                    type : "post",
                                    dataType:"text",
                                    data : {
                                         coment: $(this).val(),
                                         id: $('#idtask-right').html()
                                    },
                                    success : function (result){
                                        var copycoment=$('.addcoment:eq(0)').clone();
                                        $('.spaceright').append(copycoment);
                                        $(copycoment).children('div').children('div').html($('.inputright').val());
                                        $('.inputright').val('');
                                    }
                                });
                        // var copycoment=$('.addcoment:eq(0)').clone();
                        // $('.spaceright').append(copycoment);
                        // $(copycoment).children('div').children('div').html($('.inputright').val());
                        // $('.inputright').val('');
                    }
                }
            });
//bấm thêm file
$('#post_file').click(function(event) {
    var file_data = $('.addtype').prop('files')[0];
    console.log(file_data.name);
    // var form_data = new FormData();
    // form_data.append('file', file_data);
    $.ajax({
                url: '../xulyfile.php', // gửi đến file upload.php 
                dataType: 'json',
                data : {
                         name: file_data.name,
                         id: $('#idtask-right').html()
                        },
                // cache: false,
                // contentType: false,
                // processData: false,
                //data:file_data,
                type: 'post',
                success: function (res) {
                    var copyfile=$('.conten_file:eq(0)').clone();
                    $('.spacefile:eq(0)').append(copyfile);
                    $(copyfile).children('span').html(res['name']);
                    $(copyfile).children('div').html(res['id']);
                }
            });
    // $.ajax({
    //                                 url : "../xulyfile.php",
    //                                 type : "post",
    //                                 dataType:"text",
    //                                 cache: false,
    //                                 contentType: false,
    //                                 processData: false,
    //                                 data :
    //                                      file : file_data,
    //                                 success : function (result){
    //                                     alert(result)
    //                                 }
    //                             });
    // var copycoment1=$('.addfile:eq(0)').clone();
    // $('.conten_file').prepend(copycoment1);
    //$(copycoment1).children('div').children('div').html($('.inputright').val());
   //  console.log("hello");
   //  for(var pair of form_data.entries()) {
   // console.log(pair[0]+ ', '+ pair[1]); 
//}
});
//bấm dấu x để xóa file
$('.spacefile').on('click','.deletefile',function(event) {
    he=$(this).parent();
     // $(this).parent().remove();
     $.ajax({
                url: '../deletefile.php', 
                dataType: 'text',
                data : {
                         id: $(this).parent().children('div').html()
                        },
                type: 'post',
                success: function (res) {
                    he.remove();
                }
            });
    
});

// $('.conten_file:eq(0)').css('display','none');

});//đóng load
