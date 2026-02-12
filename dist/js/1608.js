"use strict";

(self["webpackChunkstart_template_multipage"] = self["webpackChunkstart_template_multipage"] || []).push([ [ 1608 ], {
    1608: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        const interfaceTranslations = {
            selectedCountryAriaLabel: "নির্বাচিত দেশ",
            noCountrySelected: "কোনো দেশ নির্বাচন করা হয়নি",
            countryListAriaLabel: "দেশের তালিকা",
            searchPlaceholder: "অনুসন্ধান করুন",
            clearSearchAriaLabel: "অনুসন্ধান পরিষ্কার করুন",
            searchEmptyState: "কোন ফলাফল পাওয়া যায়নি",
            searchSummaryAria(count) {
                if (count === 0) return "কোন ফলাফল পাওয়া যায়নি";
                if (count === 1) return "1টি ফলাফল পাওয়া গেছে";
                return `${count} ফলাফল পাওয়া গেছে`;
            }
        };
        const __WEBPACK_DEFAULT_EXPORT__ = interfaceTranslations;
    }
} ]);