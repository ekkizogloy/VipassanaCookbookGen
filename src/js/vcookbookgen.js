// ------------------------------------------------------------------
// Vipassana Cookbook Generator
//    Luke Ekkizogloy
//
// This is the framework to enable Vipassana Meditation Centers
// to select recipes & generate special instructions for custom 
// cookbooks.
//
// Currently the recipes will be in JSON files for the first step
// and then will be converted to basic text files as a second step
// (if needed)
//
// Upon loading, the program will scan for existing recipe files and
// will populate a webpage with data based on the recipes available.
//
// ------------------------------------------------------------------


;VCBG = {

  // Read a single recipe file in JSON format into a datastructure
  read_recipe_json: function(json_file) {
    console.log("read_recipe_json("+json_file+")");

    var rec = $.getJSON(json_file, function(data) {
      console.log("success");
      console.log("Data:"+data.menu.id);
    })
      .done(function() {
        console.log("second success ... done");
      })
      .fail(function() {
        console.log("error");
      })
      .always(function() {
        console.log("complete");
      })
      .complete(function() {
        console.log("second complete");
      });

      return 0;
  }
}

$(document).ready(function() {

  VCBG.read_recipe_json("nomz.json");

  $.get('test.txt', function(data) {
    $("h1").html("oh hi");
  }, "text");
});

