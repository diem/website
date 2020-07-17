---
id: admin-mod
title: 'Admin Module'
sidebar_label: Admin Module

---

> 
> Note: This section will be updated with the next version of this document. 
>



## Localization

The wallet UI is fully translatable using standard React i18n library [react-i18next](https://react.i18next.com/). All texts are mapped in JSON files located at <code>frontend/src/locales/LANGUAGE</code>. To generate new translations, a script is available for auto-generating new translations using a third-party translation service or exporting all existing text into a CSV file for manual translation. Located at <code>scripts/generate_i18n.py</code> are usage example for translating from English to Spanish: <code>./scripts/generate_i18n.py -s en -d es -a</code> this will use EN JSON files located at <code>frontend/src/locales/en</code> and generate new JSON files at <code>frontend/src/locales/es</code>. Instructions for using the newly generated files will be shown upon completing these steps:

      1. Add `import ES from "./es";` to frontend/src/locales/index.ts

      2. Add `es: ES;` to the default Resource object in there

To extract translations into a CSV file for manual translations, you can use the export flag:

<code>./scripts/generate_i18n.py -s en -d es -e ./english_texts.csv</code>

To import manually translated CSV you can use the import flag:

<code>./scripts/generate_i18n.py -s en -d es -i ./english_texts.csv</code>
