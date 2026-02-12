"use strict";

(self["webpackChunkstart_template_multipage"] = self["webpackChunkstart_template_multipage"] || []).push([ [ 4335 ], {
    4335: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        const interfaceTranslations = {
            selectedCountryAriaLabel: "البلد المحدد",
            noCountrySelected: "لم يتم تحديد أي بلد",
            countryListAriaLabel: "قائمة الدول",
            searchPlaceholder: "يبحث",
            clearSearchAriaLabel: "مسح البحث",
            searchEmptyState: "لم يتم العثور على نتائج",
            searchSummaryAria(count) {
                if (count === 0) return "لم يتم العثور على نتائج";
                if (count === 1) return "تم العثور على نتيجة واحدة";
                if (count === 2) return "تم العثور على نتيجتين";
                if (count % 100 >= 3 && count % 100 <= 10) return `تم العثور على ${count} نتائج`;
                return `تم العثور على ${count} نتيجة`;
            }
        };
        const __WEBPACK_DEFAULT_EXPORT__ = interfaceTranslations;
    }
} ]);