<!-- Header Section -->
<head>
  <meta charset="UTF-8">
  <title>Soul Shelter</title>
  <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600&display=swap" rel="stylesheet">
  <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="style.css"> 
</head>
<body>

  <header class="header">
    <div class="top-row">
      <div class="logo">🐾 Soul Shelter</div>

      <form class="search-bar">
        <input type="text" placeholder="Search for pets, shelters, help...">
        <button type="submit"><i class="fas fa-search"></i></button>
      </form>

      <div class="user-area">
        <a href="#" class="login-btn">Login</a>
        <a href="#" class="signup-btn">Sign Up</a>
        <div class="profile hidden">
          <img src="images/logo.png" alt="Profile" class="profile-pic">
          <span class="username">Hi, User!</span>
        </div>
        <a href="admin.html" class="admin-btn hidden">Admin Panel</a>
      </div>
    </div>

    <nav class="nav-bar">
      <a href="#">Homepage</a>
      <a href="#">Adopt a Pet!</a>
      <a href="#">Report a Stray!</a>
      <a href="#">FAQ</a>
      <div class="dropdown">
        <a href="#">More ▾</a>
        <div class="dropdown-content">
          <a href="#">Shelter Directory</a>
          <a href="#">Events & Activities</a>
          <a href="#">Our Blog</a>
          <a href="#">Donations & Volunteering</a>
          <a href="#">Lost and Found</a>
        </div>
      </div>
    </nav>
  </header> 
  