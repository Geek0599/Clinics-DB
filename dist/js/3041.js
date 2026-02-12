"use strict";

(self["webpackChunkstart_template_multipage"] = self["webpackChunkstart_template_multipage"] || []).push([ [ 3041 ], {
    3041: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        const interfaceTranslations = {
            selectedCountryAriaLabel: "Valittu maa",
            noCountrySelected: "Maata ei ole valittu",
            countryListAriaLabel: "Luettelo maista",
            searchPlaceholder: "Haku",
            clearSearchAriaLabel: "Tyhjennä haku",
            searchEmptyState: "Ei tuloksia",
            searchSummaryAria(count) {
                if (count === 0) return "Ei tuloksia";
                if (count === 1) return "1 tulos löytyi";
                return `${count} tulosta löytyi`;
            }
        };
        const __WEBPACK_DEFAULT_EXPORT__ = interfaceTranslations;
    }
} ]);