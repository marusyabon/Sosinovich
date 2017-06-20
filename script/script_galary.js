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
			item.placeholder="Поле должно быть заполнено";
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
			item.placeholder="Поле должно быть заполнено";
			return false;
		}
		
		
		text.style.border = "solid 1px green";
		text.value = email;
		return true;
	};
	window.onload = function(){
	//Открыть-закрыть форму	

		var svyazatsa = document.getElementById('svyaz');
		var myForm = document.getElementById('formaZapisy');
		var fon = document.getElementById('fon');
		var os = document.getElementById('os');

		var clos = myForm.getElementsByTagName('img')[0];
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
	}
		
											//для галереи
											
		
	
	