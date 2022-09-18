const container = document.createElement("div");

container.style.cssText = `
width: 500px;
height: 200px;
margin: 150px auto;
`;
document.body.append(container);

const divone = document.createElement("div");
const divtwo = document.createElement("div");

divone.className = "divone";
divone.style.cssText = `
border-radius: 15px; 
   border: 2px solid red;
   height: 120px;
   width: 450px;
   margin: auto;
   font-size: 22px;
   padding: 15px 10px;
   box-sizing: border-box;
`;
divone.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem incidunt cumque in! In, omnis repellendus ";
container.prepend(divone, divtwo);

const intocode = document.createElement("div");
const google = document.createElement("div");
const instagram = document.createElement("div");

divtwo.prepend(intocode, google, instagram);

divtwo.className = "divtwo";

divtwo.style.cssText = `
   height: 50px;
   width: 450px;
   margin: auto;
   font-size: 22px;
   padding: 15px 10px;
   box-sizing: border-box;
   display: flex;
justify-content: space-between;
`;
intocode.innerHTML = `<a href=https://intocode.ru/>intocode</a>`;
google.innerHTML = `<a href=https://www.google.ru/>google</a>`;
instagram.innerHTML = `<a href=https://www.instagram.com/>instagram</a>`;
