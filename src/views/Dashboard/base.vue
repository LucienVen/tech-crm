<template>
  <div class="coursera-app">
    <div class="main-container">
      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="sidebar-header">
          <button class="menu-btn">☰</button>
          <div class="logo">coursera</div>
        </div>

        <div class="search-container">
          <input type="text" placeholder="Search" class="search-input" />
          <button class="search-btn">🔍</button>
        </div>

        <nav class="sidebar-nav">
          <a href="#" class="sidebar-link">👤</a>
          <a href="#" class="sidebar-link active">Profile</a>
          <a href="#" class="sidebar-link">My courses</a>
          <a href="#" class="sidebar-link">My purchases</a>
          <a href="#" class="sidebar-link">Setting</a>
          <a href="#" class="sidebar-link">Log out</a>
          <a href="#" class="sidebar-link">❓</a>
        </nav>
      </aside>

      <!-- Right Content -->
      <div class="right-content">
        <!-- Header -->
        <header class="header">
          <nav class="header-nav">
            <a href="#" class="nav-link">For Individuals</a>
            <a href="#" class="nav-link">For Businesses</a>
            <a href="#" class="nav-link">For Universities</a>
            <a href="#" class="nav-link">For Governments</a>
          </nav>
          <div class="header-right">
            <div class="user-info">
              <div class="user-name">Nadin Puchnina</div>
              <div class="user-email">nadinpuchnina@gmail.com</div>
            </div>
            <button class="dropdown-btn">⌄</button>
          </div>
        </header>

        <!-- Main Content -->
        <main class="main-content">
          <div class="profile-header">
            <span class="breadcrumb">Your profile</span>
            <button class="edit-btn">Edit</button>
          </div>

          <div class="profile-card">
            <h1 class="profile-name">Nadin Puchnina</h1>

            <div class="profile-section">
              <div class="section-header">
                <h2>Personal details</h2>
                <button class="expand-btn">⌄</button>
              </div>

              <div class="personal-details">
                <div class="profile-image-container">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face"
                    alt="Profile"
                    class="profile-image"
                  />
                </div>
                <div class="location">Lives in Tallinn, Estonia</div>
              </div>
            </div>

            <div class="profile-section">
              <div class="section-header">
                <h2>Work experience</h2>
                <button class="expand-btn">⌄</button>
              </div>

              <div class="work-experience">
                <div class="work-item">
                  <div class="work-details">
                    <div class="company">Data Art</div>
                    <div class="position">UI / UX Designer</div>
                  </div>
                  <div class="work-period">Mart 2024 - Now</div>
                </div>

                <div class="work-item">
                  <div class="work-details">
                    <div class="company">IT Data</div>
                    <div class="position">Web Designer</div>
                  </div>
                  <div class="work-period">September 2021 - February 2024</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseraProfile",
  data() {
    return {
      // Component data can be added here if needed
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.coursera-app {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f8f9fa;
  min-height: 100vh;
}

/* Header */
.header {
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  padding: 0 24px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.menu-btn {
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #666;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #0056d3;
}

.header-nav {
  display: flex;
  gap: 32px;
}

.nav-link {
  color: #666;
  text-decoration: none;
  font-size: 14px;
  padding: 8px 0;
}

.nav-link:hover {
  color: #0056d3;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-info {
  text-align: right;
}

.user-name {
  font-size: 14px;
  font-weight: 500;
  color: #333;
}

.user-email {
  font-size: 12px;
  color: #666;
}

.dropdown-btn {
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: #666;
}

/* Main Container */
.main-container {
  display: flex;
  min-height: calc(100vh - 64px);
}

/* Sidebar */
.sidebar {
  background-color: #2c3e50;
  width: 280px;
  padding: 24px 0;
  color: white;
}

.search-container {
  padding: 24px;
  margin-bottom: 0;
  position: relative;
}

.search-input {
  width: 100%;
  padding: 12px 40px 12px 16px;
  border: none;
  border-radius: 4px;
  background-color: #34495e;
  color: white;
  font-size: 14px;
}

.search-input::placeholder {
  color: #bdc3c7;
}

.search-btn {
  position: absolute;
  right: 32px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #bdc3c7;
  cursor: pointer;
  font-size: 16px;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
}

.sidebar-link {
  color: #bdc3c7;
  text-decoration: none;
  padding: 12px 24px;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.sidebar-link:hover,
.sidebar-link.active {
  background-color: #34495e;
  color: #f39c12;
}

/* Main Content */
.main-content {
  flex: 1;
  padding: 32px 48px;
  background-color: #ffffff;
  margin: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.profile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e0e0e0;
}

.breadcrumb {
  color: #666;
  font-size: 14px;
}

.edit-btn {
  background-color: #ff69b4;
  color: white;
  border: none;
  padding: 8px 24px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 500;
}

.profile-card {
  max-width: 1000px;
}

.profile-name {
  font-size: 32px;
  font-weight: 400;
  color: #333;
  margin-bottom: 32px;
}

.profile-section {
  margin-bottom: 32px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e0e0e0;
}

.section-header h2 {
  font-size: 18px;
  font-weight: 500;
  color: #333;
}

.expand-btn {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #666;
  transform: rotate(180deg);
}

.personal-details {
  display: flex;
  align-items: flex-start;
  gap: 48px;
}

.profile-image-container {
  flex-shrink: 0;
}

.profile-image {
  width: 120px;
  height: 120px;
  border-radius: 8px;
  object-fit: cover;
  filter: grayscale(100%);
}

.location {
  color: #666;
  font-size: 14px;
  align-self: flex-end;
  margin-bottom: 24px;
}

.work-experience {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.work-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 24px;
  border-bottom: 1px solid #f0f0f0;
}

.work-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.work-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.company {
  font-size: 16px;
  font-weight: 500;
  color: #333;
}

.position {
  font-size: 14px;
  color: #666;
}

.work-period {
  font-size: 14px;
  color: #666;
  text-align: right;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .main-container {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    height: auto;
  }

  .sidebar-header {
    justify-content: center;
  }

  .right-content {
    flex: 1;
  }

  .header {
    padding: 0 24px;
  }

  .header-nav {
    display: none;
  }

  .main-content {
    margin: 16px;
    padding: 24px;
  }

  .personal-details {
    flex-direction: column;
    gap: 24px;
  }

  .work-item {
    flex-direction: column;
    gap: 8px;
  }

  .work-period {
    text-align: left;
  }
}
</style>
