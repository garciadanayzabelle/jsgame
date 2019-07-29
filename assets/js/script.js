let order = [];
let playerOrder = [];
let flash;
let round;
let good;
let compTurn;
let intervalId;
let win;

const roundCounter = document.querySelector("#round");
const topLeft = document.querySelector("#topleft");
const topRight = document.querySelector("#topright");
const bottomLeft = document.querySelector("#bottomleft");
const bottomRight = document.querySelector("#bottomright");
const startBtn = document.querySelector("#start");

startBtn.addEventListener("click", function(){
	play();
});

function play(){
	win = false;
	order = [];
	playerOrder = [];
	flash = 0;
	intervalId = 0;
	round = 1;
	roundCounter.innerHTML = 1;
	good = true;

	for (let i = 0; i < 20; i ++) {
		order.push(Math.floor(Math.random() * 4) + 1);
	}
	compTurn = true;
	intervalId = setInterval(gameTurn, 800);
}

function gameTurn() {
	if (flash == round) {
		clearInterval(intervalId);
		compTurn = false;
		clearColor();
	}

	if (compTurn) {
		clearColor();
		setTimeout(() => {
			if(order[flash] == 1) one();
			if(order[flash] == 2) two();
			if(order[flash] == 3) three();
			if(order[flash] == 4) four();
			flash++;
		}, 200);
	}
}

function one() {
	topLeft.style.backgroundColor = "#009dff";
	topLeft.style.width = "250px";
	topLeft.style.height = "250px";
	topLeft.style.margin = "-250px 0px 0px -250px";
}

function two() {
	topRight.style.backgroundColor = "#ff00ff";
	topRight.style.width = "250px";
	topRight.style.height = "250px";
	topRight.style.margin = "-250px 0px 0px 0px";
}

function three() {
	bottomLeft.style.backgroundColor = "#ffa800";
	bottomLeft.style.width = "250px";
	bottomLeft.style.height = "250px";
	bottomLeft.style.margin = "0px -250px 0px -250px";
}

function four() {
	bottomRight.style.backgroundColor = "#00ffdc";
	bottomRight.style.width = "250px";
	bottomRight.style.height = "250px";
	bottomRight.style.margin = "0px 0px -250px 0px";
}

function clearColor() {
	topLeft.style.backgroundColor = "#8cbddb";
	topLeft.style.width = "245px";
	topLeft.style.height = "245px";
	topLeft.style.margin = "-245px 0px 0px -245px";
	topRight.style.backgroundColor = "#d9b6d9";
	topRight.style.width = "245px";
	topRight.style.height = "245px";
	topRight.style.margin = "-245px 0px 0px 0px";
	bottomLeft.style.backgroundColor = "#f0cd8b";
	bottomLeft.style.width = "245px";
	bottomLeft.style.height = "245px";
	bottomLeft.style.margin = "0px -245px 0px -245px";
	bottomRight.style.backgroundColor = "#7bb8af";
	bottomRight.style.width = "245px";
	bottomRight.style.height = "245px";
	bottomRight.style.margin = "0px 0px -245px 0px";
}

function flashColor() {
	topLeft.style.backgroundColor = "#009dff";
	topLeft.style.width = "250px";
	topLeft.style.height = "250px";
	topLeft.style.margin = "-250px 0px 0px -250px";
	topRight.style.width = "250px";
	topRight.style.height = "250px";
	topRight.style.margin = "-250px 0px 0px 0px";
	topRight.style.backgroundColor = "#ff00ff";
	bottomLeft.style.backgroundColor = "#ffa800";
	bottomLeft.style.width = "250px";
	bottomLeft.style.height = "250px";
	bottomLeft.style.margin = "0px -250px 0px -250px";
	bottomRight.style.backgroundColor = "#00ffdc";
	bottomRight.style.width = "250px";
	bottomRight.style.height = "250px";
	bottomRight.style.margin = "0px 0px -250px 0px";
}


topLeft.addEventListener("click", (event) => {
	playerOrder.push(1);
	check();
	one();
	if(!win) {
		setTimeout(() => {
			clearColor();
		}, 300);
	}
});

topRight.addEventListener("click", (event) => {
	playerOrder.push(2);
	check();
	two();
	if(!win) {
		setTimeout(() => {
			clearColor();
		}, 300);
	}
});

bottomLeft.addEventListener("click", (event) => {
	playerOrder.push(3);
	check();
	three();
	if(!win) {
		setTimeout(() => {
			clearColor();
		}, 300);
	}
});

bottomRight.addEventListener("click", (event) => {
	playerOrder.push(4);
	check();
	four();
	if(!win) {
		setTimeout(() => {
			clearColor();
		}, 300);
	}
});

function check() {
	if(playerOrder[playerOrder.length -1] !== order[playerOrder.length -1]) good = false;

	if(playerOrder.length == 20 && good) {
		winGame();
	}

	if (good == false) {
		flashColor();
		roundCounter.innerHTML = "FAIL";
		setTimeout(() => {
			roundCounter.innerHTML = round;
			clearColor();
			roundCounter.innerHTML ="-";
		}, 1300);
		score.innerHTML = "You reached round     " + round;
	}

	if (round == playerOrder.length && good && !win) {
		round++;
		playerOrder = [];
		compTurn = true;
		flash = 0;
		roundCounter.innerHTML = round;
		intervalId = setInterval(gameTurn, 800);
	}
}

function winGame() {
	flashColor();
	roundCounter.innerHTML = "WIN";
	win = true;
}


