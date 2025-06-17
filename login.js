const signUpForm = document.getElementById("signUpForm");
  const loginForm = document.getElementById("loginForm");
  
  function toggleForm(mode) {
    if (mode === "signup") {
      loginForm.classList.add("hidden");
      signUpForm.classList.remove("hidden");
    } else {
      signUpForm.classList.add("hidden");
      loginForm.classList.remove("hidden");
    }
  }
  
  // Handle Sign Up
  signUpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // For demo: simulate user data save
    alert("Account created! Redirecting to profile...");
    window.location.href = "profile.html"; // Connect to profile page
  });
  
  // Handle Login
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // For demo: simulate login validation
    alert("Login successful! Redirecting to profile...");
    window.location.href = "profile.html"; // Connect to profile page
  });
  
  