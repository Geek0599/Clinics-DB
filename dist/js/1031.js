"use strict";

(self["webpackChunkstart_template_multipage"] = self["webpackChunkstart_template_multipage"] || []).push([ [ 1031 ], {
    1031: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        const interfaceTranslations = {
            selectedCountryAriaLabel: "Избрана държава",
            noCountrySelected: "Няма избрана държава",
            countryListAriaLabel: "Списък на страните",
            searchPlaceholder: "Търсене",
            clearSearchAriaLabel: "Изчистване на търсенето",
            searchEmptyState: "Няма намерени резултати",
            searchSummaryAria(count) {
                if (count === 0) return "Няма намерени резултати";
                if (count === 1) return "Намерен е 1 резултат";
                return `${count} намерени резултата`;
            }
        };
        const __WEBPACK_DEFAULT_EXPORT__ = interfaceTranslations;
    }
} ]);