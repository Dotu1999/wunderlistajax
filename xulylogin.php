<?php 
	include('connect.php');
	session_start();
	$email=$_POST['email'];
	$password=$_POST['password'];
	$password=md5($password);
	$a = "SELECT count(*) FROM tb_user where email='$email' and password='$password'";
	$a1 = "SELECT * FROM tb_user where email='$email' and password='$password'";
	$result = $conn->prepare($a);
	$result1 = $conn->prepare($a1);
	$result->execute();
	$result1->execute();
	$number_of_rows = $result->fetchColumn(); 
	echo $number_of_rows;
	$user = $result1->fetch(PDO::FETCH_ASSOC);
	//lưu thông tin id user vừa đăng nhập
	// $_SESSION['iduser']=$user['id'];
	// $_SESSION['username']=$user['name'];
	// $_SESSION['email']=$user['email'];
	$status="true";
	if($number_of_rows>0){
		//lưu thông tin id user vừa đăng nhập
		$_SESSION['iduser']=$user['id'];
		$_SESSION['username']=$user['name'];
		$_SESSION['email']=$user['email'];
		header('Location:./wunderlist1/wunderlist.php');
	} 
	else{
		header('Location:login.php?status='.$status);
	}
	$conn=null;
	
 ?>