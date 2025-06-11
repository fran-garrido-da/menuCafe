const DATAPATH = './DATA.json' 

let menu = await getMenu();
menu = Array.from(menu);
const main = document.getElementById("main");

async function getMenu() {
        try {
            const res = await fetch(DATAPATH);
            if (!res.ok) {
                throw new Error(`HTTP Error. Status: ${res.status}`);
            }
            const data = await res.json();
            return data;
        } catch (err) {
            console.error(err);
            return { error: true, status: err.status, message: err.message };
        }
    }

function newCard(menuItem){
    const newCard = document.createElement("article");
    newCard.style.width = "30rem";
    newCard.innerHTML 
    = `<blockquote>
        <h1>${menuItem.name}</h5>          
        <p>Precio: $${menuItem.price}</p>
        <legend>Descripcion:${menuItem.descrip}</legend>
        </blockquote>
        `
    
        main.appendChild(newCard);

}
function showMenu(){
    menu.forEach(item => {
            if(item.logicState === true){
                    newCard(item);
        console.log("Added new Card to Main");
                    }
    });
}

showMenu();
