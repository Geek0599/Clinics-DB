(() => {
    var __webpack_modules__ = {
        9726: (module, __unused_webpack_exports, __webpack_require__) => {
            var map = {
                "./ar/index.js": [ 4335, 4335 ],
                "./bg/index.js": [ 1031, 1031 ],
                "./bn/index.js": [ 1608, 1608 ],
                "./bs/index.js": [ 1779, 1779 ],
                "./ca/index.js": [ 6320, 6320 ],
                "./cs/index.js": [ 1826, 1826 ],
                "./da/index.js": [ 9075, 9075 ],
                "./de/index.js": [ 5671, 5671 ],
                "./el/index.js": [ 7169, 7169 ],
                "./en/index.js": [ 1599, 1599 ],
                "./es/index.js": [ 2716, 2716 ],
                "./et/index.js": [ 9401, 9401 ],
                "./fa/index.js": [ 4345, 4345 ],
                "./fi/index.js": [ 3041, 3041 ],
                "./fr/index.js": [ 7792, 7792 ],
                "./hi/index.js": [ 6095, 6095 ],
                "./hr/index.js": [ 3826, 3826 ],
                "./hu/index.js": [ 6067, 6067 ],
                "./id/index.js": [ 9221, 9221 ],
                "./it/index.js": [ 6949, 6949 ],
                "./ja/index.js": [ 7421, 7421 ],
                "./kn/index.js": [ 3445, 3445 ],
                "./ko/index.js": [ 6206, 6206 ],
                "./lt/index.js": [ 6504, 6504 ],
                "./mr/index.js": [ 8459, 8459 ],
                "./nl/index.js": [ 8222, 8222 ],
                "./no/index.js": [ 7923, 7923 ],
                "./pl/index.js": [ 7484, 7484 ],
                "./pt/index.js": [ 772, 772 ],
                "./ro/index.js": [ 8191, 8191 ],
                "./ru/index.js": [ 4809, 4809 ],
                "./sk/index.js": [ 7082, 7082 ],
                "./sl/index.js": [ 6299, 6299 ],
                "./sq/index.js": [ 9616, 9616 ],
                "./sr/index.js": [ 3225, 3225 ],
                "./sv/index.js": [ 2629, 2629 ],
                "./te/index.js": [ 6471, 6471 ],
                "./th/index.js": [ 468, 468 ],
                "./tr/index.js": [ 62, 62 ],
                "./uk/index.js": [ 580, 580 ],
                "./ur/index.js": [ 3747, 3747 ],
                "./uz/index.js": [ 3595, 3595 ],
                "./vi/index.js": [ 6129, 6129 ],
                "./zh-hk/index.js": [ 3596, 3596 ],
                "./zh/index.js": [ 2574, 2574 ]
            };
            function webpackAsyncContext(req) {
                if (!__webpack_require__.o(map, req)) return Promise.resolve().then((() => {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = "MODULE_NOT_FOUND";
                    throw e;
                }));
                var ids = map[req], id = ids[0];
                return __webpack_require__.e(ids[1]).then((() => __webpack_require__(id)));
            }
            webpackAsyncContext.keys = () => Object.keys(map);
            webpackAsyncContext.id = 9726;
            module.exports = webpackAsyncContext;
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        return module.exports;
    }
    __webpack_require__.m = __webpack_modules__;
    (() => {
        var getProto = Object.getPrototypeOf ? obj => Object.getPrototypeOf(obj) : obj => obj.__proto__;
        var leafPrototypes;
        __webpack_require__.t = function(value, mode) {
            if (mode & 1) value = this(value);
            if (mode & 8) return value;
            if (typeof value === "object" && value) {
                if (mode & 4 && value.__esModule) return value;
                if (mode & 16 && typeof value.then === "function") return value;
            }
            var ns = Object.create(null);
            __webpack_require__.r(ns);
            var def = {};
            leafPrototypes = leafPrototypes || [ null, getProto({}), getProto([]), getProto(getProto) ];
            for (var current = mode & 2 && value; typeof current == "object" && !~leafPrototypes.indexOf(current); current = getProto(current)) Object.getOwnPropertyNames(current).forEach((key => def[key] = () => value[key]));
            def["default"] = () => value;
            __webpack_require__.d(ns, def);
            return ns;
        };
    })();
    (() => {
        __webpack_require__.d = (exports, definition) => {
            for (var key in definition) if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) Object.defineProperty(exports, key, {
                enumerable: true,
                get: definition[key]
            });
        };
    })();
    (() => {
        __webpack_require__.f = {};
        __webpack_require__.e = chunkId => Promise.all(Object.keys(__webpack_require__.f).reduce(((promises, key) => {
            __webpack_require__.f[key](chunkId, promises);
            return promises;
        }), []));
    })();
    (() => {
        __webpack_require__.u = chunkId => chunkId + ".js";
    })();
    (() => {
        __webpack_require__.miniCssF = chunkId => "../css/" + chunkId + ".css";
    })();
    (() => {
        __webpack_require__.g = function() {
            if (typeof globalThis === "object") return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if (typeof window === "object") return window;
            }
        }();
    })();
    (() => {
        __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
    })();
    (() => {
        var inProgress = {};
        var dataWebpackPrefix = "start-template-multipage:";
        __webpack_require__.l = (url, done, key, chunkId) => {
            if (inProgress[url]) {
                inProgress[url].push(done);
                return;
            }
            var script, needAttach;
            if (key !== void 0) {
                var scripts = document.getElementsByTagName("script");
                for (var i = 0; i < scripts.length; i++) {
                    var s = scripts[i];
                    if (s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) {
                        script = s;
                        break;
                    }
                }
            }
            if (!script) {
                needAttach = true;
                script = document.createElement("script");
                script.charset = "utf-8";
                script.timeout = 120;
                if (__webpack_require__.nc) script.setAttribute("nonce", __webpack_require__.nc);
                script.setAttribute("data-webpack", dataWebpackPrefix + key);
                script.src = url;
            }
            inProgress[url] = [ done ];
            var onScriptComplete = (prev, event) => {
                script.onerror = script.onload = null;
                clearTimeout(timeout);
                var doneFns = inProgress[url];
                delete inProgress[url];
                script.parentNode && script.parentNode.removeChild(script);
                doneFns && doneFns.forEach((fn => fn(event)));
                if (prev) return prev(event);
            };
            var timeout = setTimeout(onScriptComplete.bind(null, void 0, {
                type: "timeout",
                target: script
            }), 12e4);
            script.onerror = onScriptComplete.bind(null, script.onerror);
            script.onload = onScriptComplete.bind(null, script.onload);
            needAttach && document.head.appendChild(script);
        };
    })();
    (() => {
        __webpack_require__.r = exports => {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module"
            });
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
        };
    })();
    (() => {
        __webpack_require__.p = "/";
    })();
    (() => {
        if (typeof document === "undefined") return;
        var createStylesheet = (chunkId, fullhref, oldTag, resolve, reject) => {
            var linkTag = document.createElement("link");
            linkTag.rel = "stylesheet";
            linkTag.type = "text/css";
            if (__webpack_require__.nc) linkTag.nonce = __webpack_require__.nc;
            var onLinkComplete = event => {
                linkTag.onerror = linkTag.onload = null;
                if (event.type === "load") resolve(); else {
                    var errorType = event && event.type;
                    var realHref = event && event.target && event.target.href || fullhref;
                    var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + errorType + ": " + realHref + ")");
                    err.name = "ChunkLoadError";
                    err.code = "CSS_CHUNK_LOAD_FAILED";
                    err.type = errorType;
                    err.request = realHref;
                    if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag);
                    reject(err);
                }
            };
            linkTag.onerror = linkTag.onload = onLinkComplete;
            linkTag.href = fullhref;
            if (oldTag) oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling); else document.head.appendChild(linkTag);
            return linkTag;
        };
        var findStylesheet = (href, fullhref) => {
            var existingLinkTags = document.getElementsByTagName("link");
            for (var i = 0; i < existingLinkTags.length; i++) {
                var tag = existingLinkTags[i];
                var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
                if (tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
            }
            var existingStyleTags = document.getElementsByTagName("style");
            for (i = 0; i < existingStyleTags.length; i++) {
                tag = existingStyleTags[i];
                dataHref = tag.getAttribute("data-href");
                if (dataHref === href || dataHref === fullhref) return tag;
            }
        };
        var loadStylesheet = chunkId => new Promise(((resolve, reject) => {
            var href = __webpack_require__.miniCssF(chunkId);
            var fullhref = __webpack_require__.p + href;
            if (findStylesheet(href, fullhref)) return resolve();
            createStylesheet(chunkId, fullhref, null, resolve, reject);
        }));
        var installedCssChunks = {
            5052: 0
        };
        __webpack_require__.f.miniCss = (chunkId, promises) => {
            var cssChunks = {
                1285: 1
            };
            if (installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]); else if (installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then((() => {
                installedCssChunks[chunkId] = 0;
            }), (e => {
                delete installedCssChunks[chunkId];
                throw e;
            })));
        };
    })();
    (() => {
        var installedChunks = {
            5052: 0
        };
        __webpack_require__.f.j = (chunkId, promises) => {
            var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : void 0;
            if (installedChunkData !== 0) if (installedChunkData) promises.push(installedChunkData[2]); else if (true) {
                var promise = new Promise(((resolve, reject) => installedChunkData = installedChunks[chunkId] = [ resolve, reject ]));
                promises.push(installedChunkData[2] = promise);
                var url = __webpack_require__.p + __webpack_require__.u(chunkId);
                var error = new Error;
                var loadingEnded = event => {
                    if (__webpack_require__.o(installedChunks, chunkId)) {
                        installedChunkData = installedChunks[chunkId];
                        if (installedChunkData !== 0) installedChunks[chunkId] = void 0;
                        if (installedChunkData) {
                            var errorType = event && (event.type === "load" ? "missing" : event.type);
                            var realSrc = event && event.target && event.target.src;
                            error.message = "Loading chunk " + chunkId + " failed.\n(" + errorType + ": " + realSrc + ")";
                            error.name = "ChunkLoadError";
                            error.type = errorType;
                            error.request = realSrc;
                            installedChunkData[1](error);
                        }
                    }
                };
                __webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
            }
        };
        var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
            var [chunkIds, moreModules, runtime] = data;
            var moduleId, chunkId, i = 0;
            if (chunkIds.some((id => installedChunks[id] !== 0))) {
                for (moduleId in moreModules) if (__webpack_require__.o(moreModules, moduleId)) __webpack_require__.m[moduleId] = moreModules[moduleId];
                if (runtime) runtime(__webpack_require__);
            }
            if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
            for (;i < chunkIds.length; i++) {
                chunkId = chunkIds[i];
                if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) installedChunks[chunkId][0]();
                installedChunks[chunkId] = 0;
            }
        };
        var chunkLoadingGlobal = self["webpackChunkstart_template_multipage"] = self["webpackChunkstart_template_multipage"] || [];
        chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
        chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
    })();
    (() => {
        "use strict";
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        const isHover = () => window.matchMedia("(hover: hover) and (pointer: fine)").matches;
        function addLoadedClass() {
            window.addEventListener("load", (function() {
                setTimeout((function() {
                    document.documentElement.classList.add("loaded");
                }), 0);
            }));
        }
        let functions_bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) functions_bodyUnlock(delay); else functions_bodyLock(delay);
        };
        let functions_bodyUnlock = (delay = 500) => {
            if (functions_bodyLockStatus) {
                functions_bodyLockStatus = false;
                if (delay) setTimeout((function() {
                    functions_bodyLockStatus = true;
                    document.documentElement.style.removeProperty("--scrollbar-compensate");
                    document.documentElement.classList.remove("lock");
                }), delay); else {
                    functions_bodyLockStatus = true;
                    document.documentElement.style.removeProperty("--scrollbar-compensate");
                    document.documentElement.classList.remove("lock");
                }
            }
        };
        let functions_bodyLock = (delay = 500) => {
            if (functions_bodyLockStatus) {
                const scrollbarCompensate = window.innerWidth - document.querySelector(".wrapper").offsetWidth;
                if (scrollbarCompensate > 0) document.documentElement.style.setProperty("--scrollbar-compensate", scrollbarCompensate + "px");
                document.documentElement.classList.add("lock");
                functions_bodyLockStatus = false;
                if (delay) setTimeout((function() {
                    functions_bodyLockStatus = true;
                }), delay); else functions_bodyLockStatus = true;
            }
        };
        function menuInit() {
            const menuIconSelector = ".icon-menu";
            const menuOpenClass = "menu-open";
            const btnMenuIcon = document.querySelector(menuIconSelector);
            const mainSection = document.querySelector(".main");
            if (btnMenuIcon) {
                const isOpen = () => document.documentElement.classList.contains(menuOpenClass);
                document.addEventListener("click", (function(e) {
                    if (functions_bodyLockStatus && e.target.closest(menuIconSelector)) {
                        const scrolled = window.scrollY || document.documentElement.scrollTop;
                        if (window.innerWidth <= 992.98 && !isOpen() && scrolled > 0 && (mainSection ? scrolled < mainSection.offsetHeightSaved : true)) window.scrollBy({
                            top: -100,
                            behavior: "smooth"
                        });
                        document.documentElement.classList.toggle(menuOpenClass);
                        bodyLockToggle(300);
                    }
                    if (isOpen() && functions_bodyLockStatus && !e.target.closest(menuIconSelector) && !e.target.closest(".header-menu-mobile")) {
                        functions_bodyUnlock(300);
                        document.documentElement.classList.remove(menuOpenClass);
                    }
                }));
            }
        }
        function DynamicAdapt(type) {
            this.type = type;
            this.resizeTimeout = null;
        }
        DynamicAdapt.prototype.init = function() {
            const _this = this;
            this.objects = [];
            this.daClassname = "_dynamic_adapt_";
            this.nodes = document.querySelectorAll("[data-da]");
            for (let i = 0; i < this.nodes.length; i++) {
                const node = this.nodes[i];
                const data = node.dataset.da.trim();
                const dataArray = data.split(",");
                const object = {
                    element: node,
                    parent: node.parentNode,
                    destination: document.querySelector(dataArray[0].trim()),
                    breakpoint: dataArray[1] ? dataArray[1].trim() : "767",
                    place: dataArray[2] ? dataArray[2].trim() : "last",
                    originalNextSibling: node.nextElementSibling,
                    originalIndex: Array.from(node.parentNode.children).indexOf(node),
                    isMoved: false
                };
                this.objects.push(object);
            }
            window.addEventListener("resize", (function() {
                clearTimeout(_this.resizeTimeout);
                _this.resizeTimeout = setTimeout((() => {
                    _this.mediaHandler();
                }), 10);
            }));
            this.mediaHandler();
        };
        DynamicAdapt.prototype.mediaHandler = function() {
            for (let i = 0; i < this.objects.length; i++) {
                const obj = this.objects[i];
                const breakpointValue = parseInt(obj.breakpoint, 10);
                const isMax = this.type !== "min";
                const query = isMax ? `(max-width: ${breakpointValue}px)` : `(min-width: ${breakpointValue + 1}px)`;
                const match = window.matchMedia(query).matches;
                if (match) {
                    if (!obj.isMoved) {
                        this.moveTo(obj.place, obj.element, obj.destination);
                        obj.isMoved = true;
                    }
                } else if (obj.isMoved) {
                    this.moveBack(obj);
                    obj.isMoved = false;
                }
            }
        };
        DynamicAdapt.prototype.moveTo = function(place, element, destination) {
            setTimeout((() => {
                element.classList.add(this.daClassname);
                if (place === "last" || place >= destination.children.length) destination.appendChild(element); else if (place === "first") destination.insertBefore(element, destination.firstElementChild); else {
                    const index = parseInt(place, 10);
                    destination.insertBefore(element, destination.children[index] || null);
                }
            }), 0);
        };
        DynamicAdapt.prototype.moveBack = function(obj) {
            const {parent, element, originalNextSibling, originalIndex} = obj;
            setTimeout((() => {
                element.classList.remove(this.daClassname);
                if (originalNextSibling && originalNextSibling.parentNode === parent) {
                    parent.insertBefore(element, originalNextSibling);
                    return;
                }
                if (parent.children.length > 0) if (originalIndex === 0) parent.prepend(element); else if (originalIndex < parent.children.length) parent.insertBefore(element, parent.children[originalIndex]); else parent.appendChild(element); else parent.appendChild(element);
            }), 0);
        };
        const da = new DynamicAdapt("max");
        da.init();
        function initRatings() {
            const ratings = document.querySelectorAll(".rating:not(.rating--initialized)");
            if (ratings.length > 0) ratings.forEach((rating => {
                initRating(rating);
                rating.classList.add("rating--initialized");
            }));
            function initRating(rating) {
                let ratingActive = rating.querySelector(".rating__active");
                let ratingValue = rating.dataset.rating || rating.querySelector(".rating__value");
                function setRatingActiveWidth(index = rating.dataset.rating || ratingValue.innerHTML) {
                    const ratingActiveWidth = index / .05;
                    ratingActive.style.width = `${ratingActiveWidth}%`;
                }
                setRatingActiveWidth();
                if (rating.classList.contains("rating--set")) {
                    const ratingItems = rating.querySelectorAll(".rating__item");
                    ratingItems.forEach((item => {
                        item.addEventListener("mouseenter", (() => {
                            setRatingActiveWidth(item.value);
                        }));
                        item.addEventListener("mouseleave", (() => {
                            setRatingActiveWidth();
                        }));
                        item.addEventListener("click", (async () => {
                            if (rating.dataset.ajax) await setRatingValue(item.value, rating); else {
                                rating.dataset.rating ? rating.dataset.rating = item.value : ratingValue.innerHTML = item.value;
                                setRatingActiveWidth();
                            }
                        }));
                    }));
                }
            }
            async function setRatingValue(value, rating) {
                if (!rating.classList.contains("rating--sending")) {
                    rating.classList.add("rating--sending");
                    try {
                        let response = await fetch("rating.json", {
                            method: "GET"
                        });
                        if (response.ok) {
                            const result = await response.json();
                            rating.dataset.rating ? rating.dataset.rating = result.newRating : ratingValue.innerHTML = result.newRating;
                            setRatingActiveWidth();
                        } else console.log("Error");
                    } catch (error) {
                        console.log("Error:", error);
                    } finally {
                        rating.classList.remove("rating_sending");
                    }
                }
            }
            window.initRatings = initRatings;
        }
        initRatings();
        isWebp();
        addLoadedClass();
        menuInit();
        function headerScroll() {
            const mainWrapper = document.querySelector(".wrapper");
            const mainSection = document.querySelector(".main");
            if (!mainSection || !mainWrapper) return;
            const mainFullScrollClass = "_main-full-scroll";
            const offset = 20;
            let mainSectionHeight = mainSection.offsetHeight;
            const updateHeight = () => {
                mainSectionHeight = mainSection.offsetHeight;
                mainSection.offsetHeightSaved = mainSectionHeight;
            };
            window.addEventListener("resize", updateHeight);
            window.addEventListener("load", updateHeight);
            let ticking = false;
            document.addEventListener("scroll", (() => {
                if (!ticking) {
                    requestAnimationFrame((() => {
                        const scrollTop = window.scrollY;
                        if (scrollTop >= mainSectionHeight + offset) mainWrapper.classList.add(mainFullScrollClass); else mainWrapper.classList.remove(mainFullScrollClass);
                        ticking = false;
                    }));
                    ticking = true;
                }
            }));
        }
        headerScroll();
        function animIcons() {
            const btns = document.querySelectorAll("[data-menu-icon-link]");
            btns.forEach((btn => {
                const video = btn.querySelector("video");
                if (!video) return;
                const canvas = btn.querySelector("canvas");
                if (!canvas) return;
                const ctx = canvas.getContext("2d");
                ctx.imageSmoothingEnabled = true;
                ctx.imageSmoothingQuality = "high";
                let duration;
                let isPlaying = false;
                let animationId;
                let startTime = null;
                let currentProgress = 0;
                let startProgress = 0;
                let direction = 1;
                let loaded = false;
                function renderFrame(timestamp) {
                    if (!isPlaying) return;
                    if (!startTime) startTime = timestamp;
                    const elapsed = timestamp - startTime;
                    const delta = elapsed / 1e3 / duration;
                    currentProgress = startProgress + direction * delta;
                    if (currentProgress > 1) currentProgress = 1;
                    if (currentProgress < 0) currentProgress = 0;
                    video.currentTime = currentProgress * duration;
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    if (direction > 0 && currentProgress >= 1 || direction < 0 && currentProgress <= 0) {
                        stop();
                        return;
                    }
                    animationId = requestAnimationFrame(renderFrame);
                }
                function start() {
                    if (isPlaying) return;
                    isPlaying = true;
                    startTime = null;
                    startProgress = currentProgress;
                    animationId = requestAnimationFrame(renderFrame);
                }
                function stop() {
                    if (!isPlaying) return;
                    isPlaying = false;
                    cancelAnimationFrame(animationId);
                }
                const onLoaded = () => {
                    duration = video.duration;
                    loaded = true;
                    currentProgress = 0;
                    const drawFirstFrame = () => {
                        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    };
                    video.addEventListener("seeked", drawFirstFrame, {
                        once: true
                    });
                    video.currentTime = 0;
                };
                video.addEventListener("loadeddata", onLoaded, {
                    once: true
                });
                video.load();
                async function onActive() {
                    if (!loaded) {
                        video.load();
                        await new Promise((res => video.addEventListener("loadeddata", res, {
                            once: true
                        })));
                    }
                    if (!isHover()) return;
                    stop();
                    direction = 1;
                    start();
                }
                function unActive(e) {
                    if (e.target.closest("[data-submenu-item]") && e.target.closest("[data-submenu-item]").classList.contains("_open")) return;
                    stop();
                    direction = -1;
                    start();
                }
                btn.addEventListener("mouseenter", onActive);
                btn.addEventListener("mouseleave", unActive);
                btn.addEventListener("focus", onActive);
                btn.addEventListener("blur", unActive);
                btn.addEventListener("onActive", onActive);
                btn.addEventListener("unActive", unActive);
            }));
        }
        animIcons();
        function selectOutline() {
            document.addEventListener("keydown", (() => {
                document.documentElement.classList.add("kbd");
            }));
            document.addEventListener("mousedown", (() => {
                document.documentElement.classList.remove("kbd");
            }));
        }
        selectOutline();
        function showHideSubMenu() {
            const subMenuItems = document.querySelectorAll("[data-submenu-item]");
            const classOpen = "_open";
            if (!subMenuItems.length) return;
            subMenuItems.forEach((subMenuItem => {
                const subMenuAction = subMenuItem.querySelector("[data-submenu-action]");
                const subMenu = subMenuItem.querySelector("[data-submenu]");
                if (!subMenuAction || !subMenu) return;
                const isOpen = () => subMenuItem.classList.contains(classOpen);
                const open = () => {
                    subMenuItem.classList.add(classOpen);
                    subMenuAction.setAttribute("aria-expanded", "true");
                    subMenu.setAttribute("aria-hidden", "false");
                };
                const close = () => {
                    subMenuItem.classList.remove(classOpen);
                    subMenuAction.setAttribute("aria-expanded", "false");
                    subMenu.setAttribute("aria-hidden", "true");
                    subMenuAction.dispatchEvent(new CustomEvent("unActive"));
                };
                let isPointerDown = false;
                document.addEventListener("pointerdown", (() => {
                    isPointerDown = true;
                }));
                document.addEventListener("keydown", (e => {
                    if (e.key === "Tab") isPointerDown = false;
                }));
                document.addEventListener("click", (e => {
                    if (isHover() && isOpen() && !subMenuItem.contains(e.target)) close();
                }));
                subMenuAction.addEventListener("click", (e => {
                    if (!isHover()) e.preventDefault();
                    isOpen() ? close() : open();
                }));
                subMenuAction.addEventListener("focus", (() => {
                    if (isPointerDown) return;
                    open();
                }));
                subMenuItem.addEventListener("focusout", (e => {
                    const relatedTarget = e.relatedTarget;
                    if (relatedTarget && !subMenuItem.contains(relatedTarget)) close();
                }));
                subMenuItem.addEventListener("mouseenter", (() => {
                    if (isHover()) open();
                }));
                subMenuItem.addEventListener("mouseleave", (() => {
                    if (isHover()) close();
                }));
            }));
        }
        showHideSubMenu();
        function topLoader() {
            const loader = document.querySelector(".top-loader");
            if (!loader) return;
            const activeClass = "show-top-loader";
            const root = document.documentElement;
            function show() {
                root.classList.add(activeClass);
            }
            function hide() {
                root.classList.remove(activeClass);
            }
            window.topLoader = {
                show,
                hide
            };
        }
        topLoader();
        function init_PhoneMask() {
            const input = document.querySelector("[data-phone-mask]");
            if (!input) return;
            let iti = null;
            let isLoading = false;
            const loadPhoneMask = async () => {
                if (iti || isLoading) return;
                isLoading = true;
                const [{default: intlTelInput}, utils, translations, styles] = await Promise.all([ __webpack_require__.e(436).then(__webpack_require__.t.bind(__webpack_require__, 436, 19)), __webpack_require__.e(4183).then(__webpack_require__.bind(__webpack_require__, 4183)), loadLocale(getCurrentLang()), __webpack_require__.e(1285).then(__webpack_require__.bind(__webpack_require__, 1285)) ]);
                iti = intlTelInput(input, {
                    countryNameLocale: getCurrentLang(),
                    nationalMode: true,
                    strictMode: true,
                    separateDialCode: true,
                    autoPlaceholder: "aggressive",
                    i18n: translations,
                    loadUtils: () => Promise.resolve(utils)
                });
                initEvents(iti);
            };
            function initEvents(iti) {
                const label = document.querySelector(`label[for="${input.id}"]`);
                const setActiveLabel = () => label?.classList.add("_focus");
                const setUnActiveLabel = () => label?.classList.remove("_focus");
                input.addEventListener("countrychange", (() => {
                    input.dispatchEvent(new Event("input"));
                }));
                input.addEventListener("blur", (() => {
                    if (!input.value && !input.placeholder.trim()) setUnActiveLabel();
                }));
                input.addEventListener("focus", setActiveLabel);
                onIdle((async () => {
                    const res = await fetch("https://ipapi.co/json");
                    const data = await res.json();
                    iti?.setCountry(data.country_code);
                    setActiveLabel();
                }));
            }
            const observer = new IntersectionObserver((([entry]) => {
                if (!entry.isIntersecting) return;
                loadPhoneMask();
                observer.disconnect();
            }), {
                rootMargin: "200px"
            });
            observer.observe(input);
            input.addEventListener("focus", (() => {
                loadPhoneMask();
            }), {
                once: true
            });
        }
        function onIdle(callback) {
            if ("requestIdleCallback" in window) return requestIdleCallback(callback);
            return setTimeout(callback, 1);
        }
        function getCurrentLang() {
            return (document.documentElement.lang || "en").toLowerCase().split("-")[0];
        }
        async function loadLocale(lang) {
            try {
                const module = await __webpack_require__(9726)(`./${lang}/index.js`);
                return module.default || module;
            } catch {
                const module = await __webpack_require__.e(1599).then(__webpack_require__.bind(__webpack_require__, 1599));
                return module.default || module;
            }
        }
        function formValidate() {
            const validateForms = document.querySelectorAll("[data-validate]");
            if (validateForms.length) validateForms.forEach((form => {
                const btnSubmit = form.querySelector('button[type="submit"]');
                const inputs = Array.from(form.querySelectorAll("input:not([data-no-required]), select, textarea"));
                const groupRadios = findRadioCheckboxGroup(form, "radio");
                const groupCheckbox = findRadioCheckboxGroup(form, "checkbox");
                [ groupRadios, groupCheckbox ].forEach((groupType => {
                    (groupType || []).forEach((group => inputs.push(group)));
                }));
                if (inputs.length > 0) {
                    form.addEventListener("submit", (e => {
                        checkInputs({
                            inputs,
                            form,
                            event: e
                        });
                    }));
                    form.addEventListener("update-validation", (e => {
                        checkInputs({
                            inputs,
                            form,
                            event: e
                        });
                    }));
                    btnSubmit && btnSubmit.addEventListener("click", (e => {
                        checkInputs({
                            inputs,
                            form,
                            event: e
                        });
                    }));
                    inputs.forEach((input => {
                        if (!Array.isArray(input)) {
                            input.addEventListener("input", (e => formatInput(input)));
                            input.addEventListener("change", (() => setTimeout((() => {
                                if (input.wasError) checkInput({
                                    input
                                });
                            }), 0)));
                            input.addEventListener("blur", (() => {
                                setTimeout((() => {
                                    if (input.value !== "") checkInput({
                                        input
                                    });
                                }), 0);
                            }));
                        }
                    }));
                    form.addEventListener("reset", (e => {
                        inputs.forEach((input => removeStatus({
                            input
                        })));
                    }));
                }
            }));
            async function checkInputs({inputs, form, event, onSuccessFormValidateCallback, onErrorFormValidateCallback}) {
                if (event) event.preventDefault();
                const isShowNotice = form?.hasAttribute("data-validate-notice");
                !isShowNotice ? form.reportValidity() : null;
                form.setAttribute("novalidate", true);
                let errors = 0;
                let firstErrorFound = false;
                form.dispatchEvent(new CustomEvent("start-validation"));
                for (const input of inputs) if (checkInput({
                    input
                })) {
                    errors++;
                    if (!firstErrorFound) {
                        scrollToInput({
                            input
                        });
                        input.focus();
                        firstErrorFound = true;
                    }
                }
                form.dispatchEvent(new CustomEvent("end-validation"));
                if (!errors) {
                    const successEvent = new Event("form-validation-success");
                    form.dispatchEvent(successEvent);
                    if (onSuccessFormValidateCallback) onSuccessFormValidateCallback();
                } else {
                    const errorEvent = new Event("form-validation-error");
                    form.dispatchEvent(errorEvent);
                    if (onErrorFormValidateCallback) onErrorFormValidateCallback();
                }
            }
            function checkInput({input, isTextNotice = false}) {
                let isError = false;
                if (!Array.isArray(input) && input.hasAttribute("data-skip-validation")) return isError = false;
                if (Array.isArray(input)) {
                    const isRequired = input.every((radioOrCheckbox => radioOrCheckbox.required === true));
                    let isGroupFilled = input.some((radioOrCheckbox => radioOrCheckbox.checked === true));
                    if (isRequired && !isGroupFilled) {
                        showTextNotice({
                            input,
                            text: "Choose value",
                            isTextNotice
                        });
                        return isError = true;
                    }
                    return isError = false;
                }
                const value = input.value.trim();
                if (input.required || input.hasAttribute("data-required") || value !== "") {
                    if (value === "") {
                        showTextNotice({
                            input,
                            text: "This field is required",
                            isTextNotice
                        });
                        return isError = true;
                    }
                    if (input.hasAttribute("data-math-field")) {
                        const forMathField = input.getAttribute("data-math-field");
                        const forMatchInput = input.form.querySelector("input[data-for-math]");
                        if (forMathField && forMatchInput && forMathField === forMatchInput.getAttribute("data-for-math")) if (input.value !== forMatchInput.value) {
                            showTextNotice({
                                input,
                                text: `This field must match ${forMathField} field`,
                                isTextNotice
                            });
                            return isError = true;
                        }
                    }
                    if (input.hasAttribute("data-number-format")) {
                        const isValidDecimal = /^(\d+([.,]\d+)?)?$/.test(value);
                        if (!isValidDecimal) {
                            showTextNotice({
                                input,
                                text: "Only numbers are allowed",
                                isTextNotice
                            });
                            return isError = true;
                        }
                    }
                    if (input.hasAttribute("data-number-float-format")) {
                        const value = input.value;
                        const isValidDecimal = /^(\d+[.,]?\d*|\d*[.,]?\d+)$/g.test(value);
                        if (!isValidDecimal) {
                            showTextNotice({
                                input,
                                text: "Only valid numbers are allowed",
                                isTextNotice
                            });
                            return isError = true;
                        }
                    }
                    if (input.hasAttribute("data-text-format")) {
                        const format = input.getAttribute("data-text-format");
                        const isLatinOnly = format === "latin";
                        const REGEX = {
                            latin: /^[a-zA-Z\s]+$/,
                            all: /^[a-zA-Zа-яА-ЯёЁїЇіІєЄґҐ\s]+$/
                        };
                        const regex = isLatinOnly ? REGEX.latin : REGEX.all;
                        const message = isLatinOnly ? "Only Latin letters are allowed" : "Only letters are allowed";
                        if (!regex.test(value)) {
                            showTextNotice({
                                input,
                                text: message,
                                isTextNotice
                            });
                            return isError = true;
                        }
                    }
                    if (input.type === "email") if (value !== "" && !isEmailValid(input)) {
                        showTextNotice({
                            input,
                            text: "Your email address must be in the format of name@domain.com",
                            isTextNotice
                        });
                        return isError = true;
                    }
                    const minLength = input.hasAttribute("data-minlength") ? Number(input.dataset.minlength) : null;
                    const maxLength = input.hasAttribute("data-maxlength") ? Number(input.dataset.maxlength) : null;
                    if (minLength !== null && value.length < minLength) {
                        if (input.id == "year") showTextNotice({
                            input,
                            text: "Please enter the correct year",
                            isTextNotice
                        }); else showTextNotice({
                            input,
                            text: `Please enter at least ${minLength} characters`,
                            isTextNotice
                        });
                        return isError = true;
                    }
                    if (maxLength !== null && value.length > maxLength) {
                        showTextNotice({
                            input,
                            text: `Please enter less than ${minLength} characters`,
                            isTextNotice
                        });
                        return isError = true;
                    }
                    const minValue = input.hasAttribute("data-min-value") ? Number(input.dataset.minValue) : null;
                    const maxValue = input.hasAttribute("data-max-value") ? Number(input.dataset.maxValue) : null;
                    if (minValue !== null && Number(value) < minValue) {
                        showTextNotice({
                            input,
                            text: `Please enter a value greater than or equal to ${minValue}`,
                            isTextNotice
                        });
                        return isError = true;
                    }
                    if (maxValue !== null && Number(value) > maxValue) {
                        showTextNotice({
                            input,
                            text: `Please enter a value less than or equal to ${maxValue}`,
                            isTextNotice
                        });
                        return isError = true;
                    }
                    if (input.inputmask) {
                        const isComplete = input.inputmask.isComplete();
                        if (!isComplete && value !== "") {
                            showTextNotice({
                                input,
                                text: "Please enter full phone number",
                                isTextNotice
                            });
                            return isError = true;
                        }
                    }
                    if (input.iti) {
                        const iti = input.iti;
                        const isValid = iti.isValidNumber();
                        if (!isValid && value !== "") {
                            showTextNotice({
                                input,
                                text: "Please enter full phone number",
                                isTextNotice
                            });
                            return isError = true;
                        }
                    }
                    if (input.required || input.hasAttribute("data-required") || value !== "") if (isError) addError({
                        input
                    }); else if (input) removeError({
                        input
                    });
                } else if (value === "") removeStatus({
                    input
                }); else removeError({
                    input
                });
                return isError;
            }
            function formatInput(input) {
                if (input.hasAttribute("data-maxlength")) {
                    const maxLength = input.getAttribute("data-maxlength");
                    if (input.value.length > maxLength) input.value = input.value.slice(0, maxLength);
                }
                if (input.hasAttribute("data-number-format")) input.value = input.value.replace(/\D/g, "");
                if (input.hasAttribute("data-number-float-format")) {
                    input.type = "text";
                    const start = input.selectionStart;
                    const end = input.selectionEnd;
                    let value = input.value;
                    value = value.replace(/[^0-9.,]/g, "");
                    const parts = value.split(/[.,]/);
                    if (parts.length > 2) value = parts[0] + (value.includes(".") ? "." : ",") + parts[1];
                    input.value = value;
                    input.setSelectionRange(start, end);
                }
            }
            function addError({input}) {
                input.classList.remove("_validated");
                input.classList.add("_no-validated");
                input.setAttribute("aria-invalid", "true");
                if (!input.wasError) {
                    input.addEventListener("input", (() => setTimeout((() => {
                        checkInput({
                            input
                        });
                    }), 0)));
                    input.wasError = true;
                }
            }
            function removeError({input}) {
                input.classList.remove("_no-validated");
                input.classList.add("_validated");
                input.setAttribute("aria-invalid", "false");
                removeTextNotice({
                    input
                });
            }
            function removeStatus({input}) {
                if (!Array.isArray(input)) {
                    input.classList.remove("_no-validated", "_validated");
                    input.removeAttribute("aria-invalid");
                    removeTextNotice({
                        input
                    });
                } else input.forEach((elInput => {
                    elInput.classList.remove("_no-validated", "_validated");
                    elInput.removeAttribute("aria-invalid");
                    removeTextNotice({
                        input: elInput
                    });
                }));
            }
            function isEmailValid(input) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/.test(input.value);
            }
            function showTextNotice({input, text, isTextNotice = false}) {
                input = Array.isArray(input) ? input[0] : input;
                const isShowNotice = isTextNotice || input.closest("[data-validate]")?.hasAttribute("data-validate-notice");
                let notice = input.parentElement.parentElement.querySelector(".form-item__notice");
                const textNotice = input.hasAttribute("data-error-notice") ? input.getAttribute("data-error-notice") : text;
                if (isShowNotice && textNotice) if (notice && notice.textContent !== textNotice) notice.textContent = textNotice; else if (!notice) {
                    notice = document.createElement("label");
                    notice.classList.add("form-item__notice");
                    input.id ? notice.setAttribute("for", input.id) : null;
                    notice.textContent = textNotice;
                    if ([ "radio", "checkbox" ].includes(input.type)) input.parentElement.parentElement.insertAdjacentElement("beforeend", notice); else input.parentElement.insertAdjacentElement("afterend", notice);
                }
                addError({
                    input
                });
            }
            function removeTextNotice({input}) {
                const notice = input.parentElement.parentElement.querySelector(".form-item__notice");
                notice && notice.remove();
            }
            function scrollToInput({input}) {
                const inputWithError = Array.isArray(input) ? input[0] : input;
                const errorNotice = inputWithError.parentElement.parentElement.querySelector(".form-item__notice");
                (errorNotice && inputWithError.offsetWidth === 0 ? errorNotice : inputWithError).scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }
            function findRadioCheckboxGroup(parentSelector, type) {
                const groups = new Map;
                parentSelector.querySelectorAll(`input[type="${type}"]`).forEach((radioCheckbox => {
                    const name = radioCheckbox.getAttribute("name");
                    if (!groups.has(name)) groups.set(name, []);
                    groups.get(name).push(radioCheckbox);
                }));
                return groups;
            }
            window.formValidate = {
                showTextNotice,
                removeTextNotice,
                removeError,
                removeStatus,
                addError,
                checkInputs,
                checkInput,
                scrollToInput
            };
            return {
                showTextNotice,
                removeTextNotice,
                removeError,
                removeStatus,
                addError,
                checkInputs,
                checkInput,
                scrollToInput
            };
        }
        function formOrder() {
            const {removeStatus} = formValidate();
            const form = document.querySelector("[data-online-quote]");
            if (!form) return;
            const radioGroup = form.querySelectorAll('input[type="radio"]');
            const inputName = form.querySelector("#inp-name");
            const inputPhone = form.querySelector("#inp-phone");
            const inputEmail = form.querySelector("#inp-email");
            const inputSocial = form.querySelector("#inp-social");
            const inputSocialAddress = form.querySelector("#inp-social-address");
            const ckeckboxAddComment = form.querySelector("#inp-add-comment");
            const textareaComment = form.querySelector("#inp-comment");
            const inputYearsOld = form.querySelector("#inp-years-old");
            const inputRegion = form.querySelector("#inp-region");
            const fortItemCommentTextarea = textareaComment.closest(".main-form__item");
            function removeRequired(inputs) {
                inputs.forEach((input => input.removeAttribute("required")));
            }
            function setRequired(inputs) {
                inputs.forEach((input => input.setAttribute("required", "")));
            }
            radioGroup.forEach((radio => {
                radio.addEventListener("change", (e => {
                    [ inputName, inputPhone, inputEmail, inputSocial, inputSocialAddress, textareaComment, inputYearsOld, inputRegion ].forEach((input => input && removeStatus({
                        input
                    })));
                    switch (radio.value) {
                      case "phone":
                        setRequired([ inputPhone ]);
                        removeRequired([ inputEmail, inputSocial, inputSocialAddress ]);
                        break;

                      case "email":
                        setRequired([ inputEmail ]);
                        removeRequired([ inputPhone, inputSocial, inputSocialAddress ]);
                        break;

                      case "social":
                        setRequired([ inputSocial, inputSocialAddress ]);
                        removeRequired([ inputPhone, inputEmail ]);
                        break;

                      default:
                        break;
                    }
                }));
            }));
            ckeckboxAddComment.addEventListener("change", (() => {
                const isChecked = ckeckboxAddComment.checked;
                fortItemCommentTextarea.classList.toggle("_hide", !isChecked);
                isChecked ? setRequired([ textareaComment ]) : removeRequired([ textareaComment ]);
            }));
            form.addEventListener("reset", (e => {
                setRequired([ inputPhone ]);
                removeRequired([ inputEmail, inputSocial, inputSocialAddress, textareaComment ]);
                fortItemCommentTextarea.classList.add("_hide");
            }));
            form.addEventListener("form-validation-success", (e => {
                const formData = new FormData(form);
                const btnSubmit = document.querySelector(".main-form__btn");
                const initialText = btnSubmit.textContent;
                console.log(Object.fromEntries(formData));
                btnSubmit.classList.add("_success");
                btnSubmit.textContent = "Заявка отправлена!";
                form.reset();
                setTimeout((() => {
                    btnSubmit.classList.remove("_success");
                    btnSubmit.textContent = initialText;
                }), 1e4);
            }));
        }
        init_PhoneMask();
        formOrder();
    })();
})();