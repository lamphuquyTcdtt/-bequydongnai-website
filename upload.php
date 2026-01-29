<?php
if(isset($_POST["upload"])){
$target_dir = "upload_web";
$target_file = $target_dir . basename($_FILES["file_Upload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
if (file_exists($target_file)) {
    echo "Sorry, file already exists.";
    $uploadOk = 0;
  }
  if ($_FILES["file_Upload"]["size"] > 500000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
  }
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
  echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
  $uploadOk = 0;
}
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
}
 else {
    if (move_uploaded_file($_FILES["file_Upload"]["tmp_name"], $target_file)) {
      echo "<img src='".$target_file."'>";
    } else {
      echo "Sorry, there was an error uploading your file.";
    }
}
    }
?>
<html>
    <head>
        <body>
            <h1> trang upload file</h1>
            <form action="upload.php" method="post" enctype="multipart/form-data">
  <input type="file" name="file_Upload" >
  <input type="submit" value="Upload" name="upload">
</form>
</body>
    </head>
</html>