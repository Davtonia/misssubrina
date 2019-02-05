
	
	$(document).ready(function() {

		var $header = $('#header');
		var $menu = $('#menuWrapper');
			
		$menu.css('opacity',0);
		$header.css('opacity',0);
		$header.animate({'opacity':1}, 1000, function() {
			$menu.css('opacity',0);
			$menu.animate({'opacity':1}, 700);	
		});	
		
	});

/*
	$(window).load(function() {    
			
		if ((screen.width>1024)) { // Larger than 1024 screen
			document.getElementById("leftColumn").style.display = "block";
		} else {
			document.getElementById("leftColumn").style.display = "none";
		}
	});
*/
	ddsmoothmenu.init({
		mainmenuid: "smoothmenu1", //menu DIV id
		orientation: 'h', //Horizontal or vertical menu: Set to "h" or "v"
		classname: 'ddsmoothmenu', //class added to menu's outer DIV
		//customtheme: ["#1c5a80", "#18374a"],
		contentsource: "markup" //"markup" or ["container_id", "path_to_menu_file"]
	});

	Cufon.replace('ul li#mainMenuType > a', { fontSize: '19px', fontFamily: 'Century Gothic', hover: true });
	Cufon.replace('ul li#subMenuType > a', { fontSize: '16px', fontFamily: 'Century Gothic', hover: true });	
	
/*	if ((screen.width>1024)) { // Larger than 1024 screen
		//document.getElementById("menuWrapper").style.width = 600;
		//document.getElementById("topheaderDiv").style.padding-left = 20;
	} else {
		Cufon.replace('ul li#mainMenuType > a', { fontSize: '16px', fontFamily: 'Century Gothic', hover: true });
		Cufon.replace('ul li#subMenuType > a', { fontSize: '13px', fontFamily: 'Century Gothic', hover: true });		
	}
*/
	
	//Cufon.replace('ul li#subMenuType > a:hover', { color: '#6c0202', fontSize: '16px', fontFamily: 'Century Gothic' });
	
	Cufon.replace('div.bodyText', {
		color: '#5e5763',
		fontFamily: 'Century Gothic', 
	});
	Cufon.replace('td.cForm', {
		color: '#5e5763',
		fontFamily: 'Century Gothic', 
	});
	
	Cufon.replace('div#copywrite', { fontFamily: "Century Gothic"	});		

	function goUrl(webUrl) {
		window.location.href = webUrl;
	}