//functionallity to hide and shoe images
function myFunction() {
    var btnAppear = document.getElementById("imgSurprise");
    if (btnAppear.style.display === "") {
      btnAppear.style.display = "block";
    } else if (btnAppear.style.display === "none") {
      btnAppear.style.display = "block";
    } else {
      btnAppear.style.display = "none";
    }
  }

  // Java script to show form was sent
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById("contactUs").style.display = "block";
});