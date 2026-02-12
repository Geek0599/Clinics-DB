"use strict";

(self["webpackChunkstart_template_multipage"] = self["webpackChunkstart_template_multipage"] || []).push([ [ 6206 ], {
    6206: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        const interfaceTranslations = {
            selectedCountryAriaLabel: "선택한 국가",
            noCountrySelected: "선택한 국가가 없습니다.",
            countryListAriaLabel: "국가 목록",
            searchPlaceholder: "검색",
            clearSearchAriaLabel: "검색 지우기",
            searchEmptyState: "검색 결과가 없습니다",
            searchSummaryAria(count) {
                if (count === 0) return "검색 결과가 없습니다";
                if (count === 1) return "1개의 결과를 찾았습니다.";
                return `${count}개의 결과를 찾았습니다.`;
            }
        };
        const __WEBPACK_DEFAULT_EXPORT__ = interfaceTranslations;
    }
} ]);