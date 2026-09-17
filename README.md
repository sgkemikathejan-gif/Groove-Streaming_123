# Groove — deep cuts, wide grooves

A Windows 11 (Fluent, dark Mica) styled music streaming app with real
search and real audio, powered by the YouTube Data API v3 and YouTube's
official embedded player.

## Why YouTube's embedded player, not raw audio extraction

YouTube's API Services Terms don't allow pulling audio streams out of
their videos for playback in a custom player — that's how "stream
ripper" tools work, and it's against their terms. This app instead
embeds YouTube's own player (kept visible, as required) and uses the
Data API only for search metadata and thumbnails. It's the same pattern
legitimate YouTube-based music apps use.

## Get a YouTube Data API v3 key

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a project (or pick an existing one).
3. Go to **APIs & Services → Library**, search for **YouTube Data API v3**,
   and enable it.
4. Go to **APIs & Services → Credentials → Create Credentials → API key**.
5. Copy the key. The free tier is generous for personal use (10,000 quota
   units/day; each search costs ~100 units).

## Run it

```bash
npm install
npm run dev
```

Open the local URL Vite prints. If no key is saved yet you'll land on a
"Connect YouTube" screen — paste your key there. It's stored only in
your browser's `localStorage` (see `src/App.jsx`), or you can drop it
into `.env.local` as `VITE_YOUTUBE_API_KEY=...` so it's pre-filled.

## Build for production

```bash
npm run build
npm run preview
```

## Structure

- `src/App.jsx` — shows the onboarding screen until a key is saved, then
  renders `LiveApp`; owns the settings modal
- `src/LiveApp.jsx` — home shelves, search, radio stations, and a saved
  library, all backed by `src/lib/youtube.js` (YouTube Data API v3 client)
- `src/hooks/useYouTubePlayer.js` — wraps the YouTube IFrame Player API:
  load/play/pause/seek/volume, polled current time & duration
- `src/components/LiveNowPlayingBar.jsx` — transport bar with the visible
  video stage (`VideoStage.jsx`) the player attaches to, plus a save/heart
  toggle for the current track
- `src/components/ResultsGrid.jsx` — shelf/grid of search results with
  thumbnails and per-track save toggle
- `src/lib/favorites.js` — persists saved tracks to `localStorage`

## Notes & limits

- Some videos block embedding (the now-playing bar surfaces a playback
  error if so) — skip to another track.
- Curated shelf and radio-station queries live at the top of
  `src/LiveApp.jsx` (`CURATED`, `RADIO_SEED_QUERIES`) — edit those
  strings to change what loads.
- Quota: each shelf load and each search does 1 search call + 1 details
  call. Keep an eye on usage in Cloud Console if you search a lot.
