<?php

if(isset($_GET['reference_id'])) {
  $guest =  $_GET['reference_id'];
}
else {
  $guest = "";
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

<!-- Guest Reference ID -->
<input id = "local-data-guest" type="hidden" value = "<?php echo $guest; ?>" name="local-data-guest">

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


