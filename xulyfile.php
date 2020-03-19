<?php 
include('./connect.php');
$idtask=$_POST['id'];
$namefile=$_POST['name'];
//$name=$_FILES['file']['name'];
$a="INSERT INTO tb_file(name,idTask) VALUES ('$namefile','$idtask')";
$result=$conn->prepare($a);
$result->execute();
$last_id = $conn->lastInsertId();
$conn=null;
//echo $idtask;
$result=array(
	'id'=>$last_id,
	'name'=>$namefile
);
echo json_encode($result);

 ?>