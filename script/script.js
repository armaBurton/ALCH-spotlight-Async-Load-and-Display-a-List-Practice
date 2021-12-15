import { getKLK, getMX, getTea } from "./fetch-utils.js";
import { renderMXcard } from "./render-mx-utils.js";
import { renderKLKcard } from "./render-klk-utils.js";
import { renderTeaCard } from "./render-tea-utils.js";

// import functions and grab DOM elements

const mxContainer = document.getElementById(`ktmMX`);
const klkContainer = document.getElementById(`klkSection`);
const teaContainer = document.getElementById(`teaSection`);

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
    console.log(teaData);
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