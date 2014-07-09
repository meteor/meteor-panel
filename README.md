meteor-panel
============

## Meteor Dev Tools for Chrome

Just a "Hello World" at the moment, doesn't do much!

To run it, load the `meteor-panel` directory out of the repo into Chrome as an unpacked extension, as described here: https://developer.chrome.com/extensions/getstarted#unpacked

A Meteor panel is added to the tabs at the top of the Dev Tools.  The panel is backed by the page in Panel/MeteorPanel.html, which loads whenever the Dev Tools are opened.  To reload the panel during development, close and re-open the Dev Tools.

Note that the Chrome Dev Tools can be docked at the bottom of the window, docked right, or popped out.

To run the Dev Tools on themselves -- to inspect the inspector -- start in the "popped out" mode and then invoke the Dev Tools or JS Console (Command-Option-I or Command-Options-J).
