document.querySelector("form").addEventListener("submit", function(){
    
    const user =document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    if(user === "" ||  pass === "") {
        alert("cannot empety");
        return; // go to admin page
    } 
    
    

});

const signup = document.querySelector("#signup");
if(signup){
    signup.addEventListener("submit", function(event){
        const firstname =document.getElementById("firstname").value;
        const lastname =document.getElementById("lastname").value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const email= document.getElementById("email").value;
        const password1= document.getElementById("password1").value;
        const password2= document.getElementById("password2").value;
        

        const firstnameError= document.querySelector("#firstnameError");
        const lastnameError= document.querySelector("#lastnameError");
        const genderError = document.querySelector("#genderError");
       const emailError=  document.querySelector("#emailError");
        const password1Error = document.querySelector("#password1Error");
        const password2Error= document.querySelector("#password2Error");


        firstnameError.innerText="";
        lastnameError.innerText="";
        emailError.innerText="";
        password1Error.innerText="";
        password2Error.innerText="";
        genderError.innerText="";

    let count = 0;

        if(!firstname){
            firstnameError.innerText="first name required"
            event.preventDefault();
            count++;
            
        }
        let lengthE= email.length;
        if(lengthE>15){
            newLength= lengthE-10;
            proLength = email.slice(newLength);
            if(proLength !== "@gmail.com"){
                emailError.innerText="invalid Email"
            event.preventDefault();
            count++;
            }
        }
        else{
            emailError.innerText="invalid Email"
            event.preventDefault();
            count++;
        }
        
        if(!lastname){
            lastnameError.innerText="lastname required"
            event.preventDefault();
             count++;}

         if(!gender) {
            genderError.innerText="choose your gender"
            event.preventDefault();
            count++;}

        if(!email){
            emailError.innerText="Email required"
            event.preventDefault();
            count++;}

            if(!password1){
                password1Error.innerText="password required"
            event.preventDefault();
            count++;
            }

         if(password1 !== password2)  {
            password2Error.innerText="password not matched";
            event.preventDefault();
            count++;
         } 

         if(count>0){
           event.preventDefault();
           return;
         }

     });

}
    

