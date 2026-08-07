# FZ Studio V2 — Phase 1 Starter

This is a clean rebuild of the FZ Studio website for GitHub Pages / Jekyll.

## Phase 1 scope

Navigation:
- Home
- Our Story
- Studio
- Gallery
- Art Prints
- Studio Materials
- Contact
- Bag icon (visual placeholder only)

Removed from V1:
- Search
- Account / Firebase Authentication
- Greeting Cards
- Old cart JavaScript
- Old checkout page
- Old PayPal JavaScript
- Old newsletter endpoint
- Duplicate JSON product data

## Visual direction

The starter intentionally follows the existing FZ Studio visual language:
- white background
- Helvetica Neue / Helvetica / Arial
- light typography
- 18px desktop navigation
- 54px desktop logo height
- generous white space
- Home contains one featured artwork only
- simple responsive mobile navigation

The included `logo-reference.jpg` and `home-hero-reference.jpg` are temporary crops
from the current website screenshot. Replace them later with the original high-resolution
assets from the V1 project.

## Security rule

Never commit:
- PayPal Client Secret
- email passwords
- private API secrets
- private keys
- service account credentials

Client-side integrations will be reviewed individually before they are added.

## Local structure

```
_config.yml
_data/navigation.yml
_includes/header.html
_includes/footer.html
_layouts/default.html
assets/css/main.css
assets/js/navigation.js
assets/images/
index.html
our-story.html
studio.html
gallery.html
art-prints.html
studio-materials.html
contact.html
```

## Base URL

For the temporary GitHub project repository, `_config.yml` currently uses:

`baseurl: "/fz-studio-v2"`

When the V2 site eventually replaces the root `Leondecoding.github.io` site,
change that line to:

`baseurl: ""`
