function iniciar(){

    let user=document.getElementById("usuario").value; 
    let pass=document.getElementById("pass").value; 

    if (user == "Ferdin" && pass == "12345"){
        window.location="index.html";
    }else{
        alert("Datos Incorrectos");
    }

}