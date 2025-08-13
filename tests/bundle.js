function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
      t && (r = t);
      var n = 0,
        F = function () {};
      return {
        s: F,
        n: function () {
          return n >= r.length ? {
            done: true
          } : {
            done: false,
            value: r[n++]
          };
        },
        e: function (r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = true,
    u = false;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var r = t.next();
      return a = r.done, r;
    },
    e: function (r) {
      u = true, o = r;
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var react = {exports: {}};

var react_production = {};

/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReact_production;

function requireReact_production () {
	if (hasRequiredReact_production) return react_production;
	hasRequiredReact_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_PORTAL_TYPE = Symbol.for("react.portal"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
	  REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
	  REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
	  REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
	  REACT_CONTEXT_TYPE = Symbol.for("react.context"),
	  REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
	  REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
	  REACT_MEMO_TYPE = Symbol.for("react.memo"),
	  REACT_LAZY_TYPE = Symbol.for("react.lazy"),
	  MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
	  if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
	  maybeIterable =
	    (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
	    maybeIterable["@@iterator"];
	  return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var ReactNoopUpdateQueue = {
	    isMounted: function () {
	      return false;
	    },
	    enqueueForceUpdate: function () {},
	    enqueueReplaceState: function () {},
	    enqueueSetState: function () {}
	  },
	  assign = Object.assign,
	  emptyObject = {};
	function Component(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  this.updater = updater || ReactNoopUpdateQueue;
	}
	Component.prototype.isReactComponent = {};
	Component.prototype.setState = function (partialState, callback) {
	  if (
	    "object" !== typeof partialState &&
	    "function" !== typeof partialState &&
	    null != partialState
	  )
	    throw Error(
	      "takes an object of state variables to update or a function which returns an object of state variables."
	    );
	  this.updater.enqueueSetState(this, partialState, callback, "setState");
	};
	Component.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
	};
	function ComponentDummy() {}
	ComponentDummy.prototype = Component.prototype;
	function PureComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  this.updater = updater || ReactNoopUpdateQueue;
	}
	var pureComponentPrototype = (PureComponent.prototype = new ComponentDummy());
	pureComponentPrototype.constructor = PureComponent;
	assign(pureComponentPrototype, Component.prototype);
	pureComponentPrototype.isPureReactComponent = true;
	var isArrayImpl = Array.isArray,
	  ReactSharedInternals = { H: null, A: null, T: null, S: null, V: null },
	  hasOwnProperty = Object.prototype.hasOwnProperty;
	function ReactElement(type, key, self, source, owner, props) {
	  self = props.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== self ? self : null,
	    props: props
	  };
	}
	function cloneAndReplaceKey(oldElement, newKey) {
	  return ReactElement(
	    oldElement.type,
	    newKey,
	    void 0,
	    void 0,
	    void 0,
	    oldElement.props
	  );
	}
	function isValidElement(object) {
	  return (
	    "object" === typeof object &&
	    null !== object &&
	    object.$$typeof === REACT_ELEMENT_TYPE
	  );
	}
	function escape(key) {
	  var escaperLookup = { "=": "=0", ":": "=2" };
	  return (
	    "$" +
	    key.replace(/[=:]/g, function (match) {
	      return escaperLookup[match];
	    })
	  );
	}
	var userProvidedKeyEscapeRegex = /\/+/g;
	function getElementKey(element, index) {
	  return "object" === typeof element && null !== element && null != element.key
	    ? escape("" + element.key)
	    : index.toString(36);
	}
	function noop$1() {}
	function resolveThenable(thenable) {
	  switch (thenable.status) {
	    case "fulfilled":
	      return thenable.value;
	    case "rejected":
	      throw thenable.reason;
	    default:
	      switch (
	        ("string" === typeof thenable.status
	          ? thenable.then(noop$1, noop$1)
	          : ((thenable.status = "pending"),
	            thenable.then(
	              function (fulfilledValue) {
	                "pending" === thenable.status &&
	                  ((thenable.status = "fulfilled"),
	                  (thenable.value = fulfilledValue));
	              },
	              function (error) {
	                "pending" === thenable.status &&
	                  ((thenable.status = "rejected"), (thenable.reason = error));
	              }
	            )),
	        thenable.status)
	      ) {
	        case "fulfilled":
	          return thenable.value;
	        case "rejected":
	          throw thenable.reason;
	      }
	  }
	  throw thenable;
	}
	function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
	  var type = typeof children;
	  if ("undefined" === type || "boolean" === type) children = null;
	  var invokeCallback = false;
	  if (null === children) invokeCallback = true;
	  else
	    switch (type) {
	      case "bigint":
	      case "string":
	      case "number":
	        invokeCallback = true;
	        break;
	      case "object":
	        switch (children.$$typeof) {
	          case REACT_ELEMENT_TYPE:
	          case REACT_PORTAL_TYPE:
	            invokeCallback = true;
	            break;
	          case REACT_LAZY_TYPE:
	            return (
	              (invokeCallback = children._init),
	              mapIntoArray(
	                invokeCallback(children._payload),
	                array,
	                escapedPrefix,
	                nameSoFar,
	                callback
	              )
	            );
	        }
	    }
	  if (invokeCallback)
	    return (
	      (callback = callback(children)),
	      (invokeCallback =
	        "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar),
	      isArrayImpl(callback)
	        ? ((escapedPrefix = ""),
	          null != invokeCallback &&
	            (escapedPrefix =
	              invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"),
	          mapIntoArray(callback, array, escapedPrefix, "", function (c) {
	            return c;
	          }))
	        : null != callback &&
	          (isValidElement(callback) &&
	            (callback = cloneAndReplaceKey(
	              callback,
	              escapedPrefix +
	                (null == callback.key ||
	                (children && children.key === callback.key)
	                  ? ""
	                  : ("" + callback.key).replace(
	                      userProvidedKeyEscapeRegex,
	                      "$&/"
	                    ) + "/") +
	                invokeCallback
	            )),
	          array.push(callback)),
	      1
	    );
	  invokeCallback = 0;
	  var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
	  if (isArrayImpl(children))
	    for (var i = 0; i < children.length; i++)
	      (nameSoFar = children[i]),
	        (type = nextNamePrefix + getElementKey(nameSoFar, i)),
	        (invokeCallback += mapIntoArray(
	          nameSoFar,
	          array,
	          escapedPrefix,
	          type,
	          callback
	        ));
	  else if (((i = getIteratorFn(children)), "function" === typeof i))
	    for (
	      children = i.call(children), i = 0;
	      !(nameSoFar = children.next()).done;

	    )
	      (nameSoFar = nameSoFar.value),
	        (type = nextNamePrefix + getElementKey(nameSoFar, i++)),
	        (invokeCallback += mapIntoArray(
	          nameSoFar,
	          array,
	          escapedPrefix,
	          type,
	          callback
	        ));
	  else if ("object" === type) {
	    if ("function" === typeof children.then)
	      return mapIntoArray(
	        resolveThenable(children),
	        array,
	        escapedPrefix,
	        nameSoFar,
	        callback
	      );
	    array = String(children);
	    throw Error(
	      "Objects are not valid as a React child (found: " +
	        ("[object Object]" === array
	          ? "object with keys {" + Object.keys(children).join(", ") + "}"
	          : array) +
	        "). If you meant to render a collection of children, use an array instead."
	    );
	  }
	  return invokeCallback;
	}
	function mapChildren(children, func, context) {
	  if (null == children) return children;
	  var result = [],
	    count = 0;
	  mapIntoArray(children, result, "", "", function (child) {
	    return func.call(context, child, count++);
	  });
	  return result;
	}
	function lazyInitializer(payload) {
	  if (-1 === payload._status) {
	    var ctor = payload._result;
	    ctor = ctor();
	    ctor.then(
	      function (moduleObject) {
	        if (0 === payload._status || -1 === payload._status)
	          (payload._status = 1), (payload._result = moduleObject);
	      },
	      function (error) {
	        if (0 === payload._status || -1 === payload._status)
	          (payload._status = 2), (payload._result = error);
	      }
	    );
	    -1 === payload._status && ((payload._status = 0), (payload._result = ctor));
	  }
	  if (1 === payload._status) return payload._result.default;
	  throw payload._result;
	}
	var reportGlobalError =
	  "function" === typeof reportError
	    ? reportError
	    : function (error) {
	        if (
	          "object" === typeof window &&
	          "function" === typeof window.ErrorEvent
	        ) {
	          var event = new window.ErrorEvent("error", {
	            bubbles: true,
	            cancelable: true,
	            message:
	              "object" === typeof error &&
	              null !== error &&
	              "string" === typeof error.message
	                ? String(error.message)
	                : String(error),
	            error: error
	          });
	          if (!window.dispatchEvent(event)) return;
	        } else if (
	          "object" === typeof process &&
	          "function" === typeof process.emit
	        ) {
	          process.emit("uncaughtException", error);
	          return;
	        }
	        console.error(error);
	      };
	function noop() {}
	react_production.Children = {
	  map: mapChildren,
	  forEach: function (children, forEachFunc, forEachContext) {
	    mapChildren(
	      children,
	      function () {
	        forEachFunc.apply(this, arguments);
	      },
	      forEachContext
	    );
	  },
	  count: function (children) {
	    var n = 0;
	    mapChildren(children, function () {
	      n++;
	    });
	    return n;
	  },
	  toArray: function (children) {
	    return (
	      mapChildren(children, function (child) {
	        return child;
	      }) || []
	    );
	  },
	  only: function (children) {
	    if (!isValidElement(children))
	      throw Error(
	        "React.Children.only expected to receive a single React element child."
	      );
	    return children;
	  }
	};
	react_production.Component = Component;
	react_production.Fragment = REACT_FRAGMENT_TYPE;
	react_production.Profiler = REACT_PROFILER_TYPE;
	react_production.PureComponent = PureComponent;
	react_production.StrictMode = REACT_STRICT_MODE_TYPE;
	react_production.Suspense = REACT_SUSPENSE_TYPE;
	react_production.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
	  ReactSharedInternals;
	react_production.__COMPILER_RUNTIME = {
	  __proto__: null,
	  c: function (size) {
	    return ReactSharedInternals.H.useMemoCache(size);
	  }
	};
	react_production.cache = function (fn) {
	  return function () {
	    return fn.apply(null, arguments);
	  };
	};
	react_production.cloneElement = function (element, config, children) {
	  if (null === element || void 0 === element)
	    throw Error(
	      "The argument must be a React element, but you passed " + element + "."
	    );
	  var props = assign({}, element.props),
	    key = element.key,
	    owner = void 0;
	  if (null != config)
	    for (propName in (void 0 !== config.ref && (owner = void 0),
	    void 0 !== config.key && (key = "" + config.key),
	    config))
	      !hasOwnProperty.call(config, propName) ||
	        "key" === propName ||
	        "__self" === propName ||
	        "__source" === propName ||
	        ("ref" === propName && void 0 === config.ref) ||
	        (props[propName] = config[propName]);
	  var propName = arguments.length - 2;
	  if (1 === propName) props.children = children;
	  else if (1 < propName) {
	    for (var childArray = Array(propName), i = 0; i < propName; i++)
	      childArray[i] = arguments[i + 2];
	    props.children = childArray;
	  }
	  return ReactElement(element.type, key, void 0, void 0, owner, props);
	};
	react_production.createContext = function (defaultValue) {
	  defaultValue = {
	    $$typeof: REACT_CONTEXT_TYPE,
	    _currentValue: defaultValue,
	    _currentValue2: defaultValue,
	    _threadCount: 0,
	    Provider: null,
	    Consumer: null
	  };
	  defaultValue.Provider = defaultValue;
	  defaultValue.Consumer = {
	    $$typeof: REACT_CONSUMER_TYPE,
	    _context: defaultValue
	  };
	  return defaultValue;
	};
	react_production.createElement = function (type, config, children) {
	  var propName,
	    props = {},
	    key = null;
	  if (null != config)
	    for (propName in (void 0 !== config.key && (key = "" + config.key), config))
	      hasOwnProperty.call(config, propName) &&
	        "key" !== propName &&
	        "__self" !== propName &&
	        "__source" !== propName &&
	        (props[propName] = config[propName]);
	  var childrenLength = arguments.length - 2;
	  if (1 === childrenLength) props.children = children;
	  else if (1 < childrenLength) {
	    for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++)
	      childArray[i] = arguments[i + 2];
	    props.children = childArray;
	  }
	  if (type && type.defaultProps)
	    for (propName in ((childrenLength = type.defaultProps), childrenLength))
	      void 0 === props[propName] &&
	        (props[propName] = childrenLength[propName]);
	  return ReactElement(type, key, void 0, void 0, null, props);
	};
	react_production.createRef = function () {
	  return { current: null };
	};
	react_production.forwardRef = function (render) {
	  return { $$typeof: REACT_FORWARD_REF_TYPE, render: render };
	};
	react_production.isValidElement = isValidElement;
	react_production.lazy = function (ctor) {
	  return {
	    $$typeof: REACT_LAZY_TYPE,
	    _payload: { _status: -1, _result: ctor },
	    _init: lazyInitializer
	  };
	};
	react_production.memo = function (type, compare) {
	  return {
	    $$typeof: REACT_MEMO_TYPE,
	    type: type,
	    compare: void 0 === compare ? null : compare
	  };
	};
	react_production.startTransition = function (scope) {
	  var prevTransition = ReactSharedInternals.T,
	    currentTransition = {};
	  ReactSharedInternals.T = currentTransition;
	  try {
	    var returnValue = scope(),
	      onStartTransitionFinish = ReactSharedInternals.S;
	    null !== onStartTransitionFinish &&
	      onStartTransitionFinish(currentTransition, returnValue);
	    "object" === typeof returnValue &&
	      null !== returnValue &&
	      "function" === typeof returnValue.then &&
	      returnValue.then(noop, reportGlobalError);
	  } catch (error) {
	    reportGlobalError(error);
	  } finally {
	    ReactSharedInternals.T = prevTransition;
	  }
	};
	react_production.unstable_useCacheRefresh = function () {
	  return ReactSharedInternals.H.useCacheRefresh();
	};
	react_production.use = function (usable) {
	  return ReactSharedInternals.H.use(usable);
	};
	react_production.useActionState = function (action, initialState, permalink) {
	  return ReactSharedInternals.H.useActionState(action, initialState, permalink);
	};
	react_production.useCallback = function (callback, deps) {
	  return ReactSharedInternals.H.useCallback(callback, deps);
	};
	react_production.useContext = function (Context) {
	  return ReactSharedInternals.H.useContext(Context);
	};
	react_production.useDebugValue = function () {};
	react_production.useDeferredValue = function (value, initialValue) {
	  return ReactSharedInternals.H.useDeferredValue(value, initialValue);
	};
	react_production.useEffect = function (create, createDeps, update) {
	  var dispatcher = ReactSharedInternals.H;
	  if ("function" === typeof update)
	    throw Error(
	      "useEffect CRUD overload is not enabled in this build of React."
	    );
	  return dispatcher.useEffect(create, createDeps);
	};
	react_production.useId = function () {
	  return ReactSharedInternals.H.useId();
	};
	react_production.useImperativeHandle = function (ref, create, deps) {
	  return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
	};
	react_production.useInsertionEffect = function (create, deps) {
	  return ReactSharedInternals.H.useInsertionEffect(create, deps);
	};
	react_production.useLayoutEffect = function (create, deps) {
	  return ReactSharedInternals.H.useLayoutEffect(create, deps);
	};
	react_production.useMemo = function (create, deps) {
	  return ReactSharedInternals.H.useMemo(create, deps);
	};
	react_production.useOptimistic = function (passthrough, reducer) {
	  return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
	};
	react_production.useReducer = function (reducer, initialArg, init) {
	  return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
	};
	react_production.useRef = function (initialValue) {
	  return ReactSharedInternals.H.useRef(initialValue);
	};
	react_production.useState = function (initialState) {
	  return ReactSharedInternals.H.useState(initialState);
	};
	react_production.useSyncExternalStore = function (
	  subscribe,
	  getSnapshot,
	  getServerSnapshot
	) {
	  return ReactSharedInternals.H.useSyncExternalStore(
	    subscribe,
	    getSnapshot,
	    getServerSnapshot
	  );
	};
	react_production.useTransition = function () {
	  return ReactSharedInternals.H.useTransition();
	};
	react_production.version = "19.1.1";
	return react_production;
}

var react_development = {exports: {}};

/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
react_development.exports;

var hasRequiredReact_development;

function requireReact_development () {
	if (hasRequiredReact_development) return react_development.exports;
	hasRequiredReact_development = 1;
	(function (module, exports) {
		"production" !== process.env.NODE_ENV &&
		  (function () {
		    function defineDeprecationWarning(methodName, info) {
		      Object.defineProperty(Component.prototype, methodName, {
		        get: function () {
		          console.warn(
		            "%s(...) is deprecated in plain JavaScript React classes. %s",
		            info[0],
		            info[1]
		          );
		        }
		      });
		    }
		    function getIteratorFn(maybeIterable) {
		      if (null === maybeIterable || "object" !== typeof maybeIterable)
		        return null;
		      maybeIterable =
		        (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
		        maybeIterable["@@iterator"];
		      return "function" === typeof maybeIterable ? maybeIterable : null;
		    }
		    function warnNoop(publicInstance, callerName) {
		      publicInstance =
		        ((publicInstance = publicInstance.constructor) &&
		          (publicInstance.displayName || publicInstance.name)) ||
		        "ReactClass";
		      var warningKey = publicInstance + "." + callerName;
		      didWarnStateUpdateForUnmountedComponent[warningKey] ||
		        (console.error(
		          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
		          callerName,
		          publicInstance
		        ),
		        (didWarnStateUpdateForUnmountedComponent[warningKey] = true));
		    }
		    function Component(props, context, updater) {
		      this.props = props;
		      this.context = context;
		      this.refs = emptyObject;
		      this.updater = updater || ReactNoopUpdateQueue;
		    }
		    function ComponentDummy() {}
		    function PureComponent(props, context, updater) {
		      this.props = props;
		      this.context = context;
		      this.refs = emptyObject;
		      this.updater = updater || ReactNoopUpdateQueue;
		    }
		    function testStringCoercion(value) {
		      return "" + value;
		    }
		    function checkKeyStringCoercion(value) {
		      try {
		        testStringCoercion(value);
		        var JSCompiler_inline_result = !1;
		      } catch (e) {
		        JSCompiler_inline_result = true;
		      }
		      if (JSCompiler_inline_result) {
		        JSCompiler_inline_result = console;
		        var JSCompiler_temp_const = JSCompiler_inline_result.error;
		        var JSCompiler_inline_result$jscomp$0 =
		          ("function" === typeof Symbol &&
		            Symbol.toStringTag &&
		            value[Symbol.toStringTag]) ||
		          value.constructor.name ||
		          "Object";
		        JSCompiler_temp_const.call(
		          JSCompiler_inline_result,
		          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
		          JSCompiler_inline_result$jscomp$0
		        );
		        return testStringCoercion(value);
		      }
		    }
		    function getComponentNameFromType(type) {
		      if (null == type) return null;
		      if ("function" === typeof type)
		        return type.$$typeof === REACT_CLIENT_REFERENCE
		          ? null
		          : type.displayName || type.name || null;
		      if ("string" === typeof type) return type;
		      switch (type) {
		        case REACT_FRAGMENT_TYPE:
		          return "Fragment";
		        case REACT_PROFILER_TYPE:
		          return "Profiler";
		        case REACT_STRICT_MODE_TYPE:
		          return "StrictMode";
		        case REACT_SUSPENSE_TYPE:
		          return "Suspense";
		        case REACT_SUSPENSE_LIST_TYPE:
		          return "SuspenseList";
		        case REACT_ACTIVITY_TYPE:
		          return "Activity";
		      }
		      if ("object" === typeof type)
		        switch (
		          ("number" === typeof type.tag &&
		            console.error(
		              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
		            ),
		          type.$$typeof)
		        ) {
		          case REACT_PORTAL_TYPE:
		            return "Portal";
		          case REACT_CONTEXT_TYPE:
		            return (type.displayName || "Context") + ".Provider";
		          case REACT_CONSUMER_TYPE:
		            return (type._context.displayName || "Context") + ".Consumer";
		          case REACT_FORWARD_REF_TYPE:
		            var innerType = type.render;
		            type = type.displayName;
		            type ||
		              ((type = innerType.displayName || innerType.name || ""),
		              (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
		            return type;
		          case REACT_MEMO_TYPE:
		            return (
		              (innerType = type.displayName || null),
		              null !== innerType
		                ? innerType
		                : getComponentNameFromType(type.type) || "Memo"
		            );
		          case REACT_LAZY_TYPE:
		            innerType = type._payload;
		            type = type._init;
		            try {
		              return getComponentNameFromType(type(innerType));
		            } catch (x) {}
		        }
		      return null;
		    }
		    function getTaskName(type) {
		      if (type === REACT_FRAGMENT_TYPE) return "<>";
		      if (
		        "object" === typeof type &&
		        null !== type &&
		        type.$$typeof === REACT_LAZY_TYPE
		      )
		        return "<...>";
		      try {
		        var name = getComponentNameFromType(type);
		        return name ? "<" + name + ">" : "<...>";
		      } catch (x) {
		        return "<...>";
		      }
		    }
		    function getOwner() {
		      var dispatcher = ReactSharedInternals.A;
		      return null === dispatcher ? null : dispatcher.getOwner();
		    }
		    function UnknownOwner() {
		      return Error("react-stack-top-frame");
		    }
		    function hasValidKey(config) {
		      if (hasOwnProperty.call(config, "key")) {
		        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
		        if (getter && getter.isReactWarning) return false;
		      }
		      return void 0 !== config.key;
		    }
		    function defineKeyPropWarningGetter(props, displayName) {
		      function warnAboutAccessingKey() {
		        specialPropKeyWarningShown ||
		          ((specialPropKeyWarningShown = true),
		          console.error(
		            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
		            displayName
		          ));
		      }
		      warnAboutAccessingKey.isReactWarning = true;
		      Object.defineProperty(props, "key", {
		        get: warnAboutAccessingKey,
		        configurable: true
		      });
		    }
		    function elementRefGetterWithDeprecationWarning() {
		      var componentName = getComponentNameFromType(this.type);
		      didWarnAboutElementRef[componentName] ||
		        ((didWarnAboutElementRef[componentName] = true),
		        console.error(
		          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
		        ));
		      componentName = this.props.ref;
		      return void 0 !== componentName ? componentName : null;
		    }
		    function ReactElement(
		      type,
		      key,
		      self,
		      source,
		      owner,
		      props,
		      debugStack,
		      debugTask
		    ) {
		      self = props.ref;
		      type = {
		        $$typeof: REACT_ELEMENT_TYPE,
		        type: type,
		        key: key,
		        props: props,
		        _owner: owner
		      };
		      null !== (void 0 !== self ? self : null)
		        ? Object.defineProperty(type, "ref", {
		            enumerable: false,
		            get: elementRefGetterWithDeprecationWarning
		          })
		        : Object.defineProperty(type, "ref", { enumerable: false, value: null });
		      type._store = {};
		      Object.defineProperty(type._store, "validated", {
		        configurable: false,
		        enumerable: false,
		        writable: true,
		        value: 0
		      });
		      Object.defineProperty(type, "_debugInfo", {
		        configurable: false,
		        enumerable: false,
		        writable: true,
		        value: null
		      });
		      Object.defineProperty(type, "_debugStack", {
		        configurable: false,
		        enumerable: false,
		        writable: true,
		        value: debugStack
		      });
		      Object.defineProperty(type, "_debugTask", {
		        configurable: false,
		        enumerable: false,
		        writable: true,
		        value: debugTask
		      });
		      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
		      return type;
		    }
		    function cloneAndReplaceKey(oldElement, newKey) {
		      newKey = ReactElement(
		        oldElement.type,
		        newKey,
		        void 0,
		        void 0,
		        oldElement._owner,
		        oldElement.props,
		        oldElement._debugStack,
		        oldElement._debugTask
		      );
		      oldElement._store &&
		        (newKey._store.validated = oldElement._store.validated);
		      return newKey;
		    }
		    function isValidElement(object) {
		      return (
		        "object" === typeof object &&
		        null !== object &&
		        object.$$typeof === REACT_ELEMENT_TYPE
		      );
		    }
		    function escape(key) {
		      var escaperLookup = { "=": "=0", ":": "=2" };
		      return (
		        "$" +
		        key.replace(/[=:]/g, function (match) {
		          return escaperLookup[match];
		        })
		      );
		    }
		    function getElementKey(element, index) {
		      return "object" === typeof element &&
		        null !== element &&
		        null != element.key
		        ? (checkKeyStringCoercion(element.key), escape("" + element.key))
		        : index.toString(36);
		    }
		    function noop$1() {}
		    function resolveThenable(thenable) {
		      switch (thenable.status) {
		        case "fulfilled":
		          return thenable.value;
		        case "rejected":
		          throw thenable.reason;
		        default:
		          switch (
		            ("string" === typeof thenable.status
		              ? thenable.then(noop$1, noop$1)
		              : ((thenable.status = "pending"),
		                thenable.then(
		                  function (fulfilledValue) {
		                    "pending" === thenable.status &&
		                      ((thenable.status = "fulfilled"),
		                      (thenable.value = fulfilledValue));
		                  },
		                  function (error) {
		                    "pending" === thenable.status &&
		                      ((thenable.status = "rejected"),
		                      (thenable.reason = error));
		                  }
		                )),
		            thenable.status)
		          ) {
		            case "fulfilled":
		              return thenable.value;
		            case "rejected":
		              throw thenable.reason;
		          }
		      }
		      throw thenable;
		    }
		    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
		      var type = typeof children;
		      if ("undefined" === type || "boolean" === type) children = null;
		      var invokeCallback = false;
		      if (null === children) invokeCallback = true;
		      else
		        switch (type) {
		          case "bigint":
		          case "string":
		          case "number":
		            invokeCallback = true;
		            break;
		          case "object":
		            switch (children.$$typeof) {
		              case REACT_ELEMENT_TYPE:
		              case REACT_PORTAL_TYPE:
		                invokeCallback = true;
		                break;
		              case REACT_LAZY_TYPE:
		                return (
		                  (invokeCallback = children._init),
		                  mapIntoArray(
		                    invokeCallback(children._payload),
		                    array,
		                    escapedPrefix,
		                    nameSoFar,
		                    callback
		                  )
		                );
		            }
		        }
		      if (invokeCallback) {
		        invokeCallback = children;
		        callback = callback(invokeCallback);
		        var childKey =
		          "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
		        isArrayImpl(callback)
		          ? ((escapedPrefix = ""),
		            null != childKey &&
		              (escapedPrefix =
		                childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"),
		            mapIntoArray(callback, array, escapedPrefix, "", function (c) {
		              return c;
		            }))
		          : null != callback &&
		            (isValidElement(callback) &&
		              (null != callback.key &&
		                ((invokeCallback && invokeCallback.key === callback.key) ||
		                  checkKeyStringCoercion(callback.key)),
		              (escapedPrefix = cloneAndReplaceKey(
		                callback,
		                escapedPrefix +
		                  (null == callback.key ||
		                  (invokeCallback && invokeCallback.key === callback.key)
		                    ? ""
		                    : ("" + callback.key).replace(
		                        userProvidedKeyEscapeRegex,
		                        "$&/"
		                      ) + "/") +
		                  childKey
		              )),
		              "" !== nameSoFar &&
		                null != invokeCallback &&
		                isValidElement(invokeCallback) &&
		                null == invokeCallback.key &&
		                invokeCallback._store &&
		                !invokeCallback._store.validated &&
		                (escapedPrefix._store.validated = 2),
		              (callback = escapedPrefix)),
		            array.push(callback));
		        return 1;
		      }
		      invokeCallback = 0;
		      childKey = "" === nameSoFar ? "." : nameSoFar + ":";
		      if (isArrayImpl(children))
		        for (var i = 0; i < children.length; i++)
		          (nameSoFar = children[i]),
		            (type = childKey + getElementKey(nameSoFar, i)),
		            (invokeCallback += mapIntoArray(
		              nameSoFar,
		              array,
		              escapedPrefix,
		              type,
		              callback
		            ));
		      else if (((i = getIteratorFn(children)), "function" === typeof i))
		        for (
		          i === children.entries &&
		            (didWarnAboutMaps ||
		              console.warn(
		                "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
		              ),
		            (didWarnAboutMaps = true)),
		            children = i.call(children),
		            i = 0;
		          !(nameSoFar = children.next()).done;

		        )
		          (nameSoFar = nameSoFar.value),
		            (type = childKey + getElementKey(nameSoFar, i++)),
		            (invokeCallback += mapIntoArray(
		              nameSoFar,
		              array,
		              escapedPrefix,
		              type,
		              callback
		            ));
		      else if ("object" === type) {
		        if ("function" === typeof children.then)
		          return mapIntoArray(
		            resolveThenable(children),
		            array,
		            escapedPrefix,
		            nameSoFar,
		            callback
		          );
		        array = String(children);
		        throw Error(
		          "Objects are not valid as a React child (found: " +
		            ("[object Object]" === array
		              ? "object with keys {" + Object.keys(children).join(", ") + "}"
		              : array) +
		            "). If you meant to render a collection of children, use an array instead."
		        );
		      }
		      return invokeCallback;
		    }
		    function mapChildren(children, func, context) {
		      if (null == children) return children;
		      var result = [],
		        count = 0;
		      mapIntoArray(children, result, "", "", function (child) {
		        return func.call(context, child, count++);
		      });
		      return result;
		    }
		    function lazyInitializer(payload) {
		      if (-1 === payload._status) {
		        var ctor = payload._result;
		        ctor = ctor();
		        ctor.then(
		          function (moduleObject) {
		            if (0 === payload._status || -1 === payload._status)
		              (payload._status = 1), (payload._result = moduleObject);
		          },
		          function (error) {
		            if (0 === payload._status || -1 === payload._status)
		              (payload._status = 2), (payload._result = error);
		          }
		        );
		        -1 === payload._status &&
		          ((payload._status = 0), (payload._result = ctor));
		      }
		      if (1 === payload._status)
		        return (
		          (ctor = payload._result),
		          void 0 === ctor &&
		            console.error(
		              "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
		              ctor
		            ),
		          "default" in ctor ||
		            console.error(
		              "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
		              ctor
		            ),
		          ctor.default
		        );
		      throw payload._result;
		    }
		    function resolveDispatcher() {
		      var dispatcher = ReactSharedInternals.H;
		      null === dispatcher &&
		        console.error(
		          "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem."
		        );
		      return dispatcher;
		    }
		    function noop() {}
		    function enqueueTask(task) {
		      if (null === enqueueTaskImpl)
		        try {
		          var requireString = ("require" + Math.random()).slice(0, 7);
		          enqueueTaskImpl = (module && module[requireString]).call(
		            module,
		            "timers"
		          ).setImmediate;
		        } catch (_err) {
		          enqueueTaskImpl = function (callback) {
		            false === didWarnAboutMessageChannel &&
		              ((didWarnAboutMessageChannel = true),
		              "undefined" === typeof MessageChannel &&
		                console.error(
		                  "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
		                ));
		            var channel = new MessageChannel();
		            channel.port1.onmessage = callback;
		            channel.port2.postMessage(void 0);
		          };
		        }
		      return enqueueTaskImpl(task);
		    }
		    function aggregateErrors(errors) {
		      return 1 < errors.length && "function" === typeof AggregateError
		        ? new AggregateError(errors)
		        : errors[0];
		    }
		    function popActScope(prevActQueue, prevActScopeDepth) {
		      prevActScopeDepth !== actScopeDepth - 1 &&
		        console.error(
		          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
		        );
		      actScopeDepth = prevActScopeDepth;
		    }
		    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
		      var queue = ReactSharedInternals.actQueue;
		      if (null !== queue)
		        if (0 !== queue.length)
		          try {
		            flushActQueue(queue);
		            enqueueTask(function () {
		              return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		            });
		            return;
		          } catch (error) {
		            ReactSharedInternals.thrownErrors.push(error);
		          }
		        else ReactSharedInternals.actQueue = null;
		      0 < ReactSharedInternals.thrownErrors.length
		        ? ((queue = aggregateErrors(ReactSharedInternals.thrownErrors)),
		          (ReactSharedInternals.thrownErrors.length = 0),
		          reject(queue))
		        : resolve(returnValue);
		    }
		    function flushActQueue(queue) {
		      if (!isFlushing) {
		        isFlushing = true;
		        var i = 0;
		        try {
		          for (; i < queue.length; i++) {
		            var callback = queue[i];
		            do {
		              ReactSharedInternals.didUsePromise = !1;
		              var continuation = callback(!1);
		              if (null !== continuation) {
		                if (ReactSharedInternals.didUsePromise) {
		                  queue[i] = callback;
		                  queue.splice(0, i);
		                  return;
		                }
		                callback = continuation;
		              } else break;
		            } while (1);
		          }
		          queue.length = 0;
		        } catch (error) {
		          queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
		        } finally {
		          isFlushing = false;
		        }
		      }
		    }
		    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
		      "function" ===
		        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart &&
		      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
		      REACT_PORTAL_TYPE = Symbol.for("react.portal"),
		      REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
		      REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
		      REACT_PROFILER_TYPE = Symbol.for("react.profiler");
		    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
		      REACT_CONTEXT_TYPE = Symbol.for("react.context"),
		      REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
		      REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
		      REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
		      REACT_MEMO_TYPE = Symbol.for("react.memo"),
		      REACT_LAZY_TYPE = Symbol.for("react.lazy"),
		      REACT_ACTIVITY_TYPE = Symbol.for("react.activity"),
		      MAYBE_ITERATOR_SYMBOL = Symbol.iterator,
		      didWarnStateUpdateForUnmountedComponent = {},
		      ReactNoopUpdateQueue = {
		        isMounted: function () {
		          return false;
		        },
		        enqueueForceUpdate: function (publicInstance) {
		          warnNoop(publicInstance, "forceUpdate");
		        },
		        enqueueReplaceState: function (publicInstance) {
		          warnNoop(publicInstance, "replaceState");
		        },
		        enqueueSetState: function (publicInstance) {
		          warnNoop(publicInstance, "setState");
		        }
		      },
		      assign = Object.assign,
		      emptyObject = {};
		    Object.freeze(emptyObject);
		    Component.prototype.isReactComponent = {};
		    Component.prototype.setState = function (partialState, callback) {
		      if (
		        "object" !== typeof partialState &&
		        "function" !== typeof partialState &&
		        null != partialState
		      )
		        throw Error(
		          "takes an object of state variables to update or a function which returns an object of state variables."
		        );
		      this.updater.enqueueSetState(this, partialState, callback, "setState");
		    };
		    Component.prototype.forceUpdate = function (callback) {
		      this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
		    };
		    var deprecatedAPIs = {
		        isMounted: [
		          "isMounted",
		          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
		        ],
		        replaceState: [
		          "replaceState",
		          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
		        ]
		      },
		      fnName;
		    for (fnName in deprecatedAPIs)
		      deprecatedAPIs.hasOwnProperty(fnName) &&
		        defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
		    ComponentDummy.prototype = Component.prototype;
		    deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
		    deprecatedAPIs.constructor = PureComponent;
		    assign(deprecatedAPIs, Component.prototype);
		    deprecatedAPIs.isPureReactComponent = true;
		    var isArrayImpl = Array.isArray,
		      REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"),
		      ReactSharedInternals = {
		        H: null,
		        A: null,
		        T: null,
		        S: null,
		        V: null,
		        actQueue: null,
		        isBatchingLegacy: false,
		        didScheduleLegacyUpdate: false,
		        didUsePromise: false,
		        thrownErrors: [],
		        getCurrentStack: null,
		        recentlyCreatedOwnerStacks: 0
		      },
		      hasOwnProperty = Object.prototype.hasOwnProperty,
		      createTask = console.createTask
		        ? console.createTask
		        : function () {
		            return null;
		          };
		    deprecatedAPIs = {
		      react_stack_bottom_frame: function (callStackForError) {
		        return callStackForError();
		      }
		    };
		    var specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
		    var didWarnAboutElementRef = {};
		    var unknownOwnerDebugStack = deprecatedAPIs.react_stack_bottom_frame.bind(
		      deprecatedAPIs,
		      UnknownOwner
		    )();
		    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
		    var didWarnAboutMaps = false,
		      userProvidedKeyEscapeRegex = /\/+/g,
		      reportGlobalError =
		        "function" === typeof reportError
		          ? reportError
		          : function (error) {
		              if (
		                "object" === typeof window &&
		                "function" === typeof window.ErrorEvent
		              ) {
		                var event = new window.ErrorEvent("error", {
		                  bubbles: true,
		                  cancelable: true,
		                  message:
		                    "object" === typeof error &&
		                    null !== error &&
		                    "string" === typeof error.message
		                      ? String(error.message)
		                      : String(error),
		                  error: error
		                });
		                if (!window.dispatchEvent(event)) return;
		              } else if (
		                "object" === typeof process &&
		                "function" === typeof process.emit
		              ) {
		                process.emit("uncaughtException", error);
		                return;
		              }
		              console.error(error);
		            },
		      didWarnAboutMessageChannel = false,
		      enqueueTaskImpl = null,
		      actScopeDepth = 0,
		      didWarnNoAwaitAct = false,
		      isFlushing = false,
		      queueSeveralMicrotasks =
		        "function" === typeof queueMicrotask
		          ? function (callback) {
		              queueMicrotask(function () {
		                return queueMicrotask(callback);
		              });
		            }
		          : enqueueTask;
		    deprecatedAPIs = Object.freeze({
		      __proto__: null,
		      c: function (size) {
		        return resolveDispatcher().useMemoCache(size);
		      }
		    });
		    exports.Children = {
		      map: mapChildren,
		      forEach: function (children, forEachFunc, forEachContext) {
		        mapChildren(
		          children,
		          function () {
		            forEachFunc.apply(this, arguments);
		          },
		          forEachContext
		        );
		      },
		      count: function (children) {
		        var n = 0;
		        mapChildren(children, function () {
		          n++;
		        });
		        return n;
		      },
		      toArray: function (children) {
		        return (
		          mapChildren(children, function (child) {
		            return child;
		          }) || []
		        );
		      },
		      only: function (children) {
		        if (!isValidElement(children))
		          throw Error(
		            "React.Children.only expected to receive a single React element child."
		          );
		        return children;
		      }
		    };
		    exports.Component = Component;
		    exports.Fragment = REACT_FRAGMENT_TYPE;
		    exports.Profiler = REACT_PROFILER_TYPE;
		    exports.PureComponent = PureComponent;
		    exports.StrictMode = REACT_STRICT_MODE_TYPE;
		    exports.Suspense = REACT_SUSPENSE_TYPE;
		    exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
		      ReactSharedInternals;
		    exports.__COMPILER_RUNTIME = deprecatedAPIs;
		    exports.act = function (callback) {
		      var prevActQueue = ReactSharedInternals.actQueue,
		        prevActScopeDepth = actScopeDepth;
		      actScopeDepth++;
		      var queue = (ReactSharedInternals.actQueue =
		          null !== prevActQueue ? prevActQueue : []),
		        didAwaitActCall = false;
		      try {
		        var result = callback();
		      } catch (error) {
		        ReactSharedInternals.thrownErrors.push(error);
		      }
		      if (0 < ReactSharedInternals.thrownErrors.length)
		        throw (
		          (popActScope(prevActQueue, prevActScopeDepth),
		          (callback = aggregateErrors(ReactSharedInternals.thrownErrors)),
		          (ReactSharedInternals.thrownErrors.length = 0),
		          callback)
		        );
		      if (
		        null !== result &&
		        "object" === typeof result &&
		        "function" === typeof result.then
		      ) {
		        var thenable = result;
		        queueSeveralMicrotasks(function () {
		          didAwaitActCall ||
		            didWarnNoAwaitAct ||
		            ((didWarnNoAwaitAct = true),
		            console.error(
		              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
		            ));
		        });
		        return {
		          then: function (resolve, reject) {
		            didAwaitActCall = true;
		            thenable.then(
		              function (returnValue) {
		                popActScope(prevActQueue, prevActScopeDepth);
		                if (0 === prevActScopeDepth) {
		                  try {
		                    flushActQueue(queue),
		                      enqueueTask(function () {
		                        return recursivelyFlushAsyncActWork(
		                          returnValue,
		                          resolve,
		                          reject
		                        );
		                      });
		                  } catch (error$0) {
		                    ReactSharedInternals.thrownErrors.push(error$0);
		                  }
		                  if (0 < ReactSharedInternals.thrownErrors.length) {
		                    var _thrownError = aggregateErrors(
		                      ReactSharedInternals.thrownErrors
		                    );
		                    ReactSharedInternals.thrownErrors.length = 0;
		                    reject(_thrownError);
		                  }
		                } else resolve(returnValue);
		              },
		              function (error) {
		                popActScope(prevActQueue, prevActScopeDepth);
		                0 < ReactSharedInternals.thrownErrors.length
		                  ? ((error = aggregateErrors(
		                      ReactSharedInternals.thrownErrors
		                    )),
		                    (ReactSharedInternals.thrownErrors.length = 0),
		                    reject(error))
		                  : reject(error);
		              }
		            );
		          }
		        };
		      }
		      var returnValue$jscomp$0 = result;
		      popActScope(prevActQueue, prevActScopeDepth);
		      0 === prevActScopeDepth &&
		        (flushActQueue(queue),
		        0 !== queue.length &&
		          queueSeveralMicrotasks(function () {
		            didAwaitActCall ||
		              didWarnNoAwaitAct ||
		              ((didWarnNoAwaitAct = true),
		              console.error(
		                "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
		              ));
		          }),
		        (ReactSharedInternals.actQueue = null));
		      if (0 < ReactSharedInternals.thrownErrors.length)
		        throw (
		          ((callback = aggregateErrors(ReactSharedInternals.thrownErrors)),
		          (ReactSharedInternals.thrownErrors.length = 0),
		          callback)
		        );
		      return {
		        then: function (resolve, reject) {
		          didAwaitActCall = true;
		          0 === prevActScopeDepth
		            ? ((ReactSharedInternals.actQueue = queue),
		              enqueueTask(function () {
		                return recursivelyFlushAsyncActWork(
		                  returnValue$jscomp$0,
		                  resolve,
		                  reject
		                );
		              }))
		            : resolve(returnValue$jscomp$0);
		        }
		      };
		    };
		    exports.cache = function (fn) {
		      return function () {
		        return fn.apply(null, arguments);
		      };
		    };
		    exports.captureOwnerStack = function () {
		      var getCurrentStack = ReactSharedInternals.getCurrentStack;
		      return null === getCurrentStack ? null : getCurrentStack();
		    };
		    exports.cloneElement = function (element, config, children) {
		      if (null === element || void 0 === element)
		        throw Error(
		          "The argument must be a React element, but you passed " +
		            element +
		            "."
		        );
		      var props = assign({}, element.props),
		        key = element.key,
		        owner = element._owner;
		      if (null != config) {
		        var JSCompiler_inline_result;
		        a: {
		          if (
		            hasOwnProperty.call(config, "ref") &&
		            (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(
		              config,
		              "ref"
		            ).get) &&
		            JSCompiler_inline_result.isReactWarning
		          ) {
		            JSCompiler_inline_result = false;
		            break a;
		          }
		          JSCompiler_inline_result = void 0 !== config.ref;
		        }
		        JSCompiler_inline_result && (owner = getOwner());
		        hasValidKey(config) &&
		          (checkKeyStringCoercion(config.key), (key = "" + config.key));
		        for (propName in config)
		          !hasOwnProperty.call(config, propName) ||
		            "key" === propName ||
		            "__self" === propName ||
		            "__source" === propName ||
		            ("ref" === propName && void 0 === config.ref) ||
		            (props[propName] = config[propName]);
		      }
		      var propName = arguments.length - 2;
		      if (1 === propName) props.children = children;
		      else if (1 < propName) {
		        JSCompiler_inline_result = Array(propName);
		        for (var i = 0; i < propName; i++)
		          JSCompiler_inline_result[i] = arguments[i + 2];
		        props.children = JSCompiler_inline_result;
		      }
		      props = ReactElement(
		        element.type,
		        key,
		        void 0,
		        void 0,
		        owner,
		        props,
		        element._debugStack,
		        element._debugTask
		      );
		      for (key = 2; key < arguments.length; key++)
		        (owner = arguments[key]),
		          isValidElement(owner) && owner._store && (owner._store.validated = 1);
		      return props;
		    };
		    exports.createContext = function (defaultValue) {
		      defaultValue = {
		        $$typeof: REACT_CONTEXT_TYPE,
		        _currentValue: defaultValue,
		        _currentValue2: defaultValue,
		        _threadCount: 0,
		        Provider: null,
		        Consumer: null
		      };
		      defaultValue.Provider = defaultValue;
		      defaultValue.Consumer = {
		        $$typeof: REACT_CONSUMER_TYPE,
		        _context: defaultValue
		      };
		      defaultValue._currentRenderer = null;
		      defaultValue._currentRenderer2 = null;
		      return defaultValue;
		    };
		    exports.createElement = function (type, config, children) {
		      for (var i = 2; i < arguments.length; i++) {
		        var node = arguments[i];
		        isValidElement(node) && node._store && (node._store.validated = 1);
		      }
		      i = {};
		      node = null;
		      if (null != config)
		        for (propName in (didWarnAboutOldJSXRuntime ||
		          !("__self" in config) ||
		          "key" in config ||
		          ((didWarnAboutOldJSXRuntime = true),
		          console.warn(
		            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
		          )),
		        hasValidKey(config) &&
		          (checkKeyStringCoercion(config.key), (node = "" + config.key)),
		        config))
		          hasOwnProperty.call(config, propName) &&
		            "key" !== propName &&
		            "__self" !== propName &&
		            "__source" !== propName &&
		            (i[propName] = config[propName]);
		      var childrenLength = arguments.length - 2;
		      if (1 === childrenLength) i.children = children;
		      else if (1 < childrenLength) {
		        for (
		          var childArray = Array(childrenLength), _i = 0;
		          _i < childrenLength;
		          _i++
		        )
		          childArray[_i] = arguments[_i + 2];
		        Object.freeze && Object.freeze(childArray);
		        i.children = childArray;
		      }
		      if (type && type.defaultProps)
		        for (propName in ((childrenLength = type.defaultProps), childrenLength))
		          void 0 === i[propName] && (i[propName] = childrenLength[propName]);
		      node &&
		        defineKeyPropWarningGetter(
		          i,
		          "function" === typeof type
		            ? type.displayName || type.name || "Unknown"
		            : type
		        );
		      var propName = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
		      return ReactElement(
		        type,
		        node,
		        void 0,
		        void 0,
		        getOwner(),
		        i,
		        propName ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
		        propName ? createTask(getTaskName(type)) : unknownOwnerDebugTask
		      );
		    };
		    exports.createRef = function () {
		      var refObject = { current: null };
		      Object.seal(refObject);
		      return refObject;
		    };
		    exports.forwardRef = function (render) {
		      null != render && render.$$typeof === REACT_MEMO_TYPE
		        ? console.error(
		            "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
		          )
		        : "function" !== typeof render
		          ? console.error(
		              "forwardRef requires a render function but was given %s.",
		              null === render ? "null" : typeof render
		            )
		          : 0 !== render.length &&
		            2 !== render.length &&
		            console.error(
		              "forwardRef render functions accept exactly two parameters: props and ref. %s",
		              1 === render.length
		                ? "Did you forget to use the ref parameter?"
		                : "Any additional parameter will be undefined."
		            );
		      null != render &&
		        null != render.defaultProps &&
		        console.error(
		          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
		        );
		      var elementType = { $$typeof: REACT_FORWARD_REF_TYPE, render: render },
		        ownName;
		      Object.defineProperty(elementType, "displayName", {
		        enumerable: false,
		        configurable: true,
		        get: function () {
		          return ownName;
		        },
		        set: function (name) {
		          ownName = name;
		          render.name ||
		            render.displayName ||
		            (Object.defineProperty(render, "name", { value: name }),
		            (render.displayName = name));
		        }
		      });
		      return elementType;
		    };
		    exports.isValidElement = isValidElement;
		    exports.lazy = function (ctor) {
		      return {
		        $$typeof: REACT_LAZY_TYPE,
		        _payload: { _status: -1, _result: ctor },
		        _init: lazyInitializer
		      };
		    };
		    exports.memo = function (type, compare) {
		      null == type &&
		        console.error(
		          "memo: The first argument must be a component. Instead received: %s",
		          null === type ? "null" : typeof type
		        );
		      compare = {
		        $$typeof: REACT_MEMO_TYPE,
		        type: type,
		        compare: void 0 === compare ? null : compare
		      };
		      var ownName;
		      Object.defineProperty(compare, "displayName", {
		        enumerable: false,
		        configurable: true,
		        get: function () {
		          return ownName;
		        },
		        set: function (name) {
		          ownName = name;
		          type.name ||
		            type.displayName ||
		            (Object.defineProperty(type, "name", { value: name }),
		            (type.displayName = name));
		        }
		      });
		      return compare;
		    };
		    exports.startTransition = function (scope) {
		      var prevTransition = ReactSharedInternals.T,
		        currentTransition = {};
		      ReactSharedInternals.T = currentTransition;
		      currentTransition._updatedFibers = new Set();
		      try {
		        var returnValue = scope(),
		          onStartTransitionFinish = ReactSharedInternals.S;
		        null !== onStartTransitionFinish &&
		          onStartTransitionFinish(currentTransition, returnValue);
		        "object" === typeof returnValue &&
		          null !== returnValue &&
		          "function" === typeof returnValue.then &&
		          returnValue.then(noop, reportGlobalError);
		      } catch (error) {
		        reportGlobalError(error);
		      } finally {
		        null === prevTransition &&
		          currentTransition._updatedFibers &&
		          ((scope = currentTransition._updatedFibers.size),
		          currentTransition._updatedFibers.clear(),
		          10 < scope &&
		            console.warn(
		              "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
		            )),
		          (ReactSharedInternals.T = prevTransition);
		      }
		    };
		    exports.unstable_useCacheRefresh = function () {
		      return resolveDispatcher().useCacheRefresh();
		    };
		    exports.use = function (usable) {
		      return resolveDispatcher().use(usable);
		    };
		    exports.useActionState = function (action, initialState, permalink) {
		      return resolveDispatcher().useActionState(
		        action,
		        initialState,
		        permalink
		      );
		    };
		    exports.useCallback = function (callback, deps) {
		      return resolveDispatcher().useCallback(callback, deps);
		    };
		    exports.useContext = function (Context) {
		      var dispatcher = resolveDispatcher();
		      Context.$$typeof === REACT_CONSUMER_TYPE &&
		        console.error(
		          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
		        );
		      return dispatcher.useContext(Context);
		    };
		    exports.useDebugValue = function (value, formatterFn) {
		      return resolveDispatcher().useDebugValue(value, formatterFn);
		    };
		    exports.useDeferredValue = function (value, initialValue) {
		      return resolveDispatcher().useDeferredValue(value, initialValue);
		    };
		    exports.useEffect = function (create, createDeps, update) {
		      null == create &&
		        console.warn(
		          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
		        );
		      var dispatcher = resolveDispatcher();
		      if ("function" === typeof update)
		        throw Error(
		          "useEffect CRUD overload is not enabled in this build of React."
		        );
		      return dispatcher.useEffect(create, createDeps);
		    };
		    exports.useId = function () {
		      return resolveDispatcher().useId();
		    };
		    exports.useImperativeHandle = function (ref, create, deps) {
		      return resolveDispatcher().useImperativeHandle(ref, create, deps);
		    };
		    exports.useInsertionEffect = function (create, deps) {
		      null == create &&
		        console.warn(
		          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
		        );
		      return resolveDispatcher().useInsertionEffect(create, deps);
		    };
		    exports.useLayoutEffect = function (create, deps) {
		      null == create &&
		        console.warn(
		          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
		        );
		      return resolveDispatcher().useLayoutEffect(create, deps);
		    };
		    exports.useMemo = function (create, deps) {
		      return resolveDispatcher().useMemo(create, deps);
		    };
		    exports.useOptimistic = function (passthrough, reducer) {
		      return resolveDispatcher().useOptimistic(passthrough, reducer);
		    };
		    exports.useReducer = function (reducer, initialArg, init) {
		      return resolveDispatcher().useReducer(reducer, initialArg, init);
		    };
		    exports.useRef = function (initialValue) {
		      return resolveDispatcher().useRef(initialValue);
		    };
		    exports.useState = function (initialState) {
		      return resolveDispatcher().useState(initialState);
		    };
		    exports.useSyncExternalStore = function (
		      subscribe,
		      getSnapshot,
		      getServerSnapshot
		    ) {
		      return resolveDispatcher().useSyncExternalStore(
		        subscribe,
		        getSnapshot,
		        getServerSnapshot
		      );
		    };
		    exports.useTransition = function () {
		      return resolveDispatcher().useTransition();
		    };
		    exports.version = "19.1.1";
		    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
		      "function" ===
		        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop &&
		      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
		  })(); 
	} (react_development, react_development.exports));
	return react_development.exports;
}

var hasRequiredReact;

function requireReact () {
	if (hasRequiredReact) return react.exports;
	hasRequiredReact = 1;

	if (process.env.NODE_ENV === 'production') {
	  react.exports = requireReact_production();
	} else {
	  react.exports = requireReact_development();
	}
	return react.exports;
}

var reactExports = requireReact();
var React = /*@__PURE__*/getDefaultExportFromCjs(reactExports);

const createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const getInitialState = () => initialState;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const api = { setState, getState, getInitialState, subscribe };
  const initialState = state = createState(setState, getState, api);
  return api;
};
const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;

const identity = (arg) => arg;
function useStore(api, selector = identity) {
  const slice = React.useSyncExternalStore(
    api.subscribe,
    React.useCallback(() => selector(api.getState()), [api, selector]),
    React.useCallback(() => selector(api.getInitialState()), [api, selector])
  );
  React.useDebugValue(slice);
  return slice;
}
const createImpl = (createState) => {
  const api = createStore(createState);
  const useBoundStore = (selector) => useStore(api, selector);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
const create = (createState) => createState ? createImpl(createState) : createImpl;

var pathBrowserify;
var hasRequiredPathBrowserify;

function requirePathBrowserify () {
	if (hasRequiredPathBrowserify) return pathBrowserify;
	hasRequiredPathBrowserify = 1;

	function assertPath(path) {
	  if (typeof path !== 'string') {
	    throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
	  }
	}

	// Resolves . and .. elements in a path with directory names
	function normalizeStringPosix(path, allowAboveRoot) {
	  var res = '';
	  var lastSegmentLength = 0;
	  var lastSlash = -1;
	  var dots = 0;
	  var code;
	  for (var i = 0; i <= path.length; ++i) {
	    if (i < path.length)
	      code = path.charCodeAt(i);
	    else if (code === 47 /*/*/)
	      break;
	    else
	      code = 47 /*/*/;
	    if (code === 47 /*/*/) {
	      if (lastSlash === i - 1 || dots === 1) ; else if (lastSlash !== i - 1 && dots === 2) {
	        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/ || res.charCodeAt(res.length - 2) !== 46 /*.*/) {
	          if (res.length > 2) {
	            var lastSlashIndex = res.lastIndexOf('/');
	            if (lastSlashIndex !== res.length - 1) {
	              if (lastSlashIndex === -1) {
	                res = '';
	                lastSegmentLength = 0;
	              } else {
	                res = res.slice(0, lastSlashIndex);
	                lastSegmentLength = res.length - 1 - res.lastIndexOf('/');
	              }
	              lastSlash = i;
	              dots = 0;
	              continue;
	            }
	          } else if (res.length === 2 || res.length === 1) {
	            res = '';
	            lastSegmentLength = 0;
	            lastSlash = i;
	            dots = 0;
	            continue;
	          }
	        }
	        if (allowAboveRoot) {
	          if (res.length > 0)
	            res += '/..';
	          else
	            res = '..';
	          lastSegmentLength = 2;
	        }
	      } else {
	        if (res.length > 0)
	          res += '/' + path.slice(lastSlash + 1, i);
	        else
	          res = path.slice(lastSlash + 1, i);
	        lastSegmentLength = i - lastSlash - 1;
	      }
	      lastSlash = i;
	      dots = 0;
	    } else if (code === 46 /*.*/ && dots !== -1) {
	      ++dots;
	    } else {
	      dots = -1;
	    }
	  }
	  return res;
	}

	function _format(sep, pathObject) {
	  var dir = pathObject.dir || pathObject.root;
	  var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');
	  if (!dir) {
	    return base;
	  }
	  if (dir === pathObject.root) {
	    return dir + base;
	  }
	  return dir + sep + base;
	}

	var posix = {
	  // path.resolve([from ...], to)
	  resolve: function resolve() {
	    var resolvedPath = '';
	    var resolvedAbsolute = false;
	    var cwd;

	    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
	      var path;
	      if (i >= 0)
	        path = arguments[i];
	      else {
	        if (cwd === undefined)
	          cwd = process.cwd();
	        path = cwd;
	      }

	      assertPath(path);

	      // Skip empty entries
	      if (path.length === 0) {
	        continue;
	      }

	      resolvedPath = path + '/' + resolvedPath;
	      resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/;
	    }

	    // At this point the path should be resolved to a full absolute path, but
	    // handle relative paths to be safe (might happen when process.cwd() fails)

	    // Normalize the path
	    resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);

	    if (resolvedAbsolute) {
	      if (resolvedPath.length > 0)
	        return '/' + resolvedPath;
	      else
	        return '/';
	    } else if (resolvedPath.length > 0) {
	      return resolvedPath;
	    } else {
	      return '.';
	    }
	  },

	  normalize: function normalize(path) {
	    assertPath(path);

	    if (path.length === 0) return '.';

	    var isAbsolute = path.charCodeAt(0) === 47 /*/*/;
	    var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/;

	    // Normalize the path
	    path = normalizeStringPosix(path, !isAbsolute);

	    if (path.length === 0 && !isAbsolute) path = '.';
	    if (path.length > 0 && trailingSeparator) path += '/';

	    if (isAbsolute) return '/' + path;
	    return path;
	  },

	  isAbsolute: function isAbsolute(path) {
	    assertPath(path);
	    return path.length > 0 && path.charCodeAt(0) === 47 /*/*/;
	  },

	  join: function join() {
	    if (arguments.length === 0)
	      return '.';
	    var joined;
	    for (var i = 0; i < arguments.length; ++i) {
	      var arg = arguments[i];
	      assertPath(arg);
	      if (arg.length > 0) {
	        if (joined === undefined)
	          joined = arg;
	        else
	          joined += '/' + arg;
	      }
	    }
	    if (joined === undefined)
	      return '.';
	    return posix.normalize(joined);
	  },

	  relative: function relative(from, to) {
	    assertPath(from);
	    assertPath(to);

	    if (from === to) return '';

	    from = posix.resolve(from);
	    to = posix.resolve(to);

	    if (from === to) return '';

	    // Trim any leading backslashes
	    var fromStart = 1;
	    for (; fromStart < from.length; ++fromStart) {
	      if (from.charCodeAt(fromStart) !== 47 /*/*/)
	        break;
	    }
	    var fromEnd = from.length;
	    var fromLen = fromEnd - fromStart;

	    // Trim any leading backslashes
	    var toStart = 1;
	    for (; toStart < to.length; ++toStart) {
	      if (to.charCodeAt(toStart) !== 47 /*/*/)
	        break;
	    }
	    var toEnd = to.length;
	    var toLen = toEnd - toStart;

	    // Compare paths to find the longest common path from root
	    var length = fromLen < toLen ? fromLen : toLen;
	    var lastCommonSep = -1;
	    var i = 0;
	    for (; i <= length; ++i) {
	      if (i === length) {
	        if (toLen > length) {
	          if (to.charCodeAt(toStart + i) === 47 /*/*/) {
	            // We get here if `from` is the exact base path for `to`.
	            // For example: from='/foo/bar'; to='/foo/bar/baz'
	            return to.slice(toStart + i + 1);
	          } else if (i === 0) {
	            // We get here if `from` is the root
	            // For example: from='/'; to='/foo'
	            return to.slice(toStart + i);
	          }
	        } else if (fromLen > length) {
	          if (from.charCodeAt(fromStart + i) === 47 /*/*/) {
	            // We get here if `to` is the exact base path for `from`.
	            // For example: from='/foo/bar/baz'; to='/foo/bar'
	            lastCommonSep = i;
	          } else if (i === 0) {
	            // We get here if `to` is the root.
	            // For example: from='/foo'; to='/'
	            lastCommonSep = 0;
	          }
	        }
	        break;
	      }
	      var fromCode = from.charCodeAt(fromStart + i);
	      var toCode = to.charCodeAt(toStart + i);
	      if (fromCode !== toCode)
	        break;
	      else if (fromCode === 47 /*/*/)
	        lastCommonSep = i;
	    }

	    var out = '';
	    // Generate the relative path based on the path difference between `to`
	    // and `from`
	    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
	      if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/) {
	        if (out.length === 0)
	          out += '..';
	        else
	          out += '/..';
	      }
	    }

	    // Lastly, append the rest of the destination (`to`) path that comes after
	    // the common path parts
	    if (out.length > 0)
	      return out + to.slice(toStart + lastCommonSep);
	    else {
	      toStart += lastCommonSep;
	      if (to.charCodeAt(toStart) === 47 /*/*/)
	        ++toStart;
	      return to.slice(toStart);
	    }
	  },

	  _makeLong: function _makeLong(path) {
	    return path;
	  },

	  dirname: function dirname(path) {
	    assertPath(path);
	    if (path.length === 0) return '.';
	    var code = path.charCodeAt(0);
	    var hasRoot = code === 47 /*/*/;
	    var end = -1;
	    var matchedSlash = true;
	    for (var i = path.length - 1; i >= 1; --i) {
	      code = path.charCodeAt(i);
	      if (code === 47 /*/*/) {
	          if (!matchedSlash) {
	            end = i;
	            break;
	          }
	        } else {
	        // We saw the first non-path separator
	        matchedSlash = false;
	      }
	    }

	    if (end === -1) return hasRoot ? '/' : '.';
	    if (hasRoot && end === 1) return '//';
	    return path.slice(0, end);
	  },

	  basename: function basename(path, ext) {
	    if (ext !== undefined && typeof ext !== 'string') throw new TypeError('"ext" argument must be a string');
	    assertPath(path);

	    var start = 0;
	    var end = -1;
	    var matchedSlash = true;
	    var i;

	    if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
	      if (ext.length === path.length && ext === path) return '';
	      var extIdx = ext.length - 1;
	      var firstNonSlashEnd = -1;
	      for (i = path.length - 1; i >= 0; --i) {
	        var code = path.charCodeAt(i);
	        if (code === 47 /*/*/) {
	            // If we reached a path separator that was not part of a set of path
	            // separators at the end of the string, stop now
	            if (!matchedSlash) {
	              start = i + 1;
	              break;
	            }
	          } else {
	          if (firstNonSlashEnd === -1) {
	            // We saw the first non-path separator, remember this index in case
	            // we need it if the extension ends up not matching
	            matchedSlash = false;
	            firstNonSlashEnd = i + 1;
	          }
	          if (extIdx >= 0) {
	            // Try to match the explicit extension
	            if (code === ext.charCodeAt(extIdx)) {
	              if (--extIdx === -1) {
	                // We matched the extension, so mark this as the end of our path
	                // component
	                end = i;
	              }
	            } else {
	              // Extension does not match, so our result is the entire path
	              // component
	              extIdx = -1;
	              end = firstNonSlashEnd;
	            }
	          }
	        }
	      }

	      if (start === end) end = firstNonSlashEnd;else if (end === -1) end = path.length;
	      return path.slice(start, end);
	    } else {
	      for (i = path.length - 1; i >= 0; --i) {
	        if (path.charCodeAt(i) === 47 /*/*/) {
	            // If we reached a path separator that was not part of a set of path
	            // separators at the end of the string, stop now
	            if (!matchedSlash) {
	              start = i + 1;
	              break;
	            }
	          } else if (end === -1) {
	          // We saw the first non-path separator, mark this as the end of our
	          // path component
	          matchedSlash = false;
	          end = i + 1;
	        }
	      }

	      if (end === -1) return '';
	      return path.slice(start, end);
	    }
	  },

	  extname: function extname(path) {
	    assertPath(path);
	    var startDot = -1;
	    var startPart = 0;
	    var end = -1;
	    var matchedSlash = true;
	    // Track the state of characters (if any) we see before our first dot and
	    // after any path separator we find
	    var preDotState = 0;
	    for (var i = path.length - 1; i >= 0; --i) {
	      var code = path.charCodeAt(i);
	      if (code === 47 /*/*/) {
	          // If we reached a path separator that was not part of a set of path
	          // separators at the end of the string, stop now
	          if (!matchedSlash) {
	            startPart = i + 1;
	            break;
	          }
	          continue;
	        }
	      if (end === -1) {
	        // We saw the first non-path separator, mark this as the end of our
	        // extension
	        matchedSlash = false;
	        end = i + 1;
	      }
	      if (code === 46 /*.*/) {
	          // If this is our first dot, mark it as the start of our extension
	          if (startDot === -1)
	            startDot = i;
	          else if (preDotState !== 1)
	            preDotState = 1;
	      } else if (startDot !== -1) {
	        // We saw a non-dot and non-path separator before our dot, so we should
	        // have a good chance at having a non-empty extension
	        preDotState = -1;
	      }
	    }

	    if (startDot === -1 || end === -1 ||
	        // We saw a non-dot character immediately before the dot
	        preDotState === 0 ||
	        // The (right-most) trimmed path component is exactly '..'
	        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
	      return '';
	    }
	    return path.slice(startDot, end);
	  },

	  format: function format(pathObject) {
	    if (pathObject === null || typeof pathObject !== 'object') {
	      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
	    }
	    return _format('/', pathObject);
	  },

	  parse: function parse(path) {
	    assertPath(path);

	    var ret = { root: '', dir: '', base: '', ext: '', name: '' };
	    if (path.length === 0) return ret;
	    var code = path.charCodeAt(0);
	    var isAbsolute = code === 47 /*/*/;
	    var start;
	    if (isAbsolute) {
	      ret.root = '/';
	      start = 1;
	    } else {
	      start = 0;
	    }
	    var startDot = -1;
	    var startPart = 0;
	    var end = -1;
	    var matchedSlash = true;
	    var i = path.length - 1;

	    // Track the state of characters (if any) we see before our first dot and
	    // after any path separator we find
	    var preDotState = 0;

	    // Get non-dir info
	    for (; i >= start; --i) {
	      code = path.charCodeAt(i);
	      if (code === 47 /*/*/) {
	          // If we reached a path separator that was not part of a set of path
	          // separators at the end of the string, stop now
	          if (!matchedSlash) {
	            startPart = i + 1;
	            break;
	          }
	          continue;
	        }
	      if (end === -1) {
	        // We saw the first non-path separator, mark this as the end of our
	        // extension
	        matchedSlash = false;
	        end = i + 1;
	      }
	      if (code === 46 /*.*/) {
	          // If this is our first dot, mark it as the start of our extension
	          if (startDot === -1) startDot = i;else if (preDotState !== 1) preDotState = 1;
	        } else if (startDot !== -1) {
	        // We saw a non-dot and non-path separator before our dot, so we should
	        // have a good chance at having a non-empty extension
	        preDotState = -1;
	      }
	    }

	    if (startDot === -1 || end === -1 ||
	    // We saw a non-dot character immediately before the dot
	    preDotState === 0 ||
	    // The (right-most) trimmed path component is exactly '..'
	    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
	      if (end !== -1) {
	        if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);else ret.base = ret.name = path.slice(startPart, end);
	      }
	    } else {
	      if (startPart === 0 && isAbsolute) {
	        ret.name = path.slice(1, startDot);
	        ret.base = path.slice(1, end);
	      } else {
	        ret.name = path.slice(startPart, startDot);
	        ret.base = path.slice(startPart, end);
	      }
	      ret.ext = path.slice(startDot, end);
	    }

	    if (startPart > 0) ret.dir = path.slice(0, startPart - 1);else if (isAbsolute) ret.dir = '/';

	    return ret;
	  },

	  sep: '/',
	  delimiter: ':',
	  win32: null,
	  posix: null
	};

	posix.posix = posix;

	pathBrowserify = posix;
	return pathBrowserify;
}

var pathBrowserifyExports = requirePathBrowserify();

// Zustand store for the router state in Smaragdi
var useRouterState = create(function (set) {
  return {
    url: typeof location !== 'undefined' ? pathBrowserifyExports.normalize(location.pathname).replace(/\\/g, '/').replace(/\/$/, '') !== '' ? pathBrowserifyExports.normalize(location.pathname).replace(/\\/g, '/').replace(/\/$/, '') : '/' : '/',
    params: {},
    route: function route(to) {
      return set(function (state) {
        return _objectSpread2(_objectSpread2({}, state), {}, {
          url: to
        });
      });
    },
    setParams: function setParams(params) {
      return set(function (state) {
        return _objectSpread2(_objectSpread2({}, state), {}, {
          params: params
        });
      });
    }
  };
});

/**
 * Prepares a redirection
 * @internal
 * @param {string} to - The new URL to navigate to
 * @param {boolean} replace - Whether to replace the current history entry
 * @param {boolean} refresh - Whether to force a refresh even if the URL is the same
 */
var useNavigate = function useNavigate(to, replace, refresh) {
  // Use the Zustand store
  var url = useRouterState(function (state) {
    return state.url;
  });
  var route = useRouterState(function (state) {
    return state.route;
  });
  return function () {
    // Do nothing if the URL is the same
    if (!refresh && url === to) return;
    history[replace ? 'replaceState' : 'pushState'](null, '', to);
    // Update the Zustand store
    route(to);
  };
};

var _excluded = ["to", "replace", "refresh", "onClick"];
/**
 * Anchors for Smaragdi router
 * @param {Record<string, any>} props - The React props
 * @param {string} props.to - Shorthand for href
 * @param {boolean} props.replace - Whether to replace the current history entry
 * @param {boolean} props.refresh - Whether to force a refresh even if the URL is the same
 * @param {(e: any) => void} [props.onClick] - An optional onClick event handler
 * @param {Record<string, any>} props.rest - The rest of the props
 * @returns {ReactElement | null} - The result
 */
var Link = function Link(_ref) {
  var to = _ref.to,
    replace = _ref.replace,
    refresh = _ref.refresh,
    _onClick = _ref.onClick,
    rest = _objectWithoutProperties(_ref, _excluded);
  // Return an <a> element if called on the server
  if (typeof window === 'undefined') return /*#__PURE__*/reactExports.createElement('a', _objectSpread2(_objectSpread2({}, rest), {}, {
    href: to
  }));
  // Prepare the redirect
  var redirect = useNavigate(to, replace, refresh);
  return /*#__PURE__*/reactExports.createElement('a', _objectSpread2(_objectSpread2({}, rest), {}, {
    href: to,
    onClick: function onClick(e) {
      e.preventDefault();
      if (typeof _onClick === 'function') _onClick(e);
      redirect();
    }
  }));
};

/**
 * Declarative Route wrapper for Smaragdi router; does nothing on its own
 * @param {Record<string, any>} props - The React props
 * @param {Path} props.path - The route's pattern
 * @param {ReactNode} props.path - What the component must show if matched and rendered
 * @returns {ReactNode} - The children to render
 */
var Route = function Route(_ref) {
  _ref.path;
    var children = _ref.children;
  return children;
};

var dist = {};

var hasRequiredDist;

function requireDist () {
	if (hasRequiredDist) return dist;
	hasRequiredDist = 1;
	Object.defineProperty(dist, "__esModule", { value: true });
	dist.TokenData = void 0;
	dist.parse = parse;
	dist.compile = compile;
	dist.match = match;
	dist.pathToRegexp = pathToRegexp;
	dist.stringify = stringify;
	const DEFAULT_DELIMITER = "/";
	const NOOP_VALUE = (value) => value;
	const ID_START = /^[$_\p{ID_Start}]$/u;
	const ID_CONTINUE = /^[$\u200c\u200d\p{ID_Continue}]$/u;
	const DEBUG_URL = "https://git.new/pathToRegexpError";
	const SIMPLE_TOKENS = {
	    // Groups.
	    "{": "{",
	    "}": "}",
	    // Reserved.
	    "(": "(",
	    ")": ")",
	    "[": "[",
	    "]": "]",
	    "+": "+",
	    "?": "?",
	    "!": "!",
	};
	/**
	 * Escape text for stringify to path.
	 */
	function escapeText(str) {
	    return str.replace(/[{}()\[\]+?!:*]/g, "\\$&");
	}
	/**
	 * Escape a regular expression string.
	 */
	function escape(str) {
	    return str.replace(/[.+*?^${}()[\]|/\\]/g, "\\$&");
	}
	/**
	 * Tokenize input string.
	 */
	function* lexer(str) {
	    const chars = [...str];
	    let i = 0;
	    function name() {
	        let value = "";
	        if (ID_START.test(chars[++i])) {
	            value += chars[i];
	            while (ID_CONTINUE.test(chars[++i])) {
	                value += chars[i];
	            }
	        }
	        else if (chars[i] === '"') {
	            let pos = i;
	            while (i < chars.length) {
	                if (chars[++i] === '"') {
	                    i++;
	                    pos = 0;
	                    break;
	                }
	                if (chars[i] === "\\") {
	                    value += chars[++i];
	                }
	                else {
	                    value += chars[i];
	                }
	            }
	            if (pos) {
	                throw new TypeError(`Unterminated quote at ${pos}: ${DEBUG_URL}`);
	            }
	        }
	        if (!value) {
	            throw new TypeError(`Missing parameter name at ${i}: ${DEBUG_URL}`);
	        }
	        return value;
	    }
	    while (i < chars.length) {
	        const value = chars[i];
	        const type = SIMPLE_TOKENS[value];
	        if (type) {
	            yield { type, index: i++, value };
	        }
	        else if (value === "\\") {
	            yield { type: "ESCAPED", index: i++, value: chars[i++] };
	        }
	        else if (value === ":") {
	            const value = name();
	            yield { type: "PARAM", index: i, value };
	        }
	        else if (value === "*") {
	            const value = name();
	            yield { type: "WILDCARD", index: i, value };
	        }
	        else {
	            yield { type: "CHAR", index: i, value: chars[i++] };
	        }
	    }
	    return { type: "END", index: i, value: "" };
	}
	class Iter {
	    constructor(tokens) {
	        this.tokens = tokens;
	    }
	    peek() {
	        if (!this._peek) {
	            const next = this.tokens.next();
	            this._peek = next.value;
	        }
	        return this._peek;
	    }
	    tryConsume(type) {
	        const token = this.peek();
	        if (token.type !== type)
	            return;
	        this._peek = undefined; // Reset after consumed.
	        return token.value;
	    }
	    consume(type) {
	        const value = this.tryConsume(type);
	        if (value !== undefined)
	            return value;
	        const { type: nextType, index } = this.peek();
	        throw new TypeError(`Unexpected ${nextType} at ${index}, expected ${type}: ${DEBUG_URL}`);
	    }
	    text() {
	        let result = "";
	        let value;
	        while ((value = this.tryConsume("CHAR") || this.tryConsume("ESCAPED"))) {
	            result += value;
	        }
	        return result;
	    }
	}
	/**
	 * Tokenized path instance.
	 */
	class TokenData {
	    constructor(tokens) {
	        this.tokens = tokens;
	    }
	}
	dist.TokenData = TokenData;
	/**
	 * Parse a string for the raw tokens.
	 */
	function parse(str, options = {}) {
	    const { encodePath = NOOP_VALUE } = options;
	    const it = new Iter(lexer(str));
	    function consume(endType) {
	        const tokens = [];
	        while (true) {
	            const path = it.text();
	            if (path)
	                tokens.push({ type: "text", value: encodePath(path) });
	            const param = it.tryConsume("PARAM");
	            if (param) {
	                tokens.push({
	                    type: "param",
	                    name: param,
	                });
	                continue;
	            }
	            const wildcard = it.tryConsume("WILDCARD");
	            if (wildcard) {
	                tokens.push({
	                    type: "wildcard",
	                    name: wildcard,
	                });
	                continue;
	            }
	            const open = it.tryConsume("{");
	            if (open) {
	                tokens.push({
	                    type: "group",
	                    tokens: consume("}"),
	                });
	                continue;
	            }
	            it.consume(endType);
	            return tokens;
	        }
	    }
	    const tokens = consume("END");
	    return new TokenData(tokens);
	}
	/**
	 * Compile a string to a template function for the path.
	 */
	function compile(path, options = {}) {
	    const { encode = encodeURIComponent, delimiter = DEFAULT_DELIMITER } = options;
	    const data = path instanceof TokenData ? path : parse(path, options);
	    const fn = tokensToFunction(data.tokens, delimiter, encode);
	    return function path(data = {}) {
	        const [path, ...missing] = fn(data);
	        if (missing.length) {
	            throw new TypeError(`Missing parameters: ${missing.join(", ")}`);
	        }
	        return path;
	    };
	}
	function tokensToFunction(tokens, delimiter, encode) {
	    const encoders = tokens.map((token) => tokenToFunction(token, delimiter, encode));
	    return (data) => {
	        const result = [""];
	        for (const encoder of encoders) {
	            const [value, ...extras] = encoder(data);
	            result[0] += value;
	            result.push(...extras);
	        }
	        return result;
	    };
	}
	/**
	 * Convert a single token into a path building function.
	 */
	function tokenToFunction(token, delimiter, encode) {
	    if (token.type === "text")
	        return () => [token.value];
	    if (token.type === "group") {
	        const fn = tokensToFunction(token.tokens, delimiter, encode);
	        return (data) => {
	            const [value, ...missing] = fn(data);
	            if (!missing.length)
	                return [value];
	            return [""];
	        };
	    }
	    const encodeValue = encode || NOOP_VALUE;
	    if (token.type === "wildcard" && encode !== false) {
	        return (data) => {
	            const value = data[token.name];
	            if (value == null)
	                return ["", token.name];
	            if (!Array.isArray(value) || value.length === 0) {
	                throw new TypeError(`Expected "${token.name}" to be a non-empty array`);
	            }
	            return [
	                value
	                    .map((value, index) => {
	                    if (typeof value !== "string") {
	                        throw new TypeError(`Expected "${token.name}/${index}" to be a string`);
	                    }
	                    return encodeValue(value);
	                })
	                    .join(delimiter),
	            ];
	        };
	    }
	    return (data) => {
	        const value = data[token.name];
	        if (value == null)
	            return ["", token.name];
	        if (typeof value !== "string") {
	            throw new TypeError(`Expected "${token.name}" to be a string`);
	        }
	        return [encodeValue(value)];
	    };
	}
	/**
	 * Transform a path into a match function.
	 */
	function match(path, options = {}) {
	    const { decode = decodeURIComponent, delimiter = DEFAULT_DELIMITER } = options;
	    const { regexp, keys } = pathToRegexp(path, options);
	    const decoders = keys.map((key) => {
	        if (decode === false)
	            return NOOP_VALUE;
	        if (key.type === "param")
	            return decode;
	        return (value) => value.split(delimiter).map(decode);
	    });
	    return function match(input) {
	        const m = regexp.exec(input);
	        if (!m)
	            return false;
	        const path = m[0];
	        const params = Object.create(null);
	        for (let i = 1; i < m.length; i++) {
	            if (m[i] === undefined)
	                continue;
	            const key = keys[i - 1];
	            const decoder = decoders[i - 1];
	            params[key.name] = decoder(m[i]);
	        }
	        return { path, params };
	    };
	}
	function pathToRegexp(path, options = {}) {
	    const { delimiter = DEFAULT_DELIMITER, end = true, sensitive = false, trailing = true, } = options;
	    const keys = [];
	    const sources = [];
	    const flags = sensitive ? "" : "i";
	    const paths = Array.isArray(path) ? path : [path];
	    const items = paths.map((path) => path instanceof TokenData ? path : parse(path, options));
	    for (const { tokens } of items) {
	        for (const seq of flatten(tokens, 0, [])) {
	            const regexp = sequenceToRegExp(seq, delimiter, keys);
	            sources.push(regexp);
	        }
	    }
	    let pattern = `^(?:${sources.join("|")})`;
	    if (trailing)
	        pattern += `(?:${escape(delimiter)}$)?`;
	    pattern += end ? "$" : `(?=${escape(delimiter)}|$)`;
	    const regexp = new RegExp(pattern, flags);
	    return { regexp, keys };
	}
	/**
	 * Generate a flat list of sequence tokens from the given tokens.
	 */
	function* flatten(tokens, index, init) {
	    if (index === tokens.length) {
	        return yield init;
	    }
	    const token = tokens[index];
	    if (token.type === "group") {
	        const fork = init.slice();
	        for (const seq of flatten(token.tokens, 0, fork)) {
	            yield* flatten(tokens, index + 1, seq);
	        }
	    }
	    else {
	        init.push(token);
	    }
	    yield* flatten(tokens, index + 1, init);
	}
	/**
	 * Transform a flat sequence of tokens into a regular expression.
	 */
	function sequenceToRegExp(tokens, delimiter, keys) {
	    let result = "";
	    let backtrack = "";
	    let isSafeSegmentParam = true;
	    for (let i = 0; i < tokens.length; i++) {
	        const token = tokens[i];
	        if (token.type === "text") {
	            result += escape(token.value);
	            backtrack += token.value;
	            isSafeSegmentParam || (isSafeSegmentParam = token.value.includes(delimiter));
	            continue;
	        }
	        if (token.type === "param" || token.type === "wildcard") {
	            if (!isSafeSegmentParam && !backtrack) {
	                throw new TypeError(`Missing text after "${token.name}": ${DEBUG_URL}`);
	            }
	            if (token.type === "param") {
	                result += `(${negate(delimiter, isSafeSegmentParam ? "" : backtrack)}+)`;
	            }
	            else {
	                result += `([\\s\\S]+)`;
	            }
	            keys.push(token);
	            backtrack = "";
	            isSafeSegmentParam = false;
	            continue;
	        }
	    }
	    return result;
	}
	function negate(delimiter, backtrack) {
	    if (backtrack.length < 2) {
	        if (delimiter.length < 2)
	            return `[^${escape(delimiter + backtrack)}]`;
	        return `(?:(?!${escape(delimiter)})[^${escape(backtrack)}])`;
	    }
	    if (delimiter.length < 2) {
	        return `(?:(?!${escape(backtrack)})[^${escape(delimiter)}])`;
	    }
	    return `(?:(?!${escape(backtrack)}|${escape(delimiter)})[\\s\\S])`;
	}
	/**
	 * Stringify token data into a path string.
	 */
	function stringify(data) {
	    return data.tokens
	        .map(function stringifyToken(token, index, tokens) {
	        if (token.type === "text")
	            return escapeText(token.value);
	        if (token.type === "group") {
	            return `{${token.tokens.map(stringifyToken).join("")}}`;
	        }
	        const isSafe = isNameSafe(token.name) && isNextNameSafe(tokens[index + 1]);
	        const key = isSafe ? token.name : JSON.stringify(token.name);
	        if (token.type === "param")
	            return `:${key}`;
	        if (token.type === "wildcard")
	            return `*${key}`;
	        throw new TypeError(`Unexpected token: ${token}`);
	    })
	        .join("");
	}
	function isNameSafe(name) {
	    const [first, ...rest] = name;
	    if (!ID_START.test(first))
	        return false;
	    return rest.every((char) => ID_CONTINUE.test(char));
	}
	function isNextNameSafe(token) {
	    if ((token === null || token === void 0 ? void 0 : token.type) !== "text")
	        return true;
	    return !ID_CONTINUE.test(token.value[0]);
	}
	
	return dist;
}

var distExports = requireDist();

/**
 * Router logic for Smaragdi router
 * @param props - The React props
 * @param {ReactElement<{ path: Path, children: ReactNode }, typeof Route> | ReactElement<{ path: Path, children: ReactNode }, typeof Route>[]} props.children - The children
 * @returns {ReactNode} - The contents of the matched route
 */
var Routes = function Routes(_ref) {
  var children = _ref.children;
  // Use the store
  var store = als.getStore();
  // If the store is not defined, throw an error
  if (typeof store === 'undefined') throw new Error('AsyncLocalStorage store is not defined.');
  // Loop through the routes
  if (children instanceof Array) {
    var _iterator = _createForOfIteratorHelper(children),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var child = _step.value;
        // Create a function to match the route and match it
        var matched = distExports.match(child.props.path)(store.routerContext.url);
        // Check if the route is matched
        if (matched) {
          // Add the parameters to the store
          store.routerContext.params = matched.params;
          // Return the route
          return child;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } else {
    // Create a function to match the route and match it
    var _matched = distExports.match(children.props.path)(store.routerContext.url);
    // Check if the route is matched
    if (_matched) {
      // Add the parameters to the store
      store.routerContext.params = _matched.params;
      // Return the route
      return children;
    }
    return null;
  }
};

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production;

function requireReactJsxRuntime_production () {
	if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
	hasRequiredReactJsxRuntime_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
	  var key = null;
	  void 0 !== maybeKey && (key = "" + maybeKey);
	  void 0 !== config.key && (key = "" + config.key);
	  if ("key" in config) {
	    maybeKey = {};
	    for (var propName in config)
	      "key" !== propName && (maybeKey[propName] = config[propName]);
	  } else maybeKey = config;
	  config = maybeKey.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== config ? config : null,
	    props: maybeKey
	  };
	}
	reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_production.jsx = jsxProd;
	reactJsxRuntime_production.jsxs = jsxProd;
	return reactJsxRuntime_production;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;
	"production" !== process.env.NODE_ENV &&
	  (function () {
	    function getComponentNameFromType(type) {
	      if (null == type) return null;
	      if ("function" === typeof type)
	        return type.$$typeof === REACT_CLIENT_REFERENCE
	          ? null
	          : type.displayName || type.name || null;
	      if ("string" === typeof type) return type;
	      switch (type) {
	        case REACT_FRAGMENT_TYPE:
	          return "Fragment";
	        case REACT_PROFILER_TYPE:
	          return "Profiler";
	        case REACT_STRICT_MODE_TYPE:
	          return "StrictMode";
	        case REACT_SUSPENSE_TYPE:
	          return "Suspense";
	        case REACT_SUSPENSE_LIST_TYPE:
	          return "SuspenseList";
	        case REACT_ACTIVITY_TYPE:
	          return "Activity";
	      }
	      if ("object" === typeof type)
	        switch (
	          ("number" === typeof type.tag &&
	            console.error(
	              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
	            ),
	          type.$$typeof)
	        ) {
	          case REACT_PORTAL_TYPE:
	            return "Portal";
	          case REACT_CONTEXT_TYPE:
	            return (type.displayName || "Context") + ".Provider";
	          case REACT_CONSUMER_TYPE:
	            return (type._context.displayName || "Context") + ".Consumer";
	          case REACT_FORWARD_REF_TYPE:
	            var innerType = type.render;
	            type = type.displayName;
	            type ||
	              ((type = innerType.displayName || innerType.name || ""),
	              (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
	            return type;
	          case REACT_MEMO_TYPE:
	            return (
	              (innerType = type.displayName || null),
	              null !== innerType
	                ? innerType
	                : getComponentNameFromType(type.type) || "Memo"
	            );
	          case REACT_LAZY_TYPE:
	            innerType = type._payload;
	            type = type._init;
	            try {
	              return getComponentNameFromType(type(innerType));
	            } catch (x) {}
	        }
	      return null;
	    }
	    function testStringCoercion(value) {
	      return "" + value;
	    }
	    function checkKeyStringCoercion(value) {
	      try {
	        testStringCoercion(value);
	        var JSCompiler_inline_result = !1;
	      } catch (e) {
	        JSCompiler_inline_result = true;
	      }
	      if (JSCompiler_inline_result) {
	        JSCompiler_inline_result = console;
	        var JSCompiler_temp_const = JSCompiler_inline_result.error;
	        var JSCompiler_inline_result$jscomp$0 =
	          ("function" === typeof Symbol &&
	            Symbol.toStringTag &&
	            value[Symbol.toStringTag]) ||
	          value.constructor.name ||
	          "Object";
	        JSCompiler_temp_const.call(
	          JSCompiler_inline_result,
	          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
	          JSCompiler_inline_result$jscomp$0
	        );
	        return testStringCoercion(value);
	      }
	    }
	    function getTaskName(type) {
	      if (type === REACT_FRAGMENT_TYPE) return "<>";
	      if (
	        "object" === typeof type &&
	        null !== type &&
	        type.$$typeof === REACT_LAZY_TYPE
	      )
	        return "<...>";
	      try {
	        var name = getComponentNameFromType(type);
	        return name ? "<" + name + ">" : "<...>";
	      } catch (x) {
	        return "<...>";
	      }
	    }
	    function getOwner() {
	      var dispatcher = ReactSharedInternals.A;
	      return null === dispatcher ? null : dispatcher.getOwner();
	    }
	    function UnknownOwner() {
	      return Error("react-stack-top-frame");
	    }
	    function hasValidKey(config) {
	      if (hasOwnProperty.call(config, "key")) {
	        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
	        if (getter && getter.isReactWarning) return false;
	      }
	      return void 0 !== config.key;
	    }
	    function defineKeyPropWarningGetter(props, displayName) {
	      function warnAboutAccessingKey() {
	        specialPropKeyWarningShown ||
	          ((specialPropKeyWarningShown = true),
	          console.error(
	            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
	            displayName
	          ));
	      }
	      warnAboutAccessingKey.isReactWarning = true;
	      Object.defineProperty(props, "key", {
	        get: warnAboutAccessingKey,
	        configurable: true
	      });
	    }
	    function elementRefGetterWithDeprecationWarning() {
	      var componentName = getComponentNameFromType(this.type);
	      didWarnAboutElementRef[componentName] ||
	        ((didWarnAboutElementRef[componentName] = true),
	        console.error(
	          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
	        ));
	      componentName = this.props.ref;
	      return void 0 !== componentName ? componentName : null;
	    }
	    function ReactElement(
	      type,
	      key,
	      self,
	      source,
	      owner,
	      props,
	      debugStack,
	      debugTask
	    ) {
	      self = props.ref;
	      type = {
	        $$typeof: REACT_ELEMENT_TYPE,
	        type: type,
	        key: key,
	        props: props,
	        _owner: owner
	      };
	      null !== (void 0 !== self ? self : null)
	        ? Object.defineProperty(type, "ref", {
	            enumerable: false,
	            get: elementRefGetterWithDeprecationWarning
	          })
	        : Object.defineProperty(type, "ref", { enumerable: false, value: null });
	      type._store = {};
	      Object.defineProperty(type._store, "validated", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: 0
	      });
	      Object.defineProperty(type, "_debugInfo", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: null
	      });
	      Object.defineProperty(type, "_debugStack", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: debugStack
	      });
	      Object.defineProperty(type, "_debugTask", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: debugTask
	      });
	      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
	      return type;
	    }
	    function jsxDEVImpl(
	      type,
	      config,
	      maybeKey,
	      isStaticChildren,
	      source,
	      self,
	      debugStack,
	      debugTask
	    ) {
	      var children = config.children;
	      if (void 0 !== children)
	        if (isStaticChildren)
	          if (isArrayImpl(children)) {
	            for (
	              isStaticChildren = 0;
	              isStaticChildren < children.length;
	              isStaticChildren++
	            )
	              validateChildKeys(children[isStaticChildren]);
	            Object.freeze && Object.freeze(children);
	          } else
	            console.error(
	              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
	            );
	        else validateChildKeys(children);
	      if (hasOwnProperty.call(config, "key")) {
	        children = getComponentNameFromType(type);
	        var keys = Object.keys(config).filter(function (k) {
	          return "key" !== k;
	        });
	        isStaticChildren =
	          0 < keys.length
	            ? "{key: someKey, " + keys.join(": ..., ") + ": ...}"
	            : "{key: someKey}";
	        didWarnAboutKeySpread[children + isStaticChildren] ||
	          ((keys =
	            0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}"),
	          console.error(
	            'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
	            isStaticChildren,
	            children,
	            keys,
	            children
	          ),
	          (didWarnAboutKeySpread[children + isStaticChildren] = true));
	      }
	      children = null;
	      void 0 !== maybeKey &&
	        (checkKeyStringCoercion(maybeKey), (children = "" + maybeKey));
	      hasValidKey(config) &&
	        (checkKeyStringCoercion(config.key), (children = "" + config.key));
	      if ("key" in config) {
	        maybeKey = {};
	        for (var propName in config)
	          "key" !== propName && (maybeKey[propName] = config[propName]);
	      } else maybeKey = config;
	      children &&
	        defineKeyPropWarningGetter(
	          maybeKey,
	          "function" === typeof type
	            ? type.displayName || type.name || "Unknown"
	            : type
	        );
	      return ReactElement(
	        type,
	        children,
	        self,
	        source,
	        getOwner(),
	        maybeKey,
	        debugStack,
	        debugTask
	      );
	    }
	    function validateChildKeys(node) {
	      "object" === typeof node &&
	        null !== node &&
	        node.$$typeof === REACT_ELEMENT_TYPE &&
	        node._store &&
	        (node._store.validated = 1);
	    }
	    var React = requireReact(),
	      REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	      REACT_PORTAL_TYPE = Symbol.for("react.portal"),
	      REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
	      REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
	      REACT_PROFILER_TYPE = Symbol.for("react.profiler");
	    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
	      REACT_CONTEXT_TYPE = Symbol.for("react.context"),
	      REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
	      REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
	      REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
	      REACT_MEMO_TYPE = Symbol.for("react.memo"),
	      REACT_LAZY_TYPE = Symbol.for("react.lazy"),
	      REACT_ACTIVITY_TYPE = Symbol.for("react.activity"),
	      REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"),
	      ReactSharedInternals =
	        React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
	      hasOwnProperty = Object.prototype.hasOwnProperty,
	      isArrayImpl = Array.isArray,
	      createTask = console.createTask
	        ? console.createTask
	        : function () {
	            return null;
	          };
	    React = {
	      react_stack_bottom_frame: function (callStackForError) {
	        return callStackForError();
	      }
	    };
	    var specialPropKeyWarningShown;
	    var didWarnAboutElementRef = {};
	    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(
	      React,
	      UnknownOwner
	    )();
	    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
	    var didWarnAboutKeySpread = {};
	    reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	    reactJsxRuntime_development.jsx = function (type, config, maybeKey, source, self) {
	      var trackActualOwner =
	        1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
	      return jsxDEVImpl(
	        type,
	        config,
	        maybeKey,
	        false,
	        source,
	        self,
	        trackActualOwner
	          ? Error("react-stack-top-frame")
	          : unknownOwnerDebugStack,
	        trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
	      );
	    };
	    reactJsxRuntime_development.jsxs = function (type, config, maybeKey, source, self) {
	      var trackActualOwner =
	        1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
	      return jsxDEVImpl(
	        type,
	        config,
	        maybeKey,
	        true,
	        source,
	        self,
	        trackActualOwner
	          ? Error("react-stack-top-frame")
	          : unknownOwnerDebugStack,
	        trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
	      );
	    };
	  })();
	return reactJsxRuntime_development;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;

	if (process.env.NODE_ENV === 'production') {
	  jsxRuntime.exports = requireReactJsxRuntime_production();
	} else {
	  jsxRuntime.exports = requireReactJsxRuntime_development();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

var App = function App() {
  return /*#__PURE__*/jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [/*#__PURE__*/jsxRuntimeExports.jsx(Link, {
      to: "/",
      children: "Say Hello"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("br", {}), /*#__PURE__*/jsxRuntimeExports.jsx(Link, {
      to: "/about",
      children: "Say Hi"
    }), /*#__PURE__*/jsxRuntimeExports.jsx("p", {
      children: /*#__PURE__*/jsxRuntimeExports.jsxs(Routes, {
        children: [/*#__PURE__*/jsxRuntimeExports.jsx(Route, {
          path: "/",
          children: "Hello"
        }), /*#__PURE__*/jsxRuntimeExports.jsx(Route, {
          path: "/about",
          children: "Hi"
        })]
      })
    })]
  });
};

export { App as default };
