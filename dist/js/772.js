"use strict";

(self["webpackChunkstart_template_multipage"] = self["webpackChunkstart_template_multipage"] || []).push([ [ 772 ], {
    772: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, {
            default: () => __WEBPACK_DEFAULT_EXPORT__
        });
        const interfaceTranslations = {
            selectedCountryAriaLabel: "País selecionado",
            noCountrySelected: "Nenhum país selecionado",
            countryListAriaLabel: "Lista de países",
            searchPlaceholder: "Procurar",
            clearSearchAriaLabel: "Limpar pesquisa",
            searchEmptyState: "Nenhum resultado encontrado",
            searchSummaryAria(count) {
                if (count === 0) return "Nenhum resultado encontrado";
                if (count === 1) return "1 resultado encontrado";
                return `${count} resultados encontrados`;
            }
        };
        const __WEBPACK_DEFAULT_EXPORT__ = interfaceTranslations;
    }
} ]);