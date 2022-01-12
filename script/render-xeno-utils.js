export function renderAlienCard(data){
    const alienCard = document.createElement(`div`);
    alienCard.classList.add(`alienCard`);

    const crewImage = document.createElement(`img`);
    crewImage.classList.add(`crewImage`);
    let img = data.img;
    crewImage.src = img;
    console.log(crewImage.src);
    
    const crewName = document.createElement(`h2`);
    crewName.classList.add(`crewName`);
    crewName.textContent = data.name;
    
    alienCard.append(crewName, crewImage);

    if (data.bDay){
        const bDay = document.createElement(`p`);
        bDay.classList.add(`bday`, `heavy`);
        bDay.textContent = `Birthday `;
        const bDayDate = document.createElement(`span`);
        bDayDate.classList.add(`bDayDate`, `light`);
        bDayDate.textContent = data.bDay;
        bDay.append(bDayDate);
        alienCard.append(bDay);
    }

    if (data.nationality){
        const nationality = document.createElement(`p`);
        nationality.classList.add(`nationality`, `heavy`);
        nationality.textContent = `Nationality `;
        const nationalitySpan = document.createElement(`span`);
        nationalitySpan.classList.add(`nationalitySpan`, `light`);
        nationalitySpan.textContent = data.nationality;
        nationality.append(nationalitySpan);
        alienCard.append(nationality);
    }

    if (data.rank){
        const rank = document.createElement(`p`);
        rank.classList.add(`rank`, `heavy`);
        rank.textContent = `Rank `;
        const rankSpan = document.createElement(`span`);
        rankSpan.classList.add(`rankSpan`, `light`);
        rankSpan.textContent = data.rank;
        rank.append(rankSpan);
        alienCard.append(rank);
    }

    if (data.status){
        const status = document.createElement(`p`);
        status.classList.add(`status`, `heavy`);
        status.textContent = `Status `;
        const statusSpan = document.createElement(`span`);
        statusSpan.classList.add(`statusSpan`, `light`);
        statusSpan.textContent = data.status;
        status.append(statusSpan);
        alienCard.append(status);
    }

    if (data.species){
        const species = document.createElement(`p`);
        species.classList.add(`species`, `heavy`);
        species.textContent = `Species `;
        const speciesSpan = document.createElement(`span`);
        speciesSpan.classList.add(`speciesSpan`, `light`);
        speciesSpan.textContent = data.species;
        species.append(speciesSpan);
        alienCard.append(species);
    }

    if (data.gender){
        const gender = document.createElement(`p`);
        gender.classList.add(`gender`, `heavy`);
        gender.textContent = `Gender `;
        const genderSpan = document.createElement(`span`);
        genderSpan.classList.add(`genderSpan`, `light`);
        genderSpan.textContent = data.gender;
        gender.append(genderSpan);
        alienCard.append(gender);
    }
    
    if (data.height){
        const height = document.createElement(`p`);
        height.classList.add(`height`, `heavy`);
        height.textContent = `Height `;
        const heightSpan = document.createElement(`span`);
        heightSpan.classList.add(`heightSpan`, `light`);
        heightSpan.textContent = data.height;
        height.append(heightSpan);
        alienCard.append(height);
    }
    
    if (data.hairColor){
        const hairColor = document.createElement(`p`);
        hairColor.classList.add(`hairColor`, `heavy`);
        hairColor.textContent = `Hair Color `;
        const hairColorSpan = document.createElement(`span`);
        hairColorSpan.classList.add(`hairColorSpan`, `light`);
        hairColorSpan.textContent = data.hairColor;
        hairColor.append(hairColorSpan);
        alienCard.append(hairColor);
    }
    
    if (data.eyeColor){
        const eyeColor = document.createElement(`p`);
        eyeColor.classList.add(`eyeColor`, `heavy`);
        eyeColor.textContent = `Eye Color `;
        const eyeColorSpan = document.createElement(`span`);
        eyeColorSpan.classList.add(`eyeColorSpan`, `light`);
        eyeColorSpan.textContent = data.eyeColor;
        eyeColor.append(eyeColorSpan);
        alienCard.append(eyeColor);
    }
    
    if (data.actor){
        const actor = document.createElement(`p`);
        actor.classList.add(`actor`, `heavy`);
        actor.textContent = `Actor `;
        const actorSpan = document.createElement(`span`);
        actorSpan.classList.add(`actorSpan`, `light`);
        actorSpan.textContent = data.actor;
        actor.append(actorSpan);
        alienCard.append(actor);
    }
 
    return alienCard;
}