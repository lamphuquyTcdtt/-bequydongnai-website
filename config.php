<?php
    // khai báo biến     
    //echo" Đây là trang index <br> ";
    $server = "localhost";
    $user="root";
    $pass="";
    $db="26_humg";

    $conn = mysqli_connect($server,$user,$pass,$db);
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    else 
    {
        echo" ";
    }
?>