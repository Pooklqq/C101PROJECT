// Your web app's Firebase configuration

var firebaseConfig = {

    apiKey: "AIzaSyCWnxZOr1ZMLOobnLslyPCQmLoDQIXPW9A",
  
    authDomain: "c101project.firebaseapp.com",
  
    databaseURL: "https://c101project-default-rtdb.firebaseio.com",
  
    projectId: "c101project",
  
    storageBucket: "c101project.appspot.com",
  
    messagingSenderId: "448715286609",
  
    appId: "1:448715286609:web:0f5ce490ef71cb3eb5b070"
  
  };
  
  
  // Initialize Firebase
  
 firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}



