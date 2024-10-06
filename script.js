var typed = new Typed(".about__name", {
  strings: ["ibk", "Ibukun"],
  typeSpeed: 110,
  startDelay: 500,
  backDelay: 5000,
  backSpeed: 65,
  // fadeOut: true,
  loop: true,
  loopCount: 100,
  // showCursor: false
  // cursorChar: '...'
});

const body = document.body;

const btnTheme = document.querySelector(".fa-moon");
const btnHamburger = document.querySelector(".fa-bars");

const addThemeClass = (bodyClass, btnClass) => {
  body.classList.add(bodyClass);
  btnTheme.classList.add(btnClass);
};

const getBodyTheme = localStorage.getItem("portfolio-theme");
const getBtnTheme = localStorage.getItem("portfolio-btn-theme");

addThemeClass(getBodyTheme, getBtnTheme);

const isDark = () => body.classList.contains("dark");

const scrollUp = () => {
  const btnScrollTop = document.querySelector(".scroll-top");

  if (body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    btnScrollTop.style.display = "block";
  } else {
    btnScrollTop.style.display = "none";
  }
};

document.addEventListener("scroll", scrollUp);
const ball = document.querySelector("div.ball");

let mouseX = window.innerWidth / 2; // Default to center (horizontally)
let mouseY = window.innerHeight / 2; // Default to center (vertically)

let ballX = window.innerWidth / 2 - ball.offsetWidth / 2; // Center of the screen horizontally
let ballY = window.innerHeight / 2 - ball.offsetHeight / 2; // Center of the screen vertically

let speed = 0.2;

function animate() {
  let distX = mouseX - ballX;
  let distY = mouseY - ballY;

  ballX = ballX + distX * speed;
  ballY = ballY + distY * speed;

  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";

  requestAnimationFrame(animate);
}
animate();

document.addEventListener("mousemove", function (event) {
  mouseX = event.pageX;
  mouseY = event.pageY;
});
