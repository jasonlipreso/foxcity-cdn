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

    FCOffice.masterList = function (keyword, callback) {
      var url = FoxCAPI.getAPIResource() + "rider/rider_master_list?token="+FoxCAPI.getAppToken()+"&keyword="+keyword+"&user_refid="+FoxCAPI.getAppUserRefID()+"&city_code="+FCOffice.getCityCodeArray();
      console.log(url);
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

    FCOffice.masterList2 = function (keyword, page, callback) {
      var url = FoxCAPI.getAPIResource() + "rider/masterList?token="+FoxCAPI.getAppToken()+"&keyword="+keyword+"&user_refid="+FoxCAPI.getAppUserRefID()+"&city_code="+FCOffice.getCityCodeArray()+"&page="+page;
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

    FCOffice.getShopMasterList = function (keyword, page, callback) {
      var url = FoxCAPI.getAPIResource() + "shop-food/getList?token="+FoxCAPI.getAppToken()+"&keyword="+keyword+"&page="+page+"&city_code="+FCOffice.getCityCodeArray();
      console.log(url);
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

    FCOffice.getShopStaffList = function (shop_refid, callback) {
      var url = FoxCAPI.getAPIResource() + "shop-food/getShopStaff/"+shop_refid;
      console.log(url);
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

    FCOffice.shopProductMasterList = function (shop_refid, page, callback) {
      var url = FoxCAPI.getAPIResource() + "shop-food-product/productMasterList?token="+FoxCAPI.getAppToken()+"&shop_refid="+shop_refid+"&page="+page;
      console.log(url);
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
