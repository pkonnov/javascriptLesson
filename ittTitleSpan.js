// функция 
//  	определение пустого массива
//  	получение записей
//  	итератор возвращает запись.тайтл

ittTitleSpan = () => {
	var a = [];
	var getSpan = document.querySelectorAll('#video-title');
	for(var i=0; i < getSpan.length; i++){
		a.push(getSpan[i].innerText);
	}
	return a;
}
ittTitleSpan();