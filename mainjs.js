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
          document.body.innerHTML = cpH(false, true);
        });
      }
    } else {
      _0x31a20f(_0x2a6c15 + "?action=get_data&v=1", null, function (_0x125a63) {
        _0x4343ba(_0x125a63);
      }, function () {
        document.body.innerHTML = cpH(false, true);
      });
    }
  }
  ;
})();
