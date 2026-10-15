# Direction

Subject: T3 Code, a GUI for coding agents. Developers keep it open all day to run, watch and review agent threads.
Job: the conversation and what the agent changed lead; the sidebar says which threads need you; the chrome stays quiet.
Kept: the existing design, described as shipped (stable channel; the blue Dev/Nightly sidebar art is a channel marker, not the brand). Also tried: nothing; this note describes, it does not choose.
References: Codex app, Claude desktop, Conductor, Cursor (the category); Raycast and Linear for "instant and quiet".

## Materials

- Type: the system stack (`-apple-system, Segoe UI, system-ui`) for everything; `ui-monospace` / SF Mono for code, paths, branches and diff counts. Both can be overridden in Settings → Appearance. Sizes in use: 12px for meta and controls, 14px for body and rows, 16px for the prompt on touch, 20–30px for the one hero headline.
- Palette: light canvas zinc-25 `oklch(99.2% 0 0)`, text zinc-800; dark canvas neutral-950 `oklch(14.5% 0 0)`, text neutral-100, sidebar #000. One accent, indigo `oklch(0.488 0.217 264)` light / `oklch(0.571 0.21 264)` dark, for the send button, toggles, focus and the active row. Status: emerald, amber, red; diff adds emerald, deletes red. Provider marks keep their own colors (Claude #d97757).
- Shape: `--radius` 10px, controls 8px (`--control-radius`), dialogs 16px, pills full. Edges come from 1px hairlines (zinc-200 light, 6–8% white dark), a soft composer shadow, and a translucent "glass" (blur 12–16px) on menus and dialogs. A faint SVG grain sits on the canvas.
- Imagery: the product itself: real code, diffs, branch names, file chips. Lucide icons at 16px, stroke 2. No illustrations.
- Signature: the floating composer card with provider, effort and access chips; file and folder chips inline in agent prose; the right-hand thread details card (workspace, editor, git).
- Voice: plain, specific, developer-to-developer. Errors and money: plain and calm, and they say what to do next.
- Density and pace: compact and instant on every operate surface (sidebar, palette, composer, diff); 150ms state transitions on one curve `cubic-bezier(0.4, 0, 0.2, 1)`, press scale 0.97; motion only for rare moments (first run, mobile composer hand-off).

## Standard

Layout, navigation, controls and states follow the platform and Critly's concepts.
