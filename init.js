/* global require, App, Article, Headlines */

require(['dojo/ready'], function (ready) {
	ready(function () {
		App.hotkey_actions["open_in_background_tab"] = function () {
			const id = Article.getActive();
			if (!id) return;

			const hl = Headlines.objectById(id);
			if (!hl || !hl.link) return;

			/* Page JS has no API to open a background tab; the browser only
			   does that for a modifier-click (Ctrl, or Cmd on macOS) on an
			   anchor, so synthesize one. */
			const isMac = /Mac/.test(navigator.platform);

			const anchor = document.createElement("a");
			anchor.href = hl.link;
			anchor.rel = "noopener noreferrer";
			document.body.appendChild(anchor);

			anchor.dispatchEvent(new MouseEvent("click", {
				view: window,
				button: 0,
				ctrlKey: !isMac,
				metaKey: isMac
			}));

			anchor.remove();

			Headlines.toggleUnread(id, 0);
		};

		/* tt-rss no longer implements the built-in toggle_expand action
		   (its hotkey help still lists it), so provide one for combined
		   mode: collapse the active article, or re-expand the last
		   collapsed (or the first visible) one. */
		let lastCollapsedId = 0;

		App.hotkey_actions["toggle_expand"] = function () {
			if (!App.isCombinedMode()) return;

			const active = Article.getActive();

			if (active) {
				lastCollapsedId = active;
				Article.cdmUnsetActive();
			} else {
				const target = (lastCollapsedId && document.getElementById("RROW-" + lastCollapsedId))
					? lastCollapsedId : Headlines.firstVisible();

				if (target) {
					Article.setActive(target);
					Article.cdmMoveToId(target);
				}
			}
		};
	});
});
