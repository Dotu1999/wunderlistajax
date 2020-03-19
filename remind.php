<?php 
include('./connect.php');
$idtask=$_POST['id'];
$remind= $_POST['remind'];
//echo $create_day;
if($idtask!=null){
$a="UPDATE tb_task SET remind='$remind' WHERE id='$idtask'";
$result=$conn->prepare($a);
$result->execute();}
$conn=null;
echo "hello";

 ?>