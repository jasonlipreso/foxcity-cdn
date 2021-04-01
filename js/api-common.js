(function (window) {

  'use strict'

  function FoxCity_CommonAPI() {

    var FoxCAPI = {};
    var debug   = true;
    var app_config = {
      'resource':'http://127.0.0.1:8000/api/'
    };

    FoxCAPI.console = function (name, args) {
      if(debug) {
        console.log(name+' | '+ new Date());
        console.log(args);
      }
    };

    FoxCAPI.getAPIResource = function () {
      return app_config.resource;
    };

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

    FoxCAPI.getAppToken = function () {
      return $('#local-data-token').val();
    };

    FoxCAPI.getAppUserRefID = function () {
      return $('#local-data-user-refid').val();
    };

    FoxCAPI.getAppUserFirstname = function () {
      return $('#local-data-user-firstname').val();
    };

    FoxCAPI.getAppUserLastname = function () {
      return $('#local-data-user-lastname').val();
    };

    FoxCAPI.getAppUserEmail = function () {
      return $('#local-data-user-email').val();
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

    FoxCAPI.getLocationProvinceList = function (region, callback) {
      var url = FoxCAPI.getAPIResource() + "common/getProvinceList/"+region;
      $.ajax({
        url: url,
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('Province List:', response);
          callback(response);
        }
      });
    };

    FoxCAPI.getLocationCityList = function (province, callback) {
      var url = FoxCAPI.getAPIResource() + "common/getCityList/"+province;
      $.ajax({
        url: url,
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('City List:', response);
          callback(response);
        }
      });
    };

    FoxCAPI.getLocationBarangayList = function (city, callback) {
      var url = FoxCAPI.getAPIResource() + "common/getBarangayList/"+city;
      $.ajax({
        url: url,
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('Barangy List:', response);
          callback(response);
        }
      });
    };

    return FoxCAPI;
  }

  if(typeof(FoxCAPI) === 'undefined') {
    window.FoxCAPI = FoxCity_CommonAPI();
  };

}) (window);
