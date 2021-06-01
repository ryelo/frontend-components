import{c as e}from"./_commonjsHelpers-e2cda605.js";import{_ as r}from"./objectWithoutProperties-be1375b5.js";import{_ as t}from"./defineProperty-523aa47c.js";import o from"react";import n from"prop-types";import{useIntl as a}from"react-intl";import i from"@data-driven-forms/react-form-renderer/dist/cjs/form-renderer";import c from"@data-driven-forms/react-form-renderer/dist/cjs/component-types";import s from"@data-driven-forms/react-form-renderer/dist/cjs/validator-types";import p from"@data-driven-forms/react-form-renderer/dist/cjs/validator-mapper";import m from"@data-driven-forms/pf4-component-mapper/dist/cjs/form-template";import f from"@data-driven-forms/pf4-component-mapper/dist/cjs/component-mapper";import d from"@data-driven-forms/react-form-renderer/dist/cjs/use-form-api";import u from"./SourceWizardSummary.js";import l from"./CardSelect.js";import j from"./AuthSelect.js";import y from"@data-driven-forms/pf4-component-mapper/dist/cjs/select";var b=e((function(e){function _extends(){return e.exports=_extends=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},_extends.apply(this,arguments)}e.exports=_extends})),v=function Description(e){var t=e.Content,n=r(e,["Content"]);return(o.createElement(t,n))};function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}v.propTypes={Content:n.oneOfType([n.element,n.func]).isRequired};var O=function EnhancedSelect(e){var t=e.mutator,n=e.options,a=r(e,["mutator","options"]),i=d();return o.createElement("div",{className:"ins-c-sources__wizard--bigdescription"},o.createElement(y,b({},a,{options:n.map((function(e){return t(e,i)}))})))};function ownKeys$1(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread$1(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?ownKeys$1(Object(o),!0).forEach((function(r){t(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):ownKeys$1(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}O.propTypes={mutator:n.func.isRequired,options:n.array};var h={"auth-select":j,description:v,"card-select":l,summary:u,authentication:function Authentication(e){var r=a(),n=d().getState().values.authentication,i=e.validate&&e.validate.filter((function(e){return e.type!==s.REQUIRED})),p=function _objectSpread(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(o),!0).forEach((function(r){t(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):ownKeys(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}({},e,{},n&&n.id?{isRequired:!1,helperText:r.formatMessage({id:"wizard.changeAuthHelper",defaultMessage:"Changing this resets your current {label}."},{label:e.label}),validate:i}:{}),m=f[c.TEXT_FIELD];return o.createElement(m,p)},"enhanced-select":O},g=function FormTemplateWrapper(e){return o.createElement(m,b({},e,{showFormControls:!1}))},w=function SourcesFormRenderer(e){return o.createElement(i,b({componentMapper:_objectSpread$1({},f,{},h,{"switch-field":f[c.SWITCH]}),validatorMapper:{"required-validator":p[s.REQUIRED],"pattern-validator":p[s.PATTERN],"min-length-validator":p[s.MIN_LENGTH],"url-validator":p[s.URL]},FormTemplate:g,subscription:{values:!0}},e))};export{w as S,b as _,h as m};