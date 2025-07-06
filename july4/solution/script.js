const $ = id => document.getElementById(id);
const ADMIN = { email: "kathirmskgt@gmail.com", pass: "12345" };

const getUsers = () => JSON.parse(localStorage.getItem("users") || "[]");
const saveUsers = users => localStorage.setItem("users", JSON.stringify(users));

function toggleLogin() {
  const role = $("role").value;
  $("emp-name").classList.toggle("hidden", role !== "employee");
  $("admin-box").classList.toggle("hidden", role !== "admin");
  $("msg").innerHTML = "";
}

function login() {
  const role = $("role").value;
  if (!role) return showMsg("⚠️ Please select a role.", "danger");

  if (role === "admin") {
    const email = $("admin-email").value, pass = $("admin-pass").value;
    if (email === ADMIN.email && pass === ADMIN.pass) {
      $("login").classList.add("hidden");
      $("dashboard").classList.remove("hidden");
      loadUsers();
    } else showMsg("❌ Invalid Admin credentials", "danger");
  } else {
    const name = $("emp-name").value.trim();
    const users = getUsers();
    const user = users.find(u => u.name.toLowerCase() === name.toLowerCase());
    if (user) {
      let html = `Welcome <b>${user.name}</b><br>Your ID: <span id="uid">${user.id}</span>`;
      html += user.edited ? `<div class="text-info mt-2">ID already edited.</div>` :
      `<div class="input-group mt-2">
        <input type="text" id="edit-id" class="form-control form-control-sm" placeholder="New ID">
        <button class="btn btn-outline-primary btn-sm" onclick="editId('${user.name}')">Update</button>
      </div>`;
      showMsg(html, "success");
    } else showMsg("❌ User not found.", "danger");
  }
}

function showMsg(msg, type) {
  $("msg").innerHTML = `<div class="text-${type}">${msg}</div>`;
}

function logout() {
  ["login", "dashboard"].forEach(id => $(id).classList.toggle("hidden"));
  ["admin-email", "admin-pass", "emp-name", "role"].forEach(id => $(id).value = "");
  toggleLogin();
}

function addUser() {
  const name = $("new-user").value.trim();
  if (!name) return;
  const users = getUsers();
  users.push({ name, id: "U" + Math.floor(1000 + Math.random() * 9000), edited: false });
  saveUsers(users);
  $("new-user").value = "";
  loadUsers();
}

function loadUsers() {
  const users = getUsers();
  $("user-list").innerHTML = users.map(u =>
    `<div class="user-card">
      <span><b>${u.name}</b> (ID: ${u.id})</span>
      <button class="btn btn-danger btn-sm" onclick="delUser('${u.name}')">Remove</button>
    </div>`).join("");
}

function delUser(name) {
  let users = getUsers();
  users = users.filter(u => u.name !== name);
  saveUsers(users);
  loadUsers();
}

function editId(name) {
  const val = $("edit-id").value.trim();
  if (!val) return alert("Enter a valid ID.");
  const users = getUsers();
  const user = users.find(u => u.name === name);
  if (!user || user.edited) return alert("Invalid user or already edited.");
  user.id = val;
  user.edited = true;
  saveUsers(users);
  $("uid").innerText = val;
  alert("ID updated.");
  login();
}
