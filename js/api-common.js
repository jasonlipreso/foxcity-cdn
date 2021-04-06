(function (window) {

  'use strict'

  function FoxCity_CommonAPI() {

    var FoxCAPI = {};
    var debug   = true;
    var app_config = {
      'resource':'http://127.0.0.1:8000/api/',
      'default_region':'07',
      'default_cover':'http://localhost/foxcity-fileserver/defaultPhotos/wallpaper-background-dark.png'
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

    FoxCAPI.defaultCover = function() {
      return app_config.default_cover;
    }

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
        return JSON.parse(decodeURIComponent(value));
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

    FoxCAPI.getLocalShopInfo = function () {
      if($('#local-data-shop-info').val() == '') {
        return null;
      }
      else {
        return JSON.parse(decodeURIComponent($('#local-data-shop-info').val()));
      }
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

    FoxCAPI.quantityEditor = function (elem, action, callback) {

      var min = parseInt($(elem).attr('min'));
      var max = parseInt($(elem).attr('max'));
      var val = parseInt($(elem).val());
      var res = 0;

      FoxCAPI.console('Edit Quantity:', {'min':min, 'max':max, 'val':val, 'action':action, 'elem':elem});

      if(action == '+') {
        if(val < max) {
          res = val + 1;
          $(elem).val(res);
        }
      }
      else if(action == '-') {
        if(val > min) {
          res = val - 1;
          $(elem).val(res);
        }
      }
      else {
        console.error('Action parameter is out of range in FoxCAPI.quantityEditor() function');
      }

      callback(res);
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

    FoxCAPI.makeReferenceID = function (key) {
      //date('m').date('d').date('y').date('h').date('i').date('s');
      var num_1 = Math.floor(Math.random() * 35) + 0;
      var num_2 = Math.floor(Math.random() * 35) + 0;
      var num_3 = Math.floor(Math.random() * 35) + 0;
      var chars = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var csets = chars[num_1]+chars[num_2]+chars[num_3];

      var date    = new Date();
      var month   = date.getMonth() + 1;
      var day     = date.getDate();
      var year    = date.getFullYear();
      var hour    = date.getHours();
      var minute  = date.getMinutes();
      var second  = date.getSeconds();

      if(month <= 9) { month = '0'+month; }
      if(day <= 9) { day = '0'+day; }
      if(hour <= 9) { hour = '0'+hour; }
      if(minute <= 9) { minute = '0'+minute; }
      if(second <= 9) { second = '0'+second; }

      return key + '-' + month + day + year + hour + minute + second + '-' + csets;

    };

    FoxCAPI.isGeolocationSupported  = function () {
      if(!navigator.geolocation) {
        alert('Geolocation is not supported on this browser');
      }
      else {
        var a = navigator.geolocation.getCurrentPosition(FoxCAPI.getGeolocation);
      }
    };

    FoxCAPI.getGeolocation = function (position) {

      FoxCAPI.console('Get Geolocation:', position);

      var accuracy    = position.coords.accuracy;
      var altitude    = position.coords.altitude;
      var latitude    = position.coords.latitude;
      var longitude   = position.coords.longitude;
      var timestamp   = position.coords.timestamp;

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
          $('#local-data-app-prerequisite').val(encodeURIComponent(JSON.stringify(response)));
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

    FoxCAPI.getFeaturedPlaces = function (args, callback) {
      var url = FoxCAPI.getAPIResource() + "shop-food/getFeaturedPlaces?"+jQuery.param(args);
      $.ajax({
        url: url,
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('Get Featured Places:', response);
          callback(response)
        }
      });
    };

    FoxCAPI.getShopInfo = function (args, callback) {
      FoxCAPI.console('Get Shop Parameter:', args);
      var url = FoxCAPI.getAPIResource() + "shop-food/getShopInfo?"+jQuery.param(args);
      $.ajax({
        url: url,
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('Get Shop Info:', response);
          callback(response)
        }
      });
    };

    FoxCAPI.getShopProductLocal = function (product_refid) {

      var shop_info   = FoxCAPI.getLocalShopInfo();

      if((shop_info == '')||(shop_info == null)||(shop_info == 'undefined')) {
        return null;
      }
      else {
        var products    = shop_info.products;

        for(var i = 0; i < products.length; i++) {
          var position = products[i].info.reference_id;
          if(position == product_refid) {
            return products[i];
          }
        }
      }
    };

    FoxCAPI.getShopProductRequest = function (product_refid, callback) {
      var url = FoxCAPI.getAPIResource() + "shop-food/getProducts_single/"+product_refid;
      $.ajax({
        url: url,
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('Get Product Info:', response);
          callback(response)
        }
      });
    }

    return FoxCAPI;
  }

  if(typeof(FoxCAPI) === 'undefined') {
    window.FoxCAPI = FoxCity_CommonAPI();
  };

}) (window);
