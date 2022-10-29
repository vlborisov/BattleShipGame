var rand = Math.floor(Math.random() * 7);
var pos_1 = rand;
var pos_2 = pos_1 +1 ;
var pos_3 = pos_2 + 1;
var a = [];

var shots = 0;
var hits = 0;
var TryToHit;
var VinMessege = " попытки"

var IsSunk = false;


while(IsSunk == false) {
	TryToHit = prompt("Попытй удачу! Попробуй попасть по кораблю! Введите цифру от 0 до 9!");
	if(TryToHit < 0 || TryToHit > 9 || isNaN(TryToHit) || TryToHit == null){
		alert("Видимо мы друг друга не поняли! Введите цифру от 0 до 9!");
	}else{
		shots += 1;
		if(a.indexOf(TryToHit) !== -1 ){
			shots -= 1
			alert("Ты уже попал в эту часть коробля! Попробуй попасть в другие!");
		}else{
			if (TryToHit == pos_1 || TryToHit == pos_2 || TryToHit == pos_3) {
				a.push(TryToHit);
				hits += 1;
				alert("Есть поподание! Продолжай в том же духе!");
			}else{
				alert("Мимо! Попробуй еще раз!");
			}
				if(hits == 3){
					IsSunk == true;
						if(shots > 4){
							VinMessege = " попыток";
						}
					alert("Победа! Корабль потоплен за " + shots + VinMessege +" ! Хочешь сыграть еще раз?");
					shots = 0;
					hits = 0;
					a = [];
					rand = Math.floor(Math.random() * 7);
					pos_1 = rand;
					pos_2 = pos_1 +1 ;
					pos_3 = pos_2 + 1;
			}
		}
	}
}

