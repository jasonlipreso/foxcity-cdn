<?php


/* GLOBAL REPOSITORIES */

if($_SERVER['HTTP_HOST'] == 'localhost') {
  $REPO_CDN                     = 'http://localhost/foxcity-cdn/';
}
else {
  $REPO_CDN                     = 'https://www.foxcityph.com/foxcity-cdn/';
}

$REPO_RESTAURANT_APP          = '../foxcity-mobile-restaurant/';
$REPO_RIDER_APPP              = '../foxcity-rider/';
$REPO_FOXCITY_APP             = '../foxcity-app/';

$FAVICON                      = $REPO_CDN.'img/favicon.png';

/* META DATA REQUIREMENTS:CSS & JS */
$LINK_CSS_RESET               = $REPO_CDN. 'css/reset.css';
$LINK_CSS_BUTTON              = $REPO_CDN. 'css/button.css';
$LINK_CSS_MARGIN              = $REPO_CDN. 'css/margin.css';
$LINK_CSS_PADDING             = $REPO_CDN. 'css/padding.css';
$LINK_CSS_CONTAINER           = $REPO_CDN. 'css/container.css';
$LINK_CSS_COLOR               = $REPO_CDN. 'css/color.css';
$LINK_CSS_TEXT                = $REPO_CDN. 'css/text.css';
$LINK_CSS_INPUT               = $REPO_CDN. 'css/input.css';
$LINK_CSS_SELECT              = $REPO_CDN. 'css/dropdown.css';
$LINK_CSS_SPLASH_SCREEN       = $REPO_CDN. 'css/splash-screen.css';
$LINK_CSS_LOGIN               = $REPO_CDN. 'css/login.css';
$LINK_CSS_LODING              = $REPO_CDN. 'css/loading.css';
$LINK_CSS_DOC_MOBILE          = $REPO_CDN. 'css/document-mobile.css';
$LINK_JS_JQUERY               = $REPO_CDN. 'js/jquery.min.js';
$LINK_JS_JQUERY_3_6_0         = $REPO_CDN. 'js/jquery-3.6.0.js';
$LINK_JS_LAYER_SWITCHER       = $REPO_CDN. 'js/cmn-layer-switcher.js';

/* META DATA REQUIREMENTS:API */
$LINK_JS_CMN_API              = $REPO_CDN. 'js/api-common.js';
$LINK_JS_USER_API             = $REPO_CDN. 'js/api-user.js';
$LINK_JS_SHOP_API             = $REPO_CDN. 'js/api-shop.js';
$LINK_JS_AUTHENTICATE_API     = $REPO_CDN. 'js/api-authentication.js';
$LINK_JS_TEXT_API             = $REPO_CDN. 'js/api-txt.js';
$LINK_JS_OTP_FORM             = $REPO_CDN. 'js/otp-form.js';
$LINK_JS_SORT_TABLE           = $REPO_CDN. 'js/jquery.tablesorter.js';

/* LIBRARY COLLECTIONS */
$LINK_SLICK_JS                = $REPO_CDN. 'library/slick/slick.js';
$LINK_SLICK_CSS               = $REPO_CDN. 'library/slick/slick.css';
$LINK_SLICK_THEME             = $REPO_CDN. 'library/slick/slick-theme.css';


/* IMAGE ASSETS */
$IMG_LOGO_TEXT_GRAY           = $REPO_CDN. 'img/logo-text-gray.jpg';
$IMG_LOGO_TXT_TRANSPARENT     = $REPO_CDN. 'img/logo-text-transparent.png';
$IMG_LOGO_TXT_YELLOW_ORANGE   = $REPO_CDN. 'img/logo-text-yellow-orange.png';
$IMG_LOGO_MAIN_WHITE          = $REPO_CDN. 'img/logo-main-white.png';
$IMG_LOGO_FACE_COLORED        = $REPO_CDN. 'img/logo-face-colored.png';
$IMG_LOGO_FACE_LIGHT          = $REPO_CDN. 'img/logo-light.png';
$IMG_ICON_ACC_LIGHT_GRAY      = $REPO_CDN. 'img/account-circle-light-gray.svg';
$IMG_ICON_ACC_WHITE           = $REPO_CDN. 'img/account-circle-white.svg';
$IMG_ICON_KEY_LIGHT_GRAY      = $REPO_CDN. 'img/key-light-gray.svg';
$IMG_ICON_HOME_PURPLE         = $REPO_CDN. 'img/home-purple.svg';
$IMG_ICON_BOOKING_PURPLE      = $REPO_CDN. 'img/booking-purple.svg';
$IMG_ICON_ASSIGNED_PURPLE     = $REPO_CDN. 'img/assignment-purple.svg';
$IMG_ICON_SETTING_PURPLE      = $REPO_CDN. 'img/setting-purple.svg';
$IMG_ICON_LOCATION_PURPLE     = $REPO_CDN. 'img/location-purple.svg';
$IMG_ICON_LOCATION_WHITE      = $REPO_CDN. 'img/location-white.svg';
$IMG_ICON_MESSAGE_PURPLE      = $REPO_CDN. 'img/message-purple.svg';
$IMG_ICON_FOOD_001            = $REPO_CDN. 'img/food-icon-001.png';
$IMG_ICON_CHECK_GREEN         = $REPO_CDN. 'img/check-mark-green.svg';
$IMG_ICON_CHECK_GRAY          = $REPO_CDN. 'img/check-mark-gray.svg';
$IMG_ICON_CALL_WHITE          = $REPO_CDN. 'img/call-white.svg';
$IMG_ICON_VISI_ON             = $REPO_CDN. 'img/visibility_on_black.svg';
$IMG_ICON_VISI_OFF            = $REPO_CDN. 'img/visibility_off_black.svg';
$IMG_ICON_BACK                = $REPO_CDN. 'img/back_black.svg';
$IMG_ICON_ARROW_DOWN          = $REPO_CDN. 'img/arrow_down_black.svg';
$IMG_ICON_SEARCH              = $REPO_CDN. 'img/search_black.svg';
$IMG_ICON_STAR_WHITE          = $REPO_CDN. 'img/star_white.svg';
$IMG_ICON_BOOKMARK_WHITE      = $REPO_CDN. 'img/bookmark_white.svg';
$IMG_ICON_ARROW_DROPDOWN      = $REPO_CDN. 'img/arrow_drop_down-orange.svg';
$IMG_ICON_LOADING_GIF         = $REPO_CDN. 'img/loading-16x16.gif';

?>