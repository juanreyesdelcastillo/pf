/* @ds-bundle: {"format":4,"namespace":"PsicologAFalcNDesignSystem_697a55","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Photo","sourcePath":"components/marketing/Photo.jsx"},{"name":"PostFrame","sourcePath":"components/marketing/PostFrame.jsx"},{"name":"ServiceCard","sourcePath":"components/marketing/ServiceCard.jsx"},{"name":"StatBlock","sourcePath":"components/marketing/StatBlock.jsx"},{"name":"TestimonialCard","sourcePath":"components/marketing/TestimonialCard.jsx"},{"name":"TherapistCard","sourcePath":"components/marketing/TherapistCard.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"70862a8b3bbc","components/core/Button.jsx":"12f4c8050cee","components/core/Card.jsx":"719c669040cc","components/core/Divider.jsx":"6cdaec1660b2","components/core/Icon.jsx":"875c4920ece0","components/core/SectionHeading.jsx":"048e8c61c745","components/core/Wordmark.jsx":"9e8aa876378c","components/forms/Checkbox.jsx":"f6ca8e33d278","components/forms/Field.jsx":"78bc8540e4dd","components/forms/Input.jsx":"ef28eb05b9e0","components/forms/Select.jsx":"d7c7ebddeb26","components/marketing/Photo.jsx":"fa701bd07ffd","components/marketing/PostFrame.jsx":"3b5e3513212e","components/marketing/ServiceCard.jsx":"5841899671f7","components/marketing/StatBlock.jsx":"6a5426ab9adf","components/marketing/TestimonialCard.jsx":"18cdc2cf292e","components/marketing/TherapistCard.jsx":"948dc7a11e69","components/navigation/SiteFooter.jsx":"b0bf3404e63a","components/navigation/SiteHeader.jsx":"38e44cfeb068","ui_kits/social/feed-app.jsx":"2a462a29402f","ui_kits/social/feed-posts.jsx":"adc49b618cf1","ui_kits/website/site-app.jsx":"7fa8b83b4e7e","ui_kits/website/site-booking.jsx":"1a5bea15c131","ui_kits/website/site-home.jsx":"15132d142a88","ui_kits/website/site-services.jsx":"dd0952652f16","ui_kits/website/site-shared.jsx":"8955d6630b97","ui_kits/website/site-team.jsx":"a95522f5687a"},"inlinedExternals":[],"unexposedExports":[{"name":"controlStyle","sourcePath":"components/forms/Input.jsx"}]} */

(() => {

const __ds_ns = (window.PsicologAFalcNDesignSystem_697a55 = window.PsicologAFalcNDesignSystem_697a55 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  neutral: {
    background: "var(--status-info-bg)",
    color: "var(--status-info-fg)"
  },
  accent: {
    background: "var(--clr-terracotta-100)",
    color: "var(--clr-terracotta-900)"
  },
  sand: {
    background: "var(--clr-sand-100)",
    color: "var(--clr-gold-700)"
  },
  outline: {
    background: "transparent",
    color: "var(--text-secondary)",
    boxShadow: "inset 0 0 0 1px var(--border-subtle)"
  },
  inverse: {
    background: "rgba(251,248,243,.16)",
    color: "var(--text-inverse)"
  }
};
function Badge({
  tone = "neutral",
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--size-2xs)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      padding: "5px 12px",
      borderRadius: "var(--radius-pill)",
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: "var(--font-sans)",
  fontWeight: "var(--fw-regular)",
  letterSpacing: "var(--tracking-wide)",
  textTransform: "uppercase",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "var(--space-2)",
  borderRadius: "var(--radius-control)",
  border: "1px solid transparent",
  cursor: "pointer",
  transition: "var(--transition-control), transform var(--dur-fast) var(--ease-standard)",
  textDecoration: "none",
  whiteSpace: "nowrap"
};
const sizes = {
  sm: {
    fontSize: "var(--size-2xs)",
    padding: "9px 20px"
  },
  md: {
    fontSize: "var(--size-xs)",
    padding: "13px 28px"
  },
  lg: {
    fontSize: "var(--size-sm)",
    padding: "17px 38px"
  }
};
const variants = {
  primary: {
    background: "var(--action-primary-bg)",
    color: "var(--action-primary-fg)"
  },
  secondary: {
    background: "transparent",
    color: "var(--action-secondary-fg)",
    borderColor: "var(--action-secondary-border)"
  },
  ghost: {
    background: "transparent",
    color: "var(--action-quiet-fg)",
    padding: "6px 0",
    borderRadius: 0
  },
  inverse: {
    background: "var(--clr-shell)",
    color: "var(--clr-clay-700)"
  },
  inverseOutline: {
    background: "transparent",
    color: "var(--text-inverse)",
    borderColor: "var(--border-inverse)"
  }
};
const hovers = {
  primary: {
    background: "var(--action-primary-bg-hover)"
  },
  secondary: {
    background: "var(--clr-clay-100)",
    borderColor: "var(--clr-clay-500)"
  },
  ghost: {
    color: "var(--text-accent)"
  },
  inverse: {
    background: "var(--clr-cream)"
  },
  inverseOutline: {
    background: "rgba(251,248,243,.12)"
  }
};
function Button({
  variant = "primary",
  size = "md",
  href,
  icon,
  disabled,
  fullWidth,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const Tag = href ? "a" : "button";
  const s = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...(press && !disabled ? {
      transform: "var(--press-scale)"
    } : null),
    ...(disabled ? {
      opacity: .45,
      cursor: "not-allowed"
    } : null),
    ...(fullWidth ? {
      width: "100%"
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: !href && disabled ? true : undefined,
    style: s,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  }, rest), children, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "1.1em",
      lineHeight: 1
    }
  }, icon) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  paper: {
    background: "var(--surface-card)",
    color: "var(--text-primary)"
  },
  sunken: {
    background: "var(--surface-sunken)",
    color: "var(--text-primary)"
  },
  accent: {
    background: "var(--surface-accent)",
    color: "var(--text-primary)"
  },
  clay: {
    background: "var(--surface-contrast)",
    color: "var(--text-inverse)"
  },
  terracotta: {
    background: "var(--surface-contrast-warm)",
    color: "var(--text-inverse)"
  }
};
function Card({
  tone = "paper",
  bordered = true,
  elevation = "sm",
  interactive,
  padding = "var(--space-6)",
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const inv = tone === "clay" || tone === "terracotta";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...tones[tone],
      padding,
      borderRadius: "var(--radius-card)",
      border: bordered ? `1px solid ${inv ? "transparent" : "var(--border-subtle)"}` : "none",
      boxShadow: `var(--shadow-${hover && interactive ? "md" : elevation})`,
      transform: hover && interactive ? "var(--hover-lift)" : "none",
      transition: "box-shadow var(--dur-base) var(--ease-out-soft), transform var(--dur-base) var(--ease-out-soft), border-color var(--dur-base) var(--ease-standard)",
      cursor: interactive ? "pointer" : "default",
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
function Divider({
  ornament = "diamond",
  width = 420,
  tone = "clay",
  style
}) {
  const color = tone === "inverse" ? "var(--border-inverse)" : tone === "sand" ? "var(--clr-sand-700)" : "var(--clr-clay-500)";
  const glyph = {
    diamond: "✳",
    dots: "◆ ◆ ◆",
    none: null
  }[ornament];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      width,
      maxWidth: "100%",
      color,
      opacity: .75,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "currentColor",
      opacity: .55
    }
  }), glyph ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: "var(--tracking-wide)"
    }
  }, glyph) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: "currentColor",
      opacity: .55
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = "https://unpkg.com/lucide-static@0.452.0/icons/";

/* Lucide is a SUBSTITUTE set: the brand supplied no icon assets. Thin 1.5px
   strokes and round caps are the closest match to the feed's hairline aesthetic.
   The glyph is masked so it inherits currentColor. */
function Icon({
  name,
  size = 20,
  strokeTone,
  style,
  ...rest
}) {
  const url = `url("${CDN}${name}.svg")`;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "img",
    "aria-label": name,
    style: {
      display: "inline-block",
      width: size,
      height: size,
      flex: "none",
      background: strokeTone || "currentColor",
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskSize: "contain",
      maskSize: "contain",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  italic,
  lead,
  align = "center",
  tone = "ink",
  ornament = "diamond",
  style
}) {
  const inv = tone === "inverse";
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      justifyItems: align === "center" ? "center" : "start",
      textAlign: align,
      maxWidth: 720,
      margin: align === "center" ? "0 auto" : 0,
      ...style
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-widest)",
      textTransform: "uppercase",
      color: inv ? "var(--clr-blush-300)" : "var(--text-accent)"
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-light)",
      fontSize: "var(--size-3xl)",
      lineHeight: "var(--leading-snug)",
      color: inv ? "var(--text-inverse)" : "var(--text-primary)"
    }
  }, title, italic ? /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic"
    }
  }, italic)) : null), ornament !== "none" ? /*#__PURE__*/React.createElement(__ds_scope.Divider, {
    ornament: ornament,
    width: 200,
    tone: inv ? "inverse" : "clay"
  }) : null, lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-body)",
      color: inv ? "var(--text-inverse-soft)" : "var(--text-secondary)",
      textWrap: "pretty"
    }
  }, lead) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
/* NOTE: the original signature logo file was not supplied. This renders the brand
   name in the script substitute font. Swap for the real SVG when available. */
function Wordmark({
  size = 32,
  tone = "ink",
  framed = false,
  style
}) {
  const color = tone === "inverse" ? "var(--text-inverse)" : tone === "accent" ? "var(--text-accent)" : "var(--text-primary)";
  const mark = /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-script)",
      fontSize: size,
      lineHeight: 1,
      color,
      whiteSpace: "nowrap"
    }
  }, "Psicolog\xEDa Falc\xF3n");
  if (!framed) return /*#__PURE__*/React.createElement("span", {
    style: style
  }, mark);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: `${size * .45}px ${size * .9}px`,
      border: `1px solid ${tone === "inverse" ? "var(--border-inverse)" : "var(--border-strong)"}`,
      ...style
    }
  }, mark);
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  id,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start",
      cursor: "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      flex: "none",
      marginTop: 2,
      borderRadius: "var(--radius-xs)",
      border: `1px solid ${checked ? "var(--action-primary-bg)" : "var(--border-strong)"}`,
      background: checked ? "var(--action-primary-bg)" : "var(--surface-card)",
      display: "grid",
      placeItems: "center",
      transition: "var(--transition-control)"
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--action-primary-fg)",
      fontSize: 11,
      lineHeight: 1
    }
  }, "\u2713") : null), /*#__PURE__*/React.createElement("input", {
    id: id,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-secondary)",
      textWrap: "pretty"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function Field({
  label,
  hint,
  error,
  required,
  htmlFor,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-2)",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--text-secondary)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-accent)"
    }
  }, " *") : null) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--status-alert-fg)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const controlStyle = (focus, invalid, inverse) => ({
  width: "100%",
  boxSizing: "border-box",
  font: "var(--type-body)",
  color: inverse ? "var(--text-inverse)" : "var(--text-primary)",
  background: inverse ? "rgba(251,248,243,.10)" : "var(--surface-card)",
  border: `1px solid ${invalid ? "var(--status-alert-fg)" : focus ? "var(--focus-ring)" : inverse ? "var(--border-inverse)" : "var(--border-subtle)"}`,
  borderRadius: "var(--radius-sm)",
  padding: "13px 16px",
  outline: "none",
  transition: "var(--transition-control)"
});
function Input({
  invalid,
  inverse,
  icon,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const input = /*#__PURE__*/React.createElement("input", _extends({
    style: {
      ...controlStyle(focus, invalid, inverse),
      ...(icon ? {
        paddingRight: 44
      } : null),
      ...style
    },
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest));
  if (!icon) return input;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block"
    }
  }, input, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 15,
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--text-muted)",
      pointerEvents: "none"
    }
  }, icon));
}
function Textarea({
  invalid,
  inverse,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    style: {
      ...controlStyle(focus, invalid, inverse),
      minHeight: 120,
      resize: "vertical",
      fontFamily: "var(--font-sans)",
      ...style
    },
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest));
}
Object.assign(__ds_scope, { controlStyle, Input, Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  placeholder,
  invalid,
  inverse,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    style: {
      ...__ds_scope.controlStyle(focus, invalid, inverse),
      appearance: "none",
      paddingRight: 44,
      color: rest.value === "" ? "var(--text-muted)" : undefined,
      ...style
    },
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => typeof o === "string" ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 16,
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--text-muted)",
      pointerEvents: "none",
      fontSize: 11
    }
  }, "\u25BE"));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Photo.jsx
try { (() => {
/* Placeholder for real photography — none was supplied with the brand materials.
   Renders a warm neutral block in the palette so layouts read correctly. */
const labelInk = {
  warm: "rgba(46,42,38,.62)",
  greige: "rgba(46,42,38,.62)",
  clay: "rgba(251,248,243,.85)",
  terracotta: "rgba(251,248,243,.85)"
};
const tints = {
  warm: "linear-gradient(150deg,var(--clr-sand-300),var(--clr-blush-300))",
  clay: "linear-gradient(150deg,var(--clr-clay-300),var(--clr-clay-500))",
  greige: "linear-gradient(150deg,var(--clr-greige-300),var(--clr-greige-500))",
  terracotta: "linear-gradient(150deg,var(--clr-terracotta-300),var(--clr-terracotta-500))"
};
function Photo({
  src,
  alt = "",
  ratio = "4 / 5",
  tint = "warm",
  label,
  radius = "var(--radius-image)",
  style
}) {
  if (src) return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      aspectRatio: ratio,
      objectFit: "cover",
      borderRadius: radius,
      ...style
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    role: "img",
    "aria-label": alt || label || "imagen",
    style: {
      width: "100%",
      aspectRatio: ratio,
      background: tints[tint],
      borderRadius: radius,
      display: "grid",
      placeItems: "center",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: labelInk[tint],
      textAlign: "center",
      padding: "0 var(--space-4)"
    }
  }, label || "Fotografía"));
}
Object.assign(__ds_scope, { Photo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Photo.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PostFrame.jsx
try { (() => {
const grounds = {
  terracotta: {
    background: "var(--clr-terracotta-500)",
    fg: "var(--text-inverse)",
    meta: "rgba(251,248,243,.72)"
  },
  clay: {
    background: "var(--clr-clay-500)",
    fg: "var(--text-inverse)",
    meta: "rgba(251,248,243,.72)"
  },
  sand: {
    background: "var(--clr-sand-300)",
    fg: "var(--clr-ink-900)",
    meta: "var(--clr-ink-500)"
  },
  greige: {
    background: "var(--clr-greige-500)",
    fg: "var(--clr-shell)",
    meta: "rgba(251,248,243,.8)"
  },
  blush: {
    background: "var(--clr-blush-300)",
    fg: "var(--clr-ink-900)",
    meta: "var(--clr-ink-500)"
  },
  cream: {
    background: "var(--clr-cream)",
    fg: "var(--clr-ink-900)",
    meta: "var(--clr-ink-500)"
  }
};
function PostFrame({
  ground = "terracotta",
  meta = "@psicologia_falcon",
  enfoque = "Enfoque: Cognitivo – Conductual",
  sedes = "Pachuca · Mérida",
  width = 432,
  ornament = "diamond",
  framedMark = true,
  children,
  style
}) {
  const g = grounds[ground];
  const scale = width / 1080;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      aspectRatio: "4 / 5",
      background: g.background,
      color: g.fg,
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: `${96 * scale}px ${80 * scale}px ${72 * scale}px`,
      boxSizing: "border-box",
      fontFamily: "var(--font-sans)",
      overflow: "hidden",
      ...style
    }
  }, meta || enfoque || sedes ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 14,
      left: 16,
      right: 16,
      display: "flex",
      justifyContent: "space-between",
      gap: 10,
      fontSize: Math.max(8, 26 * scale),
      letterSpacing: ".04em",
      color: g.meta
    }
  }, /*#__PURE__*/React.createElement("span", null, meta), /*#__PURE__*/React.createElement("span", null, enfoque), /*#__PURE__*/React.createElement("span", null, sedes)) : null, ornament !== "none" ? /*#__PURE__*/React.createElement(__ds_scope.Divider, {
    ornament: ornament,
    width: "100%",
    tone: g.fg === "var(--text-inverse)" ? "inverse" : "clay",
    style: {
      color: g.fg,
      opacity: .6,
      marginBottom: 24 * scale * 2
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "grid",
      placeItems: "center",
      textAlign: "center"
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      placeItems: "center",
      marginTop: 24 * scale * 2
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: Math.round(64 * scale),
    framed: framedMark,
    tone: g.fg === "var(--text-inverse)" ? "inverse" : "ink"
  })));
}
Object.assign(__ds_scope, { PostFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PostFrame.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ServiceCard.jsx
try { (() => {
function ServiceCard({
  icon = "heart-handshake",
  title,
  description,
  action = "Conocer más",
  href = "#",
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    padding: "var(--space-6) var(--space-5)",
    style: {
      display: "grid",
      gap: "var(--space-3)",
      justifyItems: "center",
      textAlign: "center",
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 30,
    style: {
      color: hover ? "var(--clr-terracotta-700)" : "var(--clr-terracotta-500)",
      transition: "var(--transition-control)"
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: "var(--type-heading)",
      fontSize: "var(--size-lg)",
      color: "var(--text-primary)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-body-sm)",
      color: "var(--text-secondary)",
      textWrap: "pretty"
    }
  }, description), /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--text-link)",
      display: "inline-flex",
      gap: 6,
      alignItems: "center",
      marginTop: "var(--space-1)"
    }
  }, action, /*#__PURE__*/React.createElement("span", {
    style: {
      transform: hover ? "translateX(3px)" : "none",
      transition: "transform var(--dur-base) var(--ease-out-soft)"
    }
  }, "\u2192")));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StatBlock.jsx
try { (() => {
function StatBlock({
  items = [],
  tone = "clay",
  columns = 2,
  style
}) {
  const inv = tone !== "paper";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${columns},1fr)`,
      gap: "var(--space-6) var(--space-5)",
      background: tone === "clay" ? "var(--surface-contrast)" : tone === "terracotta" ? "var(--surface-contrast-warm)" : "var(--surface-card)",
      padding: "var(--space-7) var(--space-6)",
      borderRadius: "var(--radius-card)",
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gap: 6,
      justifyItems: "center",
      textAlign: "center"
    }
  }, it.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 22,
    style: {
      color: inv ? "var(--clr-blush-300)" : "var(--clr-terracotta-500)"
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-light)",
      fontSize: "var(--size-3xl)",
      lineHeight: 1,
      color: inv ? "var(--text-inverse)" : "var(--text-primary)"
    }
  }, it.value), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: inv ? "var(--text-inverse-soft)" : "var(--text-muted)"
    }
  }, it.label))));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/marketing/TestimonialCard.jsx
try { (() => {
function TestimonialCard({
  quote,
  author,
  detail,
  tone = "paper",
  style
}) {
  const inv = tone === "clay" || tone === "terracotta";
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    tone: tone,
    padding: "var(--space-6) var(--space-5)",
    style: {
      display: "grid",
      gap: "var(--space-4)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "quote",
    size: 20,
    style: {
      color: inv ? "var(--clr-blush-300)" : "var(--clr-clay-300)"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-light)",
      fontStyle: "italic",
      fontSize: "var(--size-xl)",
      lineHeight: "var(--leading-snug)",
      color: inv ? "var(--text-inverse)" : "var(--text-primary)",
      textWrap: "pretty"
    }
  }, quote), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: inv ? "var(--text-inverse-soft)" : "var(--text-muted)"
    }
  }, author, detail ? /*#__PURE__*/React.createElement("span", null, " \xB7 ", detail) : null));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/TherapistCard.jsx
try { (() => {
function TherapistCard({
  name,
  role,
  credentials = [],
  sede,
  photo,
  photoLabel,
  style
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    padding: "var(--space-4)",
    style: {
      display: "grid",
      gap: "var(--space-4)",
      gridTemplateColumns: "104px 1fr",
      alignItems: "center",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Photo, {
    src: photo,
    ratio: "1 / 1",
    radius: "var(--radius-circle)",
    label: photoLabel || "Retrato",
    alt: name
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-heading)",
      fontSize: "var(--size-md)",
      color: "var(--text-primary)"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-accent)"
    }
  }, role), credentials.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      fontSize: "var(--size-xs)",
      color: "var(--text-muted)",
      lineHeight: 1.7
    }
  }, credentials.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, c))) : null, sede ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "outline"
  }, sede)) : null));
}
Object.assign(__ds_scope, { TherapistCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/TherapistCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function SiteFooter({
  columns = [],
  contact = [],
  note,
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-contrast-deep)",
      color: "var(--text-inverse)",
      padding: "var(--space-9) var(--space-7) var(--space-5)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.4fr repeat(3,1fr)",
      gap: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 32,
    tone: "inverse"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-body-sm)",
      color: "var(--text-inverse-soft)",
      maxWidth: 260,
      textWrap: "pretty"
    }
  }, note)), columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title,
    style: {
      display: "grid",
      gap: "var(--space-3)",
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: "var(--clr-blush-300)"
    }
  }, col.title), col.items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-inverse-soft)"
    }
  }, i)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)",
      alignContent: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: "var(--clr-blush-300)"
    }
  }, "Contacto"), contact.map(c => /*#__PURE__*/React.createElement("span", {
    key: c.text,
    style: {
      display: "flex",
      gap: 9,
      alignItems: "flex-start",
      font: "var(--type-body-sm)",
      color: "var(--text-inverse-soft)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: c.icon,
    size: 15,
    style: {
      marginTop: 4
    }
  }), c.text)))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "var(--space-8) auto 0",
      paddingTop: "var(--space-4)",
      borderTop: "1px solid var(--border-inverse)",
      display: "flex",
      justifyContent: "space-between",
      font: "var(--type-body-sm)",
      fontSize: "var(--size-xs)",
      color: "var(--text-inverse-soft)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", new Date().getFullYear(), " Psicolog\xEDa Falc\xF3n"), /*#__PURE__*/React.createElement("span", null, "Aviso de privacidad")));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function SiteHeader({
  links = [],
  active,
  onNavigate,
  cta = "Agendar cita",
  onCta,
  transparent,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-6)",
      padding: "var(--space-4) var(--space-7)",
      background: transparent ? "transparent" : "var(--surface-page)",
      borderBottom: transparent ? "1px solid transparent" : "1px solid var(--border-subtle)",
      position: "relative",
      zIndex: 5,
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(links[0]);
    },
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: 30,
    tone: transparent ? "inverse" : "ink"
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      alignItems: "center"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(l);
    },
    style: {
      font: "var(--type-eyebrow)",
      fontSize: "var(--size-xs)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: transparent ? "var(--text-inverse)" : active === l ? "var(--text-accent)" : "var(--text-secondary)",
      paddingBottom: 3,
      borderBottom: `1px solid ${active === l ? "currentColor" : "transparent"}`
    }
  }, l)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: transparent ? "inverse" : "primary",
    onClick: onCta
  }, cta)));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/feed-app.jsx
try { (() => {
const POSTS = [{
  id: "Declaración · terracota",
  el: /*#__PURE__*/React.createElement(StatementPost, {
    ground: "terracotta",
    text: "No tienes que esperar a tocar fondo para pedir ayuda\u2026 mereces sentirte mejor desde hoy"
  })
}, {
  id: "Declaración · barro",
  el: /*#__PURE__*/React.createElement(StatementPost, {
    ground: "clay",
    text: "Lo que hoy te pesa no tiene que acompa\xF1arte para siempre."
  })
}, {
  id: "Serif",
  el: /*#__PURE__*/React.createElement(SerifPost, {
    kicker: "\xBFY si no es s\xF3lo una",
    word: "Fase?",
    footnote: "El tiempo por s\xED solo no siempre sana lo que necesita atenci\xF3n."
  })
}, {
  id: "Foto",
  el: /*#__PURE__*/React.createElement(PhotoPost, {
    kicker: "Terapia",
    title: "En l\xEDnea",
    body: "Tu salud mental merece atenci\xF3n, est\xE9s donde est\xE9s."
  })
}, {
  id: "Efeméride",
  el: /*#__PURE__*/React.createElement(AwarenessPost, {
    kicker: "D\xEDa mundial del",
    title: "Cerebro",
    date: "22 de julio",
    body: "Hoy celebramos el \xF3rgano que nos permite pensar, sentir y conectar."
  })
}, {
  id: "Portada",
  el: /*#__PURE__*/React.createElement(CoverPost, {
    title: "Curriculum Vitae"
  })
}];
function App() {
  const [sel, setSel] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-page)",
      minHeight: "100vh",
      padding: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      marginBottom: "var(--space-6)",
      borderBottom: "1px solid var(--border-subtle)",
      paddingBottom: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-widest)",
      textTransform: "uppercase",
      color: "var(--text-accent)"
    }
  }, "Plantillas de feed"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-light)",
      fontSize: "var(--size-3xl)"
    }
  }, "Publicaciones 4:5")), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, "Clic para ampliar \xB7 1080 \xD7 1350 px")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-5)"
    }
  }, POSTS.map(p => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: {
      display: "grid",
      gap: "var(--space-3)",
      justifyItems: "center",
      cursor: "zoom-in"
    },
    onClick: () => setSel(p)
  }, p.el, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, p.id))))), sel ? /*#__PURE__*/React.createElement("div", {
    onClick: () => setSel(null),
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(46,42,38,.72)",
      display: "grid",
      placeItems: "center",
      cursor: "zoom-out",
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      transform: "scale(1.55)"
    }
  }, sel.el)) : null);
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/feed-app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/social/feed-posts.jsx
try { (() => {
const {
  PostFrame,
  Photo,
  Wordmark,
  Divider,
  Badge
} = window.PsicologAFalcNDesignSystem_697a55;
const W = 336; // preview width; the design is 1080px wide

/* 1 — Declaración: the most frequent post in the feed. Tracked-out uppercase on a flat ground. */
function StatementPost({
  ground = "terracotta",
  text,
  width = W
}) {
  return /*#__PURE__*/React.createElement(PostFrame, {
    ground: ground,
    width: width
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: width * .052,
      fontWeight: "var(--fw-light)",
      letterSpacing: "var(--tracking-wider)",
      lineHeight: 1.5,
      textTransform: "uppercase"
    }
  }, text));
}

/* 2 — Serif: one loud word in the display serif over a soft ground. */
function SerifPost({
  kicker,
  word,
  footnote,
  ground = "sand",
  width = W
}) {
  return /*#__PURE__*/React.createElement(PostFrame, {
    ground: ground,
    width: width,
    ornament: "none"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: width * .03,
      justifyItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: width * .036,
      letterSpacing: "var(--tracking-widest)",
      textTransform: "uppercase",
      opacity: .8
    }
  }, kicker), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-light)",
      fontSize: width * .17,
      lineHeight: 1,
      letterSpacing: ".02em",
      textTransform: "uppercase",
      color: "var(--clr-terracotta-700)"
    }
  }, word), /*#__PURE__*/React.createElement(Divider, {
    ornament: "none",
    width: width * .3
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: width * .038,
      lineHeight: 1.6,
      maxWidth: width * .72
    }
  }, footnote)));
}

/* 3 — Foto: full-bleed image with a title band, as in "TERAPIA ONLINE". */
function PhotoPost({
  kicker,
  title,
  body,
  width = W
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      aspectRatio: "4 / 5",
      position: "relative",
      background: "var(--clr-blush-100)",
      overflow: "hidden",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    ratio: "4 / 5",
    label: "Foto de contexto",
    tint: "warm",
    radius: "0",
    style: {
      position: "absolute",
      inset: 0,
      height: "100%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg,rgba(244,239,231,.94) 0%,rgba(244,239,231,.72) 45%,rgba(244,239,231,0) 78%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 14,
      left: 16,
      right: 16,
      display: "flex",
      justifyContent: "space-between",
      fontSize: width * .026,
      color: "var(--clr-ink-500)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "@psicologia_falcon"), /*#__PURE__*/React.createElement("span", null, "Enfoque: Cognitivo \u2013 Conductual")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: width * .18,
      left: width * .1,
      right: width * .1,
      display: "grid",
      gap: width * .025
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: width * .045,
      letterSpacing: "var(--tracking-widest)",
      textTransform: "uppercase",
      color: "var(--clr-ink-700)"
    }
  }, kicker), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: width * .105,
      fontWeight: "var(--fw-light)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase",
      color: "var(--clr-ink-900)",
      lineHeight: 1,
      borderLeft: "1px solid var(--clr-clay-300)",
      paddingLeft: width * .04
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: width * .038,
      color: "var(--clr-ink-700)",
      lineHeight: 1.6,
      marginTop: width * .02
    }
  }, body)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: width * .045,
      left: 0,
      right: 0,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: width * .028,
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: "var(--clr-ink-500)"
    }
  }, "Pachuca \xB7 M\xE9rida")));
}

/* 4 — Efeméride: awareness date, serif headline + highlighted date chip. */
function AwarenessPost({
  kicker,
  title,
  date,
  body,
  width = W
}) {
  return /*#__PURE__*/React.createElement(PostFrame, {
    ground: "cream",
    width: width,
    ornament: "none"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: width * .028,
      justifyItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    ratio: "1 / 1",
    label: "Ilustraci\xF3n / foto del tema",
    tint: "greige",
    style: {
      width: width * .44
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: width * .032,
      letterSpacing: "var(--tracking-widest)",
      textTransform: "uppercase",
      color: "var(--clr-ink-500)"
    }
  }, kicker), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-light)",
      fontSize: width * .13,
      lineHeight: 1,
      letterSpacing: ".04em",
      textTransform: "uppercase",
      color: "var(--clr-terracotta-700)"
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--clr-gold-500)",
      color: "var(--clr-shell)",
      fontSize: width * .028,
      letterSpacing: "var(--tracking-wide)",
      padding: "3px 10px",
      textTransform: "uppercase"
    }
  }, date), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: width * .038,
      lineHeight: 1.6,
      maxWidth: width * .76
    }
  }, body)));
}

/* 5 — Portada: cover slide for a carousel or a document. */
function CoverPost({
  title,
  subtitle,
  ground = "greige",
  width = W
}) {
  return /*#__PURE__*/React.createElement(PostFrame, {
    ground: ground,
    width: width,
    ornament: "none",
    meta: "",
    enfoque: "",
    sedes: ""
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: width * .04,
      justifyItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: width * .095,
      fontWeight: "var(--fw-light)",
      letterSpacing: "var(--tracking-widest)",
      textTransform: "uppercase",
      lineHeight: 1.3
    }
  }, title), subtitle ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: width * .034,
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      opacity: .8
    }
  }, subtitle) : null));
}
Object.assign(window, {
  StatementPost,
  SerifPost,
  PhotoPost,
  AwarenessPost,
  CoverPost,
  PostFrame,
  Badge,
  W
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/social/feed-posts.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/site-app.jsx
try { (() => {
function App() {
  const [page, setPage] = React.useState("Inicio");
  const goto = p => {
    setPage(p);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const overlay = page === "Inicio";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: overlay ? {
      position: "relative",
      zIndex: 3,
      marginBottom: -78
    } : null
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    links: NAV,
    active: page,
    onNavigate: goto,
    transparent: overlay,
    onCta: () => goto("Contacto")
  })), page === "Inicio" && /*#__PURE__*/React.createElement(Home, {
    onCta: () => goto("Contacto")
  }), page === "Servicios" && /*#__PURE__*/React.createElement(Services, {
    onCta: () => goto("Contacto")
  }), page === "Equipo" && /*#__PURE__*/React.createElement(Team, null), (page === "Inicio" || page === "Contacto") && /*#__PURE__*/React.createElement(Booking, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site-app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/site-booking.jsx
try { (() => {
function Booking() {
  const [sent, setSent] = React.useState(false);
  const [ok, setOk] = React.useState(false);
  const [form, setForm] = React.useState({
    nombre: "",
    correo: "",
    tel: "",
    servicio: "",
    sede: "",
    motivo: ""
  });
  const set = k => e => setForm({
    ...form,
    [k]: e.target.value
  });
  return /*#__PURE__*/React.createElement(Section, {
    tone: "alt"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: ".9fr 1.1fr",
      gap: "var(--space-9)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    eyebrow: "Da el primer paso",
    title: "Aqu\xED estamos",
    italic: "para escucharte",
    ornament: "none",
    lead: "Escr\xEDbenos y te confirmamos disponibilidad el mismo d\xEDa h\xE1bil."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)"
    }
  }, [["clock", "Sesiones de 50 minutos"], ["video", "Presencial o en línea"], ["map-pin", "Pachuca y Mérida"]].map(([i, l]) => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center",
      font: "var(--type-body-sm)",
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 18,
    style: {
      color: "var(--text-accent)"
    }
  }), l))), /*#__PURE__*/React.createElement(Photo, {
    ratio: "16 / 10",
    label: "Detalle \xB7 consultorio",
    tint: "warm"
  })), /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-7)",
    elevation: "md"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-4)",
      justifyItems: "center",
      textAlign: "center",
      padding: "var(--space-7) 0"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 30,
    style: {
      color: "var(--text-accent)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--size-2xl)",
      fontWeight: "var(--fw-light)"
    }
  }, "Gracias, ", form.nombre.split(" ")[0] || "gracias", "."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-body-sm)",
      color: "var(--text-secondary)",
      maxWidth: 320
    }
  }, "Recibimos tu solicitud. Te escribimos a ", form.correo || "tu correo", " para confirmar horario."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setSent(false)
  }, "Enviar otra")) : /*#__PURE__*/React.createElement("form", {
    style: {
      display: "grid",
      gap: "var(--space-4)"
    },
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-heading)",
      fontSize: "var(--size-xl)",
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-light)"
    }
  }, "Agenda tu cita"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nombre completo",
    required: true,
    htmlFor: "b-n"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "b-n",
    value: form.nombre,
    onChange: set("nombre"),
    placeholder: "Tu nombre",
    required: true
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Tel\xE9fono",
    htmlFor: "b-t"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "b-t",
    value: form.tel,
    onChange: set("tel"),
    placeholder: "771 000 0000"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Correo",
    required: true,
    htmlFor: "b-c"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "b-c",
    type: "email",
    value: form.correo,
    onChange: set("correo"),
    placeholder: "tu@correo.com",
    required: true
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Sede",
    htmlFor: "b-s"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "b-s",
    value: form.sede,
    onChange: set("sede"),
    placeholder: "Selecciona",
    options: ["Pachuca", "Mérida", "En línea"]
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "Servicio",
    htmlFor: "b-sv"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "b-sv",
    value: form.servicio,
    onChange: set("servicio"),
    placeholder: "Selecciona un servicio",
    options: SERVICES.map(s => s.title)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Motivo de consulta",
    hint: "Opcional. Nos ayuda a asignarte al terapeuta indicado.",
    htmlFor: "b-m"
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "b-m",
    value: form.motivo,
    onChange: set("motivo"),
    placeholder: "Cu\xE9ntanos brevemente\u2026",
    style: {
      minHeight: 96
    }
  })), /*#__PURE__*/React.createElement(Checkbox, {
    id: "b-ok",
    checked: ok,
    onChange: e => setOk(e.target.checked),
    label: "Acepto el aviso de privacidad y el manejo confidencial de mis datos."
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    fullWidth: true,
    size: "lg",
    icon: "\u2192",
    disabled: !ok
  }, "Solicitar cita")))));
}
Object.assign(window, {
  Booking
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site-booking.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/site-home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Hero({
  onCta
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      background: "var(--clr-clay-500)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg,var(--clr-clay-700) 0%,var(--clr-clay-500) 55%,var(--clr-terracotta-500) 100%)",
      opacity: .95
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-10) var(--space-7) var(--space-11)",
      display: "grid",
      gridTemplateColumns: "1.05fr .95fr",
      gap: "var(--space-9)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)",
      justifyItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "inverse"
  }, "Enfoque cognitivo \u2013 conductual"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: "var(--fw-light)",
      fontSize: "var(--size-5xl)",
      lineHeight: "var(--leading-tight)",
      color: "var(--text-inverse)"
    }
  }, "No tienes que esperar", /*#__PURE__*/React.createElement("br", null), "a tocar fondo", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic",
      color: "var(--clr-blush-300)"
    }
  }, "para pedir ayuda.")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "var(--type-body)",
      color: "var(--text-inverse-soft)",
      maxWidth: 420,
      textWrap: "pretty"
    }
  }, "Terapia psicol\xF3gica para adultos, parejas y familias. Presencial en Pachuca y M\xE9rida, o en l\xEDnea desde donde est\xE9s."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "lg",
    icon: "\u2192",
    onClick: onCta
  }, "Agendar cita"), /*#__PURE__*/React.createElement(Button, {
    variant: "inverseOutline",
    size: "lg"
  }, "Conocer el equipo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      marginTop: "var(--space-4)",
      color: "var(--text-inverse-soft)"
    }
  }, [["map-pin", "Pachuca"], ["map-pin", "Mérida"], ["video", "En línea"]].map(([i, l]) => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      font: "var(--type-eyebrow)",
      letterSpacing: "var(--tracking-wide)",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 16
  }), l)))), /*#__PURE__*/React.createElement(Photo, {
    ratio: "4 / 5",
    label: "Consultorio \xB7 luz c\xE1lida",
    tint: "warm",
    style: {
      boxShadow: "var(--shadow-lg)"
    }
  })));
}
function Home({
  onCta
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    onCta: onCta
  }), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Nuestros servicios",
    title: "Acompa\xF1amiento para cada",
    italic: "etapa de tu vida",
    lead: "Cada proceso empieza con una primera sesi\xF3n de valoraci\xF3n de 50 minutos, sin compromiso de continuar."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-4)",
      marginTop: "var(--space-8)"
    }
  }, SERVICES.slice(0, 6).map(s => /*#__PURE__*/React.createElement(ServiceCard, _extends({
    key: s.title
  }, s))))), /*#__PURE__*/React.createElement(Section, {
    tone: "alt"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.05fr",
      gap: "var(--space-9)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    ratio: "5 / 4",
    label: "Sala de espera \xB7 Pachuca",
    tint: "greige"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    eyebrow: "Sobre nosotros",
    title: "Un espacio donde puedas ser t\xFA,",
    italic: "sin filtros y sin juicios.",
    lead: "Somos un equipo de psic\xF3logas y psic\xF3logos con formaci\xF3n en terapia cognitivo-conductual. Trabajamos con objetivos claros, revisados contigo sesi\xF3n a sesi\xF3n.",
    ornament: "none"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    columns: 3,
    items: [{
      value: "2",
      label: "Sedes",
      icon: "map-pin"
    }, {
      value: "50 min",
      label: "Por sesión",
      icon: "clock"
    }, {
      value: "CBT",
      label: "Enfoque",
      icon: "brain"
    }]
  })))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "El equipo",
    title: "Qui\xE9n te va a",
    italic: "acompa\xF1ar"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-4)",
      marginTop: "var(--space-8)"
    }
  }, TEAM.map(t => /*#__PURE__*/React.createElement(TherapistCard, _extends({
    key: t.name
  }, t, {
    photoLabel: "Retrato"
  }))))), /*#__PURE__*/React.createElement(Section, {
    tone: "terracotta"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "inverse",
    eyebrow: "Historias reales",
    title: "Lo que cuentan",
    italic: "quienes ya empezaron"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-4)",
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(TestimonialCard, {
    tone: "paper",
    quote: "Encontr\xE9 un lugar donde por fin pude hablar sin filtros.",
    author: "M. R.",
    detail: "Terapia individual"
  }), /*#__PURE__*/React.createElement(TestimonialCard, {
    tone: "paper",
    quote: "Salimos de la primera sesi\xF3n con algo concreto que hacer esa misma semana.",
    author: "J. y L.",
    detail: "Terapia de pareja"
  }), /*#__PURE__*/React.createElement(TestimonialCard, {
    tone: "paper",
    quote: "Lo que hoy me pesaba dej\xF3 de acompa\xF1arme a todas partes.",
    author: "A. C.",
    detail: "Manejo de ansiedad"
  }))));
}
Object.assign(window, {
  Home,
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site-home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/site-services.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Services({
  onCta
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    tone: "alt",
    style: {
      padding: "var(--space-9) var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Servicios",
    title: "Terapia psicol\xF3gica,",
    italic: "a tu ritmo",
    lead: "Sesiones de 50 minutos. Puedes empezar presencial y continuar en l\xEDnea, o combinarlas seg\xFAn tu semana."
  })), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-4)"
    }
  }, SERVICES.map(s => /*#__PURE__*/React.createElement(ServiceCard, _extends({
    key: s.title
  }, s, {
    action: "Ver detalles"
  }))))), /*#__PURE__*/React.createElement(Section, {
    tone: "clay"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-9)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    tone: "inverse",
    eyebrow: "C\xF3mo funciona",
    title: "Tres pasos,",
    italic: "sin letras chiquitas",
    ornament: "none"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-5)"
    }
  }, [["Escríbenos", "Nos cuentas brevemente qué te trae y en qué sede o modalidad te acomoda."], ["Primera sesión", "Una valoración de 50 minutos para entender el motivo de consulta y proponerte un plan."], ["Proceso", "Sesiones semanales o quincenales, con objetivos que revisamos contigo."]].map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: "var(--space-4)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--size-2xl)",
      color: "var(--clr-blush-300)",
      lineHeight: 1
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-heading)",
      fontSize: "var(--size-lg)",
      color: "var(--text-inverse)",
      marginBottom: 4
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-inverse-soft)",
      textWrap: "pretty"
    }
  }, d))))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      placeItems: "center",
      gap: "var(--space-5)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Primer paso",
    title: "El tiempo por s\xED solo no siempre sana",
    italic: "lo que necesita atenci\xF3n."
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    icon: "\u2192",
    onClick: onCta
  }, "Agendar cita"))));
}
Object.assign(window, {
  Services
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site-services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/site-shared.jsx
try { (() => {
const {
  SiteHeader,
  SiteFooter,
  SectionHeading,
  Button,
  Badge,
  Divider,
  Icon,
  Card,
  ServiceCard,
  TherapistCard,
  TestimonialCard,
  StatBlock,
  Photo,
  Wordmark,
  Field,
  Input,
  Textarea,
  Select,
  Checkbox
} = window.PsicologAFalcNDesignSystem_697a55;
const NAV = ["Inicio", "Servicios", "Equipo", "Contacto"];
const SERVICES = [{
  icon: "user",
  title: "Terapia individual",
  description: "Un espacio propio para entender lo que sientes y decidir qué hacer con ello."
}, {
  icon: "heart-handshake",
  title: "Terapia de pareja",
  description: "Herramientas para volver a escucharse y reconstruir acuerdos."
}, {
  icon: "users",
  title: "Terapia familiar",
  description: "Acompañamiento para el sistema completo, no sólo para quien consulta."
}, {
  icon: "brain",
  title: "Manejo de ansiedad",
  description: "Estrategias cognitivo-conductuales para regular el malestar del día a día."
}, {
  icon: "moon",
  title: "Duelo y pérdida",
  description: "Un acompañamiento sin prisa para atravesar lo que dolió."
}, {
  icon: "video",
  title: "Terapia en línea",
  description: "La misma atención, estés donde estés, en sesiones de 50 minutos."
}];
const TEAM = [{
  name: "Psic. Ana Falcón",
  role: "Terapia individual y de pareja",
  credentials: ["Cédula profesional 0000000", "Enfoque cognitivo–conductual"],
  sede: "Pachuca"
}, {
  name: "Psic. Integrante 2",
  role: "Terapia familiar",
  credentials: ["Cédula profesional 0000000", "Terapia sistémica"],
  sede: "Mérida"
}, {
  name: "Psic. Integrante 3",
  role: "Ansiedad y depresión",
  credentials: ["Cédula profesional 0000000", "Enfoque cognitivo–conductual"],
  sede: "En línea"
}, {
  name: "Psic. Integrante 4",
  role: "Adolescentes",
  credentials: ["Cédula profesional 0000000", "Terapia breve"],
  sede: "Pachuca"
}];
function Section({
  tone = "page",
  children,
  style
}) {
  const bg = {
    page: "var(--surface-page)",
    alt: "var(--surface-page-alt)",
    accent: "var(--surface-accent)",
    clay: "var(--surface-contrast)",
    terracotta: "var(--surface-contrast-warm)"
  }[tone];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      padding: "var(--section-y) var(--space-7)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto"
    }
  }, children));
}
function Footer() {
  return /*#__PURE__*/React.createElement(SiteFooter, {
    note: "Terapia psicol\xF3gica con enfoque cognitivo\u2013conductual. Presencial en Pachuca y M\xE9rida, o en l\xEDnea.",
    columns: [{
      title: "Servicios",
      items: ["Terapia individual", "Terapia de pareja", "Terapia familiar", "Terapia en línea"]
    }, {
      title: "Nosotros",
      items: ["El equipo", "Nuestro enfoque", "Preguntas frecuentes"]
    }, {
      title: "Sedes",
      items: ["Pachuca, Hidalgo", "Mérida, Yucatán"]
    }],
    contact: [{
      icon: "map-pin",
      text: "Pachuca, Hidalgo"
    }, {
      icon: "map-pin",
      text: "Mérida, Yucatán"
    }, {
      icon: "mail",
      text: "hola@psicologiafalcon.mx"
    }, {
      icon: "instagram",
      text: "@psicologia_falcon"
    }]
  });
}
Object.assign(window, {
  SiteHeader,
  SiteFooter,
  SectionHeading,
  Button,
  Badge,
  Divider,
  Icon,
  Card,
  ServiceCard,
  TherapistCard,
  TestimonialCard,
  StatBlock,
  Photo,
  Wordmark,
  Field,
  Input,
  Textarea,
  Select,
  Checkbox,
  NAV,
  SERVICES,
  TEAM,
  Section,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site-shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/site-team.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Team() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    tone: "alt",
    style: {
      padding: "var(--space-9) var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "El equipo",
    title: "Distintas voces,",
    italic: "un mismo enfoque",
    lead: "Todo el equipo trabaja desde la terapia cognitivo-conductual y comparte supervisi\xF3n cl\xEDnica."
  })), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: "var(--space-4)"
    }
  }, TEAM.map(t => /*#__PURE__*/React.createElement(TherapistCard, _extends({
    key: t.name
  }, t, {
    photoLabel: "Retrato"
  }))))), /*#__PURE__*/React.createElement(Section, {
    tone: "accent"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: "var(--space-4)"
    }
  }, [["Pachuca, Hidalgo", "Consultorio presencial. Lunes a sábado, 9:00 – 20:00."], ["Mérida, Yucatán", "Consultorio presencial. Lunes a viernes, 10:00 – 19:00."]].map(([t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    padding: "var(--space-6)",
    style: {
      display: "grid",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 22,
    style: {
      color: "var(--text-accent)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-heading)",
      fontSize: "var(--size-lg)"
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-secondary)"
    }
  }, d), /*#__PURE__*/React.createElement("div", {
    style: {
      font: "var(--type-body-sm)",
      color: "var(--text-muted)"
    }
  }, "Direcci\xF3n pendiente de confirmar."))))));
}
Object.assign(window, {
  Team
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site-team.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Photo = __ds_scope.Photo;

__ds_ns.PostFrame = __ds_scope.PostFrame;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.TherapistCard = __ds_scope.TherapistCard;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
