$(document).ready(function(){
	//Slider
	if (window.location.href.indexOf('index') > -1) {
		$('.bxslider').bxSlider({
		  mode: 'fade',
		  captions: true,
		  slideWidth: 1200,
		  responsive: true
		});
	}

	//Posts
	if (window.location.href.indexOf('index') > -1) {
		var posts=[
			{
				title: 'Preuve de titre',
				date: 'Publié le: '+ moment().format("Do MMMM  YYYY"),
				content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			},
			{
				title: 'Preuve de titre 2',
				date: 'Publié le: '+ moment().format("Do MMMM  YYYY"),
				content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			},
			{
				title: 'Preuve de titre 3',
				date: 'Publié le: '+ moment().format("Do MMMM  YYYY"),
				content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			},
			{
				title: 'Preuve de titre 4',
				date: 'Publié le: '+ moment().format("Do MMMM  YYYY"),
				content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			},
			{
				title: 'Preuve de titre 5',
				date: 'Publié le: '+ moment().format("Do MMMM  YYYY"),
				content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
			}
		];

		posts.forEach(item =>{
			var post=`
				<article class="articulo">
					<h2> ${item.title} </h2>
					<span id="date"> ${item.date}</span>
					<p>
						${item.content}				
					</p>
					<a href="#" class="voir-plus"> Voir plus </a>
				</article>
			`;

			$('#posts').append(post);
		});
	}

	var theme = $('#theme');
	$('#to-green').click(()=>{
		theme.attr("href", 'css/green.css');
	});
	$('#to-red').click(()=>{
		theme.attr("href", 'css/red.css');
	});
	$('#to-blue').click(()=>{
		theme.attr("href", 'css/blue.css');
	});


	//About
	if (window.location.href.indexOf('about') > -1) {
		$('#acordeon').accordion();
	}


	//Horloge
	if (window.location.href.indexOf('horloge') > -1) {
		setInterval(() =>{
			var horloge = moment().format("hh:mm:ss");
			$('#horloge').html(horloge);
		}, 1000);
		
	}



	//Scroll suavizado
	$('.monter').click(e=>{
		e.preventDefault();

		$("html, body").animate({
			scrollTop: 0
		}, 500);

		return false;
	});

	//Commencer une session
	$('#log').submit(() =>{

		var form_name = $('#form_name').val();

		localStorage.setItem("form_name", form_name);
	});

	var form_name = localStorage.getItem('form_name');
	if (form_name != null && form_name != undefined) {
		var about = $('#about p').html("Bienvenu(e): " + form_name);
		about.append('<a href="#" id="logout" > Fermer session </a> ');
		$('form').hide();

		$('#logout').click(() =>{
			localStorage.clear();
			location.reload();
		});
	}


	//Validation
	if (window.location.href.indexOf('contact')) {
		$("input[name='date']").datepicker({
			dateFormat: 'dd-mm-yy'
		});

		$.validate({
		  lang: 'fr'
		});
	}
	console.log(posts);
});