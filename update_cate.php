<?php
require("../js/config.php");
if(isset($_POST["btn-update"])){
    $id = $_POST["txt_cte_id"];
    $cate_name = $_POST["txt_cate_name"];
    $status = $_POST["txt_status"];
    $sql_update = "update tbl_category set cate_name = N'".$cate_name."', status=".$status." where cate_id=".$id;
    if(mysqli_query($conn, $sql_update)) {
        header("location:category.php");
    }
    else{
        echo "Error: ". $sql_update . "<br>" . mysqli_error($conn);
    }
}
?>
<html>
<head>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <form action="update_cate.php" method="post">
                    <?php
                    if(isset($_GET["task"]) && $_GET["task"]=="update"){
                        $id = $_GET["id"];
                        $sql_select="select * from tbl_category where cate_id= ".$id;
                        $result = mysqli_query($conn,$sql_select);
                        if (mysqli_num_rows($result) > 0) {
                            while($row = mysqli_fetch_assoc($result)) {
                                echo "<input type='hidden' name='txt_cte_id' value='".$row["cate_id"]."'>";
                                echo "nhập vào tên danh mục: ";
                                echo "<input value='".$row["cate_name"]."' class='form-control' type='text' name='txt_cate_name'>";
                                echo "nhập vào trạng thái: ";
                                echo "<input value='".$row["status"]."' class='form-control' type='text' name='txt_status'>";
                            }
                        }
                    }
                    ?> 
                    <h1 style="text-align:center;"> trang cập nhật danh mục </h1>
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
                            <input type="submit" value="cập nhật" name="btn-update" class="btn btn-primary">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>
</html>