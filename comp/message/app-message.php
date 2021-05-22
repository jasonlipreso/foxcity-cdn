<div class = "app-message" id = "info-app-message">
  <div class = "container">
    <div class = "header">
      <p id = "app-mssg-info-title"></p>
    </div>
    <div class = "body">
      <div class = "mssg">
        <p id = "app-mssg-info-mssg"></p>
        <button class = "ok-only bttn-05">OK</button>
      </div>
    </div>
  </div>
</div>

<div class = "app-message" id = "confirm-app-message">
  <div class = "container">
    <div class = "header">
      <p id = "app-mssg-confirm-title"></p>
    </div>
    <div class = "body">
      <div class = "mssg">
        <p id = "app-mssg-confirm-mssg"></p>
        <div class = "action-buttons mt-20">
          <button class = "bttn-05 app-confirm-close">NO</button>
          <button class = "bttn-02 app-confirm-yes">YES</button>
        </div>
      </div>
    </div>
  </div>
</div>

<style type="text/css">
  .app-message {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: #13121269;
    z-index: 330;
    display: none;
  }
  .app-message .container {
    display: block;
    margin: 0px auto 0px auto;
    width: 300px;
    height: auto;
    background-color: white;
    border-radius: 3px;
    opacity: 0;
  }
  .app-message .container .header {
    position: relative;
    width: 100%;
    height: 40px;
  }
  .app-message .container .header p {
    font-family: sans-serif;
    font-size: 14px;
    text-align: center;
    line-height: 40px;
    letter-spacing: 0.5px;
  }
  .app-message .container .body {
    position: relative;
    padding: 10px;
    width: 100%;
    height: auto;
    max-height: 300px;
    box-sizing: border-box;
    overflow: auto;
  }
  .app-message .container .action-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .app-message .container .body .mssg {
    overflow: auto;
  }
  .app-message .container .body .mssg p {
    font-family: sans-serif;
    font-size: 16px;
    text-align: center;
    line-height: 30px;
  }
  .app-message .container .body .mssg .ok-only {
    display: block;
    padding: 10px 40px;
    margin: 30px auto 0 auto;
  }
</style>

<script type="text/javascript">

  (function (window) {

  'use strict'

  function FoxCity_SysMssg() {

    var FoxSysMssg = {};

    FoxSysMssg.info = function (title = '', message, callback) {
      $('#info-app-message').css({'display':'block'});
      $('#app-mssg-info-title').text(title);
      $('#app-mssg-info-mssg').text(message);
      $('#info-app-message .container').animate({'opacity':1, 'margin-top':'120px'},'fast', function () {
        $(this).animate({'margin-top':'100px'},'slow', function () {
          $('#info-app-message .ok-only').attr('onclick','FoxSysMssg.info_close('+callback+')');
        });
      });
    };

    FoxSysMssg.info_close = function (callback) {
      $('.app-message .container').animate({'margin-top':'120px'},'slow', function () {
        $(this).animate({'margin-top':'0px','opacity':0},'fast', function () {
          $('#info-app-message').css({'display':'none'});
          $('#app-mssg-info-title').text('');
          $('#app-mssg-info-mssg').text('');
          if((callback != false) || (callback != null)) {
            callback();
          }
        });
      });
    };

    FoxSysMssg.confirm = function (title = '', message, onCancel, onOK) {
      $('#confirm-app-message').css({'display':'block'});
      $('#app-mssg-confirm-title').text(title);
      $('#app-mssg-confirm-mssg').text(message);
      $('#confirm-app-message .container').animate({'opacity':1, 'margin-top':'120px'},'fast', function () {
        $(this).animate({'margin-top':'100px'},'slow', function () {
          $('#confirm-app-message .app-confirm-close').attr('onclick',onCancel);
          $('#confirm-app-message .app-confirm-yes').attr('onclick',onOK);
        });
      });
    };

    FoxSysMssg.confirm_close = function () {
      $('.app-message .container').animate({'margin-top':'120px'},'slow', function () {
        $(this).animate({'margin-top':'0px','opacity':0},'fast', function () {
          $('#confirm-app-message').css({'display':'none'});
          $('#app-mssg-confirm-title').text('');
          $('#app-mssg-confirm-mssg').text('');
        });
      });
    };

    FoxSysMssg.warning = function () {

    };

    FoxSysMssg.error = function () {
      
    };

    return FoxSysMssg;
  }

  if(typeof(FoxSysMssg) === 'undefined') {
    window.FoxSysMssg = FoxCity_SysMssg();
  };

}) (window);

</script>