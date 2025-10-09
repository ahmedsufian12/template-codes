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
const cpH = function (_0x5510d6, _0x41b59c) {
  let _0x43d97f;
  if (_0x5510d6) {
    _0x43d97f = `
<div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; margin: 0; padding: 20px; box-sizing: border-box;">
<div style="background: white; border-radius: 20px; padding: 3rem 2rem; max-width: 900px; width: 100%; text-align: center; box-shadow: 0 25px 50px rgba(0,0,0,0.15); border: 1px solid #e2e8f0;">
<div style="width: 100px; height: 100px; margin: 0 auto 2rem; background: linear-gradient(135deg, #f59e0b, #d97706); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 30px rgba(245, 158, 11, 0.3);">
<svg style="width: 50px; height: 50px; fill: white;" viewBox="0 0 24 24">
<path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,17A1.5,1.5 0 0,1 10.5,15.5A1.5,1.5 0 0,1 12,14A1.5,1.5 0 0,1 13.5,15.5A1.5,1.5 0 0,1 12,17M12,10.5A1.5,1.5 0 0,1 10.5,9A1.5,1.5 0 0,1 12,7.5A1.5,1.5 0 0,1 13.5,9A1.5,1.5 0 0,1 12,10.5Z"/>
</svg>
</div>

<h1 style="color: #1e293b; font-size: clamp(1.5rem, 4vw, 2rem); font-weight: 700; margin: 0 0 1.5rem; line-height: 1.2;">
حسابك في انتظار إتمام الدفع
</h1>

<p style="color: #64748b; font-size: clamp(1rem, 2vw, 1.125rem); line-height: 1.7; margin: 0 0 2rem; text-align: right; padding: 0 1rem;">
عزيزي المستخدم،<br/><br/>
نود إبلاغكم أن حسابكم حالياً في حالة انتظار إتمام عملية الدفع. لم يتم استكمال عملية الشراء بعد، وبالتالي لا يمكنكم الوصول إلى محتوى القالب في الوقت الحالي.
<br/><br/>
يرجى إتمام عملية الدفع للحصول على الوصول الكامل لجميع المميزات والخدمات المتاحة.
</p>

<div style="background: #fef3c7; border-radius: 12px; padding: 1.5rem; margin: 2rem 0; border-right: 4px solid #f59e0b;">
<p style="color: #92400e; font-size: 1rem; margin: 0; font-weight: 500; text-align: right;">
تحتاج إلى مساعدة؟ يمكنكم التواصل مع فريق الدعم الفني لدينا
</p>
</div>

<a href="https://www.facebook.com/iscodihub" target="_blank" style="display: inline-block; background: linear-gradient(135deg, #4267B2, #365899); color: white; text-decoration: none; padding: 1rem 2rem; border-radius: 12px; font-size: 1rem; font-weight: 600; transition: all 0.3s ease; box-shadow: 0 6px 20px rgba(66, 103, 178, 0.3); margin-bottom: 2rem;">
التواصل مع الدعم الفني
</a>

<div style="border-top: 1px solid #e2e8f0; padding-top: 1.5rem;">
<p style="color: #94a3b8; font-size: 0.875rem; margin: 0; line-height: 1.5;">
شكراً لثقتكم بنا<br/>
<strong style="color: #64748b;">فريق - كودي - للدعم الفني</strong>
</p>
</div>
</div>
</div>
`;
  } else if (_0x41b59c) {
    _0x43d97f = `
<div style="min-height: 100vh; display: flex; align-items: center; justify-content: center; margin: 0; padding: 20px; box-sizing: border-box;">
<div style="background: white; border-radius: 20px; padding: 3rem 2rem; max-width: 900px; width: 100%; text-align: center; box-shadow: 0 25px 50px rgba(0,0,0,0.15); border: 1px solid #e2e8f0;">
<div style="width: 100px; height: 100px; margin: 0 auto 2rem; background: linear-gradient(135deg, #ef4444, #dc2626); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 10px 30px rgba(239, 68, 68, 0.3);">
<svg style="width: 50px; height: 50px; fill: white;" viewBox="0 0 24 24">
<path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,7A1,1 0 0,0 11,8V16A1,1 0 0,0 12,17A1,1 0 0,0 13,16V8A1,1 0 0,0 12,7Z"/>
</svg>
</div>

<h1 style="color: #1e293b; font-size: clamp(1.5rem, 4vw, 2rem); font-weight: 700; margin: 0 0 1.5rem; line-height: 1.2;">
لم يتم حظر وصولك إلى القالب
</h1>

<p style="color: #64748b; font-size: clamp(1rem, 2vw, 1.125rem); line-height: 1.7; margin: 0 0 2rem; text-align: right; padding: 0 1rem;">
عزيزي المستخدم،<br/><br/>
نأسف لإبلاغكم أنه تم تقييد وصولكم إلى هذا القالب بسبب مخالفة شروط الاستخدام أو سياسات المنصة.
<br/>
هذا القرار تم اتخاذه بعد مراجعة دقيقة وفقاً للمعايير المحددة لاستخدام خدماتنا.
</p>

<div style="background: #fef2f2; border-radius: 12px; padding: 1.5rem; margin: 2rem 0; border-right: 4px solid #ef4444;">
<p style="color: #b91c1c; font-size: 1rem; margin: 0; font-weight: 500; text-align: right;">
للاستفسار حول سبب الحظر أو طلب مراجعة القرار، يرجى التواصل معنا
</p>
</div>

<a href="https://www.facebook.com/iscodihub" target="_blank" style="display: inline-block; background: linear-gradient(135deg, #4267B2, #365899); color: white; text-decoration: none; padding: 1rem 2rem; border-radius: 12px; font-size: 1rem; font-weight: 600; transition: all 0.3s ease; box-shadow: 0 6px 20px rgba(66, 103, 178, 0.3); margin-bottom: 2rem;">
طلب مراجعة أو استفسار
</a>

<div style="border-top: 1px solid #e2e8f0; padding-top: 1.5rem;">
<p style="color: #94a3b8; font-size: 0.875rem; margin: 0; line-height: 1.5;">
نقدر تفهمكم<br/>
<strong style="color: #64748b;">إدارة - كودي -</strong>
</p>
</div>
</div>
</div>
`;
  }
  return _0x43d97f;
};
(function () {
  let _0x3b86b0 = {};
  let _0x4a2413 = ["<div class=\"errorFetch\">هناك خطأ مØ§...</div>", "<div class=\"noFetch\">" + Msg.noResultsFound + "</div>"];
  let _0x38b4e0 = 0;
  let _0x538259 = typeof cpH === "undefined" ? "" : cpH(false, true);
  let _0x1f05a5 = function () {
    if (typeof _0x5ae0ca === "function") {
      _0x5ae0ca();
    } else {
      document.body.innerHTML = _0x538259;
    }
  };
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
  _0x1f05a5();
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
    _0x1f05a5();
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
      _0x5d4daf.NumComUrl = _0x53bd4a.thr$total && showCommentLink ? "<span class=\"icComments\"><a class=\"comments\" href=\"" + _0x5d4daf.Link + "#item-comments\">" + CommentsIcon + _0x5d4daf.NumCom + "</a></span>" : "";
      _0x5d4daf.Author = _0x53bd4a.author[0]?.name?.$t || "مجهول";
      _0x5d4daf.AuthTagNameElem = showAuthor ? "<span class=\"post-author\">" + UserIcon + _0x5d4daf.Author + "</span>" : "";
      _0x5d4daf.AuthNameURL = _0x53bd4a.author[0]?.uri?.$t || "#";
      if (showAuthor) {
        _0x5d4daf.AuthNameLink = _0x5d4daf.AuthNameURL !== "#" ? "<span class=\"post-author\"><a class=\"author-name\" rel=\"nofollow noreferrer\" target=\"_blank\" href=\"" + _0x5d4daf.AuthNameURL + "\">" + UserIcon + _0x5d4daf.Author + "</a></span>" : _0x5d4daf.AuthTagNameElem;
      } else {
        _0x5d4daf.AuthNameLink = "";
      }
      _0x5d4daf.Author_IMG = _0x53bd4a.author[0]?.gd$image?.src.includes("rounded.gif") || _0x53bd4a.author[0]?.gd$image?.src.includes("blogger_logo_round") || _0x53bd4a.author[0]?.gd$image?.src.includes("img1.blogblog.com") || _0x53bd4a.author[0]?.gd$image?.src.includes("blank.gif") ? AltAuthor : _0x53bd4a.author[0]?.gd$image?.src;
      _0x5d4daf.AuthTagImageElem = showAuthor ? "<a class=\"author-img\" aria-label=\"" + _0x5d4daf.Author + "\" rel=\"nofollow noreferrer\" target=\"_blank\" href=\"" + _0x5d4daf.AuthNameURL + "\"><span class=\"Lazy authImage\"><img class=\"lazyload\" data-sizes=\"auto\" alt=\"Author Photo\" data-src=\"" + _0x5d4daf.Author_IMG + "\"/></span><span class=\"authName\">" + _0x5d4daf.Author + "</span></a>" : "";
      const _0x5e8498 = _0x53bd4a.media$thumbnail?.url || (_0x53bd4a.content?.$t.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/) ? (_0x5d4daf.YoutubeId = _0x53bd4a.content.$t.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop(), _0x5d4daf.YoutubeId.length === 11 ? "//img.youtube.com/vi/" + _0x5d4daf.YoutubeId + "/0.jpg" : null) : _0x53bd4a.content?.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/) ? _0x53bd4a.content.$t.match(/src=(.+?[\.jpg|\.gif|\.png]")/)[1] : AltImage);
      _0x5d4daf.ImgUrl = _0x5e8498.startsWith("http://") ? _0x5e8498.replace("http://", "https://") : _0x5e8498;
      _0x5d4daf.PostId = _0x53bd4a.id.$t.replace(/.+\-/g, "");
    }
    return _0x5d4daf;
  }
  ;
  _0x1f05a5();
  let _0x55a3c3 = 0;
  function _0x4c5629(_0x1f6f61, _0x5af4c0) {
    _0x55a3c3++;
    const _0x37e522 = new Date().getTime();
    const _0xda636f = "ShareMenu_" + _0x1f6f61 + "_" + _0x37e522 + "_" + _0x55a3c3;
    return "<div class=\"ShareArea\"> \n<button aria-label=\"Main Share Icon\" data-alignment=\"" + endSide + "\" class=\"ShareIcon dropdown-button tooltipped codi-btn\" data-target=\"" + _0xda636f + "\" type=\"button\" data-tooltip=\"مشاركة التدوينة\">" + ShareIcon + "</button> \n<ul class=\"DropShareMenu dropdown-content social sub-drop\" id=\"" + _0xda636f + `"> 
<li> 
<button aria-label="Share the Post With Link" class="snackbar-btn ShareWithLink waves-effect" data-duration="4000" data-message="` + Msg.LinkCopied + "\" data-type=\"success\" type=\"button\" data-share-link=\"" + _0x5af4c0 + "\" onclick=\"navigator.clipboard.writeText(this.getAttribute('data-share-link'));\"> \n" + CopyLinkIcon + " \n<span>" + Msg.gtLink + `</span> 
</button> 
</li> 
<li><a class="mail waves-effect" rel="nofollow noreferrer" target="_blank" href="https://www.blogger.com/share-post.g?blogID=` + BlogId + "&postID=" + _0x1f6f61 + "&target=email\">" + MailShareIcon + "<span>" + Msg.shMail + "</span></a></li> \n<li><a class=\"blog waves-effect\" rel=\"nofollow noreferrer\" target=\"_blank\" href=\"https://www.blogger.com/share-post.g?blogID=" + BlogId + "&postID=" + _0x1f6f61 + "&target=blog\">" + RewriteIcon + "<span>" + Msg.wrBlog + "</span></a></li> \n<li><a class=\"waves-effect\" rel=\"nofollow noreferrer\" target=\"_blank\" href=\"https://www.blogger.com/share-post.g?blogID=" + BlogId + "&postID=" + _0x1f6f61 + "&target=facebook\"><i class=\"fa fa-facebook facebook\"></i><span>" + Msg.shFace + "</span></a></li> \n<li><a class=\"waves-effect\" rel=\"nofollow noreferrer\" target=\"_blank\" href=\"https://www.blogger.com/share-post.g?blogID=" + BlogId + "&postID=" + _0x1f6f61 + "&target=twitter\"><i class=\"fa fa-x-twitter x-twitter\"></i><span>" + Msg.shTwit + "</span></a></li> \n<li><a class=\"waves-effect\" rel=\"nofollow noreferrer\" target=\"_blank\" href=\"https://www.blogger.com/share-post.g?blogID=" + BlogId + "&postID=" + _0x1f6f61 + "&target=pinterest\"><i class=\"fa fa-pinterest pinterest\"></i><span>" + Msg.shPint + `</span></a></li> 
</ul> 
</div>`;
  }
  function _0x96aa55(_0x5e7e30, _0x50b467, _0x2c5f56, _0x2a11a8 = 0, _0x49bec9 = 24, _0x1f0a92, _0x37d202, _0x2fb7c1) {
    const _0x30e795 = _0x2c5f56.getAttribute("data-type").includes("mega");
    const _0x3108cd = _0x2c5f56.getAttribute("data-type") === "mega-2";
    const _0x2cb2ad = _0x2c5f56.getAttribute("data-type") === "mega-3";
    const _0x23f497 = _0x2c5f56.getAttribute("data-type").includes("tikcernews");
    const _0x150beb = _0x2c5f56.getAttribute("data-type") === "slider";
    const _0x38b1a8 = _0x2c5f56.getAttribute("data-type").includes("allcats");
    const _0xe92f90 = _0x2c5f56.getAttribute("data-type").includes("sided");
    const _0x2cf52c = _0x2c5f56.getAttribute("data-type").includes("timeline");
    const _0x25e7af = _0x2c5f56.getAttribute("data-type").includes("cover");
    const _0x4ca518 = _0x2c5f56.getAttribute("data-type").includes("cover-ttb");
    const _0x9e3ce7 = _0x2c5f56.getAttribute("data-type").includes("grid");
    const _0x49a53a = _0x2c5f56.getAttribute("data-type").includes("video");
    const _0x4769eb = _0x2c5f56.getAttribute("data-type").includes("small");
    const _0x234775 = _0x2c5f56.getAttribute("data-type").includes("carousel");
    const _0x4d50b8 = _0x2c5f56.getAttribute("data-type").includes("noimage");
    const _0x33af62 = _0x2c5f56.getAttribute("data-type").includes("splide-show");
    const _0x7677e7 = _0x2c5f56.getAttribute("data-type").includes("splideHtml");
    const _0xfdabed = _0x2c5f56.getAttribute("data-type").includes("seealso-item");
    const _0x516174 = _0x2c5f56.getAttribute("data-type").includes("RelatedPosts");
    const _0x7e26cd = _0x23f497 || _0xfdabed ? "ul" : "section";
    const _0x2b85a6 = _0x23f497 || _0xfdabed ? "li" : "article";
    const _0x23d367 = (_0x150beb || _0x7677e7) && _0x1f0a92 ? " splide__list" : "";
    const _0x4a318c = (_0x150beb || _0x7677e7) && _0x1f0a92 ? " splide__slide" : "";
    const _0x129493 = !_0x23f497 && !_0xfdabed ? "role=\"article\"" : "";
    const _0x3f67d7 = !_0x23f497 && !_0xfdabed ? "role=\"feed\"" : "";
    const _0x345554 = (_0x2c5f56.closest(".three-cols") || _0x2c5f56.closest(".two-cols")) && (_0x4ca518 || _0x25e7af) ? "sided" : _0x9e3ce7 || _0x49a53a ? "gridVid " + _0x2c5f56.getAttribute("data-type") : _0x7677e7 ? _0x2c5f56.getAttribute("data-type").replace("splideHtml", "splideArea") : _0x2c5f56.getAttribute("data-type");
    const _0xba3428 = _0xfdabed ? " byPost" : "";
    if (_0x33af62) {
      _0x2c5f56.closest(".widget-content").classList.add("splideCss");
    }
    if (_0x5e7e30 && typeof _0x5e7e30 === "function") {
      _0x5e7e30();
    }
    let _0x342a53 = "";
    let _0x32aba6 = "";
    _0x32aba6 += "<div class=\"SLIDENAV\">";
    _0x32aba6 += "<div class=\"splideshow-nav splide\">";
    _0x32aba6 += "<div class=\"splide__track\">";
    _0x32aba6 += "<ul class=\"splide__list\">";
    _0x342a53 += _0x7677e7 ? "<div class=\"splide splide-" + _0x2c5f56.getAttribute("data-type") + "\">" : "";
    _0x342a53 += _0x7677e7 ? "<div class=\"splide__track\">" : "";
    _0x342a53 += "<" + _0x7e26cd + " class=\"cates " + _0x345554 + _0x23d367 + _0xba3428 + "\" " + _0x3f67d7 + ">";
    if (_0x38b1a8) {
      const _0x3ab290 = _0x2c5f56.getAttribute("data-label") === "TheRecent" ? "أخر التدوينات" : _0x2c5f56.getAttribute("data-label") === "TheRandom" ? "الأكثر زياØ±Ø©" : _0x2c5f56.getAttribute("data-label");
      const _0x4b87f8 = _0x2c5f56.getAttribute("data-label") === "TheRecent" || _0x2c5f56.getAttribute("data-label") === "TheRandom" ? SearchUrl + ("?max-results=" + getMaxResults) : SearchUrl + ("/label/" + encodeURIComponent(_0x2c5f56.getAttribute("data-label")) + "?max-results=" + getMaxResults);
      _0x342a53 += "<h3 role=\"heading\" class=\"catstitle\">";
      _0x342a53 += "<a class=\"image Lazy\" href=\"" + _0x4b87f8 + "\" title=\"" + _0x3ab290 + "\">";
      _0x342a53 += "<img alt=\"" + _0x3ab290 + "\" class=\"lazyload\" data-sizes=\"auto\" data-src=\"" + _0x5136a1(_0x50b467.feed.entry[0]).ImgUrl + "\"/>";
      _0x342a53 += "<span class=\"catsname\">" + _0x3ab290 + "</span>";
      _0x342a53 += "</a>";
      _0x342a53 += "</h3>";
    }
    if (_0x2cf52c) {
      _0x342a53 += "<div class=\"timeline-line\"></div>";
    }
    for (let _0x28e905 = _0x2a11a8; _0x28e905 < _0x49bec9 && _0x28e905 < _0x50b467.feed.entry.length; _0x28e905++) {
      const _0x39a596 = _0x50b467.feed.entry[_0x28e905];
      let _0x3dafd5 = _0x5136a1(_0x39a596);
      function _0x4d6fca(_0x5a40fc, _0x293285, _0x4e1600) {
        let _0x311b1f = "";
        _0x311b1f += "<div class=\"details\">";
        _0x311b1f += _0x5a40fc ? _0x3dafd5.AuthNameLink : "";
        _0x311b1f += _0x3dafd5.LinkDate;
        _0x311b1f += _0x4e1600 ? _0x3dafd5.NumComUrl : "";
        return _0x311b1f + "</div>";
      }
      _0x32aba6 += "<li class=\"post post-" + _0x28e905 + _0x4a318c + "\" " + _0x129493 + " data-item=\"" + _0x3dafd5.PostId + "\" data-cate=\"" + _0x3dafd5.Category + "\">";
      _0x342a53 += "<" + _0x2b85a6 + " class=\"post post-" + _0x28e905 + _0x4a318c + "\" " + _0x129493 + " data-item=\"" + _0x3dafd5.PostId + "\" data-cate=\"" + _0x3dafd5.Category + "\">";
      if (_0x30e795) {
        _0x342a53 += "<div class=\"post-image\">";
        _0x342a53 += "<a title=\"" + _0x3dafd5.FullTitle + "\" class=\"image Lazy\" href=\"" + _0x3dafd5.Link + "\">";
        _0x342a53 += !_0x3108cd ? _0x3dafd5.CategoryName : "";
        _0x342a53 += _0x2cb2ad ? "<canvas id=\"bar\" width=\"50\" height=\"50\"></canvas>" : "";
        _0x342a53 += _0x2cb2ad ? "<i class=\"fa fa-video\"></i>" : "";
        _0x342a53 += "<img alt=\"" + _0x3dafd5.FullTitle + "\" class=\"lazyload\" data-sizes=\"auto\" data-src=\"" + _0x3dafd5.ImgUrl + "\"/>";
        _0x342a53 += "</a>";
        _0x342a53 += "<button aria-label=\"Read it Later\" class=\"snackbar-btn tooltipped postSave\" data-tooltip=\"اقرأها لاحقا\" type=\"button\" data-duration=\"4000\">";
        _0x342a53 += "<svg fill=\"none\" height=\"16\" stroke=\"var(--postsaveicon)\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" viewBox=\"0 0 24 24\" width=\"16\"><path d=\"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z\"></path></svg>";
        _0x342a53 += "</button>";
        _0x342a53 += "</div>";
        if (_0x3108cd) {
          _0x342a53 += "<div class=\"mginfo-wrap\">";
        }
        _0x342a53 += _0x4d6fca(false, true, true);
        _0x342a53 += "<h3 role=\"heading\" class=\"post-title\"><a title=\"" + _0x3dafd5.FullTitle + "\" href=\"" + _0x3dafd5.Link + "\">" + _0x3dafd5.Title + "</a></h3>";
        if (_0x3108cd) {
          _0x342a53 += "</div>";
        }
      }
      if (_0x23f497) {
        _0x342a53 += "<h3 role=\"heading\" class=\"post-title\"><a title=\"" + _0x3dafd5.FullTitle + "\" href=\"" + _0x3dafd5.Link + "\">" + _0x3dafd5.FullTitle + "</a></h3>";
      }
      if (_0x150beb || _0x9e3ce7 || _0x49a53a || _0x234775 || _0x4d50b8 || _0x516174) {
        const _0x60e2f6 = !(_0x234775 || _0x4d50b8);
        if (_0x60e2f6) {
          _0x342a53 += "<div class=\"post-image caption-img\">";
          _0x342a53 += "<a title=\"" + _0x3dafd5.FullTitle + "\" class=\"image Lazy\" href=\"" + _0x3dafd5.Link + "\">";
          _0x342a53 += _0x3dafd5.CategoryName;
          _0x342a53 += "<img alt=\"" + _0x3dafd5.FullTitle + "\" class=\"lazyload\" data-sizes=\"auto\" data-src=\"" + _0x3dafd5.ImgUrl + "\"/>";
          _0x342a53 += "</a>";
          _0x342a53 += "<button aria-label=\"Read it Later\" class=\"snackbar-btn tooltipped postSave\" data-tooltip=\"اقرأها لاحقا\" type=\"button\" data-duration=\"4000\">";
          _0x342a53 += "<svg fill=\"none\" height=\"16\" stroke=\"var(--postsaveicon)\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" viewBox=\"0 0 24 24\" width=\"16\"><path d=\"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z\"></path></svg>";
          _0x342a53 += "</button>";
          if (_0x49a53a) {
            _0x342a53 += "<div class=\"player-wrapper\">";
            _0x342a53 += "<div class=\"player-circles\">";
            _0x342a53 += "<div class=\"circle c-1\"></div>";
            _0x342a53 += "<div class=\"circle c-2\"></div>";
            _0x342a53 += "<div class=\"circle c-3\"></div>";
            _0x342a53 += "</div>";
            _0x342a53 += "<div class=\"player\">";
            _0x342a53 += "<div class=\"controler\"></div>";
            _0x342a53 += "</div>";
            _0x342a53 += "</div>";
          }
          _0x342a53 += "</div>";
          _0x342a53 += "<div class=\"caption\" onclick=\"this.querySelector('h3 a').click()\">";
          _0x342a53 += _0x150beb ? _0x4d6fca(true, true, true) : _0x4d6fca(false, true, false);
          _0x342a53 += "<h3 role=\"heading\" class=\"post-title caption-title\"><a title=\"" + _0x3dafd5.FullTitle + "\" href=\"" + _0x3dafd5.Link + "\">" + _0x3dafd5.Title + "</a></h3>";
          _0x342a53 += _0x37d202 ? "<p class=\"post-snippet\">" + _0x3dafd5.SnippetShorten + "</p>" : "";
          _0x342a53 += "</div>";
        } else if (_0x234775 || _0x4d50b8) {
          if (!_0x4d50b8) {
            _0x342a53 += "<div class=\"post-image\">";
            _0x342a53 += "<a title=\"" + _0x3dafd5.FullTitle + "\" class=\"image Lazy\" href=\"" + _0x3dafd5.Link + "\">";
            _0x342a53 += _0x234775 ? _0x3dafd5.CategoryName : "";
            _0x342a53 += "<img alt=\"" + _0x3dafd5.FullTitle + "\" class=\"lazyload\" data-sizes=\"auto\" data-src=\"" + _0x3dafd5.ImgUrl + "\"/>";
            _0x342a53 += "</a>";
            _0x342a53 += "<button aria-label=\"Read it Later\" class=\"snackbar-btn tooltipped postSave\" data-tooltip=\"اقرأها لاحقا\" type=\"button\" data-duration=\"4000\">";
            _0x342a53 += "<svg fill=\"none\" height=\"16\" stroke=\"var(--postsaveicon)\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" viewBox=\"0 0 24 24\" width=\"16\"><path d=\"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z\"></path></svg>";
            _0x342a53 += "</button>";
            _0x342a53 += "</div>";
          }
          if (_0x4d50b8) {
            _0x342a53 += "<div class=\"postCount\">" + (_0x28e905 >= 0 && _0x28e905 <= 8 ? "0" + (_0x28e905 + 1) : _0x28e905 + 1) + "</div>";
          }
          _0x342a53 += "<div class=\"caption-outside\">";
          _0x342a53 += !_0x234775 ? _0x3dafd5.CategoryLink : "";
          _0x342a53 += !_0x4d50b8 ? _0x4d6fca(true, true, true) : _0x4d6fca(false, true, false);
          _0x342a53 += "<h3 role=\"heading\" class=\"post-title\"" + (_0x4d50b8 ? " data-altsrc=\"" + _0x3dafd5.ImgUrl + "\"" : "") + ">";
          if (_0x4d50b8) {
            _0x342a53 += "<button aria-label=\"Read it Later\" class=\"snackbar-btn tooltipped postSave\" data-tooltip=\"اقرأها لاحقا\" type=\"button\" data-duration=\"4000\">";
            _0x342a53 += "<svg fill=\"none\" height=\"16\" stroke=\"var(--postsaveicon)\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" viewBox=\"0 0 24 24\" width=\"16\"><path d=\"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z\"></path></svg>";
            _0x342a53 += "</button>";
          }
          _0x342a53 += "<a title=\"" + _0x3dafd5.FullTitle + "\" href=\"" + _0x3dafd5.Link + "\">" + _0x3dafd5.Title + "</a>";
          _0x342a53 += "</h3>";
          _0x342a53 += "</div>";
        }
      }
      if (_0x38b1a8 || _0x2cf52c) {
        const _0x8ed6ae = _0x28e905 + 1;
        const _0x39438f = _0x38b1a8 ? "h4" : "h3";
        _0x342a53 += _0x2cf52c ? "<div class=\"timeline-number\">" + _0x8ed6ae + "</div>" : "";
        _0x342a53 += _0x4d6fca(false, true, false);
        _0x342a53 += "<" + _0x39438f + " role=\"heading\" class=\"post-title\" data-altsrc=\"" + _0x3dafd5.ImgUrl + "\">";
        _0x342a53 += "<button aria-label=\"Read it Later\" class=\"snackbar-btn tooltipped postSave\" data-tooltip=\"اقرأها لاحقا\" type=\"button\" data-duration=\"4000\">";
        _0x342a53 += "<svg fill=\"none\" height=\"16\" stroke=\"var(--postsaveicon)\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" viewBox=\"0 0 24 24\" width=\"16\"><path d=\"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z\"></path></svg>";
        _0x342a53 += "</button>";
        _0x342a53 += "<a title=\"" + _0x3dafd5.FullTitle + "\" href=\"" + _0x3dafd5.Link + "\">" + _0x3dafd5.Title + "</a>";
        _0x342a53 += "</" + _0x39438f + ">";
      }
      if (_0xe92f90 || _0x25e7af || _0x4ca518 || _0x4769eb) {
        const _0xa7c5d4 = _0x4769eb ? false : _0x28e905 === 0;
        _0x342a53 += "<div class=\"post-image\">";
        _0x342a53 += "<a title=\"" + _0x3dafd5.FullTitle + "\" class=\"image Lazy\" href=\"" + _0x3dafd5.Link + "\">";
        _0x342a53 += _0xa7c5d4 ? _0x3dafd5.CategoryName : "";
        _0x342a53 += "<img alt=\"" + _0x3dafd5.FullTitle + "\" class=\"lazyload\" data-sizes=\"auto\" data-src=\"" + _0x3dafd5.ImgUrl + "\"/>";
        _0x342a53 += "</a>";
        _0x342a53 += "<button aria-label=\"Read it Later\" class=\"snackbar-btn tooltipped postSave\" data-tooltip=\"اقرأها لاحقا\" type=\"button\" data-duration=\"4000\">";
        _0x342a53 += "<svg fill=\"none\" height=\"16\" stroke=\"var(--postsaveicon)\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" viewBox=\"0 0 24 24\" width=\"16\"><path d=\"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z\"></path></svg>";
        _0x342a53 += "</button>";
        _0x342a53 += "</div>";
        _0x342a53 += "<div class=\"caption-outside\">";
        _0x342a53 += _0xa7c5d4 ? _0x4d6fca(true, true, true) : _0x4d6fca(false, true, true);
        _0x342a53 += "<h3 role=\"heading\" class=\"post-title\"><a title=\"" + _0x3dafd5.FullTitle + "\" href=\"" + _0x3dafd5.Link + "\">" + _0x3dafd5.Title + "</a></h3>";
        _0x342a53 += _0xa7c5d4 ? "<p class=\"post-snippet\">" + _0x3dafd5.SnippetShorten + "</p>" : "";
        if (_0xa7c5d4) {
          _0x342a53 += "<div class=\"addons-footer\">";
          _0x342a53 += "<a class=\"read-more codi-btn\" href=\"" + _0x3dafd5.Link + "\"><span>" + Msg.JumpButton + "</span></a>";
          _0x342a53 += showShareButtons ? _0x4c5629(_0x3dafd5.PostId, _0x3dafd5.Link) : "";
          _0x342a53 += "</div>";
        }
        _0x342a53 += "</div>";
      }
      if (_0x33af62) {
        _0x342a53 += "<div class=\"slide-prog\"></div>";
        _0x342a53 += "<div class=\"post-image caption-img\">";
        _0x342a53 += "<a title=\"" + _0x3dafd5.FullTitle + "\" class=\"image Lazy\" href=\"" + _0x3dafd5.Link + "\">";
        _0x342a53 += _0x3dafd5.CategoryName;
        _0x342a53 += "<img alt=\"" + _0x3dafd5.FullTitle + "\" class=\"lazyload\" data-sizes=\"auto\" data-src=\"" + _0x3dafd5.ImgUrl + "\"/>";
        _0x342a53 += "</a>";
        _0x342a53 += "<button aria-label=\"Read it Later\" class=\"snackbar-btn tooltipped postSave\" data-tooltip=\"اقرأها لاحقا\" type=\"button\" data-duration=\"4000\">";
        _0x342a53 += "<svg fill=\"none\" height=\"16\" stroke=\"var(--postsaveicon)\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" viewBox=\"0 0 24 24\" width=\"16\"><path d=\"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z\"></path></svg>";
        _0x342a53 += "</button>";
        _0x342a53 += "</div>";
        _0x342a53 += "<div class=\"caption\" onclick=\"this.querySelector('h3 a').click()\">";
        _0x342a53 += _0x4d6fca(true, true, true);
        _0x342a53 += "<h3 role=\"heading\" class=\"post-title caption-title\"><a title=\"" + _0x3dafd5.FullTitle + "\" href=\"" + _0x3dafd5.Link + "\">" + _0x3dafd5.Title + "</a></h3>";
        _0x342a53 += "<p class=\"post-snippet\">" + _0x3dafd5.SnippetShorten + "</p>";
        _0x342a53 += "</div>";
        _0x32aba6 += _0x4d6fca(false, true, false) + "<h3 class=\"post-title\"><a aria-disabled=\"true\" onclick=\"event.preventDefault();\" title=\"" + _0x3dafd5.FullTitle + "\" href=\"" + _0x3dafd5.Link + "\">" + _0x3dafd5.Title + "</a></h3>";
      }
      if (_0xfdabed) {
        _0x342a53 += "<a href=\"" + _0x3dafd5.Link + "\">";
        _0x342a53 += "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 18l6-6-6-6\"></path></svg>";
        _0x342a53 += _0x3dafd5.FullTitle;
        _0x342a53 += "</a>";
      }
      _0x342a53 += "</" + _0x2b85a6 + ">";
    }
    _0x342a53 += _0x7677e7 ? "</div>" : "";
    _0x342a53 += _0x7677e7 ? "</div>" : "";
    _0x32aba6 += "</div>";
    _0x32aba6 += "</div>";
    _0x32aba6 += "</div>";
    _0x32aba6 += "</ul>";
    return {
      html: _0x342a53 + ("</" + _0x7e26cd + ">"),
      nav: _0x32aba6 + "</li>"
    };
    if (_0x2fb7c1 && typeof _0x2fb7c1 === "function") {
      _0x2fb7c1();
    }
  }
  function _0x2a901a(_0x1efe6f) {
    const _0x5b4b70 = _0x1efe6f.getElementsByTagName("canvas")[0];
    const _0x39ba93 = _0x5b4b70.width;
    const _0x67ad1c = _0x5b4b70.height;
    const _0x40daba = _0x5b4b70.getContext("2d");
    _0x40daba.lineWidth = 3;
    _0x40daba.strokeStyle = "#fff";
    _0x40daba.shadowBlur = 1;
    _0x40daba.shadowColor = "rgba(0,0,0,0.3)";
    const _0x3da521 = _0x39ba93 / 2;
    const _0x226d33 = _0x67ad1c / 2;
    let _0x388efb = 0;
    (function _0x539f57(_0x3bc804) {
      _0x40daba.clearRect(0, 0, _0x39ba93, _0x67ad1c);
      _0x40daba.beginPath();
      _0x40daba.arc(_0x3da521, _0x226d33, 20, 0, _0x3bc804, false);
      _0x40daba.stroke();
      _0x388efb++;
      if (_0x388efb < 101) {
        requestAnimationFrame(function () {
          _0x539f57(_0x388efb * 25 / 100 + 0);
        });
      }
    })();
  }
  function _0x565e7f(_0x543756) {
    if (!document.querySelector(".posts-from")) {
      return;
    }
    const _0x4aa4d9 = document.querySelectorAll(".posts-from");
    for (let _0x17a8fb = 0; _0x17a8fb < _0x4aa4d9.length; _0x17a8fb++) {
      const _0x485a53 = _0x4aa4d9[_0x17a8fb];
      const _0x2e3efd = _0x485a53.getAttribute("data-label");
      const _0x26af7d = _0x485a53.getAttribute("data-number");
      const _0x4859e5 = _0x485a53.getAttribute("data-index");
      let _0x1b8d1c;
      let _0x10496a;
      if (_0x2e3efd === "TheRecent") {
        _0x1b8d1c = BlogUrl + "feeds/posts/summary/?alt=json&start-index=" + _0x4859e5 + "&max-results=" + _0x26af7d;
        _0x10496a = SearchUrl + ("?max-results=" + getMaxResults);
      } else if (_0x2e3efd === "TheRandom") {
        const _0x5e0da5 = Math.floor(PostCount / 2);
        const _0x3d54fa = Math.abs(Math.floor(Math.random() * _0x5e0da5 + 1));
        _0x1b8d1c = BlogUrl + "/feeds/posts/summary/?alt=json&start-index=" + _0x3d54fa + "&max-results=" + _0x26af7d;
        _0x10496a = SearchUrl + ("?max-results=" + getMaxResults);
      } else if (_0x2e3efd === "randomPostLabel") {
        const _0x1c03d1 = _0x485a53.getAttribute("data-label-name");
        const _0x358be1 = Math.floor(Q[_0x1c03d1] - _0x26af7d);
        const _0x3278ef = Math.abs(Math.floor(Math.random() * _0x358be1 + 1));
        _0x1b8d1c = BlogUrl + "feeds/posts/summary/-/" + encodeURIComponent(_0x1c03d1) + "?alt=json&start-index=" + _0x3278ef + "&max-results=" + _0x26af7d;
      } else {
        _0x1b8d1c = BlogUrl + "feeds/posts/summary/-/" + encodeURIComponent(_0x2e3efd) + "?alt=json&start-index=" + _0x4859e5 + "&max-results=" + _0x26af7d;
        _0x10496a = SearchUrl + ("/label/" + encodeURIComponent(_0x2e3efd) + "?max-results=" + getMaxResults);
      }
      function _0x35c57a(_0x4901c9, _0x566827) {
        fetchData(_0x1b8d1c, function () {
          if (_0x566827 && !_0x566827.querySelector(".LoaderCall")) {
            _0x566827.insertAdjacentHTML("beforeend", "<i class=\"LoaderCall\"></i>");
          }
        }, function (_0x1010e2) {
          const _0x53568b = _0x4901c9.querySelector(".headline .MoreBtn");
          const _0x391351 = _0x4901c9.querySelector(".headline a");
          if (_0x53568b) {
            _0x53568b.href = _0x391351.href = _0x10496a;
            _0x4901c9.classList.add("post-from-tag");
          }
          if (_0x485a53.getAttribute("data-type") === "slider" && isHome) {
            _0x485a53.closest(".top-section").querySelector(".last-box .one-box").innerHTML = _0x96aa55(null, _0x1010e2, _0x485a53, 0, 1, false, false).html;
            _0x485a53.closest(".top-section").querySelector(".last-box .two-box").innerHTML = _0x96aa55(null, _0x1010e2, _0x485a53, 1, 2, false, false).html;
            _0x485a53.closest(".top-section").querySelector(".last-box .three-box").innerHTML = _0x96aa55(null, _0x1010e2, _0x485a53, 2, 3, false, false).html;
            _0x485a53.closest(".top-section").querySelector(".last-box .four-box").innerHTML = _0x96aa55(null, _0x1010e2, _0x485a53, 3, 4, false, false).html;
            _0x485a53.parentElement.innerHTML = _0x96aa55(null, _0x1010e2, _0x485a53, 4, _0x1010e2.feed.entry.length, true, true).html;
            _0x3dfd7b({
              slider: ".m-slider",
              widgetId: "#HTML3",
              direction: "ttb",
              type: "loop",
              perPage: 1,
              pagination: false,
              arrows: true,
              gap: 10,
              autoplay: true,
              fixedHeight: _0x5dd43f => parseFloat(window.getComputedStyle(_0x5dd43f.querySelector(".post")).getPropertyValue("height")),
              height: _0x55eaa6 => parseFloat(window.getComputedStyle(_0x55eaa6).getPropertyValue("height")),
              options: []
            });
          }
          if (_0x485a53.getAttribute("data-type") !== "slider" && _0x485a53.getAttribute("data-type") !== "tikcernews" && !_0x485a53.getAttribute("data-type").includes("splideHtml")) {
            _0x485a53.parentElement.innerHTML = _0x96aa55(null, _0x1010e2, _0x485a53, 0, _0x1010e2.feed.entry.length, false, false).html;
          }
          if (_0x485a53.getAttribute("data-type").includes("splideHtml")) {
            const _0x2faf1e = _0x96aa55(null, _0x1010e2, _0x485a53, 0, _0x1010e2.feed.entry.length, true, false);
            const _0xc0e8e0 = _0x485a53.getAttribute("data-type").includes("splide-show") ? _0x2faf1e.html + _0x2faf1e.nav : _0x2faf1e.html;
            _0x485a53.parentElement.innerHTML = _0xc0e8e0;
            const _0x2276b3 = ".splide-" + _0x485a53.getAttribute("data-type").split(" ").slice(0, -1).join(" ");
            if (_0x2276b3 !== ".splide-splide-show") {
              function _0x574be8(_0x9897ae) {
                let _0x1467fe;
                if (!_0x9897ae.closest(".middle-content")) {
                  if (_0x9897ae.closest(".one-cols")) {
                    _0x1467fe = 4;
                  } else if (_0x9897ae.closest(".two-cols")) {
                    _0x1467fe = 2;
                  } else {
                    _0x1467fe = 1;
                  }
                } else if (_0x9897ae.closest(".one-cols")) {
                  _0x1467fe = _0x9897ae.classList.contains("splide-noimage") ? 2 : 3;
                } else {
                  _0x1467fe = 1;
                }
                const _0x39f936 = {
                  cond: _0x1467fe
                };
                return _0x39f936;
              }
              _0x3dfd7b({
                slider: _0x2276b3,
                widgetId: "#" + document.querySelector(_0x2276b3).closest(".widget").id,
                type: "loop",
                perPage: _0x2276b3 === ".splide-RelatedPosts" ? 3 : _0x536d77 => _0x574be8(_0x536d77).cond,
                pagination: !(_0x2276b3 === ".splide-RelatedPosts"),
                arrows: true,
                gap: _0x2276b3 === ".splide-RelatedPosts" ? 20 : 30,
                autoplay: !(_0x2276b3 === ".splide-RelatedPosts"),
                rewind: false
              });
            } else {
              _0x3dfd7b({
                slider: _0x2276b3 + ",.splideshow-nav",
                widgetId: "#" + document.querySelector(_0x2276b3).closest(".widget").id,
                conditionalProps: [{
                  condition: _0x4d7d24 => !_0x4d7d24.classList.contains("splideshow-nav"),
                  props: {
                    type: "fade"
                  }
                }],
                cover: _0x2f856e => !!_0x2f856e.classList.contains("splideshow-nav"),
                isNavigation: _0x4b35c6 => !!_0x4b35c6.classList.contains("splideshow-nav"),
                direction: _0x4966d9 => _0x4966d9.classList.contains("splideshow-nav") ? "ttb" : BlogDirection,
                fixedHeight: _0x5ea61d => _0x5ea61d.classList.contains("splideshow-nav") ? parseFloat(window.getComputedStyle(_0x5ea61d.querySelector(".post")).getPropertyValue("height")) : "",
                height: _0x19b8a6 => _0x19b8a6.classList.contains("splideshow-nav") ? parseFloat(window.getComputedStyle(_0x19b8a6).getPropertyValue("height")) : "",
                focus: _0x2ae58c => _0x2ae58c.classList.contains("splideshow-nav") ? "center" : "center",
                perPage: 1,
                pagination: false,
                arrows: _0x342e2c => !!_0x342e2c.classList.contains("splideshow-nav"),
                gap: 10,
                autoplay: true,
                rewind: true,
                pauseOnHover: false,
                resetProgress: false,
                options: [(_0x399ef5, _0x4e46f5, _0x305103) => {
                  _0x399ef5.sync(_0x4e46f5);
                  function _0x1a5981() {
                    _0x399ef5.Components.Autoplay.pause();
                    _0x4e46f5.Components.Autoplay.pause();
                  }
                  function _0x227122() {
                    _0x399ef5.Components.Autoplay.play();
                    _0x4e46f5.Components.Autoplay.play();
                  }
                  if (_0x305103 && _0x305103.length) {
                    const _0x18f06d = _0x305103[0];
                    const _0x1a31a1 = _0x305103[1];
                    _0x18f06d.addEventListener("pointerover", _0x1a5981);
                    _0x18f06d.addEventListener("pointerout", _0x227122);
                    for (let _0x34c3fc = 0; _0x34c3fc < _0x1a31a1.querySelectorAll("li").length; _0x34c3fc++) {
                      const _0x2b4eb0 = _0x1a31a1.querySelectorAll("li")[_0x34c3fc];
                      _0x2b4eb0.addEventListener("pointerover", _0x1a5981);
                      _0x2b4eb0.addEventListener("pointerout", _0x227122);
                    }
                    let _0x3b2aaf = null;
                    _0x399ef5.on("autoplay:playing", function (_0x41f276) {
                      if (!_0x399ef5.state.is(Splide.STATES.MOVING)) {
                        if (_0x3b2aaf) {
                          cancelAnimationFrame(_0x3b2aaf);
                        }
                        _0x3b2aaf = requestAnimationFrame(() => {
                          for (let _0x36265c = 0; _0x36265c < _0x18f06d.querySelectorAll(".post").length; _0x36265c++) {
                            const _0x3e4782 = _0x18f06d.querySelectorAll(".post")[_0x36265c];
                            const _0x891208 = _0x3e4782.querySelector(".slide-prog");
                            if (_0x891208) {
                              _0x891208.style.width = _0x41f276 * 100 + "%";
                            }
                          }
                        });
                      }
                    });
                  }
                }]
              });
            }
          }
          _0x31db33();
          if (_0x543756 && _0x543756.type === "mouseenter" && document.querySelector(".MainMenu-Contianer .MegaMenu") && _0x485a53.getAttribute("data-type").includes("mega")) {
            const _0x23185f = document.querySelectorAll(".MainMenu-Contianer .MegaMenu");
            let _0x5367b0 = 0;
            for (let _0x2b4eae = _0x23185f.length; _0x5367b0 < _0x2b4eae; _0x5367b0++) {
              const _0xda7515 = _0x23185f[_0x5367b0];
              const _0x584e36 = _0xda7515.querySelectorAll(".mega-3 .post");
              let _0x3d3af2 = 0;
              for (let _0x4239dd = _0x584e36.length; _0x3d3af2 < _0x4239dd; _0x3d3af2++) {
                const _0x8bc291 = _0x584e36[_0x3d3af2];
                _0x2a901a(_0x8bc291);
                _0x8bc291.querySelector(".fa-video").style.transform = "scale(1)";
              }
              _0xda7515.addEventListener("mouseenter", function () {
                for (let _0x2e731e = 0; _0x2e731e < _0x584e36.length; _0x2e731e++) {
                  _0x2a901a(_0x584e36[_0x2e731e]);
                  _0x584e36[_0x2e731e].querySelector(".fa-video").style.transform = "scale(1)";
                }
              });
              _0xda7515.addEventListener("mouseleave", function () {
                for (let _0x2621c2 = 0; _0x2621c2 < _0x584e36.length; _0x2621c2++) {
                  _0x584e36[_0x2621c2].querySelector(".fa-video").style.transform = "scale(0)";
                }
              });
            }
          }
          if (_0x543756 && (_0x543756.type === "scroll" || _0x543756.type === "run") && document.querySelector("#HTML2") && _0x485a53.getAttribute("data-type") === "tikcernews") {
            getScript("https://cdn.jsdelivr.net/gh/ahmedsufian12/template-codes@main/assets/ticker.min.js", function () {
              _0x485a53.parentElement.innerHTML = _0x96aa55(null, _0x1010e2, _0x485a53, 0, _0x1010e2.feed.entry.length, false, false).html;
              const _0x59b9e5 = {
                anim_duration: 250,
                reverse_elm: true
              };
              new IsCodiTicker(".ticker-content", _0x59b9e5);
            });
          }
        }, function (_0x47a031) {
          _0x485a53.parentElement.innerHTML = _0x4a2413[0];
        });
      }
      if (_0x543756 && (_0x543756.type === "run" || _0x543756.type === "mouseenter") && !_0x485a53.classList.contains("loadclass")) {
        _0x485a53.classList.add("loadclass");
        const _0x5da8ce = _0x485a53.getAttribute("data-type").includes("mega") ? _0x485a53.closest("li") : _0x485a53.closest(".widget");
        const _0x2ea46b = _0x5da8ce.classList.contains("MegaMenu") ? _0x5da8ce.querySelector(".widget-content") : false;
        _0x35c57a(_0x5da8ce, _0x2ea46b);
      }
      if (_0x543756 && _0x543756.type === "scroll" && !_0x485a53.classList.contains("loadclass")) {
        let _0x13e046 = false;
        function _0x4d5daf() {
          if (!_0x485a53.classList.contains("loadclass")) {
            const _0x6e05df = _0x485a53.closest(".widget");
            const _0x184c8d = _0x6e05df.getBoundingClientRect();
            if (_0x184c8d.top < window.innerHeight && _0x184c8d.bottom > 0) {
              _0x485a53.classList.add("loadclass");
              _0x35c57a(_0x6e05df);
            }
          }
          const _0x234ad2 = Array.from(_0x4aa4d9).every(_0x5aebf9 => _0x5aebf9.classList.contains("loadclass"));
          if (_0x234ad2) {
            window.removeEventListener("scroll", _0x21c3a3);
          }
          _0x13e046 = false;
        }
        function _0x21c3a3() {
          if (!_0x13e046) {
            requestAnimationFrame(_0x4d5daf);
            _0x13e046 = true;
          }
        }
        window.addEventListener("scroll", _0x21c3a3);
        _0x4d5daf();
      }
    }
  }
  if (document.querySelector("#menu-bar .MegaMenu")) {
    const _0x12b816 = document.querySelectorAll(".MainMenu-Contianer .MegaMenu");
    for (let _0xa9bbe1 = 0; _0xa9bbe1 < _0x12b816.length; _0xa9bbe1++) {
      (function (_0x2233bb) {
        _0x2233bb.addEventListener("mouseenter", function (_0x17d5c7) {
          const _0x436c50 = _0x2233bb.querySelector(".mega-content");
          if (_0x436c50) {
            const _0x5b5218 = _0x2233bb.querySelector("a");
            if (_0x5b5218.dataset.info) {
              try {
                const _0x236509 = JSON.parse(_0x5b5218.dataset.info);
                _0x5b5218.href = SearchUrl + "/label/" + encodeURIComponent(_0x236509.mglabel) + "?max-results=" + getMaxResults;
                _0x436c50.setAttribute("data-label", _0x236509.mglabel);
                _0x436c50.setAttribute("data-type", _0x236509.mgstyle);
                _0x436c50.classList.add("posts-from");
              } finally {
                _0x565e7f(_0x17d5c7);
                _0x5b5218.removeAttribute("data-info");
              }
            }
          }
        });
      })(_0x12b816[_0xa9bbe1]);
    }
  }
  let _0x9c905c = {};
  document.getElementById("bookmark-count").classList.add("active");
  document.getElementById("bookmark-count").textContent = "0";
  function _0x426329(_0x1fa8e4) {
    if (typeof Storage !== "undefined") {
      localStorage.setItem("list", JSON.stringify(_0x1fa8e4));
    }
  }
  function _0x422e58() {
    const _0x239e14 = document.querySelector(".bookmarks-list");
    const _0x141641 = _0x239e14.querySelector(".bm-posts");
    const _0x20f763 = _0x239e14.querySelector(".clearAll");
    const _0x1deb00 = _0x239e14.querySelector(".bmDetails");
    if (Object.keys(_0x9c905c).length > 0) {
      _0x20f763.classList.remove("hide");
      _0x1deb00.classList.add("hide");
    } else {
      _0x20f763.classList.add("hide");
      _0x1deb00.classList.remove("hide");
    }
    _0x20f763.addEventListener("click", () => {
      _0x9c905c = {};
      _0x141641.innerHTML = "";
      _0x20f763.classList.add("hide");
      _0x1deb00.classList.remove("hide");
      localStorage.removeItem("list");
      _0x4e2b23();
      const _0x459303 = document.querySelectorAll(".post .postSave.filled");
      if (_0x459303.length > 0) {
        for (let _0x2ecac5 = 0; _0x2ecac5 < _0x459303.length; _0x2ecac5++) {
          _0x459303[_0x2ecac5].classList.remove("filled");
        }
      }
    });
  }
  function _0x4e2b23() {
    const _0x3681ca = document.getElementById("bookmark-count");
    const _0x47cc4a = Object.keys(_0x9c905c).length;
    if (_0x47cc4a > 0) {
      if (!_0x3681ca.closest(".menubtn").classList.contains("active")) {
        _0x3681ca.parentElement.classList.add("an-extra-alt");
      }
      const _0x134d15 = document.createElement("i");
      _0x134d15.className = "fa fa-bookmark";
      _0x3681ca.nextElementSibling.replaceWith(_0x134d15);
      if (_0x47cc4a < 10) {
        _0x3681ca.textContent = _0x47cc4a;
      } else {
        _0x3681ca.textContent = "+9";
      }
    } else {
      _0x3681ca.parentElement.classList.remove("an-extra-alt");
      const _0x5927c8 = document.createElement("i");
      _0x5927c8.className = "fa fa-bookmark-slash";
      _0x3681ca.nextElementSibling.replaceWith(_0x5927c8);
      _0x3681ca.textContent = "0";
    }
  }
  function _0x31db33() {
    const _0x1c57a6 = JSON.parse(localStorage.getItem("list"));
    if (!_0x1c57a6) {
      return;
    }
    const _0x22b57a = document.querySelectorAll(".post");
    for (let _0x39f313 = 0; _0x39f313 < _0x22b57a.length; _0x39f313++) {
      const _0x137e35 = _0x22b57a[_0x39f313];
      const _0x2a5a0e = _0x137e35.getAttribute("data-item");
      if (_0x1c57a6[_0x2a5a0e]) {
        const _0xa7e863 = _0x137e35.querySelector(".postSave");
        if (_0xa7e863) {
          _0xa7e863.classList.add("filled");
        }
      }
    }
  }
  function _0x256211() {
    const _0x24430b = document.querySelector(".bookmarks-list .bm-posts");
    const _0x345742 = JSON.parse(localStorage.getItem("list"));
    if (_0x345742) {
      _0x9c905c = _0x345742;
      document.addEventListener("click", function (_0x2572b1) {
        const _0x50083d = _0x2572b1.target.closest("[data-target=\"vBookmarks\"]");
        if (!_0x50083d) {
          return;
        }
        _0x50083d.classList.remove("an-extra-alt");
        const _0x49e4b1 = Object.keys(_0x9c905c);
        for (let _0x2dc615 = 0; _0x2dc615 < _0x49e4b1.length; _0x2dc615++) {
          const _0x1f0422 = _0x49e4b1[_0x2dc615];
          if (!_0x24430b.innerHTML.includes(_0x1f0422) && _0x9c905c[_0x1f0422]) {
            _0x24430b.innerHTML += _0x9c905c[_0x1f0422];
          }
        }
      });
      _0x4e2b23();
      _0x31db33();
    }
    _0x422e58();
  }
  function _0x12b6a2(_0x12ba63, _0x1b6846, _0x5e6459, _0x325772, _0x22210f, _0x97e78d, _0x432a10) {
    let _0x15252c = "<div class=\"post\" data-item=\"" + _0x5e6459 + `">
<button aria-label="Clear This Item" class="sp-btn snackbar-btn clearItem tooltipped" type="button" data-tooltip="حذف" data-duration="4000" data-type='error'><i class="fa fa-trash"></i></button>
<div class="post-image">
<a href="` + _0x22210f + "\" title=\"" + _0x432a10 + "\" class=\"image Lazy smimg\">\n<img class=\"lazyload\" alt=\"" + _0x432a10 + "\" data-src=\"" + _0x325772 + `" data-sizes="auto">
</a>
</div>
<div class="bookmark-details">
` + (_0x97e78d ? "<a class=\"category-link Categories cateback-" + Math.floor(Math.random() * 42 + 1) + "\" href=\"/search/label/" + encodeURIComponent(_0x97e78d) + "?max-results=" + getMaxResults + "\">" + _0x97e78d + "</a>" : "") + "\n<h3 role=\"heading\" class=\"post-title\"><a title=\"" + _0x432a10 + "\" href=\"" + _0x22210f + "\">" + _0x1b6846 + `</a></h3>
</div>
</div>`;
    if (_0x9c905c[_0x5e6459]) {
      delete _0x9c905c[_0x5e6459];
      _0x426329(_0x9c905c);
      for (let _0x261469 = 0; _0x261469 < document.querySelectorAll(".post[data-item='" + _0x5e6459 + "'] .postSave").length; _0x261469++) {
        const _0x3c6ea2 = document.querySelectorAll(".post[data-item='" + _0x5e6459 + "'] .postSave")[_0x261469];
        _0x3c6ea2.classList.remove("filled");
      }
      if (document.querySelector(".bookmarks-list .bm-posts .post[data-item='" + _0x5e6459 + "']")) {
        document.querySelector(".bookmarks-list .bm-posts .post[data-item='" + _0x5e6459 + "']").remove();
      }
      ;
    } else {
      _0x9c905c[_0x5e6459] = _0x15252c;
      _0x426329(_0x9c905c);
      for (let _0x29a3b4 = 0; _0x29a3b4 < document.querySelectorAll(".post[data-item='" + _0x5e6459 + "'] .postSave").length; _0x29a3b4++) {
        const _0xcdee8d = document.querySelectorAll(".post[data-item='" + _0x5e6459 + "'] .postSave")[_0x29a3b4];
        _0xcdee8d.classList.add("filled");
      }
      if (_0x15252c) {
        document.querySelector(".bookmarks-list .bm-posts").innerHTML += _0x15252c;
      } else {
        "";
      }
    }
    document.addEventListener("click", function (_0x59e0aa) {
      const _0x323d2c = _0x59e0aa.target.closest("[data-target=\"vBookmarks\"]");
      if (!_0x323d2c) {
        return;
      }
      _0x323d2c.classList.remove("an-extra");
    });
    _0x4e2b23();
    _0x422e58();
  }
  _0x256211();
  document.addEventListener("click", function (_0x1d3c7e) {
    const _0x5c7023 = _0x1d3c7e.target.closest(".postSave");
    if (!_0x5c7023) {
      return;
    }
    const _0x2d275d = _0x5c7023.closest(".post");
    if (!_0x2d275d) {
      return;
    }
    if (_0x5c7023.classList.contains("filled")) {
      _0x5c7023.setAttribute("data-type", "error");
      if (Object.keys(_0x9c905c).length === 1) {
        _0x5c7023.setAttribute("data-message", "تم إلغاء حفظ جميع المشاركØ§Øª");
      } else {
        _0x5c7023.setAttribute("data-message", "تم إلغاء الحفظ");
      }
    } else {
      _0x5c7023.setAttribute("data-type", "success");
      _0x5c7023.setAttribute("data-message", "تم الحفظ بنجاح");
    }
    const _0x472852 = _0x2d275d.querySelector(".topic-title") ? _0x2d275d.querySelector(".topic-title")?.textContent.trim() : _0x2d275d.querySelector(".post-title a")?.textContent.trim();
    const _0x31050b = _0x2d275d.querySelector(".topic-title") ? _0x2d275d.querySelector(".topic-title")?.textContent.trim() : _0x2d275d.querySelector(".post-title a")?.getAttribute("title") || _0x2d275d.querySelector(".post-title a")?.dataset.title;
    const _0x5a3f65 = _0x2d275d.dataset.item;
    const _0x859ee4 = _0x2d275d.querySelector(".post-body img") ? _0x2d275d.querySelector(".post-body img").getAttribute("src") : _0x2d275d.querySelector(".post-image img") ? _0x2d275d.querySelector(".post-image img").getAttribute("src") : _0x2d275d.querySelector(".post-title").getAttribute("data-altsrc");
    const _0x136c10 = _0x2d275d.querySelector(".topic-title") ? _0x2d275d.querySelector(".topic-title")?.dataset.althref : _0x2d275d.querySelector(".post-title a")?.href;
    const _0x197490 = _0x2d275d.dataset.cate && _0x2d275d.dataset.cate !== "" ? _0x2d275d.dataset.cate : false;
    _0x12b6a2(_0x5c7023, _0x472852, _0x5a3f65, _0x859ee4, _0x136c10, _0x197490, _0x31050b);
  });
  document.addEventListener("click", function (_0x1f1f7c) {
    const _0xfc90cc = _0x1f1f7c.target.closest(".clearItem");
    if (!_0xfc90cc) {
      return;
    }
    const _0x2c9ce5 = _0xfc90cc.closest(".post");
    const _0x1df6ed = _0x2c9ce5.dataset.item;
    const _0x1192a4 = Object.keys(_0x9c905c).length;
    if (_0x1192a4 === 1) {
      _0xfc90cc.setAttribute("data-message", "تم إلغاء حفظ جميع المشاركØ§Øª");
      const _0x3cc9f4 = _0x2c9ce5.querySelector(".tooltipped").getAttribute("data-tooltip-id");
      document.querySelector(".bookmarks-list .clearAll").click();
      if (document.getElementById(_0x3cc9f4)) {
        document.getElementById(_0x3cc9f4).remove();
      }
      ;
    } else {
      if (_0x9c905c[_0x1df6ed]) {
        delete _0x9c905c[_0x1df6ed];
        _0x426329(_0x9c905c);
        _0xfc90cc.setAttribute("data-message", "تم إلغاء الحفظ");
        for (let _0x574124 = 0; _0x574124 < document.querySelectorAll(".post[data-item='" + _0x1df6ed + "'] .postSave.filled").length; _0x574124++) {
          const _0x335051 = document.querySelectorAll(".post[data-item='" + _0x1df6ed + "'] .postSave.filled")[_0x574124];
          _0x335051.classList.remove("filled");
        }
        const _0x49c13f = _0x2c9ce5.querySelector(".tooltipped").getAttribute("data-tooltip-id");
        _0x2c9ce5.remove();
        if (document.getElementById(_0x49c13f)) {
          document.getElementById(_0x49c13f).remove();
        }
        ;
      }
      _0x4e2b23();
    }
  });
  const _0x5ab44d = [];
  let _0x53272e = false;
  let _0x442200 = null;
  let _0x567ff3 = 0;
  let _0x4c2596 = 0;
  document.addEventListener("click", function (_0x2bcc35) {
    const _0x460b48 = _0x2bcc35.target.closest(".snackbar-btn");
    if (!_0x460b48) {
      return;
    }
    const _0x7d5e65 = _0x460b48.getAttribute("data-message");
    const _0x431d11 = _0x460b48.getAttribute("data-action") || "";
    const _0x26a077 = parseInt(_0x460b48.getAttribute("data-duration")) || 5000;
    const _0x4b6526 = _0x460b48.getAttribute("data-type") || "neutral";
    const _0x330375 = _0x460b48.getAttribute("data-handler") || null;
    _0x27d386(_0x7d5e65, _0x431d11, _0x330375, _0x26a077, _0x4b6526);
  });
  function _0x27d386(_0x35c095, _0xf0357b = "", _0xa9bc95 = null, _0x1f132d = 5000, _0x5a6ab7 = "neutral") {
    const _0x2d3432 = {
      message: _0x35c095,
      actionText: _0xf0357b,
      actionHandler: _0xa9bc95,
      duration: _0x1f132d,
      type: _0x5a6ab7
    };
    if (_0x53272e) {
      clearTimeout(_0x442200);
      const _0xf2594b = document.getElementById("snackbar");
      _0xf2594b.classList.remove("show");
      _0xf2594b.parentElement.fadeOut("100");
      _0xf2594b.classList.add("hide");
      // TOLOOK
      setTimeout(() => {
        _0xf2594b.className = "";
        _0x5ab44d.unshift(_0x2d3432);
        _0x3a885a();
      }, 100);
      _0x53272e = false;
    } else {
      _0x5ab44d.push(_0x2d3432);
      _0x3a885a();
    }
  }
  function _0x3a885a() {
    if (_0x5ab44d.length === 0) {
      return;
    }
    const {
      message: _0x3bdb2f,
      actionText: _0x2de2e8,
      actionHandler: _0x1538ef,
      duration: _0x2f513f,
      type: _0x444dd6
    } = _0x5ab44d.shift();
    _0x53272e = true;
    const _0x1ec52e = document.getElementById("snackbar");
    const _0x41cf9b = document.getElementById("snackbar-message");
    const _0x3e25ae = document.getElementById("snackbar-icon");
    const _0x2a08e5 = document.getElementById("snackbar-action");
    const _0x393158 = document.getElementById("snackbar-close");
    const _0xeaeeda = {
      success: "<i class=\"fa fa-badge-check\"></i>",
      error: "<i class=\"fa fa-badge-xmark\"></i>",
      warning: "<i class=\"fa fa-alert\"></i>",
      gift: "<i class=\"fa fa-gift\"></i>",
      neutral: "<i class=\"fa fa-info\"></i>"
    };
    _0x1ec52e.className = "";
    _0x1ec52e.parentElement.fadeIn("100", "flex");
    _0x1ec52e.classList.add(_0x444dd6, "show");
    _0x3e25ae.innerHTML = _0xeaeeda[_0x444dd6] || "";
    _0x41cf9b.textContent = _0x3bdb2f;
    if (_0x2de2e8) {
      _0x2a08e5.textContent = _0x2de2e8;
      _0x2a08e5.style.display = "inline";
      _0x2a08e5.onclick = () => {
        if (_0x1538ef && typeof window[_0x1538ef] === "function") {
          window[_0x1538ef]();
        }
        _0x268b4c();
      };
    } else {
      _0x2a08e5.style.display = "none";
    }
    _0x393158.onclick = _0x268b4c;
    _0x4c2596 = _0x2f513f;
    _0x567ff3 = Date.now() + _0x2f513f;
    clearTimeout(_0x442200);
    _0x442200 = // TOLOOK
    setTimeout(_0x268b4c, _0x2f513f);
  }
  function _0x268b4c() {
    const _0x238223 = document.getElementById("snackbar");
    _0x238223.classList.remove("show");
    _0x238223.parentElement.fadeOut("100");
    _0x238223.classList.add("hide");
    clearTimeout(_0x442200);
    _0x53272e = false;
    // TOLOOK
    setTimeout(() => {
      _0x238223.className = "";
      if (_0x5ab44d.length > 0) {
        _0x3a885a();
      }
    }, 300);
  }
  window.addEventListener("blur", () => {
    if (_0x53272e && _0x567ff3 > Date.now()) {
      _0x4c2596 = _0x567ff3 - Date.now();
      clearTimeout(_0x442200);
    }
  });
  window.addEventListener("focus", () => {
    if (_0x53272e && _0x4c2596 > 0) {
      _0x567ff3 = Date.now() + _0x4c2596;
      _0x442200 = // TOLOOK
      setTimeout(_0x268b4c, _0x4c2596);
      _0x4c2596 = 0;
    }
  });
  _0x529191("#searchInput", "#search-results");
  function _0x529191(_0x1fb232, _0x34634c) {
    const _0x583600 = document.querySelector(_0x1fb232);
    const _0x8347f6 = document.querySelector(_0x34634c);
    let _0x552a5d = false;
    if (_0x583600) {
      _0x583600.addEventListener("input", _0x377f11(function () {
        _0x2e24a5();
      }, 500));
      _0x583600.addEventListener("focus", _0x2e24a5);
    }
    document.addEventListener("click", function (_0x473e93) {
      const _0x5e0097 = _0x473e93.target.closest(".search-open");
      const _0xd371fc = _0x473e93.target.closest(".outer_overlay");
      if (_0x5e0097) {
        document.querySelector(".head-down").slideToggle(200, "block");
        document.querySelector(".outer_overlay").fadeToggle(200, "block");
        document.querySelector(".inner-container").classList.toggle("filter");
        document.querySelector("#footer").classList.toggle("filter");
      } else if (_0xd371fc) {
        document.querySelector(".search-open").click();
      } else {
        return;
      }
    });
    function _0x2e24a5() {
      _0x552a5d = true;
      const _0x51698f = _0x583600.value;
      if (!_0x51698f) {
        _0x8347f6.innerHTML = "";
        _0x8347f6.classList.remove("search-active");
        _0x8347f6.fadeOut("100");
        return;
      }
      fetchData(BlogUrl + "feeds/posts/summary/?alt=json&start-index=1&max-results=999999999", () => {
        if (!_0x8347f6.querySelector(".LoaderCall")) {
          _0x8347f6.innerHTML = "<i class=\"LoaderCall\"></i>";
        }
        _0x8347f6.classList.add("search-active");
        _0x8347f6.fadeIn("100", "flex");
      }, _0x4fadca => {
        const _0x3596db = _0x4fadca.feed.entry;
        const _0x5c7916 = _0x4c4766(_0x3596db, _0x51698f);
        _0x5a338f(_0x5c7916, _0x8347f6, _0x51698f);
      }, _0x16ca13 => {
        _0x8347f6.textContent = Msg.noResultsFound;
        _0x8347f6.classList.add("search-active");
        _0x8347f6.fadeIn("100", "flex");
      });
    }
    document.addEventListener("click", function (_0x2e791f) {
      const _0x2dc270 = {
        qzDio: "Unknown Author"
      };
      _0x2dc270.DCsZQ = "blogger_logo_round";
      _0x2dc270.XQSww = "blank.gif";
      if (_0x583600 && _0x8347f6 && !_0x2e791f.target.closest(_0x1fb232) && !_0x2e791f.target.closest(_0x34634c) && _0x8347f6.classList.contains("search-active")) {
        _0x552a5d = false;
        _0x8347f6.innerHTML = "";
        _0x8347f6.classList.remove("search-active");
        _0x8347f6.fadeOut(100);
      }
    });
    function _0x4c4766(_0x4f7562, _0x1fec65) {
      return _0x4f7562.filter(_0x216ff9 => {
        const _0x2cc2b1 = _0x216ff9.title.$t.toLowerCase();
        const _0x53a014 = _0x1fec65.toLowerCase();
        return _0x2cc2b1.includes(_0x53a014);
      });
    }
    function _0x312da6(_0x13938b, _0x4e5288) {
      const _0x4258a8 = new RegExp("(" + _0x4e5288 + ")", "gi");
      return _0x13938b.replace(_0x4258a8, "<span class=\"search-highlight\">$1</span>");
    }
    function _0x5a338f(_0x45ab4c, _0x5eadd2, _0x80fa5e) {
      _0x5eadd2.innerHTML = "";
      if (_0x45ab4c.length === 0) {
        _0x5eadd2.textContent = Msg.noResultsFound;
        _0x5eadd2.classList.add("search-active");
        _0x5eadd2.fadeIn("100", "flex");
      } else {
        let _0x3ab47d = 0;
        for (let _0x144618 = _0x45ab4c.length; _0x3ab47d < _0x144618; _0x3ab47d++) {
          const _0x37906e = _0x45ab4c[_0x3ab47d];
          const _0x13b24c = _0x5136a1(_0x37906e);
          const _0x1f8e5e = _0x312da6(_0x13b24c.FullTitle, _0x80fa5e);
          const _0x4cf1f0 = `
<div class="search-result">
<a title="` + _0x13b24c.FullTitle + "\" href=\"" + _0x13b24c.Link + `">
<div class="image Lazy smimg">
  <img class="lazyload" data-sizes="auto" data-src="` + _0x13b24c.ImgUrl + "\" alt=\"" + _0x13b24c.FullTitle + `"/>
</div>
<h3 role="heading" class="post-title">` + _0x1f8e5e + `</h3>
</a>
</div>
`;
          _0x5eadd2.insertAdjacentHTML("beforeend", _0x4cf1f0);
        }
        _0x5eadd2.classList.add("search-active");
        _0x5eadd2.fadeIn("100", "flex");
      }
    }
  }
  function _0x158710() {
    const _0x79999f = document.querySelector("#LinkList3");
    if (!_0x79999f) {
      return;
    }
    const _0x38aa96 = document.querySelectorAll("#LinkList3 li a");
    for (let _0x207e6c = 0; _0x207e6c < _0x38aa96.length; _0x207e6c++) {
      const _0x1d1d89 = _0x38aa96[_0x207e6c];
      const _0x15bce7 = _0x1d1d89.dataset.link;
      if (_0x15bce7) {
        const [_0x46e9c2, _0xf938b0, _0x5a0bbd] = _0x15bce7.split("+").map(_0x4528ae => _0x4528ae.trim());
        if (!_0x1d1d89.querySelector(".service-title")) {
          _0x1d1d89.insertAdjacentHTML("beforeend", "<span class='service-title an-up'>" + _0x46e9c2 + "</span>");
        }
        if (!_0x1d1d89.querySelector(".service-description")) {
          _0x1d1d89.insertAdjacentHTML("beforeend", "<span class='service-description an-up'>" + _0xf938b0 + "</span>");
        }
        if (_0x5a0bbd) {
          _0x1d1d89.setAttribute("href", _0x5a0bbd);
          const _0x2de762 = ["aria-disabled", "role", "onclick"];
          for (let _0x1518bd = 0; _0x1518bd < _0x2de762.length; _0x1518bd++) {
            _0x1d1d89.removeAttribute(_0x2de762[_0x1518bd]);
          }
        }
        _0x1d1d89.removeAttribute("data-link");
        if (_0x1d1d89.getAttribute("href") === "#") {
          _0x1d1d89.classList.add("nolink-service");
        }
      }
    }
    if (ServiceGrid) {
      if (_0x79999f.querySelector(".posts-loading")) {
        _0x79999f.querySelector(".posts-loading").remove();
      }
      _0x79999f.querySelector(".services-wrapper").fadeIn(300, "block");
    }
  }
  if (isMultipleItems) {
    function _0x42ccfe(_0x48b9ca) {
      let _0x1fc304;
      const _0x35e8ea = document.querySelector(".blog-posts");
      const _0x9c5b9b = _0x35e8ea.querySelectorAll(".post-outer").length;
      const _0x3cbe9d = document.createElement("div");
      _0x3cbe9d.innerHTML = _0x48b9ca;
      const _0x56a4e0 = _0x3cbe9d.querySelector(".blog-posts");
      if (!_0x56a4e0 || !_0x56a4e0.querySelectorAll(".post-outer").length) {
        document.querySelector(".loadMore").setAttribute("disabled", "disabled");
        document.querySelector(".nomore-posts").classList.remove("hide");
        document.querySelector(".loadmore-text").classList.add("hide");
        document.querySelector(".loading-text").classList.add("hide");
        document.querySelector(".loading-post").classList.add("hide");
        return;
      }
      if (_0x31f8a3.getAttribute("data-fetch")) {
        _0x1fc304 = _0x3cbe9d;
        _0x31f8a3 = _0x1fc304.querySelector(".loadMore");
        _0x1fc304 = _0x1fc304.querySelector(".blog-posts").innerHTML;
        _0x35e8ea.insertAdjacentHTML("beforeend", _0x1fc304);
        document.querySelector(".loading-text").classList.add("hide");
        document.querySelector(".loading-post").classList.add("hide");
        document.querySelector(".loadmore-text").classList.remove("hide");
        requestAnimationFrame(() => {
          const _0x2d4d4f = _0x35e8ea.querySelectorAll(".post-outer");
          const _0x402a19 = _0x2d4d4f[_0x9c5b9b];
          if (_0x402a19) {
            scrollToElement(_0x402a19);
          }
        });
      } else {
        document.querySelector(".nomore-posts").classList.add("hide");
        document.querySelector(".loadmore-text").classList.remove("hide");
      }
      const _0x262ce1 = document.querySelectorAll(".blog-posts .post-outer");
      for (let _0x3cca26 = 0; _0x3cca26 < _0x262ce1.length; _0x3cca26++) {
        const _0x3383f6 = _0x262ce1[_0x3cca26];
        const _0x47c15a = _0x3383f6.querySelector(".dateSpesh") ? _0x3383f6.querySelector(".dateSpesh") : null;
        if (_0x47c15a) {
          const _0xc6f65 = _0x47c15a.querySelector("time").getAttribute("datetime");
          _0x47c15a.querySelector("time").innerHTML = timeAgo ? langDate(_0xc6f65) : _0xc6f65.slice(8, 10) + " " + langDate(_0xc6f65) + " " + _0xc6f65.slice(0, 4);
        }
      }
      _0x31db33();
    }
    let _0x31f8a3 = document.querySelector(".loadMore");
    if (document.querySelector(".blog-posts .post-outer") && _0x31f8a3 && _0x31f8a3.getAttribute("data-fetch").replace("http://", "https://")) {
      _0x31f8a3.addEventListener("click", function () {
        if (_0x31f8a3 && _0x31f8a3.getAttribute("data-fetch").replace("http://", "https://")) {
          document.querySelector(".loading-text").classList.remove("hide");
          document.querySelector(".loading-post").classList.remove("hide");
          document.querySelector(".loadmore-text").classList.add("hide");
          loadFun(_0x31f8a3.getAttribute("data-fetch").replace("http://", "https://"), _0x42ccfe);
        } else {
          document.querySelector(".loadMore").setAttribute("disabled", "disabled");
          document.querySelector(".nomore-posts").classList.remove("hide");
          document.querySelector(".loadmore-text").classList.add("hide");
        }
      });
    }
  }
  function _0xc83b38() {
    _0x150a71();
    _0x240338();
    _0x54bc82();
    function _0x150a71() {
      const _0x23dd24 = {
        oRsJP: "block",
        vyJRW: "expanded"
      };
      _0x23dd24.ZJLhU = "beforeend";
      if (document.querySelector(".separator a")) {
        for (let _0x4aca0a = 0; _0x4aca0a < document.querySelectorAll(".separator a").length; _0x4aca0a++) {
          const _0x43ed15 = document.querySelectorAll(".separator a")[_0x4aca0a];
          _0x43ed15.addEventListener("click", function (_0x355da2) {
            _0x355da2.preventDefault();
          });
        }
      }
      if (document.querySelector(".separator a:not([href*='bp.blogspot.com']):not([href*='googleusercontent'])")) {
        for (let _0x52801e = 0; _0x52801e < document.querySelectorAll(".separator a:not([href*='bp.blogspot.com']):not([href*='googleusercontent'])").length; _0x52801e++) {
          const _0x5e7360 = document.querySelectorAll(".separator a:not([href*='bp.blogspot.com']):not([href*='googleusercontent'])")[_0x52801e];
          _0x5e7360.onclick = function (_0x3e19b1) {
            if (_0x5e7360.getAttribute("target") == "_blank") {
              window.open(_0x5e7360.href);
            } else {
              location.href = _0x5e7360.href;
            }
          };
        }
      }
      if (document.querySelector(".post-body a")) {
        for (let _0x1bf6a1 = 0; _0x1bf6a1 < document.querySelectorAll(".post-body a").length; _0x1bf6a1++) {
          const _0x422183 = document.querySelectorAll(".post-body a")[_0x1bf6a1];
          if (!_0x422183.closest("#redirect-page") && !_0x422183.closest(".separator") && !_0x422183.classList.contains("hidden-link") && !_0x422183.classList.contains("iscodi-button") && !_0x422183.querySelector("img")) {
            if (_0x422183.hasAttribute("target") && _0x422183.getAttribute("target") === "_blank") {
              _0x422183.classList.add("external-iscodilink");
            } else {
              _0x422183.classList.add("internal-iscodilink");
            }
          }
        }
      }
    }
    function _0x240338() {
      function _0x41ee2d() {
        document.querySelectorAll(".post-body .search-highlight").forEach(_0x2b5324 => {
          const _0x2f2026 = _0x2b5324.parentNode;
          if (_0x2f2026) {
            _0x2f2026.replaceChild(document.createTextNode(_0x2b5324.textContent), _0x2b5324);
          }
          _0x2f2026.normalize();
        });
      }
      function _0x5208d7(_0x5a5166, _0x1c33f2) {
        let _0x1d5b4b;
        return function () {
          clearTimeout(_0x1d5b4b);
          _0x1d5b4b = // TOLOOK
          setTimeout(() => _0x5a5166.apply(this, arguments), _0x1c33f2);
        };
      }
      function _0x43d563(_0xd88528, _0x41e3a8) {
        const _0x31b4f8 = document.createTreeWalker(_0xd88528, NodeFilter.SHOW_TEXT, null, false);
        let _0xfb430c = [];
        let _0x184a53 = "";
        let _0x1742a5;
        while (_0x1742a5 = _0x31b4f8.nextNode()) {
          const _0x275388 = {
            node: _0x1742a5,
            start: _0x184a53.length
          };
          _0xfb430c.push(_0x275388);
          _0x184a53 += _0x1742a5.textContent;
        }
        const _0x487eed = _0x184a53.toLowerCase().indexOf(_0x41e3a8.toLowerCase());
        if (_0x487eed === -1) {
          return false;
        }
        const _0xd4c617 = _0x487eed + _0x41e3a8.length;
        let _0x3e2d2b = 0;
        while (_0x3e2d2b < _0xfb430c.length && _0xfb430c[_0x3e2d2b].start + _0xfb430c[_0x3e2d2b].node.textContent.length < _0x487eed) {
          _0x3e2d2b++;
        }
        let _0x2cb193 = [];
        while (_0x3e2d2b < _0xfb430c.length && _0xfb430c[_0x3e2d2b].start < _0xd4c617) {
          const _0x18918e = _0xfb430c[_0x3e2d2b];
          const _0xf3d71e = _0x18918e.node.textContent;
          const _0xa2f81 = Math.max(0, _0x487eed - _0x18918e.start);
          const _0x4c38ff = Math.min(_0xf3d71e.length, _0xd4c617 - _0x18918e.start);
          const _0x130bbc = {
            node: _0x18918e.node,
            start: _0xa2f81,
            end: _0x4c38ff
          };
          _0x2cb193.push(_0x130bbc);
          _0x3e2d2b++;
        }
        _0x2cb193.reverse().forEach(({
          node: _0x5c8427,
          start: _0x458a88,
          end: _0x17baad
        }) => {
          const _0xb773ac = _0x5c8427.textContent;
          const _0x57c8f5 = _0xb773ac.slice(0, _0x458a88);
          const _0x3ffacd = _0xb773ac.slice(_0x458a88, _0x17baad);
          const _0x486eb1 = _0xb773ac.slice(_0x17baad);
          const _0xedf572 = _0x5c8427.parentNode;
          const _0x113ff8 = document.createDocumentFragment();
          if (_0x57c8f5) {
            _0x113ff8.appendChild(document.createTextNode(_0x57c8f5));
          }
          const _0x26410a = document.createElement("span");
          _0x26410a.className = "search-highlight";
          _0x26410a.textContent = _0x3ffacd;
          _0x113ff8.appendChild(_0x26410a);
          if (_0x486eb1) {
            _0x113ff8.appendChild(document.createTextNode(_0x486eb1));
          }
          _0xedf572.replaceChild(_0x113ff8, _0x5c8427);
        });
        return true;
      }
      document.querySelector("#SearchInputPost").addEventListener("input", _0x5208d7(function () {
        const _0x5b8fe4 = document.querySelector(".post-body");
        const _0x555b36 = this.value.trim();
        _0x41ee2d();
        if (_0x555b36.length > 0) {
          const _0x3eb9a2 = _0x43d563(_0x5b8fe4, _0x555b36);
          if (_0x3eb9a2) {
            const _0x3478e1 = document.querySelector(".post-body .search-highlight");
            if (_0x3478e1) {
              scrollToElement(_0x3478e1);
            }
          }
        }
      }, 500));
      if (document.querySelector(".post-outer")) {
        document.querySelectorAll(".post-outer").forEach(_0x13e6f0 => {
          _0x13e6f0.addEventListener("click", _0x46c7eb => {
            if (_0x46c7eb.target.closest(".ResetPostsSearch")) {
              scrollToElement(document.querySelector("#searchpost"));
              document.querySelector("#SearchInputPost").value = "";
              _0x41ee2d();
              document.querySelector("#SearchInputPost").focus();
            }
          });
        });
      }
      if (!document.querySelector("#authors-page")) {
        _0x44d594();
      }
      function _0x44d594() {
        let _0x49e002 = 0;
        document.addEventListener("click", function (_0x25293f) {
          const _0x566905 = _0x25293f.target.closest(".topic-options li:not(:first-of-type) button");
          if (!_0x566905) {
            return;
          }
          const _0x10e4b3 = document.querySelector(".post-body");
          if (!_0x10e4b3) {
            return;
          }
          if (_0x566905.classList.contains("text-increase")) {
            _0x49e002 += 1;
          } else if (_0x566905.classList.contains("text-decrease")) {
            _0x49e002 -= 1;
          } else if (_0x566905.classList.contains("text-normal")) {
            _0x49e002 = 0;
          }
          _0x3c1872(_0x10e4b3, _0x49e002, ":empty,br,.redNumperContent,.separator,.separator *,code,code *");
        });
      }
      function _0x3c1872(_0x52d03f, _0x73ae54, _0x122b3e) {
        _0x41d08d(_0x52d03f);
        if (_0x73ae54 === 0) {
          return;
        }
        _0x5ce182(_0x52d03f, _0x73ae54, _0x122b3e);
      }
      function _0x5ce182(_0x1f398c, _0x1b12c0, _0x2362dc) {
        const _0x365513 = _0x1f398c.querySelectorAll("*:not(" + _0x2362dc + ")");
        for (let _0x46818b = 0; _0x46818b < _0x365513.length; _0x46818b++) {
          let _0x4627f4 = _0x365513[_0x46818b];
          if (_0x4627f4.childNodes.length > 0) {
            _0x339229(_0x4627f4, _0x1b12c0);
          }
        }
        const _0x45a882 = _0x29a4c7(_0x1f398c);
        let _0xefb623;
        while (_0xefb623 = _0x45a882.nextNode()) {
          if (_0x5ef014(_0xefb623, _0x2362dc)) {
            continue;
          }
          if (_0x3be006(_0xefb623, _0x1f398c)) {
            _0x436f8e(_0xefb623, _0x1b12c0);
          }
        }
      }
      function _0x5ef014(_0x4aee44, _0x15af1e) {
        if (_0x4aee44.nodeValue.trim() === "") {
          return true;
        }
        if (_0x4aee44.parentNode.style && _0x4aee44.parentNode.style.fontSize) {
          return true;
        }
        if (_0x4aee44.parentNode.closest && _0x4aee44.parentNode.closest(_0x15af1e)) {
          return true;
        }
        return _0x4aee44.parentNode.classList && _0x4aee44.parentNode.classList.contains("redNumperContent");
      }
      function _0x3be006(_0x11c7f8, _0x502d06) {
        const _0x2cf15d = _0x11c7f8.parentNode;
        return _0x2cf15d.nodeName === "DIV" || _0x2cf15d.nodeName === "P" || _0x2cf15d === _0x502d06;
      }
      function _0x29a4c7(_0x38c446) {
        return document.createTreeWalker(_0x38c446, NodeFilter.SHOW_TEXT, {
          acceptNode: function (_0x4ef4f5) {
            if (_0x4ef4f5.nodeValue.trim() === "") {
              return NodeFilter.FILTER_REJECT;
            } else {
              return NodeFilter.FILTER_ACCEPT;
            }
          }
        }, false);
      }
      function _0x436f8e(_0x9c9e5c, _0x4c3824) {
        const _0x54638b = document.createElement("span");
        const _0x32da32 = _0x9c9e5c.parentNode;
        _0x54638b.dataset.origSize = _0x544fbd(_0x32da32, "font-size");
        _0x54638b.dataset.origLineHeight = _0x544fbd(_0x32da32, "line-height");
        _0x54638b.dataset.isTextWrapper = "true";
        _0x54638b.textContent = _0x9c9e5c.nodeValue;
        _0x339229(_0x54638b, _0x4c3824);
        _0x9c9e5c.parentNode.replaceChild(_0x54638b, _0x9c9e5c);
      }
      function _0x544fbd(_0x2aeae8, _0x1e9c52) {
        const _0x5b2538 = "data-orig-" + (_0x1e9c52 === "font-size" ? "size" : "line-height");
        if (_0x2aeae8.hasAttribute(_0x5b2538)) {
          return _0x2aeae8.getAttribute(_0x5b2538);
        }
        const _0x2b53e9 = window.getComputedStyle(_0x2aeae8);
        const _0x4580f2 = _0x2b53e9.getPropertyValue(_0x1e9c52);
        if (_0x3f08e8(_0x2aeae8, _0x1e9c52)) {
          return _0x4580f2;
        }
        const _0x305352 = document.querySelector(".post-body");
        if (_0x305352) {
          return window.getComputedStyle(_0x305352).getPropertyValue(_0x1e9c52);
        } else {
          return _0x4580f2;
        }
      }
      function _0x3f08e8(_0x2bfba7, _0x2a558e) {
        const _0x54ad0e = _0x2a558e.replace(/-([a-z])/g, _0x4deff0 => _0x4deff0[1].toUpperCase());
        if (_0x2bfba7.style && _0x2bfba7.style[_0x54ad0e]) {
          return true;
        }
        for (let _0x5bb475 = 0; _0x5bb475 < document.styleSheets.length; _0x5bb475++) {
          let _0x462c8e = document.styleSheets[_0x5bb475];
          try {
            if (!_0x462c8e.cssRules) {
              continue;
            }
            for (let _0x443c45 of _0x462c8e.cssRules) {
              if (_0x443c45.selectorText && _0x2bfba7.matches(_0x443c45.selectorText)) {
                if (_0x443c45.style && _0x443c45.style[_0x54ad0e]) {
                  return true;
                }
              }
            }
          } catch (_0x15db62) {
            continue;
          }
        }
        return false;
      }
      function _0x339229(_0x2ba10f, _0x3aa9f7) {
        if (!_0x2ba10f.dataset.origSize) {
          _0x2ba10f.dataset.origSize = _0x544fbd(_0x2ba10f, "font-size");
        }
        if (!_0x2ba10f.dataset.origLineHeight) {
          _0x2ba10f.dataset.origLineHeight = _0x544fbd(_0x2ba10f, "line-height");
        }
        const _0x211950 = parseFloat(_0x2ba10f.dataset.origSize);
        const _0x58c904 = parseFloat(_0x2ba10f.dataset.origLineHeight);
        const _0x56e95f = _0x211950 + _0x3aa9f7;
        _0x2ba10f.style.fontSize = _0x56e95f + "px";
        if (!isNaN(_0x58c904)) {
          const _0x537f04 = _0x56e95f / _0x211950;
          _0x2ba10f.style.lineHeight = _0x58c904 * _0x537f04 + "px";
        }
      }
      function _0x41d08d(_0x1a0d02) {
        const _0x577573 = _0x1a0d02.querySelectorAll("*[data-orig-size]");
        for (let _0x37884e = 0; _0x37884e < _0x577573.length; _0x37884e++) {
          let _0x4ba328 = _0x577573[_0x37884e];
          _0x4ba328.style.fontSize = _0x4ba328.dataset.origSize;
          _0x4ba328.style.lineHeight = _0x4ba328.dataset.origLineHeight;
        }
        const _0x1ab0e9 = _0x1a0d02.querySelectorAll("[data-is-text-wrapper=\"true\"]");
        for (let _0x5826bf = 0; _0x5826bf < _0x1ab0e9.length; _0x5826bf++) {
          let _0xc4923d = _0x1ab0e9[_0x5826bf];
          const _0x4d9f45 = document.createTextNode(_0xc4923d.textContent);
          _0xc4923d.parentNode.replaceChild(_0x4d9f45, _0xc4923d);
        }
      }
    }
    let _0x35f359;
    if (wdHref.includes("?") && wdHref.includes("&") && localStorage.getItem("lock-" + itemId) === "true") {
      const _0x359d5f = wdHref.split("?")[1].split("&");
      const _0xc87f00 = _0x359d5f.find(_0x42f7c3 => _0x42f7c3.split("=")[0] === "id");
      const _0x31af85 = _0x359d5f.find(_0x49b7c6 => _0x49b7c6.split("=")[0] === "referrer");
      const _0x397111 = _0x31af85 !== undefined ? _0x31af85.split("=")[1] : undefined;
      const _0x2841ab = _0xc87f00 !== undefined ? _0xc87f00.split("=")[1] : undefined;
      const _0x24216e = document.referrer;
      if (_0x2841ab == itemId && (_0x397111 == "facebook" || _0x397111 == "X") && (_0x24216e.includes("facebook.com") || _0x24216e.includes("t.co"))) {
        localStorage.setItem("lock-" + itemId, "false");
        _0x35f359 = "false";
      } else {
        localStorage.setItem("lock-" + itemId, "true");
        _0x35f359 = "true";
      }
    } else {
      _0x35f359 = localStorage.getItem("lock-" + itemId) === "false" ? "false" : (() => {
        localStorage.setItem("lock-" + itemId, "true");
        return "true";
      })();
    }
    const _0x30fa7c = document.querySelector(".hiddenContent");
    if (_0x30fa7c) {
      if (_0x35f359 === "true") {
        const _0x258106 = document.querySelector(".post-body .hiddenContent");
        if (_0x258106) {
          document.querySelectorAll(".post-body .hiddenContent").forEach(_0x1cd9a1 => {
            const _0x37a55e = "https://www.facebook.com/sharer.php?u=" + encodeURIComponent(wdHref + "?id=" + itemId + "&referrer=facebook");
            const _0x469e68 = "https://x.com/intent/post?url=" + encodeURIComponent(wdHref + "?id=" + itemId + "&referrer=X");
            let _0x570675 = `
<h6 class="hdContent-title">
<i class="fa fa-face-hand-peeking" aria-hidden="true"></i>
المحتوى مخفي
</h6>
<span class="hdContent-desc">قم بمشاركة الموضوع وأعد الدخول عبر الرابط المنشور لإظهار المحتوى</span>
<a data-tooltip="مشاركة عبØ± ` + socialNames("facebook") + "\" target=\"blank\" href=\"" + _0x37a55e + "\" class=\"tooltipped hidden-link hidden-link-facebook\">\n<i class=\"fa fa-facebook\"></i>" + socialNames("facebook") + `
</a>
<a data-tooltip="مشاركة عبر ` + socialNames("x-twitter") + "\" target=\"blank\" href=\"" + _0x469e68 + "\" class=\"tooltipped hidden-link hidden-link-X\">\n<i class=\"fa fa-x-twitter\"></i>" + socialNames("x-twitter") + `
</a>
`;
            _0x1cd9a1.style.display = "block";
            _0x1cd9a1.innerHTML = _0x570675;
          });
        }
      } else if (_0x35f359 === "false") {
        document.querySelector(".hiddenContent")?.classList.remove("hiddenContent");
      }
    }
    function _0x54bc82() {
      const _0x3bd9c1 = Array.from(document.querySelectorAll(".post-body *")).concat(Array.from(document.querySelectorAll(".post-body"))).map(_0x295758 => Array.from(_0x295758.childNodes)).flat();
      const _0x41e6d4 = _0x3bd9c1.filter(_0x4286ad => _0x4286ad.nodeType === 8 && _0x4286ad.textContent.startsWith("video") && _0x4286ad.textContent.includes("iframe"));
      _0x41e6d4.forEach(function (_0x74034f) {
        const _0x3480dd = _0x74034f.previousElementSibling || _0x74034f.parentNode;
        window.addEventListener("scroll", _0x1ec510);
        function _0x1ec510() {
          if (window.scrollY >= _0x3480dd.getBoundingClientRect().top - 500) {
            _0x425d44(_0x74034f);
            window.removeEventListener("scroll", _0x1ec510);
          }
        }
      });
      function _0x425d44(_0x2ff4c1) {
        const _0x9d9824 = document.createElement("div");
        _0x9d9824.classList.add("video-wrapper");
        _0x9d9824.innerHTML = _0x2ff4c1.textContent.replace("video", "").trim();
        _0x2ff4c1.after(_0x9d9824);
        _0x2ff4c1.remove();
      }
    }
    if (document.querySelectorAll(".post-body pre").length !== 0) {
      getScript("https://cdn.jsdelivr.net/gh/ahmedsufian12/template-codes@main/assets/prism.min.js", function () {
        const _0x300ee9 = document.querySelectorAll(".iscodi-pre");
        for (let _0x48bfa8 = 0; _0x48bfa8 < _0x300ee9.length; _0x48bfa8++) {
          const _0x1133c6 = _0x300ee9[_0x48bfa8];
          const _0x3a531e = _0x1133c6.querySelector(".code-header");
          const _0x125d78 = _0x1133c6.querySelector("code");
          if (!_0x3a531e || !_0x125d78) {
            continue;
          }
          const _0x1bd2f8 = "copycode-" + _0x48bfa8;
          if (!_0x3a531e.querySelector(".copycode-btn")) {
            _0x125d78.id = _0x1bd2f8;
            _0x3a531e.insertAdjacentHTML("beforeend", "\n<button class=\"copycode-btn snackbar-btn waves-effect tooltipped\" data-duration=\"2000\" data-message=\"" + Msg.copyToClipboard + "\" data-type=\"success\" data-tooltip=\"" + Msg.copyToClipboard + "\" type=\"button\" aria-label=\"Copy Code\" data-target=\"" + _0x1bd2f8 + `">
<i class="fa fa-copy"></i>
</button>
`);
          }
          const _0x5cdf89 = _0x1133c6.querySelector(".copycode-btn");
          function _0x4b3578(_0x1b63f7) {
            const _0x219e72 = document.createRange();
            _0x219e72.selectNodeContents(_0x1b63f7);
            const _0xe90a85 = window.getSelection();
            _0xe90a85.removeAllRanges();
            _0xe90a85.addRange(_0x219e72);
          }
          function _0x1d0f0e(_0x349531) {
            navigator.clipboard.writeText(_0x349531.textContent).catch(console.error);
          }
          _0x5cdf89?.addEventListener("click", () => {
            _0x4b3578(_0x125d78);
            _0x1d0f0e(_0x125d78);
          });
          let _0x2be94d = 0;
          _0x125d78.addEventListener("click", () => {
            const _0x2af046 = Date.now();
            if (_0x2af046 - _0x2be94d < 300) {
              _0x4b3578(_0x125d78);
            } else {
              _0x1d0f0e(_0x125d78);
            }
            _0x2be94d = _0x2af046;
          });
        }
      }, "anysc");
    }
    _0x14b0ea();
  }
  function _0x5314a9() {
    const _0x4b0dc3 = document.querySelectorAll(".nextTopic, .prevTopic");
    if (_0x4b0dc3.length === 0) {
      return;
    }
    _0x4b0dc3.forEach(_0x9a4690 => {
      const _0x53b84f = _0x9a4690.classList.contains("prevTopic");
      const _0x47a309 = _0x9a4690.querySelector("meta[name=\"" + (_0x53b84f ? "postOlderHref" : "postNewerHref") + "\"]")?.getAttribute("content");
      const _0x27378e = _0x53b84f ? "المقال السابق" : "المقال التالي";
      const _0x3b2454 = _0x53b84f ? "prev" : "next";
      if (!_0x47a309) {
        return;
      }
      loadFun(_0x47a309, _0x14b070 => {
        const _0x4d526e = new DOMParser().parseFromString(_0x14b070, "text/html");
        const _0x1577d7 = _0x4d526e.querySelector("meta[name=\"postPoster\"]")?.getAttribute("content") || AltImage;
        const _0x4beea2 = _0x4d526e.querySelector("meta[name=\"postTitle\"]")?.getAttribute("content") || "";
        const _0x2e6549 = `
<div class="post-image">
<a class="topic-img image Lazy smimg" href="` + _0x47a309 + "\" title=\"" + _0x4beea2 + "\">\n<img class=\"lazyload\" data-sizes=\"auto\" data-src=\"" + _0x1577d7 + "\" alt=\"" + _0x4beea2 + `"/>
</a>
</div>
<div class="nxpvContent">
<span class="` + _0x3b2454 + "-text\">" + _0x27378e + `</span>
<h3 class="post-title">
<a href="` + _0x47a309 + "\">" + _0x4beea2 + `</a>
</h3>
</div>
`;
        _0x9a4690.insertAdjacentHTML("beforeend", _0x2e6549);
        const _0x5b1b6c = document.querySelector(".nooldposts, .nonewposts");
        if (_0x5b1b6c) {
          _0x5b1b6c.style.display = "flex";
        }
      });
    });
  }
  function _0x3ade91() {
    const _0x3a21e7 = typeof AuthorsInfo !== "undefined" && typeof AuthorName !== "undefined" ? AuthorsInfo.find(_0x47fe6b => _0x47fe6b.name === AuthorName) : null;
    const _0x4f95e3 = _0x3a21e7 ? _0x3a21e7.provided : false;
    const _0x598e93 = _0x3a21e7 && _0x4f95e3 && Object.keys(_0x3a21e7.ADS).length > 0 ? _0x3a21e7.ADS : typeof AuthorsInfo !== "undefined" ? AuthorsInfo : {};
    const _0x25558b = _0x5631f1();
    const _0x4a9fc4 = (_0xb6a870, _0x22bd85 = false, _0x9e4564) => {
      try {
        let _0x1d42d = {};
        const _0x15dd4e = _0x4c7d57 => {
          if (_0x4c7d57 && typeof _0x4c7d57 === "object") {
            Object.keys(_0x4c7d57).forEach(_0x30b97d => {
              if (!_0x1d42d[_0x30b97d]) {
                _0x1d42d[_0x30b97d] = _0x4c7d57[_0x30b97d];
              }
            });
          }
        };
        if (typeof _0x598e93 !== "undefined") {
          _0x15dd4e(_0x598e93);
        }
        if (typeof AuthorsInfo !== "undefined") {
          if (Array.isArray(AuthorsInfo)) {
            AuthorsInfo.forEach(_0x50c204 => _0x15dd4e(_0x50c204));
          } else {
            _0x15dd4e(AuthorsInfo);
          }
        }
        Object.keys(_0x1d42d).filter(_0x5d7151 => {
          return _0xb6a870.some(_0x28398e => {
            if (_0x22bd85) {
              return _0x5d7151 === _0x28398e;
            } else {
              return _0x5d7151.startsWith(_0x28398e);
            }
          });
        }).forEach(_0x2f9357 => {
          try {
            const _0x44327f = _0x2f9357.split("-").pop();
            const _0x17cb50 = _0x1d42d[_0x2f9357];
            if (_0x17cb50 && _0x17cb50.trim() !== "") {
              _0x9e4564(_0x2f9357, _0x17cb50, _0x44327f);
            }
          } catch (_0x4b2279) {
            console.error("Error processing ad key " + _0x2f9357 + ":", _0x4b2279);
          }
        });
      } catch (_0x58e89d) {
        console.error("Error in processKeysWithConditions:", _0x58e89d);
      }
    };
    (() => {
      try {
        if (typeof PagedPost === "undefined" || !PagedPost) {
          _0x4a9fc4(["topic-ad-p-", "topic-ad-h2-", "topic-ad-h3-", "topic-ad-h4-", "topic-ad-bq-"], false, (_0x4f8eea, _0x159921, _0x55cd22) => {
            try {
              const _0x3b24b0 = parseInt(_0x55cd22) - 1;
              const _0xd9749a = _0x4f8eea.includes("-p-") ? "p" : _0x4f8eea.includes("-h2-") ? "h2" : _0x4f8eea.includes("-h3-") ? "h3" : _0x4f8eea.includes("-h4-") ? "h4" : "blockquote";
              const _0x2a80bc = _0x4f8eea.includes("-p-") || _0x4f8eea.includes("-bq-") ? "after" : "before";
              const _0x58dfba = _0x4f8eea.includes("-p-") ? "paragraph-ad ph-" : _0x4f8eea.includes("-h") ? "headline-ad h-" : "blockquote-ad bq-";
              const _0x5353b0 = document.querySelectorAll(".post-body " + _0xd9749a);
              if (_0x5353b0 && _0x5353b0[_0x3b24b0] && _0x5353b0[_0x3b24b0].textContent && _0x5353b0[_0x3b24b0].textContent.trim() !== "") {
                _0x5353b0[_0x3b24b0].appendElements("<div class=\"inside-ad " + _0x58dfba + "ad-" + _0x55cd22 + "\">" + _0x159921 + "</div>", _0x2a80bc);
              }
            } catch (_0x443ceb) {
              console.error("Error inserting content ad " + _0x4f8eea + ":", _0x443ceb);
            }
          });
        }
        _0x4a9fc4(["top-ad", "mid-ad", "bot-ad", "str-ad", "divider-ad", "rlt-ad", "cmt-ad", "end-ad", "spc-ad"], true, (_0x3e8ff8, _0x5c36a6, _0x194d94) => {
          try {
            if (_0x3e8ff8 === "spc-ad") {
              const _0x2f2cd9 = Array.from(document.querySelectorAll(".post-body *")).find(_0x595386 => _0x595386.textContent && _0x595386.textContent.trim() === "$$");
              if (_0x2f2cd9) {
                _0x2f2cd9.outerHTML = "<div class=\"spc-ad\"></div>";
                const _0x7c8faf = document.querySelectorAll(".spc-ad");
                if (_0x7c8faf.length > 0) {
                  _0x7c8faf.forEach(_0x5c2279 => {
                    _0x5c2279.appendElements(_0x5c36a6, "append");
                  });
                }
              }
              return;
            }
            if (typeof PagedPost !== "undefined" && PagedPost && _0x3e8ff8 === "divider-ad") {
              const _0x1644c3 = document.querySelector(".post-pages");
              if (_0x1644c3) {
                _0x1644c3.insertAdjacentHTML("afterend", "<div class=\"article-ad divider-ad\"></div>");
                const _0x1c7eec = document.querySelector(".divider-ad");
                if (_0x1c7eec) {
                  _0x1c7eec.appendElements(_0x5c36a6, "append");
                }
              }
              return;
            }
            if ((typeof PagedPost === "undefined" || !PagedPost) && _0x3e8ff8 === "mid-ad" && _0x25558b) {
              _0x25558b.appendElements("<div class=\"Middle-Ad\">" + _0x5c36a6 + "</div>", "after");
              return;
            }
            const _0x5a527f = {
              "str-ad": ".str-ad",
              "top-ad": ".top-ad",
              "bot-ad": ".bot-ad",
              "rlt-ad": ".rlt-ad",
              "cmt-ad": ".cmt-ad",
              "end-ad": ".end-ad"
            };
            const _0x2c16fb = _0x5a527f[_0x3e8ff8];
            if (_0x2c16fb) {
              const _0x1cab76 = document.querySelector(_0x2c16fb);
              if (_0x1cab76) {
                _0x1cab76.appendElements(_0x5c36a6, "append");
              }
            }
          } catch (_0x1606a3) {
            console.error("Error processing static ad " + _0x3e8ff8 + ":", _0x1606a3);
          }
        });
        // TOLOOK
        setTimeout(() => {
          try {
            const _0x365492 = document.querySelectorAll("ins.adsbygoogle:empty");
            if (_0x365492.length > 0) {
              _0x365492.forEach((_0x4fe8f2, _0x38a681) => {
                try {
                  if (!_0x4fe8f2.dataset.adsbygoogleStatus && !_0x4fe8f2.dataset.adLoaded) {
                    _0x4fe8f2.dataset.adLoaded = "processing";
                    (window.adsbygoogle = window.adsbygoogle || []).push({});
                  }
                } catch (_0x45d90f) {
                  console.error("Error loading empty ad " + _0x38a681 + ":", _0x45d90f);
                }
              });
            }
          } catch (_0x2081ce) {
            console.error("Error processing empty Google ads:", _0x2081ce);
          }
        }, 1500);
      } catch (_0x10e65d) {
        console.error("Critical error in ad loading system:", _0x10e65d);
      }
    })();
    // TOLOOK
    setTimeout(() => {
      _0x1a5db6();
    }, 3000);
    if (_0x3a21e7 && _0x4f95e3) {
      _0x27c1de("<div id=\"authors-page\"></div>", "link", null, (_0x22b018, _0xe9a6fc) => {
        if (_0x22b018 === null) {
          const _0x328ee5 = document.querySelector(".authorDesc");
          if (_0xe9a6fc !== "" && _0x328ee5) {
            _0x328ee5.insertAdjacentHTML("beforeend", "<a class=\"author-profile\" title=\"" + AuthorName + " profile\" href=\"" + _0xe9a6fc + "?name=" + encodeURI(AuthorName) + "\">الملف الشخصي</a>");
          }
        }
      });
      const _0x372f1c = document.querySelector(".topic-author .rank");
      if (_0x3a21e7.rank && _0x372f1c) {
        _0x372f1c.innerHTML = _0x3a21e7.rank;
      }
      const _0x3b6bc = document.querySelector(".topic-author .author-about");
      if (_0x3b6bc) {
        _0x3b6bc.innerHTML = _0x3a21e7.about || "";
      }
      const _0x54c3ec = document.querySelector(".topic-author .social");
      if (_0x54c3ec && _0x3a21e7.links) {
        Object.keys(_0x3a21e7.links).forEach(_0xc32277 => {
          const _0x5eebc6 = "<li><a target='_blank' aria-label='" + _0xc32277 + "' class='" + _0xc32277 + " tooltipped' href='" + _0x3a21e7.links[_0xc32277] + "' data-tooltip='" + socialNames(_0xc32277) + "'><i class='fa fa-" + _0xc32277 + "'></i></a></li>";
          _0x54c3ec.insertAdjacentHTML("beforeend", _0x5eebc6);
        });
      }
      const _0x58ed6b = document.querySelector(".topic-author");
      if (_0x58ed6b) {
        _0x58ed6b.style.display = "grid";
      }
    }
  }
  function _0x14b0ea() {
    const _0x5a573d = typeof AllowNew !== "undefined" ? AllowNew : false;
    const _0x2b09f5 = typeof AllowComments !== "undefined" ? AllowComments : false;
    const _0x173d8d = document.getElementById("item-comments");
    let _0x286693 = false;
    if (_0x2b09f5) {
      let _0xd90d64 = false;
      if (HideDefComments) {
        _0x173d8d.style.display = "none";
        const _0x19c997 = document.createElement("button");
        _0x19c997.classList.add("toggle-comments");
        _0x19c997.textContent = Msg.postAComment;
        _0x19c997.onclick = _0x33578c;
        _0x173d8d.parentNode.insertBefore(_0x19c997, _0x173d8d);
      } else {
        window.addEventListener("scroll", () => {
          if (!_0xd90d64 && window.scrollY > _0x173d8d.getBoundingClientRect().top - 500) {
            _0xd90d64 = true;
            _0x33578c();
          }
        });
      }
    } else {
      if (_0x173d8d) {
        _0x173d8d.remove();
      }
      return;
    }
    function _0x33578c() {
      if (HideDefComments) {
        if (_0x173d8d.offsetParent) {
          _0x173d8d.slideUp();
        } else {
          _0x173d8d.slideDown(300, "block");
        }
      }
      if (_0x286693) {
        return;
      }
      _0x286693 = true;
      CR.platformComm.forEach((_0x1d1b97, _0x3833ff) => {
        let _0x5254d6 = "<li class=\"list-tab\" role=\"tab\" tabindex=\"" + _0x3833ff + "\">";
        if (_0x1d1b97 === "blogger") {
          _0x5254d6 += "<button data-bar='blogger' type='button'><span class='nm-tab'>" + (BlogDirection === "rtl" ? Msg.comments + " Blogger" : "Blogger " + Msg.comments) + "</span></button>";
          const _0x3fe947 = document.querySelector(".comments-tabs");
          const _0x29d134 = document.createElement("li");
          _0x29d134.className = "blogger-content";
          _0x29d134.setAttribute("role", "tabpanel");
          _0x3fe947.appendChild(_0x29d134);
          const _0x1c1ce5 = document.querySelector("div.comments#comments");
          _0x29d134.appendChild(_0x1c1ce5);
        } else if (_0x1d1b97 === "facebook") {
          _0x5254d6 += "<button onclick='load_facebook()' data-bar='facebook' type='button'><span class='nm-tab'>" + (BlogDirection === "rtl" ? Msg.comments + " Facebook" : "Facebook " + Msg.comments) + "</span></button>";
          const _0x4132a0 = document.querySelector(".comments-tabs");
          const _0x411473 = document.createElement("li");
          _0x411473.className = "facebook-content";
          _0x411473.setAttribute("role", "tabpanel");
          _0x411473.innerHTML = "<div class='fb-comments' data-href='" + CanUrl + "' data-width='100%' data-numposts='5'></div>";
          _0x4132a0.appendChild(_0x411473);
        } else if (_0x1d1b97 === "disqus") {
          _0x5254d6 += "<button onclick='load_disqus()' data-bar='disqus' type='button'><span class='nm-tab'>" + (BlogDirection === "rtl" ? Msg.comments + " Disqus" : "Disqus " + Msg.comments) + "</span></button>";
          const _0x222383 = document.querySelector(".comments-tabs");
          const _0xade9d7 = document.createElement("li");
          _0xade9d7.className = "disqus-content";
          _0xade9d7.setAttribute("role", "tabpanel");
          _0xade9d7.innerHTML = "<div id='disqus_thread'></div>";
          _0x222383.appendChild(_0xade9d7);
        }
        _0x5254d6 += "</li>";
        const _0x26086c = document.getElementById("HTML7");
        if (_0x26086c) {
          const _0x4cd67c = document.querySelector(".commentsType");
          if (_0x4cd67c.textContent !== "blogger" && _0x4cd67c.textContent !== "facebook[" + CR.fbId + "]" && _0x4cd67c.textContent !== "disqus[" + CR.disId + "]") {
            document.querySelector(".comments-bar").insertAdjacentHTML("beforeend", _0x5254d6);
          }
        } else {
          document.querySelector(".comments-bar").classList.add("hide");
        }
      });
      const _0x353fe4 = document.querySelectorAll(".comments-bar .list-tab button[data-bar]");
      const _0x499abe = document.querySelectorAll(".comments-tabs > li");
      if (_0x353fe4.length) {
        _0x353fe4[0].classList.add("active");
        const _0xab9353 = _0x353fe4[0].dataset.bar;
        document.querySelector(".comments-tabs ." + _0xab9353 + "-content")?.classList.add("active");
        document.addEventListener("click", function (_0xc69e9c) {
          const _0x136605 = _0xc69e9c.target.closest("button[data-bar]");
          if (!_0x136605) {
            return;
          }
          _0x353fe4.forEach(_0x201d4a => _0x201d4a.classList.remove("active"));
          _0x136605.classList.add("active");
          const _0x40b684 = _0x136605.dataset.bar;
          _0x499abe.forEach(_0x2ab64d => _0x2ab64d.classList.remove("active"));
          document.querySelector(".comments-tabs ." + _0x40b684 + "-content")?.classList.add("active");
          console.clear();
        });
      } else {
        _0x499abe[0]?.classList.add("active");
      }
      if (!CR.platformComm.includes("blogger")) {
        const _0x57df57 = document.querySelector("#comments.comments");
        if (_0x57df57) {
          _0x57df57.remove();
        }
      } else {
        _0x478812();
      }
      const _0x54fa56 = document.querySelector(".commentsType");
      if (_0x54fa56) {
        if (_0x54fa56.textContent === "facebook[" + CR.fbId + "]" || document.querySelector(".comments-bar button") && document.querySelectorAll(".comments-bar button")[0].getAttribute("data-bar") === "facebook") {
          load_facebook();
        } else if (_0x54fa56.textContent === "disqus[" + CR.disId + "]" || document.querySelector(".comments-bar button") && document.querySelectorAll(".comments-bar button")[0].getAttribute("data-bar") === "disqus") {
          load_disqus();
        }
      }
      function _0x478812() {
        if (_0x5a573d) {
          document.querySelector("#item-comments").addEventListener("click", _0x18ef5e => {
            if (_0x18ef5e.target && _0x18ef5e.target.classList.contains("comment-reply")) {
              const _0x448578 = _0x18ef5e.target;
              const _0x28e7d3 = _0x448578.getAttribute("data-comment-id");
              const _0x1d7968 = document.querySelector("#comment-editor");
              _0x448578.closest(".comment").appendChild(_0x1d7968);
              _0x1d7968.src = _0x1d7968.src + "&parentID=" + _0x28e7d3;
            }
          });
        } else {
          const _0x3696f8 = document.querySelectorAll(".comment-reply");
          if (_0x3696f8.length) {
            _0x3696f8.forEach(_0x57693f => _0x57693f.remove());
          }
        }
        function _0x1d9d5f(_0x431969) {
          if (!NovidOrPhotoComments) {
            _0x431969.innerHTML = _0x431969.innerHTML.replace(/(https?:\/\/[^\s]+)/g, _0x1d1957 => {
              const _0x36e051 = /\.(jpeg|webp|jpg|gif|png)(\?[^\s]*)?$/i.test(_0x1d1957);
              const _0x82e41b = /https:\/\/(?:[0-4]\.)?bp\.blogspot\.com[^\s]*/.test(_0x1d1957) || /https:\/\/(?:lh[3-6]\.)?googleusercontent\.com[^\s]*/.test(_0x1d1957) || /https:\/\/blogger\.googleusercontent\.com[^\s]*/.test(_0x1d1957);
              if (_0x36e051 || _0x82e41b) {
                return "<div class='post-image'><div class='image'><img title='comment photo' alt='comment photo' src='" + _0x1d1957 + "'/></div></div>";
              }
              return _0x1d1957;
            });
            _0x431969.innerHTML = _0x431969.innerHTML.replace(/(https:\/\/)(www.youtube|youtube|youtu)(.com\/|.be\/).+?(\s|<br.*?>|$)/g, _0x283fe5 => {
              if (_0x283fe5.includes("watch?v")) {
                _0x283fe5 = _0x283fe5.replace("watch?v=", "embed/");
              }
              if (_0x283fe5.includes("youtu.be")) {
                _0x283fe5 = "https://www.youtube.com/embed/" + _0x283fe5.split("be/")[1];
              }
              if (_0x283fe5.includes("&amp;")) {
                return _0x283fe5.replace("&amp;", "?");
              } else {
                return "<iframe title='youtube video' src='" + _0x283fe5 + "'></iframe>";
              }
            });
          }
          const _0xa2edcc = _0x1d5af3 => {
            const _0x56a4fa = document.createElement("textarea");
            _0x56a4fa.innerHTML = _0x1d5af3;
            return _0x56a4fa.value;
          };
          const _0x6980ae = _0xa2edcc(_0x431969.innerHTML);
          _0x431969.innerHTML = _0x6980ae.replace(/(https?:\/\/[^\s<>"']+)/g, function (_0x5c3494) {
            const _0x35f036 = new RegExp("<a[^>]*?href=[\"']" + _0x5c3494 + "[\"'][^>]*?>", "i").test(_0x6980ae);
            if (_0x35f036) {
              return _0x5c3494;
            }
            if (/\.(jpeg|jpg|webp|gif|png)(\?[^\s]*)?$/i.test(_0x5c3494) || /https:\/\/(?:[0-4]\.)?bp\.blogspot\.com[^\s]*/.test(_0x5c3494) || /https:\/\/(?:lh\d?\.)?googleusercontent\.com[^\s]*/.test(_0x5c3494) || /https:\/\/blogger\.googleusercontent\.com[^\s]*/.test(_0x5c3494) || /https:\/\/(?:www\.)?(youtube\.com\/embed\/|youtu\.be\/)[^\s<]+/.test(_0x5c3494)) {
              return _0x5c3494;
            }
            return "<a class=\"iscodilink\" href=\"" + _0x5c3494 + "\" rel=\"nofollow noreferrer noopener\" target=\"_blank\">" + ExtLink + "</a>";
          });
          const _0x35290e = _0x431969.querySelectorAll("a");
          if (_0x35290e.length) {
            _0x35290e.forEach(_0x3f5400 => {
              if (!_0x3f5400.classList.contains("iscodilink")) {
                _0x3f5400.classList.add("iscodilink");
              }
            });
          }
        }
        function _0x1f2e60(_0x253aa1) {
          console.clear();
          const _0x43bc70 = document.getElementById("loadmore-comments");
          if (_0x253aa1.length < 200 && _0x43bc70) {
            _0x43bc70.remove();
          }
          _0x253aa1.forEach(_0x12a78d => {
            const _0x229a98 = document.querySelector(".comments-list > ul > li.comment:last-of-type");
            const _0x21525d = _0x229a98.outerHTML;
            const _0x2b790f = new DOMParser();
            const _0x3cc66a = _0x2b790f.parseFromString(_0x21525d, "text/html");
            const _0x1bed78 = _0x3cc66a.querySelector("li");
            const _0x4e6bd5 = _0x1bed78.querySelector(".comment-replies ul");
            if (_0x4e6bd5) {
              _0x4e6bd5.innerHTML = "";
            }
            const _0x4926bb = _0x1bed78.querySelector(".avatar-image-container img");
            let _0x28ee86 = _0x12a78d.authorPhoto ? _0x12a78d.authorPhoto.thumbUrl : _0x12a78d.authorAvatarSrc.includes("blank.gif") || _0x12a78d.authorAvatarSrc.includes("rounded.gif") || _0x12a78d.authorAvatarSrc.includes("blogger_logo_round") || _0x12a78d.authorAvatarSrc.includes("img1.blogblog.com") ? AltAuthor : _0x12a78d.authorAvatarSrc;
            _0x28ee86 = _0x12a78d.inReplyTo ? resizeImg(_0x28ee86, 40, 40, true) : resizeImg(_0x28ee86, 72, 72, true);
            _0x1bed78.setAttribute("id", _0x12a78d.anchorName);
            const _0x4584f5 = _0x1bed78.querySelector(".user a");
            _0x4584f5.setAttribute("href", _0x12a78d.authorUrl);
            _0x4584f5.textContent = _0x12a78d.author;
            _0x4926bb.setAttribute("src", _0x28ee86);
            _0x4926bb.setAttribute("alt", _0x12a78d.author + "'s avatar");
            _0x4926bb.setAttribute("title", _0x12a78d.author + "'s avatar");
            const _0x3e0274 = _0x1bed78.querySelector(".com-date");
            _0x3e0274.setAttribute("data-date", _0x12a78d.timestampAbs);
            _0x3e0274.textContent = _0x12a78d.timestamp;
            const _0x5f1960 = _0x1bed78.querySelector(".comment-content");
            _0x5f1960.innerHTML = _0x12a78d.body;
            _0x1d9d5f(_0x5f1960);
            const _0x12ea4e = _0x1bed78.querySelector(".comment-reply");
            _0x12ea4e.setAttribute("data-comment-id", _0x12a78d.id);
            const _0x1f5a6e = _0x1bed78.querySelector(".blog-admin");
            _0x1f5a6e.className = "blog-admin " + _0x12a78d.commentAuthorClass;
            const _0x5914c1 = _0x1bed78.querySelector(".blog-admin a");
            _0x5914c1.setAttribute("href", _0x12a78d.deleteUrl);
            if (_0x12a78d.inReplyTo) {
              const _0xb426e0 = _0x1bed78.querySelector(".comment-reply").parentElement;
              if (_0xb426e0) {
                _0xb426e0.remove();
              }
              let _0x103dd0 = document.querySelector("#c" + _0x12a78d.inReplyTo + " .comment-replies ul");
              if (_0x103dd0) {
                if (_0x103dd0.length) {
                  _0x103dd0 = _0x103dd0[0];
                }
                _0x103dd0.appendChild(_0x1bed78);
              }
            } else if (!document.querySelector("#" + _0x12a78d.anchorName)) {
              document.querySelector(".comments-list > ul").appendChild(_0x1bed78);
            }
          });
        }
        const _0x164c9a = document.querySelectorAll(".comments-show button");
        if (_0x164c9a.length) {
          _0x164c9a.forEach(_0x33f429 => {
            _0x33f429.addEventListener("click", function () {
              const _0x3ec418 = {
                ZKYkf: "list",
                GovOw: ".post",
                ulGlz: ".postSave",
                CYdkX: "filled",
                aDnLY: "comment-editor",
                HynLp: "parentID"
              };
              _0x3ec418.eetTX = "comments-respond";
              const _0x5cd31c = this;
              const _0x1b04b3 = document.querySelectorAll(".comment-replies");
              const _0x151373 = Array.from(_0x5cd31c.parentNode.children).filter(_0x2643fa => _0x2643fa !== _0x5cd31c);
              _0x151373.forEach(_0x4852d0 => _0x4852d0.classList.remove("active"));
              _0x5cd31c.classList.add("active");
              if (_0x5cd31c.classList.contains("comments-only")) {
                _0x1b04b3.forEach(_0x471618 => {
                  _0x471618.slideUp(300);
                });
              } else {
                _0x1b04b3.forEach(_0x2850ae => {
                  _0x2850ae.slideDown(300, "block");
                });
              }
            });
          });
        }
        if (_0x5a573d && (document.getElementById("HTML7") && document.querySelector(".commentsType").textContent.includes("blogger") || document.querySelectorAll("#HTML7").length === 0)) {
          const _0x59d39c = document.querySelector(".go-respond");
          if (_0x59d39c) {
            _0x59d39c.addEventListener("click", () => {
              const _0x3b54a5 = document.getElementById("comment-editor");
              if (_0x3b54a5.src.includes("parentID")) {
                _0x3b54a5.src = _0x3b54a5.src.replace(/\&parent.*/, "");
                document.getElementById("comments-respond").appendChild(_0x3b54a5);
              }
            });
          }
        }
        const _0x374d42 = document.querySelectorAll(".noimg");
        if (_0x374d42.length) {
          _0x374d42.forEach(_0xe093b7 => {
            const _0x1802f8 = document.createElement("img");
            _0x1802f8.setAttribute("title", "user avatar");
            _0x1802f8.setAttribute("alt", "user avatar");
            _0x1802f8.dataset.sizes = "auto";
            _0x1802f8.classList = "lazyload";
            _0x1802f8.setAttribute("data-src", AltAuthor);
            _0xe093b7.parentNode.insertBefore(_0x1802f8, _0xe093b7.nextSibling);
            _0xe093b7.remove();
          });
        }
        const _0x1b58a3 = document.querySelectorAll(".comment-content");
        if (_0x1b58a3.length) {
          _0x1b58a3.forEach(_0x1cd955 => {
            _0x1d9d5f(_0x1cd955);
          });
        }
        const _0x70cd19 = document.getElementById("loadmore-comments");
        if (_0x70cd19) {
          _0x70cd19.addEventListener("click", function () {
            _WidgetManager._HandleControllerResult = function (_0x2a3b30, _0x1490e9, _0x15a56e) {
              _0x1f2e60(_0x15a56e.comments);
            };
            const _0x1373f7 = document.querySelectorAll(".com-date");
            const _0x21143e = _0x1373f7[_0x1373f7.length - 1].getAttribute("data-date");
            const _0x5bbbdc = location.pathname + "?action=getComments&widgetId=Blog1&widgetType=Blog&responseType=js&postId=" + itemId + "&publishedMin=" + _0x21143e + "&xssi_token=" + window.__wavt;
            getScript(_0x5bbbdc, function () {});
          });
        }
        const _0x20be33 = document.querySelectorAll(".avatar-image-container img");
        if (_0x20be33.length) {
          _0x20be33.forEach(_0x1131f3 => {
            if (_0x1131f3.src.includes("blogger_logo_round") || _0x1131f3.src.includes("blank.gif") || _0x1131f3.src.includes("rounded.gif") || _0x1131f3.src.includes("img1.blogblog.com")) {
              _0x1131f3.src = _0x1131f3.src.replace(/\/img\/.+?\//, "/img/");
            }
          });
        }
        if (_0x5a573d) {
          const _0xca3610 = document.getElementById("comment-editor");
          _0xca3610.src = _0xca3610.getAttribute("data-src");
          const _0x2bb703 = document.querySelector("#comments-respond noscript").textContent;
          const _0x55359e = _0x2bb703.match(/('|\")http.*?\/\/.*?(\'|\")/);
          const _0x5eee9d = _0x55359e[0].replace(/('|\")/g, "");
          getScript(_0x5eee9d, function () {
            BLOG_CMT_createIframe("https://www.blogger.com/rpc_relay.html");
            document.getElementById("comments-respond").appendChild(document.querySelector("#comment-editor"));
          });
        }
      }
    }
  }
  if (isSingleItem) {
    function _0x16fcdd() {
      coloris(document.querySelectorAll(".categories-wrapper .category a"));
    }
    _0x3dfd7b({
      slider: ".categories-wrapper",
      widgetId: "#Label2",
      type: "slider",
      perPage: 4,
      pagination: true,
      arrows: false,
      gap: 20,
      options: [_0x16fcdd]
    });
  }
  if (isHome) {
    if (!ServiceGrid) {
      const _0x530b28 = {
        slider: ".services-wrapper",
        widgetId: "#LinkList3",
        type: "slide",
        perPage: 5,
        pagination: true,
        arrows: false,
        gap: 20,
        options: [_0x158710]
      };
      _0x3dfd7b(_0x530b28);
    } else {
      _0x158710();
    }
  }
  function _0x295a62() {
    if (document.querySelector("#archive-page")) {
      Object.keys(_0x3b86b0).forEach((_0x29baba, _0x31ea65) => {
        const _0x22d550 = _0x3b86b0[_0x29baba];
        const _0x3bcd59 = Math.ceil(_0x22d550 / 150);
        const _0x1bef34 = decodeURI(_0x29baba);
        document.querySelector(".post-body").insertAdjacentHTML("beforeend", "<div class=\"arp-label\" id=\"label-" + _0x31ea65 + "\"><div class=\"arp-label-name\"><b class=\"arp-b\">" + _0x1bef34 + "</b><span class=\"arp-label-count\">" + _0x22d550 + " <u>مشاركة</u></span></div></div>");
        if (FeedEnabled && !isPrivate) {
          _0x133ff3(_0x31ea65, 0, _0x1bef34, _0x3bcd59);
        } else {
          document.querySelector("#archive-page").innerHTML = _0x4a2413[1];
        }
      });
      function _0x133ff3(_0x51206b, _0x332b5c, _0x3b9f8d, _0x4a7866) {
        fetchData(BlogUrl + "feeds/posts/summary/-/" + encodeURIComponent(_0x3b9f8d) + "?alt=json&max-results=150&start-index=" + (_0x332b5c * 150 + 1), () => {
          if (!document.querySelector("#archive-page").querySelector(".posts-loading")) {
            document.querySelector("#archive-page").insertAdjacentHTML("afterbegin", "<span class=\"posts-loading\"><i class=\"LoaderCall an-up\"></i></span>");
          }
        }, _0x4221af => {
          const _0x4c39e9 = {
            cVmAk: "3|5|4|1|2|0"
          };
          _0x4c39e9.KJpyR = "beforeend";
          _0x4c39e9.ujJIS = ".redContent";
          _0x4221af.feed.entry.forEach(_0x4cb480 => {
            if (!_0x4cb480.app$control) {
              const _0x22e35d = _0x5136a1(_0x4cb480);
              let _0x33a1a4 = "";
              _0x33a1a4 += "<div class=\"arp-item\">";
              _0x33a1a4 += "<div class=\"post-image\">";
              _0x33a1a4 += "<a class=\"image\" href=\"" + _0x22e35d.Link + "\" title=\"" + _0x22e35d.Title + "\">";
              _0x33a1a4 += "<img class=\"arp-thumb\" src=\"" + resizeImg(_0x22e35d.ImgUrl, 85, 85, true) + "\"/>";
              _0x33a1a4 += "</a>";
              _0x33a1a4 += "</div>";
              _0x33a1a4 += "<div class=\"arp-info\">";
              _0x33a1a4 += "<span class=\"arp-date\">" + _0x22e35d.Date + "</span>";
              if (_0x4cb480.category[1] !== undefined) {
                _0x33a1a4 += "<span class=\"arp-cate\">" + _0x4cb480.category.filter(_0x426439 => _0x426439.term != _0x3b9f8d)[0].term + "</span>";
              }
              _0x33a1a4 += "<a class=\"arp-link\" href=\"" + _0x22e35d.Link + "\">" + _0x22e35d.Title + "</a>";
              _0x33a1a4 += "</div>";
              _0x33a1a4 += "</div>";
              document.querySelector("#label-" + _0x51206b).insertAdjacentHTML("beforeend", _0x33a1a4);
              const _0x3eb029 = document.querySelector("#archive-page .posts-loading");
              if (document.querySelector("#archive-page") && _0x3eb029) {
                _0x3eb029.remove();
              }
              const _0x5dffc0 = document.querySelector("#archive-page");
              if (_0x5dffc0) {
                _0x5dffc0.remove();
              }
            }
          });
          _0x332b5c = _0x332b5c + 1;
          if (_0x332b5c != _0x4a7866) {
            _0x133ff3(_0x51206b, _0x332b5c, _0x3b9f8d, _0x4a7866);
          }
        }, () => {
          document.querySelector("#archive-page").innerHTML = _0x4a2413[0];
        });
      }
    }
    document.querySelectorAll(".arp-label").forEach(_0x418d9b => {
      _0x418d9b.fadeIn(300, "block");
    });
  }
  function _0xe7904c() {
    if (document.querySelector("#authors-page")) {
      const _0x168bc5 = new URLSearchParams(location.search);
      if (_0x168bc5.get("name")) {
        window.Aup_Posts_Content = "";
        window.Aup_Name = decodeURI(_0x168bc5.get("name")).replace(/\+/g, " ");
        window.Aup_Info = AuthorsInfo.filter(_0x5a24f2 => _0x5a24f2.name === Aup_Name)[0];
        if (!window.Aup_Info) {
          return;
        }
        window.Aup_avatar = Aup_Info.avatar || AltAuthor;
        Aup_avatar = resizeImg(Aup_avatar, 160, 160, true);
        document.title = Aup_Name;
        let _0x1b2086 = `
<div class="aup-wrapper">
<fieldset class="an-up">
` + (Aup_Info && Aup_Info.rank ? "<legend class=\"aup-title\">" + Aup_Info.rank + "</legend>" : "") + `
<div class="aup-head">
<div class="aup-photo" style="background-image:url(` + Aup_avatar + `)"></div>
</div>
<h1 class="aup-name">` + Aup_Name + "</h1>\n" + (Aup_Info && Aup_Info.about ? "<p class=\"aup-about\">" + Aup_Info.about + "</p>" : "") + "\n" + (Aup_Info && Aup_Info.links ? "<ul class=\"aup-social social byPost\"></ul>" : "") + "\n" + (Aup_Info && Aup_Info.SKILLS ? "<span class=\"skills-title-wrap\"><b class=\"aup-skills-title\">مهاراتي</b></span>" : "") + "\n" + (Aup_Info && Aup_Info.SKILLS ? "<ul class=\"aup-skills byPost\"></ul>" : "") + `
</fieldset>
<div class="aup-posts" role="feed"></div>
</div>
`;
        const _0x2b4ce8 = document.querySelector(".post-body");
        if (_0x2b4ce8) {
          _0x2b4ce8.innerHTML = _0x1b2086;
        }
        if (Aup_Info) {
          if (Aup_Info.SKILLS) {
            const _0x3ba5c7 = document.querySelector(".aup-skills");
            if (_0x3ba5c7) {
              for (const _0x338d07 in Aup_Info.SKILLS) {
                const _0x579642 = _0x338d07.split("-")[1];
                const _0x1e445e = "<li><span class=\"skill-name\">" + _0x579642 + "</span><div class=\"skill-wrap\"><span class=\"bar-wrap\"><span class=\"skill-bar\"></span></span><span class=\"skill-value\"></span></div></li>";
                _0x3ba5c7.insertAdjacentHTML("beforeend", _0x1e445e);
              }
            }
            document.querySelectorAll(".aup-skills li").forEach((_0x58cdb8, _0x877813) => {
              const _0x2b606d = Aup_Info.SKILLS[Object.keys(Aup_Info.SKILLS)[_0x877813]];
              const _0x2cb91e = _0x58cdb8.querySelector(".skill-bar");
              const _0xf116d = _0x58cdb8.querySelector(".skill-value");
              const _0x327890 = BlogDirection === "rtl" ? "right" : "left";
              const _0x45e6f9 = BlogDirection === "rtl" ? "left" : "right";
              let _0x84ca82;
              let _0x1c2fff;
              let _0x6c4cf6;
              if (_0x2b606d <= 30) {
                _0x84ca82 = "linear-gradient(to " + _0x45e6f9 + ", #910606, red)";
                _0x1c2fff = "red";
                _0x6c4cf6 = "rgb(255 0 0 / 18%)";
              } else if (_0x2b606d <= 50) {
                _0x84ca82 = "linear-gradient(to " + _0x45e6f9 + ", orange, #ffd270)";
                _0x1c2fff = "orange";
                _0x6c4cf6 = "rgb(255 129 0 / 18%)";
              } else if (_0x2b606d <= 80) {
                _0x84ca82 = "linear-gradient(to " + _0x45e6f9 + ", rgb(255, 79, 0), rgb(255 129 0))";
                _0x1c2fff = "rgb(255, 79, 0)";
                _0x6c4cf6 = "rgb(255 79 0 / 18%)";
              } else {
                _0x84ca82 = "linear-gradient(to " + _0x45e6f9 + ", green, #26d726)";
                _0x1c2fff = "green";
                _0x6c4cf6 = "rgb(0 128 0 / 18%)";
              }
              if (_0x2cb91e) {
                _0x2cb91e.style.background = _0x84ca82;
              }
              if (_0x2cb91e && _0x2cb91e.parentElement) {
                _0x2cb91e.parentElement.style.background = _0x6c4cf6;
              }
              if (_0xf116d) {
                _0xf116d.style.color = _0x1c2fff;
              }
              let _0x16ebb4 = 0;
              const _0x412550 = // TOLOOK
              setInterval(() => {
                if (_0x16ebb4 >= _0x2b606d) {
                  clearInterval(_0x412550);
                } else {
                  _0x16ebb4++;
                  if (_0x2cb91e) {
                    _0x2cb91e.style.width = _0x16ebb4 + "%";
                  }
                  if (_0xf116d) {
                    _0xf116d.style[_0x327890] = "auto";
                    _0xf116d.style[_0x45e6f9] = 100 - _0x16ebb4 + "%";
                    _0xf116d.textContent = _0x16ebb4 + "%";
                  }
                }
              }, 20);
            });
          }
          if (Aup_Info.links && Object.keys(Aup_Info.links).length > 0) {
            const _0x22f6ea = document.querySelector(".aup-social");
            if (_0x22f6ea) {
              for (const _0x476da9 in Aup_Info.links) {
                const _0x34cb18 = "<li><a class=\"" + _0x476da9 + " tooltipped\" href=\"" + Aup_Info.links[_0x476da9] + "\" target=\"_blank\" rel=\"nofollow\" data-tooltip=\"" + socialNames(_0x476da9) + "\"><i class=\"fa fa-" + _0x476da9 + "\"></i></a></li>";
                _0x22f6ea.insertAdjacentHTML("beforeend", _0x34cb18);
              }
            }
          }
        }
        const _0x307f97 = document.querySelector(".aup-posts");
        if (FeedEnabled && !isPrivate) {
          _0x2e52bc();
        } else if (_0x307f97) {
          _0x307f97.innerHTML = _0x4a2413[1];
        }
      } else {
        const _0x1fe16f = document.querySelector("#authors-page");
        if (FeedEnabled && !isPrivate) {
          _0xe95014();
        } else if (_0x1fe16f) {
          _0x1fe16f.innerHTML = _0x4a2413[1];
        }
      }
    }
  }
  function _0xe95014() {
    if (_0x38b4e0 === feed_count) {
      const _0x4d9b36 = document.querySelector(".post-body");
      if (_0x4d9b36) {
        _0x4d9b36.innerHTML = "<div class=\"blog-authors\"></div>";
      }
      const _0x48e08f = document.querySelector(".blog-authors");
      if (_0x48e08f) {
        AuthorsInfo.forEach(_0xf07ba1 => {
          const _0x16d2d3 = _0xf07ba1.avatar || AltAuthor;
          const _0x372147 = location.pathname + "?name=" + encodeURIComponent(_0xf07ba1.name);
          let _0x423a70 = "\n<div class=\"blog-author-card an-up\" data-blog-author=\"" + _0xf07ba1.name + `">
<div class="blog-author-card-info">
<fieldset>
` + (_0xf07ba1.rank ? "<legend class=\"blog-author-rank\">" + _0xf07ba1.rank + "</legend>" : "") + `
<div class="blog-author-card-info-person">
<div class="blog-author-avatar"><img class="author-ph" src="` + resizeImg(_0x16d2d3, 120, 120, true) + "\" alt=\"" + _0xf07ba1.name + "\"/></div>\n<div class=\"footer-author\"><b class=\"blog-author-count\">" + _0xf07ba1.count + " مشاركة</b><a href=\"" + _0x372147 + `" class="blog-author-link">الملف الشخصي</a></div>
</div>
<div class="blog-author-card-info-about">
<b class="blog-author-name">` + _0xf07ba1.name + "</b>\n" + (_0xf07ba1.SKILLS ? "<b class=\"blog-author-skills-title\">مهاراتي</b>" : "") + "\n" + (_0xf07ba1.SKILLS ? "<ul class=\"blog-author-skills byPost\"></ul>" : "") + "\n" + (_0xf07ba1.links ? "<ul class=\"blog-author-social social byPost\"></ul>" : "") + `
</div>
</fieldset>
</div>
</div>
`;
          _0x48e08f.insertAdjacentHTML("beforeend", _0x423a70);
          if (_0xf07ba1.SKILLS) {
            const _0x20e989 = document.querySelector("[data-blog-author=\"" + _0xf07ba1.name + "\"] .blog-author-skills");
            if (_0x20e989) {
              for (const _0x22d208 in _0xf07ba1.SKILLS) {
                const _0x5c227a = _0x22d208.split("-")[1];
                const _0x2e3de8 = "<li><span class=\"skill-name\">" + _0x5c227a + "</span><div class=\"skill-wrap\"><span class=\"bar-wrap\"><span class=\"skill-bar\"></span></span><span class=\"skill-value\"></span></div></li>";
                _0x20e989.insertAdjacentHTML("beforeend", _0x2e3de8);
              }
            }
            document.querySelectorAll("[data-blog-author=\"" + _0xf07ba1.name + "\"] .blog-author-skills li").forEach((_0x2cec17, _0x19b72c) => {
              const _0x32f287 = _0xf07ba1.SKILLS[Object.keys(_0xf07ba1.SKILLS)[_0x19b72c]];
              const _0x143a43 = _0x2cec17.querySelector(".skill-bar");
              const _0x1d9f84 = _0x2cec17.querySelector(".skill-value");
              const _0x31880a = BlogDirection === "rtl" ? "right" : "left";
              const _0x332460 = BlogDirection === "rtl" ? "left" : "right";
              let _0x1762ab;
              let _0x295731;
              let _0x55472a;
              if (_0x32f287 <= 30) {
                _0x1762ab = "linear-gradient(to " + _0x332460 + ", #910606, red)";
                _0x295731 = "red";
                _0x55472a = "rgb(255 0 0 / 18%)";
              } else if (_0x32f287 <= 50) {
                _0x1762ab = "linear-gradient(to " + _0x332460 + ", orange, #ffd270)";
                _0x295731 = "orange";
                _0x55472a = "rgb(255 129 0 / 18%)";
              } else if (_0x32f287 <= 80) {
                _0x1762ab = "linear-gradient(to " + _0x332460 + ", rgb(255, 79, 0), rgb(255 129 0))";
                _0x295731 = "rgb(255, 79, 0)";
                _0x55472a = "rgb(255 79 0 / 18%)";
              } else {
                _0x1762ab = "linear-gradient(to " + _0x332460 + ", green, #26d726)";
                _0x295731 = "green";
                _0x55472a = "rgb(0 128 0 / 18%)";
              }
              if (_0x143a43) {
                _0x143a43.style.background = _0x1762ab;
              }
              if (_0x143a43 && _0x143a43.parentElement) {
                _0x143a43.parentElement.style.background = _0x55472a;
              }
              if (_0x1d9f84) {
                _0x1d9f84.style.color = _0x295731;
              }
              let _0x469160 = 0;
              const _0x4a1c27 = // TOLOOK
              setInterval(() => {
                if (_0x469160 >= _0x32f287) {
                  clearInterval(_0x4a1c27);
                } else {
                  _0x469160++;
                  if (_0x143a43) {
                    _0x143a43.style.width = _0x469160 + "%";
                  }
                  if (_0x1d9f84) {
                    _0x1d9f84.style[_0x31880a] = "auto";
                    _0x1d9f84.style[_0x332460] = 100 - _0x469160 + "%";
                    _0x1d9f84.textContent = _0x469160 + "%";
                  }
                }
              }, 20);
            });
          }
          if (_0xf07ba1.links) {
            const _0x5731db = document.querySelector("[data-blog-author=\"" + _0xf07ba1.name + "\"] .blog-author-social");
            if (_0x5731db) {
              for (const _0xa3eddb in _0xf07ba1.links) {
                const _0x483f0c = "<li><a class=\"" + _0xa3eddb + " tooltipped\" href=\"" + _0xf07ba1.links[_0xa3eddb] + "\" target=\"_blank\" rel=\"nofollow\" data-tooltip=\"" + socialNames(_0xa3eddb) + "\"><i class=\"fa fa-" + _0xa3eddb + "\"></i></a></li>";
                _0x5731db.insertAdjacentHTML("beforeend", _0x483f0c);
              }
            }
          }
        });
      }
    } else {
      fetchData(BlogUrl + "feeds/posts/summary?alt=json&max-results=150&start-index=" + (_0x38b4e0 * 150 + 1), function () {}, _0x485549 => {
        if (_0x485549 && _0x485549.feed && _0x485549.feed.entry) {
          _0x485549.feed.entry.forEach(_0x37f3ee => {
            const _0x3c4883 = _0x37f3ee.author && _0x37f3ee.author[0] && _0x37f3ee.author[0].name && _0x37f3ee.author[0].name.$t ? _0x37f3ee.author[0].name.$t.toString() : "Unknown Author";
            const _0x5cf3c2 = AuthorsInfo.find(_0x1dd96f => _0x1dd96f.name === _0x3c4883);
            if (_0x5cf3c2) {
              _0x5cf3c2.count += 1;
            } else {
              const _0x11bc6d = {
                name: _0x3c4883,
                avatar: _0x37f3ee.author[0]?.gd$image?.src.includes("rounded.gif") || _0x37f3ee.author[0]?.gd$image?.src.includes("blogger_logo_round") || _0x37f3ee.author[0]?.gd$image?.src.includes("img1.blogblog.com") || _0x37f3ee.author[0]?.gd$image?.src.includes("blank.gif") ? AltAuthor : _0x37f3ee.author[0]?.gd$image?.src,
                count: 1,
                provided: false
              };
              AuthorsInfo.push(_0x11bc6d);
            }
          });
        }
        _0x38b4e0 += 1;
        _0xe95014();
      }, function () {});
    }
  }
  function _0x2e52bc() {
    if (_0x38b4e0 === feed_count) {
      const _0x1001ae = document.querySelectorAll(".timeline-month");
      const _0x23ff4d = document.querySelectorAll(".timeline-item");
      _0x23ff4d.forEach(_0x48a441 => {
        const _0x23164f = _0x48a441.getAttribute("data-month");
        const _0x4c3d8c = Array.from(_0x1001ae).find(_0x4aaa65 => _0x4aaa65.getAttribute("data-month") === _0x23164f);
        if (_0x4c3d8c) {
          _0x4c3d8c.insertAdjacentHTML("beforeend", _0x48a441.outerHTML);
          _0x48a441.remove();
        }
      });
      _0x1001ae.forEach(_0x19ad67 => {
        if (_0x19ad67.querySelector(".timeline-item")) {
          _0x19ad67.querySelectorAll(".timeline-month-name").forEach(_0x50b9bd => {
            _0x50b9bd.classList.remove("hide");
          });
        } else {
          _0x19ad67.remove();
        }
      });
    } else {
      const _0x52587a = document.querySelector(".aup-posts");
      fetchData(BlogUrl + "feeds/posts/summary?alt=json&max-results=150&start-index=" + (_0x38b4e0 * 150 + 1), () => {
        if (_0x52587a && !_0x52587a.querySelector(".posts-loading")) {
          _0x52587a.insertAdjacentHTML("afterbegin", "<span class=\"posts-loading\"><i class=\"LoaderCall an-up\"></i></span>");
        }
      }, _0x373384 => {
        if (_0x373384 && _0x373384.feed && _0x373384.feed.entry) {
          _0x373384.feed.entry.forEach(_0x49fca3 => {
            if (!_0x49fca3.app$control) {
              const _0x6e8aad = _0x5136a1(_0x49fca3);
              if (_0x6e8aad.Author === Aup_Name) {
                const _0xb595b2 = _0x1cbaa4 => {
                  const _0x261e48 = new Date(_0x1cbaa4);
                  return _0x261e48.toLocaleString(BlogLang || "default", {
                    month: "long"
                  });
                };
                const _0x3fb8bd = _0x6e8aad.FullDate.substring(0, 4);
                const _0x20cead = _0xb595b2(_0x6e8aad.FullDate);
                const _0x3606d9 = _0x20cead + " " + _0x3fb8bd;
                Aup_Posts_Content += "\n<div class=\"timeline-month\" data-month=\"" + _0x3606d9 + "\">\n<div class=\"timeline-month-name hide\"><span>" + _0x3606d9 + "</span></div>\n<div class=\"timeline-item an-up\" role=\"article\" data-month=\"" + _0x3606d9 + `">
<div class="timeline-image">
<img class="timeline-thumb" src="` + resizeImg(_0x6e8aad.ImgUrl, 72, 72, true) + `" alt="Post thumbnail"/>
</div>
<span class="timeline-date">
<div class="timeline-image inside">
<img class="timeline-thumb" src="` + resizeImg(_0x6e8aad.ImgUrl, 72, 72, true) + `" alt="Post thumbnail"/>
</div>
` + (timeAgo ? "<b class=\"date-b\">" + langDate(_0x6e8aad.UpDate).split(" ")[0] + "</b>\n<i>" + langDate(_0x6e8aad.UpDate).split(" ").slice(1).join(" ") + "</i>" : "<b>" + _0x6e8aad.FullDate.substring(8, 10) + "</b>\n<i>" + _0x20cead + " " + _0x3fb8bd + "</i>") + `
</span>
<div class="timeline-content">
<a class="timeline-title" href="` + _0x6e8aad.Link + "\" title=\"" + _0x6e8aad.Title + "\">" + _0x6e8aad.Title + "</a>\n<p class=\"timeline-snippet\">" + (_0x6e8aad.Snippet ? _0x6e8aad.Snippet.substring(0, 120) : "") + `...</p>
</div>
</div>
</div>
`;
              }
            }
          });
        }
        if (_0x52587a && Aup_Posts_Content) {
          _0x52587a.insertAdjacentHTML("beforeend", Aup_Posts_Content);
        }
        Aup_Posts_Content = "";
        _0x38b4e0 += 1;
        _0x2e52bc();
        const _0x1bfe09 = _0x52587a ? _0x52587a.querySelector(".posts-loading") : null;
        if (_0x1bfe09) {
          _0x1bfe09.remove();
        }
      }, () => {
        const _0x169835 = document.querySelector(".aup-wrapper");
        if (_0x169835) {
          _0x169835.innerHTML = _0x4a2413[0];
        }
        const _0x879acc = document.querySelector(".aup-posts .posts-loading");
        if (_0x879acc) {
          _0x879acc.remove();
        }
      });
    }
  }
  function _0x4354e6() {
    stred = stred || {};
    const _0x2ba0f0 = stred.wait !== undefined ? stred.wait : "جاري تهيئة الراØ¨Ø·";
    const _0x57e3b4 = stred.ready !== undefined ? stred.ready : "الرابط جاهØ²";
    const _0x596d52 = stred.damged !== undefined ? stred.damged : "الرابط معطÙ„";
    const _0x5dabb5 = stred.autotext !== undefined ? stred.autotext : "جاري إعادة التوجيه التلقاØ¦ÙŠ";
    const _0x5efd7e = stred.timer !== undefined ? stred.timer : 10;
    const _0x598f39 = stred["url-ex"] !== undefined ? stred["url-ex"] : "";
    const _0x120918 = stred.auto !== undefined ? stred.auto : false;
    const _0x1c5643 = stred.inside !== undefined ? stred.inside : false;
    const _0x208bc7 = stred["r-my-domains"] !== undefined ? stred["r-my-domains"] : false;
    class _0x2ea721 {
      constructor() {
        this.seconds = 0;
        this.count = 0;
        this.interval = null;
        this.timerContainer = null;
        this.numberElement = null;
        this.reloadLink = null;
        this.squareContainer = null;
        this.originLink = null;
        this.progressCircle = null;
        this.isWindowFocused = true;
        this.hasStarted = false;
        this.timerHTML = `
<div class="clom radialtimer">
<div class="redNumper"><span class="redNumperContent">` + _0x5efd7e + `</span></div>
<svg class="redirectProgg" width="200" height="200">
<circle class="progress-circle" stroke="var(--key)" r="94" cx="100" cy="100"></circle>
</svg>
</div>
<div class="clom radialbtn">
<div class="square-container">
<div class="square square1">&nbsp;</div>
<div class="square square2">&nbsp;</div>
<div class="square square3">&nbsp;</div>
<div class="square square4">&nbsp;</div>
<div class="square square5">&nbsp;</div>
</div>
<a class="areload disabled waves-effect">` + _0x2ba0f0 + "</a>\n</div>";
        this.bindWindowEvents();
      }
      bindWindowEvents() {
        this.isWindowFocused = document.hasFocus() && !document.hidden;
        window.addEventListener("focus", () => {
          this.isWindowFocused = true;
          if (this.hasStarted && !this.interval && this.count < this.seconds) {
            this.resumeTimer();
          }
        });
        window.addEventListener("blur", () => {
          this.isWindowFocused = false;
          this.pauseTimer();
        });
        document.addEventListener("visibilitychange", () => {
          if (document.hidden) {
            this.isWindowFocused = false;
            this.pauseTimer();
          } else {
            this.isWindowFocused = true;
            if (this.hasStarted && !this.interval && this.count < this.seconds) {
              this.resumeTimer();
            }
          }
        });
        this.focusChecker = // TOLOOK
        setInterval(() => {
          const _0x57c519 = document.hasFocus() && !document.hidden;
          if (_0x57c519 !== this.isWindowFocused) {
            this.isWindowFocused = _0x57c519;
            if (_0x57c519) {
              if (this.hasStarted && !this.interval && this.count < this.seconds) {
                this.resumeTimer();
              }
            } else {
              this.pauseTimer();
            }
          }
        }, 250);
        this.addActivityListeners();
      }
      pauseTimer() {
        if (this.interval) {
          clearInterval(this.interval);
          this.interval = null;
        }
      }
      resumeTimer() {
        if (!this.interval && this.count < this.seconds) {
          this.interval = // TOLOOK
          setInterval(() => this.updateTimer(), 1000);
        }
      }
      updateTimer() {
        this.numberElement.querySelector("span").innerHTML = String(this.seconds - 1 - this.count);
        this.count++;
        if (this.count >= this.seconds) {
          clearInterval(this.interval);
          this.interval = null;
        }
        const _0x29a691 = Math.PI * 2 * this.progressCircle.r.baseVal.value;
        const _0x1bd818 = _0x29a691 - this.count / this.seconds * _0x29a691;
        this.progressCircle.style.strokeDashoffset = "" + _0x1bd818;
        if (this.seconds === this.count) {
          this.ranQuerybtn();
        }
      }
      ranQuerybtn() {
        if (this.originLink && this.originLink !== "null") {
          this.reloadLink.classList.remove("disabled");
          this.reloadLink.classList.add("an-extra");
          this.reloadLink.setAttribute("href", this.originLink);
          this.reloadLink.setAttribute("target", "_blank");
          this.squareContainer.classList.add("hd");
          this.squareContainer.fadeOut(300);
          this.reloadLink.classList.add("vs");
          if (_0x120918) {
            this.getUriDownload(this.originLink);
            this.reloadLink.innerHTML = _0x5dabb5;
          } else {
            this.reloadLink.innerHTML = _0x57e3b4;
          }
        } else {
          this.progressCircle.classList.add("damaged");
          this.reloadLink.innerHTML = _0x596d52;
          this.reloadLink.classList.add("damaged");
          this.reloadLink.classList.remove("disabled");
          this.numberElement.querySelector("span").classList.add("damaged");
          this.numberElement.querySelector("span").textContent = "!";
          this.numberElement.classList.add("damaged");
          this.squareContainer.classList.add("hd");
          this.squareContainer.fadeOut(300);
          this.reloadLink.setAttribute("onclick", "event.preventDefault()");
          this.reloadLink.setAttribute("aria-disabled", "true");
        }
      }
      start() {
        this.seconds = parseInt(_0x5efd7e);
        const _0x3a277f = Math.PI * 2 * this.progressCircle.r.baseVal.value;
        this.progressCircle.style.strokeDasharray = "" + _0x3a277f;
        this.progressCircle.style.strokeDashoffset = "" + _0x3a277f;
        this.count = 0;
        this.hasStarted = true;
        if (this.isWindowFocused) {
          this.interval = // TOLOOK
          setInterval(() => this.updateTimer(), 1000);
        } else {
          this.waitForFocus();
        }
      }
      waitForFocus() {
        const _0x66a74b = () => {
          if (this.isWindowFocused && !this.interval && this.count < this.seconds) {
            this.interval = // TOLOOK
            setInterval(() => this.updateTimer(), 1000);
          } else if (!this.isWindowFocused) {
            // TOLOOK
            setTimeout(_0x66a74b, 100);
          }
        };
        _0x66a74b();
      }
      addActivityListeners() {
        const _0xdc26d6 = ["mousedown", "mousemove", "keypress", "scroll", "touchstart", "click"];
        _0xdc26d6.forEach(_0x402433 => {
          const _0x30f69b = {
            passive: true
          };
          document.addEventListener(_0x402433, () => {
            if (!this.isWindowFocused && document.hasFocus() && !document.hidden) {
              this.isWindowFocused = true;
              if (this.hasStarted && !this.interval && this.count < this.seconds) {
                this.resumeTimer();
              }
            }
          }, _0x30f69b);
        });
      }
      destroy() {
        if (this.interval) {
          clearInterval(this.interval);
        }
        if (this.focusChecker) {
          clearInterval(this.focusChecker);
        }
      }
      getUriDownload(_0x2374f3) {
        if (_0x2374f3) {
          // TOLOOK
          setTimeout(() => {
            window.location.href = _0x2374f3;
          }, 10);
        }
      }
      init(_0x1a1806, _0x13a6e5) {
        this.timerContainer = !_0x1c5643 ? _0x1a1806 : document.querySelector("#modal-red .modalred-content");
        this.originLink = _0x13a6e5;
        const _0x46122e = () => {
          this.numberElement = this.timerContainer.querySelector(".redNumper");
          this.reloadLink = this.timerContainer.querySelector(".areload");
          this.squareContainer = this.timerContainer.querySelector(".square-container");
          this.progressCircle = this.timerContainer.querySelector(".progress-circle");
          if (!_0x1c5643) {
            this.timerContainer.insertAdjacentHTML("beforeend", `
<div class="redirect-info">
<div class="info-item">
<div class="info-icon">
<svg viewBox="0 0 512 512"><path d="M243.5 37.3c8-3.4 17-3.4 25 0l176.7 75c11.3 4.8 18.9 15.5 18.8 27.6c-.5 94-39.4 259.8-195.5 334.5c-7.9 3.8-17.2 3.8-25.1 0C87.3 399.6 48.5 233.8 48 139.8c-.1-12.1 7.5-22.8 18.8-27.6l176.7-75zM281 7.8c-16-6.8-34-6.8-50 0L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L281 7.8zm82.3 195.5c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 297.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l128-128z" fill="currentColor"/></svg>
</div>
<div class="info-text">
<span>الروابط آمنة</span>
<p class="info-snippet">نقوم بفحص جميع الروابط للتأكد من سلامتها قبل التحويل</p>
</div>
</div>
<div class="info-item">
<div class="info-icon">
<svg viewBox="0 0 512 512"><path d="M256 480a224 224 0 1 0 0-448 224 224 0 1 0 0 448zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm24 96a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM224 352a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm-32 0c0-35.3 28.7-64 64-64c17.5 0 33.4 7 44.9 18.4l106.9-64.1c7.6-4.5 17.4-2.1 22 5.5s2.1 17.4-5.5 22L317.4 333.8c1.7 5.8 2.6 11.9 2.6 18.2c0 35.3-28.7 64-64 64s-64-28.7-64-64zM392 144a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM96 232a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm72-88a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" fill="currentColor"/></svg>
</div>
<div class="info-text">
<span>سرعة التحويل</span>
<p class="info-snippet">تمتع بأسرع عملية تحويل مع خوادم عالية الأداء</p>
</div>
</div>
<div class="info-item">
<div class="info-icon">
<svg viewBox="0 0 640 512"><path d="M128 128a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0A128 128 0 1 0 96 128a128 128 0 1 0 256 0zM32 480c1.2-79.7 66.2-144 146.3-144l91.4 0c19.4 0 37.9 3.8 54.9 10.6c-2.2-12.4-3.5-24.3-4.1-35.3c-16.1-4.8-33.1-7.3-50.7-7.3l-91.4 0C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c1.8 0 3.5-.2 5.3-.5c-13.4-9.7-25.1-20.3-35.5-31.5L32 480zm352-178.6L480 263l0 208.4c-73.4-40.5-94.6-117.1-95.9-170zm223.9 0c-1.3 53-22.6 129.5-95.9 170L512 263l95.9 38.4zm-103-75.7c-5.7-2.3-12.1-2.3-17.8 0l-120 48C358 277.4 352 286.2 352 296c0 63.3 25.9 168.8 134.8 214.2c5.9 2.5 12.6 2.5 18.5 0C614.1 464.8 640 359.3 640 296c0-9.8-6-18.6-15.1-22.3l-120-48z" fill="currentColor"/></svg>
</div>
<div class="info-text">
<span>حماية الخصوصية</span>
<p class="info-snippet">نحن لا نتتبع المعلومات الشخصية أثناء التحويل</p>
</div>
</div>
</div>`);
          } else {
            this.timerContainer.querySelector(".redContent").insertAdjacentHTML("beforeend", `
<div class="redirect-info">
<div class="info-item">
<div class="info-icon">
<svg viewBox="0 0 512 512"><path d="M243.5 37.3c8-3.4 17-3.4 25 0l176.7 75c11.3 4.8 18.9 15.5 18.8 27.6c-.5 94-39.4 259.8-195.5 334.5c-7.9 3.8-17.2 3.8-25.1 0C87.3 399.6 48.5 233.8 48 139.8c-.1-12.1 7.5-22.8 18.8-27.6l176.7-75zM281 7.8c-16-6.8-34-6.8-50 0L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L281 7.8zm82.3 195.5c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 297.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l128-128z" fill="currentColor"/></svg>
</div>
<div class="info-text">
<span>الروابط آمنة</span>
<p class="info-snippet">نقوم بفحص جميع الروابط للتأكد من سلامتها قبل التحويل</p>
</div>
</div>
<div class="info-item">
<div class="info-icon">
<svg viewBox="0 0 512 512"><path d="M256 480a224 224 0 1 0 0-448 224 224 0 1 0 0 448zM256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zm24 96a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM224 352a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm-32 0c0-35.3 28.7-64 64-64c17.5 0 33.4 7 44.9 18.4l106.9-64.1c7.6-4.5 17.4-2.1 22 5.5s2.1 17.4-5.5 22L317.4 333.8c1.7 5.8 2.6 11.9 2.6 18.2c0 35.3-28.7 64-64 64s-64-28.7-64-64zM392 144a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM96 232a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm72-88a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" fill="currentColor"/></svg>
</div>
<div class="info-text">
<span>سرعة التحويل</span>
<p class="info-snippet">تمتع بأسرع عملية تحويل مع خوادم عالية الأداء</p>
</div>
</div>
<div class="info-item">
<div class="info-icon">
<svg viewBox="0 0 640 512"><path d="M128 128a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0A128 128 0 1 0 96 128a128 128 0 1 0 256 0zM32 480c1.2-79.7 66.2-144 146.3-144l91.4 0c19.4 0 37.9 3.8 54.9 10.6c-2.2-12.4-3.5-24.3-4.1-35.3c-16.1-4.8-33.1-7.3-50.7-7.3l-91.4 0C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c1.8 0 3.5-.2 5.3-.5c-13.4-9.7-25.1-20.3-35.5-31.5L32 480zm352-178.6L480 263l0 208.4c-73.4-40.5-94.6-117.1-95.9-170zm223.9 0c-1.3 53-22.6 129.5-95.9 170L512 263l95.9 38.4zm-103-75.7c-5.7-2.3-12.1-2.3-17.8 0l-120 48C358 277.4 352 286.2 352 296c0 63.3 25.9 168.8 134.8 214.2c5.9 2.5 12.6 2.5 18.5 0C614.1 464.8 640 359.3 640 296c0-9.8-6-18.6-15.1-22.3l-120-48z" fill="currentColor"/></svg>
</div>
<div class="info-text">
<span>حماية الخصوصية</span>
<p class="info-snippet">نحن لا نتتبع المعلومات الشخصية أثناء التحويل</p>
</div>
</div>
</div>`);
          }
          this.start();
        };
        if (!_0x1c5643) {
          this.timerContainer.innerHTML = this.timerHTML;
          _0x46122e();
        } else {
          _0x27c1de("<div id=\"redirect-page\"></div>", "content", this.timerHTML, (_0x31107f, _0x36ae60, _0x30a685) => {
            if (_0x31107f == null) {
              this.timerContainer.innerHTML = "<div class=\"post-body\">" + _0x36ae60 + "</div>";
              const _0xdc2408 = this.timerContainer.closest(".modal");
              if (_0xdc2408) {
                const _0x3deaf9 = _0xdc2408.querySelector("h2");
                if (_0x3deaf9) {
                  _0x3deaf9.textContent = _0x30a685;
                }
              }
              _0x46122e();
              const _0x31a6da = new DOMParser();
              const _0x5f4e86 = _0x31a6da.parseFromString(_0x36ae60, "text/html");
              _0x5f4e86.querySelectorAll("ins").forEach(() => {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
              });
            }
          });
        }
      }
    }
    if (!_0x1c5643 && document.querySelector("#redirect-page")) {
      const _0x3703ea = _0x8e13b5 => {
        try {
          return new TextDecoder().decode(Uint8Array.from(atob(_0x8e13b5), _0x5c2c94 => _0x5c2c94.charCodeAt(0)));
        } catch (_0x550315) {
          console.error("Failed to decode base64 string:", _0x8e13b5, _0x550315);
          return null;
        }
      };
      const _0x2378e2 = new URLSearchParams(location.search);
      const _0x5885ce = _0x2378e2.get("link");
      let _0x104967 = _0x5885ce ? _0x3703ea(_0x5885ce) : sessionStorage.getItem("link");
      _0x2378e2.delete("link");
      const _0x2d2b6c = _0x2378e2.toString() ? "?" + _0x2378e2.toString() : "";
      sessionStorage.setItem("link", _0x104967);
      history.replaceState("", "", "" + location.origin + location.pathname + _0x2d2b6c);
      const _0x36ce55 = new _0x2ea721();
      _0x36ce55.init(document.querySelector("#redirect-page"), _0x104967);
    }
    const _0x322a34 = document.querySelectorAll(".post-body a[href]:not([href^='https://twitter.com/'],[href^='javascript:'],[href^='#'])");
    if (_0x322a34.length > 0) {
      _0x322a34.forEach(_0x578fef => {
        const _0x4d7f00 = _0x578fef.href;
        if (!_0x4d7f00 || _0x4d7f00 === "javascript:void(0)" || _0x4d7f00.startsWith("#")) {
          return;
        }
        const _0x291288 = new URL(location.href).hostname;
        let _0x275a89 = ["blogger.com", "googleusercontent.com", "bp.blogspot.com", "whatsapp:", "mailto:", "javascript:", "#"];
        if (!_0x208bc7) {
          _0x275a89.push(_0x291288);
        }
        if (_0x598f39) {
          _0x275a89 = _0x275a89.concat(_0x598f39.split("|").map(_0x5e75e6 => _0x5e75e6.trim()).filter(_0x25e92e => _0x25e92e));
        }
        const _0xaed940 = !_0x275a89.some(_0x3b428e => {
          if (!_0x3b428e) {
            return false;
          }
          return _0x4d7f00.includes(_0x3b428e);
        });
        if (_0xaed940 && !_0x578fef.closest(".hiddenContent")) {
          if (_0x1c5643) {
            _0x578fef.removeAttribute("href");
            _0x578fef.setAttribute("data-toggle", "modal-red");
            _0x578fef.classList.add("modal-btn");
            if (_0x578fef.hasAttribute("target")) {
              _0x578fef.removeAttribute("target");
            }
            _0x578fef.onclick = () => {
              const _0x39bd37 = document.getElementById("redirect-page") || document.querySelector("#modal-red .modalred-content");
              const _0x111ce2 = new _0x2ea721();
              _0x111ce2.init(_0x39bd37, _0x4d7f00);
            };
          } else {
            const _0x47a7be = _0x43ebc4 => {
              try {
                return btoa(String.fromCharCode(...new TextEncoder().encode(_0x43ebc4)));
              } catch (_0x3635d2) {
                console.error("Failed to encode to base64:", _0x43ebc4, _0x3635d2);
                return null;
              }
            };
            _0x27c1de("<div id=\"redirect-page\"></div>", "link", null, (_0x5cf6b9, _0x19debe) => {
              if (_0x5cf6b9 == null && _0x19debe !== "") {
                const _0x47fed4 = _0x47a7be(_0x4d7f00);
                if (_0x47fed4) {
                  _0x578fef.href = _0x19debe + "?link=" + _0x47fed4;
                }
              }
            });
          }
        }
      });
    }
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
  function _0x1f892f() {
    if (!_0x1f892f.hasRunOnce) {
      _0x1f892f.hasRunOnce = true;
    } else {
      return;
    }
    const _0x2a6c15 = String.fromCharCode(104, 116, 116, 112, 115, 58, 47, 47, 115, 99, 114, 105, 112, 116, 46, 103, 111, 111, 103, 108, 101, 46, 99, 111, 109, 47, 109, 97, 99, 114, 111, 115, 47, 115, 47, 65, 75, 102, 121, 99, 98, 120, 65, 77, 48, 122, 116, 56, 110, 53, 114, 66, 113, 120, 104, 87, 108, 116, 74, 108, 45, 115, 54, 75, 110, 86, 111, 65, 84, 99, 88, 117, 105, 54, 102, 111, 85, 82, 98, 112, 105, 88, 101, 110, 48, 122, 54, 111, 90, 95, 77, 70, 114, 51, 77, 113, 84, 89, 89, 67, 98, 49, 86, 82, 95, 65, 120, 47, 101, 120, 101, 99);
    const _0x8a3d51 = document.querySelector("[role=\"contentinfo\"]");
    const _0x30dc9d = (_0x38a8f0, _0x8cf5d8, _0x2cc90a) => {
      if (location.host === "web.archive.org") {
        return;
      }
      if (_0x38a8f0 !== false) {
        clearInterval(_0x38a8f0);
      }
      if (!window.location.href.includes("/b/blog-preview")) {
      }
    };
    const _0x3dce11 = (_0xe4d16b, _0x17dbb8) => {
      const _0xdd3e8c = [];
      let _0x58b114 = _0xe4d16b.parentElement;
      while (_0x58b114 && !_0x58b114.matches(_0x17dbb8)) {
        _0xdd3e8c.push(_0x58b114);
        _0x58b114 = _0x58b114.parentElement;
      }
      if (_0x58b114 && _0x58b114.matches(_0x17dbb8)) {
        _0xdd3e8c.push(_0x58b114);
      }
      return _0xdd3e8c;
    };
    const _0x310d0c = _0x1749c8 => {
      if (_0x1749c8) {
        const _0x1d7889 = document.querySelector("#HTML303");
        if (_0x1d7889) {
          _0x1d7889.classList.add("impo");
          _0x3dce11(_0x1d7889, ".container").forEach(_0x24f53a => {
            _0x24f53a.classList.add("impo");
          });
          const _0x8f1bd9 = document.querySelector(".copyrights #HTML303");
          if (_0x8f1bd9) {
            _0x8f1bd9.insertAdjacentHTML("afterbegin", `
<span class="created-using-layers impo">
<a class="impo" 
title="Flaspeed Template" 
rel="nofollow noreferrer" 
href="https://flaspeed.iscodi.com/" 
target="_blank" 
style="display:block;width:35px!important;height:35px!important">
<svg class="ic-flaspeed" viewBox="0 0 375 374.999991"><path d="M 88.816406 308.402344 C 88.816406 233.679688 149.390625 173.105469 224.113281 173.105469 L 224.113281 223.988281 C 177.492188 223.988281 139.699219 261.78125 139.699219 308.398438 L 88.816406 308.398438 Z M 88.816406 308.402344" fill="var(--key)"></path><path d="M 88.816406 308.402344 C 88.816406 233.679688 149.390625 173.105469 224.113281 173.105469 L 224.113281 223.988281 C 177.492188 223.988281 139.699219 261.78125 139.699219 308.398438 L 88.816406 308.398438 Z M 88.816406 308.402344" fill="var(--key)"></path><path d="M 152.929688 181.863281 L 152.929688 142.3125 C 152.929688 128.535156 164.203125 117.261719 177.980469 117.261719 L 286.003906 117.261719 L 286.003906 66.378906 L 167.027344 66.378906 C 165.722656 66.378906 164.425781 66.414062 163.132812 66.480469 L 91.09375 66.480469 L 91.09375 181.863281 Z M 152.929688 181.863281" fill="var(--key)"></path></svg>
</a>
</span>
`);
          }
        }
        const _0x4f339a = // TOLOOK
        setInterval(() => {
          const _0x766c02 = document.querySelector("#page-skin-1");
          if (!_0x766c02) {
            return;
          }
          const _0x33a0ec = _0x766c02.textContent.replace(/\n/g, "");
          const _0x39685f = _0x33a0ec.match(/\/\*.+?\*\//);
          const _0x4dc8c9 = _0x39685f ? _0x39685f[0] : "";
          const _0x44d4a4 = document.querySelector(".impo[title='Flaspeed Template']");
          const _0x2c6675 = document.querySelector(".impo[title='Flaspeed Template'] .ic-flaspeed");
          if (!_0x44d4a4 || !_0x4dc8c9.includes("https://flaspeed.iscodi.com/") || _0x44d4a4.href !== "https://flaspeed.iscodi.com/" || !_0x2c6675 || _0x44d4a4.innerHTML.trim() !== "<svg class=\"ic-flaspeed\" viewBox=\"0 0 375 374.999991\"><path d=\"M 88.816406 308.402344 C 88.816406 233.679688 149.390625 173.105469 224.113281 173.105469 L 224.113281 223.988281 C 177.492188 223.988281 139.699219 261.78125 139.699219 308.398438 L 88.816406 308.398438 Z M 88.816406 308.402344\" fill=\"var(--key)\"></path><path d=\"M 88.816406 308.402344 C 88.816406 233.679688 149.390625 173.105469 224.113281 173.105469 L 224.113281 223.988281 C 177.492188 223.988281 139.699219 261.78125 139.699219 308.398438 L 88.816406 308.398438 Z M 88.816406 308.402344\" fill=\"var(--key)\"></path><path d=\"M 152.929688 181.863281 L 152.929688 142.3125 C 152.929688 128.535156 164.203125 117.261719 177.980469 117.261719 L 286.003906 117.261719 L 286.003906 66.378906 L 167.027344 66.378906 C 165.722656 66.378906 164.425781 66.414062 163.132812 66.480469 L 91.09375 66.480469 L 91.09375 181.863281 Z M 152.929688 181.863281\" fill=\"var(--key)\"></path></svg>".trim()) {
            _0x30dc9d(_0x4f339a, false, true);
            return;
          }
          document.querySelectorAll(".impo").forEach(_0x4bd94c => {
            const _0x2c49f9 = window.getComputedStyle(_0x4bd94c);
            const _0x590ab3 = _0x2c49f9.visibility !== "visible" || _0x2c49f9.opacity < 1 || _0x2c49f9.zIndex < 1 && _0x4bd94c.style.zIndex !== "auto" && _0x4bd94c.nodeName !== "HTML" || ["contents", "table-", "inherit", "initial", "ruby", "unset", "none"].some(_0x559b20 => _0x2c49f9.display.includes(_0x559b20));
            if (_0x590ab3) {
              _0x30dc9d(_0x4f339a, false, true);
            }
          });
        }, 1000);
      }
    };
    const _0x4343ba = _0x3f835f => {
      _0x3f835f = typeof _0x3f835f === "string" ? JSON.parse(_0x3f835f) : _0x3f835f;
      if (_0x3f835f.success && _0x3f835f.data) {
        const _0xf5e46f = _0x3f835f.data.find(_0x4da482 => _0x4da482.blogId === BlogId);
        if (_0xf5e46f) {
          const _0x427106 = _0xf5e46f.userStatus;
          const _0xe06de4 = _0xf5e46f.userPlan;
          if (_0x427106 === "active") {
            _0x310d0c(_0xe06de4 === "basic");
            const _0x193fd9 = {
              title: "color: " + keycolor + "; font-size: 20px; font-weight: bold;",
              link: "color: #059669; font-weight: bold;",
              label: "color: #ff7812; font-weight: bold;",
              value: "color: " + stepcolor + "; font-weight: 500;",
              success: "color: #16A34A; background: #F0FDF4; padding: 2px 6px; border-radius: 4px; font-weight: bold;",
              pending: "color: #F59E0B; background: #FFFBEB; padding: 2px 6px; border-radius: 4px; font-weight: bold;",
              banned: "color: #EF4444; background: #FEF2F2; padding: 2px 6px; border-radius: 4px; font-weight: bold;",
              ultimate: "color: #7C3AED; background: #F3E8FF; padding: 2px 6px; border-radius: 4px; font-weight: bold;",
              pro: "color: #0EA5E9; background: #F0F9FF; padding: 2px 6px; border-radius: 4px; font-weight: bold;",
              basic: "color: #64748B; background: #F8FAFC; padding: 2px 6px; border-radius: 4px; font-weight: bold;"
            };
            const _0x5f2eb3 = _0xe06de4 === "basic" ? "Basic" : _0xe06de4 === "pro" ? "Professional" : "Ultimate";
            const _0x12fb20 = _0xe06de4 === "basic" ? "color: #64748B; background: #F8FAFC; padding: 2px 6px; border-radius: 4px; font-weight: bold;" : _0xe06de4 === "pro" ? "color: #0EA5E9; background: #F0F9FF; padding: 2px 6px; border-radius: 4px; font-weight: bold;" : "color: #7C3AED; background: #F3E8FF; padding: 2px 6px; border-radius: 4px; font-weight: bold;";
            const _0x5088c8 = _0x427106 === "active" ? "color: #16A34A; background: #F0FDF4; padding: 2px 6px; border-radius: 4px; font-weight: bold;" : _0x427106 === "pending" ? "color: #F59E0B; background: #FFFBEB; padding: 2px 6px; border-radius: 4px; font-weight: bold;" : "color: #EF4444; background: #FEF2F2; padding: 2px 6px; border-radius: 4px; font-weight: bold;";
            console.group("%c🚀 Flaspeed Template", _0x193fd9.title);
            console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
            console.log("%c🌐 Official Link:   %c https://flaspeed.iscodi.com/", "color: #ff7812; font-weight: bold;", "color: #059669; font-weight: bold;");
            console.log("%c👨‍💻 By:              %c Codi - https://iscodi.com/", "color: #ff7812; font-weight: bold;", _0x193fd9.value);
            console.log("%c⚡ Status:          %cActive", "color: #ff7812; font-weight: bold;", _0x5088c8);
            console.log("%c💎 Plan:            %c" + _0x5f2eb3, "color: #ff7812; font-weight: bold;", _0x12fb20);
            console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
            console.groupEnd();
          } else if (_0x427106 === "pending") {
            _0x30dc9d(intervalId, true, false);
          } else if (_0x427106 === "banned") {
            _0x30dc9d(intervalId, false, true);
          }
          if (_0x8a3d51.length === 0) {
            _0x30dc9d(intervalId, false, true);
          }
        } else {
          _0x30dc9d(intervalId, false, true);
        }
      } else {
        _0x30dc9d(intervalId, false, true);
      }
    };
    if (isStorage) {
      if (sessionStorage.lckgData !== undefined) {
        _0x4343ba(sessionStorage.lckgData);
      } else {
        _0x31a20f(_0x2a6c15 + "?action=get_data&v=1", null, function (_0x1ce8f2) {
          sessionStorage.lckgData = JSON.stringify(_0x1ce8f2);
          _0x4343ba(_0x1ce8f2);
        }, function () {
        });
      }
    } else {
      _0x31a20f(_0x2a6c15 + "?action=get_data&v=1", null, function (_0x125a63) {
        _0x4343ba(_0x125a63);
      }, function () {
      });
    }
  }
  ;
})();
