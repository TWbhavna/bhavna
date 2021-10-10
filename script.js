




function handleChangeFirstName(text){
    var nameError = document.getElementById("FullNameError");
    if(text.match("^[A-Za-z -]+$"))
      {
        nameError.textContent = "";
        localStorage.setItem("FirstName",text);
      }
     else
      {
        nameError.textContent = "Please Enter Valid Name";
        nameError.style.color = "red";
      } 
}
function handleChangeMobileNumber(number){
    var numberError = document.getElementById("NumberError");
    if(number.match("[0-9]{3}-[0-9]{3}-[0-9]{3}") && number.length < 12)
      { 
             setCompany(number);
      }
    else
      {
        numberError.textContent = "Please Enter Valid Number";
        numberError.style.color = "red";
      }  
}
function setCompany(value)
{
    var temp = value.split("-");
    var numberError = document.getElementById("NumberError");
    setState(value);
    if(621<parseInt(temp[0]) && parseInt(temp[0])<799)
         {
            var comp = document.getElementById("Company");
            comp.textContent = "Relaince Jio" 
            numberError.textContent = "";
            localStorage.setItem("MobileNumber",number);
         } 
     else if(801<parseInt(temp[0]) && parseInt(temp[0])<920)
     {
        var comp = document.getElementById("Company");
        comp.textContent = "Idea" 
        numberError.textContent = "";
        localStorage.setItem("MobileNumber",number);
     }
     else if(921<parseInt(temp[0]) && parseInt(temp[0])<999)
     {
        var comp = document.getElementById("Company");
        comp.textContent = "Vodafone" 
        numberError.textContent = "";
        localStorage.setItem("MobileNumber",number);
     }   
     else
        {
        numberError.textContent = "Please Enter Valid Number";
        numberError.style.color = "red";
        }
}
function setState(value){
  var temp = value.split("-");
  var state = document.getElementById("State");
  var numberError = document.getElementById("NumberError");
  switch (parseInt(temp[1])) {
    case 111:
      state.textContent = ", Maharashtra" 
      numberError.textContent = "";
      break;
    case 222:
      state.textContent = ", Madhya Pradesh" 
      numberError.textContent = "";
      break;  
    case 333:
      state.textContent = ", Gujarat" 
      numberError.textContent = "";
      break;
    case 444:
      state.textContent = ", Rajasthan" 
      numberError.textContent = "";
      break;    
    case 555:
      state.textContent = ", Punjab" 
      numberError.textContent = "";
      break;
    case 666:
      state.textContent = ", Uttar Pradesh" 
      numberError.textContent = "";
      break; 
    case 777:
      state.textContent = ", Karnataka" 
      numberError.textContent = "";
      break; 
    case 888:
      state.textContent = ", Haryana" 
      numberError.textContent = "";
      break; 
    case 999:
      state.textContent = ", Kerala" 
      numberError.textContent = "";
      break; 
    case 000:
      state.textContent = ", Tamil Nadu" 
      numberError.textContent = "";
      break;      
    default:
      state.textContent = "" 
      numberError.textContent = "Please Enter Valid Number";
      numberError.style.color = "red";
      localStorage.removeItem("MobileNumber");
      break;
  }
}
function handleChangeEmail(value)
{
    var emailError = document.getElementById("EmailError");
     if(value.match("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"))
       {  
          emailError.textContent = "";
          localStorage.setItem("EMail",value);
       }
      else
      {
        emailError.textContent = "Please Enter Valid Email.";
        emailError.style.color = "red";
      } 
}
function submit(){
    if(localStorage.FirstName && localStorage.MobileNumber && localStorage.EMail)
      {
        alert("Successfully");
      }
    else
      {
        alert("Please Fill All Fields");
      }  
}