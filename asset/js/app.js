// Initialize Firebase
var config = {
	apiKey: "AIzaSyD-IT1RWXi-7bMSjtTsPmpaTD2SXadFxC0",
	authDomain: "shipit-7427d.firebaseapp.com",
	databaseURL: "https://shipit-7427d.firebaseio.com",
	projectId: "shipit-7427d",
	storageBucket: "",
	messagingSenderId: "601650858338"
};
firebase.initializeApp(config);

//Database Control
var database = firebase.database();

database.ref('/').once('value', function(snapshot){
  console.log(snapshot.val());
});