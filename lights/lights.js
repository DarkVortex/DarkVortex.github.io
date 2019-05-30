let dbRef = firebase.database().ref();
lights = document.querySelectorAll('.lightContainer');
lightref = [];
for(let x = 0; x < lights.length; x++){
	lightref[x] = dbRef.child(lights[x].id);
}
curStates = [];
for(let i = 0; i < lightref.length; i++){
  lightref[i].on("value", function(snapshot){
  	let data = snapshot.val();
  	curStates[i] = data.state;
  	reDraw(i+1);
	});
}
var spans = document.getElementsByTagName('span');
for(let i = 0; i < spans.length; i++){
	if(spans[i].className.includes('light')){
		spans[i].addEventListener("click", toggleState);
	}
}

function toggleState(){
	ind = parseInt(this.className.replace( /^\D+/g, '')) - 1;//save current index
	switch(this.id){
		case 'topLight':
			curStates[ind] = 1;
			break;
		case 'midLight':
			curStates[ind] = 2;
			break;
		case 'botLight':
			curStates[ind] = 3;
			break;
		default:
			break;
	}
	lightref[ind].update({state: curStates[ind]});
}

function reDraw(lightNum){
	topL = document.querySelector('#light'+lightNum+' #topLight');
	midL = document.querySelector('#light'+lightNum+' #midLight');
	botL = document.querySelector('#light'+lightNum+' #botLight');
	switch (curStates[lightNum-1]){
		case 1:
			topL.className = topL.className.replace('off','on');
			midL.className = midL.className.replace('on','off');
			botL.className = botL.className.replace('on','off');
			break;
		case 2:
			topL.className = topL.className.replace('on','off');
			midL.className = midL.className.replace('off','on');
			botL.className = botL.className.replace('on','off');
			break;
		case 3:
			topL.className = topL.className.replace('on','off');
			midL.className = midL.className.replace('on','off');
			botL.className = botL.className.replace('off','on');
			break;

	}
}