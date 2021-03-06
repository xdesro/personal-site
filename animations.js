window.onscroll = function () {
  scrollRotate();
};

function scrollRotate() {
  const outerRing = document.getElementById("outer-ring");
  outerRing.setAttribute(
    "transform",
    "rotate(" + window.pageYOffset / 2 + " 290 290)"
  );
  const middleRing = document.getElementById("middle-ring");
  middleRing.setAttribute(
    "transform",
    "rotate(" + -window.pageYOffset / 2 + " 290 290) translate(45 45)"
  );
  const innerRing = document.getElementById("inner-ring");
  innerRing.setAttribute(
    "transform",
    "translate(34 34) rotate(" + window.pageYOffset / 2 + " 117 117)"
  );
}

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.remove("inactive");
    } else {
      entry.target.classList.add("inactive");
    }
  });
});

const tarotSection = document.querySelector(".tarot-section");
observer.observe(tarotSection);
