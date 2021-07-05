let i = 0

//show data
 /* async function show_data() {

     db.collection("users").get().then(user => {
         user.docs.forEach(doc => {
             document.querySelector("#name_th" + doc.id.toString()).innerText = "Name: " + doc.data().name;
             document.querySelector("#surname_th" + doc.id.toString()).innerText = "Surname: " + doc.data().surname;
             document.querySelector("#status" + doc.id.toString()).innerText = "Status: " + doc.data().status;
             if(doc.data().status=='ว่าง') {
                 document.querySelector("#status" + doc.id.toString()).style.borderRadius = "8px";
                 document.querySelector("#status" + doc.id.toString()).style.border = "solid 2px black";
                 document.querySelector("#status" + doc.id.toString()).style.backgroundColor = "lightgreen";
                 document.querySelector("#status" + doc.id.toString()).style.width = "350px";
                 document.querySelector("#status" + doc.id.toString()).style.margin = "auto";
             }else{
                 document.querySelector("#status" + doc.id.toString()).style.borderRadius = "8px";
                 document.querySelector("#status" + doc.id.toString()).style.border = "solid 2px black";
                 document.querySelector("#status" + doc.id.toString()).style.backgroundColor = "#FF3300";
                 document.querySelector("#status" + doc.id.toString()).style.width = "350px";
                 document.querySelector("#status" + doc.id.toString()).style.margin = "auto";
             }
         });
     });
 } */
//show realtime data
 db.collection("users").onSnapshot(snapshot => {
    db.collection("users").get().then(user => {
        user.docs.forEach(doc => {
            document.querySelector("#name_th" + doc.id.toString()).innerText = "Name: " + doc.data().name;
            document.querySelector("#surname_th" + doc.id.toString()).innerText = "Surname: " + doc.data().surname;
            document.querySelector("#status" + doc.id.toString()).innerText = "Status: " + doc.data().status;
            if(doc.data().status=='ว่าง') {
                document.querySelector("#status" + doc.id.toString()).style.borderRadius = "8px";
                document.querySelector("#status" + doc.id.toString()).style.border = "solid 2px black";
                document.querySelector("#status" + doc.id.toString()).style.backgroundColor = "lightgreen";
                document.querySelector("#status" + doc.id.toString()).style.width = "350px";
                document.querySelector("#status" + doc.id.toString()).style.margin = "auto";
            }else{
                document.querySelector("#status" + doc.id.toString()).style.borderRadius = "8px";
                document.querySelector("#status" + doc.id.toString()).style.border = "solid 2px black";
                document.querySelector("#status" + doc.id.toString()).style.backgroundColor = "#FF3300";
                document.querySelector("#status" + doc.id.toString()).style.width = "400px";
                document.querySelector("#status" + doc.id.toString()).style.margin = "auto";
            }
        });
    });
}) 
