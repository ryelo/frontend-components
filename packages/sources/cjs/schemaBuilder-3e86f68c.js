"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var objectWithoutProperties=require("./objectWithoutProperties-9e2b4e81.js"),defineProperty=require("./defineProperty-cf06dcaa.js"),React=require("react"),React__default=_interopDefault(React),reactIntl=require("react-intl"),componentTypes=_interopDefault(require("@data-driven-forms/react-form-renderer/dist/cjs/component-types")),validatorTypes=_interopDefault(require("@data-driven-forms/react-form-renderer/dist/cjs/validator-types")),toConsumableArray=require("./toConsumableArray-fe9ed082.js"),get=_interopDefault(require("lodash/get")),hardcodedSchemas=require("./hardcodedSchemas-11027244.js");function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){defineProperty._defineProperty(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var acronymMapper=function acronymMapper(e){return{"Amazon Web Services":"AWS"}[e]||e},hardcodedSchema=function hardcodedSchema(e,t,n){return get(hardcodedSchemas.hardcodedSchemas,[e,"authentication",t,n],void 0)},getAdditionalSteps=function getAdditionalSteps(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return get(hardcodedSchemas.hardcodedSchemas,[e,"authentication",t,n,"additionalSteps"],[])},shouldSkipSelection=function shouldSkipSelection(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return get(hardcodedSchemas.hardcodedSchemas,[e,"authentication",t,n,"skipSelection"],!1)},shouldSkipEndpoint=function shouldSkipEndpoint(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return get(hardcodedSchemas.hardcodedSchemas,[e,"authentication",t,n,"skipEndpoint"],!1)},hasCustomSteps=function hasCustomSteps(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return get(hardcodedSchemas.hardcodedSchemas,[e,"authentication",t,n,"customSteps"],!1)},getAdditionalStepKeys=function getAdditionalStepKeys(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return get(hardcodedSchemas.hardcodedSchemas,[e,"authentication",t,n,"includeStepKeyFields"],[])},getOnlyHiddenFields=function getOnlyHiddenFields(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return get(hardcodedSchemas.hardcodedSchemas,[e,"authentication",t,n,"onlyHiddenFields"],!1)},getAdditionalStepFields=function getAdditionalStepFields(e,t){return e.filter((function(e){return e.stepKey===t})).map((function(e){e.stepKey;return objectWithoutProperties._objectWithoutProperties(e,["stepKey"])}))},shouldUseAppAuth=function shouldUseAppAuth(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return get(hardcodedSchemas.hardcodedSchemas,[e,"authentication",t,n,"useApplicationAuth"],!1)},getNoStepsFields=function getNoStepsFields(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.filter((function(e){return!e.stepKey||t.includes(e.stepKey)}))},injectAuthFieldsInfo=function injectAuthFieldsInfo(e,t,n,a){return e.map((function(e){var o=get(hardcodedSchemas.hardcodedSchemas,[t,"authentication",n,a]),i=o?get(o,e.name):get(hardcodedSchemas.hardcodedSchemas,[t,"authentication",n,"generic",e.name]),d=i?_objectSpread({},e,{},i):e;return"authentication.password"===d.name&&(d.component="authentication"),d}))},injectEndpointFieldsInfo=function injectEndpointFieldsInfo(e,t){return e.map((function(e){var n=get(hardcodedSchemas.hardcodedSchemas,[t,"endpoint",e.name]);return n?_objectSpread({},e,{},n):e}))},getAdditionalAuthFields=function getAdditionalAuthFields(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"generic";return get(hardcodedSchemas.hardcodedSchemas,[e,"authentication",t,n,"additionalFields"],[])},getAdditionalEndpointFields=function getAdditionalEndpointFields(e){return get(hardcodedSchemas.hardcodedSchemas,[e,"endpoint","additionalFields"],[])},createEndpointStep=function createEndpointStep(e,t){return _objectSpread({},e,{fields:[].concat(toConsumableArray._toConsumableArray(getAdditionalEndpointFields(t)),toConsumableArray._toConsumableArray(injectEndpointFieldsInfo(e.fields,t))),name:"".concat(t,"-endpoint"),nextStep:"summary"})},createAdditionalSteps=function createAdditionalSteps(e,t,n,a,o){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"generic";return e.map((function(e){var d=e.name||"".concat(t,"-").concat(n,"-").concat(i,"-additional-step"),r=shouldSkipEndpoint(t,n,i),s=hasCustomSteps(t,n,i);return _objectSpread({name:d,nextStep:!a||r||s?"summary":"".concat(t,"-endpoint")},e,{fields:[].concat(toConsumableArray._toConsumableArray(injectAuthFieldsInfo(e.fields,t,n,i)),toConsumableArray._toConsumableArray(injectAuthFieldsInfo(getAdditionalStepFields(o,d),t,n,i)))})}))},createGenericAuthTypeSelection=function createGenericAuthTypeSelection(e,t,n){var a=e.schema.authentication,o=a.length>1,i=toConsumableArray._toConsumableArray(t),d={};if(o)return a.forEach((function(a){var o=getAdditionalStepKeys(e.name,a.type),r=shouldSkipEndpoint(e.name,a.type,"generic"),s=getOnlyHiddenFields(e.name,a.type),c=s?a.fields.filter((function(e){return e.hideField})):a.fields;shouldUseAppAuth(e.name,a.type)&&(i=[]),i.push({component:"auth-select",name:"auth_select",label:a.name,authName:a.type,validate:[{type:validatorTypes.REQUIRED}],disableAuthType:n}),i.push({component:componentTypes.SUB_FORM,name:"".concat(a.type,"-subform"),className:"pf-u-pl-md",fields:[].concat(toConsumableArray._toConsumableArray(getAdditionalAuthFields(e.name,a.type)),toConsumableArray._toConsumableArray(injectAuthFieldsInfo(getNoStepsFields(c,o),e.name,a.type))),condition:{when:"auth_select",is:a.type},hideField:s}),d[a.type]=getAdditionalSteps(e.name,a.type).length>0?"".concat(e.name,"-").concat(a.type,"-generic-additional-step"):0!==t.length||r?"summary":"".concat(e.name,"-endpoint")})),{name:e.name,title:React__default.createElement(reactIntl.FormattedMessage,{id:"wizard.credentials",defaultMessage:"Credentials"}),fields:i,nextStep:{when:"auth_select",stepMapper:d}};var r=a[0],s="".concat(e.name,"-").concat(r.type,"-generic-additional-step"),c=shouldSkipEndpoint(e.name,r.type,"generic"),l=getAdditionalSteps(e.name,r.type).length>0?s:0!==t.length||c?"summary":"".concat(e.name,"-endpoint"),p=getAdditionalStepKeys(e.name,r.type),u=shouldSkipSelection(e.name,r.type),h={};if(shouldUseAppAuth(e.name,r.type)&&(i=[]),u){var m=getAdditionalSteps(e.name,r.type).find((function(e){return!e.name})),y=getAdditionalStepFields(r.fields,s);h=_objectSpread({},m,{fields:[].concat(toConsumableArray._toConsumableArray(i),toConsumableArray._toConsumableArray(injectAuthFieldsInfo([].concat(toConsumableArray._toConsumableArray(m.fields),toConsumableArray._toConsumableArray(y)),e.name,r.type)))})}return _objectSpread({name:e.name,title:React__default.createElement(reactIntl.FormattedMessage,{id:"wizard.credentials",defaultMessage:"Credentials"}),fields:[].concat(toConsumableArray._toConsumableArray(i),toConsumableArray._toConsumableArray(getAdditionalAuthFields(e.name,r.type)),toConsumableArray._toConsumableArray(injectAuthFieldsInfo(getNoStepsFields(r.fields,p),e.name,r.type))),nextStep:l},h)},createSpecificAuthTypeSelection=function createSpecificAuthTypeSelection(e,t,n,a){var o=e.schema.authentication,i=t.supported_authentication_types[e.name],d=i.length>1,r=toConsumableArray._toConsumableArray(n),s={};if(d)return o.filter((function(e){var t=e.type;return i.includes(t)})).forEach((function(o){var i=hardcodedSchema(e.name,o.type,t.name)?t.name:"generic";shouldUseAppAuth(e.name,o.type,i)&&(r=[]);var d,c=shouldSkipEndpoint(e.name,o.type,i),l=hasCustomSteps(e.name,o.type,i);d=getAdditionalSteps(e.name,o.type,t.name).length>0?"".concat(e.name,"-").concat(o.type,"-").concat(t.name,"-additional-step"):0!==n.length||c||l?"summary":"".concat(e.name,"-endpoint");var p=getAdditionalStepKeys(e.name,o.type,i),u=getOnlyHiddenFields(e.name,o.type,i),h=u?o.fields.filter((function(e){return e.hideField})):o.fields;r.push({component:"auth-select",name:"auth_select",label:o.name,authName:o.type,validate:[{type:validatorTypes.REQUIRED}],supportedAuthTypes:t.supported_authentication_types[e.name],disableAuthType:a}),r.push({component:componentTypes.SUB_FORM,name:"".concat(o.type,"-subform"),className:"pf-u-pl-md",fields:[].concat(toConsumableArray._toConsumableArray(getAdditionalAuthFields(e.name,o.type,i)),toConsumableArray._toConsumableArray(injectAuthFieldsInfo(getNoStepsFields(h,p),e.name,o.type,i))),condition:{when:"auth_select",is:o.type},hideField:u}),s[o.type]=d})),{name:"".concat(e.name,"-").concat(t.id),title:React__default.createElement(reactIntl.FormattedMessage,{id:"wizard.chooseAuthType",defaultMessage:"Choose authentication type"}),fields:r,nextStep:{when:"auth_select",stepMapper:s}};var c,l=o.find((function(e){var t=e.type;return i.includes(t)})),p=hardcodedSchema(e.name,l.type,t.name)?t.name:"generic",u="".concat(e.name,"-").concat(l.type,"-").concat(t.name,"-additional-step"),h=shouldSkipEndpoint(e.name,l.type,p),m=hasCustomSteps(e.name,l.type,p);shouldUseAppAuth(e.name,l.type,p)&&(r=[]),c=getAdditionalSteps(e.name,l.type,p).length>0?u:0!==n.length||h?"summary":"".concat(e.name,"-endpoint");var y=getAdditionalStepKeys(e.name,l.type,p),A={};if(shouldSkipSelection(e.name,l.type,p)){var S=getAdditionalSteps(e.name,l.type,p).find((function(e){return!e.name})),f=getAdditionalStepFields(l.fields,u);c=S.nextStep?S.nextStep:0!==n.length||h||m?"summary":"".concat(e.name,"-endpoint"),A=_objectSpread({},S,{fields:[].concat(toConsumableArray._toConsumableArray(r),toConsumableArray._toConsumableArray(injectAuthFieldsInfo([].concat(toConsumableArray._toConsumableArray(S.fields),toConsumableArray._toConsumableArray(f)),e.name,l.type,p)))})}return _objectSpread({name:"".concat(e.name,"-").concat(t.id),title:React__default.createElement(reactIntl.FormattedMessage,{id:"wizard.credentials",defaultMessage:"Credentials"}),fields:[].concat(toConsumableArray._toConsumableArray(r),toConsumableArray._toConsumableArray(getAdditionalAuthFields(e.name,l.type,p)),toConsumableArray._toConsumableArray(injectAuthFieldsInfo(getNoStepsFields(l.fields,y),e.name,l.type,p))),nextStep:c},A)},schemaBuilder=function schemaBuilder(e,t,n){var a=[];return e.forEach((function(e){var o=e.schema.endpoint.hidden?e.schema.endpoint.fields:[],i=0===o.length;a.push(createGenericAuthTypeSelection(e,o,n)),t.forEach((function(t){t.supported_source_types.includes(e.name)&&a.push(createSpecificAuthTypeSelection(e,t,o,n))})),e.schema.authentication.forEach((function(n){var o=getAdditionalSteps(e.name,n.type);o.length>0&&a.push.apply(a,toConsumableArray._toConsumableArray(createAdditionalSteps(o,e.name,n.type,i,n.fields))),t.forEach((function(t){var o=getAdditionalSteps(e.name,n.type,t.name);o.length>0&&a.push.apply(a,toConsumableArray._toConsumableArray(createAdditionalSteps(o,e.name,n.type,i,n.fields,t.name)))}))})),i&&a.push(createEndpointStep(e.schema.endpoint,e.name))})),a},schemaBuilder$1=Object.freeze({__proto__:null,acronymMapper:acronymMapper,hardcodedSchema:hardcodedSchema,getAdditionalSteps:getAdditionalSteps,shouldSkipSelection:shouldSkipSelection,shouldSkipEndpoint:shouldSkipEndpoint,hasCustomSteps:hasCustomSteps,getAdditionalStepKeys:getAdditionalStepKeys,getOnlyHiddenFields:getOnlyHiddenFields,getAdditionalStepFields:getAdditionalStepFields,shouldUseAppAuth:shouldUseAppAuth,getNoStepsFields:getNoStepsFields,injectAuthFieldsInfo:injectAuthFieldsInfo,injectEndpointFieldsInfo:injectEndpointFieldsInfo,getAdditionalAuthFields:getAdditionalAuthFields,getAdditionalEndpointFields:getAdditionalEndpointFields,createEndpointStep:createEndpointStep,createAdditionalSteps:createAdditionalSteps,createGenericAuthTypeSelection:createGenericAuthTypeSelection,createSpecificAuthTypeSelection:createSpecificAuthTypeSelection,schemaBuilder:schemaBuilder});exports.acronymMapper=acronymMapper,exports.createAdditionalSteps=createAdditionalSteps,exports.createEndpointStep=createEndpointStep,exports.createGenericAuthTypeSelection=createGenericAuthTypeSelection,exports.createSpecificAuthTypeSelection=createSpecificAuthTypeSelection,exports.getAdditionalAuthFields=getAdditionalAuthFields,exports.getAdditionalEndpointFields=getAdditionalEndpointFields,exports.getAdditionalStepFields=getAdditionalStepFields,exports.getAdditionalStepKeys=getAdditionalStepKeys,exports.getAdditionalSteps=getAdditionalSteps,exports.getNoStepsFields=getNoStepsFields,exports.getOnlyHiddenFields=getOnlyHiddenFields,exports.hardcodedSchema=hardcodedSchema,exports.hasCustomSteps=hasCustomSteps,exports.injectAuthFieldsInfo=injectAuthFieldsInfo,exports.injectEndpointFieldsInfo=injectEndpointFieldsInfo,exports.schemaBuilder=schemaBuilder,exports.schemaBuilder$1=schemaBuilder$1,exports.shouldSkipEndpoint=shouldSkipEndpoint,exports.shouldSkipSelection=shouldSkipSelection,exports.shouldUseAppAuth=shouldUseAppAuth;