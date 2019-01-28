let dbRef = firebase.database().ref();
let tempRef = dbRef.child("iot");
tempRef.on("value", function(snapshot){
  let data = snapshot.val();
  document.getElementById('temp').innerText = data.temperature;
  document.getElementById('tempF').innerText = (data.temperature * 9 / 5 + 32);
});