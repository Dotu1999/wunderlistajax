<?php 
include('connect.php');
$id=$_POST['id'];
$a = "DELETE FROM tb_task where id='$id'";
$result = $conn->prepare($a);
$result->execute();
$conn=null;

 ?>