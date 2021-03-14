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

<input id = "local-data-app-prerequisite" type="hidden" value = "[]" name="local-data-app-prerequisite">
<input id = "local-data-guest" type="hidden" value = "<?php echo $guest; ?>" name="local-data-guest">
<input id = "local-data-token" type="hidden" value = "<?php echo $token; ?>" name="local-data-token">
<input id = "local-data-shop" type="hidden" value = "[]" name="local-data-shop">


