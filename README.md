# Google Reader Keys
This is a Tiny Tiny RSS plugin to have keyboard shortcuts in the style
of the long-since defunct Google Reader, but with extra tweaks for later
Tiny Tiny RSS functionality.

## Installation
Assuming that you're using the recommended Docker Compose setup, then
the easiest way to install the plugin `init.php` file is to use these docker
commands.  This assumes that the current directory is where this README.md
and the init.php are:

    ```sh
    docker exec ttrss-docker_app_1 /bin/mkdir /var/www/html/tt-rss/plugins.local/googlereaderkeys
    docker cp init.php ttrss-docker_app_1:/var/www/html/tt-rss/plugins.local/googlereaderkeys
    docker exec ttrss-docker_app_1 /bin/chown -R app:app /var/www/html/tt-rss/plugins.local/googlereaderkeys
    docker exec ttrss-docker_app_1 /bin/chmod -R og+rX /var/www/html/tt-rss/plugins.local/googlereaderkeys
    ```

If you're not using the Docker Compose setup then you'll have to execute
the non-Docker equivalent.  The key thing is to:

    1. Make a directory for this plugin, called `googlereaderkeys` (not
       anything else, it has to match up with the class name in
       init.php) inside your `plugins.local` directory.
    1. Copy the `init.php` file from here into that new directory.
    1. Ensure the owner and permissions are such that your web server
       can access the directory and file.

Now if you reload tt-rss in your browser and check the Plugins part of
Preferences you should have a "googlereaderkeys" entry that you can
activate.
