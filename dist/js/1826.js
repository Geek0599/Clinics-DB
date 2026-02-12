"use strict";

(self["webpackChunkstart_template_multipage"] = self["webpackChunkstart_template_multipage"] || []).push([ [ 1826 ], {
    1826: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        const interfaceTranslations = {
            selectedCountryAriaLabel: "Vybraná země",
            noCountrySelected: "Není vybrána žádná země",
            countryListAriaLabel: "Seznam zemí",
            searchPlaceholder: "Vyhledat",
            clearSearchAriaLabel: "Vymazat vyhledávání",
            searchEmptyState: "Nebyly nalezeny žádné výsledky",
            searchSummaryAria(count) {
                if (count === 0) return "Nebyly nalezeny žádné výsledky";
                if (count === 1) return "Nalezen 1 výsledek";
                if (count >= 2 && count <= 4) return `Nalezeny ${count} výsledky`;
                return `Nalezeno ${count} výsledků`;
            }
        };
        const __WEBPACK_DEFAULT_EXPORT__ = interfaceTranslations;
    }
} ]);