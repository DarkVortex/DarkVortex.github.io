let dbRef = firebase.database().ref();
let tempRef = dbRef.child("iot");
tempRef.on("value", function(snapshot){
  let data = snapshot.val();
  console.log(data.temperature);
  //document.getElementById(temp).innerText = 
});