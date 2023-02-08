let FName = false; // a bool variable, ON/OFF switch if all conditions are met
let LName = false; // a bool variable, ON/OFF switch if all conditions are met
let IDNum = false; // a bool variable, ON/OFF switch if all conditions are met
let DateOfBirth = false; // a bool variable, ON/OFF switch if all conditions are met
let Email = false; // a bool variable, ON/OFF switch if all conditions are met
let Pass = false; // a bool variable, ON/OFF switch if all conditions are met
let CPass = false; // a bool variable, ON/OFF switch if all conditions are met
let errors = []; // array for errors

function formCheck() {
  // a function to check if all conditions for input fields are met

  let fname = document.getElementById("fname").value; // get the data from the fname input

  if (fname[0] == fname[0].toUpperCase()) {
    // check if the first letter of the fname is uppercase
    console.log("First name valid!");
    FName = true;
    document.getElementById("fname").style.borderColor = "green"; // change the background of box if input is incorrect
  } else {
    console.log("First name invalid!");
    FName = false;
    document.getElementById("fname").style.borderColor = "#e32636"; // change the background of box if input is incorrect
    errors.push("First name: The first letter must be capitalized!"); // push to errors
  }

  let lname = document.getElementById("lname").value; // get the data from the lname input

  if (lname[0] == lname[0].toUpperCase()) {
    // check if the first letter of the lname is uppercase
    console.log("Last name valid!");
    LName = true;
    document.getElementById("lname").style.borderColor = "green"; // change the background of box if input is incorrect
  } else {
    console.log("Last name invalid!");
    LName = false;
    document.getElementById("lname").style.borderColor = "#e32636"; // change the background of box if input is incorrect
    errors.push("Last name: The first letter must be capitalized!"); // push to errors
  }

  let id_num = document.getElementById("id_num").value; // get the data from the id_num input

  if (id_num.length >= 13) {
    // check if the first letter of the lname is uppercase
    console.log("ID number name valid!");
    IDNum = true;
    document.getElementById("id_num").style.borderColor = "green"; // change the background of box if input is incorrect
  } else {
    console.log("ID number invalid!");
    IDNum = false;
    document.getElementById("id_num").style.borderColor = "#e32636"; // change the background of box if input is incorrect
    errors.push("ID number: Must be 13 digits long!"); // push to errors
  }

  let bday = new Date(document.getElementById("date_of_birth").value); // get the data from the bdate input
  let today = new Date();
  
  if (today >= new Date(bday.getFullYear() + 16, bday.getMonth(), bday.getDate())) {
    // if user is older than 16, he can access the system
    console.log("Date of birth valid!");
    DateOfBirth = true;
    document.getElementById("date_of_birth").style.borderColor = "green"; // change the background of box if input is incorrect
  } else {
    console.log("Date of birth invalid!");
    DateOfBirth = false;
    document.getElementById("date_of_birth").style.borderColor = "#e32636"; // change the background of box if input is incorrect
    errors.push("You must be over 16 years old!"); // push to errors
  }
  
  const allowedEmailDomain = ["gmail.com", "hotmail.com", "pmf.unsa.ba"]; // an array of allowed email domains
  let UEmail = document.getElementById("email").value; // the email user entered

  if (allowedEmailDomain.includes(UEmail.split("@")[1])) {
    // check if the user has entered a valid email
    console.log("Email valid!");
    Email = true;
    document.getElementById("email").style.borderColor = "green"; // change the background of box if input is incorrect
  } else {
    console.log("Email invalid!");
    Email = false;
    document.getElementById("email").style.borderColor = "#e32636"; // change the background of box if input is incorrect
    errors.push("The email entered must contain the @ sign and must be gmail.com, hotmail.com or pmf.unsa.ba!"); // push to errors
  }
  
  let password = document.getElementById("password").value; // get the data from the password input
  let conditions = false; // conditions are containLetter and containNumber

  var pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{1,}$/;
  if (pattern.test(password)) {
    conditions = true;
  };

  if (password.length >= 10 && conditions === true) {
    // check if password is 10 charachers long
    console.log("Password valid!");
    Pass = true;
    document.getElementById("password").style.borderColor = "green"; // change the background of box if input is incorrect
  } else {
    console.log("Password invalid!");
    Pass = false;
    document.getElementById("password").style.borderColor = "#e32636"; // change the background of box if input is incorrect
    errors.push("The password must contain 10 characters and must include at least one number and at least one a letter!", password); // push to errors
  }

  let cpassword = document.getElementById("cpassword").value; // get the data from the password2 input

  if (cpassword === password) {
    // checking if the entered password is the same as password entered above and not empty
    console.log("Confirmed password valid!");
    CPass = true;
    document.getElementById("cpassword").style.borderColor = "green"; // change the background of box if input is incorrect
    if (!Pass) {
      document.getElementById("cpassword").style.borderColor = "#e32636"; // change the background of box if input is incorrect
    }
  } else {
    console.log("Confirmed password invalid!");
    CPass = false;
    document.getElementById("cpassword").style.borderColor = "#e32636"; // change the background of box if input is incorrect
    errors.push("The passwords does not match!"); // push to errors
  }

  let form = document.getElementById("form"); // get the from
  let h4 = document.getElementById("message"); // get the h4
  //let messages = document.getElementById("messages"); // get the messages box

  if (
    FName == true && LName == true && IDNum == true && DateOfBirth == true && Email == true && Pass == true && CPass == true) {
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    form.style.visibility = "hidden"; // remove from from the screen
    h4.style.visibility = "visible"; // change h1 visibility from hidden to visible
    h4.style.textAlign = "center"; // align h1 to the center

    h4.innerText = firstName + " " + lastName + ", dobrodošli na WebProgramiranje!"; // concatenate the greeting and display it into html
  } else {
    for (let i = 0; i < errors.length; i++)
      //messages.innerHTML += `<div id="alert" class="alert alert-danger w-75" role="alert">${errors[i]}</div>`;
      alert(errors[i])
  }
  errors = []
}

function onlyNumberKey(evt) {
  // Only ASCII character in that range allowed
  var ASCIICode = (evt.which) ? evt.which : evt.keyCode
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
      return false;
  return true;
}