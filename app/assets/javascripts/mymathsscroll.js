$(document).ready(function() {
  $('.scroll-pane').jScrollPane();
  });
  $(function()
  {
  $('.scroll-pane').jScrollPane(
    {
      verticalDragMinHeight: 20,
      verticalDragMaxHeight: 30,
      horizontalDragMinWidth: 20,
      horizontalDragMaxWidth: 20
    }
  );
  });

//Initial load of page
$(document).ready(sizeContent);

//Every resize of window
$(window).resize(sizeContent);

//Dynamically assign height
function sizeContent() {
    var newHeight = $("html").height() - $("#header").height() - $("#footer").height() - 20;
    $("#content").css("height", newHeight);
}
    