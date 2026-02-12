"use strict";

(self["webpackChunkstart_template_multipage"] = self["webpackChunkstart_template_multipage"] || []).push([ [ 62 ], {
    62: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        const interfaceTranslations = {
            selectedCountryAriaLabel: "Seçilen ülke",
            noCountrySelected: "Hiçbir ülke seçilmedi",
            countryListAriaLabel: "Ülke listesi",
            searchPlaceholder: "Ara",
            clearSearchAriaLabel: "Aramayı temizle",
            searchEmptyState: "Sonuç bulunamadı",
            searchSummaryAria(count) {
                if (count === 0) return "Sonuç bulunamadı";
                if (count === 1) return "1 sonuç bulundu";
                return `${count} sonuç bulundu`;
            }
        };
        const __WEBPACK_DEFAULT_EXPORT__ = interfaceTranslations;
    }
} ]);