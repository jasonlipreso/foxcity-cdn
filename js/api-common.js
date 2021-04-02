(function (window) {

  'use strict'

  function FoxCity_CommonAPI() {

    var FoxCAPI = {};
    var debug   = true;
    var app_config = {
      'resource':'http://127.0.0.1:8000/api/',
      'default_region':'07'
    };

    FoxCAPI.console = function (name, args) {
      if(debug) {
        console.log(name+' | '+ new Date());
        console.log(args);
      }
    };

    FoxCAPI.defaultRegion = function () {
      return app_config.default_region;
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

    FoxCAPI.getPrerequisite = function () {
      var value = $("#local-data-app-prerequisite").val();
      if(value != '') {
        return JSON.parse(value);
      }
      else {
        return null;
      }
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

    FoxCAPI.setLocalLocation = function (region, province, city, brgy) {
      $('#local-data-user-location-region').val(region);
      $('#local-data-user-location-province').val(province);
      $('#local-data-user-location-city').val(city);
      $('#local-data-user-location-brgy').val(brgy);
    };

    FoxCAPI.getLocalLocation = function () {
      var args = {
        'region': $('#local-data-user-location-region').val(),
        'province': $('#local-data-user-location-province').val(),
        'city': $('#local-data-user-location-city').val(),
        'brgy': $('#local-data-user-location-brgy').val()
      };
      return args;
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

    FoxCAPI.saveNearbySearch = function (args, callback) {
      var url = FoxCAPI.getAPIResource() + "common/saveNearbySearch?"+jQuery.param(args);
      $.ajax({
        url: url,
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('Save Nearby Search Response:', response);
          callback(response);
        }
      });
    };

    FoxCAPI.getNearbyRecentSearches = function (args, callback) {
      var url = FoxCAPI.getAPIResource() + "common/recentNearbySearches?"+jQuery.param(args);
      $.ajax({
        url: url,
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('Get Recent Nearby Search Response:', response);
          callback(response);
        }
      });
    };

    FoxCAPI.getNearbyShop = function (args, callback) {
      var url = FoxCAPI.getAPIResource() + "shop-food/getNearBy?"+jQuery.param(args);
      $.ajax({
        url: url,
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('Get Nearby Shops Response:', response);
          callback(response);
        }
      });
    };

    FoxCAPI.appFoxcityPrerequisite = function (callback) {
      var url = FoxCAPI.getAPIResource() + "common/appFoxcityPrerequisite";
      $.ajax({
        url: url,
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('Get Shop Prerequisite:', response);
          $('#local-data-app-prerequisite').val(JSON.stringify(response));
          callback(response);
        }
      });
    };

    FoxCAPI.getUserLastLocation = function (callback) {
      var url = FoxCAPI.getAPIResource() + "user/getLastLocation/"+FoxCAPI.getAppUserRefID();
      $.ajax({
        url: url,
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('Get User Location:', response);
          FoxCAPI.setLocalLocation(response.region, response.province, response.city, response.brgy);
          callback(response)
        }
      });
    };

   

    FoxCAPI.appRiderPrerequisite = function () {
      
    };

    FoxCAPI.appShopPrerequisite = function () {
      
    };

    FoxCAPI.appAdminPrerequisite = function () {
      
    };

    FoxCAPI.appStaffPrerequisite = function () {
      
    };

    //shop-food/getNearBy?region=07&province=0722&city=072209&brgy=072228003

    return FoxCAPI;
  }

  if(typeof(FoxCAPI) === 'undefined') {
    window.FoxCAPI = FoxCity_CommonAPI();
  };

}) (window);
