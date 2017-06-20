
var neverno = [];		
var picts=['img/painters/1.jpg','img/painters/2.jpg','img/painters/3.jpg','img/painters/4.jpg','img/painters/5.jpg','img/painters/6.jpg', 'img/painters/7.jpg','img/painters/8.jpg','img/painters/9.jpg','img/painters/10.jpg'],		
Arr = [
	{
	"vopros":"1. Эту картину написал американский художник, идеолог и лидер абстрактного экспрессионизма второй половины ХХ века",
	"otvet":["Эд Рейнхардт","Джексон Поллок","Дэвид Смит"],
	"verno":1
	},
	{"vopros":"2. Это работа знаменитого русского пейзажиста",
	"otvet":["Василий Суриков","Иссаак Лвитан","Архип Куинджи"],
	"verno":1
	},
	{"vopros":"3. Автор этого произведения родился в Феодосии",
	"otvet":["Николай Кузнецов","Алипий Печерский","Иван Айвазовский"],
	"verno":2
	},
	{"vopros":"4. Этот французский художник-самоучка, один из самых известных представителей наивного искусства или примитивизма",
	"otvet":["Анри Руссо","Нико Пиросмани","Генри Дарджер"],
	"verno":0
	},
	{"vopros":"5. Едоки картофеля. Написана в 1885 году",
	"otvet":["Камиль Писсаро","Дэвид Смит","Винент Ван Гог"],
	"verno":2
	},
	{"vopros":"6. Прогулка по елисейским полям",
	"otvet":["Жан Беро","Василий Суриков","Анри Руссо"],
	"verno":0
	},
	{"vopros":"7. Под вечер",
	"otvet":["Станислав Жуковский","Иван Айвазовский","Василий Суриков"],
	"verno":0
	},
	{"vopros":"8. Этот художник родился 10 июля 1830 года на острове Сент-Томас (Вест-Индия), в буржуазной семье еврея-сефарда",
	"otvet":["Нико Пиросмани","Камиль Писсаро","Шарль Лебрён"],
	"verno":1
	},
	{"vopros":"9. Этого фламандского живописца Вы не спутаете ни с кем",
	"otvet":["Ламберт Ломбард","Виллем Кей","Питер Пауль Ру́бенс"],
	"verno":2
	},
	{"vopros":"10. В юношеском возрасте этот живописец работал клерком",
	"otvet":["Генри Дарджер","Дэвид Смит","Камиль Писсаро"],
	"verno":2
	}
]
var result = [
	[0,"Ваша интуиция сегодня Вас подвела"],
	[2,"Вы, очевидно, выбирали варианты, не читая их"],
	[4,"Что ж! Есть над чем поработать!"],
	[6,"Неплохо"],
	[8,"Превосходно!"],
	[10,"Либо Вы великолепно разбираетест в искусстве, либо у Вас фантастическая интуиция"]	
]

var kadr = 0;
var schet = 0;

	function pokaz()
	{	
		var text = "Вы набрали: "+schet+" баллов<br>";
		for (var i = result.length-1; i>0; i--)
		{	
			if (schet<=2)
			{
				text += result[0][1]
				break;
			}
			if (schet>result[i-1][0])
			{text += result[i][1];
				break;
			}
		}
		if (schet<10)
		{
			text += "<br>Вы ответили неверно на следующие вопросы:";
			for (var ob in neverno)
			{
			text += "<br>"+neverno[ob];
			}
		}	
		document.getElementById("itog").innerHTML = text;
		
	}

/*выбор следующего вопроса и отображение его */
	function sled(num)
	{	
		
		num = num||kadr;
		var clk = false;
		//здесь анализ, если нум!=0 и счетчик увеличить
		if (num > 0)
		{	
			var vubor = document.getElementsByName("luk");
			for (var i = 0; i<vubor.length; i++)
			{  
				if (vubor[i].checked)
				{
					if (i==Arr[num-1].verno)
					{
						schet++;						
					}
					else
					{
						neverno[num] = Arr[num-1].vopros;
					}
					clk = true;
					break;
				}
				
			}
			if (!clk)
			{
				document.getElementsByTagName("span")[0].innerHTML = "Вы ничего не выбрали!";
				return;
			}
			else
			{
				document.getElementsByTagName("span")[0].innerHTML = "";
				
			}
		}
		if (butt.value == "Результат")
		{
			pokaz();
			return;
		}
		//вывод вопроса
		var text = "<div style='text-align:right'>Вопрос "+(num+1)+" из 10</div>"
		 text += "<h3>" + Arr[num].vopros + "</h3>";
		 kartinka.style.backgroundImage="url("+picts[num]+")";
		for (var i = 0; i<Arr[num].otvet.length; i++)
		{
			text += "<input type='radio' name='luk'>"+Arr[num].otvet[i]+"<br>";
		}
		
		text += "<br>";
		list.innerHTML = text;
		if (kadr++ == Arr.length-1)
			{
				butt.value = "Результат";
			}
	}
	
	
	
/*по загрузке страницы доступ к главным элементам*/

	function init()
	{
		kartinka = document.getElementById("picture");

		list =	document.getElementById("container");
		butt =	document.getElementById("button");
		sled(0);
	}
window.onload=init;