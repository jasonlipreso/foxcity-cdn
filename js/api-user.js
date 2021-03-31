(function (window) {

  'use strict'

  function FoxCity_UserAPI() {
    var FoxUser = {};
    FoxUser.Register = function (args, callback) {

      if(args.first_name == '') {
        alert('Please provide Firstname');
      }
      else if(args.last_name == '') {
        alert('Please provide Lastname');
      }
      else if (args.birthday == '') {
        alert('Please provide birthday');
      }
      else if(!FoxCAPI.isValidEmail(args.email)) {
        alert('Please provide valid email');
      }
      else if(!FoxCAPI.isValidMobileNumber(args.mobile)) {
        alert('Please provide valid mobile number');
      }
      else if(args.password != args.password_confirm) {
        alert("Password doen\'t match ");
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
      console.log(args);
      //http://127.0.0.1:8000/api/ref_id=USR-033121081438-YXA&otp=4652
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

    return FoxUser;
  }

  if(typeof(FoxUser) === 'undefined') {
    window.FoxUser = FoxCity_UserAPI();
  };

}) (window);
