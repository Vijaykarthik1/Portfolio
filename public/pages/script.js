const firebaseConfig = {
    apiKey: "AIzaSyDUkpLKACG1eaw3dqE5JZf4PxXuTUH4VXc",
    authDomain: "portfolio-vijaykarthik-1.firebaseapp.com",
    databaseURL: "https://portfolio-vijaykarthik-1-default-rtdb.firebaseio.com",
    projectId: "portfolio-vijaykarthik-1",
    storageBucket: "portfolio-vijaykarthik-1.appspot.com",
    messagingSenderId: "855455910058",
    appId: "1:855455910058:web:5a662f95f18bcaff10e8d3"
};

//initialize
firebase.initializeApp(firebaseConfig)

//reference
const contactFormDB = firebase.database().ref('PortfolioForm');

document.getElementById("Askmeanything").addEventListener("submit",submitForm)

function submitForm(e){
    e.preventDefault();

    var name = getElementVal("name");
    var email = getElementVal("email");
    var message = getElementVal("message")
    saveMessage(name,email,message);

    //alert enable 

    document.querySelector('.alert').style.display = "block";

    //remove alert 
    setTimeout(() => {
    document.querySelector('.alert').style.display = "none";
        
    }, 3000);

    //reset form 
    document.getElementById("Askmeanything").reset();
}

const saveMessage = (name,email,message)=>{
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        name:name,
        email:email,
        message:message,
    });
}

const getElementVal = (id)=>{
    return document.getElementById(id).value;
}