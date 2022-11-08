//import products from "./products_1.js";


const body = document.querySelector("body");
//-------------------Creazione navbar------------------------
const navbar = document.querySelector("navbar")
navbar.className = "navbar";
const imgNav = document.createElement("img");
imgNav.className = "logo";
imgNav.setAttribute("src", "https://img.freepik.com/premium-vector/cacao-chocolate-fruit-lines-logo-design-vector-icon-symbol-graphic-illustration_15473-988.jpg?w=1060");
imgNav.setAttribute("alt", "image");

const ul = document.createElement("ul");
ul.className = "navList";
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li4 = document.createElement("li");

const a1 = document.createElement("a");
a1.textContent = "Home";
const a2 = document.createElement("a");
a2.textContent = "Storia"
const a3 = document.createElement("a");
a3.textContent = "Shop"
const a4 = document.createElement("a");
a4.textContent = "Contatti"

navbar.appendChild(imgNav);
li1.appendChild(a1);
li2.appendChild(a2);
li3.appendChild(a3);
li4.appendChild(a4);

ul.append(li1, li2, li3, li4);


navbar.appendChild(ul);

//------------------Creazione menù wrapper------------------------


const hamburgerWrapper = document.createElement("div");
hamburgerWrapper.className = "hamburgerWrapper";

const hamburgerLine1 = document.createElement("div");
hamburgerLine1.className = "hamburgerLine";
const hamburgerLine2 = document.createElement("div");
hamburgerLine2.className = "hamburgerLine";
const hamburgerLine3 = document.createElement("div");
hamburgerLine3.className = "hamburgerLine";

(hamburgerWrapper).append(hamburgerLine1,hamburgerLine2,hamburgerLine3);

navbar.appendChild(hamburgerWrapper);

console.log(navbar);


//--------------------Creazione 1° sezione-----------------------------

const sectionOne = document.createElement("section");
sectionOne.className = "sectionOne";
const containerDiv = document.createElement("div");
containerDiv.className = "containerImg";
const imgEl2 = document.createElement("img");
imgEl2.className = "imgBack";
imgEl2.setAttribute("src", "./images/chocolate.png");
imgEl2.setAttribute("alt", "image");

containerDiv.appendChild(imgEl2);
sectionOne.appendChild(containerDiv);
body.appendChild(sectionOne);

console.log(sectionOne);

//--------------------Creazione card------------------------------------

const chocos = [
  {
    "id": 1,
    "name": "Black chocolate",
    "img": "/images/chocolate_black.jpeg",
    "desc": "he compounds in dark chocolate appear to be highly protective against the oxidation of LDL. In the long term, this should cause much less cholesterol to lodge in the arteries, resulting in a lower risk of heart disease. In fact, research show a fairly drastic improvement.",
  },
  {
    "id": 2,
    "name": "Milk chocolate",
    "img": "/images/chocolate_milk.jpeg",
    "desc": "he compounds in milk chocolate appear to be highly protective against the oxidation of LDL. In the long term, this should cause much less cholesterol to lodge in the arteries, resulting in a lower risk of heart disease. In fact, research show a fairly drastic improvement.",
  },
  {
    "id": 3,
    "name": "White chocolate",
    "img": "/images/chocolate_white.jpeg",
    "desc": "he compounds in white chocolate appear to be highly protective against the oxidation of LDL. In the long term, this should cause much less cholesterol to lodge in the arteries, resulting in a lower risk of heart disease. In fact, research show a fairly drastic improvement.",
  },
];

const titleCard = document.createElement("h1");
body.appendChild(titleCard);
titleCard.textContent = "PRODUCT"
const sectionCard = document.createElement("section");
sectionCard.className = "containerCard";
body.appendChild(sectionCard);

const createCard = (choco, parent) => {
  const card = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardTitle = document.createElement("h1");
  const cardPar = document.createElement("p");

  card.className = "card_card";
  cardImg.setAttribute("src", choco.img);
  cardTitle.textContent = choco.name;
  cardPar.textContent = choco.desc;

  card.append(cardImg, cardTitle, cardPar);
  parent.appendChild(card);
};

chocos.map((choco) => createCard(choco, sectionCard));

//--------------------Creazione sezione centrale-----------------------------

const titleCenter = document.createElement("h1");
body.appendChild(titleCenter);
titleCenter.textContent = "NEW ENTRIES"

const sectionCenter = document.createElement("section");
sectionCenter.className = "containerDiv";

const imgC = document.createElement("img");
imgC.className = "imgC";
imgC.setAttribute("src", "./images/chocolate_ruby.jpeg");
imgC.setAttribute("alt", "image");

const divC = document.createElement("div");
divC.className = "divC";

const titleC = document.createElement("h1");
titleC.textContent = "Ruby chocolate"

const buttonC = document.createElement("button");
buttonC.className = "buttonC";
buttonC.textContent ="Get more info"

const parC = document.createElement("p")
parC.textContent= "he compounds in ruby chocolate appear to be highly protective against the oxidation of LDL. In the long term, this should cause much less cholesterol to lodge in the arteries, resulting in a lower risk of heart disease. In fact, research show a fairly drastic improvement."
divC.append(titleC,parC,buttonC)
sectionCenter.append(imgC, divC)
body.appendChild(sectionCenter);


//------------------Inserimento dell'array con oggetti manuale (import non funzionante nonostante type = "module")--------------------------------
const products = [
    {
      "id": 1,
      "name": "Lindt & Sprungli",
      "logo": "/images/Lindt.png",
      "desc":
        "Chocoladefabriken Lindt & Sprüngli AG, more commonly known as Lindt, is a Swiss chocolatier and confectionery company founded in 1845 and known for their chocolate truffles and chocolate bars, among other sweets."
    },
    {
      "id": 2,
      "name": "Ferrero",
      "logo": "/images/ferrero.png",
      "desc":
        "Ferrero SpA (Italian pronunciation: [ferˈrɛːro]) is an Italian manufacturer of branded chocolate and confectionery products and it is the third biggest chocolate producer and confectionery company in the world. It was founded in 1946 in Alba, Piedmont, Italy, by Pietro Ferrero, a confectioner and small-time pastry maker who laid the groundwork for Nutella and famously added hazelnut to save money on chocolate. The company saw a period of tremendous growth and success under Pietro's son Michele Ferrero. "
    },
    {
      "id": 3,
      "name": "Ghirardelli",
      "logo": "/images/ghirardelli.png",
      "desc":
        "The Ghirardelli Chocolate Company is a United States division of Swiss confectioner Lindt & Sprüngli. The company was founded by and is named after Italian chocolatier Domenico Ghirardelli,[1] who, after working in South America, moved to California. The Ghirardelli Chocolate Company was incorporated in 1852, and is the third-oldest chocolate company in the United States, after Baker's Chocolate and Whitman's."
    },
    {
      "id": 5,
      "name": "Guylian",
      "logo": "/images/guliyan.png",
      "desc":
        "Guylian (Dutch pronunciation: ['ɡilijan]) is a Belgian chocolate manufacturer founded by Guy Foubert in 1958. The company takes its name from the combination of Foubert's first name with that of his wife, Liliane. Guylian is perhaps most famous for their production of chocolate Sea Shells praline with different fillings. Guylian has been the major sustaining sponsor of Project Seahorse since 1999"
    },
    {
      "id": 6,
      "name": "Godiva",
      "logo": "/images/godiva.jfif",
      "desc":
        "Godiva Chocolatier is a manufacturer of premium fine chocolates and related products. Godiva, founded in Belgium in 1926, was purchased by the Turkish Yıldız Holding, owner of the Ülker Group, on November 20, 2007. Godiva owns and operates more than 600 retail boutiques and shops in the United States, Canada, Europe, and Asia and is available via over 10,000 specialty retailers."
    },

    {
      "id": 8,
      "name": "Cadbury",
      "logo": "/images/cadbury.png",
      "desc":
        "Cadbury, formerly Cadbury's, is a British multinational confectionery company wholly owned by Mondelez International (originally Kraft Foods) since 2010. It is the second-largest confectionery brand in the world after Wrigley's. Cadbury is internationally headquartered in Uxbridge, West London, and operates in more than 50 countries worldwide."
    },
    {
      "id": 9,
      "name": "Dove",
      "logo": "/images/dove.jfif",
      "desc":
        "Dove (sold as Galaxy in the United Kingdom, Isle of Man, India, and Ireland) is a brand of chocolate made and marketed by the Mars company. Dove produces a wide range of chocolate bars, including dark chocolate, milk, caramel, fruit and nut varieties, truffle and chocolate pieces with a folded milk chocolate center."
    },
    {
      "id": 10,
      "name": " Reese's",
      "logo": "/images/reeses.png",
      "desc":
        "Reese's Peanut Butter Cups are a popular American candy consisting of a milk, white, or dark chocolate cup filled with peanut butter, marketed by The Hershey Company. They were created in 1928 by H. B. Reese, a former dairy farmer and shipping foreman for Milton S. Hershey. Reese was inspired by Hershey and left dairy farming to start his own candy business."
    }
  ];

//------------------Creazione loghi partner-----------------------------------

const titleTwo = document.createElement("h1");
body.appendChild(titleTwo);
titleTwo.textContent = "OUR PARTNER"
const sectionTwo = document.createElement("section");
sectionTwo.className = "ContainerImg";
body.appendChild(sectionTwo);



const createCard1 = (product, parent) => {
    const cardEl = document.createElement("div");
    const cardImgEl = document.createElement("img");
    
    cardEl.className = "card";
    cardImgEl.setAttribute("src", product.logo);
  
    cardEl.append(cardImgEl);
    parent.appendChild(cardEl);
  };
  
  products.map((product) => createCard1(product, sectionTwo))

  console.log(body);