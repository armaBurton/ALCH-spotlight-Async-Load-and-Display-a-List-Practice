import { getKLK, getMX } from "./fetch-utils.js";
import { renderMXcard } from "./render-mx-utils.js";
import { renderKLKcard } from "./render-klk-utils.js";

// import functions and grab DOM elements

const mxContainer = document.getElementById(`ktmMX`);
const klkContainer = document.getElementById(`klkSection`);

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
    console.log(klkData);
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