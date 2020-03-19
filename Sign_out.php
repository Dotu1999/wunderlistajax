<?php 
session_start();
header('Location:login.php');
var_dump($_SESSION);
session_destroy();
 ?>