---
version: alpha
name: BMW
description: Dark premium surfaces. Precise German engineering.
colors:
  primary: "#FFFFFF"
  secondary: "#A8B0BC"
  tertiary: "#1C69D4"
  neutral: "#000000"
  surface: "#141619"
  on-primary: "#000000"
typography:
  display:
    fontFamily: Inter
    fontSize: 5rem
    fontWeight: 700
    letterSpacing: "-0.02em"
  h1:
    fontFamily: Inter
    fontSize: 2.4rem
    fontWeight: 600
  body:
    fontFamily: Inter
    fontSize: 0.98rem
    lineHeight: 1.6
  label:
    fontFamily: Inter
    fontSize: 0.72rem
    fontWeight: 600
    letterSpacing: "0.1em"
rounded:
  sm: 0px
  md: 2px
  lg: 4px
spacing:
  sm: 8px
  md: 16px
  lg: 32px
components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
    padding: 12px 20px
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.lg}"
    padding: 24px
---
## Overview

BMW: dark premium surfaces, disciplined sans, blue accent, cinematic photography.

## Colors

The palette is built around high-contrast neutrals and a single accent that drives interaction.

- **Primary (`#FFFFFF`):** Headlines and core text.
- **Secondary (`#A8B0BC`):** Borders, captions, and metadata.
- **Tertiary (`#1C69D4`):** The sole driver for interaction. Reserve it.
- **Neutral (`#000000`):** The page foundation.

## Typography

- **display:** Inter 5rem
- **h1:** Inter 2.4rem
- **body:** Inter 0.98rem
- **label:** Inter 0.72rem

## Do's and Don'ts

- **Do** use Tertiary for exactly one action per screen.
- **Do** let Neutral carry the composition — negative space is a feature.
- **Don't** introduce gradients. This system is flat on purpose.
- **Don't** mix Tertiary with alternate accents; the single-accent rule is load-bearing.
