(function (window) {

  'use strict'

  function FoxCityOffice() {

    var FCOffice = {};
    FCOffice.getCityCodeArray = function () {
      var len = object_office.city_code.length;
      if(len == 0) {
        console.error("No city code set on this office access");
      }
      else {
        return object_office.city_code;
      }
    };

    FCOffice.closePopupForm = function () {
      $(".app-office-blocker").css("display","none");
    };

    FCOffice.removeNewOrderIndex = function () {
      object_office.order_data.new_index = null;
    };

    FCOffice.getOrders = function (type, callback) {
      var url = FoxCAPI.getAPIResource() + "office/orders?token="+FoxCAPI.getAppToken()+"&type="+type+"&city_code="+FCOffice.getCityCodeArray()+"&user_refid="+FoxCAPI.getAppUserRefID();
      $.ajax({
        url: url,
        type: 'get',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        traditional: true,
        success: function (response) {
          console.log(url);
          FoxCAPI.console('', response);
          callback(response);
        }
      });
    };

    FCOffice.searchByName = function (keyword, shop_refid, callback) {
      var url = FoxCAPI.getAPIResource() + "rider/searchByName?token="+FoxCAPI.getAppToken()+"&user_refid="+FoxCAPI.getAppUserRefID()+"&keyword="+keyword+"&city_code="+FCOffice.getCityCodeArray()+"&shop_refid="+shop_refid;
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

    FCOffice.loadAllRiders = function (shop_refid, callback) {
      var url = FoxCAPI.getAPIResource() + "rider/loadAllRiders?token="+FoxCAPI.getAppToken()+"&user_refid="+FoxCAPI.getAppUserRefID()+"&city_code="+FCOffice.getCityCodeArray()+"&shop_refid="+shop_refid;
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

    FCOffice.masterList = function (callback) {
      var url = FoxCAPI.getAPIResource() + "rider/masterList?token="+FoxCAPI.getAppToken()+"&user_refid="+FoxCAPI.getAppUserRefID()+"&city_code="+FCOffice.getCityCodeArray();
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

    return FCOffice;
  }

  if(typeof(FCOffice) === 'undefined') {
    window.FCOffice = FoxCityOffice();
  };

}) (window);
