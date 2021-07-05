var t = 0 ,a = 0 ;
$(function() {
  
    var count = $('.slide').length,
        i=1,
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
        
       
      }
    }
    function prevSlide() {
      if (i > 1 && j==0 ) {
        $('.active').removeClass('active').prev('.slide').addClass('active');
        ids--;
        i--;
      
        
      }
    }
    function togglePopup(){
      if(j==0){
        j=1;
        document.getElementById("popup-1").classList.toggle("active");
        if(ids==1){
           var firebaseRef = firebase.database().ref('user/0001');
           firebaseRef.update({noti : 1});
        }else if(ids==2){
          var firebaseRef = firebase.database().ref('user/0002');
           firebaseRef.update({noti : 1});
           
        }else if(ids==3){
          var firebaseRef = firebase.database().ref('user/0003');
           firebaseRef.update({noti : 1});
        
        }else if(ids==4){
          var firebaseRef = firebase.database().ref('user/0004');
           firebaseRef.update({noti : 1});
        }else if(ids==5){
          var firebaseRef = firebase.database().ref('user/0005');
          firebaseRef.update({noti : 1});
        }else{
          var firebaseRef = firebase.database().ref('user/0006');
          firebaseRef.update({noti : 1});
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
        a=1;
      }
      if (e.keyCode == 39) {
        prevSlide();
        a=1;
        
      }
      if (e.keyCode == 32){
        togglePopup();
        a=1;
      }
      if (e.keyCode == 38){ 
        exit();
        a=1;
      }
    }
 

  });
 
  async function check_status(){
    var firebaseRef = firebase.database().ref('user/0001');
    var firebaseRef2 = firebase.database().ref('user/0002');
    var firebaseRef3 = firebase.database().ref('user/0003');
    var firebaseRef4 = firebase.database().ref('user/0004');
    var firebaseRef5 = firebase.database().ref('user/0005');
    var firebaseRef6 = firebase.database().ref('user/0006');   
    if(a==1){
        t=0;
        a=0;
      }
      t++;
      if(t>45){
        go_back();
        t=0;
      }
    firebaseRef.once('value').then(function(dataSnapshot1){
      if(dataSnapshot1.val()['status']=='1'){
       db.collection("users").doc('1').update({status: 'ว่าง'});
      }else if(dataSnapshot1.val()['status']=='0'){
           db.collection("users").doc('1').update({status: 'ไม่ว่าง'});
      }
    })
    firebaseRef2.once('value').then(function(dataSnapshot2){
      if(dataSnapshot2.val()['status']=='1'){
       db.collection("users").doc('2').update({status: 'ว่าง'});
      }else if(dataSnapshot2.val()['status']=='0'){
           db.collection("users").doc('2').update({status: 'ไม่ว่าง'}); 
      }
    })
    firebaseRef3.once('value').then(function(dataSnapshot3){
      if(dataSnapshot3.val()['status']=='1'){
       db.collection("users").doc('3').update({status: 'ว่าง'});
      }else if(dataSnapshot3.val()['status']=='0'){
           db.collection("users").doc('3').update({status: 'ไม่ว่าง'});
      }
    })
    firebaseRef4.once('value').then(function(dataSnapshot4){
      if(dataSnapshot4.val()['status']=='1'){
       db.collection("users").doc('4').update({status: 'ว่าง'});
      
      }else if(dataSnapshot4.val()['status']=='0'){
           db.collection("users").doc('4').update({status: 'ไม่ว่าง'});  
      }
    })
    firebaseRef5.once('value').then(function(dataSnapshot5){
      if(dataSnapshot5.val()['status']=='1'){
       db.collection("users").doc('5').update({status: 'ว่าง'});
      }else if(dataSnapshot5.val()['status']=='0'){
           db.collection("users").doc('5').update({status: 'ไม่ว่าง'});
      }
    })
    firebaseRef6.once('value').then(function(dataSnapshot6){
      if(dataSnapshot6.val()['status']=='1'){
       db.collection("users").doc('6').update({status: 'ว่าง'});
      }else if(dataSnapshot6.val()['status']=='0'){
           db.collection("users").doc('6').update({status: 'ไม่ว่าง'});
      }
    })
  }
  function go_back(){
    window.location.href = "index.html"
    t=0;
  }
  check_status();
  setInterval(check_status,1000);  
 
