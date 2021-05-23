<?php include('server.php') ?>
<!DOCTYPE html>
<html>
<head>
  <title>Registration system PHP and MySQL</title>
  <link rel="stylesheet" type="text/css" href="register.css">
</head>
<body style ="background-color: #00c2cb;">
  <div class="header">

  </div>

  <div class ='row'>
  <div class = 'col' style="width: 60%; float:right">
  <div class ="right" >
  <form method="post" action="register.php" >
  	<?php include('errors.php'); ?>
  	<h2> Register for a free account </h2>
  	<div class="input-group">

  	  <input type="text" name="username" value="<?php echo $username; ?>" placeholder = " Username">
  	</div>
  	<div class="input-group">

  	  <input type="email" name="email" value="<?php echo $email; ?>" placeholder="Email">
  	</div>
  	<div class="input-group">

  	  <input type="password" name="password_1" placeholder="Password">
  	</div>

  	<div class="input-group">

  	  <input type="password" name="password_2" placeholder="Confirm Password">
  	</div>

  	<div class="input-group">
  	  <button type="submit" class="btn" name="reg_user">Register</button>
  	</div>
  	<p>
  		Already a member? <a href="login.php">Sign in</a>
  	</p>
  </form>
  </div>
  </div>
  <div class = 'col' style="width: 40%; float:left">
  <div class="left">
  <video width="600" height="500"  autoplay loop muted>
    <source src="wo1.mp4" type="video/mp4">
   </div>
   </div>
   </div>
</body>
</html>