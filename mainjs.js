Element.prototype.appendElements = function (_0x3dee3d, _0x597ce0 = "append") {
  const _0x56a4be = {
    MahYg: function (_0xc89ca7, _0xc9379c) {
      return _0xc89ca7 === _0xc9379c;
    }
  };
  _0x56a4be.ctcsc = "XzfIA";
  _0x56a4be.vilqB = function (_0x488e13, _0x19f23d) {
    return _0x488e13 === _0x19f23d;
  };
  _0x56a4be.ITRdj = "SCRIPT";
  _0x56a4be.lJjqw = function (_0x20873c, _0x29709e) {
    return _0x20873c !== _0x29709e;
  };
  _0x56a4be.NMZTU = "AxJlS";
  _0x56a4be.ZoMYU = "script";
  _0x56a4be.zSrSq = function (_0x59cde7, _0x3b7a09) {
    return _0x59cde7 !== _0x3b7a09;
  };
  _0x56a4be.NiKWy = "#archive-page";
  _0x56a4be.IBzpE = "DIV";
  _0x56a4be.ZEjfH = function (_0x7b6349, _0x520fbc) {
    return _0x7b6349 === _0x520fbc;
  };
  _0x56a4be.oeWUW = function (_0x3161c5, _0x225f94) {
    return _0x3161c5 === _0x225f94;
  };
  _0x56a4be.rcvHN = "JgSjP";
  _0x56a4be.kyDhB = "ZUcRX";
  _0x56a4be.jXDBl = "template";
  _0x56a4be.DHqEx = "MdeXl";
  _0x56a4be.puuhH = "DyIim";
  _0x56a4be.gUZTb = "Error in appendElements:";
  try {
    if (_0x56a4be.rcvHN !== _0x56a4be.kyDhB) {
      const _0x344eb5 = document.createElement(_0x56a4be.jXDBl);
      _0x344eb5.innerHTML = _0x3dee3d;
      Array.from(_0x344eb5.content.children).forEach((_0x211b7b, _0x36c9c0) => {
        if (_0x56a4be.ctcsc === _0x56a4be.ctcsc) {
          if (_0x56a4be.vilqB(_0x211b7b.nodeName, _0x56a4be.ITRdj)) {
            if (_0x56a4be.lJjqw(_0x56a4be.NMZTU, "RNwOM")) {
              const _0x557409 = document.createElement(_0x56a4be.ZoMYU);
              if (_0x211b7b.src !== "") {
                _0x557409.src = _0x211b7b.src;
              }
              if (_0x211b7b.async !== undefined) {
                _0x557409.async = _0x211b7b.async;
              }
              if (_0x211b7b.defer !== undefined) {
                _0x557409.defer = _0x211b7b.defer;
              }
              if (_0x56a4be.zSrSq(_0x211b7b.textContent, "")) {
                _0x557409.textContent = _0x211b7b.textContent;
              }
              this.insertElementAtPosition(_0x557409, _0x597ce0);
            } else {
              _0x586aa0.push(_0x568732);
              _0x38e0de = _0x55ad4b.parentElement;
            }
          } else {
            this.insertElementAtPosition(_0x211b7b, _0x597ce0);
          }
        } else {
          this.isWindowFocused = true;
          if (this.hasStarted && !this.interval && this.count < this.seconds) {
            this.resumeTimer();
          }
        }
      });
    } else {
      _0x653509.querySelector(_0x56a4be.NiKWy).innerHTML = _0x5b5c69[1];
    }
  } catch (_0x5d94dd) {
    if (_0x56a4be.DHqEx === _0x56a4be.puuhH) {
      const _0x157b1c = _0x23a8d2.parentNode;
      return _0x157b1c.nodeName === _0x56a4be.IBzpE || _0x56a4be.ZEjfH(_0x157b1c.nodeName, "P") || _0x56a4be.oeWUW(_0x157b1c, _0x1f2a51);
    } else {
      console.error(_0x56a4be.gUZTb, _0x5d94dd);
    }
  }
};
Element.prototype.insertElementAtPosition = function (_0x405121, _0x45ab3b) {
  try {
    switch (_0x45ab3b) {
      case "before":
        if (this.parentNode) {
          this.parentNode.insertBefore(_0x405121, this);
        }
        break;
      case "after":
        if (this.parentNode) {
          this.parentNode.insertBefore(_0x405121, this.nextSibling);
        }
        break;
      case "prepend":
        this.insertBefore(_0x405121, this.firstChild);
        break;
      case "append":
      default:
        this.appendChild(_0x405121);
        break;
    }
  } catch (_0x428ef8) {
    console.error("Error inserting element:", _0x428ef8);
  }
};
(function () {
  let _0x3b86b0 = {};
  let _0x4a2413 = ["<div class=\"errorFetch\">هناك خطأ مØ§...</div>", "<div class=\"noFetch\">" + Msg.noResultsFound + "</div>"];
  let _0x38b4e0 = 0;
  let _0x538259 = typeof cpH === "undefined" ? "" : cpH(false, true);
  function _0x5ae0ca() {
    kgCh = // TOLOOK
    setInterval(function () {
      try {
        if (typeof _0x1f892f !== "function") {
          clearInterval(kgCh);
          document.body.innerHTML = _0x538259;
        } else {
          _0x1f892f();
        }
      } catch (_0x314155) {
        clearInterval(kgCh);
        document.body.innerHTML = _0x538259;
      }
    }, 1000);
  }
  _0x1f05a5();
  PostCount = typeof PostCount !== "undefined" ? PostCount : 0;
  feed_count = Math.ceil(PostCount / 150);
  if (typeof _bl !== "undefined") {
    for (let _0x2a6af7 = 0; _0x2a6af7 < _bl.length; _0x2a6af7++) {
      const _0x393b25 = _bl[_0x2a6af7];
      _0x3b86b0[_0x393b25.split(":")[0]] = parseInt(_0x393b25.split(":")[1]);
    }
  } else {
    _0x3b86b0 = {};
  }
  const _0x1c20e9 = {
    once: true
  };
  window.addEventListener("scroll", () => _0x3bf588(), _0x1c20e9);
  if (CookiesAllow) {
    _0x109d12();
  }
  _0x43de96();
  _0x57ca1c();
  _0x10b394();
  if (!HeaderFixed && NavbarFixed && MenuFixed || HeaderFixed && NavbarFixed && MenuFixed || HeaderFixed) {
    _0x3e87c2(document.querySelector("#BlogHeader"));
    document.querySelector("#BlogHeader .navbar").style.background = "transparent";
    document.querySelector("#BlogHeader .MainMenu-Contianer").style.background = "transparent";
  } else if (NavbarFixed) {
    _0x3e87c2(document.querySelector("#BlogHeader .navbar"));
  } else if (MenuFixed) {
    _0x3e87c2(document.querySelector("#BlogHeader .MainMenu-Contianer"));
  }
  if (!!localStorage.getItem("flaSpeed")) {
    _0x565e7f({
      type: "run"
    });
  } else {
    _0x565e7f(cateEvent);
  }
  if (isSingleItem) {
    _0xc83b38();
    if (document.querySelector("#LinkList170")) {
      _0x4354e6();
    }
  }
  if (isPost) {
    _0x3ade91();
    _0x5314a9();
  }
  if (isPage) {
    _0xe7904c();
    _0x295a62();
  }
  if (AdblockDc) {
    _0x1df6be();
  }
  window.addEventListener("scroll", () => {
    const _0x59ce44 = document.querySelector("#scrollToTop");
    if (!_0x59ce44) {
      return;
    }
    if (window.scrollY === 0) {
      _0x59ce44?.classList.remove("show");
    } else {
      _0x59ce44?.classList.add("show");
    }
  });
  function _0x109d12() {
    getScript("/js/cookienotice.js", function () {
      if (window.cookieChoices && cookieChoices.showCookieConsentBar) {
        cookieChoices.showCookieConsentBar(window.cookieOptions && cookieOptions.msg || decodeEntities(Msg.euCookieNotice2018), window.cookieOptions && cookieOptions.close || decodeEntities(Msg.ok), window.cookieOptions && cookieOptions.learn || decodeEntities(Msg.learnMore), window.cookieOptions && cookieOptions.link || typeof CookieList !== "undefined" && !!CookieList?.[0] ? CookieList[0] : "https://policies.google.com/technologies/cookies");
      }
    }, "defer");
  }
  ;
  function _0x43de96() {
    const _0x19783d = document.querySelectorAll("a[href*=\"search/label/\"]:not([href*=\"max-results\"])");
    for (let _0x2b366c = 0; _0x2b366c < _0x19783d.length; _0x2b366c++) {
      const _0x54475 = _0x19783d[_0x2b366c];
      const _0x3bf902 = new URL(_0x54475.href);
      const _0xa237ef = _0x3bf902.searchParams.get("max-results");
      if (_0xa237ef) {
        _0x3bf902.searchParams.set("max-results", getMaxResults);
      } else {
        _0x3bf902.searchParams.append("max-results", getMaxResults);
      }
      _0x54475.href = _0x3bf902.toString();
    }
  }
  function _0x3bf588() {
    const _0x5955d3 = document.querySelector("#blogger-components");
    const _0x62ddf5 = _0x5955d3.innerHTML.replace(/<!--|-->/g, "");
    const _0x2b44c6 = (_0x62ddf5.match(/http.+?widgets\.js/) || [])[0];
    const _0x2725d6 = (_0x62ddf5.match(/<script type='text\/javascript'>([\s\S]*?)<\/script>/) || [])[1];
    let _0x336ec2 = _0x62ddf5.match(/<script>([\s\S]*?)<\/script>/g);
    let _0x556141 = "";
    if (_0x336ec2) {
      getScript("/js/cookienotice.js", function () {
        for (let _0x5ad8fb = 0; _0x5ad8fb < _0x336ec2.length; _0x5ad8fb++) {
          const _0x37264d = _0x336ec2[_0x5ad8fb];
          const _0x2f49f8 = _0x37264d.replace(/<\/?script>/g, "");
          const _0x2ec292 = _0x2f49f8.match(/(window|\(window)[\s\S]*/);
          if (_0x2ec292) {
            _0x556141 += _0x2ec292[0];
          }
        }
        new Function(_0x556141)();
      });
    }
    if (_0x2b44c6 && _0x2725d6) {
      getScript(_0x2b44c6, function () {
        new Function(_0x2725d6)();
        BlogId = _WidgetManager._GetAllData().blog.blogId;
        if (isSingleItem) {
          document.head.insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"https://www.blogger.com/dyn-css/authorization.css?targetBlogID=" + BlogId + "\">");
        }
      });
    }
  }
  if (document.querySelector(".LastComments")) {
    document.querySelectorAll(".LastComments").forEach(_0x54d7a1 => {
      const _0x447ecf = _0x54d7a1.hasAttribute("data-num") ? _0x54d7a1.getAttribute("data-num") : "5";
      fetchData(BlogUrl + "feeds/comments/default?alt=json&start-index=1&max-results=" + _0x447ecf, function () {}, function (_0x5d8630) {
        const _0x2b361a = _0x5d8630.feed.entry;
        let _0x580543 = "";
        for (let _0x2b705f = 0; _0x2b705f < _0x2b361a.length; _0x2b705f++) {
          const _0x24916c = _0x2b361a[_0x2b705f];
          const _0x52b9eb = _0x24916c.link.filter(function (_0x4c91f2) {
            return _0x4c91f2.rel == "alternate";
          })[0].href;
          const _0x25ea74 = _0x24916c.author[0].name !== undefined ? decodeURIComponent(_0x24916c.author[0].name.$t) : "غير معرف";
          const _0x4fe0a1 = _0x24916c.author[0].gd$image.src.includes("blank.gif") || _0x24916c.author[0].gd$image.src.includes("rounded.gif") || _0x24916c.author[0].gd$image.src.includes("blogger_logo_round") || _0x24916c.author[0].gd$image.src.includes("img1.blogblog.com") ? AltAuthor.replace(/\/s.*?\//, "/s40-c/") : _0x24916c.author[0].gd$image.src.replace(/\/s.*?\//, "/s40-c/");
          const _0x59ff87 = _0x24916c.summary !== undefined ? _0x24916c.summary.$t.replace(/(<.*?>|\[.*?\])/g, "") : _0x24916c.content.$t.replace(/(<.*?>|\[.*?\])/g, "");
          const _0x6cef51 = _0x24916c.author[0].uri.$t && _0x24916c.author[0].uri.$t ? _0x24916c.author[0].uri.$t : null;
          const _0x5f3329 = _0x24916c.published.$t;
          const _0x3c86e3 = _0x24916c.updated.$t;
          const _0x1abd21 = timeAgo ? langDate(_0x3c86e3) : JcommentDate.slice(8, 10) + " " + langDate(_0x5f3329) + " " + _0x5f3329.slice(0, 4);
          const _0x1002b5 = _0x6cef51 ? "<span class=\"comment-author\"><a href=\"" + _0x6cef51 + "\" class=\"comment-user\" target=\"_blank\" rel=\"nofollow noreferrer\">" + _0x25ea74 + "</a></span>" : "<span class=\"comment-author\">" + _0x25ea74 + "</span>";
          const _0x5bbfd6 = document.createElement("div");
          _0x5bbfd6.innerHTML = _0x59ff87;
          let _0x2af7db = _0x5bbfd6.textContent;
          _0x2af7db = _0x2af7db.replace(/(https?:\/\/[^\s<>"']+)/g, function (_0x45e386) {
            const _0x151ab9 = new RegExp("<a[^>]+href=[\"']" + _0x45e386 + "[\"'][^>]*?>", "i").test(_0x2af7db);
            if (_0x151ab9) {
              return _0x45e386;
            }
            if (/https:\/\/(?:www\.)?(youtube\.com\/(watch\?v=|embed\/)|youtu\.be\/)[^\s<]+/.test(_0x45e386)) {
              return "<span class=\"attachment att-vid\">[فيديو]</span>";
            }
            if (/\.(jpeg|jpg|webp|gif|png)(\?[^\s]*)?$/i.test(_0x45e386) || /https:\/\/(?:[0-4]\.)?bp\.blogspot\.com[^\s]*/.test(_0x45e386) || /https:\/\/(?:lh[3-6]\.)?googleusercontent\.com[^\s]*/.test(_0x45e386) || /https:\/\/blogger\.googleusercontent\.com[^\s]*/.test(_0x45e386)) {
              return "<span class=\"attachment att-pic\">[" + Msg.image + "]</span>";
            }
            return "<a class=\"iscodilink\" href=\"" + _0x45e386 + "\" target=\"_blank\" rel=\"nofollow noreferrer noopener\">" + ExtLink + "</a>";
          });
          _0x580543 += `
<li class="comment">
<div class="post-image">
<div class="comments-image Lazy image smimg">
<img class="lazyload" data-size="auto" title="` + _0x25ea74 + " avatar\" alt=\"" + _0x25ea74 + " avatar\" data-src=\"" + _0x4fe0a1 + `"/>
</div>
</div>
<div class="info-comment">
` + _0x1002b5 + `
<div class="details">
<span class="post-date">
<time datetime="` + _0x3c86e3 + "\" title=\"" + _0x3c86e3 + "\">" + _0x1abd21 + `</time>
</span>
</div>
<p>` + _0x2af7db + "</p>\n<a class=\"LeaveComment codi-btn waves-effect\" href=\"" + _0x52b9eb + "\">" + Msg.leaveComment + `</a>
</div>
</li>
`;
        }
        _0x54d7a1.innerHTML = _0x580543;
        const _0x4eeecf = _0x54d7a1.querySelectorAll("p a");
        if (_0x4eeecf.length) {
          _0x4eeecf.forEach(_0x27303d => {
            if (!_0x27303d.classList.contains("iscodilink")) {
              _0x27303d.classList.add("iscodilink");
            }
          });
        }
      }, function (_0x624bc2) {
        _0x54d7a1.innerHTML = _0x4a2413[0];
      });
    });
  }
  function _0x10b394() {
    const _0x52f5fb = {
      FQwuS: ".menubtn",
      RcOgU: "open",
      QXRVL: ".acc-head",
      RzOUB: "none",
      cBPQD: "flex"
    };
    _0x52f5fb.nxBBA = "no-rotate";
    if (document.querySelector(".acc-head")) {
      document.querySelectorAll(".acc-head").forEach(function (_0x596714) {
        _0x596714.addEventListener("click", function () {
          this.siblings(".acc-head").forEach(function (_0x15496e) {
            // TOLOOK
            setTimeout(function () {
              _0x15496e.classList.remove("opened");
              _0x15496e.classList.remove("open");
              _0x15496e.classList.add("no-rotate");
            }, 200);
            _0x15496e.nextElementSibling.slideUp(200);
          });
          if (window.getComputedStyle(this.nextElementSibling).display === "none") {
            this.nextElementSibling.slideDown(200, "flex");
            this.classList.remove("opened");
            this.classList.remove(_0x52f5fb.nxBBA);
            this.classList.add("open");
          } else {
            this.nextElementSibling.slideUp(200);
            this.classList.remove("open");
            this.classList.add(_0x52f5fb.nxBBA);
          }
        });
      });
    }
  }
  function _0x3dfd7b(_0x2103cb) {
    getScript("https://cdn.jsdelivr.net/gh/ahmedsufian12/template-codes@main/assets/splidejs.js", () => {
      const {
        slider: _0x4e2e73,
        widgetId: _0x4bd83d,
        options = [],
        breakpointsEnabled = true,
        autoplay = false,
        rewind = false,
        pauseOnHover = true,
        resetProgress = false,
        conditionalProps = [],
        ..._0x9b01e9
      } = _0x2103cb || {};
      const _0x506dcb = document.querySelector(_0x4bd83d);
      if (!_0x506dcb) {
        return;
      }
      const _0x57fabb = typeof _0x4e2e73 === "string" ? _0x4e2e73.split(",") : [_0x4e2e73];
      const _0x2caac7 = [];
      for (let _0x540132 = 0; _0x540132 < _0x57fabb.length; _0x540132++) {
        const _0x20ba4e = _0x57fabb[_0x540132];
        const _0x1392a4 = document.querySelectorAll(_0x20ba4e.trim());
        for (const _0x28babc of _0x1392a4) {
          _0x2caac7.push(_0x28babc);
        }
      }
      if (!_0x2caac7.length) {
        return;
      }
      const _0x42b1e7 = (_0x37056a, _0x362ca6 = null) => {
        const _0x56c14d = _0x362ca6 !== null ? _0x362ca6 : _0x37056a;
        const _0x44cc61 = [[1600, 1], [1400, 0.9], [1200, 0.8], [992, 0.7], [768, 0.6], [576, 0.4], [480, 0.3]];
        const _0x46e580 = {};
        for (const [_0x4c749f, _0x501ef5] of _0x44cc61) {
          _0x46e580[_0x4c749f] = {
            perPage: _0x4c749f === 480 ? 1 : Math.min(_0x56c14d, Math.max(1, Math.round(_0x56c14d * _0x501ef5)))
          };
        }
        return _0x46e580;
      };
      const _0x21d447 = () => {
        const _0xc3907f = {
          perMove: 1,
          direction: BlogDirection
        };
        const _0x45c871 = {
          speed: 500,
          rewindSpeed: 500,
          pauseOnHover: pauseOnHover,
          resetProgress: resetProgress
        };
        Object.assign(_0xc3907f, _0x45c871);
        if (autoplay) {
          _0xc3907f.autoplay = true;
        }
        _0xc3907f.reducedMotion = false;
        return _0xc3907f;
      };
      const _0x48cc1d = [];
      let _0x1fc2b6 = null;
      let _0x1a1086 = [];
      if (Array.isArray(options) && options.length > 0) {
        if (typeof options[0] === "function") {
          _0x1fc2b6 = options[0];
        }
        _0x1a1086 = options.slice(1);
      }
      const _0x547e80 = {};
      for (let _0xe58d3f = 0; _0xe58d3f < _0x2caac7.length; _0xe58d3f++) {
        const _0x45bcc3 = _0x2caac7[_0xe58d3f];
        if (_0x45bcc3.hasAttribute("data-mounted")) {
          continue;
        }
        const _0x20a5f5 = _0x45bcc3.parentElement.clientWidth;
        const _0x312bb4 = Math.max(1, Math.floor(_0x20a5f5 / 280));
        const _0x402a58 = _0x21d447();
        _0x402a58.rewind = rewind;
        const _0x226ed3 = _0x9b01e9.perPage !== undefined ? typeof _0x9b01e9.perPage === "function" ? _0x9b01e9.perPage(_0x45bcc3) : _0x9b01e9.perPage : null;
        _0x402a58.perPage = _0x226ed3 !== null ? _0x226ed3 : _0x312bb4;
        const _0x2dc3f6 = breakpointsEnabled && _0x1a1086.length ? (() => {
          const _0x511cbd = {};
          for (let _0x35fbc1 = 0; _0x35fbc1 < _0x1a1086.length; _0x35fbc1++) {
            const _0x3a9527 = _0x1a1086[_0x35fbc1];
            if (Array.isArray(_0x3a9527) && _0x3a9527.length === 2) {
              if (_0x226ed3 !== null) {
                _0x511cbd[_0x3a9527[0]] = {
                  perPage: Math.min(_0x226ed3, _0x3a9527[1])
                };
              } else {
                _0x511cbd[_0x3a9527[0]] = {
                  perPage: _0x3a9527[1]
                };
              }
            }
          }
          return _0x511cbd;
        })() : _0x42b1e7(_0x312bb4, _0x226ed3);
        _0x402a58.breakpoints = _0x2dc3f6;
        if (Array.isArray(conditionalProps)) {
          for (let _0x471bdf = 0; _0x471bdf < conditionalProps.length; _0x471bdf++) {
            const _0x49f17c = conditionalProps[_0x471bdf];
            if (_0x49f17c.condition && typeof _0x49f17c.condition === "function" && _0x49f17c.condition(_0x45bcc3)) {
              Object.assign(_0x402a58, typeof _0x49f17c.props === "function" ? _0x49f17c.props(_0x45bcc3) : _0x49f17c.props);
            }
          }
        }
        for (const _0x3d5bf0 in _0x9b01e9) {
          if (_0x3d5bf0 === "perPage") {
            continue;
          }
          const _0x546ad6 = _0x9b01e9[_0x3d5bf0];
          _0x402a58[_0x3d5bf0] = typeof _0x546ad6 === "function" ? _0x546ad6(_0x45bcc3) : _0x546ad6;
        }
        const _0x247890 = new Splide(_0x45bcc3, _0x402a58);
        _0x48cc1d.push(_0x247890);
        let _0x1963fc = "default";
        if (_0x45bcc3.classList.contains("splideshow-nav")) {
          _0x1963fc = "nav";
        } else if (_0x45bcc3.classList.contains("splideshow-main") || _0x45bcc3.matches(_0x57fabb[0]?.trim())) {
          _0x1963fc = "main";
        } else {
          const _0x101ba4 = Array.from(_0x45bcc3.classList);
          if (_0x101ba4.length > 0) {
            _0x1963fc = _0x101ba4[0];
          }
        }
        if (!_0x547e80[_0x1963fc]) {
          _0x547e80[_0x1963fc] = [];
        }
        const _0x430b07 = {
          instance: _0x247890,
          element: _0x45bcc3
        };
        _0x547e80[_0x1963fc].push(_0x430b07);
        _0x247890.on("mounted", () => {
          const _0x1256d6 = _0x45bcc3.previousElementSibling;
          if (!_0x45bcc3.classList.contains("m-slider") && _0x1256d6?.classList.contains("posts-loading")) {
            _0x1256d6.remove();
          }
          _0x45bcc3.fadeIn?.(300, "block");
          _0x45bcc3.setAttribute("data-mounted", "true");
        });
        _0x247890.mount();
      }
      if (typeof _0x1fc2b6 === "function") {
        const _0x18f931 = Object.keys(_0x547e80);
        if (_0x547e80.main && _0x547e80.nav) {
          const _0x562f02 = _0x547e80.main;
          const _0x348f44 = _0x547e80.nav;
          for (let _0x7eec7 = 0; _0x7eec7 < Math.min(_0x562f02.length, _0x348f44.length); _0x7eec7++) {
            _0x1fc2b6(_0x562f02[_0x7eec7].instance, _0x348f44[_0x7eec7].instance, [_0x562f02[_0x7eec7].element, _0x348f44[_0x7eec7].element]);
          }
        } else if (_0x18f931.length === 1) {
          const _0x2f517b = _0x547e80[_0x18f931[0]];
          for (let _0x107e81 = 0; _0x107e81 < _0x2f517b.length; _0x107e81++) {
            const _0x84985c = _0x2f517b[_0x107e81];
            _0x1fc2b6(_0x84985c.instance, null, [_0x84985c.element]);
          }
        } else if (_0x18f931.length > 1) {
          const _0x10032e = [];
          const _0x486db9 = [];
          for (let _0x307ccd = 0; _0x307ccd < _0x18f931.length; _0x307ccd++) {
            const _0x4692ba = _0x18f931[_0x307ccd];
            for (const _0x13c78d of _0x547e80[_0x4692ba]) {
              _0x10032e.push(_0x13c78d.instance);
              _0x486db9.push(_0x13c78d.element);
            }
          }
          _0x1fc2b6(..._0x10032e, _0x486db9);
        }
      }
    });
  }
  function _0x3e87c2(_0x2b9181) {
    const _0x2dccd4 = _0x2b9181?.offsetTop;
    const _0xce7273 = (_0x52f769, _0x149728) => {
      let _0x6657c9;
      let _0x50a28f;
      let _0x91b088;
      if (_0x52f769.startsWith("rgb")) {
        [_0x6657c9, _0x50a28f, _0x91b088] = _0x52f769.match(/\d+/g).map(Number);
      } else if (_0x52f769.startsWith("#")) {
        const _0x46a8d4 = _0x52f769.length === 4 ? [..._0x52f769.slice(1)].map(_0x8612fc => _0x8612fc + _0x8612fc).join("") : _0x52f769.slice(1);
        [_0x6657c9, _0x50a28f, _0x91b088] = [0, 2, 4].map(_0x2bf800 => parseInt(_0x46a8d4.slice(_0x2bf800, _0x2bf800 + 2), 16));
      } else {
        return _0x52f769;
      }
      return "rgba(" + _0x6657c9 + "," + _0x50a28f + "," + _0x91b088 + "," + _0x149728 + ")";
    };
    window.addEventListener("scroll", () => {
      const _0x53f1d8 = window.scrollY;
      const _0x554cb6 = document.querySelector(".head-down");
      if (_0x53f1d8 > _0x2dccd4) {
        _0x2b9181.classList.add("fixed");
        _0x2b9181.style.backgroundColor = _0xce7273(getComputedStyle(_0x2b9181).backgroundColor, 0.95);
        if (!HeaderFixed && NavbarFixed && MenuFixed || HeaderFixed && NavbarFixed && MenuFixed || HeaderFixed || NavbarFixed) {
          _0x554cb6.classList.add("fixed");
        }
      } else {
        _0x2b9181.classList.remove("fixed");
        _0x2b9181.style.backgroundColor = "";
        if (!HeaderFixed && NavbarFixed && MenuFixed || HeaderFixed && NavbarFixed && MenuFixed || HeaderFixed || NavbarFixed) {
          _0x554cb6.classList.remove("fixed");
        }
      }
    });
  }
  function _0x57ca1c() {
    if (document.querySelector("#menu-bar ul li > a")) {
      const _0x23ab3c = document.querySelectorAll("#menu-bar ul li:not(.homeicon) > a");
      let _0x3478f7 = 0;
      for (let _0x2a0491 = _0x23ab3c.length; _0x3478f7 < _0x2a0491; _0x3478f7++) {
        const _0xe063eb = _0x23ab3c[_0x3478f7].getAttribute("title");
        _0x23ab3c[_0x3478f7].setAttribute("title", _0xe063eb.replace(/(<[^>]*>|_)/g, "").replace(/#/g, ""));
      }
    }
    if (document.querySelector("#menu-bar .subMenu a")) {
      const _0x172593 = document.querySelectorAll("#menu-bar .subMenu a");
      let _0x3b3aad = 0;
      for (let _0x21f21d = _0x172593.length; _0x3b3aad < _0x21f21d; _0x3b3aad++) {
        _0x172593[_0x3b3aad].innerHTML = _0x172593[_0x3b3aad].innerHTML.replace(/_/g, "").replace(/#/g, "");
      }
    }
    if (document.querySelector(".nav-drawer #menu-bar .sub-menu > a")) {
      const _0x31456d = document.querySelectorAll(".nav-drawer #menu-bar .sub-menu > a");
      let _0x46af48 = 0;
      for (let _0x19cf0f = _0x31456d.length; _0x46af48 < _0x19cf0f; _0x46af48++) {
        _0x31456d[_0x46af48].addEventListener("click", function (_0x1ffdce) {
          _0x1ffdce.preventDefault();
          const _0x77b40d = this.nextElementSibling;
          if (window.getComputedStyle(_0x77b40d).display === "none") {
            _0x77b40d.slideDown(200, "block");
            this.classList.add("expanded");
          } else {
            _0x77b40d.slideUp(200);
            this.classList.remove("expanded");
          }
        });
      }
    }
    function _0x3550dd() {
      const _0x1068e5 = document.querySelectorAll(".nav-drawer .MegaMenu a");
      let _0x2a22b0 = 0;
      for (let _0x4cbecc = _0x1068e5.length; _0x2a22b0 < _0x4cbecc; _0x2a22b0++) {
        const _0x26465e = _0x1068e5[_0x2a22b0];
        if (_0x26465e.dataset.info) {
          const _0x12eefa = JSON.parse(_0x26465e.dataset.info);
          const _0x56dc0e = _0x12eefa.mglabel;
          _0x26465e.setAttribute("href", SearchUrl + "/label/" + encodeURIComponent(_0x56dc0e) + "?max-results=" + getMaxResults);
          _0x26465e.removeAttribute("data-info");
        }
      }
    }
    document.addEventListener("click", function (_0x5035e2) {
      const _0x3591a9 = _0x5035e2.target.closest(".openNavMobile");
      if (!_0x3591a9) {
        return;
      }
      _0x3550dd();
    });
  }
  function _0x27c1de(_0x4eea69, _0x2fc869, _0x692184, _0x38b4c2) {
    const _0x1b4c73 = [];
    const _0x4da2d1 = [];
    fetchData(BlogUrl + "feeds/pages/default?alt=json", function () {}, function (_0x7fe74f) {
      if (_0x7fe74f.feed && _0x7fe74f.feed.entry) {
        _0x7fe74f.feed.entry.forEach(function (_0xc4131b) {
          const _0x3b0b75 = {
            wOGxt: "alternate"
          };
          _0x3b0b75.uNgKy = "</div>";
          if (!_0xc4131b.app$control) {
            const _0x847cc2 = _0xc4131b.link.filter(function (_0x535f62) {
              return _0x535f62.rel == "alternate";
            })[0].href;
            if (_0xc4131b.content.$t.includes(_0x4eea69)) {
              if (_0x2fc869 == "link") {
                _0x1b4c73.push(_0x847cc2);
              }
              if (_0x2fc869 == "content") {
                _0x1b4c73.push(_0xc4131b.content.$t.replace(_0x4eea69, "<div class=\"redContent\">" + _0x692184 + "</div>"));
                _0x4da2d1.push(_0xc4131b.title.$t.replace(/"/g, ""));
              }
            }
          }
        });
        _0x38b4c2(null, _0x1b4c73.join(", "), _0x4da2d1.join(", "));
      }
    }, function () {});
  }
  function _0x5136a1(_0x53bd4a) {
    const _0x5d4daf = {};
    const _0x5bcae5 = _0x53bd4a.link.filter(function (_0x4e5193) {
      return _0x4e5193.rel == "alternate";
    })[0].href;
    _0x5d4daf.Link = _0x5bcae5.startsWith("http://") ? _0x5bcae5.replace("http://", "https://") : _0x5bcae5;
    _0x5d4daf.Category = _0x53bd4a.category?.[0]?.term || "";
    _0x5d4daf.Categorys = _0x53bd4a.category?.map(_0xbd1a6f => _0xbd1a6f.term) || [];
    _0x5d4daf.CategoryName = _0x5d4daf.Categorys.length > 0 ? "<span class=\"Category Categories cateback-" + Math.floor(Math.random() * 42 + 1) + "\">" + _0x5d4daf.Category + "</span>" : "";
    _0x5d4daf.CategoryLink = _0x5d4daf.Categorys.length > 0 ? "<a class=\"category-link Categories cateback-" + Math.floor(Math.random() * 42 + 1) + "\" href=\"/search/label/" + encodeURIComponent(_0x5d4daf.Category) + "?max-results=" + getMaxResults + "\">" + _0x5d4daf.Category + "</a>" : "";
    if (_0x5d4daf.Link !== "") {
      _0x5d4daf.Title = _0x53bd4a.title.$t;
      _0x5d4daf.FullTitle = _0x53bd4a.title.$t;
      if (MaxTitle && _0x5d4daf.FullTitle.split(" ").length > MaxTitleNum) {
        _0x5d4daf.Title = _0x5d4daf.FullTitle.split(" ").slice(0, MaxTitleNum).join(" ") + "...";
      }
      _0x5d4daf.Snippet = (_0x53bd4a.summary?.$t || _0x53bd4a.content?.$t || "").replace(/<\S[^>]*>/g, "");
      _0x5d4daf.SnippetShorten = _0x5d4daf.Snippet.slice(0, snippetLength) + "...";
      _0x5d4daf.FullDate = _0x53bd4a.published.$t;
      _0x5d4daf.UpDate = _0x53bd4a.updated.$t;
      _0x5d4daf.Date = timeAgo ? langDate(_0x5d4daf.FullDate) : _0x5d4daf.FullDate.slice(8, 10) + " " + langDate(_0x5d4daf.FullDate) + " " + _0x5d4daf.FullDate.slice(0, 4);
      _0x5d4daf.Format = "" + BlogUrl + _0x5d4daf.FullDate.slice(0, 10).replace(/-/g, "_") + "_archive.html";
      _0x5d4daf.getDateElem = showTimestamp ? "<span class=\"post-date\">" + TimeIcon + "<time datetime=\"" + _0x5d4daf.FullDate + "\" title=\"" + _0x5d4daf.FullDate + "\">" + _0x5d4daf.Date + "</time></span>" : "";
      _0x5d4daf.LinkDate = showTimestamp ? "<span><a class=\"post-date\" href=\"" + _0x5d4daf.Format + "\" datetime=\"" + _0x5d4daf.FullDate + "\" title=\"" + _0x5d4daf.FullDate + "\" rel=\"nofollow\">" + TimeIcon + "<time datetime=\"" + _0x5d4daf.FullDate + "\" title=\"" + _0x5d4daf.FullDate + "\">" + _0x5d4daf.Date + "</time></a></span>" : "";
      _0x5d4daf.NumCom = _0x53bd4a.thr$total?.$t || "0";
      _0x5d4daf.NumComElem = _0x53bd4a.thr$total && showCommentLink ? "<span class=\"icComments\">" + CommentsIcon + _0x5d4daf.NumCom + "</span>" : "";
      _0x5d4daf.NumComUrl = _0x53bd4a.thr$total && sho...(truncated 133952 characters)...
    }
    Element.prototype.showWithTransformNone = function (_0x3402f0, _0x2a1607, _0x4da885, _0x56f30a, _0x597703) {
      const _0x284244 = this;
      const _0x5e06e5 = {};
      switch (_0x3402f0) {
        case "show":
          _0x5e06e5.transition = (_0x2a1607 || 300) + "ms linear";
          _0x5e06e5.display = _0x56f30a;
          Object.keys(_0x5e06e5).forEach(_0x1c662f => {
            const _0x1ba26b = {
              eVfAM: "modal-adblock"
            };
            _0x1ba26b.hLjSE = "scale(0)";
            _0x1ba26b.oiQgR = "none";
            _0x1ba26b.gkyBz = "outer_ov";
            _0x284244.style[_0x1c662f] = _0x5e06e5[_0x1c662f];
          });
          // TOLOOK
          setTimeout(function () {
            _0x284244.style.transform = _0x4da885;
            if (_0x597703) {
              _0x597703(_0x284244);
            }
          }, _0x2a1607);
          break;
        case "hide":
          _0x5e06e5.transition = (_0x2a1607 || 300) + "ms linear";
          _0x5e06e5.transform = _0x4da885;
          Object.keys(_0x5e06e5).forEach(_0x4d2055 => {
            _0x284244.style[_0x4d2055] = _0x5e06e5[_0x4d2055];
          });
          // TOLOOK
          setTimeout(function () {
            _0x284244.style.display = _0x56f30a;
            if (_0x597703) {
              _0x597703(_0x284244);
            }
          }, _0x2a1607);
          break;
      }
    };
    let _0x3c56a9 = false;
    let _0x3fb6af = false;
    document.addEventListener("pointerdown", _0x36e389 => {
      _0x3c56a9 = false;
      _0x3fb6af = !_0x36e389.target.closest(".modal") && !_0x36e389.target.closest(".modal-btn");
    });
    document.addEventListener("pointermove", _0x1d333f => {
      _0x3c56a9 = true;
    });
    document.addEventListener("click", _0x12af67 => {
      const _0x4dfddc = _0x12af67.target;
      if (_0x12af67.button === 0) {
        if (_0x4dfddc.closest(".modal-btn")) {
          const _0x8c49d = _0x4dfddc.closest(".modal-btn");
          const _0x10a4d1 = _0x8c49d.getAttribute("data-toggle");
          const _0x28d518 = document.querySelector("#" + _0x10a4d1);
          const _0x1554ad = _0x28d518.closest(".modal_outer");
          _0x12af67.stopPropagation();
          if (document.querySelector(".modal")) {
            document.querySelectorAll(".modal").forEach(_0x104ee4 => {
              if (_0x28d518 !== _0x104ee4) {
                _0x104ee4.showWithTransformNone("hide", 300, "scale(0)", "none");
              } else {
                _0x104ee4.showWithTransformNone("show", 0, "none", "block");
              }
            });
          }
          _0x1554ad.fadeIn(0, "flex", _0x249fb7 => _0x249fb7.classList.add("outer_ov"));
        }
        if (_0x4dfddc.closest(".modal-close") && document.querySelector(".modal")) {
          document.querySelectorAll(".modal").forEach(_0x3695f5 => {
            _0x3695f5.showWithTransformNone("hide", 300, "scale(0)", "none");
            if (_0x3695f5.parentElement.classList.contains("outer_ov")) {
              _0x3695f5.closest(".modal_outer").fadeOut(300, _0x312237 => _0x312237.classList.remove("outer_ov"));
            }
          });
        }
        if (_0x3fb6af && !_0x4dfddc.closest(".modal") && !_0x4dfddc.closest(".modal-btn") && document.querySelector(".modal")) {
          document.querySelectorAll(".modal").forEach(_0x5f29e4 => {
            if (window.getComputedStyle(_0x5f29e4).display.indexOf("block") != -1) {
              if (_0x5f29e4.id !== "modal-adblock") {
                _0x5f29e4.showWithTransformNone("hide", 300, "scale(0)", "none");
                if (_0x5f29e4.parentElement.classList.contains("outer_ov")) {
                  _0x5f29e4.closest(".modal_outer").fadeOut(300, _0x453ea8 => _0x453ea8.classList.remove("outer_ov"));
                }
              }
            }
          });
        }
      }
    });
    function _0x1df6be() {
      (function () {
        const _0x583749 = document.head;
        const _0x4f0168 = document.createElement("div");
        const _0x2eac67 = document.createElement("div");
        const _0xeb0094 = document.createElement("ins");
        _0x4f0168.id = "div-gpt-ad-3061307416813-0";
        _0x4f0168.style = "pointer-events: none; height: 1px; width: 0; opacity: 0; visibility: hidden; position: fixed; bottom: 0;";
        _0x2eac67.className = "textads banner-ads banner_ads ad-unit ad-zone ad-space adsbox ads";
        _0x2eac67.style = "pointer-events: none; height: 1px; width: 0; opacity: 0; visibility: hidden; position: fixed; bottom: 0;";
        _0xeb0094.className = "adsbygoogle";
        _0xeb0094.style = "display: none;";
        const _0x5d1f30 = {
          allowed: null,
          elements: [_0x4f0168, _0x2eac67, _0xeb0094]
        };
        this.checkAdsStatus = function (_0x163165) {
          const _0x3eb9ff = document.body;
          if (typeof _0x163165 == "function") {
            _0x3eb9ff.appendChild(_0x4f0168);
            _0x3eb9ff.appendChild(_0x2eac67);
            _0x3eb9ff.appendChild(_0xeb0094);
            // TOLOOK
            setTimeout(function () {
              if (_0x4f0168.offsetHeight === 0 || _0x2eac67.offsetHeight === 0 || _0xeb0094.firstElementChild) {
                _0x5d1f30.allowed = false;
                _0x163165(_0x5d1f30);
              } else {
                const _0x11a5fa = document.createElement("script");
                _0x11a5fa.async = true;
                _0x11a5fa.crossOrigin = "anonymous";
                _0x11a5fa.onload = function () {
                  _0x5d1f30.allowed = true;
                  _0x163165(_0x5d1f30);
                };
                _0x11a5fa.onerror = function () {
                  _0x5d1f30.allowed = false;
                  _0x163165(_0x5d1f30);
                };
                _0x583749.appendChild(_0x11a5fa);
              }
              _0x4f0168.remove();
              _0x2eac67.remove();
              _0xeb0094.remove();
            }, 40);
          }
        };
      }).call(this);
      function _0x529353() {
        const _0x158fee = {
          yywiG: "opened"
        };
        _0x158fee.sHiTc = "open";
        window.checkAdsStatus(function (_0x441015) {
          if (!_0x441015.allowed) {
            document.body.insertAdjacentHTML("beforeend", "<button class='modal-btn hide' data-toggle='modal-adblock'></button><div class='modal_outer'><div class='modal' id='modal-adblock'><svg style='stroke:none;fill:currentColor!important' viewBox='0 0 24 24'><path d='M12.2 9L10.2 7H13C14.1 7 15 7.9 15 9V11.8L13 9.8V9H12.2M23 9V7H19C17.9 7 17 7.9 17 9V11C17 12.1 17.9 13 19 13H21V15H18.2L20.2 17H21C22.1 17 23 16.1 23 15V13C23 11.9 22.1 11 21 11H19V9H23M22.1 21.5L20.8 22.8L14.4 16.4C14.1 16.7 13.6 17 13 17H9V10.9L7 8.9V17H5V13H3V17H1V9C1 7.9 1.9 7 3 7H5.1L1.1 3L2.4 1.7L22.1 21.5M5 9H3V11H5V9M13 14.9L11 12.9V15H13V14.9Z'/></svg><h2>من فضلك عطل مانع الإعلانات لديÙƒ</h2><div class='popCo'><p>لقد تم اكتشاف استخدامك لإضافة مانع الإعلانات في متصفحك، إيراداتنا من الإعلانات تساهم في تشغيل هذا الموقع، نرجو منك تعطيل مانع الإعلانات لموقعنا.</p></div></div></div>");
            document.querySelector("[data-toggle=\"modal-adblock\"]").click();
          }
        });
        document.removeEventListener("DOMContentLoaded", _0x529353);
      }
      ;
      if (document.readyState === "complete" || document.readyState !== "loading") {
        _0x529353();
      } else {
        document.addEventListener("DOMContentLoaded", _0x529353);
      }
    }
    function _0x377f11(_0x4cd7a6, _0x5cb1d5) {
      let _0x4d3ca6;
      return function () {
        clearTimeout(_0x4d3ca6);
        _0x4d3ca6 = // TOLOOK
        setTimeout(() => {
          _0x4cd7a6.apply(this, arguments);
        }, _0x5cb1d5);
      };
    }
    function _0xa744be(_0x9c9ffc, _0x359220) {
      try {
        if (!_0x9c9ffc || !_0x9c9ffc.offsetWidth) {
          return _0x9c9ffc;
        }
        _0x359220 = _0x359220 - 10;
        if (_0x9c9ffc.offsetWidth < _0x359220) {
          if (_0x9c9ffc.parentElement) {
            return _0xa744be(_0x9c9ffc.parentElement, _0x359220);
          } else {
            return _0x9c9ffc;
          }
        } else {
          const _0x1b52c1 = document.createElement("div");
          _0x1b52c1.style.width = "100%";
          _0x1b52c1.style.height = "1px";
          _0x1b52c1.style.visibility = "hidden";
          if (_0x9c9ffc.nextSibling) {
            _0x9c9ffc.parentNode.insertBefore(_0x1b52c1, _0x9c9ffc.nextSibling);
          } else {
            _0x9c9ffc.parentNode.appendChild(_0x1b52c1);
          }
          const _0x32cc85 = _0x1b52c1.offsetWidth;
          _0x1b52c1.remove();
          if (_0x32cc85 < _0x359220) {
            if (_0x9c9ffc.parentElement) {
              return _0xa744be(_0x9c9ffc.parentElement, _0x359220);
            } else {
              return _0x9c9ffc;
            }
          } else {
            return _0x9c9ffc;
          }
        }
      } catch (_0x125746) {
        console.error("Error in findSuitableElement:", _0x125746);
        return _0x9c9ffc;
      }
    }
    function _0x5631f1() {
      try {
        const _0x51ec4e = document.querySelector(".post-body");
        if (!_0x51ec4e) {
          return null;
        }
        const _0x2abab6 = _0x51ec4e.offsetWidth;
        const _0x4a9938 = ["pre", "pre *", "ins", "ins *", "iframe", "iframe *", "blockquote", "blockquote *", "ul", "ul *", "ol", "ol *", ".separator", ".separator *", "br", "table", "table *", ".ContactForm", ".ContactForm *", ".hiddenContent", ".hiddenContent *", "h1", "h2", "h3", "h4", "h5", "h6", "h1 *", "h2 *", "h3 *", "h4 *", "h5 *", "h6 *", ".Middle-Ad", ".Middle-Ad *", ".inside-ad", ".inside-ad *", "script", "style", "noscript"].join(", ");
        const _0x1bbd56 = _0x51ec4e.querySelectorAll(_0x4a9938);
        _0x1bbd56.forEach(_0xe84dcf => {
          if (_0xe84dcf && _0xe84dcf.classList) {
            _0xe84dcf.classList.add("no-sl");
          }
        });
        const _0x2f4751 = _0x51ec4e.querySelectorAll("*:not(.no-sl)");
        if (_0x2f4751.length === 0) {
          return _0x51ec4e;
        }
        const _0x222a34 = Math.floor(_0x2f4751.length / 2);
        const _0x582369 = _0x2f4751[_0x222a34];
        return _0xa744be(_0x582369, _0x2abab6);
      } catch (_0x39028c) {
        console.error("Error in findMiddleElement:", _0x39028c);
        return document.querySelector(".post-body");
      }
    }
    function _0x3d2685() {
      try {
        const _0xde0eb1 = document.querySelectorAll("ins.adsbygoogle:empty:not([data-ad-loaded])");
        const _0x3634b6 = document.querySelectorAll("ins.adsbygoogle[data-ad-loaded='processing']:empty");
        let _0x25d884 = 0;
        _0xde0eb1.forEach((_0x112e57, _0x4848e4) => {
          try {
            _0x112e57.dataset.adLoaded = "retry";
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            _0x25d884++;
          } catch (_0x37ca1b) {
            console.error("Error retrying failed ad " + _0x4848e4 + ":", _0x37ca1b);
          }
        });
        _0x3634b6.forEach((_0x50f230, _0x2d7524) => {
          try {
            _0x50f230.dataset.adLoaded = "retry-processing";
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            _0x25d884++;
          } catch (_0x392d8c) {
            console.error("Error retrying processing ad " + _0x2d7524 + ":", _0x392d8c);
          }
        });
        return _0x25d884;
      } catch (_0x575f87) {
        console.error("Error in retryFailedAds:", _0x575f87);
        return 0;
      }
    }
    function _0x1a5db6() {
      let _0x1551ef = 0;
      const _0x4956e6 = // TOLOOK
      setInterval(() => {
        const _0x133c4b = {
          kjdVm: "rgb"
        };
        _0x133c4b.qXCvg = function (_0x265aab, _0x54ff58) {
          return _0x265aab === _0x54ff58;
        };
        try {
          _0x1551ef++;
          const _0x2c554c = document.querySelectorAll("ins.adsbygoogle:empty").length;
          if (_0x2c554c > 0 && _0x1551ef <= 6) {
            _0x3d2685();
          }
          if (_0x1551ef >= 6 || _0x2c554c === 0) {
            clearInterval(_0x4956e6);
          }
        } catch (_0x5ee0c0) {
          console.error("Error in periodic ad check:", _0x5ee0c0);
          clearInterval(_0x4956e6);
        }
      }, 2000);
    }
    async function _0x31a20f(_0x91b514, _0x1bbea2, _0x55e21a, _0x36d7f8) {
      try {
        if (_0x1bbea2 && typeof _0x1bbea2 === "function") {
          _0x1bbea2();
        }
        const _0x3d87a8 = await fetch(_0x91b514);
        if (!_0x3d87a8.ok) {
          throw new _0x4a2413("HTTP error! status: " + _0x3d87a8.status);
        }
        const _0x5651a8 = await _0x3d87a8.json();
        if (_0x55e21a && typeof _0x55e21a === "function") {
          _0x55e21a(_0x5651a8);
        }
      } catch (_0x3797ba) {
        if (_0x36d7f8 && typeof _0x36d7f8 === "function") {
          _0x36d7f8(_0x3797ba);
        }
      }
    }
})();
