if (!isMobileTooltip) {
  !function () {
    function t(t, i) {
      Object.assign(t.style, i);
    }
    function i(t, i, e, o) {
      let s = t.getBoundingClientRect();
      let l = i.getBoundingClientRect();
      let h = e.getBoundingClientRect();
      return function t(i, e, o, s) {
        let l = window.innerWidth;
        let h = window.innerHeight;
        let n = 0;
        let r = 0;
        let a = "0px";
        let p = "0px";
        let d = {};
        switch (s) {
          case "top":
            r = i.top - e.height;
            n = i.left + i.width / 2 - e.width / 2;
            p = "-10px";
            d = {
              bottom: "0",
              left: "0",
              borderRadius: "14px 14px 0 0",
              transformOrigin: "50% 100%",
              marginTop: `${e.height}px`,
              marginLeft: `${e.width / 2 - o.width / 2}px`
            };
            break;
          case "left":
            r = i.top + i.height / 2 - e.height / 2;
            n = i.left - e.width;
            a = "-10px";
            d = {
              top: "-7px",
              right: "0",
              width: "14px",
              height: "14px",
              borderRadius: "14px 0 0 14px",
              transformOrigin: "95% 50%",
              marginTop: `${e.height / 2}px`,
              marginLeft: `${e.width}px`
            };
            break;
          case "right":
            r = i.top + i.height / 2 - e.height / 2;
            n = i.left + i.width;
            a = "+10px";
            d = {
              top: "-7px",
              left: "0",
              width: "14px",
              height: "14px",
              borderRadius: "0 14px 14px 0",
              transformOrigin: "5% 50%",
              marginTop: `${e.height / 2}px`,
              marginLeft: "0px"
            };
            break;
          default:
            r = i.top + i.height;
            n = i.left + i.width / 2 - e.width / 2;
            p = "+10px";
            d = {
              top: "0",
              left: "0",
              marginLeft: `${e.width / 2 - o.width / 2}px`
            };
        }
        n = Math.max(4, Math.min(n, l - e.width - 4));
        r = Math.max(4, Math.min(r, h - e.height - 4));
        return {
          left: n,
          top: r,
          translateX: a,
          translateY: p,
          backdropStyles: d
        };
      }(s, l, h, o);
    }
    class e {
      constructor(t = {}) {
        this.options = Object.assign({
          delay: 350,
          tooltip: "",
          position: "bottom",
          html: false
        }, t);
        this.isVisible = false;
        this.isHovering = false;
        this.targetEl = null;
        this.tooltipEl = null;
        this.backdropEl = null;
        this.hoverTimeout = null;
        this.currentBackdropStyles = {};
        this.scrolling = false;
        this.ticking = false;
        this.animationFrame = null;
        this.handleScroll = this.handleScroll.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.showTooltip = this.showTooltip.bind(this);
        this.hideTooltip = this.hideTooltip.bind(this);
        this.onPointerEnter = this.onPointerEnter.bind(this);
        this.onPointerLeave = this.onPointerLeave.bind(this);
        this.repositionTooltip = this.repositionTooltip.bind(this);
      }
      init(t) {
        this.targetEl = t;
        if (t.getAttribute("data-tooltip-id")) {
          let i = document.getElementById(t.getAttribute("data-tooltip-id"));
          if (i) {
            i.remove();
          }
        }
        let e = "flaspeedtooltip-" + Math.random().toString(16).slice(2, 14);
        t.setAttribute("data-tooltip-id", e);
        this.tooltipEl = document.createElement("div");
        this.tooltipEl.className = "material-tooltip";
        this.tooltipEl.id = e;
        this.tooltipEl.style.margin = "0";
        this.tooltipEl.style.position = "fixed";
        this.tooltipEl.style.visibility = "hidden";
        this.tooltipEl.style.opacity = "0";
        let o = document.createElement("span");
        let s = this.getTooltipText();
        if (this.isTooltipHtml()) {
          o.innerHTML = s;
        } else {
          o.textContent = s;
        }
        this.backdropEl = document.createElement("div");
        this.backdropEl.className = "backdrop";
        this.backdropEl.style.margin = "0";
        this.backdropEl.style.visibility = "hidden";
        this.backdropEl.style.opacity = "0";
        this.tooltipEl.appendChild(o);
        this.tooltipEl.appendChild(this.backdropEl);
        document.body.appendChild(this.tooltipEl);
        this.attachEvents();
        return this.tooltipEl;
      }
      getTooltipText() {
        return this.targetEl.getAttribute("data-tooltip") || this.options.tooltip || this.targetEl.getAttribute("title") || "";
      }
      isTooltipHtml() {
        return "true" === this.targetEl.getAttribute("data-html") || this.options.html;
      }
      getPosition() {
        return this.targetEl.getAttribute("data-position") || this.options.position;
      }
      getDelay() {
        let t = this.targetEl.getAttribute("data-delay");
        return null !== t && "" !== t ? parseInt(t) : this.options.delay;
      }
      attachEvents() {
        this.targetEl.addEventListener("pointerenter", this.onPointerEnter);
        this.targetEl.addEventListener("pointerleave", this.onPointerLeave);
        window.addEventListener("scroll", this.handleScroll, {
          passive: true
        });
        window.addEventListener("resize", this.handleResize, {
          passive: true
        });
      }
      detachEvents() {
        this.targetEl.removeEventListener("pointerenter", this.onPointerEnter);
        this.targetEl.removeEventListener("pointerleave", this.onPointerLeave);
        window.removeEventListener("scroll", this.handleScroll);
        window.removeEventListener("resize", this.handleResize);
        if (this.hoverTimeout) {
          clearTimeout(this.hoverTimeout);
          this.hoverTimeout = null;
        }
        if (this.animationFrame) {
          cancelAnimationFrame(this.animationFrame);
          this.animationFrame = null;
        }
      }
      onPointerEnter(t) {
        this.isHovering = true;
        if (this.hoverTimeout) {
          clearTimeout(this.hoverTimeout);
        }
        this.hoverTimeout = setTimeout(() => {
          this.showTooltip();
        }, this.getDelay());
      }
      onPointerLeave() {
        this.isHovering = false;
        if (this.hoverTimeout) {
          clearTimeout(this.hoverTimeout);
          this.hoverTimeout = null;
        }
        this.hideTooltip();
      }
      showTooltip() {
        let e = this.getPosition();
        let {
          left: o,
          top: s,
          translateX: l,
          translateY: h,
          backdropStyles: n
        } = i(this.targetEl, this.tooltipEl, this.backdropEl, e);
        this.currentBackdropStyles = n;
        this.tooltipEl.style.visibility = "visible";
        this.tooltipEl.style.left = `${o}px`;
        this.tooltipEl.style.top = `${s}px`;
        this.backdropEl.style.visibility = "visible";
        t(this.backdropEl, n);
        let r = this.tooltipEl.offsetWidth;
        let a = this.tooltipEl.offsetHeight;
        let p = this.backdropEl.offsetWidth;
        let d = this.backdropEl.offsetHeight;
        let E = Math.max(Math.SQRT2 * r / p, Math.SQRT2 * a / d);
        this.tooltipEl.style.transition = "transform 0.3s, opacity 0.3s";
        this.backdropEl.style.transition = "transform 0.3s, opacity 0.3s";
        this.animationFrame = requestAnimationFrame(() => {
          this.tooltipEl.style.transform = `translateY(${h}) translateX(${l})`;
          this.tooltipEl.style.opacity = "1";
          this.backdropEl.style.transform = `scale(${E})`;
          this.backdropEl.style.opacity = "1";
          this.isVisible = true;
        });
      }
      hideTooltip() {
        if (this.animationFrame) {
          cancelAnimationFrame(this.animationFrame);
        }
        this.animationFrame = requestAnimationFrame(() => {
          this.tooltipEl.style.transform = "translateY(0) translateX(0)";
          this.tooltipEl.style.opacity = "0";
          this.backdropEl.style.transform = "scale(1)";
          this.backdropEl.style.opacity = "0";
          setTimeout(() => {
            if (this.isVisible) {
              this.tooltipEl.style.visibility = "hidden";
              this.backdropEl.style.visibility = "hidden";
              this.isVisible = false;
            }
          }, 225);
        });
        this.isVisible = false;
      }
      repositionTooltip() {
        if (!this.isVisible) {
          return;
        }
        let e = this.getPosition();
        let {
          left: o,
          top: s,
          translateX: l,
          translateY: h
        } = i(this.targetEl, this.tooltipEl, this.backdropEl, e);
        this.tooltipEl.style.left = `${o}px`;
        this.tooltipEl.style.top = `${s}px`;
        this.tooltipEl.style.transform = `translateY(${h}) translateX(${l})`;
        t(this.backdropEl, this.currentBackdropStyles);
      }
      handleScroll() {
        if (this.isVisible && !this.ticking) {
          this.ticking = true;
          this.animationFrame = requestAnimationFrame(() => {
            if (this.isHovering) {
              this.repositionTooltip();
            } else {
              this.hideTooltip();
            }
            this.ticking = false;
          });
        }
      }
      handleResize() {
        if (this.isVisible && !this.ticking) {
          this.ticking = true;
          this.animationFrame = requestAnimationFrame(() => {
            if (this.isHovering) {
              this.repositionTooltip();
            } else {
              this.hideTooltip();
            }
            this.ticking = false;
          });
        }
      }
      remove() {
        this.detachEvents();
        if (this.tooltipEl && this.tooltipEl.parentNode) {
          this.tooltipEl.parentNode.removeChild(this.tooltipEl);
        }
        if (this.targetEl) {
          this.targetEl.removeAttribute("data-tooltip-id");
        }
        this.targetEl = null;
        this.tooltipEl = null;
        this.backdropEl = null;
      }
    }
    window.VanillaTooltip = function (t, i) {
      if (!t) {
        return null;
      }
      if ("remove" === i) {
        let o = t.getAttribute("data-tooltip-id");
        if (o) {
          let s = document.getElementById(o);
          if (s && s._tooltip) {
            s._tooltip.remove();
          } else if (s) {
            s.remove();
          }
          t.removeAttribute("data-tooltip-id");
        }
        return;
      }
      let l = new e(i);
      let h = l.init(t);
      h._tooltip = l;
      return t;
    };
  }();
}
;
function materialEnter(t, e, i) {
  t.style.display = "block";
  t.style.opacity = "0";
  t.style.transform = "scale(0.8)";
  t.style.transition = `transform ${e}ms cubic-bezier(0.4, 0.0, 0.2, 1), opacity ${e}ms cubic-bezier(0.4, 0.0, 0.2, 1)`;
  t.offsetWidth;
  requestAnimationFrame(() => {
    t.style.opacity = "1";
    t.style.transform = "scale(1)";
  });
  setTimeout(() => {
    t.style.transition = "";
    if ("function" == typeof i) {
      i();
    }
  }, e + 20);
}
function materialExit(t, e, i) {
  t.style.transition = `transform ${e}ms cubic-bezier(0.4, 0.0, 0.2, 1), opacity ${e}ms cubic-bezier(0.4, 0.0, 0.2, 1)`;
  t.style.opacity = "0";
  t.style.transform = "scale(0.8)";
  setTimeout(() => {
    t.style.display = "none";
    t.style.transition = "";
    if ("function" == typeof i) {
      i();
    }
  }, e);
}
function initDropdown(t, e = {}) {
  if ("open" === e) {
    for (let i = 0; i < t.length; i++) {
      let n = t[i];
      let o = new CustomEvent("open");
      n.dispatchEvent(o);
    }
    return false;
  }
  if ("close" === e) {
    for (let s = 0; s < t.length; s++) {
      let a = t[s];
      let r = new CustomEvent("close");
      a.dispatchEvent(r);
    }
    return false;
  }
  let l = {
    inDuration: 100,
    outDuration: 100,
    constrainWidth: false,
    hover: false,
    gutter: 0,
    belowOrigin: true,
    alignment: "undefined" != typeof BlogDirection && "rtl" === BlogDirection ? "right" : "left",
    stopPropagation: false
  };
  for (let c = 0; c < t.length; c++) {
    let d = t[c];
    let p = Object.assign({}, l, e);
    let u = false;
    function g() {
      if (undefined !== d.dataset.induration) {
        p.inDuration = parseInt(d.dataset.induration);
      }
      if (undefined !== d.dataset.outduration) {
        p.outDuration = parseInt(d.dataset.outduration);
      }
      if (undefined !== d.dataset.constrainwidth) {
        p.constrainWidth = "true" === d.dataset.constrainwidth;
      }
      if (undefined !== d.dataset.hover) {
        p.hover = "true" === d.dataset.hover;
      }
      if (undefined !== d.dataset.gutter) {
        p.gutter = parseInt(d.dataset.gutter);
      }
      if (undefined !== d.dataset.beloworigin) {
        p.belowOrigin = "true" === d.dataset.beloworigin;
      }
      if (undefined !== d.dataset.alignment) {
        p.alignment = d.dataset.alignment;
      }
      if (undefined !== d.dataset.stoppropagation) {
        p.stopPropagation = "true" === d.dataset.stoppropagation;
      }
    }
    g();
    let f = function (t) {
      if (!u) {
        if (d !== t.currentTarget || d.classList.contains("active") || t.target.closest(".dropdown-content")) {
          if (d.classList.contains("active")) {
            if (t.target.closest("button.sp-btn") || t.target.closest(".sp-btn")) {
              return;
            }
            E();
            document.removeEventListener("click", b);
          }
        } else {
          t.preventDefault();
          if (p.stopPropagation) {
            t.stopPropagation();
          }
          h("click");
        }
      }
    };
    let v = d.getAttribute("data-target");
    let y = document.getElementById(v);
    if (y) {
      y.style.display = "none";
      y.style.opacity = "0";
    }
    if (y && d.nextElementSibling !== y) {
      d.parentNode.insertBefore(y, d.nextElementSibling);
    }
    let $ = false;
    let m = false;
    function h(t) {
      if ("focus" === t) {
        u = true;
      }
      g();
      m = true;
      if ("mouseenter" === t) {
        $ = true;
      }
      y.classList.add("active");
      d.classList.add("active");
      let e = d.getBoundingClientRect().width;
      if (true === p.constrainWidth) {
        y.style.width = e + "px";
      }
      y.style.display = "block";
      y.style.visibility = "hidden";
      y.style.opacity = "0";
      y.style.transform = "scale(0.8)";
      let i = window.innerWidth;
      let n = window.innerHeight;
      let o = d.clientHeight;
      let s = d.getBoundingClientRect();
      let a = y.offsetWidth;
      let r = y.offsetHeight;
      let l = p.alignment;
      if ("left" === l) {
        if (s.left + a > i) {
          l = "right";
        }
      } else if ("right" === l && s.right - a < 0) {
        l = "left";
      }
      let c = 0;
      if (true === p.belowOrigin) {
        c = o;
      }
      let f = 0;
      let v = d.parentElement;
      if (v && v !== document.body && v.scrollHeight > v.clientHeight) {
        f = v.scrollTop;
      }
      if (s.top + c + r > n) {
        if (s.top + o - r < 0) {
          let h = n - s.top - c;
          y.style.maxHeight = h + "px";
        } else {
          if (!c) {
            c += o;
          }
          c -= r;
        }
      }
      y.style.position = "absolute";
      y.style.top = d.offsetTop + c + f + 5 + "px";
      if ("left" === l) {
        y.style.left = "0px";
        y.style.right = "auto";
        y.style.transformOrigin = "top left";
      } else if ("right" === l) {
        y.style.right = "0px";
        y.style.left = "auto";
        y.style.transformOrigin = "top right";
      } else {
        y.style.transformOrigin = "top";
      }
      y.style.display = "none";
      y.style.visibility = "visible";
      materialEnter(y, p.inDuration, () => {
        y.style.height = "";
      });
      setTimeout(() => {
        document.addEventListener("click", b);
      }, 0);
    }
    let b = function (t) {
      if (!(t.target.closest("button.sp-btn") || t.target.closest(".sp-btn") || t.target === d || y && y.contains(t.target))) {
        E();
        document.removeEventListener("click", b);
      }
    };
    function E() {
      u = false;
      m = false;
      $ = false;
      materialExit(y, p.outDuration, () => {
        y.classList.remove("active");
        d.classList.remove("active");
        document.removeEventListener("click", b);
        y.style.maxHeight = "";
      });
    }
    function L(t) {
      if (!m) {
        h("mouseenter");
      }
    }
    function _(t) {
      let e = t.relatedTarget;
      if (!(e && y && y.contains(e) || !$)) {
        E();
      }
    }
    function w(t) {
      let e = t.relatedTarget;
      if (!(e && d.contains(e) || !$)) {
        E();
      }
    }
    d.removeEventListener("click", f);
    d.addEventListener("click", function (t) {
      if (!(d !== t.currentTarget || t.target.closest(".dropdown-content"))) {
        t.preventDefault();
        if (p.stopPropagation) {
          t.stopPropagation();
        }
        if (d.classList.contains("active")) {
          E();
        } else {
          h("click");
        }
      }
    });
    d.removeEventListener("mouseenter", L);
    d.removeEventListener("mouseleave", _);
    if (y) {
      y.removeEventListener("mouseleave", w);
    }
    if (p.hover) {
      d.addEventListener("mouseenter", L);
      d.addEventListener("mouseleave", _);
      if (y) {
        y.addEventListener("mouseleave", w);
      }
    }
    if (y) {
      y.addEventListener("click", function (t) {
        let e = t.target.closest("a, button");
        if (e && !e.classList.contains("sp-btn")) {
          E();
        }
      });
    }
    d.addEventListener("open", t => {
      h(t.detail);
    });
    d.addEventListener("close", E);
  }
}
NodeList.prototype.dropdown = function (t) {
  return initDropdown(this, t);
};
HTMLElement.prototype.dropdown = function (t) {
  return initDropdown([this], t);
};
!function () {
  function t(t, e, i, s, n) {
    t.style.transition = `all ${i}ms ${s}`;
    for (let o in e) t.style[o] = e[o];
    setTimeout(function () {
      t.style.transition = "";
      if (n && "function" == typeof n) {
        n();
      }
    }, i);
  }
  let e = {
    menuWidth: 300,
    edge: "rtl" === BlogDirection ? "right" : "left",
    closeOnClick: false,
    inDuration: 250,
    outDuration: 200,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    preventScrolling: true
  };
  function i(t, i) {
    this.elem = t;
    this.options = Object.assign({}, e, i);
    this.isDragged = false;
    this.isOpen = false;
    this._startingXpos = 0;
    this._xPos = 0;
    this._time = 0;
    this._width = 0;
    this.percentOpen = 0;
    this._verticallyScrolling = false;
    this.lastWindowWidth = window.innerWidth;
    this.lastWindowHeight = window.innerHeight;
    this.init();
  }
  i.prototype.init = function () {
    let t = this;
    let e = this.elem;
    let i = e.getAttribute("data-activates");
    let s = document.getElementById(i);
    if (!s) {
      return;
    }
    if (300 != this.options.menuWidth) {
      s.style.width = this.options.menuWidth + "px";
    }
    this._width = s.getBoundingClientRect().width;
    let n = document.querySelector(`.drag-target[data-sidenav="${i}"]`);
    if (n) {
      n.parentNode.removeChild(n);
    }
    (n = document.createElement("div")).className = "drag-target";
    n.setAttribute("data-sidenav", i);
    document.body.appendChild(n);
    this.dragTarget = n;
    this._createOverlay(i);
    if ("left" === this.options.edge) {
      s.classList.add("left-aligned");
      s.style.transform = "translateX(-100%)";
      this.dragTarget.style.left = "0";
    } else {
      s.classList.add("right-aligned");
      s.style.transform = "translateX(100%)";
      this.dragTarget.style.right = "0";
    }
    this.isFixed = s.classList.contains("fixed");
    if (this.isFixed) {
      this._setupFixed();
    }
    this._setupEventHandlers(s, i);
    if (true === this.options.closeOnClick) {
      this._setupCloseOnClick(s);
    }
    e.addEventListener("click", function (e) {
      e.preventDefault();
      if (t.isOpen) {
        t.close();
      } else {
        t.open();
      }
    });
  };
  i.prototype._createOverlay = function (t) {
    let e = document.getElementById("sidenav-overlay");
    if (e) {
      e.parentNode.removeChild(e);
    }
    (e = document.createElement("div")).id = "sidenav-overlay";
    e.style.opacity = "0";
    e.style.display = "none";
    let i = this;
    e.addEventListener("click", function () {
      i.close();
    });
    document.body.appendChild(e);
    this._overlay = e;
  };
  i.prototype._setupEventHandlers = function (t, e) {
    this._handleDragTargetDragBound = this._handleDragTargetDrag.bind(this);
    this._handleDragTargetReleaseBound = this._handleDragTargetRelease.bind(this);
    this._handleCloseDragBound = this._handleCloseDrag.bind(this);
    this._handleCloseReleaseBound = this._handleCloseRelease.bind(this);
    this.dragTarget.addEventListener("touchmove", this._handleDragTargetDragBound);
    this.dragTarget.addEventListener("touchend", this._handleDragTargetReleaseBound);
    this._overlay.addEventListener("touchmove", this._handleCloseDragBound);
    this._overlay.addEventListener("touchend", this._handleCloseReleaseBound);
    if (this.isFixed) {
      this._handleWindowResizeBound = this._handleWindowResize.bind(this);
      window.addEventListener("resize", this._handleWindowResizeBound);
    }
  };
  i.prototype._setupCloseOnClick = function (t) {
    let e = this;
    t.addEventListener("click", function (t) {
      let i = t.target;
      if (!("a" !== i.tagName.toLowerCase() || i.classList.contains("collapsible-header") || window.innerWidth > 992 && e.isFixed)) {
        e.close();
      }
    });
  };
  i.prototype._setupFixed = function () {
    if (this._isCurrentlyFixed()) {
      this.open();
    }
  };
  i.prototype._isCurrentlyFixed = function () {
    return this.isFixed && window.innerWidth > 992;
  };
  i.prototype._startDrag = function (t) {
    let e = t.targetTouches[0].clientX;
    this.isDragged = true;
    this._startingXpos = e;
    this._xPos = this._startingXpos;
    this._time = Date.now();
    this._verticallyScrolling = false;
    this._overlay.style.display = "block";
    this._initialScrollTop = this.isOpen ? document.getElementById(this.elem.getAttribute("data-activates")).scrollTop : document.documentElement.scrollTop;
  };
  i.prototype._dragMoveUpdate = function (t) {
    let e = t.targetTouches[0].clientX;
    let i = this.isOpen ? document.getElementById(this.elem.getAttribute("data-activates")).scrollTop : document.documentElement.scrollTop;
    this.deltaX = Math.abs(this._xPos - e);
    this._xPos = e;
    this.velocityX = this.deltaX / (Date.now() - this._time);
    this._time = Date.now();
    if (this._initialScrollTop !== i) {
      this._verticallyScrolling = true;
    }
  };
  i.prototype._handleDragTargetDrag = function (t) {
    if (this._isCurrentlyFixed() || this._verticallyScrolling) {
      return;
    }
    if (!this.isDragged) {
      this._startDrag(t);
    }
    this._dragMoveUpdate(t);
    let e = this._xPos - this._startingXpos;
    let i = e > 0 ? "right" : "left";
    e = Math.min(this._width, Math.abs(e));
    if (this.options.edge === i) {
      e = 0;
    }
    let s = e;
    let n = document.getElementById(this.elem.getAttribute("data-activates"));
    if ("left" === this.options.edge) {
      s = e - this._width;
      n.style.transform = `translateX(${s}px)`;
    } else {
      s = this._width - e;
      n.style.transform = `translateX(${-s}px)`;
    }
    this.percentOpen = Math.min(1, e / this._width);
    this._overlay.style.opacity = this.percentOpen;
    if (this.options.preventScrolling) {
      document.body.style.overflow = "hidden";
    }
  };
  i.prototype._handleDragTargetRelease = function () {
    if (this.isDragged) {
      let e = document.getElementById(this.elem.getAttribute("data-activates"));
      if (this.percentOpen > .2) {
        this.open();
      } else {
        if ("left" === this.options.edge) {
          t(e, {
            transform: "translateX(-100%)"
          }, this.options.outDuration, "cubic-bezier(0.25, 0.46, 0.45, 0.94)");
        } else {
          t(e, {
            transform: "translateX(100%)"
          }, this.options.outDuration, "cubic-bezier(0.25, 0.46, 0.45, 0.94)");
        }
        t(this._overlay, {
          opacity: "0"
        }, this.options.outDuration, "ease-out", () => {
          this._overlay.style.display = "none";
        });
        if (this.options.preventScrolling) {
          document.body.style.overflow = "";
        }
      }
      this.isDragged = false;
      this._verticallyScrolling = false;
    }
  };
  i.prototype._handleCloseDrag = function (t) {
    if (this.isOpen) {
      if (this._isCurrentlyFixed() || this._verticallyScrolling) {
        return;
      }
      if (!this.isDragged) {
        this._startDrag(t);
      }
      this._dragMoveUpdate(t);
      let e = this._xPos - this._startingXpos;
      let i = e > 0 ? "right" : "left";
      e = Math.min(this._width, Math.abs(e));
      if (this.options.edge !== i) {
        e = 0;
      }
      let s = document.getElementById(this.elem.getAttribute("data-activates"));
      let n = -e;
      if ("left" === this.options.edge) {
        s.style.transform = `translateX(${n}px)`;
      } else {
        s.style.transform = `translateX(${-n}px)`;
      }
      this.percentOpen = Math.min(1, 1 - e / this._width);
      this._overlay.style.opacity = this.percentOpen;
    }
  };
  i.prototype._handleCloseRelease = function () {
    if (this.isOpen && this.isDragged) {
      let e = document.getElementById(this.elem.getAttribute("data-activates"));
      if (this.percentOpen > .8) {
        t(e, {
          transform: "translateX(0)"
        }, this.options.inDuration, "ease-out");
        t(this._overlay, {
          opacity: "1"
        }, this.options.inDuration, "ease-out");
      } else {
        this.close();
      }
      this.isDragged = false;
      this._verticallyScrolling = false;
    }
  };
  i.prototype._handleWindowResize = function () {
    if (this.lastWindowWidth !== window.innerWidth) {
      if (window.innerWidth > 992) {
        if (this.isOpen) {
          this.open();
        } else {
          let t = document.getElementById(this.elem.getAttribute("data-activates"));
          t.style.transform = "translateX(0)";
        }
      } else if (!this.isOpen) {
        let e = document.getElementById(this.elem.getAttribute("data-activates"));
        if ("left" === this.options.edge) {
          e.style.transform = "translateX(-100%)";
        } else {
          e.style.transform = "translateX(100%)";
        }
      }
    }
    this.lastWindowWidth = window.innerWidth;
    this.lastWindowHeight = window.innerHeight;
  };
  i.prototype.open = function () {
    if (true === this.isOpen) {
      return;
    }
    let e = document.getElementById(this.elem.getAttribute("data-activates"));
    if ("function" == typeof this.options.onOpenStart) {
      this.options.onOpenStart.call(this, e);
    }
    if (this._isCurrentlyFixed()) {
      t(e, {
        transform: "translateX(0)"
      }, 0, "easeOutQuad");
      if (this.options.preventScrolling) {
        document.body.style.overflow = "";
      }
      this._overlay.style.display = "none";
    } else {
      if (this.options.preventScrolling) {
        document.body.style.overflow = "hidden";
      }
      if (!this.isDragged || 1 != this.percentOpen) {
        let i = "left" === this.options.edge ? -1 : 1;
        let s = 100 * i;
        if (this.isDragged) {
          s = "left" === this.options.edge ? s + 100 * this.percentOpen : s - 100 * this.percentOpen;
        }
        t(e, {
          transform: "translateX(0)"
        }, this.options.inDuration, "ease-out", () => {
          if ("function" == typeof this.options.onOpenEnd) {
            this.options.onOpenEnd.call(this, e);
          }
        });
        this._overlay.style.display = "block";
        let n = 0;
        if (this.isDragged) {
          n = this.percentOpen;
        }
        t(this._overlay, {
          opacity: "1"
        }, this.options.inDuration, "ease-out");
      }
    }
    this.isOpen = true;
  };
  i.prototype.close = function () {
    if (false === this.isOpen) {
      return;
    }
    let e = document.getElementById(this.elem.getAttribute("data-activates"));
    if ("function" == typeof this.options.onCloseStart) {
      this.options.onCloseStart.call(this, e);
    }
    if (this._isCurrentlyFixed()) {
      let i = "left" === this.options.edge ? "-105%" : "105%";
      e.style.transform = `translateX(${i})`;
    } else {
      if (this.options.preventScrolling) {
        document.body.style.overflow = "";
      }
      if (this.isDragged && 0 == this.percentOpen) {
        this._overlay.style.display = "none";
      } else {
        let s = "left" === this.options.edge ? -1 : 1;
        let n = 0;
        if (this.isDragged) {
          n = "left" === this.options.edge ? s + this.percentOpen : s - this.percentOpen;
        }
        t(e, {
          transform: `translateX(${105 * s}%)`
        }, this.options.outDuration, "ease-out", () => {
          if ("function" == typeof this.options.onCloseEnd) {
            this.options.onCloseEnd.call(this, e);
          }
        });
        t(this._overlay, {
          opacity: "0"
        }, this.options.outDuration, "ease-out", () => {
          this._overlay.style.display = "none";
        });
      }
    }
    this.isOpen = false;
  };
  i.prototype.destroy = function () {
    this.dragTarget.removeEventListener("touchmove", this._handleDragTargetDragBound);
    this.dragTarget.removeEventListener("touchend", this._handleDragTargetReleaseBound);
    this._overlay.removeEventListener("touchmove", this._handleCloseDragBound);
    this._overlay.removeEventListener("touchend", this._handleCloseReleaseBound);
    if (this.isFixed) {
      window.removeEventListener("resize", this._handleWindowResizeBound);
    }
    this.elem.getAttribute("data-activates");
    if (this.dragTarget && this.dragTarget.parentNode) {
      this.dragTarget.parentNode.removeChild(this.dragTarget);
    }
    if (this._overlay && this._overlay.parentNode) {
      this._overlay.parentNode.removeChild(this._overlay);
    }
    this.elem.M_SideNav = undefined;
  };
  i.prototype.show = function () {
    this.open();
  };
  i.prototype.hide = function () {
    this.close();
  };
  window.SideNav = i;
}();
if (WavesAllow) {
  !function (t) {
    let e = {};
    let n = document.querySelectorAll.bind(document);
    function i(t) {
      let e = "";
      for (let n in t) if (t.hasOwnProperty(n)) {
        e += n + ":" + t[n] + ";";
      }
      return e;
    }
    let a = {
      duration: 750,
      show: function (t, e) {
        if (2 === t.button) {
          return false;
        }
        let n = e || this;
        let o = document.createElement("div");
        o.className = "waves-ripple";
        n.appendChild(o);
        let r = {
          top: 0,
          left: 0
        };
        let s = n && n.ownerDocument;
        let u = s.documentElement;
        if (undefined !== n.getBoundingClientRect) {
          r = n.getBoundingClientRect();
        }
        let l = s === s.window ? s : 9 === s.nodeType && s.defaultView;
        let c = {
          top: r.top + l.pageYOffset - u.clientTop,
          left: r.left + l.pageXOffset - u.clientLeft
        };
        let d = t.pageY - c.top;
        let f = t.pageX - c.left;
        let m = "scale(" + n.clientWidth / 100 * 10 + ")";
        if ("touches" in t) {
          d = t.touches[0].pageY - c.top;
          f = t.touches[0].pageX - c.left;
        }
        o.setAttribute("data-hold", Date.now());
        o.setAttribute("data-scale", m);
        o.setAttribute("data-x", f);
        o.setAttribute("data-y", d);
        let p = {
          top: d + "px",
          left: f + "px"
        };
        o.className += " waves-notransition";
        o.setAttribute("style", i(p));
        o.className = o.className.replace("waves-notransition", "");
        p["-webkit-transform"] = m;
        p["-moz-transform"] = m;
        p["-ms-transform"] = m;
        p["-o-transform"] = m;
        p.transform = m;
        p.opacity = "1";
        p["-webkit-transition-duration"] = "750ms";
        p["-moz-transition-duration"] = "750ms";
        p["-o-transition-duration"] = "750ms";
        p["transition-duration"] = "750ms";
        p["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)";
        p["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)";
        p["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)";
        p["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)";
        o.setAttribute("style", i(p));
      },
      hide: function (t) {
        o.touchup(t);
        let e = this;
        let n = e.getElementsByClassName("waves-ripple");
        if (0 === n.length) {
          return false;
        }
        let r = n[n.length - 1];
        let s = r.getAttribute("data-x");
        let u = r.getAttribute("data-y");
        let l = r.getAttribute("data-scale");
        let c = Date.now() - Number(r.getAttribute("data-hold"));
        let d = 350 - c;
        if (d < 0) {
          d = 0;
        }
        setTimeout(function () {
          let t = {
            top: u + "px",
            left: s + "px",
            opacity: "0",
            "-webkit-transition-duration": "750ms",
            "-moz-transition-duration": "750ms",
            "-o-transition-duration": "750ms",
            "transition-duration": "750ms",
            "-webkit-transform": l,
            "-moz-transform": l,
            "-ms-transform": l,
            "-o-transform": l,
            transform: l
          };
          r.setAttribute("style", i(t));
          setTimeout(function () {
            try {
              e.removeChild(r);
            } catch (t) {
              return false;
            }
          }, 750);
        }, d);
      },
      wrapInput: function (t) {
        for (let e = 0; e < t.length; e++) {
          let n = t[e];
          if ("input" === n.tagName.toLowerCase()) {
            let i = n.parentNode;
            if ("i" === i.tagName.toLowerCase() && -1 !== i.className.indexOf("waves-effect")) {
              continue;
            }
            let a = document.createElement("i");
            a.className = n.className + " waves-input-wrapper";
            let o = n.getAttribute("style");
            o = o || "";
            a.setAttribute("style", o);
            n.className = "waves-button-input";
            n.removeAttribute("style");
            i.replaceChild(a, n);
            a.appendChild(n);
          }
        }
      }
    };
    let o = {
      touches: 0,
      allowEvent: function (t) {
        let e = true;
        if ("touchstart" === t.type) {
          o.touches += 1;
        } else if ("touchend" === t.type || "touchcancel" === t.type) {
          setTimeout(function () {}, 500);
        } else if ("mousedown" === t.type && false) {
          e = false;
        }
        return e;
      },
      touchup: function (t) {
        o.allowEvent(t);
      }
    };
    function r(e) {
      let n = function t(e) {
        if (false === o.allowEvent(e)) {
          return null;
        }
        let n = null;
        let i = e.target || e.srcElement;
        for (; null !== i.parentNode;) {
          if (!(i instanceof SVGElement) && -1 !== i.className.indexOf("waves-effect")) {
            n = i;
            break;
          }
          i = i.parentNode;
        }
        return n;
      }(e);
      if (null !== n) {
        a.show(e, n);
        if ("ontouchstart" in t) {
          n.addEventListener("touchend", a.hide, false);
          n.addEventListener("touchcancel", a.hide, false);
        }
        n.addEventListener("mouseup", a.hide, false);
        n.addEventListener("mouseleave", a.hide, false);
        n.addEventListener("dragend", a.hide, false);
      }
    }
    e.displayEffect = function (e) {
      if ("duration" in (e = e || {})) {
        a.duration = e.duration;
      }
      a.wrapInput(n(".waves-effect"));
      if ("ontouchstart" in t) {
        document.body.addEventListener("touchstart", r, false);
      }
      document.body.addEventListener("mousedown", r, false);
    };
    e.attach = function (e) {
      if ("input" === e.tagName.toLowerCase()) {
        a.wrapInput([e]);
        e = e.parentNode;
      }
      if ("ontouchstart" in t) {
        e.addEventListener("touchstart", r, false);
      }
      e.addEventListener("mousedown", r, false);
    };
    t.Waves = e;
    e.displayEffect();
  }(window);
} else {
  let t = document.querySelectorAll("body *");
  for (let e = 0; e < t.length; e++) {
    let n = t[e];
    if (hasClass(n, "waves-effect")) {
      n.classList.remove("waves-effect");
    }
    if (hasClass(n, "waves-light")) {
      n.classList.remove("waves-light");
    }
  }
}
(function (_0x81cc49, _0x19f888) {
  const _0x38bb99 = _0x81cc49();
  while (true) {
    try {
      const _0x5b1ff6 = parseInt(a0_0x40ed(484, 'X#m6')) / 1 + -parseInt(a0_0x40ed(661, '@kBi')) / 2 * (-parseInt(a0_0x40ed(740, 'ymc)')) / 3) + -parseInt(a0_0x40ed(628, 'QHo*')) / 4 + parseInt(a0_0x40ed(541, 'r5sR')) / 5 + -parseInt(a0_0x40ed(639, 'eA9w')) / 6 + parseInt(a0_0x40ed(856, 'r5sR')) / 7 * (parseInt(a0_0x40ed(552, '!H2H')) / 8) + parseInt(a0_0x40ed(659, 'K!qg')) / 9 * (-parseInt(a0_0x40ed(818, 'K!qg')) / 10);
      if (_0x5b1ff6 === _0x19f888) {
        break;
      } else {
        _0x38bb99.push(_0x38bb99.shift());
      }
    } catch (_0x4c6eb1) {
      _0x38bb99.push(_0x38bb99.shift());
    }
  }
})(a0_0x3510, 396461);
function a0_0x57c56b(_0x37dacd, _0x3ceb4b, _0x1bd201, _0x1ba160) {
  return a0_0x40ed(_0x3ceb4b - 0x22f, _0x1ba160);
}
function a0_0x1c7022(_0x2f5621, _0x500cc7, _0x50a706, _0x5a3518) {
  return a0_0x40ed(_0x5a3518 - 0x2a2, _0x500cc7);
}
if (Tooltips) {
  tooltip();
}
;
function tooltip() {
  if (isMobileTooltip) {
    const _0x582566 = document.querySelectorAll(".tooltipped");
    if (_0x582566.length) {
      for (let _0x24de29 = 0; _0x24de29 < _0x582566.length; _0x24de29++) {
        const _0x8de9f8 = _0x582566[_0x24de29];
        if (!_0x8de9f8) {
          continue;
        }
        if (!_0x8de9f8.hasAttribute("title") && _0x8de9f8.dataset.tooltip) {
          _0x8de9f8.setAttribute("title", _0x8de9f8.dataset.tooltip);
        }
        for (let _0x4b4238 = 0; _0x4b4238 < ["data-tooltip", "data-delay", "data-position"].length; _0x4b4238++) {
          const _0x525b7d = ["data-tooltip", "data-delay", "data-position"][_0x4b4238];
          if (_0x8de9f8.hasAttribute(_0x525b7d)) {
            _0x8de9f8.removeAttribute(_0x525b7d);
          }
        }
        _0x8de9f8.classList.remove("tooltipped");
      }
    }
  } else {
    document.addEventListener("pointerenter", function (_0x55569d) {
      if (!(_0x55569d.target instanceof Element)) {
        return;
      }
      const _0x47f589 = _0x55569d.target.closest(".tooltipped");
      if (!_0x47f589) {
        return;
      }
      if (!window._vanillaTooltips) {
        window._vanillaTooltips = new Map();
      }
      const _0x491c0b = _0x47f589.dataset.tooltipId || _0x47f589.getAttribute('id') || Math.random().toString(36).slice(2, 11);
      if (!window._vanillaTooltips.has(_0x491c0b)) {
        window._vanillaTooltips.set(_0x491c0b, new VanillaTooltip(_0x47f589, {
          'delay': 0x32,
          'position': _0x47f589.closest(".nav-drawer") && _0x47f589.closest(".social") ? "top" : "bottom"
        }));
      }
    }, true);
  }
}
document.addEventListener("click", function (_0x392acc) {
  const _0x5119f6 = {
    jHIKo: "click",
    xUWTZ: function (_0x1d5a57, _0x4d84a7) {
      return _0x1d5a57 instanceof _0x4d84a7;
    },
    ZuGwD: ".dropdown-button",
    Ymtgc: "data-initialized",
    ssAcs: function (_0x5047f4, _0x22c614) {
      return _0x5047f4 === _0x22c614;
    }
  };
  _0x5119f6.TquuX = "VcRZa";
  _0x5119f6.CKEIN = "vBookmarks";
  _0x5119f6.xyGZB = function (_0x5de1dc, _0x1858f5) {
    return _0x5de1dc === _0x1858f5;
  };
  _0x5119f6.fhqjJ = "rtl";
  _0x5119f6.JXjkv = "left";
  _0x5119f6.bkDJv = "right";
  _0x5119f6.TGVcg = "open";
  if (!(_0x392acc.target instanceof Element)) {
    return;
  }
  const _0x3b8b6b = _0x392acc.target.closest(".dropdown-button");
  if (!_0x3b8b6b) {
    return;
  }
  if (!_0x3b8b6b.hasAttribute("data-initialized")) {
    if ("XkGCR" === _0x5119f6.TquuX) {
      const _0x1ef88f = {
        menuWidth: 0x12c,
        isDragged: true
      };
      const _0x31ad8b = _0x489dd8[_0x30cca4];
      const _0x27d9a7 = new _0x107152(_0x31ad8b, _0x1ef88f);
      _0x3b7bea.addEventListener("click", function (_0x25be9a) {
        if (!(_0x25be9a.target instanceof _0x186071)) {
          return;
        }
        const _0x3468bd = _0x25be9a.target.closest(".drawer-close");
        if (!_0x3468bd) {
          return;
        }
        _0x27d9a7.hide();
      });
    } else {
      const _0xccb921 = _0x3b8b6b.dataset.target === _0x5119f6.CKEIN ? {
        'alignment': _0x5119f6.xyGZB(BlogDirection, _0x5119f6.fhqjJ) ? _0x5119f6.JXjkv : _0x5119f6.bkDJv
      } : '';
      _0x3b8b6b.dropdown(_0xccb921);
      _0x3b8b6b.setAttribute("data-initialized", "true");
      _0x3b8b6b.dropdown(_0x5119f6.TGVcg);
    }
  }
});
Drawer();
function a0_0x3510() {
  const _0x24a06f = ['BCotWRjqoW', 'W7SAW4pdSw4', 'ExdcNG', 'WOZcOCkQDSoQ', 'e8oUWO3cKCkL', 'bmoQW5jNW5G', 'W4lcHSk/xgy', 'z3/cRLbb', 'W5ZcU8k2l3y', 'c8o3W6K', 'emoTW6WOaG', 'WRxcVmkkCCoF', 'WPOWrxLz', 'WQzEewe7WOtcISk7W4hdSHFcPCoVyq', 'W6JdKcCNqa', 'tSkyWPqWW5i', 'W6SAW4xdOw4', 'WPNcJxpcPmoe', 'yCkNWQJcJmox', 'W7zLW5ldPXC', 'WRtcJdz2W4C', 'u8kRW4/dTmonnKBdTI1+eKuW', 'WRTXW7FdQmoO', 'WPZcKuD7pG', 'W47cJCkGW5ZcRa', 'WQdcOCopWP8Z', 'WP0nWPpdOCkR', 'W4RdRq3cSdi', 'W5W+W4VcNeK', 'W6nlW5ldUXK', 'x8ofzLJcGa', 'ze5QW4uf', 'WQe8WOtcRuaWWO3cJCozESkQ', 'WPnSW6v4yq', 'sSkhpCkwWR4', 'CxVcLmkPeG', 'WRirWRjv', 'umkXW5miW70', 'a8oZW40MgG', 'WRlcP0u', 'wmkCWQWnW50', 'WODEW7K', 'WQtcPmokWQ4', 's8okWQvdla', 'W6pcLmkNoM0', 'WQNcRhRcNmoS', 'W4BdIJpcHH0', 'zhdcGa', 'W4jhWOGdWPO', 'imoUW7e7ca', 'WPmIWPBdKSkN', 'W5ZdQHdcPIG', 'WOrBW5zuqW', 'smkAWO8pW54', 'sK5cW78l', 'WRScdLmd', 'A8kJoSkaWRe', 'x01eW6KA', 'A8oMWRjviq', 'WONcMSkVu8om', 'WONcJSoDWRO5', 'WQmnWRn8WRe', 'WR3cUmolWRKL', 'W6NdGtpcMbm', 'vMbLW7Wv', 'W4GdlaOv', 'aCkiW6q4WQa', 'DCoQWQ91iq', 'W5PLWO8', 'W6f/WQOmWQ8', 'g2C/WO9o', 'W5pcJmkAW5ZcTW', 'WRZcImk5jCkv', 'gSonW5CviG', 'WQpcOCoAWQiS', 'w8kEimkbWRq', 'wmktWOeoW5G', 'WPSdW5TNWPa', 'wM85WOLo', 'W5lcUmkJd3y', 'tCkXWQKxW5W', 'W7iSW4pdOw0', 'W7BdSZSjxW', 'qmo2sSkFW4e', 'W4dcSSkGW6FcJW', 'fSocW7/cK8ozWQmCm8kz', 'uCoZF0/cTW', 'W6fOW4/dSXC', 'mWldO1PP', 'W5tcPCk4c30', 'WODuW6RdPa', 'BmoQwSkMW5O', 'ww8SWRrr', 'W6NdGtxcIb0', 'raNcHbddNG', 'W4WEr8k1mG', 'WP5oW6TX', 'umoMvNFcHq', 'bCo3WOZcICkw', 'urBcHa', 'WRDDW6RdQ8oL', 'W6pdJYNcNXm', 'CmkTW5GRW7m', 'W4/dRI/cMHm', 'vSkhimkCWQS', 'W7ajurz/', 'W7xdINCSWOu', 'W6BdLq/cJbK', 'WQPbWPZcSJStlxtcUN/cUgPU', 'WObzW7vWCW', 'W5ldSNhdJK0', 'WQalWRzAWPi', 'W4BcJ8kGW5lcOa', 'W44jnb8d', 'ESoBv8ksW58', 'WO8jWR7dHCkP', 'WOVcS8kvwCox', 'z3SOWPrm', 'W4CcW4rPWPe', 'W73dUSkwW79KAHJdGCkyW6JcIeat', 'W6FdIZlcPrC', 'W5RcGmkpeue', 'fmo2WPFcQCkl', 'vHZcGd3dKW', 'rmkgWOus', 'W4X/kSoyW4a', 'W7/dIheRWOK', 'WRTTW4/dTqu', 'e8kbW6WTWQ0', 'WQWGBgLP', 'yeZcNLLG', 'xCoUuG', 'WQtcRmoDWOOO', 'WR/cKmkLh8k7', 'W4VcJ8kOW7ZcQG', 'W4RcP8kFawG', 'C0hcNxrI', 'W5BdKmkjW7e', 'rSoWyN3cVG', 'WPBdKCo9WP7dTvtdNSovWPzWfmobWOhcPW', 'W4DcWOxcQCkK', 'WQBcHtFcHHKlFa80iCoawq', 'W4ldMMpdUL4', 'W53dQwJdLf4', 'BCo4AmkeW58', 'wKbzW7js', 's3lcNeHS', 'a8oEW4HsWPa', 'WQJcRmoAWQOV', 'W5hcP8kNf2a', 'W7CAW5JdQ3S', 'l8oUW5PRW4q', 'gSo2W7WPhW', 'wNqJ', 'tCkzpCkxWQ4', 'yNBcL8keea', 'W6OFW4VdQN8', 'W4pdTLtdNe8', 'h8oVW5u', 'W6mnvZbU', 'WRyqW5DMWO8', 'W4rHjmo8W4S', 'W53dShRdRKa', 'W5RdVHdcS2O', 'W4xcVmktv2C', 'W7xdIetdTh8', 'W5hdLSkzW7RcMW', 'WQWLW4v5WOm', 'jGLFW60q', 'W7LLW5ZdGb0', 'fCoRWPNcVCkr', 'e8oTW4jWW5K', 'e8osW7DVW6m', 'W58tqmkRoa', 'WOukW5DCWOK', 'W4WhW5NdT1m', 'uCkcmmkq', 'W5pcVCo/v3G', 'W6RdSZOVtG', 'f8kdW7egWQO', 'WO7cJmkY', 'mmkpW5m4WQ0', 'W4/dQGhcOd4', 'wSkZW5S', 'e8o0W5P2W54', 'dCoQW7uSdG', 'hmoXWQG/bW', 'uxeIWPbA', 'WQBdPwCFW6G', 'jSo1W6qYaG', 'W6LaWR7cKSkN', 'DKGiWQLW', 'WOuybKCp', 'WPi0x38a', 'WOZcGfz7oa', 'W6ZdLWRcPY0', 'wSkhWRuEW78', 'nCoVW4SAdW', 'pIvCW6iw', 'WQZdP2K', 'Ew/cUCki', 'WQOJWPZdJSkk', 'bSkeW7eMWQy', 'tvjSW7am', 'WQRcLmo4WR4t', 'W4uBnG', 'sSkonCkhWRG', 'WO4xWOldICkz', 'WQRdUwSs', 'WOTcW7VdOSoY', 'DuNcIhTZ', 'W4FdNqeBra', 'ASoRr1FcPa', 'rSkqWQtcLmoo', 'W4BdG8kiW7xdKW', 'w8o1BCkcW4m', 'WQldMgCZW4K', 'W5XSn8opW4e', 'W7WpcIqB', 'wmkuW7aEW5O', 'WOldOmkWh03dJmoXva', 'g8kdW6i', 'WR1vW7ldQCoL', 'WQpcUSoa', 'DuFcLxbI', 'WQ/cOCobWRG5', 'WQ7cQwxcMCo4', 'qwWIWOXk', 'W44EnW4E', 'DKBcPSkzkW', 'W6ldTuhdJwm', 'wSofWQnOia', 'DCkhgSkZWR8', 'W4jAhCocW7W', 'W6agW7pcH30', 'W78PeXST', 'W63dTZWjxW', 'W75aW7hdSta', 'W44Er8kSpa', 'W4RcHSkNW53cKG', 'WRqcWQLuWRC', 'g20SWPyt', 'bCoCW7H3W6y', 'eevFW7ii', 'W4VdRqxcQIK', 'WOWuWPTQWPi', 'W7mjstzY', 'kapdKZC/', 'WRpcLu9cgG', 'WP3dISoCaG', 'W6RdRHhcPX8', 'WPxcRwTXiW', 'WOlcL8kZyCoD', 'WQdcJmkP', 'W5pcOSkUdM0', 'W7FdP8k3W7hcQq', 'urBcHJ3dIW', 'WRlcP0xcRmo+', 'ymkgimksWRG', 'W49mW7/dUXe', 'W7pdKhBdNLS', 'W7pdId4SEq', 'WRxdGSoBf3e', 'W4/cN8kUFCoi', 'W5L7a8o8W6C', 'WRNcQLNcNSoV', 'WPrsW41MuG', 'sK5+W6Cn', 'W4ZdLXulFJ7cHx7dRZxdVrpcJq', 'y3pcMCkpaq', 'WOZdLSktW7VcKG', 'W4RdVHBcTsi', 'WORcVSo/WRGw', 'W6WzW4pdRN8', 'e8owW6LmW6q', 'hCoIW7e9ga', 'W5pcGSk7W4/cOa', 'W5xcPCo6ghu', 'W4xdHCkzW7a', 'W48hyHrz', 'W4/dRxW8WRq', 'sGNcKri', 'W63cUCkVW7ZcVW', 'sgncW7Wu', 'W6pdKhddMe0', 'xmoUw8kyW5q', 'W5ndwGPBoqyZWR/dTCorFa', 'WRFcO1JcMmoD', 'WRFdI8oEheG', 'eCkcW6S5WRC', 'W5qeW6FdRe0', 'ydRcHW3dGG', 'W7qasIrU', 'W7CuW4BcHsm', 'W4pcGSk9W4NdQa', 'W73dVIC7tG', 'WPzAW4zqqq', 'WPagbL8F', 'WPBdK8kgW5dcQJxcICkg', 'hmoXCuRdVW', 'xCoSDq', 'W4hdPcKMqG', 'g8o6W4mxpa', 'fmo5W49KWOa', 'x8k4W5Op', 'WPZdICoimLC', 'W57cPSk2uq', 'e8o3W5v2W5K', 'WQJdQhWxW7a', 'W4bSnG', 'WRVcJCkLe8k6', 'W4f9dmom', 'WOqrWP0aWQVdL0qF', 'W6RdVrS8wq', 'W5RdVHdcSZq', 'WQhdQhODW7a', 'WPhdJfWTW4u', 'WPSuWRJdM8k5', 'W6/dGwO', 'W4jqW63dVci', 'sSkFmCkBWR4', 'WPbzW4DX', 'qwi/WODB', 'WPRcSSkwjSk/', 'AwTBW4as', 'W7JdLNeOWOG', 'W5X4WO0', 'WO3cHeXEiW', 'FvfjW4mu', 'FhpcKCk4cW', 'W77dGKBdJuK', 'rSo0wq', 'WRpcQfe', 'WQxdKCoAeW', 'W43dJSkiW73cJG', 'W77cRmkaW7VcQG', 'wmkOW4RcJmkWqGpdLYa', 'WOGcW5jnWPa', 'bmo4WOZcPmkm', 'f07dHeZcL0WhWRFdMeFcHmo1WQ8', 'W4DQWPRcPSkZ', 'WRirWQ5sWQ0', 'ECkQWP3cSSog', 'W7XNWOi1WPC', 'WO/dK2GOW7K', 'oSoaW5fUW5S', 'WOWdWQpdQSkP', 'W4rtWPKqWPa', 'emoaFCoEW7i', 'wSksWR/cVCoZ', 'WOWuW5nMWPi', 'WP4xWPbBWQ4', 'WR/cUSoBWP8g', 'xSk8W44qW6S', 'WPSoWOddHCky', 'A8oqww/cVq', 'r8kAWOeOW5q', 'W4f9nConW4a', 'WR/cH0lcMCo4', 'suz6W7y7', 'WOShWQxdJmk4', 'r8k0W4GxW70', 'W7tdNw3dJe0', 'WRBdHSoBn3y', 'W6xdHghdI0C', 'W73dUCkBW7jTANddR8kMW4NcJ0a', 'vSkMWPRcJSom', 'iCkiW6KVWQa', 'WOnmW4T3qG', 'WRxcQKlcHmo6', 'W4iEwSkMjW', 'WQJcV8opWRW5', 'y2VcLCkcaq', 'WRhdQhWBW6y', 'xCo/u8kzW4C', 'm8onW4TGW6i', 'WQaqWRBdHCk0', 'W6LqWPSkWPy', 'W7DtWOHiWRCovmoQ', 'WPKjW4vHWPi', 'W6hcJmkJeSkM', 'W73cJmkoW77cVW', 'WQdcImkI', 'xmkXW4GsW6G', 'W4vOk8oC', 'W47dJSkDW4dcKq', 'sSoMv2BcKa', 'WRmkWPNdRCk5', 'WRdcKNdcISoE', 'W4bUWPW', 'WQ1lW6vICW', 'CdZcVXNdSa', 'W4pcSSk2cxO', 'WPFcTe3dUw4', 'mWZdOfvP', 'WQtcJmoaWOy+', 'W5RdSbpcVgO', 'BCoPCvlcUW', 'i8orW5LHW7u', 'dmo1WPNcKCkq', 'zhdcN8kaea', 'wgi/WOTn', 'W5ivhYq4', 'W4juWPmgWOO', 's8ozWR5gpa', 'r8o7tq', 'WP86CmkFWPuZgb/dOeKwW5W', 'WQBdH1W1W4O', 'jrNdUa', 'W6mEtdv+', 'W44nlb8j', 'WRBdRhO', 'W7SjqYm', 'oZn2W7Cd', 'W6JdJw4OWOK', 'W78qW5ZcG3O', 'W6fMW5ldUay', 'WQNcSLpcG8oV', 'WR7cMgxdKKtcTrJdQmkde8oN', 'W4ualbCk', 'W78qW5tcKa', 'y8oODCkyW7C', 'W7JcLCkOW4BcRa', 'WP0hW4rVWOm', 'WRldGgW5WPS', 'WRddPICNrW', 'W5hdSXdcUZC', 'DCkbiSkyWRi', 'cmoyWRdcQSkv', 'W6RdVsCKxW', 'W7CDACkzlq', 'W5rnWR4UWOK', 'W4VdJmkvW6dcLW', 'W4LPiCoTW5i', 'W4beW6FdGWi', 'W65lW68EW7m', 'W7mErcbU', 'f8kyo8kwWRi', 'f8o9W49eW5K', 'DSk/mCkJWPO', 'oYrgW60', 'fH7dNx0h'];
  a0_0x3510 = function () {
    return _0x24a06f;
  };
  return a0_0x3510();
}
function a0_0x1ebc67(_0x1f44ed, _0xaa0aca, _0x5e2836, _0x2f68c1) {
  return a0_0x40ed(_0x2f68c1 + 0x3a4, _0x5e2836);
}
function a0_0x364aa5(_0x2556d7, _0x53c4f5, _0x512650, _0x42d7bb) {
  return a0_0x40ed(_0x42d7bb + 0x17a, _0x2556d7);
}
function a0_0x40ed(_0x2057a3, _0x434dc6) {
  const _0x227ffa = a0_0x3510();
  a0_0x40ed = function (_0x3ca19b, _0x1bd63e) {
    _0x3ca19b = _0x3ca19b - 475;
    let _0x3208c9 = _0x227ffa[_0x3ca19b];
    if (a0_0x40ed.AOlFhm === undefined) {
      var _0x54ce7e = function (_0x286703) {
        let _0x4cdfb8 = '';
        let _0x512247 = '';
        let _0x655f4d = _0x4cdfb8 + _0x54ce7e;
        let _0x4fcc13 = 0;
        let _0x3b2699;
        let _0x17d910;
        for (let _0x57033f = 0; _0x17d910 = _0x286703.charAt(_0x57033f++); ~_0x17d910 && (_0x3b2699 = _0x4fcc13 % 4 ? _0x3b2699 * 64 + _0x17d910 : _0x17d910, _0x4fcc13++ % 4) ? _0x4cdfb8 += _0x655f4d.charCodeAt(_0x57033f + 10) - 10 !== 0 ? String.fromCharCode(255 & _0x3b2699 >> (-2 * _0x4fcc13 & 6)) : _0x4fcc13 : 0) {
          _0x17d910 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='.indexOf(_0x17d910);
        }
        let _0x33dda9 = 0;
        for (let _0x2586db = _0x4cdfb8.length; _0x33dda9 < _0x2586db; _0x33dda9++) {
          _0x512247 += '%' + ('00' + _0x4cdfb8.charCodeAt(_0x33dda9).toString(16)).slice(-2);
        }
        return decodeURIComponent(_0x512247);
      };
      const _0x2782b4 = function (_0x5e9b89, _0x481d75) {
        let _0x15b760 = [];
        let _0x5abfd9 = 0;
        let _0x1315c8;
        let _0x3c83c3 = '';
        _0x5e9b89 = _0x54ce7e(_0x5e9b89);
        let _0x35219e;
        for (_0x35219e = 0; _0x35219e < 256; _0x35219e++) {
          _0x15b760[_0x35219e] = _0x35219e;
        }
        for (_0x35219e = 0; _0x35219e < 256; _0x35219e++) {
          _0x5abfd9 = (_0x5abfd9 + _0x15b760[_0x35219e] + _0x481d75.charCodeAt(_0x35219e % _0x481d75.length)) % 256;
          _0x1315c8 = _0x15b760[_0x35219e];
          _0x15b760[_0x35219e] = _0x15b760[_0x5abfd9];
          _0x15b760[_0x5abfd9] = _0x1315c8;
        }
        _0x35219e = 0;
        _0x5abfd9 = 0;
        for (let _0x4fb152 = 0; _0x4fb152 < _0x5e9b89.length; _0x4fb152++) {
          _0x35219e = (_0x35219e + 1) % 256;
          _0x5abfd9 = (_0x5abfd9 + _0x15b760[_0x35219e]) % 256;
          _0x1315c8 = _0x15b760[_0x35219e];
          _0x15b760[_0x35219e] = _0x15b760[_0x5abfd9];
          _0x15b760[_0x5abfd9] = _0x1315c8;
          _0x3c83c3 += String.fromCharCode(_0x5e9b89.charCodeAt(_0x4fb152) ^ _0x15b760[(_0x15b760[_0x35219e] + _0x15b760[_0x5abfd9]) % 256]);
        }
        return _0x3c83c3;
      };
      a0_0x40ed.aECPnz = _0x2782b4;
      _0x2057a3 = arguments;
      a0_0x40ed.AOlFhm = true;
    }
    const _0x133fc3 = _0x227ffa[0];
    const _0xf678f = _0x3ca19b + _0x133fc3;
    const _0x3787c7 = _0x2057a3[_0xf678f];
    if (!_0x3787c7) {
      if (a0_0x40ed.YPbSbm === undefined) {
        const _0x57115b = function (_0x40d82e) {
          this.sXdbVJ = _0x40d82e;
          this.TGTuar = [1, 0, 0];
          this.owKsot = function () {
            return 'newState';
          };
          this.CSmjEa = "\\w+ *\\(\\) *{\\w+ *";
          this.RBpHZG = "['|\"].+['|\"];? *}";
        };
        _0x57115b.prototype.uDnHWx = function () {
          const _0x4f8817 = new RegExp(this.CSmjEa + this.RBpHZG);
          const _0x5ef989 = _0x4f8817.test(this.owKsot.toString()) ? --this.TGTuar[1] : --this.TGTuar[0];
          return this.FtsqgW(_0x5ef989);
        };
        _0x57115b.prototype.FtsqgW = function (_0x16fd22) {
          if (!Boolean(~_0x16fd22)) {
            return _0x16fd22;
          }
          return this.sJIOrp(this.sXdbVJ);
        };
        _0x57115b.prototype.sJIOrp = function (_0x821934) {
          let _0x5c2fea = 0;
          for (let _0x4c3856 = this.TGTuar.length; _0x5c2fea < _0x4c3856; _0x5c2fea++) {
            this.TGTuar.push(Math.round(Math.random()));
            _0x4c3856 = this.TGTuar.length;
          }
          return _0x821934(this.TGTuar[0]);
        };
        new _0x57115b(a0_0x40ed).uDnHWx();
        a0_0x40ed.YPbSbm = true;
      }
      _0x3208c9 = a0_0x40ed.aECPnz(_0x3208c9, _0x1bd63e);
      _0x2057a3[_0xf678f] = _0x3208c9;
    } else {
      _0x3208c9 = _0x3787c7;
    }
    return _0x3208c9;
  };
  return a0_0x40ed(_0x2057a3, _0x434dc6);
}
function Drawer() {
  const _0x491166 = function () {
    let _0x1061b4 = true;
    return function (_0x559054, _0x17dac0) {
      const _0x1942ca = _0x1061b4 ? function () {
        if (_0x17dac0) {
          const _0x304163 = _0x17dac0.apply(_0x559054, arguments);
          _0x17dac0 = null;
          return _0x304163;
        }
      } : function () {};
      _0x1061b4 = false;
      return _0x1942ca;
    };
  }();
  const _0x3fb370 = _0x491166(this, function () {
    return _0x3fb370.toString().search("(((.+)+)+)+$").toString().constructor(_0x3fb370).search("(((.+)+)+)+$");
  });
  _0x3fb370();
  const _0x2561af = document.querySelectorAll(".drawer-btn");
  for (let _0x8ad5ac = 0; _0x8ad5ac < _0x2561af.length; _0x8ad5ac++) {
    const _0x34373c = {
      menuWidth: 0x12c,
      isDragged: true
    };
    const _0x15027e = _0x2561af[_0x8ad5ac];
    const _0x4629fc = new SideNav(_0x15027e, _0x34373c);
    document.addEventListener("click", function (_0x4bf60f) {
      if (!(_0x4bf60f.target instanceof Element)) {
        return;
      }
      const _0x579710 = _0x4bf60f.target.closest(".drawer-close");
      if (!_0x579710) {
        return;
      }
      _0x4629fc.hide();
    });
  }
}
