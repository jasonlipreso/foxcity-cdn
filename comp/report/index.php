<div class = "app-report-issue">
  <div class = "issue-cont">
    <img class = "issue-logo" src="../foxcity-cdn/img/logo-face-colored.png">
    <p class = "pdl-20 pdr-20 mt-10 fnt-fa fs-22 txt-a-c cl-light-gray fw-b lh-1-5">
      We're sorry for your <br>bad experience with us.
    </p>
    <div class = "pdl-20 pdr-20 mt-10">
      <p class = "fnt-fa fs-16 cl-orange fw-b">Report Issue</p>
      <p class = "fnt-fa fs-14 cl-light-gray lh-1-5 mt-10">Your report and feedback is highly appreciated it will help us to improve our app and business process.</p>
      <textarea class = "issue-txt fs-16 mt-10" id = "ght61qa8"></textarea>
      <div class = "d-f-sb mt-10">
        <button class = "bttn-01 ls-1" onclick=" FoxIssue.close()">Cancel</button>
        <button class = "bttn-07 ls-1" onclick="FoxIssue.submit()">Submit</button>
      </div>
    </div>

  </div>
</div>

<script type="text/javascript">

  (function (window) {

  'use strict'

  function FoxCity_Issue() {

    var FoxIssue = {};

    FoxIssue.open = function () {
      $(".app-report-issue").css("display","block");
      $(".issue-cont").animate({"bottom":"10px","opacity":1},"fast", function () {
        $(this).animate({"bottom":"0px"});
      });
    };

    FoxIssue.close = function () {
      $(".issue-cont").animate({"bottom":"10px"},"slow", function () {
        $(this).animate({"bottom":"-380px","opacity":1},"fast", function () {
          $(".app-report-issue").animate({"opacity":0},"fast", function () {
            $(".app-report-issue").css({"display":"none","opacity":1});
          });
        });
      });
    };

    FoxIssue.submit = function () {
      var feedback = $("#ght61qa8").val();
      if(feedback == '') {
        FoxSysMssg.info('', 'Please provide short explaination about your experience.', function () {
          $("#ght61qa8").focus();
        });
      }
      else {
        var url = FoxCAPI.getAPIResource() + "user/submit?token="+FoxCAPI.getAppToken()+"&user_refid="+FoxCAPI.getAppUserRefID()+"&feedback="+feedback;
        $.ajax({
          url: url,
          type: 'get',
          dataType: 'json',
          contentType: 'application/json; charset=utf-8',
          traditional: true,
          success: function (response) {
            if(response) {
              $("#ght61qa8").val('');
              FoxSysMssg.info("", "Feedback sent successfully.We will work on it.Thank you.", function () {
                FoxIssue.close();
              });
            }
            else {
              FoxSysMssg.info("", "Unable to sent feedback.", function () {
                FoxIssue.close();
              });
            }
          }
        });
      }
    };

    return FoxIssue;
  }

  if(typeof(FoxIssue) === 'undefined') {
    window.FoxIssue = FoxCity_Issue();
  };

}) (window);

</script>

<style type="text/css">
  .app-report-issue {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: #23232387;
    z-index: 310;
    display: none;
  }
  .app-report-issue .issue-cont {
    position: absolute;
    bottom: -380px;
    width: 100%;
    height: 380px;
    background-color: white;
    border-top: 10px solid #ffbc3a;
    opacity: 0.4;
  }
  .app-report-issue .issue-logo {
    display: block;
    margin: -70px auto 0px auto;
    width: 100px;
    height: 100px;
    background-color: white;
    padding: 10px;
    border-radius: 50%;
    box-sizing: border-box;
    border: 4px solid #ffbc3a;
  }
  .app-report-issue .issue-txt {
    outline: none;
    padding: 10px; 
    width: 100%;
    min-height: 100px;
    max-height: 100px;
    border: none;
    box-sizing: border-box;
    border: 1px solid #bdbaba;
  }
</style>

