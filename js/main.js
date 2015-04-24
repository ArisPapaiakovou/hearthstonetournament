// Set up!
var testCanvas_canvas = document.getElementById("testCanvas");
var context = testCanvas_canvas.getContext("2d");
document.write("<p>Write Test</p>");



function drawTest(){
	// context.fillStyle = "black";
	// context.fillRect(20,50,20,20);
	
	// context.beginPath();
	// context.fillStyle = "black";
	// context.rect(20,50,20,20);
	// context.fill();
	// context.addHitRegion( {"id": "blackSquare" } );
// 	
	// context.fillStyle = "green";
	// context.fillRect(20,110,20,20);
// 	
	// context.beginPath();
	// context.fillStyle = "blue";
	// context.rect(20,140,20,20);
	// context.fill();
	// context.addHitRegion( {"id": "blueSquare" } );
	
	
	// var img = document.getElementById("druid");	
	// context.beginPath();
	// context.fillStyle = "transparent";
	// context.rect(120,20,63,65);
	// context.fill();
	// context.addHitRegion({"id": "druid" });
	// context.drawImage(img,120,20);
// 	
	// var img = document.getElementById("druidB");	
	// context.beginPath();
	// context.fillStyle = "transparent";
	// context.rect(200,20,63,65);
	// context.fill();
	// context.addHitRegion({"id": "druidB" });
	// context.drawImage(img,200,20);
// 	
	// var img = document.getElementById("druidX");	
	// context.beginPath();
	// context.fillStyle = "transparent";
	// context.rect(280,20,63,65);
	// context.fill();
	// context.addHitRegion({"id": "druidX" });
	// context.drawImage(img,280,20);
// 	
	// var img = document.getElementById("druidW");	
	// context.beginPath();
	// context.fillStyle = "transparent";
	// context.rect(360,20,63,65);
	// context.fill();
	// context.addHitRegion({"id": "druidW" });
	// context.drawImage(img,360,20);
	
	
	context.beginPath();
	context.strokeStyle = "black";
	context.lineWidth = 1;
	context.rect(10,20,110,110);
	context.stroke();
	context.addHitRegion( {"id": "Game 1" } );
	context.font = "30px Garamond";
	context.fillText("Aris",25,50);
	context.fillText("Vs.",25,80);
	context.fillText("Jimi",25,110);
	
	
	context.beginPath();
	context.strokeStyle = "black";
	context.lineWidth = 1;
	context.rect(130,20,110,110);
	context.stroke();
	context.addHitRegion( {"id": "Game 2" } );
	context.font = "30px Garamond";
	context.fillText("Sil",145,50);
	context.fillText("Vs.",145,80);
	context.fillText("Ben",145,110);
	
	testCanvas_canvas.onclick = function lala(e){
		//var cell = getCursorPosition(e);
		
		// alert("hit region: " + event.region);
		
		if(e.region == "Game 1"){
			// context.strokeStyle = "black";
			// context.lineWidth = 1;
		
			// context.strokeRect(40,40,60,60);
			
			//alert("hit region: Game 1");
			
			context.beginPath();
			context.strokeStyle = "yellow";
			context.lineWidth = 1;
			context.rect(10,140,600,500);
			context.stroke();
//*** Aris
			context.font = "30px Garamond";
			context.fillText("Aris",120,180);
			
			var img = document.getElementById("druid");	
			context.drawImage(img,20,190,50,50);
			var img = document.getElementById("rogueB");	
			context.drawImage(img,80,190,50,50);
			var img = document.getElementById("warrior");	
			context.drawImage(img,140,190,50,50);
			var img = document.getElementById("mage");	
			context.drawImage(img,200,190,50,50);
			
			var img = document.getElementById("druidW");	
			context.drawImage(img,110,260,60,60);
			var img = document.getElementById("druidX");	
			context.drawImage(img,110,330,60,60);
			var img = document.getElementById("warriorX");	
			context.drawImage(img,110,400,60,60);
			var img = document.getElementById("mageW");	
			context.drawImage(img,110,470,60,60);
			var img = document.getElementById("mageW");	
			context.drawImage(img,110,540,60,60);
			
//*** Vs.

			context.font = "50px Garamond";
			context.fillText("Vs.",290,310);	
			context.font = "50px Garamond";
			context.fillText("Vs.",290,380);
			context.font = "50px Garamond";
			context.fillText("Vs.",290,450);
			context.font = "50px Garamond";
			context.fillText("Vs.",290,520);
			context.font = "50px Garamond";
			context.fillText("Vs.",290,590);		

			
//*** JIMI
					
			context.font = "30px Garamond";
			context.fillText("Jimi",450,180);
			
			var img = document.getElementById("paladin");	
			context.drawImage(img,370,190,50,50);
			var img = document.getElementById("rogue");	
			context.drawImage(img,430,190,50,50);
			var img = document.getElementById("warlock");	
			context.drawImage(img,490,190,50,50);
			var img = document.getElementById("mageB");	
			context.drawImage(img,550,190,50,50);
			
			var img = document.getElementById("rogueX");	
			context.drawImage(img,450,260,60,60);
			var img = document.getElementById("paladinW");	
			context.drawImage(img,450,330,60,60);
			var img = document.getElementById("paladinW");	
			context.drawImage(img,450,400,60,60);
			var img = document.getElementById("paladinX");	
			context.drawImage(img,450,470,60,60);
			var img = document.getElementById("warlockX");	
			context.drawImage(img,450,540,60,60);
			
		}
		
		if(e.region == "Game 2"){
			// context.strokeStyle = "black";
			// context.lineWidth = 1;
		
			// context.strokeRect(40,40,60,60);
			
			alert("hit region: Game 2");
			
		}
		
		if(e.region == "druid"){
			// context.strokeStyle = "black";
			// context.lineWidth = 1;
		
			// context.strokeRect(40,40,60,60);
			
			alert("hit region: druid");
			
		}
		
		if(e.region == "druidB"){
			// context.strokeStyle = "black";
			// context.lineWidth = 1;
		
			// context.strokeRect(40,40,60,60);
			
			alert("hit region: druidB");
			
		}
	};
	
	// context.fillStyle = "yellow";
	// context.fillRect(20,80,20,20);
// 	
// 	
	// context.fillStyle = "green";
	// context.fillRect(20,110,20,20);
// 	
	// context.fillStyle = "blue";
	// context.fillRect(20,140,20,20);
// 	
	// context.fillStyle = "red";
	// context.fillRect(20,170,20,20);
	
} //End of drawTest

//testCanvas_canvas.addEventListener("click",testOnClick,false);

drawTest();

function testButtonClicked(){
	
	context.clearRect ( 0 , 0 , testCanvas_canvas.width, testCanvas_canvas.height );
	var div = document.getElementById("testTextDiv");
	
    div.textContent = "cleared";
    //var text = div.textContent;
}

function testButtonClickedTwo(){
	
	drawTest();
	var div = document.getElementById("testTextDiv");
	
    div.textContent = "drawn";
}

// // Draw the face
// context.fillStyle = "yellow";
// context.beginPath();
// context.arc(95, 85, 40, 0, 2*Math.PI);
// context.closePath();
// context.fill();
// context.lineWidth = 2;
// context.stroke();
// context.fillStyle = "black";
// 
// // Draw the left eye
// context.beginPath();
// context.arc(75, 75, 5, 0, 2*Math.PI);
// context.closePath();
// context.fill();
// 
// // Draw the right eye
// context.beginPath();
// context.arc(114, 75, 5, 0, 2*Math.PI);
// context.closePath();
// context.fill();
// 
// // Draw the mouth
// context.beginPath();
// context.arc(95, 90, 26, Math.PI, 2*Math.PI, true);
// context.closePath();
// context.fill();
// 
// // Write "Hello, World!"
// context.font = "30px Garamond";
// context.fillText("Hello, World!",15,175);