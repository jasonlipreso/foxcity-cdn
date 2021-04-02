<?php

if(isset($_GET['reference_id'])) {
  $user =  $_GET['reference_id'];
}
else {
  $user = "";
}

if(isset($_GET['first_name'])) {
  $first_name =  $_GET['first_name'];
}
else {
  $first_name = "";
}

if(isset($_GET['last_name'])) {
  $last_name =  $_GET['last_name'];
}
else {
  $last_name = "";
}

if(isset($_GET['email'])) {
  $email =  $_GET['email'];
}
else {
  $email = "";
}

if(isset($_GET['token'])) {
  $token =  $_GET['token'];
}
else {
  $token = "";
}

?>

<!-- JSON Format prerequisite data -->
<input id = "local-data-app-prerequisite" type="hidden" value = "[]" name="local-data-app-prerequisite">

<!-- User Reference ID -->
<input id = "local-data-user-refid" type="hidden" value = "<?php echo $user; ?>" name="local-data-user-refid">
<input id = "local-data-user-firstname" type="hidden" value = "<?php echo $first_name; ?>" name="local-data-user-firstname">
<input id = "local-data-user-lastname" type="hidden" value = "<?php echo $last_name; ?>" name="local-data-user-lastname">
<input id = "local-data-user-email" type="hidden" value = "<?php echo $email; ?>" name="local-data-user-email">

<input id = "local-data-user-location-region" type="hidden" value = "{}" name="">
<input id = "local-data-user-location-province" type="hidden" value = "{}" name="">
<input id = "local-data-user-location-city" type="hidden" value = "{}" name="">
<input id = "local-data-user-location-brgy" type="hidden" value = "{}" name="">

<!-- Access Token of the Guest -->
<input id = "local-data-token" type="hidden" value = "<?php echo $token; ?>" name="local-data-token">

<!-----------------------------------------------------------------------
Active shop Reference ID
-------------------------------------------------------------------------
  Foxcity App: Used as reference ID of the oppened shop
  Rider App: --
  Account Shop: Reference ID of the currently loggined shop
-->
<input id = "local-data-shop" type="hidden" value = "" name="local-data-shop">

<!-- OTP Number as Verification Code -->
<input id = "local-data-otp" type="hidden" value = "" name="local-data-otp">


