<?php 
include('connect.php');
$id=$_POST['idtask'];
$a2 = "SELECT * FROM tb_comment where idTask='$id'";
$result2 = $conn->prepare($a2);
$result2->execute();
$result=array();
foreach ($result2 as $row) {
$result[]=array(
	'id'=>$row['id'],
	'title'=>$row['title']
);
}
echo json_encode($result);


 ?>