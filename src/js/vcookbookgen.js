;VCBG = {
  parse_cookbook: function(data) {
    //TODO
    console.log("parse_cookbook");
    return 0;
  },

  test_f: function(x,y) {
    console.log("test_f");
    return (x*y);
  }
}

$(document).ready(function() {
  $.get('test.txt', function(data) {
    $("h1").html("oh hi");
  }, "text");
});

