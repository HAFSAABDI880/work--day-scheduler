let userText =$ ("userText");
let textBox = $("textarea");


$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        
        let = userText = $(this).siblings(".description").val();
        let = time = $(this).parent().attr("id");
        
        localStorage.setItem(time, userText);

 });