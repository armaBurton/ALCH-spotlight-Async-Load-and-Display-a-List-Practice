export function renderKLKcard(data){
    const klkCard = document.createElement(`div`);
    klkCard.classList.add(`klkCard`);

    const nameDiv = document.createElement(`div`);
    nameDiv.classList.add(`nameDiv`);

    const klkName = document.createElement(`h2`);
    klkName.classList.add(`klkName`);
    klkName.textContent = data.name;
    
    const aka = document.createElement(`p`);
    aka.classList.add(`aka`);
    if (data.aka === null){
        aka.textContent = `aka: no known alias`;
    } else {
        aka.textContent = `aka: ${data.aka}`;
    }

    nameDiv.append(klkName, aka);


    //row two
    const statsDiv = document.createElement(`div`);
    statsDiv.classList.add(`statsDiv`);

    const klkAge = document.createElement(`p`);
    klkAge.classList.add(`klkAge`);
    if (data.aka === null){
        klkAge.textContent = `age: unknown`;
    } else {
        klkAge.textContent = `age: ${data.age}`;
    }

    const klkGender = document.createElement(`p`);
    klkGender.classList.add(`klkGender`);
    klkGender.textContent = `gender: ${data.gender}`;

    const klkStatus = document.createElement(`p`);
    klkStatus.classList.add(`klkStatus`);
    klkStatus.textContent = `status: ${data.status}`;

    statsDiv.append(klkAge, klkGender, klkStatus);

    //row three
    console.log(data.weapon.length);
    const weaponDiv = document.createElement(`div`);
    weaponDiv.classList.add(`weaponDiv`);

    const weaponLeft = document.createElement(`p`);
    weaponLeft.classList.add(`klkLeft`, `heavy`);
    weaponLeft.textContent = `Weapons:`;
    const weaponRightDiv = document.createElement(`p`);
    weaponRightDiv.classList.add(`weaponRightDiv`, `light`);

    weaponDiv.append(weaponLeft);
    for (let w of data.weapon){
        const weaponRight = document.createElement(`p`);
        weaponRight.classList.add(`klkRight`, `light`);
        weaponRight.textContent = w;
        weaponRightDiv.append(weaponRight);
    }

    weaponDiv.append(weaponRightDiv);

    //row four
    const descDiv = document.createElement(`p`);
    descDiv.classList.add(`descDiv`);
    descDiv.textContent = data.desc;
    console.log(data);

    //create card
    klkCard.append(nameDiv, statsDiv, weaponDiv, descDiv);
    return klkCard;
}