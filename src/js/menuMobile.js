document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {
  this.classList.toggle( "active" );
});

$("#nav-toggle").click(function () {
  if($('.navPrincipal').hasClass('visible')){

  	$('.navPrincipal').removeClass('visible');
    
  }else{

   $('.navPrincipal').addClass('visible');
 }
});

$("nav > ul > li > a ").click(function () {
   $('.navPrincipal').removeClass('visible');
   $("#nav-toggle").removeClass('active');  
 });