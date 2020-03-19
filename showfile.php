<?php 
include('./connect.php');
$idtask=$_POST['idtask'];
$a2 = "SELECT * FROM tb_file where idTask='$idtask'";
$result2 = $conn->prepare($a2);
$result2->execute();
$result=array();
foreach ($result2 as $row) {
$result[]=array(
	'name'=>$row['name'],
	'id'=>$row['id'],
	 'idtask'=>$row['idTask'],
);
}
echo json_encode($result);
 ?>