// declaring navigation, section, btn  and tags
let navLi;
let section;
let botton;
let aTag;

// creating li and looping sections to get the Id and Data-nav
const LiCreator = (section) => {
  // section loop
  section.forEach((sec) => {
    const secId = sec.id;
    const aText = sec.dataset.nav;
    //  anchor tags and passing id and btn innertext
    aTag = `<a class="menu__link" href="#${secId}">${aText}</a>`;
    //  creating four Botton in the header
    botton += `<li>${aTag}</li>`;
  });
  // appending nav-ul
  navLi = document.querySelector("#navbar__list").innerHTML = botton;
};

// function for passing params and declaring inside the function the liCreator function
const getNavigation = () => {
  section = document.querySelectorAll("section");
  // here i pass argument
  LiCreator(section);
};

// declaring the getnavigation function to work
getNavigation();

//  here i create click function to change the backgroundColor of the navigation
// when ever is clicked
const clicked = () => {
  let clicked;
  const navBtn = document.querySelectorAll("a");
  for (let i = 0; i < navBtn.length; i++) {
    navBtn[i].addEventListener("click", function (e) {
      if (clicked) {
        clicked.classList.remove("navstyle");
      }

      e.currentTarget.classList.add("navstyle");
      clicked = e.currentTarget;
    });
  }
};


clicked();


//  here i created the eventlistner for active class i am using math.ceil to round the number

window.addEventListener("scroll", function () {
  section = document.querySelectorAll("section");
  section.forEach((sec) => {
    const screenPos = Math.ceil(sec.getBoundingClientRect().top);
    //  console.log(screenPos);
    sec.classList.remove("your-active-class");

    if (screenPos < 250 && screenPos >= -250) {
      sec.classList.add("your-active-class");
    }
  });
});

// here i created the smooth scroll function 
const smoothScr = () => {
  const btnClik = document.querySelectorAll('#navbar__list a');

  btnClik.forEach((elem) => {
   
    // console.log(elem);
    elem.addEventListener('click', (ev) =>{
      ev.preventDefault();
 
      section.forEach((sec) => {
        // console.log(ev.currentTarget.getAttribute("href"))
    document.querySelector(ev.currentTarget.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
          })
       })
    })
    });

}

smoothScr();

