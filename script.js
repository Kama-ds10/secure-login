const form = document.getElementById("loginForm");
const message = document.getElementById("message");

// Fake stored user (for demo only)
const storedUser = {
  email: "test@example.com",
  password: "Password123"
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  // Input validation
  if (!email || !password) {
    showMessage("All fields are required", "red");
    return;
  }

  // Basic email check
  if (!email.includes("@")) {
    showMessage("Invalid email format", "red");
    return;
  }

  // Password strength check
  if (password.length < 8) {
    showMessage("Password must be at least 8 characters", "red");
    return;
  }

  // Authentication check (demo only)
  if (email === storedUser.email && password === storedUser.password) {
    showMessage("Login successful!", "green");
  } else {
    showMessage("Invalid credentials", "red");
  }
});

// SAFE DOM update (prevents XSS)
function showMessage(text, color) {
  message.textContent = text; // ✅ safe (NOT innerHTML)
  message.style.color = color;
}