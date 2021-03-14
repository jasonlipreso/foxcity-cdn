(function (window) {
  'use strict'
  function FoxCity_LayerSwitcher() {
    var FoxLS = {};
    FoxLS.Initialize = function () {
      $(document).ready(function () {
        $('.fc-ls-layers').css('display','none');
      });
    };

    FoxLS.openTemplate = function (elem, url) {
      $('.fc-ls-layers').css({'display':'none'});
      $(elem).load(url, function () {
        $(elem).css({'display':'block'});
      });
    };

    FoxLS.openPlain = function (elem) {
      $('.fc-ls-layers').css({'display':'none'});
    };

    FoxLS.close = function () {
      
    };

    return FoxLS;
  }

  if(typeof(FoxLS) === 'undefined') {
    window.FoxLS = FoxCity_LayerSwitcher();
  };

}) (window);

FoxLS.Initialize();