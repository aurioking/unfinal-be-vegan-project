function sendEmail() {
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var templateParams = {
    email: email,
    message: message,
  };

  emailjs.init("JTrWSPQvkJh_d5ROp");

  emailjs.send("service_lq59zsa", "template_3czar7h", templateParams).then(
    function (response) {
      // Pengiriman email berhasil
      showMessageDialog("Email sent successfully!");
    },
    function (error) {
      // Terjadi kesalahan saat mengirim email
      showMessageDialog("Failed to send email. Please try again later.");
    }
  );
}

function showMessageDialog(message) {
  var overlay = document.getElementById("overlay");
  var popup = document.getElementById("popup");
  var popupMessage = document.getElementById("popup-message");

  popupMessage.textContent = message;
  overlay.style.display = "block";
  popup.style.display = "block";
}

function closePopup() {
  var overlay = document.getElementById("overlay");
  var popup = document.getElementById("popup");

  overlay.style.display = "none";
  popup.style.display = "none";
}

document.getElementById("close-popup").addEventListener("click", function () {
  closePopup();
});

window.addEventListener("scroll", function () {
  var scrollToTopButton = document.getElementById("scroll-to-top");
  if (window.pageYOffset > 100) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

document.getElementById("scroll-to-top").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
