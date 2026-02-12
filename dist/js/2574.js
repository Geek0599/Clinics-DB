"use strict";

(self["webpackChunkstart_template_multipage"] = self["webpackChunkstart_template_multipage"] || []).push([ [ 2574 ], {
    2574: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        const interfaceTranslations = {
            selectedCountryAriaLabel: "所选国家",
            noCountrySelected: "未选择国家/地区",
            countryListAriaLabel: "国家名单",
            searchPlaceholder: "搜索",
            clearSearchAriaLabel: "清除搜索",
            searchEmptyState: "未找到结果",
            searchSummaryAria(count) {
                if (count === 0) return "未找到结果";
                if (count === 1) return "找到 1 个结果";
                return `找到 ${count} 个结果`;
            }
        };
        const __WEBPACK_DEFAULT_EXPORT__ = interfaceTranslations;
    }
} ]);