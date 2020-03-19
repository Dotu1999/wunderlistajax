<?php 
include('connect.php');
$idlist=$_POST['idlist'];
$a2 = "SELECT * FROM tb_task where idList='$idlist' and status=0";
$result2 = $conn->prepare($a2);
$result2->execute();
$result=array();
foreach ($result2 as $row) {
$result[]=array(
	'name'=>$row['name'],
	'id'=>$row['id'],
	'star'=>$row['star'],
	'create_day'=>$row['create_day'],
	'remind'=>$row['remind'],
	'note'=>$row['note']
);
}
echo json_encode($result);
$conn=null;

 ?>