# A Little Garden of Love 🌸

A romantic, responsive birthday website made with HTML, CSS, and vanilla JavaScript. It has five pages, interactive love letters, a photo scrapbook, an October birthday calendar, and a revealable birthday surprise.

## Run it

1. Extract the `birthday-website` folder.
2. Open `index.html` in a modern browser.
3. Use the navigation to visit the other pages.

The website uses regular JavaScript files, so it does not need Node.js, a build tool, or a database. Google Fonts are optional; if you're offline, the browser uses fallback fonts.

## Personalize names and birthday

Open `js/config.js`. The girlfriend name is already set to `Baby`. Change it if you want a different display name:
- `herName: "Baby"`
- `yourName: "[Your Name]"`
- `birthdayMonth: 10` (1 = January, 10 = October)
- `birthdayDay: 22`
- `birthdayYear: 2026`
- `personalMessage`

The calendar uses the configured month, day, and year and calculates weekday alignment automatically.

## Edit the love letters

Open `js/letters.js`. Each letter has a `title` and `text`. Replace the sample text with your own words. Keep the backtick marks around each `text` value. The `[Her Name]` and `[Your Name]` placeholders are filled using `js/config.js`.

## Add photos

1. Put your photos in `images/our-memories/`, for example `photo-1.jpg`.
2. Open `js/memories.js`.
3. Set an entry's `image` to a relative path such as `images/our-memories/photo-1.jpg`.
4. Edit `title`, `caption`, and `date`.
5. Duplicate an object in the array to add another card.

If `image` is empty or the file can't load, a designed placeholder appears instead. Real photos open in a lightbox with previous/next controls.

## Change captions and dates

Edit the `title`, `caption`, and `date` values in `js/memories.js`. Use a blank date (`date: ""`) if you do not want a date displayed.

## Update the birthday

Change `birthdayMonth`, `birthdayDay`, and `birthdayYear` in `js/config.js`. The calendar will calculate the correct number of days and weekday alignment. The current default is October 22, 2026.

## Add optional music

Put an audio file you have permission to use at `music/our-song.mp3`. The player has controls and will not autoplay. If no file is present, the page shows a small reminder. You can remove the player section from `surprise.html` if you don't want music.

## Publish for free with GitHub Pages

1. Create or sign in to a GitHub account.
2. Create a new public repository, for example `birthday-website`.
3. Extract this folder and upload all its files and folders to the repository root (so `index.html` is at the top level).
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and `/ (root)`, then save.
7. Wait for GitHub Pages to finish publishing. The site URL is usually `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

If you change files later, commit/upload the changes and GitHub Pages will update the site. Test the published link on a phone before sharing it.

## Personalization checklist

- [ ] Replace `[Her Name]` and `[Your Name]` in `js/config.js`.
- [ ] Read and personalize all five sample letters in `js/letters.js`.
- [ ] Add photos and edit captions in `js/memories.js`.
- [ ] Confirm October 22, 2026 (or change the date) in `js/config.js`.
- [ ] Edit the birthday message in `js/surprise.js` if desired.
- [ ] Add `music/our-song.mp3` only if you want music.
- [ ] Open every page and test the navigation, letters, gallery, calendar, and surprise.
- [ ] Test on a phone before sending the link.

## Project structure

```text
birthday-website/
├── index.html
├── letters.html
├── memories.html
├── calendar.html
├── surprise.html
├── css/
│   └── style.css
├── js/
│   ├── config.js
│   ├── main.js
│   ├── letters.js
│   ├── memories.js
│   ├── gallery.js
│   ├── calendar.js
│   └── surprise.js
├── images/
│   ├── flowers/
│   └── our-memories/
└── music/
```
