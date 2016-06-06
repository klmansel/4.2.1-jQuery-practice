(function(){

$(function(){

  jQuery(document).ready(function( $ ) {

  	$('.my-files').on('click', function () {
          $("ul.my-files-menu").removeClass("expand-menu");
  		$(this).find('> ul.my-files-menu').addClass('expand-menu');
  	});
  });
});

}());
