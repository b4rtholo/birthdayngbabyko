(function () {
  const grid = document.querySelector("#calendar-grid");
  if (!grid) return;
  const config = window.BirthdayConfig || { birthdayMonth: 10, birthdayDay: 22, birthdayYear: 2026 };
  const month = Number(config.birthdayMonth || 10);
  const year = Number(config.birthdayYear || 2026);
  const birthday = Number(config.birthdayDay || 22);
  const monthName = new Date(year, month - 1, 1).toLocaleString("en-US", { month: "long" });
  document.querySelector("#calendar-title").textContent = `${monthName} ${year}`;
  document.querySelector("#calendar-subtitle").textContent = `${monthName} ${birthday} will always be special.`;
  const firstDay = new Date(year, month - 1, 1).getDay();
  const totalDays = new Date(year, month, 0).getDate();
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  weekdays.forEach(day => {
    const el = document.createElement("div");
    el.className = "weekday";
    el.textContent = day;
    grid.appendChild(el);
  });
  for (let i = 0; i < firstDay; i++) {
    const blank = document.createElement("div");
    blank.className = "calendar-day empty";
    blank.setAttribute("aria-hidden", "true");
    grid.appendChild(blank);
  }
  for (let day = 1; day <= totalDays; day++) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "calendar-day";
    button.textContent = day;
    if (day === birthday) {
      button.classList.add("birthday-day");
      button.innerHTML = `<span class="birthday-number">${day}</span><small>HER SPECIAL DAY ♡</small>`;
      button.setAttribute("aria-label", `${monthName} ${day}, her special birthday`);
    } else {
      button.setAttribute("aria-label", `${monthName} ${day}, ${year}`);
    }
    button.addEventListener("click", () => {
      document.querySelectorAll(".calendar-day.selected").forEach(el => el.classList.remove("selected"));
      button.classList.add("selected");
      const message = document.querySelector("#calendar-message");
      if (day === birthday) {
        message.textContent = "Happy Birthday, babyyy!. This is your day, I hope you enjoy it! ♡";
        window.releaseBirthdayHearts && window.releaseBirthdayHearts();
      } else {
        message.textContent = `${monthName} ${day} is a little reminder that beautiful days are waiting for you, too. ♡`;
      }
    });
    grid.appendChild(button);
  }
})();
