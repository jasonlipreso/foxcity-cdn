(function (window) {

  'use strict'

  function FoxCity_CommonAPI() {

    var FoxCAPI = {};

    FoxCAPI.getResource = function () {
      var domain = "http://127.0.0.1:8000/";
      return {
        "api_guest_v1":domain+"api/guest/v1/",
        "api_setting_v1":domain+"api/setting/v1/",
        "api_rider_v1":domain+"api/rider/v1/",
        "api_graph_v1":domain+"api/graph/v1/",
        "api_shop_v1":domain+"api/shop/v1/",
        "api_shop_product_v1":domain+"api/shop-product/v1/",
        "api_product_v1":domain+"api/product/v1/",
        "api_location_v1":domain+"api/location/v1/",
        "api_photo_v1":domain+"api/photo/v1/",
        "api_wallet_v1":domain+"api/wallet/v1/",
        "api_notification_v1":domain+"api/notification/v1/",
        "api_auth_v1":domain+"api/auth/v1/"
      }
    };

    FoxCAPI.createToken = function (identifier, callback) {
      var path = FoxCAPI.getResource()['api_setting_v1']+'refid?key='+identifier;
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

    FoxCAPI.getAppToken = function () {
      return $('#local-data-token').val();
    };

    FoxCAPI.getAppGuest = function () {
      return $('#local-data-guest').val();
    };

    FoxCAPI.getAppShop = function () {
      return $('#local-data-shop').val();
    };

    return FoxCAPI;
  }

  if(typeof(FoxCAPI) === 'undefined') {
    window.FoxCAPI = FoxCity_CommonAPI();
  };

}) (window);
