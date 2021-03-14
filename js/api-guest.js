(function (window) {

  'use strict'

  function FoxCity_GuestAPI() {
    var FoxGuest = {};
    FoxGuest.Initialize = function () {
      
    };

    FoxGuest.close = function () {
      
    };

    return FoxGuest;
  }

  if(typeof(FoxGuest) === 'undefined') {
    window.FoxGuest = FoxCity_GuestAPI();
  };

}) (window);
