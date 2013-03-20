//scroll bars
(function($){
  $(window).load(function(){
    $(".scroll-pane").mCustomScrollbar({
      scrollButtons:{
      enable:false
      }
    });
  });
})(jQuery);


//Initial load of page
$(document).ready(sizeContent);

//Every resize of window
$(window).resize(sizeContent);

//Dynamically assign height for #content
function sizeContent() {
    var newHeight = $("html").height() - $("#header").height() - $("#footer").height() - 20;
    $("#content").css("height", newHeight);
}

//left menu dummy tree data
var data = [
    {
        label: 'node1',
        children: [
            { label: 'child1' },
            { label: 'child2' }
        ]
    },
    {
        label: 'node2',
        children: [
            { label: 'child3' },
            { label: 'child4' },
            { label: 'child5' },
            { label: 'child6' },
            { label: 'child7' },
            { label: 'child8' },
            { label: 'child9' },
            { label: 'child3' },
            { label: 'child4' },
            { label: 'child5' },
            { label: 'child6' },
            { label: 'child7' },
            { label: 'child8' },
            { label: 'child9' }
        ]
    }
];

$(function() {
    $('#tree1').tree({
        data: data,
        selectable: true
    });
});

$('#tree1').bind(
    'tree.click',
    function(event) {
        // The clicked node is 'event.node'
        var node = event.node;
        alert(node.name);
    }
);