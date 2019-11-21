
function asnwer_switch_a(){
  $("#mubtn").css("background-color","#2c2c2c");
  $("#mubtn").css("color","#fff");
  $("#sabtn").css("background-color"," #fff");
  $("#sabtn").css("color"," #2c2c2c");

  $(".partA").css("display","block");
  $(".partB").css("display","none");
}

function asnwer_switch_b(){
  $("#mubtn").css("background-color"," #fff");
  $("#mubtn").css("color","#2c2c2c");
  $("#sabtn").css("background-color"," #2c2c2c");
  $("#sabtn").css("color"," #fff");

  $(".partA").css("display","none");
  $(".partB").css("display","block");
}

function a_switch_a(){
  $("#swbtn").css("background-color","#2c2c2c");
  $("#swbtn").css("color","#fff");
  $("#resbtn").css("background-color"," #fff");
  $("#resbtn").css("color"," #2c2c2c");

  $(".apartA").css("display","block");
  $(".apartB").css("display","none");
}

function a_switch_b(){
  $("#swbtn").css("background-color"," #fff");
  $("#swbtn").css("color","#2c2c2c");
  $("#resbtn").css("background-color"," #2c2c2c");
  $("#resbtn").css("color"," #fff");

  $(".apartA").css("display","none");
  $(".apartB").css("display","block");
}

// =============Database real time================
// var doc_short_count = 0;

function pop_result(asd){
    var db = firebase.firestore();
    var li = document.getElementById(asd);
    var c_name = li.className;
    if(c_name == "lno")
    {
      var t_id = $(".lyes").attr('id')
      var correct_choice = t_id.charAt(t_id.length-1).toUpperCase();
      $("#wrong_c").html("The correct answer is " + correct_choice);
      pop_wrong();
    }
    else
    {
      db.collection("user").doc(current_user_email).get().then(function(doc) {
        var ref = doc.data();
        var new_count = ref.count_rice + 16;
        var tempt = {
          count_rice : new_count
        }
      db.collection("user").doc(current_user_email).update(tempt);
    });
      pop_correct();
    }
}

function pop_correct(){
  $(".pop").css("display", "block");
  $("#containerpop").fadeIn(300);
  $("#success-box").fadeIn(300);
}

function pop_wrong(){
  $(".pop").css("display", "block");
  $("#containerpop").fadeIn(300);
  $("#error-box").fadeIn(300);
}



function pop_out(){
  $(".pop").fadeOut(300);
  $("#containerpop").fadeOut(300);
  $("#success-box").fadeOut(300);
  $("#error-box").fadeOut(300);
  $("#success-box").css("display", "none");
  $("#error-box").css("display", "none");
  reset_radio();
  next_multi();
}

function reset_radio(){
  $("#a").prop('checked', false);
  $("#b").prop('checked', false);
  $("#c").prop('checked', false);
  $("#d").prop('checked', false);
}

function next_multi(){
  var db = firebase.firestore();
  var the_q = $('#multi_q_tag').text();
  db.collection("user").doc(current_user_email).get().then(function(doc) {
      var ref = doc.data();
      var new_index = ref.multi_pos + 1;
              db.collection("multiDB").doc("m" + new_index).get().then(function(docc) {
                        var refff = docc.data();
                        $('#multi_q_tag').html(refff.multi_q);
                        init_multi();
                        $("#ansa").html(refff.multi_a);
                        $("#ansb").html(refff.multi_b);
                        $("#ansc").html(refff.multi_c);
                        $("#ansd").html(refff.multi_d);
                        $('#ans'+ refff.multi_answer).addClass('lyes').removeClass('lno');
                        var tempta = {
                          multi_pos : refff.multi_id
                        }
                        db.collection("user").doc(current_user_email).update(tempta);
                      });
                    })
}

function display_multi(){
  var db = firebase.firestore();
  db.collection("user").doc(current_user_email).get().then(function(doc) {
    var ref = doc.data();
    db.collection("multiDB").doc("m" + ref.multi_pos).get().then(function(docc) {
          var reff = docc.data();
          $('#multi_q_tag').html(reff.multi_q);
          init_multi();
          $("#ansa").html(reff.multi_a);
          $("#ansb").html(reff.multi_b);
          $("#ansc").html(reff.multi_c);
          $("#ansd").html(reff.multi_d);
          $('#ans'+reff.multi_answer).addClass('lyes').removeClass('lno');
        });
  });
}




function init_multi(){
     $('#ansa').addClass('lno').removeClass('lyes');
     $('#ansb').addClass('lno').removeClass('lyes');
     $('#ansc').addClass('lno').removeClass('lyes');
     $('#ansd').addClass('lno').removeClass('lyes');
}

function saveUserInfo(user){

  var db = firebase.firestore();
  var docRef = db.collection("user").doc(user.email);

  docRef.get().then(function(doc) {
  if (doc.exists) {
    return;
  }
  else{
  var userInfoData = {
      email: user.email,
      name: user.displayName,
      uid: user.uid,
      havelist:false,
      short_list:[],
      multi_pos:0,
      current_s_index : 0,
      current_q_s:1,
      count_rice:0
  };

    db.collection("user").doc(user.email).set(userInfoData).then(function() {
        console.log("User InfoDocument successfully written!");
      });
    }
    })
}



function add_short_DB()
{
  var db = firebase.firestore();
  var text = $('#comment').val();

  db.collection("shortDB").get().then(snap => {
     doc_short_count = snap.size
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

  db.collection("user").doc(current_user_email).get().then(function(doc) {
    if (doc.exists) {
        var userRef = doc.data();
        if(userRef.havelist == false)
        {
          db.collection("user").doc(current_user_email).update(tempt_user);
        }
        else
        {
          var te_list = userRef.short_list;
          te_list.push("s" + doc_short_count);
          var tempt_ll = {
            short_list:te_list
          };
          db.collection("user").doc(current_user_email).update(tempt_ll);
        }
      }
    else {
      console.log('doc not found');
      }
  });


  db.collection("shortDB").doc("s" + doc_short_count).set(tempt).then(function() {
      console.log("Short Quesiton successfully written!");
  });


});

}


function display_short(){
  var db = firebase.firestore();
  db.collection("user").doc(current_user_email).get().then(function(docc) {
        var userReff = docc.data();
        var g_short_list = userReff.short_list;
        var current_s_indexf = userReff.current_s_index;
        if (g_short_list.length != 0)
        {
  db.collection("shortDB").doc(g_short_list[current_s_indexf]).get().then(function(doc) {
        var userRef = doc.data();
        $('#y_question').html(userRef.short_main);
        $('#y_answer').html(userRef.short_ans);
      });
    }
  });
}

function next_short()
{
  var db = firebase.firestore();
  db.collection("user").doc(current_user_email).get().then(function(docc) {
          var userReff = docc.data();
          var g_short_list = userReff.short_list;
          var current_s_indexf = userReff.current_s_index;
          current_s_indexf++;
          if (current_s_indexf == g_short_list.length)
            current_s_indexf = 0;
          var tempt_index = {
            current_s_index : current_s_indexf
          }
          db.collection("user").doc(current_user_email).update(tempt_index);
          if (g_short_list.length != 0)
          {
          db.collection("shortDB").doc(g_short_list[current_s_indexf]).get().then(function(doc) {
          var userRef = doc.data();
          $('#y_question').html(userRef.short_main);
          $('#y_answer').html(userRef.short_ans);
        });
      }
    });
}

function display_ss_question()
{
  var db = firebase.firestore();
  db.collection("user").doc(current_user_email).get().then(function(docc) {
        var userReff = docc.data();
  db.collection("shortDB").doc("s" + userReff.current_q_s).get().then(function(doc) {
        var userRef = doc.data();
        $('#ss_question').html(userRef.short_main);
      });
  });
}

function next_ss_question()
{
  var db = firebase.firestore();
  db.collection("shortDB").get().then(snap => {
     doc_short_count = snap.size
  db.collection("user").doc(current_user_email).get().then(function(docc) {
          var userReff = docc.data();
          var current_s_indexf = userReff.current_q_s;
          current_s_indexf++;
          if (current_s_indexf == doc_short_count)
            current_s_indexf = 1;
          var tempt_index = {
            current_q_s : current_s_indexf
          }
          db.collection("user").doc(current_user_email).update(tempt_index);

          db.collection("shortDB").doc("s" + current_s_indexf).get().then(function(doc) {
          var userRef = doc.data();
          $('#ss_question').html(userRef.short_main);
        });
    });
  });
}

function upload_answer()
{
  var db = firebase.firestore();
  var answer = $('#comment2').val();
  var text = $('#ss_question').text();

  db.collection("shortDB").where("short_main", "==", text).get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            var ref = doc.data();
            var tempt_answer = {
              short_if_ans : true,
              short_ans : answer
            }
            db.collection("shortDB").doc("s" + ref.short_id).update(tempt_answer);
            alert("You have successfully sent Answer +16 rice ! ");
        });
    });
  $('#comment2').val(" ");
}

function logoutclick(){
    const action = confirm("Do you really want to SignOut ");
            if(action){
                firebase.auth().signOut().then(function() {
                  window.location.href = "index.html";
                }).catch(function(error) {
                  // An error happened.
                });
            }
            else
            {
              return ;
            }
}
