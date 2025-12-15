const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href").substring(1);
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    });
  });
});

const text = "W E L C O M E !";
const typingTarget = document.getElementById("typing");

let index = 0;
let isDeleting = false;

setInterval(function () {
  if (!isDeleting) {
    typingTarget.innerText = text.substring(0, index + 1);
    index++;

    if (index === text.length) {
      isDeleting = true;
    }
  } else {
    typingTarget.innerText = text.substring(0, index - 1);
    index--;

    if (index === 0) {
      isDeleting = false;
    }
  }
}, 200);

