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
	});
});
