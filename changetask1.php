<?php 
include('./connect.php');
$idtask=$_POST['id'];
$update="UPDATE tb_task SET status=1 where id='$idtask'";
$result_update=$conn->prepare($update);
$result_update->execute();
$conn=null;
echo "hello";
 ?>