
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


function init_multi(){
    var db = firebase.firestore();

    db.collection("multiDB").doc("m1").get().then(function(doc) {
          var userRef = doc.data();
          $("#multi_q_tag").html(userRef.multi_q);
          $("#ansa").html(userRef.multi_a);
          $("#ansb").html(userRef.multi_b);
          $("#ansc").html(userRef.multi_c);
          $("#ansd").html(userRef.multi_d);
          $('#ans'+userRef.multi_answer).addClass('lyes').removeClass('lno');
      });
}
