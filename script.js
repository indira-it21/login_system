//console.log("welcome");
var objUser=[
    {
        username:"indhuravi",
        password:"123456789"
    },
    {
        username:"deesh",
        password:"1234"
    
    },
    {
        username:"akshaya",
        password:"123456"
    }
]

function getInfo(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
   for(i=01; i<objUser.length; i++){
    if(username==objUser[i].username && password == objUser[i].password){
        console.log(username + "is Loged In !0");
        return
    }
   }
   console.log("incorrect Username or Password");
}