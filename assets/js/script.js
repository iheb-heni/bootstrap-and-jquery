 // Fonction pour copier le code spécifique en fonction de l'ID
 function copyCode(codeId) {
    const code = document.getElementById(codeId).innerText;
    navigator.clipboard.writeText(code).then(() => {
        showSweetAlert("success", "Code copié avec succès !");
    }).catch(err => {
        showSweetAlert("danger", "Échec de la copie : " + err);
    });
}

// Fonction pour afficher l'alerte personnalisée
function showSweetAlert(type, message) {
    const alertContainer = document.getElementById("alert-container");
    const alertTitle = alertContainer.querySelector(".alert-title");
    const alertMessage = alertContainer.querySelector(".alert-message");

    // Set the title and message dynamically
    alertTitle.textContent = type === "success" ? "Succès" : "Erreur";
    alertMessage.textContent = message;

    // Display the alert
    alertContainer.style.display = "block";

    // Automatically close the alert after 2 seconds
    setTimeout(function () {
        closeSweetAlert();
    }, 2000);
}

// Fonction pour fermer l'alerte
function closeSweetAlert() {
    const alertContainer = document.getElementById("alert-container");
    alertContainer.style.display = "none";
}

  // Wait for the document to fully load
  document.addEventListener("DOMContentLoaded", function () {
    // Select the toggle button and sidebar
    const sidebarToggle = document.getElementById("sidebarToggle");
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("main-content");

    // Add click event listener to the toggle button
    sidebarToggle.addEventListener("click", function () {
      if (sidebar.classList.contains("toggled")) {
        // Remove toggled class and reset styles
        sidebar.classList.remove("toggled");
        sidebar.style.width = "250px"; // Original sidebar width
      } else {
        // Add toggled class and hide the sidebar
        sidebar.classList.add("toggled");
        sidebar.style.width = "0";
      }
    });
  });
  function copyCode(codeId) {
    const code = document.getElementById(codeId).innerText;
    navigator.clipboard
      .writeText(code)
      .then(() => {
        showSweetAlert("success", "Code copié avec succès !");
      })
      .catch((err) => {
        showSweetAlert("danger", "Échec de la copie : " + err);
      });
  }

  // Fonction pour afficher l'alerte personnalisée
  function showSweetAlert(type, message) {
    const alertContainer = document.getElementById("alert-container");
    const alertTitle = alertContainer.querySelector(".alert-title");
    const alertMessage = alertContainer.querySelector(".alert-message");

    // Set the title and message dynamically
    alertTitle.textContent = type === "success" ? "Succès" : "Erreur";
    alertMessage.textContent = message;

    // Display the alert
    alertContainer.style.display = "block";

    // Automatically close the alert after 2 seconds
    setTimeout(function () {
      closeSweetAlert();
    }, 2000);
  }

  // Fonction pour fermer l'alerte
  function closeSweetAlert() {
    const alertContainer = document.getElementById("alert-container");
    alertContainer.style.display = "none";
  }