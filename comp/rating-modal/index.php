<div class = "abs-fit-screen d-none" id = "app-rating-modal">
  <!-- Append Content Here -->
</div>

<style type="text/css">
  #app-rating-modal {
    z-index: 240;
  }
</style>

<script type="text/javascript">

  /*
  ===========================================
  TO OPEN RATING MODAL
  ===========================================
  FCRatingModal.open({
    'title':'My Title',
    'message':'My Message',
    'category':'CATEGORY',
    'target_refid':''
  });
  ===========================================
  TO CHECK IF RATING EXIST
  ===========================================
  FCRatingModal.ratingExist({
    'category':'',
    'target_refid':'',
    'user_refid':''
  });
  */

  var object_rating_modal = {
    'category':'',
    'target_refid':'',
    'rate':null
  };

  (function (window) {
    'use strict'
    function FoxCity_RatingModal() {
      var FCRatingModal = {};
      FCRatingModal.open = function ( args ) {

        var config                        = FoxCAPI.getConfig();
        object_rating_modal.category      = args.category;
        object_rating_modal.target_refid  = args.target_refid;

        FoxCAPI.showLoading();
        $("#app-rating-modal").css('display','block');
        $("#app-rating-modal").load(config.app_cdn+"comp/rating-modal/content.php", function () {
          FoxCAPI.hideLoading();
          $("#app-rating-modal #title").text(args.title);
          $("#app-rating-modal #message").text(args.message);
          $("#app-rating-modal .modal").animate({'margin-top':'130px','opacity':1},'fast', function () {
            $("#app-rating-modal .modal").animate({'margin-top':'100px'},'slow', function () {
              
            });
          });
        });
      };

      FCRatingModal.submit = function () {

        if(object_rating_modal.rate == null) {
          FoxSysMssg.info('', 'Please give 1 to 5 stars based on your experience', function () {
            /* Callback not set */
          });
        }
        else {

        }

        var args = {
          'category': object_rating_modal.category,
          'target_refid': object_rating_modal.target_refid,
          'user_refid':FoxCAPI.getAppUserRefID(),
          'feedback':$("#app-rating-modal #feedback").val(),
          'rate':object_rating_modal.rate,
          'token': FoxCAPI.getAppToken()
        };

        var url = FoxCAPI.getAPIResource() + "rating/rate?"+jQuery.param(args);
        $.ajax({
          url: url,
          type: 'get',
          dataType: 'json',
          contentType: 'application/json; charset=utf-8',
          traditional: true,
          success: function (response) {
            FoxCAPI.console('', response);
            if(response.success) {
              if(object_rating_modal.category == 'ORDER_FOOD') {
                $("#ghvfdre3").click();
              }
              else {

              }

              FCRatingModal.close();
            }
          }
        });
      };

      FCRatingModal.ratingExist = function (args, callback) {
        
        var url = FoxCAPI.getAPIResource() + "rating/isExist?"+jQuery.param(args);
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

      FCRatingModal.rateStar = function (number) {
        if(number == 1) {
          object_rating_modal.rate = 1;
          document.getElementById("rate-star-bttn-01").setAttribute('style', 'fill:#fed70c');
          document.getElementById("rate-star-bttn-02").setAttribute('style', 'fill:#d6d6d6');
          document.getElementById("rate-star-bttn-03").setAttribute('style', 'fill:#d6d6d6');
          document.getElementById("rate-star-bttn-04").setAttribute('style', 'fill:#d6d6d6');
          document.getElementById("rate-star-bttn-05").setAttribute('style', 'fill:#d6d6d6');
        }
        else if(number == 2) {
          object_rating_modal.rate = 2;
          document.getElementById("rate-star-bttn-01").setAttribute('style', 'fill:#fed70c');
          document.getElementById("rate-star-bttn-02").setAttribute('style', 'fill:#fed70c');
          document.getElementById("rate-star-bttn-03").setAttribute('style', 'fill:#d6d6d6');
          document.getElementById("rate-star-bttn-04").setAttribute('style', 'fill:#d6d6d6');
          document.getElementById("rate-star-bttn-05").setAttribute('style', 'fill:#d6d6d6');
        }
        else if(number == 3) {
          object_rating_modal.rate = 3;
          document.getElementById("rate-star-bttn-01").setAttribute('style', 'fill:#fed70c');
          document.getElementById("rate-star-bttn-02").setAttribute('style', 'fill:#fed70c');
          document.getElementById("rate-star-bttn-03").setAttribute('style', 'fill:#fed70c');
          document.getElementById("rate-star-bttn-04").setAttribute('style', 'fill:#d6d6d6');
          document.getElementById("rate-star-bttn-05").setAttribute('style', 'fill:#d6d6d6');
        }
        else if(number == 4) {
          object_rating_modal.rate = 4;
          document.getElementById("rate-star-bttn-01").setAttribute('style', 'fill:#fed70c');
          document.getElementById("rate-star-bttn-02").setAttribute('style', 'fill:#fed70c');
          document.getElementById("rate-star-bttn-03").setAttribute('style', 'fill:#fed70c');
          document.getElementById("rate-star-bttn-04").setAttribute('style', 'fill:#fed70c');
          document.getElementById("rate-star-bttn-05").setAttribute('style', 'fill:#d6d6d6');
        }
        else if(number == 5) {
          object_rating_modal.rate = 5;
          document.getElementById("rate-star-bttn-01").setAttribute('style', 'fill:#fed70c');
          document.getElementById("rate-star-bttn-02").setAttribute('style', 'fill:#fed70c');
          document.getElementById("rate-star-bttn-03").setAttribute('style', 'fill:#fed70c');
          document.getElementById("rate-star-bttn-04").setAttribute('style', 'fill:#fed70c');
          document.getElementById("rate-star-bttn-05").setAttribute('style', 'fill:#fed70c');
        } 
        else {
          console.error("Invalid Rating Number:"+number);
        }
      };

      FCRatingModal.close = function () {
        $("#app-rating-modal .modal").animate({'margin-top':'130px'},'slow', function () {
          $(this).animate({'margin-top':'-300px','opacity':0},'fast', function () {
            $("#app-rating-modal").css('display','none').html('');
          });
        });
      };

      return FCRatingModal;
    }

    if(typeof(FCRatingModal) === 'undefined') {
      window.FCRatingModal = FoxCity_RatingModal();
    };
  }) (window);

</script>