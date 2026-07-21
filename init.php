<?php
class GoogleReaderKeys extends Plugin {

	function about() {
		return array(1.0,
			"Keyboard hotkeys emulate Google Reader",
			"markwaters");
	}

	function init($host) {
		$host->add_hook($host::HOOK_HOTKEY_MAP, $this);
		$host->add_hook($host::HOOK_HOTKEY_INFO, $this);
	}

	function get_js() {
		return file_get_contents(__DIR__ . "/init.js");
	}

	function hook_hotkey_map($hotkeys) {

		$hotkeys["j"]		= "next_article_noscroll";
		$hotkeys["k"]		= "prev_article_noscroll";
		$hotkeys["J"]		= "next_unread_feed";
		$hotkeys["K"]		= "prev_unread_feed";
		$hotkeys["N"]		= "next_feed";
		$hotkeys["P"]		= "prev_feed";
		$hotkeys["v"]		= "open_in_new_window";
		$hotkeys["r"]		= "feed_refresh";
		$hotkeys["m"]		= "toggle_unread";
		$hotkeys["o"]		= "toggle_expand";
		$hotkeys["\r|Enter"]	= "toggle_expand";
		$hotkeys["?"]		= "help_dialog";
		$hotkeys[" |Space"]	= "next_headlines_page";
		$hotkeys["(38)|Up"]	= "article_scroll_up";
		$hotkeys["(40)|Down"]	= "article_scroll_down";
		$hotkeys["y"]		= "open_in_background_tab";
		$hotkeys["b"]		= "open_in_background_tab";

		return $hotkeys;
	}

	function hook_hotkey_info($hotkeys) {
		$hotkeys[__("Article")]["open_in_background_tab"] = __("Open in background tab");

		return $hotkeys;
	}

	function api_version() {
		return 2;
	}

}
