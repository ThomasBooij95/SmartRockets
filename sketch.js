var rocket;
var population;
var lifespan = 500;
var lifeP;
var count = 0;
var target;
var mutationRate = 0.05;
var timeFactor = 7;
var distanceFactor=1;
var completeFactor = 10;
var bestRocketglobal;
function setup() {
	createCanvas(1000,1000);
	rocket = new Rocket();
	population = new Population();
	lifeP = createP();
	target = createVector(width/2, 50);


}

function draw() {
	background(50);
	rocket.update();
	rocket.show();
	population.run();
	lifeP.html(count);
	
	count++;
	 if (count == lifespan){
	 	bestRocketglobal = population.evaluate();
	 	console.log(bestRocketglobal);
	 	bestRocketglobal.coloured = false;
	 	population.selection(bestRocketglobal);
	 	// population = new Population();
	 	count = 0;
	 	//console.log(rocket)

	 }
	ellipse(target.x,target.y, 16,16);
}

