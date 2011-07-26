=== GFontr, Google WebFont  ===
Tags: beta, fonts, webfont, Google WebFont
Contributors: Benoit Gilloz
Tested up to: 3.3
Requires at least: 2.9
Stable tag: trunk

== Description ==
This plugin provides an easy way to include fonts from Google WebFont API.

This plugin does not write CSS for you but call all the fonts selected in the backend page, making them easy for you to use by just changing your CSS file.

== Changelog ==

= 1.2 =
* Change the admin javascript to only load on the plugin settings page after some slow down reports. No new fonts in this one sorry, but the lack of api to get the list of fonts makes it very difficult to update.
* Corrected a small bug in php (undefined index in array)

= 1.1 =
* Update font list with latest from the Google font directory

= 1.0 =
* Fix a bug where you could not unselect a font if it was the only one included. 

= Beta =
* First release

== Installation ==

1. Upload to your plugins folder, usually `wp-content/plugins/`
2. Activate the plugin on the plugin screen.
3. Navigate to Appearance ... Fonts to select the fonts you want.
4. Update your CSS file to use the fonts previously selected.

