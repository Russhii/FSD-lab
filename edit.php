<?php include 'db.php';

$id = $_GET['id'];
$data = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM student WHERE id=$id"));

if(isset($_POST['update'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $department = $_POST['department'];

    mysqli_query($conn, "UPDATE student SET 
    name='$name', email='$email', mobile='$mobile', department='$department' 
    WHERE id=$id");

    header("Location: index.php");
}
?>

<h2>Edit Student</h2>

<form method="POST">
Name: <input type="text" name="name" value="<?php echo $data['name']; ?>"><br>
Email: <input type="text" name="email" value="<?php echo $data['email']; ?>"><br>
Mobile: <input type="text" name="mobile" value="<?php echo $data['mobile']; ?>"><br>
Department: <input type="text" name="department" value="<?php echo $data['department']; ?>"><br>
<button name="update">Update</button>
</form>