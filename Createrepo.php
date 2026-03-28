



<?php
include 'db.php';
$firstname= $_POST['firstname'];
$lastname= $_POST['lastname'];
$gender =$_POST['gender'];
$email = $_POST['email'];
$password = $_POST['password'];


$sql2 = "SELECT * FROM users WHERE email = '$email'";
$result = mysqli_query($conn, $sql2);
if(mysqli_num_rows($result)>0){
    echo "email already exists";
    return;
}

 
$sql = "INSERT INTO users (firstname, lastname, gender, email, password) VALUES ('$firstname', '$lastname', '$gender', '$email', '$password')";

if($conn->query($sql)===True) {
    echo "user name is updated";
}
else{
    echo "error". $conn->error;
}
?>
