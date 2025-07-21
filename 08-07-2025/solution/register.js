

    function registerUser(e) {
      e.preventDefault();
      const fullName = document.getElementById("fullName").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      if (password !== confirmPassword) {
        return alert("Passwords do not match.");
      }

      const users = JSON.parse(localStorage.getItem("users") || "[]");
      if (users.some(user => user.email === email)) {
        return alert("Email is already registered.");
      }

      // Auto generate temp ID like EMP001
      const existingTempIds = users.map(u => u.tempId).filter(Boolean);
      const nextIdNum = existingTempIds.length + 1;
      const tempId = "EMP" + String(nextIdNum).padStart(3, "0");

      const newUser = {
        fullName,
        email,
        password,
        tempId: tempId,      // Assigned temporarily
        finalId: null        // Will be set later
      };

      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      localStorage.setItem("loggedInUser", JSON.stringify(newUser));  // Login the user
      alert("Registration successful! Redirecting to dashboard...");
      window.location.href = "user-dashboard.html";
    }
 