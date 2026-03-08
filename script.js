// Typing Effect
const sentences = [
 "Aspiring software developer👩‍💻",
 "Bookworm First, Human Being Later📚",
 "Swiftie🧣","Gryffindor🦁","Music Afficianado🎸"];

let sentenceIndex = 0;
let charIndex = 0;
let isDeleting = false;
function typeEffect() {
  let current = sentences[sentenceIndex];
  let textElement = document.getElementById("typing");

  if (!isDeleting) {
    textElement.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length) {
      setTimeout(() => isDeleting = true, 1000);
    }
  } else {
    textElement.textContent = current.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      sentenceIndex = (sentenceIndex + 1) % sentences.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 40 : 80);
}

typeEffect();
const scrollBtn = document.getElementById("TopScroll");

// Show button when scrolling down
window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

// Scroll to top when clicked
scrollBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
        formMessage.style.color = "red";
        formMessage.innerText = "Please fill all fields.";
    } else {
        formMessage.style.color = "green";
        formMessage.innerText = "Message sent successfully!";
    }
});