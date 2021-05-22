<?php include('server.php') ?>
<!DOCTYPE html>
<html>
<head>
  <title>Registration system PHP and MySQL</title>
  <link rel="stylesheet" type="text/css" href="login.css">
</head>
<body style ="background-color: #dfb2e6;">
  <div class="header">

  </div>

  <div class ='row'>
  <div class = 'col' style="width: 60%; float:right">
  <br>
  <br>
  <div class ="right" >

  <form method="post" action="login.php">
         <h2>Login here </h2>
    	<?php include('errors.php'); ?>
    	<div class="input-group">
    		<label></label>
    		<input type="text" name="username" placeholder = " Username" >
    	</div>
    	<br>
    	<div class="input-group">
    		<label></label>
    		<input type="password" name="password" placeholder = " Password">
    	</div>
    	<br>
    	<div class="input-group">
    		<button type="submit" class="btn" name="login_user">Login</button>
    	</div>
    	<p>
    		Not yet a member? <a href="register.php">Sign up</a>
    	</p>
    </form>

  </div>
  </div>
  <div class = 'col' style="width: 40%; float:left">
  <div class="left">
  <video width="600" height="500"  autoplay loop muted>
    <source src="wo2.mp4" type="video/mp4">
   </div>
   </div>
   </div>
</body>

</body>
</html>