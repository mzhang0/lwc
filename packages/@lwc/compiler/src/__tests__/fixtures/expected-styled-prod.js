import _xFoo from"x/foo";import{registerTemplate,registerComponent,LightningElement}from"lwc";function stylesheet(t,e,l){return(l?":host{color:#00f}":t+"{color:#00f}")+"div"+e+"{color:red}x-foo"+e+"{color:green}"}var _implicitStylesheets=[stylesheet];function tmpl(t,e,l,s){const{h:o,c:r}=t;return[o("div",{key:0},[]),r("x-foo",_xFoo,{key:1},[])]}var _tmpl=registerTemplate(tmpl);tmpl.stylesheets=[],_implicitStylesheets&&tmpl.stylesheets.push.apply(tmpl.stylesheets,_implicitStylesheets),tmpl.stylesheetTokens={hostAttribute:"x-styled_styled-host",shadowAttribute:"x-styled_styled"};class Styled extends LightningElement{}var styled=registerComponent(Styled,{tmpl:_tmpl});export default styled;
