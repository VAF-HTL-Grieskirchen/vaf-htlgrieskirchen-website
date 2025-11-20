# Update Partner

The Partner data is specified in `/data/partner.yml`.
The format is quite self explanatory (`logo`, `url`).
`image` references to `/static/images/partner/`.
The order is as in the data file.

## Technical details

Partners get rendered via the shortcode `{{< partner >}}` (from `/layouts/shortcodes/partner.html`)
