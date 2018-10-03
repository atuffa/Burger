
// update button
$(document).on("click", ".devour-button", function (){
    let id = $(".devour-button").attr("data-id")

    $.ajax({
        method:"PUT",
        url:"/api/burgers/" + id
    }).then(function(data){
        
    })
   
});
 
// delete button
$(document).on("click", ".undevour-button", function (){
    let id = $(".undevour-button").attr("data-id")

    $.ajax({
        method:"DELETE",
        url:"/api/burgers/" + id
    }).then(function(data){
        
    })
    
});