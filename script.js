$(function() {
  
    var count = $('.slide').length,
        i = 1,
        j=0,
        ids=1,
        t=true,
        f=false,
        s=0;
    function nextSlide() {
      if (i < count && j==0) {
        $('.active').removeClass('active').next('.slide').addClass('active');
        ids++;
        i++;
        console.log(ids);
      }
    }
    function prevSlide() {
      if (i > 1 && j==0 ) {
        $('.active').removeClass('active').prev('.slide').addClass('active');
        ids--;
        i--;
        console.log(ids);
      }
    }
    function togglePopup(){
      if(j==0){
        j=1;
        document.getElementById("popup-1").classList.toggle("active");
        if(ids==1){
           var firebaseRef = firebase.database().ref('state_free');
           firebaseRef.update({1 : 1});
        }else if(ids==2){
          var firebaseRef = firebase.database().ref('state_free');
           firebaseRef.update({2 : 1});
           
        }else if(ids==3){
          var firebaseRef = firebase.database().ref('state_free');
           firebaseRef.update({3 : 1});
        
        }else {
          var firebaseRef = firebase.database().ref('state_free');
           firebaseRef.update({4 : 1});
        }
      }
    }  
    function exit(){
      if(j==1){
        j=0;
        document.getElementById("popup-1").classList.toggle("active");
      }
      
    }      
    window.onkeyup = function(e) {
      if (e.keyCode == 37) {
        nextSlide();
      }
      if (e.keyCode == 39) {
        prevSlide();
      }
      if (e.keyCode == 32){
        togglePopup();
      }
      if (e.keyCode == 38){
        exit();
      }
      
    }
  
  });
  async function check_status(){
    var firebaseRef = firebase.database().ref('state');
    firebaseRef.once('value').then(function(dataSnapshot){
      if(dataSnapshot.val()['1']=='1'){
       db.collection("users").doc('1').update({status: 'ว่าง'});
      }else if(dataSnapshot.val()['1']=='0'){
           db.collection("users").doc('1').update({status: 'ไม่ว่าง'});
      }
      if(dataSnapshot.val()['2']=='1'){
        db.collection("users").doc('2').update({status: 'ว่าง'});
      }else if(dataSnapshot.val()['2']=='0'){
          db.collection("users").doc('2').update({status: 'ไม่ว่าง'});
      }
       if(dataSnapshot.val()['3']=='1'){
        db.collection("users").doc('3').update({status: 'ว่าง'});
       }else if(dataSnapshot.val()['3']=='0'){
          db.collection("users").doc('3').update({status: 'ไม่ว่าง'});
      }  
       if(dataSnapshot.val()['4']=='1'){
        db.collection("users").doc('4').update({status: 'ว่าง'});
       }else if(dataSnapshot.val()['4']=='0'){
          db.collection("users").doc('4').update({status: 'ไม่ว่าง'});
      }
    })
  }
  check_status();
  setInterval(check_status,1000);