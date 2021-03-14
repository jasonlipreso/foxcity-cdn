(function (window) {

  'use strict'

  function FoxCity_ShopAPI() {
    var FoxShop = {};
    FoxShop.Initialize = function () {
      
    };

    FoxShop.close = function () {
      
    };

    return FoxShop;
  }

  if(typeof(FoxShop) === 'undefined') {
    window.FoxShop = FoxCity_ShopAPI();
  };

}) (window);
