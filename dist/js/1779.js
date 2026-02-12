"use strict";

(self["webpackChunkstart_template_multipage"] = self["webpackChunkstart_template_multipage"] || []).push([ [ 1779 ], {
    1779: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        const interfaceTranslations = {
            selectedCountryAriaLabel: "Odabrana zemlja",
            noCountrySelected: "Zemlja nije odabrana",
            countryListAriaLabel: "Lista zemalja",
            searchPlaceholder: "Pretraži",
            clearSearchAriaLabel: "Očisti pretragu",
            searchEmptyState: "Nema pronađenih rezultata",
            searchSummaryAria(count) {
                if (count === 0) return "Nema pronađenih rezultata";
                const mod10 = count % 10;
                const mod100 = count % 100;
                if (mod10 === 1 && mod100 !== 11) return `Pronađen ${count} rezultat`;
                const isFew = mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14);
                if (isFew) return `Pronađena ${count} rezultata`;
                return `Pronađeno ${count} rezultata`;
            }
        };
        const __WEBPACK_DEFAULT_EXPORT__ = interfaceTranslations;
    }
} ]);