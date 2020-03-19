<?php 
include('./connect.php');
$idtask=$_POST['id'];
$a="SELECT star FROM tb_task WHERE id='$idtask'";
$result=$conn->prepare($a);
$result->execute();
$star = $result->fetchColumn(); 
if($star==1){
	$update="UPDATE tb_task SET star=0 where id='$idtask'";
	$result_update=$conn->prepare($update);
	$result_update->execute();
	$array = array(
    "star" => 0, 
	);
	echo json_encode($array);
}
else{
	$update="UPDATE tb_task SET star=1 where id='$idtask'";
	$result_update=$conn->prepare($update);
	$result_update->execute();
	$array = array(
    "star" => 1, 
	);
	echo json_encode($array);
}

$conn=null;
 ?>