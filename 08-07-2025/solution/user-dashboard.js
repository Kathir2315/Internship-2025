  
    const $ = id => document.getElementById(id);
    const loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));
    let users = JSON.parse(localStorage.getItem("users") || "[]");

    if (!loggedIn) {
      alert("No user logged in. Redirecting to login...");
      window.location.href = "login.html";
    }

    const currentUserIndex = users.findIndex(u => u.email === loggedIn.email);
    const currentUser = users[currentUserIndex];

    function generateAutoId() {
      if (currentUser.finalId) {
        $("setIdMsg").textContent = "You already set your ID.";
        return;
      }

      const existingIds = users.map(u => u.finalId).filter(Boolean);
      let nextIdNum = 1;

      while (existingIds.includes(`EMP${String(nextIdNum).padStart(3, '0')}`)) {
        nextIdNum++;
      }

      const newId = `EMP${String(nextIdNum).padStart(3, '0')}`;
      users[currentUserIndex].finalId = newId;
      saveAndReload("Auto-generated ID: " + newId);
    }

    function setManualId(e) {
      e.preventDefault();
      const val = $("manualIdInput").value.trim().toUpperCase();
      const isValid = /^[A-Z]{3}\d{3}$/.test(val);

      if (!isValid) {
        alert("ID must be 3 uppercase letters followed by 3 digits (e.g., EMP123).");
        return;
      }

      const existingIds = users.map(u => u.finalId).filter(Boolean);
      if (existingIds.includes(val)) {
        alert("This ID is already taken.");
        return;
      }

      if (currentUser.finalId) {
        $("setIdMsg").textContent = "You already set your ID.";
        return;
      }

      users[currentUserIndex].finalId = val;
      saveAndReload("Manual ID set: " + val);
    }

    function saveAndReload(msg) {
      localStorage.setItem("users", JSON.stringify(users));
      $("setIdMsg").textContent = msg;
      loadTable();
    }

    function getUsers() {
      return JSON.parse(localStorage.getItem("users") || "[]");
    }

    function loadTable() {
      const list = getUsers();
      $("employeeTableBody").innerHTML = list.map(u => `
        <tr>
          <td>${u.fullName}</td>
          <td>${u.email}</td>
          <td>${u.finalId || "-"}</td>
        </tr>
      `).join("");
    }

    function logout() {
      localStorage.removeItem("loggedInUser");
      window.location.href = "login.html";
    }

    loadTable();
  