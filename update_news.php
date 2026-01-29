<?php
require("../js/config.php");
if(isset($_POST["btn-update"])){
    $id = $_POST["txt_cte_id"];
    $cate_id = $_POST["cate"];
    $title = $_POST["txt_news"];
    $content = $_POST["txt_content"];
    $author = $_POST["txt_author"];
    $post_date = $_POST["txt_date"];
    $status = $_POST["txt_status"];

    // Upload intro img
    $target_dir = "upload_web";
    $target_file = $target_dir . basename($_FILES["upload_file"]["name"]);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

    // Kiểm tra định dạng file ảnh
    if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif") {
        echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
        $uploadOk = 0;
    }

    if ($uploadOk == 0) {
        echo "Sorry, your file was not uploaded.";
    } else {
        if (move_uploaded_file($_FILES["upload_file"]["tmp_name"], $target_file)) {
            $sql_update = "UPDATE tbl_news SET cate_id = ".$cate_id.", title = N'".$title."', content = N'".$content."', intro_img = '".$target_file."', author = N'".$author."', post_date = '".$post_date."', status = ".$status." WHERE news_id = ".$id;
            if (mysqli_query($conn, $sql_update)) {
                header("location:news.php");
            } else {
                echo "Error: " . $sql_update . "<br>" . mysqli_error($conn);
            }
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
    }
}
?>
<html>
<head>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
</head>

<body>
    <div class="container">
        <div class "row">
            <div class="col-6">
                <form action="update_news.php" method="post" enctype="multipart/form-data">
                    <?php
                    if(isset($_GET["task"]) && $_GET["task"]=="update"){
                        $id = $_GET["id"];
                        $sql_select="select * from tbl_news where news_id= ".$id;
                        $result = mysqli_query($conn, $sql_select);
                        if (mysqli_num_rows($result) > 0) {
                            while($row = mysqli_fetch_assoc($result)) {
                                echo "<input type='hidden' name='txt_cte_id' value='".$row["news_id"]."'>";
                                echo "Chọn danh mục:";
                                echo "<select class='form-control' name='cate' id=''>";
                                $sql_categories = "SELECT * FROM tbl_category ORDER BY cate_id DESC";
                                $result_categories = mysqli_query($conn, $sql_categories);
                                if(mysqli_num_rows($result_categories) > 0){
                                    while($category = mysqli_fetch_assoc($result_categories)){
                                        if ($category["cate_id"] == $row["cate_id"]) {
                                            echo "<option value='".$category["cate_id"]."' selected>".$category["cate_name"]."</option>";
                                        } else {
                                            echo "<option value='".$category["cate_id"]."'>".$category["cate_name"]."</option>";
                                        }
                                    }
                                }
                                echo "</select>";
                                echo "Nhập tiêu đề:";
                                echo "<input value='".$row["title"]."' class='form-control' type='text' name='txt_news'>";
                                echo "Nhập nội dung tin tức:";
                                echo "<textarea name='txt_content' id='editor'>".$row["content"]."</textarea>";
                                echo "<br>";
                                echo "Chọn ảnh đại diện:";
                                echo "<input class='form-control' type='file' name='upload_web' id=''>";
                                echo "Người đăng:";
                                echo "<input value='".$row["author"]."' class='form-control' type='text' name='txt_author' id=''>";
                                echo "Ngày đăng:";
                                echo "<input value='".$row["post_date"]."' class='form-control' type='date' name='txt_date' id=''>";
                                echo "Nhập trạng thái tin tức:";
                                echo "<input value='".$row["status"]."' class='form-control' type='text' name='txt_status' id=''>";
                            }
                        }
                    }
                    ?>
                    <h1 style="text-align: center;">Trang quản trị tin tức</h1>
                    <div class="row">
                        <div class="col-6">
                            <form action="news.php" method="post" enctype="multipart/form-data">
                                Chọn danh mục:
                                <select class="form-control" name="cate" id="">
                                    <?php
                                        $sql = "SELECT * FROM tbl_category ORDER BY cate_id DESC";
                                        $result = mysqli_query($conn, $sql);
                                        if (mysqli_num_rows($result) > 0) {
                                            while($row = mysqli_fetch_assoc($result)) {
                                                echo "<option value='".$row["cate_id"]."'>".$row["cate_name"]."</option>";
                                            }
                                        }
                                    ?>
                                </select>
                                Nhập tiêu đề:
                                <input class="form-control" type="text" name="txt_news" id="">
                                Nhập nội dung tin tức:
                                <textarea name="txt_content" id="editor"></textarea>
                                <script>
                                    ClassicEditor
                                        .create( document.querySelector( '#editor' ) )
                                        .then( editor => {
                                            console.log( editor );
                                        } )
                                        .catch( error => {
                                            console.error( error );
                                        } );
                                </script>
                                Chọn ảnh đại diện:
                                <input class="form-control" type="file" name="upload_file" id="">
                                Người đăng:
                                <input class="form-control" type="text" name="txt_author" id="">
                                Ngày đăng:
                                <input class="form-control" type="date" name="txt_date" id="">
                                Nhập trạng thái tin tức:
                                <input class="form-control" type="text" name="txt_status" id="">
                                <br>
                                <input type="submit" value="Cập nhật" name="btn-update" class="btn btn-primary">
                            </form>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>
</html>
