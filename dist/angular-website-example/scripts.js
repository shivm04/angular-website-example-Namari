(function() {
  var MutationObserver, Util, WeakMap, getComputedStyle, getComputedStyleRX,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  Util = (function() {
    function Util() {}

    Util.prototype.extend = function(custom, defaults) {
      var key, value;
      for (key in defaults) {
        value = defaults[key];
        if (custom[key] == null) {
          custom[key] = value;
        }
      }
      return custom;
    };

    Util.prototype.isMobile = function(agent) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
    };

    Util.prototype.createEvent = function(event, bubble, cancel, detail) {
      var customEvent;
      if (bubble == null) {
        bubble = false;
      }
      if (cancel == null) {
        cancel = false;
      }
      if (detail == null) {
        detail = null;
      }
      if (document.createEvent != null) {
        customEvent = document.createEvent('CustomEvent');
        customEvent.initCustomEvent(event, bubble, cancel, detail);
      } else if (document.createEventObject != null) {
        customEvent = document.createEventObject();
        customEvent.eventType = event;
      } else {
        customEvent.eventName = event;
      }
      return customEvent;
    };

    Util.prototype.emitEvent = function(elem, event) {
      if (elem.dispatchEvent != null) {
        return elem.dispatchEvent(event);
      } else if (event in (elem != null)) {
        return elem[event]();
      } else if (("on" + event) in (elem != null)) {
        return elem["on" + event]();
      }
    };

    Util.prototype.addEvent = function(elem, event, fn) {
      if (elem.addEventListener != null) {
        return elem.addEventListener(event, fn, false);
      } else if (elem.attachEvent != null) {
        return elem.attachEvent("on" + event, fn);
      } else {
        return elem[event] = fn;
      }
    };

    Util.prototype.removeEvent = function(elem, event, fn) {
      if (elem.removeEventListener != null) {
        return elem.removeEventListener(event, fn, false);
      } else if (elem.detachEvent != null) {
        return elem.detachEvent("on" + event, fn);
      } else {
        return delete elem[event];
      }
    };

    Util.prototype.innerHeight = function() {
      if ('innerHeight' in window) {
        return window.innerHeight;
      } else {
        return document.documentElement.clientHeight;
      }
    };

    return Util;

  })();

  WeakMap = this.WeakMap || this.MozWeakMap || (WeakMap = (function() {
    function WeakMap() {
      this.keys = [];
      this.values = [];
    }

    WeakMap.prototype.get = function(key) {
      var i, item, j, len, ref;
      ref = this.keys;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        item = ref[i];
        if (item === key) {
          return this.values[i];
        }
      }
    };

    WeakMap.prototype.set = function(key, value) {
      var i, item, j, len, ref;
      ref = this.keys;
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        item = ref[i];
        if (item === key) {
          this.values[i] = value;
          return;
        }
      }
      this.keys.push(key);
      return this.values.push(value);
    };

    return WeakMap;

  })());

  MutationObserver = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (MutationObserver = (function() {
    function MutationObserver() {
      if (typeof console !== "undefined" && console !== null) {
        console.warn('MutationObserver is not supported by your browser.');
      }
      if (typeof console !== "undefined" && console !== null) {
        console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.');
      }
    }

    MutationObserver.notSupported = true;

    MutationObserver.prototype.observe = function() {};

    return MutationObserver;

  })());

  getComputedStyle = this.getComputedStyle || function(el, pseudo) {
    this.getPropertyValue = function(prop) {
      var ref;
      if (prop === 'float') {
        prop = 'styleFloat';
      }
      if (getComputedStyleRX.test(prop)) {
        prop.replace(getComputedStyleRX, function(_, _char) {
          return _char.toUpperCase();
        });
      }
      return ((ref = el.currentStyle) != null ? ref[prop] : void 0) || null;
    };
    return this;
  };

  getComputedStyleRX = /(\-([a-z]){1})/g;

  this.WOW = (function() {
    WOW.prototype.defaults = {
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true,
      callback: null,
      scrollContainer: null
    };

    function WOW(options) {
      if (options == null) {
        options = {};
      }
      this.scrollCallback = bind(this.scrollCallback, this);
      this.scrollHandler = bind(this.scrollHandler, this);
      this.resetAnimation = bind(this.resetAnimation, this);
      this.start = bind(this.start, this);
      this.scrolled = true;
      this.config = this.util().extend(options, this.defaults);
      if (options.scrollContainer != null) {
        this.config.scrollContainer = document.querySelector(options.scrollContainer);
      }
      this.animationNameCache = new WeakMap();
      this.wowEvent = this.util().createEvent(this.config.boxClass);
    }

    WOW.prototype.init = function() {
      var ref;
      this.element = window.document.documentElement;
      if ((ref = document.readyState) === "interactive" || ref === "complete") {
        this.start();
      } else {
        this.util().addEvent(document, 'DOMContentLoaded', this.start);
      }
      return this.finished = [];
    };

    WOW.prototype.start = function() {
      var box, j, len, ref;
      this.stopped = false;
      this.boxes = (function() {
        var j, len, ref, results;
        ref = this.element.querySelectorAll("." + this.config.boxClass);
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          box = ref[j];
          results.push(box);
        }
        return results;
      }).call(this);
      this.all = (function() {
        var j, len, ref, results;
        ref = this.boxes;
        results = [];
        for (j = 0, len = ref.length; j < len; j++) {
          box = ref[j];
          results.push(box);
        }
        return results;
      }).call(this);
      if (this.boxes.length) {
        if (this.disabled()) {
          this.resetStyle();
        } else {
          ref = this.boxes;
          for (j = 0, len = ref.length; j < len; j++) {
            box = ref[j];
            this.applyStyle(box, true);
          }
        }
      }
      if (!this.disabled()) {
        this.util().addEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
        this.util().addEvent(window, 'resize', this.scrollHandler);
        this.interval = setInterval(this.scrollCallback, 50);
      }
      if (this.config.live) {
        return new MutationObserver((function(_this) {
          return function(records) {
            var k, len1, node, record, results;
            results = [];
            for (k = 0, len1 = records.length; k < len1; k++) {
              record = records[k];
              results.push((function() {
                var l, len2, ref1, results1;
                ref1 = record.addedNodes || [];
                results1 = [];
                for (l = 0, len2 = ref1.length; l < len2; l++) {
                  node = ref1[l];
                  results1.push(this.doSync(node));
                }
                return results1;
              }).call(_this));
            }
            return results;
          };
        })(this)).observe(document.body, {
          childList: true,
          subtree: true
        });
      }
    };

    WOW.prototype.stop = function() {
      this.stopped = true;
      this.util().removeEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler);
      this.util().removeEvent(window, 'resize', this.scrollHandler);
      if (this.interval != null) {
        return clearInterval(this.interval);
      }
    };

    WOW.prototype.sync = function(element) {
      if (MutationObserver.notSupported) {
        return this.doSync(this.element);
      }
    };

    WOW.prototype.doSync = function(element) {
      var box, j, len, ref, results;
      if (element == null) {
        element = this.element;
      }
      if (element.nodeType !== 1) {
        return;
      }
      element = element.parentNode || element;
      ref = element.querySelectorAll("." + this.config.boxClass);
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        box = ref[j];
        if (indexOf.call(this.all, box) < 0) {
          this.boxes.push(box);
          this.all.push(box);
          if (this.stopped || this.disabled()) {
            this.resetStyle();
          } else {
            this.applyStyle(box, true);
          }
          results.push(this.scrolled = true);
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    WOW.prototype.show = function(box) {
      this.applyStyle(box);
      box.className = box.className + " " + this.config.animateClass;
      if (this.config.callback != null) {
        this.config.callback(box);
      }
      this.util().emitEvent(box, this.wowEvent);
      this.util().addEvent(box, 'animationend', this.resetAnimation);
      this.util().addEvent(box, 'oanimationend', this.resetAnimation);
      this.util().addEvent(box, 'webkitAnimationEnd', this.resetAnimation);
      this.util().addEvent(box, 'MSAnimationEnd', this.resetAnimation);
      return box;
    };

    WOW.prototype.applyStyle = function(box, hidden) {
      var delay, duration, iteration;
      duration = box.getAttribute('data-wow-duration');
      delay = box.getAttribute('data-wow-delay');
      iteration = box.getAttribute('data-wow-iteration');
      return this.animate((function(_this) {
        return function() {
          return _this.customStyle(box, hidden, duration, delay, iteration);
        };
      })(this));
    };

    WOW.prototype.animate = (function() {
      if ('requestAnimationFrame' in window) {
        return function(callback) {
          return window.requestAnimationFrame(callback);
        };
      } else {
        return function(callback) {
          return callback();
        };
      }
    })();

    WOW.prototype.resetStyle = function() {
      var box, j, len, ref, results;
      ref = this.boxes;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        box = ref[j];
        results.push(box.style.visibility = 'visible');
      }
      return results;
    };

    WOW.prototype.resetAnimation = function(event) {
      var target;
      if (event.type.toLowerCase().indexOf('animationend') >= 0) {
        target = event.target || event.srcElement;
        return target.className = target.className.replace(this.config.animateClass, '').trim();
      }
    };

    WOW.prototype.customStyle = function(box, hidden, duration, delay, iteration) {
      if (hidden) {
        this.cacheAnimationName(box);
      }
      box.style.visibility = hidden ? 'hidden' : 'visible';
      if (duration) {
        this.vendorSet(box.style, {
          animationDuration: duration
        });
      }
      if (delay) {
        this.vendorSet(box.style, {
          animationDelay: delay
        });
      }
      if (iteration) {
        this.vendorSet(box.style, {
          animationIterationCount: iteration
        });
      }
      this.vendorSet(box.style, {
        animationName: hidden ? 'none' : this.cachedAnimationName(box)
      });
      return box;
    };

    WOW.prototype.vendors = ["moz", "webkit"];

    WOW.prototype.vendorSet = function(elem, properties) {
      var name, results, value, vendor;
      results = [];
      for (name in properties) {
        value = properties[name];
        elem["" + name] = value;
        results.push((function() {
          var j, len, ref, results1;
          ref = this.vendors;
          results1 = [];
          for (j = 0, len = ref.length; j < len; j++) {
            vendor = ref[j];
            results1.push(elem["" + vendor + (name.charAt(0).toUpperCase()) + (name.substr(1))] = value);
          }
          return results1;
        }).call(this));
      }
      return results;
    };

    WOW.prototype.vendorCSS = function(elem, property) {
      var j, len, ref, result, style, vendor;
      style = getComputedStyle(elem);
      result = style.getPropertyCSSValue(property);
      ref = this.vendors;
      for (j = 0, len = ref.length; j < len; j++) {
        vendor = ref[j];
        result = result || style.getPropertyCSSValue("-" + vendor + "-" + property);
      }
      return result;
    };

    WOW.prototype.animationName = function(box) {
      var animationName, error;
      try {
        animationName = this.vendorCSS(box, 'animation-name').cssText;
      } catch (error) {
        animationName = getComputedStyle(box).getPropertyValue('animation-name');
      }
      if (animationName === 'none') {
        return '';
      } else {
        return animationName;
      }
    };

    WOW.prototype.cacheAnimationName = function(box) {
      return this.animationNameCache.set(box, this.animationName(box));
    };

    WOW.prototype.cachedAnimationName = function(box) {
      return this.animationNameCache.get(box);
    };

    WOW.prototype.scrollHandler = function() {
      return this.scrolled = true;
    };

    WOW.prototype.scrollCallback = function() {
      var box;
      if (this.scrolled) {
        this.scrolled = false;
        this.boxes = (function() {
          var j, len, ref, results;
          ref = this.boxes;
          results = [];
          for (j = 0, len = ref.length; j < len; j++) {
            box = ref[j];
            if (!(box)) {
              continue;
            }
            if (this.isVisible(box)) {
              this.show(box);
              continue;
            }
            results.push(box);
          }
          return results;
        }).call(this);
        if (!(this.boxes.length || this.config.live)) {
          return this.stop();
        }
      }
    };

    WOW.prototype.offsetTop = function(element) {
      var top;
      while (element.offsetTop === void 0) {
        element = element.parentNode;
      }
      top = element.offsetTop;
      while (element = element.offsetParent) {
        top += element.offsetTop;
      }
      return top;
    };

    WOW.prototype.isVisible = function(box) {
      var bottom, offset, top, viewBottom, viewTop;
      offset = box.getAttribute('data-wow-offset') || this.config.offset;
      viewTop = (this.config.scrollContainer && this.config.scrollContainer.scrollTop) || window.pageYOffset;
      viewBottom = viewTop + Math.min(this.element.clientHeight, this.util().innerHeight()) - offset;
      top = this.offsetTop(box);
      bottom = top + box.clientHeight;
      return top <= viewBottom && bottom >= viewTop;
    };

    WOW.prototype.util = function() {
      return this._util != null ? this._util : this._util = new Util();
    };

    WOW.prototype.disabled = function() {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent);
    };

    return WOW;

  })();

}).call(this);

;/*! WOW - v1.1.2 - 2015-08-19
 * Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */ (function () {
	var a,
		b,
		c,
		d,
		e,
		f = function (a, b) {
			return function () {
				return a.apply(b, arguments);
			};
		},
		g =
			[].indexOf ||
			function (a) {
				for (var b = 0, c = this.length; c > b; b++)
					if (b in this && this[b] === a) return b;
				return -1;
			};
	(b = (function () {
		function a() {}
		return (
			(a.prototype.extend = function (a, b) {
				var c, d;
				for (c in b) (d = b[c]), null == a[c] && (a[c] = d);
				return a;
			}),
			(a.prototype.isMobile = function (a) {
				return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
					a
				);
			}),
			(a.prototype.createEvent = function (a, b, c, d) {
				var e;
				return (
					null == b && (b = !1),
					null == c && (c = !1),
					null == d && (d = null),
					null != document.createEvent
						? ((e = document.createEvent('CustomEvent')),
						  e.initCustomEvent(a, b, c, d))
						: null != document.createEventObject
						? ((e = document.createEventObject()), (e.eventType = a))
						: (e.eventName = a),
					e
				);
			}),
			(a.prototype.emitEvent = function (a, b) {
				return null != a.dispatchEvent
					? a.dispatchEvent(b)
					: b in (null != a)
					? a[b]()
					: 'on' + b in (null != a)
					? a['on' + b]()
					: void 0;
			}),
			(a.prototype.addEvent = function (a, b, c) {
				return null != a.addEventListener
					? a.addEventListener(b, c, !1)
					: null != a.attachEvent
					? a.attachEvent('on' + b, c)
					: (a[b] = c);
			}),
			(a.prototype.removeEvent = function (a, b, c) {
				return null != a.removeEventListener
					? a.removeEventListener(b, c, !1)
					: null != a.detachEvent
					? a.detachEvent('on' + b, c)
					: delete a[b];
			}),
			(a.prototype.innerHeight = function () {
				return 'innerHeight' in window
					? window.innerHeight
					: document.documentElement.clientHeight;
			}),
			a
		);
	})()),
		(c =
			this.WeakMap ||
			this.MozWeakMap ||
			(c = (function () {
				function a() {
					(this.keys = []), (this.values = []);
				}
				return (
					(a.prototype.get = function (a) {
						var b, c, d, e, f;
						for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
							if (((c = f[b]), c === a)) return this.values[b];
					}),
					(a.prototype.set = function (a, b) {
						var c, d, e, f, g;
						for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
							if (((d = g[c]), d === a)) return void (this.values[c] = b);
						return this.keys.push(a), this.values.push(b);
					}),
					a
				);
			})())),
		(a =
			this.MutationObserver ||
			this.WebkitMutationObserver ||
			this.MozMutationObserver ||
			(a = (function () {
				function a() {
					'undefined' != typeof console &&
						null !== console &&
						console.warn('MutationObserver is not supported by your browser.'),
						'undefined' != typeof console &&
							null !== console &&
							console.warn(
								'WOW.js cannot detect dom mutations, please call .sync() after loading new content.'
							);
				}
				return (a.notSupported = !0), (a.prototype.observe = function () {}), a;
			})())),
		(d =
			this.getComputedStyle ||
			function (a) {
				return (
					(this.getPropertyValue = function (b) {
						var c;
						return (
							'float' === b && (b = 'styleFloat'),
							e.test(b) &&
								b.replace(e, function (a, b) {
									return b.toUpperCase();
								}),
							(null != (c = a.currentStyle) ? c[b] : void 0) || null
						);
					}),
					this
				);
			}),
		(e = /(\-([a-z]){1})/g),
		(this.WOW = (function () {
			function e(a) {
				null == a && (a = {}),
					(this.scrollCallback = f(this.scrollCallback, this)),
					(this.scrollHandler = f(this.scrollHandler, this)),
					(this.resetAnimation = f(this.resetAnimation, this)),
					(this.start = f(this.start, this)),
					(this.scrolled = !0),
					(this.config = this.util().extend(a, this.defaults)),
					null != a.scrollContainer &&
						(this.config.scrollContainer = document.querySelector(
							a.scrollContainer
						)),
					(this.animationNameCache = new c()),
					(this.wowEvent = this.util().createEvent(this.config.boxClass));
			}
			return (
				(e.prototype.defaults = {
					boxClass: 'wow',
					animateClass: 'animated',
					offset: 0,
					mobile: !0,
					live: !0,
					callback: null,
					scrollContainer: null,
				}),
				(e.prototype.init = function () {
					var a;
					return (
						(this.element = window.document.documentElement),
						'interactive' === (a = document.readyState) || 'complete' === a
							? this.start()
							: this.util().addEvent(document, 'DOMContentLoaded', this.start),
						(this.finished = [])
					);
				}),
				(e.prototype.start = function () {
					var b, c, d, e;
					if (
						((this.stopped = !1),
						(this.boxes = function () {
							var a, c, d, e;
							for (
								d = this.element.querySelectorAll('.' + this.config.boxClass),
									e = [],
									a = 0,
									c = d.length;
								c > a;
								a++
							)
								(b = d[a]), e.push(b);
							return e;
						}.call(this)),
						(this.all = function () {
							var a, c, d, e;
							for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++)
								(b = d[a]), e.push(b);
							return e;
						}.call(this)),
						this.boxes.length)
					)
						if (this.disabled()) this.resetStyle();
						else
							for (e = this.boxes, c = 0, d = e.length; d > c; c++)
								(b = e[c]), this.applyStyle(b, !0);
					return (
						this.disabled() ||
							(this.util().addEvent(
								this.config.scrollContainer || window,
								'scroll',
								this.scrollHandler
							),
							this.util().addEvent(window, 'resize', this.scrollHandler),
							(this.interval = setInterval(this.scrollCallback, 50))),
						this.config.live
							? new a(
									(function (a) {
										return function (b) {
											var c, d, e, f, g;
											for (g = [], c = 0, d = b.length; d > c; c++)
												(f = b[c]),
													g.push(
														function () {
															var a, b, c, d;
															for (
																c = f.addedNodes || [],
																	d = [],
																	a = 0,
																	b = c.length;
																b > a;
																a++
															)
																(e = c[a]), d.push(this.doSync(e));
															return d;
														}.call(a)
													);
											return g;
										};
									})(this)
							  ).observe(document.body, { childList: !0, subtree: !0 })
							: void 0
					);
				}),
				(e.prototype.stop = function () {
					return (
						(this.stopped = !0),
						this.util().removeEvent(
							this.config.scrollContainer || window,
							'scroll',
							this.scrollHandler
						),
						this.util().removeEvent(window, 'resize', this.scrollHandler),
						null != this.interval ? clearInterval(this.interval) : void 0
					);
				}),
				(e.prototype.sync = function () {
					return a.notSupported ? this.doSync(this.element) : void 0;
				}),
				(e.prototype.doSync = function (a) {
					var b, c, d, e, f;
					if ((null == a && (a = this.element), 1 === a.nodeType)) {
						for (
							a = a.parentNode || a,
								e = a.querySelectorAll('.' + this.config.boxClass),
								f = [],
								c = 0,
								d = e.length;
							d > c;
							c++
						)
							(b = e[c]),
								g.call(this.all, b) < 0
									? (this.boxes.push(b),
									  this.all.push(b),
									  this.stopped || this.disabled()
											? this.resetStyle()
											: this.applyStyle(b, !0),
									  f.push((this.scrolled = !0)))
									: f.push(void 0);
						return f;
					}
				}),
				(e.prototype.show = function (a) {
					return (
						this.applyStyle(a),
						(a.className = a.className + ' ' + this.config.animateClass),
						null != this.config.callback && this.config.callback(a),
						this.util().emitEvent(a, this.wowEvent),
						this.util().addEvent(a, 'animationend', this.resetAnimation),
						this.util().addEvent(a, 'oanimationend', this.resetAnimation),
						this.util().addEvent(a, 'webkitAnimationEnd', this.resetAnimation),
						this.util().addEvent(a, 'MSAnimationEnd', this.resetAnimation),
						a
					);
				}),
				(e.prototype.applyStyle = function (a, b) {
					var c, d, e;
					return (
						(d = a.getAttribute('data-wow-duration')),
						(c = a.getAttribute('data-wow-delay')),
						(e = a.getAttribute('data-wow-iteration')),
						this.animate(
							(function (f) {
								return function () {
									return f.customStyle(a, b, d, c, e);
								};
							})(this)
						)
					);
				}),
				(e.prototype.animate = (function () {
					return 'requestAnimationFrame' in window
						? function (a) {
								return window.requestAnimationFrame(a);
						  }
						: function (a) {
								return a();
						  };
				})()),
				(e.prototype.resetStyle = function () {
					var a, b, c, d, e;
					for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
						(a = d[b]), e.push((a.style.visibility = 'visible'));
					return e;
				}),
				(e.prototype.resetAnimation = function (a) {
					var b;
					return a.type.toLowerCase().indexOf('animationend') >= 0
						? ((b = a.target || a.srcElement),
						  (b.className = b.className
								.replace(this.config.animateClass, '')
								.trim()))
						: void 0;
				}),
				(e.prototype.customStyle = function (a, b, c, d, e) {
					return (
						b && this.cacheAnimationName(a),
						(a.style.visibility = b ? 'hidden' : 'visible'),
						c && this.vendorSet(a.style, { animationDuration: c }),
						d && this.vendorSet(a.style, { animationDelay: d }),
						e && this.vendorSet(a.style, { animationIterationCount: e }),
						this.vendorSet(a.style, {
							animationName: b ? 'none' : this.cachedAnimationName(a),
						}),
						a
					);
				}),
				(e.prototype.vendors = ['moz', 'webkit']),
				(e.prototype.vendorSet = function (a, b) {
					var c, d, e, f;
					d = [];
					for (c in b)
						(e = b[c]),
							(a['' + c] = e),
							d.push(
								function () {
									var b, d, g, h;
									for (
										g = this.vendors, h = [], b = 0, d = g.length;
										d > b;
										b++
									)
										(f = g[b]),
											h.push(
												(a['' + f + c.charAt(0).toUpperCase() + c.substr(1)] =
													e)
											);
									return h;
								}.call(this)
							);
					return d;
				}),
				(e.prototype.vendorCSS = function (a, b) {
					var c, e, f, g, h, i;
					for (
						h = d(a),
							g = h.getPropertyCSSValue(b),
							f = this.vendors,
							c = 0,
							e = f.length;
						e > c;
						c++
					)
						(i = f[c]), (g = g || h.getPropertyCSSValue('-' + i + '-' + b));
					return g;
				}),
				(e.prototype.animationName = function (a) {
					var b;
					try {
						b = this.vendorCSS(a, 'animation-name').cssText;
					} catch (c) {
						b = d(a).getPropertyValue('animation-name');
					}
					return 'none' === b ? '' : b;
				}),
				(e.prototype.cacheAnimationName = function (a) {
					return this.animationNameCache.set(a, this.animationName(a));
				}),
				(e.prototype.cachedAnimationName = function (a) {
					return this.animationNameCache.get(a);
				}),
				(e.prototype.scrollHandler = function () {
					return (this.scrolled = !0);
				}),
				(e.prototype.scrollCallback = function () {
					var a;
					return !this.scrolled ||
						((this.scrolled = !1),
						(this.boxes = function () {
							var b, c, d, e;
							for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
								(a = d[b]), a && (this.isVisible(a) ? this.show(a) : e.push(a));
							return e;
						}.call(this)),
						this.boxes.length || this.config.live)
						? void 0
						: this.stop();
				}),
				(e.prototype.offsetTop = function (a) {
					for (var b; void 0 === a.offsetTop; ) a = a.parentNode;
					for (b = a.offsetTop; (a = a.offsetParent); ) b += a.offsetTop;
					return b;
				}),
				(e.prototype.isVisible = function (a) {
					var b, c, d, e, f;
					return (
						(c = a.getAttribute('data-wow-offset') || this.config.offset),
						(f =
							(this.config.scrollContainer &&
								this.config.scrollContainer.scrollTop) ||
							window.pageYOffset),
						(e =
							f +
							Math.min(this.element.clientHeight, this.util().innerHeight()) -
							c),
						(d = this.offsetTop(a)),
						(b = d + a.clientHeight),
						e >= d && b >= f
					);
				}),
				(e.prototype.util = function () {
					return null != this._util ? this._util : (this._util = new b());
				}),
				(e.prototype.disabled = function () {
					return (
						!this.config.mobile && this.util().isMobile(navigator.userAgent)
					);
				}),
				e
			);
		})());
}).call(this);

;/*!
 * imagesLoaded PACKAGED v3.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function () {
	function e() {}
	function t(e, t) {
		for (var n = e.length; n--; ) if (e[n].listener === t) return n;
		return -1;
	}
	function n(e) {
		return function () {
			return this[e].apply(this, arguments);
		};
	}
	var i = e.prototype,
		r = this,
		o = r.EventEmitter;
	(i.getListeners = function (e) {
		var t,
			n,
			i = this._getEvents();
		if ('object' == typeof e) {
			t = {};
			for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n]);
		} else t = i[e] || (i[e] = []);
		return t;
	}),
		(i.flattenListeners = function (e) {
			var t,
				n = [];
			for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
			return n;
		}),
		(i.getListenersAsObject = function (e) {
			var t,
				n = this.getListeners(e);
			return n instanceof Array && ((t = {}), (t[e] = n)), t || n;
		}),
		(i.addListener = function (e, n) {
			var i,
				r = this.getListenersAsObject(e),
				o = 'object' == typeof n;
			for (i in r)
				r.hasOwnProperty(i) &&
					-1 === t(r[i], n) &&
					r[i].push(o ? n : { listener: n, once: !1 });
			return this;
		}),
		(i.on = n('addListener')),
		(i.addOnceListener = function (e, t) {
			return this.addListener(e, { listener: t, once: !0 });
		}),
		(i.once = n('addOnceListener')),
		(i.defineEvent = function (e) {
			return this.getListeners(e), this;
		}),
		(i.defineEvents = function (e) {
			for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
			return this;
		}),
		(i.removeListener = function (e, n) {
			var i,
				r,
				o = this.getListenersAsObject(e);
			for (r in o)
				o.hasOwnProperty(r) &&
					((i = t(o[r], n)), -1 !== i && o[r].splice(i, 1));
			return this;
		}),
		(i.off = n('removeListener')),
		(i.addListeners = function (e, t) {
			return this.manipulateListeners(!1, e, t);
		}),
		(i.removeListeners = function (e, t) {
			return this.manipulateListeners(!0, e, t);
		}),
		(i.manipulateListeners = function (e, t, n) {
			var i,
				r,
				o = e ? this.removeListener : this.addListener,
				s = e ? this.removeListeners : this.addListeners;
			if ('object' != typeof t || t instanceof RegExp)
				for (i = n.length; i--; ) o.call(this, t, n[i]);
			else
				for (i in t)
					t.hasOwnProperty(i) &&
						(r = t[i]) &&
						('function' == typeof r ? o.call(this, i, r) : s.call(this, i, r));
			return this;
		}),
		(i.removeEvent = function (e) {
			var t,
				n = typeof e,
				i = this._getEvents();
			if ('string' === n) delete i[e];
			else if ('object' === n)
				for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
			else delete this._events;
			return this;
		}),
		(i.removeAllListeners = n('removeEvent')),
		(i.emitEvent = function (e, t) {
			var n,
				i,
				r,
				o,
				s = this.getListenersAsObject(e);
			for (r in s)
				if (s.hasOwnProperty(r))
					for (i = s[r].length; i--; )
						(n = s[r][i]),
							n.once === !0 && this.removeListener(e, n.listener),
							(o = n.listener.apply(this, t || [])),
							o === this._getOnceReturnValue() &&
								this.removeListener(e, n.listener);
			return this;
		}),
		(i.trigger = n('emitEvent')),
		(i.emit = function (e) {
			var t = Array.prototype.slice.call(arguments, 1);
			return this.emitEvent(e, t);
		}),
		(i.setOnceReturnValue = function (e) {
			return (this._onceReturnValue = e), this;
		}),
		(i._getOnceReturnValue = function () {
			return this.hasOwnProperty('_onceReturnValue')
				? this._onceReturnValue
				: !0;
		}),
		(i._getEvents = function () {
			return this._events || (this._events = {});
		}),
		(e.noConflict = function () {
			return (r.EventEmitter = o), e;
		}),
		'function' == typeof define && define.amd
			? define('eventEmitter/EventEmitter', [], function () {
					return e;
			  })
			: 'object' == typeof module && module.exports
			? (module.exports = e)
			: (this.EventEmitter = e);
}).call(this),
	(function (e) {
		function t(t) {
			var n = e.event;
			return (n.target = n.target || n.srcElement || t), n;
		}
		var n = document.documentElement,
			i = function () {};
		n.addEventListener
			? (i = function (e, t, n) {
					e.addEventListener(t, n, !1);
			  })
			: n.attachEvent &&
			  (i = function (e, n, i) {
					(e[n + i] = i.handleEvent
						? function () {
								var n = t(e);
								i.handleEvent.call(i, n);
						  }
						: function () {
								var n = t(e);
								i.call(e, n);
						  }),
						e.attachEvent('on' + n, e[n + i]);
			  });
		var r = function () {};
		n.removeEventListener
			? (r = function (e, t, n) {
					e.removeEventListener(t, n, !1);
			  })
			: n.detachEvent &&
			  (r = function (e, t, n) {
					e.detachEvent('on' + t, e[t + n]);
					try {
						delete e[t + n];
					} catch (i) {
						e[t + n] = void 0;
					}
			  });
		var o = { bind: i, unbind: r };
		'function' == typeof define && define.amd
			? define('eventie/eventie', o)
			: (e.eventie = o);
	})(this),
	(function (e, t) {
		'function' == typeof define && define.amd
			? define(
					['eventEmitter/EventEmitter', 'eventie/eventie'],
					function (n, i) {
						return t(e, n, i);
					}
			  )
			: 'object' == typeof exports
			? (module.exports = t(e, require('eventEmitter'), require('eventie')))
			: (e.imagesLoaded = t(e, e.EventEmitter, e.eventie));
	})(this, function (e, t, n) {
		function i(e, t) {
			for (var n in t) e[n] = t[n];
			return e;
		}
		function r(e) {
			return '[object Array]' === d.call(e);
		}
		function o(e) {
			var t = [];
			if (r(e)) t = e;
			else if ('number' == typeof e.length)
				for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);
			else t.push(e);
			return t;
		}
		function s(e, t, n) {
			if (!(this instanceof s)) return new s(e, t);
			'string' == typeof e && (e = document.querySelectorAll(e)),
				(this.elements = o(e)),
				(this.options = i({}, this.options)),
				'function' == typeof t ? (n = t) : i(this.options, t),
				n && this.on('always', n),
				this.getImages(),
				a && (this.jqDeferred = new a.Deferred());
			var r = this;
			setTimeout(function () {
				r.check();
			});
		}
		function c(e) {
			this.img = e;
		}
		function f(e) {
			(this.src = e), (v[e] = this);
		}
		var a = e.jQuery,
			u = e.console,
			h = u !== void 0,
			d = Object.prototype.toString;
		(s.prototype = new t()),
			(s.prototype.options = {}),
			(s.prototype.getImages = function () {
				this.images = [];
				for (var e = 0, t = this.elements.length; t > e; e++) {
					var n = this.elements[e];
					'IMG' === n.nodeName && this.addImage(n);
					for (
						var i = n.querySelectorAll('img'), r = 0, o = i.length;
						o > r;
						r++
					) {
						var s = i[r];
						this.addImage(s);
					}
				}
			}),
			(s.prototype.addImage = function (e) {
				var t = new c(e);
				this.images.push(t);
			}),
			(s.prototype.check = function () {
				function e(e, r) {
					return (
						t.options.debug && h && u.log('confirm', e, r),
						t.progress(e),
						n++,
						n === i && t.complete(),
						!0
					);
				}
				var t = this,
					n = 0,
					i = this.images.length;
				if (((this.hasAnyBroken = !1), !i)) return this.complete(), void 0;
				for (var r = 0; i > r; r++) {
					var o = this.images[r];
					o.on('confirm', e), o.check();
				}
			}),
			(s.prototype.progress = function (e) {
				this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
				var t = this;
				setTimeout(function () {
					t.emit('progress', t, e),
						t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e);
				});
			}),
			(s.prototype.complete = function () {
				var e = this.hasAnyBroken ? 'fail' : 'done';
				this.isComplete = !0;
				var t = this;
				setTimeout(function () {
					if ((t.emit(e, t), t.emit('always', t), t.jqDeferred)) {
						var n = t.hasAnyBroken ? 'reject' : 'resolve';
						t.jqDeferred[n](t);
					}
				});
			}),
			a &&
				(a.fn.imagesLoaded = function (e, t) {
					var n = new s(this, e, t);
					return n.jqDeferred.promise(a(this));
				}),
			(c.prototype = new t()),
			(c.prototype.check = function () {
				var e = v[this.img.src] || new f(this.img.src);
				if (e.isConfirmed)
					return this.confirm(e.isLoaded, 'cached was confirmed'), void 0;
				if (this.img.complete && void 0 !== this.img.naturalWidth)
					return (
						this.confirm(0 !== this.img.naturalWidth, 'naturalWidth'), void 0
					);
				var t = this;
				e.on('confirm', function (e, n) {
					return t.confirm(e.isLoaded, n), !0;
				}),
					e.check();
			}),
			(c.prototype.confirm = function (e, t) {
				(this.isLoaded = e), this.emit('confirm', this, t);
			});
		var v = {};
		return (
			(f.prototype = new t()),
			(f.prototype.check = function () {
				if (!this.isChecked) {
					var e = new Image();
					n.bind(e, 'load', this),
						n.bind(e, 'error', this),
						(e.src = this.src),
						(this.isChecked = !0);
				}
			}),
			(f.prototype.handleEvent = function (e) {
				var t = 'on' + e.type;
				this[t] && this[t](e);
			}),
			(f.prototype.onload = function (e) {
				this.confirm(!0, 'onload'), this.unbindProxyEvents(e);
			}),
			(f.prototype.onerror = function (e) {
				this.confirm(!1, 'onerror'), this.unbindProxyEvents(e);
			}),
			(f.prototype.confirm = function (e, t) {
				(this.isConfirmed = !0),
					(this.isLoaded = e),
					this.emit('confirm', this, t);
			}),
			(f.prototype.unbindProxyEvents = function (e) {
				n.unbind(e.target, 'load', this), n.unbind(e.target, 'error', this);
			}),
			s
		);
	});

;
//# sourceMappingURL=scripts.js.map