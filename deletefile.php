<?php 
include('./connect.php');
// $idtask=$_POST['id'];
// $namefile=$_POST['name'];
$id=$_POST['id'];
$a = "DELETE FROM tb_file where id='$id'";
$result = $conn->prepare($a);
$result->execute();
$conn=null;
echo "hello";

 ?>