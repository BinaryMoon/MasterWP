# [MasterWP Website](https://masterwp.co)

A Jekyll site that powers the [MasterWP](https://masterwp.co) website.

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

**Stay tuned**
