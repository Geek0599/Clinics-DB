"use strict";

(self["webpackChunkstart_template_multipage"] = self["webpackChunkstart_template_multipage"] || []).push([ [ 7421 ], {
    7421: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        const interfaceTranslations = {
            selectedCountryAriaLabel: "選択した国",
            noCountrySelected: "国が選択されていません",
            countryListAriaLabel: "国のリスト",
            searchPlaceholder: "検索",
            clearSearchAriaLabel: "検索をクリア",
            searchEmptyState: "結果が見つかりません",
            searchSummaryAria(count) {
                if (count === 0) return "結果が見つかりません";
                if (count === 1) return "1 件の結果が見つかりました";
                return `${count} 件の結果が見つかりました`;
            }
        };
        const __WEBPACK_DEFAULT_EXPORT__ = interfaceTranslations;
    }
} ]);