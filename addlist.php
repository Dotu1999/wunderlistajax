<?php 
include('./connect.php');
session_start();
$idusers=$_SESSION['iduser'];
if(isset($_POST['name'])&&$_POST['name']!=''){
$addlist=$_POST['name'];
//sử lý csdl thếm các list
$a1 = "INSERT INTO tb_list(name,idUser,number) VALUES('$addlist',$idusers,null) ";
$result1 = $conn->prepare($a1);
$result1->execute();
$last_id = $conn->lastInsertId();
}
//xử lý csdl lấy số list
echo $last_id;
$conn=null;
 ?>