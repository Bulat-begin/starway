	// максимальное число звезд на экране
	let starsCount = 1000;
	// пустой стартовый массив со звездами
	let stars = [];
	// класс для рендеринга всех звёзд
	class Star{
		// конструктор для создания каждого объекта (звезды) на основе этого класса
		constructor(){
			// рандомные координаты у каждой новой звезды
			this.x = random(-width, width);
			this.y = random(-height, height);
			this.z = random(width);
		}
		// метод, который обновляет координаты звезды
		update(){
			
			let speed = 15;
			// приближение звезды к краю экрана
			this.z -= speed;
			// если звезда вылетела за край экрана — делаем из неё новую звезду, для этого меняем координаты
			if(this.z < 1){
				this.x = random(-width, width);
				this.y = random(-height, height);
				
				this.z = width;
			}
		}

		// метод, который отрисовывает звезду на экране
		drawStar(){
			// цвет каждой звезды
			fill(255,91,1);
			
			noStroke();

			// с помощью функции map() из библиотеки p5.js получаем новые координаты для отрисовки звезды 
			let sx = map(this.x / this.z, 0, 1, 0, width);
			let sy = map(this.y / this.z, 0, 1, 0, height);

			// чем ближе к краю экрана (чем меньше глубина z) — тем больше радиус 
			let r = map(this.z, 0, width, 10, 0);
			// рисуем звезду в новых координатах и новым размером
			ellipse(sx, sy, r, r);
		}
	}

	// подготавливка к запуску — то, что написано здесь выполнится автоматически сразу после загрузки
	function setup(){
		// создаём холст канвас
		createCanvas(innerWidth, innerHeight);
		// размещаем сразу все звёзды на холсте
		for (let i = 0; i < starsCount; i++) {
			
			stars[i] = new Star();
		}
	}

    // пока мы не закроем страницу, постоянно будет выполняться функция draw() 
    function draw(){
	// ставим чёрный фон и указываем скорость обновления фона — чем меньше второе число, тем больший шлейф будут оставлять звёзды
	background(0, 100);
	// формируем центр экрана, куда «полетим» сквозь звёзды
	translate(width/2, height/2);

	// отрисовываем каждый раз все звёзды и меняем их положение
	for (let i = 0; i < starsCount; i++) {
		stars[i].drawStar();
		stars[i].update();
	}
}

	