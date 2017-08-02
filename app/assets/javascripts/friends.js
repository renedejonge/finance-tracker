var init_friend_lookup;

init_friend_lookup = function() {

  $('#friend-lookup-form').on('ajax:before', function(event,data,status){
    show_spinner();
    //document.write("ajax:before");
  });

  $('#friend-lookup-form').on('ajax:after', function(event,data,status){
    hide_spinner();
    document.write("ajax:after"); //wordt niet uitgevoerd???
  });
  
  $('#friend-lookup-form').on('ajax:success', function(event,data,status){
    $('#friend-lookup').replaceWith(data);
    init_friend_lookup();
    hide_spinner(); // toegevoegd omdat ajax:after niet werkt
    //document.write("ajax:success");
  });
  
  $('#friend-lookup-form').on('ajax:error', function(event,xhr,status,error){
    hide_spinner();
    $('#friend-lookup-results').replaceWith(' ');
    $('#friend-lookup-errors').replaceWith('friend was not found');
    //document.write("ajax:error");
  });

}


$(document).ready(function() {
  init_friend_lookup();
})
