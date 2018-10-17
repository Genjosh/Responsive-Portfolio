


<script type="text/javascript"></script>

$(document).ready(function() {
    document.preventDefault();

// Here we use jQuery to select the header with "click-me" as its ID.
// Notice I have the #click-me, click, and then the function
// So $("id|class|element").on("action", function(){});
// And so whenever it is clicked...
$("#click-button").on("click", function() {
  alert("I've been clicked!");
})

});



