/*first name in form*/
  function validateFirstName() {
    var firstName = document.getElementById("first_name").value;
    const list = document.getElementById("first_name_error").classList;

    if (firstName.length != 0) {
      list.remove("visible");
    } else {
      list.add("visible");
    }
  }
  /*last name in form*/
  function validateLastName() {
    var lastName = document.getElementById("last_name").value;
    const list = document.getElementById("last_name_error").classList;

    if (lastName.length != 0) {
      list.remove("visible");
    } else {
      list.add("visible");
    }
  }
  /*firm name in form*/
  function validateFirmName() {
    var firmName = document.getElementById("firm_name").value;
    const list = document.getElementById("firm_name_error").classList;

    if (firmName.length != 0) {
      list.remove("visible");
    } else {
      list.add("visible");
    }
  }
  /*email in form*/
  function validateEmail()
  {
    var mail=document.getElementById("email_name").value;
    var mailformat =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const list=document.getElementById("email_error").classList;
    if(mail.match(mailformat))
    {
      list.remove("visible");
    }
    else
    {
      list.add("visible");
    }
  }
/*phone number in form*/
  function validatePhone() {
    var phone = (document.getElementById("phone_number").value);
    const list = document.getElementById("phone_error").classList;
    if (phone.length!=10) {
      list.add("visible");
    }
    else {
      list.remove("visible");
    }
  }
  
  /* city in form*/
  function validateCity()
  {
    var city=document.getElementById("choosecity").value;
    const list = document.getElementById("city_error").classList;
    if (city.length!=0) {
      list.remove("visible");
    }
    else {
      list.add("visible");
    }


  }
  /*button in the form*/
  function validateButton() {
    var form = document.getElementById("myForm");
    var inputFields = form.querySelectorAll("input");
    const list=document.getElementById("save_button").classList;
    var allFieldsFilled = true;
    for (var i = 0; i < inputFields.length; i++) {
      if (inputFields[i].value === "" ) {
        allFieldsFilled = false;
       break;
       
      }
    }
    if (allFieldsFilled) {
      list.add("buttonvisible");
      
    } else {
      list.remove("buttonvisible");
    }
  }
  /*how to use functions*/
  /*const functionsh= {
  validateFirstName :function(){
  },
}
functionsh.validateFirstName();*/
  document
     .getElementById("first_name")
     .addEventListener("input", validateFirstName);
  document
    .getElementById("last_name")
    .addEventListener("input", validateLastName);
    document
    .getElementById("firm_name")
    .addEventListener("input", validateFirmName);
  document
    .getElementById("phone_number")
    .addEventListener("input", validatePhone);
 
  document
    .getElementById("email_name")
    .addEventListener("input", validateEmail);
var inputFields = document.querySelectorAll("input");
    for (var i = 0; i < inputFields.length; i++) {
      inputFields[i].addEventListener("input", validateButton) ; 
      
    }
    document.getElementById("first_name").onblur = validateFirstName;
    document.getElementById("last_name").onblur = validateLastName;
    document.getElementById("firm_name").onblur = validateFirmName;
    document.getElementById("email_name").onblur = validateEmail;
    document.getElementById("phone_number").onblur = validatePhone;
    document.getElementById("choosecity").onblur = validateCity;
    document.getElementById("myForm").onblur = validateButton;
  
   