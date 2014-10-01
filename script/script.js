//click sends a JS window message
$("#check-box").on("click", function(){
        alert("Hey!");
    })

$( "#text-box" ).submit(function( event ) {
    alert( "Submitted!" );
    event.preventDefault();
});


//$( "#radio-button" ).select(function() {
//    alert( "Handler for .select() called." );
//});


//attempting to have text-box submit to the .dev-log
//but I still don't really understand this....
$(".text-box").on("submit",function(e){
   var value = input

    $('.dev-log').append("input");
});

//.dev-log();



//testing hover state for .tooltip?
//$(".tooltip").hover(""){
// if()
//}

//$("button").on("click", clickHandler);
//    function
//};