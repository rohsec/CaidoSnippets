x1=document.getElementById('app')
x1.style.filter="blur(10px)" ;
setTimeout(() => {
  x=prompt("Welcome to the matrix!!\nSuper Secret stuff Inside, enter your password:");
  if(x=="pass"){
    alert("Welcome King !!")
    x1.style.filter="";
  }
  else{
    alert("Good Bye Idiot !!")
    window.location="https://evil.com"
  }
  x=document.getElementsByClassName("c-logo__logo");
  x[0].src="https://dorks.hackinsec.com/HACKINSEC-11-16-2023.gif";
  
}, 1000);
