"use strict";

(self["webpackChunkstart_template_multipage"] = self["webpackChunkstart_template_multipage"] || []).push([ [ 468 ], {
    468: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        const interfaceTranslations = {
            selectedCountryAriaLabel: "ประเทศที่เลือก",
            noCountrySelected: "ไม่ได้เลือกประเทศ",
            countryListAriaLabel: "รายชื่อประเทศ",
            searchPlaceholder: "ค้นหา",
            clearSearchAriaLabel: "ล้างการค้นหา",
            searchEmptyState: "ไม่พบผลลัพธ์",
            searchSummaryAria(count) {
                if (count === 0) return "ไม่พบผลลัพธ์";
                if (count === 1) return "พบผลลัพธ์ 1 รายการ";
                return `พบผลลัพธ์ ${count} รายการ`;
            }
        };
        const __WEBPACK_DEFAULT_EXPORT__ = interfaceTranslations;
    }
} ]);