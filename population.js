function Population() {
	this.rockets = [];
	this.popsize = 50;
	this.matingpool = [];

	for (var i = 0; i < this.popsize; i++) {
 	this.rockets[i] = new Rocket();
 }

 this.evaluate = function(){
 	
 	var maxfit = 0;
 	var bestRocket;
 	for (var i = 0; i< this.popsize ;i++){
 		this.rockets[i].calcFitness();
 		if (this.rockets[i].fitness >maxfit){
 			maxfit = this.rockets[i].fitness;
 			bestRocket = this.rockets[i];
 			
 		}
 	}
 	bestRocket.bestRocket = true;
 	bestRocket.reset();

 	for (var i = 0; i< this.popsize ;i++){
 		this.rockets[i].fitness /= maxfit;
 	}


 	this.matingpool = [];
 	for (var i = 0; i< this.popsize ;i++){
 		var n = this.rockets[i].fitness * 100 ;
 		for (var j = 0;j<n-1; j++){
 			this.matingpool.push(this.rockets[i]);
 		}
 	}

 	return(bestRocket);
 }

this.selection = function(bestRocket){
	console.log(bestRocket);

	var newRockets = [];
	

	for (var i = 0; i < this.rockets.length; i++) {
	var parentA = random(this.matingpool).dna;
	var parentB = random(this.matingpool).dna;
	var child   = parentA.crossover(parentB);
	child.mutation();
 	newRockets[i] = new Rocket(child);
 	}
 	newRockets[this.popsize-1] = bestRocket;
 	newRockets[this.popsize-1].bestRocket = false;
 	newRockets[this.popsize-1].coloured = true;
 	console.log(newRockets);
 	this.rockets = newRockets;


}

 this.run = function(){
 	for (var i = 0; i< this.popsize ;i++){
 		this.rockets[i].update();
 		this.rockets[i].show();
 	}

 }
}

