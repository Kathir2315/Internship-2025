
    const $ = id => document.getElementById(id);
    const ADMIN_EMAIL = "kathir2005@gmail.com";
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    const loggedIn = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!loggedIn || (loggedIn.email !== ADMIN_EMAIL && loggedIn.role !== "admin")) {
      alert("Unauthorized access. Redirecting to login.");
      window.location.href = "login.html";
    }

    function renderUsers() {
      const table = $("adminUserTable");
      const rows = users.map((user, index) => {
        const isAdmin = user.role === "admin";

        return `
          <tr>
            <td>${user.fullName}</td>
            <td>${user.email}</td>
            <td>${isAdmin ? 'admin' : 'employee'}</td>
            <td>${user.finalId || user.tempId || "-"}</td>
            <td>
              ${
                !isAdmin
                  ? `<button class="btn btn-sm btn-primary me-1" onclick="promote(${index})">Promote</button>`
                  : ""
              }
              <button class="btn btn-sm btn-danger" onclick="removeUser(${index})">Remove</button>
            </td>
          </tr>
        `;
      }).join("");

      table.innerHTML = rows;
    }

    function promote(index) {
      users[index].role = "admin";
      saveChanges();
      alert("User promoted to admin.");
    }

    function removeUser(index) {
      if (confirm("Are you sure you want to permanently delete this user?")) {
        users.splice(index, 1);
        saveChanges();
        alert("User deleted.");
      }
    }

    function saveChanges() {
      localStorage.setItem("users", JSON.stringify(users));
      renderUsers();
    }

    function logout() {
      localStorage.removeItem("loggedInUser");
      window.location.href = "login.html";
    }

    renderUsers();
 