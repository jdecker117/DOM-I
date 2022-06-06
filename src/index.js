const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!');

const navLinks = document.querySelectorAll("header nav a");
console.log(navLinks);

navLinks.forEach(link => link.classList.add("italic"));

const navLinksArray = Object.values(siteContent["nav"]);

navLinks.forEach((link, index) => {link.textContent = navLinksArray[index]})
// equivalant to =>
// navLinks[0].textContent = siteContent["nav"]["nav-item-1"];
// navLinks[1].textContent = siteContent["nav"]["nav-item-2"];
// navLinks[2].textContent = siteContent["nav"]["nav-item-3"];
// navLinks[3].textContent = siteContent["nav"]["nav-item-4"];
// navLinks[4].textContent = siteContent["nav"]["nav-item-5"];
// navLinks[5].textContent = siteContent["nav"]["nav-item-6"];

const headerImg = document.querySelector("header img");
headerImg.src = "http://localhost:9000/img/logo.png";

// const linebreak = document.createElement("br");
const headerText = document.querySelector(".cta");
console.log(headerText);
headerText.querySelector("h1").textContent = siteContent["cta"]["h1"];
headerText.querySelector("button").textContent = siteContent["cta"]["button"];
headerText.querySelector("img").src = "http://localhost:9000/img/cta.png";

const main = Object.entries(siteContent["main-content"]);
const mainHeaders = main.filter(key => key[0].includes("-h4"));
const paragraphs = main.filter(key => key[1].includes("elementum"))

const h4s = document.querySelectorAll(".main-content h4")
h4s.forEach((h4, index) => {h4.textContent = mainHeaders[index][1]})

const mainPs = document.querySelectorAll(".main-content p");
mainPs.forEach((p, index) => {p.textContent = paragraphs[index][1]})
// mainPs.forEach((p, index) => {p.textContent = main[index][1]})
console.log(paragraphs);
console.log(h4s)

document.querySelector(".middle-img").src = "http://localhost:9000/img/accent.png";

const contact = Object.values(siteContent["contact"])
const contactPs = contact.filter(element => !element.includes("Contact"))

document.querySelector(".contact h4").textContent = contact[0];
document.querySelectorAll(".contact p").forEach((p, index) => {p.textContent = contactPs[index]})

const cpr = document.querySelector("footer a").textContent = siteContent["footer"]["copyright"];
document.querySelector("footer a").classList.add("bold");