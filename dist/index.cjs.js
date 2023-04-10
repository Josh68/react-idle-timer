var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __name = (target, value) => __defProp(target, "name", {value, configurable: true});
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = {exports: {}}).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? {get: () => module2.default, enumerable: true} : {value: module2, enumerable: true})), module2);
};

// node_modules/fast-unique-numbers/build/es5/bundle.js
var require_bundle = __commonJS({
  "node_modules/fast-unique-numbers/build/es5/bundle.js"(exports, module2) {
    (function(global, factory) {
      typeof exports === "object" && typeof module2 !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.fastUniqueNumbers = {}));
    })(exports, function(exports2) {
      "use strict";
      var createAddUniqueNumber = /* @__PURE__ */ __name(function createAddUniqueNumber2(generateUniqueNumber3) {
        return function(set) {
          var number = generateUniqueNumber3(set);
          set.add(number);
          return number;
        };
      }, "createAddUniqueNumber");
      var createCache = /* @__PURE__ */ __name(function createCache2(lastNumberWeakMap) {
        return function(collection, nextNumber) {
          lastNumberWeakMap.set(collection, nextNumber);
          return nextNumber;
        };
      }, "createCache");
      var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER === void 0 ? 9007199254740991 : Number.MAX_SAFE_INTEGER;
      var TWO_TO_THE_POWER_OF_TWENTY_NINE = 536870912;
      var TWO_TO_THE_POWER_OF_THIRTY = TWO_TO_THE_POWER_OF_TWENTY_NINE * 2;
      var createGenerateUniqueNumber = /* @__PURE__ */ __name(function createGenerateUniqueNumber2(cache2, lastNumberWeakMap) {
        return function(collection) {
          var lastNumber = lastNumberWeakMap.get(collection);
          var nextNumber = lastNumber === void 0 ? collection.size : lastNumber < TWO_TO_THE_POWER_OF_THIRTY ? lastNumber + 1 : 0;
          if (!collection.has(nextNumber)) {
            return cache2(collection, nextNumber);
          }
          if (collection.size < TWO_TO_THE_POWER_OF_TWENTY_NINE) {
            while (collection.has(nextNumber)) {
              nextNumber = Math.floor(Math.random() * TWO_TO_THE_POWER_OF_THIRTY);
            }
            return cache2(collection, nextNumber);
          }
          if (collection.size > MAX_SAFE_INTEGER) {
            throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");
          }
          while (collection.has(nextNumber)) {
            nextNumber = Math.floor(Math.random() * MAX_SAFE_INTEGER);
          }
          return cache2(collection, nextNumber);
        };
      }, "createGenerateUniqueNumber");
      var LAST_NUMBER_WEAK_MAP = new WeakMap();
      var cache = createCache(LAST_NUMBER_WEAK_MAP);
      var generateUniqueNumber2 = createGenerateUniqueNumber(cache, LAST_NUMBER_WEAK_MAP);
      var addUniqueNumber = createAddUniqueNumber(generateUniqueNumber2);
      exports2.addUniqueNumber = addUniqueNumber;
      exports2.generateUniqueNumber = generateUniqueNumber2;
      Object.defineProperty(exports2, "__esModule", {value: true});
    });
  }
});

// src/index.ts
__markAsModule(exports);
__export(exports, {
  DEFAULT_EVENTS: () => DEFAULT_EVENTS,
  IdleTimerComponent: () => IdleTimerComponent,
  IdleTimerConsumer: () => IdleTimerConsumer,
  IdleTimerContext: () => IdleTimerContext,
  IdleTimerProvider: () => IdleTimerProvider,
  createMocks: () => createMocks,
  useIdleTimer: () => useIdleTimer,
  useIdleTimerContext: () => useIdleTimerContext,
  withIdleTimer: () => withIdleTimer,
  workerTimers: () => workerTimers2
});

// src/withIdleTimer.tsx
var import_react = __toModule(require("react"));
function withIdleTimer(Component2) {
  return (0, import_react.forwardRef)(/* @__PURE__ */ __name(function IdleTimer(props, ref) {
    const options = {...props};
    const idleTimer = useIdleTimer(options);
    if (typeof ref === "function") {
      ref(idleTimer);
    } else if (ref) {
      ref.current = idleTimer;
    }
    return /* @__PURE__ */ import_react.default.createElement(Component2, {
      ...props,
      ...idleTimer
    });
  }, "IdleTimer"));
}
__name(withIdleTimer, "withIdleTimer");
var IIdleTimerComponent = class extends import_react.Component {
};
__name(IIdleTimerComponent, "IIdleTimerComponent");
var IdleTimerComponent = class extends IIdleTimerComponent {
  constructor(props) {
    super(props);
    if (this.onPresenceChange)
      props.setOnPresenceChange(this.onPresenceChange.bind(this));
    if (this.onPrompt)
      props.setOnPrompt(this.onPrompt.bind(this));
    if (this.onIdle)
      props.setOnIdle(this.onIdle.bind(this));
    if (this.onActive)
      props.setOnActive(this.onActive.bind(this));
    if (this.onAction)
      props.setOnAction(this.onAction.bind(this));
    if (this.onMessage)
      props.setOnMessage(this.onMessage.bind(this));
  }
};
__name(IdleTimerComponent, "IdleTimerComponent");

// src/useIdleTimer.tsx
var import_react2 = __toModule(require("react"));

// node_modules/worker-timers-broker/build/es2019/module.js
var import_fast_unique_numbers = __toModule(require_bundle());

// node_modules/worker-timers-broker/build/es2019/guards/call-notification.js
var isCallNotification = /* @__PURE__ */ __name((message) => {
  return message.method !== void 0 && message.method === "call";
}, "isCallNotification");

// node_modules/worker-timers-broker/build/es2019/guards/clear-response.js
var isClearResponse = /* @__PURE__ */ __name((message) => {
  return message.error === null && typeof message.id === "number";
}, "isClearResponse");

// node_modules/worker-timers-broker/build/es2019/module.js
var load = /* @__PURE__ */ __name((url) => {
  const scheduledIntervalFunctions = new Map([[0, () => {
  }]]);
  const scheduledTimeoutFunctions = new Map([[0, () => {
  }]]);
  const unrespondedRequests = new Map();
  const worker3 = new Worker(url);
  worker3.addEventListener("message", ({data}) => {
    if (isCallNotification(data)) {
      const {params: {timerId, timerType}} = data;
      if (timerType === "interval") {
        const idOrFunc = scheduledIntervalFunctions.get(timerId);
        if (typeof idOrFunc === "number") {
          const timerIdAndTimerType = unrespondedRequests.get(idOrFunc);
          if (timerIdAndTimerType === void 0 || timerIdAndTimerType.timerId !== timerId || timerIdAndTimerType.timerType !== timerType) {
            throw new Error("The timer is in an undefined state.");
          }
        } else if (typeof idOrFunc !== "undefined") {
          idOrFunc();
        } else {
          throw new Error("The timer is in an undefined state.");
        }
      } else if (timerType === "timeout") {
        const idOrFunc = scheduledTimeoutFunctions.get(timerId);
        if (typeof idOrFunc === "number") {
          const timerIdAndTimerType = unrespondedRequests.get(idOrFunc);
          if (timerIdAndTimerType === void 0 || timerIdAndTimerType.timerId !== timerId || timerIdAndTimerType.timerType !== timerType) {
            throw new Error("The timer is in an undefined state.");
          }
        } else if (typeof idOrFunc !== "undefined") {
          idOrFunc();
          scheduledTimeoutFunctions.delete(timerId);
        } else {
          throw new Error("The timer is in an undefined state.");
        }
      }
    } else if (isClearResponse(data)) {
      const {id} = data;
      const timerIdAndTimerType = unrespondedRequests.get(id);
      if (timerIdAndTimerType === void 0) {
        throw new Error("The timer is in an undefined state.");
      }
      const {timerId, timerType} = timerIdAndTimerType;
      unrespondedRequests.delete(id);
      if (timerType === "interval") {
        scheduledIntervalFunctions.delete(timerId);
      } else {
        scheduledTimeoutFunctions.delete(timerId);
      }
    } else {
      const {error: {message}} = data;
      throw new Error(message);
    }
  });
  const clearInterval3 = /* @__PURE__ */ __name((timerId) => {
    const id = (0, import_fast_unique_numbers.generateUniqueNumber)(unrespondedRequests);
    unrespondedRequests.set(id, {timerId, timerType: "interval"});
    scheduledIntervalFunctions.set(timerId, id);
    worker3.postMessage({
      id,
      method: "clear",
      params: {timerId, timerType: "interval"}
    });
  }, "clearInterval");
  const clearTimeout3 = /* @__PURE__ */ __name((timerId) => {
    const id = (0, import_fast_unique_numbers.generateUniqueNumber)(unrespondedRequests);
    unrespondedRequests.set(id, {timerId, timerType: "timeout"});
    scheduledTimeoutFunctions.set(timerId, id);
    worker3.postMessage({
      id,
      method: "clear",
      params: {timerId, timerType: "timeout"}
    });
  }, "clearTimeout");
  const setInterval3 = /* @__PURE__ */ __name((func, delay) => {
    const timerId = (0, import_fast_unique_numbers.generateUniqueNumber)(scheduledIntervalFunctions);
    scheduledIntervalFunctions.set(timerId, () => {
      func();
      if (typeof scheduledIntervalFunctions.get(timerId) === "function") {
        worker3.postMessage({
          id: null,
          method: "set",
          params: {
            delay,
            now: performance.now(),
            timerId,
            timerType: "interval"
          }
        });
      }
    });
    worker3.postMessage({
      id: null,
      method: "set",
      params: {
        delay,
        now: performance.now(),
        timerId,
        timerType: "interval"
      }
    });
    return timerId;
  }, "setInterval");
  const setTimeout3 = /* @__PURE__ */ __name((func, delay) => {
    const timerId = (0, import_fast_unique_numbers.generateUniqueNumber)(scheduledTimeoutFunctions);
    scheduledTimeoutFunctions.set(timerId, func);
    worker3.postMessage({
      id: null,
      method: "set",
      params: {
        delay,
        now: performance.now(),
        timerId,
        timerType: "timeout"
      }
    });
    return timerId;
  }, "setTimeout");
  return {
    clearInterval: clearInterval3,
    clearTimeout: clearTimeout3,
    setInterval: setInterval3,
    setTimeout: setTimeout3
  };
}, "load");

// node_modules/worker-timers/build/es2019/factories/load-worker-timers.js
var workerTimers = null;
var createLoadWorkerTimers = /* @__PURE__ */ __name((load2, worker3) => {
  return () => {
    if (workerTimers !== null) {
      return workerTimers;
    }
    const blob = new Blob([worker3], {type: "application/javascript; charset=utf-8"});
    const url = URL.createObjectURL(blob);
    workerTimers = load2(url);
    workerTimers.setTimeout(() => URL.revokeObjectURL(url), 0);
    return workerTimers;
  };
}, "createLoadWorkerTimers");

// node_modules/worker-timers/build/es2019/worker/worker.js
var worker = `(()=>{"use strict";const e=new Map,t=new Map,r=(e,t)=>{let r,o;const i=performance.now();r=i,o=e-Math.max(0,i-t);return{expected:r+o,remainingDelay:o}},o=(e,t,r,i)=>{const s=performance.now();s>r?postMessage({id:null,method:"call",params:{timerId:t,timerType:i}}):e.set(t,setTimeout(o,r-s,e,t,r,i))};addEventListener("message",(i=>{let{data:s}=i;try{if("clear"===s.method){const{id:r,params:{timerId:o,timerType:i}}=s;if("interval"===i)(t=>{const r=e.get(t);if(void 0===r)throw new Error('There is no interval scheduled with the given id "'.concat(t,'".'));clearTimeout(r),e.delete(t)})(o),postMessage({error:null,id:r});else{if("timeout"!==i)throw new Error('The given type "'.concat(i,'" is not supported'));(e=>{const r=t.get(e);if(void 0===r)throw new Error('There is no timeout scheduled with the given id "'.concat(e,'".'));clearTimeout(r),t.delete(e)})(o),postMessage({error:null,id:r})}}else{if("set"!==s.method)throw new Error('The given method "'.concat(s.method,'" is not supported'));{const{params:{delay:i,now:n,timerId:a,timerType:d}}=s;if("interval"===d)((t,i,s)=>{const{expected:n,remainingDelay:a}=r(t,s);e.set(i,setTimeout(o,a,e,i,n,"interval"))})(i,a,n);else{if("timeout"!==d)throw new Error('The given type "'.concat(d,'" is not supported'));((e,i,s)=>{const{expected:n,remainingDelay:a}=r(e,s);t.set(i,setTimeout(o,a,t,i,n,"timeout"))})(i,a,n)}}}}catch(e){postMessage({error:{message:e.message},id:s.id,result:null})}}))})();`;

// node_modules/worker-timers/build/es2019/module.js
var loadWorkerTimers = createLoadWorkerTimers(load, worker);
var clearInterval2 = /* @__PURE__ */ __name((timerId) => loadWorkerTimers().clearInterval(timerId), "clearInterval");
var clearTimeout2 = /* @__PURE__ */ __name((timerId) => loadWorkerTimers().clearTimeout(timerId), "clearTimeout");
var setInterval2 = /* @__PURE__ */ __name((func, delay) => loadWorkerTimers().setInterval(func, delay), "setInterval");
var setTimeout2 = /* @__PURE__ */ __name((func, delay) => loadWorkerTimers().setTimeout(func, delay), "setTimeout");

// src/utils/isBrowser.ts
var IS_BROWSER = (typeof window === "undefined" ? "undefined" : typeof window) === "object";

// src/utils/timers.ts
var timers = {
  setTimeout: IS_BROWSER ? setTimeout.bind(window) : setTimeout,
  clearTimeout: IS_BROWSER ? clearTimeout.bind(window) : clearTimeout,
  setInterval: IS_BROWSER ? setInterval.bind(window) : setInterval,
  clearInterval: IS_BROWSER ? clearInterval.bind(window) : clearInterval
};
var workerTimers2 = {
  setTimeout: setTimeout2,
  clearTimeout: clearTimeout2,
  setInterval: setInterval2,
  clearInterval: clearInterval2
};
function createMocks() {
  timers.setTimeout = setTimeout;
  timers.clearTimeout = clearTimeout;
  timers.setInterval = setInterval;
  timers.clearInterval = clearInterval;
  workerTimers2.setTimeout = setTimeout;
  workerTimers2.clearTimeout = clearTimeout;
  workerTimers2.setInterval = setInterval;
  workerTimers2.clearInterval = clearInterval;
}
__name(createMocks, "createMocks");
function setTimers(customTimers) {
  timers.setTimeout = customTimers.setTimeout;
  timers.clearTimeout = customTimers.clearTimeout;
  timers.setInterval = customTimers.setInterval;
  timers.clearInterval = customTimers.clearInterval;
}
__name(setTimers, "setTimers");

// src/TabManager/BroadcastChannel.ts
var channels = {};
var Polyfill = class {
  constructor(name) {
    this.closed = false;
    this.mc = new MessageChannel();
    this.name = name;
    channels[name] = channels[name] || [];
    channels[name].push(this);
    this.mc.port1.start();
    this.mc.port2.start();
    this.onStorage = this.onStorage.bind(this);
    window.addEventListener("storage", this.onStorage);
  }
  onStorage(event) {
    if (event.storageArea !== window.localStorage)
      return;
    if (event.key.substring(0, this.name.length) !== this.name)
      return;
    if (event.newValue === null)
      return;
    const data = JSON.parse(event.newValue);
    this.mc.port2.postMessage(data);
  }
  postMessage(message) {
    if (this.closed)
      throw new Error("InvalidStateError");
    const value = JSON.stringify(message);
    const key = `${this.name}:${String(Date.now())}${String(Math.random())}`;
    window.localStorage.setItem(key, value);
    timers.setTimeout(() => {
      window.localStorage.removeItem(key);
    }, 500);
    channels[this.name].forEach((bc) => {
      if (bc === this)
        return;
      bc.mc.port2.postMessage(JSON.parse(value));
    });
  }
  close() {
    if (this.closed)
      return;
    this.closed = true;
    this.mc.port1.close();
    this.mc.port2.close();
    window.removeEventListener("storage", this.onStorage);
    const index = channels[this.name].indexOf(this);
    channels[this.name].splice(index, 1);
  }
  get onmessage() {
    return this.mc.port1.onmessage;
  }
  set onmessage(value) {
    this.mc.port1.onmessage = value;
  }
  get onmessageerror() {
    return this.mc.port1.onmessageerror;
  }
  set onmessageerror(value) {
    this.mc.port1.onmessageerror = value;
  }
  addEventListener(event, listener) {
    return this.mc.port1.addEventListener(event, listener);
  }
  removeEventListener(event, listener) {
    return this.mc.port1.removeEventListener(event, listener);
  }
  dispatchEvent(event) {
    return this.mc.port1.dispatchEvent(event);
  }
};
__name(Polyfill, "Polyfill");
var BroadcastChannel = typeof window === "undefined" ? void 0 : typeof window.BroadcastChannel === "function" ? window.BroadcastChannel : Polyfill;

// src/utils/sleep.ts
function sleep(time = 0) {
  return new Promise((resolve) => timers.setTimeout(resolve, time));
}
__name(sleep, "sleep");

// src/utils/token.ts
function createToken() {
  return Math.random().toString(36).substring(2);
}
__name(createToken, "createToken");

// src/types/MessageActionType.ts
var MessageActionType;
(function(MessageActionType2) {
  MessageActionType2[MessageActionType2["APPLY"] = 0] = "APPLY";
  MessageActionType2[MessageActionType2["TELL"] = 1] = "TELL";
  MessageActionType2[MessageActionType2["CLOSE"] = 2] = "CLOSE";
  MessageActionType2[MessageActionType2["REGISTER"] = 3] = "REGISTER";
  MessageActionType2[MessageActionType2["DEREGISTER"] = 4] = "DEREGISTER";
  MessageActionType2[MessageActionType2["IDLE"] = 5] = "IDLE";
  MessageActionType2[MessageActionType2["ACTIVE"] = 6] = "ACTIVE";
  MessageActionType2[MessageActionType2["PROMPT"] = 7] = "PROMPT";
  MessageActionType2[MessageActionType2["START"] = 8] = "START";
  MessageActionType2[MessageActionType2["RESET"] = 9] = "RESET";
  MessageActionType2[MessageActionType2["ACTIVATE"] = 10] = "ACTIVATE";
  MessageActionType2[MessageActionType2["PAUSE"] = 11] = "PAUSE";
  MessageActionType2[MessageActionType2["RESUME"] = 12] = "RESUME";
  MessageActionType2[MessageActionType2["MESSAGE"] = 13] = "MESSAGE";
})(MessageActionType || (MessageActionType = {}));

// src/TabManager/LeaderElector.ts
var LeaderElector = class {
  constructor(channel, options) {
    this.token = createToken();
    this.isLeader = false;
    this.isDead = false;
    this.isApplying = false;
    this.reApply = false;
    this.intervals = [];
    this.listeners = [];
    this.channel = channel;
    this.options = options;
    this.apply = this.apply.bind(this);
    this.awaitLeadership = this.awaitLeadership.bind(this);
    this.sendAction = this.sendAction.bind(this);
  }
  async apply() {
    if (this.isLeader)
      return false;
    if (this.isDead)
      return false;
    if (this.isApplying) {
      this.reApply = true;
      return false;
    }
    this.isApplying = true;
    let abort = false;
    const handleMessage = /* @__PURE__ */ __name((message) => {
      const {token, action} = message.data;
      if (token !== this.token) {
        if (action === MessageActionType.APPLY) {
          if (token > this.token) {
            abort = true;
          }
        }
        if (action === MessageActionType.TELL) {
          abort = true;
        }
      }
    }, "handleMessage");
    this.channel.addEventListener("message", handleMessage);
    try {
      this.sendAction(MessageActionType.APPLY);
      await sleep(this.options.responseTime);
      this.channel.removeEventListener("message", handleMessage);
      this.isApplying = false;
      if (abort) {
        if (this.reApply)
          return this.apply();
        return false;
      } else {
        this.assumeLead();
      }
      return true;
    } catch {
      return false;
    }
  }
  awaitLeadership() {
    if (this.isLeader)
      return Promise.resolve();
    let resolved = false;
    let interval = null;
    return new Promise((resolve) => {
      const finish = /* @__PURE__ */ __name(() => {
        if (resolved)
          return;
        resolved = true;
        timers.clearInterval(interval);
        const index = this.intervals.indexOf(interval);
        this.intervals.splice(index, 1);
        this.channel.removeEventListener("message", onClose);
        resolve();
      }, "finish");
      interval = timers.setInterval(() => {
        this.apply().then(() => {
          if (this.isLeader)
            finish();
        });
      }, this.options.fallbackInterval);
      this.intervals.push(interval);
      const onClose = /* @__PURE__ */ __name((message) => {
        const {action} = message.data;
        if (action === MessageActionType.CLOSE) {
          this.apply().then(() => {
            if (this.isLeader)
              finish();
          });
        }
      }, "onClose");
      this.channel.addEventListener("message", onClose);
    });
  }
  sendAction(action) {
    this.channel.postMessage({
      action,
      token: this.token
    });
  }
  assumeLead() {
    this.isLeader = true;
    const isLeaderListener = /* @__PURE__ */ __name((message) => {
      const {action} = message.data;
      if (action === MessageActionType.APPLY) {
        this.sendAction(MessageActionType.TELL);
      }
    }, "isLeaderListener");
    this.channel.addEventListener("message", isLeaderListener);
    this.listeners.push(isLeaderListener);
    return this.sendAction(MessageActionType.TELL);
  }
  waitForLeadership() {
    if (this.deferred)
      return this.deferred;
    this.deferred = this.awaitLeadership();
    return this.deferred;
  }
  close() {
    if (this.isDead)
      return;
    this.isDead = true;
    this.isLeader = false;
    this.sendAction(MessageActionType.CLOSE);
    this.listeners.forEach((listener) => this.channel.removeEventListener("message", listener));
    this.intervals.forEach((interval) => timers.clearInterval(interval));
  }
};
__name(LeaderElector, "LeaderElector");

// src/TabManager/index.ts
var RegistryState;
(function(RegistryState2) {
  RegistryState2[RegistryState2["PROMPTED"] = 0] = "PROMPTED";
  RegistryState2[RegistryState2["ACTIVE"] = 1] = "ACTIVE";
  RegistryState2[RegistryState2["IDLE"] = 2] = "IDLE";
})(RegistryState || (RegistryState = {}));
var TabManager = class {
  constructor(options) {
    this.token = createToken();
    this.registry = new Map();
    this.allIdle = false;
    this.isLastActive = false;
    const {channelName} = options;
    this.options = options;
    this.channel = new BroadcastChannel(channelName);
    this.registry.set(this.token, 1);
    if (options.leaderElection) {
      const electorOptions = {
        fallbackInterval: 2e3,
        responseTime: 100
      };
      this.elector = new LeaderElector(this.channel, electorOptions);
      this.elector.waitForLeadership();
    }
    this.channel.addEventListener("message", (message) => {
      const {action, token, data} = message.data;
      switch (action) {
        case MessageActionType.REGISTER:
          this.registry.set(token, 2);
          break;
        case MessageActionType.DEREGISTER:
          this.registry.delete(token);
          break;
        case MessageActionType.IDLE:
          this.idle(token);
          break;
        case MessageActionType.ACTIVE:
          this.active(token);
          break;
        case MessageActionType.PROMPT:
          this.prompt(token);
          break;
        case MessageActionType.START:
          this.start(token);
          break;
        case MessageActionType.RESET:
          this.reset(token);
          break;
        case MessageActionType.ACTIVATE:
          this.activate(token);
          break;
        case MessageActionType.PAUSE:
          this.pause(token);
          break;
        case MessageActionType.RESUME:
          this.resume(token);
          break;
        case MessageActionType.MESSAGE:
          this.options.onMessage(data);
          break;
      }
    });
    this.send(MessageActionType.REGISTER);
  }
  get isLeader() {
    if (!this.elector)
      throw new Error('\u274C Leader election is not enabled. To Enable it set the "leaderElection" property to true.');
    return this.elector.isLeader;
  }
  prompt(token = this.token) {
    this.registry.set(token, 0);
    const isPrompted = [...this.registry.values()].every((v) => v === 0);
    if (token === this.token) {
      this.send(MessageActionType.PROMPT);
    }
    if (isPrompted) {
      this.options.onPrompt();
    }
  }
  idle(token = this.token) {
    this.registry.set(token, 2);
    const isIdle = [...this.registry.values()].every((v) => v === 2);
    if (token === this.token) {
      this.send(MessageActionType.IDLE);
    }
    if (!this.allIdle && isIdle) {
      this.allIdle = true;
      this.options.onIdle();
    }
  }
  active(token = this.token) {
    this.allIdle = false;
    this.registry.set(token, 1);
    const isActive = [...this.registry.values()].some((v) => v === 1);
    if (token === this.token) {
      this.send(MessageActionType.ACTIVE);
    }
    if (isActive) {
      this.options.onActive();
    }
    this.isLastActive = token === this.token;
  }
  start(token = this.token) {
    this.allIdle = false;
    this.registry.set(token, 1);
    if (token === this.token) {
      this.send(MessageActionType.START);
    } else {
      this.options.start(true);
    }
    this.isLastActive = token === this.token;
  }
  reset(token = this.token) {
    this.allIdle = false;
    this.registry.set(token, 1);
    if (token === this.token) {
      this.send(MessageActionType.RESET);
    } else {
      this.options.reset(true);
    }
    this.isLastActive = token === this.token;
  }
  activate(token = this.token) {
    this.allIdle = false;
    this.registry.set(token, 1);
    if (token === this.token) {
      this.send(MessageActionType.ACTIVATE);
    } else {
      this.options.activate(true);
    }
    this.isLastActive = token === this.token;
  }
  pause(token = this.token) {
    if (token === this.token) {
      this.send(MessageActionType.PAUSE);
    } else {
      this.options.pause(true);
    }
  }
  resume(token = this.token) {
    if (token === this.token) {
      this.send(MessageActionType.RESUME);
    } else {
      this.options.resume(true);
    }
  }
  message(data) {
    try {
      this.channel.postMessage({
        action: MessageActionType.MESSAGE,
        token: this.token,
        data
      });
    } catch {
    }
  }
  send(action) {
    try {
      this.channel.postMessage({action, token: this.token});
    } catch {
    }
  }
  close() {
    if (this.options.leaderElection) {
      this.elector.close();
    }
    this.send(MessageActionType.DEREGISTER);
    this.channel.close();
  }
};
__name(TabManager, "TabManager");

// src/utils/defaults.ts
var DEFAULT_ELEMENT = IS_BROWSER ? document : null;
var DEFAULT_EVENTS = [
  "mousemove",
  "keydown",
  "wheel",
  "DOMMouseScroll",
  "mousewheel",
  "mousedown",
  "touchstart",
  "touchmove",
  "MSPointerDown",
  "MSPointerMove",
  "visibilitychange",
  "focus"
];

// src/utils/debounce.ts
function debounceFn(fn, delay) {
  let timerId;
  function result(...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn(...args);
      timerId = null;
    }, delay);
  }
  __name(result, "result");
  result.cancel = function() {
    clearTimeout(timerId);
  };
  return result;
}
__name(debounceFn, "debounceFn");

// src/utils/throttle.ts
function throttleFn(fn, delay) {
  let lastCall = 0;
  return function(...args) {
    const now2 = new Date().getTime();
    if (now2 - lastCall < delay) {
      return;
    }
    lastCall = now2;
    return fn(...args);
  };
}
__name(throttleFn, "throttleFn");

// src/utils/now.ts
var now = /* @__PURE__ */ __name(() => Date.now(), "now");

// src/useIdleTimer.tsx
var MAX_TIMEOUT = 2147483647;
function useIdleTimer({
  timeout = 1e3 * 60 * 20,
  promptTimeout = 0,
  promptBeforeIdle = 0,
  element = DEFAULT_ELEMENT,
  events = DEFAULT_EVENTS,
  timers: timers2 = void 0,
  immediateEvents = [],
  onPresenceChange = /* @__PURE__ */ __name(() => {
  }, "onPresenceChange"),
  onPrompt = /* @__PURE__ */ __name(() => {
  }, "onPrompt"),
  onIdle = /* @__PURE__ */ __name(() => {
  }, "onIdle"),
  onActive = /* @__PURE__ */ __name(() => {
  }, "onActive"),
  onAction = /* @__PURE__ */ __name(() => {
  }, "onAction"),
  onMessage = /* @__PURE__ */ __name(() => {
  }, "onMessage"),
  debounce = 0,
  throttle = 0,
  eventsThrottle = 200,
  startOnMount = true,
  startManually = false,
  stopOnIdle = false,
  crossTab = false,
  name = "idle-timer",
  syncTimers = 0,
  leaderElection = false
} = {}) {
  const startTime = (0, import_react2.useRef)(now());
  const lastReset = (0, import_react2.useRef)(now());
  const lastIdle = (0, import_react2.useRef)(null);
  const lastActive = (0, import_react2.useRef)(null);
  const idleTime = (0, import_react2.useRef)(0);
  const totalIdleTime = (0, import_react2.useRef)(0);
  const promptTime = (0, import_react2.useRef)(0);
  const remaining = (0, import_react2.useRef)(0);
  const idle = (0, import_react2.useRef)(false);
  const prompted = (0, import_react2.useRef)(false);
  const paused = (0, import_react2.useRef)(false);
  const firstLoad = (0, import_react2.useRef)(true);
  const eventsBound = (0, import_react2.useRef)(false);
  const tId = (0, import_react2.useRef)(null);
  const manager = (0, import_react2.useRef)(null);
  const timeoutRef = (0, import_react2.useRef)(timeout);
  const promptTimeoutRef = (0, import_react2.useRef)(0);
  (0, import_react2.useEffect)(() => {
    if (promptTimeout) {
      console.warn("\u26A0\uFE0F IdleTimer -- The `promptTimeout` property has been deprecated in favor of `promptBeforeIdle`. It will be removed in the next major release.");
    }
    if (promptBeforeIdle && promptTimeout) {
      throw new Error("\u274C Both promptTimeout and promptBeforeIdle can not be set. The promptTimeout property will be deprecated in a future version.");
    }
    if (timeout >= MAX_TIMEOUT) {
      throw new Error(`\u274C The value for the timeout property must fit in a 32 bit signed integer, ${MAX_TIMEOUT}.`);
    }
    if (promptTimeout >= MAX_TIMEOUT) {
      throw new Error(`\u274C The value for the promptTimeout property must fit in a 32 bit signed integer, ${MAX_TIMEOUT}.`);
    }
    if (promptBeforeIdle >= MAX_TIMEOUT) {
      throw new Error(`\u274C The value for the promptBeforeIdle property must fit in a 32 bit signed integer, ${MAX_TIMEOUT}.`);
    }
    if (promptBeforeIdle) {
      timeoutRef.current = timeout - promptBeforeIdle;
      promptTimeoutRef.current = promptBeforeIdle;
    } else {
      timeoutRef.current = timeout;
      promptTimeoutRef.current = promptTimeout;
    }
    if (!firstLoad.current) {
      if (startManually)
        return;
      if (idle.current) {
        emitOnActive.current();
        if (manager.current) {
          manager.current.active();
        }
      }
      start();
    }
  }, [timeout, promptTimeout, promptBeforeIdle, startManually]);
  const stopOnIdleRef = (0, import_react2.useRef)(stopOnIdle);
  (0, import_react2.useEffect)(() => {
    stopOnIdleRef.current = stopOnIdle;
  }, [stopOnIdle]);
  const immediateEventsRef = (0, import_react2.useRef)(immediateEvents);
  const elementRef = (0, import_react2.useRef)(element);
  const eventsRef = (0, import_react2.useRef)([...new Set([...events, ...immediateEvents]).values()]);
  const emitOnPresenceChange = (0, import_react2.useRef)(onPresenceChange);
  (0, import_react2.useEffect)(() => {
    emitOnPresenceChange.current = onPresenceChange;
  }, [onPresenceChange]);
  const emitOnPrompt = (0, import_react2.useRef)(onPrompt);
  (0, import_react2.useEffect)(() => {
    emitOnPrompt.current = onPrompt;
  }, [onPrompt]);
  const emitOnIdle = (0, import_react2.useRef)(onIdle);
  (0, import_react2.useEffect)(() => {
    emitOnIdle.current = onIdle;
  }, [onIdle]);
  const emitOnActive = (0, import_react2.useRef)(onActive);
  (0, import_react2.useEffect)(() => {
    emitOnActive.current = onActive;
  }, [onActive]);
  const emitOnAction = (0, import_react2.useRef)(onAction);
  (0, import_react2.useEffect)(() => {
    emitOnAction.current = onAction;
  }, [onAction]);
  const emitOnMessage = (0, import_react2.useRef)(onMessage);
  (0, import_react2.useEffect)(() => {
    emitOnMessage.current = onMessage;
  }, [onMessage]);
  const callOnAction = (0, import_react2.useMemo)(() => {
    const call = /* @__PURE__ */ __name((event) => emitOnAction.current(event), "call");
    if (debounce > 0) {
      return debounceFn(call, debounce);
    } else if (throttle > 0) {
      return throttleFn(call, throttle);
    } else {
      return call;
    }
  }, [throttle, debounce]);
  const sendSyncEvent = (0, import_react2.useRef)();
  (0, import_react2.useEffect)(() => {
    if (crossTab && syncTimers) {
      sendSyncEvent.current = throttleFn(() => {
        manager.current.active();
      }, syncTimers);
    }
  }, [crossTab, syncTimers]);
  const destroyTimeout = /* @__PURE__ */ __name(() => {
    if (tId.current !== null) {
      timers.clearTimeout(tId.current);
      tId.current = null;
    }
  }, "destroyTimeout");
  const createTimeout = /* @__PURE__ */ __name((time, setLastActive = true) => {
    destroyTimeout();
    tId.current = timers.setTimeout(toggleIdleState, time || timeoutRef.current);
    if (setLastActive)
      lastActive.current = now();
  }, "createTimeout");
  const togglePrompted = /* @__PURE__ */ __name((event) => {
    if (!prompted.current && !idle.current) {
      emitOnPrompt.current(event);
      emitOnPresenceChange.current({type: "active", prompted: true});
    }
    remaining.current = 0;
    promptTime.current = now();
    prompted.current = true;
    createTimeout(promptTimeoutRef.current, false);
  }, "togglePrompted");
  const toggleIdle = /* @__PURE__ */ __name(() => {
    destroyTimeout();
    if (!idle.current) {
      emitOnIdle.current();
      emitOnPresenceChange.current({type: "idle"});
    }
    idle.current = true;
    lastIdle.current = now();
    if (stopOnIdleRef.current) {
      unbindEvents();
    } else if (prompted.current) {
      promptTime.current = 0;
      prompted.current = false;
    }
  }, "toggleIdle");
  const toggleActive = /* @__PURE__ */ __name((event) => {
    destroyTimeout();
    if (idle.current || prompted.current) {
      emitOnActive.current(event);
      emitOnPresenceChange.current({type: "active", prompted: false});
    }
    prompted.current = false;
    promptTime.current = 0;
    idle.current = false;
    idleTime.current += now() - lastIdle.current;
    totalIdleTime.current += now() - lastIdle.current;
    bindEvents();
    createTimeout();
  }, "toggleActive");
  const toggleIdleState = /* @__PURE__ */ __name((event) => {
    const nextIdle = !idle.current;
    if (nextIdle) {
      if (callOnAction.cancel)
        callOnAction.cancel();
      const elapsed = now() - lastActive.current;
      const skipPrompt = timeoutRef.current + promptTimeoutRef.current < elapsed;
      if (!skipPrompt && promptTimeoutRef.current > 0 && !prompted.current) {
        if (manager.current) {
          manager.current.prompt();
        } else {
          togglePrompted(event);
        }
        return;
      }
      if (manager.current) {
        manager.current.idle();
      } else {
        toggleIdle();
      }
      return;
    }
    if (manager.current) {
      manager.current.active();
    } else {
      toggleActive(event);
    }
  }, "toggleIdleState");
  const eventHandler = /* @__PURE__ */ __name((event) => {
    if (!startOnMount && !lastActive.current) {
      lastActive.current = now();
      emitOnActive.current();
    }
    callOnAction(event);
    if (prompted.current)
      return;
    destroyTimeout();
    if (!idle.current && immediateEventsRef.current.includes(event.type)) {
      toggleIdleState(event);
      return;
    }
    const elapsedTimeSinceLastActive = now() - lastActive.current;
    if (idle.current && !stopOnIdle || !idle.current && elapsedTimeSinceLastActive >= timeoutRef.current) {
      toggleIdleState(event);
      return;
    }
    paused.current = false;
    remaining.current = 0;
    promptTime.current = 0;
    createTimeout();
    if (crossTab && syncTimers)
      sendSyncEvent.current();
  }, "eventHandler");
  const handleEvent = (0, import_react2.useRef)(eventHandler);
  (0, import_react2.useEffect)(() => {
    const eventsWereBound = eventsBound.current;
    if (eventsWereBound)
      unbindEvents();
    if (eventsThrottle > 0) {
      handleEvent.current = throttleFn(eventHandler, eventsThrottle);
    } else {
      handleEvent.current = eventHandler;
    }
    if (eventsWereBound)
      bindEvents();
  }, [eventsThrottle, throttle, debounce, emitOnAction, crossTab, syncTimers]);
  const bindEvents = /* @__PURE__ */ __name(() => {
    if (!IS_BROWSER)
      return;
    if (!eventsBound.current) {
      eventsRef.current.forEach((e) => {
        elementRef.current.addEventListener(e, handleEvent.current, {
          capture: true,
          passive: true
        });
      });
      eventsBound.current = true;
    }
  }, "bindEvents");
  const unbindEvents = /* @__PURE__ */ __name((force = false) => {
    if (!IS_BROWSER)
      return;
    if (eventsBound.current || force) {
      eventsRef.current.forEach((e) => {
        elementRef.current.removeEventListener(e, handleEvent.current, {
          capture: true
        });
      });
      eventsBound.current = false;
    }
  }, "unbindEvents");
  const start = (0, import_react2.useCallback)((remote) => {
    destroyTimeout();
    bindEvents();
    idle.current = false;
    prompted.current = false;
    paused.current = false;
    remaining.current = 0;
    promptTime.current = 0;
    if (manager.current && !remote) {
      manager.current.start();
    }
    createTimeout();
  }, [tId, idle, timeoutRef, manager]);
  const reset = (0, import_react2.useCallback)((remote) => {
    destroyTimeout();
    bindEvents();
    lastReset.current = now();
    idleTime.current += now() - lastIdle.current;
    totalIdleTime.current += now() - lastIdle.current;
    idleTime.current = 0;
    idle.current = false;
    prompted.current = false;
    paused.current = false;
    remaining.current = 0;
    promptTime.current = 0;
    if (manager.current && !remote) {
      manager.current.reset();
    }
    if (!startManually) {
      createTimeout();
    }
  }, [tId, idle, timeoutRef, startManually, manager]);
  const activate = (0, import_react2.useCallback)((remote) => {
    destroyTimeout();
    bindEvents();
    if (idle.current || prompted.current) {
      toggleActive();
    }
    idle.current = false;
    prompted.current = false;
    paused.current = false;
    remaining.current = 0;
    promptTime.current = 0;
    lastReset.current = now();
    if (manager.current && !remote) {
      manager.current.activate();
    }
    createTimeout();
  }, [tId, idle, prompted, timeoutRef, manager]);
  const pause = (0, import_react2.useCallback)((remote = false) => {
    if (paused.current)
      return false;
    remaining.current = getRemainingTime();
    paused.current = true;
    unbindEvents();
    destroyTimeout();
    if (manager.current && !remote) {
      manager.current.pause();
    }
    return true;
  }, [tId, manager]);
  const resume = (0, import_react2.useCallback)((remote = false) => {
    if (!paused.current)
      return false;
    paused.current = false;
    if (!prompted.current) {
      bindEvents();
    }
    if (!idle.current) {
      createTimeout(remaining.current);
    }
    if (promptTime.current) {
      promptTime.current = now();
    }
    if (manager.current && !remote) {
      manager.current.resume();
    }
    return true;
  }, [tId, timeoutRef, remaining, manager]);
  const message = (0, import_react2.useCallback)((data, emitOnSelf) => {
    if (manager.current) {
      if (emitOnSelf)
        emitOnMessage.current(data);
      manager.current.message(data);
    } else if (emitOnSelf) {
      emitOnMessage.current(data);
    }
  }, [onMessage]);
  const isIdle = (0, import_react2.useCallback)(() => {
    return idle.current;
  }, [idle]);
  const isPrompted = (0, import_react2.useCallback)(() => {
    return prompted.current;
  }, [prompted]);
  const isLeader = (0, import_react2.useCallback)(() => {
    if (!manager.current)
      return null;
    return manager.current.isLeader;
  }, [manager]);
  const isLastActiveTab = (0, import_react2.useCallback)(() => {
    if (!manager.current)
      return null;
    return manager.current.isLastActive;
  }, [manager]);
  const getTabId = (0, import_react2.useCallback)(() => {
    if (!manager.current)
      return null;
    return manager.current.token;
  }, [manager]);
  const getRemainingTime = (0, import_react2.useCallback)(() => {
    if (paused.current)
      return remaining.current;
    const timeoutTotal = remaining.current ? remaining.current : promptTimeoutRef.current + timeoutRef.current;
    const timeSinceLastActive = lastActive.current ? now() - lastActive.current : 0;
    const timeLeft = Math.floor(timeoutTotal - timeSinceLastActive);
    return timeLeft < 0 ? 0 : Math.abs(timeLeft);
  }, [timeoutRef, promptTimeoutRef, prompted, remaining, lastActive]);
  const getElapsedTime = (0, import_react2.useCallback)(() => {
    return Math.round(now() - lastReset.current);
  }, [lastReset]);
  const getTotalElapsedTime = (0, import_react2.useCallback)(() => {
    return Math.round(now() - startTime.current);
  }, [startTime]);
  const getLastIdleTime = (0, import_react2.useCallback)(() => {
    if (!lastIdle.current)
      return null;
    return new Date(lastIdle.current);
  }, [lastIdle]);
  const getLastActiveTime = (0, import_react2.useCallback)(() => {
    if (!lastActive.current)
      return null;
    return new Date(lastActive.current);
  }, [lastActive]);
  const getIdleTime = (0, import_react2.useCallback)(() => {
    if (idle.current) {
      return Math.round(now() - lastIdle.current + idleTime.current);
    }
    return Math.round(idleTime.current);
  }, [lastIdle, idleTime]);
  const getTotalIdleTime = (0, import_react2.useCallback)(() => {
    if (idle.current) {
      return Math.round(now() - lastIdle.current + totalIdleTime.current);
    }
    return Math.round(totalIdleTime.current);
  }, [lastIdle, totalIdleTime]);
  const getActiveTime = (0, import_react2.useCallback)(() => {
    const total = Math.round(getElapsedTime() - getIdleTime());
    return total >= 0 ? total : 0;
  }, [lastIdle, idleTime]);
  const getTotalActiveTime = (0, import_react2.useCallback)(() => {
    const total = Math.round(getTotalElapsedTime() - getTotalIdleTime());
    return total >= 0 ? total : 0;
  }, [lastIdle, idleTime]);
  (0, import_react2.useEffect)(() => {
    if (debounce > 0 && throttle > 0) {
      throw new Error("\u274C onAction can either be throttled or debounced, not both.");
    }
    if (timers2)
      setTimers(timers2);
    const beforeunload = /* @__PURE__ */ __name(() => {
      if (manager.current)
        manager.current.close();
      if (callOnAction.cancel)
        callOnAction.cancel();
      destroyTimeout();
      unbindEvents(true);
    }, "beforeunload");
    if (IS_BROWSER) {
      window.addEventListener("beforeunload", beforeunload);
    }
    return () => {
      if (IS_BROWSER) {
        window.removeEventListener("beforeunload", beforeunload);
      }
      if (manager.current)
        manager.current.close();
      if (callOnAction.cancel)
        callOnAction.cancel();
      destroyTimeout();
      unbindEvents(true);
    };
  }, []);
  (0, import_react2.useEffect)(() => {
    if (manager.current) {
      manager.current.close();
    }
    if (crossTab) {
      manager.current = new TabManager({
        channelName: name,
        leaderElection,
        onPrompt: () => {
          togglePrompted();
        },
        onIdle: () => {
          toggleIdle();
        },
        onActive: () => {
          toggleActive();
        },
        onMessage: (...args) => {
          emitOnMessage.current(...args);
        },
        start,
        reset,
        activate,
        pause,
        resume
      });
    } else {
      manager.current = null;
    }
  }, [
    crossTab,
    name,
    leaderElection,
    emitOnPrompt,
    emitOnIdle,
    emitOnActive,
    emitOnMessage,
    start,
    reset,
    pause,
    resume
  ]);
  (0, import_react2.useEffect)(() => {
    if (!firstLoad.current) {
      destroyTimeout();
      unbindEvents(true);
    }
    if (startManually)
      return;
    if (startOnMount) {
      start();
    } else {
      bindEvents();
    }
  }, [startManually, startOnMount, firstLoad]);
  (0, import_react2.useEffect)(() => {
    if (!firstLoad.current) {
      const newEvents = [
        ...new Set([...events, ...immediateEvents]).values()
      ];
      unbindEvents();
      eventsRef.current = newEvents;
      elementRef.current = element;
      immediateEventsRef.current = immediateEvents;
      if (startManually)
        return;
      if (startOnMount) {
        start();
      } else {
        bindEvents();
      }
    }
  }, [
    element,
    JSON.stringify(events),
    JSON.stringify(immediateEvents),
    firstLoad,
    startManually,
    startOnMount
  ]);
  (0, import_react2.useEffect)(() => {
    if (firstLoad.current)
      firstLoad.current = false;
  }, [firstLoad]);
  return {
    message,
    start,
    reset,
    activate,
    pause,
    resume,
    isIdle,
    isPrompted,
    isLeader,
    isLastActiveTab,
    getTabId,
    getRemainingTime,
    getElapsedTime,
    getTotalElapsedTime,
    getLastIdleTime,
    getLastActiveTime,
    getIdleTime,
    getTotalIdleTime,
    getActiveTime,
    getTotalActiveTime,
    setOnPresenceChange: (fn) => {
      onPresenceChange = fn;
      emitOnPresenceChange.current = fn;
    },
    setOnPrompt: (fn) => {
      onPrompt = fn;
      emitOnPrompt.current = fn;
    },
    setOnIdle: (fn) => {
      onIdle = fn;
      emitOnIdle.current = fn;
    },
    setOnActive: (fn) => {
      onActive = fn;
      emitOnActive.current = fn;
    },
    setOnAction: (fn) => {
      onAction = fn;
      emitOnAction.current = fn;
    },
    setOnMessage: (fn) => {
      onMessage = fn;
      emitOnMessage.current = fn;
    }
  };
}
__name(useIdleTimer, "useIdleTimer");

// src/IdleTimerContext.tsx
var import_react3 = __toModule(require("react"));
var IdleTimerContext = (0, import_react3.createContext)(null);
function IdleTimerProvider(props) {
  const idleTimer = useIdleTimer(props);
  return /* @__PURE__ */ import_react3.default.createElement(IdleTimerContext.Provider, {
    value: idleTimer
  }, props.children);
}
__name(IdleTimerProvider, "IdleTimerProvider");
var IdleTimerConsumer = IdleTimerContext.Consumer;
function useIdleTimerContext() {
  return (0, import_react3.useContext)(IdleTimerContext);
}
__name(useIdleTimerContext, "useIdleTimerContext");
