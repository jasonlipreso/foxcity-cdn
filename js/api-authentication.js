(function (window) {

  'use strict'

  function FoxCity_AuthAPI() {

    var FoxAuth = {};

    FoxAuth.guestLogin = function (app, email, password, token, callback) {
      var path = FoxCAPI.getResource()['api_guest_v1']+'login?app='+app+'&email='+email+'&password='+password+'&token='+token;
      $.ajax({
        url: path,
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          console.log(response);
          callback(response);
        }
      });
    };

    FoxAuth.guestLogout = function () {
      
    };

    FoxAuth.isValidToken = function (callback) {
      var path = FoxCAPI.getResource()['api_auth_v1']+'isValidToken?token='+FoxCAPI.getAppToken()+'&guest='+FoxCAPI.getAppGuest();
      $.ajax({
        url: path,
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          callback(response);
        }
      });
    };

    return FoxAuth;
  }

  if(typeof(FoxAuth) === 'undefined') {
    window.FoxAuth = FoxCity_AuthAPI();
  };

}) (window);
