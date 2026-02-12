"use strict";

(self["webpackChunkstart_template_multipage"] = self["webpackChunkstart_template_multipage"] || []).push([ [ 7484 ], {
    7484: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        const interfaceTranslations = {
            selectedCountryAriaLabel: "Wybrany kraj",
            noCountrySelected: "Nie wybrano kraju",
            countryListAriaLabel: "Lista krajów",
            searchPlaceholder: "Szukaj",
            clearSearchAriaLabel: "Wyczyść wyszukiwanie",
            searchEmptyState: "Nie znaleziono wyników",
            searchSummaryAria(count) {
                if (count === 0) return "Nie znaleziono wyników";
                if (count === 1) return "Znaleziono 1 wynik";
                const isFew = count % 10 >= 2 && count % 10 <= 4 && !(count % 100 >= 12 && count % 100 <= 14);
                if (isFew) return `Znaleziono ${count} wyniki`;
                return `Znaleziono ${count} wyników`;
            }
        };
        const __WEBPACK_DEFAULT_EXPORT__ = interfaceTranslations;
    }
} ]);