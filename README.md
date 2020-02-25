# [MasterWP Website](https://masterwp.co)

A Jekyll site that powers the [MasterWP](https://masterwp.co) website.

## Adding Events and Conferences

The events page lists events that are suitable for WordPress Masters. Obviously this covers WordPress conferences, but it also covers things like PHP and Javascript conferences. Meetups on running a small business. Online webinars about accessibility. etc.

Please feel free to make a pull request to your event. We reserve the right to pick and choose what events we include. The project owners decision is final.

To add a new [event/ conference](https://masterwp.co/events/) we need to add a new even markdown file to the `_events` directory. The filename should be unique to your event. The string should be lowercase with spaces replaced with dashes. The year (or date if more than one event per year) should be added at the end.

For example _WordCamp US 2020_ - will use the markdown file `wordcamp-us-2020.md`.

The file should look something like this:

```
---
website: https://2019.europe.wordcamp.org/
title: WordCamp Europe 2019
country_code: de
location: Berlin, Germany
description: Join the European WordPress Community for 3 days of learning, sharing and fun.
date_start: 2019-06-20
date_end: 2019-06-22
---
```

### date_start and date_end

The date fields should be in the format `YYYY-MM-DD`.

The `date_start` field is always required. The `date_end` field is optional. This should only be used if the event is multiple days. The event details will adjust themselves automatically based on the information provided.

### location and country_code

The `location` field is displayed under the event title.

The `country_code` field is used to display the flag image. You can find the country code for the relevant flag in the [flags folder](https://github.com/BinaryMoon/MasterWP/tree/master/assets/flags).

## Adding a new theme

Themes are listed on the [WordPress themes](https://masterwp.co/wordpress-themes/) page.

### 1. Adding a theme.md

To add a new theme we need to add a new theme markdown file to the `_themes` directory. The filename should match the theme title - however it should be lower case, and have spaces replaced by dashes. Any other punctuation should be removed. There should be no other words than the theme name.

For example: `Mimbo Pro` - will use the markdown file `mimbo-pro.md`.

The file should contain all of the properties needed to describe a theme. An example is included below. You can also look at [existing theme files](https://github.com/BinaryMoon/MasterWP/tree/master/_themes) to see how they are setup.

```
---
title: Theme Name
theme_info_url: http://urlForMoreThemeInformation.com
theme_demo_url: http://urlForMoreThemeDemo.com
developer: prothemedesign
intro: A one sentence description of the theme.
theme_tags: magazine slider
price: 99
---
Theme description in markdown format - HTML is also supported.
```

The supported theme tags are:

**Theme Type**
* blog
* business
* charity
* magazine
* portfolio
* restaurant

**Theme Features**
* jetpack
* page-builder
* projects
* slider
* woo-commerce

### 2. Adding theme images

To be added to the site themes need a series of images. These images will live in the `assets/themes/theme-name/` directory (where theme-name matches the name used in your theme.md file).

The required images are a 200x200 icon (called icon.png) and your themes screenshot (a screenshot of the top view of the theme).

You can also add further images and include them in your themes description if you wish.

## Adding a new theme shop.

Theme shops are listed on the [theme developers page](https://masterwp.co/wordpress-theme-developers/) - and have their own individual pages such as this one for [Pro Theme Design](https://masterwp.co/wordpress-theme-developers/pro-theme-design/).

To add a theme shop you need a theme-shop.md file in the [_theme-developers](https://github.com/BinaryMoon/MasterWP/tree/master/_theme-developers) directory.

You can see an [example theme-shop.md file here](https://raw.githubusercontent.com/BinaryMoon/MasterWP/master/_theme-developers/pro-theme-design.md).

The required front matter is:

* title: Theme shop name
* website: Absolute website url for theme shop
* developer: Url friendly slug for developer name
* twitter: twitter handle (no @ or twitter url - just the name)
* intro: A one sentence intro for the theme shop. A tagline would be perfect.

After the front matter you can include whatever text you like to describe the themes you produce. This content should use markdown to display correctly.

Below that all themes with the same developer slug will be included automatically.
