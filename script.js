async function loadLevel() {
  const response = await fetch("level.json");
  const data = await response.json();

  document.getElementById("levelData").textContent =
    JSON.stringify(data, null, 2);
}
