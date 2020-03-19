<?php 
include('connect.php');
$email=$_POST['email'];
$password=$_POST['password'];
$address=$_POST['address'];
//Kiểm tra tài khoản đã tồn tại chưa
$result = $conn->prepare("SELECT * FROM tb_user where email='$email'");
$result->execute();
$number_of_rows = $result->fetchColumn();
//Mã hóa mật khẩu
 $password=md5($password);
if($number_of_rows>0){
	header('Location:register.php?status=1');
}
else{
	$result = $conn->prepare("INSERT INTO tb_user(name,email,password) VALUES ('$address','$email','$password')");

	$result->execute();
	$_SESSION['email']=$email;
	header('Location:login.php?status=2');
}

 ?>
 