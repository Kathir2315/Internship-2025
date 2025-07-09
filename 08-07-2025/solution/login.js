document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const msg = document.getElementById("loginMsg");

  msg.style.color = "red";
  msg.textContent = "";

  if (!email.endsWith("@gmail.com")) {
    msg.textContent = "Only @gmail.com emails are allowed.";
    return;
  }

  const users = JSON.parse(localStorage.getItem("users") || "[]");
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    msg.style.color = "green";
    msg.textContent = "Login successful!";
    // Optional: redirect
    // window.location.href = "dashboard.html";
  } else {
    msg.textContent = "Invalid email or password.";
  }
});
