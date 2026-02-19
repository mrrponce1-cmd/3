const form = document.getElementById("loginform");
const loginContainer = document.getElementById("loginContainer");
const dashboard = document.getElementById("dashboard");
const welcome = document.getElementById("welcome");
const toggle = document.getElementById("togglePass");
const password = document.getElementById("password");
const logout = document.getElementById("logout");

//hidden hide password
toggle.onclick = () => {
    password.type = password.type === "password" ? "text" : "password";
};

//login
form.onsubmit = (e) =>{
    e.preventDefault();
    const email = document.getElementById("email").value;
    loginContainer.classList.add("hidden");
    dashboard.classList.remove("hidden");
    welcome.textContent = 'Welcome back, ${email}';
};

//logout
logout.onclick = ()=>{
    dashboard.classList.add("hidden");
    loginContainer.classList.remove("hidden");
}