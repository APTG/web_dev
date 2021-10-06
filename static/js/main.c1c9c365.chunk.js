(this["webpackJsonpjs-root"]=this["webpackJsonpjs-root"]||[]).push([[0],{28:function(t,e,n){},29:function(t,e,n){},31:function(t,e,n){},32:function(t,e,n){},37:function(t,e,n){},42:function(t,e,n){},43:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(20),i=n.n(r),s=(n(28),n(29),n(5)),o=n(6),l=n(8),u=n(7),h=n(12),j=n(2),d=n(0),b=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:"HELLO CALCULATOR"})}}]),n}(c.a.Component),p=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:"HELLO ENERGY"})}}]),n}(c.a.Component),O=n(9);var g=n(15);n(31);function m(t){var e=t.name,n=t.children,c=t.startValue,r=t.onChange,i=Object(a.useState)(c),s=Object(g.a)(i,2),o=s[0],l=s[1];return Object(d.jsxs)("div",{className:"toggle-body",children:[e&&Object(d.jsx)("div",{className:"toggle-name",children:e}),Object(d.jsx)("div",{className:"option-container",children:n.map((function(t,n){return Object(d.jsx)("div",{onClick:function(){return l(t=n),void r(t);var t},className:"toggle-option".concat(o===n?" selected":""),children:t},"toggle-".concat(e,"-").concat(n))}))})]})}m.defaultProps={startValue:0};var x,f=m,v=(n(32),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a,c=t.props;return Object(s.a)(this,n),(a=e.call(this,c)).handleSubmit=a.handleSubmit.bind(Object(O.a)(a)),a.state={method:0},a}return Object(o.a)(n,[{key:"handleSubmit",value:function(t){t.preventDefault(),this.props.onSubmit({name:t.target.elements.name.value,plot_using:t.target.elements.plot_using.value,method:this.state.method,particle:t.target.elements.particle.value,material:t.target.elements.material.value})}},{key:"onMethodChange",value:function(t){this.setState({method:t})}},{key:"render",value:function(){return Object(d.jsxs)("form",{onSubmit:this.handleSubmit,"data-testid":"form-1",className:"particle-input",children:[Object(d.jsxs)("div",{children:[Object(d.jsxs)("label",{className:"input-wrapper",children:["Name",Object(d.jsx)("input",{name:"name",type:"text",className:"input-box"})]}),Object(d.jsxs)("div",{className:"input-wrapper",children:[Object(d.jsx)("label",{htmlFor:"plot_using",children:"Plot using"}),Object(d.jsxs)("div",{className:"toggle-compound",children:[Object(d.jsx)("input",{name:"plot_using",id:"plot_using",className:"input-box",type:"number",step:"0.01",defaultValue:500,placeholder:500}),Object(d.jsxs)(f,{name:"",onChange:this.onMethodChange.bind(this),children:["Step","Points"]})]})]})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("label",{className:"input-wrapper",children:["Particle",Object(d.jsx)("select",{name:"particle",className:"input-box",children:["He","O","C","N"].map((function(t,e){return Object(d.jsx)("option",{children:t},"material_"+e)}))})]}),Object(d.jsxs)("label",{className:"input-wrapper",children:["Material",Object(d.jsx)("select",{name:"material",className:"input-box",children:["Water","Air","Earth","Fire"].map((function(t,e){return Object(d.jsx)("option",{children:t},"material_"+e)}))})]})]}),Object(d.jsx)("button",{className:"button",type:"submit",children:"Submit"})]})}}]),n}(c.a.Component)),y=n(23);function S(t){return x.createTGraph(t.y.length,t.x,t.y)}function C(t){var e;return(e=x).createTMultiGraph.apply(e,Object(y.a)(t.map(S)))}function w(t){var e=[];return 1===t.logx&&e.push("logx"),1===t.logy&&e.push("logy"),1===t.plotStyle&&e.push("P"),e.join(";")}var N=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var c;return Object(s.a)(this,n),(c=e.call(this,t)).graphRef=Object(a.createRef)(null),c.state={traces:[],drawn:!1},x=window.JSROOT,c}return Object(o.a)(n,[{key:"componentDidMount",value:function(){if(0!==this.props.traces.length){var t=C(this.props.traces);x.draw(this.graphRef.current,t,w(this.props))}else x.draw(this.graphRef.current,x.createTGraph(1))}},{key:"shouldComponentUpdate",value:function(t,e){var a=this;if(!e.drawn||["logx","logy","plotStyle"].some((function(e){return a.props[e]!==t[e]}))){x.cleanup(this.graphRef.current);var c=C(e.traces),r=w(t);return console.log(r),x.draw(this.graphRef.current,c,r).then((function(e){n.traces=t.traces.length,a.setState({drawn:!0})})),!0}return!1}},{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)("div",{style:{width:"100%",height:480},ref:this.graphRef})})}}],[{key:"getDerivedStateFromProps",value:function(t,e){return{traces:t.traces,drawn:t.traces.length===n.traces}}}]),n}(c.a.Component);N.traces=0;var k=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={ready:!1,traces:[],logx:0,logy:1,plotStyle:0,layout:0},a.submitHandler=a.submitHandler.bind(Object(O.a)(a)),a.onXAxisStateChange=a.onXAxisStateChange.bind(Object(O.a)(a)),a.onYAxisStateChange=a.onYAxisStateChange.bind(Object(O.a)(a)),a.onPlottingMethodChange=a.onPlottingMethodChange.bind(Object(O.a)(a)),a}return Object(o.a)(n,[{key:"onXAxisStateChange",value:function(t){this.setState({logx:t})}},{key:"onYAxisStateChange",value:function(t){this.setState({logy:t})}},{key:"onPlottingMethodChange",value:function(t){this.setState({plotStyle:t})}},{key:"onLayoutChange",value:function(t){this.setState({layout:t})}},{key:"submitHandler",value:function(t){var e=this.state.traces;e.push({x:[10,20,30,40,50,60,70,80,90,100],y:Array.from(new Array(10),(function(t){return 100*Math.random()}))}),this.setState({traces:e}),this.forceUpdate()}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"content gridish",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)(v,{onSubmit:this.submitHandler,layout:this.state.layout}),Object(d.jsxs)("div",{style:{display:"flex",flexDirection:"row",gap:20,padding:"1rem 3rem"},children:[Object(d.jsxs)(f,{onChange:this.onXAxisStateChange,name:"X Axis:",startValue:this.state.logx,children:["Linear","Logarithmic"]}),Object(d.jsxs)(f,{onChange:this.onYAxisStateChange,name:"Y Axis:",startValue:this.state.logy,children:["Linear","Logarithmic"]}),Object(d.jsxs)(f,{onChange:this.onPlottingMethodChange,name:"Plotting Method:",startValue:this.state.line,children:["Line","Points"]})]})]}),this.props.ready?Object(d.jsx)(N,{traces:this.state.traces,logx:this.state.logx,logy:this.state.logy,plotStyle:this.state.plotStyle}):Object(d.jsx)("h2",{children:"JSROOT still loading"})]})}}]),n}(c.a.PureComponent),P=n(21),A=(n(37),function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"shouldComponentUpdate",value:function(){return!this.props.JSROOT}},{key:"render",value:function(){var t=this.props.JSROOT;return Object(d.jsx)(h.a,{children:Object(d.jsxs)("div",{style:{minHeight:"calc(100vh - 7.5em)"},children:[Object(d.jsxs)("div",{className:"nav-menu",children:[Object(d.jsx)(h.b,{to:"/StoppingPower",children:"Stopping Power"}),Object(d.jsx)(h.b,{to:"/Energy",children:"Energy"}),Object(d.jsx)(h.b,{to:"/Calculator",children:"Single Value Calculator"})]}),Object(d.jsx)("div",{style:{marginTop:"2.5em",paddingBottom:"1em"},children:Object(d.jsxs)(j.c,{children:[Object(d.jsx)(j.a,{path:"/StoppingPower",children:Object(d.jsx)(k,{ready:!!t})}),Object(d.jsx)(j.a,{path:"/Energy",children:Object(d.jsx)(p,{ready:!!t})}),Object(d.jsx)(j.a,{path:"/Calculator",children:Object(d.jsx)(b,{ready:!!t})})]})})]})})}}]),n}(c.a.Component)),R=Object(P.a)("https://root.cern.ch/js/latest/scripts/JSRoot.core.js",{globalName:"JSROOT"})(A),L=n.p+"static/media/github-logo.746ec8f0.png";n(42);var T=function(){var t=Object(a.useState)({}),e=Object(g.a)(t,2),n=e[0],c=e[1];return Object(a.useEffect)((function(){console.log(window.location),fetch("http://".concat(window.location.host,"/web_dev/config/deploy.json"),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){return t.ok&&t.json()})).then((function(t){c(t)})).catch((function(t){console.log(t)}))}),[]),Object(d.jsxs)("footer",{className:"footer",id:"footer",children:[Object(d.jsxs)("div",{children:["dEdx-Web \xa9 2021. Code available at ",Object(d.jsx)("img",{alt:"github-logo",src:L})]}),Object(d.jsx)("p",{children:"commit ".concat(n.commit," released on ").concat(n.date," on brach ").concat(n.branch)})]})},M=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"site-wrapper",children:Object(d.jsx)(R,{})}),Object(d.jsx)(T,{})]})};var E=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(M,{})})},F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(E,{})}),document.getElementById("root")),F()}},[[43,1,2]]]);
//# sourceMappingURL=main.c1c9c365.chunk.js.map