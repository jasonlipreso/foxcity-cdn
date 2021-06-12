<?php header("Access-Control-Allow-Origin: *"); ?>
<div class = "container">
  <div class = "modal box-shadow-01">
    <p class = "fw-b fnt-fa fs-20 txt-a-c cl-black lh-1-5 mt-20" id = "title"></p>
    <p class = "fnt-fa fs-18 txt-a-c cl-light-gray mt-40 lh-1-5" id = "message"></p>
    <div class = "d-f-sa mt-15 star-rate-option">
      <svg onclick = "FCRatingModal.rateStar(1)" id = "rate-star-bttn-01" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="#d6d6d6" width="30px" height="30px"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
      <svg onclick = "FCRatingModal.rateStar(2)" id = "rate-star-bttn-02" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="#d6d6d6" width="30px" height="30px"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
      <svg onclick = "FCRatingModal.rateStar(3)" id = "rate-star-bttn-03" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="#d6d6d6" width="30px" height="30px"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
      <svg onclick = "FCRatingModal.rateStar(4)" id = "rate-star-bttn-04" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="#d6d6d6" width="30px" height="30px"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
      <svg onclick = "FCRatingModal.rateStar(5)" id = "rate-star-bttn-05" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="#d6d6d6" width="30px" height="30px"><g><path d="M0,0h24v24H0V0z" fill="none"/><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"/></g></svg>
    </div>
    <textarea class = "textarea-01" id = "feedback"></textarea>
    <button class="bttn-04 cl-white bg-yellow mt-20" onclick = "FCRatingModal.submit()">Submit</button>
    <button class="bttn-04 bttn-brd-01 cl-light-gray mt-20" onclick = "FCRatingModal.close()">Close</button>
  </div>
</div>

<style type="text/css">
  #app-rating-modal .container {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: #0c0c0c54;
    overflow: hidden;
  }
  #app-rating-modal .container .modal {
    display: block;
    width: 300px;
    height: auto;
    margin-top: -300px;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    background-color: white;
    border-radius: 3px;
    box-sizing: border-box;
    opacity: 0;
  }
</style>