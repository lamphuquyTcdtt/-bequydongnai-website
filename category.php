<?php
    require("../js/config.php");
    session_start();
    if(!$_SESSION["user"]){
        header("location:../login.php");
    }
    else{
        echo"xin chao thanh vien ".$_SESSION["user"];
    }
    if(isset($_POST["logout"])){
        session_destroy();
        header("location:../login.php");
    }
    // kiểm tra người dùng bấm nút thêm mới
    if(isset($_POST["insert"])){
        // lấy giá trị từ ô nhập liệu
        $cate_name = $_POST["txt_cate_name"];
        $status = $_POST["txt_status"];
        $sql_insert = "insert into tbl_category(cate_name,status) values(N'".$cate_name."',".$status.")";
      
    }
    if(isset($_GET["task"]) && $_GET["task"] == "delete"){
        $id = $_GET["id"];
        $sql_delete = "delete from tbl_category where cate_id = ". $id;
        if(mysqli_query($conn, $sql_delete)) {
            header("location:category.php");
        }
        else{
            echo"Error: ". $sql . "<br>" . mysqli_error($conn);
        }
    }
    if(isset($_POST["delete_check"])){
        $cate_id = $_POST["cate"];
        foreach($cate_id as $c){
            $sql_delete ="delete from tbl_category where cate_id =". $c;
            if(mysqli_query($conn, $sql_delete)) {
                header("location:category.php");
            }
            else{
                echo"Error: ". $sql . "<br>" . mysqli_error($conn);
            }
        }
    }
?>
<html >
<head>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
</head>

<body style="background-color: #ffffcc;">
    <div class="container">
        <div class="row">
            <div class="col-6">
                <form action="category.php" method="post">
                <h1 style="text-align:center;"> trang quản trị danh mục </h1>
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                                Nhập vào tên danh mục:
                                <input type="text" name="txt_cate_name" id="" class="form-control">
                            </div>
                            <div class="form-group">
                                Nhập vào trạng thái:
                                <input type="text" name="txt_status" id="" class="form-control">
                            </div>
                            <br>
                            <input type="submit" value="Thêm mới" name="insert" class="btn btn-primary">
                            <br> Tìm kiếm danh mục:
                            <div class="form-group">
                                <input type="text" name="txt_search" id="" class="form-control">
                            </div>
                            <input type="submit" value="Tìm kiếm" class="btn btn-success">
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <table class="table table-striped">
                    <tr>
                        <th>Mã danh mục</th>
                        <th>Tên danh mục</th>
                        <th>Trạng thái</th>
                        <th>Thao tác</th>
                        <th>chọn</th>
                    </tr>
                    <tr>
                        <form action ="category.php" method="post">
                            <input type="submit" value="xóa theo chọn " name="delete_check" class="btn btn-info">
                            <input type="submit" value="xóa tất cả " name="delete_all" class="btn btn-danger">
                            <input type="submit" value="Đăng Xuất " name="logout" class="btn btn-info">

                        <br>
                        <?php
                             $sql = "";
                             if (isset($_POST["txt_search"])){
                                 $cate_name = $_POST["txt_search"];
                                 $sql = "select * from tbl_category where cate_name like '%".$cate_name."%'";
                             }
                             else
                             // lấy và hiển thị dữ liệu 
                             $sql = "select * from tbl_category order by cate_id DESC";
                        
                            $result = mysqli_query($conn,$sql);
                            if (mysqli_num_rows($result) > 0) {
                                while($row = mysqli_fetch_assoc($result)) {
                                    $st="";
                                    if($row["status"]==0){
                                        $st = "<p style='color:red'>ẩn</p>";
                                    }
                                    else{
                                    $st =" <p style='color:blue'>hiện</p>"; 
                                    }
                                    
                                echo"<tr>";
                                echo"<td>".$row["cate_id"]."</td>";
                                echo"<td>".$row["cate_name"]."</td>";
                                echo"<td>".$st."</td>";
                                echo "<td>";
                                    echo "<a href='update_cate.php?task=update&id=".$row["cate_id"]."' class='btn btn-warning'>Sửa</a>";
                                    echo "<a href='category.php?task=delete&id=".$row["cate_id"]."' class='btn btn-danger'>Xóa</a>";
                                echo "</td>";
                                echo "<td>";
                                 echo "<input type='checkbox' name='cate[]' value='".$row["cate_id"]."' class='form-check-input'>";
                                echo"</tr>";
                                echo"</tr>";
                                }
                            }
                            else
                            {
                                echo "bạn không đủ dữ liệu ";
                            }
                        ?>
                        </form>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</body>