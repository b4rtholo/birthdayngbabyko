(function () {
  const letters = [
    { title: "Open When You Miss Me", text: `Imagine me giving you the longest, warmest hug. Even when we are not beside each other, you still cross my mind in little ways throughout the day. Distance or a busy moment cannot make you any less important to me.\n\nI hope you remember that you do not have to earn my care by being cheerful or having everything figured out. You can simply be yourself and be loved and cared for. \n\nI'm sending you all my love baby. ♡` },
    { title: "Open When You're Sad", text: `Hello babyyy,\n\nYou do not have to be happy all the time. Some days are heavy, and you are allowed to feel that without apologizing for it. You do not need to explain every feeling perfectly or pretend that everything is okay just to make other people comfortable.\n\nPlease be gentle with yourself. Take a breath, rest if you need to, and take things one small step at a time. I may not always know the perfect thing to say, but I want to listen and understand. You deserve patience, comfort, and care on your hard days just as much as on your good ones.\n\nYou are not a burden for having feelings. I care about you, always. ♡` },
    { title: "Open When You Need a Smile", text: `Hello, my baby! ♡\n\nThis is your reminder that you are easy to appreciate. You have your own little ways of making a day better, and sometimes you probably do it without even realizing.\n\nIf today has been a little annoying, I hope this makes you smile at least a tiny bit and remember that somewhere out there is a person who thinks you are very, very special.\n\nThat person is me. syempre ako yon. I love you! ♡` },
    { title: "My Birthday Letter to You", text: `Happy Birthday babyyy, ♡\n\nIt's your day today and Kahit malayo tayo sa isa't isa, I want to celebrate it, I want you to feel celebrated always. I'm grateful that you exist and that I get to know you beb. \n\nI hope na yung oras and yung mga mangyayare is umayon sa gusto mo baby, na maging magaan and gentle yung mundo sayo. I'm so proud of you baby. I hope rin na you find reasons to be happy and moments lang na to take a breath and pause lang to realize or feel proud of yourself. \n\nYou deserve beautiful experiences, not only kasi birthday mo but everyday also. Thank you for being you bebi. \n\nHappy Birthday, baby. I love you so much. ♡\n\nForever yours,\nGian` },
    { title: "Reasons Why I Love You", text: `Ten little reasons (and there are more):\n\n1. Your kindness, especially in the little things.\n2. The way you can make me laugh.\n3. Your cutenesss.\n4. The way you just exist, it calms me.\n5. Your dreams and the things you care about.\n6. How you keep going even when a day is difficult.\n7. The little details that make you you.\n8. The comfort of sharing thoughts with you.\n9. The happiness I feel when something reminds me of you.\n10. Because love is not only one big reason. It's all these little things, together.\n\nAnd if you ask me tomorrow, I'll probably have ten more. ♡` }
  ];
  const grid = document.querySelector("#letters-grid");
  const modal = document.querySelector("#letter-modal");
  const modalTitle = document.querySelector("#letter-modal-title");
  const modalText = document.querySelector("#letter-modal-text");
  if (!grid || !modal) return;

  letters.forEach((letter, i) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "envelope-card reveal visible";
    card.innerHTML = `<span class="envelope-art" aria-hidden="true"><span class="envelope-flap"></span><span class="envelope-heart">♥</span></span><strong>${letter.title}</strong><small>Click to open your letter ♡</small>`;
    card.addEventListener("click", () => {
      modalTitle.textContent = letter.title;
      modalText.textContent = letter.text.replaceAll("[Her Name]", (window.BirthdayConfig || {}).herName || "[Her Name]").replaceAll("[Your Name]", (window.BirthdayConfig || {}).yourName || "[Your Name]");
      modal.hidden = false;
      document.body.classList.add("modal-open");
      modal.querySelector(".modal-close").focus();
    });
    grid.appendChild(card);
  });
  function closeModal() { modal.hidden = true; document.body.classList.remove("modal-open"); }
  modal.querySelector(".modal-close").addEventListener("click", closeModal);
  modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) closeModal(); });
})();
