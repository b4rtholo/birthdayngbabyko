(function () {
  const grid = document.querySelector("#memory-grid");
  const lightbox = document.querySelector("#lightbox");
  if (!grid || !lightbox) return;
  const items = window.Memories || [];
  let activeIndex = 0;
  const image = lightbox.querySelector(".lightbox-image");
  const caption = lightbox.querySelector(".lightbox-caption");
  const date = lightbox.querySelector(".lightbox-date");

  function placeholder(title) {
    return `<div class="photo-placeholder"><span aria-hidden="true">🌸</span><strong>Add Our Photo Here ♡</strong><small>${title}</small></div>`;
  }
  items.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "polaroid reveal visible";
    card.style.setProperty("--tilt", ((index % 5) - 2) + "deg");
    let media;
    if (item.image) {
      media = document.createElement("img");
      media.src = item.image;
      media.alt = item.title;
      media.loading = "lazy";
      media.onerror = () => { media.replaceWith(makePlaceholder(item.title)); };
      media.addEventListener("click", () => openLightbox(index));
    } else {
      media = makePlaceholder(item.title);
    }
    const photo = document.createElement("div");
    photo.className = "polaroid-photo";
    if (typeof media === "string") photo.innerHTML = media;
    else photo.appendChild(media);
    if (!item.image) {
      photo.tabIndex = 0;
      photo.setAttribute("role", "button");
      photo.setAttribute("aria-label", "Replace this with your favorite memory");
      photo.addEventListener("click", () => window.showToast("Replace this with your favorite memory ♡"));
      photo.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") window.showToast("Replace this with your favorite memory ♡"); });
    }
    const title = document.createElement("strong"); title.className = "polaroid-title"; title.textContent = item.title;
    const desc = document.createElement("p"); desc.className = "polaroid-caption"; desc.textContent = item.caption || "";
    const when = document.createElement("small"); when.className = "polaroid-date"; when.textContent = item.date || "";
    card.append(photo, title, desc, when);
    grid.appendChild(card);
  });
  function makePlaceholder(title) {
    const div = document.createElement("div");
    div.className = "photo-placeholder";
    div.innerHTML = `<span aria-hidden="true">🌸</span><strong>Add Our Photo Here ♡</strong><small></small>`;
    div.querySelector("small").textContent = title;
    return div;
  }
  function openLightbox(index) {
    const item = items[index];
    if (!item || !item.image) { window.showToast("Replace this with your favorite memory ♡"); return; }
    activeIndex = index;
    renderLightbox();
    lightbox.hidden = false;
    document.body.classList.add("modal-open");
    lightbox.querySelector(".lightbox-close").focus();
  }
  function renderLightbox() {
    const item = items[activeIndex];
    image.src = item.image;
    image.alt = item.title;
    caption.textContent = item.title + (item.caption ? " — " + item.caption : "");
    date.textContent = item.date || "";
  }
  function move(step) {
    for (let count = 0; count < items.length; count++) {
      activeIndex = (activeIndex + step + items.length) % items.length;
      if (items[activeIndex].image) { renderLightbox(); return; }
    }
    window.showToast("Add a few photos to browse your memories ♡");
  }
  function close() { lightbox.hidden = true; document.body.classList.remove("modal-open"); }
  lightbox.querySelector(".lightbox-close").addEventListener("click", close);
  lightbox.querySelector(".lightbox-prev").addEventListener("click", () => move(-1));
  lightbox.querySelector(".lightbox-next").addEventListener("click", () => move(1));
  lightbox.addEventListener("click", e => { if (e.target === lightbox) close(); });
  document.addEventListener("keydown", e => {
    if (lightbox.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") move(-1);
    if (e.key === "ArrowRight") move(1);
  });
})();
