<?php 
include('./connect.php');
$nametask=$_POST['name'];
$idtask=$_POST['id'];
$a="UPDATE tb_task SET name='$nametask'  where id='$idtask'";
$result=$conn->prepare($a);
$result->execute();
$conn=null;
echo $nametask;


 ?>