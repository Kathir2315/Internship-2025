
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let allUsers = JSON.parse(localStorage.getItem("users") || "[]");

    if (!currentUser) {
      window.location.href = "login.html";
    }

    const empName = document.getElementById("empName");
    const userIdDisplay = document.getElementById("userIdDisplay");
    const employeeList = document.getElementById("employeeList");

    empName.textContent = currentUser.name;

    if (!currentUser.userId) {
      currentUser.userId = generateUserId();
      currentUser.idChanged = false;
      updateUser(currentUser);
    }

    userIdDisplay.textContent = currentUser.userId;

    document.getElementById("idMode").addEventListener("change", function () {
      document.getElementById("manualInputDiv").style.display = this.value === "manual" ? "block" : "none";
    });

    function logout() {
      localStorage.removeItem("currentUser");
      window.location.href = "login.html";
    }

    function generateUserId() {
      const letter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      const digits = Math.floor(1000 + Math.random() * 9000);
      return letter + digits;
    }

    function updateUser(updatedUser) {
      const index = allUsers.findIndex(u => u.email === updatedUser.email);
      if (index !== -1) {
        allUsers[index] = updatedUser;
        localStorage.setItem("users", JSON.stringify(allUsers));
        localStorage.setItem("currentUser", JSON.stringify(updatedUser));
      }
    }

    function changeUserId() {
      if (currentUser.idChanged) {
        alert("You can only change your ID once.");
        return;
      }

      const mode = document.getElementById("idMode").value;
      let newId = "";

      if (mode === "auto") {
        newId = generateUserId();
      } else if (mode === "manual") {
        newId = document.getElementById("manualId").value.trim().toUpperCase();
        if (!/^[A-Z][0-9]{4}$/.test(newId)) {
          alert("ID must be 1 capital letter followed by 4 digits (e.g., A1234).");
          return;
        }
      } else {
        alert("Please select an ID change mode.");
        return;
      }

      currentUser.userId = newId;
      currentUser.idChanged = true;
      updateUser(currentUser);
      userIdDisplay.textContent = newId;
      alert("User ID successfully changed.");
      renderAllEmployees();
    }

    function maskEmail(email) {
      return email.length > 4 ? "****" + email.slice(4) : "****";
    }

    function renderAllEmployees() {
      employeeList.innerHTML = allUsers.map(user => `
        <div class="employee-item">
          <b>Name:</b> ${user.name}
          <b>Email:</b> ${maskEmail(user.email)}
          <b>User ID:</b> ${user.userId || 'N/A'}
        </div>
      `).join("");
    }

    allUsers = allUsers.map(user => {
      if (!user.userId) {
        user.userId = generateUserId();
      }
      return user;
    });

    localStorage.setItem("users", JSON.stringify(allUsers));
    renderAllEmployees();
  