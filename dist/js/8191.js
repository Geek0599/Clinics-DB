"use strict";

(self["webpackChunkstart_template_multipage"] = self["webpackChunkstart_template_multipage"] || []).push([ [ 8191 ], {
    8191: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        const interfaceTranslations = {
            selectedCountryAriaLabel: "Țara selectată",
            noCountrySelected: "Nicio țară selectată",
            countryListAriaLabel: "Lista țărilor",
            searchPlaceholder: "Căutare",
            clearSearchAriaLabel: "Șterge căutarea",
            searchEmptyState: "Nici un rezultat gasit",
            searchSummaryAria(count) {
                if (count === 0) return "Nici un rezultat gasit";
                if (count === 1) return "1 rezultat găsit";
                const isFew = count % 100 >= 1 && count % 100 <= 19;
                if (isFew) return `${count} rezultate găsite`;
                return `${count} de rezultate găsite`;
            }
        };
        const __WEBPACK_DEFAULT_EXPORT__ = interfaceTranslations;
    }
} ]);