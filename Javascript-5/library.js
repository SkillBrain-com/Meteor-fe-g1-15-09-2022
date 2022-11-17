function checkValid(value) {
    return !(
      typeof value === "null" ||
      typeof value === "undefined" ||
      typeof value === "null" ||
      typeof value === "number" ||
      value.length < 3 ||
      value.length > 9
    );
  }
  
  function specialSplit(value) {
    if (value.includes(" ")) {
      throw new Error("text should not contain any spaces");
    }
    const characters = [];
    for (let i = 0; i < value.length; i++) {
      characters.push(value.charAt(i));
    }
    return characters;
  }
  
  const makeCharacter = (char) => char + "_";
  
  function makeLine(characters, limit) {
    if (characters.length < limit) {
      throw new Error("cannot have a limit grater than the number of characters");
    }
  
    let line = "";
    for (let i = 0; i <= limit; i++) {
      line += makeCharacter(characters[i]);
    }
    return line;
  }
  
  function displayMessage(characters, reversed) {
    for (let i = 0; i < characters.length; i++) {
      const limit = reversed ? i : characters.length - 1 - i;
      const line = makeLine(characters, limit);
      const node = document.createElement("h5");
      node.innerText = line;
      node.classList.add("show");
      document.querySelector("body")
        .appendChild(node);
    }
  }
  
  function myLibraryFunction(a, b) {
    if (checkValid(a) === false) {
      throw new Error("a is not valid");
    }
  
  
    if (checkValid(b) === false) {
      throw new Error("b is not valid");
    }
  
    const aCharacters = specialSplit(a, true);
    const bCharacters = specialSplit(b, false);
  
    displayMessage(aCharacters);
    displayMessage(bCharacters, true);
  }