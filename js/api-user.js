(function (window) {

  'use strict'

  function FoxCity_UserAPI() {
    var FoxUser = {};
    FoxUser.Register = function (args, callback) {

      if(args.first_name == '') {
        alert('Please provide Firstname');
        FoxCAPI.hideLoading();
      }
      else if(args.last_name == '') {
        alert('Please provide Lastname');
        FoxCAPI.hideLoading();
      }
      else if (args.birthday == '') {
        alert('Please provide birthday');
        FoxCAPI.hideLoading();
      }
      else if(!FoxCAPI.isValidEmail(args.email)) {
        alert('Please provide valid email');
        FoxCAPI.hideLoading();
      }
      else if(!FoxCAPI.isValidMobileNumber(args.mobile)) {
        alert('Please provide valid mobile number, start with 63');
        FoxCAPI.hideLoading();
      }
      else if(args.password == '') {
        alert('Please provide password');
        FoxCAPI.hideLoading();
      }
      else if(!FoxCAPI.isValidPassword(args.password)) {
        alert('Invalid Password,Please provide at least one numeric digit, one uppercase and one lowercase letter'+args.password);
        FoxCAPI.hideLoading();
      }
      else if(args.password != args.password_confirm) {
        alert("Password doen\'t match");
        FoxCAPI.hideLoading();
      }
      else {
        var url = FoxCAPI.getAPIResource() + "user/register?"+jQuery.param(args);
        $.ajax({
          url: url,
          type: 'get',
          dataType: 'json',
          contentType: 'application/json; charset=utf-8',
          traditional: true,
          success: function (response) {
            callback(response);
          }
        });
      }
    };

    FoxUser.verifyOTP = function (args, callback) {
      var url = FoxCAPI.getAPIResource() + "common/verifyOTP_with_tag?"+jQuery.param(args);
        $.ajax({
          url: url,
          type: 'get',
          dataType: 'json',
          contentType: 'application/json; charset=utf-8',
          traditional: true,
          success: function (response) {
            callback(response);
          }
        });
    };

    FoxUser.login = function (args, callback) {
      FoxCAPI.console('Login Parameter: ', args);
      var url = FoxCAPI.getAPIResource() + "user/logIn?"+jQuery.param(args);
      $.ajax({
        url: url,
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('Login Response: ', response);
          callback(response);
        }
      });
    };

    FoxUser.getUser = function (args, callback) {
      var url = FoxCAPI.getAPIResource() + "user/getUser?"+jQuery.param(args);
      $.ajax({
        url: url,
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console('Login Response: ', response);
          callback(response);
        }
      });
    };

    FoxUser.forgotPassword = function (email, callback) {
      var url = FoxCAPI.getAPIResource() + "user/forgotPassword?email="+email;
      $.ajax({
        url: url,
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console(': ', response);
          callback(response);
        }
      });
    };

    FoxUser.updatePassword = function (args, callback) {
      var url = FoxCAPI.getAPIResource() + "user/updatePassword?"+jQuery.param(args);
      $.ajax({
        url: url,
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console(': ', response);
          callback(response);
        }
      });
    };

    FoxUser.updatePassword = function (args, callback) {
      var url = FoxCAPI.getAPIResource() + "user/updatePassword?"+jQuery.param(args);
      $.ajax({
        url: url,
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          FoxCAPI.console(': ', response);
          callback(response);
        }
      });
    };

    return FoxUser;
  }

  if(typeof(FoxUser) === 'undefined') {
    window.FoxUser = FoxCity_UserAPI();
  };

}) (window);
