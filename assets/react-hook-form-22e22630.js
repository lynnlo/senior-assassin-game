import{a as F}from"./react-12317535.js";var ye=e=>e.type==="checkbox",ie=e=>e instanceof Date,I=e=>e==null;const nr=e=>typeof e=="object";var U=e=>!I(e)&&!Array.isArray(e)&&nr(e)&&!ie(e),ar=e=>U(e)&&e.target?ye(e.target)?e.target.checked:e.target.value:e,Or=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,ur=(e,i)=>e.has(Or(i)),ue=e=>Array.isArray(e)?e.filter(Boolean):[],E=e=>e===void 0,c=(e,i,r)=>{if(!i||!U(e))return r;const n=ue(i.split(/[,[\].]+?/)).reduce((s,l)=>I(s)?s:s[l],e);return E(n)||n===e?E(e[i])?r:e[i]:n};const he={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},K={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Y={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},lr=F.createContext(null),Ve=()=>F.useContext(lr),Gr=e=>{const{children:i,...r}=e;return F.createElement(lr.Provider,{value:r},i)};var or=(e,i,r,n=!0)=>{const s={defaultValues:i._defaultValues};for(const l in e)Object.defineProperty(s,l,{get:()=>{const d=l;return i._proxyFormState[d]!==K.all&&(i._proxyFormState[d]=!n||K.all),r&&(r[d]=!0),e[d]}});return s},q=e=>U(e)&&!Object.keys(e).length,cr=(e,i,r,n)=>{r(e);const{name:s,...l}=e;return q(l)||Object.keys(l).length>=Object.keys(i).length||Object.keys(l).find(d=>i[d]===(!n||K.all))},$=e=>Array.isArray(e)?e:[e],fr=(e,i,r)=>r&&i?e===i:!e||!i||e===i||$(e).some(n=>n&&(n.startsWith(i)||i.startsWith(n)));function be(e){const i=F.useRef(e);i.current=e,F.useEffect(()=>{const r=!e.disabled&&i.current.subject.subscribe({next:i.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}function Rr(e){const i=Ve(),{control:r=i.control,disabled:n,name:s,exact:l}=e||{},[d,g]=F.useState(r._formState),m=F.useRef(!0),v=F.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),D=F.useRef(s);return D.current=s,be({disabled:n,next:R=>m.current&&fr(D.current,R.name,l)&&cr(R,v.current,r._updateFormState)&&g({...r._formState,...R}),subject:r._subjects.state}),F.useEffect(()=>{m.current=!0;const R=r._proxyFormState.isDirty&&r._getDirty();return R!==r._formState.isDirty&&r._subjects.state.next({isDirty:R}),v.current.isValid&&r._updateValid(!0),()=>{m.current=!1}},[r]),or(d,r,v.current,!1)}var Q=e=>typeof e=="string",dr=(e,i,r,n,s)=>Q(e)?(n&&i.watch.add(e),c(r,e,s)):Array.isArray(e)?e.map(l=>(n&&i.watch.add(l),c(r,l))):(n&&(i.watchAll=!0),r),Lr=e=>{const i=e.constructor&&e.constructor.prototype;return U(i)&&i.hasOwnProperty("isPrototypeOf")},qe=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function W(e){let i;const r=Array.isArray(e);if(e instanceof Date)i=new Date(e);else if(e instanceof Set)i=new Set(e);else if(!(qe&&(e instanceof Blob||e instanceof FileList))&&(r||U(e)))if(i=r?[]:{},!Array.isArray(e)&&!Lr(e))i=e;else for(const n in e)i[n]=W(e[n]);else return e;return i}function Tr(e){const i=Ve(),{control:r=i.control,name:n,defaultValue:s,disabled:l,exact:d}=e||{},g=F.useRef(n);g.current=n,be({disabled:l,subject:r._subjects.watch,next:D=>{fr(g.current,D.name,d)&&v(W(dr(g.current,r._names,D.values||r._formValues,!1,s)))}});const[m,v]=F.useState(r._getWatch(n,s));return F.useEffect(()=>r._removeUnmounted()),m}function zr(e){const i=Ve(),{name:r,control:n=i.control,shouldUnregister:s}=e,l=ur(n._names.array,r),d=Tr({control:n,name:r,defaultValue:c(n._formValues,r,c(n._defaultValues,r,e.defaultValue)),exact:!0}),g=Rr({control:n,name:r}),m=F.useRef(n.register(r,{...e.rules,value:d}));return F.useEffect(()=>{const v=(D,R)=>{const V=c(n._fields,D);V&&(V._f.mount=R)};return v(r,!0),()=>{const D=n._options.shouldUnregister||s;(l?D&&!n._stateFlags.action:D)?n.unregister(r):v(r,!1)}},[r,n,l,s]),{field:{name:r,value:d,onChange:F.useCallback(v=>m.current.onChange({target:{value:ar(v),name:r},type:he.CHANGE}),[r]),onBlur:F.useCallback(()=>m.current.onBlur({target:{value:c(n._formValues,r),name:r},type:he.BLUR}),[r,n]),ref:v=>{const D=c(n._fields,r);D&&v&&(D._f.ref={focus:()=>v.focus(),select:()=>v.select(),setCustomValidity:R=>v.setCustomValidity(R),reportValidity:()=>v.reportValidity()})}},formState:g,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!c(g.errors,r)},isDirty:{enumerable:!0,get:()=>!!c(g.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!c(g.touchedFields,r)},error:{enumerable:!0,get:()=>c(g.errors,r)}})}}var Ur=(e,i,r,n,s)=>i?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[n]:s||!0}}:{},We=e=>/^\w*$/.test(e),yr=e=>ue(e.replace(/["|']|\]/g,"").split(/\.|\[/));function k(e,i,r){let n=-1;const s=We(i)?[i]:yr(i),l=s.length,d=l-1;for(;++n<l;){const g=s[n];let m=r;if(n!==d){const v=e[g];m=U(v)||Array.isArray(v)?v:isNaN(+s[n+1])?{}:[]}e[g]=m,e=e[g]}return e}const _e=(e,i,r)=>{for(const n of r||Object.keys(e)){const s=c(e,n);if(s){const{_f:l,...d}=s;if(l&&i(l.name)){if(l.ref.focus){l.ref.focus();break}else if(l.refs&&l.refs[0].focus){l.refs[0].focus();break}}else U(d)&&_e(d,i)}}};var Z=()=>{const e=typeof performance>"u"?Date.now():performance.now()*1e3;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,i=>{const r=(Math.random()*16+e)%16|0;return(i=="x"?r:r&3|8).toString(16)})},De=(e,i,r={})=>r.shouldFocus||E(r.shouldFocus)?r.focusName||`${e}.${E(r.focusIndex)?i:r.focusIndex}.`:"",Ne=e=>({isOnSubmit:!e||e===K.onSubmit,isOnBlur:e===K.onBlur,isOnChange:e===K.onChange,isOnAll:e===K.all,isOnTouch:e===K.onTouched}),Pe=(e,i,r)=>!r&&(i.watchAll||i.watch.has(e)||[...i.watch].some(n=>e.startsWith(n)&&/^\.\w+/.test(e.slice(n.length)))),gr=(e,i,r)=>{const n=ue(c(e,r));return k(n,"root",i[r]),k(e,r,n),e},ne=e=>typeof e=="boolean",$e=e=>e.type==="file",ae=e=>typeof e=="function",ve=e=>{if(!qe)return!1;const i=e?e.ownerDocument:0;return e instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},ge=e=>Q(e)||F.isValidElement(e),He=e=>e.type==="radio",Ae=e=>e instanceof RegExp;const Ze={value:!1,isValid:!1},er={value:!0,isValid:!0};var hr=e=>{if(Array.isArray(e)){if(e.length>1){const i=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:i,isValid:!!i.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!E(e[0].attributes.value)?E(e[0].value)||e[0].value===""?er:{value:e[0].value,isValid:!0}:er:Ze}return Ze};const rr={isValid:!1,value:null};var _r=e=>Array.isArray(e)?e.reduce((i,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:i,rr):rr;function tr(e,i,r="validate"){if(ge(e)||Array.isArray(e)&&e.every(ge)||ne(e)&&!e)return{type:r,message:ge(e)?e:"",ref:i}}var se=e=>U(e)&&!Ae(e)?e:{value:e,message:""},je=async(e,i,r,n,s)=>{const{ref:l,refs:d,required:g,maxLength:m,minLength:v,min:D,max:R,pattern:V,validate:b,name:N,valueAsNumber:le,mount:te,disabled:oe}=e._f,x=c(i,N);if(!te||oe)return{};const j=d?d[0]:l,G=S=>{n&&j.reportValidity&&(j.setCustomValidity(ne(S)?"":S||""),j.reportValidity())},y={},A=He(l),p=ye(l),L=A||p,B=(le||$e(l))&&E(l.value)&&E(x)||ve(l)&&l.value===""||x===""||Array.isArray(x)&&!x.length,z=Ur.bind(null,N,r,y),X=(S,w,O,P=Y.maxLength,H=Y.minLength)=>{const J=S?w:O;y[N]={type:S?P:H,message:J,ref:l,...z(S?P:H,J)}};if(s?!Array.isArray(x)||!x.length:g&&(!L&&(B||I(x))||ne(x)&&!x||p&&!hr(d).isValid||A&&!_r(d).isValid)){const{value:S,message:w}=ge(g)?{value:!!g,message:g}:se(g);if(S&&(y[N]={type:Y.required,message:w,ref:j,...z(Y.required,w)},!r))return G(w),y}if(!B&&(!I(D)||!I(R))){let S,w;const O=se(R),P=se(D);if(!I(x)&&!isNaN(x)){const H=l.valueAsNumber||x&&+x;I(O.value)||(S=H>O.value),I(P.value)||(w=H<P.value)}else{const H=l.valueAsDate||new Date(x),J=fe=>new Date(new Date().toDateString()+" "+fe),ee=l.type=="time",ce=l.type=="week";Q(O.value)&&x&&(S=ee?J(x)>J(O.value):ce?x>O.value:H>new Date(O.value)),Q(P.value)&&x&&(w=ee?J(x)<J(P.value):ce?x<P.value:H<new Date(P.value))}if((S||w)&&(X(!!S,O.message,P.message,Y.max,Y.min),!r))return G(y[N].message),y}if((m||v)&&!B&&(Q(x)||s&&Array.isArray(x))){const S=se(m),w=se(v),O=!I(S.value)&&x.length>S.value,P=!I(w.value)&&x.length<w.value;if((O||P)&&(X(O,S.message,w.message),!r))return G(y[N].message),y}if(V&&!B&&Q(x)){const{value:S,message:w}=se(V);if(Ae(S)&&!x.match(S)&&(y[N]={type:Y.pattern,message:w,ref:l,...z(Y.pattern,w)},!r))return G(w),y}if(b){if(ae(b)){const S=await b(x,i),w=tr(S,j);if(w&&(y[N]={...w,...z(Y.validate,w.message)},!r))return G(w.message),y}else if(U(b)){let S={};for(const w in b){if(!q(S)&&!r)break;const O=tr(await b[w](x,i),j,w);O&&(S={...O,...z(w,O.message)},G(O.message),r&&(y[N]=S))}if(!q(S)&&(y[N]={ref:j,...S},!r))return y}}return G(!0),y};function ke(e,i){return[...e,...$(i)]}var Ee=e=>Array.isArray(e)?e.map(()=>{}):void 0;function Ce(e,i,r){return[...e.slice(0,i),...$(r),...e.slice(i)]}var Oe=(e,i,r)=>Array.isArray(e)?(E(e[r])&&(e[r]=void 0),e.splice(r,0,e.splice(i,1)[0]),e):[];function Re(e,i){return[...$(i),...$(e)]}function Mr(e,i){let r=0;const n=[...e];for(const s of i)n.splice(s-r,1),r++;return ue(n).length?n:[]}var Le=(e,i)=>E(i)?[]:Mr(e,$(i).sort((r,n)=>r-n)),Te=(e,i,r)=>{e[i]=[e[r],e[r]=e[i]][0]};function Br(e,i){const r=i.slice(0,-1).length;let n=0;for(;n<r;)e=E(e)?n++:e[i[n++]];return e}function Ir(e){for(const i in e)if(!E(e[i]))return!1;return!0}function M(e,i){const r=Array.isArray(i)?i:We(i)?[i]:yr(i),n=r.length===1?e:Br(e,r),s=r.length-1,l=r[s];return n&&delete n[l],s!==0&&(U(n)&&q(n)||Array.isArray(n)&&Ir(n))&&M(e,r.slice(0,-1)),e}var sr=(e,i,r)=>(e[i]=r,e);function Jr(e){const i=Ve(),{control:r=i.control,name:n,keyName:s="id",shouldUnregister:l}=e,[d,g]=F.useState(r._getFieldArray(n)),m=F.useRef(r._getFieldArray(n).map(Z)),v=F.useRef(d),D=F.useRef(n),R=F.useRef(!1);D.current=n,v.current=d,r._names.array.add(n),e.rules&&r.register(n,e.rules),be({next:({values:y,name:A})=>{if(A===D.current||!A){const p=c(y,D.current);Array.isArray(p)&&(g(p),m.current=p.map(Z))}},subject:r._subjects.array});const V=F.useCallback(y=>{R.current=!0,r._updateFieldArray(n,y)},[r,n]),b=(y,A)=>{const p=$(W(y)),L=ke(r._getFieldArray(n),p);r._names.focus=De(n,L.length-1,A),m.current=ke(m.current,p.map(Z)),V(L),g(L),r._updateFieldArray(n,L,ke,{argA:Ee(y)})},N=(y,A)=>{const p=$(W(y)),L=Re(r._getFieldArray(n),p);r._names.focus=De(n,0,A),m.current=Re(m.current,p.map(Z)),V(L),g(L),r._updateFieldArray(n,L,Re,{argA:Ee(y)})},le=y=>{const A=Le(r._getFieldArray(n),y);m.current=Le(m.current,y),V(A),g(A),r._updateFieldArray(n,A,Le,{argA:y})},te=(y,A,p)=>{const L=$(W(A)),B=Ce(r._getFieldArray(n),y,L);r._names.focus=De(n,y,p),m.current=Ce(m.current,y,L.map(Z)),V(B),g(B),r._updateFieldArray(n,B,Ce,{argA:y,argB:Ee(A)})},oe=(y,A)=>{const p=r._getFieldArray(n);Te(p,y,A),Te(m.current,y,A),V(p),g(p),r._updateFieldArray(n,p,Te,{argA:y,argB:A},!1)},x=(y,A)=>{const p=r._getFieldArray(n);Oe(p,y,A),Oe(m.current,y,A),V(p),g(p),r._updateFieldArray(n,p,Oe,{argA:y,argB:A},!1)},j=(y,A)=>{const p=W(A),L=sr(r._getFieldArray(n),y,p);m.current=[...L].map((B,z)=>!B||z===y?Z():m.current[z]),V(L),g([...L]),r._updateFieldArray(n,L,sr,{argA:y,argB:p},!0,!1)},G=y=>{const A=$(W(y));m.current=A.map(Z),V([...A]),g([...A]),r._updateFieldArray(n,[...A],p=>p,{},!0,!1)};return F.useEffect(()=>{if(r._stateFlags.action=!1,Pe(n,r._names)&&r._subjects.state.next({}),R.current&&(!Ne(r._options.mode).isOnSubmit||r._formState.isSubmitted))if(r._options.resolver)r._executeSchema([n]).then(y=>{const A=c(y.errors,n),p=c(r._formState.errors,n);(p?!A&&p.type:A&&A.type)&&(A?k(r._formState.errors,n,A):M(r._formState.errors,n),r._subjects.state.next({errors:r._formState.errors}))});else{const y=c(r._fields,n);y&&y._f&&je(y,r._formValues,r._options.criteriaMode===K.all,r._options.shouldUseNativeValidation,!0).then(A=>!q(A)&&r._subjects.state.next({errors:gr(r._formState.errors,A,n)}))}r._subjects.watch.next({name:n,values:r._formValues}),r._names.focus&&_e(r._fields,y=>!!y&&y.startsWith(r._names.focus||"")),r._names.focus="",r._updateValid()},[d,n,r]),F.useEffect(()=>(!c(r._formValues,n)&&r._updateFieldArray(n),()=>{(r._options.shouldUnregister||l)&&r.unregister(n)}),[n,r,s,l]),{swap:F.useCallback(oe,[V,n,r]),move:F.useCallback(x,[V,n,r]),prepend:F.useCallback(N,[V,n,r]),append:F.useCallback(b,[V,n,r]),remove:F.useCallback(le,[V,n,r]),insert:F.useCallback(te,[V,n,r]),update:F.useCallback(j,[V,n,r]),replace:F.useCallback(G,[V,n,r]),fields:F.useMemo(()=>d.map((y,A)=>({...y,[s]:m.current[A]||Z()})),[d,s])}}function Ue(){let e=[];return{get observers(){return e},next:s=>{for(const l of e)l.next(s)},subscribe:s=>(e.push(s),{unsubscribe:()=>{e=e.filter(l=>l!==s)}}),unsubscribe:()=>{e=[]}}}var me=e=>I(e)||!nr(e);function re(e,i){if(me(e)||me(i))return e===i;if(ie(e)&&ie(i))return e.getTime()===i.getTime();const r=Object.keys(e),n=Object.keys(i);if(r.length!==n.length)return!1;for(const s of r){const l=e[s];if(!n.includes(s))return!1;if(s!=="ref"){const d=i[s];if(ie(l)&&ie(d)||U(l)&&U(d)||Array.isArray(l)&&Array.isArray(d)?!re(l,d):l!==d)return!1}}return!0}var vr=e=>e.type==="select-multiple",Nr=e=>He(e)||ye(e),Me=e=>ve(e)&&e.isConnected,Ar=e=>{for(const i in e)if(ae(e[i]))return!0;return!1};function Fe(e,i={}){const r=Array.isArray(e);if(U(e)||r)for(const n in e)Array.isArray(e[n])||U(e[n])&&!Ar(e[n])?(i[n]=Array.isArray(e[n])?[]:{},Fe(e[n],i[n])):I(e[n])||(i[n]=!0);return i}function mr(e,i,r){const n=Array.isArray(e);if(U(e)||n)for(const s in e)Array.isArray(e[s])||U(e[s])&&!Ar(e[s])?E(i)||me(r[s])?r[s]=Array.isArray(e[s])?Fe(e[s],[]):{...Fe(e[s])}:mr(e[s],I(i)?{}:i[s],r[s]):re(e[s],i[s])?delete r[s]:r[s]=!0;return r}var Be=(e,i)=>mr(e,i,Fe(i)),Fr=(e,{valueAsNumber:i,valueAsDate:r,setValueAs:n})=>E(e)?e:i?e===""?NaN:e&&+e:r&&Q(e)?new Date(e):n?n(e):e;function Ie(e){const i=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):i.disabled))return $e(i)?i.files:He(i)?_r(e.refs).value:vr(i)?[...i.selectedOptions].map(({value:r})=>r):ye(i)?hr(e.refs).value:Fr(E(i.value)?e.ref.value:i.value,e)}var Pr=(e,i,r,n)=>{const s={};for(const l of e){const d=c(i,l);d&&k(s,l,d._f)}return{criteriaMode:r,names:[...e],fields:s,shouldUseNativeValidation:n}},de=e=>E(e)?e:Ae(e)?e.source:U(e)?Ae(e.value)?e.value.source:e.value:e,jr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function ir(e,i,r){const n=c(e,r);if(n||We(r))return{error:n,name:r};const s=r.split(".");for(;s.length;){const l=s.join("."),d=c(i,l),g=c(e,l);if(d&&!Array.isArray(d)&&r!==l)return{name:r};if(g&&g.type)return{name:l,error:g};s.pop()}return{name:r}}var qr=(e,i,r,n,s)=>s.isOnAll?!1:!r&&s.isOnTouch?!(i||e):(r?n.isOnBlur:s.isOnBlur)?!e:(r?n.isOnChange:s.isOnChange)?e:!0,Wr=(e,i)=>!ue(c(e,i)).length&&M(e,i);const $r={mode:K.onSubmit,reValidateMode:K.onChange,shouldFocusError:!0};function Hr(e={},i){let r={...$r,...e};const n=e.resetOptions&&e.resetOptions.keepDirtyValues;let s={submitCount:0,isDirty:!1,isLoading:!0,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},l={},d=U(r.defaultValues)||U(r.values)?W(r.defaultValues||r.values)||{}:{},g=r.shouldUnregister?{}:W(d),m={action:!1,mount:!1,watch:!1},v={mount:new Set,unMount:new Set,array:new Set,watch:new Set},D,R=0;const V={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},b={watch:Ue(),array:Ue(),state:Ue()},N=Ne(r.mode),le=Ne(r.reValidateMode),te=r.criteriaMode===K.all,oe=t=>a=>{clearTimeout(R),R=window.setTimeout(t,a)},x=async t=>{if(V.isValid||t){const a=r.resolver?q((await B()).errors):await X(l,!0);a!==s.isValid&&b.state.next({isValid:a})}},j=t=>V.isValidating&&b.state.next({isValidating:t}),G=(t,a=[],u,f,h=!0,o=!0)=>{if(f&&u){if(m.action=!0,o&&Array.isArray(c(l,t))){const _=u(c(l,t),f.argA,f.argB);h&&k(l,t,_)}if(o&&Array.isArray(c(s.errors,t))){const _=u(c(s.errors,t),f.argA,f.argB);h&&k(s.errors,t,_),Wr(s.errors,t)}if(V.touchedFields&&o&&Array.isArray(c(s.touchedFields,t))){const _=u(c(s.touchedFields,t),f.argA,f.argB);h&&k(s.touchedFields,t,_)}V.dirtyFields&&(s.dirtyFields=Be(d,g)),b.state.next({name:t,isDirty:w(t,a),dirtyFields:s.dirtyFields,errors:s.errors,isValid:s.isValid})}else k(g,t,a)},y=(t,a)=>{k(s.errors,t,a),b.state.next({errors:s.errors})},A=(t,a,u,f)=>{const h=c(l,t);if(h){const o=c(g,t,E(u)?c(d,t):u);E(o)||f&&f.defaultChecked||a?k(g,t,a?o:Ie(h._f)):H(t,o),m.mount&&x()}},p=(t,a,u,f,h)=>{let o=!1,_=!1;const T={name:t};if(!u||f){V.isDirty&&(_=s.isDirty,s.isDirty=T.isDirty=w(),o=_!==T.isDirty);const C=re(c(d,t),a);_=c(s.dirtyFields,t),C?M(s.dirtyFields,t):k(s.dirtyFields,t,!0),T.dirtyFields=s.dirtyFields,o=o||V.dirtyFields&&_!==!C}if(u){const C=c(s.touchedFields,t);C||(k(s.touchedFields,t,u),T.touchedFields=s.touchedFields,o=o||V.touchedFields&&C!==u)}return o&&h&&b.state.next(T),o?T:{}},L=(t,a,u,f)=>{const h=c(s.errors,t),o=V.isValid&&ne(a)&&s.isValid!==a;if(e.delayError&&u?(D=oe(()=>y(t,u)),D(e.delayError)):(clearTimeout(R),D=null,u?k(s.errors,t,u):M(s.errors,t)),(u?!re(h,u):h)||!q(f)||o){const _={...f,...o&&ne(a)?{isValid:a}:{},errors:s.errors,name:t};s={...s,..._},b.state.next(_)}j(!1)},B=async t=>await r.resolver(g,r.context,Pr(t||v.mount,l,r.criteriaMode,r.shouldUseNativeValidation)),z=async t=>{const{errors:a}=await B();if(t)for(const u of t){const f=c(a,u);f?k(s.errors,u,f):M(s.errors,u)}else s.errors=a;return a},X=async(t,a,u={valid:!0})=>{for(const f in t){const h=t[f];if(h){const{_f:o,..._}=h;if(o){const T=v.array.has(o.name),C=await je(h,g,te,r.shouldUseNativeValidation,T);if(C[o.name]&&(u.valid=!1,a))break;!a&&(c(C,o.name)?T?gr(s.errors,C,o.name):k(s.errors,o.name,C[o.name]):M(s.errors,o.name))}_&&await X(_,a,u)}}return u.valid},S=()=>{for(const t of v.unMount){const a=c(l,t);a&&(a._f.refs?a._f.refs.every(u=>!Me(u)):!Me(a._f.ref))&&xe(t)}v.unMount=new Set},w=(t,a)=>(t&&a&&k(g,t,a),!re(Ke(),d)),O=(t,a,u)=>dr(t,v,{...m.mount?g:E(a)?d:Q(t)?{[t]:a}:a},u,a),P=t=>ue(c(m.mount?g:d,t,e.shouldUnregister?c(d,t,[]):[])),H=(t,a,u={})=>{const f=c(l,t);let h=a;if(f){const o=f._f;o&&(!o.disabled&&k(g,t,Fr(a,o)),h=ve(o.ref)&&I(a)?"":a,vr(o.ref)?[...o.ref.options].forEach(_=>_.selected=h.includes(_.value)):o.refs?ye(o.ref)?o.refs.length>1?o.refs.forEach(_=>(!_.defaultChecked||!_.disabled)&&(_.checked=Array.isArray(h)?!!h.find(T=>T===_.value):h===_.value)):o.refs[0]&&(o.refs[0].checked=!!h):o.refs.forEach(_=>_.checked=_.value===h):$e(o.ref)?o.ref.value="":(o.ref.value=h,o.ref.type||b.watch.next({name:t})))}(u.shouldDirty||u.shouldTouch)&&p(t,h,u.shouldTouch,u.shouldDirty,!0),u.shouldValidate&&fe(t)},J=(t,a,u)=>{for(const f in a){const h=a[f],o=`${t}.${f}`,_=c(l,o);(v.array.has(t)||!me(h)||_&&!_._f)&&!ie(h)?J(o,h,u):H(o,h,u)}},ee=(t,a,u={})=>{const f=c(l,t),h=v.array.has(t),o=W(a);k(g,t,o),h?(b.array.next({name:t,values:g}),(V.isDirty||V.dirtyFields)&&u.shouldDirty&&b.state.next({name:t,dirtyFields:Be(d,g),isDirty:w(t,o)})):f&&!f._f&&!I(o)?J(t,o,u):H(t,o,u),Pe(t,v)&&b.state.next({}),b.watch.next({name:t}),!m.mount&&i()},ce=async t=>{const a=t.target;let u=a.name;const f=c(l,u),h=()=>a.type?Ie(f._f):ar(t);if(f){let o,_;const T=h(),C=t.type===he.BLUR||t.type===he.FOCUS_OUT,kr=!jr(f._f)&&!r.resolver&&!c(s.errors,u)&&!f._f.deps||qr(C,c(s.touchedFields,u),s.isSubmitted,le,N),we=Pe(u,v,C);k(g,u,T),C?(f._f.onBlur&&f._f.onBlur(t),D&&D(0)):f._f.onChange&&f._f.onChange(t);const Se=p(u,T,C,!1),Er=!q(Se)||we;if(!C&&b.watch.next({name:u,type:t.type}),kr)return V.isValid&&x(),Er&&b.state.next({name:u,...we?{}:Se});if(!C&&we&&b.state.next({}),j(!0),r.resolver){const{errors:Xe}=await B([u]),Cr=ir(s.errors,l,u),Ye=ir(Xe,l,Cr.name||u);o=Ye.error,u=Ye.name,_=q(Xe)}else o=(await je(f,g,te,r.shouldUseNativeValidation))[u],o?_=!1:V.isValid&&(_=await X(l,!0));f._f.deps&&fe(f._f.deps),L(u,_,o,Se)}},fe=async(t,a={})=>{let u,f;const h=$(t);if(j(!0),r.resolver){const o=await z(E(t)?t:h);u=q(o),f=t?!h.some(_=>c(o,_)):u}else t?(f=(await Promise.all(h.map(async o=>{const _=c(l,o);return await X(_&&_._f?{[o]:_}:_)}))).every(Boolean),!(!f&&!s.isValid)&&x()):f=u=await X(l);return b.state.next({...!Q(t)||V.isValid&&u!==s.isValid?{}:{name:t},...r.resolver||!t?{isValid:u}:{},errors:s.errors,isValidating:!1}),a.shouldFocus&&!f&&_e(l,o=>o&&c(s.errors,o),t?h:v.mount),f},Ke=t=>{const a={...d,...m.mount?g:{}};return E(t)?a:Q(t)?c(a,t):t.map(u=>c(a,u))},Ge=(t,a)=>({invalid:!!c((a||s).errors,t),isDirty:!!c((a||s).dirtyFields,t),isTouched:!!c((a||s).touchedFields,t),error:c((a||s).errors,t)}),Vr=t=>{t&&$(t).forEach(a=>M(s.errors,a)),b.state.next({errors:t?s.errors:{}})},br=(t,a,u)=>{const f=(c(l,t,{_f:{}})._f||{}).ref;k(s.errors,t,{...a,ref:f}),b.state.next({name:t,errors:s.errors,isValid:!1}),u&&u.shouldFocus&&f&&f.focus&&f.focus()},xr=(t,a)=>ae(t)?b.watch.subscribe({next:u=>t(O(void 0,a),u)}):O(t,a,!0),xe=(t,a={})=>{for(const u of t?$(t):v.mount)v.mount.delete(u),v.array.delete(u),c(l,u)&&(a.keepValue||(M(l,u),M(g,u)),!a.keepError&&M(s.errors,u),!a.keepDirty&&M(s.dirtyFields,u),!a.keepTouched&&M(s.touchedFields,u),!r.shouldUnregister&&!a.keepDefaultValue&&M(d,u));b.watch.next({}),b.state.next({...s,...a.keepDirty?{isDirty:w()}:{}}),!a.keepIsValid&&x()},pe=(t,a={})=>{let u=c(l,t);const f=ne(a.disabled);return k(l,t,{...u||{},_f:{...u&&u._f?u._f:{ref:{name:t}},name:t,mount:!0,...a}}),v.mount.add(t),u?f&&k(g,t,a.disabled?void 0:c(g,t,Ie(u._f))):A(t,!0,a.value),{...f?{disabled:a.disabled}:{},...r.shouldUseNativeValidation?{required:!!a.required,min:de(a.min),max:de(a.max),minLength:de(a.minLength),maxLength:de(a.maxLength),pattern:de(a.pattern)}:{},name:t,onChange:ce,onBlur:ce,ref:h=>{if(h){pe(t,a),u=c(l,t);const o=E(h.value)&&h.querySelectorAll&&h.querySelectorAll("input,select,textarea")[0]||h,_=Nr(o),T=u._f.refs||[];if(_?T.find(C=>C===o):o===u._f.ref)return;k(l,t,{_f:{...u._f,..._?{refs:[...T.filter(Me),o,...Array.isArray(c(d,t))?[{}]:[]],ref:{type:o.type,name:t}}:{ref:o}}}),A(t,!1,void 0,o)}else u=c(l,t,{}),u._f&&(u._f.mount=!1),(r.shouldUnregister||a.shouldUnregister)&&!(ur(v.array,t)&&m.action)&&v.unMount.add(t)}}},ze=()=>r.shouldFocusError&&_e(l,t=>t&&c(s.errors,t),v.mount),pr=(t,a)=>async u=>{u&&(u.preventDefault&&u.preventDefault(),u.persist&&u.persist());let f=W(g);if(b.state.next({isSubmitting:!0}),r.resolver){const{errors:h,values:o}=await B();s.errors=h,f=o}else await X(l);M(s.errors,"root"),q(s.errors)?(b.state.next({errors:{}}),await t(f,u)):(a&&await a({...s.errors},u),ze()),b.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:q(s.errors),submitCount:s.submitCount+1,errors:s.errors})},wr=(t,a={})=>{c(l,t)&&(E(a.defaultValue)?ee(t,c(d,t)):(ee(t,a.defaultValue),k(d,t,a.defaultValue)),a.keepTouched||M(s.touchedFields,t),a.keepDirty||(M(s.dirtyFields,t),s.isDirty=a.defaultValue?w(t,c(d,t)):w()),a.keepError||(M(s.errors,t),V.isValid&&x()),b.state.next({...s}))},Je=(t,a={})=>{const u=t||d,f=W(u),h=t&&!q(t)?f:d;if(a.keepDefaultValues||(d=u),!a.keepValues){if(a.keepDirtyValues||n)for(const o of v.mount)c(s.dirtyFields,o)?k(h,o,c(g,o)):ee(o,c(h,o));else{if(qe&&E(t))for(const o of v.mount){const _=c(l,o);if(_&&_._f){const T=Array.isArray(_._f.refs)?_._f.refs[0]:_._f.ref;if(ve(T)){const C=T.closest("form");if(C){C.reset();break}}}}l={}}g=e.shouldUnregister?a.keepDefaultValues?W(d):{}:f,b.array.next({values:h}),b.watch.next({values:h})}v={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!m.mount&&i(),m.mount=!V.isValid||!!a.keepIsValid,m.watch=!!e.shouldUnregister,b.state.next({submitCount:a.keepSubmitCount?s.submitCount:0,isDirty:a.keepDirty||a.keepDirtyValues?s.isDirty:!!(a.keepDefaultValues&&!re(t,d)),isSubmitted:a.keepIsSubmitted?s.isSubmitted:!1,dirtyFields:a.keepDirty||a.keepDirtyValues?s.dirtyFields:a.keepDefaultValues&&t?Be(d,t):{},touchedFields:a.keepTouched?s.touchedFields:{},errors:a.keepErrors?s.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Qe=(t,a)=>Je(ae(t)?t(g):t,a),Sr=(t,a={})=>{const u=c(l,t),f=u&&u._f;if(f){const h=f.refs?f.refs[0]:f.ref;h.focus&&(h.focus(),a.shouldSelect&&h.select())}},Dr=t=>{s={...s,...t}};return ae(r.defaultValues)&&r.defaultValues().then(t=>{Qe(t,r.resetOptions),b.state.next({isLoading:!1})}),{control:{register:pe,unregister:xe,getFieldState:Ge,_executeSchema:B,_focusError:ze,_getWatch:O,_getDirty:w,_updateValid:x,_removeUnmounted:S,_updateFieldArray:G,_getFieldArray:P,_reset:Je,_updateFormState:Dr,_subjects:b,_proxyFormState:V,get _fields(){return l},get _formValues(){return g},get _stateFlags(){return m},set _stateFlags(t){m=t},get _defaultValues(){return d},get _names(){return v},set _names(t){v=t},get _formState(){return s},set _formState(t){s=t},get _options(){return r},set _options(t){r={...r,...t}}},trigger:fe,register:pe,handleSubmit:pr,watch:xr,setValue:ee,getValues:Ke,reset:Qe,resetField:wr,clearErrors:Vr,unregister:xe,setError:br,setFocus:Sr,getFieldState:Ge}}function Qr(e={}){const i=F.useRef(),[r,n]=F.useState({isDirty:!1,isValidating:!1,isLoading:!0,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:ae(e.defaultValues)?void 0:e.defaultValues});i.current||(i.current={...Hr(e,()=>n(l=>({...l}))),formState:r});const s=i.current.control;return s._options=e,be({subject:s._subjects.state,next:l=>{cr(l,s._proxyFormState,s._updateFormState,!0)&&n({...s._formState})}}),F.useEffect(()=>{s._stateFlags.mount||(s._updateValid(),s._stateFlags.mount=!0),s._stateFlags.watch&&(s._stateFlags.watch=!1,s._subjects.state.next({})),s._removeUnmounted()}),F.useEffect(()=>{e.values&&!re(e.values,s._defaultValues)&&s._reset(e.values,s._options.resetOptions)},[e.values,s]),F.useEffect(()=>{r.submitCount&&s._focusError()},[s,r.submitCount]),i.current.formState=or(r,s),i.current}export{Gr as F,Tr as a,Rr as b,Qr as c,zr as d,Jr as e,Ve as u};