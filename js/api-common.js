(function (window) {

  'use strict'

  function FoxCity_CommonAPI() {

    var FoxCAPI     = {};
    var debug       = true;
    var app_config  = {};

    if(window.location.hostname == 'localhost') {
      app_config = {
        'resource':'http://127.0.0.1:8000/api/',
        'file_server':'http://localhost/foxcity-fileserver/',
        'app_foxcity':'http://localhost/foxcity-app/',
        'app_cdn':'http://localhost/foxcity-cdn/',
        'app_rider':'http://localhost/foxcity-rider/',
        'app_shop_food':'http://localhost/foxcity-mobile-restaurant/',
        'default_region':'07',
        'default_cover':'http://localhost/foxcity-fileserver/defaultPhotos/wallpaper-background-dark.png',
        'loading_gif_16x16':'img/loading-16x16.gif',
        'sms_brandname':'Foxcity PH'
      };
    }
    else {
      app_config = {
        'resource':'https://www.foxcityph.com/api/',
        'file_server':'https://www.foxcityph.com/foxcity-fileserver/',
        'app_foxcity':'https://www.foxcityph.com/foxcity-app/',
        'app_cdn':'https://www.foxcityph.com/foxcity-cdn/',
        'app_rider':'https://www.foxcityph.com/foxcity-rider/',
        'app_shop_food':'https://www.foxcityph.com/foxcity-mobile-restaurant/',
        'default_region':'07',
        'default_cover':'https://www.foxcityph.com/foxcity-fileserver/defaultPhotos/wallpaper-background-dark.png',
        'loading_gif_16x16':'img/loading-16x16.gif',
        'sms_brandname':'Foxcity PH'
      };
    }

    FoxCAPI.console = function (name, args) {
      if(debug) {
        console.log(name+' | '+ new Date());
        console.log(args);
      }
    };

    FoxCAPI.getConfig = function () {
      return app_config;
    };

    FoxCAPI.SMSBrandName = function () {
      return app_config.sms_brandname;
    };

    FoxCAPI.getLoadingGIF16X16 = function () {
      return app_config.app_cdn+app_config.loading_gif_16x16;
    };

    FoxCAPI.appFoxcityDomain = function () {
      return app_config.app_foxcity;
    };

    FoxCAPI.currencyFormat = function (amount) {
      var formatter = new Intl.NumberFormat('en-US', {style:'currency',currency:'PHP'});
      return formatter.format(amount)
    };

    FoxCAPI.defaultRegion = function () {
      return app_config.default_region;
    };

    FoxCAPI.defaultCover = function() {
      return app_config.default_cover;
    }

    FoxCAPI.setDefaultCover = function (img) {
      var cover = app_config.default_cover;
      $(img).attr('src', cover);
    };

    FoxCAPI.getAPIResource = function () {
      return app_config.resource;
    };

    FoxCAPI.isValidEmail = function (email) {
      var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      return regex.test(email);
    };

    FoxCAPI.isValidMobileNumber = function (mobile_number) {
      var phoneno = /^\d{12}$/;
      if(mobile_number.match(phoneno)) {
        return true;
      }
      else {
        return false;
      }
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

    FoxCAPI.setAppShop = function (reference_id) {
      $('#local-data-shop').val(reference_id);
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

      var args = {
        'region': region,
        'province': province,
        'city': city,
        'brgy': brgy
      };

      object_user_location = args;
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

    FoxCAPI.toggleCollapseCont = function (elem, callback = null) {
      var state = $(elem).css('display');
      if((state == 'block') || (state == 'flex')) {
        $(elem).slideUp(function () {
          if(callback != null) {
            callback({'action':'close'});
          }
        });
      }
      else {
        $(elem).slideDown(function () {
          if(callback != null) {
            callback({'action':'open'});
          }
        });
      }
    };

    FoxCAPI.toggleVisibility = function (eyeElem, passElem, init) {
      /*Unsuccess Code*/
    };

    FoxCAPI.passwordVisible = function (passElem) {

      if($(passElem).attr('type') == 'password') {
        $(passElem).attr('type','text');
        $(".eye-pass-open").css("opacity",1);
        $(".eye-pass-close").css("opacity",0);
      }
      else if($(passElem).attr('type') == 'text') {
        $(passElem).attr('type','password');
        $(".eye-pass-open").css("opacity",0);
        $(".eye-pass-close").css("opacity",1);
      }
      else {

      }
    };

    FoxCAPI.numCounterDisplay = function (min, max, elem, callback) {
      var time      = [0,250,500,800,300,1200,100,2000];
      var i         = 1;
      if(max == 0) {
        var time_index  = Math.floor(Math.random() * 7) + 1;
        setTimeout(function () {
          callback();
        },time[time_index]);
      }
      else {
        function looper() {
          var time_index  = Math.floor(Math.random() * 7) + 1;
          setTimeout(function () {
            i++;
            $(elem).text(i);
            if(i == max) { callback(); }
            if (i < max) { looper(); }
          },time[time_index]);
        }
        looper();
      }
    };

    FoxCAPI.quantityEditor = function (elem, action, callback) {

      var min = parseInt($(elem).attr('min'));
      var max = parseInt($(elem).attr('max'));
      var val = parseInt($(elem).val());

      FoxCAPI.console('LOG-04092021113158-15P: OLD', {'min':min, 'max':max, 'val':val, 'action':action, 'elem':elem});

      if(action == '+') {
        if(val < max) {
          val = val + 1;
          $(elem).val(val);
        }
      }
      else if(action == '-') {
        if(val > min) {
          val = val - 1;
          $(elem).val(val);
        }
      }
      else {
        console.error('Action parameter is out of range in FoxCAPI.quantityEditor() function');
      }

      FoxCAPI.console('LOG-04092021113158-15P: NEW', {'min':$(elem).attr('min'), 'max':$(elem).attr('max'), 'val':val, 'action':action, 'elem':elem});

      callback(val);
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

    FoxCAPI.ConvertToNumberComma = function (number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    FoxCAPI.convertDateTime = function (datetime) {

      var date  = new Date(datetime);
      var time    = date.toLocaleTimeString();
      
      var month   = date.getMonth();
      var day     = date.getDate();
      var year    = date.getFullYear();

      var month_word = ["Jan.","Feb.","Mar.","Apr.","May","Jun.","Jul.","Aug.","Sep.","Oct.","Nov.","Dec."];
      return month_word[month]+" "+day+" "+year+" "+time
    };

    FoxCAPI.getDateTime = function () {
      var date    = new Date();
      var month   = date.getMonth() + 1;
      var day     = date.getDate();
      var year    = date.getFullYear();
      var hour    = date.getHours();
      var minute  = date.getHours();
      var second  = date.getSeconds();

      if(month <= 9) {month = "0"+month;}
      if(day <= 9) {day = "0"+day;}

      if(hour <= 9) {hour = "0"+hour;}
      if(minute <= 9) {minute = "0"+minute;}
      if(second <= 9) {second = "0"+second;}

      return year+"-"+month+"-"+day+" "+hour+":"+minute+":"+second;
    };

    FoxCAPI.getDate = function () {
      var date    = new Date();
      var month   = date.getMonth() + 1;
      var day     = date.getDate();
      var year    = date.getFullYear();

      if(month <= 9) {month = "0"+month;}
      if(day <= 9) {day = "0"+day;}

      return year+'-'+month+'-'+day;
    };

    FoxCAPI.getTime = function () {
      var date    = new Date();
    };

    FoxCAPI.timeSince = function (date) {
      var seconds = Math.floor((new Date() - date) / 1000);
      var interval = seconds / 31536000;

      if (interval > 1) {
        return Math.floor(interval) + " year";
      }

      interval = seconds / 2592000;
      if (interval > 1) {
        return Math.floor(interval) + " month";
      }
      interval = seconds / 86400;
      if (interval > 1) {
        return Math.floor(interval) + " day";
      }
      interval = seconds / 3600;
      if (interval > 1) {
        var hours     = Math.floor(seconds / 3600);
        return hours +' hour';
      }
      interval = seconds / 60;
      if (interval > 1) {
        var minutes = Math.floor(interval);
        var seconds = Math.floor(seconds);
        var minus_m = minutes * 60;
        return minutes+' min. and '+(Math.floor(seconds) - minus_m) +' sec.';
      }
      return Math.floor(seconds) + " seconds";
    };

    FoxCAPI.scrollToElement01 = function (element) {
      /*
      var scrollDiv = document.getElementById(elemID).offsetTop;
      window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
      */
      document.querySelector(element).scrollIntoView({
        behavior: 'smooth'
      });
    };

    FoxCAPI.makeReferenceID = function (key) {

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
        return navigator.geolocation.getCurrentPosition(FoxCAPI.getGeolocation);
      }
    };

    FoxCAPI.getGeolocation = function (position) {
      return position;
    };

    FoxCAPI.toggleBttn01 = function (elemID, callback) {
      var state = $(elemID).attr('data-state');
      if((state == 'true') || (state == 1) ||(state == true)) {
        $(elemID+' .thumb').animate({'margin-left':'0px'},'fast', function () {
          $(this).removeClass('on').addClass('off');
          $(elemID).attr('data-state','false');
          callback(0);
        });
      }
      else if((state == 'false') || (state == 0) || (state == false)) {
        $(elemID+' .thumb').animate({'margin-left':'30px'},'fast', function () {
          $(this).removeClass('off').addClass('on');
          $(elemID).attr('data-state','true');
          callback(1);
        });
      }
      else {
        console.error("Unknown State:"+state);
      }
    };

    FoxCAPI.setToggleBttn01 = function (elemID, state = false, callback) {
      if((state == 'false') || (state == false) || (state == 0)) {
        $(elemID+' .thumb').animate({'margin-left':'0px'},'fast', function () {
          $(this).removeClass('on').addClass('off');
          $(elemID).attr('data-state','false');
          if((callback != null) || (callback != '')) {
            callback(state);
          }
        });
      }
      else if((state == 'true') || (state == true) || (state == 1)) {
        $(elemID+' .thumb').animate({'margin-left':'30px'},'fast', function () {
          $(this).removeClass('off').addClass('on');
          $(elemID).attr('data-state','true');
          if((callback != null) || (callback != '')) {
            callback(state);
          }
        });
      }
      else {}
    };

    FoxCAPI.getLocationProvinceList = function (region, callback) {
      var url = FoxCAPI.getAPIResource() + "common/getProvinceList/"+region;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('LOG-04092021113214-VYM', response);
          callback(response);
        }
      });
    };

    FoxCAPI.toggleCont01 = function (buttonID, containerID) {
      var block = $(containerID).css('display');
      if(block == 'block') {
        $(containerID).slideUp();
        $(buttonID).css({'transform':'rotate(0deg)'});
      }
      else {
        $(containerID).slideDown();
        $(buttonID).css({'transform':'rotate(90deg)'});
      }
    };

    FoxCAPI.isFunction = function (name) {
      return name && {}.toString.call(name) === '[object Function]';
    };

    FoxCAPI.modalRating = function () {

    };

    FoxCAPI.getLocationCityList = function (province, callback) {
      var url = FoxCAPI.getAPIResource() + "common/getCityList/"+province;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('LOG-04092021113226-WA3', response);
          callback(response);
        }
      });
    };

    FoxCAPI.getLocationBarangayList = function (city, callback) {
      var url = FoxCAPI.getAPIResource() + "common/getBarangayList/"+city;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('LOG-04092021113233-A5L', response);
          callback(response);
        }
      });
    };

    FoxCAPI.saveNearbySearch = function (args, callback) {
      var url = FoxCAPI.getAPIResource() + "common/saveNearbySearch?"+jQuery.param(args);
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('LOG-04092021113243-EXW', response);
          callback(response);
        }
      });
    };

    FoxCAPI.getNearbyRecentSearches = function (args, callback) {
      var url = FoxCAPI.getAPIResource() + "common/recentNearbySearches?"+jQuery.param(args);
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('LOG-04092021113255-OLK', response);
          callback(response);
        }
      });
    };

    FoxCAPI.getNearbyShop = function (args, callback) {
      var url = FoxCAPI.getAPIResource() + "shop-food/getNearBy?"+jQuery.param(args);
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('LOG-04092021113306-O8X', response);
          callback(response);
        }
      });
    };

    FoxCAPI.appFoxcityPrerequisite = function (callback) {
      var url = FoxCAPI.getAPIResource() + "common/appFoxcityPrerequisite";
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('LOG-04092021113327-4NN', response);
          $('#local-data-app-prerequisite').val(encodeURIComponent(JSON.stringify(response)));
          callback(response);
        }
      });
    };

    FoxCAPI.getUserLastLocation = function (callback) {
      var url = FoxCAPI.getAPIResource() + "user/getLastLocation/"+FoxCAPI.getAppUserRefID();
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('LOG-04092021113339-V9Z', response);
          FoxCAPI.setLocalLocation(response.region, response.province, response.city, response.brgy);
          callback(response)
        }
      });
    };

    FoxCAPI.getFeaturedPlaces = function (args, callback) {
      var url = FoxCAPI.getAPIResource() + "shop-food/getFeaturedPlaces?"+jQuery.param(args);
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('LOG-04092021113349-F4K', response);
          callback(response)
        }
      });
    };

    FoxCAPI.getShopInfo = function (args, callback) {
      FoxCAPI.console('LOG-04092021113406-LDH', args);
      var url = FoxCAPI.getAPIResource() + "shop-food/getShopInfo?"+jQuery.param(args);
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('LOG-04092021113400-M94', response);
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

    FoxCAPI.setMaxDatePicker = function (elem, days) {
      var today = new Date();
      var dd = today.getDate() + days;
      var mm = today.getMonth()+1; //January is 0!
      var yyyy = today.getFullYear();
      if(dd<10){ dd='0'+dd } 
      if(mm<10){ mm='0'+mm } 
      today = yyyy+'-'+mm+'-'+dd;
      $(elem).attr("max",today);
    };

    FoxCAPI.setMinDatePicker = function (elem, days) {
      var today = new Date();
      var dd = today.getDate() - days;
      var mm = today.getMonth()+1; //January is 0!
      var yyyy = today.getFullYear();
      if(dd<10){ dd='0'+dd } 
      if(mm<10){ mm='0'+mm } 
      today = yyyy+'-'+mm+'-'+dd;
      $(elem).attr("min",today);
    };

    FoxCAPI.openExtendView01 = function (url, onClose, callback = null) {
      $(".app-extend-view-01").css({'display':'block'});
      $(".app-extend-view-01").animate({'opacity':1},'fast', function () {
        $(".app-extend-view-01 .body").animate({'margin-top':'0px','opacity':1},'fast', function () {
          FoxCAPI.showLoading();
          $(".app-extend-view-01 .body .container").load(url, function () {
            FoxCAPI.hideLoading();
            if((callback != '') || (callback != null) || (typeof(callback) != 'undefined')) {
              callback();
            }

            if((onClose != '') || (onClose != null) || (typeof(onClose) != 'undefined')) {
              $(".app-extend-view-01 .header").attr({"onclick":"FoxCAPI.closeExtendView01("+onClose+")"});
            }
          });
        });
      });
    };

    FoxCAPI.closeExtendView01 = function (callback = null) {
      $(".app-extend-view-01 .body").animate({'margin-top':'500px','opacity':0},'fast', function () {
        $(".app-extend-view-01").animate({'opacity':0},'fast', function () {
          $(".app-extend-view-01").css({'display':'none'});
          if((callback == '') || (callback == null) || (typeof(callback) == 'undefined')) {
            /* No nothing */
            $(".app-extend-view-01 .body .container").html('');
          }
          else {
            callback();
            $(".app-extend-view-01 .body .container").html('');
          }
        });
      });
    };  

    FoxCAPI.sendMyHeartBeat = function (callback) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          FoxCAPI.makeHeartbeat(position.coords.latitude, position.coords.longitude, FoxCAPI.getAppUserRefID(), function () {
            callback();
          });
        });
      }
    };

    FoxCAPI.getGeoLatLon = function (callback) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          var args = {
            "lat":position.coords.latitude,
            "lon":position.coords.longitude
          };
          callback(args);
        });
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
          FoxCAPI.console('LOG-04092021113412-CRO', response);
          callback(response)
        }
      });
    }

    FoxCAPI.addFoodItemCart = function (args, callback) {
      var url = FoxCAPI.getAPIResource() + "cart/addProduct?data="+JSON.stringify(args);
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'post',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('LOG-04092021113422-ISD', response);
          FoxCAPI.console('LOG-04092021113430-MBD', url);
          callback(response);
        }
      });
    };

    FoxCAPI.getCartReferenceID = function (args, callback) {
      var url = FoxCAPI.getAPIResource() + "cart/getCartRefID?"+jQuery.param(args);
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          callback(response);
        }
      });
    };

    FoxCAPI.countCartShop = function (callback) {
      var url = FoxCAPI.getAPIResource() + "cart/countCartShop?token="+FoxCAPI.getAppToken()+"&user_refid="+FoxCAPI.getAppUserRefID();
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('LOG-04092021113133-VXY', response);
          callback(response);
        }
      });
    };

    FoxCAPI.getCartItemByShop = function (shop_refid, callback) {
      var url = FoxCAPI.getAPIResource() + "cart/getItemInCartByUserAndShop?token="+FoxCAPI.getAppToken()+"&shop_refid="+shop_refid+"&user_refid="+FoxCAPI.getAppUserRefID()+"&status=1";
      FoxCAPI.console('LOG-04112021114933-119', url);
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('LOG-04102021013416-BLE', response);
          callback(response);
        }
      });
    }

    FoxCAPI.countItemInCart = function (callback) {
      var url = FoxCAPI.getAPIResource() + "cart/countItemInCart?token="+FoxCAPI.getAppToken()+"&user_refid="+FoxCAPI.getAppUserRefID();
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('LOG-04102021013427-JC0', response);
          callback(response);
        }
      });
    };

    FoxCAPI.getShippingFee = function (args, callback) {
      var url = FoxCAPI.getAPIResource() + "shipping/getShippingFee?token="+FoxCAPI.getAppToken()+"&shop_refid="+args.shop_refid+"&user_refid="+FoxCAPI.getAppUserRefID()+"&address_refid="+args.address_refid;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('LOG-04112021070947-2DN', response);
          callback(response);
        }
      });
    };

    FoxCAPI.createDeliveryAddress = function (args, callback) {
      var url = FoxCAPI.getAPIResource() + "user/createDeliveryAddress?"+jQuery.param(args);
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('LOG-04132021060058-HSD', response);
          callback(response);
        }
      });
    };

    FoxCAPI.getDeliveryAddress = function (callback) {
      var url = FoxCAPI.getAPIResource() + "user/getDeliveryAddress?token="+FoxCAPI.getAppToken()+"&user_refid="+FoxCAPI.getAppUserRefID();
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('LOG-04132021060103-3U4', response);
          callback(response);
        }
      });
    };

    FoxCAPI.isFirstOrder = function (callback) {
      var url = FoxCAPI.getAPIResource() + "cart/isFirstOrder?token="+FoxCAPI.getAppToken()+"&user_refid="+FoxCAPI.getAppUserRefID();
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('LOG-04142021085034-PIZ', response);
          callback(response);
        }
      });
    };

    FoxCAPI.placeOrder = function (args, callback) {
      var url = FoxCAPI.getAPIResource() + "cart/placeOrder?"+jQuery.param(args);
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('LOG-04142021085025-7LH', response);
          callback(response);
        }
      });
    };

    FoxCAPI.getAllDeliveryAddress = function (callback) {
      var url = FoxCAPI.getAPIResource() + "user/getAllDeliveryAddress?token="+FoxCAPI.getAppToken()+"&user_refid="+FoxCAPI.getAppUserRefID();
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('LOG-04142021085020-PLT', response);
          callback(response);
        }
      });
    };

    FoxCAPI.switchDeliveryAddress = function (args, callback) {
      var url = FoxCAPI.getAPIResource() + "user/switchDeliveryAddress?"+jQuery.param(args)
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('LOG-04242021034517-3NB', response);
          callback(response);
        }
      });
    };

    FoxCAPI.getRecentlyOrdered = function (callback) {
      var url = FoxCAPI.getAPIResource() + "common/getRecentlyOrdered?token="+FoxCAPI.getAppToken()+"&user_refid="+FoxCAPI.getAppUserRefID();
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('LOG-04242021034510-T8X', response);
          callback(response);
        }
      });
    };

    FoxCAPI.createShopBookMark = function (shop_refid, callback) {
      var url = FoxCAPI.getAPIResource() + "user/createShopBookMark?token="+FoxCAPI.getAppToken()+"&user_refid="+FoxCAPI.getAppUserRefID()+"&shop_refid="+shop_refid;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('LOG-04242021034501-G6N', response);
          callback(response);
        }
      });
    };

    FoxCAPI.isBookShopMarked = function (shop_refid, callback) {
      var url = FoxCAPI.getAPIResource() + "user/isBookShopMarked?token="+FoxCAPI.getAppToken()+"&user_refid="+FoxCAPI.getAppUserRefID()+"&shop_refid="+shop_refid;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('LOG-04242021034455-X2Q', response);
          callback(response);
        }
      });
    };

    FoxCAPI.appShopFoodPrerequisite = function (callback) {
      var url = FoxCAPI.getAPIResource() + "common/appShopFoodPrerequisite?token="+FoxCAPI.getAppToken()+"&user_refid="+FoxCAPI.getAppUserRefID();
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('LOG-04242021034449-P15', response);
          callback(response);
        }
      });
    };

    FoxCAPI.newOrders = function (callback) {
      var url = FoxCAPI.getAPIResource() + "shop-food-orders/newOrders?token="+FoxCAPI.getAppToken()+"&shop_refid="+FoxCAPI.getAppShop();
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('LOG-04242021034439-BN3', response);
          callback(response);
        }
      });
    };

    FoxCAPI.ongoingOrders = function (callback) {
      var url = FoxCAPI.getAPIResource() + "shop-food-orders/ongoingOrders?token="+FoxCAPI.getAppToken()+"&shop_refid="+FoxCAPI.getAppShop();
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('LOG-04242021034439-BN3', response);
          callback(response);
        }
      });
    };

    FoxCAPI.completedOrders = function (date, callback) {
      var url = FoxCAPI.getAPIResource() + "shop-food-orders/completedOrders?token="+FoxCAPI.getAppToken()+"&shop_refid="+FoxCAPI.getAppShop()+"&date="+date;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.logShopAccess = function (shop_refid, callback) {
      var url = FoxCAPI.getAPIResource() + "shop-food-users/logShopAccess?token="+FoxCAPI.getAppToken()+"&user_refid="+FoxCAPI.getAppUserRefID()+"&shop_refid="+shop_refid;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('LOG-04242021034433-9V5', response);
          callback(response);
        }
      });
    };

    FoxCAPI.getOrderItem = function (order_refid, callback) {
      var url = FoxCAPI.getAPIResource() + "shop-food-orders/getOrderItem?token="+FoxCAPI.getAppToken()+"&reference_id="+order_refid;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('LOG-04242021034422-8WH', response);
          callback(response);
        }
      });
    };

    FoxCAPI.searchFood = function (args, callback) {
      var url = FoxCAPI.getAPIResource() + "search/food?"+jQuery.param(args);
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('LOG-04242021034415-MR8', response);
          callback(response);
        }
      });
    };

    FoxCAPI.searchShop = function (args, callback) {
      var url = FoxCAPI.getAPIResource() + "search/shop?"+jQuery.param(args);
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('LOG-04242021034404-GGR', response);
          callback(response);
        }
      });
    };

    FoxCAPI.makeUserSetting = function (name, value, callback) {
      var url = FoxCAPI.getAPIResource() + "user/makeSetting?user_refid="+FoxCAPI.getAppUserRefID()+"&name="+name+"&value="+value;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.getALLSetting = function (callback) {
      var url = FoxCAPI.getAPIResource() + "user/getALLSetting/"+FoxCAPI.getAppUserRefID();
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.editor = function (args, callback) {
      /*******************************************************
      Usage Format
      ********************************************************
      FoxCAPI.editor({
          "token":FoxCAPI.getAppToken(),
          "user_refid":FoxCAPI.getAppUserRefID(),
          "tbl":"",
          "wclm":"[where column name]",
          "wval":"[where column value]",
          "uclm":"[to update column name]",
          "uval":"[to update column new value]"
        }, function () {
          Your code here...
      });
    
      */
      var url = FoxCAPI.getAPIResource() + "common/editor?"+jQuery.param(args);
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.getAllShopProducts = function (shop_refid, callback) {
      var url = FoxCAPI.getAPIResource() + "shop-food/getAllShopProducts?token="+FoxCAPI.getAppToken()+"&shop_refid="+shop_refid;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.makeSeen = function (data_refid, callback) {
      var url = FoxCAPI.getAPIResource() + "common/seen?token="+FoxCAPI.getAppToken()+"&data_refid="+data_refid+"&user_refid="+FoxCAPI.getAppUserRefID();
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.updatePlaceOrderStatus = function (reference_id, status, callback) {
      var url = FoxCAPI.getAPIResource() + "cart/updatePlaceOrderStatus?token="+FoxCAPI.getAppToken()+"&reference_id="+reference_id+"&status="+status;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.makeHeartbeat = function (latitude, longitude, user_refid, callback) {
      var url = FoxCAPI.getAPIResource() + "common/makeHeartbeat?token="+FoxCAPI.getAppToken()+"&user_refid="+user_refid+"&latitude="+latitude+"&longitude="+longitude;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.appRiderPrerequisite = function (callback) {
      var url = FoxCAPI.getAPIResource() + "common/appRiderPrerequisite?token="+FoxCAPI.getAppToken()+"&user_refid="+FoxCAPI.getAppUserRefID();
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.getHotSale = function (city_code, callback) {
      var url = FoxCAPI.getAPIResource() + "common/getHotSale?city_code="+city_code;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.sentSMS = function (number, brandname, message, callback) {
      
      //var url = FoxCAPI.getAPIResource() + "vonage/sms/send?token="+FoxCAPI.getAppToken()+"&number="+number+"&brandname="+brandname+"&message="+message;
      var url = FoxCAPI.getAPIResource() + "twilio/send?token="+FoxCAPI.getAppToken()+"&number="+number+"&brandname="+brandname+"&message="+message;
      
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.sendEmail = function (subject, inquiry, email, name, callback) {
      var url = FoxCAPI.getAPIResource() + "common/sendEmail?token="+FoxCAPI.getAppToken()+"&subject="+subject+"&inquiry="+inquiry+"&email="+email+"&name="+name;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.getNearByShop = function (args, callback) {
      var url = FoxCAPI.getAPIResource() + "shop-food/getNearByShop?"+jQuery.param(args);
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.getColumn = function (args, callback) {
      /*
      FoxCAPI.getColumn({
        'token':'',
        'table':'',
        'gclm':'',
        'wclm':'',
        'wval':''
      }, function (response) {

      });
      */
      

      var url = FoxCAPI.getAPIResource() + "common/getColumn?"+jQuery.param(args);
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.isValidPassword = function (password) {
      var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
      if(password.match(passw)) {
        return true;
      }
      else {
        return false;
      }
    };

    FoxCAPI.changePassword = function (args, callback) {
      /*
      var args = {
        'token':'',
        'user_refid':'',
        'op':'',
        'np':''
      }
      */

      var url = FoxCAPI.getAPIResource() + "user/changePassword?"+jQuery.param(args);
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('getHotSale url', url);
          FoxCAPI.console('getHotSale', response);
          callback(response);
        }
      });
    };

    FoxCAPI.sendOTP = function (callback) {
      var url = FoxCAPI.getAPIResource() + "user/sendOTP?token="+FoxCAPI.getAppToken()+"&user_refid="+FoxCAPI.getAppUserRefID();
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.orderView = function (type, callback) {
      var url = FoxCAPI.getAPIResource() + "shop-food-orders/orderView?type="+type+"&token="+FoxCAPI.getAppToken()+"&user_refid="+FoxCAPI.getAppUserRefID();
      $.ajax({
        url: url,
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.orderCancel = function (order_refid, callback) {
      var url = FoxCAPI.getAPIResource() + "shop-food-orders/cancel?token="+FoxCAPI.getAppToken()+"&user_refid="+FoxCAPI.getAppUserRefID()+"&order_refid="+order_refid;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.getRatings = function (scope, target_refid, callback) {
      var url = FoxCAPI.getAPIResource() + "rating/rating?token="+FoxCAPI.getAppToken()+"&target_refid="+target_refid+"&scope="+scope+"&user_refid="+FoxCAPI.getAppUserRefID();
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.searchFoodAndShop = function (keyword, city, callback) {
      var url = FoxCAPI.getAPIResource() + "search/search/?keyword="+keyword+"&user_refid="+FoxCAPI.getAppUserRefID()+"&city="+city;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.getbookmarked = function (callback) {
      var url = FoxCAPI.getAPIResource() + "user/getbookmarked?user_refid="+FoxCAPI.getAppUserRefID();
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.getCategoryItems = function (category, page, callback) {
      var url = FoxCAPI.getAPIResource() + "category/getCategoryItems?token="+FoxCAPI.getAppToken()+"&user_refid="+FoxCAPI.getAppUserRefID()+"&city_code="+object_user_location.city+"&category="+category+"&page="+page;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.orderActivity = function (order_refid, callback) {
      var url = FoxCAPI.getAPIResource() + "shop-food-orders/activity?token="+FoxCAPI.getAppToken()+"&order_refid="+order_refid+"&user_refid="+FoxCAPI.getAppUserRefID();
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.shopDataCounter = function (shop_refid, callback) {
      var url = FoxCAPI.getAPIResource() + "shop-food/counter?token="+FoxCAPI.getAppToken()+"&&user_refid="+FoxCAPI.getAppUserRefID()+"&shop_refid="+shop_refid;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.htmlLoaded = function (loadTo, url, callback) {
      FoxCAPI.showLoading();
      $(loadTo).load(url, function () {
        callback();
      });
    };

    FoxCAPI.makeNotify = function (args, callback) {

      /*
      FoxCAPI.makeNotify({
        "token":FoxCAPI.getAppToken(),
        "type":"",
        "content":"",
        "user_tag":["Array of user id"],
        "info":""
      });
      */

      var url = FoxCAPI.getAPIResource() + "notify/makeNotify?"+jQuery.param(args);
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.heartbeatList = function (user_refid, page, callback) {
      var url = FoxCAPI.getAPIResource() + "common/heartbeatList?token="+FoxCAPI.getAppToken()+"&user_refid="+user_refid+"&page="+page;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.removeItemFromCart = function (reference_id, callback) {
      var url = FoxCAPI.getAPIResource() + "cart/removeItemFromCart?token="+FoxCAPI.getAppToken()+"&reference_id="+reference_id;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.getProductPhotos = function (tag_refid, callback) {
      var url = FoxCAPI.getAPIResource() + "photo/getProductPhotos?token="+FoxCAPI.getAppToken()+"&tag_refid="+tag_refid;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.userLogout = function (callback) {
      var url = FoxCAPI.getAPIResource() + "user/logout?token="+FoxCAPI.getAppToken();
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.getPlaceOrderStatus = function (order_refid, callback) {
      var url = FoxCAPI.getAPIResource() + "cart/getPlaceOrderStatus/"+order_refid;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.getWalletBalance = function (callback) {
      var url = FoxCAPI.getAPIResource() + "wallet/getBalance?token="+FoxCAPI.getAppToken()+"&user_refid="+FoxCAPI.getAppUserRefID();
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.priceUpdate = function (product_refid, shop_refid, price, callback) {
      var url = FoxCAPI.getAPIResource() + "shop-food-product/priceUpdate?token="+FoxCAPI.getAppToken()+"&user_refid="+FoxCAPI.getAppUserRefID()+"&product_refid="+product_refid+"&shop_refid="+shop_refid+"&price="+price;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.neighborCity = function (city_code, callback) {
      var url = FoxCAPI.getAPIResource() + "common/neighborCity/"+city_code;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.getCityInfo = function (city_code, callback) {
      var url = FoxCAPI.getAPIResource() + "common/getCityInfo/"+city_code;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.gh58vGFeD = function (wallet_refid, user_refid, amount, addnote, callback) {
      var url = FoxCAPI.getAPIResource() + "wallet/gh58vGFeD?token="+FoxCAPI.getAppToken()+"&wallet_refid="+wallet_refid+"&user_refid="+user_refid+"&amount="+amount+"&addnote="+addnote;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.hb7gBvG8i = function (wallet_refid, user_refid, amount, addnote, callback) {
      var url = FoxCAPI.getAPIResource() + "wallet/hb7gBvG8i?token="+FoxCAPI.getAppToken()+"&wallet_refid="+wallet_refid+"&user_refid="+user_refid+"&amount="+amount+"&addnote="+addnote;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.hjy7cvf4w = function (wallet_refid, user_refid, amount, addnote, callback) {
      var url = FoxCAPI.getAPIResource() + "wallet/hjy7cvf4w?token="+FoxCAPI.getAppToken()+"&wallet_refid="+wallet_refid+"&user_refid="+user_refid+"&amount="+amount+"&addnote="+addnote;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.getCityMaxOrder = function (city_code, callback) {
      var url = FoxCAPI.getAPIResource() + "common/getCityMaxOrder/"+city_code;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.getAllMerchantNames = function (city_code, callback) {
      var url = FoxCAPI.getAPIResource() + "shop-food/getAllMerchantNames?city_code="+city_code;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.getMoreFeaturedPlaces = function (city_code, featured, callback) {
      var url = FoxCAPI.getAPIResource() + "shop-food/getMoreFeaturedPlaces?city_code="+city_code+"&featured="+featured;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.getDeliveryAddressByOrderRefID = function (order_refid, callback) {
      var url = FoxCAPI.getAPIResource() + "user/getDeliveryAddressByOrderRefID?token="+FoxCAPI.getAppToken()+"&order_refid="+order_refid;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.getShopServiceFee = function (shop_refid, callback) {
      var url = FoxCAPI.getAPIResource() + "shop-food/getShopServiceFee/"+shop_refid;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.getProductGroupType = function (type, product_refid, callback) {
      var url = FoxCAPI.getAPIResource() + "shop-food-product/getGroupType?type="+type+"&product_refid="+product_refid;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FoxCAPI.updateGroupType1 = function (type, product_refid, group_refid, group_value, callback) {
      var url = FoxCAPI.getAPIResource() + "shop-food-product/updateGroupType1?token="+FoxCAPI.getAppToken()+"&user_refid="+FoxCAPI.getAppUserRefID()+"&type="+type+"&product_refid="+product_refid+"&group_refid="+group_refid+"&group_value="+group_value;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    }

    FoxCAPI.getShopCoverPhoto = function (shop_refid, callback) {
      var url = FoxCAPI.getAPIResource() + "photo/getShopCoverPhoto/"+shop_refid;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    }

    FoxCAPI.toCustomer_orderAccepted = function (order_refid, callback) {
      var url = FoxCAPI.getAPIResource() + "twilio/call/?function=toCustomer_orderAccepted&order_refid="+order_refid;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    }

    FoxCAPI.toCustomer_orderDenied = function (order_refid, callback) {
      var url = FoxCAPI.getAPIResource() + "twilio/call/?function=toCustomer_orderDenied&order_refid="+order_refid;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    }

    FoxCAPI.toRider_notifyForNewTask = function (order_refid, rider_refid, callback) {
      var url = FoxCAPI.getAPIResource() + "twilio/call/?function=toRider_notifyForNewTask&order_refid="+order_refid+"&rider_refid="+rider_refid;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    }

    FoxCAPI.getProductStatus = function (product_refid, callback) {
      var url = FoxCAPI.getAPIResource() + "shop-food-product/call/?function=getProductStatus_common&product_refid="+product_refid;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    }

    FoxCAPI.getOrderStatus = function (order_dataid, callback) {
      var url = FoxCAPI.getAPIResource() + "shop-food-orders/orderView?type=ORDER_STATUS&order_dataid="+order_dataid;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    }

     FoxCAPI.userFacebook = function (first_name, last_name, social_id_facebook, mobile, callback) {
      var url = FoxCAPI.getAPIResource() + "user/facebook?function=create&first_name="+first_name+"&last_name="+last_name+"&social_id_facebook="+social_id_facebook+"&mobile="+mobile;
      $.ajax({
        url: url,
        headers: {'Access-Control-Allow-Origin': '*'},
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    }

    return FoxCAPI;
  }

  if(typeof(FoxCAPI) === 'undefined') {
    window.FoxCAPI = FoxCity_CommonAPI();
  };

}) (window);
