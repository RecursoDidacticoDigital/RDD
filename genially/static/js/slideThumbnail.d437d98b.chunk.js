"use strict";(self.webpackChunk_genially_view_client=self.webpackChunk_genially_view_client||[]).push([[171],{92010:(e,t)=>{t.F=void 0,t.F=function(e,t){if(!t)return e;var n=new URL(e);return n.protocol.startsWith("http")?(Object.keys(t).forEach((function(e){n.searchParams.set(e,t[e])})),n.toString()):e}},36279:(e,t,n)=>{n.r(t),n.d(t,{SlideThumbnail:()=>Se,default:()=>xe});var o=n(18659),r=n(96421),a=n(1726);const i={position:"absolute",left:0,right:0,top:0,bottom:0,contain:"strict"},l=(0,r.Pi)((e=>{var t,n,r,a;let{backgroundImage:l,backgroundImageOpacity:s,backgroundImageSize:c,backgroundImagePosition:d,backgroundColor:u,onClick:m}=e;const g=m;return o.createElement(o.Fragment,null,o.createElement("div",{onClick:g,style:{...i,backgroundColor:u},role:"button",tabIndex:g?0:void 0,"aria-label":g?"slide background":void 0}),l&&o.createElement("div",{style:{...i,opacity:s,backgroundRepeat:"no-repeat",backgroundPositionX:null!==(t=null===d||void 0===d?void 0:d.PositionLeft)&&void 0!==t?t:0,backgroundPositionY:null!==(n=null===d||void 0===d?void 0:d.PositionTop)&&void 0!==n?n:0,backgroundSize:"".concat(null!==(r=null===c||void 0===c?void 0:c.Width)&&void 0!==r?r:0," ").concat(null!==(a=null===c||void 0===c?void 0:c.Height)&&void 0!==a?a:0),backgroundImage:"url('".concat(encodeURI(l),"')"),pointerEvents:"none"}}))})),s=(0,o.createContext)(void 0);var c=n(94267);const d="CHART_DATA_TABLE",u=["onClick","onMouseOver","onMouseOut"];function m(e,t,n){return(0,o.useMemo)((()=>{const o={};return u.forEach((r=>{const a=e[r];o[r]=a?e=>{e.stopPropagation(),e.preventDefault(),a(t,n)}:void 0})),o}),[e,t,n])}var g=n(44512),h=n(50968);const p=h.ZP.div((e=>{let{theme:{color:t}}=e;return{position:"absolute",margin:0,backgroundColor:t.brand.primary(.15),"& img":{border:"1px solid ".concat(t.brand.primary()),width:"100%",height:"100%",userSelect:"none"}}})),v=(0,r.Pi)((0,o.forwardRef)(((e,t)=>{let{item:n,parentItem:r,style:a,...i}=e;const l=m(i,n,r);return o.createElement(p,{ref:t,style:{width:"100%",height:"100%",...(0,g.g)(n),...a},...l})})));var f=n(95735),w=n(56476),y=n(47170),I=n(21814),b=n(7850);const k=(0,r.Pi)((0,o.forwardRef)(((e,t)=>{var n,r;let{item:a,style:i,parentItem:l,documentConfig:c,...d}=e;const{delta:u,slideItems:h,slideSize:p}=function(){const e=(0,o.useContext)(s);if(!e)throw new Error("FakeItems context missing");return e}(),v=m(d,a,l),k=null!==(n=a.data)&&void 0!==n?n:a,{color:C,curveTos:A,dash:T,headType:S,lineCap:x,opacity:E,source:P,tailType:B,target:z,thickness:R}=k,{sourceRect:F,targetRect:Q}=(0,I.n)(P,z,"logical")(h),O=null!==(r=a.dataPositionAndSizeWithoutCurveTos)&&void 0!==r?r:(0,w.U)(P,z,"logical")(h),Z=(0,y.Av)(A,O),L=(0,b.l)({slideSize:p,parentItem:l}),W=(0,g.g)(a);return o.createElement(f.E,{color:C,curveTos:Z,dash:T,delta:u,documentConfigColors:null===c||void 0===c?void 0:c.colors,eventHandlers:v,headType:S,itemStyle:W,lineCap:x,ref:t,opacity:E,sourceRect:F,style:i,tailType:B,targetRect:Q,thickness:R,viewBox:L})})));var C=n(14091);const A=o.lazy((()=>Promise.all([n.e(788),n.e(482)]).then(n.bind(n,18995)))),T=e=>o.createElement(o.Suspense,{fallback:null},o.createElement(A,{...e})),S=o.lazy((()=>n.e(323).then(n.bind(n,31629)))),x=e=>o.createElement(o.Suspense,{fallback:null},o.createElement(S,{...e})),E=(0,r.Pi)((0,o.forwardRef)(((e,t)=>{let{item:n,parentItem:r,style:a,documentConfig:i,...l}=e;const s=m(l,n,r),{Data:c,Id:u,Options:h,Size:p,ChartType:v,Type:f,RawData:w,tableRawData:y,Version:I}=n.data||n,b=v||f,k=b===d,A=I>=1,S=I>=2?C.X.LabelsFontSize:void 0,E=I<2,P=I>=3?h.TextColor:void 0,B={pointerEvents:"none"};return o.createElement("div",{ref:t,style:{...(0,g.g)(n),...a},role:"button",tabIndex:void 0===s.onClick?0:void 0,...s},k?o.createElement(x,{cellStyles:h.CellStyles,data:y||w,id:u,tableStyles:h.TableStyles,normalWordBreak:A,style:B}):o.createElement(T,{colors:[...h.Colors],data:c,enableAnimation:!1,height:p.Height,id:u,invertYAxis:h.InvertYAxis,prefix:h.Prefix,showAxisLabels:h.AxisLabels,showLegend:h.Legend,showTooltip:h.Tooltip,suffix:h.Suffix,textColor:h.TextColor,type:b,width:p.Width,documentConfig:i,lineVariant:h.LineVariant,showLineMarkers:h.ShowMarkers,labelsFontSize:S,showTitles:E,colorAllTexts:P,style:B}))})));function P(e,t,n){var o,r,a,i,l,s,c,d;return Number(null!==(o=null!==(r=null!==(a=e(t))&&void 0!==a?a:null===(i=t.data)||void 0===i?void 0:i.ZIndex)&&void 0!==r?r:t.ZIndex)&&void 0!==o?o:0)-Number(null!==(l=null!==(s=null!==(c=e(n))&&void 0!==c?c:null===(d=n.data)||void 0===d?void 0:d.ZIndex)&&void 0!==s?s:n.ZIndex)&&void 0!==l?l:0)}const B=h.ZP.div((e=>{let{theme:{size:t}}=e;return{"&.blocked:hover":{"&::before":{content:"",top:t.units(-1/8),left:t.units(-1/8),width:"calc(100% + ".concat(t.units(1/4),")"),height:"calc(100% + ".concat(t.units(1/4),")"),border:"$dashed-border-selected",position:"absolute"}}}})),z=(0,r.Pi)((0,o.forwardRef)(((e,t)=>{let{item:n,getZIndexOfItem:r,style:a,canBeTranslated:i,documentConfig:l,t:s,parentItem:c,renderItem:d,...u}=e;const h=m(u,n,c),p=[...n.groupedItems].sort(((e,t)=>P(r,e,t)));return o.createElement(B,{ref:t,style:{...(0,g.g)(n),...a},...h},p.map((e=>o.createElement(be,{key:e.Id,itemType:e.type,item:e,parentItem:n,getZIndexOfItem:r,canBeTranslated:i,documentConfig:l,t:s,events:u,renderItem:d}))))})));var R=n(92010);var F=n(66203),Q=n(69553);const O=e=>{let{className:t,color:n,height:r,size:a,style:i,width:l,...s}=e;return o.createElement(Q.Z,{className:t,color:n,height:r,size:a,style:i,viewBox:"0 0 16 16",width:l,...s},o.createElement("g",null,o.createElement("path",{d:"M14,13H2V11L3.59,9.41a2,2,0,0,1,2.82,0L7,10,9.59,7.41a2,2,0,0,1,2.82,0L14,9ZM5.5,4A1.5,1.5,0,1,1,4,5.5,1.5,1.5,0,0,1,5.5,4ZM14,1H2A2,2,0,0,0,0,3V13a2,2,0,0,0,2,2H14a2,2,0,0,0,2-2V3a2,2,0,0,0-2-2Z"})))},Z=h.ZP.div((e=>{let{theme:{color:t,size:n,shadow:o}}=e;return{background:t.neutral.coal(),width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",color:t.neutral.white(),borderRadius:n.units(.33),padding:n.units(.5),boxShadow:o.short}})),L=(0,h.ZP)(O)((()=>({width:"50%",height:"50%"}))),W=h.ZP.p((e=>{let{theme:{size:t},$showTitle:n}=e;return{display:n?"block":"none",fontSize:t.units(3)}})),_=(0,r.Pi)((0,o.forwardRef)(((e,t)=>{var n;let{item:r,parentItem:a,style:i,...l}=e;const s=m(l,r,a),c=null!==(n=r.Source)&&void 0!==n?n:r.data.Source,[d,u]=(0,o.useState)(null),[h,p]=(0,o.useState)(!1),[v,f]=(0,o.useState)(null),w=(0,o.useRef)(!1),y=(0,o.useRef)(/\.(gif)|data:image\/gif/.test(c)),I=(0,o.useCallback)((()=>{try{!function(e,t,n){const o=new Image;let r=n;n||(r={mimeType:"image/png"}),o.onload=()=>{try{var e;const n=document.createElement("canvas");n.width=o.width,n.height=o.height;const a=n.getContext("2d");a&&a.drawImage(o,0,0);const i=n.toDataURL(null===(e=r)||void 0===e?void 0:e.mimeType);t(null,i)}catch(n){t(!0,null)}},o.onerror=()=>{t(!0,null)},o.setAttribute("crossOrigin","anonymous"),o.src=(0,R.F)(e,{v:"anonymous"})}(c,((e,t)=>{w.current&&(e?p(!0):(u(t),f(c)))}))}catch(e){console.warn(e),p(!0)}}),[c]);if((0,o.useEffect)((()=>(w.current=!0,()=>{w.current=!1})),[]),(0,o.useEffect)((()=>{y.current&&I()}),[I]),(0,o.useEffect)((()=>{y.current?!y.current||d&&v===c||I():(u(null),p(!1),f(null))}),[c,d,v,I]),y.current&&!d&&!h)return null;const b=r.data||r,k=parseInt(b.Size.Height,10)<200;return o.createElement("div",{ref:t,style:{overflow:"hidden",...(0,g.g)(r),...i},className:b.Frame,role:"button",tabIndex:void 0===s.onClick?0:void 0,...s},h?o.createElement(Z,null,o.createElement(L,null),o.createElement(W,{$showTitle:!k},"GIF")):o.createElement("div",{style:{position:"absolute",top:"".concat(b.Offset.top,"%"),left:"".concat(b.Offset.left,"%"),right:"".concat(b.Offset.right,"%"),bottom:"".concat(b.Offset.bottom,"%")}},o.createElement("img",{style:{position:"relative",width:"100%",height:"100%",display:"block",maxWidth:"100%",transform:(0,F.s)(b.Transformations),objectFit:b.objectFit},src:d||c,alt:b.Name})))})));var H=n(87166),N=n(7749),q=n(50285);const M=e=>{let{item:t,disabled:n,feedbackText:r,questionSubtitleText:a,showAnswersIcon:i,feedbackColor:l,documentColors:s,t:c,hasDefaultAnimation:d=!1,answerSelectedPreview:u=!1,selectedAnswerIds:m,showCorrectAnswers:g=!1}=e;const{Question:h,Answers:p,Appearance:v,Id:f}=t,w=p.filter((e=>{let{Image:t}=e;return t.length>0}));return o.createElement(q.h,{type:N.InteractiveQuestionType.Image,itemId:f,question:h||c("__new.editor.activityConfiguration.questionPlaceholder"),disabled:n,showAnswersIcon:i,hasDefaultAnimation:d,documentColors:s,feedbackText:r,feedbackColor:l,questionSubtitleText:a,appearance:v,answers:w,answerSelectedPreview:u,selectedAnswerIds:m,showCorrectAnswers:g,dataCy:"imageInteractiveQuestionItem"})};M.Container=q.h.Container,M.Question=q.h.Question,M.Subtitle=q.h.Subtitle,M.Answers=q.h.Answers,M.Answer=q.h.Answer,M.Feedback=q.h.Feedback,M.Button=q.h.Button;const D=(0,r.Pi)(M);var V=n(68670);const j=e=>{let{item:t,disabled:n,feedbackText:r,questionSubtitleText:a,showAnswersIcon:i,feedbackColor:l,documentColors:s,t:c,hasDefaultAnimation:d=!1,answerSelectedPreview:u=!1,selectedAnswerIds:m,showCorrectAnswers:g=!1}=e;const{Question:h,Answers:p,Appearance:v,Id:f}=t,w=p.filter((e=>{let{Text:t}=e;return t.length>0})),y=c("__new.editor.content.questionMultiple");return o.createElement(q.h,{type:N.InteractiveQuestionType.Quiz,itemId:f,question:h||y,disabled:n,showAnswersIcon:i,hasDefaultAnimation:d,documentColors:s,feedbackText:r,feedbackColor:l,questionSubtitleText:a,appearance:v,answers:w,answerSelectedPreview:u,selectedAnswerIds:m,showCorrectAnswers:g,dataCy:"quizInteractiveQuestionItem"})};j.Container=q.h.Container,j.Question=q.h.Question,j.Subtitle=q.h.Subtitle,j.Answers=q.h.Answers,j.Answer=q.h.Answer,j.Feedback=q.h.Feedback,j.Button=q.h.Button;const G=(0,r.Pi)(j);var U=n(61789);const X=e=>{let{item:t,disabled:n,feedbackText:r,questionSubtitleText:a,showAnswersIcon:i,feedbackColor:l,documentColors:s,t:c,hasDefaultAnimation:d=!1,answerSelectedPreview:u=!1,selectedAnswerIds:m,showCorrectAnswers:g=!1,showResultPreview:h=!1}=e;const{Question:p,Answers:v,Appearance:f,Id:w}=t,y=v.filter((e=>{let{Text:t}=e;return t.length>0})),I=c("__new.editor.content.questionMultiple");return o.createElement(q.h,{type:N.InteractiveQuestionType.Survey,itemId:w,question:p||I,disabled:n,showAnswersIcon:i,hasDefaultAnimation:d,documentColors:s,feedbackText:r,feedbackColor:l,questionSubtitleText:a,appearance:f,answers:y,answerSelectedPreview:u,selectedAnswerIds:m,showCorrectAnswers:g,showResultPreview:h,showResultEnabled:t.Options.ShowResults,dataCy:"surveyInteractiveQuestionItem"})};X.Container=q.h.Container,X.Question=q.h.Question,X.Subtitle=q.h.Subtitle,X.Answers=q.h.Answers,X.Answer=q.h.Answer,X.Feedback=q.h.Feedback,X.Button=q.h.Button;const Y=(0,r.Pi)(X),$=e=>{let{item:t,disabled:n,feedbackText:r,showAnswersIcon:a,feedbackColor:i,documentColors:l,t:s,hasDefaultAnimation:c=!1,answerSelectedPreview:d=!1,selectedAnswerIds:u,showCorrectAnswers:m=!1}=e;const{Question:g,Answers:h,Appearance:p,Id:v}=t;return o.createElement(q.h,{type:N.InteractiveQuestionType.TrueFalse,itemId:v,question:g||s("__new.editor.content.placeholderQuestionTrueFalse"),disabled:n,showAnswersIcon:a,hasDefaultAnimation:c,documentColors:l,feedbackText:r,feedbackColor:i,appearance:p,answers:h,answerSelectedPreview:d,selectedAnswerIds:u,showCorrectAnswers:m,dataCy:"trueFalseInteractiveQuestionItem"})};$.Container=q.h.Container,$.Question=q.h.Question,$.Answers=q.h.Answers,$.Answer=q.h.Answer,$.Feedback=q.h.Feedback,$.Button=q.h.Button;const J=(0,r.Pi)($),K=(0,r.Pi)((0,o.forwardRef)(((e,t)=>{let{item:n,parentItem:r,zIndex:a,style:i,t:l,selectedAnswerIds:s,showCorrectAnswers:d=!1,documentConfig:u,...g}=e;const h=m(g,n,r),{Opacity:p,Rotation:v,Frame:f,Position:w,ZIndex:y,Size:I,Type:b}=n.data||n;let k;switch(b){case c.InteractiveQuestionType.Quiz:k=o.createElement(G,{key:n.Id,item:n.data||n,t:l,selectedAnswerIds:s,showCorrectAnswers:d,disabled:d,documentColors:null===u||void 0===u?void 0:u.colors});break;case c.InteractiveQuestionType.OpenAnswer:k=o.createElement(V.g,{key:n.Id,item:n.data||n,t:l,userAnswer:null!==s&&void 0!==s&&s.length?s[0]:void 0,disabled:d,documentColors:null===u||void 0===u?void 0:u.colors});break;case c.InteractiveQuestionType.TrueFalse:k=o.createElement(J,{key:n.Id,item:n.data||n,t:l,selectedAnswerIds:s,showCorrectAnswers:d,disabled:d,documentColors:null===u||void 0===u?void 0:u.colors});break;case c.InteractiveQuestionType.Image:k=o.createElement(D,{key:n.Id,item:n.data||n,t:l,selectedAnswerIds:s,showCorrectAnswers:d,disabled:d,documentColors:null===u||void 0===u?void 0:u.colors});break;case c.InteractiveQuestionType.Sort:k=o.createElement(U.X,{key:n.Id,item:n.data||n,t:l,showCorrectAnswers:d,disabled:d,documentColors:null===u||void 0===u?void 0:u.colors});break;case c.InteractiveQuestionType.Survey:k=o.createElement(Y,{key:n.Id,item:n.data||n,t:l,selectedAnswerIds:s});break;default:throw new Error("InteractiveQuestion type ".concat(b," does not have any component associated"))}return o.createElement("div",{ref:t,style:{height:I.Height,left:w.PositionLeft,opacity:p,overflow:"hidden",position:"absolute",top:w.PositionTop,transform:(0,H.j)(v),width:I.Width,zIndex:a||y,contain:"strict",...i},className:f,role:"button",tabIndex:void 0===h.onClick?0:void 0,...h},k)}))),ee=(0,r.Pi)((0,o.forwardRef)(((e,t)=>{let{item:n,parentItem:r,style:a,...i}=e;const l=m(i,n,r),s=n.data||n;return o.createElement("div",{ref:t,className:"pin-item",style:{...(0,g.g)(n),zIndex:99999,maxWidth:"100%",width:"100%",height:"100%",...a},role:"button",tabIndex:void 0===l.onClick?0:void 0,...l},o.createElement("img",{style:{width:"32px",height:"32px"},src:s.Source,alt:s.Name}))})));var te=n(67125);const ne=h.ZP.div((e=>{let{theme:{color:t,size:n}}=e;return{background:t.neutral.coal(),width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",color:t.neutral.white(),borderRadius:n.units(2/3),padding:n.units(1),paddingLeft:void 0,boxShadow:"0 1px ".concat(n.units(1)," 0 ").concat(t.neutral.black(.2)),"& svg":{width:n.units(5.5)}}})),oe=(0,r.Pi)((0,o.forwardRef)(((e,t)=>{let{item:n,parentItem:r,style:a,...i}=e;const l=m(i,n,r),s=n.data||n,c=parseInt(s.Size.Height,10)<50?"80%":"100%";return o.createElement("div",{ref:t,style:{...(0,g.g)(n),...a},role:"button",tabIndex:void 0===l.onClick?0:void 0,...l},o.createElement(ne,null,o.createElement(te.Z,{height:c})))}))),re=h.ZP.div({position:"absolute",display:"inherit",fontSize:"99%","& svg":{display:"inherit",fontSize:"99%",pointerEvents:"none",animation:"none",filter:"none"},"& svg > *":{animation:"none",filter:"none"},"& svg text":{userSelect:"none",cursor:"default",fontSize:"99%"}}),ae=/^((?!chrome|android).)*safari/i.test(window.navigator.userAgent),ie=(0,r.Pi)((0,o.forwardRef)(((e,t)=>{var n,r;let{item:a,parentItem:i,style:l,...s}=e;const c=m(s,a,i),d=(0,o.useRef)(null),u=null!==(n=a.data)&&void 0!==n?n:a,h=null===(r=u.Colors)||void 0===r?void 0:r[0],p=u.sourceSvg||u.SourceSvg;(0,o.useLayoutEffect)((()=>{const e=d.current;e&&(e.querySelectorAll(".color1").forEach((e=>{e.style.fill=h})),ae&&e.querySelectorAll("linearGradient").forEach((e=>{const t=e.id;e.setAttribute("id","rerender"),e.setAttribute("id",t)})))}),[p,h]);const v=(0,o.useCallback)((e=>{d.current=e,t&&("function"===typeof t?t(e):"object"===typeof t&&(t.current=e))}),[t]);return o.createElement(re,{className:"svg-item svg-item-fake",dangerouslySetInnerHTML:{__html:p},ref:v,style:{...(0,g.g)(a),backgroundColor:u.Background,...l},...c})})));var le=Array.isArray;function se(e){var t,n,o=typeof e,r="";if("string"===o||"number"===o)return e||"";if(le(e)&&e.length>0)for(t=0,n=e.length;t<n;t++)""!==(o=se(e[t]))&&(r+=(r&&" ")+o);else for(t in e)e.hasOwnProperty(t)&&e[t]&&(r+=(r&&" ")+t);return r}var ce=n(86778),de=n(37993),ue=n(79545);const me=h.ZP.div({"-webkit-line-break":"after-white-space","-webkit-nbsp-mode":"normal",lineBreak:"normal",display:"block",outline:"none","&.text-bold":{fontWeight:"bold"},"&.text-italic":{fontStyle:"italic"},"&.text-align-left":{textAlign:"left"},"&.text-align-right":{textAlign:"right"},"&.text-align-justify":{textAlign:"justify"},"&.text-align-center":{textAlign:"center"},"&.uppercase":{textTransform:"uppercase"},"& sub":{verticalAlign:"sub",fontSize:"60%"},"& sup":{verticalAlign:"super",fontSize:"60%"},"&.genially-view-text-indent-list-v4":{"ul, ol":{paddingLeft:"1.8em",listStylePosition:"outside"}},"& *":{pointerEvents:"none"},"& ul":{listStyleType:"disc",ul:{listStyleType:"circle",ul:{listStyleType:"square"}}},"& ol":{listStyleType:"decimal",ol:{listStyleType:"lower-latin",ol:{listStyleType:"lower-roman"}}}},(e=>{let{theme:{color:t,size:n}}=e;return{"&.text-effect-shadow":{textShadow:"2px 2px 6px ".concat(t.neutral.black(.5))},"&.interparagraph_medium":{...ue.oB.mixins.setInterparagraph(n.units(1))},"&.interparagraph_big":{...ue.oB.mixins.setInterparagraph(n.units(2.25))},"& p":{margin:"0 0 ".concat(n.units(1.25))},"& ul, & ol":{lineBreak:"normal",display:"block",marginTop:0,marginBottom:0,paddingLeft:n.units(3.125),listStylePosition:"inside"},"&.genially-view-text-indent-list-v3":{"ul, ol":{paddingLeft:n.units(6.25),listStylePosition:"outside"}},"&.genially-view-text-indent-paragraph-v5 blockquote":{margin:"0 0 0 ".concat(n.units(5)),border:"none",padding:0}}})),ge=(0,r.Pi)((0,o.forwardRef)(((e,t)=>{let{item:n,parentItem:r,style:a,canBeTranslated:i,...l}=e;const s=m(l,n,r),c=n.data||n,d=(0,de.j)(c),u=c.Version>=6;return o.createElement(me,{ref:t,className:se([d,{notranslate:!i}]),style:{...(0,g.g)(n),backgroundColor:c.Background,color:c.Color,fontSize:c.FontSize,fontFamily:(0,ce.k)(c.FontFamily,u),padding:c.Padding,lineHeight:c.LineHeight,letterSpacing:"".concat(c.LetterSpacing,"px"),wordWrap:c.Version<2?"initial":"break-word",...a},dangerouslySetInnerHTML:{__html:c.TextMessage},...s})})));var he=n(27971),pe=n(85960);const ve=(0,h.ZP)(ue.h2)((e=>{let{theme:{color:t}}=e;return{color:t.neutral.cement()}})),fe=(0,h.Zz)((e=>{let{theme:t,width:n,name:r}=e;const a=(0,he.v4)(),[i,l]=(0,o.useState)(null),[s,c]=(0,o.useState)(null),d=(0,o.useCallback)((()=>{const e=[];for(let t=0;t<41;t+=1)e.push(128);if(i&&s){s.clearRect(0,0,i.width,i.height),s.fillStyle=t.color.neutral.cement();for(let t=0;t<41;t+=1){var n;const o=8*t,r=4,a=-((null!==(n=e[t])&&void 0!==n?n:0)/2||5);s.fillRect(o,i.height,r,a)}}}),[i,s,t.color.neutral]);return(0,o.useEffect)((()=>{const e=document.querySelector("#canva-element-fake".concat(a));e&&(l(e),c(e.getContext("2d")),d())}),[a,d]),o.createElement("div",{className:"widget-audio-player"},o.createElement("div",{className:"widget-audio-player-play-container"},o.createElement(pe.Z,null)),o.createElement("div",{className:"widget-audio-player-info-container"},o.createElement("div",{className:"widget-audio-player-bars-group",id:"widget-audio-player-bars-group"},o.createElement("canvas",{id:"canva-element-fake".concat(a),style:{width:"100%",height:"42%"}})),o.createElement("div",{className:"widget-audio-player-file-progress-bar"}),o.createElement("div",{className:"widget-audio-player-file-name-container"},o.createElement(ve,{className:"widget-audio-player-file-name",style:{fontSize:parseFloat(n)/22}},r))))})),we=(0,r.Pi)((0,o.forwardRef)(((e,t)=>{let{item:n,parentItem:r,style:a,...i}=e;const l=m(i,n,r),s=n.data||n,{Name:c,Size:d,Background:u}=s;return o.createElement("div",{ref:t,style:{...(0,g.g)(n),backgroundColor:u,...a},role:"button",tabIndex:void 0===l.onClick?0:void 0,...l},o.createElement(fe,{name:c,width:d.Width}))}))),ye=h.ZP.div((e=>{let{theme:{color:t}}=e;return{background:t.neutral.black(.8),color:t.neutral.white(),"& svg":{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}})),Ie=(0,r.Pi)((0,o.forwardRef)(((e,t)=>{let{item:n,parentItem:r,style:a,...i}=e;const l=m(i,n,r),s=n.data||n,{Background:c}=s;return o.createElement(ye,{ref:t,style:{...(0,g.g)(n),backgroundColor:c,...a},...l},o.createElement(O,{height:"50%",width:"50%"}))}))),be=(0,r.Pi)((e=>{let{itemType:t,item:n,parentItem:r,getZIndexOfItem:a,events:i,renderItem:l,...s}=e;const u=(0,o.useRef)(null);function m(){return{item:n,parentItem:r,zIndex:a(n),getZIndexOfItem:a,ref:l?u:void 0,...i,...s}}const g=function(){switch(t){case c.ItemType.Activity:return o.createElement(K,{...m()});case c.ItemType.Area:return o.createElement(v,{...m()});case c.ItemType.Arrow:return o.createElement(k,{...m()});case c.ItemType.Chart:case d:return o.createElement(E,{...m()});case c.ItemType.Group:return o.createElement(z,{...m()});case c.ItemType.Image:return o.createElement(_,{...m()});case c.ItemType.Pin:return o.createElement(ee,{...m()});case c.ItemType.RichContent:return o.createElement(oe,{...m()});case c.ItemType.Svg:return o.createElement(ie,{...m()});case c.ItemType.Text:return o.createElement(ge,{...m()});case c.ItemType.WidgetAudio:{var e;const t=null!==(e=n.data)&&void 0!==e?e:n;return t.DisplayPlayer&&!t.IsBackground?o.createElement(we,{...m()}):null}case c.ItemType.WidgetVideo:return o.createElement(Ie,{...m()});default:return console.error("tried to render a fake item for the unknown item type ".concat(t)),null}}();return l?l({item:n,itemId:n.Id,itemType:t,itemNode:g,itemRef:u,parentItem:r}):g}));var ke;!function(e){e.RichContents="richContents",e.WidgetsAudio="widgetsAudio",e.WidgetsVideo="widgetsVideo",e.Charts="charts",e.Areas="areas",e.Groups="groups",e.Images="images",e.Pins="pins",e.Svgs="svgs",e.Texts="texts",e.Activities="activities",e.Arrows="arrows"}(ke||(ke={}));const Ce=e=>{if("allItems"in e&&e.allItems)return e.allItems;const t=[];return Object.values(ke).forEach((n=>{const o=e[n];o&&t.push(...o)})),t},Ae=[];function Te(e,t){var n;return null!==(n=null===e||void 0===e?void 0:e.filter((e=>e.data?!e.data.IdGroup:!e.IdGroup)).map((e=>({item:e,itemType:t}))))&&void 0!==n?n:Ae}const Se=(0,r.Pi)((e=>{var t,n,r,i;let{canBeTranslated:c=!0,delta:d,documentConfig:u,getZIndexOfItem:m=(()=>{}),itemStyles:g,onBackgroundClick:h,onItemClick:p,onItemMouseOut:v,onItemMouseOver:f,renderItem:w,showBackgroundColor:y=!0,showBackgroundImage:I=!0,slide:b,t:k}=e;const[C,A]=(0,o.useState)(Ce(b)),T=((e,t)=>{if(t)return"data"in e?e.data.BackgroundColor:e.BackgroundColor})(b,y),S=((e,t)=>{var n,o,r;if(t)return"Background"in e?e.Background:null!==(n=null===(o=e.background)||void 0===o?void 0:o.CurrentBackgroundImage)&&void 0!==n?n:null===(r=e.background)||void 0===r?void 0:r.currentBackgroundImage})(b,I),x=(e=>{var t;return"data"in e?null!==(t=e.data.backgroundSize)&&void 0!==t?t:e.data.SizeBackground:e.SizeBackground?e.SizeBackground:e.BackgroundHeight||e.BackgroundWidth?{Width:e.BackgroundWidth,Height:e.BackgroundHeight}:{Width:e.Width,Height:e.Height}})(b),E=(e=>{var t;return"data"in e?null!==(t=e.data.backgroundPosition)&&void 0!==t?t:e.data.PositionBackground:e.PositionBackground?e.PositionBackground:e.PositionBackgroundLeft||e.PositionBackgroundTop?{PositionTop:e.PositionBackgroundTop,PositionLeft:e.PositionBackgroundLeft}:e.PositionBackground})(b),B="data"in b?b.data.OpacityBackground:b.OpacityBackground,z={width:parseFloat(null!==(t=("data"in b?b.data.Size:null!==(n=b.Size)&&void 0!==n?n:b).Width)&&void 0!==t?t:"0"),height:parseFloat(null!==(r=("data"in b?b.data.Size:null!==(i=b.Size)&&void 0!==i?i:b).Height)&&void 0!==r?r:"0")},R=(0,o.useMemo)((()=>({onClick:p,onMouseOver:f,onMouseOut:v})),[p,v,f]),F=(e=>Object.values(ke).reduce(((t,n)=>{var o,r;return t+(null!==(o=null===(r=e[n])||void 0===r?void 0:r.length)&&void 0!==o?o:0)}),0))(b);return(0,o.useEffect)((()=>{A(Ce(b))}),[F,b]),o.createElement(s.Provider,{value:{slideItems:C,delta:d,slideSize:z}},o.createElement(l,{key:b.Id,backgroundImageOpacity:B,backgroundImage:S,backgroundImageSize:x,backgroundImagePosition:E,backgroundColor:T,onClick:h}),[...Te(b.activities,a.ItemType.Activity),...Te(b.areas,a.ItemType.Area),...Te(b.arrows,a.ItemType.Arrow),...Te(b.charts,a.ItemType.Chart),...Te(b.groups,a.ItemType.Group),...Te(b.images,a.ItemType.Image),...Te(b.pins,a.ItemType.Pin),...Te(b.richContents,a.ItemType.RichContent),...Te(b.svgs,a.ItemType.Svg),...Te(b.texts,a.ItemType.Text),...Te(b.widgetsAudio,a.ItemType.WidgetAudio),...Te(b.widgetsVideo,a.ItemType.WidgetVideo)].sort(((e,t)=>P(m,e.item,t.item))).map((e=>{let{item:t,itemType:n}=e;return o.createElement(be,{key:t.Id,itemType:n,item:t,parentItem:void 0,events:R,getZIndexOfItem:m,canBeTranslated:c,documentConfig:u,style:null===g||void 0===g?void 0:g[t.Id],renderItem:w,t:k})})))})),xe=Se}}]);
//# sourceMappingURL=https://statics-view.genially.com/view/static/js/slideThumbnail.d437d98b.chunk.js.map