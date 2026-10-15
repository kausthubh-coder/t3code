# X thread

Five posts. Each one is under 280 characters. The image file for each post is listed under it (all in `audit/mockups/`).

---

**1/**

Ran a design audit on T3 Code with Critly. The look holds up. The paths you hit 200 times a day don't.

Type "link pull" in the command palette: no row is highlighted, but Enter still runs one. It copies the thread ID. The exact title match ranks second.

Image: `01-palette-1600x900.png`

---

**2/**

The sidebar fits 5½ threads, and every row ends in the same model icon. Done, waiting on an approval and failed all look the same.

A 36px row already exists in the code. Group by project, add one status glyph, put "needs you" on top: 11 threads in the same height.

Image: `02-sidebar-status-1600x900.png` (or `02-sidebar-status-1200x1200.png` if you want it square in the feed)

---

**3/**

A turn ends with a paragraph of prose. What I want to know: which files changed, did the tests pass, what ran, can I undo it.

T3 already saves a git checkpoint every turn. Put it on a card with Review diff, Commit and Undo turn.

Image: `03-turn-review-1600x900.png`

---

**4/**

If you run several agents at once, you click through threads to check on each one.

One Running screen, with the next action on every card: approve the command, implement the plan, review the diff, resume after the usage limit.

Image: `04-running-overview-1600x900.png`

---

**5/**

Numbers from a prod build: a warm thread switch takes 280–430ms (800ms cold). Cmd+K takes 114–212ms to paint, then fades for 200ms. A keystroke in the composer costs 2x a plain textarea.

You don't see that in a screenshot. You feel it by lunch.

Image: none. Or attach a crop of the report's performance section.

---

Optional reply with the source, if you push the branch:

> Full audit, with file:line for every finding, and the mockup sources: github.com/kausthubh-coder/t3code/tree/claude/you-re-working-in-my-fork-of-t3-code-git-2be7a7-zs2jr5/audit
