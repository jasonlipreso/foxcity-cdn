(function (window) {

  'use strict'

  function FoxCity_CommonAPI() {

    var FoxCAPI = {};

    FoxCAPI.isValidEmail = function (email) {
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
    };

    FoxCAPI.isValidMobileNumber = function (mobile_number) {
      return true;
    };

    FoxCAPI.showLoading = function () {
      $('.loading').css({'display':'block'});
    };

    FoxCAPI.hideLoading = function () {
      $('.loading').css({'display':'none'});
    };

    FoxCAPI.getAPIResource = function () {
      return "http://127.0.0.1:8000/api/";
    };

    FoxCAPI.getAppToken = function () {
      return $('#local-data-token').val();
    };

    FoxCAPI.getAppGuest = function () {
      return $('#local-data-guest').val();
    };

    FoxCAPI.getAppShop = function () {
      return $('#local-data-shop').val();
    };

    FoxCAPI.toggleVisibility = function (elem, passElem, init) {

      var elem_on     = $(elem).eq(1).css('opacity');
      var elem_off    = $(elem).eq(2).css('opacity');

      if(init) {
        $(elem).eq(1).css('opacity', 0);
        $(elem).eq(2).css('opacity', 1);
        //$('#eVzij').attr('type','text');
      }
      else if((elem_on == 1)&&(init == false)) {
        $(elem).eq(1).css('opacity', 0);
        $(elem).eq(2).css('opacity', 1);
        //$('#eVzij').attr('type','text');
      }
      else if((elem_on == 0)&&(init == false)) {
        $(elem).eq(1).css('opacity', 1);
        $(elem).eq(2).css('opacity', 0);
        //$('#eVzij').attr('type','text');
      }
    };

    FoxCAPI.makeTimer = function (element, duration, endCallback) {
      var timer = duration, minutes, seconds;
      var interval = setInterval(function () {
          minutes = parseInt(timer / 60, 10);
          seconds = parseInt(timer % 60, 10);

          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;

          $(element).text(minutes + ":" + seconds);

          if (--timer < 0) {
              timer = duration;
              endCallback();
              clearInterval(interval);
          }
      }, 1000);
    };

    return FoxCAPI;
  }

  if(typeof(FoxCAPI) === 'undefined') {
    window.FoxCAPI = FoxCity_CommonAPI();
  };

}) (window);
