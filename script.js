const buttonElement=document.querySelector('.js-submit');
const resultElement=document.querySelector('.result');
buttonElement.addEventListener("click",()=>{
  let dobValue=document.querySelector('.js-dob').value;
  const today = new Date();
  const dob = new Date(dobValue);
  let age=today.getFullYear()-dob.getFullYear();
  const monthDifference=today.getMonth()-dob.getMonth();
  if((dob.getDate()<0 && dob.getDate()>31) || (dob.getMonth()<0 && dob.getMonth()>12) || (dob.getFullYear()<0 && dob.getFullYear()>2025)){
    alert("Please enter Valid DOB!!!");
    return;
  }
  if(monthDifference<0 || (monthDifference === 0 && today.getDate()<dob.getDate())){
    age--;
  }
  resultElement.innerHTML=`Your Current Age is ${age}.`
});