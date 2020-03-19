<?php 
include('./connect.php');
$coment=$_POST['coment'];
$idtask=$_POST['id'];
//sử lý csdl thếm các list
$a1 = "INSERT INTO tb_comment(title,idTask) VALUES('$coment','$idtask') ";
$result1 = $conn->prepare($a1);
$result1->execute();
$conn=null;

 ?>