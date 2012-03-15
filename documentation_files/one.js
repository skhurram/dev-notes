$(document).ready(function() {
  $("#github-tab").mouseenter(function() {
    
    $(this).animate({
      marginLeft: 0
    }, 310)
  })
  
  $("#github-tab").mouseleave(function() {
    $(this).animate({
      marginLeft: "164px"
    }, 120)
  })
  
  $("#github-tab").click(function() {
    //
  })
  
});