function sendMail(){
    var params = {
        name: document.getElementById("name").value ,
        email: document.getElementById("email").value,
        message: document.getElementById("messageBox").value
    }

    const serviceID = "service_40eof1d";
const templateID = "template_oryn39p"

emailjs.send(serviceID, templateID, params)
.then(
    res => {
        
        console.log(res);
        console.log("You've sent a message!")
        alert("Email successfully sent!");
    }
).catch(err=>console.log(err))
}

