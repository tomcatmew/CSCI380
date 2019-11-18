# Multiple Choice Questions here
```
      multi_1:{
      multi_id: "m1",
      multi_q: "This is the question",
      multi_a: "answer A",
      multi_b: "answer B",
      multi_c: "answer C",
      multi_d: "answer D",
      multi_answer:"c"
    },
```
multi_id will be like, m1,m2,m3,m4 ... etc

multi_answer will be the letter of correct answer



# CSCI380
Our web application address : csci380-chen.firebaseapp.com

Those files are all in the public folder 

Just put your code here if you write any new code


# ShortAnswerDBFormat
```
var short_array = [];
function shortDB(){
    var short_db = {
      short_1:{
      short_id: "s1",
      short_main: "sdfsdfsdfsf",
      short_ans: "asdadasdasd",
      short_if_ans : true,
    },
    short_2:{
    short_id: "s2",
    short_main: "sdfsdfsdfsf",
    short_ans: "asdadasdasd",
    short_if_ans : true,
  },
};
for(let i of Object.keys(short_db)){
         short_array.push(short_db[i]);
      }
      console.log("Course Array Test: ", short_array);
};
function write_shortDB(){
    var db = firebase.firestore();
    for(i = 0; i < short_array.length; i++){
      db.collection("multiDB").doc(short_array[i]["multi_id"]).set(short_array[i]).then(function() {
          console.log("Quesiton InfoDocument successfully written!");
      });
    }
}
```


user data format
```
function saveUserInfo(user){

  var db = firebase.firestore();

  var userInfoData = {
      email: user.email,
      name: user.displayName,
      uid: user.uid,
      role: "student"
  };

db.collection("user").doc(user.email).collection("account").doc("userInfo").set(userInfoData).then(function() {
    console.log("User InfoDocument successfully written!");
});
}
```
