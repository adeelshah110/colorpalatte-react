const generateBtn = document.getElementById("generateBtn");

const singleColorGenerator = () => {
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hex.length);
    hexColor += hex[random];
  }
  return hexColor;
};

const colorPalateGenerator = () => {
  const colorPalate = [];
  for (let i = 0; i < 4; i++) {
    colorPalate.push(singleColorGenerator());
  }
  return colorPalate;
};

const renderColorPalate = () => {
  const colorsContainer = document.querySelector(".color_container");
  colorsContainer.innerHTML = "";
  const colorPalette = colorPalateGenerator();

  colorPalette.forEach((color, i) => {
    const colorDiv = document.createElement("div");
    colorDiv.id = `color${i + 1}`;
    colorDiv.style.background = color;
    const colorTag = document.createElement("p");
    colorTag.id = `color${i + 1}Tag`;
    colorTag.className = "colorTag";
    colorDiv.className = "colorBox";

    colorTag.innerHTML = color;
    colorDiv.appendChild(colorTag);

    colorsContainer.appendChild(colorDiv);
  });
  const copytoClipboard = (id) => {
    const el = document.getElementById(id);
    navigator.clipboard
      .writeText(el.innerText)
      .then(() => {
        alert("Copied to clipboard");
      })
      .catch((error) => {
        alert("could not copyt it");
      });
  };
  const colorTags = document.querySelectorAll(".colorTag");
  colorTags.forEach((colorTag, i) => {
    colorTag.addEventListener("click", () =>
      copytoClipboard(`color${i + 1}Tag`)
    );
  });
};
renderColorPalate();
generateBtn.addEventListener("click", renderColorPalate);
