import e from"react";import{Button as t}from"@patternfly/react-core/dist/esm/components/Button/Button.js";import i from"prop-types";import{useIntl as a,FormattedMessage as r}from"react-intl";import{Title as o}from"@patternfly/react-core/dist/esm/components/Title/Title.js";import{Modal as n}from"@patternfly/react-core/dist/esm/components/Modal/Modal.js";import s from"@patternfly/react-icons/dist/esm/icons/exclamation-triangle-icon";var l=function CloseModal(i){var r=i.onExit,l=i.onStay,c=i.isOpen,d=i.title,m=i.exitTitle,p=i.stayTitle,f=i.description,u=a();return e.createElement(n,{variant:"small",title:d,"aria-label":u.formatMessage({id:"wizard.closeAriaLabel",defaultMessage:"Close add source wizard"}),header:e.createElement(o,{headingLevel:"h1",size:"2xl"},e.createElement(s,{size:"sm",className:"ins-c-source__warning-icon"}),d),isOpen:c,onClose:l,actions:[e.createElement(t,{key:"confirm",variant:"primary",id:"on-exit-button",onClick:r},m),e.createElement(t,{key:"cancel",variant:"link",id:"on-stay-button",onClick:l},p)]},f)};l.propTypes={onExit:i.func.isRequired,onStay:i.func.isRequired,isOpen:i.bool.isRequired,title:i.node,exitTitle:i.node,stayTitle:i.node,description:i.node},l.defaultProps={title:e.createElement(r,{id:"wizard.closeTitle",defaultMessage:"Exit source creation?"}),exitTitle:e.createElement(r,{id:"wizard.exitText",defaultMessage:"Exit"}),stayTitle:e.createElement(r,{id:"wizard.stayText",defaultMessage:"Stay"}),description:e.createElement(r,{id:"wizard.closeWarning",defaultMessage:"All inputs will be discarded."})};export default l;