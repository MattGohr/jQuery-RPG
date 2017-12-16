$(document).ready(function() {
  var defender, defenderFull = false,
    characterSelect = false;
  var characters = {
    "ryu": {
      "attack": 30,
      "health": 100
    },
    "kenMasters": {
      "attack": 25,
      "health": 140
    },
    "chunLi": {
      "attack": 20,
      "health": 170
    },
    "dhalsim": {
      "attack": 35,
      "health": 120
    }
  };

  //init character variables
  var yourCharacter, defenerCharacter;

  //testing the powers
  // console.log(characterPowers.ryu.attack);

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

  //fight
  function fight(){
    var yourNewHelth = characters[yourCharacter].health - characters[defenerCharacter].attack


  }

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
  $("#attack-button").on("click", function() {

    //check to see if chosen character and defener have been seleted
    if (defenderFull === true || characterSelect === true) {

      //log your character
      yourCharacter = $("#your-character-section").find('img').attr('id');

      //defender charaacter is the same as
      defenerCharacter = $("#defender-section").find('img').attr('id');

      console.log(characters[yourCharacter].attack);

      //fight
      fight()

    }



    //
  });



});
