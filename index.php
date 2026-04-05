<?php include 'db.php'; ?>

<?php
if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $department = $_POST['department'];

    mysqli_query($conn, "INSERT INTO student(name,email,mobile,department) 
    VALUES('$name','$email','$mobile','$department')");
}
?>

<!DOCTYPE html>
<html>
<head>
<title>Student CRUD</title>

<!-- Bootstrap CDN -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

</head>

<body class="bg-light">

<div class="container mt-5">

<h2 class="text-center mb-4">🎓 Student Management System</h2>

<!-- Form Card -->
<div class="card p-4 shadow mb-4">
<h4>Add Student</h4>

<form method="POST">
<div class="row">
    <div class="col-md-6 mb-3">
        <input type="text" name="name" class="form-control" placeholder="Enter Name" required>
    </div>

    <div class="col-md-6 mb-3">
        <input type="email" name="email" class="form-control" placeholder="Enter Email" required>
    </div>

    <div class="col-md-6 mb-3">
        <input type="text" name="mobile" class="form-control" placeholder="Enter Mobile" required>
    </div>

    <div class="col-md-6 mb-3">
        <input type="text" name="department" class="form-control" placeholder="Enter Department" required>
    </div>
</div>

<button class="btn btn-primary" name="submit">Add Student</button>
</form>
</div>

<!-- Table -->
<div class="card p-4 shadow">
<h4>Student List</h4>

<table class="table table-bordered table-hover">
<thead class="table-dark">
<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
<th>Mobile</th>
<th>Department</th>
<th>Action</th>
</tr>
</thead>

<tbody>

<?php
$result = mysqli_query($conn, "SELECT * FROM student");

while($row = mysqli_fetch_assoc($result)){
?>
<tr>
<td><?php echo $row['id']; ?></td>
<td><?php echo $row['name']; ?></td>
<td><?php echo $row['email']; ?></td>
<td><?php echo $row['mobile']; ?></td>
<td><?php echo $row['department']; ?></td>
<td>
<a href="edit.php?id=<?php echo $row['id']; ?>" class="btn btn-warning btn-sm">Edit</a>
<a href="delete.php?id=<?php echo $row['id']; ?>" class="btn btn-danger btn-sm">Delete</a>
</td>
</tr>
<?php } ?>

</tbody>
</table>

</div>

</div>

</body>
</html>