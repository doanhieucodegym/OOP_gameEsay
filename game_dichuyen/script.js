function Hero(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function () {
        this.left += this.speed;
        console.log('Right: ' + this.left);
    };

    this.moveDown = function () {
        this.top += this.speed;
        console.log('Down: ' + this.top);
    };

    this.moveUp = function () {
        this.top -= this.speed;
        console.log('Up: ' + this.top);
    };
    this.moveLeft = function () {
        this.left -= this.speed;
        console.log('Left: ' + this.left);
    };


}


//tao doi tuong
var hero = new Hero('lufi.jpg', 0, 0, 200, 100);

function start() {
    if (hero.top == 0 && hero.left <= 1200) {
        hero.moveRight();

    }
    if (hero.top <= 400 && hero.left == 1200) {
        hero.moveDown();

    }
    if (hero.top == 400 && hero.left >= 0) {
        hero.moveLeft();
    }
    if (hero.top >= 0 && hero.left == 0) {
        hero.moveUp();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 800);


}

start();