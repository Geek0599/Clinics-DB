"use strict";

(self["webpackChunkstart_template_multipage"] = self["webpackChunkstart_template_multipage"] || []).push([ [ 6504 ], {
    6504: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        const interfaceTranslations = {
            selectedCountryAriaLabel: "Pakeisti šalį, pasirinkta ${countryName} (${dialCode})",
            noCountrySelected: "Pasirinkite šalį",
            countryListAriaLabel: "Šalių sąrašas",
            searchPlaceholder: "Paieška",
            clearSearchAriaLabel: "Išvalyti paiešką",
            searchEmptyState: "Rezultatų nerasta",
            searchSummaryAria(count) {
                if (count === 0) return "Rezultatų nerasta";
                if (count === 1) return "Rastas 1 rezultatas";
                const mod10 = count % 10;
                const mod100 = count % 100;
                if (mod10 === 1 && mod100 !== 11) return `Rasti ${count} rezultatas`;
                if (mod10 >= 2 && mod10 <= 9 && !(mod100 >= 11 && mod100 <= 19)) return `Rasti ${count} rezultatai`;
                return `Rasta ${count} rezultatų`;
            }
        };
        const __WEBPACK_DEFAULT_EXPORT__ = interfaceTranslations;
    }
} ]);