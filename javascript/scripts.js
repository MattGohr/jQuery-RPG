$(document).ready(function() {
  var characterSelect = false;
  var defender;

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


  // your player image click
  $(".images").on("click", function() {
    console.log("imageclick");

    //grabs the column that the p tags are wrapped in
    var image = $(this);

    //image parent
    var imageParent = $(this).parent();

    //if in choose section
    if (image.parent("#choose-section")) {
      image.remove();
      $("#your-character-section").append(image);

      moveToEnemies();
    }


  });

  // move Enemy to defender section
  $("#enemies-section").on("click", function() {
    var image = $(event.target).parent().parent();
    image.remove();
    $("#defender-section").append(image);
  });

});
