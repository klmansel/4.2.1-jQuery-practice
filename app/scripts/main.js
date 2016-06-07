(function(){

$(function(){

  jQuery(document).ready(function( $ ) {

    $('.my-files-menu').hide();


  // Using .toggle-could not get it to run correctly w/o return statement
  $('.my-files').click(function() {
    $('.my-files-menu').toggle(function(display) {
      return true;
  });
    });

    $('.cloud-menu').hide();
    $('.cloud').click(function(display) {
      $('.cloud-menu').toggle(function(display) {
    return true;
      });
});



  });
});

}());
