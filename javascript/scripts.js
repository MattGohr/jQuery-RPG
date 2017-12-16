$(document).ready(function() {
  var defender, defenderFull = false, characterSelect = false;
  // var characterPowers

  // move to Enemies section
  function moveToEnemies() {
    console.log("choose section click");

    //grab all images
    $("#choose-section").each(function() {
      var image = $(this).children("div");
      image.remove();
      $("#enemies-section").append(image);

    });

    //toggle the characterSelect
    characterSelect = true;
  };

  function EnableClickEvent() {
    $(".images").on("click", imageClick);
  }

  // move Enemy to defender section
  function moveToDefender() {
    var image = $(event.target).parent().parent();
    image.remove();
    $("#defender-section").append(image);
  };

  // your player image click
  function imageClick() {
    console.log("imageclick");
    //grabs the column that the p tags are wrapped in
    var image = $(this);

    var imageParentID = image.parent().attr('id');

    //if in choose section
    if (imageParentID === "choose-section") {

      //remove image
      image.remove();

      //move to section
      $("#your-character-section").append(image);
      moveToEnemies();
    }

    //if in enemies section
    if (imageParentID === "enemies-section") {

      if (defenderFull === true) {
        //skip
      }

      //else move image to the defender section
      else {
        image.remove();
        $("#defender-section").append(image);
        defenderFull = true;
      }


    }
    EnableClickEvent();
  }

  //enable click event after full run
  EnableClickEvent();

  //attack button click
  $("#attack-button").on("click", function(){

    //check to see if chosen character and defener have been seleted

      //run some function that attacks

      //
  });



});
