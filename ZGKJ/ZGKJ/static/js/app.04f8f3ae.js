(function (e) {
    function t(t) {
        for (var r, a, o = t[0], l = t[1], c = t[2], p = 0, d = []; p < o.length; p++) a = o[p], Object.prototype.hasOwnProperty.call(i, a) && i[a] && d.push(i[a][0]), i[a] = 0;
        for (r in l) Object.prototype.hasOwnProperty.call(l, r) && (e[r] = l[r]);
        u && u(t);
        while (d.length) d.shift()();
        return s.push.apply(s, c || []), n()
    }

    function n() {
        for (var e, t = 0; t < s.length; t++) {
            for (var n = s[t], r = !0, o = 1; o < n.length; o++) {
                var l = n[o];
                0 !== i[l] && (r = !1)
            }
            r && (s.splice(t--, 1), e = a(a.s = n[0]))
        }
        return e
    }

    var r = {}, i = {app: 0}, s = [];

    function a(t) {
        if (r[t]) return r[t].exports;
        var n = r[t] = {i: t, l: !1, exports: {}};
        return e[t].call(n.exports, n, n.exports, a), n.l = !0, n.exports
    }

    a.m = e, a.c = r, a.d = function (e, t, n) {
        a.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
    }, a.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, a.t = function (e, t) {
        if (1 & t && (e = a(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (a.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var r in e) a.d(n, r, function (t) {
            return e[t]
        }.bind(null, r));
        return n
    }, a.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        } : function () {
            return e
        };
        return a.d(t, "a", t), t
    }, a.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, a.p = "/";
    var o = window["webpackJsonp"] = window["webpackJsonp"] || [], l = o.push.bind(o);
    o.push = t, o = o.slice();
    for (var c = 0; c < o.length; c++) t(o[c]);
    var u = l;
    s.push([0, "chunk-vendors"]), n()
})({
    0: function (e, t, n) {
        e.exports = n("56d7")
    }, "027b": function (e, t, n) {
    }, "08cb": function (e, t, n) {
        e.exports = n.p + "img/partner.e9fc5280.png"
    }, "0e25": function (e, t, n) {
    }, "13fd": function (e, t, n) {
        "use strict";
        var r = n("1c78"), i = n.n(r);
        i.a
    }, "166d": function (e, t, n) {
        "use strict";
        var r = n("8d33"), i = n.n(r);
        i.a
    }, "1c78": function (e, t, n) {
    }, 2678: function (e, t, n) {
        "use strict";
        var r = n("271e"), i = n.n(r);
        i.a
    }, "271e": function (e, t, n) {
    }, "282a": function (e, t, n) {
    }, "330a": function (e, t, n) {
        e.exports = n.p + "img/main-title.9a5d5100.png"
    }, 3921: function (e, t, n) {
        "use strict";
        var r = n("0e25"), i = n.n(r);
        i.a
    }, "4f30": function (e, t, n) {
    }, 5422: function (e, t, n) {
    }, "56d7": function (e, t, n) {
        "use strict";
        n.r(t);
        n("cadf"), n("551c"), n("f751"), n("097d");
        var r, i = n("2b0e"), s = function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {attrs: {id: "app"}}, [n("div", {staticClass: "logo-bg"}), n("div", {staticClass: "nav"}, [n("Header")], 1), n("keep-alive", [n("router-view")], 1)], 1)
            }, a = [], o = function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {staticClass: "header-wrapper"}, [n("div", {staticClass: "header"}, [e._m(0), n("div", {staticClass: "nav-wrapper"}, [n("router-link", {
                    staticClass: "nav-item",
                    attrs: {to: "/home"}
                }, [n("span", [e._v("首页")])]), n("router-link", {
                    staticClass: "nav-item",
                    attrs: {to: "/introduce"}
                }, [n("span", [e._v("产品介绍")])]), n("router-link", {
                    staticClass: "nav-item",
                    attrs: {to: "/partner"}
                }, [n("span", [e._v("生态伙伴")])]), n("router-link", {
                    staticClass: "nav-item",
                    attrs: {to: "/about"}
                }, [n("span", [e._v("关于我们")])]), n("router-link", {
                    staticClass: "nav-item",
                    attrs: {to: "/contact"}
                }, [n("span", [e._v("联系我们")])])], 1)])])
            }, l = [function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {staticClass: "logo"}, [n("h3", [e._v("足购科技 "), n("span", [e._v("ZUGO TECH")])])])
            }], c = {}, u = c, p = (n("5a51"), n("2877")), d = Object(p["a"])(u, o, l, !1, null, "4f96e674", null),
            f = d.exports, m = {components: {Header: f}}, h = m,
            v = (n("5ae1"), Object(p["a"])(h, s, a, !1, null, "45f24822", null)), g = v.exports, A = n("8c4f"),
            T = function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {
                    ref: "home",
                    staticClass: "home"
                }, [e._m(0), n("div", {staticClass: "wrapper"}, [n("div", {staticClass: "shoes"}, [n("canvas", {
                    ref: "comCanvas",
                    staticStyle: {width: "100px", height: "100px"}
                })]), e._m(1), e._m(2), e._m(3)]), n("Footer", {attrs: {isFixed: e.isFixed}})], 1)
            }, b = [function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {staticClass: "triangle-box"}, [n("div", {staticClass: "triangle"}), n("div", {staticClass: "blue-bg"})])
            }, function () {
                var e = this, t = e.$createElement, r = e._self._c || t;
                return r("div", {staticClass: "main-title"}, [r("img", {attrs: {src: n("330a")}})])
            }, function () {
                var e = this, t = e.$createElement, r = e._self._c || t;
                return r("div", {staticClass: "sub-title"}, [r("img", {attrs: {src: n("6cb6")}})])
            }, function () {
                var e = this, t = e.$createElement, r = e._self._c || t;
                return r("div", {staticClass: "art-title"}, [r("img", {attrs: {src: n("61f8")}})])
            }], S = (n("7f7f"), function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", [e.isMobile ? e._e() : n("div", {class: e.isFixed ? "footer isfixed" : "footer"}, [e._v("Copyright © 2019 足购科技（杭州）有限公司 杭州市余杭区恒生科技园16号楼1单元5楼 电话号码：0571-88581570 浙ICP备19029902号")]), e.isMobile ? n("div", {class: e.isFixed ? "footer isfixed" : "footer"}, [n("p", [e._v("Copyright © 2019 足购科技（杭州）有限公司 ")]), n("p", [e._v("杭州市余杭区恒生科技园16号楼1单元5楼 ")]), n("p", [e._v("电话号码：0571-88581570 浙ICP备19029902号")])]) : e._e()])
            }), M = [], y = {
                props: {isFixed: Boolean}, data: function () {
                    return {isMobile: !1}
                }, mounted: function () {
                    var e = document.documentElement.clientWidth || document.body.clientWidth;
                    this.isMobile = e < 768
                }
            }, E = y, x = (n("3921"), Object(p["a"])(E, S, M, !1, null, "74ffc53f", null)), R = x.exports, _ = n("5a89"),
            w = (n("55dd"), n("7618")), L = (n("96cf"), n("3b8d")),
            C = (n("456d"), n("14b9"), n("a481"), n("ac6a"), n("5df3"), n("d225")), I = n("b0b4"), N = n("bd86"),
            D = (n("63d9"), n("9c29"), n("af56"), n("15ac"), n("34ef"), n("b05c"), "glTF"), F = 12,
            P = {JSON: 1313821514, BIN: 5130562}, G = {
                KHR_BINARY_GLTF: "KHR_binary_glTF",
                KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
                KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
                KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: "KHR_materials_pbrSpecularGlossiness",
                KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
                KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
                MSFT_TEXTURE_DDS: "MSFT_texture_dds"
            }, B = {
                FLOAT: 5126,
                FLOAT_MAT3: 35675,
                FLOAT_MAT4: 35676,
                FLOAT_VEC2: 35664,
                FLOAT_VEC3: 35665,
                FLOAT_VEC4: 35666,
                LINEAR: 9729,
                REPEAT: 10497,
                SAMPLER_2D: 35678,
                POINTS: 0,
                LINES: 1,
                LINE_LOOP: 2,
                LINE_STRIP: 3,
                TRIANGLES: 4,
                TRIANGLE_STRIP: 5,
                TRIANGLE_FAN: 6,
                UNSIGNED_BYTE: 5121,
                UNSIGNED_SHORT: 5123
            }, O = {
                5120: Int8Array,
                5121: Uint8Array,
                5122: Int16Array,
                5123: Uint16Array,
                5125: Uint32Array,
                5126: Float32Array
            }, U = {9728: _["I"], 9729: _["w"], 9984: _["K"], 9985: _["y"], 9986: _["J"], 9987: _["x"]},
            H = {33071: _["f"], 33648: _["H"], 10497: _["W"]},
            k = {SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16}, j = {
                POSITION: "position",
                NORMAL: "normal",
                TANGENT: "tangent",
                TEXCOORD_0: "uv",
                TEXCOORD_1: "uv2",
                COLOR_0: "color",
                WEIGHTS_0: "skinWeight",
                JOINTS_0: "skinIndex"
            }, K = {scale: "scale", translation: "position", rotation: "quaternion", weights: "morphTargetInfluences"},
            V = {CUBICSPLINE: void 0, LINEAR: _["r"], STEP: _["q"]},
            X = {OPAQUE: "OPAQUE", MASK: "MASK", BLEND: "BLEND"}, Q = {"image/png": _["U"], "image/jpeg": _["V"]},
            Z = function () {
                function e(t) {
                    Object(C["a"])(this, e), Object(N["a"])(this, "crossOrigin", "anonymous"), this.manager = void 0 !== t ? t : _["h"], this.dracoLoader = null, this.ddsLoader = null
                }

                return Object(I["a"])(e, [{
                    key: "setCrossOrigin", value: function (e) {
                        return this.crossOrigin = e, this
                    }
                }, {
                    key: "setPath", value: function (e) {
                        return this.path = e, this
                    }
                }, {
                    key: "setResourcePath", value: function (e) {
                        return this.resourcePath = e, this
                    }
                }, {
                    key: "setDRACOLoader", value: function (e) {
                        return this.dracoLoader = e, this
                    }
                }, {
                    key: "setDDSLoader", value: function (e) {
                        return this.ddsLoader = e, this
                    }
                }, {
                    key: "load", value: function (e, t, n, r) {
                        var i, s = this;
                        i = void 0 !== this.resourcePath ? this.resourcePath : void 0 !== this.path ? this.path : _["A"].extractUrlBase(e), s.manager.itemStart(e);
                        var a = function (t) {
                            r ? r(t) : console.error(t), s.manager.itemError(e), s.manager.itemEnd(e)
                        }, o = new _["k"](s.manager);
                        o.setPath(this.path), o.setResponseType("arraybuffer"), "use-credentials" === s.crossOrigin && o.setWithCredentials(!0), o.load(e, function (n) {
                            try {
                                s.parse(n, i, function (n) {
                                    t(n), s.manager.itemEnd(e)
                                }, a)
                            } catch (r) {
                                a(r)
                            }
                        }, n, a)
                    }
                }, {
                    key: "parse", value: function (e, t, n, r) {
                        var i, s = {};
                        if ("string" === typeof e) i = e; else {
                            var a = _["A"].decodeText(new Uint8Array(e, 0, 4));
                            if (a === D) {
                                try {
                                    s[G.KHR_BINARY_GLTF] = new W(e)
                                } catch (d) {
                                    return void (r && r(d))
                                }
                                i = s[G.KHR_BINARY_GLTF].content
                            } else i = _["A"].decodeText(new Uint8Array(e))
                        }
                        var o = JSON.parse(i);
                        if (void 0 === o.asset || o.asset.version[0] < 2) r && r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported. Use LegacyGLTFLoader instead.")); else {
                            if (o.extensionsUsed) for (var l = 0; l < o.extensionsUsed.length; ++l) {
                                var c = o.extensionsUsed[l], u = o.extensionsRequired || [];
                                switch (c) {
                                    case G.KHR_LIGHTS_PUNCTUAL:
                                        s[c] = new J(o);
                                        break;
                                    case G.KHR_MATERIALS_UNLIT:
                                        s[c] = new Y;
                                        break;
                                    case G.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
                                        s[c] = new z;
                                        break;
                                    case G.KHR_DRACO_MESH_COMPRESSION:
                                        s[c] = new q(o, this.dracoLoader);
                                        break;
                                    case G.MSFT_TEXTURE_DDS:
                                        s[G.MSFT_TEXTURE_DDS] = new $(this.ddsLoader);
                                        break;
                                    case G.KHR_TEXTURE_TRANSFORM:
                                        s[G.KHR_TEXTURE_TRANSFORM] = new ee;
                                        break;
                                    default:
                                        u.indexOf(c) >= 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + c + '".')
                                }
                            }
                            var p = new te(o, s, {
                                path: t || this.resourcePath || "",
                                crossOrigin: this.crossOrigin,
                                manager: this.manager
                            });
                            p.parse(n, r)
                        }
                    }
                }]), e
            }();

        function W(e) {
            this.name = G.KHR_BINARY_GLTF, this.content = null, this.body = null;
            var t = new DataView(e, 0, F);
            if (this.header = {
                magic: _["A"].decodeText(new Uint8Array(e.slice(0, 4))),
                version: t.getUint32(4, !0),
                length: t.getUint32(8, !0)
            }, this.header.magic !== D) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
            if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected. Use LegacyGLTFLoader instead.");
            var n = new DataView(e, F), r = 0;
            while (r < n.byteLength) {
                var i = n.getUint32(r, !0);
                r += 4;
                var s = n.getUint32(r, !0);
                if (r += 4, s === P.JSON) {
                    var a = new Uint8Array(e, F + r, i);
                    this.content = _["A"].decodeText(a)
                } else if (s === P.BIN) {
                    var o = F + r;
                    this.body = e.slice(o, o + i)
                }
                r += i
            }
            if (null === this.content) throw new Error("THREE.GLTFLoader: JSON content not found.")
        }

        function J(e) {
            this.name = G.KHR_LIGHTS_PUNCTUAL;
            var t = e.extensions && e.extensions[G.KHR_LIGHTS_PUNCTUAL] || {};
            this.lightDefs = t.lights || []
        }

        function Y() {
            this.name = G.KHR_MATERIALS_UNLIT
        }

        function z() {
            return {
                name: G.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,
                specularGlossinessParams: ["color", "map", "lightMap", "lightMapIntensity", "aoMap", "aoMapIntensity", "emissive", "emissiveIntensity", "emissiveMap", "bumpMap", "bumpScale", "normalMap", "displacementMap", "displacementScale", "displacementBias", "specularMap", "specular", "glossinessMap", "glossiness", "alphaMap", "envMap", "envMapIntensity", "refractionRatio"],
                getMaterialType: function () {
                    return _["Z"]
                },
                extendParams: function (e, t, n) {
                    var r = t.extensions[this.name], i = _["Y"]["standard"], s = _["gb"].clone(i.uniforms),
                        a = ["#ifdef USE_SPECULARMAP", "\tuniform sampler2D specularMap;", "#endif"].join("\n"),
                        o = ["#ifdef USE_GLOSSINESSMAP", "\tuniform sampler2D glossinessMap;", "#endif"].join("\n"),
                        l = ["vec3 specularFactor = specular;", "#ifdef USE_SPECULARMAP", "\tvec4 texelSpecular = texture2D( specularMap, vUv );", "\ttexelSpecular = sRGBToLinear( texelSpecular );", "\t// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture", "\tspecularFactor *= texelSpecular.rgb;", "#endif"].join("\n"),
                        c = ["float glossinessFactor = glossiness;", "#ifdef USE_GLOSSINESSMAP", "\tvec4 texelGlossiness = texture2D( glossinessMap, vUv );", "\t// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture", "\tglossinessFactor *= texelGlossiness.a;", "#endif"].join("\n"),
                        u = ["PhysicalMaterial material;", "material.diffuseColor = diffuseColor.rgb;", "material.specularRoughness = clamp( 1.0 - glossinessFactor, 0.04, 1.0 );", "material.specularColor = specularFactor.rgb;"].join("\n"),
                        p = i.fragmentShader.replace("uniform float roughness;", "uniform vec3 specular;").replace("uniform float metalness;", "uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>", a).replace("#include <metalnessmap_pars_fragment>", o).replace("#include <roughnessmap_fragment>", l).replace("#include <metalnessmap_fragment>", c).replace("#include <lights_physical_fragment>", u);
                    delete s.roughness, delete s.metalness, delete s.roughnessMap, delete s.metalnessMap, s.specular = {value: (new _["g"]).setHex(1118481)}, s.glossiness = {value: .5}, s.specularMap = {value: null}, s.glossinessMap = {value: null}, e.vertexShader = i.vertexShader, e.fragmentShader = p, e.uniforms = s, e.defines = {STANDARD: ""}, e.color = new _["g"](1, 1, 1), e.opacity = 1;
                    var d = [];
                    if (Array.isArray(r.diffuseFactor)) {
                        var f = r.diffuseFactor;
                        e.color.fromArray(f), e.opacity = f[3]
                    }
                    if (void 0 !== r.diffuseTexture && d.push(n.assignTexture(e, "map", r.diffuseTexture)), e.emissive = new _["g"](0, 0, 0), e.glossiness = void 0 !== r.glossinessFactor ? r.glossinessFactor : 1, e.specular = new _["g"](1, 1, 1), Array.isArray(r.specularFactor) && e.specular.fromArray(r.specularFactor), void 0 !== r.specularGlossinessTexture) {
                        var m = r.specularGlossinessTexture;
                        d.push(n.assignTexture(e, "glossinessMap", m)), d.push(n.assignTexture(e, "specularMap", m))
                    }
                    return Promise.all(d)
                },
                createMaterial: function (e) {
                    var t = new _["Z"]({
                        defines: e.defines,
                        vertexShader: e.vertexShader,
                        fragmentShader: e.fragmentShader,
                        uniforms: e.uniforms,
                        fog: !0,
                        lights: !0,
                        opacity: e.opacity,
                        transparent: e.transparent
                    });
                    return t.isGLTFSpecularGlossinessMaterial = !0, t.color = e.color, t.map = void 0 === e.map ? null : e.map, t.lightMap = null, t.lightMapIntensity = 1, t.aoMap = void 0 === e.aoMap ? null : e.aoMap, t.aoMapIntensity = 1, t.emissive = e.emissive, t.emissiveIntensity = 1, t.emissiveMap = void 0 === e.emissiveMap ? null : e.emissiveMap, t.bumpMap = void 0 === e.bumpMap ? null : e.bumpMap, t.bumpScale = 1, t.normalMap = void 0 === e.normalMap ? null : e.normalMap, e.normalScale && (t.normalScale = e.normalScale), t.displacementMap = null, t.displacementScale = 1, t.displacementBias = 0, t.specularMap = void 0 === e.specularMap ? null : e.specularMap, t.specular = e.specular, t.glossinessMap = void 0 === e.glossinessMap ? null : e.glossinessMap, t.glossiness = e.glossiness, t.alphaMap = null, t.envMap = void 0 === e.envMap ? null : e.envMap, t.envMapIntensity = 1, t.refractionRatio = .98, t.extensions.derivatives = !0, t
                },
                cloneMaterial: function (e) {
                    var t = e.clone();
                    t.isGLTFSpecularGlossinessMaterial = !0;
                    for (var n = this.specularGlossinessParams, r = 0, i = n.length; r < i; r++) {
                        var s = e[n[r]];
                        t[n[r]] = s && s.isColor ? s.clone() : s
                    }
                    return t
                },
                refreshUniforms: function (e, t, n, r, i) {
                    if (!0 === i.isGLTFSpecularGlossinessMaterial) {
                        var s, a = i.uniforms, o = i.defines;
                        a.opacity.value = i.opacity, a.diffuse.value.copy(i.color), a.emissive.value.copy(i.emissive).multiplyScalar(i.emissiveIntensity), a.map.value = i.map, a.specularMap.value = i.specularMap, a.alphaMap.value = i.alphaMap, a.lightMap.value = i.lightMap, a.lightMapIntensity.value = i.lightMapIntensity, a.aoMap.value = i.aoMap, a.aoMapIntensity.value = i.aoMapIntensity, i.map ? s = i.map : i.specularMap ? s = i.specularMap : i.displacementMap ? s = i.displacementMap : i.normalMap ? s = i.normalMap : i.bumpMap ? s = i.bumpMap : i.glossinessMap ? s = i.glossinessMap : i.alphaMap ? s = i.alphaMap : i.emissiveMap && (s = i.emissiveMap), void 0 !== s && (s.isWebGLRenderTarget && (s = s.texture), !0 === s.matrixAutoUpdate && s.updateMatrix(), a.uvTransform.value.copy(s.matrix)), i.envMap && (a.envMap.value = i.envMap, a.envMapIntensity.value = i.envMapIntensity, a.flipEnvMap.value = i.envMap.isCubeTexture ? -1 : 1, a.reflectivity.value = i.reflectivity, a.refractionRatio.value = i.refractionRatio, a.maxMipLevel.value = e.properties.get(i.envMap).__maxMipLevel), a.specular.value.copy(i.specular), a.glossiness.value = i.glossiness, a.glossinessMap.value = i.glossinessMap, a.emissiveMap.value = i.emissiveMap, a.bumpMap.value = i.bumpMap, a.normalMap.value = i.normalMap, a.displacementMap.value = i.displacementMap, a.displacementScale.value = i.displacementScale, a.displacementBias.value = i.displacementBias, null !== a.glossinessMap.value && void 0 === o.USE_GLOSSINESSMAP && (o.USE_GLOSSINESSMAP = "", o.USE_ROUGHNESSMAP = ""), null === a.glossinessMap.value && void 0 !== o.USE_GLOSSINESSMAP && (delete o.USE_GLOSSINESSMAP, delete o.USE_ROUGHNESSMAP)
                    }
                }
            }
        }

        function q(e, t) {
            if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
            this.name = G.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t
        }

        function $(e) {
            if (!e) throw new Error("THREE.GLTFLoader: Attempting to load .dds texture without importing THREE.DDSLoader");
            this.name = G.MSFT_TEXTURE_DDS, this.ddsLoader = e
        }

        function ee() {
            this.name = G.KHR_TEXTURE_TRANSFORM
        }

        function te(e, t, n) {
            this.json = e || {}, this.extensions = t || {}, this.options = n || {}, this.cache = new re, this.primitiveCache = {}, this.textureLoader = new _["db"](this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.fileLoader = new _["k"](this.options.manager), this.fileLoader.setResponseType("arraybuffer"), "use-credentials" === this.options.crossOrigin && this.fileLoader.setWithCredentials(!0)
        }

        function ne(e, t) {
            void 0 !== t.extras && ("object" === Object(w["a"])(t.extras) ? Object.assign(e.userData, t.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras))
        }

        function re() {
            var e = {};
            return {
                get: function (t) {
                    return e[t]
                }, add: function (t, n) {
                    e[t] = n
                }, remove: function (t) {
                    delete e[t]
                }, removeAll: function () {
                    e = {}
                }
            }
        }

        function ie(e, t, n) {
            for (var r in n.extensions) void 0 === e[r] && (t.userData.gltfExtensions = t.userData.gltfExtensions || {}, t.userData.gltfExtensions[r] = n.extensions[r])
        }

        function se(e, t) {
            return "string" !== typeof e || "" === e ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) ? e : /^data:.*,.*$/i.test(e) ? e : /^blob:.*$/i.test(e) ? e : t + e)
        }

        function ae(e, t, n) {
            var r = t.attributes, i = [];

            function s(t, r) {
                return n.getDependency("accessor", t).then(function (t) {
                    e.addAttribute(r, t)
                })
            }

            for (var a in r) {
                var o = j[a] || a.toLowerCase();
                o in e.attributes || i.push(s(r[a], o))
            }
            if (void 0 !== t.indices && !e.index) {
                var l = n.getDependency("accessor", t.indices).then(function (t) {
                    e.setIndex(t)
                });
                i.push(l)
            }
            return ne(e, t), Promise.all(i).then(function () {
                return void 0 !== t.targets ? oe(e, t.targets, n) : e
            })
        }

        function oe(e, t, n) {
            for (var r = !1, i = !1, s = 0, a = t.length; s < a; s++) {
                var o = t[s];
                if (void 0 !== o.POSITION && (r = !0), void 0 !== o.NORMAL && (i = !0), r && i) break
            }
            if (!r && !i) return Promise.resolve(e);
            for (var l = [], c = [], u = 0, p = t.length; u < p; u++) {
                var d = t[u];
                if (r) {
                    var f = void 0 !== d.POSITION ? n.getDependency("accessor", d.POSITION) : e.attributes.position;
                    l.push(f)
                }
                if (i) {
                    var m = void 0 !== d.NORMAL ? n.getDependency("accessor", d.NORMAL) : e.attributes.normal;
                    c.push(m)
                }
            }
            return Promise.all([Promise.all(l), Promise.all(c)]).then(function (n) {
                for (var s = n[0], a = n[1], o = 0, l = s.length; o < l; o++) e.attributes.position !== s[o] && (s[o] = fe(s[o]));
                for (var c = 0, u = a.length; c < u; c++) e.attributes.normal !== a[c] && (a[c] = fe(a[c]));
                for (var p = 0, d = t.length; p < d; p++) {
                    var f = t[p], m = "morphTarget" + p;
                    if (r && void 0 !== f.POSITION) {
                        var h = s[p];
                        h.name = m;
                        for (var v = e.attributes.position, g = 0, A = h.count; g < A; g++) h.setXYZ(g, h.getX(g) + v.getX(g), h.getY(g) + v.getY(g), h.getZ(g) + v.getZ(g))
                    }
                    if (i && void 0 !== f.NORMAL) {
                        var T = a[p];
                        T.name = m;
                        for (var b = e.attributes.normal, S = 0, M = T.count; S < M; S++) T.setXYZ(S, T.getX(S) + b.getX(S), T.getY(S) + b.getY(S), T.getZ(S) + b.getZ(S))
                    }
                }
                return r && (e.morphAttributes.position = s), i && (e.morphAttributes.normal = a), e
            })
        }

        function le(e) {
            var t, n = e.extensions && e.extensions[G.KHR_DRACO_MESH_COMPRESSION];
            return t = n ? "draco:".concat(n.bufferView, ":").concat(n.indices, ":").concat(ce(n.attributes)) : e.indices + ":" + ce(e.attributes) + ":" + e.mode, t
        }

        function ce(e) {
            for (var t = "", n = Object.keys(e).sort(), r = 0, i = n.length; r < i; r++) t += n[r] + ":" + e[n[r]] + ";";
            return t
        }

        function ue() {
            return r = r || new _["G"]({
                color: 16777215,
                emissive: 0,
                metalness: 1,
                roughness: 1,
                transparent: !1,
                depthTest: !0,
                side: _["l"]
            }), r
        }

        function pe(e, t) {
            if (e.updateMorphTargets(), void 0 !== t.weights) for (var n = 0, r = t.weights.length; n < r; n++) e.morphTargetInfluences[n] = t.weights[n];
            if (t.extras && Array.isArray(t.extras.targetNames)) {
                var i = t.extras.targetNames;
                if (e.morphTargetInfluences.length === i.length) {
                    e.morphTargetDictionary = {};
                    for (var s = 0, a = i.length; s < a; s++) e.morphTargetDictionary[i[s]] = s
                } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")
            }
        }

        function de(e, t, n, r) {
            _["p"].call(this, e, t, n, r)
        }

        function fe(e) {
            if (e.isInterleavedBufferAttribute) {
                for (var t = e.count, n = e.itemSize, r = e.array.slice(0, t * n), i = 0, s = 0; i < t; ++i) r[s++] = e.getX(i), n >= 2 && (r[s++] = e.getY(i)), n >= 3 && (r[s++] = e.getZ(i)), n >= 4 && (r[s++] = e.getW(i));
                return new _["d"](r, n, e.normalized)
            }
            return e.clone()
        }

        J.prototype.loadLight = function (e) {
            var t, n = this.lightDefs[e], r = new _["g"](16777215);
            void 0 !== n.color && r.fromArray(n.color);
            var i = void 0 !== n.range ? n.range : 0;
            switch (n.type) {
                case"directional":
                    t = new _["i"](r), t.target.position.set(0, 0, -1), t.add(t.target);
                    break;
                case"point":
                    t = new _["P"](r), t.distance = i;
                    break;
                case"spot":
                    t = new _["cb"](r), t.distance = i, n.spot = n.spot || {}, n.spot.innerConeAngle = void 0 !== n.spot.innerConeAngle ? n.spot.innerConeAngle : 0, n.spot.outerConeAngle = void 0 !== n.spot.outerConeAngle ? n.spot.outerConeAngle : Math.PI / 4, t.angle = n.spot.outerConeAngle, t.penumbra = 1 - n.spot.innerConeAngle / n.spot.outerConeAngle, t.target.position.set(0, 0, -1), t.add(t.target);
                    break;
                default:
                    throw new Error('THREE.GLTFLoader: Unexpected light type, "' + n.type + '".')
            }
            return t.position.set(0, 0, 0), t.decay = 2, void 0 !== n.intensity && (t.intensity = n.intensity), t.name = n.name || "light_" + e, Promise.resolve(t)
        }, Y.prototype.getMaterialType = function () {
            return _["F"]
        }, Y.prototype.extendParams = function (e, t, n) {
            var r = [];
            e.color = new _["g"](1, 1, 1), e.opacity = 1;
            var i = t.pbrMetallicRoughness;
            if (i) {
                if (Array.isArray(i.baseColorFactor)) {
                    var s = i.baseColorFactor;
                    e.color.fromArray(s), e.opacity = s[3]
                }
                void 0 !== i.baseColorTexture && r.push(n.assignTexture(e, "map", i.baseColorTexture))
            }
            return Promise.all(r)
        }, q.prototype.decodePrimitive = function (e, t) {
            var n, r = this.json, i = this.dracoLoader, s = e.extensions[this.name].bufferView,
                a = e.extensions[this.name].attributes, o = {}, l = {}, c = {};
            for (var u in a) n = j[u] || u.toLowerCase(), o[n] = a[u];
            for (u in e.attributes) if (n = j[u] || u.toLowerCase(), void 0 !== a[u]) {
                var p = r.accessors[e.attributes[u]], d = O[p.componentType];
                c[n] = d, l[n] = !0 === p.normalized
            }
            return t.getDependency("bufferView", s).then(function (e) {
                return new Promise(function (t) {
                    i.decodeDracoFile(e, function (e) {
                        for (var n in e.attributes) {
                            var r = e.attributes[n], i = l[n];
                            void 0 !== i && (r.normalized = i)
                        }
                        t(e)
                    }, o, c)
                })
            })
        }, ee.prototype.extendTexture = function (e, t) {
            return e = e.clone(), void 0 !== t.offset && e.offset.fromArray(t.offset), void 0 !== t.rotation && (e.rotation = t.rotation), void 0 !== t.scale && e.repeat.fromArray(t.scale), void 0 !== t.texCoord && console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.'), e.needsUpdate = !0, e
        }, te.prototype.parse = function (e, t) {
            var n = this, r = this.json, i = this.extensions;
            this.cache.removeAll(), this.markDefs(), Promise.all([this.getDependencies("scene"), this.getDependencies("animation"), this.getDependencies("camera")]).then(function (t) {
                var s = {
                    scene: t[0][r.scene || 0],
                    scenes: t[0],
                    animations: t[1],
                    cameras: t[2],
                    asset: r.asset,
                    parser: n,
                    userData: {}
                };
                ie(i, s, r), ne(s, r), e(s)
            }).catch(t)
        }, te.prototype.markDefs = function () {
            for (var e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [], r = {}, i = {}, s = 0, a = t.length; s < a; s++) for (var o = t[s].joints, l = 0, c = o.length; l < c; l++) e[o[l]].isBone = !0;
            for (var u = 0, p = e.length; u < p; u++) {
                var d = e[u];
                void 0 !== d.mesh && (void 0 === r[d.mesh] && (r[d.mesh] = i[d.mesh] = 0), r[d.mesh]++, void 0 !== d.skin && (n[d.mesh].isSkinnedMesh = !0))
            }
            this.json.meshReferences = r, this.json.meshUses = i
        }, te.prototype.getDependency = function (e, t) {
            var n = e + ":" + t, r = this.cache.get(n);
            if (!r) {
                switch (e) {
                    case"scene":
                        r = this.loadScene(t);
                        break;
                    case"node":
                        r = this.loadNode(t);
                        break;
                    case"mesh":
                        r = this.loadMesh(t);
                        break;
                    case"accessor":
                        r = this.loadAccessor(t);
                        break;
                    case"bufferView":
                        r = this.loadBufferView(t);
                        break;
                    case"buffer":
                        r = this.loadBuffer(t);
                        break;
                    case"material":
                        r = this.loadMaterial(t);
                        break;
                    case"texture":
                        r = this.loadTexture(t);
                        break;
                    case"skin":
                        r = this.loadSkin(t);
                        break;
                    case"animation":
                        r = this.loadAnimation(t);
                        break;
                    case"camera":
                        r = this.loadCamera(t);
                        break;
                    case"light":
                        r = this.extensions[G.KHR_LIGHTS_PUNCTUAL].loadLight(t);
                        break;
                    default:
                        throw new Error("Unknown type: " + e)
                }
                this.cache.add(n, r)
            }
            return r
        }, te.prototype.getDependencies = function (e) {
            var t = this.cache.get(e);
            if (!t) {
                var n = this, r = this.json[e + ("mesh" === e ? "es" : "s")] || [];
                t = Promise.all(r.map(function (t, r) {
                    return n.getDependency(e, r)
                })), this.cache.add(e, t)
            }
            return t
        }, te.prototype.loadBuffer = function (e) {
            var t = this.json.buffers[e], n = this.fileLoader;
            if (t.type && "arraybuffer" !== t.type) throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
            if (void 0 === t.uri && 0 === e) return Promise.resolve(this.extensions[G.KHR_BINARY_GLTF].body);
            var r = this.options;
            return new Promise(function (e, i) {
                n.load(se(t.uri, r.path), e, void 0, function () {
                    i(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'))
                })
            })
        }, te.prototype.loadBufferView = function (e) {
            var t = this.json.bufferViews[e];
            return this.getDependency("buffer", t.buffer).then(function (e) {
                var n = t.byteLength || 0, r = t.byteOffset || 0;
                return e.slice(r, r + n)
            })
        }, te.prototype.loadAccessor = function (e) {
            var t = this, n = this.json, r = this.json.accessors[e];
            if (void 0 === r.bufferView && void 0 === r.sparse) return Promise.resolve(null);
            var i = [];
            return void 0 !== r.bufferView ? i.push(this.getDependency("bufferView", r.bufferView)) : i.push(null), void 0 !== r.sparse && (i.push(this.getDependency("bufferView", r.sparse.indices.bufferView)), i.push(this.getDependency("bufferView", r.sparse.values.bufferView))), Promise.all(i).then(function (e) {
                var i, s, a = e[0], o = k[r.type], l = O[r.componentType], c = l.BYTES_PER_ELEMENT, u = c * o,
                    p = r.byteOffset || 0,
                    d = void 0 !== r.bufferView ? n.bufferViews[r.bufferView].byteStride : void 0,
                    f = !0 === r.normalized;
                if (d && d !== u) {
                    var m = Math.floor(p / d),
                        h = "InterleavedBuffer:" + r.bufferView + ":" + r.componentType + ":" + m + ":" + r.count,
                        v = t.cache.get(h);
                    v || (i = new l(a, m * d, r.count * d / c), v = new _["n"](i, d / c), t.cache.add(h, v)), s = new _["o"](v, o, p % d / c, f)
                } else i = null === a ? new l(r.count * o) : new l(a, p, r.count * o), s = new _["d"](i, o, f);
                if (void 0 !== r.sparse) {
                    var g = k.SCALAR, A = O[r.sparse.indices.componentType], T = r.sparse.indices.byteOffset || 0,
                        b = r.sparse.values.byteOffset || 0, S = new A(e[1], T, r.sparse.count * g),
                        M = new l(e[2], b, r.sparse.count * o);
                    null !== a && s.setArray(s.array.slice());
                    for (var y = 0, E = S.length; y < E; y++) {
                        var x = S[y];
                        if (s.setX(x, M[y * o]), o >= 2 && s.setY(x, M[y * o + 1]), o >= 3 && s.setZ(x, M[y * o + 2]), o >= 4 && s.setW(x, M[y * o + 3]), o >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")
                    }
                }
                return s
            })
        }, te.prototype.loadTexture = function (e) {
            var t, n = this, r = this.json, i = this.options, s = this.textureLoader,
                a = window.URL || window.webkitURL, o = r.textures[e], l = o.extensions || {};
            t = l[G.MSFT_TEXTURE_DDS] ? r.images[l[G.MSFT_TEXTURE_DDS].source] : r.images[o.source];
            var c = t.uri, u = !1;
            return void 0 !== t.bufferView && (c = n.getDependency("bufferView", t.bufferView).then(function (e) {
                u = !0;
                var n = new Blob([e], {type: t.mimeType});
                return c = a.createObjectURL(n), c
            })), Promise.resolve(c).then(function (e) {
                var t = _["z"].Handlers.get(e);
                return t || (t = l[G.MSFT_TEXTURE_DDS] ? n.extensions[G.MSFT_TEXTURE_DDS].ddsLoader : s), new Promise(function (n, r) {
                    t.load(se(e, i.path), n, void 0, r)
                })
            }).then(function (e) {
                !0 === u && a.revokeObjectURL(c), e.flipY = !1, void 0 !== o.name && (e.name = o.name), t.mimeType in Q && (e.format = Q[t.mimeType]);
                var n = r.samplers || {}, i = n[o.sampler] || {};
                return e.magFilter = U[i.magFilter] || _["w"], e.minFilter = U[i.minFilter] || _["x"], e.wrapS = H[i.wrapS] || _["W"], e.wrapT = H[i.wrapT] || _["W"], e
            })
        }, te.prototype.assignTexture = function (e, t, n) {
            var r = this;
            return this.getDependency("texture", n.index).then(function (i) {
                if (!i.isCompressedTexture) switch (t) {
                    case"aoMap":
                    case"emissiveMap":
                    case"metalnessMap":
                    case"normalMap":
                    case"roughnessMap":
                        i.format = _["V"];
                        break
                }
                if (r.extensions[G.KHR_TEXTURE_TRANSFORM]) {
                    var s = void 0 !== n.extensions ? n.extensions[G.KHR_TEXTURE_TRANSFORM] : void 0;
                    s && (i = r.extensions[G.KHR_TEXTURE_TRANSFORM].extendTexture(i, s))
                }
                e[t] = i
            })
        }, te.prototype.assignFinalMaterial = function (e) {
            var t = e.geometry, n = e.material, r = this.extensions, i = void 0 !== t.attributes.tangent,
                s = void 0 !== t.attributes.color, a = void 0 === t.attributes.normal, o = !0 === e.isSkinnedMesh,
                l = Object.keys(t.morphAttributes).length > 0, c = l && void 0 !== t.morphAttributes.normal;
            if (e.isPoints) {
                var u = "PointsMaterial:" + n.uuid, p = this.cache.get(u);
                p || (p = new _["R"], _["B"].prototype.copy.call(p, n), p.color.copy(n.color), p.map = n.map, p.lights = !1, this.cache.add(u, p)), n = p
            } else if (e.isLine) {
                var d = "LineBasicMaterial:" + n.uuid, f = this.cache.get(d);
                f || (f = new _["t"], _["B"].prototype.copy.call(f, n), f.color.copy(n.color), f.lights = !1, this.cache.add(d, f)), n = f
            }
            if (i || s || a || o || l) {
                var m = "ClonedMaterial:" + n.uuid + ":";
                n.isGLTFSpecularGlossinessMaterial && (m += "specular-glossiness:"), o && (m += "skinning:"), i && (m += "vertex-tangents:"), s && (m += "vertex-colors:"), a && (m += "flat-shading:"), l && (m += "morph-targets:"), c && (m += "morph-normals:");
                var h = this.cache.get(m);
                h || (h = n.isGLTFSpecularGlossinessMaterial ? r[G.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].cloneMaterial(n) : n.clone(), o && (h.skinning = !0), i && (h.vertexTangents = !0), s && (h.vertexColors = _["jb"]), a && (h.flatShading = !0), l && (h.morphTargets = !0), c && (h.morphNormals = !0), this.cache.add(m, h)), n = h
            }
            n.aoMap && void 0 === t.attributes.uv2 && void 0 !== t.attributes.uv && (console.log("THREE.GLTFLoader: Duplicating UVs to support aoMap."), t.addAttribute("uv2", new _["d"](t.attributes.uv.array, 2))), n.isGLTFSpecularGlossinessMaterial && (e.onBeforeRender = r[G.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].refreshUniforms), e.material = n
        }, te.prototype.loadMaterial = function (e) {
            var t, n = this, r = this.json, i = this.extensions, s = r.materials[e], a = {}, o = s.extensions || {},
                l = [];
            if (o[G.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
                var c = i[G.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
                t = c.getMaterialType(), l.push(c.extendParams(a, s, n))
            } else if (o[G.KHR_MATERIALS_UNLIT]) {
                var u = i[G.KHR_MATERIALS_UNLIT];
                t = u.getMaterialType(), l.push(u.extendParams(a, s, n))
            } else {
                t = _["G"];
                var p = s.pbrMetallicRoughness || {};
                if (a.color = new _["g"](1, 1, 1), a.opacity = 1, Array.isArray(p.baseColorFactor)) {
                    var d = p.baseColorFactor;
                    a.color.fromArray(d), a.opacity = d[3]
                }
                void 0 !== p.baseColorTexture && l.push(n.assignTexture(a, "map", p.baseColorTexture)), a.metalness = void 0 !== p.metallicFactor ? p.metallicFactor : 1, a.roughness = void 0 !== p.roughnessFactor ? p.roughnessFactor : 1, void 0 !== p.metallicRoughnessTexture && (l.push(n.assignTexture(a, "metalnessMap", p.metallicRoughnessTexture)), l.push(n.assignTexture(a, "roughnessMap", p.metallicRoughnessTexture)))
            }
            !0 === s.doubleSided && (a.side = _["j"]);
            var f = s.alphaMode || X.OPAQUE;
            return f === X.BLEND ? a.transparent = !0 : (a.transparent = !1, f === X.MASK && (a.alphaTest = void 0 !== s.alphaCutoff ? s.alphaCutoff : .5)), void 0 !== s.normalTexture && t !== _["F"] && (l.push(n.assignTexture(a, "normalMap", s.normalTexture)), a.normalScale = new _["hb"](1, 1), void 0 !== s.normalTexture.scale && a.normalScale.set(s.normalTexture.scale, s.normalTexture.scale)), void 0 !== s.occlusionTexture && t !== _["F"] && (l.push(n.assignTexture(a, "aoMap", s.occlusionTexture)), void 0 !== s.occlusionTexture.strength && (a.aoMapIntensity = s.occlusionTexture.strength)), void 0 !== s.emissiveFactor && t !== _["F"] && (a.emissive = (new _["g"]).fromArray(s.emissiveFactor)), void 0 !== s.emissiveTexture && t !== _["F"] && l.push(n.assignTexture(a, "emissiveMap", s.emissiveTexture)), Promise.all(l).then(function () {
                var e;
                return e = t === _["Z"] ? i[G.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a) : new t(a), void 0 !== s.name && (e.name = s.name), e.map && (e.map.encoding = _["lb"]), e.emissiveMap && (e.emissiveMap.encoding = _["lb"]), e.specularMap && (e.specularMap.encoding = _["lb"]), ne(e, s), s.extensions && ie(i, e, s), e
            })
        }, te.prototype.loadGeometries = function (e) {
            var t = this, n = this.extensions, r = this.primitiveCache;

            function i(e) {
                return n[G.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e, t).then(function (n) {
                    return ae(n, e, t)
                })
            }

            for (var s = [], a = 0, o = e.length; a < o; a++) {
                var l, c = e[a], u = le(c), p = r[u];
                if (p) s.push(p.promise); else l = c.extensions && c.extensions[G.KHR_DRACO_MESH_COMPRESSION] ? i(c) : ae(new _["e"], c, t), r[u] = {
                    primitive: c,
                    promise: l
                }, s.push(l)
            }
            return Promise.all(s)
        }, te.prototype.loadMesh = function (e) {
            for (var t = this, n = this.json, r = n.meshes[e], i = r.primitives, s = [], a = 0, o = i.length; a < o; a++) {
                var l = void 0 === i[a].material ? ue() : this.getDependency("material", i[a].material);
                s.push(l)
            }
            return Promise.all(s).then(function (n) {
                return t.loadGeometries(i).then(function (s) {
                    for (var a = [], o = 0, l = s.length; o < l; o++) {
                        var c, u = s[o], p = i[o], d = n[o];
                        if (p.mode === B.TRIANGLES || p.mode === B.TRIANGLE_STRIP || p.mode === B.TRIANGLE_FAN || void 0 === p.mode) c = !0 === r.isSkinnedMesh ? new _["bb"](u, d) : new _["E"](u, d), !0 !== c.isSkinnedMesh || c.geometry.attributes.skinWeight.normalized || c.normalizeSkinWeights(), p.mode === B.TRIANGLE_STRIP ? c.drawMode = _["fb"] : p.mode === B.TRIANGLE_FAN && (c.drawMode = _["eb"]); else if (p.mode === B.LINES) c = new _["v"](u, d); else if (p.mode === B.LINE_STRIP) c = new _["s"](u, d); else if (p.mode === B.LINE_LOOP) c = new _["u"](u, d); else {
                            if (p.mode !== B.POINTS) throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + p.mode);
                            c = new _["Q"](u, d)
                        }
                        Object.keys(c.geometry.morphAttributes).length > 0 && pe(c, r), c.name = r.name || "mesh_" + e, s.length > 1 && (c.name += "_" + o), ne(c, r), t.assignFinalMaterial(c), a.push(c)
                    }
                    if (1 === a.length) return a[0];
                    for (var f = new _["m"], m = 0, h = a.length; m < h; m++) f.add(a[m]);
                    return f
                })
            })
        }, te.prototype.loadCamera = function (e) {
            var t, n = this.json.cameras[e], r = n[n.type];
            if (r) return "perspective" === n.type ? t = new _["O"](_["C"].radToDeg(r.yfov), r.aspectRatio || 1, r.znear || 1, r.zfar || 2e6) : "orthographic" === n.type && (t = new _["N"](r.xmag / -2, r.xmag / 2, r.ymag / 2, r.ymag / -2, r.znear, r.zfar)), void 0 !== n.name && (t.name = n.name), ne(t, n), Promise.resolve(t);
            console.warn("THREE.GLTFLoader: Missing camera parameters.")
        }, te.prototype.loadSkin = function (e) {
            var t = this.json.skins[e], n = {joints: t.joints};
            return void 0 === t.inverseBindMatrices ? Promise.resolve(n) : this.getDependency("accessor", t.inverseBindMatrices).then(function (e) {
                return n.inverseBindMatrices = e, n
            })
        }, te.prototype.loadAnimation = function (e) {
            for (var t = this.json, n = t.animations[e], r = [], i = [], s = [], a = [], o = [], l = 0, c = n.channels.length; l < c; l++) {
                var u = n.channels[l], p = n.samplers[u.sampler], d = u.target, f = void 0 !== d.node ? d.node : d.id,
                    m = void 0 !== n.parameters ? n.parameters[p.input] : p.input,
                    h = void 0 !== n.parameters ? n.parameters[p.output] : p.output;
                r.push(this.getDependency("node", f)), i.push(this.getDependency("accessor", m)), s.push(this.getDependency("accessor", h)), a.push(p), o.push(d)
            }
            return Promise.all([Promise.all(r), Promise.all(i), Promise.all(s), Promise.all(a), Promise.all(o)]).then(function (t) {
                for (var r = t[0], i = t[1], s = t[2], a = t[3], o = t[4], l = [], c = 0, u = r.length; c < u; c++) {
                    var p = r[c], d = i[c], f = s[c], m = a[c], h = o[c];
                    if (void 0 !== p) {
                        var v;
                        switch (p.updateMatrix(), p.matrixAutoUpdate = !0, K[h.path]) {
                            case K.weights:
                                v = _["L"];
                                break;
                            case K.rotation:
                                v = _["T"];
                                break;
                            case K.position:
                            case K.scale:
                            default:
                                v = _["ib"];
                                break
                        }
                        var g = p.name ? p.name : p.uuid, A = void 0 !== m.interpolation ? V[m.interpolation] : _["r"],
                            T = [];
                        K[h.path] === K.weights ? p.traverse(function (e) {
                            !0 === e.isMesh && e.morphTargetInfluences && T.push(e.name ? e.name : e.uuid)
                        }) : T.push(g);
                        var b = f.array;
                        if (f.normalized) {
                            var S;
                            if (b.constructor === Int8Array) S = 1 / 127; else if (b.constructor === Uint8Array) S = 1 / 255; else if (b.constructor === Int16Array) S = 1 / 32767; else {
                                if (b.constructor !== Uint16Array) throw new Error("THREE.GLTFLoader: Unsupported output accessor component type.");
                                S = 1 / 65535
                            }
                            for (var M = new Float32Array(b.length), y = 0, E = b.length; y < E; y++) M[y] = b[y] * S;
                            b = M
                        }
                        for (var x = 0, R = T.length; x < R; x++) {
                            var w = new v(T[x] + "." + K[h.path], d.array, b, A);
                            "CUBICSPLINE" === m.interpolation && (w.createInterpolant = function (e) {
                                return new de(this.times, this.values, this.getValueSize() / 3, e)
                            }, w.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0), l.push(w)
                        }
                    }
                }
                var L = void 0 !== n.name ? n.name : "animation_" + e;
                return new _["b"](L, void 0, l)
            })
        }, te.prototype.loadNode = function (e) {
            var t = this.json, n = this.extensions, r = this, i = t.meshReferences, s = t.meshUses, a = t.nodes[e];
            return function () {
                var e = [];
                return void 0 !== a.mesh && e.push(r.getDependency("mesh", a.mesh).then(function (e) {
                    var t;
                    if (i[a.mesh] > 1) {
                        var n = s[a.mesh]++;
                        t = e.clone(), t.name += "_instance_" + n, t.onBeforeRender = e.onBeforeRender;
                        for (var r = 0, o = t.children.length; r < o; r++) t.children[r].name += "_instance_" + n, t.children[r].onBeforeRender = e.children[r].onBeforeRender
                    } else t = e;
                    return void 0 !== a.weights && t.traverse(function (e) {
                        if (e.isMesh) for (var t = 0, n = a.weights.length; t < n; t++) e.morphTargetInfluences[t] = a.weights[t]
                    }), t
                })), void 0 !== a.camera && e.push(r.getDependency("camera", a.camera)), a.extensions && a.extensions[G.KHR_LIGHTS_PUNCTUAL] && void 0 !== a.extensions[G.KHR_LIGHTS_PUNCTUAL].light && e.push(r.getDependency("light", a.extensions[G.KHR_LIGHTS_PUNCTUAL].light)), Promise.all(e)
            }().then(function (e) {
                var t;
                if (t = !0 === a.isBone ? new _["c"] : e.length > 1 ? new _["m"] : 1 === e.length ? e[0] : new _["M"], t !== e[0]) for (var r = 0, i = e.length; r < i; r++) t.add(e[r]);
                if (void 0 !== a.name && (t.userData.name = a.name, t.name = _["S"].sanitizeNodeName(a.name)), ne(t, a), a.extensions && ie(n, t, a), void 0 !== a.matrix) {
                    var s = new _["D"];
                    s.fromArray(a.matrix), t.applyMatrix(s)
                } else void 0 !== a.translation && t.position.fromArray(a.translation), void 0 !== a.rotation && t.quaternion.fromArray(a.rotation), void 0 !== a.scale && t.scale.fromArray(a.scale);
                return t
            })
        }, te.prototype.loadScene = function () {
            function e(t, n, r, i) {
                var s = r.nodes[t];
                return i.getDependency("node", t).then(function (e) {
                    return void 0 === s.skin ? e : i.getDependency("skin", s.skin).then(function (e) {
                        t = e;
                        for (var n = [], r = 0, s = t.joints.length; r < s; r++) n.push(i.getDependency("node", t.joints[r]));
                        return Promise.all(n)
                    }).then(function (n) {
                        return e.traverse(function (e) {
                            if (e.isMesh) {
                                for (var r = [], i = [], s = 0, a = n.length; s < a; s++) {
                                    var o = n[s];
                                    if (o) {
                                        r.push(o);
                                        var l = new _["D"];
                                        void 0 !== t.inverseBindMatrices && l.fromArray(t.inverseBindMatrices.array, 16 * s), i.push(l)
                                    } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[s])
                                }
                                e.bind(new _["ab"](r, i), e.matrixWorld)
                            }
                        }), e
                    });
                    var t
                }).then(function (t) {
                    n.add(t);
                    var a = [];
                    if (s.children) for (var o = s.children, l = 0, c = o.length; l < c; l++) {
                        var u = o[l];
                        a.push(e(u, t, r, i))
                    }
                    return Promise.all(a)
                })
            }

            return function () {
                var t = Object(L["a"])(regeneratorRuntime.mark(function t(n) {
                    var r, i, s, a, o, l, c, u, p;
                    return regeneratorRuntime.wrap(function (t) {
                        while (1) switch (t.prev = t.next) {
                            case 0:
                                for (r = this.json, i = this.extensions, s = this.json.scenes[n], a = this, o = new _["X"], void 0 !== s.name && (o.name = s.name), ne(o, s), s.extensions && ie(i, o, s), l = s.nodes || [], c = [], u = 0, p = l.length; u < p; u++) c.push(e(l[u], o, r, a));
                                return t.next = 13, Promise.all(c);
                            case 13:
                                return t.abrupt("return", o);
                            case 14:
                            case"end":
                                return t.stop()
                        }
                    }, t, this)
                }));

                function n(e) {
                    return t.apply(this, arguments)
                }

                return n
            }()
        }(), de.prototype = Object.create(_["p"].prototype), de.prototype.constructor = de, de.prototype.copySampleValue_ = function (e) {
            for (var t = this.resultBuffer, n = this.sampleValues, r = this.valueSize, i = e * r * 3 + r, s = 0; s !== r; s++) t[s] = n[i + s];
            return t
        }, de.prototype.beforeStart_ = de.prototype.copySampleValue_, de.prototype.afterEnd_ = de.prototype.copySampleValue_, de.prototype.interpolate_ = function (e, t, n, r) {
            for (var i = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = 2 * a, l = 3 * a, c = r - t, u = (n - t) / c, p = u * u, d = p * u, f = e * l, m = f - l, h = -2 * d + 3 * p, v = d - p, g = 1 - h, A = v - p + u, T = 0; T !== a; T++) {
                var b = s[m + T + a], S = s[m + T + o] * c, M = s[f + T + a], y = s[f + T] * c;
                i[T] = g * b + A * S + h * M + v * y
            }
            return i
        };
        var me = {
                components: {Footer: R}, data: function () {
                    return {percent: "100%", isFixed: !1}
                }, mounted: function () {
                    var e = this.$refs.comCanvas, t = new _["X"], n = new Z;
                    n.load("/static/model/23-AGWN041-1.gltf", function (e) {
                        console.log("1:obj"), e.scene.children[0].position.set(0, -1, 0), e.scene.name = "root", e.scene.scale.set(2.5, 2.5, 2.5), t.add(e.scene)
                    }, function (e) {
                        console.log(e.loaded / e.total * 100 + "%loaded")
                    }, function (e) {
                        console.log("Error!", e)
                    });
                    var r = new _["a"](5592405);
                    r.intensity = .5, t.add(r), console.log(t);
                    var i = 850, s = 850, a = new _["O"](45, i / s, .1, 1e4);
                    a.position.set(0, 0, 40), a.lookAt(t.position);
                    var o = new _["kb"]({canvas: e, alpha: !0});

                    function l() {
                        o.render(t, a), t.traverse(function (e) {
                            "root" === e.name && (e.rotation.y += .01)
                        }), requestAnimationFrame(l), e.style.width = "100%", e.style.height = "180%"
                    }

                    l.alpha = 0, o.setSize(i, s), o.gammaInput = !0, o.gammaOutput = !0, l();
                    var c = document.documentElement.clientHeight || document.body.clientHeight,
                        u = document.documentElement.clientWidth || document.body.clientWidth, p = 0;
                    p = u <= 768 ? this.$refs.home.offsetHeight + 200 : this.$refs.home.offsetHeight, this.isFixed = !(p > c)
                }
            }, he = me, ve = (n("2678"), Object(p["a"])(he, T, b, !1, null, "2d604f32", null)), ge = ve.exports,
            Ae = function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {
                    ref: "introduce",
                    staticClass: "introduce-wrapper"
                }, [n("Title", {
                    attrs: {
                        titleImg: e.img,
                        englistTitle: "Product introduction"
                    }
                }), e._l(e.modelList, function (t) {
                    return n("div", {
                        key: t.index,
                        staticClass: "model-list"
                    }, [n("Model", {
                        attrs: {
                            mainTitle: t.mainTitle,
                            explain: t.explain,
                            num: t.index,
                            img: t.img,
                            hover: t.hover,
                            circleColor: t.circleColor,
                            isMobile: e.isMobile,
                            mobileBg: t.hover,
                            mobileCircle: t.circleColor
                        }
                    })], 1)
                }), n("Footer", {attrs: {isFixed: e.isFixed}})], 2)
            }, Te = [], be = function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {staticClass: "title-wrapper"}, [n("div", {staticClass: "title"}, [n("img", {attrs: {src: e.titleImg}}), n("span", [e._v(e._s(e.englistTitle))])]), e.isPartner ? n("div", {staticClass: "separate"}, [n("div", {staticClass: "separate-top"}), n("div", {staticClass: "separate-bottom"})]) : e._e()])
            }, Se = [], Me = {props: {titleImg: String, englistTitle: String, isPartner: Boolean}}, ye = Me,
            Ee = (n("8e77"), Object(p["a"])(ye, be, Se, !1, null, "7dc092c6", null)), xe = Ee.exports,
            Re = function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {
                    staticClass: "model-wrapper",
                    style: {background: e.isMobile ? e.mobileBg : e.bgColor},
                    on: {mouseenter: e.enter, mouseleave: e.leave}
                }, [n("div", {staticClass: "model"}, [n("h3", [n("span", {staticClass: "round"}), e._v(e._s(e.mainTitle))]), n("p", [e._v(e._s(e.explain))])]), n("div", {staticClass: "shoes-box"}, [n("div", {staticClass: "shoes-inner"}, [n("img", {
                    attrs: {
                        src: "img",
                        alt: e.mainTitle
                    }
                })])]), n("div", {staticClass: "num-box"}, [n("div", {
                    staticClass: "num-round",
                    style: {borderColor: e.isMobile ? e.mobileCircle : e.circle}
                }), n("span", [e._v(e._s(e.num))])])])
            }, _e = [], we = {
                props: {
                    mainTitle: String,
                    explain: String,
                    img: String,
                    num: String,
                    circleColor: String,
                    hover: String,
                    isMobile: Boolean,
                    mobileBg: String,
                    mobileCircle: String
                }, data: function () {
                    return {bgColor: "", circle: ""}
                }, methods: {
                    enter: function () {
                        this.bgColor = this.hover, this.circle = this.circleColor
                    }, leave: function () {
                        this.bgColor = "", this.circle = ""
                    }
                }
            }, Le = we, Ce = (n("c803"), Object(p["a"])(Le, Re, _e, !1, null, "9be52f7a", null)), Ie = Ce.exports, Ne = {
                components: {Title: xe, Model: Ie, Footer: R}, data: function () {
                    return {
                        isFixed: !1,
                        isMobile: !1,
                        img: n("e3c9"),
                        modelList: [{
                            mainTitle: "3D模型",
                            explain: "让鞋款在小程序上能直接用3d展示，可以将鞋子360度旋转 省去更多的主图效果，点击3D空间即可体验更有趣的购鞋交互体验。3d模型在移动端展示是未来企业为客户提供最好的物品展示方式，这对企业在未来市场竞争至关重要。",
                            index: "01",
                            img: "",
                            hover: "#09D293",
                            circleColor: "#1A09D5"
                        }, {
                            mainTitle: "AR展陈",
                            explain: "通过ar增强现实技术与智能手机的结合，运用小程序帮助你看到鞋款’穿’在脚上效果，可以模拟出鞋子在光线不同的各种效果。可以增强用户网上购买鞋子更好的用户体验，解决用户经常收到鞋发现适合自己而退货的问题。",
                            index: "02",
                            img: "",
                            hover: "#0DC7D8",
                            circleColor: "#2AFFEA"
                        }, {
                            mainTitle: "AR试穿",
                            explain: "通过ar增强现实技术与智能手机的结合，运用小程序帮助你看到鞋款’穿’在脚上效果，可以模拟出鞋子在光线不同的各种效果。可以增强用户网上购买鞋子更好的用户体验，解决用户经常收到鞋发现适合自己而退货的问题。",
                            index: "03",
                            img: "",
                            hover: "#1866DB",
                            circleColor: "#43FFC4"
                        }]
                    }
                }, mounted: function () {
                    var e = document.documentElement.clientHeight || document.body.clientHeight,
                        t = document.documentElement.clientWidth || document.body.clientWidth, n = 0;
                    n = t <= 768 ? this.$refs.introduce.offsetHeight + 200 : this.$refs.introduce.offsetHeight, this.isFixed = !(n > e), this.isMobile = t <= 768
                }
            }, De = Ne, Fe = (n("166d"), Object(p["a"])(De, Ae, Te, !1, null, "7765017a", null)), Pe = Fe.exports,
            Ge = function () {
                var e = this, t = e.$createElement, r = e._self._c || t;
                return r("div", {
                    ref: "partner",
                    staticClass: "partner-wrapper"
                }, [r("div", {staticClass: "partner-title"}, [r("Title", {
                    attrs: {
                        titleImg: e.img,
                        englistTitle: "Cooperative partner",
                        isPartner: ""
                    }
                })], 1), r("div", {staticClass: "content"}, [r("div", {staticClass: "left-box"}), e.isMobile ? e._e() : r("div", {
                    ref: "box",
                    staticClass: "scroll"
                }, [r("img", {
                    ref: "img",
                    attrs: {src: n("08cb")}
                }), r("img", {attrs: {src: n("08cb")}})]), e.isMobile ? r("div", {staticClass: "scroll"}, [r("img", {attrs: {src: n("8020")}})]) : e._e(), r("div", {staticClass: "right-box"})]), r("Footer", {attrs: {isFixed: e.isFixed}})], 1)
            }, Be = [], Oe = {
                components: {Title: xe, Footer: R}, data: function () {
                    return {isFixed: !1, isMobile: !1, img: n("f2ab")}
                }, mounted: function () {
                    var e = document.documentElement.clientWidth || document.body.clientWidth;
                    e > 768 ? (this.toScroll(), this.isMobile = !1) : this.isMobile = !0, this.onFixed()
                }, methods: {
                    toScroll: function () {
                        var e = this.$refs.box, t = this.$refs.img, n = 0;
                        e.style = "width: ".concat(2 * t.offsetWidth, "px "), setInterval(function () {
                            n++, n >= t.offsetWidth && (n = 0), e.style = "transform: translateX(-" + n + "px)"
                        }, 10)
                    }, onFixed: function () {
                        var e = document.documentElement.clientHeight || document.body.clientHeight,
                            t = document.documentElement.clientWidth || document.body.clientWidth, n = 0;
                        n = t <= 768 ? this.$refs.partner.offsetHeight + 200 : this.$refs.partner.offsetHeight, this.isFixed = !(n > e)
                    }
                }
            }, Ue = Oe, He = (n("13fd"), Object(p["a"])(Ue, Ge, Be, !1, null, "9b914492", null)), ke = He.exports,
            je = function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {ref: "About", staticClass: "about-wrapper"}, [n("Title", {
                    attrs: {
                        titleImg: e.img,
                        englistTitle: "About zugo"
                    }
                }), e._m(0), n("Footer", {attrs: {isFixed: e.isFixed}})], 1)
            }, Ke = [function () {
                var e = this, t = e.$createElement, r = e._self._c || t;
                return r("div", {staticClass: "content"}, [r("div", {staticClass: "zg-logo"}, [r("img", {attrs: {src: n("8c45")}})]), r("div", {staticClass: "zg-container"}, [r("h2", [e._v("About zugo")]), r("h3", [e._v("关于足购")]), r("p", [e._v("作为全球领先的移动增强现实交互公司，“足购科技”拉近传统鞋业与数字媒体之间的距离。")]), r("p", [e._v("使用“足购”的增强现实交互功能，消费者可以通过他们的智能手机或平板电脑获得神奇的交互体验。这是革命性的营销方式！")])])])
            }], Ve = {
                components: {Title: xe, Footer: R}, data: function () {
                    return {isFixed: !1, img: n("66bc")}
                }, mounted: function () {
                    var e = document.documentElement.clientHeight || document.body.clientHeight,
                        t = document.documentElement.clientWidth || document.body.clientWidth, n = 0;
                    n = t <= 768 ? this.$refs.About.offsetHeight + 200 : this.$refs.About.offsetHeight, this.isFixed = !(n > e)
                }
            }, Xe = Ve, Qe = (n("9abc"), Object(p["a"])(Xe, je, Ke, !1, null, "57c6711d", null)), Ze = Qe.exports,
            We = function () {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {
                    ref: "contact",
                    staticClass: "contact-wrapper"
                }, [n("div", {staticClass: "banner"}), e._m(0), n("Footer", {attrs: {isFixed: e.isFixed}})], 1)
            }, Je = [function () {
                var e = this, t = e.$createElement, r = e._self._c || t;
                return r("div", {staticClass: "contact"}, [r("div", {staticClass: "title"}, [r("img", {attrs: {src: n("e82c")}}), r("p", [e._v("Contact us")])]), r("div", {staticClass: "container"}, [r("p", [e._v("电话：0571-88581570")]), r("p", [e._v("联系人：李先生")]), r("p", [e._v("手机：138-5772-5101")]), r("p", [e._v("邮件：liwangyang@zugo.vip")]), r("p", [e._v("地址：杭州市余杭区仓恒生科技园16号楼2单元5楼")])])])
            }], Ye = {
                components: {Footer: R}, data: function () {
                    return {isFixed: !1, isMobile: !1}
                }, mounted: function () {
                    var e = document.documentElement.clientHeight || document.body.clientHeight,
                        t = document.documentElement.clientWidth || document.body.clientWidth, n = 0;
                    t <= 768 ? (n = this.$refs.contact.offsetHeight + 200, this.isMobile = !0) : (n = this.$refs.contact.offsetHeight, this.isMobile = !1), this.isFixed = !(n > e)
                }
            }, ze = Ye, qe = (n("a167"), Object(p["a"])(ze, We, Je, !1, null, "4d367e56", null)), $e = qe.exports;
        i["a"].use(A["a"]);
        var et = new A["a"]({
            routes: [{path: "/", redirect: "/home"}, {
                path: "/home",
                component: ge
            }, {path: "/introduce", component: Pe}, {path: "/partner", component: ke}, {
                path: "/about",
                component: Ze
            }, {path: "/contact", component: $e}]
        }), tt = n("2f62");
        i["a"].use(tt["a"]);
        var nt = new tt["a"].Store({state: {}, mutations: {}, actions: {}});
        n("9536");
        i["a"].config.productionTip = !1, new i["a"]({
            router: et, store: nt, render: function (e) {
                return e(g)
            }
        }).$mount("#app")
    }, "5a51": function (e, t, n) {
        "use strict";
        var r = n("027b"), i = n.n(r);
        i.a
    }, "5ae1": function (e, t, n) {
        "use strict";
        var r = n("e52b"), i = n.n(r);
        i.a
    }, "61f8": function (e, t, n) {
        e.exports = n.p + "img/art-title.ca01228b.png"
    }, "66bc": function (e, t, n) {
        e.exports = n.p + "img/about-title.1b877125.png"
    }, "6cb6": function (e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACBoAAABWCAMAAABczZeuAAAAe1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////NgkbwAAAAKHRSTlMAH+Dwj+hXGMf5BziAEHCoQAIb5NvKMwv1riVmmb9M7hO1eyuJoNRdifJApQAADH1JREFUeNrs2tuSojAQgOEgECQcTBQIwhAPoO77P+FO7V7MxUhD0RUU6e+eWB0j9Q8DI6uUpLFF15prBhCRuca90oSNpPZtCq0DXGXdlUsNTG/Z8C4u60TBZ8v+vqbtXrGnNK+tf5vXqBUTdh7Yrb5JwHUIIZ8uiT2LuvShGUBL03m94vFp4BQxtA5wlXUdlxqYHq/75iF2cVEn6kdXc2hf7eji/jR4pJ1nVxdHlZiw88AvsW8SYB1KA0I+n3N3LfKbW8AASd1t3F53h40kCp5B6wBXWZfxSADTo/n5dpv7iF1c1In6sUm5BvbVilPWtElPGgS3xncH4D/9rKbsPPBL7JkEXIcQ8umczR+Lwu0OToPUc/uv3oxPg4j70DrAVbaVmSkEMD1W6DaX/B5idnFJJ+pn7kNtNLCvVoT3S6XZc8FuC3wL1j4d3nn4lwhMAqxDaUDI56M0sKu8fO0FND1SmDUyOuarS4PvuSvN5k6DU8oT9bI08B9SK0oDQshvy7qRUxq4t/gMTo9UNreq2m1XlwYlcLKspUG4eUjBXpUG7l1WglEaEEJ+W9aNfPVp4GamFdD06PVlJfYrTAO/NnruNAjzo6PZq9LA9dJAMEoDQsgTy7qRrz0NwkNeBAqeHv9YPVhfGpQbU9hJLvifQ2f2qjQIDynXjNKAEPLMsm7ka08D9+t6VvD0GG72kFqtMA3K5uYINncaHEwrXpUGYX6sNKM0IIQ8tawb+drTwI/rBJ4e+wpiJdga02DXndncaeDeo0Ah0gD/xILSgBDy3LJu5OtOg/CQt4mCp0c+M0gEW2MaAH+/A/uKf6FUMUQaYF9BVJQGhJCZ7HN/qrL87DQIQx/nkB8R0/9xT/Dq/58ZvF0a7HP02fGHAG9wIPYVlkFPgIbT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"
    }, 8020: function (e, t, n) {
        e.exports = n.p + "img/mobile-partner.a4d506c2.png"
    }, "8c45": function (e, t, n) {
        e.exports = n.p + "img/about-logo.03cf7111.png"
    }, "8d33": function (e, t, n) {
    }, "8e77": function (e, t, n) {
        "use strict";
        var r = n("282a"), i = n.n(r);
        i.a
    }, 9536: function (e, t, n) {
    }, "9abc": function (e, t, n) {
        "use strict";
        var r = n("e9bf"), i = n.n(r);
        i.a
    }, a167: function (e, t, n) {
        "use strict";
        var r = n("4f30"), i = n.n(r);
        i.a
    }, c803: function (e, t, n) {
        "use strict";
        var r = n("5422"), i = n.n(r);
        i.a
    }, e3c9: function (e, t, n) {
        e.exports = n.p + "img/introduce-title.0d59bfa5.png"
    }, e52b: function (e, t, n) {
    }, e82c: function (e, t, n) {
        e.exports = n.p + "img/contact-title.35629e66.png"
    }, e9bf: function (e, t, n) {
    }, f2ab: function (e, t, n) {
        e.exports = n.p + "img/partner-title.866a9681.png"
    }
});
//# sourceMappingURL=app.04f8f3ae.js.map