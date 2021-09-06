
const firebaseConfig = {
      apiKey: "AIzaSyAVmXPecwO2g8l2Vy-9drkSE6VSarOpEYs",
      authDomain: "kwitter-part-2-abfbb.firebaseapp.com",
      databaseURL: "https://kwitter-part-2-abfbb-default-rtdb.firebaseio.com",
      projectId: "kwitter-part-2-abfbb",
      storageBucket: "kwitter-part-2-abfbb.appspot.com",
      messagingSenderId: "462431007934",
      appId: "1:462431007934:web:1e30450b29afb78d4bdaef"
    };
    user_name_display = localStorage.getItem("user_name");
    user_name_display = document.getElementById("username");
function getData() {
firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {
      childKey  = childSnapshot.key;
       Room_names = childKey;
      
      });
});
}
getData();
