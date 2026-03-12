# RPG Adventure Generator

A simple Astro site that generates random RPG adventure ideas from your own list of options.

## Setup

```bash
cd rpg-adventure-gen
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Adding your options

Edit **`src/data/options.ts`**. You’ll see categories like **Setting**, **Tone**, **Adventure Hook**, and **Stakes**. Each category has an array of `options` with at least a `label`; you can add an optional `description`.

- Add or remove categories by changing the `adventureOptions` array.
- Each category needs: `id`, `title`, and `options` (array of `{ label, description? }`).
- Add as many options per category as you want; the generator picks one at random from each when you click **Generate Adventure**.

## Commands

| Command        | Action                                      |
|----------------|---------------------------------------------|
| `npm run dev`  | Start dev server at `localhost:4321`        |
| `npm run build`| Build the site into `dist/`                 |
| `npm run preview` | Serve the built site locally            |
