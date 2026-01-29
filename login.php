<?php
require('js/config.php');
session_start();
if(isset($_POST["login"])){
    $user_name = $_POST["txt_username"];
    $password = $_POST["txt_password"];
    $sql=" select * from tbl_user where user_name ='".$user_name."'and password= '".$password."'";
    $result= mysqli_query($conn,$sql);
    if(mysqli_num_rows($result)>0){
        $_SESSION["user"] = $user_name;
        header("location:admin/category.php");
    }
    else{
        echo" Sai tên đăng nhập hoặc mật khẩu";
    }
}

?>
<html >
<head>
    <link rel="stylesheet" href="css/bootstrap.min.css">
</head>

<body>
<div class="container">
            <h1 style="text-align: center;"  > Trang đăng nhập </h1>
            <form action="login.php" method="post">
                Nhập vào tên đăng nhập :
                <input type="text" name="txt_username" class="form-control" >
                <br>
                Nhập mật khẩu: 
                <input type="password" name="txt_password" class="form-control" >
                <br>
                <input type="submit" value="Đăng Nhập" name="login" class="btn btn-danger" >
  </form>
</div>
</body>
</html>