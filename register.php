<?php
    require("js/config.php");
    if(isset($_POST["register"])){
        // lấy giá trị từ ô nhập liệu
        $user_name = $_POST["username"];
        $password = $_POST["password"];
        $re_password = $_POST["re_password"];
        if($password!=$re_password){
            echo" mật khẩu không trùng khớp";
        }
        else{
            $sql = "select * from tbl_user where user_name = '".$user_name."'";
            $result = mysqli_query($conn,$sql);
            if(mysqli_num_rows($result)>0){
                echo" tên đăng nhập đã tồn tại ";
            }
            else{
                $sql_insert = "insert into tbl_user(user_name,password,status) values(N'".$user_name."',N'".$password."',1)";
                if(mysqli_query($conn,$sql_insert)){
                    header("location: login.php");
                }
                else{
                    echo"error" .$sql_insert ."<br>".mysqli_error($conn);
                }
  
            }
        }
       }
?>
<html >
<head>
    <link rel="stylesheet" href="css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <h1 style="text-align:center;"> trang đăng ký tài khoản </h1>
            <form action="register.php" method="post">
                     Nhập tên đăng nhập:
                    <input type="text" name="username" id="" class="form-control">
                    Nhập mật khẩu:
                    <input type="password" name="password" id="" class="form-control">
                    Nhập lại mật khẩu:
                    <input type="password" name="re_password" id="" class="form-control">
                    <br>
                    <input type="submit" value="đăng ký" name="register" class="btn btn-primary">
            </form>
    </div>
</body>