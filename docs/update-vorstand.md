# Update Vorstand

The Vorstand data is specified in `/data/vorstand.yml`.
The format is quite self explanatory (`position`, `name`, `activeSince`, `profession`, `image`).
`image` references to `/static/images/vorstand/`.
The order is as in the data file.

## Technical details

Vorstand gets rendered via the shortcode `{{< vorstand >}}` (from `/layouts/shortcodes/vorstand.html`)
