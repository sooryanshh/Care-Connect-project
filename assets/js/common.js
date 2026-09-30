
function demoAction(msg){alert(msg+"\n\nDay-1 prototype: Spring Boot API/database integration will be added later.");}
function logout(){location.href="../01-auth/login.html";}
document.addEventListener("DOMContentLoaded",()=>{const p=location.pathname.split("/").pop();document.querySelectorAll(".nav-link").forEach(a=>{if(a.getAttribute("href")===p)a.classList.add("active")})});
