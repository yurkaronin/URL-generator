const startBtn = document.querySelector('#start-btn');
const textStart = document.querySelector('#text-start');
const textResult = document.querySelector('#text-result');

function translit(word){
	var answer = '';
	var converter = {
		'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
		'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
		'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
		'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
		'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
		'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
		'э': 'e',    'ю': 'yu',   'я': 'ya',
 
		'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
		'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
		'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
		'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
		'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
		'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
		'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
	};
 
	for (var i = 0; i < word.length; ++i ) {
		if (converter[word[i]] == undefined){
			answer += word[i];
		} else {
			answer += converter[word[i]];
		}
	}
 
	return answer;
}



startBtn.addEventListener('click', function () {
  item = textStart.value;
  item = item.trim();
  item = item.replace(/\s+/g, ' ');
  item = item.replaceAll('\n','');
  item = item.replaceAll(')','');
  item = item.replaceAll('(','');
  item = item.replaceAll(']','');
  item = item.replaceAll('[','');
  item = item.replaceAll('{','');
  item = item.replaceAll('}','');
  item = item.replaceAll('?','');
  item = item.replaceAll('.','');
  item = item.replaceAll('+','');
  item = item.replaceAll('—','');
  item = item.replaceAll('«','');
  item = item.replaceAll('»','');
  
  item = item.replaceAll(':','');
  item = item.replaceAll(';','');
  item = item.replaceAll(',','');
  item = item.replaceAll('=','');
  item = item.replaceAll('"','');
  item = item.replaceAll('\'','');
  item = item.split(" ").join("-");

  
  item = item.toLowerCase();
  item = translit(item);
  textResult.value = item;

});