"use strict";

(self["webpackChunkstart_template_multipage"] = self["webpackChunkstart_template_multipage"] || []).push([ [ 6299 ], {
    6299: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        const interfaceTranslations = {
            selectedCountryAriaLabel: "Spremeni državo, izbrano ${countryName} (${dialCode})",
            noCountrySelected: "Izberi državo",
            countryListAriaLabel: "Seznam držav",
            searchPlaceholder: "Išči",
            clearSearchAriaLabel: "Počisti iskanje",
            searchEmptyState: "Ni rezultatov",
            searchSummaryAria(count) {
                if (count === 0) return "Ni rezultatov";
                const mod100 = count % 100;
                if (mod100 === 1) return `Najden ${count} rezultat`;
                if (mod100 === 2) return `Najdena ${count} rezultata`;
                if (mod100 === 3 || mod100 === 4) return `Najdeni ${count} rezultati`;
                return `Najdenih ${count} rezultatov`;
            }
        };
        const __WEBPACK_DEFAULT_EXPORT__ = interfaceTranslations;
    }
} ]);