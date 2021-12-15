export function renderTeaCard(data){
    const teaCard = document.createElement(`div`);
    teaCard.classList.add(`teaCard`);

    const teaImg = document.createElement(`img`);
    teaImg.classList.add(`teaImg`);
    let image = data.img_url;
    teaImg.src = image;
    console.log(teaImg);

    const dataDiv = document.createElement(`div`);
    dataDiv.classList.add(`dataDiv`);

    const teaName = document.createElement(`h2`);
    teaName.classList.add(`teaName`);
    teaName.textContent = data.type;

    const teaDesc = document.createElement(`p`);
    teaDesc.classList.add(`teaDesc`);
    teaDesc.textContent = data.desc;


    const cert = document.createElement(`p`);
    cert.classList.add(`cert`, `heavy`);
    if (data.certification.kosher === true){
        cert.textContent = `KOSHER CERTIFIED  |  `;
    }

    if (data.certification.organic === true){
        cert.append(`USDA ORGANIC`);
    }

    dataDiv.append(teaName, teaDesc, cert);
    
    const teaCardTop = document.createElement(`div`);
    teaCardTop.classList.add(`teaCardTop`);
    teaCardTop.append(teaImg, dataDiv);

    const teaCardBottom = document.createElement(`div`);
    teaCardBottom.classList.add(`teaCardBottom`);

    const aroma = document.createElement(`p`);
    aroma.classList.add(`aroma`, `heavy`);
    const aromaText = document.createElement(`span`);
    aromaText.classList.add(`aromaText`, `light`);
    aromaText.textContent = data.tastingNotes.Aroma;
    aroma.textContent = `Aroma: `;
    aroma.append(aromaText);

    const flavor = document.createElement(`p`);
    flavor.classList.add(`flavor`, `heavy`);
    const flavorText = document.createElement(`span`);
    flavorText.classList.add(`flavorText`, `light`);
    flavorText.textContent = data.tastingNotes.Flavor;
    flavor.textContent = `Flavor: `;
    flavor.append(flavorText);

    const color = document.createElement(`p`);
    color.classList.add(`color`, `heavy`);
    const colorText = document.createElement(`span`);
    colorText.classList.add(`colorText`, `light`);
    colorText.textContent = data.tastingNotes.Color;
    color.textContent = `Color: `;
    color.append(colorText);

    teaCardBottom.append(aroma, flavor, color);

    teaCard.append(teaCardTop, teaCardBottom);
    return teaCard;
}