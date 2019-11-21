function add_short_DB()
{
  var db = firebase.firestore();
  var text = $('#comment').val();


  var tempt  = {
    short_id: "s" + doc_short_count,
    short_main: text,
    short_ans: " ",
    short_if_ans : false
  };

  var tempt_user = {
    havelist : true,
    short_list:["s" + doc_short_count]
  };

  console.log("doc_short_count : "  + doc_short_count);

  db.collection("shortDB").doc("s" + doc_short_count).set(tempt).then(function() {
      console.log("Short Quesiton successfully written!");
  });

  db.collection("user").doc(current_user_email).get().then(function(doc) {
    if (doc.exists) {
        var userRef = doc.data();
        if(userRef.havelist == false)
        {
          db.collection("user").doc(current_user_email).update(tempt_user);
        }
        else
        {
          var t_l = userRef.short_list;
          t_l.push("s" + doc_short_count);
          var tempt_list = {
            short_list : t_l
          };
          db.collection("user").doc(current_user_email).update(tempt_list);
        }
      }
    else {
      console.log('doc not found');
      }
  });

}

function check_short_list()
{
    var db = firebase.firestore();

    db.collection("shortDB").onSnapshot(function(querySnapshot) {
      doc_short_count = 0;
      querySnapshot.forEach(function(doc) {
        doc_short_count ++;
      });
    });
}



function add_short_DB()
{
  var db = firebase.firestore();
  var text = $('#comment').val();

  db.collection("shortDB").orderBy('short_id').limit(1).get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
    if (doc.exists) {
    var refa = doc.data();
    doc_short_count = refa.short_id + 1;


  var tempt  = {
    short_id: doc_short_count,
    short_main: text,
    short_ans: " ",
    short_if_ans : false
  };

  var tempt_user = {
    havelist : true,
    short_list:["s" + doc_short_count]
  };

  console.log("doc_short_count : "  + doc_short_count);

  db.collection("shortDB").doc("s" + doc_short_count).set(tempt).then(function() {
      console.log("Short Quesiton successfully written!");
  });

  db.collection("user").doc(current_user_email).get().then(function(doc) {
              var userRef = doc.data();
              if(userRef.havelist == false)
              {
                db.collection("user").doc(current_user_email).update(tempt_user);
              }
              else
              {
                var t_l = userRef.short_list;
                t_l.push("s" + doc_short_count);
                var tempt_list = {
                  short_list : t_l
                };
                db.collection("user").doc(current_user_email).update(tempt_list);
              }
    });
  }
  else
  {
    var tempt2  = {
      short_id: 0,
      short_main: text,
      short_ans: " ",
      short_if_ans : false
    };

    var tempt_user2 = {
      havelist : true,
      short_list:["s0"]
    };

    db.collection("shortDB").doc("s" + 0).set(tempt2).then(function() {
        console.log("Short Quesiton successfully written!");
    });
    db.collection("user").doc(current_user_email).update(tempt_user2);
  }


    });
  });
}
