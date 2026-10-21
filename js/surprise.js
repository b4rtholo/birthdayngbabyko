(function () {
  const button = document.querySelector("#reveal-surprise");
  if (!button) return;
  const content = document.querySelector("#surprise-content");
  button.addEventListener("click", () => {
    content.hidden = false;
    button.hidden = true;
    document.querySelector(".surprise-intro").textContent = "A little bouquet, a little letter, and a whole lot of love. ♡";
    for (let i = 0; i < 26; i++) {
      const petal = document.createElement("span");
      petal.className = "surprise-petal";
      petal.textContent = ["🌸", "🌷", "♡", "✿"][i % 4];
      petal.style.left = Math.random() * 100 + "vw";
      petal.style.animationDelay = Math.random() * 1.5 + "s";
      document.body.appendChild(petal);
      setTimeout(() => petal.remove(), 4500);
    }
    window.releaseBirthdayHearts && window.releaseBirthdayHearts();
    content.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  const config = window.BirthdayConfig || {};
  const letter = document.querySelector("#final-letter");
  if (letter) {
    letter.innerHTML = `Happy Birthday, babyyy.<br><br>Araw mo to beb, hindi lang araw mo na dahil sa mens, emeee. I genuinely wish you a blessed day beb. Kahit na magkalayo tayo I will make sure na you are celebrated. Thank you for being the person you are. You deserve to be loved gently, appreciated sincerely, and celebrated not only today but everydayyy.<br><br>I may not always find the perfect words to explain how much you mean to me, but you are really one of the best things that happened to me.<br><br>No matter how many birthdays come and go, I will always be grateful that you exist bebi.<br><br>Happy birthday, ${escapeHTML(config.herName || "Baby")}. I love you. ♡`;
;
  }
  const audio = document.querySelector("#our-song");
  const musicButton = document.querySelector("#music-toggle");
  const musicNote = document.querySelector("#music-note");
  if (audio && musicButton) {
    audio.addEventListener("loadedmetadata", () => { audio.hidden = false; if (musicNote) musicNote.hidden = true; });
    audio.addEventListener("error", () => { audio.hidden = true; if (musicNote) musicNote.hidden = false; });
    musicButton.addEventListener("click", async () => {
      if (!audio.getAttribute("src")) {
        if (musicNote) musicNote.hidden = false;
        return;
      }
      if (audio.paused) {
        try { await audio.play(); musicButton.textContent = "Pause Our Song ♫"; }
        catch (_) { if (musicNote) musicNote.hidden = false; }
      } else {
        audio.pause(); musicButton.textContent = "Play Our Song ♫";
      }
    });
    audio.addEventListener("ended", () => musicButton.textContent = "Play Our Song ♫");
  }
  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch]));
  }
})();
