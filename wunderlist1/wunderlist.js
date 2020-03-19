// window.onload=function(){
//     //javascrip với sự kiện bên maint-left
//         var avta = document.getElementsByClassName("user")[0];
//         var list_avata=document.getElementsByClassName("list-avarta")[0];
//         var body=document.getElementsByTagName("body")[0];
//         var i=1;
//         // click vào avata 
//         console.log("Click avatar");
//         avta.addEventListener("click",function(){
//         if(i==1){
//             list_avata.style.display="block";
//         i=2;}
//         else{list_avata.style.display="none";
//         i=1;

//         }
//         });
//         body.addEventListener("click",function(){list_avata.style.display="none";},true);
//         //Click vào list-toggle (biểu tượng 3 sọc) để thu hoặc hiển thị phần bên trái
//         var listtoggle=document.getElementsByClassName("list-toggle")[0];
//         var mainleft=document.getElementsByClassName("main left")[0];
//         var i1=1;
//         listtoggle.addEventListener("click",function(){
//             console.log("Click list-toggle");
//             if(i1==1)
//             {
//                 mainleft.setAttribute("style","width:40px;");
//                 i1=2;
//             }
//             else
//             {
//                 mainleft.setAttribute("style","width:280px;");
//                 i1=1;
//             }
//         })
//         //click vào create-list sẽ hiện ra ô newlist
//         var createlist=document.getElementsByClassName("create-list")[0];
//         var createnewlist=document.getElementById("create-new-list");
//         var addacout=document.getElementById("addacout");
//         createlist.addEventListener("click",function(){
//             console.log("Hiển thị cửa sổ new- list");
//             addacout.setAttribute("style","display:block;");
//             createnewlist.style.display="block";

//         });
//         //click vào nút Cancel trong cửa sổ newlist thì cửa sổ sẽ biến mất
//         var Cancel=document.getElementsByClassName("Cancel")[0];
//         Cancel.addEventListener("click",function(){
//             addacout.setAttribute("style","display:none;");
//             createnewlist.style.display="none";
//         });
//     //Javascript với sự kiện xảy ra bên maint-bettweem
//         //Click vào Show completed to-dos để ẩn hiện showcompleted
//         var show=document.getElementsByClassName("show")[0];
//         var showcompleted=document.getElementsByClassName("showcompleted");
//         var i2=1;
//         show.addEventListener("click",function(){
//             console.log("click vào Show completed to-dos")
//             if(i2==1)
//             {
//                 showcompleted1.style.display="none";
//                 i2=2;
//             }
//             else
//             {
//                 showcompleted1.style.display="block";
//                 i2=1;
//             }
//         });
//             //click đúp vào showcompleted thì maint-right hiện ra
//             var main_right=document.getElementsByClassName("right")[0];
//             var i3=1;
//             for(var v1=0;v1<showcompleted.length;v1++)
//                 {
//                     console.log("click vào showcompleted");
//                     showcompleted[v1].addEventListener("dblclick",function(){
//                         console.log("nháy đúp vào showcompleted");
//                         if(i3==1)
//                         {
//                             main_right.style.display="none";
//                             i3=2;
//                         }
//                         else{
//                             main_right.style.display="flex";
//                             i3=1;
//                         }
//                     });
                    
//                 }

// //click chuột phải
// //loại 3
// var list_body=document.getElementById("listbody");
// var Mouse_right3=document.getElementsByClassName("Mouse-right3")[0];
// //console.log(list_body);
// list_body.addEventListener("contextmenu",function(event){
//     event.preventDefault();
//     Mouse_right3.style.display="block";
//     var x=event.clientX;
//     var y=event.clientY;
//     Mouse_right3.style.top=y+"px";
//     Mouse_right3.style.left=x+"px";
// });
// body.addEventListener("click",function(){
//     Mouse_right3.style.display="none";
//     Mouse_right2.style.display="none";
//     Mouse_right1.style.display="none";
//     Mouse_right4.style.display="none";
// });
// //click delete svg để ẩn maint-right
// var delete_svg=document.querySelectorAll(".delete svg")[0];
// delete_svg.addEventListener("click",function(){
//     main_right.style.display="none";
// });
// //loại 2
// var listicon=document.getElementById("listicon");
// var Mouse_right2=document.getElementsByClassName("Mouse-right2")[0];
// listicon.addEventListener("contextmenu",function(event){
//     event.preventDefault();
//     Mouse_right2.style.display="block";
//     var x=event.clientX;
//     var y=event.clientY;
//     Mouse_right2.style.top=y+"px";
//     Mouse_right2.style.left=x+"px";
// });
// //loại 1;
// var ibox_starred=document.getElementById("ibox_starred");
// var Mouse_right1=document.getElementsByClassName("Mouse-right1")[0];
// ibox_starred.addEventListener("contextmenu",function(event){
//     event.preventDefault();
//     Mouse_right1.style.display="block";
//     var x=event.clientX;
//     var y=event.clientY;
//     Mouse_right1.style.top=y+"px";
//     Mouse_right1.style.left=x+"px";
// });
// //Loại 4
// var showcompleted1=document.getElementById("showcompleted");
// var Mouse_right4=document.getElementsByClassName("Mouse-right4")[0];
// showcompleted1.addEventListener("contextmenu",function(event){
//     event.preventDefault();
//     Mouse_right4.style.display="block";
//     var x=event.clientX;
//     var y=event.clientY;
//     Mouse_right4.style.top=y+"px";
//     Mouse_right4.style.left=x+"px";
// });
// body.addEventListener("contextmenu",function(){
//     Mouse_right3.style.display="none";
//     Mouse_right2.style.display="none";
//     Mouse_right1.style.display="none";
//     Mouse_right4.style.display="none";
// },true);
// //Phần chuyển của cửa sổ aoutsetting
// var general=document.getElementById("Generals");
// var innergeneral=document.getElementsByClassName("inner-general")[0];
// var account=document.getElementById("acountss");
// var inneracount=document.getElementsByClassName("inner-account")[0];
// var acout_general=document.getElementById("account-general");
// general.addEventListener("click",function(){
//     innergeneral.style.display="flex";
//     inneracount.style.display="none";
// });
// account.addEventListener("click",function(){
//     innergeneral.style.display="none";
//     inneracount.style.display="block";
// })
// var Done=document.getElementById("done");
// Done.addEventListener("click",function(){
//     document.getElementsByClassName("Account-Setting")[0].style.display="none";
//     createnewlist.style.display="none";
// });
// //bấm vào acout seeting để hiển thị cửa sổ acount setting
// var windowacout=document.getElementsByClassName("Account-Setting")[0];
// var acout_seting=document.querySelectorAll(".list-avarta ul li")[2];
// acout_seting.addEventListener("click",function(){
//     createnewlist.style.display="block";
//     windowacout.style.display="flex";
//     innergeneral.style.display="none";
//     inneracount.style.display="block";
// })
// // Phần tìm kiếm ở bên trái
// var delet=document.getElementById("Delete");
// var seach=document.getElementsByClassName("searchrtl-flip")[0];
// var sedet=document.getElementById("seach_delet")
// var input1=document.querySelectorAll(".menu-left input")[0];
// input1.addEventListener("click",function(){
//     seach.style.display="none";
//     delet.style.display="inline";
// })
// i5=1;
// sedet.addEventListener("click",function(){
//     if(i5==1){
//         seach.style.display="none";
//         delet.style.display="inline";
//         sedet.children[1].addEventListener("click",function(){
//             input1.value='';
//         })
//         i5=2;
//     }
//     else{
//         seach.style.display="inline";
//         delet.style.display="none";
//         i5=1;
//     }

// })
// //them va xoa phan tu trong phan Add to do
// var task_check=document.getElementsByClassName("task-check");
// var input=document.getElementById("inputadd");
// var task_checked=document.getElementsByClassName("task-checked")[0];
// var c=document.getElementsByClassName("list-body")[0];
// var titel=document.getElementsByClassName("title")[0];
// var detail_check=document.getElementsByClassName("detail-check")[0];
// var detail_checked=document.getElementsByClassName("detail-checked")[0];
// input.addEventListener("keyup",function(e){
//     //thêm
//     if((e.keyCode==13)&&(input.value!='')){
//         var clr9=c.cloneNode(true);
//         document.getElementById("listbody").insertBefore(clr9,document.getElementsByClassName("list-body")[0]);
//         var values=document.querySelectorAll(".list-body span")[0];
//         values.innerHTML=input.value;
//         input.value='';
//         var i=1;
//         //click chuot phai de xoa
//         clr9.addEventListener("contextmenu",function(){
//             dele=this;
//             deletelistbody.addEventListener("click",function(){
//                 dele.remove()
//             });
//         });
//         //
//         clr9.addEventListener("click",function(){
//             titel.children[1].innerHTML=values.innerHTML;
//             titel.children[0].children[0].outerHTML=detail_check.outerHTML;
//             titel.addEventListener("click",function next(){
//                 if(i==1){
//                 titel.children[0].outerHTML=detail_checked.outerHTML;
//                 clr91=clr9.cloneNode(true);
//                 clr9.remove();
//                 var show=document.getElementById("showcompleted");
//                 var showcop=document.getElementsByClassName("showcompleted")[0];
//                 show.insertBefore(clr91,showcop);
//                 var clr1=clr91.children[0];
//                 clr1.outerHTML=task_checked.outerHTML;
//                 clr91.classList.add("showcompleted");
//                 clr91.classList.remove("list-body");
//                 i=2;
//                 }
//                 else{
//                     titel.children[0].outerHTML=detail_check.outerHTML;
//                     clr91.remove();
//                     document.getElementById("listbody").appendChild(clr9);
//                     i=1;
//                 }
//             });
//         });
//         var task1=document.querySelectorAll(".list-body .task-check")[0];
//         //xóa và hiển thị ở dưới
//         task1.addEventListener("click",function(){
//             var clr=this.parentElement.cloneNode(true);
//                 this.parentElement.remove();
//                 var show=document.getElementById("showcompleted");
//                 var showcop=document.getElementsByClassName("showcompleted")[0];
//                 show.insertBefore(clr,showcop);
//                 clr.classList.add("showcompleted");
//                 var clr1=document.querySelectorAll(".showcompleted .task-check")[0];
//                 clr1.outerHTML=task_checked.outerHTML;
//                 clr.classList.remove("list-body");
//                 //click chuootj phai de xoa
//                 clr.addEventListener("contextmenu",function(){
//                     dele=this;
//                     delete2.addEventListener("click",function(){
//                         dele.remove()
//                     });
//                 });
//                 //
//                 clr.addEventListener("click",function(){
//                     titel.children[1].innerHTML=values.innerHTML;
//                     titel.children[0].children[0].outerHTML=detail_checked.outerHTML;
//                 });
//                 // hiển thị trở lại
//                 var b=clr.children[0];
//                 b.addEventListener("click",function(){
//                 document.getElementById("listbody").appendChild(clr9);
//                 this.parentElement.remove();
//                 });

//         });
//     }
// });
// //Xóa và hiển thị khi ko enter
// var task_checked=document.getElementsByClassName("task-checked")[0];
// var task_check=document.getElementsByClassName("task-check");
// var task_check1=document.getElementsByClassName("task-check")[0];
// var listbo1=document.getElementsByClassName("list-body")[0];
// var listbo2=document.getElementsByClassName("list-body")[1];
// //
// listbo1.addEventListener("click",function(){
//     titel.children[1].innerHTML=listbo1.children[1].innerHTML;
//     titel.children[0].children[0].outerHTML=detail_check.outerHTML;
// });
// listbo2.addEventListener("click",function(){
//     titel.children[1].innerHTML=listbo2.children[1].innerHTML;
//     titel.children[0].children[0].outerHTML=detail_check.outerHTML;
// });
// //
// listbo1.children[0].addEventListener("click",function(){
//     var clr=this.parentElement.cloneNode(true);
//     this.parentElement.remove();
//     var show=document.getElementById("showcompleted");
//     var showcop=document.getElementsByClassName("showcompleted")[0];
//     show.insertBefore(clr,showcop);
//     clr.classList.add("showcompleted");
//     var clr1=document.querySelectorAll(".showcompleted .task-check")[0];
//     clr1.outerHTML=task_checked.outerHTML;
//     clr.classList.remove("list-body");
//     //click chuootj phai de xoa
//     clr.addEventListener("contextmenu",function(){
//         dele=this;
//         delete2.addEventListener("click",function(){
//             dele.remove()
//         });
//     });
//     //
//     clr.addEventListener("click",function(){
//         titel.children[1].innerHTML=listbo1.children[1].innerHTML;
//         titel.children[0].children[0].outerHTML=detail_checked.outerHTML;
//     });

//     //hiển thị lại
//     var b1=clr.children[0];
//     b1.addEventListener("click",function(){
//     document.getElementById("listbody").appendChild(listbo1);
//     this.parentElement.remove();
//     });
// })
//     //
//     listbo2.children[0].addEventListener("click",function(){
//         var clr=this.parentElement.cloneNode(true);
//         this.parentElement.remove();
//         var show=document.getElementById("showcompleted");
//         var showcop=document.getElementsByClassName("showcompleted")[0];
//         show.insertBefore(clr,showcop);
//         clr.classList.add("showcompleted");
//         var clr1=document.querySelectorAll(".showcompleted .task-check")[0];
//         clr1.outerHTML=task_checked.outerHTML;
//         clr.classList.remove("list-body");
//         //click chuootj phai de xoa
//         clr.addEventListener("contextmenu",function(){
//             var dele=this;
//             delete2.addEventListener("click",function(){
//                 dele.remove()
//             });
//         });
//     //
//         clr.addEventListener("click",function(){
//             titel.children[1].innerHTML=listbo2.children[1].innerHTML;
//             titel.children[0].children[0].outerHTML=detail_checked.outerHTML;
//         });
    
//         //hiển thị lại
//         var b1=clr.children[0];
//         b1.addEventListener("click",function(){
//         document.getElementById("listbody").appendChild(listbo2);
//         this.parentElement.remove();
//         });
//     })

// //bấm vào showcompleted để hồi phục những phần bị xóa
//  var taskchek1=document.getElementsByClassName("showcompleted")[0];
//  var taskchek2=document.getElementsByClassName("showcompleted")[1];
//  var taskchek3=document.getElementsByClassName("showcompleted")[2];
//  taskchek1.addEventListener("click",function(){
//     titel.children[1].innerHTML=taskchek1.children[1].innerHTML;
//     titel.children[0].children[0].outerHTML=detail_checked.outerHTML;
// });
// taskchek2.addEventListener("click",function(){
//     titel.children[1].innerHTML=taskchek2.children[1].innerHTML;
//     titel.children[0].children[0].outerHTML=detail_checked.outerHTML;
// });
// taskchek3.addEventListener("click",function(){
//     titel.children[1].innerHTML=taskchek3.children[1].innerHTML;
//     titel.children[0].children[0].outerHTML=detail_checked.outerHTML;
// });
//     //
//     taskchek1.children[0].addEventListener("click",function(){
//         var clr=this.parentElement.cloneNode(true);
//         clr.classList.add("list-body");
//         document.getElementById("listbody").appendChild(clr);
//         var clr1=document.querySelectorAll(".showcompleted .task-checked")[0];
//         clr1.outerHTML=task_check1.outerHTML;
//         clr.classList.remove("showcompleted");
//         this.parentElement.remove();
//         //click chuootj phai de xoa
//         clr.addEventListener("contextmenu",function(){
//             dele=this;
//             deletelistbody.addEventListener("click",function(){
//                 dele.remove()
//             });
//         });
//         //
//         clr.addEventListener("click",function(){
//             titel.children[1].innerHTML=clr.children[1].innerHTML;
//             titel.children[0].children[0].outerHTML=detail_check.outerHTML;
//         });

//         //xóa trở lại
//         var task1=document.getElementById("listbody").lastChild;
//         var a=task1.children[0];
//         a.addEventListener("click",function(){
//             this.parentElement.remove();
//             var show=document.getElementById("showcompleted");
//             var showcop=document.getElementsByClassName("showcompleted")[0];
//             show.insertBefore(taskchek1,showcop);
//         });
//     });
//     //
//     taskchek2.children[0].addEventListener("click",function(){
//         var clr=this.parentElement.cloneNode(true);
//         clr.classList.add("list-body");
//         document.getElementById("listbody").appendChild(clr);
//         var clr1=document.querySelectorAll(".showcompleted .task-checked")[0];
//         clr1.outerHTML=task_check1.outerHTML;
//         clr.classList.remove("showcompleted");
//         this.parentElement.remove();
//         //click chuootj phai de xoa
//         clr.addEventListener("contextmenu",function(){
//             dele=this;
//             deletelistbody.addEventListener("click",function(){
//                 dele.remove()
//             });
//         });
//         //
//         clr.addEventListener("click",function(){
//             titel.children[1].innerHTML=clr.children[1].innerHTML;
//             titel.children[0].children[0].outerHTML=detail_check.outerHTML;
//         });
//         //xóa trở lại
//         var task1=document.getElementById("listbody").lastChild;
//         var a=task1.children[0];
//         a.addEventListener("click",function(){
//             this.parentElement.remove();
//             var show=document.getElementById("showcompleted");
//             var showcop=document.getElementsByClassName("showcompleted")[0];
//             show.insertBefore(taskchek2,showcop);
//         });
//     });
//     //
//     taskchek3.children[0].addEventListener("click",function(){
//         var clr=this.parentElement.cloneNode(true);
//         clr.classList.add("list-body");
//         document.getElementById("listbody").appendChild(clr);
//         var clr1=document.querySelectorAll(".showcompleted .task-checked")[0];
//         clr1.outerHTML=task_check1.outerHTML;
//         clr.classList.remove("showcompleted");
//         this.parentElement.remove();
//         //click chuootj phai de xoa
//         clr.addEventListener("contextmenu",function(){
//             dele=this;
//             deletelistbody.addEventListener("click",function(){
//                 dele.remove()
//             });
//         });
//         //
//         clr.addEventListener("click",function(){
//             titel.children[1].innerHTML=clr.children[1].innerHTML;
//             titel.children[0].children[0].outerHTML=detail_check.outerHTML;
//         });
//         //xóa trở lại
//         var task1=document.getElementById("listbody").lastChild;
//         var a=task1.children[0];
//         a.addEventListener("click",function(){
//             this.parentElement.remove();
//             var show=document.getElementById("showcompleted");
//             var showcop=document.getElementsByClassName("showcompleted")[0];
//             show.insertBefore(taskchek3,showcop);
//         });
//     });
// //bấm vào mục inbox hoặc list-icon thì tiêu đề của phần ở giữa tha đổi theo
// var titlebettween=document.getElementById("inbox1");
// var inboxleft=document.getElementsByClassName("inbox")[0];
// var startedleft=document.getElementsByClassName("starred")[0];
// var list_icon=document.getElementsByClassName("list-icon");
// inboxleft.addEventListener("click",function(){
//     titlebettween.innerHTML=inboxleft.children[1].innerHTML;
// });
// startedleft.addEventListener("click",function(){
//     titlebettween.innerHTML=startedleft.children[1].innerHTML;
// });
// //hamf click doi mau phan create list
// function click(){
// for(i=0;i<list_icon.length;i++)
// {
    
//     list_icon[i].addEventListener("click",function(){
//         for(i=0;i<list_icon.length;i++)
//         {
//             list_icon[i].classList.remove("cssrow");
//         }
//         this.classList.add("cssrow");
//         titlebettween.innerHTML=this.children[1].innerHTML;

//     });
// }
// }
// click();
// //Thêm list-icon
// var list_icon1=document.getElementsByClassName("list-icon")[0];
// var mainlist =document.getElementById("listicon");
// var textlist=document.getElementById("textlist");
// var Save=document.getElementsByClassName("Save")[0];

// Save.addEventListener("click",create_list)
//   function create_list(){
// if(textlist.value!=''){
//     var clr=list_icon1.cloneNode(true);
//     clr.children[1].innerHTML=textlist.value;
//     mainlist.appendChild(clr);
//     addacout.setAttribute("style","display:none;");
//     createnewlist.style.display="none";
//     textlist.value=null;
//     click();
//     dele3();
//     }
// };
// textlist.addEventListener("keyup",function(e){
//     if((e.keyCode==13)&&(textlist.value!=''))
//     {
//         create_list();
//         dele3();
//     }
// })
// //Bấm chuột phải để xóa 
// var list=document.getElementsByClassName("list-body");
// var deletelistbody=document.getElementById("delete1");
// for(i=0;i<list.length;i++)
// {
//     list[i].addEventListener("contextmenu",function(){
//         dele=this;
//         deletelistbody.addEventListener("click",function(){
//             dele.remove()
//         });
//     });
// }
// var showone=document.getElementsByClassName("showcompleted");
// var delete2=document.getElementById("delete2");
// for(i=0;i<showone.length;i++)
// {
//     showone[i].addEventListener("contextmenu",function(){
//         dele=this;
//         delete2.addEventListener("click",function(){
//             dele.remove()
//         });
//     });
// }
// //

// var delete3=document.getElementById("delete3");
// var listicon=document.getElementsByClassName("list-icon");
// function dele3(){
// for(i=0;i<listicon.length;i++) 
// {
//     listicon[i].addEventListener("contextmenu",function(){
//         dele=this;
//         delete3.addEventListener("click",function(){
//             dele.remove();
//         });
//     });
// }
// }
// dele3();
// //click listbody dể ẩn hiện phần bên trái
// var list_bodybetween=document.getElementById("listbody");
// var i11=1;
// list_bodybetween.addEventListener("dblclick",function(){
// if(i11==1)
// {
//     main_right.style.display="none";
//     i11=2;
// }
// else{
//     main_right.style.display="flex";
//     i11=1;
// }
// });
// }//Đóng load
