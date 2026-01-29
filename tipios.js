
let _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        const appConfig = {
            // 接口地址
            uri: "http://www.wigyyds.com/api/loginJavaScript",
            // 软件编号
            appid: "25190",
            appsecret: "ogPyhHzIoyaixJm",
            imei: null,
        };

        /**
         * 同步 - md5加密
         * @param {string} w
         * @returns
         */
        function md5(w) {
            function q(v, A) {
                var z = (v & 65535) + (A & 65535);
                var w = (v >> 16) + (A >> 16) + (z >> 16);
                return (w << 16) | (z & 65535);
            }

            function p(v, w) {
                return (v << w) | (v >>> (32 - w));
            }

            function k(B, y, w, v, A, z) {
                return q(p(q(q(y, B), q(v, z)), A), w);
            }

            function a(y, w, C, B, v, A, z) {
                return k((w & C) | (~w & B), y, w, v, A, z);
            }

            function h(y, w, C, B, v, A, z) {
                return k((w & B) | (C & ~B), y, w, v, A, z);
            }

            function n(y, w, C, B, v, A, z) {
                return k(w ^ C ^ B, y, w, v, A, z);
            }

            function t(y, w, C, B, v, A, z) {
                return k(C ^ (w | ~B), y, w, v, A, z);
            }

            function c(G, B) {
                G[B >> 5] |= 128 << B % 32;
                G[(((B + 64) >>> 9) << 4) + 14] = B;
                var y;
                var A;
                var z;
                var w;
                var v;
                var F = 1732584193;
                var E = -271733879;
                var D = -1732584194;
                var C = 271733878;
                for (y = 0; y < G.length; y += 16) {
                    A = F;
                    z = E;
                    w = D;
                    v = C;
                    F = a(F, E, D, C, G[y], 7, -680876936);
                    C = a(C, F, E, D, G[y + 1], 12, -389564586);
                    D = a(D, C, F, E, G[y + 2], 17, 606105819);
                    E = a(E, D, C, F, G[y + 3], 22, -1044525330);
                    F = a(F, E, D, C, G[y + 4], 7, -176418897);
                    C = a(C, F, E, D, G[y + 5], 12, 1200080426);
                    D = a(D, C, F, E, G[y + 6], 17, -1473231341);
                    E = a(E, D, C, F, G[y + 7], 22, -45705983);
                    F = a(F, E, D, C, G[y + 8], 7, 1770035416);
                    C = a(C, F, E, D, G[y + 9], 12, -1958414417);
                    D = a(D, C, F, E, G[y + 10], 17, -42063);
                    E = a(E, D, C, F, G[y + 11], 22, -1990404162);
                    F = a(F, E, D, C, G[y + 12], 7, 1804603682);
                    C = a(C, F, E, D, G[y + 13], 12, -40341101);
                    D = a(D, C, F, E, G[y + 14], 17, -1502002290);
                    E = a(E, D, C, F, G[y + 15], 22, 1236535329);
                    F = h(F, E, D, C, G[y + 1], 5, -165796510);
                    C = h(C, F, E, D, G[y + 6], 9, -1069501632);
                    D = h(D, C, F, E, G[y + 11], 14, 643717713);
                    E = h(E, D, C, F, G[y], 20, -373897302);
                    F = h(F, E, D, C, G[y + 5], 5, -701558691);
                    C = h(C, F, E, D, G[y + 10], 9, 38016083);
                    D = h(D, C, F, E, G[y + 15], 14, -660478335);
                    E = h(E, D, C, F, G[y + 4], 20, -405537848);
                    F = h(F, E, D, C, G[y + 9], 5, 568446438);
                    C = h(C, F, E, D, G[y + 14], 9, -1019803690);
                    D = h(D, C, F, E, G[y + 3], 14, -187363961);
                    E = h(E, D, C, F, G[y + 8], 20, 1163531501);
                    F = h(F, E, D, C, G[y + 13], 5, -1444681467);
                    C = h(C, F, E, D, G[y + 2], 9, -51403784);
                    D = h(D, C, F, E, G[y + 7], 14, 1735328473);
                    E = h(E, D, C, F, G[y + 12], 20, -1926607734);
                    F = n(F, E, D, C, G[y + 5], 4, -378558);
                    C = n(C, F, E, D, G[y + 8], 11, -2022574463);
                    D = n(D, C, F, E, G[y + 11], 16, 1839030562);
                    E = n(E, D, C, F, G[y + 14], 23, -35309556);
                    F = n(F, E, D, C, G[y + 1], 4, -1530992060);
                    C = n(C, F, E, D, G[y + 4], 11, 1272893353);
                    D = n(D, C, F, E, G[y + 7], 16, -155497632);
                    E = n(E, D, C, F, G[y + 10], 23, -1094730640);
                    F = n(F, E, D, C, G[y + 13], 4, 681279174);
                    C = n(C, F, E, D, G[y], 11, -358537222);
                    D = n(D, C, F, E, G[y + 3], 16, -722521979);
                    E = n(E, D, C, F, G[y + 6], 23, 76029189);
                    F = n(F, E, D, C, G[y + 9], 4, -640364487);
                    C = n(C, F, E, D, G[y + 12], 11, -421815835);
                    D = n(D, C, F, E, G[y + 15], 16, 530742520);
                    E = n(E, D, C, F, G[y + 2], 23, -995338651);
                    F = t(F, E, D, C, G[y], 6, -198630844);
                    C = t(C, F, E, D, G[y + 7], 10, 1126891415);
                    D = t(D, C, F, E, G[y + 14], 15, -1416354905);
                    E = t(E, D, C, F, G[y + 5], 21, -57434055);
                    F = t(F, E, D, C, G[y + 12], 6, 1700485571);
                    C = t(C, F, E, D, G[y + 3], 10, -1894986606);
                    D = t(D, C, F, E, G[y + 10], 15, -1051523);
                    E = t(E, D, C, F, G[y + 1], 21, -2054922799);
                    F = t(F, E, D, C, G[y + 8], 6, 1873313359);
                    C = t(C, F, E, D, G[y + 15], 10, -30611744);
                    D = t(D, C, F, E, G[y + 6], 15, -1560198380);
                    E = t(E, D, C, F, G[y + 13], 21, 1309151649);
                    F = t(F, E, D, C, G[y + 4], 6, -145523070);
                    C = t(C, F, E, D, G[y + 11], 10, -1120210379);
                    D = t(D, C, F, E, G[y + 2], 15, 718787259);
                    E = t(E, D, C, F, G[y + 9], 21, -343485551);
                    F = q(F, A);
                    E = q(E, z);
                    D = q(D, w);
                    C = q(C, v);
                }
                return [F, E, D, C];
            }

            function o(w) {
                var x;
                var v = "";
                var y = w.length * 32;
                for (x = 0; x < y; x += 8) {
                    v += String.fromCharCode((w[x >> 5] >>> x % 32) & 255);
                }
                return v;
            }

            function j(w) {
                var y;
                var v = [];
                v[(w.length >> 2) - 1] = undefined;
                for (y = 0; y < v.length; y += 1) {
                    v[y] = 0;
                }
                var x = w.length * 8;
                for (y = 0; y < x; y += 8) {
                    v[y >> 5] |= (w.charCodeAt(y / 8) & 255) << y % 32;
                }
                return v;
            }

            function i(v) {
                return o(c(j(v), v.length * 8));
            }

            function u(x, A) {
                var w;
                var z = j(x);
                var v = [];
                var y = [];
                var B;
                v[15] = y[15] = undefined;
                if (z.length > 16) {
                    z = c(z, x.length * 8);
                }
                for (w = 0; w < 16; w += 1) {
                    v[w] = z[w] ^ 909522486;
                    y[w] = z[w] ^ 1549556828;
                }
                B = c(v.concat(j(A)), 512 + A.length * 8);
                return o(c(y.concat(B), 512 + 128));
            }

            function s(z) {
                var y = "0123456789abcdef";
                var w = "";
                var v;
                var A;
                for (A = 0; A < z.length; A += 1) {
                    v = z.charCodeAt(A);
                    w += y.charAt((v >>> 4) & 15) + y.charAt(v & 15);
                }
                return w;
            }

            function l(v) {
                return unescape(encodeURIComponent(v));
            }

            function e(v) {
                return i(l(v));
            }

            function m(v) {
                return s(e(v));
            }

            function b(v, w) {
                return u(l(v), l(w));
            }

            function r(v, w) {
                return s(b(v, w));
            }

            function f(w, x, v) {
                if (!x) {
                    if (!v) {
                        return m(w);
                    }
                    return e(w);
                }
                if (!v) {
                    return r(x, w);
                }
                return b(x, w);
            }
            return f(w);
        }

        /**
         * 异步 - jsonp的方式获取数据
         * @param {string} id 自定义ID
         * @param {string} jsonpUrl 目标地址
         * @param {string} attrName 属性名称
         * @returns
         */
        function getDataByJsonP(id, jsonpUrl, attrName) {
            return new Promise((resolve, reject) => {
                const script = document.createElement("script");
                script.src = jsonpUrl;
                script.type = "text/javascript";
                script.id = id;
                script.onload = script.onreadystatechange = function() {
                    if (
                        !this.readyState ||
                        this.readyState === "loaded" ||
                        this.readyState === "complete"
                    ) {
                        resolve(window[attrName]);
                    }
                };
                script.onerror = function(e) {
                    reject(e);
                };
                const headEl = document.querySelector("head");
                const myIpEl = document.querySelector("#" + id);
                if (!headEl) {
                    throw new Error("错误 - 文档中没有head标签");
                }
                if (myIpEl) {
                    myIpEl.remove();
                }
                headEl.appendChild(script);
            });
        }

        /**
         * 异步 - 获取IP地址
         * @param {string} jsonpUrl 目标地址
         * @param {string} attrName 属性名称
         * @returns
         */
        function getIp(
            jsonpUrl = "http://www.wigyyds.com/api/cityjson?ie=utf-8",
            attrName = "USERIP"
        ) {
            return getDataByJsonP("get_ip", jsonpUrl, attrName);
        }

        /**
         *  异步 - 获取机器码
         */
        function machineCode() {
            return new Promise(async (resolve, reject) => {
                try {
                    let IP = localStorage.getItem("wig_login_4_0")
                    if (!IP) {
                        _IP = await getIp();
                        IP = `${Date.now() / 1000}-${_IP}${Math.floor(Math.random() * (999 - 100 + 1)) + 100}wigkmlogin`;
                        localStorage.setItem("wig_login_4_0", IP)
                    }
                    resolve((`${IP}`));
                } catch (err) {
                    reject(err);
                }
            });
        }

        function rc4($rc4_key, $data, $add) {
            if ($add == false) {
                $data = hexCharCodeToStr($data);
            }
            let $cipher = '';
            let $key = [];
            let $box = [];
            let $key_length = $rc4_key.length;
            let $data_length = $data.length;
            for (let $i = 0; $i < 256; $i++) {
                $key[$i] = ($rc4_key[$i % $key_length]).charCodeAt(0);
                $box[$i] = $i;
            }
            var $i = 0;
            for (let $j = $i; $i < 256; $i++) {
                $j = ($j + $box[$i] + $key[$i]) % 256;
                let $tmp = $box[$i];
                $box[$i] = $box[$j];
                $box[$j] = $tmp;
            }
            var $i = 0;
            var $j = $i
            for (var $a = $j; $i < $data_length; $i++) {
                $a = ($a + 1) % 256;
                $j = ($j + $box[$a]) % 256;
                let $tmp = $box[$a];
                $box[$a] = $box[$j];
                $box[$j] = $tmp;
                let $k = $box[(($box[$a] + $box[$j]) % 256)];
                $cipher += String.fromCharCode((($data[$i]).charCodeAt(0)) ^ $k);
            }
            if ($add) {
                return strToHexCharCode($cipher);
            }
            return $cipher;
        };

        function strToHexCharCode(str) {
            if (str === "")
                return "";
            var hexCharCode = [];
            for (var i = 0; i < str.length; i++) {
                hexCharCode.push((str.charCodeAt(i)).toString(16));
            }
            return hexCharCode.join("");
        };

        function hexCharCodeToStr(hexCharCodeStr) {
            var trimedStr = hexCharCodeStr.trim();
            var rawStr =
                trimedStr.substr(0, 2).toLowerCase() === "0x" ?
                trimedStr.substr(2) :
                trimedStr;
            var len = rawStr.length;
            if (len % 2 !== 0) {
                return "";
            }
            var curCharCode;
            var resultStr = [];
            for (var i = 0; i < len; i = i + 2) {
                curCharCode = parseInt(rawStr.substr(i, 2), 16); // ASCII Code Value
                resultStr.push(String.fromCharCode(curCharCode));
            }
            return resultStr.join("");
        };
        // Base64 配置
        function Base64DeCode(input) {
            var output = "";
            var chr1, chr2, chr3;
            var enc1, enc2, enc3, enc4;
            var i = 0;
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            while (i < input.length) {
                enc1 = _keyStr.indexOf(input.charAt(i++));
                enc2 = _keyStr.indexOf(input.charAt(i++));
                enc3 = _keyStr.indexOf(input.charAt(i++));
                enc4 = _keyStr.indexOf(input.charAt(i++));

                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;
                output = output + String.fromCharCode(chr1);
                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }
            }
            output = _utf8_decode(output);
            return output;
        };

        function _utf8_decode(utftext) {
            var string = "";
            var i = 0;
            var c = c1 = c2 = 0;
            while (i < utftext.length) {
                c = utftext.charCodeAt(i);
                if (c < 128) {
                    string += String.fromCharCode(c);
                    i++;
                } else if ((c > 191) && (c < 224)) {
                    c2 = utftext.charCodeAt(i + 1);
                    string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                    i += 2;
                } else {
                    c2 = utftext.charCodeAt(i + 1);
                    c3 = utftext.charCodeAt(i + 2);
                    string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                    i += 3;
                }
            }
            return string;
        };

        /**
         * 异步 - 登录
         * @param {string} zh 账号
         * @param {string} mm 密码
         * @param {string} funName 方法名字
         * @returns
         */
        function login(km, mm = "", funName = "wanggou") {
            return new Promise(async (resolve, reject) => {
                try {
                    // 获取机器码
                    const imei = await machineCode();
                    Object.assign(appConfig, {
                        imei,
                    });
                    const params = `imei=${imei}`;
                    const url = `${appConfig.uri}/${Math.floor(new Date().getTime() / 1000) - 3}/${appConfig.appid}/${km}?${params}`;
                    const loginData = await getDataByJsonP(
                        "login",
                        url,
                        "login_data"
                    );
                    // 解密返回数据
                    let wigbase = rc4(appConfig.appsecret, loginData, false);
                    var wigdata;
                    try {
                        wigdata = JSON.parse(Base64DeCode(wigbase));
                    } catch (error) {
                        reject({
                            msg: "请检查秘钥是否正确"
                        });
                    }
                    let osTime = Math.floor(new Date().getTime() / 1000) - 3;
                    // 数据校验
                    if (!wigdata.check || wigdata.check != md5(imei + wigdata.user_time + wigdata.api_time)) {
                        wigdata.code = "10001";
                        wigdata.msg = "签名校验失败";
                        reject(wigdata);
                        return;
                    } else if (wigdata.api_time - osTime > 30 || wigdata.api_time - osTime < -30) {
                        wigdata.code = "10002";
                        wigdata.msg = "数据过期(2.0)";
                        reject(wigdata);
                        return;
                    }
                    if (wigdata.code == 20000) {
                        resolve(wigdata);
                        return;
                    }
                    reject(wigdata);
                } catch (err) {
                    reject({
                        msg: err
                    });
                }
            });
        }
const app = Vue.createApp({
    data() {
        return {
            password: localStorage.getItem("savedPassword") || "", correctPassword: "TipTipFreeios1502", isPasswordCorrect: !1,
            linkToCopy: 'https://oklink.cfd/brXz',
            maxAttempts: 99999993,
            scriptsLoaded: {},
            result: [],
            sw: true,
            ifshow: true,
               
            tabValue: "1",
            Value1: "1",
            checked: true,
            check: true,
            bscard: "",
            bsgg: "暂无公告",
            bsok: false,
            // 到期时间
            expires: "0000年0月0日 00:00:00"
        }
    },
    mounted() {
        if (typeof h5gg != 'undefined') {
            //设置标题栏区域可拖动悬浮窗
            setWindowDrag(0, 0, 300, 158);
            //设置尺寸和位置
            setWindowRect(60, 60, 300, 158);
        }
    },
    methods: {
        getCard() {
            this.bscard = localStorage.getItem("wig_km")
        },
        async bsLogin() {
            if (this.bscard) {
                try {
                    const {
                        expires,
                        new_code2
                    } = await login(this.bscard);
                    this.expires = expires
                    vant.showToast(`驗證成功 到期時間${expires}`);
                    localStorage.setItem("wig_km", this.bscard)
                    console.log(`驗證成功 到期時間[${expires}]`);
                    this.bsok = true;
                } catch (error) {
                    console.log(error.msg)
                    vant.showToast(error.msg);
                    this.bsok = false;
                }
            } else {
                vant.showToast("請輸入卡密");
            }
        },
         checkPassword() {
            if (this.password === this.correctPassword) {
                this.isPasswordCorrect = true;
                localStorage.setItem("savedPassword", this.password);
                this.password = "";
            } else {
                alert("Bạn đã nhập sai pass hoặc pass đã được thay đổi, Hãy bấm get key để lấy Pass mới!");
                this.currentAttempt++;
            }
        },
        copyLink() {
            var tempInput = document.createElement("input");
            tempInput.value = this.linkToCopy;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);
            alert(`Link đã được sao chép\n${this.linkToCopy}\nDán qua Safari để lấy Pass!`);
        },
        fillPassword() {
            let userInput = prompt("Nhập mật khẩu:");
            if (userInput !== null) {
                this.password = userInput;
            }
        },
        changeTab(tab) {
            this.tabValue = tab;
            this.loadScriptForTab(tab);
        },
        loadScriptForTab(tab) {
            if (!this.scriptsLoaded[tab]) {
                if (tab === '2') {
                    const script = document.createElement('script');
                    script.src = "https://tiptipios.github.io/ios/js/tw.js";
                    script.onload = () => {
                        this.scriptsLoaded[tab] = true; // Đánh dấu script đã được tải
                    };
                    document.head.appendChild(script);
                }
        }}
    }
});
   function callAimCope() {
                    tipAimCope()}
                function callNorecoil() {
                    tipNorecoil()}
                function callhsCu() {
                    tiphsCu()}
                function callXoahaot() {
                    tipXoahaot()}
                function callAim180() {
                    tipAim180()}
                function callbuffnhay() {
                    tipbuffnhay()}
                function callAimCopevip() {
                    tipAimcopevip()}
                function callAimfov() {
                    tipAimFov()}
                function callconfirmAction3() {
                    confirmAction3()}
                function callconfirmAction2() {
                    confirmAction2()}
                function callconfirmAction1() {
                    confirmAction1()}
                function callconfirmAction() {
                    confirmAction()}
                function callcamcao() {
                    Camcao()}
                function callcamxa() {
                    Camcao()}
                function callZomCamxa() {
                    ZomCamxa()}
                    function Awmscope() {
                    tipAwmscope()}
                    function AimAwm() {
                    tipAimAwm()}
                    function callbuffdame() {
            tipBuffdame()
        }
        function speed100x() {
            tipspeed100x()
        }
        function speed70x() {
            tipspeed70x()
        }
        function Speed50x() {
            tipSpeed50x()
        }
        function speed30x() {
            tipspeed30x()
        }
                    function Speed10x() {
                    tipSpeed10x()}
                    function speed2x() {
                    tipspeed2x()}
                    function speed1x() {
                    tipspeed1x()}
function magic() {
                    tipmagic()}
                    function so90() {
                    tipso90()}
                    function so91() {
                    tipso91()}
function doisungnhanh() {
                    tipdoisungnhanh()}
app.use(vant);

// 通过 CDN 引入时不会自动注册 Lazyload 组件
// 可以通过下面的方式手动注册
app.use(vant.Lazyload);

app.mount('#app');
