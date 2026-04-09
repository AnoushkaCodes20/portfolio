// Typing Effect
const sentences = [
 "Aspiring software developer👩‍💻",
 "Bookworm First, Human Being Later📚",
 "Swiftie🧣","Gryffindor🦁","Music Afficionado🎸"];

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
//Form Validation
function validateForm()
{
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const nameErr=document.getElementById("name-error");
    const mailErr=document.getElementById("email-error");
    const mssgerror=document.getElementById("mssg-error");
    const submit=document.getElementById("submission");
    nameErr.textContent=" ";
    mailErr.textContent=" ";
    mssgerror.textContent=" ";
    submit.textContent=" ";
    let isValid=true;
    if(name==="")
    {
        nameErr.textContent="Name field cannot be left blank."
        isValid=false;
    }
    if(/\d/.test(name))
    {
        nameErr.textContent="Invalid name entered.";
        isValid=false;
    }
    if(email==="")
    {
        mailErr.textContent="E-Mail field cannot be left blank."
        isValid=false;
    }
    if(!email.includes("@")||!email.includes("."))
    {
        mailErr.textContent="Please enter a valid email address";
        isValid=false;
    }
    if(message==="")
    {
        mssgerror.textContent="Please enter a message";
        isValid=false;
    }
    if(isValid)
    {
        alert("Form submitted successfully");
        return true;
    }
    else
    {
        return false;
    }
}
function resetErrors()
{
    document.getElementById("nameErr").textContent = "";
    document.getElementById("mailErr").textContent = "";
    document.getElementById("mssgErr").textContent = "";
}
//Switch to animation video
function switchVideo()
{
    document.getElementById("myimg").style.display="none";
    let v=document.getElementById("video");
    v.play();
    v.style.display="block";
}
//Switch to image
function switchImage()
{
    document.getElementById("video").style.display="none";
  let img = document.getElementById("myimg");
  myimg.style.display="block";
}
