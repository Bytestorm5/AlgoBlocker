# AlgoBlocker

AlgoBlocker is a minimal browser extension for Firefox that attempts to hide 
algorithmically recommended content on YouTube and Reddit. It works by injecting
simple content scripts that remove DOM elements commonly associated with
recommendation feeds.

## Installation

1. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on** and select the `manifest.json` file in this
   repository.
3. Reload the YouTube or Reddit tabs to see the algorithm driven sections
   disappear.

This is just a proof of concept. The selectors used are brittle and may break
as the sites update their markup.
