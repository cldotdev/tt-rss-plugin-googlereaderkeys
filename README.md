# Google Reader Keys
This is a Tiny Tiny RSS plugin to have keyboard shortcuts in the style
of the long-since defunct Google Reader, but with extra tweaks for later
Tiny Tiny RSS functionality.

## Installation
Assuming that you're using the recommended Docker Compose setup and that
the current directory is where this `README.md` and the `init.php` are, then
the easiest way to install the plugin is the following docker commands.


```sh
$ docker exec ttrss-docker_app_1 /bin/mkdir /var/www/html/tt-rss/plugins.local/googlereaderkeys
$ docker cp init.php ttrss-docker_app_1:/var/www/html/tt-rss/plugins.local/googlereaderkeys
$ docker cp init.js ttrss-docker_app_1:/var/www/html/tt-rss/plugins.local/googlereaderkeys
$ docker exec ttrss-docker_app_1 /bin/chown -R app:app /var/www/html/tt-rss/plugins.local/googlereaderkeys
$ docker exec ttrss-docker_app_1 /bin/chmod -R og+rX /var/www/html/tt-rss/plugins.local/googlereaderkeys
```

If you're not using the Docker Compose setup then you'll have to execute
the non-Docker equivalent commands.  The key thing is to:

1. Make a directory for this plugin, called `googlereaderkeys` (not
   anything else, it has to match up with the class name in
   init.php) inside your `plugins.local` directory.
1. Copy the `init.php` and `init.js` files from here into that new
   directory.
1. Ensure the owner and permissions are such that your web server
   can access the directory and file.

Now if you reload tt-rss in your browser and check the Plugins part of
Preferences you should have a "googlereaderkeys" entry that you can
activate.

## Shortcuts
Assuming this document is up to date, then the changed/added shortcuts
are:

| Key       | Function                         |
| :-------- | :------------------------------- |
| j         | next_article_noscroll            |
| k         | prev_article_noscroll            |
| J         | next_unread_feed                 |
| K         | prev_unread_feed                 |
| N         | next_feed                        |
| P         | prev_feed                        |
| v         | open_in_new_window               |
| r         | feed_refresh                     |
| m         | toggle_unread                    |
| o         | toggle_expand                    |
| Enter     | toggle_expand                    |
| ?         | help_dialog                      |
| Space     | next_article                     |
| Up        | article_scroll_up                |
| Down      | article_scroll_down              |
| y         | open_in_background_tab           |
| b         | open_in_background_tab           |

If in doubt check the `init.php` file, it should be as obvious as this
table.

The `open_in_background_tab` action is provided by this plugin (in
`init.js`): it opens the active article's link in a background tab by
synthesizing a Ctrl-click (Cmd-click on macOS) and marks the article as
read.
