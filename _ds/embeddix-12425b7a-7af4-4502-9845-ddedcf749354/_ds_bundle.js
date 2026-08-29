/* @ds-bundle: {"format":4,"namespace":"Embeddix_12425b","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"6a085d1fad98","components/core/Button.jsx":"fe756bfa0b6f","components/core/Card.jsx":"cc6c1a616f17","components/core/Icon.jsx":"448cff0f863c","components/core/IconButton.jsx":"ebef3f653599","components/core/Tag.jsx":"952baf73f0ae","components/feedback/Dialog.jsx":"656d99de07cc","components/feedback/Toast.jsx":"5c4dd5420d00","components/feedback/Tooltip.jsx":"4cb4c923fec5","components/forms/Checkbox.jsx":"840a858f74ba","components/forms/Input.jsx":"0a43d3cf16fb","components/forms/Radio.jsx":"33d7e2ff8582","components/forms/Select.jsx":"5cca0011adf2","components/forms/Switch.jsx":"6afe252c435f","components/navigation/Tabs.jsx":"27547c829b1d","ui_kits/console/ConsoleChrome.jsx":"59ed78977769","ui_kits/console/DeviceScreen.jsx":"a2364ea80959","ui_kits/console/FleetScreen.jsx":"3a1c1a74d048","ui_kits/console/LoginScreen.jsx":"09369074ebd1","ui_kits/website/CapabilitiesScreen.jsx":"fabb8cdf32fc","ui_kits/website/ContactScreen.jsx":"bafb4b203e19","ui_kits/website/HomeScreen.jsx":"dd30de93f457","ui_kits/website/SiteChrome.jsx":"c71be875ea06"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.Embeddix_12425b = window.Embeddix_12425b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  ok: ["var(--status-ok-bg)", "var(--status-ok-fg)"],
  warn: ["var(--status-warn-bg)", "var(--status-warn-fg)"],
  fault: ["var(--status-fault-bg)", "var(--status-fault-fg)"],
  info: ["var(--status-info-bg)", "var(--status-info-fg)"],
  idle: ["var(--status-idle-bg)", "var(--status-idle-fg)"]
};

/* Status readout. Mono, uppercase, optional signal dot. */
function Badge({
  children,
  tone = "idle",
  dot = false,
  style,
  ...rest
}) {
  const [bg, fg] = TONES[tone] || TONES.idle;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      padding: "3px var(--space-4)",
      background: bg,
      color: fg,
      borderRadius: "var(--radius-1)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono-sm)",
      fontWeight: "var(--fw-medium)",
      letterSpacing: ".06em",
      textTransform: "uppercase",
      lineHeight: 1.4,
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "var(--radius-pill)",
      background: fg
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PAD = {
  sm: "var(--control-px-sm)",
  md: "var(--control-px-md)",
  lg: "var(--control-px-lg)"
};
const H = {
  sm: "var(--control-h-sm)",
  md: "var(--control-h-md)",
  lg: "var(--control-h-lg)"
};
const FS = {
  sm: "var(--fs-body-sm)",
  md: "var(--fs-body)",
  lg: "var(--fs-body-lg)"
};
const VARIANTS = {
  primary: {
    bg: "var(--red-500)",
    fg: "#fff",
    bd: "var(--red-500)",
    bgHover: "var(--red-600)",
    bdHover: "var(--red-600)",
    bgActive: "var(--red-700)"
  },
  secondary: {
    bg: "transparent",
    fg: "var(--text-strong)",
    bd: "var(--border-strong)",
    bgHover: "var(--surface-inset)",
    bdHover: "var(--border-strong)",
    bgActive: "var(--paper-300)"
  },
  ghost: {
    bg: "transparent",
    fg: "var(--text-body)",
    bd: "transparent",
    bgHover: "var(--surface-sunken)",
    bdHover: "transparent",
    bgActive: "var(--surface-inset)"
  },
  danger: {
    bg: "var(--graphite-900)",
    fg: "#fff",
    bd: "var(--graphite-900)",
    bgHover: "var(--red-700)",
    bdHover: "var(--red-700)",
    bgActive: "var(--red-700)"
  },
  inverse: {
    bg: "#fff",
    fg: "var(--graphite-900)",
    bd: "#fff",
    bgHover: "var(--paper-100)",
    bdHover: "var(--paper-100)",
    bgActive: "var(--paper-200)"
  }
};
function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  disabled = false,
  block = false,
  type = "button",
  as = "button",
  href,
  style,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const Tag = as === "a" ? "a" : "button";
  const s = {
    display: block ? "flex" : "inline-flex",
    width: block ? "100%" : "auto",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-3)",
    height: H[size],
    padding: `0 ${PAD[size]}`,
    fontFamily: "var(--font-core)",
    fontSize: FS[size],
    fontWeight: "var(--fw-medium)",
    letterSpacing: "-.005em",
    lineHeight: 1,
    color: disabled ? "var(--text-faint)" : v.fg,
    background: disabled ? "var(--surface-inset)" : press ? v.bgActive : hover ? v.bgHover : v.bg,
    border: `var(--hairline) solid ${disabled ? "var(--border-hairline)" : press || hover ? v.bdHover : v.bd}`,
    borderRadius: "var(--radius-control)",
    cursor: disabled ? "not-allowed" : "pointer",
    textDecoration: "none",
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    transform: press && !disabled ? "scale(var(--press-scale))" : "none",
    transition: "var(--transition-control), transform var(--dur-1) var(--ease-standard)",
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    type: Tag === "button" ? type : undefined,
    href: Tag === "a" ? href : undefined,
    disabled: Tag === "button" ? disabled : undefined,
    style: s,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Square-shouldered panel. Border first, shadow only when lifted. */
function Card({
  children,
  title,
  eyebrow,
  meta,
  footer,
  padding = "var(--space-9)",
  elevated = false,
  accent = false,
  interactive = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const s = {
    background: "var(--surface-card)",
    border: `var(--hairline) solid ${hover && interactive ? "var(--border-strong)" : "var(--border-hairline)"}`,
    borderTop: accent ? "var(--rule-strong) solid var(--border-accent)" : undefined,
    borderRadius: "var(--radius-card)",
    boxShadow: elevated ? "var(--shadow-2)" : "var(--shadow-0)",
    padding,
    transition: "var(--transition-control)",
    cursor: interactive ? "pointer" : undefined,
    ...style
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: s,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "ea-label",
    style: {
      marginBottom: "var(--space-4)"
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--fs-h4)",
      lineHeight: "var(--lh-h4)",
      letterSpacing: "var(--ls-h4)",
      marginBottom: "var(--space-4)"
    }
  }, title), children, meta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono-sm)",
      color: "var(--text-muted)",
      letterSpacing: "var(--ls-mono)"
    }
  }, meta), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-7)",
      paddingTop: "var(--space-6)",
      borderTop: "var(--hairline) solid var(--border-hairline)"
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide is loaded from CDN (window.lucide.icons). Icon is a thin wrapper so
   every glyph in the system comes from one set at one stroke weight. */
function Icon({
  name,
  size = 16,
  strokeWidth = 1.75,
  color = "currentColor",
  style,
  ...rest
}) {
  const set = typeof window !== "undefined" && window.lucide && window.lucide.icons;
  const key = name && name.replace(/(^|-)([a-z])/g, (_, __, c) => c.toUpperCase());
  const node = set && (set[key] || set[name]);
  const children = node ? Array.isArray(node) ? node[2] : node.children || [] : null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    focusable: "false",
    style: {
      display: "block",
      flex: "0 0 auto",
      ...style
    }
  }, rest), children && children.map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const H = {
  sm: 30,
  md: 38,
  lg: 46
};
function IconButton({
  children,
  label,
  variant = "ghost",
  size = "md",
  disabled = false,
  active = false,
  style,
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const solid = variant === "primary";
  const outline = variant === "secondary";
  const s = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: H[size],
    height: H[size],
    padding: 0,
    color: disabled ? "var(--text-faint)" : solid ? "#fff" : active ? "var(--text-strong)" : "var(--text-muted)",
    background: disabled ? "var(--surface-inset)" : solid ? press ? "var(--red-700)" : hover ? "var(--red-600)" : "var(--red-500)" : active || press ? "var(--surface-inset)" : hover ? "var(--surface-sunken)" : "transparent",
    border: `var(--hairline) solid ${solid ? "var(--red-500)" : outline ? "var(--border-hairline)" : "transparent"}`,
    borderRadius: "var(--radius-control)",
    cursor: disabled ? "not-allowed" : "pointer",
    transform: press && !disabled ? "scale(var(--press-scale))" : "none",
    transition: "var(--transition-control), transform var(--dur-1) var(--ease-standard)",
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    style: s,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Descriptive label — capability areas, protocols, filters. Removable when onRemove is passed. */
function Tag({
  children,
  onRemove,
  selected = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const clickable = !!onClick;
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-4)",
      height: 26,
      padding: "0 var(--space-5)",
      background: selected ? "var(--graphite-900)" : hover && clickable ? "var(--surface-inset)" : "var(--surface-sunken)",
      color: selected ? "var(--text-inverse)" : "var(--text-body)",
      border: `var(--hairline) solid ${selected ? "var(--graphite-900)" : "var(--border-hairline)"}`,
      borderRadius: "var(--radius-pill)",
      fontSize: "var(--fs-caption)",
      fontWeight: "var(--fw-medium)",
      letterSpacing: "-.005em",
      cursor: clickable ? "pointer" : "default",
      transition: "var(--transition-control)",
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      all: "unset",
      cursor: "pointer",
      lineHeight: 0,
      color: "var(--text-muted)",
      fontFamily: "var(--font-mono)",
      fontSize: 12
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = true,
  title,
  eyebrow,
  children,
  footer,
  onClose,
  width = 480,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(18,20,23,.55)",
      backdropFilter: "blur(2px)",
      padding: "var(--space-9)",
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: "100%",
      background: "var(--surface-card)",
      border: "var(--hairline) solid var(--border-hairline)",
      borderTop: "var(--rule-strong) solid var(--border-accent)",
      borderRadius: "var(--radius-panel)",
      boxShadow: "var(--shadow-4)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-9) var(--space-9) var(--space-7)"
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "ea-label",
    style: {
      marginBottom: "var(--space-4)"
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--fs-h3)",
      lineHeight: "var(--lh-h3)",
      letterSpacing: "var(--ls-h3)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)",
      fontSize: "var(--fs-body-sm)",
      lineHeight: 1.6,
      color: "var(--text-body)"
    }
  }, children)), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "var(--space-5)",
      padding: "var(--space-7) var(--space-9)",
      background: "var(--surface-sunken)",
      borderTop: "var(--hairline) solid var(--border-hairline)",
      borderRadius: "0 0 var(--radius-panel) var(--radius-panel)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BAR = {
  ok: "var(--green-500)",
  warn: "var(--amber-500)",
  fault: "var(--red-500)",
  info: "var(--blue-500)"
};

/* Graphite slab with a 3px status edge. Bottom-right, one at a time. */
function Toast({
  title,
  children,
  tone = "info",
  onClose,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-6)",
      minWidth: 280,
      maxWidth: 380,
      padding: "var(--space-6) var(--space-7)",
      background: "var(--graphite-900)",
      color: "#fff",
      borderRadius: "var(--radius-3)",
      boxShadow: "var(--shadow-3)",
      borderLeft: `3px solid ${BAR[tone] || BAR.info}`,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "-.005em"
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      fontSize: "var(--fs-caption)",
      lineHeight: 1.5,
      color: "var(--graphite-300)"
    }
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      all: "unset",
      cursor: "pointer",
      color: "var(--graphite-400)",
      fontFamily: "var(--font-mono)",
      fontSize: 13,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Hover/focus label. Graphite slab, mono, no arrow. */
function Tooltip({
  children,
  content,
  side = "top",
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 6px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 6px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 6px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 6px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[side];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    },
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, rest), children, open && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      ...pos,
      zIndex: 40,
      padding: "4px var(--space-5)",
      background: "var(--graphite-900)",
      color: "#fff",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono-sm)",
      letterSpacing: "var(--ls-mono)",
      whiteSpace: "nowrap",
      borderRadius: "var(--radius-1)",
      boxShadow: "var(--shadow-2)"
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  hint,
  checked = false,
  onChange,
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: "var(--space-5)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked, e),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      marginTop: 2,
      flex: "0 0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: checked ? "var(--red-500)" : "var(--surface-card)",
      border: `var(--hairline) solid ${checked ? "var(--red-500)" : hover ? "var(--graphite-500)" : "var(--border-hairline)"}`,
      borderRadius: "var(--radius-1)",
      transition: "var(--transition-control)"
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-strong)",
      lineHeight: 1.4
    }
  }, label), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)"
    }
  }, hint)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  prefix,
  suffix,
  size = "md",
  mono = false,
  id,
  style,
  wrapperStyle,
  disabled,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = React.useMemo(() => id || "in-" + Math.random().toString(36).slice(2, 7), [id]);
  const H = {
    sm: "var(--control-h-sm)",
    md: "var(--control-h-md)",
    lg: "var(--control-h-lg)"
  }[size];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      ...wrapperStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      fontWeight: "var(--fw-medium)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      height: H,
      padding: "0 var(--control-px-md)",
      background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
      border: `var(--hairline) solid ${error ? "var(--red-500)" : focus ? "var(--graphite-700)" : "var(--border-hairline)"}`,
      borderRadius: "var(--radius-control)",
      boxShadow: focus ? "var(--ring-focus)" : "var(--shadow-inset-field)",
      transition: "var(--transition-control)"
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)",
      display: "flex"
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: uid,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      all: "unset",
      flex: 1,
      minWidth: 0,
      fontFamily: mono ? "var(--font-mono)" : "var(--font-core)",
      fontSize: mono ? "var(--fs-mono)" : "var(--fs-body)",
      color: "var(--text-strong)",
      cursor: disabled ? "not-allowed" : "text",
      ...style
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono-sm)",
      display: "flex"
    }
  }, suffix)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      lineHeight: "var(--lh-caption)",
      color: error ? "var(--red-600)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  hint,
  checked = false,
  onChange,
  name,
  value,
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: "var(--space-5)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(value, e),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      marginTop: 2,
      flex: "0 0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--surface-card)",
      border: `var(--hairline) solid ${checked ? "var(--red-500)" : hover ? "var(--graphite-500)" : "var(--border-hairline)"}`,
      borderRadius: "var(--radius-pill)",
      transition: "var(--transition-control)"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "var(--radius-pill)",
      background: "var(--red-500)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-strong)",
      lineHeight: 1.4
    }
  }, label), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)"
    }
  }, hint)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  options = [],
  size = "md",
  id,
  style,
  wrapperStyle,
  disabled,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const uid = React.useMemo(() => id || "sel-" + Math.random().toString(36).slice(2, 7), [id]);
  const H = {
    sm: "var(--control-h-sm)",
    md: "var(--control-h-md)",
    lg: "var(--control-h-lg)"
  }[size];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      ...wrapperStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: uid,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      fontWeight: "var(--fw-medium)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: uid,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      width: "100%",
      height: H,
      padding: "0 var(--space-10) 0 var(--control-px-md)",
      fontFamily: "var(--font-core)",
      fontSize: "var(--fs-body)",
      color: "var(--text-strong)",
      background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
      border: `var(--hairline) solid ${focus ? "var(--graphite-700)" : "var(--border-hairline)"}`,
      borderRadius: "var(--radius-control)",
      boxShadow: focus ? "var(--ring-focus)" : "var(--shadow-inset-field)",
      cursor: disabled ? "not-allowed" : "pointer",
      outline: "none",
      transition: "var(--transition-control)",
      ...style
    }
  }, rest), options.map(o => {
    const v = typeof o === "string" ? o : o.value;
    const l = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: "var(--space-6)",
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--text-muted)",
      fontFamily: "var(--font-mono)",
      fontSize: 10
    }
  }, "\u25BE")), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Hard-edged toggle — a machine switch, not a soft iOS pill. */
function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
  size = "md",
  style,
  ...rest
}) {
  const W = size === "sm" ? 32 : 40,
    H = size === "sm" ? 18 : 22,
    K = H - 6;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-6)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked, e),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: W,
      height: H,
      flex: "0 0 auto",
      background: checked ? "var(--red-500)" : "var(--graphite-300)",
      border: `var(--hairline) solid ${checked ? "var(--red-500)" : "var(--graphite-300)"}`,
      borderRadius: "var(--radius-2)",
      transition: "background-color var(--dur-2) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      left: checked ? W - K - 4 : 2,
      width: K,
      height: K,
      background: "#fff",
      borderRadius: "var(--radius-1)",
      boxShadow: "var(--shadow-1)",
      transition: "left var(--dur-2) var(--ease-standard)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-strong)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Underline tabs — 2px signal-red indicator on the active item. */
function Tabs({
  items = [],
  value,
  onChange,
  size = "md",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(null);
  const fs = size === "sm" ? "var(--fs-body-sm)" : "var(--fs-body)";
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      gap: "var(--space-8)",
      borderBottom: "var(--hairline) solid var(--border-hairline)",
      ...style
    }
  }, rest), items.map(it => {
    const v = typeof it === "string" ? it : it.value;
    const l = typeof it === "string" ? it : it.label;
    const count = typeof it === "object" ? it.count : undefined;
    const active = v === value;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": active,
      type: "button",
      onClick: () => onChange && onChange(v),
      onMouseEnter: () => setHover(v),
      onMouseLeave: () => setHover(null),
      style: {
        all: "unset",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-4)",
        padding: "0 0 var(--space-5)",
        marginBottom: -1,
        fontFamily: "var(--font-core)",
        fontSize: fs,
        fontWeight: active ? "var(--fw-semibold)" : "var(--fw-regular)",
        color: active ? "var(--text-strong)" : hover === v ? "var(--text-body)" : "var(--text-muted)",
        borderBottom: `var(--rule-strong) solid ${active ? "var(--red-500)" : "transparent"}`,
        transition: "var(--transition-control)"
      }
    }, l, count !== undefined && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--fs-mono-sm)",
        color: "var(--text-faint)"
      }
    }, count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/ConsoleChrome.jsx
try { (() => {
const {
  Icon,
  IconButton,
  Tooltip,
  Badge,
  Input,
  Button,
  Switch
} = window.Embeddix_12425b;
function Sidebar({
  view,
  go
}) {
  const items = [["fleet", "Fleet", "layout-grid"], ["devices", "Devices", "cpu"], ["campaigns", "OTA campaigns", "upload-cloud"], ["logs", "Traces", "list"], ["settings", "Settings", "settings"]];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: "var(--sidebar-w)",
      flex: "0 0 auto",
      background: "var(--surface-sunken)",
      borderRight: "var(--hairline) solid var(--border-hairline)",
      display: "flex",
      flexDirection: "column",
      padding: "var(--space-7) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 6,
      padding: "0 var(--space-7) var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      letterSpacing: "-.02em",
      color: "var(--text-strong)"
    }
  }, "Axiom Console"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: 2,
      background: "var(--red-500)"
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      padding: "0 var(--space-4)"
    }
  }, items.map(([k, l, icon]) => {
    const active = view === k || k === "devices" && view === "device";
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      type: "button",
      onClick: () => go(k),
      style: {
        all: "unset",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: "var(--space-6)",
        height: 34,
        padding: "0 var(--space-6)",
        borderRadius: "var(--radius-2)",
        fontSize: "var(--fs-body-sm)",
        fontWeight: active ? "var(--fw-medium)" : "var(--fw-regular)",
        color: active ? "var(--text-strong)" : "var(--text-muted)",
        background: active ? "var(--surface-inset)" : "transparent",
        borderLeft: `2px solid ${active ? "var(--red-500)" : "transparent"}`
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 16,
      color: active ? "var(--red-400)" : "currentColor"
    }), l);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      padding: "var(--space-7)",
      borderTop: "var(--hairline) solid var(--border-hairline)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono-sm)",
      color: "var(--text-faint)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Broker"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--status-ok-fg)"
    }
  }, "connected")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono-sm)",
      color: "var(--text-faint)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Build"), /*#__PURE__*/React.createElement("span", null, "4.2.1"))));
}
function TopBar({
  title,
  meta,
  right,
  live,
  setLive
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: "var(--topbar-h)",
      flex: "0 0 auto",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-7)",
      padding: "0 var(--space-9)",
      borderBottom: "var(--hairline) solid var(--border-hairline)",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-h4)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-h4)",
      color: "var(--text-strong)"
    }
  }, title), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono-sm)",
      color: "var(--text-faint)",
      marginTop: 1
    }
  }, meta)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)"
    }
  }, setLive && /*#__PURE__*/React.createElement(Switch, {
    size: "sm",
    label: "Live",
    checked: live,
    onChange: setLive
  }), right, /*#__PURE__*/React.createElement(Tooltip, {
    content: "Search \xB7 /"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Search"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search"
  }))), /*#__PURE__*/React.createElement(Tooltip, {
    content: "Alerts \xB7 2 open"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Alerts"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: "var(--radius-2)",
      background: "var(--surface-inset)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-body)"
    }
  }, "AV")));
}
function Tile({
  label,
  value,
  unit,
  tone,
  trend
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: "var(--surface-card)",
      border: "var(--hairline) solid var(--border-hairline)",
      borderRadius: "var(--radius-3)",
      padding: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ea-label"
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 6,
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 26,
      fontWeight: 500,
      color: tone ? `var(--status-${tone}-fg)` : "var(--text-strong)"
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono-sm)",
      color: "var(--text-faint)"
    }
  }, unit)), trend && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono-sm)",
      color: "var(--text-muted)",
      marginTop: "var(--space-5)"
    }
  }, trend));
}

/* Sparkline built from a deterministic series — no imagery available for charts. */
function Spark({
  points = 48,
  seed = 3,
  height = 64,
  color = "var(--red-400)"
}) {
  const vals = React.useMemo(() => Array.from({
    length: points
  }, (_, i) => 50 + 34 * Math.sin(i / 3.1 + seed) + 12 * Math.sin(i / 1.3 + seed * 2)), [points, seed]);
  const min = Math.min(...vals),
    max = Math.max(...vals);
  const d = vals.map((v, i) => `${i / (points - 1) * 100},${100 - (v - min) / (max - min) * 100}`).join(" ");
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "none",
    style: {
      width: "100%",
      height,
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: d,
    fill: "none",
    stroke: color,
    strokeWidth: "1.4",
    vectorEffect: "non-scaling-stroke"
  }));
}
Object.assign(window, {
  Sidebar,
  TopBar,
  Tile,
  Spark
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/ConsoleChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/DeviceScreen.jsx
try { (() => {
const {
  Icon,
  IconButton,
  Button,
  Badge,
  Tag,
  Tabs,
  Card,
  Tooltip,
  Switch
} = window.Embeddix_12425b;
const DTC = [["P0301", "Cylinder 1 misfire detected", "fault", "3", "14:02:19.446"], ["U0100", "Lost communication with ECM", "warn", "1", "13:41:07.902"], ["P0562", "System voltage low", "warn", "2", "13:12:55.118"]];
const TRACE = [["14:02:19.446", "CAN1", "0x18DAF110", "8", "02 10 03 AA AA AA AA AA"], ["14:02:19.448", "CAN1", "0x18DA10F1", "8", "06 50 03 00 32 01 F4 AA"], ["14:02:19.502", "CAN1", "0x0CF00400", "8", "FF 7D 82 1F 00 00 00 00"], ["14:02:19.561", "CAN1", "0x18FEE500", "8", "12 44 00 00 00 00 00 00"], ["14:02:19.604", "CAN2", "0x1CECFF00", "8", "20 13 00 03 FF 00 EE 00"], ["14:02:19.660", "CAN1", "0x0CF00300", "8", "7D 00 00 40 00 00 00 00"]];
function DeviceScreen({
  device,
  tab,
  setTab,
  onFlash
}) {
  const [platform, node, assignment, tone, state] = device;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-9)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-8)",
      overflow: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: tone,
    dot: true
  }, state), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono)",
      color: "var(--text-muted)"
    }
  }, node, " \xB7 ", assignment), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 14
    })
  }, "Export trace"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "zap",
      size: 14
    }),
    onClick: onFlash
  }, "Flash firmware"))), /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      value: "live",
      label: "Live"
    }, {
      value: "dtc",
      label: "Fault codes",
      count: DTC.length
    }, {
      value: "trace",
      label: "Trace"
    }, {
      value: "cal",
      label: "Calibration"
    }]
  }), tab === "live" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(Tile, {
    label: "Supply",
    value: "13.82",
    unit: "V",
    trend: "min 12.94 \xB7 max 14.06"
  }), /*#__PURE__*/React.createElement(Tile, {
    label: "Speed",
    value: "4 240",
    unit: "rpm",
    trend: "setpoint 4 250"
  }), /*#__PURE__*/React.createElement(Tile, {
    label: "Phase current",
    value: "86.4",
    unit: "A",
    trend: "limit 120 A"
  }), /*#__PURE__*/React.createElement(Tile, {
    label: "MOSFET temp",
    value: "71",
    unit: "\xB0C",
    tone: "warn",
    trend: "derate at 95 \xB0C"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-7)"
    }
  }, [["Speed, last 60 s", 3], ["Phase current, last 60 s", 6]].map(([label, seed]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      background: "var(--surface-card)",
      border: "var(--hairline) solid var(--border-hairline)",
      borderRadius: "var(--radius-3)",
      padding: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ea-label",
    style: {
      marginBottom: "var(--space-6)"
    }
  }, label), /*#__PURE__*/React.createElement(Spark, {
    seed: seed,
    height: 110
  }))))), tab === "dtc" && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      border: "var(--hairline) solid var(--border-hairline)",
      borderRadius: "var(--radius-panel)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "110px 1fr 130px 80px 150px 90px",
      gap: "var(--space-7)",
      padding: "var(--space-6) var(--space-8)",
      background: "var(--surface-sunken)"
    }
  }, ["Code", "Description", "Status", "Count", "First seen", ""].map(h => /*#__PURE__*/React.createElement("span", {
    key: h,
    className: "ea-label"
  }, h))), DTC.map(([code, desc, t, count, ts]) => /*#__PURE__*/React.createElement("div", {
    key: code,
    style: {
      display: "grid",
      gridTemplateColumns: "110px 1fr 130px 80px 150px 90px",
      gap: "var(--space-7)",
      alignItems: "center",
      padding: "var(--space-6) var(--space-8)",
      borderTop: "var(--hairline) solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono)",
      color: "var(--text-strong)"
    }
  }, code), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-body)"
    }
  }, desc), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Badge, {
    tone: t,
    dot: true
  }, t === "fault" ? "Active" : "Pending")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono)",
      color: "var(--text-body)"
    }
  }, count), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono-sm)",
      color: "var(--text-faint)"
    }
  }, ts), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    content: "Freeze frame"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Freeze frame",
    size: "sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "snowflake",
    size: 14
  }))), /*#__PURE__*/React.createElement(Tooltip, {
    content: "Clear"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Clear",
    size: "sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "eraser",
    size: 14
  }))))))), tab === "trace" && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      border: "var(--hairline) solid var(--border-hairline)",
      borderRadius: "var(--radius-panel)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-7)",
      padding: "var(--space-6) var(--space-8)",
      borderBottom: "var(--hairline) solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ea-label"
  }, "CAN trace \xB7 2 buses"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    selected: true
  }, "CAN1"), /*#__PURE__*/React.createElement(Tag, null, "CAN2"), /*#__PURE__*/React.createElement(Tag, null, "Errors only"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono-sm)"
    }
  }, TRACE.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "140px 70px 130px 40px 1fr",
      gap: "var(--space-7)",
      padding: "5px var(--space-8)",
      background: i % 2 ? "var(--surface-sunken)" : "transparent",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)"
    }
  }, r[0]), /*#__PURE__*/React.createElement("span", null, r[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-strong)"
    }
  }, r[2]), /*#__PURE__*/React.createElement("span", null, r[3]), /*#__PURE__*/React.createElement("span", null, r[4]))))), tab === "cal" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Calibration set",
    title: "Drive \xB7 Line A \xB7 Rev C",
    meta: "Written 26 Aug 2026 \xB7 operator AV"
  }, [["Current limit", "120 A"], ["Speed limit", "5 200 rpm"], ["Derate temp", "95 °C"], ["Ramp", "1 400 rpm/s"]].map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "var(--space-6) 0",
      borderTop: i ? "var(--hairline) solid var(--border-hairline)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-muted)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono)",
      color: "var(--text-strong)"
    }
  }, v)))), /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Safety",
    title: "Write protection",
    accent: true
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-muted)"
    }
  }, "Calibration writes are blocked while the node reports motion. Stop the drive before editing."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)",
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    label: "Allow writes on this session",
    checked: false,
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    disabled: true
  }, "Edit calibration")))));
}
Object.assign(window, {
  DeviceScreen,
  DTC,
  TRACE
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/DeviceScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/FleetScreen.jsx
try { (() => {
const {
  Icon,
  IconButton,
  Button,
  Badge,
  Tag,
  Input,
  Tabs,
  Select,
  Tooltip
} = window.Embeddix_12425b;
const FLEET = [["EA-MCU-48", "0x7E0", "Drive · Line A", "ok", "Online", "13.82 V", "4 240 rpm", "4.2.1"], ["EA-MCU-48", "0x7E1", "Drive · Line A", "ok", "Online", "13.79 V", "4 118 rpm", "4.2.1"], ["EA-MCU-48", "0x7E4", "Drive · Line B", "warn", "Derating", "12.94 V", "2 980 rpm", "4.2.1"], ["EA-GW-12", "0x2A0", "Gateway · Plant 2", "ok", "Online", "23.98 V", "—", "3.8.0"], ["EA-TN-07", "0x1C9", "Telematics · Van 04", "fault", "DTC P0301", "12.11 V", "—", "2.6.4"], ["EA-TN-07", "0x1D2", "Telematics · Van 07", "idle", "No data", "—", "—", "2.6.4"]];
function FleetScreen({
  openDevice,
  filter,
  setFilter
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-9)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-9)",
      overflow: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(Tile, {
    label: "Nodes online",
    value: "41",
    unit: "/ 46",
    trend: "5 offline \xB7 2 unprovisioned"
  }), /*#__PURE__*/React.createElement(Tile, {
    label: "Open faults",
    value: "3",
    tone: "fault",
    trend: "1 new in last hour"
  }), /*#__PURE__*/React.createElement(Tile, {
    label: "Bus load, CAN1",
    value: "38",
    unit: "%",
    trend: "peak 61% at 13:44"
  }), /*#__PURE__*/React.createElement(Tile, {
    label: "OTA in flight",
    value: "0",
    trend: "last campaign 26 Aug \xB7 42 units"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      border: "var(--hairline) solid var(--border-hairline)",
      borderRadius: "var(--radius-panel)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-7)",
      padding: "var(--space-7) var(--space-8)",
      borderBottom: "var(--hairline) solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    size: "sm",
    value: filter,
    onChange: setFilter,
    items: [{
      value: "all",
      label: "All nodes",
      count: 6
    }, {
      value: "faults",
      label: "Faults",
      count: 2
    }, {
      value: "drives",
      label: "Drives",
      count: 3
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: "var(--space-6)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    size: "sm",
    mono: true,
    placeholder: "Filter by node id",
    prefix: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 14,
      color: "var(--text-faint)"
    }),
    wrapperStyle: {
      width: 200
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    label: "Refresh",
    variant: "secondary",
    size: "sm"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "refresh-cw",
    size: 15
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "150px 90px 1fr 150px 110px 120px 90px 60px",
      gap: "var(--space-7)",
      padding: "var(--space-6) var(--space-8)",
      background: "var(--surface-sunken)"
    }
  }, ["Platform", "Node", "Assignment", "State", "Supply", "Speed", "Build", ""].map((h, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "ea-label",
    style: {
      textAlign: i > 3 && i < 7 ? "right" : "left"
    }
  }, h))), FLEET.filter(r => filter === "all" || (filter === "faults" ? r[3] === "fault" || r[3] === "warn" : r[0] === "EA-MCU-48")).map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r[1],
    onClick: () => openDevice(r),
    style: {
      display: "grid",
      gridTemplateColumns: "150px 90px 1fr 150px 110px 120px 90px 60px",
      gap: "var(--space-7)",
      alignItems: "center",
      padding: "var(--space-6) var(--space-8)",
      borderTop: "var(--hairline) solid var(--border-hairline)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-strong)",
      fontWeight: "var(--fw-medium)"
    }
  }, r[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono)",
      color: "var(--text-body)"
    }
  }, r[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-muted)"
    }
  }, r[2]), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Badge, {
    tone: r[3],
    dot: true
  }, r[4])), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono)",
      color: "var(--text-body)",
      textAlign: "right"
    }
  }, r[5]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono)",
      color: "var(--text-body)",
      textAlign: "right"
    }
  }, r[6]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono-sm)",
      color: "var(--text-faint)",
      textAlign: "right"
    }
  }, r[7]), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 16,
    color: "var(--text-faint)"
  }))))));
}
Object.assign(window, {
  FleetScreen,
  FLEET
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/FleetScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/console/LoginScreen.jsx
try { (() => {
const {
  Button,
  Input,
  Checkbox,
  Icon,
  Badge
} = window.Embeddix_12425b;
function LoginScreen({
  onSignIn
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "grid",
      gridTemplateColumns: "1fr 1fr"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 340
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 19,
      fontWeight: 600,
      letterSpacing: "-.02em",
      color: "var(--text-strong)"
    }
  }, "Axiom Console"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 2,
      background: "var(--red-500)"
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-7)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-muted)"
    }
  }, "Sign in with your Embeddix Axiom engineering account."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-7)",
      marginTop: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    defaultValue: "av@embeddixaxiom.example"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Password",
    type: "password",
    defaultValue: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Keep this workstation signed in",
    checked: false,
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(Button, {
    block: true,
    variant: "primary",
    onClick: onSignIn
  }, "Sign in"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: "var(--fs-caption)"
    }
  }, "Forgotten password"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono-sm)",
      color: "var(--text-faint)"
    }
  }, "SSO available"))))), /*#__PURE__*/React.createElement("div", {
    className: "ea-dark",
    style: {
      background: "var(--graphite-900)",
      backgroundImage: "var(--pattern-grid)",
      backgroundSize: "var(--grid-size) var(--grid-size)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      marginBottom: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "ok",
    dot: true
  }, "41 nodes online"), /*#__PURE__*/React.createElement(Badge, {
    tone: "fault",
    dot: true
  }, "3 faults")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-h2)",
      fontWeight: 600,
      letterSpacing: "var(--ls-h2)",
      color: "#fff",
      maxWidth: "24ch"
    }
  }, "Fleet telemetry, fault codes and OTA in one place."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-7)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--graphite-400)",
      maxWidth: "40ch"
    }
  }, "Read-only for line operators, full control for engineering. Every write is logged against a user.")));
}
Object.assign(window, {
  LoginScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/console/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CapabilitiesScreen.jsx
try { (() => {
const {
  Button,
  Icon,
  Card,
  Tabs,
  Badge,
  Tag,
  Tooltip
} = window.Embeddix_12425b;
const TAB_CONTENT = {
  hardware: {
    title: "Hardware design",
    lead: "Schematic capture through DFM review, with EMC pre-compliance before the first vehicle test.",
    specs: [["Layer count", "2 – 6"], ["Min feature", "0.1 mm / 0.1 mm"], ["Operating range", "-40 °C to +105 °C"], ["Supply", "9 – 60 V DC"], ["Tooling", "Altium · KiCad"], ["Review gates", "Schematic · Layout · DFM"]],
    bullets: ["Power stages up to 48 V / 300 A peak", "Reverse-polarity, load-dump and ISO 7637-2 pulse handling", "Connector and harness selection with the OEM's tier-1 list", "Thermal simulation against the enclosure, not the bare board"]
  },
  firmware: {
    title: "Embedded firmware",
    lead: "Bare-metal and RTOS firmware with the diagnostics and bootloader work done up front, not bolted on.",
    specs: [["Languages", "C · C++ · Rust"], ["RTOS", "FreeRTOS · Zephyr"], ["Buses", "CAN FD · LIN · Ethernet"], ["Diagnostics", "UDS (ISO 14229)"], ["OTA", "A/B with rollback"], ["Static analysis", "MISRA subset"]],
    bullets: ["Field-oriented motor control with sensorless startup", "Secure bootloader with signed images and A/B partitions", "UDS diagnostic services and DTC storage", "CI builds with hardware-in-the-loop smoke tests"]
  },
  validation: {
    title: "Validation",
    lead: "Bench rigs, HIL and vehicle-level testing. Every sweep is logged and shared as it runs.",
    specs: [["Environmental", "-40 °C to +105 °C"], ["Vibration", "ISO 16750-3"], ["EMC", "CISPR 25 pre-compliance"], ["Ingress", "IP67 fixtures"], ["Rig channels", "64 analogue · 8 CAN"], ["Reporting", "Per-run evidence pack"]],
    bullets: ["HIL models for drive and gateway platforms", "Automated soak with fault injection on the bus", "Traceable evidence packs per revision", "Field-return teardown and root-cause analysis"]
  },
  production: {
    title: "Production support",
    lead: "Test jigs, end-of-line programming and the boring work that keeps yield above 99%.",
    specs: [["EOL cycle time", "< 45 s / unit"], ["Programming", "SWD · CAN bootloader"], ["Traceability", "Serialised, per-unit log"], ["Yield target", "> 99.0%"], ["Jig build", "In-house"], ["Handover", "Runbook + spares"]],
    bullets: ["Bed-of-nails and pogo-pin jigs built in-house", "Serialised programming with per-unit test records", "Operator runbooks written for the line, not for engineers", "Yield dashboards fed from the jig itself"]
  }
};
function CapabilitiesScreen({
  tab,
  setTab
}) {
  const c = TAB_CONTENT[tab] || TAB_CONTENT.hardware;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--space-13) var(--space-10) var(--space-10)",
      borderBottom: "var(--hairline) solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ea-label"
  }, "Capabilities"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: "var(--space-6)",
      maxWidth: "22ch"
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-7)",
      maxWidth: "var(--measure-prose)",
      fontSize: "var(--fs-body-lg)",
      lineHeight: "var(--lh-body-lg)",
      color: "var(--text-muted)"
    }
  }, c.lead), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-11)"
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: [{
      value: "hardware",
      label: "Hardware"
    }, {
      value: "firmware",
      label: "Firmware"
    }, {
      value: "validation",
      label: "Validation"
    }, {
      value: "production",
      label: "Production"
    }]
  })))), /*#__PURE__*/React.createElement(Section, {
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr .9fr",
      gap: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ea-label"
  }, "Scope of work"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: "var(--space-7) 0 0",
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, c.bullets.map(b => /*#__PURE__*/React.createElement("li", {
    key: b,
    style: {
      display: "flex",
      gap: "var(--space-6)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 16,
    color: "var(--red-500)",
    style: {
      marginTop: 4
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-body)"
    }
  }, b)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-11)"
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    height: 260,
    dark: false,
    label: "Process photo placeholder \u2014 lab / line"
  }))), /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Reference envelope",
    title: "Typical numbers",
    meta: "Indicative \u2014 confirmed per project",
    elevated: true
  }, /*#__PURE__*/React.createElement("div", null, c.specs.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: "var(--space-7)",
      padding: "var(--space-6) 0",
      borderTop: i ? "var(--hairline) solid var(--border-hairline)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-muted)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono)",
      color: "var(--text-strong)"
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      flexWrap: "wrap",
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "info"
  }, "Rev-controlled"), /*#__PURE__*/React.createElement(Tooltip, {
    content: "Shared as PDF + raw logs"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "ok",
    dot: true
  }, "Evidence pack")))))));
}
Object.assign(window, {
  CapabilitiesScreen,
  TAB_CONTENT
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CapabilitiesScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ContactScreen.jsx
try { (() => {
const {
  Button,
  Icon,
  Card,
  Input,
  Select,
  Checkbox,
  Radio,
  Switch,
  Toast,
  Dialog,
  Badge
} = window.Embeddix_12425b;
function ContactScreen() {
  const [stage, setStage] = React.useState("pilot");
  const [nda, setNda] = React.useState(true);
  const [confirm, setConfirm] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Section, {
    eyebrow: "Contact",
    title: "Tell us what needs building",
    lead: "One engineer reads every enquiry. Expect a reply within one working day, with questions rather than a brochure.",
    tight: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.05fr .95fr",
      gap: "var(--space-12)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-10)",
    elevated: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Full name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Work email",
    placeholder: "you@company.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Company",
    placeholder: "Company name"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Product area",
    options: ["Automotive electronics", "Industrial controls", "Telematics", "Not sure yet"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ea-label",
    style: {
      marginBottom: "var(--space-6)"
    }
  }, "Stage"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "stage",
    value: "concept",
    checked: stage === "concept",
    onChange: setStage,
    label: "Concept",
    hint: "Requirement is still moving."
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "stage",
    value: "pilot",
    checked: stage === "pilot",
    onChange: setStage,
    label: "Pilot build",
    hint: "Up to 50 units, schematic exists."
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "stage",
    value: "series",
    checked: stage === "series",
    onChange: setStage,
    label: "Series production",
    hint: "Transfer or second-source an existing design."
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-9)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "What are you building?",
    placeholder: "A 48 V controller for a light industrial drive\u2026"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Send an NDA with your reply",
    hint: "Mutual, two pages.",
    checked: nda,
    onChange: setNda
  }), /*#__PURE__*/React.createElement(Switch, {
    label: "Add me to the quarterly engineering note",
    checked: false,
    onChange: () => {},
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      alignItems: "center",
      marginTop: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setConfirm(true)
  }, "Send enquiry"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "Book a 20-minute call"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    eyebrow: "Office",
    title: "Pune, India",
    meta: "Mon \u2013 Fri \xB7 09:30 \u2013 18:30 IST"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: "var(--space-5)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 15,
    color: "var(--text-faint)"
  }), "engineering@embeddixaxiom.example"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: "var(--space-5)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 15,
    color: "var(--text-faint)"
  }), "+91 00000 00000 (placeholder)"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: "var(--space-5)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 15,
    color: "var(--text-faint)"
  }), "Address placeholder \u2014 supply real address"))), /*#__PURE__*/React.createElement(Card, {
    eyebrow: "What happens next",
    title: "Three steps",
    accent: true
  }, /*#__PURE__*/React.createElement("ol", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, [["01", "We read it and reply with questions."], ["02", "30-minute technical call, no sales lead."], ["03", "Fixed scope with risks listed, in writing."]].map(([n, t]) => /*#__PURE__*/React.createElement("li", {
    key: n,
    style: {
      display: "flex",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono-sm)",
      color: "var(--red-500)",
      marginTop: 2
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-body)"
    }
  }, t))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "ok",
    dot: true
  }, "Replying today"), /*#__PURE__*/React.createElement(Badge, {
    tone: "idle"
  }, "NDA on request"))))), /*#__PURE__*/React.createElement(Dialog, {
    open: confirm,
    eyebrow: "Before you send",
    title: "Send this enquiry to engineering?",
    width: 420,
    onClose: () => setConfirm(false),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      onClick: () => setConfirm(false)
    }, "Keep editing"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      onClick: () => {
        setConfirm(false);
        setSent(true);
      }
    }, "Send"))
  }, /*#__PURE__*/React.createElement("p", null, "It goes to the engineering inbox, not to a sales queue. ", nda ? "A mutual NDA will be attached to the reply." : "No NDA will be attached.")), sent && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: "var(--space-9)",
      bottom: "var(--space-9)",
      zIndex: 70
    }
  }, /*#__PURE__*/React.createElement(Toast, {
    tone: "ok",
    title: "Enquiry sent",
    onClose: () => setSent(false)
  }, "Reference EA-ENQ-4417 \xB7 reply by 29 Aug")));
}
Object.assign(window, {
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ContactScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
const {
  Button,
  Icon,
  Card,
  Tag,
  Badge
} = window.Embeddix_12425b;
function Hero({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "ea-dark",
    style: {
      background: "var(--graphite-900)",
      backgroundImage: "var(--pattern-grid)",
      backgroundSize: "var(--grid-size) var(--grid-size)",
      padding: "var(--space-15) var(--space-10) var(--space-14)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.15fr .85fr",
      gap: "var(--space-12)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ea-label",
    style: {
      color: "var(--red-400)"
    }
  }, "Automotive \xB7 Industrial"), /*#__PURE__*/React.createElement("h1", {
    style: {
      marginTop: "var(--space-7)",
      fontSize: "var(--fs-display-1)",
      lineHeight: "var(--lh-display-1)",
      letterSpacing: "var(--ls-display-1)",
      color: "#fff"
    }
  }, "Electronics that survive the vehicle"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-8)",
      maxWidth: "52ch",
      fontSize: "var(--fs-body-lg)",
      lineHeight: "var(--lh-body-lg)",
      color: "var(--graphite-300)"
    }
  }, "We design, build and validate embedded hardware and firmware for automotive and industrial products \u2014 from schematic to production line."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      marginTop: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "primary",
    onClick: () => go("contact")
  }, "Talk to engineering"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "inverse",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right"
    }),
    onClick: () => go("capabilities")
  }, "See capabilities")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-10)",
      marginTop: "var(--space-13)"
    }
  }, [["12", "engineers"], ["3", "product lines"], ["2019", "founded"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 28,
      fontWeight: 500,
      color: "#fff"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "ea-label",
    style: {
      color: "var(--graphite-500)",
      marginTop: 4
    }
  }, l))))), /*#__PURE__*/React.createElement(Placeholder, {
    height: 420,
    label: "Hero image placeholder\nbench / ECU photography"
  })));
}
function Capabilities() {
  const items = [["cpu", "Hardware design", "Schematic capture, multilayer PCB layout, DFM review and EMC pre-compliance.", "2 – 6 layer boards"], ["code", "Embedded firmware", "Bare-metal and RTOS firmware, bootloaders, CAN/LIN stacks, diagnostics.", "C · C++ · Rust"], ["gauge", "Validation", "Bench rigs, HIL, environmental and vehicle-level testing with logged evidence.", "-40 °C to +105 °C"], ["factory", "Production support", "Test jigs, end-of-line programming, yield tracking and field-return analysis.", "EOL test jigs"]];
  return /*#__PURE__*/React.createElement(Section, {
    eyebrow: "What we do",
    title: "Four disciplines, one team",
    lead: "The same engineers take a product from first schematic through to the end-of-line test jig, so nothing is handed over twice."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--space-7)"
    }
  }, items.map(([icon, title, body, meta], i) => /*#__PURE__*/React.createElement(Card, {
    key: title,
    eyebrow: `0${i + 1}`,
    title: title,
    meta: meta,
    accent: i === 0,
    interactive: true
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 24,
    color: "var(--red-500)",
    style: {
      marginBottom: "var(--space-6)"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-body-sm)",
      lineHeight: "var(--lh-body-sm)",
      color: "var(--text-muted)"
    }
  }, body)))));
}
function Products({
  go
}) {
  const rows = [["EA-MCU-48", "Motor control unit", "48 V field-oriented control for two-wheeler and light-industrial drives.", "Rev C", "ok", "In production"], ["EA-GW-12", "Edge gateway", "Modbus RTU and OPC UA bridge with local buffering and secure OTA.", "Rev A", "info", "Pilot"], ["EA-TN-07", "Telematics node", "CAN FD logger with LTE backhaul and 32-day on-device retention.", "Rev B", "warn", "Validation"]];
  return /*#__PURE__*/React.createElement(Section, {
    style: {
      background: "var(--surface-sunken)",
      borderTop: "var(--hairline) solid var(--border-hairline)",
      borderBottom: "var(--hairline) solid var(--border-hairline)"
    },
    eyebrow: "Products",
    title: "Platforms we already ship",
    lead: "Each platform is a starting point, not a catalogue item. We re-spin the parts that need to change."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      border: "var(--hairline) solid var(--border-hairline)",
      borderRadius: "var(--radius-panel)",
      overflow: "hidden"
    }
  }, rows.map(([pn, name, body, rev, tone, state], i) => /*#__PURE__*/React.createElement("div", {
    key: pn,
    style: {
      display: "grid",
      gridTemplateColumns: "130px 1fr 150px 140px",
      gap: "var(--space-8)",
      alignItems: "center",
      padding: "var(--space-8) var(--space-9)",
      borderTop: i ? "var(--hairline) solid var(--border-hairline)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono)",
      color: "var(--text-muted)"
    }
  }, pn), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-h4)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)",
      letterSpacing: "var(--ls-h4)"
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 4,
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-muted)"
    }
  }, body)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: tone,
    dot: true
  }, state)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "var(--space-5)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono-sm)",
      color: "var(--text-faint)"
    }
  }, rev), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    }),
    onClick: () => go("products")
  }, "Detail"))))));
}
function Process({
  go
}) {
  const steps = [["Scope", "One week", "We read your requirement, ask the awkward questions and write back a fixed scope with risks listed."], ["Prototype", "6 – 10 weeks", "Schematic, layout, first boards, bring-up firmware. You get the design files, not just the outcome."], ["Validate", "4 – 8 weeks", "Bench rig, environmental sweeps, EMC pre-compliance. Every result logged and shared."], ["Transfer", "Ongoing", "EOL test jig, programming flow, and support for the first production runs."]];
  return /*#__PURE__*/React.createElement(Section, {
    eyebrow: "How we work",
    title: "Four stages, evidence at each one"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--space-9)"
    }
  }, steps.map(([t, d, b], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      borderTop: "var(--rule-strong) solid var(--graphite-900)",
      paddingTop: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--fs-h4)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)"
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono-sm)",
      color: "var(--text-faint)"
    }
  }, d)), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-5)",
      fontSize: "var(--fs-body-sm)",
      lineHeight: "var(--lh-body-sm)",
      color: "var(--text-muted)"
    }
  }, b)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      flexWrap: "wrap",
      marginTop: "var(--space-12)"
    }
  }, ["CAN FD", "LIN", "Automotive Ethernet", "AUTOSAR Classic", "FreeRTOS", "Zephyr", "ISO 26262 aware", "IEC 61131-2", "Modbus RTU", "OPC UA"].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))));
}
function CTABand({
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--red-500)",
      padding: "var(--space-13) var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: "#fff",
      fontSize: "var(--fs-h2)"
    }
  }, "Have a board that needs finishing?"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-5)",
      color: "rgba(255,255,255,.85)",
      fontSize: "var(--fs-body-lg)"
    }
  }, "Send the requirement. We reply within one working day.")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "inverse",
    onClick: () => go("contact")
  }, "Start a conversation")));
}
function HomeScreen({
  go
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    go: go
  }), /*#__PURE__*/React.createElement(Capabilities, null), /*#__PURE__*/React.createElement(Products, {
    go: go
  }), /*#__PURE__*/React.createElement(Process, {
    go: go
  }), /*#__PURE__*/React.createElement(CTABand, {
    go: go
  }));
}
Object.assign(window, {
  HomeScreen,
  Hero,
  Capabilities,
  Products,
  Process,
  CTABand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
const {
  Button,
  Icon,
  Tag
} = window.Embeddix_12425b;
function Wordmark({
  inverse
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: 6,
      borderBottom: "none",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 17,
      fontWeight: 600,
      letterSpacing: "-.025em",
      color: inverse ? "#fff" : "var(--text-strong)"
    }
  }, "Embeddix Axiom"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 2,
      background: "var(--red-500)",
      display: "inline-block",
      transform: "translateY(-1px)"
    }
  }));
}
function SiteHeader({
  route,
  go
}) {
  const nav = [["capabilities", "Capabilities"], ["products", "Products"], ["work", "How we work"], ["contact", "Contact"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      height: "var(--topbar-h)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-10)",
      padding: "0 var(--space-10)",
      background: "rgba(250,248,245,.88)",
      backdropFilter: "blur(8px)",
      borderBottom: "var(--hairline) solid var(--border-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => go("home"),
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, null)), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "var(--space-9)",
      marginLeft: "var(--space-6)"
    }
  }, nav.map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    type: "button",
    onClick: () => go(k),
    style: {
      all: "unset",
      cursor: "pointer",
      fontSize: "var(--fs-body-sm)",
      fontWeight: route === k ? "var(--fw-semibold)" : "var(--fw-regular)",
      color: route === k ? "var(--text-strong)" : "var(--text-muted)",
      borderBottom: `var(--rule-strong) solid ${route === k ? "var(--red-500)" : "transparent"}`,
      paddingBottom: 2
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono-sm)",
      color: "var(--text-muted)"
    }
  }, "Pune, IN"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    onClick: () => go("contact")
  }, "Talk to engineering")));
}
function SiteFooter({
  go
}) {
  const cols = [["Capabilities", ["Hardware design", "Embedded firmware", "Validation", "Production support"]], ["Products", ["Motor control unit", "Edge gateway", "Telematics node", "Axiom Console"]], ["Company", ["How we work", "Careers", "Contact"]]];
  return /*#__PURE__*/React.createElement("footer", {
    className: "ea-dark",
    style: {
      background: "var(--graphite-900)",
      color: "var(--text-body)",
      padding: "var(--space-13) var(--space-10) var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: "var(--space-10)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wordmark, {
    inverse: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-6)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--graphite-400)",
      maxWidth: "30ch"
    }
  }, "Embeddix Axiom Technologies Private Limited. Design and development of automotive and industrial products.")), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    className: "ea-label",
    style: {
      color: "var(--graphite-500)"
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      marginTop: "var(--space-6)"
    }
  }, items.map(i => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    onClick: () => go("capabilities"),
    style: {
      all: "unset",
      cursor: "pointer",
      fontSize: "var(--fs-body-sm)",
      color: "var(--graphite-300)",
      textAlign: "left"
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "var(--space-12) auto 0",
      paddingTop: "var(--space-7)",
      borderTop: "var(--hairline) solid rgba(255,255,255,.12)",
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono-sm)",
      color: "var(--graphite-500)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Embeddix Axiom Technologies Pvt. Ltd."), /*#__PURE__*/React.createElement("span", null, "CIN placeholder \xB7 ISO 9001 placeholder")));
}
function Placeholder({
  height = 320,
  label = "Image placeholder — supply photography",
  dark = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: dark ? "var(--graphite-800)" : "var(--paper-200)",
      backgroundImage: dark ? "var(--pattern-grid)" : "var(--pattern-grid-light)",
      backgroundSize: "var(--grid-size) var(--grid-size)",
      borderRadius: "var(--radius-panel)",
      color: dark ? "var(--graphite-400)" : "var(--text-faint)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-mono-sm)",
      letterSpacing: ".04em",
      textAlign: "center",
      padding: "var(--space-7)"
    }
  }, label);
}
function Section({
  children,
  eyebrow,
  title,
  lead,
  tight,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: `${tight ? "var(--section-y-tight)" : "var(--section-y)"} var(--space-10)`,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, (eyebrow || title) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "var(--space-11)",
      maxWidth: "var(--container-prose)"
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "ea-label"
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      marginTop: "var(--space-5)"
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-6)",
      fontSize: "var(--fs-body-lg)",
      lineHeight: "var(--lh-body-lg)",
      color: "var(--text-muted)"
    }
  }, lead)), children));
}
Object.assign(window, {
  Wordmark,
  SiteHeader,
  SiteFooter,
  Placeholder,
  Section
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
