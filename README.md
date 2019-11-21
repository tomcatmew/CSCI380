# Multiple Choice Questions here
```
[
  {
    multi_1: {
      multi_id: "m1",
      multi_q: "Which is the first phase of the software development life cycle",
      multi_a: "Planning",
      multi_b: "Analysis",
      multi_c: "Database Design",
      multi_d: "Communication",
      multi_answer: "d"
    }
  },
  {
    multi_2: {
      multi_id: "m2",
      multi_q: "In a complete SDLC how many phases are there",
      multi_a: "4",
      multi_b: "9",
      multi_c: "7",
      multi_d: "5",
      multi_answer: "c"
    }
  },
  { 
    multi_3: {
      multi_id: "m3",
      multi_q: "How many agile development principles are there",
      multi_a: "8",
      multi_b: "14",
      multi_c: "10",
      multi_d: "12",
      multi_answer: "d"
    }
  },
  {
    multi_4: {
      multi_id: "m4",
      multi_q: "What approach does the Extreme Programming(XP) Agile Proccess Model use",
      multi_a: "Object-oritented",
      multi_b: "Self-organization",
      multi_c: "Practice-based methodology",
      multi_d: "Pareto principle",
      multi_answer: "a"
    }
  },
  {
    multi_5: {
      multi_id: "m5",
      multi_q: "Which of these software engineering models is intended to be non-working",
      multi_a: "Waterfall",
      multi_b: "Prototype",
      multi_c: "Incremental",
      multi_d: "Conccurent",
      multi_answer: "b"
    }
  },
  {
    multi_6: {
      multi_id: "m6",
      multi_q: "What is an advantages of legacy system software",
      multi_a: "Perfomance",
      multi_b: "Security",
      multi_c: "Low cost",
      multi_d: "High quality",
      multi_answer: "c"
    }
  },
  {
    multi_7: {
      multi_id: "m7",
      multi_q: "For a database schema what would a name be classified as",
      multi_a: "Identifier Attribute",
      multi_b: "Referential Attribute",
      multi_c: "Entity",
      multi_d: "Descriptive Attribute",
      multi_answer: "d"
    }
  },
  {
    multi_8: {
      multi_id: "m8",
      multi_q: "What is not a purpose of Normalization in DBMS",
      multi_a: "Reduce Repition",
      multi_b: "Eliminate redundancy",
      multi_c: "Eliminate duplicate values",
      multi_d: "Establish full dependency on referential keys",
      multi_answer: "d"
    }
  },
  {
    multi_9: {
      multi_id: "m9",
      multi_q: "Of the below query types, which will return an Entity when passed an attribute and value",
      multi_a: "E [A,V]",
      multi_b: "E [E,V]",
      multi_c: "V [E,A]",
      multi_d: "A [V,A]",
      multi_answer: "a"
    }
  },
  {
    multi_10: {
      multi_id: "m10",
      multi_q: "What Database Software below used NoSQL mechanism for storage and retrieval of data",
      multi_a: "Redis",
      multi_b: "MariaDB",
      multi_c: "MySQL",
      multi_d: "Postgre",
      multi_answer: "b"
    }
  }
]
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
