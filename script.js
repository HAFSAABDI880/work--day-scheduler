let userText =$ ("userText");
let textBox = $("textarea");


$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        
    let = userText = $(this).siblings(".description").val();
        let = time = $(this).parent().attr("id");
        
        localStorage.setItem(time, userText);

 });
 $("#9am .description").val(localStorage.getItem("9am"));
 $("#10am .description").val(localStorage.getItem("10am"));
 $("#11am .description").val(localStorage.getItem("11am"));
 $("#12pm .description").val(localStorage.getItem("12pm"));
 $("#13pm .description").val(localStorage.getItem("13pm"));
 $("#14pm .description").val(localStorage.getItem("14pm"));
 $("#15pm .description").val(localStorage.getItem("15pm"));
 $("#16pm .description").val(localStorage.getItem("16pm"));
 $("#17pm .description").val(localStorage.getItem("17pm"));
 $("#18pm .description").val(localStorage.getItem("18pm"));
 $("#19pm .description").val(localStorage.getItem("19pm"));
 $("#20pm .description").val(localStorage.getItem("20pm"));
 $("#21pm .description").val(localStorage.getItem("21pm"));
});

let date = moment().format("MMMM Do, YYYY");
let currentDate = function(){
    $("#currentDay").text(date);
};
currentDate();

let currentHour = moment().hour();

let colourChange = function() {
    $(".time-block").each(function () {
        let hourBlock = parseInt($(this).attr("id"));
        if (hourBlock < currentHour) {
          $(this).addClass("past");
        }
        else if (hourBlock === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
        }
        else {
          $(this).removeClass("present")
          $(this).removeClass("past")
          $(this).addClass("future")
        }
    
      });
};
colourChange();
