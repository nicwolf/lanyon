var test;
var time;
var speed = .01;
var numSystems;
var numNodes;
var drawLines = true;
var drawCircles = true;
var defaultParameters = {
	nodes : [
		// Root Node
		{
			length : 40,
			freq : 1,
			size : 3
		},

		// First Node
		{
			length : 70,
			freq : 1,
			size : 6
		},

		// Second Node
		{
			length : 60,
			freq : -3,
			size : 10
		}
	]
}
var strokeColor = 220;
var strokeWeight = 3;
var fillColor = 220;

function Node(parent) {
	// Node class
	this.pos = createVector();
	this.size = 10;
	this.length = 100;
	this.parent = parent;
	if (this.parent != null) {
		this.freq = 1*this.parent.freq;
	} else {
		this.freq = 1;
	}

	// Rotate around parent
	this.rotate = function() {
		if (this.hasParent()) {
			this.setPos(
				// x-component
				this.length * cos(this.freq*time) + this.parent.pos.x,
				// y-component
				this.length * sin(this.freq*time) + this.parent.pos.y)
		}
	}

	// Set position
	this.setPos = function(x,y) {
		this.pos.set(x,y);
	};

	// Set size
	this.setSize = function(s) {
		this.size = s;
	};

	// Set length
	this.setLength = function(l) {
		this.length = l;
	};

	// Set frequency
	this.setFreq = function(f) {
		if (this.hasParent()) {
			this.freq = f*this.parent.freq;
		} else {
			this.freq = f;
		}
	}

	// Set parent
	this.setParent = function(p) {
		this.parent = p;
	};

	// Has parent
	this.hasParent = function() {
		return (this.parent != null);
	}

	// Display node as ellipse and draw path to parent
	this.display = function() {
		if (drawLines && this.hasParent()) {
			line(
				// From this node
				this.pos.x,this.pos.y,
				// to parent node
				this.parent.pos.x,this.parent.pos.y);
		}
		if (drawCircles) {
			push();
			noStroke();
			fill(fillColor,60);
			ellipse(this.pos.x,this.pos.y,this.size,this.size);
			pop();
		}

	}
}

function System( numNodes ) {
	// The System class contains multiple nodes, each one moving circularly
	// around its parent node.

	// Initialize empty list to store nodes
	this.nodes = Array(numNodes+1);

	// Create root node to center system on. Currently hardcoded to origin of
	// canvas.
	var rootNode = new Node(null);
	rootNode.setPos(defaultParameters.nodes[0].length,0);
	rootNode.setSize(defaultParameters.nodes[0].size);
	this.nodes[0] = rootNode;

	// Populate node list with new nodes
	for (var i = 1; i < numNodes+1; i ++) {

		// Use previous node as parent
		var node = new Node(this.nodes[i-1])

		// Set starting parameters
		var parameters = defaultParameters.nodes[i]
		node.setLength(parameters.length);
		node.setFreq(parameters.freq);
		node.setSize(parameters.size);
		// Starting position = (parent.x,parent.y-length)
		node.setPos(node.parent.pos.x,node.parent.pos.y-node.length);

		// Store new node in list
		this.nodes[i] = node;
	}

	// Rotate system
	this.rotate = function() {
		for (var i = 1; i < this.nodes.length; i ++) {
			this.nodes[i].rotate();
		}
	}

	// Display all child nodes
	this.display = function() {
		for (var i = 0; i < this.nodes.length; i ++) {
			this.nodes[i].display();
		}
	}
}

function setup() {
	// Administrivia
  var canvasDiv = document.getElementById("sketchCanvas");
  var divWidth = document.getElementById("sketchCanvas").clientWidth;
  var sketchCanvas = createCanvas(divWidth,500);
  sketchCanvas.parent("sketchCanvas");
	frameRate(30);

	// Color settings
	colorMode(HSB,100);
	fill(fillColor);
	stroke(strokeColor,60);
	strokeWeight(1);

	// Build systems
	numSystems = 8;
	numNodes = 2;
	test = new System(numNodes);
	time = 0;
}

function draw() {
	// Move origin to center of canvas
	translate(width/2,height/2);

	// Rotate nodes
	test.rotate();

	// Draw first system
	push();
	rotate(time);
	background(0,80,80);
	for (var i = 0; i < numSystems; i ++) {
		rotate(TWO_PI/numSystems);
		test.display();
	}
	pop();

	// Draw second system (reflected)
	push();
	rotate(-time);
	scale(-1,1);
	for (var i = 0; i < numSystems; i ++) {
		rotate(TWO_PI/numSystems);
		test.display();
	}
	pop();

	// Incr. time
	time += speed;

	// Change parameters

	// Change root node length
	var d = abs(100*sin(frameCount/600 + PI/2));
	test.nodes[0].setPos(d,0);

	// Randomly change frequency every 600 frames
	if (frameCount % (1200) == 0) {
		var freq = ceil(random(0,4));
		if (random() >= .5) {
			freq *= -1;
		}
		test.nodes[ceil(random(0,numNodes))].freq = freq;
		numSystems = ceil(random(0,30));
		test = new System(numNodes);
		time = 0;
	}
}
