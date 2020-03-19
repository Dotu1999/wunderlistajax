<?php 
include('./connect.php');
//sử lý csdl thếm các task
$name=$_POST['name'];
$idlist=$_POST['idlist'];
$a1 = "INSERT INTO tb_task(name,idList,status,star) VALUES('$name','$idlist',1,0) ";
$result1 = $conn->prepare($a1);
$result1->execute();
$last_id = $conn->lastInsertId();
$array = array(
    "name" => $name,
    "idtask" => $last_id 
);
 
echo json_encode($array);
$conn=null;

 ?>