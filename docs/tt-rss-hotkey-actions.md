# tt-rss Hotkey Actions

All hotkey actions supported by upstream Tiny Tiny RSS, extracted from the sources listed below. Use this list when binding keys in `init.php` (`hook_hotkey_map`).

## Source

- Repository: <https://github.com/tt-rss/tt-rss> (branch `main`)
- Commit: `333d735bd0ee8bd664c6d4b645690f179d284a55` (committed 2026-07-19)
- Retrieved: 2026-07-22
- Files:
  - [`js/App.js`](https://raw.githubusercontent.com/tt-rss/tt-rss/333d735bd0ee8bd664c6d4b645690f179d284a55/js/App.js): action implementations (`this.hotkey_actions[...]`) and key event parsing
  - [`classes/RPC.php`](https://raw.githubusercontent.com/tt-rss/tt-rss/333d735bd0ee8bd664c6d4b645690f179d284a55/classes/RPC.php): default key map (`get_hotkeys_map()`) and help dialog descriptions (`get_hotkeys_info()`)

`App.js` is the only upstream file that registers hotkey actions. Plugins can add their own with `App.hotkey_actions["name"] = function () {...}`, which this plugin does in `init.js`.

## Key Sequence Syntax

Bindings in `get_hotkeys_map()` (and in `hook_hotkey_map`) use this syntax:

- A printable character matches the typed character: `k`, `?`, `Q`.
- `(nn)` matches the keydown keycode `nn`, for non-printable keys: `(40)` is Down.
- Modifier prefixes for `(nn)` bindings: `*` Shift, `^` Ctrl, `+` Alt, `%` Meta.
- A `{3}` or `{C}` prefix restricts the binding to 3-panel or combined mode.
- Two-part sequences are separated by a space (`f r`): the first key is a prefix, shown in the on-screen command line, and times out after 3 seconds.
- Anything after `|` is a display label for the help dialog and is stripped before matching: `*(34)|Shift+PgDn` matches Shift plus keycode 34.

## Actions

Grouping and descriptions follow `get_hotkeys_info()`, which is what the help dialog (`?`) shows. Default bindings come from `get_hotkeys_map()`; "(none)" means the action exists but has no default binding.

### Navigation

| Action | Default binding | Description |
| --- | --- | --- |
| `next_feed` | `k` | Open next feed |
| `next_unread_feed` | `K` | Open next unread feed |
| `prev_feed` | `j` | Open previous feed |
| `prev_unread_feed` | `J` | Open previous unread feed |
| `next_article_or_scroll` | `{3}(40)\|Down` | Open next article (in combined mode, scroll down) |
| `prev_article_or_scroll` | `{3}(38)\|Up` | Open previous article (in combined mode, scroll up) |
| `next_headlines_page` | (none) | Scroll headlines by one page down |
| `prev_headlines_page` | (none) | Scroll headlines by one page up |
| `next_article_noscroll` | `n`, `^(40)\|Ctrl+Down` | Open next article |
| `prev_article_noscroll` | `p`, `^(38)\|Ctrl+Up` | Open previous article |
| `next_article_noexpand` | (none) | Move to next article (don't expand) |
| `prev_article_noexpand` | (none) | Move to previous article (don't expand) |
| `search_dialog` | `/` | Show search dialog |
| `cancel_search` | `\` | Cancel active search |

### Article

| Action | Default binding | Description |
| --- | --- | --- |
| `toggle_mark` | `s` | Toggle starred |
| `toggle_publ` | `S` | Toggle published |
| `toggle_unread` | `u` | Toggle unread |
| `edit_tags` | `T` | Edit tags |
| `open_in_new_window` | `o` | Open in new window |
| `catchup_below` | `c p` | Mark below as read |
| `catchup_above` | `c n` | Mark above as read |
| `article_scroll_down` | `*(40)\|Shift+Down` | Scroll down |
| `article_scroll_up` | `*(38)\|Shift+Up` | Scroll up |
| `article_page_down` | `N`, `*(34)\|Shift+PgDn` | Scroll down page |
| `article_page_up` | `P`, `*(33)\|Shift+PgUp` | Scroll up page |
| `select_article_cursor` | `r` | Select article under cursor |
| `email_article` | `e` | Email article |
| `close_article` | `a q` | Close/collapse article |
| `toggle_expand` | (none) | Toggle article expansion (combined mode); not implemented at this commit, see Discrepancies |
| `toggle_widescreen` | `a W` | Toggle widescreen mode |
| `toggle_full_text` | `a e` | Toggle full article text via Readability |
| `article_span_grid` | `a s` | Toggle spanning the active article across grid columns; missing from `get_hotkeys_info()`, see Discrepancies |

### Article Selection

| Action | Default binding | Description |
| --- | --- | --- |
| `select_all` | `a a` | Select all articles |
| `select_unread` | `a u` | Select unread |
| `select_marked` | `a U` | Select starred |
| `select_published` | `a p` | Select published |
| `select_invert` | `a i` | Invert selection |
| `select_none` | `a n` | Deselect everything |

### Feed

| Action | Default binding | Description |
| --- | --- | --- |
| `feed_refresh` | `f r` | Refresh current feed |
| `feed_unhide_read` | `f a` | Un/hide read feeds |
| `feed_subscribe` | `f s` | Subscribe to feed |
| `feed_edit` | `f e` | Edit feed |
| `feed_catchup` | `f q` | Mark as read |
| `feed_reverse` | `f x` | Reverse headlines |
| `feed_toggle_vgroup` | `f g` | Toggle headline grouping |
| `feed_toggle_grid` | `f G` | Toggle grid view |
| `feed_debug_update` | `f D` | Debug feed update |
| `feed_debug_viewfeed` | `f %` | Debug viewfeed() |
| `catchup_all` | `Q` | Mark all feeds as read |
| `cat_toggle_collapse` | `x` | Un/collapse current category |
| `toggle_cdm_expanded` | `f c` | Toggle auto expand in combined mode |
| `toggle_combined_mode` | `f C` | Toggle combined mode |

### Go To

| Action | Default binding | Description |
| --- | --- | --- |
| `goto_all` | `g a` | All articles |
| `goto_fresh` | `g f` | Fresh |
| `goto_marked` | `g s` | Starred |
| `goto_published` | `g p` | Published |
| `goto_read` | `g r` | Recently read |
| `goto_prefs` | `g P` | Preferences |

### Other

| Action | Default binding | Description |
| --- | --- | --- |
| `create_label` | `c l` | Create label |
| `create_filter` | `c f` | Create filter |
| `collapse_sidebar` | `c s` | Un/collapse sidebar |
| `help_dialog` | `?` | Keyboard shortcuts help |

## Discrepancies at This Commit

- `toggle_expand` is listed in `get_hotkeys_info()` but has no implementation in `App.js`, so binding a key to it does nothing unless a plugin provides one. Verified missing on both this commit and v25.05 (`9d4e9453`). This plugin binds `o` and Enter to it in `init.php` and provides its own implementation in `init.js`.
- `article_span_grid` is implemented in `App.js` and bound to `a s` by default, but missing from `get_hotkeys_info()`, so the help dialog does not show it.
