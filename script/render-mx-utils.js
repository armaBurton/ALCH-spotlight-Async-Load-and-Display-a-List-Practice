export function renderMXcard(mx){
    const ktmDiv = document.createElement(`div`);
    ktmDiv.classList.add(`ktmDiv`);

    const ktmH2 = document.createElement(`h2`);
    ktmH2.classList.add(`ktmH2`);
    ktmH2.textContent = mx.Brand;

    const dispSpan = document.createElement(`span`);
    dispSpan.classList.add(`dispSpan`);
    dispSpan.textContent = mx.displacement;
    ktmH2.append(` `, dispSpan);
    
    const name = document.createElement(`span`);
    name.classList.add(`name`);
    name.textContent = mx.Name;
    ktmH2.append(` `, name);

    const leftCol = document.createElement(`div`);
    leftCol.classList.add(`leftCol`);

    const disP = document.createElement(`p`);
    disP.classList.add(`disp`, `heavy`);
    disP.textContent = (`Displacement: `);
    const dispSize = document.createElement(`span`);
    dispSize.classList.add(`dispSize`, `light`);
    dispSize.textContent = mx.displacement;
    disP.append(dispSize);
    
    const trans = document.createElement(`p`);
    trans.classList.add(`trans`, `heavy`);
    trans.textContent = (`Transmission: `);
    const gears = document.createElement(`span`);
    gears.classList.add(`gears`, `light`);
    gears.textContent = mx.transmission;
    trans.append(gears);
    
    const design = document.createElement(`p`);
    design.classList.add(`design`, `heavy`);
    design.textContent = (`Design: `);
    const stroke = document.createElement(`span`);
    stroke.classList.add(`stroke`, `light`);
    stroke.textContent = mx.design;
    design.append(stroke);

    leftCol.append(disP, trans, design);

    const rightCol = document.createElement(`div`);
    rightCol.classList.add(`rightCol`);
    
    const weight = document.createElement(`p`);
    weight.classList.add(`weight`, `heavy`);
    weight.textContent = (`Dry Weight: `);
    const dryWeight = document.createElement(`span`);
    dryWeight.classList.add(`dryWeight`, `light`);
    dryWeight.textContent = mx.dry_weight;
    weight.append(dryWeight, `kg`);
    
    const tank = document.createElement(`p`);
    tank.classList.add(`tank`, `heavy`);
    tank.textContent = (`Tank Capacity: `);
    const tankCap = document.createElement(`span`);
    tankCap.classList.add(`tankCap`, `light`);
    tankCap.textContent = mx.tank_cap;
    tank.append(tankCap, `L`);

    rightCol.append(weight, tank);

    const colHolder = document.createElement(`div`);
    colHolder.classList.add(`colHolder`);
    colHolder.append(leftCol, rightCol);
    
    ktmDiv.append(ktmH2, colHolder);
    return ktmDiv;
    
}