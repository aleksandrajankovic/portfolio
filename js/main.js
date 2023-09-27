let data = {
  skills: [
    {
      title: "HTML",
      perc: 90,
    },
    {
      title: "CSS",
      perc: 80,
    },
    {
      title: "JavaScript",
      perc: 30,
    },
    {
      title: "WordPress",
      perc: 80,
    },
    {
      title: "SEO",
      perc: 60,
    },
    // {
    //   title: "React",
    //   perc: 0,
    // },
  ],
  experience: [
    {
      position: "Web developer",
      company: "MeridianTech doo",
      desc: " I am currently part of the web development team and responsible for developing and maintaining more than 80 websites mostly on the WordPress CMS platform. Being part of the web development team in this company means working closely with programmers, designers, SEO managers, project managers, and other teams. I am also responsible for improving speed, load times, site and page appearance, and mobile responsiveness",
      time: {
        from: {
          year: "2021",
        },
        /*to: {
          year: "now",
        },*/
      },
    },
    {
      position: "",
      company: "Freelance",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      time: {
        from: {
          year: "2016",
        },
        to: {
          year: "2021",
        },
      },
    },
  ],
  about: [
    {
      desc: " I'm an experienced front-end developer with expertise in building captivating WordPress websites. With over five years of experience, I specialize in HTML, CSS, and WordPress. I have a proven track record of creating high-converting landing pages and delivering visually appealing and responsive designs. In addition, I have a solid foundation in JavaScript, enabling me to enhance website functionality and create engaging user experiences. Continuously staying up to date with industry trends, I thrive on launching new projects and bringing them to life. Choose me as your front-end developer for exceptional WordPress sites that exceed your expectations, backed by my diverse skill set in HTML, CSS, WordPress SEO, and basic JavaScript knowledge.",
    },
  ],
};

function render(podatak) {
  renderSkills(podatak.skills, "skills");
  renderExps(podatak.experience, "experience");
  renderAbout(podatak.about, "about");
}
render(data);

function renderSkills(podatak, targetSelector) {
  var element = document.getElementById(targetSelector);
  console.log(element);

  for (let i = 0; i < podatak.length; i++) {
    element.innerHTML += renderSkil(podatak[i]);
  }
}

function renderSkil({ title, perc }) {
  var ispis = `<div class="circular-container">
    <div class="circular-progress">
      <div class="value-container">
        <p class="skill-title">${title}</p>
        <p class="skill-percentage">${perc}%</p>
      </div>
    </div>
  </div>
  `;
  return ispis;
}

const progresBars = document.querySelectorAll(".circular-progress");
const valueContainers = document.querySelectorAll(".value-container");

progresBars.forEach((progresBar, index) => {
  const progresValueEnd = data.skills[index].perc;
  let progresValue = 0;

  const progress = setInterval(() => {
    progresValue++;
    valueContainers[index].querySelector(
      ".skill-percentage"
    ).textContent = `${progresValue}%`;
    progresBar.style.background = `conic-gradient(rgba(165, 108, 193, 0.8) ${
      progresValue * 3.6
    }deg, #f4f5fe ${progresValue * 3.6}deg)`;

    if (progresValue === progresValueEnd) {
      clearInterval(progress);
    }
  }, 30);
});
function renderExps(podatak, targetSelector) {
  var element1 = document.getElementById(targetSelector);
  console.log(element1);
  for (let i = 0; i < podatak.length; i++) {
    element1.innerHTML += renderExp(podatak[i]);
  }
}

function renderExp({ position, company, desc, time }) {
  var ispis = `<div class="block">
  <button class="accordion">${company}  <div> `;
  if (!time.from) {
    ispis += getStringFromTime(time);
  } else {
    ispis += getStringFromTime(time.from) + " - ";
    if (!time.to) {
      ispis += "now";
    } else {
      ispis += getStringFromTime(time.to);
    }
  }
  ispis += `</div></button>
  <div class="panel">
  <h4 class="position">${position}</h4>
  <p>
    ${desc}
  </p>
  </div> 
</div>`;
  return ispis;
}
var acc = document.getElementsByClassName("accordion");
var i;

function getStringFromTime(time) {
  let ispis = "";
  if (time.year) {
    ispis += `${time.year}.`;
  }
  return ispis;
}
/*accordion*/
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/*Filter*/
document.querySelectorAll(".naslovi").forEach((naslov) => {
  naslov.addEventListener("click", function (e) {
    filterImg(e);
  });
});

function filterImg(e) {
  let title = e.target.dataset.title;

  if (title === "All") {
    document.querySelectorAll(".slika").forEach((slika) => {
      slika.style.display = "block";
    });
  } else {
    document.querySelectorAll(".slika").forEach((slika) => {
      if (slika.getAttribute("title") === title) {
        slika.style.display = "block";
      } else {
        slika.style.display = "none";
      }
    });
  }
}
/*Popup*/
function renderAbout(desc) {
  var ispis = `<div id="about">
  <div class="giga-text">About</div>
  <h2 class="about-naslov">About Me</h2>
  <p>
    ${desc}
  </p>
  <div class="logos">
  <img src="./img/html.png">
  <img src="./img/css.png">
  <img src="./img/js.png">
  <img src="./img/wp.png">
  </div>
  </div>
  <div id="contact">
  

                <h2 class="section-naslov">Contact me</h2>
                <div class="giga-text">Contact</div>
          <form action="" id="forma">
            <div class="form-group">
              <label for="imePrezime">Ime i prezime: </label>
              <input type="text" name="imePrezime" id="imePrezime" />
            </div>
            <div class="form-group">
              <label for="naslovForma">Naslov: </label>
              <input type="text" name="naslovForma" id="naslovForma" />
            </div>
            <div class="form-group">
              <label for="textForma">Poruka: </label>
              <textarea
                name="textForma"
                id="textForma"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div id="btn-forma">
            <input type="submit" value="Send" id="sbm" />
            </div>
          </form>
              </div>
  `;
  return ispis;
}
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".contact-me").addEventListener("click", addPopup);
  const popup = document.querySelector(".popup-active");
  const popupContent = document.querySelector(".popup-content-active");
  const form = document.querySelector("#contact");

  var noviElement = document.createElement("span");
  noviElement.id = "close-btn";
  popup.appendChild(noviElement);
  noviElement.textContent = "X";
  function addPopup() {
    document.querySelector("#skills").style.display = "none";
    document.querySelector("#experience").style.display = "none";
    document.querySelector(".menu").style.display = "none";
    popup.style.display = "block";
    popupContent.style.display = "flex";

    let aboutContent = renderAbout(data.about[0].desc);
    popupContent.innerHTML = aboutContent;
  }

  let closeBtn = document.querySelector("#close-btn");
  console.log(closeBtn);
  closeBtn.addEventListener("click", closing);

  function closing() {
    popup.style.display = "none";
    document.querySelector("#skills").style.display = "grid";
    document.querySelector("#experience").style.display = "block";
    document.querySelector(".menu").style.display = "flex";
  }
});

/*SVG ANIMACIJA*/

const svgElement1 = document.getElementById("element-1");
//const svgElement2 = document.getElementById("element-2");

svgElement1.style.transform = "translateY(30%)";
//svgElement2.style.transform = "rotate(20deg)";

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  svgElement1.style.transform = `translateY(${scrollPosition * 0.5}px)`;
  //svgElement2.style.transform = `translateY(-${scrollPosition * 0.5}px)`;
});
// Selektujte elemente za hamburger ikonu i mobilni meni
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

// Dodajte događaj klika na hamburger ikonu
hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});
