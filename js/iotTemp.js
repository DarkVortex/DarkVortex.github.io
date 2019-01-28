let dbRef = firebase.database().ref();
let tempRef = dbRef.child("iot");
tempRef.on("value", function(snapshot){
  let data = snapshot.val();
  document.getElementById('temp').innerText = data.temperature;
  degF = (data.temperature * 9 / 5 + 32);
  deF = Math.round(degF * 10) / 10;
  document.getElementById('tempF').innerText = degF;
});