(function () {
  const config = window.BirthdayConfig || {};
  document.querySelectorAll("[data-her-name]").forEach(el => el.textContent = config.herName || "Baby");
  document.querySelectorAll("[data-your-name]").forEach(el => el.textContent = config.yourName || "Gian");
  document.querySelectorAll("[data-personal-message]").forEach(el => el.textContent = config.personalMessage || "");

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    }));
  }

  document.querySelectorAll(".reveal").forEach(el => {
    if (!("IntersectionObserver" in window)) { el.classList.add("visible"); return; }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    observer.observe(el);
  });

  const garden = document.querySelector(".flower-garden");
  if (garden) {
    const flowers = ["🌸", "🌷", "🌼", "🌺", "✿", "❀", "🌹"];
    for (let i = 0; i < 34; i++) {
      const flower = document.createElement("button");
      flower.type = "button";
      flower.className = "garden-flower";
      flower.textContent = flowers[i % flowers.length];
      flower.style.left = (Math.random() * 100) + "%";
      flower.style.setProperty("--size", (1.1 + Math.random() * 2.1) + "rem");
      flower.style.setProperty("--delay", (Math.random() * 2) + "s");
      flower.setAttribute("aria-label", "A little flower with a sweet message");
      flower.addEventListener("click", () => {
        const messages = ["You are so loved ♡", "You make ordinary days brighter.", "A little reminder: you are wonderful.", "Sending you a pocket-sized hug ♡", "You deserve all the softest things."];
        showToast(messages[Math.floor(Math.random() * messages.length)]);
        flower.classList.add("bloom");
      });
      garden.appendChild(flower);
    }
  }

  document.querySelectorAll("[data-hearts]").forEach(button => button.addEventListener("click", releaseHearts));
  document.querySelectorAll(".back-to-top").forEach(button => button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" })));
  document.querySelectorAll("[data-random-message]").forEach(button => button.addEventListener("click", () => {
    const target = document.querySelector("#random-message");
    if (target) target.textContent = ["You are my favorite.", "I hope the world is gentle with you.", "Hugs and kisses for you alwayss.", "You make my world a little more light.", "Please remember to be as kind to yourself as you are to others."][Math.floor(Math.random() * 5)];
  }));

  document.querySelectorAll("[data-reason-reveal]").forEach(button => {
    const reasons = ["Your kindness.", "The way you make me laugh.", "Your own special way of seeing the world.", "How you keep being yourself.", "The comfort I feel when we talk.", "Your laugh and the happiness around it.", "The little things you do without noticing.", "Your strength, even on difficult days.", "The dreams you carry.", "Simply because you are you. ♡"];
    let index = 0;
    button.addEventListener("click", () => {
      const output = document.querySelector("#reason-output");
      if (output) output.textContent = reasons[index++ % reasons.length];
    });
  });

  function releaseHearts() {
    for (let i = 0; i < 18; i++) {
      const heart = document.createElement("span");
      heart.className = "floating-heart";
      heart.textContent = ["♡", "♥", "💗"][i % 3];
      heart.style.left = (5 + Math.random() * 90) + "vw";
      heart.style.animationDelay = (Math.random() * .7) + "s";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 3000);
    }
  }
  window.releaseBirthdayHearts = releaseHearts;

  window.showToast = function (message) {
    let toast = document.querySelector(".toast-message");
    if (!toast) {
      toast = document.createElement("div");
      toast.className = "toast-message";
      toast.setAttribute("role", "status");
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
  };
})();
