$(document).ready(function() {
  var characterSelect = false;
  var defender;

  //THIS SHOULD WORK EVERY TIME I CLICK AN IMAGE
  // your player image click
  $("img").on("click", function() {
    console.log("imageclick");
    //if first time
    if (characterSelect === false){

      var image = $(this);
      image.remove();
      $("#your-character-space").append(image);
    }

    else {
        //check to see if it's in enemies

        //move to defender
    }

  });

  // move to Enemies section
  $("#choose-section").on("click", function() {
    console.log("choose section click");

    //grab all images
    $("#choose-section").each(function() {
      var image = $(this).children("img");
      image.remove();
      $("#enemies-section").append(image);
    });

    characterSelect = true;
  });


});
