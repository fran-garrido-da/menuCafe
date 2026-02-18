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

function renderCard(menuItem){
    let newCard = document.createElement("article");
    let block = document.createElement("blockquote");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    newCard.style.width = "30rem";
    h1.innerText = `${menuItem.name}`;
    p.innerText = `$${menuItem.price}`;
    block.appendChild(h1)
    block.appendChild(p)
    if(menuItem.descrip!==""){
        let leg = document.createElement("legend");
        leg.innerText = `Descripcion: ${menuItem.descrip}`;
        block.appendChild(leg);
    }
    newCard.appendChild(block);
    return newCard
}
function showMenu(){
    menu.forEach(item => {
            if(item.logicState){
                    main.appendChild(renderCard(item));
        console.log("Added new Card to Main");
                    }
    });
}

showMenu();
