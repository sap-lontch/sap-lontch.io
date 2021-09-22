$(document) .ready(function(){
	$(window).scroll(function(){
		if(this.scrollY > 20){
			$('.navigation').addClass("change");
		}else{
			$('.navigation').removeClass("change");
		}
		if (this.scrollY > 700){
			$('.scroll-up-btn').addClass("show");
		}else{
			$('.scroll-up-btn').removeClass("show");
		}
	});
	//retour en haut de la page scroll-up-btn script
	$('.scroll-up-btn').click(function(){
		$('html').animate({scrollTop: 0});
	});
	//bouton de deroulement du menu responsive
		$('.menu-btn').click(function(){
			$('.navigation .menu').toggleClass("active");
			$('.menu-btn i').toggleClass("active");
	});
	//script de owl-carousel
		$('.carousel').owlcarousel({
			margin:20,
			loop: true,
			autoplayTimeOut: 2000,
			autoplayHoverPause: true,
			responsive: {
				0:{
					items:1,
					nav: false
				},
				600:{
					items:2,
					nav: false
				},
				1000:{
					items:3,
					nav: false
					
				}
			}
		});
		/* When the user clicks on the button,
	toggle between hiding and showing the dropdown content */
	function myFunction() {
		document.getElementById("myDropdown").classList.toggle("show");
	}

	// Close the dropdown menu if the user clicks outside of it
	window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {

		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
		var openDropdown = dropdowns[i];
		if (openDropdown.classList.contains('show')) {
			openDropdown.classList.remove('show');
		}
		}
	}
	}
});
