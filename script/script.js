import { getKLK, getMX, getTea, getAlien } from "./fetch-utils.js";
import { renderMXcard } from "./render-mx-utils.js";
import { renderKLKcard } from "./render-klk-utils.js";
import { renderTeaCard } from "./render-tea-utils.js";
import { renderAlienCard } from "./render-xeno-utils.js";

// import functions and grab DOM elements

const mxContainer = document.getElementById(`ktmMX`);
const klkContainer = document.getElementById(`klkSection`);
const teaContainer = document.getElementById(`teaSection`);
const alienContainer = document.getElementById(`alienSection`);

// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

window.addEventListener(`load`, async() => {
    const mxData = await getMX();
    renderMX(mxData);

    const klkData = await getKLK();
    renderKLK(klkData);

    const teaData = await getTea();
    renderTea(teaData);
    
    const alienData = await getAlien();
    renderAlien(alienData);
    console.log(alienData);
});

function renderMX(mxData){
    for (let mx of mxData){
        let renderMX = renderMXcard(mx);

        mxContainer.append(renderMX);
    }
}

function renderKLK(klkData){
    for (let k of klkData){
        let renderKLK = renderKLKcard(k);
        
        klkContainer.append(renderKLK);
    }
}

function renderTea(TeaData){
    for (let t of TeaData){
        let renderTea = renderTeaCard(t);
        teaContainer.append(renderTea);
    }
}

function renderAlien(alienData){
    for (let a of alienData){
        let renderAlien = renderAlienCard(a);
        alienContainer.append(renderAlien);
    }
} 