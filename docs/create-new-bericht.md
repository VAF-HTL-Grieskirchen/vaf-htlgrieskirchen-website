# Create a new Bericht

## Using Hugo
- `hugo new content content/berichte/yyyy-MM-dd-title/index.md`

This automatically prefills the file with a template.

## Manual
- Create a new folder in `content/berichte` with the format `yyyy-MM-dd-title`.
- Create an `index.md` file in that folder.
- Add the following headers:
```yaml
---
title: ""
date: ""
featured_image: ""
---
```

## Headers
- `title`: Is the title of the page and will be shown centered over the `feature_image`.
- `date`: Is the publish date. Use the ISO 8601 standard (yyyy-MM-ddTHH:mm:ss+01:00 or +02:00 during DST).
- `author`: Is the author that will be shown for berichte. If not specified defaults to "Verein der Absolventen und Förderer der HTL-Grieskirchen".
- `draft`: If set to true, the bericht will not be published. Default `false`.
- `featured_image`: Is the hero and preview image.
- `summary`: Defines a summary independent from the content. If not specified, the content will be used as a summary.

## Format
[Hugo uses Markdown](https://gohugo.io/content-management/formats/#markdown) for the content. Mixture between Markdown and HTML is by default not allowed for security reasons, however Hugo supports some custom Markdown features, that cover a lot of those cases.

## Summary
The start page and the "Berichte" overview page both render a preview for the listed berichte. This summary can be specified via the headers (see section above), or it will use the content. Use `<!--more-->` to cut off, how much should be shown as summary.

## Image gallery
Put images into the folder of the bericht and add `{{< image-gallery >}}`.
