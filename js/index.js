console.log("your index.js file is loaded correctly!")
$("myID").on("click",function(){
    console.log(" You clicked on #myID");
});

$( "button" ).hover(
    function() {
      $( this ).css( "background-color"," #2784F0 " );
    }, function() {
      $( this ).css ( "background-color","#87BFFF " );
    }
  );
$("my#ID").on("click",function(){
    $(".fadeMe").fadeToggle("slow");
});

