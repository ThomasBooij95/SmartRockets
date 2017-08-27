var rocket;
var population;
var lifespan = 500;
var lifeP;
var count = 0;
var target;
var mutationRate = 0.01;
var timeFactor = 15;
var distanceFactor=1;
var completeFactor = 1;
function setup() {
	createCanvas(300,300);
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
	 	population.evaluate();
	 	population.selection();
	 	// population = new Population();
	 	count = 0;

	 }
	ellipse(target.x,target.y, 16,16);
}

