/* Local Storage Keys */
const THEME = "theme";
const IS_SOLAR = "isSolar";

const { body } = document;
const dark = document.getElementById("dark");
const light = document.getElementById("light");
const solar = document.getElementById("solar");

(() => {
  const theme = localStorage.getItem(THEME);
  const isSolar = localStorage.getItem(IS_SOLAR);
  theme && body.classList.add(theme);
  isSolar && body.classList.add("solar");
})();

dark.onclick = () => {
  body.classList.replace("light", "dark");
  localStorage.setItem(THEME, "dark");
};

light.onclick = () => {
  body.classList.replace("dark", "light");
  localStorage.setItem(THEME, "light");
};

solar.onclick = () => {
  const isSolar = body.classList.contains("solar");
  localStorage.setItem(IS_SOLAR, !isSolar);
  isSolar ? body.classList.remove("solar") : body.classList.add("solar");
};
