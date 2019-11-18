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
