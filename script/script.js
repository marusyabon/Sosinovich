									//скрипт для предзагрзчика
 $(window).on('load', function () {
    $preloader = $('#preloader'),
      $loader = $preloader.find('.demo');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
  });
$(window).on('load', function () {
$("#content").on("click","a", function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 500);
		}); 
});
var canvas, stage, exportRoot;

function init() {
	// --- write your JS code here ---
	
	canvas = document.getElementById("canvas");
	exportRoot = new lib.текст();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
}
										
							
										
										//Проверка формы
	function validate(forma)
	{	
		var myMsg = forma.getElementsByTagName("input");
		for (var i=myMsg.length-1; i>=0; i--)	
		{
			myMsg[i].placeholder="";
		}
							//проверяем полe имени на "не пустое"
		var name = isFullText(forma.ima);
		var email = isEmail(forma.mail);
		if (name && email){ 
			alert("Ваша заявка зафиксирована!");
		}
		return name && email;
		
	}
	
	function isFullText(text){
		if (text.value.trim().length == 0)
		{	text.style.border = "solid 1px red";
			var item = document.getElementsByName("ima")[0];
			item.placeholder="Поле нужно заполнить";
			return false;
		}
			text.style.border = "solid 1px green";
			return true;
	}
	
							//Проверяем поле e-mail
	function isEmail(text){
			if (text.value.trim().length == 0)
		{	text.style.border = "solid 1px red";
			var item = document.getElementsByName("mail")[0];
			item.placeholder="Поле нужно заполнить";
			return false;
		}
		
		
		text.style.border = "solid 1px green";
		text.value = email;
		return true;
	}


	window.onload = function(){
		//Управление музыкой

	document.getElementById("music").onclick = function()
	{
	 var player = document.getElementById("player");
	 if(player.paused == true)
	{
	document.getElementById("player").play();
	this.style.opacity="1";
	//this.style.backgroundImage = "url()"; //Цвет кнопки можно изменить напрямую, без всяких картинок.

	}
	else if (player.paused == false){
	document.getElementById("player").pause();
	this.style.opacity="0.5";
	//this.style.backgroundImage = "White";
	;
	}
	}
	
									//Создаем функцию-переход на сайт		

	
	var allContent = document.getElementById('allContent');
	var zastavka = document.getElementById('zastavka');	
	var scrollDown = document.getElementById('scrollDown');	

	function goToSite(){
		allContent.style.display = 'block';
		zastavka.classList.add('fadeOut');
	}
	scrollDown.onclick=goToSite;
	zastavka.onclick = goToSite;
	
						
	
								//скрипт для высоты и ширины заставки
		
		
	function setHeight() {
    $('#zastavka,#preloader').css({
        height: $(window).height() + 'px',
		width: $(window).width() + 'px'
    });
	}
	setHeight(); // устанавливаем высоту окна при первой загрузке страницы
	$(window).resize( setHeight ); // обновляем при изменении размеров окна	
	var sizeWind = $(window).height() + 'px';
	var widthWind = $(window).width() + 'px'

																									
											//кнопка "наверх"
	$().UItoTop({ easingType: 'easeOutQuart' });

											//скрипт для меню
	$(window).scroll(function(){
			var scrollTop = $(window).scrollTop();
			if(scrollTop != 0)
				$('header').stop().animate({'opacity':'0.2'},400);
			else	
				$('header').stop().animate({'opacity':'0.8'},400);
		});
		
		$('header').hover(
			function (e) {
				var scrollTop = $(window).scrollTop();
				if(scrollTop != 0){
					$('header').stop().animate({'opacity':'0.8'},400);
				}
			},
			function (e) {
				var scrollTop = $(window).scrollTop();
				if(scrollTop != 0){
					$('header').stop().animate({'opacity':'0.2'},400);
				}
			}
		);	
			
													//Открыть-закрыть форму	

		var svyazatsa = document.getElementById('svyaz');
		var myForm = document.getElementById('formaZapisy');
		var fon = document.getElementById('fon');
		var clos = myForm.getElementsByTagName('img')[0];
		var os = document.getElementById('os');
												//Создаем функцию, открывающую форму		
		function openForm(){
		myForm.style.display = 'block';
		fon.style.display = 'block';}
												//Создаем функцию, закрывающую форму		
		function closeForm(){
		myForm.style.display = 'none';
		fon.style.display = 'none';
		}
												//Вешаем на элементы обработчики	
		fon.onclick = closeForm;
		clos.onclick = closeForm;
		svyazatsa.onclick = openForm;
		os.onclick = openForm;
											
								
	};
								
		
		
