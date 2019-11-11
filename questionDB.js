var  multi_array = [];
function multiDB(){
    var multi_db = {
      multi_1:{
      multi_id: "m1",
      multi_q: "what is the best mod can use in here",
      multi_a: "waterfall",
      multi_b: "flexiable",
      multi_c: "spiral",
      multi_d: "recursion",
      multi_answer:"c"
    },
    multi_2:{
    multi_id: "m2",
    multi_q: "what is the worst mod can use in here",
    multi_a: "waterfall",
    multi_b: "flexiable",
    multi_c: "spiral",
    multi_d: "recursion",
    multi_answer:"a"
  },

};
      for(let i of Object.keys(multi_db)){
         multi_array.push(multi_db[i]);
      }
      console.log("Course Array Test: ", multi_array);
};

function write_multiDB(){
    var db = firebase.firestore();
    for(i = 0; i < multi_array.length; i++){
      db.collection("multiDB").doc(multi_array[i]["multi_id"]).set(multi_array[i]).then(function() {
          console.log("Quesiton InfoDocument successfully written!");
      });
    }
}
