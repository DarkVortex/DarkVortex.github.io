let dbRef = firebase.database().ref();
let tempRef = dbRef.child("iot");
tempRef.on("value", function(snapshot){
  let data = snapshot.val();
  document.getElementById('temp').innerText = data.temperature;
});