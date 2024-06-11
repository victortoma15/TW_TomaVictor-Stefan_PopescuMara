document.addEventListener("DOMContentLoaded", function () {
    const profileLink = document.getElementById("profile-link");
  
      profileLink.addEventListener("click", function (event) {
        event.preventDefault();
  
        const userType = localStorage.getItem("userType");
  
        if (userType === "admin") {
          window.location.href = "/adminProfile";
        } else if (userType === "collaborator") {
          window.location.href = "/collaboratorProfile";
        }
      });
  });