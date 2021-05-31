let i = 0 

//show data
async function show_data(){
    
    db.collection("users").get().then(user =>{
        user.docs.forEach(doc => {
                    document.querySelector("#name_th"+doc.id.toString()).innerText = "Name: "+doc.data().name;
                    document.querySelector("#surname_th"+doc.id.toString()).innerText = "Surname: "+doc.data().surname;
                    document.querySelector("#status"+doc.id.toString()).innerText = "Status: "+doc.data().status;
                    
                    
        });
    });
    
}
//show realtime data
db.collection("users").onSnapshot(snapshot =>{ 
    db.collection("users").get().then(user =>{
        user.docs.forEach(doc => {
            document.querySelector("#name_th"+doc.id.toString()).innerText = "Name: "+doc.data().name;
            document.querySelector("#surname_th"+doc.id.toString()).innerText = "Surname: "+doc.data().surname;
            document.querySelector("#status"+doc.id.toString()).innerText = "Status: "+doc.data().status;   
        });
        
       
    });
})


show_data();