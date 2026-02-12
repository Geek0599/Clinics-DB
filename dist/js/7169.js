"use strict";

(self["webpackChunkstart_template_multipage"] = self["webpackChunkstart_template_multipage"] || []).push([ [ 7169 ], {
    7169: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        const interfaceTranslations = {
            selectedCountryAriaLabel: "Επιλεγμένη χώρα",
            noCountrySelected: "Δεν έχει επιλεγεί χώρα",
            countryListAriaLabel: "Κατάλογος χωρών",
            searchPlaceholder: "Αναζήτηση",
            clearSearchAriaLabel: "Εκκαθάριση αναζήτησης",
            searchEmptyState: "Δεν βρέθηκαν αποτελέσματα",
            searchSummaryAria(count) {
                if (count === 0) return "Δεν βρέθηκαν αποτελέσματα";
                if (count === 1) return "Βρέθηκε 1 αποτέλεσμα";
                return `Βρέθηκαν ${count} αποτελέσματα`;
            }
        };
        const __WEBPACK_DEFAULT_EXPORT__ = interfaceTranslations;
    }
} ]);