<?php 
include('./connect.php');
$idtask=$_POST['id'];
$create_day= $_POST['create_day'];
//echo $create_day;
if($idtask!=null){
$a="UPDATE tb_task SET create_day='$create_day' WHERE id='$idtask'";
$result=$conn->prepare($a);
$result->execute();}
$conn=null;
echo "hello";
 ?>