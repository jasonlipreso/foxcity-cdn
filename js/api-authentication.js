(function (window) {

  'use strict'

  function FoxCity_AuthAPI() {

    var FoxAuth = {};

    return FoxAuth;
  }

  if(typeof(FoxAuth) === 'undefined') {
    window.FoxAuth = FoxCity_AuthAPI();
  };

}) (window);
