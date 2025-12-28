const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");

/* STATS */
textInput.addEventListener("input", updateStats);

function updateStats() {
  const text = textInput.value;
  charCount.textContent = text.length;
  wordCount.textContent = text.trim()
    ? text.trim().split(/\s+/).length
    : 0;
}

/* TOOLS */
function toUpper() {
  textInput.value = textInput.value.toUpperCase();
  updateStats();
}

function toLower() {
  textInput.value = textInput.value.toLowerCase();
  updateStats();
}

function removeSpaces() {
  textInput.value = textInput.value.replace(/\s+/g, " ").trim();
  updateStats();
}

function copyText() {
  navigator.clipboard.writeText(textInput.value);
  showToast("Copied to clipboard ✔");
}

/* TOAST */
function showToast(message) {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.style.position = "fixed";
  toast.style.bottom = "30px";
  toast.style.right = "30px";
  toast.style.background = "#38bdf8";
  toast.style.color = "#020617";
  toast.style.padding = "14px 20px";
  toast.style.borderRadius = "12px";
  toast.style.fontWeight = "600";
  toast.style.boxShadow = "0 15px 40px rgba(56,189,248,0.4)";
  toast.style.zIndex = "999";

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000);
}
