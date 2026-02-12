(self["webpackChunkstart_template_multipage"] = self["webpackChunkstart_template_multipage"] || []).push([ [ 436 ], {
    436: module => {
        (function(factory) {
            if (true && module.exports) module.exports = factory(); else window.intlTelInput = factory();
        })((() => {
            var factoryOutput = (() => {
                var __defProp = Object.defineProperty;
                var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
                var __getOwnPropNames = Object.getOwnPropertyNames;
                var __hasOwnProp = Object.prototype.hasOwnProperty;
                var __export = (target, all) => {
                    for (var name in all) __defProp(target, name, {
                        get: all[name],
                        enumerable: true
                    });
                };
                var __copyProps = (to, from, except, desc) => {
                    if (from && typeof from === "object" || typeof from === "function") for (let key of __getOwnPropNames(from)) if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                        get: () => from[key],
                        enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                    });
                    return to;
                };
                var __toCommonJS = mod => __copyProps(__defProp({}, "__esModule", {
                    value: true
                }), mod);
                var intl_tel_input_exports = {};
                __export(intl_tel_input_exports, {
                    Iti: () => Iti,
                    default: () => intl_tel_input_default
                });
                var rawCountryData = [ [ "af", "93", 0, null, "0" ], [ "ax", "358", 1, [ "18", "4" ], "0" ], [ "al", "355", 0, null, "0" ], [ "dz", "213", 0, null, "0" ], [ "as", "1", 5, [ "684" ], "1" ], [ "ad", "376" ], [ "ao", "244" ], [ "ai", "1", 6, [ "264" ], "1" ], [ "ag", "1", 7, [ "268" ], "1" ], [ "ar", "54", 0, null, "0" ], [ "am", "374", 0, null, "0" ], [ "aw", "297" ], [ "ac", "247" ], [ "au", "61", 0, [ "4" ], "0" ], [ "at", "43", 0, null, "0" ], [ "az", "994", 0, null, "0" ], [ "bs", "1", 8, [ "242" ], "1" ], [ "bh", "973" ], [ "bd", "880", 0, null, "0" ], [ "bb", "1", 9, [ "246" ], "1" ], [ "by", "375", 0, null, "8" ], [ "be", "32", 0, null, "0" ], [ "bz", "501" ], [ "bj", "229" ], [ "bm", "1", 10, [ "441" ], "1" ], [ "bt", "975" ], [ "bo", "591", 0, null, "0" ], [ "ba", "387", 0, null, "0" ], [ "bw", "267" ], [ "br", "55", 0, null, "0" ], [ "io", "246" ], [ "vg", "1", 11, [ "284" ], "1" ], [ "bn", "673" ], [ "bg", "359", 0, null, "0" ], [ "bf", "226" ], [ "bi", "257" ], [ "kh", "855", 0, null, "0" ], [ "cm", "237" ], [ "ca", "1", 1, [ "204", "226", "236", "249", "250", "257", "263", "289", "306", "343", "354", "365", "367", "368", "382", "403", "416", "418", "428", "431", "437", "438", "450", "468", "474", "506", "514", "519", "548", "579", "581", "584", "587", "604", "613", "639", "647", "672", "683", "705", "709", "742", "753", "778", "780", "782", "807", "819", "825", "867", "873", "879", "902", "905", "942" ], "1" ], [ "cv", "238" ], [ "bq", "599", 1, [ "3", "4", "7" ] ], [ "ky", "1", 12, [ "345" ], "1" ], [ "cf", "236" ], [ "td", "235" ], [ "cl", "56" ], [ "cn", "86", 0, null, "0" ], [ "cx", "61", 2, [ "4", "89164" ], "0" ], [ "cc", "61", 1, [ "4", "89162" ], "0" ], [ "co", "57", 0, null, "0" ], [ "km", "269" ], [ "cg", "242" ], [ "cd", "243", 0, null, "0" ], [ "ck", "682" ], [ "cr", "506" ], [ "ci", "225" ], [ "hr", "385", 0, null, "0" ], [ "cu", "53", 0, null, "0" ], [ "cw", "599", 0 ], [ "cy", "357" ], [ "cz", "420" ], [ "dk", "45" ], [ "dj", "253" ], [ "dm", "1", 13, [ "767" ], "1" ], [ "do", "1", 2, [ "809", "829", "849" ], "1" ], [ "ec", "593", 0, null, "0" ], [ "eg", "20", 0, null, "0" ], [ "sv", "503" ], [ "gq", "240" ], [ "er", "291", 0, null, "0" ], [ "ee", "372" ], [ "sz", "268" ], [ "et", "251", 0, null, "0" ], [ "fk", "500" ], [ "fo", "298" ], [ "fj", "679" ], [ "fi", "358", 0, [ "4" ], "0" ], [ "fr", "33", 0, null, "0" ], [ "gf", "594", 0, null, "0" ], [ "pf", "689" ], [ "ga", "241" ], [ "gm", "220" ], [ "ge", "995", 0, null, "0" ], [ "de", "49", 0, null, "0" ], [ "gh", "233", 0, null, "0" ], [ "gi", "350" ], [ "gr", "30" ], [ "gl", "299" ], [ "gd", "1", 14, [ "473" ], "1" ], [ "gp", "590", 0, null, "0" ], [ "gu", "1", 15, [ "671" ], "1" ], [ "gt", "502" ], [ "gg", "44", 1, [ "1481", "7781", "7839", "7911" ], "0" ], [ "gn", "224" ], [ "gw", "245" ], [ "gy", "592" ], [ "ht", "509" ], [ "hn", "504" ], [ "hk", "852" ], [ "hu", "36", 0, null, "06" ], [ "is", "354" ], [ "in", "91", 0, null, "0" ], [ "id", "62", 0, null, "0" ], [ "ir", "98", 0, null, "0" ], [ "iq", "964", 0, null, "0" ], [ "ie", "353", 0, null, "0" ], [ "im", "44", 2, [ "1624", "74576", "7524", "7624", "7924" ], "0" ], [ "il", "972", 0, null, "0" ], [ "it", "39", 0, [ "3" ] ], [ "jm", "1", 4, [ "658", "876" ], "1" ], [ "jp", "81", 0, null, "0" ], [ "je", "44", 3, [ "1534", "7509", "7700", "7797", "7829", "7937" ], "0" ], [ "jo", "962", 0, null, "0" ], [ "kz", "7", 1, [ "33", "7" ], "8" ], [ "ke", "254", 0, null, "0" ], [ "ki", "686", 0, null, "0" ], [ "xk", "383", 0, null, "0" ], [ "kw", "965" ], [ "kg", "996", 0, null, "0" ], [ "la", "856", 0, null, "0" ], [ "lv", "371" ], [ "lb", "961", 0, null, "0" ], [ "ls", "266" ], [ "lr", "231", 0, null, "0" ], [ "ly", "218", 0, null, "0" ], [ "li", "423", 0, null, "0" ], [ "lt", "370", 0, null, "0" ], [ "lu", "352" ], [ "mo", "853" ], [ "mg", "261", 0, null, "0" ], [ "mw", "265", 0, null, "0" ], [ "my", "60", 0, null, "0" ], [ "mv", "960" ], [ "ml", "223" ], [ "mt", "356" ], [ "mh", "692", 0, null, "1" ], [ "mq", "596", 0, null, "0" ], [ "mr", "222" ], [ "mu", "230" ], [ "yt", "262", 1, [ "269", "639" ], "0" ], [ "mx", "52" ], [ "fm", "691" ], [ "md", "373", 0, null, "0" ], [ "mc", "377", 0, null, "0" ], [ "mn", "976", 0, null, "0" ], [ "me", "382", 0, null, "0" ], [ "ms", "1", 16, [ "664" ], "1" ], [ "ma", "212", 0, [ "6", "7" ], "0" ], [ "mz", "258" ], [ "mm", "95", 0, null, "0" ], [ "na", "264", 0, null, "0" ], [ "nr", "674" ], [ "np", "977", 0, null, "0" ], [ "nl", "31", 0, null, "0" ], [ "nc", "687" ], [ "nz", "64", 0, null, "0" ], [ "ni", "505" ], [ "ne", "227" ], [ "ng", "234", 0, null, "0" ], [ "nu", "683" ], [ "nf", "672" ], [ "kp", "850", 0, null, "0" ], [ "mk", "389", 0, null, "0" ], [ "mp", "1", 17, [ "670" ], "1" ], [ "no", "47", 0, [ "4", "9" ] ], [ "om", "968" ], [ "pk", "92", 0, null, "0" ], [ "pw", "680" ], [ "ps", "970", 0, null, "0" ], [ "pa", "507" ], [ "pg", "675" ], [ "py", "595", 0, null, "0" ], [ "pe", "51", 0, null, "0" ], [ "ph", "63", 0, null, "0" ], [ "pl", "48" ], [ "pt", "351" ], [ "pr", "1", 3, [ "787", "939" ], "1" ], [ "qa", "974" ], [ "re", "262", 0, null, "0" ], [ "ro", "40", 0, null, "0" ], [ "ru", "7", 0, [ "33" ], "8" ], [ "rw", "250", 0, null, "0" ], [ "ws", "685" ], [ "sm", "378" ], [ "st", "239" ], [ "sa", "966", 0, null, "0" ], [ "sn", "221" ], [ "rs", "381", 0, null, "0" ], [ "sc", "248" ], [ "sl", "232", 0, null, "0" ], [ "sg", "65" ], [ "sx", "1", 21, [ "721" ], "1" ], [ "sk", "421", 0, null, "0" ], [ "si", "386", 0, null, "0" ], [ "sb", "677" ], [ "so", "252", 0, null, "0" ], [ "za", "27", 0, null, "0" ], [ "kr", "82", 0, null, "0" ], [ "ss", "211", 0, null, "0" ], [ "es", "34" ], [ "lk", "94", 0, null, "0" ], [ "bl", "590", 1, null, "0" ], [ "sh", "290" ], [ "kn", "1", 18, [ "869" ], "1" ], [ "lc", "1", 19, [ "758" ], "1" ], [ "mf", "590", 2, null, "0" ], [ "pm", "508", 0, null, "0" ], [ "vc", "1", 20, [ "784" ], "1" ], [ "sd", "249", 0, null, "0" ], [ "sr", "597" ], [ "sj", "47", 1, [ "4", "79", "9" ] ], [ "se", "46", 0, null, "0" ], [ "ch", "41", 0, null, "0" ], [ "sy", "963", 0, null, "0" ], [ "tw", "886", 0, null, "0" ], [ "tj", "992" ], [ "tz", "255", 0, null, "0" ], [ "th", "66", 0, null, "0" ], [ "tl", "670" ], [ "tg", "228" ], [ "tk", "690" ], [ "to", "676" ], [ "tt", "1", 22, [ "868" ], "1" ], [ "tn", "216" ], [ "tr", "90", 0, null, "0" ], [ "tm", "993", 0, null, "8" ], [ "tc", "1", 23, [ "649" ], "1" ], [ "tv", "688" ], [ "vi", "1", 24, [ "340" ], "1" ], [ "ug", "256", 0, null, "0" ], [ "ua", "380", 0, null, "0" ], [ "ae", "971", 0, null, "0" ], [ "gb", "44", 0, null, "0" ], [ "us", "1", 0, null, "1" ], [ "uy", "598", 0, null, "0" ], [ "uz", "998" ], [ "vu", "678" ], [ "va", "39", 1, [ "06698", "3" ] ], [ "ve", "58", 0, null, "0" ], [ "vn", "84", 0, null, "0" ], [ "wf", "681" ], [ "eh", "212", 1, [ "5288", "5289", "6", "7" ], "0" ], [ "ye", "967", 0, null, "0" ], [ "zm", "260", 0, null, "0" ], [ "zw", "263", 0, null, "0" ] ];
                var allCountries = [];
                for (const c of rawCountryData) allCountries.push({
                    name: "",
                    iso2: c[0],
                    dialCode: c[1],
                    priority: c[2] || 0,
                    areaCodes: c[3] || null,
                    nodeById: {},
                    nationalPrefix: c[4] || null,
                    normalisedName: "",
                    initials: "",
                    dialCodePlus: ""
                });
                var data_default = allCountries;
                var EVENTS = {
                    OPEN_COUNTRY_DROPDOWN: "open:countrydropdown",
                    CLOSE_COUNTRY_DROPDOWN: "close:countrydropdown",
                    COUNTRY_CHANGE: "countrychange",
                    INPUT: "input"
                };
                var CLASSES = {
                    HIDE: "iti__hide",
                    V_HIDE: "iti__v-hide",
                    ARROW_UP: "iti__arrow--up",
                    GLOBE: "iti__globe",
                    FLAG: "iti__flag",
                    LOADING: "iti__loading",
                    COUNTRY_ITEM: "iti__country",
                    HIGHLIGHT: "iti__highlight"
                };
                var KEYS = {
                    ARROW_UP: "ArrowUp",
                    ARROW_DOWN: "ArrowDown",
                    SPACE: " ",
                    ENTER: "Enter",
                    ESC: "Escape",
                    TAB: "Tab"
                };
                var INPUT_TYPES = {
                    PASTE: "insertFromPaste",
                    DELETE_FWD: "deleteContentForward"
                };
                var REGEX = {
                    ALPHA_UNICODE: /\p{L}/u,
                    NON_PLUS_NUMERIC: /[^+0-9]/,
                    NON_PLUS_NUMERIC_GLOBAL: /[^+0-9]/g,
                    HIDDEN_SEARCH_CHAR: /^[a-zA-ZÀ-ÿа-яА-Я ]$/
                };
                var TIMINGS = {
                    SEARCH_DEBOUNCE_MS: 100,
                    HIDDEN_SEARCH_RESET_MS: 1e3,
                    NEXT_TICK: 0
                };
                var SENTINELS = {
                    UNKNOWN_NUMBER_TYPE: -99,
                    UNKNOWN_VALIDATION_ERROR: -99
                };
                var LAYOUT = {
                    SANE_SELECTED_WITH_DIAL_WIDTH: 78,
                    SANE_SELECTED_NO_DIAL_WIDTH: 42,
                    INPUT_PADDING_EXTRA_LEFT: 6
                };
                var DIAL = {
                    PLUS: "+",
                    NANP: "1"
                };
                var UK = {
                    ISO2: "gb",
                    DIAL_CODE: "44",
                    MOBILE_PREFIX: "7",
                    MOBILE_CORE_LENGTH: 10
                };
                var US = {
                    ISO2: "us",
                    DIAL_CODE: "1"
                };
                var PLACEHOLDER_MODES = {
                    AGGRESSIVE: "aggressive",
                    POLITE: "polite",
                    OFF: "off"
                };
                var INITIAL_COUNTRY = {
                    AUTO: "auto"
                };
                var DATA_KEYS = {
                    COUNTRY_CODE: "countryCode",
                    DIAL_CODE: "dialCode"
                };
                var ARIA = {
                    EXPANDED: "aria-expanded",
                    LABEL: "aria-label",
                    SELECTED: "aria-selected",
                    ACTIVE_DESCENDANT: "aria-activedescendant",
                    HASPOPUP: "aria-haspopup",
                    CONTROLS: "aria-controls",
                    HIDDEN: "aria-hidden",
                    AUTOCOMPLETE: "aria-autocomplete",
                    MODAL: "aria-modal"
                };
                var interfaceTranslations = {
                    selectedCountryAriaLabel: "Change country, selected ${countryName} (${dialCode})",
                    noCountrySelected: "Select country",
                    countryListAriaLabel: "List of countries",
                    searchPlaceholder: "Search",
                    clearSearchAriaLabel: "Clear search",
                    searchEmptyState: "No results found",
                    searchSummaryAria(count) {
                        if (count === 0) return "No results found";
                        if (count === 1) return "1 result found";
                        return `${count} results found`;
                    }
                };
                var en_default = interfaceTranslations;
                var mq = q => typeof window !== "undefined" && typeof window.matchMedia === "function" && window.matchMedia(q).matches;
                var computeDefaultUseFullscreenPopup = () => {
                    if (typeof navigator !== "undefined" && typeof window !== "undefined") {
                        const isNarrowViewport = mq("(max-width: 500px)");
                        const isShortViewport = mq("(max-height: 600px)");
                        const isCoarsePointer = mq("(pointer: coarse)");
                        return isNarrowViewport || isCoarsePointer && isShortViewport;
                    }
                    return false;
                };
                var defaults = {
                    allowDropdown: true,
                    allowedNumberTypes: [ "MOBILE", "FIXED_LINE" ],
                    allowNumberExtensions: false,
                    allowPhonewords: false,
                    autoPlaceholder: PLACEHOLDER_MODES.POLITE,
                    containerClass: "",
                    countryNameLocale: "en",
                    countryOrder: null,
                    countrySearch: true,
                    customPlaceholder: null,
                    dropdownContainer: null,
                    excludeCountries: [],
                    fixDropdownWidth: true,
                    formatAsYouType: true,
                    formatOnDisplay: true,
                    geoIpLookup: null,
                    hiddenInput: null,
                    i18n: {},
                    initialCountry: "",
                    loadUtils: null,
                    nationalMode: true,
                    onlyCountries: [],
                    placeholderNumberType: "MOBILE",
                    showFlags: true,
                    separateDialCode: false,
                    strictMode: false,
                    useFullscreenPopup: computeDefaultUseFullscreenPopup()
                };
                var applyOptionSideEffects = o => {
                    if (o.useFullscreenPopup) o.fixDropdownWidth = false;
                    if (o.onlyCountries.length === 1) o.initialCountry = o.onlyCountries[0];
                    if (o.separateDialCode) o.nationalMode = false;
                    if (o.allowDropdown && !o.showFlags && !o.separateDialCode) o.nationalMode = false;
                    if (o.useFullscreenPopup && !o.dropdownContainer) o.dropdownContainer = document.body;
                    o.i18n = {
                        ...en_default,
                        ...o.i18n
                    };
                };
                var getNumeric = s => s.replace(/\D/g, "");
                var normaliseString = (s = "") => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
                var getIsAndroid = () => typeof navigator !== "undefined" ? /Android/i.test(navigator.userAgent) : false;
                var getMatchedCountries = (countries, query) => {
                    const normalisedQuery = normaliseString(query);
                    const iso2Matches = [];
                    const nameStartWith = [];
                    const nameContains = [];
                    const dialCodeMatches = [];
                    const dialCodeContains = [];
                    const initialsMatches = [];
                    for (const c of countries) if (c.iso2 === normalisedQuery) iso2Matches.push(c); else if (c.normalisedName.startsWith(normalisedQuery)) nameStartWith.push(c); else if (c.normalisedName.includes(normalisedQuery)) nameContains.push(c); else if (normalisedQuery === c.dialCode || normalisedQuery === c.dialCodePlus) dialCodeMatches.push(c); else if (c.dialCodePlus.includes(normalisedQuery)) dialCodeContains.push(c); else if (c.initials.includes(normalisedQuery)) initialsMatches.push(c);
                    const sortByPriority = (a, b) => a.priority - b.priority;
                    return [ ...iso2Matches.sort(sortByPriority), ...nameStartWith.sort(sortByPriority), ...nameContains.sort(sortByPriority), ...dialCodeMatches.sort(sortByPriority), ...dialCodeContains.sort(sortByPriority), ...initialsMatches.sort(sortByPriority) ];
                };
                var findFirstCountryStartingWith = (countries, query) => {
                    const lowerQuery = query.toLowerCase();
                    for (const c of countries) {
                        const lowerName = c.name.toLowerCase();
                        if (lowerName.startsWith(lowerQuery)) return c;
                    }
                    return null;
                };
                var buildClassNames = flags => Object.keys(flags).filter((k => Boolean(flags[k]))).join(" ");
                var createEl = (tagName, attrs, container) => {
                    const el = document.createElement(tagName);
                    if (attrs) Object.entries(attrs).forEach((([key, value]) => el.setAttribute(key, value)));
                    if (container) container.appendChild(el);
                    return el;
                };
                var buildSearchIcon = () => `\n  <svg class="iti__search-icon-svg" width="14" height="14" viewBox="0 0 24 24" focusable="false" ${ARIA.HIDDEN}="true">\n    <circle cx="11" cy="11" r="7" />\n    <line x1="21" y1="21" x2="16.65" y2="16.65" />\n  </svg>`;
                var buildClearIcon = id2 => {
                    const maskId = `iti-${id2}-clear-mask`;
                    return `\n    <svg class="iti__search-clear-svg" width="12" height="12" viewBox="0 0 16 16" ${ARIA.HIDDEN}="true" focusable="false">\n      <mask id="${maskId}" maskUnits="userSpaceOnUse">\n        <rect width="16" height="16" fill="white" />\n        <path d="M5.2 5.2 L10.8 10.8 M10.8 5.2 L5.2 10.8" stroke="black" stroke-linecap="round" class="iti__search-clear-x" />\n      </mask>\n      <circle cx="8" cy="8" r="8" class="iti__search-clear-bg" mask="url(#${maskId})" />\n    </svg>`;
                };
                var buildCheckIcon = () => `\n  <svg class="iti__country-check-svg" width="14" height="14" viewBox="0 0 16 16" fill="currentColor" focusable="false" ${ARIA.HIDDEN}="true">\n    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>\n  </svg>`;
                var buildGlobeIcon = () => `\n  <svg width="256" height="256" viewBox="0 0 512 512" class="iti__globe-svg">\n    <path d="M508 213a240 240 0 0 0-449-87l-2 5-2 5c-8 14-13 30-17 46a65 65 0 0 1 56 4c16-10 35-19 56-27l9-3c-6 23-10 48-10 74h-16l4 6c3 4 5 8 6 13h6c0 22 3 44 8 65l2 10-25-10-4 5 12 18 9 3 6 2 8 3 9 26 1 2 16-7h1l-5-13-1-2c24 6 49 9 75 10v26l11 10 7 7v-30l1-13c22 0 44-3 65-8l10-2-21 48-1 1a317 317 0 0 1-14 23l-21 5h-2c6 16 7 33 1 50a240 240 0 0 0 211-265m-401-56-11 6c19-44 54-79 98-98-11 20-21 44-29 69-21 6-40 15-58 23m154 182v4c-29-1-57-6-81-13-7-25-12-52-13-81h94zm0-109h-94c1-29 6-56 13-81 24-7 52-12 81-13zm0-112c-22 1-44 4-65 8l-10 2 12-30 9-17 1-2a332 332 0 0 1 13-23c13-4 26-6 40-7zm187 69 6 4c4 12 6 25 6 38v1h-68c-1-26-4-51-10-74l48 20 1 1 14 8zm-14-44 10 20c-20-11-43-21-68-29-8-25-18-49-29-69 37 16 67 44 87 78M279 49h1c13 1 27 3 39 7l14 23 1 2a343 343 0 0 1 12 26l2 5 6 16c-23-6-48-9-74-10h-1zm0 87h1c29 1 56 6 81 13 7 24 12 51 12 80v1h-94zm2 207h-2v-94h95c-1 29-6 56-13 81-24 7-51 12-80 13m86 60-20 10c11-20 21-43 29-68 25-8 48-18 68-29-16 37-43 67-77 87m87-115-7 5-16 9-2 1a337 337 0 0 1-47 21c6-24 9-49 10-75h68c0 13-2 27-6 39"/>\n    <path d="m261 428-2-2-22-21a40 40 0 0 0-32-11h-1a37 37 0 0 0-18 8l-1 1-4 2-2 2-5 4c-9-3-36-31-47-44s-32-45-34-55l3-2a151 151 0 0 0 11-9v-1a39 39 0 0 0 5-48l-3-3-11-19-3-4-5-7h-1l-3-3-4-3-5-2a35 35 0 0 0-16-3h-5c-4 1-14 5-24 11l-4 2-4 3-4 2c-9 8-17 17-18 27a380 380 0 0 0 212 259h3c12 0 25-10 36-21l10-12 6-11a39 39 0 0 0-8-40"/>\n  </svg>`;
                var UI = class {
                    constructor(input, options, id2) {
                        this.highlightedItem = null;
                        this.selectedItem = null;
                        input.dataset.intlTelInputId = id2.toString();
                        this.telInput = input;
                        this.options = options;
                        this.id = id2;
                        this.hadInitialPlaceholder = Boolean(input.getAttribute("placeholder"));
                        this.isRTL = !!this.telInput.closest("[dir=rtl]");
                        if (this.options.separateDialCode) this.originalPaddingLeft = this.telInput.style.paddingLeft;
                    }
                    generateMarkup(countries) {
                        this.countries = countries;
                        this.telInput.classList.add("iti__tel-input");
                        if (!this.telInput.hasAttribute("autocomplete")) this.telInput.setAttribute("autocomplete", "tel");
                        if (!this.telInput.hasAttribute("inputmode")) this.telInput.setAttribute("inputmode", "tel");
                        const wrapper = this._createWrapperAndInsert();
                        this._maybeBuildCountryContainer(wrapper);
                        wrapper.appendChild(this.telInput);
                        this._maybeUpdateInputPaddingAndReveal();
                        this._maybeBuildHiddenInputs(wrapper);
                    }
                    _createWrapperAndInsert() {
                        const {allowDropdown, showFlags, containerClass, useFullscreenPopup} = this.options;
                        const parentClasses = buildClassNames({
                            iti: true,
                            "iti--allow-dropdown": allowDropdown,
                            "iti--show-flags": showFlags,
                            "iti--inline-dropdown": !useFullscreenPopup,
                            [containerClass]: Boolean(containerClass)
                        });
                        const wrapper = createEl("div", {
                            class: parentClasses
                        });
                        if (this.isRTL) wrapper.setAttribute("dir", "ltr");
                        this.telInput.before(wrapper);
                        return wrapper;
                    }
                    _maybeBuildCountryContainer(wrapper) {
                        const {allowDropdown, separateDialCode, showFlags} = this.options;
                        if (allowDropdown || showFlags || separateDialCode) {
                            this.countryContainer = createEl("div", {
                                class: `iti__country-container ${CLASSES.V_HIDE}`
                            }, wrapper);
                            if (allowDropdown) {
                                this.selectedCountry = createEl("button", {
                                    type: "button",
                                    class: "iti__selected-country",
                                    [ARIA.EXPANDED]: "false",
                                    [ARIA.LABEL]: this.options.i18n.noCountrySelected,
                                    [ARIA.HASPOPUP]: "dialog",
                                    [ARIA.CONTROLS]: `iti-${this.id}__dropdown-content`
                                }, this.countryContainer);
                                if (this.telInput.disabled) this.selectedCountry.setAttribute("disabled", "true");
                            } else this.selectedCountry = createEl("div", {
                                class: "iti__selected-country"
                            }, this.countryContainer);
                            const selectedCountryPrimary = createEl("div", {
                                class: "iti__selected-country-primary"
                            }, this.selectedCountry);
                            this.selectedCountryInner = createEl("div", {
                                class: CLASSES.FLAG
                            }, selectedCountryPrimary);
                            if (allowDropdown) this.dropdownArrow = createEl("div", {
                                class: "iti__arrow",
                                [ARIA.HIDDEN]: "true"
                            }, selectedCountryPrimary);
                            if (separateDialCode) this.selectedDialCode = createEl("div", {
                                class: "iti__selected-dial-code"
                            }, this.selectedCountry);
                            if (allowDropdown) this._buildDropdownContent();
                        }
                    }
                    _buildDropdownContent() {
                        const {fixDropdownWidth, useFullscreenPopup, countrySearch, i18n, dropdownContainer, containerClass} = this.options;
                        const extraClasses = fixDropdownWidth ? "" : "iti--flexible-dropdown-width";
                        this.dropdownContent = createEl("div", {
                            id: `iti-${this.id}__dropdown-content`,
                            class: `iti__dropdown-content ${CLASSES.HIDE} ${extraClasses}`,
                            role: "dialog",
                            [ARIA.MODAL]: "true"
                        });
                        if (this.isRTL) this.dropdownContent.setAttribute("dir", "rtl");
                        if (countrySearch) this._buildSearchUI();
                        this.countryList = createEl("ul", {
                            class: "iti__country-list",
                            id: `iti-${this.id}__country-listbox`,
                            role: "listbox",
                            [ARIA.LABEL]: i18n.countryListAriaLabel
                        }, this.dropdownContent);
                        this._appendListItems();
                        if (countrySearch) this.updateSearchResultsA11yText();
                        if (dropdownContainer) {
                            const dropdownClasses = buildClassNames({
                                iti: true,
                                "iti--container": true,
                                "iti--fullscreen-popup": useFullscreenPopup,
                                "iti--inline-dropdown": !useFullscreenPopup,
                                [containerClass]: Boolean(containerClass)
                            });
                            this.dropdown = createEl("div", {
                                class: dropdownClasses
                            });
                            this.dropdown.appendChild(this.dropdownContent);
                        } else this.countryContainer.appendChild(this.dropdownContent);
                    }
                    _buildSearchUI() {
                        const {i18n} = this.options;
                        const searchWrapper = createEl("div", {
                            class: "iti__search-input-wrapper"
                        }, this.dropdownContent);
                        this.searchIcon = createEl("span", {
                            class: "iti__search-icon",
                            [ARIA.HIDDEN]: "true"
                        }, searchWrapper);
                        this.searchIcon.innerHTML = buildSearchIcon();
                        this.searchInput = createEl("input", {
                            id: `iti-${this.id}__search-input`,
                            type: "search",
                            class: "iti__search-input",
                            placeholder: i18n.searchPlaceholder,
                            role: "combobox",
                            [ARIA.EXPANDED]: "true",
                            [ARIA.LABEL]: i18n.searchPlaceholder,
                            [ARIA.CONTROLS]: `iti-${this.id}__country-listbox`,
                            [ARIA.AUTOCOMPLETE]: "list",
                            autocomplete: "off"
                        }, searchWrapper);
                        this.searchClearButton = createEl("button", {
                            type: "button",
                            class: `iti__search-clear ${CLASSES.HIDE}`,
                            [ARIA.LABEL]: i18n.clearSearchAriaLabel,
                            tabindex: "-1"
                        }, searchWrapper);
                        this.searchClearButton.innerHTML = buildClearIcon(this.id);
                        this.searchResultsA11yText = createEl("span", {
                            class: "iti__a11y-text"
                        }, this.dropdownContent);
                        this.searchNoResults = createEl("div", {
                            class: `iti__no-results ${CLASSES.HIDE}`,
                            [ARIA.HIDDEN]: "true"
                        }, this.dropdownContent);
                        this.searchNoResults.textContent = i18n.searchEmptyState;
                    }
                    _maybeUpdateInputPaddingAndReveal() {
                        if (this.countryContainer) {
                            this.updateInputPadding();
                            this.countryContainer.classList.remove(CLASSES.V_HIDE);
                        }
                    }
                    _maybeBuildHiddenInputs(wrapper) {
                        const {hiddenInput} = this.options;
                        if (hiddenInput) {
                            const telInputName = this.telInput.getAttribute("name") || "";
                            const names = hiddenInput(telInputName);
                            if (names.phone) {
                                const existingInput = this.telInput.form?.querySelector(`input[name="${names.phone}"]`);
                                if (existingInput) this.hiddenInput = existingInput; else {
                                    this.hiddenInput = createEl("input", {
                                        type: "hidden",
                                        name: names.phone
                                    });
                                    wrapper.appendChild(this.hiddenInput);
                                }
                            }
                            if (names.country) {
                                const existingInput = this.telInput.form?.querySelector(`input[name="${names.country}"]`);
                                if (existingInput) this.hiddenInputCountry = existingInput; else {
                                    this.hiddenInputCountry = createEl("input", {
                                        type: "hidden",
                                        name: names.country
                                    });
                                    wrapper.appendChild(this.hiddenInputCountry);
                                }
                            }
                        }
                    }
                    _appendListItems() {
                        const frag = document.createDocumentFragment();
                        for (let i = 0; i < this.countries.length; i++) {
                            const c = this.countries[i];
                            const liClass = buildClassNames({
                                [CLASSES.COUNTRY_ITEM]: true
                            });
                            const listItem = createEl("li", {
                                id: `iti-${this.id}__item-${c.iso2}`,
                                class: liClass,
                                tabindex: "-1",
                                role: "option",
                                [ARIA.SELECTED]: "false"
                            });
                            listItem.dataset.dialCode = c.dialCode;
                            listItem.dataset.countryCode = c.iso2;
                            c.nodeById[this.id] = listItem;
                            if (this.options.showFlags) createEl("div", {
                                class: `${CLASSES.FLAG} iti__${c.iso2}`
                            }, listItem);
                            const nameEl = createEl("span", {
                                class: "iti__country-name"
                            }, listItem);
                            nameEl.textContent = c.name;
                            const dialEl = createEl("span", {
                                class: "iti__dial-code"
                            }, nameEl);
                            if (this.isRTL) dialEl.setAttribute("dir", "ltr");
                            dialEl.textContent = `+${c.dialCode}`;
                            frag.appendChild(listItem);
                        }
                        this.countryList.appendChild(frag);
                    }
                    updateInputPadding() {
                        if (this.selectedCountry) {
                            const fallbackWidth = this.options.separateDialCode ? LAYOUT.SANE_SELECTED_WITH_DIAL_WIDTH : LAYOUT.SANE_SELECTED_NO_DIAL_WIDTH;
                            const selectedCountryWidth = this.selectedCountry.offsetWidth || this._getHiddenSelectedCountryWidth() || fallbackWidth;
                            const inputPadding = selectedCountryWidth + LAYOUT.INPUT_PADDING_EXTRA_LEFT;
                            this.telInput.style.paddingLeft = `${inputPadding}px`;
                        }
                    }
                    _getHiddenSelectedCountryWidth() {
                        if (this.telInput.parentNode) {
                            let body;
                            try {
                                body = window.top.document.body;
                            } catch (e) {
                                body = document.body;
                            }
                            const containerClone = this.telInput.parentNode.cloneNode(false);
                            containerClone.style.visibility = "hidden";
                            body.appendChild(containerClone);
                            const countryContainerClone = this.countryContainer.cloneNode();
                            containerClone.appendChild(countryContainerClone);
                            const selectedCountryClone = this.selectedCountry.cloneNode(true);
                            countryContainerClone.appendChild(selectedCountryClone);
                            const width = selectedCountryClone.offsetWidth;
                            body.removeChild(containerClone);
                            return width;
                        }
                        return 0;
                    }
                    updateSearchResultsA11yText() {
                        const {i18n} = this.options;
                        const count = this.countryList.childElementCount;
                        this.searchResultsA11yText.textContent = i18n.searchSummaryAria(count);
                    }
                    scrollTo(element) {
                        const container = this.countryList;
                        const scrollTop = document.documentElement.scrollTop;
                        const containerHeight = container.offsetHeight;
                        const containerTop = container.getBoundingClientRect().top + scrollTop;
                        const containerBottom = containerTop + containerHeight;
                        const elementHeight = element.offsetHeight;
                        const elementTop = element.getBoundingClientRect().top + scrollTop;
                        const elementBottom = elementTop + elementHeight;
                        const newScrollTop = elementTop - containerTop + container.scrollTop;
                        if (elementTop < containerTop) container.scrollTop = newScrollTop; else if (elementBottom > containerBottom) {
                            const heightDifference = containerHeight - elementHeight;
                            container.scrollTop = newScrollTop - heightDifference;
                        }
                    }
                    highlightListItem(listItem, shouldFocus) {
                        const prevItem = this.highlightedItem;
                        if (prevItem) prevItem.classList.remove(CLASSES.HIGHLIGHT);
                        this.highlightedItem = listItem;
                        if (this.highlightedItem) {
                            this.highlightedItem.classList.add(CLASSES.HIGHLIGHT);
                            if (this.options.countrySearch) {
                                const activeDescendant = this.highlightedItem.getAttribute("id") || "";
                                this.searchInput.setAttribute(ARIA.ACTIVE_DESCENDANT, activeDescendant);
                            }
                        }
                        if (shouldFocus) this.highlightedItem.focus();
                    }
                    updateSelectedItem(iso2) {
                        if (this.selectedItem && this.selectedItem.dataset.countryCode !== iso2) {
                            this.selectedItem.setAttribute(ARIA.SELECTED, "false");
                            this.selectedItem.querySelector(".iti__country-check")?.remove();
                            this.selectedItem = null;
                        }
                        if (iso2 && !this.selectedItem) {
                            const newListItem = this.countryList.querySelector(`[data-country-code="${iso2}"]`);
                            if (newListItem) {
                                newListItem.setAttribute(ARIA.SELECTED, "true");
                                const checkIcon = createEl("span", {
                                    class: "iti__country-check",
                                    [ARIA.HIDDEN]: "true"
                                }, newListItem);
                                checkIcon.innerHTML = buildCheckIcon();
                                this.selectedItem = newListItem;
                            }
                        }
                    }
                    filterCountries(matchedCountries) {
                        this.countryList.innerHTML = "";
                        let noCountriesAddedYet = true;
                        for (const c of matchedCountries) {
                            const listItem = c.nodeById[this.id];
                            if (listItem) {
                                this.countryList.appendChild(listItem);
                                if (noCountriesAddedYet) {
                                    this.highlightListItem(listItem, false);
                                    noCountriesAddedYet = false;
                                }
                            }
                        }
                        if (noCountriesAddedYet) {
                            this.highlightListItem(null, false);
                            if (this.searchNoResults) this.searchNoResults.classList.remove(CLASSES.HIDE);
                        } else if (this.searchNoResults) this.searchNoResults.classList.add(CLASSES.HIDE);
                        this.countryList.scrollTop = 0;
                        this.updateSearchResultsA11yText();
                    }
                    destroy() {
                        this.telInput.iti = void 0;
                        delete this.telInput.dataset.intlTelInputId;
                        if (this.options.separateDialCode) this.telInput.style.paddingLeft = this.originalPaddingLeft;
                        const wrapper = this.telInput.parentNode;
                        wrapper.before(this.telInput);
                        wrapper.remove();
                        this.telInput = null;
                        this.countryContainer = null;
                        this.selectedCountry = null;
                        this.selectedCountryInner = null;
                        this.selectedDialCode = null;
                        this.dropdownArrow = null;
                        this.dropdownContent = null;
                        this.searchInput = null;
                        this.searchIcon = null;
                        this.searchClearButton = null;
                        this.searchNoResults = null;
                        this.searchResultsA11yText = null;
                        this.countryList = null;
                        this.dropdown = null;
                        this.hiddenInput = null;
                        this.hiddenInputCountry = null;
                        this.highlightedItem = null;
                        this.selectedItem = null;
                        for (const c of this.countries) delete c.nodeById[this.id];
                        this.countries = null;
                    }
                };
                var processAllCountries = options => {
                    const {onlyCountries, excludeCountries} = options;
                    if (onlyCountries.length) {
                        const lowerCaseOnlyCountries = onlyCountries.map((country => country.toLowerCase()));
                        return data_default.filter((country => lowerCaseOnlyCountries.includes(country.iso2)));
                    } else if (excludeCountries.length) {
                        const lowerCaseExcludeCountries = excludeCountries.map((country => country.toLowerCase()));
                        return data_default.filter((country => !lowerCaseExcludeCountries.includes(country.iso2)));
                    }
                    return data_default;
                };
                var generateCountryNames = (countries, options) => {
                    const {countryNameLocale, i18n} = options;
                    let displayNames;
                    try {
                        const hasDisplayNames = typeof Intl !== "undefined" && typeof Intl.DisplayNames === "function";
                        if (hasDisplayNames) displayNames = new Intl.DisplayNames(countryNameLocale, {
                            type: "region"
                        }); else displayNames = null;
                    } catch (e) {
                        console.error(e);
                        displayNames = null;
                    }
                    for (const c of countries) c.name = i18n[c.iso2] || displayNames?.of(c.iso2.toUpperCase()) || "";
                };
                var processDialCodes = countries => {
                    const dialCodes = new Set;
                    let dialCodeMaxLen = 0;
                    const dialCodeToIso2Map = {};
                    const _addToDialCodeMap = (iso2, dialCode) => {
                        if (!iso2 || !dialCode) return;
                        if (dialCode.length > dialCodeMaxLen) dialCodeMaxLen = dialCode.length;
                        if (!dialCodeToIso2Map.hasOwnProperty(dialCode)) dialCodeToIso2Map[dialCode] = [];
                        const iso2List = dialCodeToIso2Map[dialCode];
                        if (iso2List.includes(iso2)) return;
                        iso2List.push(iso2);
                    };
                    const countriesSortedByPriority = [ ...countries ].sort(((a, b) => a.priority - b.priority));
                    for (const c of countriesSortedByPriority) {
                        if (!dialCodes.has(c.dialCode)) dialCodes.add(c.dialCode);
                        for (let k = 1; k < c.dialCode.length; k++) {
                            const partialDialCode = c.dialCode.substring(0, k);
                            _addToDialCodeMap(c.iso2, partialDialCode);
                        }
                        _addToDialCodeMap(c.iso2, c.dialCode);
                        if (c.areaCodes) {
                            const rootIso2Code = dialCodeToIso2Map[c.dialCode][0];
                            for (const areaCode of c.areaCodes) {
                                for (let k = 1; k < areaCode.length; k++) {
                                    const partialAreaCode = areaCode.substring(0, k);
                                    const partialDialCode = c.dialCode + partialAreaCode;
                                    _addToDialCodeMap(rootIso2Code, partialDialCode);
                                    _addToDialCodeMap(c.iso2, partialDialCode);
                                }
                                _addToDialCodeMap(c.iso2, c.dialCode + areaCode);
                            }
                        }
                    }
                    return {
                        dialCodes,
                        dialCodeMaxLen,
                        dialCodeToIso2Map
                    };
                };
                var sortCountries = (countries, options) => {
                    if (options.countryOrder) options.countryOrder = options.countryOrder.map((iso2 => iso2.toLowerCase()));
                    countries.sort(((a, b) => {
                        const {countryOrder} = options;
                        if (countryOrder) {
                            const aIndex = countryOrder.indexOf(a.iso2);
                            const bIndex = countryOrder.indexOf(b.iso2);
                            const aIndexExists = aIndex > -1;
                            const bIndexExists = bIndex > -1;
                            if (aIndexExists || bIndexExists) {
                                if (aIndexExists && bIndexExists) return aIndex - bIndex;
                                return aIndexExists ? -1 : 1;
                            }
                        }
                        return a.name.localeCompare(b.name);
                    }));
                };
                var cacheSearchTokens = countries => {
                    for (const c of countries) {
                        c.normalisedName = normaliseString(c.name);
                        c.initials = c.normalisedName.split(/[^a-z]/).map((word => word[0])).join("");
                        c.dialCodePlus = `+${c.dialCode}`;
                    }
                };
                var beforeSetNumber = (fullNumber, hasValidDialCode, separateDialCode, selectedCountryData) => {
                    let number = fullNumber;
                    if (separateDialCode) if (hasValidDialCode) {
                        const dialCode = `+${selectedCountryData.dialCode}`;
                        const start = number[dialCode.length] === " " || number[dialCode.length] === "-" ? dialCode.length + 1 : dialCode.length;
                        number = number.substring(start);
                    }
                    return number;
                };
                var formatNumberAsYouType = (fullNumber, telInputValue, utils, selectedCountryData, separateDialCode) => {
                    const result = utils ? utils.formatNumberAsYouType(fullNumber, selectedCountryData.iso2) : fullNumber;
                    const {dialCode} = selectedCountryData;
                    if (separateDialCode && telInputValue.charAt(0) !== "+" && result.includes(`+${dialCode}`)) {
                        const afterDialCode = result.split(`+${dialCode}`)[1] || "";
                        return afterDialCode.trim();
                    }
                    return result;
                };
                var translateCursorPosition = (relevantChars, formattedValue, prevCaretPos, isDeleteForwards) => {
                    if (prevCaretPos === 0 && !isDeleteForwards) return 0;
                    let relevantCharCount = 0;
                    for (let i = 0; i < formattedValue.length; i++) {
                        if (/[+0-9]/.test(formattedValue[i])) relevantCharCount++;
                        if (relevantCharCount === relevantChars && !isDeleteForwards) return i + 1;
                        if (isDeleteForwards && relevantCharCount === relevantChars + 1) return i;
                    }
                    return formattedValue.length;
                };
                var regionlessNanpNumbers = [ "800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889" ];
                var isRegionlessNanp = number => {
                    const numeric = getNumeric(number);
                    if (numeric.startsWith(DIAL.NANP) && numeric.length >= 4) {
                        const areaCode = numeric.substring(1, 4);
                        return regionlessNanpNumbers.includes(areaCode);
                    }
                    return false;
                };
                var id = 0;
                var iso2Set = new Set(data_default.map((c => c.iso2)));
                var isIso2 = val => iso2Set.has(val);
                var Iti = class {
                    constructor(input, customOptions = {}) {
                        this.id = id++;
                        this.options = {
                            ...defaults,
                            ...customOptions
                        };
                        applyOptionSideEffects(this.options);
                        this.ui = new UI(input, this.options, this.id);
                        this.isAndroid = getIsAndroid();
                        this.promise = this._createInitPromises(this.options);
                        this.countries = processAllCountries(this.options);
                        const {dialCodes, dialCodeMaxLen, dialCodeToIso2Map} = processDialCodes(this.countries);
                        this.dialCodes = dialCodes;
                        this.dialCodeMaxLen = dialCodeMaxLen;
                        this.dialCodeToIso2Map = dialCodeToIso2Map;
                        this.countryByIso2 = new Map(this.countries.map((c => [ c.iso2, c ])));
                        this._init();
                    }
                    _updateNumeralSet(str) {
                        if (/[\u0660-\u0669]/.test(str)) this.userNumeralSet = "arabic-indic"; else if (/[\u06F0-\u06F9]/.test(str)) this.userNumeralSet = "persian"; else this.userNumeralSet = "ascii";
                    }
                    _mapAsciiToUserNumerals(str) {
                        if (!this.userNumeralSet) this._updateNumeralSet(this.ui.telInput.value);
                        if (this.userNumeralSet === "ascii") return str;
                        const base = this.userNumeralSet === "arabic-indic" ? 1632 : 1776;
                        return str.replace(/[0-9]/g, (d => String.fromCharCode(base + Number(d))));
                    }
                    _normaliseNumerals(str) {
                        if (!str) return "";
                        this._updateNumeralSet(str);
                        if (this.userNumeralSet === "ascii") return str;
                        const base = this.userNumeralSet === "arabic-indic" ? 1632 : 1776;
                        const regex = this.userNumeralSet === "arabic-indic" ? /[\u0660-\u0669]/g : /[\u06F0-\u06F9]/g;
                        return str.replace(regex, (ch => String.fromCharCode(48 + (ch.charCodeAt(0) - base))));
                    }
                    _getTelInputValue() {
                        const inputValue = this.ui.telInput.value.trim();
                        return this._normaliseNumerals(inputValue);
                    }
                    _setTelInputValue(asciiValue) {
                        this.ui.telInput.value = this._mapAsciiToUserNumerals(asciiValue);
                    }
                    _createInitPromises(options) {
                        const {initialCountry, geoIpLookup, loadUtils} = options;
                        const needsAutoCountryPromise = initialCountry === INITIAL_COUNTRY.AUTO && Boolean(geoIpLookup);
                        const needsUtilsScriptPromise = Boolean(loadUtils) && !intlTelInput.utils;
                        let autoCountryPromise;
                        if (needsAutoCountryPromise) autoCountryPromise = new Promise(((resolve, reject) => {
                            this.resolveAutoCountryPromise = resolve;
                            this.rejectAutoCountryPromise = reject;
                        })); else {
                            autoCountryPromise = Promise.resolve(void 0);
                            this.resolveAutoCountryPromise = () => {};
                            this.rejectAutoCountryPromise = () => {};
                        }
                        let utilsScriptPromise;
                        if (needsUtilsScriptPromise) utilsScriptPromise = new Promise(((resolve, reject) => {
                            this.resolveUtilsScriptPromise = resolve;
                            this.rejectUtilsScriptPromise = reject;
                        })); else {
                            utilsScriptPromise = Promise.resolve(void 0);
                            this.resolveUtilsScriptPromise = () => {};
                            this.rejectUtilsScriptPromise = () => {};
                        }
                        return Promise.all([ autoCountryPromise, utilsScriptPromise ]);
                    }
                    _init() {
                        this.selectedCountryData = {};
                        this.abortController = new AbortController;
                        this._processCountryData();
                        this.ui.generateMarkup(this.countries);
                        this._setInitialState();
                        this._initListeners();
                        this._initRequests();
                    }
                    _processCountryData() {
                        generateCountryNames(this.countries, this.options);
                        sortCountries(this.countries, this.options);
                        cacheSearchTokens(this.countries);
                    }
                    _setInitialState(overrideAutoCountry = false) {
                        const attributeValueRaw = this.ui.telInput.getAttribute("value");
                        const attributeValue = this._normaliseNumerals(attributeValueRaw);
                        const inputValue = this._getTelInputValue();
                        const useAttribute = attributeValue && attributeValue.startsWith("+") && (!inputValue || !inputValue.startsWith("+"));
                        const val = useAttribute ? attributeValue : inputValue;
                        const dialCode = this._getDialCode(val);
                        const isRegionlessNanpNumber = isRegionlessNanp(val);
                        const {initialCountry, geoIpLookup} = this.options;
                        const isAutoCountry = initialCountry === INITIAL_COUNTRY.AUTO && geoIpLookup;
                        const doingAutoCountryLookup = isAutoCountry && !overrideAutoCountry;
                        const initialCountryLower = initialCountry.toLowerCase();
                        const isValidInitialCountry = isIso2(initialCountryLower);
                        if (dialCode) if (isRegionlessNanpNumber) {
                            if (isValidInitialCountry) this._setCountry(initialCountryLower); else if (!doingAutoCountryLookup) this._setCountry(US.ISO2);
                        } else this._updateCountryFromNumber(val); else if (isValidInitialCountry) this._setCountry(initialCountryLower); else if (!doingAutoCountryLookup) this._setCountry("");
                        if (val) this._updateValFromNumber(val);
                    }
                    _initListeners() {
                        this._initTelInputListeners();
                        if (this.options.allowDropdown) this._initDropdownListeners();
                        if ((this.ui.hiddenInput || this.ui.hiddenInputCountry) && this.ui.telInput.form) this._initHiddenInputListener();
                    }
                    _initHiddenInputListener() {
                        const handleHiddenInputSubmit = () => {
                            if (this.ui.hiddenInput) this.ui.hiddenInput.value = this.getNumber();
                            if (this.ui.hiddenInputCountry) this.ui.hiddenInputCountry.value = this.selectedCountryData.iso2 || "";
                        };
                        this.ui.telInput.form?.addEventListener("submit", handleHiddenInputSubmit, {
                            signal: this.abortController.signal
                        });
                    }
                    _initDropdownListeners() {
                        const signal = this.abortController.signal;
                        const handleLabelClick = e => {
                            if (this.ui.dropdownContent.classList.contains(CLASSES.HIDE)) this.ui.telInput.focus(); else e.preventDefault();
                        };
                        const label = this.ui.telInput.closest("label");
                        if (label) label.addEventListener("click", handleLabelClick, {
                            signal
                        });
                        const handleClickSelectedCountry = () => {
                            const dropdownClosed = this.ui.dropdownContent.classList.contains(CLASSES.HIDE);
                            if (dropdownClosed && !this.ui.telInput.disabled && !this.ui.telInput.readOnly) this._openDropdown();
                        };
                        this.ui.selectedCountry.addEventListener("click", handleClickSelectedCountry, {
                            signal
                        });
                        const handleCountryContainerKeydown = e => {
                            const isDropdownHidden = this.ui.dropdownContent.classList.contains(CLASSES.HIDE);
                            if (isDropdownHidden && [ KEYS.ARROW_UP, KEYS.ARROW_DOWN, KEYS.SPACE, KEYS.ENTER ].includes(e.key)) {
                                e.preventDefault();
                                e.stopPropagation();
                                this._openDropdown();
                            }
                            if (e.key === KEYS.TAB) this._closeDropdown();
                        };
                        this.ui.countryContainer.addEventListener("keydown", handleCountryContainerKeydown, {
                            signal
                        });
                    }
                    _initRequests() {
                        const {loadUtils, initialCountry, geoIpLookup} = this.options;
                        if (loadUtils && !intlTelInput.utils) {
                            const doAttachUtils = () => {
                                intlTelInput.attachUtils(loadUtils)?.catch((() => {}));
                            };
                            if (intlTelInput.documentReady()) doAttachUtils(); else {
                                const handlePageLoad = () => {
                                    doAttachUtils();
                                };
                                window.addEventListener("load", handlePageLoad, {
                                    signal: this.abortController.signal
                                });
                            }
                        } else this.resolveUtilsScriptPromise();
                        const isAutoCountry = initialCountry === INITIAL_COUNTRY.AUTO && geoIpLookup;
                        if (isAutoCountry) if (this.selectedCountryData.iso2) this.resolveAutoCountryPromise(); else this._loadAutoCountry();
                    }
                    _loadAutoCountry() {
                        if (intlTelInput.autoCountry) this.handleAutoCountry(); else {
                            this.ui.selectedCountryInner.classList.add(CLASSES.LOADING);
                            if (!intlTelInput.startedLoadingAutoCountry) {
                                intlTelInput.startedLoadingAutoCountry = true;
                                if (typeof this.options.geoIpLookup === "function") {
                                    const successCallback = (iso2 = "") => {
                                        this.ui.selectedCountryInner.classList.remove(CLASSES.LOADING);
                                        const iso2Lower = iso2.toLowerCase();
                                        if (isIso2(iso2Lower)) {
                                            intlTelInput.autoCountry = iso2Lower;
                                            setTimeout((() => forEachInstance("handleAutoCountry")));
                                        } else forEachInstance("handleAutoCountryFailure");
                                    };
                                    const failureCallback = () => {
                                        this.ui.selectedCountryInner.classList.remove(CLASSES.LOADING);
                                        forEachInstance("handleAutoCountryFailure");
                                    };
                                    this.options.geoIpLookup(successCallback, failureCallback);
                                }
                            }
                        }
                    }
                    _openDropdownWithPlus() {
                        this._openDropdown();
                        this.ui.searchInput.value = "+";
                        this._filterCountriesByQuery("");
                    }
                    _initTelInputListeners() {
                        this._bindInputListener();
                        this._maybeBindKeydownListener();
                        this._maybeBindPasteListener();
                    }
                    _bindInputListener() {
                        const {strictMode, formatAsYouType, separateDialCode, allowDropdown, countrySearch} = this.options;
                        let userOverrideFormatting = false;
                        if (REGEX.ALPHA_UNICODE.test(this._getTelInputValue())) userOverrideFormatting = true;
                        const handleInputEvent = e => {
                            const inputValue = this._getTelInputValue();
                            if (this.isAndroid && e?.data === "+" && separateDialCode && allowDropdown && countrySearch) {
                                const currentCaretPos = this.ui.telInput.selectionStart || 0;
                                const valueBeforeCaret = inputValue.substring(0, currentCaretPos - 1);
                                const valueAfterCaret = inputValue.substring(currentCaretPos);
                                this._setTelInputValue(valueBeforeCaret + valueAfterCaret);
                                this._openDropdownWithPlus();
                                return;
                            }
                            if (this._updateCountryFromNumber(inputValue)) this._triggerCountryChange();
                            const isFormattingChar = e?.data && REGEX.NON_PLUS_NUMERIC.test(e.data);
                            const isPaste = e?.inputType === INPUT_TYPES.PASTE && inputValue;
                            if (isFormattingChar || isPaste && !strictMode) userOverrideFormatting = true; else if (!REGEX.NON_PLUS_NUMERIC.test(inputValue)) userOverrideFormatting = false;
                            const isSetNumber = e?.detail && e.detail["isSetNumber"];
                            const isAscii = this.userNumeralSet === "ascii";
                            if (formatAsYouType && !userOverrideFormatting && !isSetNumber && isAscii) {
                                const currentCaretPos = this.ui.telInput.selectionStart || 0;
                                const valueBeforeCaret = inputValue.substring(0, currentCaretPos);
                                const relevantCharsBeforeCaret = valueBeforeCaret.replace(REGEX.NON_PLUS_NUMERIC_GLOBAL, "").length;
                                const isDeleteForwards = e?.inputType === INPUT_TYPES.DELETE_FWD;
                                const fullNumber = this._getFullNumber();
                                const formattedValue = formatNumberAsYouType(fullNumber, inputValue, intlTelInput.utils, this.selectedCountryData, separateDialCode);
                                const newCaretPos = translateCursorPosition(relevantCharsBeforeCaret, formattedValue, currentCaretPos, isDeleteForwards);
                                this._setTelInputValue(formattedValue);
                                this.ui.telInput.setSelectionRange(newCaretPos, newCaretPos);
                            }
                            if (separateDialCode && inputValue.startsWith("+") && this.selectedCountryData.dialCode) {
                                const cleanNumber = beforeSetNumber(inputValue, true, separateDialCode, this.selectedCountryData);
                                this._setTelInputValue(cleanNumber);
                            }
                        };
                        this.ui.telInput.addEventListener("input", handleInputEvent, {
                            signal: this.abortController.signal
                        });
                    }
                    _maybeBindKeydownListener() {
                        const {strictMode, separateDialCode, allowDropdown, countrySearch} = this.options;
                        if (strictMode || separateDialCode) {
                            const handleKeydownEvent = e => {
                                if (e.key && e.key.length === 1 && !e.altKey && !e.ctrlKey && !e.metaKey) {
                                    if (separateDialCode && allowDropdown && countrySearch && e.key === "+") {
                                        e.preventDefault();
                                        this._openDropdownWithPlus();
                                        return;
                                    }
                                    if (strictMode) {
                                        const inputValue = this._getTelInputValue();
                                        const alreadyHasPlus = inputValue.startsWith("+");
                                        const isInitialPlus = !alreadyHasPlus && this.ui.telInput.selectionStart === 0 && e.key === "+";
                                        const normalisedKey = this._normaliseNumerals(e.key);
                                        const isNumeric = /^[0-9]$/.test(normalisedKey);
                                        const isAllowedChar = separateDialCode ? isNumeric : isInitialPlus || isNumeric;
                                        const input = this.ui.telInput;
                                        const selStart = input.selectionStart;
                                        const selEnd = input.selectionEnd;
                                        const before = inputValue.slice(0, selStart);
                                        const after = inputValue.slice(selEnd);
                                        const newValue = before + e.key + after;
                                        const newFullNumber = this._getFullNumber(newValue);
                                        const coreNumber = intlTelInput.utils.getCoreNumber(newFullNumber, this.selectedCountryData.iso2);
                                        const hasExceededMaxLength = this.maxCoreNumberLength && coreNumber.length > this.maxCoreNumberLength;
                                        const newCountry = this._getNewCountryFromNumber(newFullNumber);
                                        const isChangingDialCode = newCountry !== null;
                                        if (!isAllowedChar || hasExceededMaxLength && !isChangingDialCode && !isInitialPlus) e.preventDefault();
                                    }
                                }
                            };
                            this.ui.telInput.addEventListener("keydown", handleKeydownEvent, {
                                signal: this.abortController.signal
                            });
                        }
                    }
                    _maybeBindPasteListener() {
                        if (this.options.strictMode) {
                            const handlePasteEvent = e => {
                                e.preventDefault();
                                const input = this.ui.telInput;
                                const selStart = input.selectionStart;
                                const selEnd = input.selectionEnd;
                                const inputValue = this._getTelInputValue();
                                const before = inputValue.slice(0, selStart);
                                const after = inputValue.slice(selEnd);
                                const iso2 = this.selectedCountryData.iso2;
                                const pastedRaw = e.clipboardData.getData("text");
                                const pasted = this._normaliseNumerals(pastedRaw);
                                const initialCharSelected = selStart === 0 && selEnd > 0;
                                const allowLeadingPlus = !inputValue.startsWith("+") || initialCharSelected;
                                const allowedChars = pasted.replace(REGEX.NON_PLUS_NUMERIC_GLOBAL, "");
                                const hasLeadingPlus = allowedChars.startsWith("+");
                                const numerics = allowedChars.replace(/\+/g, "");
                                const sanitised = hasLeadingPlus && allowLeadingPlus ? `+${numerics}` : numerics;
                                let newVal = before + sanitised + after;
                                if (newVal.length > 5) {
                                    let coreNumber = intlTelInput.utils.getCoreNumber(newVal, iso2);
                                    while (coreNumber.length === 0 && newVal.length > 0) {
                                        newVal = newVal.slice(0, -1);
                                        coreNumber = intlTelInput.utils.getCoreNumber(newVal, iso2);
                                    }
                                    if (!coreNumber) return;
                                    if (this.maxCoreNumberLength && coreNumber.length > this.maxCoreNumberLength) if (input.selectionEnd === inputValue.length) {
                                        const trimLength = coreNumber.length - this.maxCoreNumberLength;
                                        newVal = newVal.slice(0, newVal.length - trimLength);
                                    } else return;
                                }
                                this._setTelInputValue(newVal);
                                const caretPos = selStart + sanitised.length;
                                input.setSelectionRange(caretPos, caretPos);
                                input.dispatchEvent(new InputEvent("input", {
                                    bubbles: true
                                }));
                            };
                            this.ui.telInput.addEventListener("paste", handlePasteEvent, {
                                signal: this.abortController.signal
                            });
                        }
                    }
                    _cap(number) {
                        const max = Number(this.ui.telInput.getAttribute("maxlength"));
                        return max && number.length > max ? number.substring(0, max) : number;
                    }
                    _trigger(name, detailProps = {}) {
                        const e = new CustomEvent(name, {
                            bubbles: true,
                            cancelable: true,
                            detail: detailProps
                        });
                        this.ui.telInput.dispatchEvent(e);
                    }
                    _openDropdown() {
                        const {fixDropdownWidth, countrySearch} = this.options;
                        this.dropdownAbortController = new AbortController;
                        if (fixDropdownWidth) this.ui.dropdownContent.style.width = `${this.ui.telInput.offsetWidth}px`;
                        this.ui.dropdownContent.classList.remove(CLASSES.HIDE);
                        this.ui.selectedCountry.setAttribute(ARIA.EXPANDED, "true");
                        this._setDropdownPosition();
                        if (countrySearch) {
                            const firstCountryItem = this.ui.countryList.firstElementChild;
                            if (firstCountryItem) {
                                this.ui.highlightListItem(firstCountryItem, false);
                                this.ui.countryList.scrollTop = 0;
                            }
                            this.ui.searchInput.focus();
                        }
                        this._bindDropdownListeners();
                        this.ui.dropdownArrow.classList.add(CLASSES.ARROW_UP);
                        this._trigger(EVENTS.OPEN_COUNTRY_DROPDOWN);
                    }
                    _setDropdownPosition() {
                        if (this.options.dropdownContainer) this.options.dropdownContainer.appendChild(this.ui.dropdown);
                        if (!this.options.useFullscreenPopup) {
                            const inputPosRelativeToVP = this.ui.telInput.getBoundingClientRect();
                            const inputHeight = this.ui.telInput.offsetHeight;
                            if (this.options.dropdownContainer) {
                                this.ui.dropdown.style.top = `${inputPosRelativeToVP.top + inputHeight}px`;
                                this.ui.dropdown.style.left = `${inputPosRelativeToVP.left}px`;
                                const handleWindowScroll = () => this._closeDropdown();
                                window.addEventListener("scroll", handleWindowScroll, {
                                    signal: this.dropdownAbortController.signal
                                });
                            }
                        }
                    }
                    _bindDropdownListeners() {
                        const signal = this.dropdownAbortController.signal;
                        this._bindDropdownMouseoverListener(signal);
                        this._bindDropdownCountryClickListener(signal);
                        this._bindDropdownClickOffListener(signal);
                        this._bindDropdownKeydownListener(signal);
                        if (this.options.countrySearch) this._bindDropdownSearchListeners(signal);
                    }
                    _bindDropdownMouseoverListener(signal) {
                        const handleMouseoverCountryList = e => {
                            const listItem = e.target?.closest(`.${CLASSES.COUNTRY_ITEM}`);
                            if (listItem) this.ui.highlightListItem(listItem, false);
                        };
                        this.ui.countryList.addEventListener("mouseover", handleMouseoverCountryList, {
                            signal
                        });
                    }
                    _bindDropdownCountryClickListener(signal) {
                        const handleClickCountryList = e => {
                            const listItem = e.target?.closest(`.${CLASSES.COUNTRY_ITEM}`);
                            if (listItem) this._selectListItem(listItem);
                        };
                        this.ui.countryList.addEventListener("click", handleClickCountryList, {
                            signal
                        });
                    }
                    _bindDropdownClickOffListener(signal) {
                        const handleClickOffToClose = e => {
                            const target = e.target;
                            const clickedInsideDropdown = !!target.closest(`#iti-${this.id}__dropdown-content`);
                            if (!clickedInsideDropdown) this._closeDropdown();
                        };
                        setTimeout((() => {
                            document.documentElement.addEventListener("click", handleClickOffToClose, {
                                signal
                            });
                        }), 0);
                    }
                    _bindDropdownKeydownListener(signal) {
                        let query = "";
                        let queryTimer = null;
                        const handleKeydownOnDropdown = e => {
                            const allowedKeys = [ KEYS.ARROW_UP, KEYS.ARROW_DOWN, KEYS.ENTER, KEYS.ESC ];
                            if (allowedKeys.includes(e.key)) {
                                e.preventDefault();
                                e.stopPropagation();
                                if (e.key === KEYS.ARROW_UP || e.key === KEYS.ARROW_DOWN) this._handleUpDownKey(e.key); else if (e.key === KEYS.ENTER) this._handleEnterKey(); else if (e.key === KEYS.ESC) {
                                    this._closeDropdown();
                                    this.ui.selectedCountry.focus();
                                }
                            }
                            if (!this.options.countrySearch && REGEX.HIDDEN_SEARCH_CHAR.test(e.key)) {
                                e.stopPropagation();
                                if (queryTimer) clearTimeout(queryTimer);
                                query += e.key.toLowerCase();
                                this._searchForCountry(query);
                                queryTimer = setTimeout((() => {
                                    query = "";
                                }), TIMINGS.HIDDEN_SEARCH_RESET_MS);
                            }
                        };
                        document.addEventListener("keydown", handleKeydownOnDropdown, {
                            signal
                        });
                    }
                    _bindDropdownSearchListeners(signal) {
                        const doFilter = () => {
                            const inputQuery = this.ui.searchInput.value.trim();
                            this._filterCountriesByQuery(inputQuery);
                            if (this.ui.searchInput.value) this.ui.searchClearButton.classList.remove(CLASSES.HIDE); else this.ui.searchClearButton.classList.add(CLASSES.HIDE);
                        };
                        let keyupTimer = null;
                        const handleSearchChange = () => {
                            if (keyupTimer) clearTimeout(keyupTimer);
                            keyupTimer = setTimeout((() => {
                                doFilter();
                                keyupTimer = null;
                            }), 100);
                        };
                        this.ui.searchInput.addEventListener("input", handleSearchChange, {
                            signal
                        });
                        const handleSearchClear = () => {
                            this.ui.searchInput.value = "";
                            this.ui.searchInput.focus();
                            doFilter();
                        };
                        this.ui.searchClearButton.addEventListener("click", handleSearchClear, {
                            signal
                        });
                    }
                    _searchForCountry(query) {
                        const match = findFirstCountryStartingWith(this.countries, query);
                        if (match) {
                            const listItem = match.nodeById[this.id];
                            this.ui.highlightListItem(listItem, false);
                            this.ui.scrollTo(listItem);
                        }
                    }
                    _filterCountriesByQuery(query) {
                        let matchedCountries;
                        if (query === "") matchedCountries = this.countries; else matchedCountries = getMatchedCountries(this.countries, query);
                        this.ui.filterCountries(matchedCountries);
                    }
                    _handleUpDownKey(key) {
                        let next = key === KEYS.ARROW_UP ? this.ui.highlightedItem?.previousElementSibling : this.ui.highlightedItem?.nextElementSibling;
                        if (!next && this.ui.countryList.childElementCount > 1) next = key === KEYS.ARROW_UP ? this.ui.countryList.lastElementChild : this.ui.countryList.firstElementChild;
                        if (next) {
                            this.ui.scrollTo(next);
                            this.ui.highlightListItem(next, false);
                        }
                    }
                    _handleEnterKey() {
                        if (this.ui.highlightedItem) this._selectListItem(this.ui.highlightedItem);
                    }
                    _updateValFromNumber(fullNumber) {
                        let number = fullNumber;
                        if (this.options.formatOnDisplay && intlTelInput.utils && this.selectedCountryData) {
                            const useNational = this.options.nationalMode || !number.startsWith("+") && !this.options.separateDialCode;
                            const {NATIONAL, INTERNATIONAL} = intlTelInput.utils.numberFormat;
                            const format = useNational ? NATIONAL : INTERNATIONAL;
                            number = intlTelInput.utils.formatNumber(number, this.selectedCountryData.iso2, format);
                        }
                        number = this._beforeSetNumber(number);
                        this._setTelInputValue(number);
                    }
                    _updateCountryFromNumber(fullNumber) {
                        const iso2 = this._getNewCountryFromNumber(fullNumber);
                        if (iso2 !== null) return this._setCountry(iso2);
                        return false;
                    }
                    _ensureHasDialCode(number) {
                        const {dialCode, nationalPrefix} = this.selectedCountryData;
                        const alreadyHasPlus = number.startsWith("+");
                        if (alreadyHasPlus || !dialCode) return number;
                        const hasPrefix = nationalPrefix && number.startsWith(nationalPrefix) && !this.options.separateDialCode;
                        const cleanNumber = hasPrefix ? number.substring(1) : number;
                        return `+${dialCode}${cleanNumber}`;
                    }
                    _getNewCountryFromNumber(fullNumber) {
                        const plusIndex = fullNumber.indexOf("+");
                        let number = plusIndex ? fullNumber.substring(plusIndex) : fullNumber;
                        const selectedIso2 = this.selectedCountryData.iso2;
                        const selectedDialCode = this.selectedCountryData.dialCode;
                        number = this._ensureHasDialCode(number);
                        const dialCodeMatch = this._getDialCode(number, true);
                        const numeric = getNumeric(number);
                        if (dialCodeMatch) {
                            const dialCodeMatchNumeric = getNumeric(dialCodeMatch);
                            const iso2Codes = this.dialCodeToIso2Map[dialCodeMatchNumeric];
                            if (iso2Codes.length === 1) {
                                if (iso2Codes[0] === selectedIso2) return null;
                                return iso2Codes[0];
                            }
                            if (!selectedIso2 && this.defaultCountry && iso2Codes.includes(this.defaultCountry)) return this.defaultCountry;
                            const isRegionlessNanpNumber = selectedDialCode === DIAL.NANP && isRegionlessNanp(numeric);
                            if (isRegionlessNanpNumber) return null;
                            const {areaCodes, priority} = this.selectedCountryData;
                            if (areaCodes) {
                                const dialCodeAreaCodes = areaCodes.map((areaCode => `${selectedDialCode}${areaCode}`));
                                for (const dialCodeAreaCode of dialCodeAreaCodes) if (numeric.startsWith(dialCodeAreaCode)) return null;
                            }
                            const isMainCountry = priority === 0;
                            const hasAreaCodesButNoneMatched = areaCodes && !isMainCountry && numeric.length > dialCodeMatchNumeric.length;
                            const isValidSelection = selectedIso2 && iso2Codes.includes(selectedIso2) && !hasAreaCodesButNoneMatched;
                            const alreadySelected = selectedIso2 === iso2Codes[0];
                            if (!isValidSelection && !alreadySelected) return iso2Codes[0];
                        } else if (number.startsWith("+") && numeric.length) {
                            const currentDial = this.selectedCountryData.dialCode || "";
                            if (currentDial && currentDial.startsWith(numeric)) return null;
                            return "";
                        } else if ((!number || number === "+") && !selectedIso2 && this.defaultCountry) return this.defaultCountry;
                        return null;
                    }
                    _setCountry(iso2) {
                        const {separateDialCode, showFlags, i18n, allowDropdown} = this.options;
                        const prevIso2 = this.selectedCountryData.iso2 || "";
                        if (allowDropdown) this.ui.updateSelectedItem(iso2);
                        this.selectedCountryData = iso2 ? this.countryByIso2.get(iso2) : {};
                        if (this.selectedCountryData.iso2) this.defaultCountry = this.selectedCountryData.iso2;
                        if (this.ui.selectedCountry) {
                            const flagClass = iso2 && showFlags ? `${CLASSES.FLAG} iti__${iso2}` : `${CLASSES.FLAG} ${CLASSES.GLOBE}`;
                            let ariaLabel, title, selectedCountryInner;
                            if (iso2) {
                                const {name, dialCode} = this.selectedCountryData;
                                title = name;
                                ariaLabel = i18n.selectedCountryAriaLabel.replace("${countryName}", name).replace("${dialCode}", `+${dialCode}`);
                                selectedCountryInner = showFlags ? "" : buildGlobeIcon();
                            } else {
                                title = i18n.noCountrySelected;
                                ariaLabel = i18n.noCountrySelected;
                                selectedCountryInner = buildGlobeIcon();
                            }
                            this.ui.selectedCountryInner.className = flagClass;
                            this.ui.selectedCountry.setAttribute("title", title);
                            this.ui.selectedCountry.setAttribute(ARIA.LABEL, ariaLabel);
                            this.ui.selectedCountryInner.innerHTML = selectedCountryInner;
                        }
                        if (separateDialCode) {
                            const dialCode = this.selectedCountryData.dialCode ? `+${this.selectedCountryData.dialCode}` : "";
                            this.ui.selectedDialCode.textContent = dialCode;
                            this.ui.updateInputPadding();
                        }
                        this._updatePlaceholder();
                        this._updateMaxLength();
                        return prevIso2 !== iso2;
                    }
                    _updateMaxLength() {
                        const {strictMode, placeholderNumberType, allowedNumberTypes} = this.options;
                        const {iso2} = this.selectedCountryData;
                        if (strictMode && intlTelInput.utils) if (iso2) {
                            const numberType = intlTelInput.utils.numberType[placeholderNumberType];
                            let exampleNumber = intlTelInput.utils.getExampleNumber(iso2, false, numberType, true);
                            let validNumber = exampleNumber;
                            while (intlTelInput.utils.isPossibleNumber(exampleNumber, iso2, allowedNumberTypes)) {
                                validNumber = exampleNumber;
                                exampleNumber += "0";
                            }
                            const coreNumber = intlTelInput.utils.getCoreNumber(validNumber, iso2);
                            this.maxCoreNumberLength = coreNumber.length;
                            if (iso2 === "by") this.maxCoreNumberLength = coreNumber.length + 1;
                        } else this.maxCoreNumberLength = null;
                    }
                    _updatePlaceholder() {
                        const {autoPlaceholder, placeholderNumberType, nationalMode, customPlaceholder} = this.options;
                        const shouldSetPlaceholder = autoPlaceholder === PLACEHOLDER_MODES.AGGRESSIVE || !this.ui.hadInitialPlaceholder && autoPlaceholder === PLACEHOLDER_MODES.POLITE;
                        if (intlTelInput.utils && shouldSetPlaceholder) {
                            const numberType = intlTelInput.utils.numberType[placeholderNumberType];
                            let placeholder = this.selectedCountryData.iso2 ? intlTelInput.utils.getExampleNumber(this.selectedCountryData.iso2, nationalMode, numberType) : "";
                            placeholder = this._beforeSetNumber(placeholder);
                            if (typeof customPlaceholder === "function") placeholder = customPlaceholder(placeholder, this.selectedCountryData);
                            this.ui.telInput.setAttribute("placeholder", placeholder);
                        }
                    }
                    _selectListItem(listItem) {
                        const iso2 = listItem.dataset[DATA_KEYS.COUNTRY_CODE];
                        const countryChanged = this._setCountry(iso2);
                        this._closeDropdown();
                        const dialCode = listItem.dataset[DATA_KEYS.DIAL_CODE];
                        this._updateDialCode(dialCode);
                        if (this.options.formatOnDisplay) {
                            const inputValue = this._getTelInputValue();
                            this._updateValFromNumber(inputValue);
                        }
                        this.ui.telInput.focus();
                        if (countryChanged) this._triggerCountryChange();
                    }
                    _closeDropdown() {
                        if (this.ui.dropdownContent.classList.contains(CLASSES.HIDE)) return;
                        this.ui.dropdownContent.classList.add(CLASSES.HIDE);
                        this.ui.selectedCountry.setAttribute(ARIA.EXPANDED, "false");
                        if (this.options.countrySearch) {
                            this.ui.searchInput.removeAttribute(ARIA.ACTIVE_DESCENDANT);
                            if (this.ui.highlightedItem) {
                                this.ui.highlightedItem.classList.remove(CLASSES.HIGHLIGHT);
                                this.ui.highlightedItem = null;
                            }
                        }
                        this.ui.dropdownArrow.classList.remove(CLASSES.ARROW_UP);
                        this.dropdownAbortController.abort();
                        this.dropdownAbortController = null;
                        if (this.options.dropdownContainer) this.ui.dropdown.remove();
                        this._trigger(EVENTS.CLOSE_COUNTRY_DROPDOWN);
                    }
                    _updateDialCode(newDialCodeBare) {
                        const inputVal = this._getTelInputValue();
                        const newDialCode = `+${newDialCodeBare}`;
                        let newNumber;
                        if (inputVal.startsWith("+")) {
                            const prevDialCode = this._getDialCode(inputVal);
                            if (prevDialCode) newNumber = inputVal.replace(prevDialCode, newDialCode); else newNumber = newDialCode;
                            this._setTelInputValue(newNumber);
                        }
                    }
                    _getDialCode(number, includeAreaCode) {
                        let dialCode = "";
                        if (number.startsWith("+")) {
                            let numericChars = "";
                            let foundBaseDialCode = false;
                            for (let i = 0; i < number.length; i++) {
                                const c = number.charAt(i);
                                if (/[0-9]/.test(c)) {
                                    numericChars += c;
                                    const hasMapEntry = Boolean(this.dialCodeToIso2Map[numericChars]);
                                    if (!hasMapEntry) break;
                                    if (this.dialCodes.has(numericChars)) {
                                        dialCode = number.substring(0, i + 1);
                                        foundBaseDialCode = true;
                                        if (!includeAreaCode) break;
                                    } else if (includeAreaCode && foundBaseDialCode) dialCode = number.substring(0, i + 1);
                                    if (numericChars.length === this.dialCodeMaxLen) break;
                                }
                            }
                        }
                        return dialCode;
                    }
                    _getFullNumber(overrideVal) {
                        const val = overrideVal ? this._normaliseNumerals(overrideVal) : this._getTelInputValue();
                        const {dialCode} = this.selectedCountryData;
                        let prefix;
                        const numericVal = getNumeric(val);
                        if (this.options.separateDialCode && !val.startsWith("+") && dialCode && numericVal) prefix = `+${dialCode}`; else prefix = "";
                        return prefix + val;
                    }
                    _beforeSetNumber(fullNumber) {
                        const hasValidDialCode = Boolean(this._getDialCode(fullNumber));
                        const number = beforeSetNumber(fullNumber, hasValidDialCode, this.options.separateDialCode, this.selectedCountryData);
                        return this._cap(number);
                    }
                    _triggerCountryChange() {
                        this._trigger(EVENTS.COUNTRY_CHANGE);
                    }
                    handleAutoCountry() {
                        if (this.options.initialCountry === INITIAL_COUNTRY.AUTO && intlTelInput.autoCountry) {
                            this.defaultCountry = intlTelInput.autoCountry;
                            const hasSelectedCountryOrGlobe = this.selectedCountryData.iso2 || this.ui.selectedCountryInner.classList.contains(CLASSES.GLOBE);
                            if (!hasSelectedCountryOrGlobe) this.setCountry(this.defaultCountry);
                            this.resolveAutoCountryPromise();
                        }
                    }
                    handleAutoCountryFailure() {
                        this._setInitialState(true);
                        this.rejectAutoCountryPromise();
                    }
                    handleUtils() {
                        if (intlTelInput.utils) {
                            const inputValue = this._getTelInputValue();
                            if (inputValue) this._updateValFromNumber(inputValue);
                            if (this.selectedCountryData.iso2) {
                                this._updatePlaceholder();
                                this._updateMaxLength();
                            }
                        }
                        this.resolveUtilsScriptPromise();
                    }
                    handleUtilsFailure(error) {
                        this.rejectUtilsScriptPromise(error);
                    }
                    destroy() {
                        if (!this.ui.telInput) return;
                        if (this.options.allowDropdown) this._closeDropdown();
                        this.abortController.abort();
                        this.abortController = null;
                        this.ui.destroy();
                        if (intlTelInput.instances instanceof Map) intlTelInput.instances.delete(this.id); else delete intlTelInput.instances[this.id];
                    }
                    getExtension() {
                        if (intlTelInput.utils) return intlTelInput.utils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2);
                        return "";
                    }
                    getNumber(format) {
                        if (intlTelInput.utils) {
                            const {iso2} = this.selectedCountryData;
                            const fullNumber = this._getFullNumber();
                            const formattedNumber = intlTelInput.utils.formatNumber(fullNumber, iso2, format);
                            return this._mapAsciiToUserNumerals(formattedNumber);
                        }
                        return "";
                    }
                    getNumberType() {
                        if (intlTelInput.utils) return intlTelInput.utils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2);
                        return SENTINELS.UNKNOWN_NUMBER_TYPE;
                    }
                    getSelectedCountryData() {
                        return this.selectedCountryData;
                    }
                    getValidationError() {
                        if (intlTelInput.utils) {
                            const {iso2} = this.selectedCountryData;
                            return intlTelInput.utils.getValidationError(this._getFullNumber(), iso2);
                        }
                        return SENTINELS.UNKNOWN_VALIDATION_ERROR;
                    }
                    isValidNumber() {
                        const {dialCode, iso2} = this.selectedCountryData;
                        if (dialCode === UK.DIAL_CODE && intlTelInput.utils) {
                            const number = this._getFullNumber();
                            const coreNumber = intlTelInput.utils.getCoreNumber(number, iso2);
                            if (coreNumber[0] === UK.MOBILE_PREFIX && coreNumber.length !== UK.MOBILE_CORE_LENGTH) return false;
                        }
                        return this._validateNumber(false);
                    }
                    isValidNumberPrecise() {
                        return this._validateNumber(true);
                    }
                    _utilsIsPossibleNumber(val) {
                        return intlTelInput.utils ? intlTelInput.utils.isPossibleNumber(val, this.selectedCountryData.iso2, this.options.allowedNumberTypes) : null;
                    }
                    _validateNumber(precise) {
                        if (!intlTelInput.utils) return null;
                        if (!this.selectedCountryData.iso2) return false;
                        const {allowNumberExtensions, allowPhonewords} = this.options;
                        const testValidity = s => precise ? this._utilsIsValidNumber(s) : this._utilsIsPossibleNumber(s);
                        const val = this._getFullNumber();
                        if (!testValidity(val)) return false;
                        const alphaCharPosition = val.search(REGEX.ALPHA_UNICODE);
                        const hasAlphaChar = alphaCharPosition > -1;
                        if (hasAlphaChar) {
                            const selectedIso2 = this.selectedCountryData.iso2;
                            const hasExtension = Boolean(intlTelInput.utils.getExtension(val, selectedIso2));
                            if (hasExtension) return allowNumberExtensions;
                            return allowPhonewords;
                        }
                        return true;
                    }
                    _utilsIsValidNumber(val) {
                        return intlTelInput.utils ? intlTelInput.utils.isValidNumber(val, this.selectedCountryData.iso2, this.options.allowedNumberTypes) : null;
                    }
                    setCountry(iso2) {
                        const iso2Lower = iso2?.toLowerCase();
                        if (!isIso2(iso2Lower)) throw new Error(`Invalid country code: '${iso2Lower}'`);
                        const currentCountry = this.selectedCountryData.iso2;
                        const isCountryChange = iso2 && iso2Lower !== currentCountry || !iso2 && currentCountry;
                        if (isCountryChange) {
                            this._setCountry(iso2Lower);
                            this._updateDialCode(this.selectedCountryData.dialCode);
                            if (this.options.formatOnDisplay) {
                                const inputValue = this._getTelInputValue();
                                this._updateValFromNumber(inputValue);
                            }
                            this._triggerCountryChange();
                        }
                    }
                    setNumber(number) {
                        const normalisedNumber = this._normaliseNumerals(number);
                        const countryChanged = this._updateCountryFromNumber(normalisedNumber);
                        this._updateValFromNumber(normalisedNumber);
                        if (countryChanged) this._triggerCountryChange();
                        this._trigger(EVENTS.INPUT, {
                            isSetNumber: true
                        });
                    }
                    setPlaceholderNumberType(type) {
                        this.options.placeholderNumberType = type;
                        this._updatePlaceholder();
                    }
                    setDisabled(disabled) {
                        this.ui.telInput.disabled = disabled;
                        if (disabled) this.ui.selectedCountry.setAttribute("disabled", "true"); else this.ui.selectedCountry.removeAttribute("disabled");
                    }
                };
                var attachUtils = source => {
                    if (!intlTelInput.utils && !intlTelInput.startedLoadingUtilsScript) {
                        let loadCall;
                        if (typeof source === "function") try {
                            loadCall = Promise.resolve(source());
                        } catch (error) {
                            return Promise.reject(error);
                        } else return Promise.reject(new TypeError(`The argument passed to attachUtils must be a function that returns a promise for the utilities module, not ${typeof source}`));
                        intlTelInput.startedLoadingUtilsScript = true;
                        return loadCall.then((module => {
                            const utils = module?.default;
                            if (!utils || typeof utils !== "object") throw new TypeError("The loader function passed to attachUtils did not resolve to a module object with utils as its default export.");
                            intlTelInput.utils = utils;
                            forEachInstance("handleUtils");
                            return true;
                        })).catch((error => {
                            forEachInstance("handleUtilsFailure", error);
                            throw error;
                        }));
                    }
                    return null;
                };
                var forEachInstance = (method, ...args) => {
                    Object.values(intlTelInput.instances).forEach((instance => {
                        const fn = instance[method];
                        if (typeof fn === "function") fn.apply(instance, args);
                    }));
                };
                var intlTelInput = Object.assign(((input, options) => {
                    const iti = new Iti(input, options);
                    intlTelInput.instances[iti.id] = iti;
                    input.iti = iti;
                    return iti;
                }), {
                    defaults,
                    documentReady: () => document.readyState === "complete",
                    getCountryData: () => data_default,
                    getInstance: input => {
                        const id2 = input.dataset.intlTelInputId;
                        return id2 ? intlTelInput.instances[id2] : null;
                    },
                    instances: {},
                    attachUtils,
                    startedLoadingUtilsScript: false,
                    startedLoadingAutoCountry: false,
                    version: "26.3.1"
                });
                var intl_tel_input_default = intlTelInput;
                return __toCommonJS(intl_tel_input_exports);
            })();
            return factoryOutput.default;
        }));
    }
} ]);