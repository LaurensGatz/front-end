let btn = document.getElementById('btn');
btn.onclick = function () {
    submit();
    validateForm();
    
    
}

function submit() {
    
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let username = document.getElementById("username").value;
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmpassword = document.getElementById("confirmpassword");
    let adress = document.getElementById("adress").value;
    let city = document.getElementById("city").value;
    let zip = document.getElementById("zip").value;
    let phone = document.getElementById("phone").value;
    let age = document.getElementById("age").value;
    let hobbies = document.getElementById("hobbies").value;

    let emailCheck = "@gmail.com";
    let passwordCheck = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
    let error = "";

    

    if ((password.value == confirmpassword.value) && (email.value.match(emailCheck)) && (password.value.match(passwordCheck))) { 
        valid = true;
    } else if (password.value == "") { 
        valid = false;
        document.getElementById("password").style.border = "1px solid red";
        document.getElementById("confirmpassword").style.border = "1px solid red";
        error += "no password entered \n";
    } else if (password.value !== confirmpassword.value) { 
        valid = false;
        document.getElementById("password").style.border = "1px solid red";
        document.getElementById("confirmpassword").style.border = "1px solid red";
        password.value = "";
        confirmpassword.value = "";
        error += "passwords do not match \n";
    } else if (!(email.value.match(emailCheck))) { 
        email.value = "";
        valid = false;
        document.getElementById("email").style.border = "1px solid red";
        error += "this is not a valid email adress (@gmail only) \n";
    } else if (!(password.value.match(passwordCheck))) {
        document.getElementById("password").style.border = "1px solid red";
        document.getElementById("confirmpassword").style.border = "1px solid red";
        password.value = "";
        confirmpassword.value = "";
        valid = false;
        error += "password must contain atleast one number and one uppercase letter"
    }



    if (valid == true) {
        let laurens = new info (firstname, lastname, username, email, password, confirmpassword, adress, city, zip, phone, age, hobbies)
        console.dir(laurens)
    } else {
        alert(error)
    }


}

function info (firstname, lastname, username, email, password, confirmpassword, adress, city, zip, phone, age, hobbies) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.username = username;
    this.email = email;
    this.password = password;
    this.confirmpassword = confirmpassword;
    this.adress = adress;
    this.city = city;
    this.zip = zip;
    this.phone = phone;
    this.age = age;
    this.hobbies = hobbies;
    }

    function validateForm() {
        var x = document.forms["myForm"]["firstname"]["lastname"]["username"]["email"]["password"]["confirmpassword"]["adress"]["city"]["zip"]["phone"]["age"]["hobbies"].value;
    }

