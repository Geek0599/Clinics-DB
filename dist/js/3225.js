"use strict";

(self["webpackChunkstart_template_multipage"] = self["webpackChunkstart_template_multipage"] || []).push([ [ 3225 ], {
    3225: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        const interfaceTranslations = {
            selectedCountryAriaLabel: "Промени земљу, изабрано ${countryName} (${dialCode})",
            noCountrySelected: "Изабери земљу",
            countryListAriaLabel: "Листа земаља",
            searchPlaceholder: "Претрага",
            clearSearchAriaLabel: "Обриши претрагу",
            searchEmptyState: "Нема резултата",
            searchSummaryAria(count) {
                if (count === 0) return "Нема резултата";
                const mod10 = count % 10;
                const mod100 = count % 100;
                if (mod10 === 1 && mod100 !== 11) return `Пронађен ${count} резултат`;
                const isFew = mod10 >= 2 && mod10 <= 4 && !(mod100 >= 12 && mod100 <= 14);
                if (isFew) return `Пронађена ${count} резултата`;
                return `Пронађено ${count} резултата`;
            }
        };
        const __WEBPACK_DEFAULT_EXPORT__ = interfaceTranslations;
    }
} ]);