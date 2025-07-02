var numbers = [1, 2, 3, 4, 5, 6, 7];
var rand = Math.floor(Math.random() * numbers.length);
var pos_1 = numbers[rand];
var pos_2 = pos_1 +1 ;
var pos_3 = pos_2 + 1;
var a = [];

var shots = 0;
var hits = 0;
var TryToHit;
var VinMessege = " попытки"
var RestartGame;
var IsSunk = false;


while(IsSunk == false) {
	TryToHit = prompt("Попытай удачу! Попробуй попасть по кораблю! Введите цифру от 1 до 9!");
	if(TryToHit == null){
		alert("Пока! Буду ждать твоего возвращения :)");
		IsSunk == true;
        Window.close();
	}
	if(TryToHit < 1 || TryToHit > 9 || isNaN(TryToHit) || TryToHit == ''){
		alert("Видимо мы друг друга не поняли! Введите цифру от 1 до 9!");
	}else{
		shots += 1;
		if(a.indexOf(TryToHit) !== -1 ){
			shots -= 1
			alert("Ты уже попал в эту часть корабля! Попробуй попасть в другие!");
		}else{
			if (TryToHit == pos_1 || TryToHit == pos_2 || TryToHit == pos_3) {
				a.push(TryToHit);
				hits += 1;
				alert("Есть попадание! Продолжай в том же духе!");
			}else{
				alert("Мимо! Попробуй еще раз!");
			}
				if(hits == 3){
						IsSunk == true;
						if(shots > 4){
							VinMessege = " попыток";
						}
							if (window.confirm("Победа! Корабль потоплен за " + shots + VinMessege +" ! Хочешь сыграть еще раз?")){
								shots = 0;
								hits = 0;
								a = [];
								rand = Math.floor(Math.random() * numbers.length);
								pos_1 = numbers[rand];
								pos_2 = pos_1 +1 ;
								pos_3 = pos_2 + 1;
								IsSunk == false;
						 	}else{
								alert("Пока! Буду ждать твоего возвращения :)");
								Window.close();
							}
							
				}
		}
	}
}

