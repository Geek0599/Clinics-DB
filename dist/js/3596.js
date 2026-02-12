"use strict";

(self["webpackChunkstart_template_multipage"] = self["webpackChunkstart_template_multipage"] || []).push([ [ 3596 ], {
    3596: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        const interfaceTranslations = {
            selectedCountryAriaLabel: "更改國家，選擇「${countryName}」（${dialCode}）",
            noCountrySelected: "選擇國家",
            countryListAriaLabel: "國家清單",
            searchPlaceholder: "搜尋",
            clearSearchAriaLabel: "清除搜尋",
            searchEmptyState: "未找到相關項目",
            searchSummaryAria(count) {
                if (count === 0) return "未找到相關項目";
                if (count === 1) return "找到 1 個相關項目";
                return `找到 ${count} 個相關項目`;
            }
        };
        const __WEBPACK_DEFAULT_EXPORT__ = interfaceTranslations;
    }
} ]);