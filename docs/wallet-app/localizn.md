---
id: localizn
title: 'Localization'
sidebar_label: Localization

---

> 
> Note: This section will be updated with the next version of this document. 
>



The wallet UI is fully translatable using standard React i18n library [react-i18next](https://react.i18next.com/). All texts are mapped in JSON files located at `frontend/src/locales/LANGUAGE`. 

To generate new translations, a script is available for auto-generating new translations using a third-party translation service or exporting all existing text into a CSV file for manual translation. Located at `scripts/generate_i18n.py` are usage example for translating from English to Spanish: `./scripts/generate_i18n.py -s en -d es -a` this will use EN JSON files located at `frontend/src/locales/en` and generate new JSON files at `frontend/src/locales/es`. Instructions for using the newly generated files will be shown upon completing these steps:   

1. Add `import ES from "./es";` to `frontend/src/locales/index.ts`

2. Add `es: ES;` to the default Resource object in there


To extract translations into a CSV file for manual translations, you can use the export flag:
`./scripts/generate_i18n.py -s en -d es -e ./english_texts.csv`

To import manually translated CSV you can use the import flag:
`./scripts/generate_i18n.py -s en -d es -i ./english_texts.csv`