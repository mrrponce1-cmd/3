const form = document.getElementById("loginForm");

form.addEventListener("submit", e=>{
  e.preventDefault();
  const email = document.getElementById("email").value;
  alert("Welcome " + email);
});
