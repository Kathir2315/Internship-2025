
    const ADMIN_EMAIL = "kathir2005@gmail.com";
    const ADMIN_PASS = "098765";

    function loginUser(event) {
      event.preventDefault();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;

      const users = JSON.parse(localStorage.getItem("users") || "[]");

      // Hardcoded admin
      if (email === ADMIN_EMAIL && password === ADMIN_PASS) {
        alert("Welcome Admin!");
        localStorage.setItem("loggedInUser", JSON.stringify({ email, role: "admin" }));
        window.location.href = "admin-dashboard.html";
        return;
      }

      const user = users.find(u => u.email === email && u.password === password && u.removed !== true);

      if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        if (user.role === "admin") {
          alert("Welcome Admin!");
          window.location.href = "admin-dashboard.html";
        } else {
          alert("Login successful!");
          window.location.href = "user-dashboard.html";
        }
      } else {
        alert("Invalid credentials or account removed.");
      }
    }
  