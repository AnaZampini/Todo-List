var $sortableList = $(".sortable");

var sortEventHandler = function(event, ui){
    var sortedIDs = $( ".sortable" ).sortable( "toArray" );
    console.log(sortedIDs);
                var listValues = [];
                for (var i = 0; i < sortedIDs.length; i++) {

                listValues.push(sortedIDs[i]);
      }
            console.log(listValues);
};

$sortableList.sortable({
    stop: sortEventHandler
});

$sortableList.on("sortchange", sortEventHandler);



//STYLE THE DRAGGING
$(".all-slides").sortable({
  
    axis: "y",
    revert: true,
    scroll: false,
    placeholder: "sortable-placeholder",
    cursor: "move",
    
  
  });



//LIMIT DRAG AREA
$('.sortable').each(function(){
    $(this).sortable({
        containment: "parent"
    });
});




// //KEEP IN LOCAL STORAGE
$(document).ready(function () {
    var $myUL = $('#myUL'); 
    if(localStorage.getItem("myUL")) { 
        $myUL.html(localStorage.getItem("myUL"));
    }
    $('#addBtn').click(function () {        
        $myUL.append($('#myInput').val());
        localStorage.setItem("myUL", $myUL.html());
    });
});


// // KEEP IT IN LOCAL STORAGE OPTION 2
// $('#myUL').html("");
// localStorage.content = $('#myUL').html();
// $('#myUL').html(localStorage.content);


// //KEEP IN LOCAL STORAGE OPTION 3
// var text = $('#myInput').text();
// localStorage.setItem('myInput', text);
// alert(localStorage.getItem('myInput'));


// // KEEP IN LOCAL STORAGE OPTION 4
// window.localStorage.setItem('content', 'Test');
// $('#test').html(window.localStorage.getItem('content'));


let field = document.getElementById("myInput");
    if (sessionStorage.getItem("autosave")) {
    field.value = sessionStorage.getItem("autosave");
    }

    field.addEventListener("change", function() {
    console.log('fire',field.value);
     sessionStorage.setItem("autosave", field.value);
    });