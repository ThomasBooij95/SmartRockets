function Rocket(dna) {
	this.pos = createVector(width/2,height);
	this.vel = createVector();
	this.acc = createVector();
	this.finishtime;
	this.finish = false;
	this.bestRocket = false;
	this.coloured = false;
	
	this.completed = false;
	if (dna){
		this.dna = dna;
	}else {
		this.dna = new DNA();
	}
	this.applyForce =function(force) {
		this.acc.add(force);
	}

	this.calcFitness = function(){
		
		var d = dist(this.pos.x,this.pos.y,target.x,target.y);
		var afstand = map (d,0, width , width,0);
		
		this.fitness = distanceFactor * afstand ;
		if (this.finish){
			this.fitness += timeFactor/this.finishtime 
		}
		if(this.completed){
			this.fitness *=completeFactor;
		}
	}

	this.update = function(){
		var d = dist(this.pos.x,this.pos.y,target.x,target.y);
			if(d< 10 ){
				this.completed = true;
				if(!this.finish){
				this.finishtime = count;
				this.finish = true}

				this.pos = target.copy();
			}
		this.applyForce(this.dna.genes[count]);
		if(!this.completed){
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);
		}
	}

	this.show = function(){
		push();
		noStroke();
		fill(255,150);
		if(this.coloured){
			console.log("Kleurcode wordt gerund");
			fill(456,100,55);
		}
		translate(this.pos.x , this.pos.y);
		rotate(this.vel.heading());
		rectMode(CENTER);
		rect(0,0, 25,5);
		pop();
	}

	this.reset = function() {
		console.log("reset is gerund")
		this.pos = createVector(width/2,height);
		this.vel = createVector();
		this.acc = createVector();
		this.finishtime = 0;
		this.finish = false;
		this.completed = false;
		}
}

