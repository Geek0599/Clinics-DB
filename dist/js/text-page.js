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
    let bodyLockStatus = true;
    let bodyLockToggle = (delay = 500) => {
        if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
    };
    let bodyUnlock = (delay = 500) => {
        if (bodyLockStatus) {
            bodyLockStatus = false;
            if (delay) setTimeout((function() {
                bodyLockStatus = true;
                document.documentElement.style.removeProperty("--scrollbar-compensate");
                document.documentElement.classList.remove("lock");
            }), delay); else {
                bodyLockStatus = true;
                document.documentElement.style.removeProperty("--scrollbar-compensate");
                document.documentElement.classList.remove("lock");
            }
        }
    };
    let bodyLock = (delay = 500) => {
        if (bodyLockStatus) {
            const scrollbarCompensate = window.innerWidth - document.querySelector(".wrapper").offsetWidth;
            if (scrollbarCompensate > 0) document.documentElement.style.setProperty("--scrollbar-compensate", scrollbarCompensate + "px");
            document.documentElement.classList.add("lock");
            bodyLockStatus = false;
            if (delay) setTimeout((function() {
                bodyLockStatus = true;
            }), delay); else bodyLockStatus = true;
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
                if (bodyLockStatus && e.target.closest(menuIconSelector)) {
                    const scrolled = window.scrollY || document.documentElement.scrollTop;
                    if (window.innerWidth <= 992.98 && !isOpen() && scrolled > 0 && (mainSection ? scrolled < mainSection.offsetHeightSaved : true)) window.scrollBy({
                        top: -100,
                        behavior: "smooth"
                    });
                    document.documentElement.classList.toggle(menuOpenClass);
                    bodyLockToggle(300);
                }
                if (isOpen() && bodyLockStatus && !e.target.closest(menuIconSelector) && !e.target.closest(".header-menu-mobile")) {
                    bodyUnlock(300);
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
})();