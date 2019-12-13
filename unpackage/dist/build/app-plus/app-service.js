var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190312_syb_scopedata*/global.__wcc_version__='v0.5vv_20190312_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([3,'data-v-b63d2d12 vue-ref'])
Z([1,true])
Z([[4],[[5],[[4],[[5],[[5],[1,'^change']],[[4],[[5],[[4],[[5],[1,'change']]]]]]]]])
Z([3,'keyboardPackage'])
Z([3,'bottom'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z([3,'keyboardbox data-v-b63d2d12'])
Z([[2,'==='],[[7],[3,'type']],[1,'number']])
Z([[2,'==='],[[7],[3,'type']],[1,'idCard']])
Z([[2,'==='],[[7],[3,'type']],[1,'plateNumber']])
Z([3,'main data-v-b63d2d12'])
Z([[2,'==='],[[7],[3,'active']],[1,1]])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'EngKeyBoardList']])
Z(z[15])
Z([[2,'==='],[[7],[3,'index']],[[2,'-'],[[6],[[7],[3,'EngKeyBoardList']],[3,'length']],[1,1]]])
Z([[2,'==='],[[7],[3,'active']],[1,2]])
Z(z[15])
Z(z[16])
Z([[7],[3,'areaList']])
Z(z[15])
Z(z[19])
Z([[7],[3,'safeAreaInsetBottom']])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'data-v-2ee4ba95 vue-ref'])
Z([1,true])
Z([3,'keyboardPackage'])
Z([3,'bottom'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z([[7],[3,'hiddenmodalput']])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'uni-navbar'])
Z([[4],[[5],[[5],[[5],[[5],[1,'uni-navbar__content']],[[2,'?:'],[[7],[3,'fixed']],[1,'uni-navbar--fixed'],[1,'']]],[[2,'?:'],[[7],[3,'border']],[1,'uni-navbar--shadow'],[1,'']]],[[2,'?:'],[[7],[3,'border']],[1,'uni-navbar--border'],[1,'']]]])
Z([[2,'+'],[[2,'+'],[1,'background-color:'],[[7],[3,'backgroundColor']]],[1,';']])
Z([[7],[3,'statusBar']])
Z([3,'__l'])
Z([3,'1'])
Z([3,'uni-navbar__header uni-navbar__content_view'])
Z([[2,'+'],[[2,'+'],[1,'color:'],[[7],[3,'color']]],[1,';']])
Z([3,'__e'])
Z([3,'uni-navbar__header-btns uni-navbar__content_view'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClickLeft']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'leftIcon']],[3,'length']])
Z(z[4])
Z([[7],[3,'color']])
Z([3,'24'])
Z([[7],[3,'leftIcon']])
Z([3,'2'])
Z([[6],[[7],[3,'leftText']],[3,'length']])
Z([3,'left'])
Z([3,'uni-navbar__header-container uni-navbar__content_view'])
Z([[6],[[7],[3,'title']],[3,'length']])
Z(z[8])
Z([[4],[[5],[[5],[1,'uni-navbar__header-btns uni-navbar__content_view']],[[2,'?:'],[[6],[[7],[3,'title']],[3,'length']],[1,'uni-navbar__header-btns-right'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'onClickRight']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[6],[[7],[3,'rightIcon']],[3,'length']])
Z(z[4])
Z(z[13])
Z(z[14])
Z([[7],[3,'rightIcon']])
Z([3,'3'])
Z([[2,'&&'],[[6],[[7],[3,'rightText']],[3,'length']],[[2,'!'],[[6],[[7],[3,'rightIcon']],[3,'length']]]])
Z([3,'right'])
Z([[7],[3,'fixed']])
Z(z[3])
Z(z[4])
Z([3,'4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showPopup']])
Z([3,'__e'])
Z([[4],[[5],[[5],[[5],[[5],[[5],[1,'uni-popup__wrapper']],[[7],[3,'type']]],[[7],[3,'ani']]],[[2,'?:'],[[7],[3,'animation']],[1,'ani'],[1,'']]],[[2,'?:'],[[2,'!'],[[7],[3,'custom']]],[1,'uni-custom'],[1,'']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'close']],[[4],[[5],[1,true]]]]]]]]]]])
Z(z[1])
Z([3,'uni-popup__wrapper-box'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'clear']],[[4],[[5],[1,'$event']]]]]]]]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__e'])
Z([[6],[[7],[3,'swipe']],[3,'touchend']])
Z([[6],[[7],[3,'swipe']],[3,'touchmove']])
Z([[6],[[7],[3,'swipe']],[3,'touchstart']])
Z([[6],[[7],[3,'swipe']],[3,'sizeReady']])
Z([3,'uni-swipe_move-box selector-query-hock move-hock'])
Z([[7],[3,'disabled']])
Z([[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([[7],[3,'pos']])
Z(z[8])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'haide'])
Z([[2,'==='],[[7],[3,'tabCurrentIndex']],[1,0]])
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^getData']],[[4],[[5],[[4],[[5],[1,'DateChange']]]]]]]]])
Z([[7],[3,'date']])
Z([3,'month'])
Z(z[5])
Z([3,'1'])
Z([[2,'==='],[[7],[3,'tabCurrentIndex']],[1,1]])
Z(z[2])
Z(z[3])
Z([[4],[[5],[[4],[[5],[[5],[1,'^getData']],[[4],[[5],[[4],[[5],[1,'DateChang']]]]]]]]])
Z([[7],[3,'date1']])
Z(z[6])
Z(z[13])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'brn'])
Z([[7],[3,'passIn']])
Z([3,'__l'])
Z([3,'__e'])
Z(z[3])
Z([3,'vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^clo']],[[4],[[5],[[4],[[5],[1,'clo']]]]]]]],[[4],[[5],[[5],[1,'^tap']],[[4],[[5],[[4],[[5],[[5],[1,'openKeyBoard']],[[4],[[5],[1,'number']]]]]]]]]]])
Z([3,'wrong'])
Z([1,20])
Z([[7],[3,'length']])
Z([[7],[3,'numberList']])
Z([3,'1'])
Z(z[2])
Z(z[3])
Z(z[3])
Z(z[3])
Z(z[3])
Z(z[5])
Z([[4],[[5],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^onChange']],[[4],[[5],[[4],[[5],[1,'onChange']]]]]]]],[[4],[[5],[[5],[1,'^onInput']],[[4],[[5],[[4],[[5],[1,'onInput']]]]]]]],[[4],[[5],[[5],[1,'^onDelete']],[[4],[[5],[[4],[[5],[1,'onDelete']]]]]]]],[[4],[[5],[[5],[1,'^onConfirm']],[[4],[[5],[[4],[[5],[1,'onConfirm']]]]]]]]])
Z([3,'number'])
Z([1,true])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[7],[3,'shade']])
Z([[7],[3,'shade1']])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'==='],[[7],[3,'tabCurrentIndex']],[1,0]])
Z([[2,'==='],[[7],[3,'tabCurrentIndex']],[1,1]])
Z([[2,'==='],[[7],[3,'tabCurrentIndex']],[1,2]])
Z([[2,'==='],[[7],[3,'tabCurrentIndex']],[1,3]])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'==='],[[7],[3,'tabCurrentIndex']],[1,0]])
Z([[7],[3,'flag']])
Z([[2,'==='],[[7],[3,'tabCurrentIndex']],[1,1]])
Z([[2,'==='],[[7],[3,'tabCurrentIndex']],[1,2]])
Z([[2,'==='],[[7],[3,'tabCurrentIndex']],[1,3]])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'box4'])
Z([[7],[3,'passIn']])
Z([3,'__l'])
Z([3,'__e'])
Z(z[3])
Z([3,'vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^clo']],[[4],[[5],[[4],[[5],[1,'clo']]]]]]]],[[4],[[5],[[5],[1,'^tap']],[[4],[[5],[[4],[[5],[[5],[1,'openKeyBoard']],[[4],[[5],[1,'number']]]]]]]]]]])
Z([3,'wrong'])
Z([1,20])
Z([[7],[3,'length']])
Z([[7],[3,'numberList']])
Z([3,'1'])
Z(z[2])
Z(z[3])
Z(z[3])
Z(z[3])
Z(z[3])
Z(z[5])
Z([[4],[[5],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^onChange']],[[4],[[5],[[4],[[5],[1,'onChange']]]]]]]],[[4],[[5],[[5],[1,'^onInput']],[[4],[[5],[[4],[[5],[1,'onInput']]]]]]]],[[4],[[5],[[5],[1,'^onDelete']],[[4],[[5],[[4],[[5],[1,'onDelete']]]]]]]],[[4],[[5],[[5],[1,'^onConfirm']],[[4],[[5],[[4],[[5],[1,'onConfirm']]]]]]]]])
Z([3,'number'])
Z([1,true])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'box4'])
Z([[7],[3,'passIn']])
Z([3,'__l'])
Z([3,'__e'])
Z(z[3])
Z([3,'vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^clo']],[[4],[[5],[[4],[[5],[1,'clo']]]]]]]],[[4],[[5],[[5],[1,'^tap']],[[4],[[5],[[4],[[5],[[5],[1,'openKeyBoard']],[[4],[[5],[1,'number']]]]]]]]]]])
Z([3,'wrong'])
Z([1,20])
Z([[7],[3,'length']])
Z([[7],[3,'numberList']])
Z([3,'1'])
Z(z[2])
Z(z[3])
Z(z[3])
Z(z[3])
Z(z[3])
Z(z[5])
Z([[4],[[5],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^onChange']],[[4],[[5],[[4],[[5],[1,'onChange']]]]]]]],[[4],[[5],[[5],[1,'^onInput']],[[4],[[5],[[4],[[5],[1,'onInput']]]]]]]],[[4],[[5],[[5],[1,'^onDelete']],[[4],[[5],[[4],[[5],[1,'onDelete']]]]]]]],[[4],[[5],[[5],[1,'^onConfirm']],[[4],[[5],[[4],[[5],[1,'onConfirm']]]]]]]]])
Z([3,'number'])
Z([1,true])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'position:relative;'])
Z([[7],[3,'flag']])
Z([3,'#121212'])
Z([3,'__l'])
Z([3,'__e'])
Z(z[5])
Z([3,'#fff'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^clickLeft']],[[4],[[5],[[4],[[5],[1,'back']]]]]]]],[[4],[[5],[[5],[1,'^clickRight']],[[4],[[5],[[4],[[5],[1,'add_address']]]]]]]]])
Z([1,true])
Z([3,'back'])
Z([3,'添加'])
Z(z[9])
Z([3,'提币地址'])
Z([3,'1'])
Z([3,'__i0__'])
Z([3,'item'])
Z([[7],[3,'address_out']])
Z([3,'id'])
Z(z[4])
Z(z[5])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'click']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'address_out']],[1,'id']],[[6],[[7],[3,'item']],[3,'id']]]]]]]]]]]]]]]])
Z([[7],[3,'options']])
Z([[2,'+'],[1,'2-'],[[7],[3,'__i0__']]])
Z([[4],[[5],[1,'default']]])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[7])
Z([[4],[[5],[[4],[[5],[[5],[1,'^clickLeft']],[[4],[[5],[[4],[[5],[1,'back']]]]]]]]])
Z(z[9])
Z(z[10])
Z(z[9])
Z(z[13])
Z([3,'3'])
Z([[7],[3,'passIn']])
Z(z[4])
Z(z[5])
Z(z[5])
Z([3,'vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^clo']],[[4],[[5],[[4],[[5],[1,'clo']]]]]]]],[[4],[[5],[[5],[1,'^tap']],[[4],[[5],[[4],[[5],[[5],[1,'openKeyBoard']],[[4],[[5],[1,'number']]]]]]]]]]])
Z([3,'wrong'])
Z([1,20])
Z([[7],[3,'length']])
Z([[7],[3,'numberList']])
Z([3,'4'])
Z(z[4])
Z(z[5])
Z(z[5])
Z(z[5])
Z(z[5])
Z(z[39])
Z([[4],[[5],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^onChange']],[[4],[[5],[[4],[[5],[1,'onChange']]]]]]]],[[4],[[5],[[5],[1,'^onInput']],[[4],[[5],[[4],[[5],[1,'onInput']]]]]]]],[[4],[[5],[[5],[1,'^onDelete']],[[4],[[5],[[4],[[5],[1,'onDelete']]]]]]]],[[4],[[5],[[5],[1,'^onConfirm']],[[4],[[5],[[4],[[5],[1,'onConfirm']]]]]]]]])
Z([3,'number'])
Z(z[9])
Z([3,'5'])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'position:relative;'])
Z([[7],[3,'passIn']])
Z([3,'__l'])
Z([3,'__e'])
Z(z[4])
Z([3,'vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^tap']],[[4],[[5],[[4],[[5],[[5],[1,'openKeyBoard']],[[4],[[5],[1,'number']]]]]]]]]],[[4],[[5],[[5],[1,'^clo']],[[4],[[5],[[4],[[5],[1,'clo']]]]]]]]])
Z([3,'wrong'])
Z([1,20])
Z([[7],[3,'length']])
Z([[7],[3,'numberList']])
Z([3,'1'])
Z(z[3])
Z(z[4])
Z(z[4])
Z(z[4])
Z(z[4])
Z(z[6])
Z([[4],[[5],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^onChange']],[[4],[[5],[[4],[[5],[1,'onChange']]]]]]]],[[4],[[5],[[5],[1,'^onInput']],[[4],[[5],[[4],[[5],[1,'onInput']]]]]]]],[[4],[[5],[[5],[1,'^onDelete']],[[4],[[5],[[4],[[5],[1,'onDelete']]]]]]]],[[4],[[5],[[5],[1,'^onConfirm']],[[4],[[5],[[4],[[5],[1,'onConfirm']]]]]]]]])
Z([3,'number'])
Z([1,true])
Z([3,'2'])
Z([[7],[3,'delShow']])
Z(z[3])
Z(z[4])
Z(z[4])
Z(z[6])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^tap']],[[4],[[5],[[4],[[5],[[5],[1,'openKeyBoard']],[[4],[[5],[1,'number']]]]]]]]]],[[4],[[5],[[5],[1,'^clo']],[[4],[[5],[[4],[[5],[1,'cloo']]]]]]]]])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[11])
Z([3,'3'])
Z(z[3])
Z(z[4])
Z(z[4])
Z(z[4])
Z(z[4])
Z(z[6])
Z([[4],[[5],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^onChange']],[[4],[[5],[[4],[[5],[1,'onChange1']]]]]]]],[[4],[[5],[[5],[1,'^onInput']],[[4],[[5],[[4],[[5],[1,'onInput1']]]]]]]],[[4],[[5],[[5],[1,'^onDelete']],[[4],[[5],[[4],[[5],[1,'onDelete']]]]]]]],[[4],[[5],[[5],[1,'^onConfirm']],[[4],[[5],[[4],[[5],[1,'onConfirm']]]]]]]]])
Z([3,'numbers'])
Z(z[21])
Z([3,'4'])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'out2'])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'idcard']],[[7],[3,'name']]],[[2,'=='],[[6],[[7],[3,'imgs']],[3,'length']],[1,2]]])
Z([[2,'||'],[[2,'||'],[[2,'!'],[[7],[3,'idcard']]],[[2,'!'],[[7],[3,'name']]]],[[2,'!=='],[[6],[[7],[3,'imgs']],[3,'length']],[1,2]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([[2,'==='],[[7],[3,'tabCurrentIndex']],[1,0]])
Z([[2,'==='],[[7],[3,'tabCurrentIndex']],[1,1]])
Z([[2,'==='],[[7],[3,'tabCurrentIndex']],[1,2]])
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[7],[3,'flag']])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'user_machine']])
Z(z[2])
Z([3,'__e'])
Z([3,'page'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'select']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'user_machine']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[6],[[7],[3,'item']],[3,'machine_id']])
Z([3,'page1'])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,'10']])
Z([[2,'||'],[[2,'||'],[[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,'6']],[[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,'7']]],[[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,'5']]])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,'11']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,'12']])
Z(z[11])
Z(z[13])
Z(z[14])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,'7']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,'5']])
Z([[2,'=='],[[6],[[7],[3,'item']],[3,'status']],[1,'6']])
Z([[7],[3,'shade']])
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^getData']],[[4],[[5],[[4],[[5],[1,'DateChang']]]]]]]]])
Z([[7],[3,'date']])
Z([3,'month'])
Z(z[3])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'shade']])
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
function gz$gwx_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx_41)return __WXML_GLOBAL__.ops_cached.$gwx_41
__WXML_GLOBAL__.ops_cached.$gwx_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_41);return __WXML_GLOBAL__.ops_cached.$gwx_41
}
function gz$gwx_42(){
if( __WXML_GLOBAL__.ops_cached.$gwx_42)return __WXML_GLOBAL__.ops_cached.$gwx_42
__WXML_GLOBAL__.ops_cached.$gwx_42=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([3,'position:relative;'])
Z([[7],[3,'flag']])
Z([3,'#121212'])
Z([3,'__l'])
Z([3,'__e'])
Z(z[5])
Z([3,'#fff'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^clickLeft']],[[4],[[5],[[4],[[5],[1,'back']]]]]]]],[[4],[[5],[[5],[1,'^clickRight']],[[4],[[5],[[4],[[5],[1,'add_address']]]]]]]]])
Z([1,true])
Z([3,'back'])
Z(z[9])
Z([3,'建议反馈'])
Z([3,'1'])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[5])
Z(z[7])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^clickLeft']],[[4],[[5],[[4],[[5],[1,'back']]]]]]]],[[4],[[5],[[5],[1,'^clickRight']],[[4],[[5],[[4],[[5],[1,'addMessage']]]]]]]]])
Z(z[9])
Z(z[10])
Z([3,'提建议'])
Z(z[9])
Z(z[12])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_42);return __WXML_GLOBAL__.ops_cached.$gwx_42
}
function gz$gwx_43(){
if( __WXML_GLOBAL__.ops_cached.$gwx_43)return __WXML_GLOBAL__.ops_cached.$gwx_43
__WXML_GLOBAL__.ops_cached.$gwx_43=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_43);return __WXML_GLOBAL__.ops_cached.$gwx_43
}
function gz$gwx_44(){
if( __WXML_GLOBAL__.ops_cached.$gwx_44)return __WXML_GLOBAL__.ops_cached.$gwx_44
__WXML_GLOBAL__.ops_cached.$gwx_44=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[7],[3,'passIn']])
Z([3,'__l'])
Z([3,'__e'])
Z(z[3])
Z([3,'vue-ref'])
Z([[4],[[5],[[5],[[4],[[5],[[5],[1,'^clo']],[[4],[[5],[[4],[[5],[1,'clo']]]]]]]],[[4],[[5],[[5],[1,'^tap']],[[4],[[5],[[4],[[5],[[5],[1,'openKeyBoard']],[[4],[[5],[1,'number']]]]]]]]]]])
Z([3,'wrong'])
Z([1,20])
Z([[7],[3,'length']])
Z([[7],[3,'numberList']])
Z([3,'1'])
Z(z[2])
Z(z[3])
Z(z[3])
Z(z[3])
Z(z[3])
Z(z[5])
Z([[4],[[5],[[5],[[5],[[5],[[4],[[5],[[5],[1,'^onChange']],[[4],[[5],[[4],[[5],[1,'onChange']]]]]]]],[[4],[[5],[[5],[1,'^onInput']],[[4],[[5],[[4],[[5],[1,'onInput']]]]]]]],[[4],[[5],[[5],[1,'^onDelete']],[[4],[[5],[[4],[[5],[1,'onDelete']]]]]]]],[[4],[[5],[[5],[1,'^onConfirm']],[[4],[[5],[[4],[[5],[1,'onConfirm']]]]]]]]])
Z([3,'number'])
Z([1,true])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_44);return __WXML_GLOBAL__.ops_cached.$gwx_44
}
function gz$gwx_45(){
if( __WXML_GLOBAL__.ops_cached.$gwx_45)return __WXML_GLOBAL__.ops_cached.$gwx_45
__WXML_GLOBAL__.ops_cached.$gwx_45=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_45);return __WXML_GLOBAL__.ops_cached.$gwx_45
}
function gz$gwx_46(){
if( __WXML_GLOBAL__.ops_cached.$gwx_46)return __WXML_GLOBAL__.ops_cached.$gwx_46
__WXML_GLOBAL__.ops_cached.$gwx_46=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'fix'])
Z([[7],[3,'flag']])
Z([[7],[3,'fllaag']])
})(__WXML_GLOBAL__.ops_cached.$gwx_46);return __WXML_GLOBAL__.ops_cached.$gwx_46
}
function gz$gwx_47(){
if( __WXML_GLOBAL__.ops_cached.$gwx_47)return __WXML_GLOBAL__.ops_cached.$gwx_47
__WXML_GLOBAL__.ops_cached.$gwx_47=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_47);return __WXML_GLOBAL__.ops_cached.$gwx_47
}
function gz$gwx_48(){
if( __WXML_GLOBAL__.ops_cached.$gwx_48)return __WXML_GLOBAL__.ops_cached.$gwx_48
__WXML_GLOBAL__.ops_cached.$gwx_48=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_48);return __WXML_GLOBAL__.ops_cached.$gwx_48
}
function gz$gwx_49(){
if( __WXML_GLOBAL__.ops_cached.$gwx_49)return __WXML_GLOBAL__.ops_cached.$gwx_49
__WXML_GLOBAL__.ops_cached.$gwx_49=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_49);return __WXML_GLOBAL__.ops_cached.$gwx_49
}
function gz$gwx_50(){
if( __WXML_GLOBAL__.ops_cached.$gwx_50)return __WXML_GLOBAL__.ops_cached.$gwx_50
__WXML_GLOBAL__.ops_cached.$gwx_50=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_50);return __WXML_GLOBAL__.ops_cached.$gwx_50
}
function gz$gwx_51(){
if( __WXML_GLOBAL__.ops_cached.$gwx_51)return __WXML_GLOBAL__.ops_cached.$gwx_51
__WXML_GLOBAL__.ops_cached.$gwx_51=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_51);return __WXML_GLOBAL__.ops_cached.$gwx_51
}
function gz$gwx_52(){
if( __WXML_GLOBAL__.ops_cached.$gwx_52)return __WXML_GLOBAL__.ops_cached.$gwx_52
__WXML_GLOBAL__.ops_cached.$gwx_52=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'shade']])
})(__WXML_GLOBAL__.ops_cached.$gwx_52);return __WXML_GLOBAL__.ops_cached.$gwx_52
}
function gz$gwx_53(){
if( __WXML_GLOBAL__.ops_cached.$gwx_53)return __WXML_GLOBAL__.ops_cached.$gwx_53
__WXML_GLOBAL__.ops_cached.$gwx_53=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_53);return __WXML_GLOBAL__.ops_cached.$gwx_53
}
function gz$gwx_54(){
if( __WXML_GLOBAL__.ops_cached.$gwx_54)return __WXML_GLOBAL__.ops_cached.$gwx_54
__WXML_GLOBAL__.ops_cached.$gwx_54=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_54);return __WXML_GLOBAL__.ops_cached.$gwx_54
}
function gz$gwx_55(){
if( __WXML_GLOBAL__.ops_cached.$gwx_55)return __WXML_GLOBAL__.ops_cached.$gwx_55
__WXML_GLOBAL__.ops_cached.$gwx_55=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_55);return __WXML_GLOBAL__.ops_cached.$gwx_55
}
function gz$gwx_56(){
if( __WXML_GLOBAL__.ops_cached.$gwx_56)return __WXML_GLOBAL__.ops_cached.$gwx_56
__WXML_GLOBAL__.ops_cached.$gwx_56=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_56);return __WXML_GLOBAL__.ops_cached.$gwx_56
}
function gz$gwx_57(){
if( __WXML_GLOBAL__.ops_cached.$gwx_57)return __WXML_GLOBAL__.ops_cached.$gwx_57
__WXML_GLOBAL__.ops_cached.$gwx_57=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_57);return __WXML_GLOBAL__.ops_cached.$gwx_57
}
function gz$gwx_58(){
if( __WXML_GLOBAL__.ops_cached.$gwx_58)return __WXML_GLOBAL__.ops_cached.$gwx_58
__WXML_GLOBAL__.ops_cached.$gwx_58=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_58);return __WXML_GLOBAL__.ops_cached.$gwx_58
}
function gz$gwx_59(){
if( __WXML_GLOBAL__.ops_cached.$gwx_59)return __WXML_GLOBAL__.ops_cached.$gwx_59
__WXML_GLOBAL__.ops_cached.$gwx_59=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_59);return __WXML_GLOBAL__.ops_cached.$gwx_59
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={"p_./components/uni-swipe-action/index.wxs":np_0,};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
f_['./components/uni-swipe-action/index.wxs'] = nv_require("p_./components/uni-swipe-action/index.wxs");
function np_0(){var nv_module={nv_exports:{}};function nv_sizeReady(nv_newValue,nv_oldValue,nv_ownerInstance,nv_instance){var nv_state = nv_instance.nv_getState();nv_state.nv_position = nv_JSON.nv_parse(nv_instance.nv_getDataset().nv_position);if (nv_state.nv_position.nv_length === 0)return;;var nv_show = nv_state.nv_position[(0)].nv_show;nv_state.nv_left = nv_state.nv_left || nv_state.nv_position[(0)].nv_left;if (nv_show){nv_openState(true,nv_instance,nv_ownerInstance)} else {nv_openState(false,nv_instance,nv_ownerInstance)}};function nv_touchstart(nv_e,nv_ins){var nv_instance = nv_e.nv_instance;var nv_state = nv_instance.nv_getState();var nv_pageX = nv_e.nv_touches[(0)].nv_pageX;nv_instance.nv_removeClass('ani');var nv_owner = nv_ins.nv_selectAllComponents('.button-hock');for(var nv_i = 0;nv_i < nv_owner.nv_length;nv_i++){nv_owner[((nt_3=(nv_i),null==nt_3?undefined:'number'=== typeof nt_3?nt_3:"nv_"+nt_3))].nv_removeClass('ani')};nv_state.nv_position = nv_JSON.nv_parse(nv_instance.nv_getDataset().nv_position);nv_state.nv_left = nv_state.nv_left || nv_state.nv_position[(0)].nv_left;nv_state.nv_width = nv_pageX - nv_state.nv_left;nv_ins.nv_callMethod('openSwipe')};function nv_touchmove(nv_e,nv_ownerInstance){var nv_instance = nv_e.nv_instance;var nv_disabled = nv_instance.nv_getDataset().nv_disabled;var nv_state = nv_instance.nv_getState();if (nv_disabled)return;;var nv_pageX = nv_e.nv_touches[(0)].nv_pageX;nv_move(nv_pageX - nv_state.nv_width,nv_instance,nv_ownerInstance)};function nv_touchend(nv_e,nv_ownerInstance){var nv_instance = nv_e.nv_instance;var nv_disabled = nv_instance.nv_getDataset().nv_disabled;var nv_state = nv_instance.nv_getState();if (nv_disabled)return;;nv_moveDirection(nv_state.nv_left,-40,nv_instance,nv_ownerInstance)};function nv_move(nv_value,nv_instance,nv_ownerInstance){var nv_state = nv_instance.nv_getState();var nv_x = Math.nv_max(-nv_state.nv_position[(1)].nv_width,Math.nv_min((nv_value),0));nv_state.nv_left = nv_x;nv_instance.nv_setStyle(({nv_transform:'translateX(' + nv_x + 'px)','nv_-webkit-transform':'translateX(' + nv_x + 'px)',}));nv_buttonFold(nv_x,nv_instance,nv_ownerInstance)};function nv_moveDirection(nv_left,nv_value,nv_ins,nv_ownerInstance){var nv_state = nv_ins.nv_getState();var nv_position = nv_state.nv_position;var nv_isopen = nv_state.nv_isopen;if (!nv_position[(1)].nv_width){nv_openState(false,nv_ins,nv_ownerInstance);return};if (nv_isopen){if (-nv_left <= nv_position[(1)].nv_width){nv_openState(false,nv_ins,nv_ownerInstance)} else {nv_openState(true,nv_ins,nv_ownerInstance)};return};if (nv_left <= nv_value){nv_openState(true,nv_ins,nv_ownerInstance)} else {nv_openState(false,nv_ins,nv_ownerInstance)}};function nv_buttonFold(nv_value,nv_instance,nv_ownerInstance){var nv_ins = nv_ownerInstance.nv_selectAllComponents('.button-hock');var nv_state = nv_instance.nv_getState();var nv_position = nv_state.nv_position;var nv_arr = [];var nv_w = 0;for(var nv_i = 0;nv_i < nv_ins.nv_length;nv_i++){if (!nv_ins[((nt_9=(nv_i),null==nt_9?undefined:'number'=== typeof nt_9?nt_9:"nv_"+nt_9))].nv_getDataset().nv_button)return;;var nv_btnData = nv_JSON.nv_parse(nv_ins[((nt_10=(nv_i),null==nt_10?undefined:'number'=== typeof nt_10?nt_10:"nv_"+nt_10))].nv_getDataset().nv_button);var nv_button = nv_btnData[((nt_11=(nv_i),null==nt_11?undefined:'number'=== typeof nt_11?nt_11:"nv_"+nt_11))] && nv_btnData[((nt_12=(nv_i),null==nt_12?undefined:'number'=== typeof nt_12?nt_12:"nv_"+nt_12))].nv_width || 0;nv_w += nv_button;nv_arr.nv_push(-nv_w);var nv_distance = nv_arr[((nt_13=(nv_i - 1),null==nt_13?undefined:'number'=== typeof nt_13?nt_13:"nv_"+nt_13))] + nv_value * (nv_arr[((nt_14=(nv_i - 1),null==nt_14?undefined:'number'=== typeof nt_14?nt_14:"nv_"+nt_14))] / nv_position[(1)].nv_width);if (nv_i != 0){nv_ins[((nt_16=(nv_i),null==nt_16?undefined:'number'=== typeof nt_16?nt_16:"nv_"+nt_16))].nv_setStyle(({nv_transform:'translateX(' + nv_distance + 'px)',}))}}};function nv_openState(nv_type,nv_ins,nv_ownerInstance){var nv_state = nv_ins.nv_getState();var nv_position = nv_state.nv_position;nv_state.nv_isopen = nv_type;nv_ownerInstance.nv_callMethod('change',({nv_open:nv_type,}));nv_ins.nv_addClass('ani');var nv_owner = nv_ownerInstance.nv_selectAllComponents('.button-hock');for(var nv_i = 0;nv_i < nv_owner.nv_length;nv_i++){nv_owner[((nt_17=(nv_i),null==nt_17?undefined:'number'=== typeof nt_17?nt_17:"nv_"+nt_17))].nv_addClass('ani')};nv_move(nv_type ? -nv_position[(1)].nv_width:0,nv_ins,nv_ownerInstance)};nv_module.nv_exports = ({nv_sizeReady:nv_sizeReady,nv_touchstart:nv_touchstart,nv_touchmove:nv_touchmove,nv_touchend:nv_touchend,});return nv_module.nv_exports;}

f_['./components/uni-swipe-action/uni-swipe-action.wxml']={};
f_['./components/uni-swipe-action/uni-swipe-action.wxml']['swipe'] =f_['./components/uni-swipe-action/index.wxs'] || nv_require("p_./components/uni-swipe-action/index.wxs");
f_['./components/uni-swipe-action/uni-swipe-action.wxml']['swipe']();

var x=['./common/dy-Date.wxml','./components/keyboard-package/keyboard-package.wxml','./components/password-input/password-input.wxml','./components/uni-icons/uni-icons.wxml','./components/uni-nav-bar/uni-nav-bar.wxml','./components/uni-popup/uni-popup.wxml','./components/uni-status-bar/uni-status-bar.wxml','./components/uni-swipe-action/uni-swipe-action.wxml','./mill/assets/assets.wxml','./mill/completed/completed.wxml','./mill/confirm/confirm.wxml','./mill/mill/mill.wxml','./mill/pay/pay.wxml','./mill/sale/sale.wxml','./mill/saleaudit/saleaudit.wxml','./mill/salecompleted/salecompleted.wxml','./mill/saleconfirm/saleconfirm.wxml','./mill/salepay/salepay.wxml','./mill/sell/sell.wxml','./mill/stayaudit/stayaudit.wxml','./mill/stayconfirm/stayconfirm.wxml','./mill/staypay/staypay.wxml','./mill/validation/validation.wxml','./my/add-address/add-address.wxml','./my/address/address.wxml','./my/change-loginPassword/change-loginPassword.wxml','./my/change-otherPassword/change_otherPassword.wxml','./my/change-pass/change-pass.wxml','./my/change-password/change-password.wxml','./my/choose-address/choose-address.wxml','./my/commit/commit.wxml','./my/edit-address/edit-address.wxml','./my/email/email.wxml','./my/identity/identity.wxml','./my/login-password/login-password.wxml','./my/machine-detail/machine-detail.wxml','./my/my-machine/my-machine.wxml','./my/my-wallet/my-wallet.wxml','./my/my/my.wxml','./my/personal/personal.wxml','./my/suggest-detail/suggest-detail.wxml','./my/suggest/suggest.wxml','./my/trade-password/trade-password.wxml','./my/transfer/transfer.wxml','./my/unbindemail/unbindemail.wxml','./pages/agreement/agreement.wxml','./pages/banner/banner.wxml','./pages/banner2/banner2.wxml','./pages/getBackPassword/getBackPassword.wxml','./pages/index/index.wxml','./pages/leader/guide.wxml','./pages/login/login.wxml','./pages/news/news.wxml','./pages/otherLogin/otherLogin.wxml','./pages/register/register.wxml','./pages/setNewPassword/setNewPassword.wxml','./pages/start/start.wxml','./pages/web1/web1.wxml','./pages/web2/web2.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var xC=_mz(z,'uni-popup',['bind:__l',0,'bind:change',1,'class',1,'custom',2,'data-event-opts',3,'data-ref',4,'type',5,'vueId',6,'vueSlots',7],[],e,s,gg)
var fE=_n('view')
_rz(z,fE,'class',9,e,s,gg)
var cF=_v()
_(fE,cF)
if(_oz(z,10,e,s,gg)){cF.wxVkey=1
}
var hG=_v()
_(fE,hG)
if(_oz(z,11,e,s,gg)){hG.wxVkey=1
}
var oH=_v()
_(fE,oH)
if(_oz(z,12,e,s,gg)){oH.wxVkey=1
var cI=_n('view')
_rz(z,cI,'class',13,e,s,gg)
var oJ=_v()
_(cI,oJ)
if(_oz(z,14,e,s,gg)){oJ.wxVkey=1
var aL=_v()
_(oJ,aL)
var tM=function(bO,eN,oP,gg){
var oR=_v()
_(oP,oR)
if(_oz(z,19,bO,eN,gg)){oR.wxVkey=1
}
oR.wxXCkey=1
return oP
}
aL.wxXCkey=2
_2z(z,17,tM,e,s,gg,aL,'item','index','index')
}
var lK=_v()
_(cI,lK)
if(_oz(z,20,e,s,gg)){lK.wxVkey=1
var fS=_v()
_(lK,fS)
var cT=function(oV,hU,cW,gg){
var lY=_v()
_(cW,lY)
if(_oz(z,25,oV,hU,gg)){lY.wxVkey=1
}
lY.wxXCkey=1
return cW
}
fS.wxXCkey=2
_2z(z,23,cT,e,s,gg,fS,'item','index','index')
}
oJ.wxXCkey=1
lK.wxXCkey=1
_(oH,cI)
}
cF.wxXCkey=1
hG.wxXCkey=1
oH.wxXCkey=1
_(xC,fE)
var oD=_v()
_(xC,oD)
if(_oz(z,26,e,s,gg)){oD.wxVkey=1
}
oD.wxXCkey=1
_(r,xC)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var t1=_mz(z,'uni-popup',['bind:__l',0,'class',1,'custom',1,'data-ref',2,'type',3,'vueId',4,'vueSlots',5],[],e,s,gg)
var e2=_v()
_(t1,e2)
if(_oz(z,7,e,s,gg)){e2.wxVkey=1
}
e2.wxXCkey=1
_(r,t1)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var x5=_n('view')
_rz(z,x5,'class',0,e,s,gg)
var f7=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var c8=_v()
_(f7,c8)
if(_oz(z,3,e,s,gg)){c8.wxVkey=1
var h9=_mz(z,'uni-status-bar',['bind:__l',4,'vueId',1],[],e,s,gg)
_(c8,h9)
}
var o0=_mz(z,'view',['class',6,'style',1],[],e,s,gg)
var cAB=_mz(z,'view',['bindtap',8,'class',1,'data-event-opts',2],[],e,s,gg)
var oBB=_v()
_(cAB,oBB)
if(_oz(z,11,e,s,gg)){oBB.wxVkey=1
var aDB=_mz(z,'uni-icons',['bind:__l',12,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(oBB,aDB)
}
var lCB=_v()
_(cAB,lCB)
if(_oz(z,17,e,s,gg)){lCB.wxVkey=1
}
var tEB=_n('slot')
_rz(z,tEB,'name',18,e,s,gg)
_(cAB,tEB)
oBB.wxXCkey=1
oBB.wxXCkey=3
lCB.wxXCkey=1
_(o0,cAB)
var eFB=_n('view')
_rz(z,eFB,'class',19,e,s,gg)
var bGB=_v()
_(eFB,bGB)
if(_oz(z,20,e,s,gg)){bGB.wxVkey=1
}
var oHB=_n('slot')
_(eFB,oHB)
bGB.wxXCkey=1
_(o0,eFB)
var xIB=_mz(z,'view',['bindtap',21,'class',1,'data-event-opts',2],[],e,s,gg)
var oJB=_v()
_(xIB,oJB)
if(_oz(z,24,e,s,gg)){oJB.wxVkey=1
var cLB=_mz(z,'uni-icons',['bind:__l',25,'color',1,'size',2,'type',3,'vueId',4],[],e,s,gg)
_(oJB,cLB)
}
var fKB=_v()
_(xIB,fKB)
if(_oz(z,30,e,s,gg)){fKB.wxVkey=1
}
var hMB=_n('slot')
_rz(z,hMB,'name',31,e,s,gg)
_(xIB,hMB)
oJB.wxXCkey=1
oJB.wxXCkey=3
fKB.wxXCkey=1
_(o0,xIB)
_(f7,o0)
c8.wxXCkey=1
c8.wxXCkey=3
_(x5,f7)
var o6=_v()
_(x5,o6)
if(_oz(z,32,e,s,gg)){o6.wxVkey=1
var oNB=_v()
_(o6,oNB)
if(_oz(z,33,e,s,gg)){oNB.wxVkey=1
var cOB=_mz(z,'uni-status-bar',['bind:__l',34,'vueId',1],[],e,s,gg)
_(oNB,cOB)
}
oNB.wxXCkey=1
oNB.wxXCkey=3
}
o6.wxXCkey=1
o6.wxXCkey=3
_(r,x5)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var lQB=_v()
_(r,lQB)
if(_oz(z,0,e,s,gg)){lQB.wxVkey=1
var aRB=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2],[],e,s,gg)
var tSB=_mz(z,'view',['catchtap',4,'class',1,'data-event-opts',2],[],e,s,gg)
var eTB=_n('slot')
_(tSB,eTB)
_(aRB,tSB)
_(lQB,aRB)
}
lQB.wxXCkey=1
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var oVB=_n('slot')
_(r,oVB)
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var oXB=_mz(z,'view',['bindchange',0,'bindtouchend',1,'bindtouchmove',1,'bindtouchstart',2,'change:prop',3,'class',4,'data-disabled',5,'data-event-opts',6,'data-position',7,'prop',8],[],e,s,gg)
var fYB=_n('slot')
_(oXB,fYB)
_(r,oXB)
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var h1B=_n('view')
_rz(z,h1B,'class',0,e,s,gg)
var o2B=_v()
_(h1B,o2B)
if(_oz(z,1,e,s,gg)){o2B.wxVkey=1
var o4B=_mz(z,'dy-date-picker',['bind:__l',2,'bind:getData',1,'data-event-opts',2,'placeholder',3,'timeType',4,'value',5,'vueId',6],[],e,s,gg)
_(o2B,o4B)
}
var c3B=_v()
_(h1B,c3B)
if(_oz(z,9,e,s,gg)){c3B.wxVkey=1
var l5B=_mz(z,'dy-date-picker',['bind:__l',10,'bind:getData',1,'data-event-opts',2,'placeholder',3,'timeType',4,'value',5,'vueId',6],[],e,s,gg)
_(c3B,l5B)
}
o2B.wxXCkey=1
o2B.wxXCkey=3
c3B.wxXCkey=1
c3B.wxXCkey=3
_(r,h1B)
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var e8B=_n('view')
_rz(z,e8B,'class',0,e,s,gg)
var b9B=_v()
_(e8B,b9B)
if(_oz(z,1,e,s,gg)){b9B.wxVkey=1
var o0B=_mz(z,'password-input',['bind:__l',2,'bind:clo',1,'bind:tap',2,'class',3,'data-event-opts',4,'data-ref',5,'gutter',6,'length',7,'list',8,'vueId',9],[],e,s,gg)
_(b9B,o0B)
}
var xAC=_mz(z,'keyboard-package',['bind:__l',12,'bind:onChange',1,'bind:onConfirm',2,'bind:onDelete',3,'bind:onInput',4,'class',5,'data-event-opts',6,'data-ref',7,'disableDot',8,'vueId',9],[],e,s,gg)
_(e8B,xAC)
b9B.wxXCkey=1
b9B.wxXCkey=3
_(r,e8B)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var fCC=_n('view')
_rz(z,fCC,'class',0,e,s,gg)
var cDC=_v()
_(fCC,cDC)
if(_oz(z,1,e,s,gg)){cDC.wxVkey=1
}
var hEC=_v()
_(fCC,hEC)
if(_oz(z,2,e,s,gg)){hEC.wxVkey=1
}
cDC.wxXCkey=1
hEC.wxXCkey=1
_(r,fCC)
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var cGC=_n('view')
var oHC=_v()
_(cGC,oHC)
if(_oz(z,0,e,s,gg)){oHC.wxVkey=1
}
var lIC=_v()
_(cGC,lIC)
if(_oz(z,1,e,s,gg)){lIC.wxVkey=1
}
var aJC=_v()
_(cGC,aJC)
if(_oz(z,2,e,s,gg)){aJC.wxVkey=1
}
var tKC=_v()
_(cGC,tKC)
if(_oz(z,3,e,s,gg)){tKC.wxVkey=1
}
oHC.wxXCkey=1
lIC.wxXCkey=1
aJC.wxXCkey=1
tKC.wxXCkey=1
_(r,cGC)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var bMC=_n('view')
var oNC=_v()
_(bMC,oNC)
if(_oz(z,0,e,s,gg)){oNC.wxVkey=1
var cRC=_v()
_(oNC,cRC)
if(_oz(z,1,e,s,gg)){cRC.wxVkey=1
}
cRC.wxXCkey=1
}
var xOC=_v()
_(bMC,xOC)
if(_oz(z,2,e,s,gg)){xOC.wxVkey=1
}
var oPC=_v()
_(bMC,oPC)
if(_oz(z,3,e,s,gg)){oPC.wxVkey=1
}
var fQC=_v()
_(bMC,fQC)
if(_oz(z,4,e,s,gg)){fQC.wxVkey=1
}
oNC.wxXCkey=1
xOC.wxXCkey=1
oPC.wxXCkey=1
fQC.wxXCkey=1
_(r,bMC)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var oVC=_n('view')
_rz(z,oVC,'class',0,e,s,gg)
var lWC=_v()
_(oVC,lWC)
if(_oz(z,1,e,s,gg)){lWC.wxVkey=1
var aXC=_mz(z,'password-input',['bind:__l',2,'bind:clo',1,'bind:tap',2,'class',3,'data-event-opts',4,'data-ref',5,'gutter',6,'length',7,'list',8,'vueId',9],[],e,s,gg)
_(lWC,aXC)
}
var tYC=_mz(z,'keyboard-package',['bind:__l',12,'bind:onChange',1,'bind:onConfirm',2,'bind:onDelete',3,'bind:onInput',4,'class',5,'data-event-opts',6,'data-ref',7,'disableDot',8,'vueId',9],[],e,s,gg)
_(oVC,tYC)
lWC.wxXCkey=1
lWC.wxXCkey=3
_(r,oVC)
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var f5C=_n('view')
_rz(z,f5C,'class',0,e,s,gg)
var c6C=_v()
_(f5C,c6C)
if(_oz(z,1,e,s,gg)){c6C.wxVkey=1
var h7C=_mz(z,'password-input',['bind:__l',2,'bind:clo',1,'bind:tap',2,'class',3,'data-event-opts',4,'data-ref',5,'gutter',6,'length',7,'list',8,'vueId',9],[],e,s,gg)
_(c6C,h7C)
}
var o8C=_mz(z,'keyboard-package',['bind:__l',12,'bind:onChange',1,'bind:onConfirm',2,'bind:onDelete',3,'bind:onInput',4,'class',5,'data-event-opts',6,'data-ref',7,'disableDot',8,'vueId',9],[],e,s,gg)
_(f5C,o8C)
c6C.wxXCkey=1
c6C.wxXCkey=3
_(r,f5C)
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var aBD=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var tCD=_v()
_(aBD,tCD)
if(_oz(z,2,e,s,gg)){tCD.wxVkey=1
var bED=_n('view')
var oFD=_mz(z,'uni-nav-bar',['backgroundColor',3,'bind:__l',1,'bind:clickLeft',2,'bind:clickRight',3,'color',4,'data-event-opts',5,'fixed',6,'leftIcon',7,'rightText',8,'statusBar',9,'title',10,'vueId',11],[],e,s,gg)
_(bED,oFD)
var xGD=_v()
_(bED,xGD)
var oHD=function(cJD,fID,hKD,gg){
var cMD=_mz(z,'uni-swipe-action',['bind:__l',19,'bind:click',1,'data-event-opts',2,'options',3,'vueId',4,'vueSlots',5],[],cJD,fID,gg)
_(hKD,cMD)
return hKD
}
xGD.wxXCkey=4
_2z(z,17,oHD,e,s,gg,xGD,'item','__i0__','id')
_(tCD,bED)
}
else{tCD.wxVkey=2
var oND=_mz(z,'uni-nav-bar',['backgroundColor',25,'bind:__l',1,'bind:clickLeft',2,'color',3,'data-event-opts',4,'fixed',5,'leftIcon',6,'statusBar',7,'title',8,'vueId',9],[],e,s,gg)
_(tCD,oND)
}
var eDD=_v()
_(aBD,eDD)
if(_oz(z,35,e,s,gg)){eDD.wxVkey=1
var lOD=_mz(z,'password-input',['bind:__l',36,'bind:clo',1,'bind:tap',2,'class',3,'data-event-opts',4,'data-ref',5,'gutter',6,'length',7,'list',8,'vueId',9],[],e,s,gg)
_(eDD,lOD)
}
var aPD=_mz(z,'keyboard-package',['bind:__l',46,'bind:onChange',1,'bind:onConfirm',2,'bind:onDelete',3,'bind:onInput',4,'class',5,'data-event-opts',6,'data-ref',7,'disableDot',8,'vueId',9],[],e,s,gg)
_(aBD,aPD)
tCD.wxXCkey=1
tCD.wxXCkey=3
tCD.wxXCkey=3
eDD.wxXCkey=1
eDD.wxXCkey=3
_(r,aBD)
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var cXD=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var hYD=_v()
_(cXD,hYD)
if(_oz(z,2,e,s,gg)){hYD.wxVkey=1
var c1D=_mz(z,'password-input',['bind:__l',3,'bind:clo',1,'bind:tap',2,'class',3,'data-event-opts',4,'data-ref',5,'gutter',6,'length',7,'list',8,'vueId',9],[],e,s,gg)
_(hYD,c1D)
}
var o2D=_mz(z,'keyboard-package',['bind:__l',13,'bind:onChange',1,'bind:onConfirm',2,'bind:onDelete',3,'bind:onInput',4,'class',5,'data-event-opts',6,'data-ref',7,'disableDot',8,'vueId',9],[],e,s,gg)
_(cXD,o2D)
var oZD=_v()
_(cXD,oZD)
if(_oz(z,23,e,s,gg)){oZD.wxVkey=1
var l3D=_mz(z,'password-input',['bind:__l',24,'bind:clo',1,'bind:tap',2,'class',3,'data-event-opts',4,'data-ref',5,'gutter',6,'length',7,'list',8,'vueId',9],[],e,s,gg)
_(oZD,l3D)
}
var a4D=_mz(z,'keyboard-package',['bind:__l',34,'bind:onChange',1,'bind:onConfirm',2,'bind:onDelete',3,'bind:onInput',4,'class',5,'data-event-opts',6,'data-ref',7,'disableDot',8,'vueId',9],[],e,s,gg)
_(cXD,a4D)
hYD.wxXCkey=1
hYD.wxXCkey=3
oZD.wxXCkey=1
oZD.wxXCkey=3
_(r,cXD)
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
var b7D=_n('view')
_rz(z,b7D,'class',0,e,s,gg)
var o8D=_v()
_(b7D,o8D)
if(_oz(z,1,e,s,gg)){o8D.wxVkey=1
}
var x9D=_v()
_(b7D,x9D)
if(_oz(z,2,e,s,gg)){x9D.wxVkey=1
}
o8D.wxXCkey=1
x9D.wxXCkey=1
_(r,b7D)
return r
}
e_[x[33]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
return r
}
e_[x[34]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
var cBE=_n('view')
_rz(z,cBE,'class',0,e,s,gg)
var hCE=_v()
_(cBE,hCE)
if(_oz(z,1,e,s,gg)){hCE.wxVkey=1
}
var oDE=_v()
_(cBE,oDE)
if(_oz(z,2,e,s,gg)){oDE.wxVkey=1
}
var cEE=_v()
_(cBE,cEE)
if(_oz(z,3,e,s,gg)){cEE.wxVkey=1
}
hCE.wxXCkey=1
oDE.wxXCkey=1
cEE.wxXCkey=1
_(r,cBE)
return r
}
e_[x[35]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
var lGE=_n('view')
_rz(z,lGE,'class',0,e,s,gg)
var aHE=_v()
_(lGE,aHE)
if(_oz(z,1,e,s,gg)){aHE.wxVkey=1
var eJE=_v()
_(aHE,eJE)
var bKE=function(xME,oLE,oNE,gg){
var cPE=_mz(z,'view',['bindtap',6,'class',1,'data-event-opts',2,'id',3],[],xME,oLE,gg)
var hQE=_n('view')
_rz(z,hQE,'class',10,xME,oLE,gg)
var oRE=_n('view')
var cSE=_v()
_(oRE,cSE)
if(_oz(z,11,xME,oLE,gg)){cSE.wxVkey=1
}
else{cSE.wxVkey=2
var aVE=_v()
_(cSE,aVE)
if(_oz(z,12,xME,oLE,gg)){aVE.wxVkey=1
}
aVE.wxXCkey=1
}
var oTE=_v()
_(oRE,oTE)
if(_oz(z,13,xME,oLE,gg)){oTE.wxVkey=1
}
var lUE=_v()
_(oRE,lUE)
if(_oz(z,14,xME,oLE,gg)){lUE.wxVkey=1
}
cSE.wxXCkey=1
oTE.wxXCkey=1
lUE.wxXCkey=1
_(hQE,oRE)
var tWE=_n('view')
var eXE=_v()
_(tWE,eXE)
if(_oz(z,15,xME,oLE,gg)){eXE.wxVkey=1
}
var bYE=_v()
_(tWE,bYE)
if(_oz(z,16,xME,oLE,gg)){bYE.wxVkey=1
}
var oZE=_v()
_(tWE,oZE)
if(_oz(z,17,xME,oLE,gg)){oZE.wxVkey=1
}
var x1E=_v()
_(tWE,x1E)
if(_oz(z,18,xME,oLE,gg)){x1E.wxVkey=1
}
var o2E=_v()
_(tWE,o2E)
if(_oz(z,19,xME,oLE,gg)){o2E.wxVkey=1
}
var f3E=_v()
_(tWE,f3E)
if(_oz(z,20,xME,oLE,gg)){f3E.wxVkey=1
}
eXE.wxXCkey=1
bYE.wxXCkey=1
oZE.wxXCkey=1
x1E.wxXCkey=1
o2E.wxXCkey=1
f3E.wxXCkey=1
_(hQE,tWE)
_(cPE,hQE)
_(oNE,cPE)
return oNE
}
eJE.wxXCkey=2
_2z(z,4,bKE,e,s,gg,eJE,'item','index','index')
}
else{aHE.wxVkey=2
}
var tIE=_v()
_(lGE,tIE)
if(_oz(z,21,e,s,gg)){tIE.wxVkey=1
}
aHE.wxXCkey=1
tIE.wxXCkey=1
_(r,lGE)
return r
}
e_[x[36]]={f:m36,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
var h5E=_mz(z,'dy-date-picker',['bind:__l',0,'bind:getData',1,'data-event-opts',1,'placeholder',2,'timeType',3,'value',4,'vueId',5],[],e,s,gg)
_(r,h5E)
return r
}
e_[x[37]]={f:m37,j:[],i:[],ti:[],ic:[]}
d_[x[38]]={}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
var c7E=_v()
_(r,c7E)
if(_oz(z,0,e,s,gg)){c7E.wxVkey=1
}
c7E.wxXCkey=1
return r
}
e_[x[38]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
return r
}
e_[x[39]]={f:m39,j:[],i:[],ti:[],ic:[]}
d_[x[40]]={}
var m40=function(e,s,r,gg){
var z=gz$gwx_41()
return r
}
e_[x[40]]={f:m40,j:[],i:[],ti:[],ic:[]}
d_[x[41]]={}
var m41=function(e,s,r,gg){
var z=gz$gwx_42()
var tAF=_mz(z,'view',['class',0,'style',1],[],e,s,gg)
var eBF=_v()
_(tAF,eBF)
if(_oz(z,2,e,s,gg)){eBF.wxVkey=1
var bCF=_mz(z,'uni-nav-bar',['backgroundColor',3,'bind:__l',1,'bind:clickLeft',2,'bind:clickRight',3,'color',4,'data-event-opts',5,'fixed',6,'leftIcon',7,'statusBar',8,'title',9,'vueId',10],[],e,s,gg)
_(eBF,bCF)
}
else{eBF.wxVkey=2
var oDF=_mz(z,'uni-nav-bar',['backgroundColor',14,'bind:__l',1,'bind:clickLeft',2,'bind:clickRight',3,'color',4,'data-event-opts',5,'fixed',6,'leftIcon',7,'rightText',8,'statusBar',9,'title',10,'vueId',11],[],e,s,gg)
_(eBF,oDF)
}
eBF.wxXCkey=1
eBF.wxXCkey=3
eBF.wxXCkey=3
_(r,tAF)
return r
}
e_[x[41]]={f:m41,j:[],i:[],ti:[],ic:[]}
d_[x[42]]={}
var m42=function(e,s,r,gg){
var z=gz$gwx_43()
return r
}
e_[x[42]]={f:m42,j:[],i:[],ti:[],ic:[]}
d_[x[43]]={}
var m43=function(e,s,r,gg){
var z=gz$gwx_44()
var fGF=_n('view')
_rz(z,fGF,'class',0,e,s,gg)
var cHF=_v()
_(fGF,cHF)
if(_oz(z,1,e,s,gg)){cHF.wxVkey=1
var hIF=_mz(z,'password-input',['bind:__l',2,'bind:clo',1,'bind:tap',2,'class',3,'data-event-opts',4,'data-ref',5,'gutter',6,'length',7,'list',8,'vueId',9],[],e,s,gg)
_(cHF,hIF)
}
var oJF=_mz(z,'keyboard-package',['bind:__l',12,'bind:onChange',1,'bind:onConfirm',2,'bind:onDelete',3,'bind:onInput',4,'class',5,'data-event-opts',6,'data-ref',7,'disableDot',8,'vueId',9],[],e,s,gg)
_(fGF,oJF)
cHF.wxXCkey=1
cHF.wxXCkey=3
_(r,fGF)
return r
}
e_[x[43]]={f:m43,j:[],i:[],ti:[],ic:[]}
d_[x[44]]={}
var m44=function(e,s,r,gg){
var z=gz$gwx_45()
return r
}
e_[x[44]]={f:m44,j:[],i:[],ti:[],ic:[]}
d_[x[45]]={}
var m45=function(e,s,r,gg){
var z=gz$gwx_46()
var lMF=_n('view')
_rz(z,lMF,'class',0,e,s,gg)
var aNF=_v()
_(lMF,aNF)
if(_oz(z,1,e,s,gg)){aNF.wxVkey=1
}
var tOF=_v()
_(lMF,tOF)
if(_oz(z,2,e,s,gg)){tOF.wxVkey=1
}
aNF.wxXCkey=1
tOF.wxXCkey=1
_(r,lMF)
return r
}
e_[x[45]]={f:m45,j:[],i:[],ti:[],ic:[]}
d_[x[46]]={}
var m46=function(e,s,r,gg){
var z=gz$gwx_47()
return r
}
e_[x[46]]={f:m46,j:[],i:[],ti:[],ic:[]}
d_[x[47]]={}
var m47=function(e,s,r,gg){
var z=gz$gwx_48()
return r
}
e_[x[47]]={f:m47,j:[],i:[],ti:[],ic:[]}
d_[x[48]]={}
var m48=function(e,s,r,gg){
var z=gz$gwx_49()
return r
}
e_[x[48]]={f:m48,j:[],i:[],ti:[],ic:[]}
d_[x[49]]={}
var m49=function(e,s,r,gg){
var z=gz$gwx_50()
return r
}
e_[x[49]]={f:m49,j:[],i:[],ti:[],ic:[]}
d_[x[50]]={}
var m50=function(e,s,r,gg){
var z=gz$gwx_51()
return r
}
e_[x[50]]={f:m50,j:[],i:[],ti:[],ic:[]}
d_[x[51]]={}
var m51=function(e,s,r,gg){
var z=gz$gwx_52()
var cVF=_v()
_(r,cVF)
if(_oz(z,0,e,s,gg)){cVF.wxVkey=1
}
cVF.wxXCkey=1
return r
}
e_[x[51]]={f:m51,j:[],i:[],ti:[],ic:[]}
d_[x[52]]={}
var m52=function(e,s,r,gg){
var z=gz$gwx_53()
return r
}
e_[x[52]]={f:m52,j:[],i:[],ti:[],ic:[]}
d_[x[53]]={}
var m53=function(e,s,r,gg){
var z=gz$gwx_54()
return r
}
e_[x[53]]={f:m53,j:[],i:[],ti:[],ic:[]}
d_[x[54]]={}
var m54=function(e,s,r,gg){
var z=gz$gwx_55()
return r
}
e_[x[54]]={f:m54,j:[],i:[],ti:[],ic:[]}
d_[x[55]]={}
var m55=function(e,s,r,gg){
var z=gz$gwx_56()
return r
}
e_[x[55]]={f:m55,j:[],i:[],ti:[],ic:[]}
d_[x[56]]={}
var m56=function(e,s,r,gg){
var z=gz$gwx_57()
return r
}
e_[x[56]]={f:m56,j:[],i:[],ti:[],ic:[]}
d_[x[57]]={}
var m57=function(e,s,r,gg){
var z=gz$gwx_58()
return r
}
e_[x[57]]={f:m57,j:[],i:[],ti:[],ic:[]}
d_[x[58]]={}
var m58=function(e,s,r,gg){
var z=gz$gwx_59()
return r
}
e_[x[58]]={f:m58,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/start/start","pages/leader/guide","pages/login/login","pages/register/register","pages/index/index","pages/getBackPassword/getBackPassword","pages/setNewPassword/setNewPassword","pages/agreement/agreement","pages/otherLogin/otherLogin","pages/news/news","pages/web1/web1","pages/web2/web2","pages/banner/banner","pages/banner2/banner2","mill/mill/mill","mill/pay/pay","mill/staypay/staypay","mill/stayconfirm/stayconfirm","mill/stayaudit/stayaudit","mill/completed/completed","mill/sale/sale","mill/salepay/salepay","mill/saleconfirm/saleconfirm","mill/saleaudit/saleaudit","mill/salecompleted/salecompleted","mill/assets/assets","mill/sell/sell","mill/validation/validation","mill/confirm/confirm","my/my/my","my/personal/personal","my/add-address/add-address","my/address/address","my/edit-address/edit-address","my/email/email","my/unbindemail/unbindemail","my/identity/identity","my/login-password/login-password","my/change-pass/change-pass","my/change-loginPassword/change-loginPassword","my/change-password/change-password","my/trade-password/trade-password","my/change-otherPassword/change_otherPassword","my/my-machine/my-machine","my/machine-detail/machine-detail","my/my-wallet/my-wallet","my/suggest/suggest","my/suggest-detail/suggest-detail","my/transfer/transfer","my/commit/commit","my/choose-address/choose-address"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"xjyt","navigationBarBackgroundColor":"#121212","backgroundColor":"#121212"},"tabBar":{"color":"#8a8a8a","selectedColor":"#3cbfb1","backgroundColor":"#121212","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"static/images/tab1.png","selectedIconPath":"static/images/tab-index.png"},{"pagePath":"mill/mill/mill","text":"矿机","iconPath":"static/images/tab2.png","selectedIconPath":"static/images/tab-machine.png"},{"pagePath":"mill/assets/assets","text":"资产","iconPath":"static/images/tab3.png","selectedIconPath":"static/images/tab-captial.png"},{"pagePath":"my/my/my","text":"我的","iconPath":"static/images/tab4.png","selectedIconPath":"static/images/tab-mine.png"}]},"networkTimeout":{"uploadFile":20000,"request":20000},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"星际云通","compilerVersion":"2.4.6","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['common/dy-Date.json']={"usingComponents":{},"component":true};
__wxAppCode__['common/dy-Date.wxml']=$gwx('./common/dy-Date.wxml');

__wxAppCode__['components/global.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/global.wxml']=$gwx('./components/global.wxml');

__wxAppCode__['components/keyboard-package/keyboard-package.json']={"usingComponents":{"uni-popup":"/components/uni-popup/uni-popup"},"component":true};
__wxAppCode__['components/keyboard-package/keyboard-package.wxml']=$gwx('./components/keyboard-package/keyboard-package.wxml');

__wxAppCode__['components/password-input/password-input.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/password-input/password-input.wxml']=$gwx('./components/password-input/password-input.wxml');

__wxAppCode__['components/uni-icons/uni-icons.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-icons/uni-icons.wxml']=$gwx('./components/uni-icons/uni-icons.wxml');

__wxAppCode__['components/uni-nav-bar/uni-nav-bar.json']={"usingComponents":{"uni-status-bar":"/components/uni-status-bar/uni-status-bar","uni-icons":"/components/uni-icons/uni-icons"},"component":true};
__wxAppCode__['components/uni-nav-bar/uni-nav-bar.wxml']=$gwx('./components/uni-nav-bar/uni-nav-bar.wxml');

__wxAppCode__['components/uni-popup/uni-popup.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-popup/uni-popup.wxml']=$gwx('./components/uni-popup/uni-popup.wxml');

__wxAppCode__['components/uni-status-bar/uni-status-bar.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-status-bar/uni-status-bar.wxml']=$gwx('./components/uni-status-bar/uni-status-bar.wxml');

__wxAppCode__['components/uni-swipe-action/uni-swipe-action.json']={"usingComponents":{},"component":true};
__wxAppCode__['components/uni-swipe-action/uni-swipe-action.wxml']=$gwx('./components/uni-swipe-action/uni-swipe-action.wxml');

__wxAppCode__['mill/assets/assets.json']={"navigationStyle":"custom","usingComponents":{"dy-date-picker":"/common/dy-Date"}};
__wxAppCode__['mill/assets/assets.wxml']=$gwx('./mill/assets/assets.wxml');

__wxAppCode__['mill/completed/completed.json']={"navigationBarTitleText":"已完成订单详情","usingComponents":{}};
__wxAppCode__['mill/completed/completed.wxml']=$gwx('./mill/completed/completed.wxml');

__wxAppCode__['mill/confirm/confirm.json']={"navigationBarTitleText":"确认订单","usingComponents":{"keyboard-package":"/components/keyboard-package/keyboard-package","password-input":"/components/password-input/password-input"}};
__wxAppCode__['mill/confirm/confirm.wxml']=$gwx('./mill/confirm/confirm.wxml');

__wxAppCode__['mill/mill/mill.json']={"navigationStyle":"custom","usingComponents":{}};
__wxAppCode__['mill/mill/mill.wxml']=$gwx('./mill/mill/mill.wxml');

__wxAppCode__['mill/pay/pay.json']={"navigationBarTitleText":"买单","usingComponents":{}};
__wxAppCode__['mill/pay/pay.wxml']=$gwx('./mill/pay/pay.wxml');

__wxAppCode__['mill/sale/sale.json']={"navigationBarTitleText":"卖单","usingComponents":{}};
__wxAppCode__['mill/sale/sale.wxml']=$gwx('./mill/sale/sale.wxml');

__wxAppCode__['mill/saleaudit/saleaudit.json']={"navigationBarTitleText":"待审核订单详情","usingComponents":{}};
__wxAppCode__['mill/saleaudit/saleaudit.wxml']=$gwx('./mill/saleaudit/saleaudit.wxml');

__wxAppCode__['mill/salecompleted/salecompleted.json']={"navigationBarTitleText":"已完成订单详情","usingComponents":{}};
__wxAppCode__['mill/salecompleted/salecompleted.wxml']=$gwx('./mill/salecompleted/salecompleted.wxml');

__wxAppCode__['mill/saleconfirm/saleconfirm.json']={"navigationBarTitleText":"待确认单详情","usingComponents":{"keyboard-package":"/components/keyboard-package/keyboard-package","password-input":"/components/password-input/password-input"}};
__wxAppCode__['mill/saleconfirm/saleconfirm.wxml']=$gwx('./mill/saleconfirm/saleconfirm.wxml');

__wxAppCode__['mill/salepay/salepay.json']={"navigationBarTitleText":"待付款订单详情","usingComponents":{}};
__wxAppCode__['mill/salepay/salepay.wxml']=$gwx('./mill/salepay/salepay.wxml');

__wxAppCode__['mill/sell/sell.json']={"navigationBarTitleText":"出售","usingComponents":{}};
__wxAppCode__['mill/sell/sell.wxml']=$gwx('./mill/sell/sell.wxml');

__wxAppCode__['mill/stayaudit/stayaudit.json']={"navigationBarTitleText":"待审核订单详情","usingComponents":{}};
__wxAppCode__['mill/stayaudit/stayaudit.wxml']=$gwx('./mill/stayaudit/stayaudit.wxml');

__wxAppCode__['mill/stayconfirm/stayconfirm.json']={"navigationBarTitleText":"待确认订单详情","usingComponents":{}};
__wxAppCode__['mill/stayconfirm/stayconfirm.wxml']=$gwx('./mill/stayconfirm/stayconfirm.wxml');

__wxAppCode__['mill/staypay/staypay.json']={"navigationBarTitleText":"待付款订单详情","usingComponents":{"keyboard-package":"/components/keyboard-package/keyboard-package","password-input":"/components/password-input/password-input"}};
__wxAppCode__['mill/staypay/staypay.wxml']=$gwx('./mill/staypay/staypay.wxml');

__wxAppCode__['mill/validation/validation.json']={"navigationBarTitleText":"验证","usingComponents":{}};
__wxAppCode__['mill/validation/validation.wxml']=$gwx('./mill/validation/validation.wxml');

__wxAppCode__['my/add-address/add-address.json']={"navigationBarTitleText":"新增提币地址","usingComponents":{}};
__wxAppCode__['my/add-address/add-address.wxml']=$gwx('./my/add-address/add-address.wxml');

__wxAppCode__['my/address/address.json']={"navigationStyle":"custom","usingComponents":{"uni-swipe-action":"/components/uni-swipe-action/uni-swipe-action","keyboard-package":"/components/keyboard-package/keyboard-package","password-input":"/components/password-input/password-input","uni-nav-bar":"/components/uni-nav-bar/uni-nav-bar"}};
__wxAppCode__['my/address/address.wxml']=$gwx('./my/address/address.wxml');

__wxAppCode__['my/change-loginPassword/change-loginPassword.json']={"navigationBarTitleText":"设置登录密码","usingComponents":{}};
__wxAppCode__['my/change-loginPassword/change-loginPassword.wxml']=$gwx('./my/change-loginPassword/change-loginPassword.wxml');

__wxAppCode__['my/change-otherPassword/change_otherPassword.json']={"navigationBarTitleText":"找回密码","usingComponents":{}};
__wxAppCode__['my/change-otherPassword/change_otherPassword.wxml']=$gwx('./my/change-otherPassword/change_otherPassword.wxml');

__wxAppCode__['my/change-pass/change-pass.json']={"navigationBarTitleText":"修改登录密码","usingComponents":{}};
__wxAppCode__['my/change-pass/change-pass.wxml']=$gwx('./my/change-pass/change-pass.wxml');

__wxAppCode__['my/change-password/change-password.json']={"navigationBarTitleText":"修改交易密码","usingComponents":{}};
__wxAppCode__['my/change-password/change-password.wxml']=$gwx('./my/change-password/change-password.wxml');

__wxAppCode__['my/choose-address/choose-address.json']={"navigationBarTitleText":"选择地址","usingComponents":{}};
__wxAppCode__['my/choose-address/choose-address.wxml']=$gwx('./my/choose-address/choose-address.wxml');

__wxAppCode__['my/commit/commit.json']={"navigationStyle":"custom","usingComponents":{}};
__wxAppCode__['my/commit/commit.wxml']=$gwx('./my/commit/commit.wxml');

__wxAppCode__['my/edit-address/edit-address.json']={"titleNView":{"titleText":"编辑提币地址","buttons":[{"text":"删除","fontSize":"32rpx","width":"50px"}]},"usingComponents":{"keyboard-package":"/components/keyboard-package/keyboard-package","password-input":"/components/password-input/password-input"}};
__wxAppCode__['my/edit-address/edit-address.wxml']=$gwx('./my/edit-address/edit-address.wxml');

__wxAppCode__['my/email/email.json']={"navigationBarTitleText":"邮箱认证","usingComponents":{}};
__wxAppCode__['my/email/email.wxml']=$gwx('./my/email/email.wxml');

__wxAppCode__['my/identity/identity.json']={"navigationBarTitleText":"身份认证","usingComponents":{}};
__wxAppCode__['my/identity/identity.wxml']=$gwx('./my/identity/identity.wxml');

__wxAppCode__['my/login-password/login-password.json']={"navigationBarTitleText":"修改登录密码","usingComponents":{}};
__wxAppCode__['my/login-password/login-password.wxml']=$gwx('./my/login-password/login-password.wxml');

__wxAppCode__['my/machine-detail/machine-detail.json']={"navigationBarTitleText":"矿机详情","usingComponents":{}};
__wxAppCode__['my/machine-detail/machine-detail.wxml']=$gwx('./my/machine-detail/machine-detail.wxml');

__wxAppCode__['my/my-machine/my-machine.json']={"titleNView":{"titleText":"我的矿机","buttons":[{"text":"服务协议","fontSize":"32rpx","width":"80px"}]},"usingComponents":{}};
__wxAppCode__['my/my-machine/my-machine.wxml']=$gwx('./my/my-machine/my-machine.wxml');

__wxAppCode__['my/my-wallet/my-wallet.json']={"navigationBarTitleText":"我的钱包","usingComponents":{"dy-date-picker":"/common/dy-Date"}};
__wxAppCode__['my/my-wallet/my-wallet.wxml']=$gwx('./my/my-wallet/my-wallet.wxml');

__wxAppCode__['my/my/my.json']={"navigationStyle":"custom","usingComponents":{}};
__wxAppCode__['my/my/my.wxml']=$gwx('./my/my/my.wxml');

__wxAppCode__['my/personal/personal.json']={"navigationBarTitleText":"个人资料","usingComponents":{}};
__wxAppCode__['my/personal/personal.wxml']=$gwx('./my/personal/personal.wxml');

__wxAppCode__['my/suggest-detail/suggest-detail.json']={"navigationBarTitleText":"反馈详情","usingComponents":{}};
__wxAppCode__['my/suggest-detail/suggest-detail.wxml']=$gwx('./my/suggest-detail/suggest-detail.wxml');

__wxAppCode__['my/suggest/suggest.json']={"navigationStyle":"custom","usingComponents":{"uni-nav-bar":"/components/uni-nav-bar/uni-nav-bar"}};
__wxAppCode__['my/suggest/suggest.wxml']=$gwx('./my/suggest/suggest.wxml');

__wxAppCode__['my/trade-password/trade-password.json']={"navigationBarTitleText":"设置交易密码","usingComponents":{}};
__wxAppCode__['my/trade-password/trade-password.wxml']=$gwx('./my/trade-password/trade-password.wxml');

__wxAppCode__['my/transfer/transfer.json']={"navigationBarTitleText":"转账","usingComponents":{"keyboard-package":"/components/keyboard-package/keyboard-package","password-input":"/components/password-input/password-input"}};
__wxAppCode__['my/transfer/transfer.wxml']=$gwx('./my/transfer/transfer.wxml');

__wxAppCode__['my/unbindemail/unbindemail.json']={"navigationBarTitleText":"解绑邮箱","usingComponents":{}};
__wxAppCode__['my/unbindemail/unbindemail.wxml']=$gwx('./my/unbindemail/unbindemail.wxml');

__wxAppCode__['pages/agreement/agreement.json']={"navigationBarTitleText":"用户协议","usingComponents":{}};
__wxAppCode__['pages/agreement/agreement.wxml']=$gwx('./pages/agreement/agreement.wxml');

__wxAppCode__['pages/banner/banner.json']={"titleNView":{"titleText":"文章详情"},"usingComponents":{}};
__wxAppCode__['pages/banner/banner.wxml']=$gwx('./pages/banner/banner.wxml');

__wxAppCode__['pages/banner2/banner2.json']={"titleNView":{"titleText":"文章详情2"},"usingComponents":{}};
__wxAppCode__['pages/banner2/banner2.wxml']=$gwx('./pages/banner2/banner2.wxml');

__wxAppCode__['pages/getBackPassword/getBackPassword.json']={"navigationBarTitleText":"找回密码","usingComponents":{}};
__wxAppCode__['pages/getBackPassword/getBackPassword.wxml']=$gwx('./pages/getBackPassword/getBackPassword.wxml');

__wxAppCode__['pages/index/index.json']={"titleNView":{"titleText":"星际云通"},"usingComponents":{}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/leader/guide.json']={"titleNView":false,"usingComponents":{}};
__wxAppCode__['pages/leader/guide.wxml']=$gwx('./pages/leader/guide.wxml');

__wxAppCode__['pages/login/login.json']={"navigationStyle":"custom","usingComponents":{}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/news/news.json']={"0":"热","1":"门","2":"新","3":"闻","usingComponents":{}};
__wxAppCode__['pages/news/news.wxml']=$gwx('./pages/news/news.wxml');

__wxAppCode__['pages/otherLogin/otherLogin.json']={"navigationStyle":"custom","usingComponents":{}};
__wxAppCode__['pages/otherLogin/otherLogin.wxml']=$gwx('./pages/otherLogin/otherLogin.wxml');

__wxAppCode__['pages/register/register.json']={"navigationStyle":"custom","usingComponents":{}};
__wxAppCode__['pages/register/register.wxml']=$gwx('./pages/register/register.wxml');

__wxAppCode__['pages/setNewPassword/setNewPassword.json']={"navigationBarTitleText":"设置新密码","usingComponents":{}};
__wxAppCode__['pages/setNewPassword/setNewPassword.wxml']=$gwx('./pages/setNewPassword/setNewPassword.wxml');

__wxAppCode__['pages/start/start.json']={"navigationBarTitleText":"启动页","titleNView":false,"usingComponents":{}};
__wxAppCode__['pages/start/start.wxml']=$gwx('./pages/start/start.wxml');

__wxAppCode__['pages/web1/web1.json']={"navigationBarTitleText":"星际云通","usingComponents":{}};
__wxAppCode__['pages/web1/web1.wxml']=$gwx('./pages/web1/web1.wxml');

__wxAppCode__['pages/web2/web2.json']={"navigationBarTitleText":"星际云通","usingComponents":{}};
__wxAppCode__['pages/web2/web2.wxml']=$gwx('./pages/web2/web2.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"234d":function(t,e,n){"use strict";n.r(e);var o=n("6b9b");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);n("31fa");var r,a,c=n("2877"),f=Object(c["a"])(o["default"],r,a,!1,null,null,null);e["default"]=f.exports},"31fa":function(t,e,n){"use strict";var o=n("867d"),u=n.n(o);u.a},4151:function(t,e,n){"use strict";(function(t,e){n("9c0b"),n("921b");var o=a(n("66fd")),u=a(n("234d")),r=a(n("b1e9"));function a(t){return t&&t.__esModule?t:{default:t}}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){f(t,e,n[e])})}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}o.default.config.productionTip=!1,o.default.prototype.global_=r.default,o.default.prototype.url="https://t.api.ipcn.xyz/api/v1.1.0/",u.default.mpType="app";var l=new o.default(c({},u.default));function i(){e.removeStorageSync("token"),e.removeStorageSync("phone")}t(l).$mount(),setInterval(i,2592e3)}).call(this,n("6e42")["createApp"],n("6e42")["default"])},"6b9b":function(t,e,n){"use strict";n.r(e);var o=n("984d"),u=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=u.a},"763c":function(t,e,n){"use strict";function o(t){var e=/^\d{6}$/;return!!e.test(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u="",r="",a={checkPassword:o,token:u,phone:r};e.default=a},"867d":function(t,e,n){},"984d":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={onLaunch:function(){console.log(t("App Launch"," at App.vue:4"))},onShow:function(){console.log(t("App Show"," at App.vue:7"))},onHide:function(){console.log(t("App Hide"," at App.vue:11"))}};e.default=n}).call(this,n("0de9")["default"])},b1e9:function(t,e,n){"use strict";n.r(e);var o=n("d4bc");for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);var r,a,c=n("2877"),f=Object(c["a"])(o["default"],r,a,!1,null,null,null);e["default"]=f.exports},d4bc:function(t,e,n){"use strict";n.r(e);var o=n("763c"),u=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=u.a}},[["4151","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (n) {
  function e(e) {
    for (var o, r, i = e[0], s = e[1], p = e[2], c = 0, l = []; c < i.length; c++) {
      r = i[c], a[r] && l.push(a[r][0]), a[r] = 0;
    }

    for (o in s) {
      Object.prototype.hasOwnProperty.call(s, o) && (n[o] = s[o]);
    }

    m && m(e);

    while (l.length) {
      l.shift()();
    }

    return u.push.apply(u, p || []), t();
  }

  function t() {
    for (var n, e = 0; e < u.length; e++) {
      for (var t = u[e], o = !0, r = 1; r < t.length; r++) {
        var i = t[r];
        0 !== a[i] && (o = !1);
      }

      o && (u.splice(e--, 1), n = s(s.s = t[0]));
    }

    return n;
  }

  var o = {},
      r = {
    "common/runtime": 0
  },
      a = {
    "common/runtime": 0
  },
      u = [];

  function i(n) {
    return s.p + "" + n + ".js";
  }

  function s(e) {
    if (o[e]) return o[e].exports;
    var t = o[e] = {
      i: e,
      l: !1,
      exports: {}
    };
    return n[e].call(t.exports, t, t.exports, s), t.l = !0, t.exports;
  }

  s.e = function (n) {
    var e = [],
        t = {
      "components/keyboard-package/keyboard-package": 1,
      "components/password-input/password-input": 1,
      "common/dy-Date": 1,
      "components/uni-swipe-action/uni-swipe-action": 1,
      "components/uni-nav-bar/uni-nav-bar": 1,
      "components/uni-popup/uni-popup": 1,
      "components/uni-icons/uni-icons": 1,
      "components/uni-status-bar/uni-status-bar": 1
    };
    r[n] ? e.push(r[n]) : 0 !== r[n] && t[n] && e.push(r[n] = new Promise(function (e, t) {
      for (var o = ({
        "components/keyboard-package/keyboard-package": "components/keyboard-package/keyboard-package",
        "components/password-input/password-input": "components/password-input/password-input",
        "common/dy-Date": "common/dy-Date",
        "components/uni-swipe-action/uni-swipe-action": "components/uni-swipe-action/uni-swipe-action",
        "components/uni-nav-bar/uni-nav-bar": "components/uni-nav-bar/uni-nav-bar",
        "components/uni-popup/uni-popup": "components/uni-popup/uni-popup",
        "components/uni-icons/uni-icons": "components/uni-icons/uni-icons",
        "components/uni-status-bar/uni-status-bar": "components/uni-status-bar/uni-status-bar"
      }[n] || n) + ".wxss", a = s.p + o, u = document.getElementsByTagName("link"), i = 0; i < u.length; i++) {
        var p = u[i],
            c = p.getAttribute("data-href") || p.getAttribute("href");
        if ("stylesheet" === p.rel && (c === o || c === a)) return e();
      }

      var l = document.getElementsByTagName("style");

      for (i = 0; i < l.length; i++) {
        p = l[i], c = p.getAttribute("data-href");
        if (c === o || c === a) return e();
      }

      var m = document.createElement("link");
      m.rel = "stylesheet", m.type = "text/css", m.onload = e, m.onerror = function (e) {
        var o = e && e.target && e.target.src || a,
            u = new Error("Loading CSS chunk " + n + " failed.\n(" + o + ")");
        u.request = o, delete r[n], m.parentNode.removeChild(m), t(u);
      }, m.href = a;
      var d = document.getElementsByTagName("head")[0];
      d.appendChild(m);
    }).then(function () {
      r[n] = 0;
    }));
    var o = a[n];
    if (0 !== o) if (o) e.push(o[2]);else {
      var u = new Promise(function (e, t) {
        o = a[n] = [e, t];
      });
      e.push(o[2] = u);
      var p,
          c = document.createElement("script");
      c.charset = "utf-8", c.timeout = 120, s.nc && c.setAttribute("nonce", s.nc), c.src = i(n), p = function p(e) {
        c.onerror = c.onload = null, clearTimeout(l);
        var t = a[n];

        if (0 !== t) {
          if (t) {
            var o = e && ("load" === e.type ? "missing" : e.type),
                r = e && e.target && e.target.src,
                u = new Error("Loading chunk " + n + " failed.\n(" + o + ": " + r + ")");
            u.type = o, u.request = r, t[1](u);
          }

          a[n] = void 0;
        }
      };
      var l = setTimeout(function () {
        p({
          type: "timeout",
          target: c
        });
      }, 12e4);
      c.onerror = c.onload = p, document.head.appendChild(c);
    }
    return Promise.all(e);
  }, s.m = n, s.c = o, s.d = function (n, e, t) {
    s.o(n, e) || Object.defineProperty(n, e, {
      enumerable: !0,
      get: t
    });
  }, s.r = function (n) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(n, "__esModule", {
      value: !0
    });
  }, s.t = function (n, e) {
    if (1 & e && (n = s(n)), 8 & e) return n;
    if (4 & e && "object" === typeof n && n && n.__esModule) return n;
    var t = Object.create(null);
    if (s.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: n
    }), 2 & e && "string" != typeof n) for (var o in n) {
      s.d(t, o, function (e) {
        return n[e];
      }.bind(null, o));
    }
    return t;
  }, s.n = function (n) {
    var e = n && n.__esModule ? function () {
      return n["default"];
    } : function () {
      return n;
    };
    return s.d(e, "a", e), e;
  }, s.o = function (n, e) {
    return Object.prototype.hasOwnProperty.call(n, e);
  }, s.p = "/", s.oe = function (n) {
    throw console.error(n), n;
  };
  var p = global["webpackJsonp"] = global["webpackJsonp"] || [],
      c = p.push.bind(p);
  p.push = e, p = p.slice();

  for (var l = 0; l < p.length; l++) {
    e(p[l]);
  }

  var m = c;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(t,e,i){"use strict";function n(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function a(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];var a=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(a){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var i=n(t).toUpperCase();t="NUMBER"===i||"BOOLEAN"===i?"---BEGIN:"+i+"---"+t+"---END:"+i+"---":String(t)}return t}),r="";if(a.length>1){var o=a.pop();r=a.join("---COMMA---"),0===o.indexOf(" at ")?r+=o:r+="---COMMA---"+o}else r=a[0];return r}Object.defineProperty(e,"__esModule",{value:!0}),e.default=a},2877:function(t,e,i){"use strict";function n(t,e,i,n,a,r,o,s){var l,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=i,c._compiled=!0),n&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),o?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):a&&(l=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),l)if(c.functional){c._injectStyles=l;var h=c.render;c.render=function(t,e){return l.call(e),h(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}i.d(e,"a",function(){return n})},"45f4":function(t,e,i){"use strict";(function(e,i){var n={yAxisWidth:15,yAxisSplit:5,xAxisHeight:15,xAxisLineHeight:15,legendHeight:15,yAxisTitleWidth:15,padding:[10,10,10,10],pixelRatio:1,rotate:!1,columePadding:3,fontSize:13,dataPointShape:["circle","circle","circle","circle"],colors:["#1890ff","#2fc25b","#facc14","#f04864","#8543e0","#90ed7d"],pieChartLinePadding:15,pieChartTextPadding:5,xAxisTextPadding:3,titleColor:"#333333",titleFontSize:20,subtitleColor:"#999999",subtitleFontSize:15,toolTipPadding:3,toolTipBackground:"#000000",toolTipOpacity:.7,toolTipLineHeight:20,radarLabelTextMargin:15,gaugeLabelTextMargin:15},a=function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];if(null==t)throw new TypeError("Cannot convert undefined or null to object");if(!i||i.length<=0)return t;function a(t,e){for(var i in e)t[i]=t[i]&&"[object Object]"===t[i].toString()?a(t[i],e[i]):t[i]=e[i];return t}return i.forEach(function(e){t=a(t,e)}),t},r={toFixed:function(t,e){return e=e||2,this.isFloat(t)&&(t=t.toFixed(e)),t},isFloat:function(t){return t%1!==0},approximatelyEqual:function(t,e){return Math.abs(t-e)<1e-10},isSameSign:function(t,e){return Math.abs(t)===t&&Math.abs(e)===e||Math.abs(t)!==t&&Math.abs(e)!==e},isSameXCoordinateArea:function(t,e){return this.isSameSign(t.x,e.x)},isCollision:function(t,e){t.end={},t.end.x=t.start.x+t.width,t.end.y=t.start.y-t.height,e.end={},e.end.x=e.start.x+e.width,e.end.y=e.start.y-e.height;var i=e.start.x>t.end.x||e.end.x<t.start.x||e.end.y>t.start.y||e.start.y<t.end.y;return!i}};function o(t,e){var i=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=t.replace(i,function(t,e,i,n){return e+e+i+i+n+n}),a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),r=parseInt(a[1],16),o=parseInt(a[2],16),s=parseInt(a[3],16);return"rgba("+r+","+o+","+s+","+e+")"}function s(t,e,i){if(isNaN(t))throw new Error("[uCharts] unvalid series data!");i=i||10,e=e||"upper";var n=1;while(i<1)i*=10,n*=10;t="upper"===e?Math.ceil(t*n):Math.floor(t*n);while(t%i!==0)"upper"===e?t++:t--;return t/n}function l(t,e,i,n){for(var a=[],r=0;r<t.length;r++){for(var o={data:[],name:e[r],color:i[r]},s=0,l=n.length;s<l;s++)if(s<t[r])o.data.push(null);else{for(var c=0,h=0;h<t[r];h++)c+=n[s-h][1];o.data.push(+(c/t[r]).toFixed(3))}a.push(o)}return a}function c(t,e,i,n,a){var r=a.width-a.area[1]-a.area[3],o=i.eachSpacing*(a.chartData.xAxisData.xAxisPoints.length-1),s=e;return e>=0?(s=0,t.event.trigger("scrollLeft")):Math.abs(e)>=o-r&&(s=r-o,t.event.trigger("scrollRight")),s}function h(t,e,i){function n(t){while(t<0)t+=2*Math.PI;while(t>2*Math.PI)t-=2*Math.PI;return t}return t=n(t),e=n(e),i=n(i),e>i&&(i+=2*Math.PI,t<e&&(t+=2*Math.PI)),t>=e&&t<=i}function u(t,e,i){var n=t,a=i-e,r=n+(i-a-n)/Math.sqrt(2);r*=-1;var o=(i-a)*(Math.sqrt(2)-1)-(i-a-n)/Math.sqrt(2);return{transX:r,transY:o}}function p(t,e){function i(t,e){return!(!t[e-1]||!t[e+1])&&(t[e].y>=Math.max(t[e-1].y,t[e+1].y)||t[e].y<=Math.min(t[e-1].y,t[e+1].y))}var n=.2,a=.2,r=null,o=null,s=null,l=null;if(e<1?(r=t[0].x+(t[1].x-t[0].x)*n,o=t[0].y+(t[1].y-t[0].y)*n):(r=t[e].x+(t[e+1].x-t[e-1].x)*n,o=t[e].y+(t[e+1].y-t[e-1].y)*n),e>t.length-3){var c=t.length-1;s=t[c].x-(t[c].x-t[c-1].x)*a,l=t[c].y-(t[c].y-t[c-1].y)*a}else s=t[e+1].x-(t[e+2].x-t[e].x)*a,l=t[e+1].y-(t[e+2].y-t[e].y)*a;return i(t,e+1)&&(l=t[e+1].y),i(t,e)&&(o=t[e].y),(o>=Math.max(t[e].y,t[e+1].y)||o<=Math.min(t[e].y,t[e+1].y))&&(o=t[e].y),(l>=Math.max(t[e].y,t[e+1].y)||l<=Math.min(t[e].y,t[e+1].y))&&(l=t[e+1].y),{ctrA:{x:r,y:o},ctrB:{x:s,y:l}}}function f(t,e,i){return{x:i.x+t,y:i.y-e}}function d(t,e){if(e)while(r.isCollision(t,e))t.start.x>0?t.start.y--:t.start.x<0?t.start.y++:t.start.y>0?t.start.y++:t.start.y--;return t}function g(t,e,i){var n=0;return t.map(function(t){if(t.color||(t.color=i.colors[n],n=(n+1)%i.colors.length),t.index||(t.index=0),t.type||(t.type=e.type),"undefined"==typeof t.show&&(t.show=!0),t.type||(t.type=e.type),t.pointShape||(t.pointShape="circle"),!t.legendShape)switch(t.type){case"line":t.legendShape="line";break;case"column":t.legendShape="rect";break;case"area":t.legendShape="triangle";break;default:t.legendShape="circle"}return t})}function v(t,e){var i=0,n=e-t;return i=n>=1e4?1e3:n>=1e3?100:n>=100?10:n>=10?5:n>=1?1:n>=.1?.1:n>=.01?.01:n>=.001?.001:n>=1e-4?1e-4:n>=1e-5?1e-5:1e-6,{minRange:s(t,"lower",i),maxRange:s(e,"upper",i)}}function y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.fontSize;t=String(t);t=t.split("");for(var i=0,a=0;a<t.length;a++){var r=t[a];/[a-zA-Z]/.test(r)?i+=7:/[0-9]/.test(r)?i+=5.5:/\./.test(r)?i+=2.7:/-/.test(r)?i+=3.25:/[\u4e00-\u9fa5]/.test(r)?i+=10:/\(|\)/.test(r)?i+=3.73:/\s/.test(r)?i+=2.5:/%/.test(r)?i+=8:i+=10}return i*e/10}function x(t){return t.reduce(function(t,e){return(t.data?t.data:t).concat(e.data)},[])}function m(t,e){for(var i=new Array(e),n=0;n<i.length;n++)i[n]=0;for(var a=0;a<t.length;a++)for(n=0;n<i.length;n++)i[n]+=t[a].data[n];return t.reduce(function(t,e){return(t.data?t.data:t).concat(e.data).concat(i)},[])}function _(t,e,i){var n,a;return t.clientX?e.rotate?(a=e.height-t.clientX*e.pixelRatio,n=(t.pageY-i.currentTarget.offsetTop-e.height/e.pixelRatio/2*(e.pixelRatio-1))*e.pixelRatio):(n=t.clientX*e.pixelRatio,a=(t.pageY-i.currentTarget.offsetTop-e.height/e.pixelRatio/2*(e.pixelRatio-1))*e.pixelRatio):e.rotate?(a=e.height-t.x*e.pixelRatio,n=t.y*e.pixelRatio):(n=t.x*e.pixelRatio,a=t.y*e.pixelRatio),{x:n,y:a}}function b(t,e){for(var i=[],n=0;n<t.length;n++){var a=t[n];if(null!==a.data[e]&&"undefined"!==typeof a.data[e]&&a.show){var r={};r.color=a.color,r.type=a.type,r.style=a.style,r.pointShape=a.pointShape,r.disableLegend=a.disableLegend,r.name=a.name,r.show=a.show,r.data=a.format?a.format(a.data[e]):a.data[e],i.push(r)}}return i}function w(t){var e=t.map(function(t){return y(t)});return Math.max.apply(null,e)}function S(t){for(var e=2*Math.PI/t,i=[],n=0;n<t;n++)i.push(e*n);return i.map(function(t){return-1*t+Math.PI/2})}function A(t,e,i,n){for(var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},r=t.map(function(t){var e=[];return e=n||t.data,{text:a.format?a.format(t,e[i]):t.name+": "+t.data,color:t.color}}),o=[],s={x:0,y:0},l=0;l<e.length;l++){var c=e[l];"undefined"!==typeof c[i]&&null!==c[i]&&o.push(c[i])}for(var h=0;h<o.length;h++){var u=o[h];s.x=Math.round(u.x),s.y+=u.y}return s.y/=o.length,{textList:r,offset:s}}function T(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},r=t.map(function(t){return{text:a.format?a.format(t,n[i]):t.name+": "+t.data,color:t.color,disableLegend:!!t.disableLegend}});r=r.filter(function(t){if(!0!==t.disableLegend)return t});for(var o=[],s={x:0,y:0},l=0;l<e.length;l++){var c=e[l];"undefined"!==typeof c[i]&&null!==c[i]&&o.push(c[i])}for(var h=0;h<o.length;h++){var u=o[h];s.x=Math.round(u.x),s.y+=u.y}return s.y/=o.length,{textList:r,offset:s}}function P(t,e,i,n,a,r){arguments.length>6&&void 0!==arguments[6]&&arguments[6];var o=r.color.upFill,s=r.color.downFill,l=[o,o,s,o],c=[],h={text:a[n],color:null};c.push(h),e.map(function(e){0==n&&e.data[1]-e.data[0]<0?l[1]=s:(e.data[0]<t[n-1][1]&&(l[0]=s),e.data[1]<e.data[0]&&(l[1]=s),e.data[2]>t[n-1][1]&&(l[2]=o),e.data[3]<t[n-1][1]&&(l[3]=s));var i={text:"开盘："+e.data[0],color:l[0]},a={text:"收盘："+e.data[1],color:l[1]},r={text:"最低："+e.data[2],color:l[2]},h={text:"最高："+e.data[3],color:l[3]};c.push(i,a,r,h)});for(var u=[],p={x:0,y:0},f=0;f<i.length;f++){var d=i[f];"undefined"!==typeof d[n]&&null!==d[n]&&u.push(d[n])}return p.x=Math.round(u[0][0].x),{textList:c,offset:p}}function k(t){for(var e=[],i=0;i<t.length;i++)1==t[i].show&&e.push(t[i]);return e}function D(t,e,i,n){for(var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,r=-1,o=0,s=[],l=0;l<e[0].length;l++)s.push(e[0][l].x);return"line"!=i.type&&"area"!=i.type||"justify"!=i.xAxis.boundaryGap||(o=i.chartData.eachSpacing/2),i.categories||(o=0),M(t,i,n)&&s.forEach(function(e,i){t.x+a+o>e&&(r=i)}),r}function O(t,e,i){var n=-1;if($(t,e.area)){for(var a=e.points,r=-1,o=0,s=a.length;o<s;o++)for(var l=a[o],c=0;c<l.length;c++){r+=1;var h=l[c]["area"];if(t.x>h[0]&&t.x<h[2]&&t.y>h[1]&&t.y<h[3]){n=r;break}}return n}return n}function $(t,e){return t.x>e.start.x&&t.x<e.end.x&&t.y>e.start.y&&t.y<e.end.y}function M(t,e,i){return t.x<=e.width-e.area[1]+10&&t.x>=e.area[3]-10&&t.y>=e.area[0]&&t.y<=e.height-e.area[2]}function C(t,e,i){var n=2*Math.PI/i,a=-1;if(E(t,e.center,e.radius)){var r=function(t){return t<0&&(t+=2*Math.PI),t>2*Math.PI&&(t-=2*Math.PI),t},o=Math.atan2(e.center.y-t.y,t.x-e.center.x);o*=-1,o<0&&(o+=2*Math.PI);var s=e.angleList.map(function(t){return t=r(-1*t),t});s.forEach(function(t,e){var i=r(t-n/2),s=r(t+n/2);s<i&&(s+=2*Math.PI),(o>=i&&o<=s||o+2*Math.PI>=i&&o+2*Math.PI<=s)&&(a=e)})}return a}function R(t,e){for(var i=-1,n=0,a=e.series.length;n<a;n++){var r=e.series[n];if(t.x>r.funnelArea[0]&&t.x<r.funnelArea[2]&&t.y>r.funnelArea[1]&&t.y<r.funnelArea[3]){i=n;break}}return i}function L(t,e){for(var i=-1,n=0,a=e.length;n<a;n++){var r=e[n];if(t.x>r.area[0]&&t.x<r.area[2]&&t.y>r.area[1]&&t.y<r.area[3]){i=n;break}}return i}function F(t,e){for(var i=-1,n=e.chartData.mapData,a=e.series,r=zt(t.y,t.x,n.bounds,n.scale,n.xoffset,n.yoffset),o=[r.x,r.y],s=0,l=a.length;s<l;s++){var c=a[s].geometry.coordinates;if(Bt(o,c)){i=s;break}}return i}function I(t,e){var i=-1;if(E(t,e.center,e.radius)){var n=Math.atan2(e.center.y-t.y,t.x-e.center.x);n=-n;for(var a=0,r=e.series.length;a<r;a++){var o=e.series[a];if(h(n,o._start_,o._start_+2*o._proportion_*Math.PI)){i=a;break}}}return i}function E(t,e,i){return Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)<=Math.pow(i,2)}function j(t){var e=[],i=[];return t.forEach(function(t,n){null!==t?i.push(t):(i.length&&e.push(i),i=[])}),i.length&&e.push(i),e}function z(t,e,i,n){var a={area:{start:{x:0,y:0},end:{x:0,y:0},width:0,height:0,wholeWidth:0,wholeHeight:0},points:[],widthArr:[],heightArr:[]};if(!1===e.legend.show)return n.legendData=a,a;var r=e.legend.padding,o=e.legend.margin,s=e.legend.fontSize,l=15*e.pixelRatio,c=5*e.pixelRatio,h=Math.max(e.legend.lineHeight*e.pixelRatio,s);if("top"==e.legend.position||"bottom"==e.legend.position){for(var u=[],p=0,f=[],d=[],g=0;g<t.length;g++){var v=t[g],x=l+c+y(v.name||"undefined",s)+e.legend.itemGap;p+x>e.width-e.padding[1]-e.padding[3]?(u.push(d),f.push(p-e.legend.itemGap),p=x,d=[v]):(p+=x,d.push(v))}if(d.length){u.push(d),f.push(p-e.legend.itemGap),a.widthArr=f;var m=Math.max.apply(null,f);switch(e.legend.float){case"left":a.area.start.x=e.padding[3],a.area.end.x=e.padding[3]+2*r;break;case"right":a.area.start.x=e.width-e.padding[1]-m-2*r,a.area.end.x=e.width-e.padding[1];break;default:a.area.start.x=(e.width-m)/2-r,a.area.end.x=(e.width+m)/2+r}a.area.width=m+2*r,a.area.wholeWidth=m+2*r,a.area.height=u.length*h+2*r,a.area.wholeHeight=u.length*h+2*r+2*o,a.points=u}}else{var _=t.length,b=e.height-e.padding[0]-e.padding[2]-2*o-2*r,w=Math.min(Math.floor(b/h),_);switch(a.area.height=w*h+2*r,a.area.wholeHeight=w*h+2*r,e.legend.float){case"top":a.area.start.y=e.padding[0]+o,a.area.end.y=e.padding[0]+o+a.area.height;break;case"bottom":a.area.start.y=e.height-e.padding[2]-o-a.area.height,a.area.end.y=e.height-e.padding[2]-o;break;default:a.area.start.y=(e.height-a.area.height)/2,a.area.end.y=(e.height+a.area.height)/2}for(var S=_%w===0?_/w:Math.floor(_/w+1),A=[],T=0;T<S;T++){var P=t.slice(T*w,T*w+w);A.push(P)}if(a.points=A,A.length){for(var k=0;k<A.length;k++){for(var D=A[k],O=0,$=0;$<D.length;$++){var M=l+c+y(D[$].name||"undefined",s)+e.legend.itemGap;M>O&&(O=M)}a.widthArr.push(O),a.heightArr.push(D.length*h+2*r)}for(var C=0,R=0;R<a.widthArr.length;R++)C+=a.widthArr[R];a.area.width=C-e.legend.itemGap+2*r,a.area.wholeWidth=a.area.width+r}}switch(e.legend.position){case"top":a.area.start.y=e.padding[0]+o,a.area.end.y=e.padding[0]+o+a.area.height;break;case"bottom":a.area.start.y=e.height-e.padding[2]-a.area.height-o,a.area.end.y=e.height-e.padding[2]-o;break;case"left":a.area.start.x=e.padding[3],a.area.end.x=e.padding[3]+a.area.width;break;case"right":a.area.start.x=e.width-e.padding[1]-a.area.width,a.area.end.x=e.width-e.padding[1];break}return n.legendData=a,a}function N(t,e,i,n){var a={angle:0,xAxisHeight:i.xAxisHeight},r=t.map(function(t){return y(t,e.xAxis.fontSize||i.fontSize)}),o=Math.max.apply(this,r);return 1==e.xAxis.rotateLabel&&o+2*i.xAxisTextPadding>n&&(a.angle=45*Math.PI/180,a.xAxisHeight=2*i.xAxisTextPadding+o*Math.sin(a.angle)),a}function B(t,e,i){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,a=x(t),r=[];a=a.filter(function(t){return"object"===typeof t&&null!==t?t.constructor==Array?null!==t:null!==t.value:null!==t}),a.map(function(t){"object"===typeof t?t.constructor==Array?"candle"==e.type?t.map(function(t){r.push(t)}):r.push(t[0]):r.push(t.value):r.push(t)});var o=0,s=0;if(r.length>0&&(o=Math.min.apply(this,r),s=Math.max.apply(this,r)),n>-1?("number"===typeof e.xAxis.data[n].min&&(o=Math.min(e.xAxis.data[n].min,o)),"number"===typeof e.xAxis.data[n].max&&(s=Math.max(e.xAxis.data[n].max,s))):("number"===typeof e.xAxis.min&&(o=Math.min(e.xAxis.min,o)),"number"===typeof e.xAxis.max&&(s=Math.max(e.xAxis.max,s))),o===s){var l=s||10;s+=l}for(var c=v(o,s),h=c.minRange,u=c.maxRange,p=[],f=(u-h)/e.xAxis.splitNumber,d=0;d<=e.xAxis.splitNumber;d++)p.push(h+f*d);return p}function W(t,e,i){var n={angle:0,xAxisHeight:i.xAxisHeight};n.ranges=B(t,e,i),n.rangesFormat=n.ranges.map(function(t){return t=e.xAxis.format?e.xAxis.format(t):r.toFixed(t,2),t});var a=n.ranges.map(function(t){return t=r.toFixed(t,2),t=e.xAxis.format?e.xAxis.format(Number(t)):t,t});n=Object.assign(n,tt(a,e,i));var o=n.eachSpacing,s=a.map(function(t){return y(t)}),l=Math.max.apply(this,s);return l+2*i.xAxisTextPadding>o&&(n.angle=45*Math.PI/180,n.xAxisHeight=2*i.xAxisTextPadding+l*Math.sin(n.angle)),!0===e.xAxis.disabled&&(n.xAxisHeight=0),n}function H(t,e,i,n,a){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,o=a.extra.radar||{};o.max=o.max||0;for(var s=Math.max(o.max,Math.max.apply(null,x(n))),l=[],c=function(a){var o=n[a],c={};c.color=o.color,c.legendShape=o.legendShape,c.pointShape=o.pointShape,c.data=[],o.data.forEach(function(n,a){var o={};o.angle=t[a],o.proportion=n/s,o.position=f(i*o.proportion*r*Math.cos(o.angle),i*o.proportion*r*Math.sin(o.angle),e),c.data.push(o)}),l.push(c)},h=0;h<n.length;h++)c(h);return l}function V(t,e){for(var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=0,a=0,r=0;r<t.length;r++){var o=t[r];o.data=null===o.data?0:o.data,n+=o.data}for(var s=0;s<t.length;s++){var l=t[s];l.data=null===l.data?0:l.data,l._proportion_=0===n?1/t.length*i:l.data/n*i,l._radius_=e}for(var c=0;c<t.length;c++){var h=t[c];h._start_=a,a+=2*h._proportion_*Math.PI}return t}function q(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;t=t.sort(function(t,e){return parseInt(e.data)-parseInt(t.data)});for(var n=0;n<t.length;n++)t[n].radius=t[n].data/t[0].data*e*i,t[n]._proportion_=t[n].data/t[0].data;return t.reverse()}function U(t,e,i,n){for(var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,r=0,o=0,s=[],l=0;l<t.length;l++){var c=t[l];c.data=null===c.data?0:c.data,r+=c.data,s.push(c.data)}for(var h=Math.min.apply(null,s),u=Math.max.apply(null,s),p=n-i,f=0;f<t.length;f++){var d=t[f];d.data=null===d.data?0:d.data,0===r||"area"==e?(d._proportion_=d.data/r*a,d._rose_proportion_=1/t.length*a):(d._proportion_=d.data/r*a,d._rose_proportion_=d.data/r*a),d._radius_=i+p*((d.data-h)/(u-h))}for(var g=0;g<t.length;g++){var v=t[g];v._start_=o,o+=2*v._rose_proportion_*Math.PI}return t}function X(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;1==i&&(i=.999999);for(var n=0;n<t.length;n++){var a=t[n];a.data=null===a.data?0:a.data;var r=void 0;r="circle"==e.type?2:e.endAngle<e.startAngle?2+e.endAngle-e.startAngle:e.startAngle-e.endAngle,a._proportion_=r*a.data*i+e.startAngle,a._proportion_>=2&&(a._proportion_=a._proportion_%2)}return t}function G(t,e,i){for(var n=e-i+1,a=e,r=0;r<t.length;r++)t[r].value=null===t[r].value?0:t[r].value,t[r]._startAngle_=a,t[r]._endAngle_=n*t[r].value+e,t[r]._endAngle_>=2&&(t[r]._endAngle_=t[r]._endAngle_%2),a=t[r]._endAngle_;return t}function J(t,e,i){for(var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,a=0;a<t.length;a++){var r=t[a];if(r.data=null===r.data?0:r.data,"auto"==i.pointer.color){for(var o=0;o<e.length;o++)if(r.data<=e[o].value){r.color=e[o].color;break}}else r.color=i.pointer.color;var s=i.startAngle-i.endAngle+1;r._endAngle_=s*r.data+i.startAngle,r._oldAngle_=i.oldAngle,i.oldAngle<i.endAngle&&(r._oldAngle_+=2),r.data>=i.oldData?r._proportion_=(r._endAngle_-r._oldAngle_)*n+i.oldAngle:r._proportion_=r._oldAngle_-(r._oldAngle_-r._endAngle_)*n,r._proportion_>=2&&(r._proportion_=r._proportion_%2)}return t}function K(t){t=V(t);for(var e=0,i=0;i<t.length;i++){var n=t[i],a=n.format?n.format(+n._proportion_.toFixed(2)):r.toFixed(100*n._proportion_)+"%";e=Math.max(e,y(a))}return e}function Y(t,e,i,n,a,r){return t.map(function(t){return null===t?null:(t.width=Math.ceil((e-2*a.columePadding)/i),r.extra.column&&r.extra.column.width&&+r.extra.column.width>0&&(t.width=Math.min(t.width,+r.extra.column.width)),t.width<=0&&(t.width=1),t.x+=(n+.5-i/2)*t.width,t)})}function Z(t,e,i,n,a,r,o){return t.map(function(t){return null===t?null:(t.width=Math.ceil((e-2*a.columePadding)/2),r.extra.column&&r.extra.column.width&&+r.extra.column.width>0&&(t.width=Math.min(t.width,+r.extra.column.width)),n>0&&(t.width-=2*o),t)})}function Q(t,e,i,n,a,r,o){return t.map(function(t,i){return null===t?null:(t.width=Math.ceil((e-2*a.columePadding)/2),r.extra.column&&r.extra.column.width&&+r.extra.column.width>0&&(t.width=Math.min(t.width,+r.extra.column.width)),t)})}function tt(t,e,i){var n=e.width-e.area[1]-e.area[3],a=e.enableScroll?Math.min(e.xAxis.itemCount,t.length):t.length;("line"==e.type||"area"==e.type)&&a>1&&"justify"==e.xAxis.boundaryGap&&(a-=1);var r=n/a,o=[],s=e.area[3],l=e.width-e.area[1];return t.forEach(function(t,e){o.push(s+e*r)}),"justify"!==e.xAxis.boundaryGap&&(!0===e.enableScroll?o.push(s+t.length*r):o.push(l)),{xAxisPoints:o,startX:s,endX:l,eachSpacing:r}}function et(t,e,i,n,a,r,o){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,l=[],c=r.height-r.area[0]-r.area[2];return t.forEach(function(t,o){if(null===t)l.push(null);else{var h=[];t.forEach(function(t,l){var u={};u.x=n[o]+Math.round(a/2);var p=t.value||t,f=c*(p-e)/(i-e);f*=s,u.y=r.height-Math.round(f)-r.area[2],h.push(u)}),l.push(h)}}),l}function it(t,e,i,n,a,r,o){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,l="center";"line"!=r.type&&"area"!=r.type||(l=r.xAxis.boundaryGap);var c=[],h=r.height-r.area[0]-r.area[2],u=r.width-r.area[1]-r.area[3];return t.forEach(function(t,o){if(null===t)c.push(null);else{var p={};p.color=t.color,p.x=n[o];var f,d,g,v=t;if("object"===typeof t&&null!==t)if(t.constructor==Array)f=[].concat(r.chartData.xAxisData.ranges),d=f.shift(),g=f.pop(),v=t[1],p.x=r.area[3]+u*(t[0]-d)/(g-d);else v=t.value;"center"==l&&(p.x+=Math.round(a/2));var y=h*(v-e)/(i-e);y*=s,p.y=r.height-Math.round(y)-r.area[2],c.push(p)}}),c}function nt(t,e,i,n,a,r,o,s,l){var c=arguments.length>9&&void 0!==arguments[9]?arguments[9]:1,h=[],u=r.height-r.area[0]-r.area[2];return t.forEach(function(t,o){if(null===t)h.push(null);else{var p={};if(p.color=t.color,p.x=n[o]+Math.round(a/2),s>0){for(var f=0,d=0;d<=s;d++)f+=l[d].data[o];var g=f-t,v=u*(f-e)/(i-e),y=u*(g-e)/(i-e)}else f=t,v=u*(f-e)/(i-e),y=0;var x=y;v*=c,x*=c,p.y=r.height-Math.round(v)-r.area[2],p.y0=r.height-Math.round(x)-r.area[2],h.push(p)}}),h}function at(t,e,i,n){var a,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1;a="stack"==n?m(t,e.categories.length):x(t);var o=[];a=a.filter(function(t){return"object"===typeof t&&null!==t?t.constructor==Array?null!==t:null!==t.value:null!==t}),a.map(function(t){"object"===typeof t?t.constructor==Array?"candle"==e.type?t.map(function(t){o.push(t)}):o.push(t[1]):o.push(t.value):o.push(t)});var s=0,l=0;if(o.length>0&&(s=Math.min.apply(this,o),l=Math.max.apply(this,o)),r>-1?("number"===typeof e.yAxis.data[r].min&&(s=Math.min(e.yAxis.data[r].min,s)),"number"===typeof e.yAxis.data[r].max&&(l=Math.max(e.yAxis.data[r].max,l))):("number"===typeof e.yAxis.min&&(s=Math.min(e.yAxis.min,s)),"number"===typeof e.yAxis.max&&(l=Math.max(e.yAxis.max,l))),s===l){var c=l||10;l+=c}for(var h=v(s,l),u=h.minRange,p=h.maxRange,f=[],d=(p-u)/e.yAxis.splitNumber,g=0;g<=e.yAxis.splitNumber;g++)f.push(u+d*g);return f.reverse()}function rt(t,e,i){var n=a({},{type:""},e.extra.column),o=e.yAxis.data.length,s=new Array(o);if(o>0){for(var l=0;l<o;l++){s[l]=[];for(var c=0;c<t.length;c++)t[c].index==l&&s[l].push(t[c])}for(var h=new Array(o),u=new Array(o),p=new Array(o),f=function(t){var a=e.yAxis.data[t];1==e.yAxis.disabled&&(a.disabled=!0),h[t]=at(s[t],e,i,n.type,t);var o=a.fontSize||i.fontSize;p[t]={position:a.position?a.position:"left",width:0},u[t]=h[t].map(function(e){return e=r.toFixed(e,6),e=a.format?a.format(Number(e)):e,p[t].width=Math.max(p[t].width,y(e,o)+5),e});var l=a.calibration?4*e.pixelRatio:0;p[t].width+=l+3*e.pixelRatio,!0===a.disabled&&(p[t].width=0)},d=0;d<o;d++)f(d)}else{h=new Array(1),u=new Array(1),p=new Array(1);h[0]=at(t,e,i,n.type),p[0]={position:"left",width:0};var g=e.yAxis.fontSize||i.fontSize;u[0]=h[0].map(function(t){return t=r.toFixed(t,6),t=e.yAxis.format?e.yAxis.format(Number(t)):t,p[0].width=Math.max(p[0].width,y(t,g)+5),t}),p[0].width+=3*e.pixelRatio,!0===e.yAxis.disabled?(p[0]={position:"left",width:0},e.yAxis.data[0]={disabled:!0}):e.yAxis.data[0]={disabled:!1,position:"left",max:e.yAxis.max,min:e.yAxis.min,format:e.yAxis.format}}return{rangesFormat:u,ranges:h,yAxisWidth:p}}function ot(t,e,i,n,a){for(var r=[].concat(i.chartData.yAxisData.ranges),o=i.height-i.area[0]-i.area[2],s=i.area[0],l=[],c=0;c<r.length;c++){var h=r[c].shift(),u=r[c].pop(),p=h-(h-u)*(t-s)/o;p=i.yAxis.data[c].format?i.yAxis.data[c].format(Number(p)):p.toFixed(0),l.push(String(p))}return l}function st(t,e){for(var i,n,a=e.height-e.area[0]-e.area[2],r=0;r<t.length;r++){t[r].yAxisIndex=t[r].yAxisIndex?t[r].yAxisIndex:0;var o=[].concat(e.chartData.yAxisData.ranges[t[r].yAxisIndex]);i=o.pop(),n=o.shift();var s=a*(t[r].value-i)/(n-i);t[r].y=e.height-Math.round(s)-e.area[2]}return t}function lt(t,e){!0!==e.rotateLock?(t.translate(e.height,0),t.rotate(90*Math.PI/180)):!0!==e._rotate_&&(t.translate(e.height,0),t.rotate(90*Math.PI/180),e._rotate_=!0)}function ct(t,e,i,n,a){n.beginPath(),"hollow"==a.dataPointShapeType?(n.setStrokeStyle(e),n.setFillStyle(a.background),n.setLineWidth(2*a.pixelRatio)):(n.setStrokeStyle("#ffffff"),n.setFillStyle(e),n.setLineWidth(1*a.pixelRatio)),"diamond"===i?t.forEach(function(t,e){null!==t&&(n.moveTo(t.x,t.y-4.5),n.lineTo(t.x-4.5,t.y),n.lineTo(t.x,t.y+4.5),n.lineTo(t.x+4.5,t.y),n.lineTo(t.x,t.y-4.5))}):"circle"===i?t.forEach(function(t,e){null!==t&&(n.moveTo(t.x+2.5*a.pixelRatio,t.y),n.arc(t.x,t.y,3*a.pixelRatio,0,2*Math.PI,!1))}):"rect"===i?t.forEach(function(t,e){null!==t&&(n.moveTo(t.x-3.5,t.y-3.5),n.rect(t.x-3.5,t.y-3.5,7,7))}):"triangle"===i&&t.forEach(function(t,e){null!==t&&(n.moveTo(t.x,t.y-4.5),n.lineTo(t.x-4.5,t.y+4.5),n.lineTo(t.x+4.5,t.y+4.5),n.lineTo(t.x,t.y-4.5))}),n.closePath(),n.fill(),n.stroke()}function ht(t,e,i,n){var a=t.title.fontSize||e.titleFontSize,r=t.subtitle.fontSize||e.subtitleFontSize,o=t.title.name||"",s=t.subtitle.name||"",l=t.title.color||e.titleColor,c=t.subtitle.color||e.subtitleColor,h=o?a:0,u=s?r:0,p=5;if(s){var f=y(s,r),d=n.x-f/2+(t.subtitle.offsetX||0),g=n.y+r/2+(t.subtitle.offsetY||0);o&&(g+=(h+p)/2),i.beginPath(),i.setFontSize(r),i.setFillStyle(c),i.fillText(s,d,g),i.closePath(),i.stroke()}if(o){var v=y(o,a),x=n.x-v/2+(t.title.offsetX||0),m=n.y+a/2+(t.title.offsetY||0);s&&(m-=(u+p)/2),i.beginPath(),i.setFontSize(a),i.setFillStyle(l),i.fillText(o,x,m),i.closePath(),i.stroke()}}function ut(t,e,i,n){var a=e.data;t.forEach(function(t,r){if(null!==t){n.beginPath(),n.setFontSize(e.textSize||i.fontSize),n.setFillStyle(e.textColor||"#666666");var o=a[r];"object"===typeof a[r]&&null!==a[r]&&(o=a[r].constructor==Array?a[r][1]:a[r].value);var s=e.format?e.format(o):o;n.fillText(String(s),t.x-y(s,e.textSize||i.fontSize)/2,t.y-4),n.closePath(),n.stroke()}})}function pt(t,e,i,n,a,r){e-=t.width/2+a.gaugeLabelTextMargin;for(var o=t.startAngle-t.endAngle+1,s=o/t.splitLine.splitNumber,l=t.endNumber-t.startNumber,c=l/t.splitLine.splitNumber,h=t.startAngle,u=t.startNumber,p=0;p<t.splitLine.splitNumber+1;p++){var f={x:e*Math.cos(h*Math.PI),y:e*Math.sin(h*Math.PI)},d=t.labelFormat?t.labelFormat(u):u;f.x+=i.x-y(d)/2,f.y+=i.y;var g=f.x,v=f.y;r.beginPath(),r.setFontSize(a.fontSize),r.setFillStyle(t.labelColor||"#666666"),r.fillText(d,g,v+a.fontSize/2),r.closePath(),r.stroke(),h+=s,h>=2&&(h%=2),u+=c}}function ft(t,e,i,n,a,o){var s=n.extra.radar||{};e+=a.radarLabelTextMargin,t.forEach(function(t,l){var c={x:e*Math.cos(t),y:e*Math.sin(t)},h=f(c.x,c.y,i),u=h.x,p=h.y;r.approximatelyEqual(c.x,0)?u-=y(n.categories[l]||"")/2:c.x<0&&(u-=y(n.categories[l]||"")),o.beginPath(),o.setFontSize(a.fontSize),o.setFillStyle(s.labelColor||"#666666"),o.fillText(n.categories[l]||"",u,p+a.fontSize/2),o.closePath(),o.stroke()})}function dt(t,e,i,n,a,o){for(var s=i.pieChartLinePadding,l=[],c=null,h=t.map(function(t){var e=t.format?t.format(+t._proportion_.toFixed(2)):r.toFixed(100*t._proportion_.toFixed(4))+"%";t._rose_proportion_&&(t._proportion_=t._rose_proportion_);var i=2*Math.PI-(t._start_+2*Math.PI*t._proportion_/2),n=t.color,a=t._radius_;return{arc:i,text:e,color:n,radius:a,textColor:t.textColor,textSize:t.textSize}}),u=0;u<h.length;u++){var p=h[u],g=Math.cos(p.arc)*(p.radius+s),v=Math.sin(p.arc)*(p.radius+s),x=Math.cos(p.arc)*p.radius,m=Math.sin(p.arc)*p.radius,_=g>=0?g+i.pieChartTextPadding:g-i.pieChartTextPadding,b=v,w=y(p.text,p.textSize||i.fontSize),S=b;c&&r.isSameXCoordinateArea(c.start,{x:_})&&(S=_>0?Math.min(b,c.start.y):g<0?Math.max(b,c.start.y):b>0?Math.max(b,c.start.y):Math.min(b,c.start.y)),_<0&&(_-=w);var A={lineStart:{x:x,y:m},lineEnd:{x:g,y:v},start:{x:_,y:S},width:w,height:i.fontSize,text:p.text,color:p.color,textColor:p.textColor,textSize:p.textSize};c=d(A,c),l.push(c)}for(var T=0;T<l.length;T++){var P=l[T],k=f(P.lineStart.x,P.lineStart.y,o),D=f(P.lineEnd.x,P.lineEnd.y,o),O=f(P.start.x,P.start.y,o);n.setLineWidth(1*e.pixelRatio),n.setFontSize(i.fontSize),n.beginPath(),n.setStrokeStyle(P.color),n.setFillStyle(P.color),n.moveTo(k.x,k.y);var $=P.start.x<0?O.x+P.width:O.x,M=P.start.x<0?O.x-5:O.x+5;n.quadraticCurveTo(D.x,D.y,$,O.y),n.moveTo(k.x,k.y),n.stroke(),n.closePath(),n.beginPath(),n.moveTo(O.x+P.width,O.y),n.arc($,O.y,2,0,2*Math.PI),n.closePath(),n.fill(),n.beginPath(),n.setFontSize(P.textSize||i.fontSize),n.setFillStyle(P.textColor||"#666666"),n.fillText(P.text,M,O.y+3),n.closePath(),n.stroke(),n.closePath()}}function gt(t,e,i,n){var a=e.extra.tooltip||{};a.gridType=void 0==a.gridType?"solid":a.gridType,a.dashLength=void 0==a.dashLength?4:a.dashLength;var r=e.area[0],s=e.height-e.area[2];if("dash"==a.gridType&&n.setLineDash([a.dashLength,a.dashLength]),n.setStrokeStyle(a.gridColor||"#cccccc"),n.setLineWidth(1*e.pixelRatio),n.beginPath(),n.moveTo(t,r),n.lineTo(t,s),n.stroke(),n.setLineDash([]),a.xAxisLabel){var l=e.categories[e.tooltip.index];n.setFontSize(i.fontSize);var c=y(l,i.fontSize),h=t-.5*c,u=s;n.beginPath(),n.setFillStyle(o(a.labelBgColor||i.toolTipBackground,a.labelBgOpacity||i.toolTipOpacity)),n.setStrokeStyle(a.labelBgColor||i.toolTipBackground),n.setLineWidth(1*e.pixelRatio),n.rect(h-i.toolTipPadding,u,c+2*i.toolTipPadding,i.fontSize+2*i.toolTipPadding),n.closePath(),n.stroke(),n.fill(),n.beginPath(),n.setFontSize(i.fontSize),n.setFillStyle(a.labelFontColor||i.fontColor),n.fillText(String(l),h,u+i.toolTipPadding+i.fontSize),n.closePath(),n.stroke()}}function vt(t,e,i){for(var n=a({},{type:"solid",dashLength:4,data:[]},t.extra.markLine),r=t.area[3],s=t.width-t.area[1],l=st(n.data,t),c=0;c<l.length;c++){var h=a({},{lineColor:"#DE4A42",showLabel:!1,labelFontColor:"#666666",labelBgColor:"#DFE8FF",labelBgOpacity:.8,yAxisIndex:0},l[c]);if("dash"==n.type&&i.setLineDash([n.dashLength,n.dashLength]),i.setStrokeStyle(h.lineColor),i.setLineWidth(1*t.pixelRatio),i.beginPath(),i.moveTo(r,h.y),i.lineTo(s,h.y),i.stroke(),i.setLineDash([]),h.showLabel){var u=t.yAxis.format?t.yAxis.format(Number(h.value)):h.value;i.setFontSize(e.fontSize);var p=y(u,e.fontSize),f=t.padding[3]+e.yAxisTitleWidth-e.toolTipPadding,d=Math.max(t.area[3],p+2*e.toolTipPadding),g=d-f,v=f+(g-p)/2,x=h.y;i.setFillStyle(o(h.labelBgColor,h.labelBgOpacity)),i.setStrokeStyle(h.labelBgColor),i.setLineWidth(1*t.pixelRatio),i.beginPath(),i.rect(f,x-.5*e.fontSize-e.toolTipPadding,g,e.fontSize+2*e.toolTipPadding),i.closePath(),i.stroke(),i.fill(),i.beginPath(),i.setFontSize(e.fontSize),i.setFillStyle(h.labelFontColor),i.fillText(String(u),v,x+.5*e.fontSize),i.stroke()}}}function yt(t,e,i,n,r){var s=a({},{gridType:"solid",dashLength:4},t.extra.tooltip),l=t.area[3],c=t.width-t.area[1];if("dash"==s.gridType&&i.setLineDash([s.dashLength,s.dashLength]),i.setStrokeStyle(s.gridColor||"#cccccc"),i.setLineWidth(1*t.pixelRatio),i.beginPath(),i.moveTo(l,t.tooltip.offset.y),i.lineTo(c,t.tooltip.offset.y),i.stroke(),i.setLineDash([]),s.yAxisLabel)for(var h=ot(t.tooltip.offset.y,t.series,t,e,n),u=t.chartData.yAxisData.yAxisWidth,p=t.area[3],f=t.width-t.area[1],d=0;d<h.length;d++){i.setFontSize(e.fontSize);var g=y(h[d],e.fontSize),v=void 0,x=void 0,m=void 0;"left"==u[d].position?(v=p-u[d].width,x=Math.max(v,v+g+2*e.toolTipPadding)):(v=f,x=Math.max(v+u[d].width,v+g+2*e.toolTipPadding)),m=x-v;var _=v+(m-g)/2,b=t.tooltip.offset.y;i.beginPath(),i.setFillStyle(o(s.labelBgColor||e.toolTipBackground,s.labelBgOpacity||e.toolTipOpacity)),i.setStrokeStyle(s.labelBgColor||e.toolTipBackground),i.setLineWidth(1*t.pixelRatio),i.rect(v,b-.5*e.fontSize-e.toolTipPadding,m,e.fontSize+2*e.toolTipPadding),i.closePath(),i.stroke(),i.fill(),i.beginPath(),i.setFontSize(e.fontSize),i.setFillStyle(s.labelFontColor||e.fontColor),i.fillText(h[d],_,b+.5*e.fontSize),i.closePath(),i.stroke(),"left"==u[d].position?p-=u[d].width+t.yAxis.padding:f+=u[d].width+t.yAxis.padding}}function xt(t,e,i,n,r){var s=a({},{activeBgColor:"#000000",activeBgOpacity:.08},e.extra.tooltip),l=e.area[0],c=e.height-e.area[2];n.beginPath(),n.setFillStyle(o(s.activeBgColor,s.activeBgOpacity)),n.rect(t-r/2,l,r,c-l),n.closePath(),n.fill()}function mt(t,e,i,n,r,s,l){var c=a({},{showBox:!0,bgColor:"#000000",bgOpacity:.7,fontColor:"#FFFFFF"},i.extra.tooltip),h=4*i.pixelRatio,u=5*i.pixelRatio,p=8*i.pixelRatio,f=!1;"line"!=i.type&&"area"!=i.type&&"candle"!=i.type&&"mix"!=i.type||gt(i.tooltip.offset.x,i,n,r),e=a({x:0,y:0},e),e.y-=8*i.pixelRatio;var d=t.map(function(t){return y(t.text,n.fontSize)}),g=h+u+4*n.toolTipPadding+Math.max.apply(null,d),v=2*n.toolTipPadding+t.length*n.toolTipLineHeight;0!=c.showBox&&(e.x-Math.abs(i._scrollDistance_)+p+g>i.width&&(f=!0),v+e.y>i.height&&(e.y=i.height-v),r.beginPath(),r.setFillStyle(o(c.bgColor||n.toolTipBackground,c.bgOpacity||n.toolTipOpacity)),f?(r.moveTo(e.x,e.y+10*i.pixelRatio),r.lineTo(e.x-p,e.y+10*i.pixelRatio-5*i.pixelRatio),r.lineTo(e.x-p,e.y),r.lineTo(e.x-p-Math.round(g),e.y),r.lineTo(e.x-p-Math.round(g),e.y+v),r.lineTo(e.x-p,e.y+v),r.lineTo(e.x-p,e.y+10*i.pixelRatio+5*i.pixelRatio),r.lineTo(e.x,e.y+10*i.pixelRatio)):(r.moveTo(e.x,e.y+10*i.pixelRatio),r.lineTo(e.x+p,e.y+10*i.pixelRatio-5*i.pixelRatio),r.lineTo(e.x+p,e.y),r.lineTo(e.x+p+Math.round(g),e.y),r.lineTo(e.x+p+Math.round(g),e.y+v),r.lineTo(e.x+p,e.y+v),r.lineTo(e.x+p,e.y+10*i.pixelRatio+5*i.pixelRatio),r.lineTo(e.x,e.y+10*i.pixelRatio)),r.closePath(),r.fill(),t.forEach(function(t,i){if(null!==t.color){r.beginPath(),r.setFillStyle(t.color);var a=e.x+p+2*n.toolTipPadding,o=e.y+(n.toolTipLineHeight-n.fontSize)/2+n.toolTipLineHeight*i+n.toolTipPadding+1;f&&(a=e.x-g-p+2*n.toolTipPadding),r.fillRect(a,o,h,n.fontSize),r.closePath()}}),t.forEach(function(t,i){var a=e.x+p+2*n.toolTipPadding+h+u;f&&(a=e.x-g-p+2*n.toolTipPadding+ +h+u);var o=e.y+(n.toolTipLineHeight-n.fontSize)/2+n.toolTipLineHeight*i+n.toolTipPadding;r.beginPath(),r.setFontSize(n.fontSize),r.setFillStyle(c.fontColor),r.fillText(t.text,a,o+n.fontSize),r.closePath(),r.stroke()}))}function _t(t,e,i,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e.chartData.xAxisData,s=o.xAxisPoints,l=o.eachSpacing,c=a({},{type:"group",width:l/2,meter:{border:4,fillColor:"#FFFFFF"}},e.extra.column),h=[];n.save();var u=-2,p=s.length+2;return e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&(n.translate(e._scrollDistance_,0),u=Math.floor(-e._scrollDistance_/l)-2,p=u+e.xAxis.itemCount+4),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===r&&xt(e.tooltip.offset.x,e,i,n,l),t.forEach(function(a,o){var f,d,g;f=[].concat(e.chartData.yAxisData.ranges[a.index]),d=f.pop(),g=f.shift();var v=a.data;switch(c.type){case"group":var y=it(v,d,g,s,l,e,i,r),x=nt(v,d,g,s,l,e,i,o,t,r);h.push(x),y=Y(y,l,t.length,o,i,e);for(var m=0;m<y.length;m++){var _=y[m];if(null!==_&&m>u&&m<p){n.beginPath(),n.setStrokeStyle(_.color||a.color),n.setLineWidth(1),n.setFillStyle(_.color||a.color);var b=_.x-_.width/2,w=e.height-_.y-e.area[2];n.moveTo(b-1,_.y),n.lineTo(b+_.width-2,_.y),n.lineTo(b+_.width-2,e.height-e.area[2]),n.lineTo(b,e.height-e.area[2]),n.lineTo(b,_.y),n.closePath(),n.stroke(),n.fill()}}break;case"stack":y=nt(v,d,g,s,l,e,i,o,t,r);h.push(y),y=Q(y,l,t.length,o,i,e,t);for(var S=0;S<y.length;S++){var A=y[S];if(null!==A&&S>u&&S<p){n.beginPath(),n.setFillStyle(A.color||a.color);b=A.x-A.width/2+1,w=e.height-A.y-e.area[2];var T=e.height-A.y0-e.area[2];o>0&&(w-=T),n.moveTo(b,A.y),n.fillRect(b,A.y,A.width-2,w),n.closePath(),n.fill()}}break;case"meter":y=it(v,d,g,s,l,e,i,r);if(h.push(y),y=Z(y,l,t.length,o,i,e,c.meter.border),0==o)for(var P=0;P<y.length;P++){var k=y[P];if(null!==k&&P>u&&P<p){n.beginPath(),n.setFillStyle(c.meter.fillColor);b=k.x-k.width/2,w=e.height-k.y-e.area[2];n.moveTo(b,k.y),n.fillRect(b,k.y,k.width,w),n.closePath(),n.fill(),c.meter.border>0&&(n.beginPath(),n.setStrokeStyle(a.color),n.setLineWidth(c.meter.border*e.pixelRatio),n.moveTo(b+.5*c.meter.border,k.y+w),n.lineTo(b+.5*c.meter.border,k.y+.5*c.meter.border),n.lineTo(b+k.width-.5*c.meter.border,k.y+.5*c.meter.border),n.lineTo(b+k.width-.5*c.meter.border,k.y+w),n.stroke())}}else for(var D=0;D<y.length;D++){var O=y[D];if(null!==O&&D>u&&D<p){n.beginPath(),n.setFillStyle(O.color||a.color);b=O.x-O.width/2,w=e.height-O.y-e.area[2];n.moveTo(b,O.y),n.fillRect(b,O.y,O.width,w),n.closePath(),n.fill()}}break}}),!1!==e.dataLabel&&1===r&&t.forEach(function(a,o){var h,u,p;h=[].concat(e.chartData.yAxisData.ranges[a.index]),u=h.pop(),p=h.shift();var f=a.data;switch(c.type){case"group":var d=it(f,u,p,s,l,e,i,r);d=Y(d,l,t.length,o,i,e),ut(d,a,i,n);break;case"stack":d=nt(f,u,p,s,l,e,i,o,t,r);ut(d,a,i,n);break;case"meter":d=it(f,u,p,s,l,e,i,r);ut(d,a,i,n);break}}),n.restore(),{xAxisPoints:s,calPoints:h,eachSpacing:l}}function bt(t,e,i,n,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,s=a({},{color:{},average:{}},i.extra.candle);s.color=a({},{upLine:"#f04864",upFill:"#f04864",downLine:"#2fc25b",downFill:"#2fc25b"},s.color),s.average=a({},{show:!1,name:[],day:[],color:n.colors},s.average),i.extra.candle=s;var l=i.chartData.xAxisData,c=l.xAxisPoints,h=l.eachSpacing,u=[];r.save();var f=-2,d=c.length+2,g=0,v=i.width+h;return i._scrollDistance_&&0!==i._scrollDistance_&&!0===i.enableScroll&&(r.translate(i._scrollDistance_,0),f=Math.floor(-i._scrollDistance_/h)-2,d=f+i.xAxis.itemCount+4,g=-i._scrollDistance_-h+i.area[3],v=g+(i.xAxis.itemCount+4)*h),s.average.show&&e.forEach(function(t,e){var a,s,l;a=[].concat(i.chartData.yAxisData.ranges[t.index]),s=a.pop(),l=a.shift();for(var u=t.data,f=it(u,s,l,c,h,i,n,o),d=j(f),y=0;y<d.length;y++){var x=d[y];if(r.beginPath(),r.setStrokeStyle(t.color),r.setLineWidth(1),1===x.length)r.moveTo(x[0].x,x[0].y),r.arc(x[0].x,x[0].y,1,0,2*Math.PI);else{r.moveTo(x[0].x,x[0].y);for(var m=0,_=0;_<x.length;_++){var b=x[_];if(0==m&&b.x>g&&(r.moveTo(b.x,b.y),m=1),_>0&&b.x>g&&b.x<v){var w=p(x,_-1);r.bezierCurveTo(w.ctrA.x,w.ctrA.y,w.ctrB.x,w.ctrB.y,b.x,b.y)}}r.moveTo(x[0].x,x[0].y)}r.closePath(),r.stroke()}}),t.forEach(function(t,e){var a,l,p;a=[].concat(i.chartData.yAxisData.ranges[t.index]),l=a.pop(),p=a.shift();var g=t.data,v=et(g,l,p,c,h,i,n,o);u.push(v);for(var y=j(v),x=0;x<y[0].length;x++)if(x>f&&x<d){var m=y[0][x];r.beginPath(),g[x][1]-g[x][0]>0?(r.setStrokeStyle(s.color.upLine),r.setFillStyle(s.color.upFill),r.setLineWidth(1*i.pixelRatio),r.moveTo(m[3].x,m[3].y),r.lineTo(m[1].x,m[1].y),r.lineTo(m[1].x-h/4,m[1].y),r.lineTo(m[0].x-h/4,m[0].y),r.lineTo(m[0].x,m[0].y),r.lineTo(m[2].x,m[2].y),r.lineTo(m[0].x,m[0].y),r.lineTo(m[0].x+h/4,m[0].y),r.lineTo(m[1].x+h/4,m[1].y),r.lineTo(m[1].x,m[1].y),r.moveTo(m[3].x,m[3].y)):(r.setStrokeStyle(s.color.downLine),r.setFillStyle(s.color.downFill),r.setLineWidth(1*i.pixelRatio),r.moveTo(m[3].x,m[3].y),r.lineTo(m[0].x,m[0].y),r.lineTo(m[0].x-h/4,m[0].y),r.lineTo(m[1].x-h/4,m[1].y),r.lineTo(m[1].x,m[1].y),r.lineTo(m[2].x,m[2].y),r.lineTo(m[1].x,m[1].y),r.lineTo(m[1].x+h/4,m[1].y),r.lineTo(m[0].x+h/4,m[0].y),r.lineTo(m[0].x,m[0].y),r.moveTo(m[3].x,m[3].y)),r.closePath(),r.fill(),r.stroke()}}),r.restore(),{xAxisPoints:c,calPoints:u,eachSpacing:h}}function wt(t,e,i,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=a({},{type:"straight",opacity:.2,addLine:!1,width:2,gradient:!1},e.extra.area),l=e.chartData.xAxisData,c=l.xAxisPoints,h=l.eachSpacing,u=e.height-e.area[2],f=[];n.save();var d=0,g=e.width+h;return e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&(n.translate(e._scrollDistance_,0),d=-e._scrollDistance_-h+e.area[3],g=d+(e.xAxis.itemCount+4)*h),t.forEach(function(t,a){var l,v,y;l=[].concat(e.chartData.yAxisData.ranges[t.index]),v=l.pop(),y=l.shift();var x=t.data,m=it(x,v,y,c,h,e,i,r);f.push(m);for(var _=j(m),b=0;b<_.length;b++){var w=_[b];if(n.beginPath(),n.setStrokeStyle(o(t.color,s.opacity)),s.gradient){var S=n.createLinearGradient(0,e.area[0],0,e.height-e.area[2]);S.addColorStop("0",o(t.color,s.opacity)),S.addColorStop("1.0",o("#FFFFFF",.1)),n.setFillStyle(S)}else n.setFillStyle(o(t.color,s.opacity));if(n.setLineWidth(s.width*e.pixelRatio),w.length>1){var A=w[0],T=w[w.length-1];n.moveTo(A.x,A.y);var P=0;if("curve"===s.type)for(var k=0;k<w.length;k++){var D=w[k];if(0==P&&D.x>d&&(n.moveTo(D.x,D.y),P=1),k>0&&D.x>d&&D.x<g){var O=p(w,k-1);n.bezierCurveTo(O.ctrA.x,O.ctrA.y,O.ctrB.x,O.ctrB.y,D.x,D.y)}}else for(var $=0;$<w.length;$++){var M=w[$];0==P&&M.x>d&&(n.moveTo(M.x,M.y),P=1),$>0&&M.x>d&&M.x<g&&n.lineTo(M.x,M.y)}n.lineTo(T.x,u),n.lineTo(A.x,u),n.lineTo(A.x,A.y)}else{var C=w[0];n.moveTo(C.x-h/2,C.y),n.lineTo(C.x+h/2,C.y),n.lineTo(C.x+h/2,u),n.lineTo(C.x-h/2,u),n.moveTo(C.x-h/2,C.y)}if(n.closePath(),n.fill(),s.addLine){if("dash"==t.lineType){var R=t.dashLength?t.dashLength:8;R*=e.pixelRatio,n.setLineDash([R,R])}if(n.beginPath(),n.setStrokeStyle(t.color),n.setLineWidth(s.width*e.pixelRatio),1===w.length)n.moveTo(w[0].x,w[0].y),n.arc(w[0].x,w[0].y,1,0,2*Math.PI);else{n.moveTo(w[0].x,w[0].y);var L=0;if("curve"===s.type)for(var F=0;F<w.length;F++){var I=w[F];if(0==L&&I.x>d&&(n.moveTo(I.x,I.y),L=1),F>0&&I.x>d&&I.x<g){var E=p(w,F-1);n.bezierCurveTo(E.ctrA.x,E.ctrA.y,E.ctrB.x,E.ctrB.y,I.x,I.y)}}else for(var z=0;z<w.length;z++){var N=w[z];0==L&&N.x>d&&(n.moveTo(N.x,N.y),L=1),z>0&&N.x>d&&N.x<g&&n.lineTo(N.x,N.y)}n.moveTo(w[0].x,w[0].y)}n.stroke(),n.setLineDash([])}}!1!==e.dataPointShape&&ct(m,t.color,t.pointShape,n,e)}),!1!==e.dataLabel&&1===r&&t.forEach(function(t,a){var o,s,l;o=[].concat(e.chartData.yAxisData.ranges[t.index]),s=o.pop(),l=o.shift();var u=t.data,p=it(u,s,l,c,h,e,i,r);ut(p,t,i,n)}),n.restore(),{xAxisPoints:c,calPoints:f,eachSpacing:h}}function St(t,e,i,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=a({},{type:"straight",width:2},e.extra.line);o.width*=e.pixelRatio;var s=e.chartData.xAxisData,l=s.xAxisPoints,c=s.eachSpacing,h=[];n.save();var u=0,f=e.width+c;return e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&(n.translate(e._scrollDistance_,0),u=-e._scrollDistance_-c+e.area[3],f=u+(e.xAxis.itemCount+4)*c),t.forEach(function(t,a){var s,d,g;s=[].concat(e.chartData.yAxisData.ranges[t.index]),d=s.pop(),g=s.shift();var v=t.data,y=it(v,d,g,l,c,e,i,r);h.push(y);var x=j(y);if("dash"==t.lineType){var m=t.dashLength?t.dashLength:8;m*=e.pixelRatio,n.setLineDash([m,m])}n.beginPath(),n.setStrokeStyle(t.color),n.setLineWidth(o.width),x.forEach(function(t,e){if(1===t.length)n.moveTo(t[0].x,t[0].y),n.arc(t[0].x,t[0].y,1,0,2*Math.PI);else{n.moveTo(t[0].x,t[0].y);var i=0;if("curve"===o.type)for(var a=0;a<t.length;a++){var r=t[a];if(0==i&&r.x>u&&(n.moveTo(r.x,r.y),i=1),a>0&&r.x>u&&r.x<f){var s=p(t,a-1);n.bezierCurveTo(s.ctrA.x,s.ctrA.y,s.ctrB.x,s.ctrB.y,r.x,r.y)}}else for(var l=0;l<t.length;l++){var c=t[l];0==i&&c.x>u&&(n.moveTo(c.x,c.y),i=1),l>0&&c.x>u&&c.x<f&&n.lineTo(c.x,c.y)}n.moveTo(t[0].x,t[0].y)}}),n.stroke(),n.setLineDash([]),!1!==e.dataPointShape&&ct(y,t.color,t.pointShape,n,e)}),!1!==e.dataLabel&&1===r&&t.forEach(function(t,a){var o,s,h;o=[].concat(e.chartData.yAxisData.ranges[t.index]),s=o.pop(),h=o.shift();var u=t.data,p=it(u,s,h,l,c,e,i,r);ut(p,t,i,n)}),n.restore(),{xAxisPoints:l,calPoints:h,eachSpacing:c}}function At(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,r=e.chartData.xAxisData,s=r.xAxisPoints,l=r.eachSpacing,c=e.height-e.area[2],h=[],u=0,f=0;t.forEach(function(t,e){"column"==t.type&&(f+=1)}),n.save();var d=-2,g=s.length+2,v=0,y=e.width+l;if(e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&(n.translate(e._scrollDistance_,0),d=Math.floor(-e._scrollDistance_/l)-2,g=d+e.xAxis.itemCount+4,v=-e._scrollDistance_-l+e.area[3],y=v+(e.xAxis.itemCount+4)*l),t.forEach(function(t,r){var x,m,_;x=[].concat(e.chartData.yAxisData.ranges[t.index]),m=x.pop(),_=x.shift();var b=t.data,w=it(b,m,_,s,l,e,i,a);if(h.push(w),"column"==t.type){w=Y(w,l,f,u,i,e);for(var S=0;S<w.length;S++){var A=w[S];if(null!==A&&S>d&&S<g){n.beginPath(),n.setStrokeStyle(A.color||t.color),n.setLineWidth(1),n.setFillStyle(A.color||t.color);var T=A.x-A.width/2;e.height,A.y,e.area[2];n.moveTo(T,A.y),n.moveTo(T-1,A.y),n.lineTo(T+A.width-2,A.y),n.lineTo(T+A.width-2,e.height-e.area[2]),n.lineTo(T,e.height-e.area[2]),n.lineTo(T,A.y),n.closePath(),n.stroke(),n.fill(),n.closePath(),n.fill()}}u+=1}if("area"==t.type)for(var P=j(w),k=0;k<P.length;k++){var D=P[k];if(n.beginPath(),n.setStrokeStyle(t.color),n.setFillStyle(o(t.color,.2)),n.setLineWidth(2*e.pixelRatio),D.length>1){var O=D[0],$=D[D.length-1];n.moveTo(O.x,O.y);var M=0;if("curve"===t.style)for(var C=0;C<D.length;C++){var R=D[C];if(0==M&&R.x>v&&(n.moveTo(R.x,R.y),M=1),C>0&&R.x>v&&R.x<y){var L=p(D,C-1);n.bezierCurveTo(L.ctrA.x,L.ctrA.y,L.ctrB.x,L.ctrB.y,R.x,R.y)}}else for(var F=0;F<D.length;F++){var I=D[F];0==M&&I.x>v&&(n.moveTo(I.x,I.y),M=1),F>0&&I.x>v&&I.x<y&&n.lineTo(I.x,I.y)}n.lineTo($.x,c),n.lineTo(O.x,c),n.lineTo(O.x,O.y)}else{var E=D[0];n.moveTo(E.x-l/2,E.y),n.lineTo(E.x+l/2,E.y),n.lineTo(E.x+l/2,c),n.lineTo(E.x-l/2,c),n.moveTo(E.x-l/2,E.y)}n.closePath(),n.fill()}if("line"==t.type){var z=j(w);z.forEach(function(i,a){if("dash"==t.lineType){var r=t.dashLength?t.dashLength:8;r*=e.pixelRatio,n.setLineDash([r,r])}if(n.beginPath(),n.setStrokeStyle(t.color),n.setLineWidth(2*e.pixelRatio),1===i.length)n.moveTo(i[0].x,i[0].y),n.arc(i[0].x,i[0].y,1,0,2*Math.PI);else{n.moveTo(i[0].x,i[0].y);var o=0;if("curve"==t.style)for(var s=0;s<i.length;s++){var l=i[s];if(0==o&&l.x>v&&(n.moveTo(l.x,l.y),o=1),s>0&&l.x>v&&l.x<y){var c=p(i,s-1);n.bezierCurveTo(c.ctrA.x,c.ctrA.y,c.ctrB.x,c.ctrB.y,l.x,l.y)}}else for(var h=0;h<i.length;h++){var u=i[h];0==o&&u.x>v&&(n.moveTo(u.x,u.y),o=1),h>0&&u.x>v&&u.x<y&&n.lineTo(u.x,u.y)}n.moveTo(i[0].x,i[0].y)}n.stroke(),n.setLineDash([])})}"point"==t.type&&(t.addPoint=!0),1==t.addPoint&&"column"!==t.type&&ct(w,t.color,t.pointShape,n,e)}),!1!==e.dataLabel&&1===a){u=0;t.forEach(function(t,r){var o,c,h;o=[].concat(e.chartData.yAxisData.ranges[t.index]),c=o.pop(),h=o.shift();var p=t.data,d=it(p,c,h,s,l,e,i,a);"column"!==t.type?ut(d,t,i,n):(d=Y(d,l,f,u,i,e),ut(d,t,i,n),u+=1)})}return n.restore(),{xAxisPoints:s,calPoints:h,eachSpacing:l}}function Tt(t,e,i,n,a,r){var o=t.extra.tooltip||{};o.horizentalLine&&t.tooltip&&1===n&&("line"==t.type||"area"==t.type||"column"==t.type||"candle"==t.type||"mix"==t.type)&&yt(t,e,i,a,r),i.save(),t._scrollDistance_&&0!==t._scrollDistance_&&!0===t.enableScroll&&i.translate(t._scrollDistance_,0),t.tooltip&&t.tooltip.textList&&t.tooltip.textList.length&&1===n&&mt(t.tooltip.textList,t.tooltip.offset,t,e,i,a,r),i.restore()}function Pt(t,e,i,n){var a=e.chartData.xAxisData,r=a.xAxisPoints,o=a.startX,s=a.endX,l=a.eachSpacing,c="center";"line"!=e.type&&"area"!=e.type||(c=e.xAxis.boundaryGap);var h=e.height-e.area[2],p=e.area[0];if(e.enableScroll&&e.xAxis.scrollShow){var f=e.height-e.area[2]+i.xAxisHeight,d=s-o,g=l*(r.length-1),v=d*d/g,x=0;e._scrollDistance_&&(x=-e._scrollDistance_*d/g),n.beginPath(),n.setLineCap("round"),n.setLineWidth(6*e.pixelRatio),n.setStrokeStyle(e.xAxis.scrollBackgroundColor||"#EFEBEF"),n.moveTo(o,f),n.lineTo(s,f),n.stroke(),n.closePath(),n.beginPath(),n.setLineCap("round"),n.setLineWidth(6*e.pixelRatio),n.setStrokeStyle(e.xAxis.scrollColor||"#A6A6A6"),n.moveTo(o+x,f),n.lineTo(o+x+v,f),n.stroke(),n.closePath(),n.setLineCap("butt")}if(n.save(),e._scrollDistance_&&0!==e._scrollDistance_&&n.translate(e._scrollDistance_,0),!0===e.xAxis.calibration&&(n.setStrokeStyle(e.xAxis.gridColor||"#cccccc"),n.setLineCap("butt"),n.setLineWidth(1*e.pixelRatio),r.forEach(function(t,i){i>0&&(n.beginPath(),n.moveTo(t-l/2,h),n.lineTo(t-l/2,h+3*e.pixelRatio),n.closePath(),n.stroke())})),!0!==e.xAxis.disableGrid&&(n.setStrokeStyle(e.xAxis.gridColor||"#cccccc"),n.setLineCap("butt"),n.setLineWidth(1*e.pixelRatio),"dash"==e.xAxis.gridType&&n.setLineDash([e.xAxis.dashLength,e.xAxis.dashLength]),e.xAxis.gridEval=e.xAxis.gridEval||1,r.forEach(function(t,i){i%e.xAxis.gridEval==0&&(n.beginPath(),n.moveTo(t,h),n.lineTo(t,p),n.stroke())}),n.setLineDash([])),!0!==e.xAxis.disabled){var m=t.length;e.xAxis.labelCount&&(m=e.xAxis.itemCount?Math.ceil(t.length/e.xAxis.itemCount*e.xAxis.labelCount):e.xAxis.labelCount,m-=1);for(var _=Math.ceil(t.length/m),b=[],w=t.length,S=0;S<w;S++)S%_!==0?b.push(""):b.push(t[S]);b[w-1]=t[w-1];var A=e.xAxis.fontSize||i.fontSize;0===i._xAxisTextAngle_?b.forEach(function(t,a){var o=-y(String(t),A)/2;"center"==c&&(o+=l/2);var s=0;e.xAxis.scrollShow&&(s=6*e.pixelRatio),n.beginPath(),n.setFontSize(A),n.setFillStyle(e.xAxis.fontColor||"#666666"),n.fillText(String(t),r[a]+o,h+A+(i.xAxisHeight-s-A)/2),n.closePath(),n.stroke()}):b.forEach(function(t,a){n.save(),n.beginPath(),n.setFontSize(A),n.setFillStyle(e.xAxis.fontColor||"#666666");var o=y(String(t),A),s=-o;"center"==c&&(s+=l/2);var p=u(r[a]+l/2,h+A/2+5,e.height),f=p.transX,d=p.transY;n.rotate(-1*i._xAxisTextAngle_),n.translate(f,d),n.fillText(String(t),r[a]+s,h+A+5),n.closePath(),n.stroke(),n.restore()})}n.restore(),e.xAxis.axisLine&&(n.beginPath(),n.setStrokeStyle(e.xAxis.axisLineColor),n.setLineWidth(1*e.pixelRatio),n.moveTo(o,e.height-e.area[2]),n.lineTo(s,e.height-e.area[2]),n.stroke())}function kt(t,e,i,n){if(!0!==e.yAxis.disableGrid){for(var a=e.height-e.area[0]-e.area[2],r=a/e.yAxis.splitNumber,o=e.area[3],s=e.chartData.xAxisData.xAxisPoints,l=e.chartData.xAxisData.eachSpacing,c=l*(s.length-1),h=o+c,u=[],p=0;p<e.yAxis.splitNumber+1;p++)u.push(e.height-e.area[2]-r*p);n.save(),e._scrollDistance_&&0!==e._scrollDistance_&&n.translate(e._scrollDistance_,0),"dash"==e.yAxis.gridType&&n.setLineDash([e.yAxis.dashLength,e.yAxis.dashLength]),n.setStrokeStyle(e.yAxis.gridColor),n.setLineWidth(1*e.pixelRatio),u.forEach(function(t,e){n.beginPath(),n.moveTo(o,t),n.lineTo(h,t),n.stroke()}),n.setLineDash([]),n.restore()}}function Dt(t,e,i,n){if(!0!==e.yAxis.disabled){var a=e.height-e.area[0]-e.area[2],r=a/e.yAxis.splitNumber,o=e.area[3],s=e.width-e.area[1],l=e.height-e.area[2],c=l+i.xAxisHeight;e.xAxis.scrollShow&&(c-=3*e.pixelRatio),e.xAxis.rotateLabel&&(c=e.height-e.area[2]+3),n.beginPath(),n.setFillStyle(e.background||"#ffffff"),e._scrollDistance_<0&&n.fillRect(0,0,o,c),1==e.enableScroll&&n.fillRect(s,0,e.width,c),n.closePath(),n.stroke();for(var h=[],u=0;u<=e.yAxis.splitNumber;u++)h.push(e.area[0]+r*u);for(var p=e.area[3],f=e.width-e.area[1],d=function(t){var a=e.yAxis.data[t];if(!0!==a.disabled){var r=e.chartData.yAxisData.rangesFormat[t],o=a.fontSize||i.fontSize,s=e.chartData.yAxisData.yAxisWidth[t];if(r.forEach(function(t,i){var r=h[i]?h[i]:l;n.beginPath(),n.setFontSize(o),n.setLineWidth(1*e.pixelRatio),n.setStrokeStyle(a.axisLineColor||"#cccccc"),n.setFillStyle(a.fontColor||"#666666"),"left"==s.position?(n.fillText(String(t),p-s.width,r+o/2),1==a.calibration&&(n.moveTo(p,r),n.lineTo(p-3*e.pixelRatio,r))):(n.fillText(String(t),f+4*e.pixelRatio,r+o/2),1==a.calibration&&(n.moveTo(f,r),n.lineTo(f+3*e.pixelRatio,r))),n.closePath(),n.stroke()}),!1!==a.axisLine&&(n.beginPath(),n.setStrokeStyle(a.axisLineColor||"#cccccc"),n.setLineWidth(1*e.pixelRatio),"left"==s.position?(n.moveTo(p,e.height-e.area[2]),n.lineTo(p,e.area[0])):(n.moveTo(f,e.height-e.area[2]),n.lineTo(f,e.area[0])),n.stroke()),e.yAxis.showTitle){var c=a.titleFontSize||i.fontSize,u=a.title;n.beginPath(),n.setFontSize(c),n.setFillStyle(a.titleFontColor||"#666666"),"left"==s.position?n.fillText(u,p-y(u,c)/2,e.area[0]-10*e.pixelRatio):n.fillText(u,f-y(u,c)/2,e.area[0]-10*e.pixelRatio),n.closePath(),n.stroke()}"left"==s.position?p-=s.width+e.yAxis.padding:f+=s.width+e.yAxis.padding}},g=0;g<e.yAxis.data.length;g++)d(g)}}function Ot(t,e,i,n,a){if(!1!==e.legend.show){var r=a.legendData,o=r.points,s=r.area,l=e.legend.padding,c=e.legend.fontSize,h=15*e.pixelRatio,u=5*e.pixelRatio,p=e.legend.itemGap,f=Math.max(e.legend.lineHeight*e.pixelRatio,c);n.beginPath(),n.setLineWidth(e.legend.borderWidth),n.setStrokeStyle(e.legend.borderColor),n.setFillStyle(e.legend.backgroundColor),n.moveTo(s.start.x,s.start.y),n.rect(s.start.x,s.start.y,s.width,s.height),n.closePath(),n.fill(),n.stroke(),o.forEach(function(t,a){var o=0,d=0;o=r.widthArr[a],d=r.heightArr[a];var g=0,v=0;"top"==e.legend.position||"bottom"==e.legend.position?(g=s.start.x+(s.width-o)/2,v=s.start.y+l+a*f):(o=0==a?0:r.widthArr[a-1],g=s.start.x+l+o,v=s.start.y+l+(s.height-d)/2),n.setFontSize(i.fontSize);for(var x=0;x<t.length;x++){var m=t[x];switch(m.area=[0,0,0,0],m.area[0]=g,m.area[1]=v,m.area[3]=v+f,n.beginPath(),n.setLineWidth(1*e.pixelRatio),n.setStrokeStyle(m.show?m.color:e.legend.hiddenColor),n.setFillStyle(m.show?m.color:e.legend.hiddenColor),m.legendShape){case"line":n.moveTo(g,v+.5*f-2*e.pixelRatio),n.fillRect(g,v+.5*f-2*e.pixelRatio,15*e.pixelRatio,4*e.pixelRatio);break;case"triangle":n.moveTo(g+7.5*e.pixelRatio,v+.5*f-5*e.pixelRatio),n.lineTo(g+2.5*e.pixelRatio,v+.5*f+5*e.pixelRatio),n.lineTo(g+12.5*e.pixelRatio,v+.5*f+5*e.pixelRatio),n.lineTo(g+7.5*e.pixelRatio,v+.5*f-5*e.pixelRatio);break;case"diamond":n.moveTo(g+7.5*e.pixelRatio,v+.5*f-5*e.pixelRatio),n.lineTo(g+2.5*e.pixelRatio,v+.5*f),n.lineTo(g+7.5*e.pixelRatio,v+.5*f+5*e.pixelRatio),n.lineTo(g+12.5*e.pixelRatio,v+.5*f),n.lineTo(g+7.5*e.pixelRatio,v+.5*f-5*e.pixelRatio);break;case"circle":n.moveTo(g+7.5*e.pixelRatio,v+.5*f),n.arc(g+7.5*e.pixelRatio,v+.5*f,5*e.pixelRatio,0,2*Math.PI);break;case"rect":n.moveTo(g,v+.5*f-5*e.pixelRatio),n.fillRect(g,v+.5*f-5*e.pixelRatio,15*e.pixelRatio,10*e.pixelRatio);break;default:n.moveTo(g,v+.5*f-5*e.pixelRatio),n.fillRect(g,v+.5*f-5*e.pixelRatio,15*e.pixelRatio,10*e.pixelRatio)}n.closePath(),n.fill(),n.stroke(),g+=h+u;var _=.5*f+.5*c-2;n.beginPath(),n.setFontSize(c),n.setFillStyle(m.show?e.legend.fontColor:e.legend.hiddenColor),n.fillText(m.name,g,v+_),n.closePath(),n.stroke(),"top"==e.legend.position||"bottom"==e.legend.position?(g+=y(m.name,c)+p,m.area[2]=g):(m.area[2]=g+y(m.name,c)+p,g-=h+u,v+=f)}})}}function $t(t,e,i,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=a({},{activeOpacity:.5,activeRadius:10*e.pixelRatio,offsetAngle:0,labelWidth:15*e.pixelRatio,ringWidth:0,border:!1,borderWidth:2,borderColor:"#FFFFFF"},e.extra.pie),l={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.area[0]+(e.height-e.area[0]-e.area[2])/2};0==i.pieChartLinePadding&&(i.pieChartLinePadding=s.activeRadius);var c=Math.min((e.width-e.area[1]-e.area[3])/2-i.pieChartLinePadding-i.pieChartTextPadding-i._pieTextMaxLength_,(e.height-e.area[0]-e.area[2])/2-i.pieChartLinePadding-i.pieChartTextPadding);t=V(t,c,r);var h=s.activeRadius;if(t=t.map(function(t){return t._start_+=s.offsetAngle*Math.PI/180,t}),t.forEach(function(t,i){e.tooltip&&e.tooltip.index==i&&(n.beginPath(),n.setFillStyle(o(t.color,e.extra.pie.activeOpacity||.5)),n.moveTo(l.x,l.y),n.arc(l.x,l.y,t._radius_+h,t._start_,t._start_+2*t._proportion_*Math.PI),n.closePath(),n.fill()),n.beginPath(),n.setLineWidth(s.borderWidth*e.pixelRatio),n.lineJoin="round",n.setStrokeStyle(s.borderColor),n.setFillStyle(t.color),n.moveTo(l.x,l.y),n.arc(l.x,l.y,t._radius_,t._start_,t._start_+2*t._proportion_*Math.PI),n.closePath(),n.fill(),1==s.border&&n.stroke()}),"ring"===e.type){var u=.6*c;"number"===typeof e.extra.pie.ringWidth&&e.extra.pie.ringWidth>0&&(u=Math.max(0,c-e.extra.pie.ringWidth)),n.beginPath(),n.setFillStyle(e.background||"#ffffff"),n.moveTo(l.x,l.y),n.arc(l.x,l.y,u,0,2*Math.PI),n.closePath(),n.fill()}if(!1!==e.dataLabel&&1===r){for(var p=!1,f=0,d=t.length;f<d;f++)if(t[f].data>0){p=!0;break}p&&dt(t,e,i,n,c,l)}return 1===r&&"ring"===e.type&&ht(e,i,n,l),{center:l,radius:c,series:t}}function Mt(t,e,i,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=a({},{type:"area",activeOpacity:.5,activeRadius:10*e.pixelRatio,offsetAngle:0,labelWidth:15*e.pixelRatio,border:!1,borderWidth:2,borderColor:"#FFFFFF"},e.extra.rose);0==i.pieChartLinePadding&&(i.pieChartLinePadding=s.activeRadius);var l={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.area[0]+(e.height-e.area[0]-e.area[2])/2},c=Math.min((e.width-e.area[1]-e.area[3])/2-i.pieChartLinePadding-i.pieChartTextPadding-i._pieTextMaxLength_,(e.height-e.area[0]-e.area[2])/2-i.pieChartLinePadding-i.pieChartTextPadding),h=s.minRadius||.5*c;t=U(t,s.type,h,c,r);var u=s.activeRadius;if(t=t.map(function(t){return t._start_+=(s.offsetAngle||0)*Math.PI/180,t}),t.forEach(function(t,i){e.tooltip&&e.tooltip.index==i&&(n.beginPath(),n.setFillStyle(o(t.color,s.activeOpacity||.5)),n.moveTo(l.x,l.y),n.arc(l.x,l.y,u+t._radius_,t._start_,t._start_+2*t._rose_proportion_*Math.PI),n.closePath(),n.fill()),n.beginPath(),n.setLineWidth(s.borderWidth*e.pixelRatio),n.lineJoin="round",n.setStrokeStyle(s.borderColor),n.setFillStyle(t.color),n.moveTo(l.x,l.y),n.arc(l.x,l.y,t._radius_,t._start_,t._start_+2*t._rose_proportion_*Math.PI),n.closePath(),n.fill(),1==s.border&&n.stroke()}),!1!==e.dataLabel&&1===r){for(var p=!1,f=0,d=t.length;f<d;f++)if(t[f].data>0){p=!0;break}p&&dt(t,e,i,n,c,l)}return{center:l,radius:c,series:t}}function Ct(t,e,i,n){var r,o,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,l=a({},{startAngle:.75,endAngle:.25,type:"default",width:12*e.pixelRatio,gap:2*e.pixelRatio},e.extra.arcbar);t=X(t,l,s),r=l.center?l.center:{x:e.width/2,y:e.height/2},l.radius?o=l.radius:(o=Math.min(r.x,r.y),o-=5*e.pixelRatio,o-=l.width/2);for(var c=0;c<t.length;c++){var h=t[c];n.setLineWidth(l.width),n.setStrokeStyle(l.backgroundColor||"#E9E9E9"),n.setLineCap("round"),n.beginPath(),"default"==l.type?n.arc(r.x,r.y,o-(l.width+l.gap)*c,l.startAngle*Math.PI,l.endAngle*Math.PI,!1):n.arc(r.x,r.y,o-(l.width+l.gap)*c,0,2*Math.PI,!1),n.stroke(),n.setLineWidth(l.width),n.setStrokeStyle(h.color),n.setLineCap("round"),n.beginPath(),n.arc(r.x,r.y,o-(l.width+l.gap)*c,l.startAngle*Math.PI,h._proportion_*Math.PI,!1),n.stroke()}return ht(e,i,n,r),{center:r,radius:o,series:t}}function Rt(t,e,i,n,r){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,l=a({},{type:"default",startAngle:.75,endAngle:.25,width:15,splitLine:{fixRadius:0,splitNumber:10,width:15,color:"#FFFFFF",childNumber:5,childWidth:5},pointer:{width:15,color:"auto"}},i.extra.gauge);void 0==l.oldAngle&&(l.oldAngle=l.startAngle),void 0==l.oldData&&(l.oldData=0),t=G(t,l.startAngle,l.endAngle);var c={x:i.width/2,y:i.height/2},h=Math.min(c.x,c.y);h-=5*i.pixelRatio,h-=l.width/2;var u=h-l.width,p=0;if("progress"==l.type){var f=h-3*l.width;r.beginPath();var d=r.createLinearGradient(c.x,c.y-f,c.x,c.y+f);d.addColorStop("0",o(e[0].color,.3)),d.addColorStop("1.0",o("#FFFFFF",.1)),r.setFillStyle(d),r.arc(c.x,c.y,f,0,2*Math.PI,!1),r.fill(),r.setLineWidth(l.width),r.setStrokeStyle(o(e[0].color,.3)),r.setLineCap("round"),r.beginPath(),r.arc(c.x,c.y,u,l.startAngle*Math.PI,l.endAngle*Math.PI,!1),r.stroke(),p=l.startAngle-l.endAngle+1;l.splitLine.splitNumber;var g=p/l.splitLine.splitNumber/l.splitLine.childNumber,v=-h-.5*l.width-l.splitLine.fixRadius,y=-h-l.width-l.splitLine.fixRadius+l.splitLine.width;r.save(),r.translate(c.x,c.y),r.rotate((l.startAngle-1)*Math.PI);for(var x=l.splitLine.splitNumber*l.splitLine.childNumber+1,m=e[0].data*s,_=0;_<x;_++)r.beginPath(),m>_/x?r.setStrokeStyle(o(e[0].color,1)):r.setStrokeStyle(o(e[0].color,.3)),r.setLineWidth(3*i.pixelRatio),r.moveTo(v,0),r.lineTo(y,0),r.stroke(),r.rotate(g*Math.PI);r.restore(),e=X(e,l,s),r.setLineWidth(l.width),r.setStrokeStyle(e[0].color),r.setLineCap("round"),r.beginPath(),r.arc(c.x,c.y,u,l.startAngle*Math.PI,e[0]._proportion_*Math.PI,!1),r.stroke();var b=h-2.5*l.width;r.save(),r.translate(c.x,c.y),r.rotate((e[0]._proportion_-1)*Math.PI),r.beginPath(),r.setLineWidth(l.width/3);var w=r.createLinearGradient(0,.6*-b,0,.6*b);w.addColorStop("0",o("#FFFFFF",0)),w.addColorStop("0.5",o(e[0].color,1)),w.addColorStop("1.0",o("#FFFFFF",0)),r.setStrokeStyle(w),r.arc(0,0,b,.85*Math.PI,1.15*Math.PI,!1),r.stroke(),r.beginPath(),r.setLineWidth(1),r.setStrokeStyle(e[0].color),r.setFillStyle(e[0].color),r.moveTo(-b-l.width/3/2,-4),r.lineTo(-b-l.width/3/2-4,0),r.lineTo(-b-l.width/3/2,4),r.lineTo(-b-l.width/3/2,-4),r.stroke(),r.fill(),r.restore()}else{r.setLineWidth(l.width),r.setLineCap("butt");for(var S=0;S<t.length;S++){var A=t[S];r.beginPath(),r.setStrokeStyle(A.color),r.arc(c.x,c.y,h,A._startAngle_*Math.PI,A._endAngle_*Math.PI,!1),r.stroke()}r.save(),p=l.startAngle-l.endAngle+1;var T=p/l.splitLine.splitNumber,P=p/l.splitLine.splitNumber/l.splitLine.childNumber,k=-h-.5*l.width-l.splitLine.fixRadius,D=-h-.5*l.width-l.splitLine.fixRadius+l.splitLine.width,O=-h-.5*l.width-l.splitLine.fixRadius+l.splitLine.childWidth;r.translate(c.x,c.y),r.rotate((l.startAngle-1)*Math.PI);for(var $=0;$<l.splitLine.splitNumber+1;$++)r.beginPath(),r.setStrokeStyle(l.splitLine.color),r.setLineWidth(2*i.pixelRatio),r.moveTo(k,0),r.lineTo(D,0),r.stroke(),r.rotate(T*Math.PI);r.restore(),r.save(),r.translate(c.x,c.y),r.rotate((l.startAngle-1)*Math.PI);for(var M=0;M<l.splitLine.splitNumber*l.splitLine.childNumber+1;M++)r.beginPath(),r.setStrokeStyle(l.splitLine.color),r.setLineWidth(1*i.pixelRatio),r.moveTo(k,0),r.lineTo(O,0),r.stroke(),r.rotate(P*Math.PI);r.restore(),e=J(e,t,l,s);for(var C=0;C<e.length;C++){var R=e[C];r.save(),r.translate(c.x,c.y),r.rotate((R._proportion_-1)*Math.PI),r.beginPath(),r.setFillStyle(R.color),r.moveTo(l.pointer.width,0),r.lineTo(0,-l.pointer.width/2),r.lineTo(-u,0),r.lineTo(0,l.pointer.width/2),r.lineTo(l.pointer.width,0),r.closePath(),r.fill(),r.beginPath(),r.setFillStyle("#FFFFFF"),r.arc(0,0,l.pointer.width/6,0,2*Math.PI,!1),r.fill(),r.restore()}!1!==i.dataLabel&&pt(l,h,c,i,n,r)}return ht(i,n,r,c),1===s&&"gauge"===i.type&&(i.extra.gauge.oldAngle=e[0]._proportion_,i.extra.gauge.oldData=e[0].data),{center:c,radius:h,innerRadius:u,categories:t,totalAngle:p}}function Lt(t,e,i,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=a({},{gridColor:"#cccccc",labelColor:"#666666",opacity:.2,gridCount:3},e.extra.radar),l=S(e.categories.length),c={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.area[0]+(e.height-e.area[0]-e.area[2])/2},h=Math.min(c.x-(w(e.categories)+i.radarLabelTextMargin),c.y-i.radarLabelTextMargin);h-=e.padding[1],n.beginPath(),n.setLineWidth(1*e.pixelRatio),n.setStrokeStyle(s.gridColor),l.forEach(function(t){var e=f(h*Math.cos(t),h*Math.sin(t),c);n.moveTo(c.x,c.y),n.lineTo(e.x,e.y)}),n.stroke(),n.closePath();for(var u=function(t){var i={};n.beginPath(),n.setLineWidth(1*e.pixelRatio),n.setStrokeStyle(s.gridColor),l.forEach(function(e,a){var r=f(h/s.gridCount*t*Math.cos(e),h/s.gridCount*t*Math.sin(e),c);0===a?(i=r,n.moveTo(r.x,r.y)):n.lineTo(r.x,r.y)}),n.lineTo(i.x,i.y),n.stroke(),n.closePath()},p=1;p<=s.gridCount;p++)u(p);var d=H(l,c,h,t,e,r);return d.forEach(function(t,i){if(n.beginPath(),n.setFillStyle(o(t.color,s.opacity)),t.data.forEach(function(t,e){0===e?n.moveTo(t.position.x,t.position.y):n.lineTo(t.position.x,t.position.y)}),n.closePath(),n.fill(),!1!==e.dataPointShape){var a=t.data.map(function(t){return t.position});ct(a,t.color,t.pointShape,n,e)}}),ft(l,h,c,e,i,n),{center:c,radius:h,angleList:l}}function Ft(t,e,i){i=0==i?1:i;for(var n=[],a=0;a<i;a++)n[a]=Math.random();return Math.floor(n.reduce(function(t,e){return t+e})/i*(e-t))+t}function It(t,e,i,n){for(var a=!1,r=0;r<e.length;r++)if(e[r].area){if(!(t[3]<e[r].area[1]||t[0]>e[r].area[2]||t[1]>e[r].area[3]||t[2]<e[r].area[0])){a=!0;break}if(t[0]<0||t[1]<0||t[2]>i||t[3]>n){a=!0;break}a=!1}return a}function Et(t){var e,i={};i.xMin=180,i.xMax=0,i.yMin=90,i.yMax=0;for(var n=0;n<t.length;n++)for(var a=t[n].geometry.coordinates,r=0;r<a.length;r++){e=a[r],1==e.length&&(e=e[0]);for(var o=0;o<e.length;o++){var s=e[o][0],l=e[o][1],c={x:s,y:l};i.xMin=i.xMin<c.x?i.xMin:c.x,i.xMax=i.xMax>c.x?i.xMax:c.x,i.yMin=i.yMin<c.y?i.yMin:c.y,i.yMax=i.yMax>c.y?i.yMax:c.y}}return i}function jt(t,e,i,n,a,r){return{x:(e-i.xMin)*n+a,y:(i.yMax-t)*n+r}}function zt(t,e,i,n,a,r){return{x:(e-a)/n+i.xMin,y:i.yMax-(t-r)/n}}function Nt(t,e,i){if(e[1]==i[1])return!1;if(e[1]>t[1]&&i[1]>t[1])return!1;if(e[1]<t[1]&&i[1]<t[1])return!1;if(e[1]==t[1]&&i[1]>t[1])return!1;if(i[1]==t[1]&&e[1]>t[1])return!1;if(e[0]<t[0]&&i[1]<t[1])return!1;var n=i[0]-(i[0]-e[0])*(i[1]-t[1])/(i[1]-e[1]);return!(n<t[0])}function Bt(t,e){for(var i=0,n=0;n<e.length;n++){var a=e[n][0];1==e.length&&(a=e[n][0]);for(var r=0;r<a.length-1;r++){var o=a[r],s=a[r+1];Nt(t,o,s)&&(i+=1)}}return i%2==1}function Wt(t,e,i,n){var r,s,l=a({},{border:!0,borderWidth:1,borderColor:"#666666",fillOpacity:.6,activeBorderColor:"#f04864",activeFillColor:"#facc14",activeFillOpacity:1},e.extra.map),c=t,h=Et(c),u=e.width/Math.abs(h.xMax-h.xMin),p=e.height/Math.abs(h.yMax-h.yMin),f=u<p?u:p,d=e.width/2-Math.abs(h.xMax-h.xMin)/2*f,g=e.height/2-Math.abs(h.yMax-h.yMin)/2*f;n.beginPath(),n.clearRect(0,0,e.width,e.height),n.setFillStyle(e.background||"#FFFFFF"),n.rect(0,0,e.width,e.height),n.fill();for(var v=0;v<c.length;v++){n.beginPath(),n.setLineWidth(l.borderWidth*e.pixelRatio),n.setStrokeStyle(l.borderColor),n.setFillStyle(o(t[v].color,l.fillOpacity)),e.tooltip&&e.tooltip.index==v&&(n.setStrokeStyle(l.activeBorderColor),n.setFillStyle(o(l.activeFillColor,l.activeFillOpacity)));for(var x=c[v].geometry.coordinates,m=0;m<x.length;m++){r=x[m],1==r.length&&(r=r[0]);for(var _=0;_<r.length;_++)s=jt(r[_][1],r[_][0],h,f,d,g),0===_?(n.beginPath(),n.moveTo(s.x,s.y)):n.lineTo(s.x,s.y);n.fill(),1==l.border&&n.stroke()}if(1==e.dataLabel){var b=c[v].properties.centroid;if(b){s=jt(b[1],b[0],h,f,d,g);var w=c[v].textSize||i.fontSize,S=c[v].properties.name;n.beginPath(),n.setFontSize(w),n.setFillStyle(c[v].textColor||"#666666"),n.fillText(S,s.x-y(S,w)/2,s.y+w/2),n.closePath(),n.stroke()}}}e.chartData.mapData={bounds:h,scale:f,xoffset:d,yoffset:g},Tt(e,i,n,1),n.draw()}function Ht(t,e){var i=t.series.sort(function(t,e){return parseInt(e.textSize)-parseInt(t.textSize)});switch(e){case"normal":for(var n=0;n<i.length;n++){var a=i[n].name,r=i[n].textSize,o=y(a,r),s=void 0,l=void 0,c=void 0,h=0;while(1){h++,s=Ft(-t.width/2,t.width/2,5)-o/2,l=Ft(-t.height/2,t.height/2,5)+r/2,c=[s-5+t.width/2,l-5-r+t.height/2,s+o+5+t.width/2,l+5+t.height/2];var u=It(c,i,t.width,t.height);if(!u)break;if(1e3==h){c=[-100,-100,-100,-100];break}}i[n].area=c}break;case"vertical":for(var p=function(){return Math.random()>.7},f=0;f<i.length;f++){var d=i[f].name,g=i[f].textSize,v=y(d,g),x=p(),m=void 0,_=void 0,b=void 0,w=void 0,S=0;while(1){S++;var A=void 0;if(x?(m=Ft(-t.width/2,t.width/2,5)-v/2,_=Ft(-t.height/2,t.height/2,5)+g/2,b=[_-5-v+t.width/2,-m-5+t.height/2,_+5+t.width/2,-m+g+5+t.height/2],w=[t.width-(t.width/2-t.height/2)-(-m+g+5+t.height/2)-5,t.height/2-t.width/2+(_-5-v+t.width/2)-5,t.width-(t.width/2-t.height/2)-(-m+g+5+t.height/2)+g,t.height/2-t.width/2+(_-5-v+t.width/2)+v+5],A=It(w,i,t.height,t.width)):(m=Ft(-t.width/2,t.width/2,5)-v/2,_=Ft(-t.height/2,t.height/2,5)+g/2,b=[m-5+t.width/2,_-5-g+t.height/2,m+v+5+t.width/2,_+5+t.height/2],A=It(b,i,t.width,t.height)),!A)break;if(1e3==S){b=[-1e3,-1e3,-1e3,-1e3];break}}x?(i[f].area=w,i[f].areav=b):i[f].area=b,i[f].rotate=x}break}return i}function Vt(t,e,i,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;a({},{type:"normal",autoColors:!0},e.extra.word);n.beginPath(),n.setFillStyle(e.background||"#FFFFFF"),n.rect(0,0,e.width,e.height),n.fill(),n.save();var o=e.chartData.wordCloudData;n.translate(e.width/2,e.height/2);for(var s=0;s<o.length;s++){n.save(),o[s].rotate&&n.rotate(90*Math.PI/180);var l=o[s].name,c=o[s].textSize,h=y(l,c);n.beginPath(),n.setStrokeStyle(o[s].color),n.setFillStyle(o[s].color),n.setFontSize(c),o[s].rotate?o[s].areav[0]>0&&(e.tooltip&&e.tooltip.index==s?n.strokeText(l,(o[s].areav[0]+5-e.width/2)*r-h*(1-r)/2,(o[s].areav[1]+5+c-e.height/2)*r):n.fillText(l,(o[s].areav[0]+5-e.width/2)*r-h*(1-r)/2,(o[s].areav[1]+5+c-e.height/2)*r)):o[s].area[0]>0&&(e.tooltip&&e.tooltip.index==s?n.strokeText(l,(o[s].area[0]+5-e.width/2)*r-h*(1-r)/2,(o[s].area[1]+5+c-e.height/2)*r):n.fillText(l,(o[s].area[0]+5-e.width/2)*r-h*(1-r)/2,(o[s].area[1]+5+c-e.height/2)*r)),n.stroke(),n.restore()}n.restore()}function qt(t,e,i,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=a({},{activeWidth:10,activeOpacity:.3,border:!1,borderWidth:2,borderColor:"#FFFFFF",fillOpacity:1,labelAlign:"right"},e.extra.funnel),l=(e.height-e.area[0]-e.area[2])/t.length,c={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.height-e.area[2]},h=s.activeWidth,u=Math.min((e.width-e.area[1]-e.area[3])/2-h,(e.height-e.area[0]-e.area[2])/2-h);t=q(t,u,r),n.save(),n.translate(c.x,c.y);for(var p=0;p<t.length;p++)0==p?(e.tooltip&&e.tooltip.index==p&&(n.beginPath(),n.setFillStyle(o(t[p].color,s.activeOpacity)),n.moveTo(-h,0),n.lineTo(-t[p].radius-h,-l),n.lineTo(t[p].radius+h,-l),n.lineTo(h,0),n.lineTo(-h,0),n.closePath(),n.fill()),t[p].funnelArea=[c.x-t[p].radius,c.y-l,c.x+t[p].radius,c.y],n.beginPath(),n.setLineWidth(s.borderWidth*e.pixelRatio),n.setStrokeStyle(s.borderColor),n.setFillStyle(o(t[p].color,s.fillOpacity)),n.moveTo(0,0),n.lineTo(-t[p].radius,-l),n.lineTo(t[p].radius,-l),n.lineTo(0,0),n.closePath(),n.fill(),1==s.border&&n.stroke()):(e.tooltip&&e.tooltip.index==p&&(n.beginPath(),n.setFillStyle(o(t[p].color,s.activeOpacity)),n.moveTo(0,0),n.lineTo(-t[p-1].radius-h,0),n.lineTo(-t[p].radius-h,-l),n.lineTo(t[p].radius+h,-l),n.lineTo(t[p-1].radius+h,0),n.lineTo(0,0),n.closePath(),n.fill()),t[p].funnelArea=[c.x-t[p].radius,c.y-l*(p+1),c.x+t[p].radius,c.y-l*p],n.beginPath(),n.setLineWidth(s.borderWidth*e.pixelRatio),n.setStrokeStyle(s.borderColor),n.setFillStyle(o(t[p].color,s.fillOpacity)),n.moveTo(0,0),n.lineTo(-t[p-1].radius,0),n.lineTo(-t[p].radius,-l),n.lineTo(t[p].radius,-l),n.lineTo(t[p-1].radius,0),n.lineTo(0,0),n.closePath(),n.fill(),1==s.border&&n.stroke()),n.translate(0,-l);return n.restore(),!1!==e.dataLabel&&1===r&&Ut(t,e,n,l,s.labelAlign,h,c),{center:c,radius:u,series:t}}function Ut(t,e,i,n,a,o,s){for(var l=0;l<t.length;l++){var c=t[l],h=void 0,u=void 0,p=void 0,f=void 0,d=c.format?c.format(+c._proportion_.toFixed(2)):r.toFixed(100*c._proportion_)+"%";"right"==a?(h=0==l?(c.funnelArea[2]+s.x)/2:(c.funnelArea[2]+t[l-1].funnelArea[2])/2,u=h+2*o,p=c.funnelArea[1]+n/2,f=c.textSize||e.fontSize,i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(c.color),i.setFillStyle(c.color),i.beginPath(),i.moveTo(h,p),i.lineTo(u,p),i.stroke(),i.closePath(),i.beginPath(),i.moveTo(u,p),i.arc(u,p,2,0,2*Math.PI),i.closePath(),i.fill(),i.beginPath(),i.setFontSize(f),i.setFillStyle(c.textColor||"#666666"),i.fillText(d,u+5,p+f/2-2),i.closePath(),i.stroke(),i.closePath()):(h=0==l?(c.funnelArea[0]+s.x)/2:(c.funnelArea[0]+t[l-1].funnelArea[0])/2,u=h-2*o,p=c.funnelArea[1]+n/2,f=c.textSize||e.fontSize,i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(c.color),i.setFillStyle(c.color),i.beginPath(),i.moveTo(h,p),i.lineTo(u,p),i.stroke(),i.closePath(),i.beginPath(),i.moveTo(u,p),i.arc(u,p,2,0,2*Math.PI),i.closePath(),i.fill(),i.beginPath(),i.setFontSize(f),i.setFillStyle(c.textColor||"#666666"),i.fillText(d,u-5-y(d),p+f/2-2),i.closePath(),i.stroke(),i.closePath())}}function Xt(t,e){e.draw()}var Gt={easeIn:function(t){return Math.pow(t,3)},easeOut:function(t){return Math.pow(t-1,3)+1},easeInOut:function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},linear:function(t){return t}};function Jt(t){this.isStop=!1,t.duration="undefined"===typeof t.duration?1e3:t.duration,t.timing=t.timing||"linear";var e=17;function i(){return"undefined"!==typeof setTimeout?function(t,e){setTimeout(function(){var e=+new Date;t(e)},e)}:"undefined"!==typeof requestAnimationFrame?requestAnimationFrame:function(t){t(null)}}var n=i(),a=null,r=function(i){if(null===i||!0===this.isStop)return t.onProcess&&t.onProcess(1),void(t.onAnimationFinish&&t.onAnimationFinish());if(null===a&&(a=i),i-a<t.duration){var o=(i-a)/t.duration,s=Gt[t.timing];o=s(o),t.onProcess&&t.onProcess(o),n(r,e)}else t.onProcess&&t.onProcess(1),t.onAnimationFinish&&t.onAnimationFinish()};r=r.bind(this),n(r,e)}function Kt(t,e,i,n){var r=this,o=e.series,s=e.categories;o=g(o,e,i);var c=e.animation?e.duration:0;r.animationInstance&&r.animationInstance.stop();var h=null;if("candle"==t){var u=a({},e.extra.candle.average);u.show?(h=l(u.day,u.name,u.color,o[0].data),h=g(h,e,i),e.seriesMA=h):h=e.seriesMA?e.seriesMA=g(e.seriesMA,e,i):o}else h=o;e._series_=o=k(o),e.area=new Array(4);for(var p=0;p<4;p++)e.area[p]=e.padding[p];var f=z(h,e,i,e.chartData),d=f.area.wholeHeight,v=f.area.wholeWidth;switch(e.legend.position){case"top":e.area[0]+=d;break;case"bottom":e.area[2]+=d;break;case"left":e.area[3]+=v;break;case"right":e.area[1]+=v;break}var y={},x=0;if("line"===e.type||"column"===e.type||"area"===e.type||"mix"===e.type||"candle"===e.type){if(y=rt(o,e,i),x=y.yAxisWidth,e.yAxis.showTitle){for(var m=0,_=0;_<e.yAxis.data.length;_++)m=Math.max(m,e.yAxis.data[_].titleFontSize?e.yAxis.data[_].titleFontSize:i.fontSize);e.area[0]+=(m+6)*e.pixelRatio}for(var b=0,w=0,S=0;S<x.length;S++)"left"==x[S].position?(e.area[3]+=w>0?x[S].width+e.yAxis.padding:x[S].width,w+=1):(e.area[1]+=b>0?x[S].width+e.yAxis.padding:x[S].width,b+=1)}else i.yAxisWidth=x;if(e.chartData.yAxisData=y,e.categories&&e.categories.length){e.chartData.xAxisData=tt(e.categories,e,i);var A=N(e.categories,e,i,e.chartData.xAxisData.eachSpacing),T=A.xAxisHeight,P=A.angle;i.xAxisHeight=T,i._xAxisTextAngle_=P,e.area[2]+=T,e.chartData.categoriesData=A}else if("line"===e.type||"area"===e.type||"points"===e.type){e.chartData.xAxisData=W(o,e,i),s=e.chartData.xAxisData.rangesFormat;var D=N(s,e,i,e.chartData.xAxisData.eachSpacing),O=D.xAxisHeight,$=D.angle;i.xAxisHeight=O,i._xAxisTextAngle_=$,e.area[2]+=O,e.chartData.categoriesData=D}else e.chartData.xAxisData={xAxisPoints:[]};if(e.enableScroll&&"right"==e.xAxis.scrollAlign&&void 0===e._scrollDistance_){var M=0,C=e.chartData.xAxisData.xAxisPoints,R=e.chartData.xAxisData.startX,L=e.chartData.xAxisData.endX,F=e.chartData.xAxisData.eachSpacing,I=F*(C.length-1),E=L-R;M=E-I,r.scrollOption={currentOffset:M,startTouchX:M,distance:0,lastMoveTime:0},e._scrollDistance_=M}switch("pie"!==t&&"ring"!==t&&"rose"!==t||(i._pieTextMaxLength_=!1===e.dataLabel?0:K(h)),t){case"word":var j=a({},{type:"normal",autoColors:!0},e.extra.word);1!=e.updateData&&void 0!=e.updateData||(e.chartData.wordCloudData=Ht(e,j.type)),this.animationInstance=new Jt({timing:"easeInOut",duration:c,onProcess:function(t){n.clearRect(0,0,e.width,e.height),e.rotate&&lt(n,e),Vt(o,e,i,n,t),Xt(e,n)},onAnimationFinish:function(){r.event.trigger("renderComplete")}});break;case"map":n.clearRect(0,0,e.width,e.height),Wt(o,e,i,n);break;case"funnel":this.animationInstance=new Jt({timing:"easeInOut",duration:c,onProcess:function(t){n.clearRect(0,0,e.width,e.height),e.rotate&&lt(n,e),e.chartData.funnelData=qt(o,e,i,n,t),Ot(e.series,e,i,n,e.chartData),Tt(e,i,n,t),Xt(e,n)},onAnimationFinish:function(){r.event.trigger("renderComplete")}});break;case"line":this.animationInstance=new Jt({timing:"easeIn",duration:c,onProcess:function(t){n.clearRect(0,0,e.width,e.height),e.rotate&&lt(n,e),kt(s,e,i,n),Pt(s,e,i,n);var a=St(o,e,i,n,t),r=a.xAxisPoints,l=a.calPoints,c=a.eachSpacing;e.chartData.xAxisPoints=r,e.chartData.calPoints=l,e.chartData.eachSpacing=c,Dt(o,e,i,n),!1!==e.enableMarkLine&&1===t&&vt(e,i,n),Ot(e.series,e,i,n,e.chartData),Tt(e,i,n,t,c,r),Xt(e,n)},onAnimationFinish:function(){r.event.trigger("renderComplete")}});break;case"mix":this.animationInstance=new Jt({timing:"easeIn",duration:c,onProcess:function(t){n.clearRect(0,0,e.width,e.height),e.rotate&&lt(n,e),kt(s,e,i,n),Pt(s,e,i,n);var a=At(o,e,i,n,t),r=a.xAxisPoints,l=a.calPoints,c=a.eachSpacing;e.chartData.xAxisPoints=r,e.chartData.calPoints=l,e.chartData.eachSpacing=c,Dt(o,e,i,n),!1!==e.enableMarkLine&&1===t&&vt(e,i,n),Ot(e.series,e,i,n,e.chartData),Tt(e,i,n,t,c,r),Xt(e,n)},onAnimationFinish:function(){r.event.trigger("renderComplete")}});break;case"column":this.animationInstance=new Jt({timing:"easeIn",duration:c,onProcess:function(t){n.clearRect(0,0,e.width,e.height),e.rotate&&lt(n,e),kt(s,e,i,n),Pt(s,e,i,n);var a=_t(o,e,i,n,t),r=a.xAxisPoints,l=a.calPoints,c=a.eachSpacing;e.chartData.xAxisPoints=r,e.chartData.calPoints=l,e.chartData.eachSpacing=c,Dt(o,e,i,n),!1!==e.enableMarkLine&&1===t&&vt(e,i,n),Ot(e.series,e,i,n,e.chartData),Tt(e,i,n,t,c,r),Xt(e,n)},onAnimationFinish:function(){r.event.trigger("renderComplete")}});break;case"area":this.animationInstance=new Jt({timing:"easeIn",duration:c,onProcess:function(t){n.clearRect(0,0,e.width,e.height),e.rotate&&lt(n,e),kt(s,e,i,n),Pt(s,e,i,n);var a=wt(o,e,i,n,t),r=a.xAxisPoints,l=a.calPoints,c=a.eachSpacing;e.chartData.xAxisPoints=r,e.chartData.calPoints=l,e.chartData.eachSpacing=c,Dt(o,e,i,n),!1!==e.enableMarkLine&&1===t&&vt(e,i,n),Ot(e.series,e,i,n,e.chartData),Tt(e,i,n,t,c,r),Xt(e,n)},onAnimationFinish:function(){r.event.trigger("renderComplete")}});break;case"ring":case"pie":this.animationInstance=new Jt({timing:"easeInOut",duration:c,onProcess:function(t){n.clearRect(0,0,e.width,e.height),e.rotate&&lt(n,e),e.chartData.pieData=$t(o,e,i,n,t),Ot(e.series,e,i,n,e.chartData),Tt(e,i,n,t),Xt(e,n)},onAnimationFinish:function(){r.event.trigger("renderComplete")}});break;case"rose":this.animationInstance=new Jt({timing:"easeInOut",duration:c,onProcess:function(t){n.clearRect(0,0,e.width,e.height),e.rotate&&lt(n,e),e.chartData.pieData=Mt(o,e,i,n,t),Ot(e.series,e,i,n,e.chartData),Tt(e,i,n,t),Xt(e,n)},onAnimationFinish:function(){r.event.trigger("renderComplete")}});break;case"radar":this.animationInstance=new Jt({timing:"easeInOut",duration:c,onProcess:function(t){n.clearRect(0,0,e.width,e.height),e.rotate&&lt(n,e),e.chartData.radarData=Lt(o,e,i,n,t),Ot(e.series,e,i,n,e.chartData),Tt(e,i,n,t),Xt(e,n)},onAnimationFinish:function(){r.event.trigger("renderComplete")}});break;case"arcbar":this.animationInstance=new Jt({timing:"easeInOut",duration:c,onProcess:function(t){n.clearRect(0,0,e.width,e.height),e.rotate&&lt(n,e),e.chartData.arcbarData=Ct(o,e,i,n,t),Xt(e,n)},onAnimationFinish:function(){r.event.trigger("renderComplete")}});break;case"gauge":this.animationInstance=new Jt({timing:"easeInOut",duration:c,onProcess:function(t){n.clearRect(0,0,e.width,e.height),e.rotate&&lt(n,e),e.chartData.gaugeData=Rt(s,o,e,i,n,t),Xt(e,n)},onAnimationFinish:function(){r.event.trigger("renderComplete")}});break;case"candle":this.animationInstance=new Jt({timing:"easeIn",duration:c,onProcess:function(t){n.clearRect(0,0,e.width,e.height),e.rotate&&lt(n,e),kt(s,e,i,n),Pt(s,e,i,n);var a=bt(o,h,e,i,n,t),r=a.xAxisPoints,l=a.calPoints,c=a.eachSpacing;e.chartData.xAxisPoints=r,e.chartData.calPoints=l,e.chartData.eachSpacing=c,Dt(o,e,i,n),!1!==e.enableMarkLine&&1===t&&vt(e,i,n),Ot(h||e.series,e,i,n,e.chartData),Tt(e,i,n,t,c,r),Xt(e,n)},onAnimationFinish:function(){r.event.trigger("renderComplete")}});break}}function Yt(){this.events={}}Jt.prototype.stop=function(){this.isStop=!0},Yt.prototype.addEventListener=function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},Yt.prototype.trigger=function(){for(var t=arguments.length,i=Array(t),n=0;n<t;n++)i[n]=arguments[n];var a=i[0],r=i.slice(1);this.events[a]&&this.events[a].forEach(function(t){try{t.apply(null,r)}catch(i){console.error(e(i," at common\\u-charts.js:5091"))}})};var Zt=function(t){t.pixelRatio=t.pixelRatio?t.pixelRatio:1,t.fontSize=t.fontSize?t.fontSize*t.pixelRatio:13*t.pixelRatio,t.title=a({},t.title),t.subtitle=a({},t.subtitle),t.duration=t.duration?t.duration:1e3,t.yAxis=a({},{data:[],showTitle:!1,disabled:!1,disableGrid:!1,splitNumber:5,gridType:"solid",dashLength:4*t.pixelRatio,gridColor:"#cccccc",padding:10,fontColor:"#666666"},t.yAxis),t.yAxis.dashLength*=t.pixelRatio,t.yAxis.padding*=t.pixelRatio,t.xAxis=a({},{rotateLabel:!1,type:"calibration",gridType:"solid",dashLength:4,scrollAlign:"left",boundaryGap:"center",axisLine:!0,axisLineColor:"#cccccc"},t.xAxis),t.xAxis.dashLength*=t.pixelRatio,t.legend=a({},{show:!0,position:"bottom",float:"center",backgroundColor:"rgba(0,0,0,0)",borderColor:"rgba(0,0,0,0)",borderWidth:0,padding:5,margin:5,itemGap:10,fontSize:t.fontSize,lineHeight:t.fontSize,fontColor:"#333333",format:{},hiddenColor:"#CECECE"},t.legend),t.legend.borderWidth=t.legend.borderWidth*t.pixelRatio,t.legend.itemGap=t.legend.itemGap*t.pixelRatio,t.legend.padding=t.legend.padding*t.pixelRatio,t.legend.margin=t.legend.margin*t.pixelRatio,t.extra=a({},t.extra),t.rotate=!!t.rotate,t.animation=!!t.animation,t.rotate=!!t.rotate;var e=JSON.parse(JSON.stringify(n));if(e.colors=t.colors?t.colors:e.colors,e.yAxisTitleWidth=!0!==t.yAxis.disabled&&t.yAxis.title?e.yAxisTitleWidth:0,"pie"!=t.type&&"ring"!=t.type||(e.pieChartLinePadding=!1===t.dataLabel?0:t.extra.pie.labelWidth*t.pixelRatio||e.pieChartLinePadding*t.pixelRatio),"rose"==t.type&&(e.pieChartLinePadding=!1===t.dataLabel?0:t.extra.rose.labelWidth*t.pixelRatio||e.pieChartLinePadding*t.pixelRatio),e.pieChartTextPadding=!1===t.dataLabel?0:e.pieChartTextPadding*t.pixelRatio,e.yAxisSplit=t.yAxis.splitNumber?t.yAxis.splitNumber:n.yAxisSplit,e.rotate=t.rotate,t.rotate){var r=t.width,o=t.height;t.width=o,t.height=r}t.padding=t.padding?t.padding:e.padding;for(var s=0;s<4;s++)t.padding[s]*=t.pixelRatio;e.yAxisWidth=n.yAxisWidth*t.pixelRatio,e.xAxisHeight=n.xAxisHeight*t.pixelRatio,t.enableScroll&&t.xAxis.scrollShow&&(e.xAxisHeight+=6*t.pixelRatio),e.xAxisLineHeight=n.xAxisLineHeight*t.pixelRatio,e.fontSize=t.fontSize,e.titleFontSize=n.titleFontSize*t.pixelRatio,e.subtitleFontSize=n.subtitleFontSize*t.pixelRatio,e.toolTipPadding=n.toolTipPadding*t.pixelRatio,e.toolTipLineHeight=n.toolTipLineHeight*t.pixelRatio,e.columePadding=n.columePadding*t.pixelRatio,t.$this=t.$this?t.$this:this,this.context=i.createCanvasContext(t.canvasId,t.$this),t.chartData={},this.event=new Yt,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0},this.opts=t,this.config=e,Kt.call(this,t.type,t,e,this.context)};Zt.prototype.updateData=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.opts=a({},this.opts,t),this.opts.updateData=!0;var e=t.scrollPosition||"current";switch(e){case"current":this.opts._scrollDistance_=this.scrollOption.currentOffset;break;case"left":this.opts._scrollDistance_=0,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0};break;case"right":var i=rt(this.opts.series,this.opts,this.config),n=i.yAxisWidth;this.config.yAxisWidth=n;var r=0,o=tt(this.opts.categories,this.opts,this.config),s=o.xAxisPoints,l=o.startX,c=o.endX,h=o.eachSpacing,u=h*(s.length-1),p=c-l;r=p-u,this.scrollOption={currentOffset:r,startTouchX:r,distance:0,lastMoveTime:0},this.opts._scrollDistance_=r;break}Kt.call(this,this.opts.type,this.opts,this.config,this.context)},Zt.prototype.zoom=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.opts.xAxis.itemCount;if(!0===this.opts.enableScroll){var i=Math.round(Math.abs(this.scrollOption.currentOffset)/this.opts.chartData.eachSpacing)+Math.round(this.opts.xAxis.itemCount/2);this.opts.animation=!1,this.opts.xAxis.itemCount=t.itemCount;var n=rt(this.opts.series,this.opts,this.config),a=n.yAxisWidth;this.config.yAxisWidth=a;var r=0,o=tt(this.opts.categories,this.opts,this.config),s=o.xAxisPoints,l=o.startX,c=o.endX,h=o.eachSpacing,u=h*i,p=c-l,f=p-h*(s.length-1);r=p/2-u,r>0&&(r=0),r<f&&(r=f),this.scrollOption={currentOffset:r,startTouchX:r,distance:0,lastMoveTime:0},this.opts._scrollDistance_=r,Kt.call(this,this.opts.type,this.opts,this.config,this.context)}else console.log(e("请启用滚动条后使用！"," at common\\u-charts.js:5265"))},Zt.prototype.stopAnimation=function(){this.animationInstance&&this.animationInstance.stop()},Zt.prototype.addEventListener=function(t,e){this.event.addEventListener(t,e)},Zt.prototype.getCurrentDataIndex=function(t){var e=null;if(e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],e){var i=_(e,this.opts,t);return"pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type?I({x:i.x,y:i.y},this.opts.chartData.pieData):"radar"===this.opts.type?C({x:i.x,y:i.y},this.opts.chartData.radarData,this.opts.categories.length):"funnel"===this.opts.type?R({x:i.x,y:i.y},this.opts.chartData.funnelData):"map"===this.opts.type?F({x:i.x,y:i.y},this.opts):"word"===this.opts.type?L({x:i.x,y:i.y},this.opts.chartData.wordCloudData):D({x:i.x,y:i.y},this.opts.chartData.calPoints,this.opts,this.config,Math.abs(this.scrollOption.currentOffset))}return-1},Zt.prototype.getLegendDataIndex=function(t){var e=null;if(e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],e){var i=_(e,this.opts,t);return O({x:i.x,y:i.y},this.opts.chartData.legendData)}return-1},Zt.prototype.touchLegend=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=null;if(i=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],i){_(i,this.opts,t);var n=this.getLegendDataIndex(t);n>=0&&(this.opts.series[n].show=!this.opts.series[n].show,this.opts.animation=!!e.animation,this.opts._scrollDistance_=this.scrollOption.currentOffset,Kt.call(this,this.opts.type,this.opts,this.config,this.context))}},Zt.prototype.showToolTip=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=null;n=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],n||console.log(e("touchError"," at common\\u-charts.js:5402"));var r=_(n,this.opts,t),o=this.scrollOption.currentOffset,s=a({},this.opts,{_scrollDistance_:o,animation:!1});if("line"===this.opts.type||"area"===this.opts.type||"column"===this.opts.type){var l=this.getCurrentDataIndex(t);if(l>-1){var c=b(this.opts.series,l);if(0!==c.length){var h=A(c,this.opts.chartData.calPoints,l,this.opts.categories,i),u=h.textList,p=h.offset;p.y=r.y,s.tooltip={textList:u,offset:p,option:i,index:l}}}Kt.call(this,s.type,s,this.config,this.context)}if("mix"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){o=this.scrollOption.currentOffset,s=a({},this.opts,{_scrollDistance_:o,animation:!1}),c=b(this.opts.series,l);if(0!==c.length){var f=T(c,this.opts.chartData.calPoints,l,this.opts.categories,i);u=f.textList,p=f.offset;p.y=r.y,s.tooltip={textList:u,offset:p,option:i,index:l}}}Kt.call(this,s.type,s,this.config,this.context)}if("candle"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){o=this.scrollOption.currentOffset,s=a({},this.opts,{_scrollDistance_:o,animation:!1}),c=b(this.opts.series,l);if(0!==c.length){h=P(this.opts.series[0].data,c,this.opts.chartData.calPoints,l,this.opts.categories,this.opts.extra.candle,i),u=h.textList,p=h.offset;p.y=r.y,s.tooltip={textList:u,offset:p,option:i,index:l}}}Kt.call(this,s.type,s,this.config,this.context)}if("pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type||"funnel"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){o=this.scrollOption.currentOffset,s=a({},this.opts,{_scrollDistance_:o,animation:!1}),c=this.opts._series_[l],u=[{text:i.format?i.format(c):c.name+": "+c.data,color:c.color}],p={x:r.x,y:r.y};s.tooltip={textList:u,offset:p,option:i,index:l}}Kt.call(this,s.type,s,this.config,this.context)}if("map"===this.opts.type||"word"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){o=this.scrollOption.currentOffset,s=a({},this.opts,{_scrollDistance_:o,animation:!1}),c=this.opts._series_[l],u=[{text:i.format?i.format(c):c.properties.name,color:c.color}],p={x:r.x,y:r.y};s.tooltip={textList:u,offset:p,option:i,index:l}}s.updateData=!1,Kt.call(this,s.type,s,this.config,this.context)}if("radar"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){o=this.scrollOption.currentOffset,s=a({},this.opts,{_scrollDistance_:o,animation:!1}),c=b(this.opts.series,l);if(0!==c.length){u=c.map(function(t){return{text:i.format?i.format(t):t.name+": "+t.data,color:t.color}}),p={x:r.x,y:r.y};s.tooltip={textList:u,offset:p,option:i,index:l}}}Kt.call(this,s.type,s,this.config,this.context)}},Zt.prototype.translate=function(t){this.scrollOption={currentOffset:t,startTouchX:t,distance:0,lastMoveTime:0};var e=a({},this.opts,{_scrollDistance_:t,animation:!1});Kt.call(this,this.opts.type,e,this.config,this.context)},Zt.prototype.scrollStart=function(t){var e=null;e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0];var i=_(e,this.opts,t);e&&!0===this.opts.enableScroll&&(this.scrollOption.startTouchX=i.x)},Zt.prototype.scroll=function(t){0===this.scrollOption.lastMoveTime&&(this.scrollOption.lastMoveTime=Date.now());var e=this.opts.extra.touchMoveLimit||20,i=Date.now(),n=i-this.scrollOption.lastMoveTime;if(!(n<Math.floor(1e3/e))){this.scrollOption.lastMoveTime=i;var r=null;if(r=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],r&&!0===this.opts.enableScroll){var o,s=_(r,this.opts,t);o=s.x-this.scrollOption.startTouchX;var l=this.scrollOption.currentOffset,h=c(this,l+o,this.opts.chartData,this.config,this.opts);this.scrollOption.distance=o=h-l;var u=a({},this.opts,{_scrollDistance_:l+o,animation:!1});return Kt.call(this,u.type,u,this.config,this.context),l+o}}},Zt.prototype.scrollEnd=function(t){if(!0===this.opts.enableScroll){var e=this.scrollOption,i=e.currentOffset,n=e.distance;this.scrollOption.currentOffset=i+n,this.scrollOption.distance=0}},"object"===typeof t.exports&&(t.exports=Zt)}).call(this,i("0de9")["default"],i("6e42")["default"])},"5c17":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={pages:{"pages/start/start":{navigationBarTitleText:"启动页",titleNView:!1},"pages/leader/guide":{titleNView:!1},"pages/login/login":{navigationStyle:"custom"},"pages/register/register":{navigationStyle:"custom"},"pages/index/index":{titleNView:{titleText:"星际云通"}},"pages/getBackPassword/getBackPassword":{navigationBarTitleText:"找回密码"},"pages/setNewPassword/setNewPassword":{navigationBarTitleText:"设置新密码"},"pages/agreement/agreement":{navigationBarTitleText:"用户协议"},"pages/otherLogin/otherLogin":{navigationStyle:"custom"},"pages/news/news":{0:"热",1:"门",2:"新",3:"闻"},"pages/web1/web1":{navigationBarTitleText:"星际云通"},"pages/web2/web2":{navigationBarTitleText:"星际云通"},"pages/banner/banner":{titleNView:{titleText:"文章详情"}},"pages/banner2/banner2":{titleNView:{titleText:"文章详情2"}},"mill/mill/mill":{navigationStyle:"custom"},"mill/pay/pay":{navigationBarTitleText:"买单"},"mill/staypay/staypay":{navigationBarTitleText:"待付款订单详情"},"mill/stayconfirm/stayconfirm":{navigationBarTitleText:"待确认订单详情"},"mill/stayaudit/stayaudit":{navigationBarTitleText:"待审核订单详情"},"mill/completed/completed":{navigationBarTitleText:"已完成订单详情"},"mill/sale/sale":{navigationBarTitleText:"卖单"},"mill/salepay/salepay":{navigationBarTitleText:"待付款订单详情"},"mill/saleconfirm/saleconfirm":{navigationBarTitleText:"待确认单详情"},"mill/saleaudit/saleaudit":{navigationBarTitleText:"待审核订单详情"},"mill/salecompleted/salecompleted":{navigationBarTitleText:"已完成订单详情"},"mill/assets/assets":{navigationStyle:"custom"},"mill/sell/sell":{navigationBarTitleText:"出售"},"mill/validation/validation":{navigationBarTitleText:"验证"},"mill/confirm/confirm":{navigationBarTitleText:"确认订单"},"my/my/my":{navigationStyle:"custom"},"my/personal/personal":{navigationBarTitleText:"个人资料"},"my/add-address/add-address":{navigationBarTitleText:"新增提币地址"},"my/address/address":{navigationStyle:"custom"},"my/edit-address/edit-address":{titleNView:{titleText:"编辑提币地址",buttons:[{text:"删除",fontSize:"32rpx",width:"50px"}]}},"my/email/email":{navigationBarTitleText:"邮箱认证"},"my/unbindemail/unbindemail":{navigationBarTitleText:"解绑邮箱"},"my/identity/identity":{navigationBarTitleText:"身份认证"},"my/login-password/login-password":{navigationBarTitleText:"修改登录密码"},"my/change-pass/change-pass":{navigationBarTitleText:"修改登录密码"},"my/change-loginPassword/change-loginPassword":{navigationBarTitleText:"设置登录密码"},"my/change-password/change-password":{navigationBarTitleText:"修改交易密码"},"my/trade-password/trade-password":{navigationBarTitleText:"设置交易密码"},"my/change-otherPassword/change_otherPassword":{navigationBarTitleText:"找回密码"},"my/my-machine/my-machine":{titleNView:{titleText:"我的矿机",buttons:[{text:"服务协议",fontSize:"32rpx",width:"80px"}]}},"my/machine-detail/machine-detail":{navigationBarTitleText:"矿机详情"},"my/my-wallet/my-wallet":{navigationBarTitleText:"我的钱包"},"my/suggest/suggest":{navigationStyle:"custom"},"my/suggest-detail/suggest-detail":{navigationBarTitleText:"反馈详情"},"my/transfer/transfer":{navigationBarTitleText:"转账"},"my/commit/commit":{navigationStyle:"custom"},"my/choose-address/choose-address":{navigationBarTitleText:"选择地址"}},globalStyle:{navigationBarTextStyle:"white",navigationBarTitleText:"xjyt",navigationBarBackgroundColor:"#121212",backgroundColor:"#121212"}};e.default=n},"66fd":function(t,e,i){"use strict";i.r(e),function(t){
/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var i=Object.freeze({});function n(t){return void 0===t||null===t}function a(t){return void 0!==t&&null!==t}function r(t){return!0===t}function o(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function l(t){return null!==t&&"object"===typeof t}var c=Object.prototype.toString;function h(t){return"[object Object]"===c.call(t)}function u(t){return"[object RegExp]"===c.call(t)}function p(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function f(t){return a(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||h(t)&&t.toString===c?JSON.stringify(t,null,2):String(t)}function g(t){var e=parseFloat(t);return isNaN(e)?t:e}function v(t,e){for(var i=Object.create(null),n=t.split(","),a=0;a<n.length;a++)i[n[a]]=!0;return e?function(t){return i[t.toLowerCase()]}:function(t){return i[t]}}v("slot,component",!0);var y=v("key,ref,slot,slot-scope,is");function x(t,e){if(t.length){var i=t.indexOf(e);if(i>-1)return t.splice(i,1)}}var m=Object.prototype.hasOwnProperty;function _(t,e){return m.call(t,e)}function b(t){var e=Object.create(null);return function(i){var n=e[i];return n||(e[i]=t(i))}}var w=/-(\w)/g,S=b(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),A=b(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),T=/\B([A-Z])/g,P=b(function(t){return t.replace(T,"-$1").toLowerCase()});function k(t,e){function i(i){var n=arguments.length;return n?n>1?t.apply(e,arguments):t.call(e,i):t.call(e)}return i._length=t.length,i}function D(t,e){return t.bind(e)}var O=Function.prototype.bind?D:k;function $(t,e){e=e||0;var i=t.length-e,n=new Array(i);while(i--)n[i]=t[i+e];return n}function M(t,e){for(var i in e)t[i]=e[i];return t}function C(t){for(var e={},i=0;i<t.length;i++)t[i]&&M(e,t[i]);return e}function R(t,e,i){}var L=function(t,e,i){return!1},F=function(t){return t};function I(t,e){if(t===e)return!0;var i=l(t),n=l(e);if(!i||!n)return!i&&!n&&String(t)===String(e);try{var a=Array.isArray(t),r=Array.isArray(e);if(a&&r)return t.length===e.length&&t.every(function(t,i){return I(t,e[i])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(a||r)return!1;var o=Object.keys(t),s=Object.keys(e);return o.length===s.length&&o.every(function(i){return I(t[i],e[i])})}catch(c){return!1}}function E(t,e){for(var i=0;i<t.length;i++)if(I(t[i],e))return i;return-1}function j(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var z=["component","directive","filter"],N=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],B={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:L,isReservedAttr:L,isUnknownElement:L,getTagNamespace:R,parsePlatformTagName:F,mustUseProp:L,async:!0,_lifecycleHooks:N},W=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function H(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function V(t,e,i,n){Object.defineProperty(t,e,{value:i,enumerable:!!n,writable:!0,configurable:!0})}var q=new RegExp("[^"+W.source+".$_\\d]");function U(t){if(!q.test(t)){var e=t.split(".");return function(t){for(var i=0;i<e.length;i++){if(!t)return;t=t[e[i]]}return t}}}var X,G="__proto__"in{},J="undefined"!==typeof window,K="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Y=K&&WXEnvironment.platform.toLowerCase(),Z=J&&window.navigator.userAgent.toLowerCase(),Q=Z&&/msie|trident/.test(Z),tt=(Z&&Z.indexOf("msie 9.0"),Z&&Z.indexOf("edge/")>0),et=(Z&&Z.indexOf("android"),Z&&/iphone|ipad|ipod|ios/.test(Z)||"ios"===Y),it=(Z&&/chrome\/\d+/.test(Z),Z&&/phantomjs/.test(Z),Z&&Z.match(/firefox\/(\d+)/),{}.watch);if(J)try{var nt={};Object.defineProperty(nt,"passive",{get:function(){}}),window.addEventListener("test-passive",null,nt)}catch(ea){}var at=function(){return void 0===X&&(X=!J&&!K&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),X},rt=J&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ot(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,lt="undefined"!==typeof Symbol&&ot(Symbol)&&"undefined"!==typeof Reflect&&ot(Reflect.ownKeys);st="undefined"!==typeof Set&&ot(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=R,ht=0,ut=function(){this.id=ht++,this.subs=[]};function pt(t){ut.SharedObject.targetStack.push(t),ut.SharedObject.target=t}function ft(){ut.SharedObject.targetStack.pop(),ut.SharedObject.target=ut.SharedObject.targetStack[ut.SharedObject.targetStack.length-1]}ut.prototype.addSub=function(t){this.subs.push(t)},ut.prototype.removeSub=function(t){x(this.subs,t)},ut.prototype.depend=function(){ut.SharedObject.target&&ut.SharedObject.target.addDep(this)},ut.prototype.notify=function(){var t=this.subs.slice();for(var e=0,i=t.length;e<i;e++)t[e].update()},ut.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},ut.SharedObject.target=null,ut.SharedObject.targetStack=[];var dt=function(t,e,i,n,a,r,o,s){this.tag=t,this.data=e,this.children=i,this.text=n,this.elm=a,this.ns=void 0,this.context=r,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},gt={child:{configurable:!0}};gt.child.get=function(){return this.componentInstance},Object.defineProperties(dt.prototype,gt);var vt=function(t){void 0===t&&(t="");var e=new dt;return e.text=t,e.isComment=!0,e};function yt(t){return new dt(void 0,void 0,void 0,String(t))}function xt(t){var e=new dt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var mt=Array.prototype,_t=Object.create(mt),bt=["push","pop","shift","unshift","splice","sort","reverse"];bt.forEach(function(t){var e=mt[t];V(_t,t,function(){var i=[],n=arguments.length;while(n--)i[n]=arguments[n];var a,r=e.apply(this,i),o=this.__ob__;switch(t){case"push":case"unshift":a=i;break;case"splice":a=i.slice(2);break}return a&&o.observeArray(a),o.dep.notify(),r})});var wt=Object.getOwnPropertyNames(_t),St=!0;function At(t){St=t}var Tt=function(t){this.value=t,this.dep=new ut,this.vmCount=0,V(t,"__ob__",this),Array.isArray(t)?(G?t.push!==t.__proto__.push?kt(t,_t,wt):Pt(t,_t):kt(t,_t,wt),this.observeArray(t)):this.walk(t)};function Pt(t,e){t.__proto__=e}function kt(t,e,i){for(var n=0,a=i.length;n<a;n++){var r=i[n];V(t,r,e[r])}}function Dt(t,e){var i;if(l(t)&&!(t instanceof dt))return _(t,"__ob__")&&t.__ob__ instanceof Tt?i=t.__ob__:St&&!at()&&(Array.isArray(t)||h(t))&&Object.isExtensible(t)&&!t._isVue&&(i=new Tt(t)),e&&i&&i.vmCount++,i}function Ot(t,e,i,n,a){var r=new ut,o=Object.getOwnPropertyDescriptor(t,e);if(!o||!1!==o.configurable){var s=o&&o.get,l=o&&o.set;s&&!l||2!==arguments.length||(i=t[e]);var c=!a&&Dt(i);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):i;return ut.SharedObject.target&&(r.depend(),c&&(c.dep.depend(),Array.isArray(e)&&Ct(e))),e},set:function(e){var n=s?s.call(t):i;e===n||e!==e&&n!==n||s&&!l||(l?l.call(t,e):i=e,c=!a&&Dt(e),r.notify())}})}}function $t(t,e,i){if(Array.isArray(t)&&p(e))return t.length=Math.max(t.length,e),t.splice(e,1,i),i;if(e in t&&!(e in Object.prototype))return t[e]=i,i;var n=t.__ob__;return t._isVue||n&&n.vmCount?i:n?(Ot(n.value,e,i),n.dep.notify(),i):(t[e]=i,i)}function Mt(t,e){if(Array.isArray(t)&&p(e))t.splice(e,1);else{var i=t.__ob__;t._isVue||i&&i.vmCount||_(t,e)&&(delete t[e],i&&i.dep.notify())}}function Ct(t){for(var e=void 0,i=0,n=t.length;i<n;i++)e=t[i],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Ct(e)}Tt.prototype.walk=function(t){for(var e=Object.keys(t),i=0;i<e.length;i++)Ot(t,e[i])},Tt.prototype.observeArray=function(t){for(var e=0,i=t.length;e<i;e++)Dt(t[e])};var Rt=B.optionMergeStrategies;function Lt(t,e){if(!e)return t;for(var i,n,a,r=lt?Reflect.ownKeys(e):Object.keys(e),o=0;o<r.length;o++)i=r[o],"__ob__"!==i&&(n=t[i],a=e[i],_(t,i)?n!==a&&h(n)&&h(a)&&Lt(n,a):$t(t,i,a));return t}function Ft(t,e,i){return i?function(){var n="function"===typeof e?e.call(i,i):e,a="function"===typeof t?t.call(i,i):t;return n?Lt(n,a):a}:e?t?function(){return Lt("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function It(t,e){var i=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return i?Et(i):i}function Et(t){for(var e=[],i=0;i<t.length;i++)-1===e.indexOf(t[i])&&e.push(t[i]);return e}function jt(t,e,i,n){var a=Object.create(t||null);return e?M(a,e):a}Rt.data=function(t,e,i){return i?Ft(t,e,i):e&&"function"!==typeof e?t:Ft(t,e)},N.forEach(function(t){Rt[t]=It}),z.forEach(function(t){Rt[t+"s"]=jt}),Rt.watch=function(t,e,i,n){if(t===it&&(t=void 0),e===it&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var a={};for(var r in M(a,t),e){var o=a[r],s=e[r];o&&!Array.isArray(o)&&(o=[o]),a[r]=o?o.concat(s):Array.isArray(s)?s:[s]}return a},Rt.props=Rt.methods=Rt.inject=Rt.computed=function(t,e,i,n){if(!t)return e;var a=Object.create(null);return M(a,t),e&&M(a,e),a},Rt.provide=Ft;var zt=function(t,e){return void 0===e?t:e};function Nt(t,e){var i=t.props;if(i){var n,a,r,o={};if(Array.isArray(i)){n=i.length;while(n--)a=i[n],"string"===typeof a&&(r=S(a),o[r]={type:null})}else if(h(i))for(var s in i)a=i[s],r=S(s),o[r]=h(a)?a:{type:a};else 0;t.props=o}}function Bt(t,e){var i=t.inject;if(i){var n=t.inject={};if(Array.isArray(i))for(var a=0;a<i.length;a++)n[i[a]]={from:i[a]};else if(h(i))for(var r in i){var o=i[r];n[r]=h(o)?M({from:r},o):{from:o}}else 0}}function Wt(t){var e=t.directives;if(e)for(var i in e){var n=e[i];"function"===typeof n&&(e[i]={bind:n,update:n})}}function Ht(t,e,i){if("function"===typeof e&&(e=e.options),Nt(e,i),Bt(e,i),Wt(e),!e._base&&(e.extends&&(t=Ht(t,e.extends,i)),e.mixins))for(var n=0,a=e.mixins.length;n<a;n++)t=Ht(t,e.mixins[n],i);var r,o={};for(r in t)s(r);for(r in e)_(t,r)||s(r);function s(n){var a=Rt[n]||zt;o[n]=a(t[n],e[n],i,n)}return o}function Vt(t,e,i,n){if("string"===typeof i){var a=t[e];if(_(a,i))return a[i];var r=S(i);if(_(a,r))return a[r];var o=A(r);if(_(a,o))return a[o];var s=a[i]||a[r]||a[o];return s}}function qt(t,e,i,n){var a=e[t],r=!_(i,t),o=i[t],s=Jt(Boolean,a.type);if(s>-1)if(r&&!_(a,"default"))o=!1;else if(""===o||o===P(t)){var l=Jt(String,a.type);(l<0||s<l)&&(o=!0)}if(void 0===o){o=Ut(n,a,t);var c=St;At(!0),Dt(o),At(c)}return o}function Ut(t,e,i){if(_(e,"default")){var n=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[i]&&void 0!==t._props[i]?t._props[i]:"function"===typeof n&&"Function"!==Xt(e.type)?n.call(t):n}}function Xt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Gt(t,e){return Xt(t)===Xt(e)}function Jt(t,e){if(!Array.isArray(e))return Gt(e,t)?0:-1;for(var i=0,n=e.length;i<n;i++)if(Gt(e[i],t))return i;return-1}function Kt(t,e,i){pt();try{if(e){var n=e;while(n=n.$parent){var a=n.$options.errorCaptured;if(a)for(var r=0;r<a.length;r++)try{var o=!1===a[r].call(n,t,e,i);if(o)return}catch(ea){Zt(ea,n,"errorCaptured hook")}}}Zt(t,e,i)}finally{ft()}}function Yt(t,e,i,n,a){var r;try{r=i?t.apply(e,i):t.call(e),r&&!r._isVue&&f(r)&&!r._handled&&(r.catch(function(t){return Kt(t,n,a+" (Promise/async)")}),r._handled=!0)}catch(ea){Kt(ea,n,a)}return r}function Zt(t,e,i){if(B.errorHandler)try{return B.errorHandler.call(null,t,e,i)}catch(ea){ea!==t&&Qt(ea,null,"config.errorHandler")}Qt(t,e,i)}function Qt(t,e,i){if(!J&&!K||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ie=!1;function ne(){ie=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&ot(Promise)){var ae=Promise.resolve();te=function(){ae.then(ne),et&&setTimeout(R)}}else if(Q||"undefined"===typeof MutationObserver||!ot(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&ot(setImmediate)?function(){setImmediate(ne)}:function(){setTimeout(ne,0)};else{var re=1,oe=new MutationObserver(ne),se=document.createTextNode(String(re));oe.observe(se,{characterData:!0}),te=function(){re=(re+1)%2,se.data=String(re)}}function le(t,e){var i;if(ee.push(function(){if(t)try{t.call(e)}catch(ea){Kt(ea,e,"nextTick")}else i&&i(e)}),ie||(ie=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){i=t})}var ce=new st;function he(t){ue(t,ce),ce.clear()}function ue(t,e){var i,n,a=Array.isArray(t);if(!(!a&&!l(t)||Object.isFrozen(t)||t instanceof dt)){if(t.__ob__){var r=t.__ob__.dep.id;if(e.has(r))return;e.add(r)}if(a){i=t.length;while(i--)ue(t[i],e)}else{n=Object.keys(t),i=n.length;while(i--)ue(t[n[i]],e)}}}var pe=b(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var i="~"===t.charAt(0);t=i?t.slice(1):t;var n="!"===t.charAt(0);return t=n?t.slice(1):t,{name:t,once:i,capture:n,passive:e}});function fe(t,e){function i(){var t=arguments,n=i.fns;if(!Array.isArray(n))return Yt(n,null,arguments,e,"v-on handler");for(var a=n.slice(),r=0;r<a.length;r++)Yt(a[r],null,t,e,"v-on handler")}return i.fns=t,i}function de(t,e,i,a,o,s){var l,c,h,u;for(l in t)c=t[l],h=e[l],u=pe(l),n(c)||(n(h)?(n(c.fns)&&(c=t[l]=fe(c,s)),r(u.once)&&(c=t[l]=o(u.name,c,u.capture)),i(u.name,c,u.capture,u.passive,u.params)):c!==h&&(h.fns=c,t[l]=h));for(l in e)n(t[l])&&(u=pe(l),a(u.name,e[l],u.capture))}function ge(t,e,i){var r=e.options.props;if(!n(r)){var o={},s=t.attrs,l=t.props;if(a(s)||a(l))for(var c in r){var h=P(c);ve(o,l,c,h,!0)||ve(o,s,c,h,!1)}return o}}function ve(t,e,i,n,r){if(a(e)){if(_(e,i))return t[i]=e[i],r||delete e[i],!0;if(_(e,n))return t[i]=e[n],r||delete e[n],!0}return!1}function ye(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function xe(t){return s(t)?[yt(t)]:Array.isArray(t)?_e(t):void 0}function me(t){return a(t)&&a(t.text)&&o(t.isComment)}function _e(t,e){var i,o,l,c,h=[];for(i=0;i<t.length;i++)o=t[i],n(o)||"boolean"===typeof o||(l=h.length-1,c=h[l],Array.isArray(o)?o.length>0&&(o=_e(o,(e||"")+"_"+i),me(o[0])&&me(c)&&(h[l]=yt(c.text+o[0].text),o.shift()),h.push.apply(h,o)):s(o)?me(c)?h[l]=yt(c.text+o):""!==o&&h.push(yt(o)):me(o)&&me(c)?h[l]=yt(c.text+o.text):(r(t._isVList)&&a(o.tag)&&n(o.key)&&a(e)&&(o.key="__vlist"+e+"_"+i+"__"),h.push(o)));return h}function be(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function we(t){var e=Se(t.$options.inject,t);e&&(At(!1),Object.keys(e).forEach(function(i){Ot(t,i,e[i])}),At(!0))}function Se(t,e){if(t){for(var i=Object.create(null),n=lt?Reflect.ownKeys(t):Object.keys(t),a=0;a<n.length;a++){var r=n[a];if("__ob__"!==r){var o=t[r].from,s=e;while(s){if(s._provided&&_(s._provided,o)){i[r]=s._provided[o];break}s=s.$parent}if(!s)if("default"in t[r]){var l=t[r].default;i[r]="function"===typeof l?l.call(e):l}else 0}}return i}}function Ae(t,e){if(!t||!t.length)return{};for(var i={},n=0,a=t.length;n<a;n++){var r=t[n],o=r.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,r.context!==e&&r.fnContext!==e||!o||null==o.slot)r.asyncMeta&&r.asyncMeta.data&&"page"===r.asyncMeta.data.slot?(i["page"]||(i["page"]=[])).push(r):(i.default||(i.default=[])).push(r);else{var s=o.slot,l=i[s]||(i[s]=[]);"template"===r.tag?l.push.apply(l,r.children||[]):l.push(r)}}for(var c in i)i[c].every(Te)&&delete i[c];return i}function Te(t){return t.isComment&&!t.asyncFactory||" "===t.text}function Pe(t,e,n){var a,r=Object.keys(e).length>0,o=t?!!t.$stable:!r,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(o&&n&&n!==i&&s===n.$key&&!r&&!n.$hasNormal)return n;for(var l in a={},t)t[l]&&"$"!==l[0]&&(a[l]=ke(e,l,t[l]))}else a={};for(var c in e)c in a||(a[c]=De(e,c));return t&&Object.isExtensible(t)&&(t._normalized=a),V(a,"$stable",o),V(a,"$key",s),V(a,"$hasNormal",r),a}function ke(t,e,i){var n=function(){var t=arguments.length?i.apply(null,arguments):i({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:xe(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return i.proxy&&Object.defineProperty(t,e,{get:n,enumerable:!0,configurable:!0}),n}function De(t,e){return function(){return t[e]}}function Oe(t,e){var i,n,r,o,s;if(Array.isArray(t)||"string"===typeof t)for(i=new Array(t.length),n=0,r=t.length;n<r;n++)i[n]=e(t[n],n);else if("number"===typeof t)for(i=new Array(t),n=0;n<t;n++)i[n]=e(n+1,n);else if(l(t))if(lt&&t[Symbol.iterator]){i=[];var c=t[Symbol.iterator](),h=c.next();while(!h.done)i.push(e(h.value,i.length)),h=c.next()}else for(o=Object.keys(t),i=new Array(o.length),n=0,r=o.length;n<r;n++)s=o[n],i[n]=e(t[s],s,n);return a(i)||(i=[]),i._isVList=!0,i}function $e(t,e,i,n){var a,r=this.$scopedSlots[t];r?(i=i||{},n&&(i=M(M({},n),i)),a=r(i)||e):a=this.$slots[t]||e;var o=i&&i.slot;return o?this.$createElement("template",{slot:o},a):a}function Me(t){return Vt(this.$options,"filters",t,!0)||F}function Ce(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function Re(t,e,i,n,a){var r=B.keyCodes[e]||i;return a&&n&&!B.keyCodes[e]?Ce(a,n):r?Ce(r,t):n?P(n)!==e:void 0}function Le(t,e,i,n,a){if(i)if(l(i)){var r;Array.isArray(i)&&(i=C(i));var o=function(o){if("class"===o||"style"===o||y(o))r=t;else{var s=t.attrs&&t.attrs.type;r=n||B.mustUseProp(e,s,o)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var l=S(o),c=P(o);if(!(l in r)&&!(c in r)&&(r[o]=i[o],a)){var h=t.on||(t.on={});h["update:"+o]=function(t){i[o]=t}}};for(var s in i)o(s)}else;return t}function Fe(t,e){var i=this._staticTrees||(this._staticTrees=[]),n=i[t];return n&&!e?n:(n=i[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),Ee(n,"__static__"+t,!1),n)}function Ie(t,e,i){return Ee(t,"__once__"+e+(i?"_"+i:""),!0),t}function Ee(t,e,i){if(Array.isArray(t))for(var n=0;n<t.length;n++)t[n]&&"string"!==typeof t[n]&&je(t[n],e+"_"+n,i);else je(t,e,i)}function je(t,e,i){t.isStatic=!0,t.key=e,t.isOnce=i}function ze(t,e){if(e)if(h(e)){var i=t.on=t.on?M({},t.on):{};for(var n in e){var a=i[n],r=e[n];i[n]=a?[].concat(a,r):r}}else;return t}function Ne(t,e,i,n){e=e||{$stable:!i};for(var a=0;a<t.length;a++){var r=t[a];Array.isArray(r)?Ne(r,e,i):r&&(r.proxy&&(r.fn.proxy=!0),e[r.key]=r.fn)}return n&&(e.$key=n),e}function Be(t,e){for(var i=0;i<e.length;i+=2){var n=e[i];"string"===typeof n&&n&&(t[e[i]]=e[i+1])}return t}function We(t,e){return"string"===typeof t?e+t:t}function He(t){t._o=Ie,t._n=g,t._s=d,t._l=Oe,t._t=$e,t._q=I,t._i=E,t._m=Fe,t._f=Me,t._k=Re,t._b=Le,t._v=yt,t._e=vt,t._u=Ne,t._g=ze,t._d=Be,t._p=We}function Ve(t,e,n,a,o){var s,l=this,c=o.options;_(a,"_uid")?(s=Object.create(a),s._original=a):(s=a,a=a._original);var h=r(c._compiled),u=!h;this.data=t,this.props=e,this.children=n,this.parent=a,this.listeners=t.on||i,this.injections=Se(c.inject,a),this.slots=function(){return l.$slots||Pe(t.scopedSlots,l.$slots=Ae(n,a)),l.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return Pe(t.scopedSlots,this.slots())}}),h&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=Pe(t.scopedSlots,this.$slots)),c._scopeId?this._c=function(t,e,i,n){var r=ni(s,t,e,i,n,u);return r&&!Array.isArray(r)&&(r.fnScopeId=c._scopeId,r.fnContext=a),r}:this._c=function(t,e,i,n){return ni(s,t,e,i,n,u)}}function qe(t,e,n,r,o){var s=t.options,l={},c=s.props;if(a(c))for(var h in c)l[h]=qt(h,c,e||i);else a(n.attrs)&&Xe(l,n.attrs),a(n.props)&&Xe(l,n.props);var u=new Ve(n,l,o,r,t),p=s.render.call(null,u._c,u);if(p instanceof dt)return Ue(p,n,u.parent,s,u);if(Array.isArray(p)){for(var f=xe(p)||[],d=new Array(f.length),g=0;g<f.length;g++)d[g]=Ue(f[g],n,u.parent,s,u);return d}}function Ue(t,e,i,n,a){var r=xt(t);return r.fnContext=i,r.fnOptions=n,e.slot&&((r.data||(r.data={})).slot=e.slot),r}function Xe(t,e){for(var i in e)t[S(i)]=e[i]}He(Ve.prototype);var Ge={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var i=t;Ge.prepatch(i,i)}else{var n=t.componentInstance=Ye(t,wi);n.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var i=e.componentOptions,n=e.componentInstance=t.componentInstance;Pi(n,i.propsData,i.listeners,e,i.children)},insert:function(t){var e=t.context,i=t.componentInstance;i._isMounted||(i._isMounted=!0,$i(i,"mounted")),t.data.keepAlive&&(e._isMounted?Wi(i):Di(i,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Oi(e,!0):e.$destroy())}},Je=Object.keys(Ge);function Ke(t,e,i,o,s){if(!n(t)){var c=i.$options._base;if(l(t)&&(t=c.extend(t)),"function"===typeof t){var h;if(n(t.cid)&&(h=t,t=fi(h,c),void 0===t))return pi(h,e,i,o,s);e=e||{},pn(t),a(e.model)&&ti(t.options,e);var u=ge(e,t,s);if(r(t.options.functional))return qe(t,u,e,i,o);var p=e.on;if(e.on=e.nativeOn,r(t.options.abstract)){var f=e.slot;e={},f&&(e.slot=f)}Ze(e);var d=t.options.name||s,g=new dt("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,i,{Ctor:t,propsData:u,listeners:p,tag:s,children:o},h);return g}}}function Ye(t,e){var i={_isComponent:!0,_parentVnode:t,parent:e},n=t.data.inlineTemplate;return a(n)&&(i.render=n.render,i.staticRenderFns=n.staticRenderFns),new t.componentOptions.Ctor(i)}function Ze(t){for(var e=t.hook||(t.hook={}),i=0;i<Je.length;i++){var n=Je[i],a=e[n],r=Ge[n];a===r||a&&a._merged||(e[n]=a?Qe(r,a):r)}}function Qe(t,e){var i=function(i,n){t(i,n),e(i,n)};return i._merged=!0,i}function ti(t,e){var i=t.model&&t.model.prop||"value",n=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[i]=e.model.value;var r=e.on||(e.on={}),o=r[n],s=e.model.callback;a(o)?(Array.isArray(o)?-1===o.indexOf(s):o!==s)&&(r[n]=[s].concat(o)):r[n]=s}var ei=1,ii=2;function ni(t,e,i,n,a,o){return(Array.isArray(i)||s(i))&&(a=n,n=i,i=void 0),r(o)&&(a=ii),ai(t,e,i,n,a)}function ai(t,e,i,n,r){if(a(i)&&a(i.__ob__))return vt();if(a(i)&&a(i.is)&&(e=i.is),!e)return vt();var o,s,l;(Array.isArray(n)&&"function"===typeof n[0]&&(i=i||{},i.scopedSlots={default:n[0]},n.length=0),r===ii?n=xe(n):r===ei&&(n=ye(n)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||B.getTagNamespace(e),o=B.isReservedTag(e)?new dt(B.parsePlatformTagName(e),i,n,void 0,void 0,t):i&&i.pre||!a(l=Vt(t.$options,"components",e))?new dt(e,i,n,void 0,void 0,t):Ke(l,i,t,n,e)):o=Ke(e,i,t,n);return Array.isArray(o)?o:a(o)?(a(s)&&ri(o,s),a(i)&&oi(i),o):vt()}function ri(t,e,i){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,i=!0),a(t.children))for(var o=0,s=t.children.length;o<s;o++){var l=t.children[o];a(l.tag)&&(n(l.ns)||r(i)&&"svg"!==l.tag)&&ri(l,e,i)}}function oi(t){l(t.style)&&he(t.style),l(t.class)&&he(t.class)}function si(t){t._vnode=null,t._staticTrees=null;var e=t.$options,n=t.$vnode=e._parentVnode,a=n&&n.context;t.$slots=Ae(e._renderChildren,a),t.$scopedSlots=i,t._c=function(e,i,n,a){return ni(t,e,i,n,a,!1)},t.$createElement=function(e,i,n,a){return ni(t,e,i,n,a,!0)};var r=n&&n.data;Ot(t,"$attrs",r&&r.attrs||i,null,!0),Ot(t,"$listeners",e._parentListeners||i,null,!0)}var li,ci=null;function hi(t){He(t.prototype),t.prototype.$nextTick=function(t){return le(t,this)},t.prototype._render=function(){var t,e=this,i=e.$options,n=i.render,a=i._parentVnode;a&&(e.$scopedSlots=Pe(a.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=a;try{ci=e,t=n.call(e._renderProxy,e.$createElement)}catch(ea){Kt(ea,e,"render"),t=e._vnode}finally{ci=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof dt||(t=vt()),t.parent=a,t}}function ui(t,e){return(t.__esModule||lt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),l(t)?e.extend(t):t}function pi(t,e,i,n,a){var r=vt();return r.asyncFactory=t,r.asyncMeta={data:e,context:i,children:n,tag:a},r}function fi(t,e){if(r(t.error)&&a(t.errorComp))return t.errorComp;if(a(t.resolved))return t.resolved;var i=ci;if(i&&a(t.owners)&&-1===t.owners.indexOf(i)&&t.owners.push(i),r(t.loading)&&a(t.loadingComp))return t.loadingComp;if(i&&!a(t.owners)){var o=t.owners=[i],s=!0,c=null,h=null;i.$on("hook:destroyed",function(){return x(o,i)});var u=function(t){for(var e=0,i=o.length;e<i;e++)o[e].$forceUpdate();t&&(o.length=0,null!==c&&(clearTimeout(c),c=null),null!==h&&(clearTimeout(h),h=null))},p=j(function(i){t.resolved=ui(i,e),s?o.length=0:u(!0)}),d=j(function(e){a(t.errorComp)&&(t.error=!0,u(!0))}),g=t(p,d);return l(g)&&(f(g)?n(t.resolved)&&g.then(p,d):f(g.component)&&(g.component.then(p,d),a(g.error)&&(t.errorComp=ui(g.error,e)),a(g.loading)&&(t.loadingComp=ui(g.loading,e),0===g.delay?t.loading=!0:c=setTimeout(function(){c=null,n(t.resolved)&&n(t.error)&&(t.loading=!0,u(!1))},g.delay||200)),a(g.timeout)&&(h=setTimeout(function(){h=null,n(t.resolved)&&d(null)},g.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function di(t){return t.isComment&&t.asyncFactory}function gi(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var i=t[e];if(a(i)&&(a(i.componentOptions)||di(i)))return i}}function vi(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&_i(t,e)}function yi(t,e){li.$on(t,e)}function xi(t,e){li.$off(t,e)}function mi(t,e){var i=li;return function n(){var a=e.apply(null,arguments);null!==a&&i.$off(t,n)}}function _i(t,e,i){li=t,de(e,i||{},yi,xi,mi,t),li=void 0}function bi(t){var e=/^hook:/;t.prototype.$on=function(t,i){var n=this;if(Array.isArray(t))for(var a=0,r=t.length;a<r;a++)n.$on(t[a],i);else(n._events[t]||(n._events[t]=[])).push(i),e.test(t)&&(n._hasHookEvent=!0);return n},t.prototype.$once=function(t,e){var i=this;function n(){i.$off(t,n),e.apply(i,arguments)}return n.fn=e,i.$on(t,n),i},t.prototype.$off=function(t,e){var i=this;if(!arguments.length)return i._events=Object.create(null),i;if(Array.isArray(t)){for(var n=0,a=t.length;n<a;n++)i.$off(t[n],e);return i}var r,o=i._events[t];if(!o)return i;if(!e)return i._events[t]=null,i;var s=o.length;while(s--)if(r=o[s],r===e||r.fn===e){o.splice(s,1);break}return i},t.prototype.$emit=function(t){var e=this,i=e._events[t];if(i){i=i.length>1?$(i):i;for(var n=$(arguments,1),a='event handler for "'+t+'"',r=0,o=i.length;r<o;r++)Yt(i[r],e,n,e,a)}return e}}var wi=null;function Si(t){var e=wi;return wi=t,function(){wi=e}}function Ai(t){var e=t.$options,i=e.parent;if(i&&!e.abstract){while(i.$options.abstract&&i.$parent)i=i.$parent;i.$children.push(t)}t.$parent=i,t.$root=i?i.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function Ti(t){t.prototype._update=function(t,e){var i=this,n=i.$el,a=i._vnode,r=Si(i);i._vnode=t,i.$el=a?i.__patch__(a,t):i.__patch__(i.$el,t,e,!1),r(),n&&(n.__vue__=null),i.$el&&(i.$el.__vue__=i),i.$vnode&&i.$parent&&i.$vnode===i.$parent._vnode&&(i.$parent.$el=i.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){$i(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||x(e.$children,t),t._watcher&&t._watcher.teardown();var i=t._watchers.length;while(i--)t._watchers[i].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),$i(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Pi(t,e,n,a,r){var o=a.data.scopedSlots,s=t.$scopedSlots,l=!!(o&&!o.$stable||s!==i&&!s.$stable||o&&t.$scopedSlots.$key!==o.$key),c=!!(r||t.$options._renderChildren||l);if(t.$options._parentVnode=a,t.$vnode=a,t._vnode&&(t._vnode.parent=a),t.$options._renderChildren=r,t.$attrs=a.data.attrs||i,t.$listeners=n||i,e&&t.$options.props){At(!1);for(var h=t._props,u=t.$options._propKeys||[],p=0;p<u.length;p++){var f=u[p],d=t.$options.props;h[f]=qt(f,d,e,t)}At(!0),t.$options.propsData=e}n=n||i;var g=t.$options._parentListeners;t.$options._parentListeners=n,_i(t,n,g),c&&(t.$slots=Ae(r,a.context),t.$forceUpdate())}function ki(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function Di(t,e){if(e){if(t._directInactive=!1,ki(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var i=0;i<t.$children.length;i++)Di(t.$children[i]);$i(t,"activated")}}function Oi(t,e){if((!e||(t._directInactive=!0,!ki(t)))&&!t._inactive){t._inactive=!0;for(var i=0;i<t.$children.length;i++)Oi(t.$children[i]);$i(t,"deactivated")}}function $i(t,e){pt();var i=t.$options[e],n=e+" hook";if(i)for(var a=0,r=i.length;a<r;a++)Yt(i[a],t,null,t,n);t._hasHookEvent&&t.$emit("hook:"+e),ft()}var Mi=[],Ci=[],Ri={},Li=!1,Fi=!1,Ii=0;function Ei(){Ii=Mi.length=Ci.length=0,Ri={},Li=Fi=!1}var ji=Date.now;if(J&&!Q){var zi=window.performance;zi&&"function"===typeof zi.now&&ji()>document.createEvent("Event").timeStamp&&(ji=function(){return zi.now()})}function Ni(){var t,e;for(ji(),Fi=!0,Mi.sort(function(t,e){return t.id-e.id}),Ii=0;Ii<Mi.length;Ii++)t=Mi[Ii],t.before&&t.before(),e=t.id,Ri[e]=null,t.run();var i=Ci.slice(),n=Mi.slice();Ei(),Hi(i),Bi(n),rt&&B.devtools&&rt.emit("flush")}function Bi(t){var e=t.length;while(e--){var i=t[e],n=i.vm;n._watcher===i&&n._isMounted&&!n._isDestroyed&&$i(n,"updated")}}function Wi(t){t._inactive=!1,Ci.push(t)}function Hi(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Di(t[e],!0)}function Vi(t){var e=t.id;if(null==Ri[e]){if(Ri[e]=!0,Fi){var i=Mi.length-1;while(i>Ii&&Mi[i].id>t.id)i--;Mi.splice(i+1,0,t)}else Mi.push(t);Li||(Li=!0,le(Ni))}}var qi=0,Ui=function(t,e,i,n,a){this.vm=t,a&&(t._watcher=this),t._watchers.push(this),n?(this.deep=!!n.deep,this.user=!!n.user,this.lazy=!!n.lazy,this.sync=!!n.sync,this.before=n.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=i,this.id=++qi,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=U(e),this.getter||(this.getter=R)),this.value=this.lazy?void 0:this.get()};Ui.prototype.get=function(){var t;pt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(ea){if(!this.user)throw ea;Kt(ea,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&he(t),ft(),this.cleanupDeps()}return t},Ui.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Ui.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var i=this.depIds;this.depIds=this.newDepIds,this.newDepIds=i,this.newDepIds.clear(),i=this.deps,this.deps=this.newDeps,this.newDeps=i,this.newDeps.length=0},Ui.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Vi(this)},Ui.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||l(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(ea){Kt(ea,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Ui.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Ui.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Ui.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||x(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Xi={enumerable:!0,configurable:!0,get:R,set:R};function Gi(t,e,i){Xi.get=function(){return this[e][i]},Xi.set=function(t){this[e][i]=t},Object.defineProperty(t,i,Xi)}function Ji(t){t._watchers=[];var e=t.$options;e.props&&Ki(t,e.props),e.methods&&rn(t,e.methods),e.data?Yi(t):Dt(t._data={},!0),e.computed&&tn(t,e.computed),e.watch&&e.watch!==it&&on(t,e.watch)}function Ki(t,e){var i=t.$options.propsData||{},n=t._props={},a=t.$options._propKeys=[],r=!t.$parent;r||At(!1);var o=function(r){a.push(r);var o=qt(r,e,i,t);Ot(n,r,o),r in t||Gi(t,"_props",r)};for(var s in e)o(s);At(!0)}function Yi(t){var e=t.$options.data;e=t._data="function"===typeof e?Zi(e,t):e||{},h(e)||(e={});var i=Object.keys(e),n=t.$options.props,a=(t.$options.methods,i.length);while(a--){var r=i[a];0,n&&_(n,r)||H(r)||Gi(t,"_data",r)}Dt(e,!0)}function Zi(t,e){pt();try{return t.call(e,e)}catch(ea){return Kt(ea,e,"data()"),{}}finally{ft()}}var Qi={lazy:!0};function tn(t,e){var i=t._computedWatchers=Object.create(null),n=at();for(var a in e){var r=e[a],o="function"===typeof r?r:r.get;0,n||(i[a]=new Ui(t,o||R,R,Qi)),a in t||en(t,a,r)}}function en(t,e,i){var n=!at();"function"===typeof i?(Xi.get=n?nn(e):an(i),Xi.set=R):(Xi.get=i.get?n&&!1!==i.cache?nn(e):an(i.get):R,Xi.set=i.set||R),Object.defineProperty(t,e,Xi)}function nn(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ut.SharedObject.target&&e.depend(),e.value}}function an(t){return function(){return t.call(this,this)}}function rn(t,e){t.$options.props;for(var i in e)t[i]="function"!==typeof e[i]?R:O(e[i],t)}function on(t,e){for(var i in e){var n=e[i];if(Array.isArray(n))for(var a=0;a<n.length;a++)sn(t,i,n[a]);else sn(t,i,n)}}function sn(t,e,i,n){return h(i)&&(n=i,i=i.handler),"string"===typeof i&&(i=t[i]),t.$watch(e,i,n)}function ln(t){var e={get:function(){return this._data}},i={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",i),t.prototype.$set=$t,t.prototype.$delete=Mt,t.prototype.$watch=function(t,e,i){var n=this;if(h(e))return sn(n,t,e,i);i=i||{},i.user=!0;var a=new Ui(n,t,e,i);if(i.immediate)try{e.call(n,a.value)}catch(r){Kt(r,n,'callback for immediate watcher "'+a.expression+'"')}return function(){a.teardown()}}}var cn=0;function hn(t){t.prototype._init=function(t){var e=this;e._uid=cn++,e._isVue=!0,t&&t._isComponent?un(e,t):e.$options=Ht(pn(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Ai(e),vi(e),si(e),$i(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&we(e),Ji(e),"mp-toutiao"!==e.mpHost&&be(e),"mp-toutiao"!==e.mpHost&&$i(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function un(t,e){var i=t.$options=Object.create(t.constructor.options),n=e._parentVnode;i.parent=e.parent,i._parentVnode=n;var a=n.componentOptions;i.propsData=a.propsData,i._parentListeners=a.listeners,i._renderChildren=a.children,i._componentTag=a.tag,e.render&&(i.render=e.render,i.staticRenderFns=e.staticRenderFns)}function pn(t){var e=t.options;if(t.super){var i=pn(t.super),n=t.superOptions;if(i!==n){t.superOptions=i;var a=fn(t);a&&M(t.extendOptions,a),e=t.options=Ht(i,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function fn(t){var e,i=t.options,n=t.sealedOptions;for(var a in i)i[a]!==n[a]&&(e||(e={}),e[a]=i[a]);return e}function dn(t){this._init(t)}function gn(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var i=$(arguments,1);return i.unshift(this),"function"===typeof t.install?t.install.apply(t,i):"function"===typeof t&&t.apply(null,i),e.push(t),this}}function vn(t){t.mixin=function(t){return this.options=Ht(this.options,t),this}}function yn(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var i=this,n=i.cid,a=t._Ctor||(t._Ctor={});if(a[n])return a[n];var r=t.name||i.options.name;var o=function(t){this._init(t)};return o.prototype=Object.create(i.prototype),o.prototype.constructor=o,o.cid=e++,o.options=Ht(i.options,t),o["super"]=i,o.options.props&&xn(o),o.options.computed&&mn(o),o.extend=i.extend,o.mixin=i.mixin,o.use=i.use,z.forEach(function(t){o[t]=i[t]}),r&&(o.options.components[r]=o),o.superOptions=i.options,o.extendOptions=t,o.sealedOptions=M({},o.options),a[n]=o,o}}function xn(t){var e=t.options.props;for(var i in e)Gi(t.prototype,"_props",i)}function mn(t){var e=t.options.computed;for(var i in e)en(t.prototype,i,e[i])}function _n(t){z.forEach(function(e){t[e]=function(t,i){return i?("component"===e&&h(i)&&(i.name=i.name||t,i=this.options._base.extend(i)),"directive"===e&&"function"===typeof i&&(i={bind:i,update:i}),this.options[e+"s"][t]=i,i):this.options[e+"s"][t]}})}function bn(t){return t&&(t.Ctor.options.name||t.tag)}function wn(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!u(t)&&t.test(e)}function Sn(t,e){var i=t.cache,n=t.keys,a=t._vnode;for(var r in i){var o=i[r];if(o){var s=bn(o.componentOptions);s&&!e(s)&&An(i,r,n,a)}}}function An(t,e,i,n){var a=t[e];!a||n&&a.tag===n.tag||a.componentInstance.$destroy(),t[e]=null,x(i,e)}hn(dn),ln(dn),bi(dn),Ti(dn),hi(dn);var Tn=[String,RegExp,Array],Pn={name:"keep-alive",abstract:!0,props:{include:Tn,exclude:Tn,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)An(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){Sn(t,function(t){return wn(e,t)})}),this.$watch("exclude",function(e){Sn(t,function(t){return!wn(e,t)})})},render:function(){var t=this.$slots.default,e=gi(t),i=e&&e.componentOptions;if(i){var n=bn(i),a=this,r=a.include,o=a.exclude;if(r&&(!n||!wn(r,n))||o&&n&&wn(o,n))return e;var s=this,l=s.cache,c=s.keys,h=null==e.key?i.Ctor.cid+(i.tag?"::"+i.tag:""):e.key;l[h]?(e.componentInstance=l[h].componentInstance,x(c,h),c.push(h)):(l[h]=e,c.push(h),this.max&&c.length>parseInt(this.max)&&An(l,c[0],c,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},kn={KeepAlive:Pn};function Dn(t){var e={get:function(){return B}};Object.defineProperty(t,"config",e),t.util={warn:ct,extend:M,mergeOptions:Ht,defineReactive:Ot},t.set=$t,t.delete=Mt,t.nextTick=le,t.observable=function(t){return Dt(t),t},t.options=Object.create(null),z.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,M(t.options.components,kn),gn(t),vn(t),yn(t),_n(t)}Dn(dn),Object.defineProperty(dn.prototype,"$isServer",{get:at}),Object.defineProperty(dn.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(dn,"FunctionalRenderContext",{value:Ve}),dn.version="2.6.10";var On="[object Array]",$n="[object Object]";function Mn(t,e){var i={};return Cn(t,e),Rn(t,e,"",i),i}function Cn(t,e){if(t!==e){var i=Fn(t),n=Fn(e);if(i==$n&&n==$n){if(Object.keys(t).length>=Object.keys(e).length)for(var a in e){var r=t[a];void 0===r?t[a]=null:Cn(r,e[a])}}else i==On&&n==On&&t.length>=e.length&&e.forEach(function(e,i){Cn(t[i],e)})}}function Rn(t,e,i,n){if(t!==e){var a=Fn(t),r=Fn(e);if(a==$n)if(r!=$n||Object.keys(t).length<Object.keys(e).length)Ln(n,i,t);else{var o=function(a){var r=t[a],o=e[a],s=Fn(r),l=Fn(o);if(s!=On&&s!=$n)r!=e[a]&&Ln(n,(""==i?"":i+".")+a,r);else if(s==On)l!=On?Ln(n,(""==i?"":i+".")+a,r):r.length<o.length?Ln(n,(""==i?"":i+".")+a,r):r.forEach(function(t,e){Rn(t,o[e],(""==i?"":i+".")+a+"["+e+"]",n)});else if(s==$n)if(l!=$n||Object.keys(r).length<Object.keys(o).length)Ln(n,(""==i?"":i+".")+a,r);else for(var c in r)Rn(r[c],o[c],(""==i?"":i+".")+a+"."+c,n)};for(var s in t)o(s)}else a==On?r!=On?Ln(n,i,t):t.length<e.length?Ln(n,i,t):t.forEach(function(t,a){Rn(t,e[a],i+"["+a+"]",n)}):Ln(n,i,t)}}function Ln(t,e,i){t[e]=i}function Fn(t){return Object.prototype.toString.call(t)}function In(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var i=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var n=0;n<i.length;n++)i[n]()}}function En(t){return Mi.find(function(e){return t._watcher===e})}function jn(t,e){if(!t.__next_tick_pending&&!En(t)){if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var i=t.$scope;console.log("["+ +new Date+"]["+(i.is||i.route)+"]["+t._uid+"]:nextVueTick")}return le(e,t)}if(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextMPTick")}var a;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(ea){Kt(ea,t,"nextTick")}else a&&a(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){a=t})}function zn(t){var e=Object.create(null),i=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return i.reduce(function(e,i){return e[i]=t[i],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var Nn=function(t,e){var i=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var n=this.$scope,a=Object.create(null);try{a=zn(this)}catch(s){console.error(s)}a.__webviewId__=n.data.__webviewId__;var r=Object.create(null);Object.keys(a).forEach(function(t){r[t]=n.data[t]});var o=Mn(a,r);Object.keys(o).length?(Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+this._uid+"]差量更新",JSON.stringify(o)),this.__next_tick_pending=!0,n.setData(o,function(){i.__next_tick_pending=!1,In(i)})):In(this)}};function Bn(){}function Wn(t,e,i){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Bn),t.$options.render||(t.$options.render=Bn),"mp-toutiao"!==t.mpHost&&$i(t,"beforeMount");var n=function(){t._update(t._render(),i)};return new Ui(t,n,R,{before:function(){t._isMounted&&!t._isDestroyed&&$i(t,"beforeUpdate")}},!0),i=!1,t}function Hn(t,e){return a(t)||a(e)?Vn(t,qn(e)):""}function Vn(t,e){return t?e?t+" "+e:t:e||""}function qn(t){return Array.isArray(t)?Un(t):l(t)?Xn(t):"string"===typeof t?t:""}function Un(t){for(var e,i="",n=0,r=t.length;n<r;n++)a(e=qn(t[n]))&&""!==e&&(i&&(i+=" "),i+=e);return i}function Xn(t){var e="";for(var i in t)t[i]&&(e&&(e+=" "),e+=i);return e}var Gn=b(function(t){var e={},i=/;(?![^(]*\))/g,n=/:(.+)/;return t.split(i).forEach(function(t){if(t){var i=t.split(n);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e});function Jn(t){return Array.isArray(t)?C(t):"string"===typeof t?Gn(t):t}var Kn=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Yn(t,e){var i=e.split("."),n=i[0];return 0===n.indexOf("__$n")&&(n=parseInt(n.replace("__$n",""))),1===i.length?t[n]:Yn(t[n],i.slice(1).join("."))}function Zn(t){t.config.errorHandler=function(t){console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:$(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return jn(this,t)},Kn.forEach(function(e){t.prototype[e]=function(t){if(this.$scope)return this.$scope[e](t)}}),t.prototype.__init_provide=be,t.prototype.__init_injections=we,t.prototype.__call_hook=function(t,e){var i=this;pt();var n,a=i.$options[t],r=t+" hook";if(a)for(var o=0,s=a.length;o<s;o++)n=Yt(a[o],i,e?[e]:null,i,r);return i._hasHookEvent&&i.$emit("hook:"+t),ft(),n},t.prototype.__set_model=function(t,e,i,n){Array.isArray(n)&&(-1!==n.indexOf("trim")&&(i=i.trim()),-1!==n.indexOf("number")&&(i=this._n(i))),t||(t=this),t[e]=i},t.prototype.__set_sync=function(t,e,i){t||(t=this),t[e]=i},t.prototype.__get_orig=function(t){return h(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Yn(e||this,t)},t.prototype.__get_class=function(t,e){return Hn(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var i=Jn(t),n=e?M(e,i):i;return Object.keys(n).map(function(t){return P(t)+":"+n[t]}).join(";")},t.prototype.__map=function(t,e){var i,n,a,r,o;if(Array.isArray(t)){for(i=new Array(t.length),n=0,a=t.length;n<a;n++)i[n]=e(t[n],n);return i}if(l(t)){for(r=Object.keys(t),i=Object.create(null),n=0,a=r.length;n<a;n++)o=r[n],i[o]=e(t[o],o,n);return i}return[]}}var Qn=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function ta(t){var e=t.extend;t.extend=function(t){t=t||{};var i=t.methods;return i&&Object.keys(i).forEach(function(e){-1!==Qn.indexOf(e)&&(t[e]=i[e],delete i[e])}),e.call(this,t)};var i=t.config.optionMergeStrategies,n=i.created;Qn.forEach(function(t){i[t]=n}),t.prototype.__lifecycle_hooks__=Qn}dn.prototype.__patch__=Nn,dn.prototype.$mount=function(t,e){return Wn(this,t,e)},ta(dn),Zn(dn),e["default"]=dn}.call(this,i("c8ba"))},"6e42":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=de,e.createComponent=Ae,e.createPage=Se,e.default=void 0;var n=a(i("66fd"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,e){return l(t)||s(t,e)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var i=[],n=!0,a=!1,r=void 0;try{for(var o,s=t[Symbol.iterator]();!(n=(o=s.next()).done);n=!0)if(i.push(o.value),e&&i.length===e)break}catch(l){a=!0,r=l}finally{try{n||null==s["return"]||s["return"]()}finally{if(a)throw r}}return i}function l(t){if(Array.isArray(t))return t}function c(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function h(t){return f(t)||p(t)||u()}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function f(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}var d=Object.prototype.toString,g=Object.prototype.hasOwnProperty;function v(t){return"function"===typeof t}function y(t){return"string"===typeof t}function x(t){return"[object Object]"===d.call(t)}function m(t,e){return g.call(t,e)}function _(){}function b(t){var e=Object.create(null);return function(i){var n=e[i];return n||(e[i]=t(i))}}var w=/-(\w)/g,S=b(function(t){return t.replace(w,function(t,e){return e?e.toUpperCase():""})}),A=["invoke","success","fail","complete","returnValue"],T={},P={};function k(t,e){var i=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return i?D(i):i}function D(t){for(var e=[],i=0;i<t.length;i++)-1===e.indexOf(t[i])&&e.push(t[i]);return e}function O(t,e){var i=t.indexOf(e);-1!==i&&t.splice(i,1)}function $(t,e){Object.keys(e).forEach(function(i){-1!==A.indexOf(i)&&v(e[i])&&(t[i]=k(t[i],e[i]))})}function M(t,e){t&&e&&Object.keys(e).forEach(function(i){-1!==A.indexOf(i)&&v(e[i])&&O(t[i],e[i])})}function C(t,e){"string"===typeof t&&x(e)?$(P[t]||(P[t]={}),e):x(t)&&$(T,t)}function R(t,e){"string"===typeof t?x(e)?M(P[t],e):delete P[t]:x(t)&&M(T,t)}function L(t){return function(e){return t(e)||e}}function F(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function I(t,e){for(var i=!1,n=0;n<t.length;n++){var a=t[n];if(i)i=Promise.then(L(a));else{var r=a(e);if(F(r)&&(i=Promise.resolve(r)),!1===r)return{then:function(){}}}}return i||{then:function(t){return t(e)}}}function E(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(i){if(Array.isArray(t[i])){var n=e[i];e[i]=function(e){I(t[i],e).then(function(t){return v(n)&&n(t)||t})}}}),e}function j(t,e){var i=[];Array.isArray(T.returnValue)&&i.push.apply(i,h(T.returnValue));var n=P[t];return n&&Array.isArray(n.returnValue)&&i.push.apply(i,h(n.returnValue)),i.forEach(function(t){e=t(e)||e}),e}function z(t){var e=Object.create(null);Object.keys(T).forEach(function(t){"returnValue"!==t&&(e[t]=T[t].slice())});var i=P[t];return i&&Object.keys(i).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(i[t]))}),e}function N(t,e,i){for(var n=arguments.length,a=new Array(n>3?n-3:0),r=3;r<n;r++)a[r-3]=arguments[r];var o=z(t);if(o&&Object.keys(o).length){if(Array.isArray(o.invoke)){var s=I(o.invoke,i);return s.then(function(t){return e.apply(void 0,[E(o,t)].concat(a))})}return e.apply(void 0,[E(o,i)].concat(a))}return e.apply(void 0,[i].concat(a))}var B={returnValue:function(t){return F(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},W=/^\$|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,H=/^create|Manager$/,V=/^on/;function q(t){return H.test(t)}function U(t){return W.test(t)}function X(t){return V.test(t)&&"onPush"!==t}function G(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function J(t){return!(q(t)||U(t)||X(t))}function K(t,e){return J(t)?function(){for(var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];return v(i.success)||v(i.fail)||v(i.complete)?j(t,N.apply(void 0,[t,e,i].concat(a))):j(t,G(new Promise(function(n,r){N.apply(void 0,[t,e,Object.assign({},i,{success:n,fail:r})].concat(a)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(i){return e.resolve(t()).then(function(){return i})},function(i){return e.resolve(t()).then(function(){throw i})})})})))}:e}var Y=1e-4,Z=750,Q=!1,tt=0,et=0;function it(){var t=wx.getSystemInfoSync(),e=t.platform,i=t.pixelRatio,n=t.windowWidth;tt=n,et=i,Q="ios"===e}function nt(t,e){if(0===tt&&it(),t=Number(t),0===t)return 0;var i=t/Z*(e||tt);return i<0&&(i=-i),i=Math.floor(i+Y),0===i?1!==et&&Q?.5:1:t<0?-i:i}var at={promiseInterceptor:B},rt=Object.freeze({upx2px:nt,interceptors:at,addInterceptor:C,removeInterceptor:R}),ot={},st=[],lt=[],ct=["success","fail","cancel","complete"];function ht(t,e,i){return function(n){return e(pt(t,n,i))}}function ut(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(x(e)){var r=!0===a?e:{};for(var o in v(i)&&(i=i(e,r)||{}),e)if(m(i,o)){var s=i[o];v(s)&&(s=s(e[o],e,r)),s?y(s)?r[s]=e[o]:x(s)&&(r[s.name?s.name:o]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(o))}else-1!==ct.indexOf(o)?r[o]=ht(t,e[o],n):a||(r[o]=e[o]);return r}return v(e)&&(e=ht(t,e,n)),e}function pt(t,e,i){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return v(ot.returnValue)&&(e=ot.returnValue(t,e)),ut(t,e,i,{},n)}function ft(t,e){if(m(ot,t)){var i=ot[t];return i?function(e,n){var a=i;v(i)&&(a=i(e)),e=ut(t,e,a.args,a.returnValue);var r=[e];"undefined"!==typeof n&&r.push(n);var o=wx[a.name||t].apply(wx,r);return U(t)?pt(t,o,a.returnValue,q(t)):o}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var dt=Object.create(null),gt=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function vt(t){return function(e){var i=e.fail,n=e.complete,a={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};v(i)&&i(a),v(n)&&n(a)}}gt.forEach(function(t){dt[t]=vt(t)});var yt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new n.default),t};var t}();function xt(t,e,i){return t[e].apply(t,i)}function mt(){return xt(yt(),"$on",Array.prototype.slice.call(arguments))}function _t(){return xt(yt(),"$off",Array.prototype.slice.call(arguments))}function bt(){return xt(yt(),"$once",Array.prototype.slice.call(arguments))}function wt(){return xt(yt(),"$emit",Array.prototype.slice.call(arguments))}var St=Object.freeze({$on:mt,$off:_t,$once:bt,$emit:wt});function At(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}function Tt(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var i=t.__uniapp_mask,n="0"===t.__uniapp_mask_id?{setStyle:function(t){var e=t.mask;At("uni-tabview").setMask({color:e})}}:plus.webview.getWebviewById(t.__uniapp_mask_id),a=t.show,r=t.hide,o=t.close,s=function(){n.setStyle({mask:i})},l=function(){n.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return a.apply(t,i)},t.hide=function(){l();for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return r.apply(t,i)},t.close=function(){l(),e=[];for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return o.apply(t,n)}}}function Pt(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&Tt(e),e}var kt=Object.freeze({getSubNVueById:Pt,requireNativePlugin:At}),Dt=Page,Ot=Component,$t=/:/g,Mt=b(function(t){return S(t.replace($t,"-"))});function Ct(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(i){for(var n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];return e.apply(t,[Mt(i)].concat(a))}}}function Rt(t,e){var i=e[t];e[t]=i?function(){Ct(this);for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return i.apply(this,e)}:function(){Ct(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Rt("onLoad",t),Dt(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Rt("created",t),Ot(t)};var Lt=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Ft(t,e){var i=t.$mp[t.mpType];e.forEach(function(e){m(i,e)&&(t[e]=i[e])})}function It(t,e){if(!e)return!0;if(n.default.options&&Array.isArray(n.default.options[t]))return!0;if(e=e.default||e,v(e))return!!v(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(v(e[t]))return!0;var i=e.mixins;return Array.isArray(i)?!!i.find(function(e){return It(t,e)}):void 0}function Et(t,e,i){e.forEach(function(e){It(e,i)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function jt(t,e){var i;return e=e.default||e,v(e)?(i=e,e=i.extendOptions):i=t.extend(e),[i,e]}function zt(t,e){if(Array.isArray(e)&&e.length){var i=Object.create(null);e.forEach(function(t){i[t]=!0}),t.$scopedSlots=t.$slots=i}}function Nt(t,e){t=(t||"").split(",");var i=t.length;1===i?e._$vueId=t[0]:2===i&&(e._$vueId=t[0],e._$vuePid=t[1])}function Bt(t,e){var i=t.data||{},n=t.methods||{};if("function"===typeof i)try{i=i.call(e)}catch(a){Object({NODE_ENV:"production",VUE_APP_PLATFORM:"app-plus",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",i)}else try{i=JSON.parse(JSON.stringify(i))}catch(a){}return x(i)||(i={}),Object.keys(n).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||m(i,t)||(i[t]=n[t])}),i}var Wt=[String,Number,Boolean,Object,Array,null];function Ht(t){return function(e,i){this.$vm&&(this.$vm[t]=e)}}function Vt(t,e){var i=t["behaviors"],n=t["extends"],a=t["mixins"],r=t["props"];r||(t["props"]=r=[]);var o=[];return Array.isArray(i)&&i.forEach(function(t){o.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(r)?(r.push("name"),r.push("value")):(r["name"]={type:String,default:""},r["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),x(n)&&n.props&&o.push(e({properties:Ut(n.props,!0)})),Array.isArray(a)&&a.forEach(function(t){x(t)&&t.props&&o.push(e({properties:Ut(t.props,!0)}))}),o}function qt(t,e,i,n){return Array.isArray(e)&&1===e.length?e[0]:e}function Ut(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(i.vueId={type:String,value:""},i.vueSlots={type:null,value:[],observer:function(t,e){var i=Object.create(null);t.forEach(function(t){i[t]=!0}),this.setData({$slots:i})}}),Array.isArray(t)?t.forEach(function(t){i[t]={type:null,observer:Ht(t)}}):x(t)&&Object.keys(t).forEach(function(e){var n=t[e];if(x(n)){var a=n["default"];v(a)&&(a=a()),n.type=qt(e,n.type),i[e]={type:-1!==Wt.indexOf(n.type)?n.type:null,value:a,observer:Ht(e)}}else{var r=qt(e,n);i[e]={type:-1!==Wt.indexOf(r)?r:null,observer:Ht(e)}}}),i}function Xt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=_,t.preventDefault=_,t.target=t.target||{},m(t,"detail")||(t.detail={}),x(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Gt(t,e){var i=t;return e.forEach(function(e){var n=e[0],a=e[2];if(n||"undefined"!==typeof a){var r=e[1],o=e[3],s=n?t.__get_value(n,i):i;Number.isInteger(s)?i=a:r?Array.isArray(s)?i=s.find(function(e){return t.__get_value(r,e)===a}):x(s)?i=Object.keys(s).find(function(e){return t.__get_value(r,s[e])===a}):console.error("v-for 暂不支持循环数据：",s):i=s[a],o&&(i=t.__get_value(o,i))}}),i}function Jt(t,e,i){var n={};return Array.isArray(e)&&e.length&&e.forEach(function(e,a){"string"===typeof e?e?"$event"===e?n["$"+a]=i:0===e.indexOf("$event.")?n["$"+a]=t.__get_value(e.replace("$event.",""),i):n["$"+a]=t.__get_value(e):n["$"+a]=t:n["$"+a]=Gt(t,e)}),n}function Kt(t){for(var e={},i=1;i<t.length;i++){var n=t[i];e[n[0]]=n[1]}return e}function Yt(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],a=arguments.length>4?arguments[4]:void 0,r=arguments.length>5?arguments[5]:void 0,o=!1;if(a&&(o=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!i.length))return o?[e]:e.detail.__args__||e.detail;var s=Jt(t,n,e),l=[];return i.forEach(function(t){"$event"===t?"__set_model"!==r||a?a&&!o?l.push(e.detail.__args__[0]):l.push(e):l.push(e.target.value):Array.isArray(t)&&"o"===t[0]?l.push(Kt(t)):"string"===typeof t&&m(s,t)?l.push(s[t]):l.push(t)}),l}var Zt="~",Qt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=Xt(t);var i=(t.currentTarget||t.target).dataset;if(!i)return console.warn("事件信息不存在");var n=i.eventOpts||i["event-opts"];if(!n)return console.warn("事件信息不存在");var a=t.type,r=[];return n.forEach(function(i){var n=i[0],o=i[1],s=n.charAt(0)===Qt;n=s?n.slice(1):n;var l=n.charAt(0)===Zt;n=l?n.slice(1):n,o&&te(a,n)&&o.forEach(function(i){var n=i[0];if(n){var a=e.$vm;if(a.$options.generic&&a.$parent&&a.$parent.$parent&&(a=a.$parent.$parent),"$emit"===n)return void a.$emit.apply(a,Yt(e.$vm,t,i[1],i[2],s,n));var o=a[n];if(!v(o))throw new Error(" _vm.".concat(n," is not a function"));if(l){if(o.once)return;o.once=!0}r.push(o.apply(a,Yt(e.$vm,t,i[1],i[2],s,n)))}})}),"input"===a&&1===r.length&&"undefined"!==typeof r[0]?r[0]:void 0}var ie=["onShow","onHide","onError","onPageNotFound"];function ne(t,e){var i=e.mocks,a=e.initRefs;t.$options.store&&(n.default.prototype.$store=t.$options.store),n.default.prototype.mpHost="app-plus",n.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=c({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(a(this),Ft(this,i)))}});var r={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};r.globalData=t.$options.globalData||{};var o=t.$options.methods;return o&&Object.keys(o).forEach(function(t){r[t]=o[t]}),Et(r,ie),r}var ae=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function re(t,e){var i=t.$children,n=i.find(function(t){return t.$scope._$vueId===e});if(n)return n;for(var a=i.length-1;a>=0;a--)if(n=re(i[a],e),n)return n}function oe(t){return Behavior(t)}function se(){return!!this.route}function le(t){this.triggerEvent("__l",t)}function ce(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},i=e.selectAllComponents(".vue-ref");i.forEach(function(e){var i=e.dataset.ref;t[i]=e.$vm||e});var n=e.selectAllComponents(".vue-ref-in-for");return n.forEach(function(e){var i=e.dataset.ref;t[i]||(t[i]=[]),t[i].push(e.$vm||e)}),t}})}function he(t){var e,i=t.detail||t.value,n=i.vuePid,a=i.vueOptions;n&&(e=re(this.$vm,n)),e||(e=this.$vm),a.parent=e}function ue(t){return ne(t,{mocks:ae,initRefs:ce})}var pe=["onUniNViewMessage"];function fe(t){var e=ue(t);return Et(e,pe),e}function de(t){return App(fe(t)),t}function ge(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.isPage,a=e.initRelation,o=jt(n.default,t),s=r(o,2),l=s[0],c=s[1],h={multipleSlots:!0,addGlobalClass:!0},u={options:h,data:Bt(c,n.default.prototype),behaviors:Vt(c,oe),properties:Ut(c.props,!1,c.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:i.call(this)?"page":"component",mpInstance:this,propsData:t};Nt(t.vueId,this),a.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new l(e),zt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:he,__e:ee}};return Array.isArray(c.wxsCallMethods)&&c.wxsCallMethods.forEach(function(t){u.methods[t]=function(e){return this.$vm[t](e)}}),i?u:[u,l]}function ve(t){return ge(t,{isPage:se,initRelation:le})}function ye(t){var e=ve(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var xe=["onShow","onHide","onUnload"];function me(t,e){e.isPage,e.initRelation;var i=ye(t);return Et(i.methods,xe,t),i.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},i}function _e(t){return me(t,{isPage:se,initRelation:le})}xe.push.apply(xe,Lt);var be=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function we(t){var e=_e(t);return Et(e.methods,be),e}function Se(t){return Component(we(t))}function Ae(t){return Component(ye(t))}st.forEach(function(t){ot[t]=!1}),lt.forEach(function(t){var e=ot[t]&&ot[t].name?ot[t].name:t;wx.canIUse(e)||(ot[t]=!1)});var Te={};Object.keys(rt).forEach(function(t){Te[t]=rt[t]}),Object.keys(St).forEach(function(t){Te[t]=St[t]}),Object.keys(kt).forEach(function(t){Te[t]=K(t,kt[t])}),Object.keys(wx).forEach(function(t){(m(wx,t)||m(ot,t))&&(Te[t]=K(t,ft(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=Te,t.UniEmitter=St),wx.createApp=de,wx.createPage=Se,wx.createComponent=Ae;var Pe=Te,ke=Pe;e.default=ke}).call(this,i("c8ba"))},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001",_id:"@dcloudio/uni-stat@2.0.0-v3-24020191018001",_inBundle:!1,_integrity:"sha512-nYBm5pRrYzrj2dKMqucWSF2PwInUMnn3MLHM/ik3gnLUEKSW61rzcY1RPlUwaH7c+Snm6N+bAJzmj3GvlrlVXA==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"range",registry:!0,raw:"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"^2.0.0-alpha-24420191128001",saveSpec:null,fetchSpec:"^2.0.0-alpha-24420191128001"},_requiredBy:["/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-v3-24020191018001.tgz",_shasum:"6ef04326cc0b945726413eebe442ab8f47c7536c",_spec:"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"197e8df53cc9d4c3f6eb722b918ccf51672b5cfe",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-v3-24020191018001"}},"83e9":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={appid:"__UNI__7422045"};e.default=n},"921b":function(t,e,i){"use strict";(function(t){var e=i("8189");function n(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function r(t){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(t)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function h(t,e,i){return e&&c(t.prototype,e),i&&c(t,i),t}var u=e.version,p="https://tongji.dcloud.io/uni/stat",f="https://tongji.dcloud.io/uni/stat.gif",d=1800,g=300,v=10,y="__DC_STAT_UUID",x="__DC_UUID_VALUE";function m(){var e="";if("n"===S()){try{e=plus.runtime.getDCloudId()}catch(i){e=""}return e}try{e=t.getStorageSync(y)}catch(i){e=x}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(y,e)}catch(i){t.setStorageSync(y,x)}}return e}var _=function(t){var e=Object.keys(t),i=e.sort(),n={},a="";for(var r in i)n[i[r]]=t[i[r]],a+=i[r]+"="+t[i[r]]+"&";return{sign:"",options:a.substr(0,a.length-1)}},b=function(t){var e="";for(var i in t)e+=i+"="+t[i]+"&";return e.substr(0,e.length-1)},w=function(){return parseInt((new Date).getTime()/1e3)},S=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},A=function(){var e="";return"wx"!==S()&&"qq"!==S()||t.canIUse("getAccountInfoSync")&&(e=t.getAccountInfoSync().miniProgram.appId||""),e},T=function(){return"n"===S()?plus.runtime.version:""},P=function(){var t=S(),e="";return"n"===t&&(e=plus.runtime.channel),e},k=function(e){var i=S(),n="";return e||("wx"===i&&(n=t.getLaunchOptionsSync().scene),n)},D="First__Visit__Time",O="Last__Visit__Time",$=function(){var e=t.getStorageSync(D),i=0;return e?i=e:(i=w(),t.setStorageSync(D,i),t.removeStorageSync(O)),i},M=function(){var e=t.getStorageSync(O),i=0;return i=e||"",t.setStorageSync(O,w()),i},C="__page__residence__time",R=0,L=0,F=function(){return R=w(),"n"===S()&&t.setStorageSync(C,w()),R},I=function(){return L=w(),"n"===S()&&(R=t.getStorageSync(C)),L-R},E="Total__Visit__Count",j=function(){var e=t.getStorageSync(E),i=1;return e&&(i=e,i++),t.setStorageSync(E,i),i},z=function(t){var e={};for(var i in t)e[i]=encodeURIComponent(t[i]);return e},N=0,B=0,W=function(){var t=(new Date).getTime();return N=t,B=0,t},H=function(){var t=(new Date).getTime();return B=t,t},V=function(t){var e=0;if(0!==N&&(e=B-N),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var i=e>g;return{residenceTime:e,overtime:i}}if("page"===t){var n=e>d;return{residenceTime:e,overtime:n}}return{residenceTime:e}},q=function(){var t=getCurrentPages(),e=t[t.length-1],i=e.$vm;return"bd"===S()?i.$mp&&i.$mp.page.is:i.$scope&&i.$scope.route||i.$mp&&i.$mp.page.route},U=function(t){var e=getCurrentPages(),i=e[e.length-1],n=i.$vm,a=t._query,r=a&&"{}"!==JSON.stringify(a)?"?"+JSON.stringify(a):"";return t._query="","bd"===S()?n.$mp&&n.$mp.page.is+r:n.$scope&&n.$scope.route+r||n.$mp&&n.$mp.page.route+r},X=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},G=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},J=i("5c17").default,K=i("83e9").default||i("83e9"),Y=t.getSystemInfoSync(),Z=function(){function e(){l(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:m(),ut:S(),mpn:A(),ak:K.appid,usv:u,v:T(),ch:P(),cn:"",pn:"",ct:"",t:w(),tt:"",p:"android"===Y.platform?"a":"i",brand:Y.brand||"",md:Y.model,sv:Y.system.replace(/(Android|iOS)\s/,""),mpsdk:Y.SDKVersion||"",mpv:Y.version||"",lang:Y.language,pr:Y.pixelRatio,ww:Y.windowWidth,wh:Y.windowHeight,sw:Y.screenWidth,sh:Y.screenHeight}}return h(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){H();var t=V("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,H();var i=V();W();var n=U(this);this._sendHideRequest({urlref:n,urlref_ts:i.residenceTime},e)}},{key:"_pageShow",value:function(){var t=U(this),e=q();if(this._navigationBarTitle.config=J&&J.pages[e]&&J.pages[e].titleNView&&J.pages[e].titleNView.titleText||J&&J.pages[e]&&J.pages[e].navigationBarTitleText||"",this.__licationShow)return W(),this.__licationShow=!1,void(this._lastPageRoute=t);H(),this._lastPageRoute=t;var i=V("page");if(i.overtime){var n={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(n)}W()}},{key:"_pageHide",value:function(){if(!this.__licationHide){H();var t=V("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=w(),this.statData.sc=k(t.scene),this.statData.fvts=$(),this.statData.lvts=M(),this.statData.tvc=j(),"n"===S()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,i=t.urlref,n=t.urlref_ts;this._navigationBarTitle.lt="11";var a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:i,urlref_ts:n,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(a)}},{key:"_sendHideRequest",value:function(t,e){var i=t.urlref,n=t.urlref_ts,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:i,urlref_ts:n,ch:this.statData.ch,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(a,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,i=void 0===e?"":e,n=t.value,a=void 0===n?"":n,r=this._lastPageRoute,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:r,ch:this.statData.ch,e_n:i,e_v:"object"===typeof a?JSON.stringify(a):a.toString(),usv:this.statData.usv,t:w(),p:this.statData.p};this.request(o)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;K.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,i){var n=this,a=w(),r=this._navigationBarTitle;e.ttn=r.page,e.ttpj=r.config,e.ttc=r.report;var o=this._reportingRequestData;if("n"===S()&&(o=t.getStorageSync("__UNI__STAT__DATA")||{}),o[e.lt]||(o[e.lt]=[]),o[e.lt].push(e),"n"===S()&&t.setStorageSync("__UNI__STAT__DATA",o),!(I()<v)||i){var s=this._reportingRequestData;"n"===S()&&(s=t.getStorageSync("__UNI__STAT__DATA")),F();var l=[],c=[],h=[],p=function(t){var e=s[t];e.forEach(function(e){var i=b(e);0===t?l.push(i):3===t?h.push(i):c.push(i)})};for(var f in s)p(f);l.push.apply(l,c.concat(h));var d={usv:u,t:a,requests:JSON.stringify(l)};this._reportingRequestData={},"n"===S()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==S()||"a"!==this.statData.p?this._sendRequest(d):setTimeout(function(){n._sendRequest(d)},200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(e){var i=this;t.request({url:p,method:"POST",data:e,success:function(){},fail:function(t){++i._retry<3&&setTimeout(function(){i._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,i=_(z(t)).options;e.src=f+"?"+i}},{key:"sendEvent",value:function(t,e){G(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),Q=function(e){function i(){var e;return l(this,i),e=n(this,r(i).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return o(i,e),h(i,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new i),this.instance}}]),h(i,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var i=this;e?t.addInterceptor("share",{success:function(){i._share()},fail:function(){i._share()}}):i._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,F(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var i=getCurrentPages();e.$scope=i[i.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,X(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,X(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var i={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:w(),p:this.statData.p};this.request(i)}}]),i}(Z),tt=Q.getInstance(),et=!1,it={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function nt(){var e=i("66fd");(e.default||e).mixin(it),t.report=function(t,e){tt.sendEvent(t,e)}}nt()}).call(this,i("6e42")["default"])},"9c0b":function(t,e,i){},a315:function(t,e,i){"use strict";function n(t){var e=new Promise(function(e,i){var n=setInterval(function(){t.second=t.second-1,t.second<=0&&(t.send=!0,t.alreadySend=!1,t.second=60,e(n))},1e3)});e.then(function(t){clearInterval(t)})}function a(t){var e=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;return!!e.test(t)}function r(t){var e=/^1\d{10}$/;return!!e.test(t)}function o(t){var e=/^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;return!!e.test(t)}var s=function(t){var e=t.getFullYear(),i=t.getMonth()+1,n=t.getDate(),a=t.getHours(),r=t.getMinutes(),o=t.getSeconds();return[e,i,n].map(l).join("/")+" "+[a,r,o].map(l).join(":")},l=function(t){return t=t.toString(),t[1]?t:"0"+t},c=function(t){var e=t.getMonth()+1;return e};function h(t){var e=new Date(t).toJSON();return new Date(+new Date(e)+288e5).toISOString().replace(/T/g," ").replace(/\.[\d]{3}Z/,"")}t.exports={checkEmail:a,checkPhoneNum:r,checkIdcard:o,timer:n,formatTime:s,formatMonth:c,renderTime:h}},c8ba:function(t,e){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(n){"object"===typeof window&&(i=window)}t.exports=i},d763:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{uniShow:!1,left:0}},computed:{moveLeft:function(){return"translateX(".concat(this.left,"px)")}},watch:{show:function(e){this.autoClose||(e?(this.$emit("change",!0),this.open()):(this.$emit("change",!1),this.close()),t.$emit("__uni__swipe__event",this))}},onReady:function(){this.init(),this.getSelectorQuery()},beforeDestoy:function(){t.$off("__uni__swipe__event")},methods:{init:function(){var e=this;t.$on("__uni__swipe__event",function(t){t!==e&&e.autoClose&&0!==e.left&&e.close()})},onClick:function(t,e){this.$emit("click",{content:e,index:t})},touchstart:function(e){var i=e.touches[0].pageX;if(!this.disabled){var n=this.position[0].left;t.$emit("__uni__swipe__event",this),this.width=i-n,this.isopen||this.uniShow&&(this.uniShow=!1,this.isopen=!0,this.openleft=this.left+this.position[1].width)}},touchmove:function(t,e){if(!this.disabled){var i=t.touches[0].pageX;this.setPosition(i)}},touchend:function(){this.disabled||(this.isopen?this.move(this.openleft,0):this.move(this.left,-40))},setPosition:function(t,e){this.position[1].width&&(this.left=t-this.width,this.setValue(t-this.width))},setValue:function(t){this.left=Math.max(-this.position[1].width,Math.min(parseInt(t),0)),this.position[0].left=this.left,this.isopen&&(this.openleft=this.left+this.position[1].width)},move:function(t,e){t>=e?(this.$emit("change",!1),this.close()):(this.$emit("change",!0),this.open())},open:function(){this.uniShow=!0,this.left=-this.position[1].width,this.setValue(-this.position[1].width)},close:function(){var t=this;this.uniShow=!0,this.setValue(0),setTimeout(function(){t.uniShow=!1,t.isopen=!1},200)},getSelectorQuery:function(){var e=this,i=t.createSelectorQuery().in(this);i.selectAll(".selector-query-hock").boundingClientRect(function(t){e.position=t,e.autoClose||(e.show?e.open():e.close())}).exec()}}};e.default=i}).call(this,i("6e42")["default"])},eb07:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{position:[],button:[]}},computed:{pos:function(){return JSON.stringify(this.position)},btn:function(){return JSON.stringify(this.button)}},watch:{show:function(t){if(!this.autoClose){var e=this.position[0];e&&(e.show=t,this.$set(this.position,0,e))}}},onReady:function(){this.init(),this.getSize(),this.getButtonSize()},methods:{init:function(){var e=this;t.$on("__uni__swipe__event",function(t){if(t!==e&&e.autoClose){var i=e.position[0];i.show=!1,e.$set(e.position,0,i)}})},openSwipe:function(){t.$emit("__uni__swipe__event",this)},change:function(t){this.$emit("change",t.open);var e=this.position[0];e.show=t.open,this.$set(this.position,0,e)},onClick:function(t,e){this.$emit("click",{content:e,index:t})},getSize:function(){var e=this,i=t.createSelectorQuery().in(this);i.selectAll(".selector-query-hock").boundingClientRect(function(t){e.autoClose?t[0].show=!1:t[0].show=e.show,e.position=t}).exec()},getButtonSize:function(){var e=this,i=t.createSelectorQuery().in(this);i.selectAll(".button-hock").boundingClientRect(function(t){e.button=t}).exec()}}};e.default=i}).call(this,i("6e42")["default"])},f7ed:function(t,e,i){"use strict";function n(t){var e=!1;t<0&&(t=-t,e=!0),"number"==typeof t&&(t=t.toString());for(var i=t.length-1;i>=0;i--)t=t.replace(",",""),t=t.replace(" ","");if(t=t.replace("￥",""),!isNaN(t)){var n=String(t).split("."),a="";for(i=n[0].length-1;i>=0;i--){if(n[0].length>10)return alertWarning("位数过大，无法计算"),"";var r="",o=n[0].charAt(i);switch(o){case"0":r="零"+r;break;case"1":r="壹"+r;break;case"2":r="贰"+r;break;case"3":r="叁"+r;break;case"4":r="肆"+r;break;case"5":r="伍"+r;break;case"6":r="陆"+r;break;case"7":r="柒"+r;break;case"8":r="捌"+r;break;case"9":r="玖"+r;break}switch(n[0].length-i-1){case 0:r+="元";break;case 1:0!=o&&(r+="拾");break;case 2:0!=o&&(r+="佰");break;case 3:0!=o&&(r+="仟");break;case 4:r+="万";break;case 5:0!=o&&(r+="拾");break;case 6:0!=o&&(r+="佰");break;case 7:0!=o&&(r+="仟");break;case 8:r+="亿";break;case 9:r+="拾";break}a=r+a}if(-1!=t.indexOf(".")){n[1].length>2&&(alertWarning("小数点之后只能保留两位,系统将自动截段"),n[1]=n[1].substr(0,2));for(i=0;i<n[1].length;i++){switch(r="",o=n[1].charAt(i),o){case"0":r="零"+r;break;case"1":r="壹"+r;break;case"2":r="贰"+r;break;case"3":r="叁"+r;break;case"4":r="肆"+r;break;case"5":r="伍"+r;break;case"6":r="陆"+r;break;case"7":r="柒"+r;break;case"8":r="捌"+r;break;case"9":r="玖"+r;break}0==i&&(r+="角"),1==i&&(r+="分"),a+=r}}while(-1!=a.search("零零"))a=a.replace("零零","零");return a=a.replace("零亿","亿"),a=a.replace("亿万","亿"),a=a.replace("零万","万"),a=a.replace("零元","元"),a=a.replace("零角",""),a=a.replace("零分",""),"元"!=a.charAt(a.length-1)&&"角"!=a.charAt(a.length-1)||(a+="整"),e&&(a="负"+a),a}}t.exports={getrmb:n}}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'common/dy-Date';__wxRouteBegin = true;__wxAppCurrentFile__ = 'common/dy-Date.js';

define('common/dy-Date.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/dy-Date"], {
  "1caa": function caa(t, a, e) {},
  "43af": function af(t, a, e) {
    "use strict";

    Object.defineProperty(a, "__esModule", {
      value: !0
    }), a.default = void 0;
    var n = {
      name: "dy-Date-Picker",
      props: {
        timeType: {
          type: String,
          default: function _default() {
            return "day";
          }
        },
        disabled: {
          type: Boolean,
          default: function _default() {
            return !1;
          }
        },
        iconshow: {
          type: Boolean,
          default: function _default() {
            return !0;
          }
        },
        placeholder: {
          type: String,
          default: function _default() {
            return "请选择";
          }
        },
        childValue: {
          default: function _default() {
            return "";
          }
        },
        minSelect: {
          type: String,
          default: function _default() {
            return "1900/01/01";
          }
        },
        maxSelect: {
          type: String,
          default: function _default() {
            return "2050/12/31";
          }
        }
      },
      data: function data() {
        return {
          index: [0],
          array: [],
          yearArr: [],
          monthArr: [],
          yearIndex: 0,
          showTime: this.moment(this.childValue)
        };
      },
      methods: {
        moment: function moment(t) {
          var a = this.timeType;

          if (t) {
            var e = new Date(t),
                n = e.getFullYear(),
                r = e.getMonth() + 1;
            r = r < 10 ? "0".concat(r) : r;
            var i = e.getDate();
            i = i < 10 ? "0".concat(i) : i;
            var s = e.getHours();
            s = s < 10 ? "0".concat(s) : s;
            var c = e.getMinutes();
            c = c < 10 ? "0".concat(c) : c;
            var h = e.getSeconds();
            h = h < 10 ? "0".concat(h) : h;
            var o = "".concat(n, "/").concat(r, "/").concat(i, " ").concat(s, ":").concat(c, ":").concat(h);
            return "year" === a && (o = "".concat(n)), "month" === a && (o = "".concat(n, "-").concat(r)), "day" === a && (o = "".concat(n, "-").concat(r, "-").concat(i)), o;
          }
        },
        setDefaultValue: function setDefaultValue() {
          var t = this.moment(new Date().getTime());
          this.valueEchoed(t);
        },
        bindDateChange: function bindDateChange(t) {
          this.childValue = t.target.value;
        },
        dateInit: function dateInit() {
          this.array = [], this.yearArr = [], this.monthArr = [];
          var t = this.moment(this.minSelect) || [],
              a = this.moment(this.maxSelect) || [];
          t = t ? t.split(" ") : "", a = a ? a.split(" ") : "", t = t[0] ? t[0].split("-") : 1900, a = a[0] ? a[0].split("-") : 2050;
          var e = this.timeType,
              n = "",
              r = n.monthStar,
              i = n.monthEnd,
              s = t[0] ? parseInt(t[0]) : 1900,
              c = a[0] ? parseInt(a[0]) : 2050;
          if ("day" === e) t[2] && parseInt(t[2]), a[2] && parseInt(a[2]);
          "month" !== e && "day" !== e || (r = t[1] ? parseInt(t[1]) : 1, i = a[1] ? parseInt(a[1]) : 12);

          for (var h = s; h <= c; h++) {
            var o = h < 10 ? "0".concat(h) : h;

            if (this.yearArr.push("".concat(o, "年")), "month" === e || "day" === e) {
              var u = this.getMonthArr(h, s, c, r, i, e);
              u.length && this.monthArr.push(u);
            }
          }

          this.array[0] = this.yearArr, "month" !== e && "day" !== e || (this.array[1] = this.monthArr.length && this.monthArr[0]), "day" === e && (this.array[2] = this.getDateArr(parseInt(this.yearArr[0]), parseInt(this.monthArr[0])));
        },
        getMonthArr: function getMonthArr(t, a, e, n, r, i) {
          var s = [];
          if (t === a && t !== e) for (var c = n; c <= 12; c++) {
            var h = c < 10 ? "0".concat(c) : c;
            s.push("".concat(h, "月"));
          }
          if (t === e && t !== a) for (var o = 1; o <= r; o++) {
            var u = o < 10 ? "0".concat(o) : o;
            s.push("".concat(u, "月"));
          }
          if (t !== a && t !== e) for (var l = 1; l <= 12; l++) {
            var f = l < 10 ? "0".concat(l) : l;
            s.push("".concat(f, "月"));
          }
          if (t === a && t === e) for (var d = n; d <= r; d++) {
            var m = d < 10 ? "0".concat(d) : d;
            s.push("".concat(m, "月"));
          }
          return s;
        },
        getDateArr: function getDateArr(t, a) {
          var e = this.moment(this.minSelect) || [],
              n = this.moment(this.maxSelect) || [];
          e = e.length && e.split("-"), n = n.length && n.split("-");
          var r = e[0] ? parseInt(e[0]) : 1900,
              i = n[0] ? parseInt(n[0]) : 2050,
              s = e[1] ? parseInt(e[1]) : 1,
              c = n[1] ? parseInt(n[1]) : 12,
              h = [],
              o = 30,
              u = [1, 3, 5, 7, 8, 10, 12];
          u.includes(a) && (o = 31), 2 === a && (o = t % 400 == 0 || t % 4 == 0 && t % 100 != 0 ? 29 : 28);
          var l = e[2] ? parseInt(e[2]) : 1,
              f = n[2] ? parseInt(n[2]) : o;
          if (t !== i && t !== r || t === r && a !== s && a !== c || t === i && a !== c && a !== s || r === i && a !== s && a !== c || r !== i && t === i && a !== c || t === r && a !== s && t < i) for (var d = 1; d <= o; d++) {
            var m = d < 10 ? "0".concat(d) : d;
            h.push("".concat(m, "日"));
          }
          if (r === i && t === r && a === s && a !== c || r !== i && t === r && a === s) for (var p = l; p <= o; p++) {
            var v = p < 10 ? "0".concat(p) : p;
            h.push("".concat(v, "日"));
          }
          if (t === i && a === c && a !== s && r === i || t === i && r !== i && a === c) for (var y = 1; y <= f; y++) {
            var I = y < 10 ? "0".concat(y) : y;
            h.push("".concat(I, "日"));
          }
          if (t === r && r === i && a === s && s === c) for (var g = l; g <= f; g++) {
            var A = g < 10 ? "0".concat(g) : g;
            h.push("".concat(A, "日"));
          }
          return h;
        },
        bindTimeChange: function bindTimeChange(t) {
          var a = "",
              e = t.detail.value,
              n = this.timeType,
              r = parseInt(this.array[0][parseInt(e[0]) || 0]),
              i = "";

          if (a = r + "", "month" === n || "day" === n) {
            var s = parseInt(e[1]) || 0;
            s = s < 0 ? 0 : s, i = parseInt(this.array[1][s]), i = i < 10 ? "0".concat(i) : i, a = "".concat(a, "-").concat(i);
          }

          if ("day" === n) {
            var c = parseInt(e[2]) || 0;
            c = c < 0 ? 0 : c;
            var h = parseInt(this.array[2][c]);
            h = h < 10 ? "0".concat(h) : h, a = "".concat(a, "-").concat(h);
          }

          this.showTime = a, this.$emit("getData", a);
        },
        columnchange: function columnchange(t) {
          var a = t.detail.value,
              e = t.detail.column,
              n = this.timeType;

          if (this.$set(this.index, e, a), 0 === e && (this.yearIndex = a, "month" !== n && "day" !== n || this.$set(this.array, 1, this.monthArr[a]), "day" === n)) {
            var r = this.index[1] || 0,
                i = this.getDateArr(parseInt(this.yearArr[a]), parseInt(this.monthArr[this.yearIndex][r]));
            this.$set(this.array, 2, i);
          }

          if (1 === e && "day" === n) {
            var s = this.getDateArr(parseInt(this.yearArr[this.yearIndex]), parseInt(this.monthArr[this.yearIndex][a]));
            this.$set(this.array, 2, s);
          }
        },
        valueEchoed: function valueEchoed(t) {
          if (this.index = [0], this.childValue || t) {
            var a = this.childValue || t;
            a = this.moment(a), a = a.split("-");
            var e = this.array[0].findIndex(function (t) {
              return parseInt(t) === parseInt(a[0]);
            }) || 0;
            e = -1 === e ? 0 : e, this.index[0] = e, this.yearIndex = e;
            var n = this.timeType;

            if ("month" === n || "day" === n) {
              this.array[1] = this.monthArr.length && this.monthArr[e];
              var r = this.array[1] && this.array[1].length && this.array[1].findIndex(function (t) {
                return parseInt(t) === parseInt(a[1]);
              }) || 0;
              this.index[1] = r;
            }

            if ("day" === n) {
              var i = this.index[0] || 0,
                  s = this.index[1] || 0;
              i = -1 === i ? 0 : i, s = -1 === s ? 0 : s;
              var c = this.getDateArr(parseInt(this.yearArr[i]), parseInt(this.monthArr[i][s]));
              this.getDateIndex(c);
            }
          }
        },
        getDateIndex: function getDateIndex(t) {
          var a = this.moment(new Date().getTime()),
              e = this.childValue || a;
          e = this.moment(e), e = e.split("-"), this.array[2] = t;
          var n = this.array[2].findIndex(function (t) {
            return parseInt(t) === parseInt(e[2]);
          }) || 0;
          this.index[2] = n;
        }
      },
      watch: {
        minSelect: function minSelect() {
          this.dateInit(), this.setDefaultValue();
        },
        maxSelect: function maxSelect() {
          this.dateInit(), this.setDefaultValue();
        },
        childValue: function childValue() {
          this.showTime = "", this.showTime = this.moment(this.childValue), this.dateInit(), this.setDefaultValue();
        }
      },
      created: function created() {
        this.dateInit(), this.valueEchoed(), this.childValue || this.setDefaultValue();
      }
    };
    a.default = n;
  },
  afc6: function afc6(t, a, e) {
    "use strict";

    e.r(a);
    var n = e("43af"),
        r = e.n(n);

    for (var i in n) {
      "default" !== i && function (t) {
        e.d(a, t, function () {
          return n[t];
        });
      }(i);
    }

    a["default"] = r.a;
  },
  b309: function b309(t, a, e) {
    "use strict";

    var n = function n() {
      var t = this,
          a = t.$createElement;
      t._self._c;
    },
        r = [];

    e.d(a, "a", function () {
      return n;
    }), e.d(a, "b", function () {
      return r;
    });
  },
  c2ca: function c2ca(t, a, e) {
    "use strict";

    var n = e("1caa"),
        r = e.n(n);
    r.a;
  },
  f716: function f716(t, a, e) {
    "use strict";

    e.r(a);
    var n = e("b309"),
        r = e("afc6");

    for (var i in r) {
      "default" !== i && function (t) {
        e.d(a, t, function () {
          return r[t];
        });
      }(i);
    }

    e("c2ca");
    var s = e("2877"),
        c = Object(s["a"])(r["default"], n["a"], n["b"], !1, null, null, null);
    a["default"] = c.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['common/dy-Date-create-component', {
  'common/dy-Date-create-component': function commonDyDateCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("f716"));
  }
}, [['common/dy-Date-create-component']]]);
});
require('common/dy-Date.js');
__wxRoute = 'components/global';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/global.js';

define('components/global.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

Component({});
});
require('components/global.js');
__wxRoute = 'components/keyboard-package/keyboard-package';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/keyboard-package/keyboard-package.js';

define('components/keyboard-package/keyboard-package.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/keyboard-package/keyboard-package"], {
  "1d7c": function d7c(e, n, t) {
    "use strict";

    var o = function o() {
      var e = this,
          n = e.$createElement;
      e._self._c;
      e._isMounted || (e.e0 = function (n) {
        e.active = 1 === e.active ? 2 : 1;
      });
    },
        a = [];

    t.d(n, "a", function () {
      return o;
    }), t.d(n, "b", function () {
      return a;
    });
  },
  4812: function _(e, n, t) {},
  "775d": function d(e, n, t) {
    "use strict";

    t.r(n);
    var o = t("f210"),
        a = t.n(o);

    for (var u in o) {
      "default" !== u && function (e) {
        t.d(n, e, function () {
          return o[e];
        });
      }(u);
    }

    n["default"] = a.a;
  },
  bd7f: function bd7f(e, n, t) {
    "use strict";

    t.r(n);
    var o = t("1d7c"),
        a = t("775d");

    for (var u in a) {
      "default" !== u && function (e) {
        t.d(n, e, function () {
          return a[e];
        });
      }(u);
    }

    t("fb5c");
    var i = t("2877"),
        c = Object(i["a"])(a["default"], o["a"], o["b"], !1, null, "b63d2d12", null);
    n["default"] = c.exports;
  },
  f210: function f210(e, n, t) {
    "use strict";

    (function (e) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;

      var o = function o() {
        return t.e("components/uni-popup/uni-popup").then(t.bind(null, "4103"));
      },
          a = {
        components: {
          uniPopup: o
        },
        props: {
          type: {
            type: String,
            default: "number"
          },
          safeAreaInsetBottom: {
            type: Boolean,
            default: !1
          },
          disableDot: {
            type: Boolean,
            default: !1
          },
          passIn: {
            type: Boolean,
            default: !1
          }
        },
        data: function data() {
          return {
            numKeybordList: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0, "."]],
            idCardList: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0, "X"]],
            areaList: [["京", "沪", "粤", "津", "冀", "豫", "云", "辽", "黑", "湘"], ["皖", "鲁", "苏", "浙", "赣", "鄂", "桂", "甘", "晋", "陕"], ["蒙", "吉", "闽", "贵", "渝", "川", "青", "琼", "宁"], ["藏", "新", "使", "港", "澳", "学"]],
            EngKeyBoardList: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"], ["A", "S", "D", "F", "G", "H", "J", "K", "L"], ["Z", "X", "C", "V", "B", "N", "M"]],
            active: 1,
            showPop: !0
          };
        },
        onLoad: function onLoad() {
          console.log(e(this.$refs.keyboardPackage.showPopup, " at components\\keyboard-package\\keyboard-package.vue:126"));
        },
        methods: {
          change: function change(e) {
            this.$emit("onChange", e);
          },
          open: function open() {
            this.$refs.keyboardPackage.open();
          },
          confirm: function confirm() {
            this.$emit("onConfirm");
          },
          deleteVal: function deleteVal() {
            this.$emit("onDelete");
          },
          input: function input(e) {
            "." === e && this.disableDot || this.$emit("onInput", e);
          },
          close: function close() {
            console.log(e("关闭键盘", " at components\\keyboard-package\\keyboard-package.vue:147")), this.$refs.keyboardPackage.close();
          }
        }
      };

      n.default = a;
    }).call(this, t("0de9")["default"]);
  },
  fb5c: function fb5c(e, n, t) {
    "use strict";

    var o = t("4812"),
        a = t.n(o);
    a.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/keyboard-package/keyboard-package-create-component', {
  'components/keyboard-package/keyboard-package-create-component': function componentsKeyboardPackageKeyboardPackageCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("bd7f"));
  }
}, [['components/keyboard-package/keyboard-package-create-component']]]);
});
require('components/keyboard-package/keyboard-package.js');
__wxRoute = 'components/password-input/password-input';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/password-input/password-input.js';

define('components/password-input/password-input.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/password-input/password-input", "components/keyboard-package/keyboard-package", "components/uni-popup/uni-popup"], {
  "0200": function _(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      u(e("4103"));
      var o = u(e("bd7f"));

      function u(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      var a = {
        props: {
          length: {
            type: Number,
            default: 6,
            validator: function validator(t) {
              return 6 === t || 4 === t;
            }
          },
          gutter: {
            type: Number,
            default: 0
          },
          list: {
            type: Array,
            default: function _default() {
              return [];
            }
          }
        },
        data: function data() {
          return {
            flag: !0,
            hiddenmodalput: !0,
            tip: "请输入您的密码"
          };
        },
        computed: {
          keyboardPackage: o.default
        },
        methods: {
          close: function close() {
            this.$emit("clo"), this.$refs.keyboardPackage.close();
          },
          forget: function forget() {
            t.redirectTo({
              url: "../../my/change-otherPassword/change_otherPassword"
            });
          },
          formatMargin: function formatMargin(t) {
            return "0 300rpx";
          }
        }
      };
      n.default = a;
    }).call(this, e("6e42")["default"]);
  },
  "09a6": function a6(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("ae38"),
        u = e.n(o);

    for (var a in o) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(a);
    }

    n["default"] = u.a;
  },
  "1c84": function c84(t, n, e) {
    "use strict";

    var o = e("3690"),
        u = e.n(o);
    u.a;
  },
  "1d7c": function d7c(t, n, e) {
    "use strict";

    var o = function o() {
      var t = this,
          n = t.$createElement;
      t._self._c;
      t._isMounted || (t.e0 = function (n) {
        t.active = 1 === t.active ? 2 : 1;
      });
    },
        u = [];

    e.d(n, "a", function () {
      return o;
    }), e.d(n, "b", function () {
      return u;
    });
  },
  3690: function _(t, n, e) {},
  39771: function _(t, n, e) {
    "use strict";

    var o = e("8ff2"),
        u = e.n(o);
    u.a;
  },
  4103: function _(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("6799"),
        u = e("09a6");

    for (var a in u) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(a);
    }

    e("1c84");
    var i = e("2877"),
        r = Object(i["a"])(u["default"], o["a"], o["b"], !1, null, null, null);
    n["default"] = r.exports;
  },
  4812: function _(t, n, e) {},
  6799: function _(t, n, e) {
    "use strict";

    var o = function o() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return o;
    }), e.d(n, "b", function () {
      return u;
    });
  },
  "775d": function d(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("f210"),
        u = e.n(o);

    for (var a in o) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(a);
    }

    n["default"] = u.a;
  },
  "8ff2": function ff2(t, n, e) {},
  "903c": function c(t, n, e) {
    "use strict";

    var o = function o() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return o;
    }), e.d(n, "b", function () {
      return u;
    });
  },
  ae38: function ae38(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var o = {
      name: "UniPopup",
      props: {
        animation: {
          type: Boolean,
          default: !0
        },
        type: {
          type: String,
          default: "center"
        },
        custom: {
          type: Boolean,
          default: !1
        },
        maskClick: {
          type: Boolean,
          default: !0
        },
        show: {
          type: Boolean,
          default: !0
        }
      },
      data: function data() {
        return {
          ani: "",
          showPopup: !1
        };
      },
      watch: {
        show: function show(t) {
          t ? this.open() : this.close();
        }
      },
      created: function created() {},
      methods: {
        clear: function clear() {},
        open: function open() {
          var t = this;
          this.$emit("change", {
            show: !0
          }), this.showPopup = !0, this.$nextTick(function () {
            setTimeout(function () {
              t.ani = "uni-" + t.type;
            }, 30);
          });
        },
        close: function close(t) {
          var n = this;
          !this.maskClick && t || (this.$emit("change", {
            show: !1
          }), this.ani = "", this.$nextTick(function () {
            setTimeout(function () {
              n.showPopup = !1;
            }, 300);
          }));
        }
      }
    };
    n.default = o;
  },
  bd7f: function bd7f(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("1d7c"),
        u = e("775d");

    for (var a in u) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(a);
    }

    e("fb5c");
    var i = e("2877"),
        r = Object(i["a"])(u["default"], o["a"], o["b"], !1, null, "b63d2d12", null);
    n["default"] = r.exports;
  },
  d01f: function d01f(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("0200"),
        u = e.n(o);

    for (var a in o) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(a);
    }

    n["default"] = u.a;
  },
  d391: function d391(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("903c"),
        u = e("d01f");

    for (var a in u) {
      "default" !== a && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(a);
    }

    e("39771");
    var i = e("2877"),
        r = Object(i["a"])(u["default"], o["a"], o["b"], !1, null, "2ee4ba95", null);
    n["default"] = r.exports;
  },
  f210: function f210(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;

      var o = function o() {
        return e.e("components/uni-popup/uni-popup").then(e.bind(null, "4103"));
      },
          u = {
        components: {
          uniPopup: o
        },
        props: {
          type: {
            type: String,
            default: "number"
          },
          safeAreaInsetBottom: {
            type: Boolean,
            default: !1
          },
          disableDot: {
            type: Boolean,
            default: !1
          },
          passIn: {
            type: Boolean,
            default: !1
          }
        },
        data: function data() {
          return {
            numKeybordList: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0, "."]],
            idCardList: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [0, "X"]],
            areaList: [["京", "沪", "粤", "津", "冀", "豫", "云", "辽", "黑", "湘"], ["皖", "鲁", "苏", "浙", "赣", "鄂", "桂", "甘", "晋", "陕"], ["蒙", "吉", "闽", "贵", "渝", "川", "青", "琼", "宁"], ["藏", "新", "使", "港", "澳", "学"]],
            EngKeyBoardList: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 0], ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"], ["A", "S", "D", "F", "G", "H", "J", "K", "L"], ["Z", "X", "C", "V", "B", "N", "M"]],
            active: 1,
            showPop: !0
          };
        },
        onLoad: function onLoad() {
          console.log(t(this.$refs.keyboardPackage.showPopup, " at components\\keyboard-package\\keyboard-package.vue:126"));
        },
        methods: {
          change: function change(t) {
            this.$emit("onChange", t);
          },
          open: function open() {
            this.$refs.keyboardPackage.open();
          },
          confirm: function confirm() {
            this.$emit("onConfirm");
          },
          deleteVal: function deleteVal() {
            this.$emit("onDelete");
          },
          input: function input(t) {
            "." === t && this.disableDot || this.$emit("onInput", t);
          },
          close: function close() {
            console.log(t("关闭键盘", " at components\\keyboard-package\\keyboard-package.vue:147")), this.$refs.keyboardPackage.close();
          }
        }
      };

      n.default = u;
    }).call(this, e("0de9")["default"]);
  },
  fb5c: function fb5c(t, n, e) {
    "use strict";

    var o = e("4812"),
        u = e.n(o);
    u.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/password-input/password-input-create-component', {
  'components/password-input/password-input-create-component': function componentsPasswordInputPasswordInputCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("d391"));
  }
}, [['components/password-input/password-input-create-component']]]);
});
require('components/password-input/password-input.js');
__wxRoute = 'components/uni-icons/uni-icons';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-icons/uni-icons.js';

define('components/uni-icons/uni-icons.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-icons/uni-icons"], {
  "530d": function d(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("fa80"),
        c = e.n(u);

    for (var i in u) {
      "default" !== i && function (n) {
        e.d(t, n, function () {
          return u[n];
        });
      }(i);
    }

    t["default"] = c.a;
  },
  8117: function _(n, t, e) {
    "use strict";

    var u = e("ad82"),
        c = e.n(u);
    c.a;
  },
  ad82: function ad82(n, t, e) {},
  bd34: function bd34(n, t, e) {
    "use strict";

    e.r(t);
    var u = e("ecc3"),
        c = e("530d");

    for (var i in c) {
      "default" !== i && function (n) {
        e.d(t, n, function () {
          return c[n];
        });
      }(i);
    }

    e("8117");
    var r = e("2877"),
        a = Object(r["a"])(c["default"], u["a"], u["b"], !1, null, null, null);
    t["default"] = a.exports;
  },
  ecc3: function ecc3(n, t, e) {
    "use strict";

    var u = function u() {
      var n = this,
          t = n.$createElement;
      n._self._c;
    },
        c = [];

    e.d(t, "a", function () {
      return u;
    }), e.d(t, "b", function () {
      return c;
    });
  },
  fa80: function fa80(n, t, e) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = void 0;
    var u = {
      name: "UniIcons",
      props: {
        type: {
          type: String,
          default: ""
        },
        color: {
          type: String,
          default: "#333333"
        },
        size: {
          type: [Number, String],
          default: 16
        }
      },
      methods: {
        _onClick: function _onClick() {
          this.$emit("click");
        }
      }
    };
    t.default = u;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-icons/uni-icons-create-component', {
  'components/uni-icons/uni-icons-create-component': function componentsUniIconsUniIconsCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("bd34"));
  }
}, [['components/uni-icons/uni-icons-create-component']]]);
});
require('components/uni-icons/uni-icons.js');
__wxRoute = 'components/uni-nav-bar/uni-nav-bar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-nav-bar/uni-nav-bar.js';

define('components/uni-nav-bar/uni-nav-bar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-nav-bar/uni-nav-bar"], {
  "0d42": function d42(t, n, e) {
    "use strict";

    e.r(n);
    var a = e("a5dc"),
        u = e.n(a);

    for (var i in a) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(i);
    }

    n["default"] = u.a;
  },
  "68c3": function c3(t, n, e) {},
  "8bd2": function bd2(t, n, e) {
    "use strict";

    var a = function a() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return a;
    }), e.d(n, "b", function () {
      return u;
    });
  },
  a5dc: function a5dc(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;

    var a = function a() {
      return e.e("components/uni-status-bar/uni-status-bar").then(e.bind(null, "8a67"));
    },
        u = function u() {
      return e.e("components/uni-icons/uni-icons").then(e.bind(null, "bd34"));
    },
        i = {
      name: "UniNavBar",
      components: {
        uniStatusBar: a,
        uniIcons: u
      },
      props: {
        title: {
          type: String,
          default: ""
        },
        leftText: {
          type: String,
          default: ""
        },
        rightText: {
          type: String,
          default: ""
        },
        leftIcon: {
          type: String,
          default: ""
        },
        rightIcon: {
          type: String,
          default: ""
        },
        fixed: {
          type: [Boolean, String],
          default: !1
        },
        color: {
          type: String,
          default: "#000000"
        },
        backgroundColor: {
          type: String,
          default: "#FFFFFF"
        },
        statusBar: {
          type: [Boolean, String],
          default: !1
        },
        shadow: {
          type: [String, Boolean],
          default: !0
        },
        border: {
          type: [String, Boolean],
          default: !0
        }
      },
      methods: {
        onClickLeft: function onClickLeft() {
          this.$emit("click-left");
        },
        onClickRight: function onClickRight() {
          this.$emit("click-right");
        }
      }
    };

    n.default = i;
  },
  aa3e: function aa3e(t, n, e) {
    "use strict";

    var a = e("68c3"),
        u = e.n(a);
    u.a;
  },
  ba27: function ba27(t, n, e) {
    "use strict";

    e.r(n);
    var a = e("8bd2"),
        u = e("0d42");

    for (var i in u) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(i);
    }

    e("aa3e");
    var r = e("2877"),
        o = Object(r["a"])(u["default"], a["a"], a["b"], !1, null, null, null);
    n["default"] = o.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-nav-bar/uni-nav-bar-create-component', {
  'components/uni-nav-bar/uni-nav-bar-create-component': function componentsUniNavBarUniNavBarCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("ba27"));
  }
}, [['components/uni-nav-bar/uni-nav-bar-create-component']]]);
});
require('components/uni-nav-bar/uni-nav-bar.js');
__wxRoute = 'components/uni-popup/uni-popup';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-popup/uni-popup.js';

define('components/uni-popup/uni-popup.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-popup/uni-popup"], {
  "09a6": function a6(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("ae38"),
        u = e.n(o);

    for (var i in o) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(i);
    }

    n["default"] = u.a;
  },
  "1c84": function c84(t, n, e) {
    "use strict";

    var o = e("3690"),
        u = e.n(o);
    u.a;
  },
  3690: function _(t, n, e) {},
  4103: function _(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("6799"),
        u = e("09a6");

    for (var i in u) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(i);
    }

    e("1c84");
    var a = e("2877"),
        c = Object(a["a"])(u["default"], o["a"], o["b"], !1, null, null, null);
    n["default"] = c.exports;
  },
  6799: function _(t, n, e) {
    "use strict";

    var o = function o() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        u = [];

    e.d(n, "a", function () {
      return o;
    }), e.d(n, "b", function () {
      return u;
    });
  },
  ae38: function ae38(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var o = {
      name: "UniPopup",
      props: {
        animation: {
          type: Boolean,
          default: !0
        },
        type: {
          type: String,
          default: "center"
        },
        custom: {
          type: Boolean,
          default: !1
        },
        maskClick: {
          type: Boolean,
          default: !0
        },
        show: {
          type: Boolean,
          default: !0
        }
      },
      data: function data() {
        return {
          ani: "",
          showPopup: !1
        };
      },
      watch: {
        show: function show(t) {
          t ? this.open() : this.close();
        }
      },
      created: function created() {},
      methods: {
        clear: function clear() {},
        open: function open() {
          var t = this;
          this.$emit("change", {
            show: !0
          }), this.showPopup = !0, this.$nextTick(function () {
            setTimeout(function () {
              t.ani = "uni-" + t.type;
            }, 30);
          });
        },
        close: function close(t) {
          var n = this;
          !this.maskClick && t || (this.$emit("change", {
            show: !1
          }), this.ani = "", this.$nextTick(function () {
            setTimeout(function () {
              n.showPopup = !1;
            }, 300);
          }));
        }
      }
    };
    n.default = o;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-popup/uni-popup-create-component', {
  'components/uni-popup/uni-popup-create-component': function componentsUniPopupUniPopupCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("4103"));
  }
}, [['components/uni-popup/uni-popup-create-component']]]);
});
require('components/uni-popup/uni-popup.js');
__wxRoute = 'components/uni-status-bar/uni-status-bar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-status-bar/uni-status-bar.js';

define('components/uni-status-bar/uni-status-bar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-status-bar/uni-status-bar"], {
  "1a02": function a02(t, n, a) {
    "use strict";

    var u = a("8315"),
        e = a.n(u);
    e.a;
  },
  "21da": function da(t, n, a) {
    "use strict";

    var u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        e = [];

    a.d(n, "a", function () {
      return u;
    }), a.d(n, "b", function () {
      return e;
    });
  },
  "76e3": function e3(t, n, a) {
    "use strict";

    a.r(n);
    var u = a("c79c"),
        e = a.n(u);

    for (var r in u) {
      "default" !== r && function (t) {
        a.d(n, t, function () {
          return u[t];
        });
      }(r);
    }

    n["default"] = e.a;
  },
  8315: function _(t, n, a) {},
  "8a67": function a67(t, n, a) {
    "use strict";

    a.r(n);
    var u = a("21da"),
        e = a("76e3");

    for (var r in e) {
      "default" !== r && function (t) {
        a.d(n, t, function () {
          return e[t];
        });
      }(r);
    }

    a("1a02");
    var c = a("2877"),
        i = Object(c["a"])(e["default"], u["a"], u["b"], !1, null, null, null);
    n["default"] = i.exports;
  },
  c79c: function c79c(t, n, a) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var a = t.getSystemInfoSync().statusBarHeight + "px",
          u = {
        name: "UniStatusBar",
        data: function data() {
          return {
            statusBarHeight: a
          };
        }
      };
      n.default = u;
    }).call(this, a("6e42")["default"]);
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-status-bar/uni-status-bar-create-component', {
  'components/uni-status-bar/uni-status-bar-create-component': function componentsUniStatusBarUniStatusBarCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("8a67"));
  }
}, [['components/uni-status-bar/uni-status-bar-create-component']]]);
});
require('components/uni-status-bar/uni-status-bar.js');
__wxRoute = 'components/uni-swipe-action/uni-swipe-action';__wxRouteBegin = true;__wxAppCurrentFile__ = 'components/uni-swipe-action/uni-swipe-action.js';

define('components/uni-swipe-action/uni-swipe-action.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/uni-swipe-action/uni-swipe-action"], {
  "218a": function a(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    a(e("d763"));
    var o = a(e("eb07"));

    function a(t) {
      return t && t.__esModule ? t : {
        default: t
      };
    }

    var u = {
      mixins: [o.default],
      props: {
        options: {
          type: Array,
          default: function _default() {
            return [];
          }
        },
        disabled: {
          type: Boolean,
          default: !1
        },
        show: {
          type: Boolean,
          default: !1
        },
        autoClose: {
          type: Boolean,
          default: !0
        }
      }
    };
    n.default = u;
  },
  "5eac": function eac(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("82bd"),
        a = e("f09b");

    for (var u in a) {
      "default" !== u && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(u);
    }

    e("f67d");
    var i = e("2877"),
        s = e("d05a"),
        l = Object(i["a"])(a["default"], o["a"], o["b"], !1, null, null, null);
    "function" === typeof s["a"] && Object(s["a"])(l), n["default"] = l.exports;
  },
  "82bd": function bd(t, n, e) {
    "use strict";

    var o = function o() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        a = [];

    e.d(n, "a", function () {
      return o;
    }), e.d(n, "b", function () {
      return a;
    });
  },
  "9b5c": function b5c(t, n, e) {},
  d05a: function d05a(t, n, e) {
    "use strict";

    var o = function o(t) {
      t.options.wxsCallMethods || (t.options.wxsCallMethods = []), t.options.wxsCallMethods.push("openSwipe"), t.options.wxsCallMethods.push("change");
    };

    n["a"] = o;
  },
  f09b: function f09b(t, n, e) {
    "use strict";

    e.r(n);
    var o = e("218a"),
        a = e.n(o);

    for (var u in o) {
      "default" !== u && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(u);
    }

    n["default"] = a.a;
  },
  f67d: function f67d(t, n, e) {
    "use strict";

    var o = e("9b5c"),
        a = e.n(o);
    a.a;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['components/uni-swipe-action/uni-swipe-action-create-component', {
  'components/uni-swipe-action/uni-swipe-action-create-component': function componentsUniSwipeActionUniSwipeActionCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("5eac"));
  }
}, [['components/uni-swipe-action/uni-swipe-action-create-component']]]);
});
require('components/uni-swipe-action/uni-swipe-action.js');

__wxRoute = 'pages/start/start';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/start/start.js';

define('pages/start/start.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/start/start"],{"4be6":function(e,t,n){"use strict";var a=n("c01d"),r=n.n(a);r.a},"7a54":function(e,t,n){"use strict";n.r(t);var a=n("9a1a"),r=n("c956");for(var c in r)"default"!==c&&function(e){n.d(t,e,function(){return r[e]})}(c);n("4be6");var u=n("2877"),l=Object(u["a"])(r["default"],a["a"],a["b"],!1,null,null,null);t["default"]=l.exports},"9a1a":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r})},c01d:function(e,t,n){},c956:function(e,t,n){"use strict";n.r(t);var a=n("cf4d"),r=n.n(a);for(var c in a)"default"!==c&&function(e){n.d(t,e,function(){return a[e]})}(c);t["default"]=r.a},cf4d:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={onShow:function(){var t,n=this;function a(){var a=e.getStorageSync("token"),r=e.getStorageSync("phone");if(a&&r){var c=function(){l-=1,0==l&&(e.switchTab({url:"/pages/index/index"}),clearInterval(u),clearInterval(t))};n.global_.phone=r,n.global_.token=a;var u,l=3;u=setInterval(c,500)}else{var o,i=function(){f-=1,0==f&&(e.navigateTo({url:"/pages/leader/guide"}),clearInterval(o),clearInterval(t))},f=3;o=setInterval(i,500),clearInterval(t)}}t=setInterval(a,1e3)}};t.default=n}).call(this,n("6e42")["default"])},dca1:function(e,t,n){"use strict";(function(e){n("9c0b"),n("921b");a(n("66fd"));var t=a(n("7a54"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["dca1","common/runtime","common/vendor"]]]);
});
require('pages/start/start.js');
__wxRoute = 'pages/leader/guide';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/leader/guide.js';

define('pages/leader/guide.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/leader/guide"],{"0344":function(n,t,e){"use strict";var i=e("8f23"),u=e.n(i);u.a},3101:function(n,t,e){"use strict";e.r(t);var i=e("de4c"),u=e("e1ff");for(var o in u)"default"!==o&&function(n){e.d(t,n,function(){return u[n]})}(o);e("0344");var c=e("2877"),a=Object(c["a"])(u["default"],i["a"],i["b"],!1,null,"0193a50c",null);t["default"]=a.exports},"8f23":function(n,t,e){},9740:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{windowHeight:"",windowWidth:"",indicator:!0}},onLoad:function(){var t=this;n.getSystemInfo({success:function(n){t.windowHeight=n.screenHeight+"px",t.windowWidth=n.screenWidth+"px"}})},methods:{change:function(n){2==n.detail.current?this.indicator=!1:this.indicator=!0},go:function(){n.navigateTo({url:"/pages/login/login"})}}};t.default=e}).call(this,e("6e42")["default"])},bf12:function(n,t,e){"use strict";(function(n){e("9c0b"),e("921b");i(e("66fd"));var t=i(e("3101"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},de4c:function(n,t,e){"use strict";var i=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return i}),e.d(t,"b",function(){return u})},e1ff:function(n,t,e){"use strict";e.r(t);var i=e("9740"),u=e.n(i);for(var o in i)"default"!==o&&function(n){e.d(t,n,function(){return i[n]})}(o);t["default"]=u.a}},[["bf12","common/runtime","common/vendor"]]]);
});
require('pages/leader/guide.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{1653:function(t,n,e){"use strict";var o=e("d0d8"),a=e.n(o);a.a},"967f":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return a})},"9c8a":function(t,n,e){"use strict";(function(t){e("9c0b"),e("921b");o(e("66fd"));var n=o(e("dbfb"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},ab89:function(t,n,e){"use strict";e.r(n);var o=e("d0bd"),a=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=a.a},d0bd:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{show:!1,phone:"",password:"",shade:!1}},onLoad:function(){},methods:{cancel:function(){this.shade=!1},getPhoneValue:function(t){this.phone=t.detail.value},getPasswordValue:function(t){this.password=t.detail.value},sure:function(){t.navigateTo({url:"../register/register"})},login:function(){var n=this,e=this;if(""==this.phone)return t.showToast({icon:"none",title:"请输入手机号"}),!1;var o=/^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;return o.test(this.phone)?this.password?void t.request({url:this.url+"users/login/",method:"POST",data:{mobile:this.phone,password:this.password},headers:{"Content-Type":"application/json"},success:function(o){t.setStorageSync("phone",n.phone),t.setStorageSync("token",o.data.token),e.global_.phone=n.phone,e.global_.token=o.data.token,401==o.statusCode&&(n.shade=!0),402==o.statusCode&&t.showToast({title:"密码错误",icon:"none"}),200==o.statusCode&&t.reLaunch({url:"../index/index"})},fail:function(){},complete:function(){}}):(t.showToast({title:"请输入密码",icon:"none",duration:2e3}),!1):(t.showToast({title:"请输入正确的手机号",icon:"none",mask:!0,duration:2e3}),!1)},agree:function(){t.navigateTo({url:"../agreement/agreement"})}}};n.default=e}).call(this,e("6e42")["default"])},d0d8:function(t,n,e){},dbfb:function(t,n,e){"use strict";e.r(n);var o=e("967f"),a=e("ab89");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("1653");var s=e("2877"),u=Object(s["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=u.exports}},[["9c8a","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/register/register';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/register/register.js';

define('pages/register/register.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"06f4":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},"15c4":function(t,e,n){},"8c41":function(t,e,n){"use strict";n.r(e);var o=n("f26d"),i=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e["default"]=i.a},c779:function(t,e,n){"use strict";(function(t){n("9c0b"),n("921b");o(n("66fd"));var e=o(n("e8d8"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},e8d8:function(t,e,n){"use strict";n.r(e);var o=n("06f4"),i=n("8c41");for(var s in i)"default"!==s&&function(t){n.d(e,t,function(){return i[t]})}(s);n("f869");var a=n("2877"),u=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=u.exports},f26d:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{show:!1,shade:!1,phone:"",pwd:"",pwd1:"",code:"",iscode:"",codename:" 获取验证码 ",disabled:!1,flag:!0}},methods:{getPhoneValue:function(t){this.phone=t.detail.value},getPwdValue:function(t){this.pwd=t.detail.value},getPwdValue1:function(t){this.pwd1=t.detail.value},getCodeValue:function(t){this.code=t.detail.value},getCode:function(){var e=this,o=/^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;return""==this.phone?(t.showToast({title:"手机号不能为空",icon:"none",duration:1e3}),!1):o.test(this.phone)?void t.request({url:e.url+"users/regist/sms/",method:"POST",data:{mobile:this.phone},header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(o){console.log(n(o," at pages\\register\\register.vue:96"));var i=o.statusCode;if(200==i){e.iscode=o.data.data;var s=61,a=setInterval(function(){s--,s<=0?(clearInterval(a),e.codename="重新发送",e.disabled=!1):(e.codename=s+"s",e.disabled=!0)},1e3)}else{if(411==i)return t.showToast({title:"操作太频繁，请稍候重试",icon:"none",duration:2e3}),!1;if(400==i)return t.showToast({title:"手机号已注册",icon:"none",duration:2e3}),!1}}}):(t.showToast({title:"请输入正确的手机号",icon:"none",duration:1e3}),!1)},getCodeBtn:function(t){this.getCode()},register:function(){var e=this,n=this;if(""==this.phone)return t.showToast({title:"请输入手机号",icon:"none",duration:2e3}),!1;var o=/^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;if(!o.test(this.phone))return t.showToast({title:"请输入正确的手机号",icon:"none",duration:2e3}),!1;if(""==this.pwd)return t.showToast({title:"请输入登录密码",icon:"none",duration:2e3}),!1;var i=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;return i.test(this.pwd)?""==this.pwd1?(t.showToast({title:"请确认登录密码",icon:"none",duration:2e3}),!1):this.pwd1!==this.pwd?(t.showToast({title:"两次密码不一致",icon:"none",duration:2e3}),!1):""==this.code?(t.showToast({title:"验证码不能为空",icon:"none",duration:2e3}),!1):this.code!=this.iscode?(t.showToast({title:"验证码错误",icon:"none",duration:2e3}),!1):void t.request({url:this.url+"users/regist/",method:"POST",data:{mobile:this.phone,password:this.pwd,sec_password:this.pwd1,code:this.code},headers:{"Content-Type":"application/json"},success:function(o){n.global_.phone=e.phone,n.global_.token=o.data.token,400==o.statusCode&&t.showToast({title:"验证码已过期",icon:"none"}),201==o.statusCode&&(e.shade=!0)},fail:function(){},complete:function(){}}):(t.showToast({title:"密码格式不正确",icon:"none",duration:2e3}),!1)},sure:function(){t.navigateTo({url:"../login/login"})}}};e.default=o}).call(this,n("6e42")["default"],n("0de9")["default"])},f869:function(t,e,n){"use strict";var o=n("15c4"),i=n.n(o);i.a}},[["c779","common/runtime","common/vendor"]]]);
});
require('pages/register/register.js');
__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0958":function(e,t,a){"use strict";var n=a("d64e"),o=a.n(n);o.a},"0a6f":function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,i=r(a("45f4"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var l=null,s={data:function(){return{Todayprice:"",yesterdayprice:"",yesterday:"",seven_profit:"",title:"",total_profit:"",cWidth:"",cHeight:"",pixelRatio:1,notice:"",csgo:"",time:[],price:[],hure:[],feck:[],usd:"",suner:"",baner:"",hige:"",minn:""}},onLoad:function(){o=this;var t=this;this.cWidth=e.upx2px(750),this.cHeight=e.upx2px(550),o.getServerData(),e.request({url:this.url+"home/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){var a=e.data;t.csgo=a}}),e.request({url:this.url+"home/rotation/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){console.log(n(e," at pages\\index\\index.vue:109")),o.baner=e.data}}),e.request({url:this.url+"/home/news/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){console.log(n(e.data," at pages\\index\\index.vue:120")),t.title=e.data}})},methods:{some:function(t){e.request({url:this.url+"home/rotation/details/"+t+"/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(t){var a=t.data.link,n=t.data.text_content.replace(/=/g,"_");null==a?e.navigateTo({url:"../banner/banner?content="+encodeURIComponent(n)}):e.navigateTo({url:"../web1/web1?url=".concat(a)})}})},information:function(t){console.log(n(t," at pages\\index\\index.vue:153")),e.request({url:this.url+"home/news/details/"+t+"/",method:"PUT",header:{Authorization:"JWT "+this.global_.token},success:function(t){console.log(n(t," at pages\\index\\index.vue:161"));var a=t.data.data,o=a.link;console.log(n(o," at pages\\index\\index.vue:164"));var i=a.read_volume,r=a.text_content,u=a.add_time,l=a.title;null==o?e.navigateTo({url:"../banner2/banner2?volume="+i+"&cont="+r+"&add="+u+"&title="+l}):e.navigateTo({url:"../web2/web2?url=".concat(o)})}})},getServerData:function(){var t=this,a=Date.parse(new Date)/1e3,n=(new Date,518400),i=a-n;e.request({url:"https://gateio.org/json_svr/query/?u=10&c=9137018&type=tvkline&symbol=fil_usdt&from=".concat(i,"&to=").concat(a,"&interval=28800"),method:"POST",success:function(e){function a(e){var t=new Date(e),a=(t.getFullYear(),t.getMonth()+1);a=a<10?"0"+a:a;var n=t.getDate();n=n<10?"0"+n:n;var o=t.getHours();o=o<10?"0"+o:o;var i=t.getMinutes();return i=i<10?"0"+i:i,a+"-"+n}var n=e.data.split("\n");t.usd=n;for(var i=[],r=[],u=[],l=1;l<t.usd.length-1;l++){var s=n[l].split(",")[0],d=a(parseInt(s));i.push(d),t.time=i;var c=new Date;c.setTime(c.getTime()-864e5);c.getFullYear(),c.getMonth(),c.getDate()}for(var h=1;h<t.usd.length-1;h++){var f=n[h].split(",")[2],g=parseFloat(f);r.push(g),t.price=r}for(var p=1;p<t.usd.length-1;p++){var v=n[p].split(",")[1],m=parseFloat(v);u.push(m),t.feck=u}for(var b=1;b<t.usd.length-1;b++)var x=n[b].split(",")[3];var y=parseFloat(n[n.length-2].split(",")[4]),T=parseFloat(n[n.length-6].split(",")[4]),w=y-T,_=w.toFixed(2),k=100*(y/v-1);d=k.toFixed(2)+"%";o.hige=parseFloat(f)+1,o.minn=parseFloat(x)-1,t.Todayprice=y,t.yesterday=d,t.yesterdayprice=_,(_>0||d>0)&&(t.yest="+"+t.yest);var F={list:[]};F.list=t.usd,o.showArea("canvasArea",t.usd)}})},showArea:function(e,t){var a;l=new i.default((a={$this:o,canvasId:e,type:"area",fontSize:11,legend:!0,dataLabel:!1},u(a,"legend",{show:!1}),u(a,"dataPointShape",!1),u(a,"legend",{show:!1}),u(a,"pixelRatio",o.pixelRatio),u(a,"categories",o.time),u(a,"series",[{name:"FIL价格",data:o.price,color:"#58f4e3"}]),u(a,"animation",!0),u(a,"xAxis",{type:"grid",gridColor:"#333535",disableGrid:!0,gridType:"solid",dashLength:8,axisLineColor:"#333535",itemCount:20,labelCount:8}),u(a,"yAxis",{type:"grid",gridType:"solid",gridColor:"#333535",dashLength:8,splitNumber:4,min:o.minn,max:o.hige,axisLineColor:"red",format:function(e){return e.toFixed(1)}}),u(a,"width",o.cWidth*o.pixelRatio),u(a,"height",o.cHeight*o.pixelRatio),u(a,"extra",{area:{type:"straight",opacity:.2,addLine:!0,width:1,gradient:!0}}),a))},touchCandle:function(e){l.scrollStart(e)},moveCandle:function(e){l.scroll(e)},touchEndCandle:function(e){l.scrollEnd(e),l.showToolTip(e,{format:function(e,t){return t+" "+e.name+":"+e.data}})},touchArea:function(e){l.showToolTip(e,{format:function(e,t){return t+" "+e.name+":"+e.data}})}}};t.default=s}).call(this,a("6e42")["default"],a("0de9")["default"])},"1dc5":function(e,t,a){"use strict";a.r(t);var n=a("0a6f"),o=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);t["default"]=o.a},"6efc":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},o=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return o})},"6f64":function(e,t,a){"use strict";a.r(t);var n=a("6efc"),o=a("1dc5");for(var i in o)"default"!==i&&function(e){a.d(t,e,function(){return o[e]})}(i);a("0958");var r=a("2877"),u=Object(r["a"])(o["default"],n["a"],n["b"],!1,null,null,null);t["default"]=u.exports},a5ed:function(e,t,a){"use strict";(function(e){a("9c0b"),a("921b");n(a("66fd"));var t=n(a("6f64"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},d64e:function(e,t,a){}},[["a5ed","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/getBackPassword/getBackPassword';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/getBackPassword/getBackPassword.js';

define('pages/getBackPassword/getBackPassword.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/getBackPassword/getBackPassword"],{"68bb":function(e,t,o){"use strict";o.r(t);var n=o("d8f1"),a=o("bcee");for(var s in a)"default"!==s&&function(e){o.d(t,e,function(){return a[e]})}(s);o("db24");var i=o("2877"),d=Object(i["a"])(a["default"],n["a"],n["b"],!1,null,null,null);t["default"]=d.exports},6909:function(e,t,o){},bcee:function(e,t,o){"use strict";o.r(t);var n=o("d473"),a=o.n(n);for(var s in n)"default"!==s&&function(e){o.d(t,e,function(){return n[e]})}(s);t["default"]=a.a},d473:function(e,t,o){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{phone:"",code:"",iscode:"",codename:" 获取验证码 ",disabled:!1}},onBackPress:function(e){plus.key.hideSoftKeybord()},methods:{getPhoneValue:function(e){11==e.detail.value.length&&(this.disabled=!1),this.phone=e.detail.value},getCodeValue:function(e){this.code=e.detail.value},getCode:function(){var t=this,n=/^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;return""==this.phone?(e.showToast({title:"手机号不能为空",icon:"none",duration:1e3}),!1):n.test(this.phone)?void e.request({method:"POST",data:{mobile:this.phone},url:t.url+"users/forgot/sms/",header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(n){console.log(o(n," at pages\\getBackPassword\\getBackPassword.vue:74"));var a=n.statusCode;if(200==a){t.iscode=n.data.data;var s=61,i=setInterval(function(){s--,s<=0?(clearInterval(i),t.codename="重新发送",t.disabled=!1):(t.codename=s+"s",t.disabled=!0)},1e3)}else{if(400==a)return e.showToast({title:"用户不存在",icon:"none",duration:2e3}),!1;if(411==a)return e.showToast({title:"操作太频繁，请稍候重试",icon:"none",duration:2e3}),!1}}}):(e.showToast({title:"请输入正确的手机号",icon:"none",duration:1e3}),!1)},getCodeNumber:function(e){this.getCode()},next:function(){var t=this,o=/^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;return""==this.phone?(e.showToast({title:"手机号不能为空",icon:"none",duration:1e3}),!1):o.test(this.phone)?""==this.code?(e.showToast({title:"验证码不能为空",icon:"none",duration:1e3}),!1):this.code!=this.iscode?(e.showToast({title:"验证码错误",icon:"none",duration:2e3}),!1):void e.request({url:t.url+"users/forgot/next/",method:"POST",data:{mobile:this.phone,code:this.code},header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(o){401==o.statusCode&&e.showToast({title:"wrong",icon:"none",duration:2e3}),400==o.statusCode&&e.showToast({title:"手机号验证码不匹配",icon:"none",duration:2e3}),200==o.statusCode&&e.navigateTo({url:"../setNewPassword/setNewPassword?code="+t.code+"&phone="+t.phone})}}):(e.showToast({title:"请输入正确的手机号",icon:"none",duration:1e3}),!1)}}};t.default=n}).call(this,o("6e42")["default"],o("0de9")["default"])},d8f1:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},a=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return a})},db24:function(e,t,o){"use strict";var n=o("6909"),a=o.n(n);a.a},ef28:function(e,t,o){"use strict";(function(e){o("9c0b"),o("921b");n(o("66fd"));var t=n(o("68bb"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("6e42")["createPage"])}},[["ef28","common/runtime","common/vendor"]]]);
});
require('pages/getBackPassword/getBackPassword.js');
__wxRoute = 'pages/setNewPassword/setNewPassword';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/setNewPassword/setNewPassword.js';

define('pages/setNewPassword/setNewPassword.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/setNewPassword/setNewPassword"],{"1ffb":function(t,n,e){"use strict";(function(t){e("9c0b"),e("921b");o(e("66fd"));var n=o(e("4765"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"34fd":function(t,n,e){"use strict";e.r(n);var o=e("7091"),i=e.n(o);for(var s in o)"default"!==s&&function(t){e.d(n,t,function(){return o[t]})}(s);n["default"]=i.a},4765:function(t,n,e){"use strict";e.r(n);var o=e("4a0b"),i=e("34fd");for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);e("56c7");var a=e("2877"),u=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,null,null);n["default"]=u.exports},"4a0b":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return i})},"56c7":function(t,n,e){"use strict";var o=e("c57b"),i=e.n(o);i.a},7091:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{isPassword:!0,isPassword1:!0,newPwd:"",newPwd1:"",iscode:"",phone:""}},onLoad:function(t){this.iscode=t.code,this.phone=t.phone},onBackPress:function(t){plus.key.hideSoftKeybord()},methods:{newpassword:function(t){this.newPwd=t.detail.value},newpassword1:function(t){this.newPwd1=t.detail.value},next:function(){var n=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;if(n.test(this.newPwd)||t.showToast({title:"密码格式不正确",icon:"none",duration:2e3}),""==this.newPwd)return t.showToast({title:"请输入新密码",icon:"none",duration:2e3}),!1;if(""==this.newPwd1)return t.showToast({title:"请确认密码",icon:"none",duration:2e3}),!1;if(this.newPwd1!==this.newPwd)return t.showToast({title:"两次密码不一致",icon:"none",duration:2e3}),!1;n=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;if(!n.test(this.newPwd))return t.showToast({title:"密码格式不正确",icon:"none",duration:2e3}),!1;t.request({url:this.url+"users/forgot/change/",method:"POST",data:{mobile:this.phone,password:this.newPwd,sec_password:this.newPwd1,code:this.iscode},header:{},success:function(n){t.navigateTo({url:"../login/login"}),t.showToast({title:"密码找回成功",icon:"none",duration:2e3})}})}}};n.default=e}).call(this,e("6e42")["default"])},c57b:function(t,n,e){}},[["1ffb","common/runtime","common/vendor"]]]);
});
require('pages/setNewPassword/setNewPassword.js');
__wxRoute = 'pages/agreement/agreement';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/agreement/agreement.js';

define('pages/agreement/agreement.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/agreement/agreement"],{"0b18":function(e,t,a){},"10fd":function(e,t,a){"use strict";(function(e){a("9c0b"),a("921b");n(a("66fd"));var t=n(a("a665"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},5629:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},o=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return o})},"5db6":function(e,t,a){"use strict";var n=a("0b18"),o=a.n(n);o.a},a0e9:function(e,t,a){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{agreement:"",chnerot:"",flag:!1,fllaag:!1}},onShow:function(){var t=this;e.request({url:this.url+"usermachine/agreement/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){console.log(a(e," at pages\\agreement\\agreement.vue:34")),t.chnerot=e.data.data.user_agreement,t.agreement=e.data.data.agreement,console.log(a(t.agreement," at pages\\agreement\\agreement.vue:37")),0==t.chnerot&&(t.flag=!0)}})},methods:{sss:function(){var t=this;e.request({url:this.url+"usermachine/agreement/",method:"POST",header:{Authorization:"JWT "+this.global_.token},success:function(n){console.log(a(n," at pages\\agreement\\agreement.vue:55")),200==n.statusCode&&(t.fllaag=!0,t.flag=!1,e.showToast({title:"已阅读并同意协议"}))}})},aaa:function(){e.downloadFile({url:this.url+"media/用户服务协议.pdf",success:function(t){console.log(a(t," at pages\\agreement\\agreement.vue:71")),200===t.statusCode&&(console.log(a("下载成功"," at pages\\agreement\\agreement.vue:73")),e.showToast({title:"下载成功",duration:3e3}))}})}}};t.default=n}).call(this,a("6e42")["default"],a("0de9")["default"])},a665:function(e,t,a){"use strict";a.r(t);var n=a("5629"),o=a("e3de");for(var r in o)"default"!==r&&function(e){a.d(t,e,function(){return o[e]})}(r);a("5db6");var u=a("2877"),s=Object(u["a"])(o["default"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},e3de:function(e,t,a){"use strict";a.r(t);var n=a("a0e9"),o=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);t["default"]=o.a}},[["10fd","common/runtime","common/vendor"]]]);
});
require('pages/agreement/agreement.js');
__wxRoute = 'pages/otherLogin/otherLogin';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/otherLogin/otherLogin.js';

define('pages/otherLogin/otherLogin.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/otherLogin/otherLogin"],{"6fb9":function(e,t,o){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{phone:"",code:"",iscode:"",codename:" 获取验证码",disabled:!1}},methods:{getPhoneValue:function(e){11==e.detail.value.length&&(this.disabled=!1),this.phone=e.detail.value},getCodeValue:function(e){this.code=e.detail.value},getCode:function(){var t=this,n=/^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;return""==t.phone?(e.showToast({title:"手机号不能为空",icon:"none",duration:1e3}),!1):n.test(t.phone)?void e.request({method:"POST",data:{mobile:t.phone},url:t.url+"users/forgot/sms/",header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(n){console.log(o(n," at pages\\otherLogin\\otherLogin.vue:74"));var a=n.statusCode;if(200==a){t.iscode=n.data.data;var i=61,u=setInterval(function(){i--,i<=0?(clearInterval(u),t.codename="重新发送",t.disabled=!1):(t.codename=i+"s",t.disabled=!0)},1e3)}else{if(400==a)return e.showToast({title:"用户不存在",icon:"none",duration:2e3}),!1;if(411==a)return e.showToast({title:"操作太频繁，请稍候重试",icon:"none",duration:2e3}),!1}}}):(e.showToast({title:"请输入正确的手机号",icon:"none",duration:1e3}),!1)},getCodeNumber:function(e){this.getCode()},login:function(){var t=this,n=/^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;return""==t.phone?(e.showToast({title:"手机号不能为空",icon:"none",duration:1e3}),!1):n.test(t.phone)?""==t.code?(e.showToast({title:"验证码不能为空",icon:"none",duration:1e3}),!1):t.code!=t.iscode?(e.showToast({title:"验证码错误",icon:"none",duration:1e3}),!1):void e.request({url:t.url+"users/login/",method:"POST",data:{mobile:t.phone,code:t.code},success:function(n){console.log(o(n," at pages\\otherLogin\\otherLogin.vue:155")),e.setStorageSync("phone",t.phone),e.setStorageSync("token",n.data.data),t.global_.phone=t.phone,t.global_.token=n.data.data,400==n.statusCode&&e.showToast({title:"验证码不正确",icon:"none"}),200==n.statusCode&&e.switchTab({url:"../index/index"})}}):(e.showToast({title:"请输入正确的手机号",icon:"none",duration:1e3}),!1)}}};t.default=n}).call(this,o("6e42")["default"],o("0de9")["default"])},"7bd8":function(e,t,o){"use strict";o.r(t);var n=o("d413"),a=o("a71c");for(var i in a)"default"!==i&&function(e){o.d(t,e,function(){return a[e]})}(i);o("cb49");var u=o("2877"),s=Object(u["a"])(a["default"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},a71c:function(e,t,o){"use strict";o.r(t);var n=o("6fb9"),a=o.n(n);for(var i in n)"default"!==i&&function(e){o.d(t,e,function(){return n[e]})}(i);t["default"]=a.a},b77f:function(e,t,o){},cb49:function(e,t,o){"use strict";var n=o("b77f"),a=o.n(n);a.a},d413:function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},a=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return a})},e996:function(e,t,o){"use strict";(function(e){o("9c0b"),o("921b");n(o("66fd"));var t=n(o("7bd8"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("6e42")["createPage"])}},[["e996","common/runtime","common/vendor"]]]);
});
require('pages/otherLogin/otherLogin.js');
__wxRoute = 'pages/news/news';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/news/news.js';

define('pages/news/news.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news/news"],{2447:function(n,t,c){},6532:function(n,t,c){},"808d":function(n,t,c){"use strict";(function(n){c("9c0b"),c("921b");e(c("66fd"));var t=e(c("8d8c"));function e(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,c("6e42")["createPage"])},"8d8c":function(n,t,c){"use strict";c.r(t);var e=c("cbba"),u=c("db0f");for(var r in u)"default"!==r&&function(n){c.d(t,n,function(){return u[n]})}(r);c("ce9c");var a=c("2877"),f=Object(a["a"])(u["default"],e["a"],e["b"],!1,null,null,null);t["default"]=f.exports},cbba:function(n,t,c){"use strict";var e=function(){var n=this,t=n.$createElement;n._self._c},u=[];c.d(t,"a",function(){return e}),c.d(t,"b",function(){return u})},ce9c:function(n,t,c){"use strict";var e=c("6532"),u=c.n(e);u.a},db0f:function(n,t,c){"use strict";c.r(t);var e=c("2447"),u=c.n(e);for(var r in e)"default"!==r&&function(n){c.d(t,n,function(){return e[n]})}(r);t["default"]=u.a}},[["808d","common/runtime","common/vendor"]]]);
});
require('pages/news/news.js');
__wxRoute = 'pages/web1/web1';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/web1/web1.js';

define('pages/web1/web1.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/web1/web1"],{"14e7":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return r})},"744d":function(n,t,e){"use strict";(function(n){e("9c0b"),e("921b");u(e("66fd"));var t=u(e("8546"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},8546:function(n,t,e){"use strict";e.r(t);var u=e("14e7"),r=e("d848");for(var a in r)"default"!==a&&function(n){e.d(t,n,function(){return r[n]})}(a);var o=e("2877"),c=Object(o["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=c.exports},d3d0:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{url:""}},onLoad:function(n){this.url=n.url}};t.default=u},d848:function(n,t,e){"use strict";e.r(t);var u=e("d3d0"),r=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=r.a}},[["744d","common/runtime","common/vendor"]]]);
});
require('pages/web1/web1.js');
__wxRoute = 'pages/web2/web2';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/web2/web2.js';

define('pages/web2/web2.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/web2/web2"],{"03a2":function(n,t,e){"use strict";e.r(t);var u=e("ca12"),r=e("6e74");for(var a in r)"default"!==a&&function(n){e.d(t,n,function(){return r[n]})}(a);var c=e("2877"),o=Object(c["a"])(r["default"],u["a"],u["b"],!1,null,null,null);t["default"]=o.exports},"5c43":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{url:""}},onLoad:function(n){this.url=n.url}};t.default=u},"6e74":function(n,t,e){"use strict";e.r(t);var u=e("5c43"),r=e.n(u);for(var a in u)"default"!==a&&function(n){e.d(t,n,function(){return u[n]})}(a);t["default"]=r.a},"8b15":function(n,t,e){"use strict";(function(n){e("9c0b"),e("921b");u(e("66fd"));var t=u(e("03a2"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},ca12:function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return r})}},[["8b15","common/runtime","common/vendor"]]]);
});
require('pages/web2/web2.js');
__wxRoute = 'pages/banner/banner';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/banner/banner.js';

define('pages/banner/banner.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/banner/banner"],{"0103":function(n,t,e){},"088f":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{ction:"",aa:""}},onLoad:function(t){this.ction=t.content,this.aa=this.ction.replace(/_/g,"="),console.log(n(this.aa," at pages\\banner\\banner.vue:19"))}};t.default=e}).call(this,e("0de9")["default"])},"29dd":function(n,t,e){"use strict";e.r(t);var a=e("ae03"),u=e("e8d4");for(var o in u)"default"!==o&&function(n){e.d(t,n,function(){return u[n]})}(o);e("36d7");var r=e("2877"),c=Object(r["a"])(u["default"],a["a"],a["b"],!1,null,null,null);t["default"]=c.exports},"36d7":function(n,t,e){"use strict";var a=e("0103"),u=e.n(a);u.a},8253:function(n,t,e){"use strict";(function(n){e("9c0b"),e("921b");a(e("66fd"));var t=a(e("29dd"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},ae03:function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return u})},e8d4:function(n,t,e){"use strict";e.r(t);var a=e("088f"),u=e.n(a);for(var o in a)"default"!==o&&function(n){e.d(t,n,function(){return a[n]})}(o);t["default"]=u.a}},[["8253","common/runtime","common/vendor"]]]);
});
require('pages/banner/banner.js');
__wxRoute = 'pages/banner2/banner2';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/banner2/banner2.js';

define('pages/banner2/banner2.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/banner2/banner2"],{"425f":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{title:"",cont:"",add:"",volume:""}},onLoad:function(t){this.title=t.title,this.cont=t.cont,this.add=t.add,this.volume=t.volume}};n.default=a},"953e":function(t,n,e){"use strict";(function(t){e("9c0b"),e("921b");a(e("66fd"));var n=a(e("bab8"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"99c4":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return u})},a23a:function(t,n,e){"use strict";e.r(n);var a=e("425f"),u=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);n["default"]=u.a},a8fd:function(t,n,e){},bab8:function(t,n,e){"use strict";e.r(n);var a=e("99c4"),u=e("a23a");for(var o in u)"default"!==o&&function(t){e.d(n,t,function(){return u[t]})}(o);e("d20f");var r=e("2877"),c=Object(r["a"])(u["default"],a["a"],a["b"],!1,null,null,null);n["default"]=c.exports},d20f:function(t,n,e){"use strict";var a=e("a8fd"),u=e.n(a);u.a}},[["953e","common/runtime","common/vendor"]]]);
});
require('pages/banner2/banner2.js');
__wxRoute = 'mill/mill/mill';__wxRouteBegin = true;__wxAppCurrentFile__ = 'mill/mill/mill.js';

define('mill/mill/mill.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["mill/mill/mill"],{"09b1":function(e,t,a){"use strict";(function(e){a("9c0b"),a("921b");n(a("66fd"));var t=n(a("a7e0"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},2464:function(e,t,a){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{many:"0",user_id:[],flag:!1,greed:"去阅读",cancl:"取消",lerst:"若不阅读和同意协议,无法使用此功能",selectilall:!1,deoor:!1,stus:"",shade:!1,shade1:!1,machine_id:"",lo:!1,arr:[],isSelected:!1,checkbox:[{value:"A",checked:!1}]}},onShow:function(t){var n=this;e.request({url:this.url+"mainmachine/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){console.log(a(e," at mill\\mill\\mill.vue:107")),n.user_id=e.data.data,205==e.statusCode&&(n.flag=!0),n.many=e.data.data.length,console.log(a(n.many," at mill\\mill\\mill.vue:113")),0==n.many?n.flag=!0:n.flag=!1}})},onHide:function(){this.shade=!1},methods:{pay:function(){e.navigateTo({url:"../pay/pay"})},sale:function(){e.navigateTo({url:"../sale/sale"})},CheckboxChange:function(e){var t=this;t.arr=[];for(var a=0;a<t.user_id.length;a++)t.user_id.checked=!1;for(var n=t.user_id,l=e.detail.value,s=0,i=n.length;s<i;++s){n.checked=!0;for(var u=0,r=l.length;u<r;++u)if(n[s].number==l[u]){n.checked=!0,t.arr.push(n[s].machine_id);break}}},btn2:function(){var t=this,n=t.arr.join(",");console.log(a(n," at mill\\mill\\mill.vue:160")),e.request({url:this.url+"buildorders/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{machine_id_list:n},success:function(n){if(console.log(a(n," at mill\\mill\\mill.vue:172")),console.log(a(t.shade," at mill\\mill\\mill.vue:173")),410==n.statusCode)t.shade=!0,t.stus=n.statusCode;else if(0==t.arr.length)return e.showToast({title:"请选择矿机",icon:"none"}),!1;if(401==n.statusCode)return t.stus=n.statusCode,t.lerst="未进行实名认证",t.greed="去验证",t.shade=!0,!1;if(302==n.statusCode)return t.stus=n.statusCode,t.shade1=!0,!1;if(400==n.statusCode)return t.stus=n.statusCode,t.lerst="未设置交易密码",t.greed="去设置",t.shade=!0,!1;if(200==n.statusCode){var l=JSON.stringify(n.data.data);e.navigateTo({url:"../sell/sell?tar="+l})}}})},sure:function(){400==this.stus&&e.switchTab({url:"../../my/my/my"}),410==this.stus&&e.navigateTo({url:"../../pages/agreement/agreement"}),401==this.stus&&e.navigateTo({url:"../../my/identity/identity"}),302==this.stus&&(this.shade1=!1)},cancel:function(){this.shade=!1}}};t.default=n}).call(this,a("6e42")["default"],a("0de9")["default"])},"6c9f":function(e,t,a){},a0ae:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},l=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return l})},a3c0:function(e,t,a){"use strict";var n=a("6c9f"),l=a.n(n);l.a},a7e0:function(e,t,a){"use strict";a.r(t);var n=a("a0ae"),l=a("fb6d");for(var s in l)"default"!==s&&function(e){a.d(t,e,function(){return l[e]})}(s);a("a3c0");var i=a("2877"),u=Object(i["a"])(l["default"],n["a"],n["b"],!1,null,null,null);t["default"]=u.exports},fb6d:function(e,t,a){"use strict";a.r(t);var n=a("2464"),l=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);t["default"]=l.a}},[["09b1","common/runtime","common/vendor"]]]);
});
require('mill/mill/mill.js');
__wxRoute = 'mill/pay/pay';__wxRouteBegin = true;__wxAppCurrentFile__ = 'mill/pay/pay.js';

define('mill/pay/pay.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["mill/pay/pay"],{"325f":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c},r=[];e.d(a,"a",function(){return n}),e.d(a,"b",function(){return r})},"32da":function(t,a,e){"use strict";e.r(a);var n=e("9435"),r=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(a,t,function(){return n[t]})}(o);a["default"]=r.a},"36f7":function(t,a,e){"use strict";(function(t){e("9c0b"),e("921b");n(e("66fd"));var a=n(e("53b8"));function n(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("6e42")["createPage"])},"483a":function(t,a,e){"use strict";var n=e("622b"),r=e.n(n);r.a},"53b8":function(t,a,e){"use strict";e.r(a);var n=e("325f"),r=e("32da");for(var o in r)"default"!==o&&function(t){e.d(a,t,function(){return r[t]})}(o);e("483a");var u=e("2877"),s=Object(u["a"])(r["default"],n["a"],n["b"],!1,null,null,null);a["default"]=s.exports},"622b":function(t,a,e){},9435:function(t,a,e){"use strict";(function(t,e){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{many:"0",tabCurrentIndex:0,contion:"",daker:"",lornd:"",kolo:"",flag:!1,navList:[{state:0,text:"待付款"},{state:1,text:"待确认"},{state:2,text:"待审核"},{state:3,text:"已完成"}]}},onLoad:function(a){var e=this;this.getData(),t.request({url:this.url+"ordernum/1",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(t){e.many=t.data.data}})},methods:{getData:function(){var a=this;t.request({url:this.url+"buyall/101",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(t){console.log(e(t," at mill\\pay\\pay.vue:217"));var n=t.data.data;a.contion=n.reverse()}})},tabClick:function(a){var n=this;if(this.tabCurrentIndex===a)return!1;n.tabCurrentIndex=a,1===this.tabCurrentIndex&&t.request({url:this.url+"buyall/102",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(t){console.log(e(t," at mill\\pay\\pay.vue:238"));var a=t.data.data;n.kolo=a.reverse()}}),2===this.tabCurrentIndex&&t.request({url:this.url+"buyall/103",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(t){var a=t.data.data;n.lornd=a.reverse()}}),3===this.tabCurrentIndex&&t.request({url:this.url+"buyall/104",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(t){var a=t.data.data;n.daker=a.reverse()}})},btn:function(a){t.request({url:this.url+"salemessage/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{order_num:a.order_num},success:function(a){console.log(e(a," at mill\\pay\\pay.vue:283"));var n=JSON.stringify(a.data.data);t.navigateTo({url:"../staypay/staypay?mvvp="+n})}})},bt:function(a){var e=this;t.request({url:this.url+"ordercancel/",method:"POST",header:{Authorization:"JWT "+this.global_.token},data:{order_num:a.order_num},success:function(a){200==a.statusCode?t.showToast({title:"取消成功",icon:"none",duration:2e3}):400==a.statusCode&&t.showToast({title:"该订单不可删除",icon:"none",duration:2e3}),e.getData()}})},btn2:function(a){t.request({url:this.url+"salemessage/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{order_num:a.order_num},success:function(a){console.log(e(a," at mill\\pay\\pay.vue:333"));var n=JSON.stringify(a.data.data);t.navigateTo({url:"../stayconfirm/stayconfirm?main="+n})}})},btn3:function(a){t.request({url:this.url+"salemessage/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{order_num:a.order_num},success:function(a){console.log(e(a," at mill\\pay\\pay.vue:353"));var n=JSON.stringify(a.data.data);t.navigateTo({url:"../stayaudit/stayaudit?dospp="+n})}})},btn4:function(a){t.request({url:this.url+"salemessage/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{order_num:a.order_num},success:function(a){var e=JSON.stringify(a.data.data);t.navigateTo({url:"../completed/completed?deattr="+e})}})}}};a.default=n}).call(this,e("6e42")["default"],e("0de9")["default"])}},[["36f7","common/runtime","common/vendor"]]]);
});
require('mill/pay/pay.js');
__wxRoute = 'mill/staypay/staypay';__wxRouteBegin = true;__wxAppCurrentFile__ = 'mill/staypay/staypay.js';

define('mill/staypay/staypay.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["mill/staypay/staypay"],{2592:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return a})},"383c":function(t,n,e){},"496d":function(t,n,e){"use strict";e.r(n);var o=e("50a4"),a=e.n(o);for(var s in o)"default"!==s&&function(t){e.d(n,t,function(){return o[t]})}(s);n["default"]=a.a},"50a4":function(t,n,e){"use strict";(function(t,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("f7ed"),s=function(){return Promise.all([e.e("common/vendor"),e.e("components/keyboard-package/keyboard-package")]).then(e.bind(null,"bd7f"))},r=function(){return Promise.all([e.e("common/vendor"),e.e("components/password-input/password-input")]).then(e.bind(null,"d391"))},i={data:function(){return{laiqi:"",type1:"买入",state:"",price:"",vior:"",x:"",rmb:"",numberList:[],length:6,type:"number",passIn:!1,frte:!0,checkall:"展示完整信息"}},components:{keyboardPackage:s,passwordInput:r},onLoad:function(n){var e=this,o=JSON.parse(n.mvvp);e.ction=o,console.log(t(123," at mill\\staypay\\staypay.vue:125"));e.ction[1];e.vior=e.ction[1],e.state=o[0][0].order_status,101==e.state&&(e.state="待付款"),e.laiqi=e.ction[0][0],e.price=e.laiqi.sale_money,e.x=e.laiqi.order_num,e.rmb=a.getrmb(e.price)},methods:{clo:function(){this.passIn=!1,this.$refs["number"].close(),this.numberList.length=0},onChange:function(n){console.log(t(n.show," at mill\\staypay\\staypay.vue:145")),0==n.show&&(this.passIn=!1),this.numberList.length=0},onDelete:function(){this.numberList.pop()},onConfirm:function(){6!=this.numberList.length&&o.showToast({title:"请输入六位交易密码！",duration:2e3,icon:"none"})},onInput:function(n){var e=this;e.numberList.push(n),e.password=e.numberList.join().replace(/,/g,""),e.numberList.length>=e.length&&(o.request({url:e.url+"buyaffirm/",method:"POST",data:{order_num:e.x,password:e.password},header:{Authorization:"JWT "+e.global_.token},success:function(n){if(console.log(t(e.order_num," at mill\\staypay\\staypay.vue:179")),400==n.statusCode){e.numberList.pop(),e.numberList.length=0,e.$refs.wrong.flag=!1;var a=n.data.data.err_num,s=5-a;e.$refs.wrong.tip="剩余"+s+"次机会"}423==n.statusCode&&o.showToast({title:"交易密码已锁定,请在今日24:00后进行交易",icon:"none",duration:2e3}),201==n.statusCode&&(e.success=!0),200==n.statusCode&&(e.passIn=!1,e.$refs["number"].close(),o.showToast({title:"付款完成",duration:2e3}),o.navigateBack({delta:2})),400==n.statusCode&&o.showModal({title:"未设置交易密码",confirmText:"去设置",success:function(t){1==t.confirm&&o.navigateTo({url:"../../my/trade-password/trade-password"})}});getCurrentPages().pop()}}),this.numberList.length=0)},btn:function(){this.passIn=!0,this.$refs["number"].open(),this.onInput(val)},btn1:function(){var t=this;t.frte=!t.frte,0==t.frte?t.checkall="收起":t.checkall="展示完整信息"}}};n.default=i}).call(this,e("0de9")["default"],e("6e42")["default"])},8195:function(t,n,e){"use strict";var o=e("383c"),a=e.n(o);a.a},"8c9d":function(t,n,e){"use strict";(function(t){e("9c0b"),e("921b");o(e("66fd"));var n=o(e("c3cf"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},c3cf:function(t,n,e){"use strict";e.r(n);var o=e("2592"),a=e("496d");for(var s in a)"default"!==s&&function(t){e.d(n,t,function(){return a[t]})}(s);e("8195");var r=e("2877"),i=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=i.exports}},[["8c9d","common/runtime","common/vendor"]]]);
});
require('mill/staypay/staypay.js');
__wxRoute = 'mill/stayconfirm/stayconfirm';__wxRouteBegin = true;__wxAppCurrentFile__ = 'mill/stayconfirm/stayconfirm.js';

define('mill/stayconfirm/stayconfirm.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["mill/stayconfirm/stayconfirm"],{2886:function(t,e,n){},"4c17":function(t,e,n){"use strict";n.r(e);var a=n("bf5d"),r=n("e158");for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);n("ff28");var f=n("2877"),u=Object(f["a"])(r["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},"5b4c":function(t,e,n){"use strict";(function(t){n("9c0b"),n("921b");a(n("66fd"));var e=a(n("4c17"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"8b0e":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("f7ed"),r={data:function(){return{remark:"",type:"买入",state:"",price:"",rmb:"",fanta:"",ig:"",frte:!0,checkall:"展示完整信息"}},onLoad:function(e){var n=this,r=JSON.parse(e.main);n.fanta=r,console.log(t(n.fanta," at mill\\stayconfirm\\stayconfirm.vue:109"));n.fanta[1];n.ig=n.fanta[1],n.state=r[0][0].order_status,102==n.state&&(n.state="待确认"),n.remark=r[0][0],n.price=n.remark.sale_money,n.rmb=a.getrmb(n.price)},methods:{btn:function(){var t=this;t.frte=!t.frte,0==t.frte?t.checkall="收起":t.checkall="展示完整信息"}}};e.default=r}).call(this,n("0de9")["default"])},bf5d:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})},e158:function(t,e,n){"use strict";n.r(e);var a=n("8b0e"),r=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);e["default"]=r.a},ff28:function(t,e,n){"use strict";var a=n("2886"),r=n.n(a);r.a}},[["5b4c","common/runtime","common/vendor"]]]);
});
require('mill/stayconfirm/stayconfirm.js');
__wxRoute = 'mill/stayaudit/stayaudit';__wxRouteBegin = true;__wxAppCurrentFile__ = 'mill/stayaudit/stayaudit.js';

define('mill/stayaudit/stayaudit.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["mill/stayaudit/stayaudit"],{"33c0":function(t,e,n){"use strict";n.r(e);var r=n("4fc1"),a=n("c397");for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);n("37be");var u=n("2877"),i=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=i.exports},"37be":function(t,e,n){"use strict";var r=n("e596"),a=n.n(r);a.a},3853:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("f7ed"),a={data:function(){return{instant:"",type:"买入",state:"",cander:"",price:"",hberd:"",rmb:"",frte:!0,checkall:"展示完整信息"}},onLoad:function(t){var e=this,n=JSON.parse(t.dospp);e.cander=n;e.cander[1];e.hberd=e.cander[1],e.state=n[0][0].order_status,103==e.state&&(e.state="待审核"),e.instant=e.cander[0][0],e.price=e.instant.sale_money,e.rmb=r.getrmb(e.price)},methods:{btn:function(){var t=this;t.frte=!t.frte,0==t.frte?t.checkall="收起":t.checkall="展示完整信息"}}};e.default=a},"4fc1":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},"6d33":function(t,e,n){"use strict";(function(t){n("9c0b"),n("921b");r(n("66fd"));var e=r(n("33c0"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},c397:function(t,e,n){"use strict";n.r(e);var r=n("3853"),a=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e["default"]=a.a},e596:function(t,e,n){}},[["6d33","common/runtime","common/vendor"]]]);
});
require('mill/stayaudit/stayaudit.js');
__wxRoute = 'mill/completed/completed';__wxRouteBegin = true;__wxAppCurrentFile__ = 'mill/completed/completed.js';

define('mill/completed/completed.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["mill/completed/completed"],{"2ab4":function(t,e,n){"use strict";(function(t){n("9c0b"),n("921b");r(n("66fd"));var e=r(n("ff9b"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"53c2":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("f7ed"),a={data:function(){return{cprop:"",type:"买入",state:"",price:"",rmb:"",bsow:"",geunt:"",frte:!0,checkall:"展示完整信息"}},onLoad:function(t){var e=this,n=JSON.parse(t.deattr);e.bsow=n;e.bsow[1];e.geunt=e.bsow[1],e.state=n[0][0].order_status,104==e.state&&(e.state="已完成"),e.cprop=n[0][0],e.price=n[0][0].sale_money,e.rmb=r.getrmb(e.price)},methods:{btn:function(){var t=this;t.frte=!t.frte,0==t.frte?t.checkall="收起":t.checkall="展示完整信息"}}};e.default=a},"97cd":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},a891:function(t,e,n){"use strict";var r=n("f288"),a=n.n(r);a.a},af2c:function(t,e,n){"use strict";n.r(e);var r=n("53c2"),a=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e["default"]=a.a},f288:function(t,e,n){},ff9b:function(t,e,n){"use strict";n.r(e);var r=n("97cd"),a=n("af2c");for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);n("a891");var u=n("2877"),o=Object(u["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=o.exports}},[["2ab4","common/runtime","common/vendor"]]]);
});
require('mill/completed/completed.js');
__wxRoute = 'mill/sale/sale';__wxRouteBegin = true;__wxAppCurrentFile__ = 'mill/sale/sale.js';

define('mill/sale/sale.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["mill/sale/sale"],{1115:function(t,e,a){},3532:function(t,e,a){"use strict";a.r(e);var n=a("ccb0"),r=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);e["default"]=r.a},"68e4":function(t,e,a){"use strict";var n=a("1115"),r=a.n(n);r.a},"733d":function(t,e,a){"use strict";(function(t){a("9c0b"),a("921b");n(a("66fd"));var e=n(a("8dd8"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"8dd8":function(t,e,a){"use strict";a.r(e);var n=a("d274"),r=a("3532");for(var s in r)"default"!==s&&function(t){a.d(e,t,function(){return r[t]})}(s);a("68e4");var u=a("2877"),o=Object(u["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=o.exports},ccb0:function(t,e,a){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{flag:!1,many:"0",tabCurrentIndex:0,dater:"",ter:"",name:"",phone:"",title:"",delwen:"",delewen:"",ebti:"",navList:[{state:0,text:"待付款"},{state:1,text:"待确认"},{state:2,text:"待审核"},{state:3,text:"已完成"}]}},onLoad:function(e){var a=this;t.request({url:this.url+"saleall/101",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(t){var e=t.data.data;a.dater=e.reverse()}}),t.request({url:this.url+"ordernum/2",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(t){a.many=t.data.data}})},methods:{obtainOrderNum:function(t){var e=this;e.ebit=t},getPhoneValue:function(t){this.phone=t.detail.value},tabClick:function(e){var a=this;if(this.tabCurrentIndex===e)return!1;if(a.tabCurrentIndex=e,0===this.tabCurrentIndex){a=this;t.request({url:this.url+"saleall/101",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(t){var e=t.data.data;a.dater=e.reverse()}})}if(1===this.tabCurrentIndex){a=this;t.request({url:this.url+"saleall/102",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(t){var e=t.data.data;a.ter=e.reverse()}})}if(2===this.tabCurrentIndex){a=this;t.request({url:this.url+"saleall/103",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(t){var e=t.data.data;a.delwen=e.reverse()}})}if(3===this.tabCurrentIndex){a=this;t.request({url:this.url+"saleall/104",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(t){var e=t.data.data;a.delewen=e.reverse()}})}},btn:function(e){console.log(a(e," at mill\\sale\\sale.vue:301"));t.request({url:this.url+"salemessage/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{order_num:e.order_num},success:function(e){console.log(a(e," at mill\\sale\\sale.vue:313"));var n=JSON.stringify(e.data.data);t.navigateTo({url:"../salepay/salepay?aser="+n})}})},btn1:function(e){t.request({url:this.url+"salemessage/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{order_num:e.order_num},success:function(e){var a=JSON.stringify(e.data.data);t.navigateTo({url:"../saleconfirm/saleconfirm?mvp="+a})}})},btn2:function(e){t.request({url:this.url+"salemessage/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{order_num:e.order_num},success:function(e){var a=JSON.stringify(e.data.data);t.navigateTo({url:"../saleaudit/saleaudit?suxang="+a})}})},btn3:function(e){t.request({url:this.url+"salemessage/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{order_num:e.order_num},success:function(e){var a=JSON.stringify(e.data.data);t.navigateTo({url:"../salecompleted/salecompleted?cshug="+a})}})},butto:function(){var t=this;t.flag=!0,t.arr=[]},deer:function(){var e=this;t.request({url:this.url+"orderappeal/",method:"POST",header:{Authorization:"JWT "+this.global_.token},data:{info:e.phone,order_num:e.ebit},success:function(a){200==a.statusCode?(e.flag=!1,t.showToast({title:"已提交您的"})):400==a.statusCode&&(t.showToast({title:"该订单不可申诉",icon:"none"}),e.flag=!1)}})}}};e.default=n}).call(this,a("6e42")["default"],a("0de9")["default"])},d274:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},r=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return r})}},[["733d","common/runtime","common/vendor"]]]);
});
require('mill/sale/sale.js');
__wxRoute = 'mill/salepay/salepay';__wxRouteBegin = true;__wxAppCurrentFile__ = 'mill/salepay/salepay.js';

define('mill/salepay/salepay.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["mill/salepay/salepay"],{"1f09":function(t,e,n){},"2fd7":function(t,e,n){"use strict";n.r(e);var a=n("f8bc"),r=n("b248");for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);n("67bb");var c=n("2877"),f=Object(c["a"])(r["default"],a["a"],a["b"],!1,null,null,null);e["default"]=f.exports},"46ab":function(t,e,n){"use strict";(function(t){n("9c0b"),n("921b");a(n("66fd"));var e=a(n("2fd7"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"67bb":function(t,e,n){"use strict";var a=n("1f09"),r=n.n(a);r.a},b248:function(t,e,n){"use strict";n.r(e);var a=n("b8e7"),r=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=r.a},b8e7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("f7ed"),r={data:function(){return{labnrv:"",type:"卖单",datn:"",state:"",stw:"",price:"",rmb:"",frte:!0,checkall:"展示完整信息"}},onLoad:function(t){var e=this,n=JSON.parse(t.aser);e.datn=n;e.datn[1];e.stw=e.datn[1],e.labnrv=e.datn[0][0],e.state=e.datn[0][0].order_status,e.price=e.datn[0][0].sale_money,101==e.state&&(e.state="待付款"),e.rmb=a.getrmb(e.price)},methods:{btn:function(){var t=this;t.frte=!t.frte,0==t.frte?t.checkall="收起":t.checkall="展示完整信息"}}};e.default=r},f8bc:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return r})}},[["46ab","common/runtime","common/vendor"]]]);
});
require('mill/salepay/salepay.js');
__wxRoute = 'mill/saleconfirm/saleconfirm';__wxRouteBegin = true;__wxAppCurrentFile__ = 'mill/saleconfirm/saleconfirm.js';

define('mill/saleconfirm/saleconfirm.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["mill/saleconfirm/saleconfirm"],{"2df2":function(t,n,e){"use strict";(function(t){e("9c0b"),e("921b");o(e("66fd"));var n=o(e("6803"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},6803:function(t,n,e){"use strict";e.r(n);var o=e("a76c"),s=e("cb3f");for(var a in s)"default"!==a&&function(t){e.d(n,t,function(){return s[t]})}(a);e("dc4c");var r=e("2877"),u=Object(r["a"])(s["default"],o["a"],o["b"],!1,null,null,null);n["default"]=u.exports},"69c7":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("f7ed"),s=function(){return Promise.all([e.e("common/vendor"),e.e("components/keyboard-package/keyboard-package")]).then(e.bind(null,"bd7f"))},a=function(){return Promise.all([e.e("common/vendor"),e.e("components/password-input/password-input")]).then(e.bind(null,"d391"))},r={data:function(){return{taste:"",type1:"卖出",state:"",boe:"",price:"",x:"",rmb:"",numberList:[],length:6,type:"number",passIn:!1,frte:!0,checkall:"展示完整信息"}},components:{keyboardPackage:s,passwordInput:a},onLoad:function(t){var n=this,e=JSON.parse(t.mvp);n.vn=e;n.vn[1];n.boe=n.vn[1],n.state=e[0][0].order_status,102==n.state&&(n.state="已确认"),n.taste=n.vn[0][0],n.x=n.taste.order_num,n.price=n.taste.sale_money,n.rmb=o.getrmb(n.price)},methods:{clo:function(){this.passIn=!1,this.$refs["number"].close(),this.numberList.length=0},onDelete:function(){this.numberList.pop()},onChange:function(t){0==t.show&&(this.passIn=!1),this.numberList.length=0},onConfirm:function(){6!=this.numberList.length&&t.showToast({title:"请输入六位交易密码！",duration:2e3,icon:"none"})},onInput:function(n){var e=this;e.numberList.push(n),e.password=e.numberList.join().replace(/,/g,""),e.numberList.length>=e.length&&(t.request({url:e.url+"saleaffirm/",method:"POST",data:{order_num:e.x,password:e.password},header:{Authorization:"JWT "+this.global_.token},success:function(n){if(400==n.statusCode){e.numberList.pop(),e.numberList.length=0,e.$refs.wrong.flag=!1;var o=n.data.data.err_num,s=5-o;e.$refs.wrong.tip="剩余"+s+"次机会"}423==n.statusCode&&t.showToast({title:"交易密码已锁定,请在今日24:00后进行交易",icon:"none",duration:2e3}),201==n.statusCode&&(e.success=!0),200==n.statusCode&&(t.showToast({title:"收款完成",icon:"none",duration:2e3}),t.navigateBack({url:"../sale/sale"}));var a=getCurrentPages().pop();void 0!=a&&null!=a&&a.onLoad(e.val)}}),this.numberList.length=0)},btn:function(){this.passIn=!0,this.$refs["number"].open(),this.onInput(val)},btn1:function(){var t=this;t.frte=!t.frte,0==t.frte?t.checkall="收起":t.checkall="展示完整信息"}}};n.default=r}).call(this,e("6e42")["default"])},"80ab":function(t,n,e){},a76c:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},s=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return s})},cb3f:function(t,n,e){"use strict";e.r(n);var o=e("69c7"),s=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);n["default"]=s.a},dc4c:function(t,n,e){"use strict";var o=e("80ab"),s=e.n(o);s.a}},[["2df2","common/runtime","common/vendor"]]]);
});
require('mill/saleconfirm/saleconfirm.js');
__wxRoute = 'mill/saleaudit/saleaudit';__wxRouteBegin = true;__wxAppCurrentFile__ = 'mill/saleaudit/saleaudit.js';

define('mill/saleaudit/saleaudit.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["mill/saleaudit/saleaudit"],{"2a73":function(t,n,e){"use strict";e.r(n);var a=e("8bc4"),i=e("e28b");for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);e("33b3");var r=e("2877"),c=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,null,null);n["default"]=c.exports},"33b3":function(t,n,e){"use strict";var a=e("90f3"),i=e.n(a);i.a},"4bc3":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("f7ed"),i={data:function(){return{type:"卖出",vinda:"",state:"",price:"",rmb:"",clorn:"",frte:!0,checkall:"展示完整信息",information:""}},onLoad:function(n){var e=this,i=JSON.parse(n.suxang);e.vinda=i,console.log(t(e.vinda," at mill\\saleaudit\\saleaudit.vue:112"));e.vinda[1];e.clorn=e.vinda[1],e.state=i[0][0].order_status,103==e.state&&(e.state="待确认"),e.information=e.vinda[0][0],console.log(t(e.information," at mill\\saleaudit\\saleaudit.vue:120")),e.price=e.vinda[0][0].sale_money,e.rmb=a.getrmb(e.price)},methods:{btn:function(){var t=this;t.frte=!t.frte,0==t.frte?t.checkall="收起":t.checkall="展示完整信息"}}};n.default=i}).call(this,e("0de9")["default"])},"8bc4":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})},"90f3":function(t,n,e){},bff6:function(t,n,e){"use strict";(function(t){e("9c0b"),e("921b");a(e("66fd"));var n=a(e("2a73"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},e28b:function(t,n,e){"use strict";e.r(n);var a=e("4bc3"),i=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);n["default"]=i.a}},[["bff6","common/runtime","common/vendor"]]]);
});
require('mill/saleaudit/saleaudit.js');
__wxRoute = 'mill/salecompleted/salecompleted';__wxRouteBegin = true;__wxAppCurrentFile__ = 'mill/salecompleted/salecompleted.js';

define('mill/salecompleted/salecompleted.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["mill/salecompleted/salecompleted"],{6512:function(t,e,n){},"67cd":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},c=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return c})},6806:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("f7ed"),c={data:function(){return{type:"卖出",state:"",price:"",rmb:"",coffee:"",nuecv:"",italn:"",frte:!0,checkall:"展示完整信息"}},onLoad:function(t){var e=this,n=JSON.parse(t.cshug);e.italn=n;e.italn[1];e.nuecv=e.italn[1],e.state=n[0][0].order_status,104==e.state&&(e.state="已完成"),e.coffee=n[0][0],e.price=n[0][0].sale_money,e.rmb=a.getrmb(e.price)},methods:{btn:function(){var t=this;t.frte=!t.frte,0==t.frte?t.checkall="收起":t.checkall="展示完整信息"}}};e.default=c},"6d36":function(t,e,n){"use strict";n.r(e);var a=n("6806"),c=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=c.a},"8a9e":function(t,e,n){"use strict";(function(t){n("9c0b"),n("921b");a(n("66fd"));var e=a(n("a24d"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"943f":function(t,e,n){"use strict";var a=n("6512"),c=n.n(a);c.a},a24d:function(t,e,n){"use strict";n.r(e);var a=n("67cd"),c=n("6d36");for(var r in c)"default"!==r&&function(t){n.d(e,t,function(){return c[t]})}(r);n("943f");var u=n("2877"),f=Object(u["a"])(c["default"],a["a"],a["b"],!1,null,null,null);e["default"]=f.exports}},[["8a9e","common/runtime","common/vendor"]]]);
});
require('mill/salecompleted/salecompleted.js');
__wxRoute = 'mill/assets/assets';__wxRouteBegin = true;__wxAppCurrentFile__ = 'mill/assets/assets.js';

define('mill/assets/assets.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["mill/assets/assets"],{"2d13":function(t,e,a){"use strict";(function(t){a("9c0b"),a("921b");n(a("66fd"));var e=n(a("41e0"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"41e0":function(t,e,a){"use strict";a.r(e);var n=a("d7ee"),o=a("a73e");for(var r in o)"default"!==r&&function(t){a.d(e,t,function(){return o[t]})}(r);a("ad53");var i=a("2877"),s=Object(i["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=s.exports},"51af":function(t,e,a){},a73e:function(t,e,a){"use strict";a.r(e);var n=a("c111"),o=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e["default"]=o.a},ad53:function(t,e,a){"use strict";var n=a("51af"),o=a.n(n);o.a},c111:function(t,e,a){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){return a.e("common/dy-Date").then(a.bind(null,"f716"))},r={data:function(){return{num:"",ber:"",nuber:"",fee:"",month_profit:"0",numm:"",tabCurrentIndex:0,add_item:"",profit:"0",entin:"",flag:!1,ention:"",index:0,navList:[{state:0,text:"收入记录"},{state:1,text:"支出记录"}],date:"本月",date1:"本月",teran:""}},components:{dyDatePicker:o},onShow:function(e){var a=this,o=new Date,r=o.getFullYear("-"),i=o.getMonth()+1,s=r+"-"+i;a.teran=s,t.request({url:this.url+"assets/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(t){a.num=t.data.fil_count,a.ber=t.data.availed_num,a.nuber=t.data.locked_num,a.fee=t.data.fee}}),t.request({url:this.url+"assets/month/profit/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{month:s},success:function(t){console.log(n(t," at mill\\assets\\assets.vue:150"));var e=t.data.data,o=t.data.data.profit_records;a.ention=o,0==o.length?a.flag=!0:a.flag=!1,a.month_profit=e.month_profit}})},methods:{tabClick:function(e){var a=this,o=new Date,r=o.getFullYear("-"),i=o.getMonth()+1,s=r+"-"+i;if(a.teran=s,this.tabCurrentIndex===e)return!1;a.tabCurrentIndex=e,0===this.tabCurrentIndex&&(a.date="本月",t.request({url:this.url+"assets/month/profit/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{month:s},success:function(t){var e=t.data.data,o=t.data.data.profit_records;a.ention=o,console.log(n(o," at mill\\assets\\assets.vue:190")),0==o.length?a.flag=!0:a.flag=!1,a.month_profit=e.month_profit}})),1===this.tabCurrentIndex&&(a.date1="本月",t.request({url:this.url+"assets/month/bill/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{month:s},success:function(t){var e=t.data.data,n=t.data.data.bill_records;a.entin=n,0==n.length?a.flag=!0:a.flag=!1,a.profit=e.month_bill}}))},bindChange:function(t){var e=t.detail.value;this.year=this.years[e[0]],this.month=this.months[e[1]],this.day=this.days[e[2]]},btn:function(){t.navigateTo({url:"/my/transfer/transfer?bar="+this.ber+"&fee="+this.fee})},optionTap:function(e){var a=this,n=e.currentTarget.dataset.index;this.selectData[n];this.index=n,this.selectShow=!this.selectShow,t.request({url:this.url+"month/profit/",method:"GET",data:{month:a.selectData[a.index]},header:{Authorization:"JWT "+this.global_.token},success:function(t){}})},DateChange:function(e){var a=this;a.date=e,t.request({url:this.url+"assets/month/profit/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{month:e},success:function(t){var e=t.data.data,n=t.data.data.profit_records;a.ention=n,0==n.length?a.flag=!0:a.flag=!1,a.month_profit=e.month_profit}})},DateChang:function(e){var a=this;this.date1=e,t.request({url:this.url+"assets/month/bill/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{month:e},success:function(t){var e=t.data.data,n=t.data.data.bill_records;a.entin=n,0==n.length?a.flag=!0:a.flag=!1,a.profit=e.month_bill}})},transfer:function(){t.navigateTo({url:"../transfer/transfer"})}}};e.default=r}).call(this,a("6e42")["default"],a("0de9")["default"])},d7ee:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return o})}},[["2d13","common/runtime","common/vendor"]]]);
});
require('mill/assets/assets.js');
__wxRoute = 'mill/sell/sell';__wxRouteBegin = true;__wxAppCurrentFile__ = 'mill/sell/sell.js';

define('mill/sell/sell.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["mill/sell/sell"],{6511:function(t,n,a){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=a("f7ed"),i={data:function(){return{san:"",sun:"",data:"",total_price:"",machine_id:"",arr:[]}},onLoad:function(t){var n=[],a=this,e=JSON.parse(t.tar);a.data=e,a.san=e.length;for(var i=0;i<a.data.length;i++)n.push(a.data[i].machine_id);this.arr=n},onBackPress:function(t){plus.key.hideSoftKeybord()},methods:{getPriceValue:function(t){this.total_price;this.total_price=t.detail.value,this.sun=e.getrmb(t.detail.value)},btn:function(){var n=this,a=JSON.stringify(n.san),e=JSON.stringify(n.total_price),i=n.arr.join(","),r=JSON.stringify(i);""==n.total_price?t.showToast({title:"总价不能为空",icon:"none"}):t.navigateTo({url:"../validation/validation?app="+r+"&sunt="+a+"&tilo="+e})}}};n.default=i}).call(this,a("6e42")["default"])},7441:function(t,n,a){"use strict";a.r(n);var e=a("967c"),i=a("9f52");for(var r in i)"default"!==r&&function(t){a.d(n,t,function(){return i[t]})}(r);a("9a56");var u=a("2877"),o=Object(u["a"])(i["default"],e["a"],e["b"],!1,null,null,null);n["default"]=o.exports},9161:function(t,n,a){},"967c":function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},i=[];a.d(n,"a",function(){return e}),a.d(n,"b",function(){return i})},"9a56":function(t,n,a){"use strict";var e=a("9161"),i=a.n(e);i.a},"9f52":function(t,n,a){"use strict";a.r(n);var e=a("6511"),i=a.n(e);for(var r in e)"default"!==r&&function(t){a.d(n,t,function(){return e[t]})}(r);n["default"]=i.a},e4b5:function(t,n,a){"use strict";(function(t){a("9c0b"),a("921b");e(a("66fd"));var n=e(a("7441"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,a("6e42")["createPage"])}},[["e4b5","common/runtime","common/vendor"]]]);
});
require('mill/sell/sell.js');
__wxRoute = 'mill/validation/validation';__wxRouteBegin = true;__wxAppCurrentFile__ = 'mill/validation/validation.js';

define('mill/validation/validation.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["mill/validation/validation"],{"0029":function(t,e,n){"use strict";var a=n("cca7"),o=n.n(a);o.a},"13c4":function(t,e,n){"use strict";(function(t){n("9c0b"),n("921b");a(n("66fd"));var e=a(n("2ba3"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"2ba3":function(t,e,n){"use strict";n.r(e);var a=n("6e8d"),o=n("e225");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("0029");var u=n("2877"),r=Object(u["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},"6e8d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})},a3c3:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{name:"",coloe:""}},onLoad:function(t){var e=this,n=JSON.parse(t.app),a=JSON.parse(t.sunt),o=JSON.parse(t.tilo);e.data=n,e.date=a,e.datr=o},methods:{end:function(t){this.name=t.detail.value},ennd:function(t){this.coloe=t.detail.value},end1:function(){if(""==this.coloe)return t.showToast({icon:"none",title:"请输入手机号"}),!1;var e=/^(16[0-9]|14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9]|19[0-9])\d{8}$$/;if(!e.test(this.coloe))return t.showToast({title:"请输入正确的手机号",icon:"none",mask:!0,duration:2e3}),!1;var n=this,a=n.name,o=n.coloe,i=n.data,u=n.date,r=n.datr;t.request({url:this.url+"buildorders/",method:"POST",header:{Authorization:"JWT "+this.global_.token},data:{name:a,machine_id_list:i,mobile:o,sale_num:u,sale_money:r},success:function(e){var n=JSON.stringify(e.data.data);204==e.statusCode?t.showToast({title:"买家信息不存在",icon:"none"}):200==e.statusCode?t.navigateTo({url:"../confirm/confirm?ront="+n}):401==e.statusCode?t.showToast({title:"矿机不能卖给自己",icon:"none"}):400==e.statusCode&&t.showToast({title:"请重新出售"})}})}}};e.default=n}).call(this,n("6e42")["default"])},cca7:function(t,e,n){},e225:function(t,e,n){"use strict";n.r(e);var a=n("a3c3"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a}},[["13c4","common/runtime","common/vendor"]]]);
});
require('mill/validation/validation.js');
__wxRoute = 'mill/confirm/confirm';__wxRouteBegin = true;__wxAppCurrentFile__ = 'mill/confirm/confirm.js';

define('mill/confirm/confirm.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["mill/confirm/confirm"],{"06e1":function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement;n._self._c},o=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return o})},"7fb8":function(n,t,e){"use strict";var a=e("c574"),o=e.n(a);o.a},ad95:function(n,t,e){"use strict";(function(n){e("9c0b"),e("921b");a(e("66fd"));var t=a(e("fc15"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},bd8f:function(n,t,e){"use strict";(function(n,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=e("f7ed"),s=function(){return Promise.all([e.e("common/vendor"),e.e("components/keyboard-package/keyboard-package")]).then(e.bind(null,"bd7f"))},r=function(){return Promise.all([e.e("common/vendor"),e.e("components/password-input/password-input")]).then(e.bind(null,"d391"))},u={data:function(){return{name:"",pag:"",suu:"",data:"",san:"",sun:"",paymentPwd:"",forget:!1,password:"",arr:[],numberList:[],length:6,type:"number",passIn:!1}},components:{keyboardPackage:s,passwordInput:r},onLoad:function(n){var t=[],e=this,a=JSON.parse(n.ront);e.data=a;var s=e.data[1];e.name=e.data[0][0].name,e.pag=e.data[0][0].mobile,e.san=e.data[0][0].sale_num,e.suu=e.data[0][0].sale_money,e.data=e.data[1],e.sun=o.getrmb(e.suu);for(var r=0;r<s.length;r++)t.push(s[r].machine_id);this.arr=t},methods:{clo:function(){this.passIn=!1,this.$refs["number"].close(),this.numberList.length=0},onDelete:function(){this.numberList.pop()},onChange:function(t){console.log(n(t.show," at mill\\confirm\\confirm.vue:116")),0==t.show&&(this.passIn=!1),that.numberList.length=0},onConfirm:function(){6!=this.numberList.length&&a.showToast({title:"请输入六位交易密码！",duration:2e3,icon:"none"})},onInput:function(t){var e=this,o=e.arr.join();e.numberList.push(t),e.password=e.numberList.join().replace(/,/g,""),e.numberList.length>=e.length&&(a.request({url:e.url+"submitorder/",method:"POST",data:{password:e.password,machine_id_list:o,name:e.name,mobile:e.pag,sale_num:e.san,sale_money:e.suu},header:{Authorization:"JWT "+this.global_.token},success:function(t){if(console.log(n(t," at mill\\confirm\\confirm.vue:152")),400==t.statusCode){e.numberList.pop(),e.numberList.length=0,e.$refs.wrong.flag=!1;var o=t.data.data.err_num,s=5-o;e.$refs.wrong.tip="剩余"+s+"次机会"}423==t.statusCode&&a.showToast({title:"交易密码已锁定,请在今日24:00后进行交易",icon:"none",duration:2e3}),201==t.statusCode&&(e.success=!0),200==t.statusCode&&(a.showToast({title:"出售成功，等待买家付款",icon:"none",duration:2e3}),a.switchTab({url:"../mill/mill"}));getCurrentPages().pop()}}),this.numberList.length=0)},btn:function(){this.passIn=!0,this.$refs["number"].open(),this.onInput(val)}}};t.default=u}).call(this,e("0de9")["default"],e("6e42")["default"])},c574:function(n,t,e){},e722:function(n,t,e){"use strict";e.r(t);var a=e("bd8f"),o=e.n(a);for(var s in a)"default"!==s&&function(n){e.d(t,n,function(){return a[n]})}(s);t["default"]=o.a},fc15:function(n,t,e){"use strict";e.r(t);var a=e("06e1"),o=e("e722");for(var s in o)"default"!==s&&function(n){e.d(t,n,function(){return o[n]})}(s);e("7fb8");var r=e("2877"),u=Object(r["a"])(o["default"],a["a"],a["b"],!1,null,null,null);t["default"]=u.exports}},[["ad95","common/runtime","common/vendor"]]]);
});
require('mill/confirm/confirm.js');
__wxRoute = 'my/my/my';__wxRouteBegin = true;__wxAppCurrentFile__ = 'my/my/my.js';

define('my/my/my.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/my/my"],{"0b02":function(t,e,n){},"26af":function(t,e,n){"use strict";(function(t){n("9c0b"),n("921b");o(n("66fd"));var e=o(n("b29b"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"2c7e":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},"7f5f":function(t,e,n){"use strict";var o=n("0b02"),a=n.n(o);a.a},ae11:function(t,e,n){"use strict";n.r(e);var o=n("f5da"),a=n.n(o);for(var s in o)"default"!==s&&function(t){n.d(e,t,function(){return o[t]})}(s);e["default"]=a.a},b29b:function(t,e,n){"use strict";n.r(e);var o=n("2c7e"),a=n("ae11");for(var s in a)"default"!==s&&function(t){n.d(e,t,function(){return a[t]})}(s);n("7f5f");var i=n("2877"),u=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=u.exports},f5da:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{phone:"",shade:!1}},onLoad:function(){var t=this.global_.phone,e=t.split(""),n=e.slice(0,3).join().replace(/,/g,"")+"****"+e.slice(7,11).join().replace(/,/g,"");this.phone=n},onHide:function(){this.shade=!1},methods:{cancel:function(){this.shade=!1},sure:function(){this.global_.token,t.removeStorageSync("phone"),t.removeStorageSync("token"),t.reLaunch({url:"../../pages/login/login"})},personal:function(){t.navigateTo({url:"../personal/personal?phone="+this.phone})},wallet:function(){t.navigateTo({url:"../my-wallet/my-wallet"})},address:function(){t.request({url:this.url+"walletaddress/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){400==e.statusCode&&t.showToast({title:"用户未实名认证",icon:"none",duration:2e3}),201==e.statusCode&&t.showToast({title:"身份认证审核中，请等待",icon:"none",duration:2e3}),200==e.statusCode&&t.navigateTo({url:"../address/address"}),302==e.statusCode&&t.showToast({title:"用户未设置资金密码",icon:"none",duration:2e3})}})},tradePassword:function(){t.request({url:this.url+"setmoney/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){if(302==e.statusCode)return t.showToast({title:"用户未绑定邮箱",icon:"none",duration:2e3}),!1;400==e.statusCode&&t.navigateTo({url:"../change-password/change-password"}),200==e.statusCode&&t.navigateTo({url:"../trade-password/trade-password"})}})},loginPassword:function(){t.request({url:this.url+"updataloginpassword/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){400==e.statusCode&&t.navigateTo({url:"../change-loginPassword/change-loginPassword"}),200==e.statusCode&&t.navigateTo({url:"../change-pass/change-pass"})}})},bindEmail:function(){t.request({url:this.url+"linkemail/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){console.log(n(e," at my\\my\\my.vue:210")),200!=e.statusCode&&201!=e.statusCode||t.navigateTo({url:"../email/email"}),400==e.statusCode&&t.navigateTo({url:"../unbindemail/unbindemail"})}})},suggest:function(){t.navigateTo({url:"../suggest/suggest"})},certification:function(){t.request({url:this.url+"realname/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){return console.log(n(e," at my\\my\\my.vue:237")),202==e.statusCode?(t.showToast({title:"已实名认证",icon:"none",duration:2e3}),!1):205==e.statusCode?(t.showToast({title:"身份认证审核中，请等待",icon:"none",duration:2e3}),!1):void(200==e.statusCode&&t.navigateTo({url:"../identity/identity"}))}})},mymachine:function(){t.navigateTo({url:"../my-machine/my-machine"})},logout:function(){this.shade=!0}}};e.default=o}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["26af","common/runtime","common/vendor"]]]);
});
require('my/my/my.js');
__wxRoute = 'my/personal/personal';__wxRouteBegin = true;__wxAppCurrentFile__ = 'my/personal/personal.js';

define('my/personal/personal.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/personal/personal"],{"21fb":function(n,t,e){"use strict";e.r(t);var u=e("85ff"),f=e("3977");for(var o in f)"default"!==o&&function(n){e.d(t,n,function(){return f[n]})}(o);e("cf4e");var r=e("2877"),c=Object(r["a"])(f["default"],u["a"],u["b"],!1,null,null,null);t["default"]=c.exports},3700:function(n,t,e){},3977:function(n,t,e){"use strict";e.r(t);var u=e("d14c"),f=e.n(u);for(var o in u)"default"!==o&&function(n){e.d(t,n,function(){return u[n]})}(o);t["default"]=f.a},"85ff":function(n,t,e){"use strict";var u=function(){var n=this,t=n.$createElement;n._self._c},f=[];e.d(t,"a",function(){return u}),e.d(t,"b",function(){return f})},cf4e:function(n,t,e){"use strict";var u=e("3700"),f=e.n(u);f.a},d14c:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{phone:""}},onLoad:function(n){this.phone=n.phone}};t.default=u},f8db:function(n,t,e){"use strict";(function(n){e("9c0b"),e("921b");u(e("66fd"));var t=u(e("21fb"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])}},[["f8db","common/runtime","common/vendor"]]]);
});
require('my/personal/personal.js');
__wxRoute = 'my/add-address/add-address';__wxRouteBegin = true;__wxAppCurrentFile__ = 'my/add-address/add-address.js';

define('my/add-address/add-address.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/add-address/add-address"],{"6a15":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{adr:"",remark:"",flag:""}},onLoad:function(t){this.flag=t.flag},onBackPress:function(t){plus.key.hideSoftKeybord()},methods:{getAddress:function(t){this.adr=t.detail.value},getRemark:function(t){this.remark=t.detail.value},save:function(){return""==this.adr?(t.showToast({title:"提币地址不能为空",icon:"none",duration:2e3}),!1):this.adr.length<=32?(t.showToast({title:"提币地址最少32位",icon:"none",duration:2e3}),!1):""==this.remark?(t.showToast({title:"备注名称不能为空",icon:"none",duration:2e3}),!1):void t.request({url:this.url+"walletaddress/",method:"POST",data:{wallet_key:this.remark,wallet_value:this.adr},header:{Authorization:"JWT "+this.global_.token},success:function(e){if(202==e.statusCode)return t.showToast({title:"地址格式不正确(只能是字母或数字)",icon:"none",duration:2e3}),!1;if(204==e.statusCode)return t.showToast({title:"昵称不可重复",icon:"none",duration:2e3}),!1;if(205==e.statusCode)return t.showToast({title:"地址不合法",icon:"none",duration:2e3}),!1;if(200==e.statusCode){t.navigateBack({delta:1}),t.showToast({title:"添加成功",icon:"none",duration:1500});var n=getCurrentPages().pop();if(void 0==n||null==n)return;n.onLoad()}}})}}};e.default=n}).call(this,n("6e42")["default"])},9178:function(t,e,n){},"9fcb":function(t,e,n){"use strict";n.r(e);var a=n("e770"),o=n("9fd7");for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n("e0c5");var i=n("2877"),u=Object(i["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=u.exports},"9fd7":function(t,e,n){"use strict";n.r(e);var a=n("6a15"),o=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=o.a},d7fd:function(t,e,n){"use strict";(function(t){n("9c0b"),n("921b");a(n("66fd"));var e=a(n("9fcb"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},e0c5:function(t,e,n){"use strict";var a=n("9178"),o=n.n(a);o.a},e770:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o})}},[["d7fd","common/runtime","common/vendor"]]]);
});
require('my/add-address/add-address.js');
__wxRoute = 'my/address/address';__wxRouteBegin = true;__wxAppCurrentFile__ = 'my/address/address.js';

define('my/address/address.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/address/address"],{"083f":function(e,n,t){},"0b23":function(e,n,t){"use strict";(function(e){t("9c0b"),t("921b");a(t("66fd"));var n=a(t("2c6b"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},"10de":function(e,n,t){"use strict";var a=t("083f"),s=t.n(a);s.a},"2c6b":function(e,n,t){"use strict";t.r(n);var a=t("8944"),s=t("c571");for(var o in s)"default"!==o&&function(e){t.d(n,e,function(){return s[e]})}(o);t("10de");var i=t("2877"),r=Object(i["a"])(s["default"],a["a"],a["b"],!1,null,null,null);n["default"]=r.exports},8944:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement;e._self._c},s=[];t.d(n,"a",function(){return a}),t.d(n,"b",function(){return s})},"93f9":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=function(){return Promise.all([t.e("common/vendor"),t.e("components/uni-swipe-action/uni-swipe-action")]).then(t.bind(null,"5eac"))},s=function(){return Promise.all([t.e("common/vendor"),t.e("components/keyboard-package/keyboard-package")]).then(t.bind(null,"bd7f"))},o=function(){return Promise.all([t.e("common/vendor"),t.e("components/password-input/password-input")]).then(t.bind(null,"d391"))},i=function(){return t.e("components/uni-nav-bar/uni-nav-bar").then(t.bind(null,"ba27"))},r={data:function(){return{options:[{text:"删除",style:{backgroundColor:"#dd524d"}}],wallet_value:"",wallet_key:"",address_out:"",flag:!0,right:"",id:"",shade:!0,password:"",user_id:"",numberList:[],length:6,type:"number",passIn:!1}},components:{uniSwipeAction:a,keyboardPackage:s,passwordInput:o,uniNavBar:i},onLoad:function(){var n=this;e.request({url:this.url+"walletaddress/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){""==e.data.data?n.flag=!1:n.flag=!0,n.address_out=e.data.data}})},methods:{clo:function(){this.passIn=!1,this.$refs["number"].close(),this.numberList.length=0},onDelete:function(){this.numberList.pop()},onChange:function(e){0==e.show&&(this.passIn=!1),this.numberList.length=0},onConfirm:function(){6!=this.numberList.length&&e.showToast({title:"请输入六位交易密码！",duration:2e3,icon:"none"})},onInput:function(n){var t=this;t.numberList.push(n),t.password=t.numberList.join().replace(/,/g,""),t.numberList.length>=t.length&&(e.request({url:t.url+"updatadeleteaddress/",method:"DELETE",data:{id:t.id,password:t.password},header:{Authorization:"JWT "+t.global_.token},success:function(n){if(204==n.statusCode&&(t.passIn=!1,t.$refs["number"].close(),e.showToast({title:"删除成功",icon:"none",duration:2e3})),400==n.statusCode){t.$refs.wrong.flag=!1;var a=n.data.data.err_num,s=5-a;t.$refs.wrong.tip="剩余"+s+"次机会"}423==n.statusCode&&(t.passIn=!1,t.$refs["number"].close(),e.showToast({title:"交易密码已锁定,请在今日24:00后进行交易",icon:"none",duration:2e3}));var o=getCurrentPages().pop();void 0!=o&&null!=o&&o.onLoad()}}),this.numberList.length=0)},click:function(e){var n=this;n.id=e.id,this.passIn=!0,this.$refs["number"].open(),this.onInput(val)},add_address:function(){e.navigateTo({url:"../add-address/add-address?flag="+this.flag})},back:function(){e.navigateBack({delta:1})},edit:function(n){var t=this;t.id=n.id,t.wallet_key=n.wallet_key,t.wallet_value=n.wallet_value,t.user_id=n.user_id,e.navigateTo({url:"../edit-address/edit-address?id="+t.id+"&wallet_key="+t.wallet_key+"&wallet_value="+t.wallet_value+"&user_id="+t.user_id})}}};n.default=r}).call(this,t("6e42")["default"])},c571:function(e,n,t){"use strict";t.r(n);var a=t("93f9"),s=t.n(a);for(var o in a)"default"!==o&&function(e){t.d(n,e,function(){return a[e]})}(o);n["default"]=s.a}},[["0b23","common/runtime","common/vendor"]]]);
});
require('my/address/address.js');
__wxRoute = 'my/edit-address/edit-address';__wxRouteBegin = true;__wxAppCurrentFile__ = 'my/edit-address/edit-address.js';

define('my/edit-address/edit-address.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/edit-address/edit-address"],{"12f6":function(e,t,n){"use strict";(function(e){n("9c0b"),n("921b");s(n("66fd"));var t=s(n("a1b9"));function s(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"5c5a":function(e,t,n){"use strict";var s=n("9926"),o=n.n(s);o.a},"82b1":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",function(){return s}),n.d(t,"b",function(){return o})},9926:function(e,t,n){},a1b9:function(e,t,n){"use strict";n.r(t);var s=n("82b1"),o=n("ffca");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);n("5c5a");var i=n("2877"),r=Object(i["a"])(o["default"],s["a"],s["b"],!1,null,null,null);t["default"]=r.exports},a8ed:function(e,t,n){"use strict";(function(e,s){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){return Promise.all([n.e("common/vendor"),n.e("components/keyboard-package/keyboard-package")]).then(n.bind(null,"bd7f"))},a=function(){return Promise.all([n.e("common/vendor"),n.e("components/password-input/password-input")]).then(n.bind(null,"d391"))},i={data:function(){return{nickname:"",address:"",password:"",id:"",user_id:"",numberList:[],length:6,type:"number",passIn:!1,delShow:!1}},components:{keyboardPackage:o,passwordInput:a},onLoad:function(e){this.nickname=e.wallet_key,this.address=e.wallet_value,this.id=e.id,this.user_id=e.user_id},onBackPress:function(e){plus.key.hideSoftKeybord()},methods:{back:function(){e.navigateBack({delta:1})},clo:function(){this.passIn=!1,this.$refs["number"].close(),this.numberList.length=0},cloo:function(){this.delShow=!1,this.$refs["numbers"].close(),this.numberList.length=0},onChange:function(e){0==e.show&&(this.passIn=!1),this.numberList.length=0},onChange1:function(e){console.log(s(e.show," at my\\edit-address\\edit-address.vue:95")),0==e.show&&(this.delShow=!1),this.numberList.length=0},onDelete:function(){this.numberList.pop()},onConfirm:function(){6!=this.numberList.length&&e.showToast({title:"请输入六位交易密码！",duration:2e3,icon:"none"})},getAddress:function(e){this.address=e.detail.value},getRemark:function(e){this.nickname=e.detail.value},save:function(){return""==this.address?(e.showToast({title:"请输入提币地址",icon:"none",duration:2e3}),!1):this.address.length<=32?(e.showToast({title:"提币地址最少32位",icon:"none",duration:2e3}),!1):""==this.nickname?(e.showToast({title:"请输入地址备注",icon:"none",duration:2e3}),!1):(this.passIn=!0,this.$refs["number"].open(),void this.onInput(val))},onInput:function(t){var n=this;n.numberList.push(t),n.password=n.numberList.join().replace(/,/g,""),n.numberList.length>=n.length&&(e.request({url:n.url+"updatadeleteaddress/",method:"PUT",data:{wallet_value:n.address,wallet_key:n.nickname,id:n.id,password:n.password,user_id:n.user_id},header:{Authorization:"JWT "+this.global_.token},success:function(t){if(400==t.statusCode){n.numberList.pop(),n.numberList.length=0,n.$refs.wrong.flag=!1;var s=t.data.data.err_num,o=5-s;n.$refs.wrong.tip="剩余"+o+"次机会"}423==t.statusCode&&(n.passIn=!1,n.$refs["number"].close(),e.showToast({title:"交易密码已锁定,请在今日24:00后进行交易",icon:"none",duration:2e3})),204==t.statusCode&&(n.passIn=!1,n.$refs["number"].close(),e.navigateBack({delta:1}),e.showToast({title:"修改成功",icon:"none",duration:1500}));var a=getCurrentPages().pop();void 0!=a&&null!=a&&a.onLoad()}}),this.numberList.length=0)},onNavigationBarButtonTap:function(){this.delShow=!0,this.$refs["numbers"].open(),this.onInput1(val)},onInput1:function(t){var n=this;n.numberList.push(t),n.password=n.numberList.join().replace(/,/g,""),n.numberList.length>=n.length&&(e.request({url:n.url+"updatadeleteaddress/",method:"DELETE",data:{id:this.id,password:this.password},header:{Authorization:"JWT "+this.global_.token},success:function(t){if(204==t.statusCode&&(n.passIn=!1,n.$refs["number"].close(),e.navigateBack({delta:1}),e.showToast({title:"删除成功",icon:"none",duration:2e3})),400==t.statusCode){n.numberList.pop(),n.numberList.length=0,n.$refs.wrong.flag=!1;var s=t.data.data.err_num,o=5-s;n.$refs.wrong.tip="剩余"+o+"次机会"}423==t.statusCode&&(n.passIn=!1,n.$refs["number"].close(),e.showToast({title:"交易密码已锁定,请在今日24:00后进行交易",icon:"none",duration:2e3}));var a=getCurrentPages().pop();void 0!=a&&null!=a&&a.onLoad()}}),this.numberList.length=0)}}};t.default=i}).call(this,n("6e42")["default"],n("0de9")["default"])},ffca:function(e,t,n){"use strict";n.r(t);var s=n("a8ed"),o=n.n(s);for(var a in s)"default"!==a&&function(e){n.d(t,e,function(){return s[e]})}(a);t["default"]=o.a}},[["12f6","common/runtime","common/vendor"]]]);
});
require('my/edit-address/edit-address.js');
__wxRoute = 'my/email/email';__wxRouteBegin = true;__wxAppCurrentFile__ = 'my/email/email.js';

define('my/email/email.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/email/email"],{6230:function(e,t,n){"use strict";n.r(t);var i=n("6e15"),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t["default"]=a.a},"692c":function(e,t,n){"use strict";var i=n("cf83"),a=n.n(i);a.a},"6e15":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("a315"),a={data:function(){return{email:"",emailCode:"",codename:" 获取验证码",disabled:!1}},onBackPress:function(e){plus.key.hideSoftKeybord()},methods:{getEmailValue:function(e){this.email=e.detail.value},getEmailStyle:function(t){var n=i.checkEmail(this.email);if(!n)return e.showToast({title:"邮箱格式不正确",icon:"none",duration:2e3}),!1},getEmailCode:function(e){this.emailCode=e.detail.value},sendcode:function(){var t=this;if(!t.email)return e.showToast({title:"请输入邮箱",icon:"none",duration:2e3}),!1;var n=i.checkEmail(t.email);if(!n)return e.showToast({title:"邮箱格式不正确",icon:"none",duration:2e3}),!1;e.request({url:this.url+"binding/",method:"POST",data:{email:t.email},success:function(n){if(200==n.statusCode)var i=121,a=setInterval(function(){i--,i<=0?(clearInterval(a),t.codename="重新发送",t.disabled=!1):(t.codename=i+"s",t.disabled=!0)},1e3);if(401==n.statusCode)return e.showToast({title:"该邮箱已被使用",icon:"none",duration:2e3}),!1},fail:function(e){}})},save:function(){return""==this.email?(e.showToast({title:"请输入邮箱地址",icon:"none",duration:2e3}),!1):""==this.emailCode?(e.showToast({title:"请输入验证码",icon:"none",duration:2e3}),!1):void e.request({url:this.url+"linkemail/",method:"POST",data:{email:this.email,email_msg:this.emailCode},header:{Authorization:"JWT "+this.global_.token},success:function(t){200==t.statusCode&&(e.showToast({title:"邮箱已绑定",icon:"none",duration:2e3}),e.switchTab({url:"../my/my"})),400==t.statusCode&&e.showToast({title:"验证码错误",icon:"none",duration:2e3})}})}}};t.default=a}).call(this,n("6e42")["default"])},c186:function(e,t,n){"use strict";(function(e){n("9c0b"),n("921b");i(n("66fd"));var t=i(n("d7ab"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},cf83:function(e,t,n){},d7ab:function(e,t,n){"use strict";n.r(t);var i=n("dbb9"),a=n("6230");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("692c");var u=n("2877"),l=Object(u["a"])(a["default"],i["a"],i["b"],!1,null,null,null);t["default"]=l.exports},dbb9:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})}},[["c186","common/runtime","common/vendor"]]]);
});
require('my/email/email.js');
__wxRoute = 'my/unbindemail/unbindemail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'my/unbindemail/unbindemail.js';

define('my/unbindemail/unbindemail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/unbindemail/unbindemail"],{"1b03":function(e,t,n){"use strict";n.r(t);var a=n("cddf"),i=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=i.a},"4c3b":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i})},7064:function(e,t,n){"use strict";var a=n("eb78"),i=n.n(a);i.a},a924:function(e,t,n){"use strict";n.r(t);var a=n("4c3b"),i=n("1b03");for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);n("7064");var u=n("2877"),l=Object(u["a"])(i["default"],a["a"],a["b"],!1,null,null,null);t["default"]=l.exports},bcf9:function(e,t,n){"use strict";(function(e){n("9c0b"),n("921b");a(n("66fd"));var t=a(n("a924"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},cddf:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;n("a315");var a={data:function(){return{email:"",email1:"",emailCode:"",codename:" 获取验证码",disabled:!1}},onShow:function(){var t=this;e.request({url:this.url+"delemail/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){var n=e.data.data,a=e.data.data;t.email1=a;var i=n.split("@");n=i[0].substr(0,i[0].length-5)+"****@"+i[1],t.email=n}})},onBackPress:function(e){plus.key.hideSoftKeybord()},methods:{getEmailCode:function(e){this.emailCode=e.detail.value},sendcode:function(){var t=this;e.request({url:this.url+"deleteemail/",method:"POST",data:{email:t.email,email_msg:t.emailCode},header:{Authorization:"JWT "+this.global_.token},success:function(e){var n=121,a=setInterval(function(){n--,n<=0?(clearInterval(a),t.codename="重新发送",t.disabled=!1):(t.disabled=!0,t.codename=n+"s")},1e3)},fail:function(e){}})},unbind:function(){if(""==this.emailCode)return e.showToast({title:"请输入验证码",icon:"none",duration:2e3}),!1;e.request({url:this.url+"delemail/",method:"POST",data:{email:this.email1,email_msg:this.emailCode},header:{Authorization:"JWT "+this.global_.token},success:function(t){if(400==t.statusCode)return e.showToast({title:"验证码错误",icon:"none",duration:2e3}),!1;200==t.statusCode&&(e.showToast({title:"邮箱已解绑",icon:"none",duration:2e3}),e.switchTab({url:"../my/my"}))}})}}};t.default=a}).call(this,n("6e42")["default"])},eb78:function(e,t,n){}},[["bcf9","common/runtime","common/vendor"]]]);
});
require('my/unbindemail/unbindemail.js');
__wxRoute = 'my/identity/identity';__wxRouteBegin = true;__wxAppCurrentFile__ = 'my/identity/identity.js';

define('my/identity/identity.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/identity/identity"],{"826d":function(e,t,i){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i("a315"),a={data:function(){return{name:"",idcard:"",imgs:[],picPaths:[],positive:"positive",reverse:"reverse",pos:"",rev:"",type:"",p_flag:!0,r_flag:!0,p_url:"",r_url:"",shade:!1}},onBackPress:function(e){plus.key.hideSoftKeybord()},methods:{getName:function(e){this.name=e.detail.value},getIdcard:function(e){this.idcard=e.detail.value},chooseImageTap:function(t){var i=this,n=t.currentTarget.dataset.flag;e.showActionSheet({itemList:["从相册中选择","拍照"],itemColor:"#00000",success:function(e){e.cancel||(0==e.tapIndex?("positive"==n&&i.chooseWxImage1("album"),"reverse"==n&&i.chooseWxImage2("album")):1==e.tapIndex&&("positive"==n&&i.chooseWxImage1("camera"),"reverse"==n&&i.chooseWxImage2("camera")))}})},chooseWxImage1:function(t){var i=this,n=i.imgs,o={};e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:[t],success:function(e){for(var t=n.length-1;t>=0;t--)for(var a in n[t])"positive"==a&&n.splice(t,1);o.positive=e.tempFilePaths[0],i.imgs.push(o),i.p_url=e.tempFilePaths[0],i.p_flag=!1,i.imgs=i.imgs}})},chooseWxImage2:function(t){var i=this,n=i.imgs,o={};e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:[t],success:function(e){for(var t=n.length-1;t>=0;t--)for(var a in n[t])"reverse"==a&&n.splice(t,1);o.reverse=e.tempFilePaths[0],i.imgs.push(o),i.r_url=e.tempFilePaths[0],i.r_flag=!1,i.imgs=i.imgs,i.rev=n[1].reverse,i.pos=n[0].positive}})},upImgs:function(t,i){var o=this,a=this.global_.token;for(var s in t[i])e.uploadFile({url:this.url+"realname/",filePath:t[i][s],name:s,header:{Authorization:"JWT "+a},formData:null,success:function(s){if(400==s.statusCode)return e.showToast({title:"图片太大，请重新上传",icon:"none",duration:2e3}),!1;i++,i==t.length?e.request({url:o.url+"realname/",method:"POST",data:{name:o.name,idcard:o.idcard},header:{Authorization:"JWT "+a},success:function(t){if(console.log(n(t," at my\\identity\\identity.vue:239")),400==t.statusCode)return e.showToast({title:"身份证号已存在，请重新认证",icon:"none",duration:2e3}),!1;200==t.statusCode&&(o.shade=!0)}}):o.upImgs(t,i)},fail:function(e){}})},submitt:function(){var t=this;if(!t.name)return e.showToast({title:"用户名不能为空",icon:"none"}),!1;if(!t.idcard)return e.showToast({title:"身份证号不能为空",icon:"none"}),!1;var i=o.checkIdcard(t.idcard);return i?2!==t.imgs.length?(e.showToast({title:"身份证照不全",icon:"none"}),!1):void t.upImgs(t.imgs,0):(e.showToast({title:"身份证格式不正确",icon:"none",duration:2e3}),!1)},sure:function(){e.switchTab({url:"../my/my"})}}};t.default=a}).call(this,i("6e42")["default"],i("0de9")["default"])},"9ff0":function(e,t,i){"use strict";(function(e){i("9c0b"),i("921b");n(i("66fd"));var t=n(i("bcd0"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("6e42")["createPage"])},a19b:function(e,t,i){"use strict";var n=i("d488"),o=i.n(n);o.a},bcd0:function(e,t,i){"use strict";i.r(t);var n=i("e49c"),o=i("ee6c");for(var a in o)"default"!==a&&function(e){i.d(t,e,function(){return o[e]})}(a);i("a19b");var s=i("2877"),r=Object(s["a"])(o["default"],n["a"],n["b"],!1,null,null,null);t["default"]=r.exports},d488:function(e,t,i){},e49c:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},o=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return o})},ee6c:function(e,t,i){"use strict";i.r(t);var n=i("826d"),o=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,function(){return n[e]})}(a);t["default"]=o.a}},[["9ff0","common/runtime","common/vendor"]]]);
});
require('my/identity/identity.js');
__wxRoute = 'my/login-password/login-password';__wxRouteBegin = true;__wxAppCurrentFile__ = 'my/login-password/login-password.js';

define('my/login-password/login-password.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/login-password/login-password"],{"02f6":function(t,e,o){"use strict";var n=o("e205"),s=o.n(n);s.a},"0b1f":function(t,e,o){"use strict";o.r(e);var n=o("bcc6"),s=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,function(){return n[t]})}(i);e["default"]=s.a},"3d6a":function(t,e,o){"use strict";(function(t){o("9c0b"),o("921b");n(o("66fd"));var e=n(o("c56b"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])},a16f:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},s=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return s})},bcc6:function(t,e,o){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{phone:this.global_.phone,isPassword:!0,isPassword1:!0,codename:" 获取验证码 ",pwd:"",pwd1:"",iscode:"",code:"",disabled:!1}},onBackPress:function(t){plus.key.hideSoftKeybord()},methods:{getLoginPassword:function(t){this.pwd=t.detail.value},getLoginPassword1:function(t){this.pwd1=t.detail.value},getCodeValue:function(t){this.code=t.detail.value},show:function(){this.isPassword=!this.isPassword},show1:function(){this.isPassword1=!this.isPassword1},getCode:function(){var e=this;t.request({url:e.url+"users/login/sms/",method:"POST",data:{mobile:this.phone},header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(n){console.log(o(n," at my\\login-password\\login-password.vue:77"));var s=n.statusCode;if(200==s){e.iscode=n.data.data;var i=61,a=setInterval(function(){i--,i<=0?(clearInterval(a),e.codename="重新发送",e.disabled=!1):(e.codename=i+"s",e.disabled=!0)},1e3)}else if(411==s)return t.showToast({title:"操作太频繁，请稍候重试",icon:"none",duration:2e3}),!1}})},getCodeBtn:function(t){this.getCode()},save:function(){if(""==this.pwd)return t.showToast({title:"请输入登录密码",icon:"none",duration:2e3}),!1;var e=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;return e.test(this.pwd)?""==this.pwd1?(t.showToast({title:"请确认登录密码",icon:"none",duration:2e3}),!1):this.pwd1!==this.pwd?(t.showToast({title:"两次密码不一致",icon:"none",duration:2e3}),!1):""==this.code?(t.showToast({title:"验证码不能为空",icon:"none",duration:2e3}),!1):this.code!=this.iscode?(t.showToast({title:"验证码错误",icon:"none",duration:2e3}),!1):void t.request({url:this.url+"updataloginpassword/",method:"POST",data:{mobile:this.phone,password:this.pwd,password1:this.pwd1,code:this.code},headers:{"Content-Type":"application/json"},success:function(e){200==e.statusCode&&(t.showToast({title:"登陆密码修改成功",icon:"none",duration:2e3}),t.removeStorageSync("phone"),t.removeStorageSync("token"),t.reLaunch({url:"../../pages/login/login"})),400==e.statusCode&&t.showToast({title:"验证码已过期",icon:"none"})},fail:function(){},complete:function(){}}):(t.showToast({title:"密码格式不正确",icon:"none",duration:2e3}),!1)}}};e.default=n}).call(this,o("6e42")["default"],o("0de9")["default"])},c56b:function(t,e,o){"use strict";o.r(e);var n=o("a16f"),s=o("0b1f");for(var i in s)"default"!==i&&function(t){o.d(e,t,function(){return s[t]})}(i);o("02f6");var a=o("2877"),d=Object(a["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=d.exports},e205:function(t,e,o){}},[["3d6a","common/runtime","common/vendor"]]]);
});
require('my/login-password/login-password.js');
__wxRoute = 'my/change-pass/change-pass';__wxRouteBegin = true;__wxAppCurrentFile__ = 'my/change-pass/change-pass.js';

define('my/change-pass/change-pass.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/change-pass/change-pass"],{"1d1d":function(t,n,o){"use strict";o.r(n);var e=o("1f38"),s=o("b8ed");for(var i in s)"default"!==i&&function(t){o.d(n,t,function(){return s[t]})}(i);o("d2af");var a=o("2877"),u=Object(a["a"])(s["default"],e["a"],e["b"],!1,null,null,null);n["default"]=u.exports},"1f38":function(t,n,o){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c},s=[];o.d(n,"a",function(){return e}),o.d(n,"b",function(){return s})},"21d5":function(t,n,o){"use strict";(function(t){o("9c0b"),o("921b");e(o("66fd"));var n=e(o("1d1d"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,o("6e42")["createPage"])},"26b6":function(t,n,o){},"27a5":function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={data:function(){return{isPassword:!0,isPassword1:!0,checked:!0,pass:"",pwd1:"",pwd2:""}},onBackPress:function(t){plus.key.hideSoftKeybord()},methods:{getNowPwd:function(t){this.pass=t.detail.value},getPwd1:function(t){this.pwd1=t.detail.value},getPwd2:function(t){this.pwd2=t.detail.value},show:function(){this.isPassword=!this.isPassword},show1:function(){this.isPassword1=!this.isPassword1},other:function(){t.navigateTo({url:"../login-password/login-password"})},save:function(){if(""==this.pass)return t.showToast({title:"请输入现有密码",icon:"none",duration:2e3}),!1;if(""==this.pwd1)return t.showToast({title:"请输入登录密码",icon:"none",duration:2e3}),!1;var n=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;return n.test(this.pwd1)?""==this.pwd2?(t.showToast({title:"请确认登录密码",icon:"none",duration:2e3}),!1):this.pwd1!==this.pwd2?(t.showToast({title:"两次密码不一致",icon:"none",duration:2e3}),!1):void t.request({url:this.url+"updataLoginpassword/",method:"POST",data:{mobile:this.global_.phone,password:this.pass,password1:this.pwd1,password2:this.pwd2},headers:{Authorization:"JWT "+this.global_.token},success:function(n){200==n.statusCode&&(t.showToast({title:"登陆密码修改成功",icon:"none",duration:2e3}),t.removeStorageSync("phone"),t.removeStorageSync("token"),t.reLaunch({url:"../../pages/login/login"})),400==n.statusCode&&t.showToast({title:"现有密码错误",icon:"none"})},fail:function(){},complete:function(){}}):(t.showToast({title:"密码格式不正确",icon:"none",duration:2e3}),!1)}}};n.default=o}).call(this,o("6e42")["default"])},b8ed:function(t,n,o){"use strict";o.r(n);var e=o("27a5"),s=o.n(e);for(var i in e)"default"!==i&&function(t){o.d(n,t,function(){return e[t]})}(i);n["default"]=s.a},d2af:function(t,n,o){"use strict";var e=o("26b6"),s=o.n(e);s.a}},[["21d5","common/runtime","common/vendor"]]]);
});
require('my/change-pass/change-pass.js');
__wxRoute = 'my/change-loginPassword/change-loginPassword';__wxRouteBegin = true;__wxAppCurrentFile__ = 'my/change-loginPassword/change-loginPassword.js';

define('my/change-loginPassword/change-loginPassword.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/change-loginPassword/change-loginPassword"],{"1a7e":function(e,t,o){},"1bdc":function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},s=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return s})},"62bc":function(e,t,o){"use strict";o.r(t);var n=o("ab48"),s=o.n(n);for(var a in n)"default"!==a&&function(e){o.d(t,e,function(){return n[e]})}(a);t["default"]=s.a},a3b7:function(e,t,o){"use strict";var n=o("1a7e"),s=o.n(n);s.a},ab48:function(e,t,o){"use strict";(function(e,o){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{isPassword:!0,isPassword1:!0,phone:this.global_.phone,codename:" 获取验证码 ",pwd:"",pwd1:"",iscode:"",code:"",disabled:!1}},onBackPress:function(e){plus.key.hideSoftKeybord()},methods:{getLoginPassword:function(e){this.pwd=e.detail.value},getLoginPassword1:function(e){this.pwd1=e.detail.value},getCodeValue:function(e){this.code=e.detail.value},show:function(){this.isPassword=!this.isPassword},show1:function(){this.isPassword1=!this.isPassword1},other:function(){e.navigateTo({url:"../change-pass/change-pass"})},getCode:function(){var t=this;e.request({url:t.url+"users/login/sms/",method:"POST",data:{mobile:this.phone},header:{"Content-Type":"application/x-www-form-urlencoded"},success:function(n){console.log(o(n," at my\\change-loginPassword\\change-loginPassword.vue:83"));var s=n.statusCode;if(200==s){t.iscode=n.data.data;var a=61,i=setInterval(function(){a--,a<=0?(clearInterval(i),t.codename="重新发送",t.disabled=!1):(t.codename=a+"s",t.disabled=!0)},1e3)}else if(411==s)return e.showToast({title:"操作太频繁，请稍候重试",icon:"none",duration:2e3}),!1}})},getCodeBtn:function(e){this.getCode()},save:function(){if(""==this.pwd)return e.showToast({title:"请输入登录密码",icon:"none",duration:2e3}),!1;var t=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;return t.test(this.pwd)?""==this.pwd1?(e.showToast({title:"请确认登录密码",icon:"none",duration:2e3}),!1):this.pwd1!==this.pwd?(e.showToast({title:"两次密码不一致",icon:"none",duration:2e3}),!1):""==this.code?(e.showToast({title:"验证码不能为空",icon:"none",duration:2e3}),!1):this.code!=this.iscode?(e.showToast({title:"验证码错误",icon:"none",duration:2e3}),!1):void e.request({url:this.url+"updataloginpassword/",method:"POST",data:{mobile:this.phone,password:this.pwd,password1:this.pwd1,code:this.code},headers:{"Content-Type":"application/json"},success:function(t){200==t.statusCode&&(e.showToast({title:"登陆密码设置成功",icon:"none",duration:2e3}),e.removeStorageSync("phone"),e.removeStorageSync("token"),e.reLaunch({url:"../../pages/login/login"})),400==t.statusCode&&e.showToast({title:"验证码已过期",icon:"none"})},fail:function(){},complete:function(){}}):(e.showToast({title:"密码格式不正确",icon:"none",duration:2e3}),!1)}}};t.default=n}).call(this,o("6e42")["default"],o("0de9")["default"])},f3ae:function(e,t,o){"use strict";o.r(t);var n=o("1bdc"),s=o("62bc");for(var a in s)"default"!==a&&function(e){o.d(t,e,function(){return s[e]})}(a);o("a3b7");var i=o("2877"),d=Object(i["a"])(s["default"],n["a"],n["b"],!1,null,null,null);t["default"]=d.exports},f6cf:function(e,t,o){"use strict";(function(e){o("9c0b"),o("921b");n(o("66fd"));var t=n(o("f3ae"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("6e42")["createPage"])}},[["f6cf","common/runtime","common/vendor"]]]);
});
require('my/change-loginPassword/change-loginPassword.js');
__wxRoute = 'my/change-password/change-password';__wxRouteBegin = true;__wxAppCurrentFile__ = 'my/change-password/change-password.js';

define('my/change-password/change-password.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/change-password/change-password"],{1504:function(s,t,o){"use strict";var n=o("6c41"),e=o.n(n);e.a},"2f2c":function(s,t,o){"use strict";(function(s){o("9c0b"),o("921b");n(o("66fd"));var t=n(o("854e"));function n(s){return s&&s.__esModule?s:{default:s}}s(t.default)}).call(this,o("6e42")["createPage"])},"309c":function(s,t,o){"use strict";(function(s){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{isPassword:!0,isPassword1:!0,password:"",newPassword:"",newPassword1:""}},onBackPress:function(s){plus.key.hideSoftKeybord()},methods:{show:function(){this.isPassword=!this.isPassword},show1:function(){this.isPassword1=!this.isPassword1},getPassword:function(s){this.password=s.detail.value},getNewPassword:function(s){this.newPassword=s.detail.value},getNewPassword1:function(s){this.newPassword1=s.detail.value},changePassword:function(){if(""==this.password)return s.showToast({icon:"none",title:"请输入现有密码",duration:2e3}),!1;if(""==this.newPassword)return s.showToast({icon:"none",title:"请输入新的交易密码",duration:2e3}),!1;var t=this.global_.checkPassword(this.newPassword);return t?""==this.newPassword1?(s.showToast({icon:"none",title:"请确认新的交易密码",duration:2e3}),!1):this.newPassword1!==this.newPassword?(s.showToast({icon:"none",title:"两次密码不一致",duration:2e3}),!1):void s.request({url:this.url+"updatapasswod/",method:"POST",data:{password1:this.password,password2:this.newPassword,password3:this.newPassword1},header:{Authorization:"JWT "+this.global_.token},success:function(t){200==t.statusCode&&(s.showToast({title:"资金密码已修改",icon:"none",duration:2e3}),s.switchTab({url:"../my/my"})),400==t.statusCode&&s.showToast({title:"现有密码错误，或是新旧密码一样",icon:"none",duration:2e3})}}):(s.showToast({title:"交易密码为六位数字!!",icon:"none",duration:2e3}),!1)},other:function(){s.navigateTo({url:"../change-otherPassword/change_otherPassword"})}}};t.default=o}).call(this,o("6e42")["default"])},"6c41":function(s,t,o){},"6fbd":function(s,t,o){"use strict";var n=function(){var s=this,t=s.$createElement;s._self._c},e=[];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return e})},"854e":function(s,t,o){"use strict";o.r(t);var n=o("6fbd"),e=o("d009");for(var a in e)"default"!==a&&function(s){o.d(t,s,function(){return e[s]})}(a);o("1504");var i=o("2877"),r=Object(i["a"])(e["default"],n["a"],n["b"],!1,null,null,null);t["default"]=r.exports},d009:function(s,t,o){"use strict";o.r(t);var n=o("309c"),e=o.n(n);for(var a in n)"default"!==a&&function(s){o.d(t,s,function(){return n[s]})}(a);t["default"]=e.a}},[["2f2c","common/runtime","common/vendor"]]]);
});
require('my/change-password/change-password.js');
__wxRoute = 'my/trade-password/trade-password';__wxRouteBegin = true;__wxAppCurrentFile__ = 'my/trade-password/trade-password.js';

define('my/trade-password/trade-password.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/trade-password/trade-password"],{"0571":function(t,e,s){"use strict";s.r(e);var o=s("42d0"),a=s.n(o);for(var n in o)"default"!==n&&function(t){s.d(e,t,function(){return o[t]})}(n);e["default"]=a.a},"42d0":function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{isPassword:!0,isPassword1:!0,email:"",email1:"",code:"",codename:" 获取验证码",password:"",password1:"",shade:!1,disabled:!1}},onLoad:function(){var e=this;t.request({url:this.url+"delemail/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(t){var s=t.data.data,o=t.data.data;e.email1=o;var a=s.split("@");s=a[0].substr(0,a[0].length-5)+"****@"+a[1],e.email=s}})},onBackPress:function(t){plus.key.hideSoftKeybord()},methods:{show:function(){this.isPassword=!this.isPassword},show1:function(){this.isPassword1=!this.isPassword1},getCodeValue:function(t){this.code=t.detail.value},getPassword:function(t){this.password=t.detail.value},getPassword1:function(t){this.password1=t.detail.value},getCode:function(){var e=this;t.request({method:"POST",data:{email:this.email1},url:this.url+"setemail/",header:{Authorization:"JWT "+this.global_.token},success:function(t){var s=121,o=setInterval(function(){s--,s<=0?(clearInterval(o),e.codename="重新发送",e.disabled=!1):(e.codename=s+"s",e.disabled=!0)},1e3)}})},getCodeNumber:function(t){this.getCode()},setPwd:function(){if(""==this.code)return t.showToast({icon:"none",title:"请输入验证码",duration:2e3}),!1;if(""==this.password)return t.showToast({icon:"none",title:"请输入交易密码",duration:2e3}),!1;var e=this.global_.checkPassword(this.password);return e?""==this.password1?(t.showToast({icon:"none",title:"请确认交易密码",duration:2e3}),!1):this.password1!==this.password?(t.showToast({icon:"none",title:"两次密码不一致",duration:2e3}),!1):void t.request({url:this.url+"setmoney/",method:"POST",data:{email:this.email1,email_msg:this.code,password:this.password,password1:this.password1},header:{Authorization:"JWT "+this.global_.token},success:function(e){200==e.statusCode&&(t.showToast({title:"资金密码已设置",icon:"none",duration:2e3}),t.switchTab({url:"../my/my"})),400==e.statusCode&&t.showToast({title:"验证码错误",icon:"none",duration:2e3})}}):(t.showToast({title:"交易密码为六位数字!",icon:"none",duration:2e3}),!1)}}};e.default=s}).call(this,s("6e42")["default"])},"6c98":function(t,e,s){},"84be":function(t,e,s){"use strict";var o=s("6c98"),a=s.n(o);a.a},bae3:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];s.d(e,"a",function(){return o}),s.d(e,"b",function(){return a})},bc87:function(t,e,s){"use strict";(function(t){s("9c0b"),s("921b");o(s("66fd"));var e=o(s("ecee"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,s("6e42")["createPage"])},ecee:function(t,e,s){"use strict";s.r(e);var o=s("bae3"),a=s("0571");for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);s("84be");var i=s("2877"),r=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=r.exports}},[["bc87","common/runtime","common/vendor"]]]);
});
require('my/trade-password/trade-password.js');
__wxRoute = 'my/change-otherPassword/change_otherPassword';__wxRouteBegin = true;__wxAppCurrentFile__ = 'my/change-otherPassword/change_otherPassword.js';

define('my/change-otherPassword/change_otherPassword.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/change-otherPassword/change_otherPassword"],{"06e8":function(t,e,s){"use strict";var o=s("a957"),a=s.n(o);a.a},"1a8b":function(t,e,s){"use strict";(function(t){s("9c0b"),s("921b");o(s("66fd"));var e=o(s("5d2c"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,s("6e42")["createPage"])},3838:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];s.d(e,"a",function(){return o}),s.d(e,"b",function(){return a})},"529b":function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{isPassword:!0,isPassword1:!0,email:"",email1:"",code:"",codename:" 获取验证码",password:"",password1:"",shade:!1,disabled:!1}},onLoad:function(){var e=this;t.request({url:this.url+"delemail/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(t){var s=t.data.data,o=t.data.data;e.email1=o;var a=s.split("@");s=a[0].substr(0,a[0].length-5)+"****@"+a[1],e.email=s}})},onBackPress:function(t){plus.key.hideSoftKeybord()},methods:{show:function(){this.isPassword=!this.isPassword},show1:function(){this.isPassword1=!this.isPassword1},getCodeValue:function(t){this.code=t.detail.value},getPassword:function(t){this.password=t.detail.value},getPassword1:function(t){this.password1=t.detail.value},getCode:function(){var e=this;t.request({method:"POST",data:{email:this.email1},url:this.url+"setemail/",header:{Authorization:"JWT "+this.global_.token},success:function(t){var s=121,o=setInterval(function(){s--,s<=0?(clearInterval(o),e.codename="重新发送",e.disabled=!1):(e.codename=s+"s",e.disabled=!0)},1e3)}})},getCodeNumber:function(t){this.getCode()},setPwd:function(){if(""==this.code)return t.showToast({icon:"none",title:"请输入验证码",duration:2e3}),!1;if(""==this.password)return t.showToast({icon:"none",title:"请输入交易密码",duration:2e3}),!1;var e=this.global_.checkPassword(this.password);return e?""==this.password1?(t.showToast({icon:"none",title:"请确认交易密码",duration:2e3}),!1):this.password1!==this.password?(t.showToast({icon:"none",title:"两次密码不一致",duration:2e3}),!1):void t.request({url:this.url+"setmoney/",method:"POST",data:{email:this.email1,email_msg:this.code,password:this.password,password1:this.password1},header:{Authorization:"JWT "+this.global_.token},success:function(e){200==e.statusCode&&(t.showToast({title:"资金密码已修改",icon:"none",duration:2e3}),t.switchTab({url:"../my/my"})),400==e.statusCode&&t.showToast({title:"验证码错误",icon:"none",duration:2e3})}}):(t.showToast({title:"交易密码为六位数字",icon:"none",duration:2e3}),!1)}}};e.default=s}).call(this,s("6e42")["default"])},"5d2c":function(t,e,s){"use strict";s.r(e);var o=s("3838"),a=s("8ed4");for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);s("06e8");var i=s("2877"),r=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=r.exports},"8ed4":function(t,e,s){"use strict";s.r(e);var o=s("529b"),a=s.n(o);for(var n in o)"default"!==n&&function(t){s.d(e,t,function(){return o[t]})}(n);e["default"]=a.a},a957:function(t,e,s){}},[["1a8b","common/runtime","common/vendor"]]]);
});
require('my/change-otherPassword/change_otherPassword.js');
__wxRoute = 'my/my-machine/my-machine';__wxRouteBegin = true;__wxAppCurrentFile__ = 'my/my-machine/my-machine.js';

define('my/my-machine/my-machine.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/my-machine/my-machine"],{"12d8":function(e,n,t){},"2f92":function(e,n,t){"use strict";(function(e){t("9c0b"),t("921b");a(t("66fd"));var n=a(t("cb73"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},4214:function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement;e._self._c},u=[];t.d(n,"a",function(){return a}),t.d(n,"b",function(){return u})},"5e0c":function(e,n,t){"use strict";(function(e,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{flag:!0,user_machine:"",machine_id:"",user_agreement:"",shade:!1}},onShow:function(){var n=this;e.request({url:this.url+"usermachine/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){console.log(t(e," at my\\my-machine\\my-machine.vue:94")),n.user_machine=e.data.data.machine_datas,0==n.user_machine.length&&(n.flag=!1),n.user_agreement=e.data.data.user_agreement,0==n.user_agreement?n.shade=!0:1==n.user_agreement&&(n.shade=!1),console.log(t(n.user_agreement," at my\\my-machine\\my-machine.vue:108"))},fail:function(){},complete:function(){}})},methods:{sure:function(){e.navigateTo({url:"../../pages/agreement/agreement"})},cancel:function(){e.navigateBack({url:"../my/my"})},onNavigationBarButtonTap:function(){e.navigateTo({url:"../../pages/agreement/agreement"})},select:function(n){e.navigateTo({url:"../machine-detail/machine-detail?machine_id="+n.machine_id})}}};n.default=a}).call(this,t("6e42")["default"],t("0de9")["default"])},cb73:function(e,n,t){"use strict";t.r(n);var a=t("4214"),u=t("d695");for(var c in u)"default"!==c&&function(e){t.d(n,e,function(){return u[e]})}(c);t("f90e");var i=t("2877"),r=Object(i["a"])(u["default"],a["a"],a["b"],!1,null,null,null);n["default"]=r.exports},d695:function(e,n,t){"use strict";t.r(n);var a=t("5e0c"),u=t.n(a);for(var c in a)"default"!==c&&function(e){t.d(n,e,function(){return a[e]})}(c);n["default"]=u.a},f90e:function(e,n,t){"use strict";var a=t("12d8"),u=t.n(a);u.a}},[["2f92","common/runtime","common/vendor"]]]);
});
require('my/my-machine/my-machine.js');
__wxRoute = 'my/machine-detail/machine-detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'my/machine-detail/machine-detail.js';

define('my/machine-detail/machine-detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/machine-detail/machine-detail"],{"128f":function(t,e,n){},"2f4d":function(t,e,n){"use strict";var a=n("128f"),i=n.n(a);i.a},"49b3":function(t,e,n){"use strict";(function(t){var n;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{tabCurrentIndex:0,machine_config:"",machine_status:"",machine_id:"",navList:[{state:0,text:"矿机配置",orderList:[]},{state:1,text:"矿机状态",orderList:[]},{state:2,text:"矿机记录",orderList:[]}]}},onLoad:function(e){n=this,this.machine_id=e.machine_id,this.tabCurrentIndex=0,t.request({url:this.url+"usermachineinfo/1/"+this.machine_id,method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(t){n.machine_config=t.data.data}}),t.request({url:this.url+"usermachineinfo/2/"+this.machine_id,method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(t){n.machine_status=t.data.data}})},methods:{changeTab:function(t){this.tabCurrentIndex=t.target.current},tabClick:function(t){n.tabCurrentIndex=t}}};e.default=a}).call(this,n("6e42")["default"])},"57b9":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},6081:function(t,e,n){"use strict";n.r(e);var a=n("49b3"),i=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);e["default"]=i.a},"6e23":function(t,e,n){"use strict";(function(t){n("9c0b"),n("921b");a(n("66fd"));var e=a(n("b6e8"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},b6e8:function(t,e,n){"use strict";n.r(e);var a=n("57b9"),i=n("6081");for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);n("2f4d");var r=n("2877"),c=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports}},[["6e23","common/runtime","common/vendor"]]]);
});
require('my/machine-detail/machine-detail.js');
__wxRoute = 'my/my-wallet/my-wallet';__wxRouteBegin = true;__wxAppCurrentFile__ = 'my/my-wallet/my-wallet.js';

define('my/my-wallet/my-wallet.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/my-wallet/my-wallet"],{"303c":function(t,e,a){},"40a5":function(t,e,a){"use strict";a.r(e);var n=a("51ff"),r=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=r.a},"51ff":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(){return a.e("common/dy-Date").then(a.bind(null,"f716"))},r={data:function(){return{flag:!1,date:"本月",num:"0",ber:"",nuber:"",fee:"",entin:"",teran:"",month_profit:"0",profit_records:[],month_bill:"",bill_records:[],length:"",length1:""}},components:{dyDatePicker:n},onShow:function(){var e=this,a=new Date,n=a.getFullYear("-"),r=a.getMonth()+1,o=n+"-"+r;e.teran=o,t.request({url:this.url+"assets/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(t){e.num=t.data.availed_num,e.ber=t.data.fil_count,e.nuber=t.data.locked_num,e.fee=t.data.fee}}),t.request({url:this.url+"assets/month/profit/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{month:o},success:function(t){e.month_profit=t.data.data.month_profit,e.profit_records=t.data.data.profit_records,e.length=t.data.data.profit_records.length}}),t.request({url:this.url+"assets/month/bill/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{month:o},success:function(t){e.month_bill=t.data.data.month_bill,e.bill_records=t.data.data.bill_records,e.length1=t.data.data.bill_records.length,0==e.length&&0==e.length1?e.flag=!0:e.flag=!1}})},methods:{DateChang:function(e){var a=this;a.date=e,t.request({url:this.url+"assets/month/profit/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{month:e},success:function(t){a.month_profit=t.data.data.month_profit,a.profit_records=t.data.data.profit_records,a.length=t.data.data.profit_records.length,0==a.length&&0==a.length1?a.flag=!0:a.flag=!1}}),t.request({url:this.url+"assets/month/bill/",method:"GET",header:{Authorization:"JWT "+this.global_.token},data:{month:e},success:function(t){a.month_bill=t.data.data.month_bill,a.bill_records=t.data.data.bill_records,a.length1=t.data.data.bill_records.length,0==a.length&&0==a.length1?a.flag=!0:a.flag=!1}})},transfer:function(){t.navigateTo({url:"../transfer/transfer?bar="+this.num+"&fee="+this.fee})}}};e.default=r}).call(this,a("6e42")["default"])},"7f56":function(t,e,a){"use strict";a.r(e);var n=a("e852"),r=a("40a5");for(var o in r)"default"!==o&&function(t){a.d(e,t,function(){return r[t]})}(o);a("afa7");var l=a("2877"),i=Object(l["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=i.exports},afa7:function(t,e,a){"use strict";var n=a("303c"),r=a.n(n);r.a},d36b:function(t,e,a){"use strict";(function(t){a("9c0b"),a("921b");n(a("66fd"));var e=n(a("7f56"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},e852:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},r=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return r})}},[["d36b","common/runtime","common/vendor"]]]);
});
require('my/my-wallet/my-wallet.js');
__wxRoute = 'my/suggest/suggest';__wxRouteBegin = true;__wxAppCurrentFile__ = 'my/suggest/suggest.js';

define('my/suggest/suggest.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/suggest/suggest"],{"0f3d":function(t,e,n){"use strict";var a=n("aba2"),s=n.n(a);s.a},"32de":function(t,e,n){"use strict";(function(t){n("9c0b"),n("921b");a(n("66fd"));var e=a(n("ac1a"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"9c9c":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return s})},aba2:function(t,e,n){},ac1a:function(t,e,n){"use strict";n.r(e);var a=n("9c9c"),s=n("f74a");for(var i in s)"default"!==i&&function(t){n.d(e,t,function(){return s[t]})}(i);n("0f3d");var u=n("2877"),o=Object(u["a"])(s["default"],a["a"],a["b"],!1,null,null,null);e["default"]=o.exports},f74a:function(t,e,n){"use strict";n.r(e);var a=n("fd68"),s=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=s.a},fd68:function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=function(){return n.e("components/uni-nav-bar/uni-nav-bar").then(n.bind(null,"ba27"))},i={data:function(){return{flag:!1,hidden:!0,title:"",desc:"",messages:"",id:"",add_time:""}},components:{uniNavBar:s},onLoad:function(){var e=this;t.request({url:this.url+"advicefeedback/",method:"GET",data:{title:this.title,message:this.desc},header:{Authorization:"JWT "+this.global_.token},success:function(t){console.log(a(t," at my\\suggest\\suggest.vue:76")),""==t.data.data?e.flag=!0:e.flag=!1,e.messages=t.data.data;for(var n=0;n<e.messages.length;n++){var s=e.messages[n].add_time,i=s.substr(0,10)+"  "+s.substr(11,8);e.messages[n].add_time=i;var u=e.messages[n].updated_time,o=u.substr(0,10)+"  "+u.substr(11,8);e.messages[n].updated_time=o}}})},onBackPress:function(t){plus.key.hideSoftKeybord()},methods:{getTitleContent:function(t){this.title=t.detail.value},getDescContent:function(t){this.desc=t.detail.value},addMessage:function(){this.hidden=!1},close:function(){this.hidden=!0},back:function(){t.navigateBack({delta:1})},submit:function(){var e=this;return""==this.title?(t.showToast({title:"标题不能为空",icon:"none",duration:2e3}),!1):""==this.desc?(t.showToast({title:"请描述您的问题",icon:"none",duration:2e3}),!1):void t.request({url:this.url+"advicefeedback/",method:"POST",data:{title:this.title,message:this.desc},header:{Authorization:"JWT "+this.global_.token},success:function(n){console.log(a(n," at my\\suggest\\suggest.vue:144")),200==n.statusCode?(e.hidden=!0,e.title="",e.desc="",t.showToast({title:"提交成功",icon:"none",duration:2e3})):t.showToast({title:"请输入文字信息",icon:"none",duration:2e3});var s=getCurrentPages().pop();void 0!=s&&null!=s&&s.onLoad()}})},detail:function(e){var n=JSON.stringify(e);t.navigateTo({url:"../suggest-detail/suggest-detail?message="+n})},identity:function(){t.navigateTo({url:"../identity/identity"})}}};e.default=i}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["32de","common/runtime","common/vendor"]]]);
});
require('my/suggest/suggest.js');
__wxRoute = 'my/suggest-detail/suggest-detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'my/suggest-detail/suggest-detail.js';

define('my/suggest-detail/suggest-detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/suggest-detail/suggest-detail"],{"119a":function(e,t,n){"use strict";n.r(t);var u=n("8b08"),a=n.n(u);for(var r in u)"default"!==r&&function(e){n.d(t,e,function(){return u[e]})}(r);t["default"]=a.a},"24bd":function(e,t,n){"use strict";n.r(t);var u=n("7a65"),a=n("119a");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);n("3225");var i=n("2877"),s=Object(i["a"])(a["default"],u["a"],u["b"],!1,null,null,null);t["default"]=s.exports},3225:function(e,t,n){"use strict";var u=n("f677"),a=n.n(u);a.a},"7a65":function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return a})},"8b08":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{hidden:!0,message:""}},onLoad:function(e){var t=e.message,n=JSON.parse(t);this.message=n,null!=this.message.reply&&(this.hidden=!1)}};t.default=u},b9e4:function(e,t,n){"use strict";(function(e){n("9c0b"),n("921b");u(n("66fd"));var t=u(n("24bd"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},f677:function(e,t,n){}},[["b9e4","common/runtime","common/vendor"]]]);
});
require('my/suggest-detail/suggest-detail.js');
__wxRoute = 'my/transfer/transfer';__wxRouteBegin = true;__wxAppCurrentFile__ = 'my/transfer/transfer.js';

define('my/transfer/transfer.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/transfer/transfer"],{"0f3a":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(){return Promise.all([n.e("common/vendor"),n.e("components/keyboard-package/keyboard-package")]).then(n.bind(null,"bd7f"))},s=function(){return Promise.all([n.e("common/vendor"),n.e("components/password-input/password-input")]).then(n.bind(null,"d391"))},a={data:function(){return{bar:"",moder:"",fee:"",fil_num:"",password:"",numberList:[],length:6,type:"number",passIn:!1,wallet_value:""}},components:{keyboardPackage:o,passwordInput:s},onLoad:function(t){this.bar=t.bar,this.fee=t.fee,this.wallet_value=t.wallet_value},onBackPress:function(t){plus.key.hideSoftKeybord()},methods:{getFilNum:function(t){this.fil_num=t.detail.value},getTranferAdd:function(t){this.wallet_value=t.detail.value},link:function(){var e=this;t.request({url:this.url+"walletaddress/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(n){400==n.statusCode&&t.showToast({title:"用户未实名认证",icon:"none",duration:2e3}),201==n.statusCode&&t.showToast({title:"身份认证审核中，请等待",icon:"none",duration:2e3}),200==n.statusCode&&t.navigateTo({url:"../choose-address/choose-address?bar="+e.bar+"&fee="+e.fee}),302==n.statusCode&&t.showToast({title:"用户未设置资金密码",icon:"none",duration:2e3})}})},fusre:function(){this.fil_num=this.bar},clo:function(){this.passIn=!1,this.$refs["number"].close(),this.numberList.length=0},onChange:function(t){0==t.show&&(this.passIn=!1),this.numberList.length=0},onDelete:function(){this.numberList.pop()},onConfirm:function(){6!=this.numberList.length&&t.showToast({title:"请输入六位交易密码！",duration:2e3,icon:"none"})},onInput:function(e){var n=this;n.numberList.push(e),n.password=n.numberList.join().replace(/,/g,""),n.numberList.length>=n.length&&(t.request({url:n.url+"assets/capitalcode/",method:"POST",data:{capital_code:n.password},header:{Authorization:"JWT "+n.global_.token},success:function(e){if(400==e.statusCode){n.numberList.pop(),n.numberList.length=0,n.$refs.wrong.flag=!1;var o=e.data.data.err_num,s=5-o;n.$refs.wrong.tip="剩余"+s+"次机会"}423==e.statusCode&&(n.passIn=!1,n.$refs["number"].close(),t.showToast({title:"交易密码已锁定,请在今日24:00后进行交易",icon:"none",duration:2e3})),201==e.statusCode&&(n.passIn=!1,n.$refs["number"].close(),t.redirectTo({url:"../commit/commit?fil_num="+n.fil_num+"&wallet_value="+n.wallet_value}));var a=getCurrentPages().pop();void 0!=a&&null!=a&&a.onLoad()}}),this.numberList.length=0)},save:function(){var e=this,n=parseFloat(e.bar),o=parseFloat(e.fil_num);return""==e.wallet_value?(t.showToast({title:"转账地址不能为空",icon:"none",duration:2e3}),!1):""==e.fil_num?(t.showToast({title:"提币数量不能为空",icon:"none",duration:2e3}),!1):e.fil_num<.001?(t.showToast({title:"提币数量无效",icon:"none",duration:2e3}),!1):o>n?(t.showToast({title:"提币数量余额不足",icon:"none",duration:2e3}),!1):void t.request({url:e.url+"assets/transfer/",method:"POST",data:{fil_num:e.fil_num,address:e.wallet_value},header:{Authorization:"JWT "+this.global_.token},success:function(n){return 411==n.statusCode?(t.showToast({title:"未进行实名认证",icon:"none",duration:2e3}),!1):412==n.statusCode?(t.showToast({title:"实名认证中，请耐心等待",icon:"none",duration:2e3}),!1):403==n.statusCode?(t.showToast({title:"资金密码未设置",icon:"none",duration:2e3}),!1):400==n.statusCode?(t.showToast({title:"输入信息有误(提币地址最少32位)",icon:"none",duration:2e3}),!1):423==n.statusCode?(t.showToast({title:"交易密码已锁定,请在今日24:00后进行交易",icon:"none",duration:2e3}),!1):void(200==n.statusCode&&(e.passIn=!0,e.$refs["number"].open(),e.onInput(val)))}})}}};e.default=a}).call(this,n("6e42")["default"])},"243a":function(t,e,n){"use strict";n.r(e);var o=n("0f3a"),s=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=s.a},"2e46":function(t,e,n){"use strict";n.r(e);var o=n("8f05"),s=n("243a");for(var a in s)"default"!==a&&function(t){n.d(e,t,function(){return s[t]})}(a);n("90d0");var i=n("2877"),u=Object(i["a"])(s["default"],o["a"],o["b"],!1,null,null,null);e["default"]=u.exports},"591a":function(t,e,n){},"8f05":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s})},"90c3":function(t,e,n){"use strict";(function(t){n("9c0b"),n("921b");o(n("66fd"));var e=o(n("2e46"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"90d0":function(t,e,n){"use strict";var o=n("591a"),s=n.n(o);s.a}},[["90c3","common/runtime","common/vendor"]]]);
});
require('my/transfer/transfer.js');
__wxRoute = 'my/commit/commit';__wxRouteBegin = true;__wxAppCurrentFile__ = 'my/commit/commit.js';

define('my/commit/commit.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/commit/commit"],{"233f":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{filNum:"",address:""}},onLoad:function(t){this.filNum=t.fil_num,this.address=t.wallet_value},methods:{save:function(){t.navigateBack({delta:2})}},onBackPress:function(n){"backbutton"===n.from&&t.navigateBack({delta:2})}};n.default=e}).call(this,e("6e42")["default"])},"2f1d":function(t,n,e){"use strict";e.r(n);var u=e("233f"),a=e.n(u);for(var c in u)"default"!==c&&function(t){e.d(n,t,function(){return u[t]})}(c);n["default"]=a.a},"90dc":function(t,n,e){},a817:function(t,n,e){"use strict";var u=e("90dc"),a=e.n(u);a.a},c80b:function(t,n,e){"use strict";(function(t){e("9c0b"),e("921b");u(e("66fd"));var n=u(e("ef53"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},e68f:function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a})},ef53:function(t,n,e){"use strict";e.r(n);var u=e("e68f"),a=e("2f1d");for(var c in a)"default"!==c&&function(t){e.d(n,t,function(){return a[t]})}(c);e("a817");var f=e("2877"),o=Object(f["a"])(a["default"],u["a"],u["b"],!1,null,null,null);n["default"]=o.exports}},[["c80b","common/runtime","common/vendor"]]]);
});
require('my/commit/commit.js');
__wxRoute = 'my/choose-address/choose-address';__wxRouteBegin = true;__wxAppCurrentFile__ = 'my/choose-address/choose-address.js';

define('my/choose-address/choose-address.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["my/choose-address/choose-address"],{"08da":function(t,e,a){"use strict";var n=a("3b4f"),r=a.n(n);r.a},"282b":function(t,e,a){"use strict";a.r(e);var n=a("c542"),r=a("9baa");for(var u in r)"default"!==u&&function(t){a.d(e,t,function(){return r[t]})}(u);a("08da");var o=a("2877"),l=Object(o["a"])(r["default"],n["a"],n["b"],!1,null,null,null);e["default"]=l.exports},"3b4f":function(t,e,a){},"45b4":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{wallet_value:"",wallet_key:"",address_out:"",flag:!0,right:"",id:"",shade:!0,bar:"",fee:"",user_id:""}},onLoad:function(e){var a=this;a.bar=e.bar,a.fee=e.fee,t.request({url:this.url+"walletaddress/",method:"GET",header:{Authorization:"JWT "+this.global_.token},success:function(e){302==e.statusCode&&t.showToast({title:"资金密码未设置",icon:"none",duration:2e3}),""==e.data.data?a.flag=!1:a.flag=!0,a.address_out=e.data.data}})},methods:{click:function(e){t.redirectTo({url:"../transfer/transfer?wallet_value="+e.wallet_value+"&bar="+this.bar+"&fee="+this.fee})}}};e.default=a}).call(this,a("6e42")["default"])},"6d8f":function(t,e,a){"use strict";(function(t){a("9c0b"),a("921b");n(a("66fd"));var e=n(a("282b"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"9baa":function(t,e,a){"use strict";a.r(e);var n=a("45b4"),r=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,function(){return n[t]})}(u);e["default"]=r.a},c542:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},r=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return r})}},[["6d8f","common/runtime","common/vendor"]]]);
});
require('my/choose-address/choose-address.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

