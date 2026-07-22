# CLAUDE.md

Tiny Tiny RSS plugin that remaps keyboard shortcuts in the style of Google Reader: `init.php` overrides the hotkey map (`HOOK_HOTKEY_MAP`, `HOOK_HOTKEY_INFO`), and `init.js` registers custom client-side actions.

## tt-rss Hotkey Action Reference

When binding a key to a tt-rss action, or checking whether an action exists, consult `docs/tt-rss-hotkey-actions.md` first. It lists every hotkey action upstream supports, with default bindings, descriptions, and the key sequence syntax, pinned to an upstream commit recorded in that file together with the source URLs.

If the pinned commit may be stale, re-fetch the source files listed there, swapping the pinned commit for the current upstream HEAD, then regenerate the list and update the recorded commit id, commit date, and retrieval date.
