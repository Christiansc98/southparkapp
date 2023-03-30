"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  const characters = await getCharacters();
  showCharacters(characters);
}

async function getCharacters() {
  const response = await fetch(
    "https://cederdorff.github.io/dat-js/05-data/southpark.json"
  );
  const data = await response.json();
  console.log(data);
  return data;
}

function showCharacters(characterList) {
  for (const character of characterList) {
    showCharacter(character);
  }
}

function showCharacter(character) {
  document.querySelector("#characters").insertAdjacentHTML(
    "beforeend",
    `
            <article>
                <img src="${character.image}">
                <h2>${character.name}</h2>
            </article>
        `
  );
  document
    .querySelector("#characters article:last-child")
    .addEventListener("click", characterClicked);

  function characterClicked() {
    showCharacterModal(character);
  }
}

function showCharacterModal(character) {
  console.log(character);
  document.querySelector("#dialog-image").src = character.image;
  document.querySelector("#dialog-title").textContent = character.name;

  let description = showDescription(character);
  document.querySelector("#dialog-character-description").textContent =
    description;

  document.querySelector("#dialog-name").textContent = character.name;
  document.querySelector("#dialog-nick-name").textContent = character.nickname;
  document.querySelector("#dialog-occupation").textContent =
    character.occupation;
  document.querySelector("#dialog-age").textContent = character.age;
  document.querySelector("#dialog-voiced-by").textContent = character.voicedBy;
  document.querySelector("#dialog-gender").textContent = character.gender;

  document.querySelector("#dialog-religion").textContent = character.religion;
  document.querySelector("#dialog-catch-phrase").textContent =
    character.catchPhrase;
  document.querySelector("#dialog-hair-color").textContent =
    character.hairColor;
  document.querySelector("#dialog-school-grade").textContent =
    character.schoolGrade;
  document.querySelector("#dialog-episodes").textContent = character.episodes;
  document.querySelector("#dialog-appearances").textContent =
    character.appearances;
  document.querySelector("#dialog-first-appearance").textContent =
    character.firstAppearance;

  document.querySelector("#dialog-character").showModal();
}

function showDescription(character) {}
