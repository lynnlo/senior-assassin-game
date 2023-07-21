import{c as R}from"./@babel-4b4a8c5a.js";var f={},y={get exports(){return f},set exports(c){f=c}};/*!
 * inflection
 * Copyright(c) 2011 Ben Lin <ben@dreamerslab.com>
 * MIT Licensed
 *
 * @fileoverview
 * A port of inflection-js to node.js module.
 */(function(c,b){(function(t,e){c.exports=e()})(R,function(){var t=["accommodation","adulthood","advertising","advice","aggression","aid","air","aircraft","alcohol","anger","applause","arithmetic","assistance","athletics","bacon","baggage","beef","biology","blood","botany","bread","butter","carbon","cardboard","cash","chalk","chaos","chess","crossroads","countryside","dancing","deer","dignity","dirt","dust","economics","education","electricity","engineering","enjoyment","envy","equipment","ethics","evidence","evolution","fame","fiction","flour","flu","food","fuel","fun","furniture","gallows","garbage","garlic","genetics","gold","golf","gossip","grammar","gratitude","grief","guilt","gymnastics","happiness","hardware","harm","hate","hatred","health","heat","help","homework","honesty","honey","hospitality","housework","humour","hunger","hydrogen","ice","importance","inflation","information","innocence","iron","irony","jam","jewelry","judo","karate","knowledge","lack","laughter","lava","leather","leisure","lightning","linguine","linguini","linguistics","literature","litter","livestock","logic","loneliness","luck","luggage","macaroni","machinery","magic","management","mankind","marble","mathematics","mayonnaise","measles","methane","milk","minus","money","mud","music","mumps","nature","news","nitrogen","nonsense","nurture","nutrition","obedience","obesity","oxygen","pasta","patience","physics","poetry","pollution","poverty","pride","psychology","publicity","punctuation","quartz","racism","relaxation","reliability","research","respect","revenge","rice","rubbish","rum","safety","scenery","seafood","seaside","series","shame","sheep","shopping","sleep","smoke","smoking","snow","soap","software","soil","spaghetti","species","steam","stuff","stupidity","sunshine","symmetry","tennis","thirst","thunder","timber","traffic","transportation","trust","underwear","unemployment","unity","validity","veal","vegetation","vegetarianism","vengeance","violence","vitality","warmth","wealth","weather","welfare","wheat","wildlife","wisdom","yoga","zinc","zoology"],e={plural:{men:new RegExp("^(m|wom)en$","gi"),people:new RegExp("(pe)ople$","gi"),children:new RegExp("(child)ren$","gi"),tia:new RegExp("([ti])a$","gi"),analyses:new RegExp("((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$","gi"),hives:new RegExp("(hi|ti)ves$","gi"),curves:new RegExp("(curve)s$","gi"),lrves:new RegExp("([lr])ves$","gi"),aves:new RegExp("([a])ves$","gi"),foves:new RegExp("([^fo])ves$","gi"),movies:new RegExp("(m)ovies$","gi"),aeiouyies:new RegExp("([^aeiouy]|qu)ies$","gi"),series:new RegExp("(s)eries$","gi"),xes:new RegExp("(x|ch|ss|sh)es$","gi"),mice:new RegExp("([m|l])ice$","gi"),buses:new RegExp("(bus)es$","gi"),oes:new RegExp("(o)es$","gi"),shoes:new RegExp("(shoe)s$","gi"),crises:new RegExp("(cris|ax|test)es$","gi"),octopi:new RegExp("(octop|vir)i$","gi"),aliases:new RegExp("(alias|canvas|status|campus)es$","gi"),summonses:new RegExp("^(summons)es$","gi"),oxen:new RegExp("^(ox)en","gi"),matrices:new RegExp("(matr)ices$","gi"),vertices:new RegExp("(vert|ind)ices$","gi"),feet:new RegExp("^feet$","gi"),teeth:new RegExp("^teeth$","gi"),geese:new RegExp("^geese$","gi"),quizzes:new RegExp("(quiz)zes$","gi"),whereases:new RegExp("^(whereas)es$","gi"),criteria:new RegExp("^(criteri)a$","gi"),genera:new RegExp("^genera$","gi"),ss:new RegExp("ss$","gi"),s:new RegExp("s$","gi")},singular:{man:new RegExp("^(m|wom)an$","gi"),person:new RegExp("(pe)rson$","gi"),child:new RegExp("(child)$","gi"),ox:new RegExp("^(ox)$","gi"),axis:new RegExp("(ax|test)is$","gi"),octopus:new RegExp("(octop|vir)us$","gi"),alias:new RegExp("(alias|status|canvas|campus)$","gi"),summons:new RegExp("^(summons)$","gi"),bus:new RegExp("(bu)s$","gi"),buffalo:new RegExp("(buffal|tomat|potat)o$","gi"),tium:new RegExp("([ti])um$","gi"),sis:new RegExp("sis$","gi"),ffe:new RegExp("(?:([^f])fe|([lr])f)$","gi"),hive:new RegExp("(hi|ti)ve$","gi"),aeiouyy:new RegExp("([^aeiouy]|qu)y$","gi"),x:new RegExp("(x|ch|ss|sh)$","gi"),matrix:new RegExp("(matr)ix$","gi"),vertex:new RegExp("(vert|ind)ex$","gi"),mouse:new RegExp("([m|l])ouse$","gi"),foot:new RegExp("^foot$","gi"),tooth:new RegExp("^tooth$","gi"),goose:new RegExp("^goose$","gi"),quiz:new RegExp("(quiz)$","gi"),whereas:new RegExp("^(whereas)$","gi"),criterion:new RegExp("^(criteri)on$","gi"),genus:new RegExp("^genus$","gi"),s:new RegExp("s$","gi"),common:new RegExp("$","gi")}},$=[[e.plural.men],[e.plural.people],[e.plural.children],[e.plural.tia],[e.plural.analyses],[e.plural.hives],[e.plural.curves],[e.plural.lrves],[e.plural.foves],[e.plural.aeiouyies],[e.plural.series],[e.plural.movies],[e.plural.xes],[e.plural.mice],[e.plural.buses],[e.plural.oes],[e.plural.shoes],[e.plural.crises],[e.plural.octopi],[e.plural.aliases],[e.plural.summonses],[e.plural.oxen],[e.plural.matrices],[e.plural.feet],[e.plural.teeth],[e.plural.geese],[e.plural.quizzes],[e.plural.whereases],[e.plural.criteria],[e.plural.genera],[e.singular.man,"$1en"],[e.singular.person,"$1ople"],[e.singular.child,"$1ren"],[e.singular.ox,"$1en"],[e.singular.axis,"$1es"],[e.singular.octopus,"$1i"],[e.singular.alias,"$1es"],[e.singular.summons,"$1es"],[e.singular.bus,"$1ses"],[e.singular.buffalo,"$1oes"],[e.singular.tium,"$1a"],[e.singular.sis,"ses"],[e.singular.ffe,"$1$2ves"],[e.singular.hive,"$1ves"],[e.singular.aeiouyy,"$1ies"],[e.singular.matrix,"$1ices"],[e.singular.vertex,"$1ices"],[e.singular.x,"$1es"],[e.singular.mouse,"$1ice"],[e.singular.foot,"feet"],[e.singular.tooth,"teeth"],[e.singular.goose,"geese"],[e.singular.quiz,"$1zes"],[e.singular.whereas,"$1es"],[e.singular.criterion,"$1a"],[e.singular.genus,"genera"],[e.singular.s,"s"],[e.singular.common,"s"]],m=[[e.singular.man],[e.singular.person],[e.singular.child],[e.singular.ox],[e.singular.axis],[e.singular.octopus],[e.singular.alias],[e.singular.summons],[e.singular.bus],[e.singular.buffalo],[e.singular.tium],[e.singular.sis],[e.singular.ffe],[e.singular.hive],[e.singular.aeiouyy],[e.singular.x],[e.singular.matrix],[e.singular.mouse],[e.singular.foot],[e.singular.tooth],[e.singular.goose],[e.singular.quiz],[e.singular.whereas],[e.singular.criterion],[e.singular.genus],[e.plural.men,"$1an"],[e.plural.people,"$1rson"],[e.plural.children,"$1"],[e.plural.genera,"genus"],[e.plural.criteria,"$1on"],[e.plural.tia,"$1um"],[e.plural.analyses,"$1$2sis"],[e.plural.hives,"$1ve"],[e.plural.curves,"$1"],[e.plural.lrves,"$1f"],[e.plural.aves,"$1ve"],[e.plural.foves,"$1fe"],[e.plural.movies,"$1ovie"],[e.plural.aeiouyies,"$1y"],[e.plural.series,"$1eries"],[e.plural.xes,"$1"],[e.plural.mice,"$1ouse"],[e.plural.buses,"$1"],[e.plural.oes,"$1"],[e.plural.shoes,"$1"],[e.plural.crises,"$1is"],[e.plural.octopi,"$1us"],[e.plural.aliases,"$1"],[e.plural.summonses,"$1"],[e.plural.oxen,"$1"],[e.plural.matrices,"$1ix"],[e.plural.vertices,"$1ex"],[e.plural.feet,"foot"],[e.plural.teeth,"tooth"],[e.plural.geese,"goose"],[e.plural.quizzes,"$1"],[e.plural.whereases,"$1"],[e.plural.ss,"ss"],[e.plural.s,""]],x=["and","or","nor","a","an","the","so","but","to","of","at","by","from","into","on","onto","off","out","in","over","with","for"],w=new RegExp("(_ids|_id)$","g"),h=new RegExp("_","g"),v=new RegExp("[ _]","g"),d=new RegExp("([A-Z])","g"),E=new RegExp("^_"),u={_apply_rules:function(i,a,r,s){if(s)i=s;else{var o=u.indexOf(r,i.toLowerCase())>-1;if(!o){for(var n=0,l=a.length;n<l;n++)if(i.match(a[n][0])){a[n][1]!==void 0&&(i=i.replace(a[n][0],a[n][1]));break}}}return i},indexOf:function(i,a,r,s){r||(r=-1);for(var o=-1,n=r,l=i.length;n<l;n++)if(i[n]===a||s&&s(i[n],a)){o=n;break}return o},pluralize:function(i,a){return u._apply_rules(i,$,t,a)},singularize:function(i,a){return u._apply_rules(i,m,t,a)},inflect:function(i,a,r,s){return a=parseInt(a,10),isNaN(a)?i:a===0||a>1?u._apply_rules(i,$,t,s):u._apply_rules(i,m,t,r)},camelize:function(i,a){for(var r=i.split("/"),s=0,o=r.length,n,l,g,p;s<o;s++){for(n=r[s].split("_"),l=0,g=n.length;l<g;l++)l!==0&&(n[l]=n[l].toLowerCase()),p=n[l].charAt(0),p=a&&s===0&&l===0?p.toLowerCase():p.toUpperCase(),n[l]=p+n[l].substring(1);r[s]=n.join("")}return r.join("::")},underscore:function(i,a){if(a&&i===i.toUpperCase())return i;for(var r=i.split("::"),s=0,o=r.length;s<o;s++)r[s]=r[s].replace(d,"_$1"),r[s]=r[s].replace(E,"");return r.join("/").toLowerCase()},humanize:function(i,a){return i=i.toLowerCase(),i=i.replace(w,""),i=i.replace(h," "),a||(i=u.capitalize(i)),i},capitalize:function(i){return i=i.toLowerCase(),i.substring(0,1).toUpperCase()+i.substring(1)},dasherize:function(i){return i.replace(v,"-")},titleize:function(i){i=i.toLowerCase().replace(h," ");for(var a=i.split(" "),r=0,s=a.length,o,n,l;r<s;r++){for(o=a[r].split("-"),n=0,l=o.length;n<l;n++)u.indexOf(x,o[n].toLowerCase())<0&&(o[n]=u.capitalize(o[n]));a[r]=o.join("-")}return i=a.join(" "),i=i.substring(0,1).toUpperCase()+i.substring(1),i},demodulize:function(i){var a=i.split("::");return a[a.length-1]},tableize:function(i){return i=u.underscore(i),i=u.pluralize(i),i},classify:function(i){return i=u.camelize(i),i=u.singularize(i),i},foreign_key:function(i,a){return i=u.demodulize(i),i=u.underscore(i)+(a?"":"_")+"id",i},ordinalize:function(i){for(var a=i.split(" "),r=0,s=a.length;r<s;r++){var o=parseInt(a[r],10);if(!isNaN(o)){var n=a[r].substring(a[r].length-2),l=a[r].substring(a[r].length-1),g="th";n!="11"&&n!="12"&&n!="13"&&(l==="1"?g="st":l==="2"?g="nd":l==="3"&&(g="rd")),a[r]+=g}}return a.join(" ")},transform:function(i,a){for(var r=0,s=a.length;r<s;r++){var o=a[r];u.hasOwnProperty(o)&&(i=u[o](i))}return i}};return u.version="1.12.0",u})})(y);const _=f;export{_ as i};