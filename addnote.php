<?php 
include('./connect.php');
$idtask=$_POST['id'];
$note= $_POST['note'];
//echo $create_day;
if($idtask!=null){
$a="UPDATE tb_task SET note='$note' WHERE id='$idtask'";
$result=$conn->prepare($a);
$result->execute();}
$conn=null;
echo "hello";
 ?>