(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jr="168",ii={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ei={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vl=0,ma=1,xl=2,Po=1,Ml=2,Je=3,nn=0,Se=1,Qe=2,mn=0,si=1,_a=2,ga=3,va=4,Sl=5,wn=100,El=101,yl=102,Tl=103,bl=104,Al=200,wl=201,Rl=202,Cl=203,mr=204,_r=205,Pl=206,Ll=207,Dl=208,Ul=209,Il=210,Nl=211,Fl=212,Ol=213,Bl=214,zl=0,Hl=1,Vl=2,xs=3,Gl=4,kl=5,Wl=6,Xl=7,Kr=0,ql=1,Yl=2,_n=0,jl=1,Kl=2,Zl=3,$l=4,Jl=5,Ql=6,tc=7,Lo=300,oi=301,li=302,gr=303,vr=304,Rs=306,Ms=1e3,Cn=1001,xr=1002,Pe=1003,ec=1004,Bi=1005,Fe=1006,Os=1007,Pn=1008,sn=1009,Do=1010,Uo=1011,wi=1012,Zr=1013,Ln=1014,tn=1015,Li=1016,$r=1017,Jr=1018,ci=1020,Io=35902,No=1021,Fo=1022,Oe=1023,Oo=1024,Bo=1025,ri=1026,hi=1027,zo=1028,Qr=1029,Ho=1030,ta=1031,ea=1033,ds=33776,fs=33777,ps=33778,ms=33779,Mr=35840,Sr=35841,Er=35842,yr=35843,Tr=36196,br=37492,Ar=37496,wr=37808,Rr=37809,Cr=37810,Pr=37811,Lr=37812,Dr=37813,Ur=37814,Ir=37815,Nr=37816,Fr=37817,Or=37818,Br=37819,zr=37820,Hr=37821,_s=36492,Vr=36494,Gr=36495,Vo=36283,kr=36284,Wr=36285,Xr=36286,nc=3200,ic=3201,Go=0,sc=1,pn="",Ne="srgb",vn="srgb-linear",na="display-p3",Cs="display-p3-linear",Ss="linear",jt="srgb",Es="rec709",ys="p3",On=7680,xa=519,rc=512,ac=513,oc=514,ko=515,lc=516,cc=517,hc=518,uc=519,Ma=35044,Sa="300 es",en=2e3,Ts=2001;class In{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ea=1234567;const Ti=Math.PI/180,Ri=180/Math.PI;function di(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(fe[i&255]+fe[i>>8&255]+fe[i>>16&255]+fe[i>>24&255]+"-"+fe[t&255]+fe[t>>8&255]+"-"+fe[t>>16&15|64]+fe[t>>24&255]+"-"+fe[e&63|128]+fe[e>>8&255]+"-"+fe[e>>16&255]+fe[e>>24&255]+fe[n&255]+fe[n>>8&255]+fe[n>>16&255]+fe[n>>24&255]).toLowerCase()}function me(i,t,e){return Math.max(t,Math.min(e,i))}function ia(i,t){return(i%t+t)%t}function dc(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function fc(i,t,e){return i!==t?(e-i)/(t-i):0}function bi(i,t,e){return(1-e)*i+e*t}function pc(i,t,e,n){return bi(i,t,1-Math.exp(-e*n))}function mc(i,t=1){return t-Math.abs(ia(i,t*2)-t)}function _c(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function gc(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function vc(i,t){return i+Math.floor(Math.random()*(t-i+1))}function xc(i,t){return i+Math.random()*(t-i)}function Mc(i){return i*(.5-Math.random())}function Sc(i){i!==void 0&&(Ea=i);let t=Ea+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ec(i){return i*Ti}function yc(i){return i*Ri}function Tc(i){return(i&i-1)===0&&i!==0}function bc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ac(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wc(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),m=r((n-t)/2),_=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*_,l*m,o*c);break;case"YXY":i.set(l*m,o*h,l*_,o*c);break;case"ZYZ":i.set(l*_,l*m,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ti(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Rc={DEG2RAD:Ti,RAD2DEG:Ri,generateUUID:di,clamp:me,euclideanModulo:ia,mapLinear:dc,inverseLerp:fc,lerp:bi,damp:pc,pingpong:mc,smoothstep:_c,smootherstep:gc,randInt:vc,randFloat:xc,randFloatSpread:Mc,seededRandom:Sc,degToRad:Ec,radToDeg:yc,isPowerOfTwo:Tc,ceilPowerOfTwo:bc,floorPowerOfTwo:Ac,setQuaternionFromProperEuler:wc,normalize:_e,denormalize:ti};class Tt{constructor(t=0,e=0){Tt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dt{constructor(t,e,n,s,r,a,o,l,c){Dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],m=n[5],_=n[8],v=s[0],p=s[3],d=s[6],y=s[1],S=s[4],b=s[7],B=s[2],A=s[5],R=s[8];return r[0]=a*v+o*y+l*B,r[3]=a*p+o*S+l*A,r[6]=a*d+o*b+l*R,r[1]=c*v+h*y+u*B,r[4]=c*p+h*S+u*A,r[7]=c*d+h*b+u*R,r[2]=f*v+m*y+_*B,r[5]=f*p+m*S+_*A,r[8]=f*d+m*b+_*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,m=c*r-a*l,_=e*u+n*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=f*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=m*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Bs.makeScale(t,e)),this}rotate(t){return this.premultiply(Bs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Bs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Bs=new Dt;function Wo(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ci(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cc(){const i=Ci("canvas");return i.style.display="block",i}const ya={};function Ai(i){i in ya||(ya[i]=!0,console.warn(i))}function Pc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const Ta=new Dt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ba=new Dt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),mi={[vn]:{transfer:Ss,primaries:Es,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Ne]:{transfer:jt,primaries:Es,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Cs]:{transfer:Ss,primaries:ys,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(ba),fromReference:i=>i.applyMatrix3(Ta)},[na]:{transfer:jt,primaries:ys,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(ba),fromReference:i=>i.applyMatrix3(Ta).convertLinearToSRGB()}},Lc=new Set([vn,Cs]),kt={enabled:!0,_workingColorSpace:vn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Lc.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=mi[t].toReference,s=mi[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return mi[i].primaries},getTransfer:function(i){return i===pn?Ss:mi[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(mi[t].luminanceCoefficients)}};function ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Bn;class Dc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Bn===void 0&&(Bn=Ci("canvas")),Bn.width=t.width,Bn.height=t.height;const n=Bn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Bn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ci("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ai(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ai(e[n]/255)*255):e[n]=ai(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Uc=0;class Xo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uc++}),this.uuid=di(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Hs(s[a].image)):r.push(Hs(s[a]))}else r=Hs(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Hs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Dc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ic=0;class xe extends In{constructor(t=xe.DEFAULT_IMAGE,e=xe.DEFAULT_MAPPING,n=Cn,s=Cn,r=Fe,a=Pn,o=Oe,l=sn,c=xe.DEFAULT_ANISOTROPY,h=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ic++}),this.uuid=di(),this.name="",this.source=new Xo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lo)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ms:t.x=t.x-Math.floor(t.x);break;case Cn:t.x=t.x<0?0:1;break;case xr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ms:t.y=t.y-Math.floor(t.y);break;case Cn:t.y=t.y<0?0:1;break;case xr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}xe.DEFAULT_IMAGE=null;xe.DEFAULT_MAPPING=Lo;xe.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,s=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],_=l[9],v=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,b=(m+1)/2,B=(d+1)/2,A=(h+f)/4,R=(u+v)/4,F=(_+p)/4;return S>b&&S>B?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=A/n,r=R/n):b>B?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=A/s,r=F/s):B<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(B),n=R/r,s=F/r),this.set(n,s,r,e),this}let y=Math.sqrt((p-_)*(p-_)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(u-v)/y,this.z=(f-h)/y,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nc extends In{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new xe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Xo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends Nc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class qo extends xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fc extends xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Un{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[a+0],m=r[a+1],_=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=_,t[e+3]=v;return}if(u!==v||l!==f||c!==m||h!==_){let p=1-o;const d=l*f+c*m+h*_+u*v,y=d>=0?1:-1,S=1-d*d;if(S>Number.EPSILON){const B=Math.sqrt(S),A=Math.atan2(B,d*y);p=Math.sin(p*A)/B,o=Math.sin(o*A)/B}const b=o*y;if(l=l*p+f*b,c=c*p+m*b,h=h*p+_*b,u=u*p+v*b,p===1-o){const B=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=B,c*=B,h*=B,u*=B}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],m=r[a+2],_=r[a+3];return t[e]=o*_+h*u+l*m-c*f,t[e+1]=l*_+h*f+c*u-o*m,t[e+2]=c*_+h*m+o*f-l*u,t[e+3]=h*_-o*u-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*m*_,this._y=c*m*u-f*h*_,this._z=c*h*_+f*m*u,this._w=c*h*u-f*m*_;break;case"YXZ":this._x=f*h*u+c*m*_,this._y=c*m*u-f*h*_,this._z=c*h*_-f*m*u,this._w=c*h*u+f*m*_;break;case"ZXY":this._x=f*h*u-c*m*_,this._y=c*m*u+f*h*_,this._z=c*h*_+f*m*u,this._w=c*h*u-f*m*_;break;case"ZYX":this._x=f*h*u-c*m*_,this._y=c*m*u+f*h*_,this._z=c*h*_-f*m*u,this._w=c*h*u+f*m*_;break;case"YZX":this._x=f*h*u+c*m*_,this._y=c*m*u+f*h*_,this._z=c*h*_-f*m*u,this._w=c*h*u-f*m*_;break;case"XZY":this._x=f*h*u-c*m*_,this._y=c*m*u-f*h*_,this._z=c*h*_+f*m*u,this._w=c*h*u+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Aa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Aa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Vs.copy(this).projectOnVector(t),this.sub(Vs)}reflect(t){return this.sub(Vs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vs=new U,Aa=new Un;class Di{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(De.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(De.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=De.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,De):De.fromBufferAttribute(r,a),De.applyMatrix4(t.matrixWorld),this.expandByPoint(De);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zi.copy(n.boundingBox)),zi.applyMatrix4(t.matrixWorld),this.union(zi)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,De),De.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_i),Hi.subVectors(this.max,_i),zn.subVectors(t.a,_i),Hn.subVectors(t.b,_i),Vn.subVectors(t.c,_i),on.subVectors(Hn,zn),ln.subVectors(Vn,Hn),Mn.subVectors(zn,Vn);let e=[0,-on.z,on.y,0,-ln.z,ln.y,0,-Mn.z,Mn.y,on.z,0,-on.x,ln.z,0,-ln.x,Mn.z,0,-Mn.x,-on.y,on.x,0,-ln.y,ln.x,0,-Mn.y,Mn.x,0];return!Gs(e,zn,Hn,Vn,Hi)||(e=[1,0,0,0,1,0,0,0,1],!Gs(e,zn,Hn,Vn,Hi))?!1:(Vi.crossVectors(on,ln),e=[Vi.x,Vi.y,Vi.z],Gs(e,zn,Hn,Vn,Hi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,De).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(De).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qe),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const qe=[new U,new U,new U,new U,new U,new U,new U,new U],De=new U,zi=new Di,zn=new U,Hn=new U,Vn=new U,on=new U,ln=new U,Mn=new U,_i=new U,Hi=new U,Vi=new U,Sn=new U;function Gs(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Sn.fromArray(i,r);const o=s.x*Math.abs(Sn.x)+s.y*Math.abs(Sn.y)+s.z*Math.abs(Sn.z),l=t.dot(Sn),c=e.dot(Sn),h=n.dot(Sn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Oc=new Di,gi=new U,ks=new U;class Ui{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Oc.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gi.subVectors(t,this.center);const e=gi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(gi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ks.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gi.copy(t.center).add(ks)),this.expandByPoint(gi.copy(t.center).sub(ks))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ye=new U,Ws=new U,Gi=new U,cn=new U,Xs=new U,ki=new U,qs=new U;class Ps{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ye)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ye.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ye.copy(this.origin).addScaledVector(this.direction,e),Ye.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ws.copy(t).add(e).multiplyScalar(.5),Gi.copy(e).sub(t).normalize(),cn.copy(this.origin).sub(Ws);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Gi),o=cn.dot(this.direction),l=-cn.dot(Gi),c=cn.lengthSq(),h=Math.abs(1-a*a);let u,f,m,_;if(h>0)if(u=a*l-o,f=a*o-l,_=r*h,u>=0)if(f>=-_)if(f<=_){const v=1/h;u*=v,f*=v,m=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;else f<=-_?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=_?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ws).addScaledVector(Gi,f),m}intersectSphere(t,e){Ye.subVectors(t.center,this.origin);const n=Ye.dot(this.direction),s=Ye.dot(Ye)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Ye)!==null}intersectTriangle(t,e,n,s,r){Xs.subVectors(e,t),ki.subVectors(n,t),qs.crossVectors(Xs,ki);let a=this.direction.dot(qs),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;cn.subVectors(this.origin,t);const l=o*this.direction.dot(ki.crossVectors(cn,ki));if(l<0)return null;const c=o*this.direction.dot(Xs.cross(cn));if(c<0||l+c>a)return null;const h=-o*cn.dot(qs);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(t,e,n,s,r,a,o,l,c,h,u,f,m,_,v,p){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,m,_,v,p)}set(t,e,n,s,r,a,o,l,c,h,u,f,m,_,v,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=_,d[11]=v,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Gn.setFromMatrixColumn(t,0).length(),r=1/Gn.setFromMatrixColumn(t,1).length(),a=1/Gn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,m=a*u,_=o*h,v=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+_*c,e[5]=f-v*c,e[9]=-o*l,e[2]=v-f*c,e[6]=_+m*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,m=l*u,_=c*h,v=c*u;e[0]=f+v*o,e[4]=_*o-m,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=m*o-_,e[6]=v+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,m=l*u,_=c*h,v=c*u;e[0]=f-v*o,e[4]=-a*u,e[8]=_+m*o,e[1]=m+_*o,e[5]=a*h,e[9]=v-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,m=a*u,_=o*h,v=o*u;e[0]=l*h,e[4]=_*c-m,e[8]=f*c+v,e[1]=l*u,e[5]=v*c+f,e[9]=m*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,m=a*c,_=o*l,v=o*c;e[0]=l*h,e[4]=v-f*u,e[8]=_*u+m,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=m*u+_,e[10]=f-v*u}else if(t.order==="XZY"){const f=a*l,m=a*c,_=o*l,v=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+v,e[5]=a*h,e[9]=m*u-_,e[2]=_*u-m,e[6]=o*h,e[10]=v*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bc,t,zc)}lookAt(t,e,n){const s=this.elements;return Te.subVectors(t,e),Te.lengthSq()===0&&(Te.z=1),Te.normalize(),hn.crossVectors(n,Te),hn.lengthSq()===0&&(Math.abs(n.z)===1?Te.x+=1e-4:Te.z+=1e-4,Te.normalize(),hn.crossVectors(n,Te)),hn.normalize(),Wi.crossVectors(Te,hn),s[0]=hn.x,s[4]=Wi.x,s[8]=Te.x,s[1]=hn.y,s[5]=Wi.y,s[9]=Te.y,s[2]=hn.z,s[6]=Wi.z,s[10]=Te.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],m=n[13],_=n[2],v=n[6],p=n[10],d=n[14],y=n[3],S=n[7],b=n[11],B=n[15],A=s[0],R=s[4],F=s[8],E=s[12],M=s[1],C=s[5],G=s[9],z=s[13],j=s[2],Y=s[6],k=s[10],Z=s[14],H=s[3],at=s[7],ht=s[11],mt=s[15];return r[0]=a*A+o*M+l*j+c*H,r[4]=a*R+o*C+l*Y+c*at,r[8]=a*F+o*G+l*k+c*ht,r[12]=a*E+o*z+l*Z+c*mt,r[1]=h*A+u*M+f*j+m*H,r[5]=h*R+u*C+f*Y+m*at,r[9]=h*F+u*G+f*k+m*ht,r[13]=h*E+u*z+f*Z+m*mt,r[2]=_*A+v*M+p*j+d*H,r[6]=_*R+v*C+p*Y+d*at,r[10]=_*F+v*G+p*k+d*ht,r[14]=_*E+v*z+p*Z+d*mt,r[3]=y*A+S*M+b*j+B*H,r[7]=y*R+S*C+b*Y+B*at,r[11]=y*F+S*G+b*k+B*ht,r[15]=y*E+S*z+b*Z+B*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],m=t[14],_=t[3],v=t[7],p=t[11],d=t[15];return _*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*m-n*l*m)+v*(+e*l*m-e*c*f+r*a*f-s*a*m+s*c*h-r*l*h)+p*(+e*c*u-e*o*m-r*a*u+n*a*m+r*o*h-n*c*h)+d*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],m=t[11],_=t[12],v=t[13],p=t[14],d=t[15],y=u*p*c-v*f*c+v*l*m-o*p*m-u*l*d+o*f*d,S=_*f*c-h*p*c-_*l*m+a*p*m+h*l*d-a*f*d,b=h*v*c-_*u*c+_*o*m-a*v*m-h*o*d+a*u*d,B=_*u*l-h*v*l-_*o*f+a*v*f+h*o*p-a*u*p,A=e*y+n*S+s*b+r*B;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=y*R,t[1]=(v*f*r-u*p*r-v*s*m+n*p*m+u*s*d-n*f*d)*R,t[2]=(o*p*r-v*l*r+v*s*c-n*p*c-o*s*d+n*l*d)*R,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*m-n*l*m)*R,t[4]=S*R,t[5]=(h*p*r-_*f*r+_*s*m-e*p*m-h*s*d+e*f*d)*R,t[6]=(_*l*r-a*p*r-_*s*c+e*p*c+a*s*d-e*l*d)*R,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*m+e*l*m)*R,t[8]=b*R,t[9]=(_*u*r-h*v*r-_*n*m+e*v*m+h*n*d-e*u*d)*R,t[10]=(a*v*r-_*o*r+_*n*c-e*v*c-a*n*d+e*o*d)*R,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*m-e*o*m)*R,t[12]=B*R,t[13]=(h*v*s-_*u*s+_*n*f-e*v*f-h*n*p+e*u*p)*R,t[14]=(_*o*s-a*v*s-_*n*l+e*v*l+a*n*p-e*o*p)*R,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,m=r*h,_=r*u,v=a*h,p=a*u,d=o*u,y=l*c,S=l*h,b=l*u,B=n.x,A=n.y,R=n.z;return s[0]=(1-(v+d))*B,s[1]=(m+b)*B,s[2]=(_-S)*B,s[3]=0,s[4]=(m-b)*A,s[5]=(1-(f+d))*A,s[6]=(p+y)*A,s[7]=0,s[8]=(_+S)*R,s[9]=(p-y)*R,s[10]=(1-(f+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Gn.set(s[0],s[1],s[2]).length();const a=Gn.set(s[4],s[5],s[6]).length(),o=Gn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ue.copy(this);const c=1/r,h=1/a,u=1/o;return Ue.elements[0]*=c,Ue.elements[1]*=c,Ue.elements[2]*=c,Ue.elements[4]*=h,Ue.elements[5]*=h,Ue.elements[6]*=h,Ue.elements[8]*=u,Ue.elements[9]*=u,Ue.elements[10]*=u,e.setFromRotationMatrix(Ue),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=en){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let m,_;if(o===en)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ts)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=en){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),f=(e+t)*c,m=(n+s)*h;let _,v;if(o===en)_=(a+r)*u,v=-2*u;else if(o===Ts)_=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=v,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Gn=new U,Ue=new Zt,Bc=new U(0,0,0),zc=new U(1,1,1),hn=new U,Wi=new U,Te=new U,wa=new Zt,Ra=new Un;class We{constructor(t=0,e=0,n=0,s=We.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(me(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ra.setFromEuler(this),this.setFromQuaternion(Ra,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}We.DEFAULT_ORDER="XYZ";class Yo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Hc=0;const Ca=new U,kn=new Un,je=new Zt,Xi=new U,vi=new U,Vc=new U,Gc=new Un,Pa=new U(1,0,0),La=new U(0,1,0),Da=new U(0,0,1),Ua={type:"added"},kc={type:"removed"},Wn={type:"childadded",child:null},Ys={type:"childremoved",child:null};class he extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hc++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=he.DEFAULT_UP.clone();const t=new U,e=new We,n=new Un,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Dt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=he.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return kn.setFromAxisAngle(t,e),this.quaternion.multiply(kn),this}rotateOnWorldAxis(t,e){return kn.setFromAxisAngle(t,e),this.quaternion.premultiply(kn),this}rotateX(t){return this.rotateOnAxis(Pa,t)}rotateY(t){return this.rotateOnAxis(La,t)}rotateZ(t){return this.rotateOnAxis(Da,t)}translateOnAxis(t,e){return Ca.copy(t).applyQuaternion(this.quaternion),this.position.add(Ca.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pa,t)}translateY(t){return this.translateOnAxis(La,t)}translateZ(t){return this.translateOnAxis(Da,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(je.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xi.copy(t):Xi.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),vi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?je.lookAt(vi,Xi,this.up):je.lookAt(Xi,vi,this.up),this.quaternion.setFromRotationMatrix(je),s&&(je.extractRotation(s.matrixWorld),kn.setFromRotationMatrix(je),this.quaternion.premultiply(kn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ua),Wn.child=t,this.dispatchEvent(Wn),Wn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kc),Ys.child=t,this.dispatchEvent(Ys),Ys.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),je.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),je.multiply(t.parent.matrixWorld)),t.applyMatrix4(je),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ua),Wn.child=t,this.dispatchEvent(Wn),Wn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vi,t,Vc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vi,Gc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),m=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}he.DEFAULT_UP=new U(0,1,0);he.DEFAULT_MATRIX_AUTO_UPDATE=!0;he.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ie=new U,Ke=new U,js=new U,Ze=new U,Xn=new U,qn=new U,Ia=new U,Ks=new U,Zs=new U,$s=new U;class Ge{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ie.subVectors(t,e),s.cross(Ie);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ie.subVectors(s,e),Ke.subVectors(n,e),js.subVectors(t,e);const a=Ie.dot(Ie),o=Ie.dot(Ke),l=Ie.dot(js),c=Ke.dot(Ke),h=Ke.dot(js),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,m=(c*l-o*h)*f,_=(a*h-o*l)*f;return r.set(1-m-_,_,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ze)===null?!1:Ze.x>=0&&Ze.y>=0&&Ze.x+Ze.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Ze)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ze.x),l.addScaledVector(a,Ze.y),l.addScaledVector(o,Ze.z),l)}static isFrontFacing(t,e,n,s){return Ie.subVectors(n,e),Ke.subVectors(t,e),Ie.cross(Ke).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ie.subVectors(this.c,this.b),Ke.subVectors(this.a,this.b),Ie.cross(Ke).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ge.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ge.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Ge.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Ge.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ge.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Xn.subVectors(s,n),qn.subVectors(r,n),Ks.subVectors(t,n);const l=Xn.dot(Ks),c=qn.dot(Ks);if(l<=0&&c<=0)return e.copy(n);Zs.subVectors(t,s);const h=Xn.dot(Zs),u=qn.dot(Zs);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Xn,a);$s.subVectors(t,r);const m=Xn.dot($s),_=qn.dot($s);if(_>=0&&m<=_)return e.copy(r);const v=m*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(qn,o);const p=h*_-m*u;if(p<=0&&u-h>=0&&m-_>=0)return Ia.subVectors(r,s),o=(u-h)/(u-h+(m-_)),e.copy(s).addScaledVector(Ia,o);const d=1/(p+v+f);return a=v*d,o=f*d,e.copy(n).addScaledVector(Xn,a).addScaledVector(qn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const jo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},un={h:0,s:0,l:0},qi={h:0,s:0,l:0};function Js(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,kt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,kt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=kt.workingColorSpace){if(t=ia(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Js(a,r,t+1/3),this.g=Js(a,r,t),this.b=Js(a,r,t-1/3)}return kt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const n=jo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}copyLinearToSRGB(t){return this.r=zs(t.r),this.g=zs(t.g),this.b=zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return kt.fromWorkingColorSpace(pe.copy(this),t),Math.round(me(pe.r*255,0,255))*65536+Math.round(me(pe.g*255,0,255))*256+Math.round(me(pe.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=kt.workingColorSpace){kt.fromWorkingColorSpace(pe.copy(this),e);const n=pe.r,s=pe.g,r=pe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=kt.workingColorSpace){return kt.fromWorkingColorSpace(pe.copy(this),e),t.r=pe.r,t.g=pe.g,t.b=pe.b,t}getStyle(t=Ne){kt.fromWorkingColorSpace(pe.copy(this),t);const e=pe.r,n=pe.g,s=pe.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(un),this.setHSL(un.h+t,un.s+e,un.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(un),t.getHSL(qi);const n=bi(un.h,qi.h,e),s=bi(un.s,qi.s,e),r=bi(un.l,qi.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pe=new Ut;Ut.NAMES=jo;let Wc=0;class rn extends In{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wc++}),this.uuid=di(),this.name="",this.type="Material",this.blending=si,this.side=nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mr,this.blendDst=_r,this.blendEquation=wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=On,this.stencilZFail=On,this.stencilZPass=On,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==si&&(n.blending=this.blending),this.side!==nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mr&&(n.blendSrc=this.blendSrc),this.blendDst!==_r&&(n.blendDst=this.blendDst),this.blendEquation!==wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==On&&(n.stencilFail=this.stencilFail),this.stencilZFail!==On&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==On&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ko extends rn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.combine=Kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const se=new U,Yi=new Tt;class ke{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ma,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Ai("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Yi.fromBufferAttribute(this,e),Yi.applyMatrix3(t),this.setXY(e,Yi.x,Yi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyMatrix3(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyMatrix4(t),this.setXYZ(e,se.x,se.y,se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.applyNormalMatrix(t),this.setXYZ(e,se.x,se.y,se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)se.fromBufferAttribute(this,e),se.transformDirection(t),this.setXYZ(e,se.x,se.y,se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ti(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=_e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ti(e,this.array)),e}setX(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ti(e,this.array)),e}setY(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ti(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ti(e,this.array)),e}setW(t,e){return this.normalized&&(e=_e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=_e(e,this.array),n=_e(n,this.array),s=_e(s,this.array),r=_e(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ma&&(t.usage=this.usage),t}}class Zo extends ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class $o extends ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ve extends ke{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Xc=0;const we=new Zt,Qs=new he,Yn=new U,be=new Di,xi=new Di,ce=new U;class ze extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xc++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wo(t)?$o:Zo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Dt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return we.makeRotationFromQuaternion(t),this.applyMatrix4(we),this}rotateX(t){return we.makeRotationX(t),this.applyMatrix4(we),this}rotateY(t){return we.makeRotationY(t),this.applyMatrix4(we),this}rotateZ(t){return we.makeRotationZ(t),this.applyMatrix4(we),this}translate(t,e,n){return we.makeTranslation(t,e,n),this.applyMatrix4(we),this}scale(t,e,n){return we.makeScale(t,e,n),this.applyMatrix4(we),this}lookAt(t){return Qs.lookAt(t),Qs.updateMatrix(),this.applyMatrix4(Qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yn).negate(),this.translate(Yn.x,Yn.y,Yn.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ve(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];be.setFromBufferAttribute(r),this.morphTargetsRelative?(ce.addVectors(this.boundingBox.min,be.min),this.boundingBox.expandByPoint(ce),ce.addVectors(this.boundingBox.max,be.max),this.boundingBox.expandByPoint(ce)):(this.boundingBox.expandByPoint(be.min),this.boundingBox.expandByPoint(be.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(be.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];xi.setFromBufferAttribute(o),this.morphTargetsRelative?(ce.addVectors(be.min,xi.min),be.expandByPoint(ce),ce.addVectors(be.max,xi.max),be.expandByPoint(ce)):(be.expandByPoint(xi.min),be.expandByPoint(xi.max))}be.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ce.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ce));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ce.fromBufferAttribute(o,c),l&&(Yn.fromBufferAttribute(t,c),ce.add(Yn)),s=Math.max(s,n.distanceToSquared(ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ke(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<n.count;F++)o[F]=new U,l[F]=new U;const c=new U,h=new U,u=new U,f=new Tt,m=new Tt,_=new Tt,v=new U,p=new U;function d(F,E,M){c.fromBufferAttribute(n,F),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),f.fromBufferAttribute(r,F),m.fromBufferAttribute(r,E),_.fromBufferAttribute(r,M),h.sub(c),u.sub(c),m.sub(f),_.sub(f);const C=1/(m.x*_.y-_.x*m.y);isFinite(C)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(u,-m.y).multiplyScalar(C),p.copy(u).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(C),o[F].add(v),o[E].add(v),o[M].add(v),l[F].add(p),l[E].add(p),l[M].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let F=0,E=y.length;F<E;++F){const M=y[F],C=M.start,G=M.count;for(let z=C,j=C+G;z<j;z+=3)d(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const S=new U,b=new U,B=new U,A=new U;function R(F){B.fromBufferAttribute(s,F),A.copy(B);const E=o[F];S.copy(E),S.sub(B.multiplyScalar(B.dot(E))).normalize(),b.crossVectors(A,E);const C=b.dot(l[F])<0?-1:1;a.setXYZW(F,S.x,S.y,S.z,C)}for(let F=0,E=y.length;F<E;++F){const M=y[F],C=M.start,G=M.count;for(let z=C,j=C+G;z<j;z+=3)R(t.getX(z+0)),R(t.getX(z+1)),R(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,u=new U;if(t)for(let f=0,m=t.count;f<m;f+=3){const _=t.getX(f+0),v=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ce.fromBufferAttribute(t,e),ce.normalize(),t.setXYZ(e,ce.x,ce.y,ce.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let m=0,_=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?m=l[v]*o.data.stride+o.offset:m=l[v]*h;for(let d=0;d<h;d++)f[_++]=c[m++]}return new ke(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=t(f,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Na=new Zt,En=new Ps,ji=new Ui,Fa=new U,jn=new U,Kn=new U,Zn=new U,tr=new U,Ki=new U,Zi=new Tt,$i=new Tt,Ji=new Tt,Oa=new U,Ba=new U,za=new U,Qi=new U,ts=new U;class Be extends he{constructor(t=new ze,e=new Ko){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Ki.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(tr.fromBufferAttribute(u,t),a?Ki.addScaledVector(tr,h):Ki.addScaledVector(tr.sub(e),h))}e.add(Ki)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ji.copy(n.boundingSphere),ji.applyMatrix4(r),En.copy(t.ray).recast(t.near),!(ji.containsPoint(En.origin)===!1&&(En.intersectSphere(ji,Fa)===null||En.origin.distanceToSquared(Fa)>(t.far-t.near)**2))&&(Na.copy(r).invert(),En.copy(t.ray).applyMatrix4(Na),!(n.boundingBox!==null&&En.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,En)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){const p=f[_],d=a[p.materialIndex],y=Math.max(p.start,m.start),S=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let b=y,B=S;b<B;b+=3){const A=o.getX(b),R=o.getX(b+1),F=o.getX(b+2);s=es(this,d,t,n,c,h,u,A,R,F),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let p=_,d=v;p<d;p+=3){const y=o.getX(p),S=o.getX(p+1),b=o.getX(p+2);s=es(this,a,t,n,c,h,u,y,S,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,v=f.length;_<v;_++){const p=f[_],d=a[p.materialIndex],y=Math.max(p.start,m.start),S=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let b=y,B=S;b<B;b+=3){const A=b,R=b+1,F=b+2;s=es(this,d,t,n,c,h,u,A,R,F),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let p=_,d=v;p<d;p+=3){const y=p,S=p+1,b=p+2;s=es(this,a,t,n,c,h,u,y,S,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function qc(i,t,e,n,s,r,a,o){let l;if(t.side===Se?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===nn,o),l===null)return null;ts.copy(o),ts.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ts);return c<e.near||c>e.far?null:{distance:c,point:ts.clone(),object:i}}function es(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,jn),i.getVertexPosition(l,Kn),i.getVertexPosition(c,Zn);const h=qc(i,t,e,n,jn,Kn,Zn,Qi);if(h){s&&(Zi.fromBufferAttribute(s,o),$i.fromBufferAttribute(s,l),Ji.fromBufferAttribute(s,c),h.uv=Ge.getInterpolation(Qi,jn,Kn,Zn,Zi,$i,Ji,new Tt)),r&&(Zi.fromBufferAttribute(r,o),$i.fromBufferAttribute(r,l),Ji.fromBufferAttribute(r,c),h.uv1=Ge.getInterpolation(Qi,jn,Kn,Zn,Zi,$i,Ji,new Tt)),a&&(Oa.fromBufferAttribute(a,o),Ba.fromBufferAttribute(a,l),za.fromBufferAttribute(a,c),h.normal=Ge.getInterpolation(Qi,jn,Kn,Zn,Oa,Ba,za,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new U,materialIndex:0};Ge.getNormal(jn,Kn,Zn,u.normal),h.face=u}return h}class Ii extends ze{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,m=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,s,a,2),_("x","z","y",1,-1,t,n,-e,s,a,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ve(c,3)),this.setAttribute("normal",new ve(h,3)),this.setAttribute("uv",new ve(u,2));function _(v,p,d,y,S,b,B,A,R,F,E){const M=b/R,C=B/F,G=b/2,z=B/2,j=A/2,Y=R+1,k=F+1;let Z=0,H=0;const at=new U;for(let ht=0;ht<k;ht++){const mt=ht*C-z;for(let Ft=0;Ft<Y;Ft++){const Xt=Ft*M-G;at[v]=Xt*y,at[p]=mt*S,at[d]=j,c.push(at.x,at.y,at.z),at[v]=0,at[p]=0,at[d]=A>0?1:-1,h.push(at.x,at.y,at.z),u.push(Ft/R),u.push(1-ht/F),Z+=1}}for(let ht=0;ht<F;ht++)for(let mt=0;mt<R;mt++){const Ft=f+mt+Y*ht,Xt=f+mt+Y*(ht+1),V=f+(mt+1)+Y*(ht+1),J=f+(mt+1)+Y*ht;l.push(Ft,Xt,J),l.push(Xt,V,J),H+=6}o.addGroup(m,H,E),m+=H,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ii(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ui(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ge(i){const t={};for(let e=0;e<i.length;e++){const n=ui(i[e]);for(const s in n)t[s]=n[s]}return t}function Yc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Jo(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:kt.workingColorSpace}const jc={clone:ui,merge:ge};var Kc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gn extends rn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kc,this.fragmentShader=Zc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ui(t.uniforms),this.uniformsGroups=Yc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Qo extends he{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=en}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const dn=new U,Ha=new Tt,Va=new Tt;class Ce extends Qo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ri*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ti*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ri*2*Math.atan(Math.tan(Ti*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){dn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(dn.x,dn.y).multiplyScalar(-t/dn.z),dn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(dn.x,dn.y).multiplyScalar(-t/dn.z)}getViewSize(t,e){return this.getViewBounds(t,Ha,Va),e.subVectors(Va,Ha)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ti*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const $n=-90,Jn=1;class $c extends he{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ce($n,Jn,t,e);s.layers=this.layers,this.add(s);const r=new Ce($n,Jn,t,e);r.layers=this.layers,this.add(r);const a=new Ce($n,Jn,t,e);a.layers=this.layers,this.add(a);const o=new Ce($n,Jn,t,e);o.layers=this.layers,this.add(o);const l=new Ce($n,Jn,t,e);l.layers=this.layers,this.add(l);const c=new Ce($n,Jn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===en)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ts)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,m),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class tl extends xe{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:oi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Jc extends Dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new tl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Fe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ii(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Se,blending:mn});r.uniforms.tEquirect.value=e;const a=new Be(s,r),o=e.minFilter;return e.minFilter===Pn&&(e.minFilter=Fe),new $c(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const er=new U,Qc=new U,th=new Dt;class fn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=er.subVectors(n,e).cross(Qc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(er),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||th.getNormalMatrix(t),s=this.coplanarPoint(er).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yn=new Ui,ns=new U;class sa{constructor(t=new fn,e=new fn,n=new fn,s=new fn,r=new fn,a=new fn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=en){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],m=s[8],_=s[9],v=s[10],p=s[11],d=s[12],y=s[13],S=s[14],b=s[15];if(n[0].setComponents(l-r,f-c,p-m,b-d).normalize(),n[1].setComponents(l+r,f+c,p+m,b+d).normalize(),n[2].setComponents(l+a,f+h,p+_,b+y).normalize(),n[3].setComponents(l-a,f-h,p-_,b-y).normalize(),n[4].setComponents(l-o,f-u,p-v,b-S).normalize(),e===en)n[5].setComponents(l+o,f+u,p+v,b+S).normalize();else if(e===Ts)n[5].setComponents(o,u,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yn)}intersectsSprite(t){return yn.center.set(0,0,0),yn.radius=.7071067811865476,yn.applyMatrix4(t.matrixWorld),this.intersectsSphere(yn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ns.x=s.normal.x>0?t.max.x:t.min.x,ns.y=s.normal.y>0?t.max.y:t.min.y,ns.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ns)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function el(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function eh(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l._updateRange,f=l.updateRanges;if(i.bindBuffer(c,o),u.count===-1&&f.length===0&&i.bufferSubData(c,0,h),f.length!==0){for(let m=0,_=f.length;m<_;m++){const v=f[m];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Ls extends ze{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,m=[],_=[],v=[],p=[];for(let d=0;d<h;d++){const y=d*f-a;for(let S=0;S<c;S++){const b=S*u-r;_.push(b,-y,0),v.push(0,0,1),p.push(S/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<o;y++){const S=y+c*d,b=y+c*(d+1),B=y+1+c*(d+1),A=y+1+c*d;m.push(S,b,A),m.push(b,B,A)}this.setIndex(m),this.setAttribute("position",new ve(_,3)),this.setAttribute("normal",new ve(v,3)),this.setAttribute("uv",new ve(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ls(t.width,t.height,t.widthSegments,t.heightSegments)}}var nh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ih=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ah=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ch=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,uh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ph=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_h=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Th=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,bh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ah=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ch=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ph=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ih=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Nh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Oh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Kh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$h=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,eu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,iu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,su=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ru=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,au=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ou=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,uu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,du=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_u=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Su=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Au=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ru=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Lu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Du=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Iu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ou=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Bu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Vu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Gu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ku=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Wu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Xu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ju=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ku=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$u=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ju=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,td=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ed=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ad=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,od=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ld=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,md=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_d=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Md=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ed=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Td=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ad=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Pd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ld=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ud=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Id=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Lt={alphahash_fragment:nh,alphahash_pars_fragment:ih,alphamap_fragment:sh,alphamap_pars_fragment:rh,alphatest_fragment:ah,alphatest_pars_fragment:oh,aomap_fragment:lh,aomap_pars_fragment:ch,batching_pars_vertex:hh,batching_vertex:uh,begin_vertex:dh,beginnormal_vertex:fh,bsdfs:ph,iridescence_fragment:mh,bumpmap_pars_fragment:_h,clipping_planes_fragment:gh,clipping_planes_pars_fragment:vh,clipping_planes_pars_vertex:xh,clipping_planes_vertex:Mh,color_fragment:Sh,color_pars_fragment:Eh,color_pars_vertex:yh,color_vertex:Th,common:bh,cube_uv_reflection_fragment:Ah,defaultnormal_vertex:wh,displacementmap_pars_vertex:Rh,displacementmap_vertex:Ch,emissivemap_fragment:Ph,emissivemap_pars_fragment:Lh,colorspace_fragment:Dh,colorspace_pars_fragment:Uh,envmap_fragment:Ih,envmap_common_pars_fragment:Nh,envmap_pars_fragment:Fh,envmap_pars_vertex:Oh,envmap_physical_pars_fragment:jh,envmap_vertex:Bh,fog_vertex:zh,fog_pars_vertex:Hh,fog_fragment:Vh,fog_pars_fragment:Gh,gradientmap_pars_fragment:kh,lightmap_pars_fragment:Wh,lights_lambert_fragment:Xh,lights_lambert_pars_fragment:qh,lights_pars_begin:Yh,lights_toon_fragment:Kh,lights_toon_pars_fragment:Zh,lights_phong_fragment:$h,lights_phong_pars_fragment:Jh,lights_physical_fragment:Qh,lights_physical_pars_fragment:tu,lights_fragment_begin:eu,lights_fragment_maps:nu,lights_fragment_end:iu,logdepthbuf_fragment:su,logdepthbuf_pars_fragment:ru,logdepthbuf_pars_vertex:au,logdepthbuf_vertex:ou,map_fragment:lu,map_pars_fragment:cu,map_particle_fragment:hu,map_particle_pars_fragment:uu,metalnessmap_fragment:du,metalnessmap_pars_fragment:fu,morphinstance_vertex:pu,morphcolor_vertex:mu,morphnormal_vertex:_u,morphtarget_pars_vertex:gu,morphtarget_vertex:vu,normal_fragment_begin:xu,normal_fragment_maps:Mu,normal_pars_fragment:Su,normal_pars_vertex:Eu,normal_vertex:yu,normalmap_pars_fragment:Tu,clearcoat_normal_fragment_begin:bu,clearcoat_normal_fragment_maps:Au,clearcoat_pars_fragment:wu,iridescence_pars_fragment:Ru,opaque_fragment:Cu,packing:Pu,premultiplied_alpha_fragment:Lu,project_vertex:Du,dithering_fragment:Uu,dithering_pars_fragment:Iu,roughnessmap_fragment:Nu,roughnessmap_pars_fragment:Fu,shadowmap_pars_fragment:Ou,shadowmap_pars_vertex:Bu,shadowmap_vertex:zu,shadowmask_pars_fragment:Hu,skinbase_vertex:Vu,skinning_pars_vertex:Gu,skinning_vertex:ku,skinnormal_vertex:Wu,specularmap_fragment:Xu,specularmap_pars_fragment:qu,tonemapping_fragment:Yu,tonemapping_pars_fragment:ju,transmission_fragment:Ku,transmission_pars_fragment:Zu,uv_pars_fragment:$u,uv_pars_vertex:Ju,uv_vertex:Qu,worldpos_vertex:td,background_vert:ed,background_frag:nd,backgroundCube_vert:id,backgroundCube_frag:sd,cube_vert:rd,cube_frag:ad,depth_vert:od,depth_frag:ld,distanceRGBA_vert:cd,distanceRGBA_frag:hd,equirect_vert:ud,equirect_frag:dd,linedashed_vert:fd,linedashed_frag:pd,meshbasic_vert:md,meshbasic_frag:_d,meshlambert_vert:gd,meshlambert_frag:vd,meshmatcap_vert:xd,meshmatcap_frag:Md,meshnormal_vert:Sd,meshnormal_frag:Ed,meshphong_vert:yd,meshphong_frag:Td,meshphysical_vert:bd,meshphysical_frag:Ad,meshtoon_vert:wd,meshtoon_frag:Rd,points_vert:Cd,points_frag:Pd,shadow_vert:Ld,shadow_frag:Dd,sprite_vert:Ud,sprite_frag:Id},it={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Dt}},envmap:{envMap:{value:null},envMapRotation:{value:new Dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Dt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Dt},alphaMap:{value:null},alphaMapTransform:{value:new Dt},alphaTest:{value:0}}},Ve={basic:{uniforms:ge([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Lt.meshbasic_vert,fragmentShader:Lt.meshbasic_frag},lambert:{uniforms:ge([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Lt.meshlambert_vert,fragmentShader:Lt.meshlambert_frag},phong:{uniforms:ge([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Lt.meshphong_vert,fragmentShader:Lt.meshphong_frag},standard:{uniforms:ge([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag},toon:{uniforms:ge([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Lt.meshtoon_vert,fragmentShader:Lt.meshtoon_frag},matcap:{uniforms:ge([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Lt.meshmatcap_vert,fragmentShader:Lt.meshmatcap_frag},points:{uniforms:ge([it.points,it.fog]),vertexShader:Lt.points_vert,fragmentShader:Lt.points_frag},dashed:{uniforms:ge([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Lt.linedashed_vert,fragmentShader:Lt.linedashed_frag},depth:{uniforms:ge([it.common,it.displacementmap]),vertexShader:Lt.depth_vert,fragmentShader:Lt.depth_frag},normal:{uniforms:ge([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Lt.meshnormal_vert,fragmentShader:Lt.meshnormal_frag},sprite:{uniforms:ge([it.sprite,it.fog]),vertexShader:Lt.sprite_vert,fragmentShader:Lt.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Lt.background_vert,fragmentShader:Lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Dt}},vertexShader:Lt.backgroundCube_vert,fragmentShader:Lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Lt.cube_vert,fragmentShader:Lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Lt.equirect_vert,fragmentShader:Lt.equirect_frag},distanceRGBA:{uniforms:ge([it.common,it.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Lt.distanceRGBA_vert,fragmentShader:Lt.distanceRGBA_frag},shadow:{uniforms:ge([it.lights,it.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Lt.shadow_vert,fragmentShader:Lt.shadow_frag}};Ve.physical={uniforms:ge([Ve.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Dt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Dt},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Dt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Dt},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Dt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Dt}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag};const is={r:0,b:0,g:0},Tn=new We,Nd=new Zt;function Fd(i,t,e,n,s,r,a){const o=new Ut(0);let l=r===!0?0:1,c,h,u=null,f=0,m=null;function _(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?e:t).get(S)),S}function v(y){let S=!1;const b=_(y);b===null?d(o,l):b&&b.isColor&&(d(b,1),S=!0);const B=i.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,a):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(y,S){const b=_(S);b&&(b.isCubeTexture||b.mapping===Rs)?(h===void 0&&(h=new Be(new Ii(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:ui(Ve.backgroundCube.uniforms),vertexShader:Ve.backgroundCube.vertexShader,fragmentShader:Ve.backgroundCube.fragmentShader,side:Se,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Tn.copy(S.backgroundRotation),Tn.x*=-1,Tn.y*=-1,Tn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Tn.y*=-1,Tn.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Nd.makeRotationFromEuler(Tn)),h.material.toneMapped=kt.getTransfer(b.colorSpace)!==jt,(u!==b||f!==b.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,f=b.version,m=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Be(new Ls(2,2),new gn({name:"BackgroundMaterial",uniforms:ui(Ve.background.uniforms),vertexShader:Ve.background.vertexShader,fragmentShader:Ve.background.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=kt.getTransfer(b.colorSpace)!==jt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,m=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,S){y.getRGB(is,Jo(i)),n.buffers.color.setClear(is.r,is.g,is.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),l=S,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(o,l)},render:v,addToRenderList:p}}function Od(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(M,C,G,z,j){let Y=!1;const k=u(z,G,C);r!==k&&(r=k,c(r.object)),Y=m(M,z,G,j),Y&&_(M,z,G,j),j!==null&&t.update(j,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,b(M,C,G,z),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(j).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,C,G){const z=G.wireframe===!0;let j=n[M.id];j===void 0&&(j={},n[M.id]=j);let Y=j[C.id];Y===void 0&&(Y={},j[C.id]=Y);let k=Y[z];return k===void 0&&(k=f(l()),Y[z]=k),k}function f(M){const C=[],G=[],z=[];for(let j=0;j<e;j++)C[j]=0,G[j]=0,z[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:G,attributeDivisors:z,object:M,attributes:{},index:null}}function m(M,C,G,z){const j=r.attributes,Y=C.attributes;let k=0;const Z=G.getAttributes();for(const H in Z)if(Z[H].location>=0){const ht=j[H];let mt=Y[H];if(mt===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(mt=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(mt=M.instanceColor)),ht===void 0||ht.attribute!==mt||mt&&ht.data!==mt.data)return!0;k++}return r.attributesNum!==k||r.index!==z}function _(M,C,G,z){const j={},Y=C.attributes;let k=0;const Z=G.getAttributes();for(const H in Z)if(Z[H].location>=0){let ht=Y[H];ht===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ht=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ht=M.instanceColor));const mt={};mt.attribute=ht,ht&&ht.data&&(mt.data=ht.data),j[H]=mt,k++}r.attributes=j,r.attributesNum=k,r.index=z}function v(){const M=r.newAttributes;for(let C=0,G=M.length;C<G;C++)M[C]=0}function p(M){d(M,0)}function d(M,C){const G=r.newAttributes,z=r.enabledAttributes,j=r.attributeDivisors;G[M]=1,z[M]===0&&(i.enableVertexAttribArray(M),z[M]=1),j[M]!==C&&(i.vertexAttribDivisor(M,C),j[M]=C)}function y(){const M=r.newAttributes,C=r.enabledAttributes;for(let G=0,z=C.length;G<z;G++)C[G]!==M[G]&&(i.disableVertexAttribArray(G),C[G]=0)}function S(M,C,G,z,j,Y,k){k===!0?i.vertexAttribIPointer(M,C,G,j,Y):i.vertexAttribPointer(M,C,G,z,j,Y)}function b(M,C,G,z){v();const j=z.attributes,Y=G.getAttributes(),k=C.defaultAttributeValues;for(const Z in Y){const H=Y[Z];if(H.location>=0){let at=j[Z];if(at===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(at=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(at=M.instanceColor)),at!==void 0){const ht=at.normalized,mt=at.itemSize,Ft=t.get(at);if(Ft===void 0)continue;const Xt=Ft.buffer,V=Ft.type,J=Ft.bytesPerElement,pt=V===i.INT||V===i.UNSIGNED_INT||at.gpuType===Zr;if(at.isInterleavedBufferAttribute){const lt=at.data,Et=lt.stride,Rt=at.offset;if(lt.isInstancedInterleavedBuffer){for(let Nt=0;Nt<H.locationSize;Nt++)d(H.location+Nt,lt.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Nt=0;Nt<H.locationSize;Nt++)p(H.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let Nt=0;Nt<H.locationSize;Nt++)S(H.location+Nt,mt/H.locationSize,V,ht,Et*J,(Rt+mt/H.locationSize*Nt)*J,pt)}else{if(at.isInstancedBufferAttribute){for(let lt=0;lt<H.locationSize;lt++)d(H.location+lt,at.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let lt=0;lt<H.locationSize;lt++)p(H.location+lt);i.bindBuffer(i.ARRAY_BUFFER,Xt);for(let lt=0;lt<H.locationSize;lt++)S(H.location+lt,mt/H.locationSize,V,ht,mt*J,mt/H.locationSize*lt*J,pt)}}else if(k!==void 0){const ht=k[Z];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(H.location,ht);break;case 3:i.vertexAttrib3fv(H.location,ht);break;case 4:i.vertexAttrib4fv(H.location,ht);break;default:i.vertexAttrib1fv(H.location,ht)}}}}y()}function B(){F();for(const M in n){const C=n[M];for(const G in C){const z=C[G];for(const j in z)h(z[j].object),delete z[j];delete C[G]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const G in C){const z=C[G];for(const j in z)h(z[j].object),delete z[j];delete C[G]}delete n[M.id]}function R(M){for(const C in n){const G=n[C];if(G[M.id]===void 0)continue;const z=G[M.id];for(const j in z)h(z[j].object),delete z[j];delete G[M.id]}}function F(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:E,dispose:B,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:p,disableUnusedAttributes:y}}function Bd(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_];e.update(m,n,1)}function l(c,h,u,f){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],h[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let _=0;for(let v=0;v<u;v++)_+=h[v];for(let v=0;v<f.length;v++)e.update(_,n,f[v])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function zd(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Oe&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const R=A===Li&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==sn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==tn&&!R)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=m>0,B=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:d,maxVaryings:y,maxFragmentUniforms:S,vertexTextures:b,maxSamples:B}}function Hd(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new fn,o=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||s;return s=f,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,m){const _=u.clippingPlanes,v=u.clipIntersection,p=u.clipShadows,d=i.get(u);if(!s||_===null||_.length===0||r&&!p)r?h(null):c();else{const y=r?0:n,S=y*4;let b=d.clippingState||null;l.value=b,b=h(_,f,S,m);for(let B=0;B!==S;++B)b[B]=e[B];d.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,m,_){const v=u!==null?u.length:0;let p=null;if(v!==0){if(p=l.value,_!==!0||p===null){const d=m+v*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<d)&&(p=new Float32Array(d));for(let S=0,b=m;S!==v;++S,b+=4)a.copy(u[S]).applyMatrix4(y,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function Vd(i){let t=new WeakMap;function e(a,o){return o===gr?a.mapping=oi:o===vr&&(a.mapping=li),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===gr||o===vr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Jc(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class nl extends Qo{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ni=4,Ga=[.125,.215,.35,.446,.526,.582],Rn=20,nr=new nl,ka=new Ut;let ir=null,sr=0,rr=0,ar=!1;const An=(1+Math.sqrt(5))/2,Qn=1/An,Wa=[new U(-An,Qn,0),new U(An,Qn,0),new U(-Qn,0,An),new U(Qn,0,An),new U(0,An,-Qn),new U(0,An,Qn),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class Xa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ir=this._renderer.getRenderTarget(),sr=this._renderer.getActiveCubeFace(),rr=this._renderer.getActiveMipmapLevel(),ar=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ja(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ya(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ir,sr,rr),this._renderer.xr.enabled=ar,t.scissorTest=!1,ss(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===oi||t.mapping===li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ir=this._renderer.getRenderTarget(),sr=this._renderer.getActiveCubeFace(),rr=this._renderer.getActiveMipmapLevel(),ar=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Fe,minFilter:Fe,generateMipmaps:!1,type:Li,format:Oe,colorSpace:vn,depthBuffer:!1},s=qa(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qa(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gd(r)),this._blurMaterial=kd(r,t,e)}return s}_compileMaterial(t){const e=new Be(this._lodPlanes[0],t);this._renderer.compile(e,nr)}_sceneToCubeUV(t,e,n,s){const o=new Ce(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(ka),h.toneMapping=_n,h.autoClear=!1;const m=new Ko({name:"PMREM.Background",side:Se,depthWrite:!1,depthTest:!1}),_=new Be(new Ii,m);let v=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,v=!0):(m.color.copy(ka),v=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):y===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const S=this._cubeSize;ss(s,y*S,d>2?S:0,S,S),h.setRenderTarget(s),v&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===oi||t.mapping===li;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ja()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ya());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Be(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;ss(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,nr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Wa[(s-r-1)%Wa.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Be(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Rn-1),v=r/_,p=isFinite(r)?1+Math.floor(h*v):Rn;p>Rn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Rn}`);const d=[];let y=0;for(let R=0;R<Rn;++R){const F=R/v,E=Math.exp(-F*F/2);d.push(E),R===0?y+=E:R<p&&(y+=2*E)}for(let R=0;R<d.length;R++)d[R]=d[R]/y;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:S}=this;f.dTheta.value=_,f.mipInt.value=S-n;const b=this._sizeLods[s],B=3*b*(s>S-ni?s-S+ni:0),A=4*(this._cubeSize-b);ss(e,B,A,3*b,2*b),l.setRenderTarget(e),l.render(u,nr)}}function Gd(i){const t=[],e=[],n=[];let s=i;const r=i-ni+1+Ga.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-ni?l=Ga[a-i+ni-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,_=6,v=3,p=2,d=1,y=new Float32Array(v*_*m),S=new Float32Array(p*_*m),b=new Float32Array(d*_*m);for(let A=0;A<m;A++){const R=A%3*2/3-1,F=A>2?0:-1,E=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];y.set(E,v*_*A),S.set(f,p*_*A);const M=[A,A,A,A,A,A];b.set(M,d*_*A)}const B=new ze;B.setAttribute("position",new ke(y,v)),B.setAttribute("uv",new ke(S,p)),B.setAttribute("faceIndex",new ke(b,d)),t.push(B),s>ni&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function qa(i,t,e){const n=new Dn(i,t,e);return n.texture.mapping=Rs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ss(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function kd(i,t,e){const n=new Float32Array(Rn),s=new U(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:Rn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function Ya(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function ja(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function ra(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Wd(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===gr||l===vr,h=l===oi||l===li;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Xa(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const m=o.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new Xa(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Xd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ai("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function qd(i,t,e,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const v=f.morphAttributes[_];for(let p=0,d=v.length;p<d;p++)t.remove(v[p])}f.removeEventListener("dispose",a),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const _ in f)t.update(f[_],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const _ in m){const v=m[_];for(let p=0,d=v.length;p<d;p++)t.update(v[p],i.ARRAY_BUFFER)}}function c(u){const f=[],m=u.index,_=u.attributes.position;let v=0;if(m!==null){const y=m.array;v=m.version;for(let S=0,b=y.length;S<b;S+=3){const B=y[S+0],A=y[S+1],R=y[S+2];f.push(B,A,A,R,R,B)}}else if(_!==void 0){const y=_.array;v=_.version;for(let S=0,b=y.length/3-1;S<b;S+=3){const B=S+0,A=S+1,R=S+2;f.push(B,A,A,R,R,B)}}else return;const p=new(Wo(f)?$o:Zo)(f,1);p.version=v;const d=r.get(u);d&&t.remove(d),r.set(u,p)}function h(u){const f=r.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Yd(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,m){i.drawElements(n,m,r,f*a),e.update(m,n,1)}function c(f,m,_){_!==0&&(i.drawElementsInstanced(n,m,r,f*a,_),e.update(m,n,_))}function h(f,m,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,_);let p=0;for(let d=0;d<_;d++)p+=m[d];e.update(p,n,1)}function u(f,m,_,v){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/a,m[d],v[d]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,v,0,_);let d=0;for(let y=0;y<_;y++)d+=m[y];for(let y=0;y<v.length;y++)e.update(d,n,v[y])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function jd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Kd(i,t,e){const n=new WeakMap,s=new ae;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let M=function(){F.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var m=M;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let b=0;_===!0&&(b=1),v===!0&&(b=2),p===!0&&(b=3);let B=o.attributes.position.count*b,A=1;B>t.maxTextureSize&&(A=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const R=new Float32Array(B*A*4*u),F=new qo(R,B,A,u);F.type=tn,F.needsUpdate=!0;const E=b*4;for(let C=0;C<u;C++){const G=d[C],z=y[C],j=S[C],Y=B*A*4*C;for(let k=0;k<G.count;k++){const Z=k*E;_===!0&&(s.fromBufferAttribute(G,k),R[Y+Z+0]=s.x,R[Y+Z+1]=s.y,R[Y+Z+2]=s.z,R[Y+Z+3]=0),v===!0&&(s.fromBufferAttribute(z,k),R[Y+Z+4]=s.x,R[Y+Z+5]=s.y,R[Y+Z+6]=s.z,R[Y+Z+7]=0),p===!0&&(s.fromBufferAttribute(j,k),R[Y+Z+8]=s.x,R[Y+Z+9]=s.y,R[Y+Z+10]=s.z,R[Y+Z+11]=j.itemSize===4?s.w:1)}}f={count:u,texture:F,size:new Tt(B,A)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const v=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",v),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Zd(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class il extends xe{constructor(t,e,n,s,r,a,o,l,c,h=ri){if(h!==ri&&h!==hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ri&&(n=Ln),n===void 0&&h===hi&&(n=ci),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Pe,this.minFilter=l!==void 0?l:Pe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const sl=new xe,Ka=new il(1,1),rl=new qo,al=new Fc,ol=new tl,Za=[],$a=[],Ja=new Float32Array(16),Qa=new Float32Array(9),to=new Float32Array(4);function fi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Za[s];if(r===void 0&&(r=new Float32Array(s),Za[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function le(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ds(i,t){let e=$a[t];e===void 0&&(e=new Int32Array(t),$a[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function $d(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Jd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(oe(e,t))return;i.uniform2fv(this.addr,t),le(e,t)}}function Qd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(oe(e,t))return;i.uniform3fv(this.addr,t),le(e,t)}}function tf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(oe(e,t))return;i.uniform4fv(this.addr,t),le(e,t)}}function ef(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),le(e,t)}else{if(oe(e,n))return;to.set(n),i.uniformMatrix2fv(this.addr,!1,to),le(e,n)}}function nf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),le(e,t)}else{if(oe(e,n))return;Qa.set(n),i.uniformMatrix3fv(this.addr,!1,Qa),le(e,n)}}function sf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),le(e,t)}else{if(oe(e,n))return;Ja.set(n),i.uniformMatrix4fv(this.addr,!1,Ja),le(e,n)}}function rf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function af(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(oe(e,t))return;i.uniform2iv(this.addr,t),le(e,t)}}function of(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(oe(e,t))return;i.uniform3iv(this.addr,t),le(e,t)}}function lf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(oe(e,t))return;i.uniform4iv(this.addr,t),le(e,t)}}function cf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function hf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(oe(e,t))return;i.uniform2uiv(this.addr,t),le(e,t)}}function uf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(oe(e,t))return;i.uniform3uiv(this.addr,t),le(e,t)}}function df(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(oe(e,t))return;i.uniform4uiv(this.addr,t),le(e,t)}}function ff(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ka.compareFunction=ko,r=Ka):r=sl,e.setTexture2D(t||r,s)}function pf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||al,s)}function mf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ol,s)}function _f(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||rl,s)}function gf(i){switch(i){case 5126:return $d;case 35664:return Jd;case 35665:return Qd;case 35666:return tf;case 35674:return ef;case 35675:return nf;case 35676:return sf;case 5124:case 35670:return rf;case 35667:case 35671:return af;case 35668:case 35672:return of;case 35669:case 35673:return lf;case 5125:return cf;case 36294:return hf;case 36295:return uf;case 36296:return df;case 35678:case 36198:case 36298:case 36306:case 35682:return ff;case 35679:case 36299:case 36307:return pf;case 35680:case 36300:case 36308:case 36293:return mf;case 36289:case 36303:case 36311:case 36292:return _f}}function vf(i,t){i.uniform1fv(this.addr,t)}function xf(i,t){const e=fi(t,this.size,2);i.uniform2fv(this.addr,e)}function Mf(i,t){const e=fi(t,this.size,3);i.uniform3fv(this.addr,e)}function Sf(i,t){const e=fi(t,this.size,4);i.uniform4fv(this.addr,e)}function Ef(i,t){const e=fi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function yf(i,t){const e=fi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Tf(i,t){const e=fi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function bf(i,t){i.uniform1iv(this.addr,t)}function Af(i,t){i.uniform2iv(this.addr,t)}function wf(i,t){i.uniform3iv(this.addr,t)}function Rf(i,t){i.uniform4iv(this.addr,t)}function Cf(i,t){i.uniform1uiv(this.addr,t)}function Pf(i,t){i.uniform2uiv(this.addr,t)}function Lf(i,t){i.uniform3uiv(this.addr,t)}function Df(i,t){i.uniform4uiv(this.addr,t)}function Uf(i,t,e){const n=this.cache,s=t.length,r=Ds(e,s);oe(n,r)||(i.uniform1iv(this.addr,r),le(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||sl,r[a])}function If(i,t,e){const n=this.cache,s=t.length,r=Ds(e,s);oe(n,r)||(i.uniform1iv(this.addr,r),le(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||al,r[a])}function Nf(i,t,e){const n=this.cache,s=t.length,r=Ds(e,s);oe(n,r)||(i.uniform1iv(this.addr,r),le(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ol,r[a])}function Ff(i,t,e){const n=this.cache,s=t.length,r=Ds(e,s);oe(n,r)||(i.uniform1iv(this.addr,r),le(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||rl,r[a])}function Of(i){switch(i){case 5126:return vf;case 35664:return xf;case 35665:return Mf;case 35666:return Sf;case 35674:return Ef;case 35675:return yf;case 35676:return Tf;case 5124:case 35670:return bf;case 35667:case 35671:return Af;case 35668:case 35672:return wf;case 35669:case 35673:return Rf;case 5125:return Cf;case 36294:return Pf;case 36295:return Lf;case 36296:return Df;case 35678:case 36198:case 36298:case 36306:case 35682:return Uf;case 35679:case 36299:case 36307:return If;case 35680:case 36300:case 36308:case 36293:return Nf;case 36289:case 36303:case 36311:case 36292:return Ff}}class Bf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=gf(e.type)}}class zf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Of(e.type)}}class Hf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const or=/(\w+)(\])?(\[|\.)?/g;function eo(i,t){i.seq.push(t),i.map[t.id]=t}function Vf(i,t,e){const n=i.name,s=n.length;for(or.lastIndex=0;;){const r=or.exec(n),a=or.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){eo(e,c===void 0?new Bf(o,i,t):new zf(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Hf(o),eo(e,u)),e=u}}}class gs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Vf(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function no(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Gf=37297;let kf=0;function Wf(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Xf(i){const t=kt.getPrimaries(kt.workingColorSpace),e=kt.getPrimaries(i);let n;switch(t===e?n="":t===ys&&e===Es?n="LinearDisplayP3ToLinearSRGB":t===Es&&e===ys&&(n="LinearSRGBToLinearDisplayP3"),i){case vn:case Cs:return[n,"LinearTransferOETF"];case Ne:case na:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function io(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Wf(i.getShaderSource(t),a)}else return s}function qf(i,t){const e=Xf(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Yf(i,t){let e;switch(t){case jl:e="Linear";break;case Kl:e="Reinhard";break;case Zl:e="Cineon";break;case $l:e="ACESFilmic";break;case Ql:e="AgX";break;case tc:e="Neutral";break;case Jl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const rs=new U;function jf(){kt.getLuminanceCoefficients(rs);const i=rs.x.toFixed(4),t=rs.y.toFixed(4),e=rs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Si).join(`
`)}function Zf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function $f(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Si(i){return i!==""}function so(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ro(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Jf=/^[ \t]*#include +<([\w\d./]+)>/gm;function qr(i){return i.replace(Jf,tp)}const Qf=new Map;function tp(i,t){let e=Lt[t];if(e===void 0){const n=Qf.get(t);if(n!==void 0)e=Lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return qr(e)}const ep=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ao(i){return i.replace(ep,np)}function np(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function oo(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ip(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Po?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ml?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Je&&(t="SHADOWMAP_TYPE_VSM"),t}function sp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case oi:case li:t="ENVMAP_TYPE_CUBE";break;case Rs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case li:t="ENVMAP_MODE_REFRACTION";break}return t}function ap(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Kr:t="ENVMAP_BLENDING_MULTIPLY";break;case ql:t="ENVMAP_BLENDING_MIX";break;case Yl:t="ENVMAP_BLENDING_ADD";break}return t}function op(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function lp(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=ip(e),c=sp(e),h=rp(e),u=ap(e),f=op(e),m=Kf(e),_=Zf(r),v=s.createProgram();let p,d,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Si).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Si).join(`
`),d.length>0&&(d+=`
`)):(p=[oo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Si).join(`
`),d=[oo(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==_n?"#define TONE_MAPPING":"",e.toneMapping!==_n?Lt.tonemapping_pars_fragment:"",e.toneMapping!==_n?Yf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Lt.colorspace_pars_fragment,qf("linearToOutputTexel",e.outputColorSpace),jf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Si).join(`
`)),a=qr(a),a=so(a,e),a=ro(a,e),o=qr(o),o=so(o,e),o=ro(o,e),a=ao(a),o=ao(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===Sa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const S=y+p+a,b=y+d+o,B=no(s,s.VERTEX_SHADER,S),A=no(s,s.FRAGMENT_SHADER,b);s.attachShader(v,B),s.attachShader(v,A),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(C){if(i.debug.checkShaderErrors){const G=s.getProgramInfoLog(v).trim(),z=s.getShaderInfoLog(B).trim(),j=s.getShaderInfoLog(A).trim();let Y=!0,k=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,B,A);else{const Z=io(s,B,"vertex"),H=io(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+G+`
`+Z+`
`+H)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(z===""||j==="")&&(k=!1);k&&(C.diagnostics={runnable:Y,programLog:G,vertexShader:{log:z,prefix:p},fragmentShader:{log:j,prefix:d}})}s.deleteShader(B),s.deleteShader(A),F=new gs(s,v),E=$f(s,v)}let F;this.getUniforms=function(){return F===void 0&&R(this),F};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,Gf)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=kf++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=B,this.fragmentShader=A,this}let cp=0;class hp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new up(t),e.set(t,n)),n}}class up{constructor(t){this.id=cp++,this.code=t,this.usedTimes=0}}function dp(i,t,e,n,s,r,a){const o=new Yo,l=new hp,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,M,C,G,z){const j=G.fog,Y=z.geometry,k=E.isMeshStandardMaterial?G.environment:null,Z=(E.isMeshStandardMaterial?e:t).get(E.envMap||k),H=Z&&Z.mapping===Rs?Z.image.height:null,at=_[E.type];E.precision!==null&&(m=s.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const ht=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,mt=ht!==void 0?ht.length:0;let Ft=0;Y.morphAttributes.position!==void 0&&(Ft=1),Y.morphAttributes.normal!==void 0&&(Ft=2),Y.morphAttributes.color!==void 0&&(Ft=3);let Xt,V,J,pt;if(at){const zt=Ve[at];Xt=zt.vertexShader,V=zt.fragmentShader}else Xt=E.vertexShader,V=E.fragmentShader,l.update(E),J=l.getVertexShaderID(E),pt=l.getFragmentShaderID(E);const lt=i.getRenderTarget(),Et=z.isInstancedMesh===!0,Rt=z.isBatchedMesh===!0,Nt=!!E.map,$t=!!E.matcap,w=!!Z,te=!!E.aoMap,Wt=!!E.lightMap,qt=!!E.bumpMap,vt=!!E.normalMap,ee=!!E.displacementMap,At=!!E.emissiveMap,Ct=!!E.metalnessMap,T=!!E.roughnessMap,g=E.anisotropy>0,O=E.clearcoat>0,q=E.dispersion>0,$=E.iridescence>0,K=E.sheen>0,xt=E.transmission>0,st=g&&!!E.anisotropyMap,ct=O&&!!E.clearcoatMap,Pt=O&&!!E.clearcoatNormalMap,Q=O&&!!E.clearcoatRoughnessMap,ot=$&&!!E.iridescenceMap,Ot=$&&!!E.iridescenceThicknessMap,bt=K&&!!E.sheenColorMap,ut=K&&!!E.sheenRoughnessMap,wt=!!E.specularMap,It=!!E.specularColorMap,Kt=!!E.specularIntensityMap,P=xt&&!!E.transmissionMap,tt=xt&&!!E.thicknessMap,W=!!E.gradientMap,X=!!E.alphaMap,nt=E.alphaTest>0,Mt=!!E.alphaHash,Bt=!!E.extensions;let ne=_n;E.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(ne=i.toneMapping);const ue={shaderID:at,shaderType:E.type,shaderName:E.name,vertexShader:Xt,fragmentShader:V,defines:E.defines,customVertexShaderID:J,customFragmentShaderID:pt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Rt,batchingColor:Rt&&z._colorsTexture!==null,instancing:Et,instancingColor:Et&&z.instanceColor!==null,instancingMorph:Et&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:vn,alphaToCoverage:!!E.alphaToCoverage,map:Nt,matcap:$t,envMap:w,envMapMode:w&&Z.mapping,envMapCubeUVHeight:H,aoMap:te,lightMap:Wt,bumpMap:qt,normalMap:vt,displacementMap:f&&ee,emissiveMap:At,normalMapObjectSpace:vt&&E.normalMapType===sc,normalMapTangentSpace:vt&&E.normalMapType===Go,metalnessMap:Ct,roughnessMap:T,anisotropy:g,anisotropyMap:st,clearcoat:O,clearcoatMap:ct,clearcoatNormalMap:Pt,clearcoatRoughnessMap:Q,dispersion:q,iridescence:$,iridescenceMap:ot,iridescenceThicknessMap:Ot,sheen:K,sheenColorMap:bt,sheenRoughnessMap:ut,specularMap:wt,specularColorMap:It,specularIntensityMap:Kt,transmission:xt,transmissionMap:P,thicknessMap:tt,gradientMap:W,opaque:E.transparent===!1&&E.blending===si&&E.alphaToCoverage===!1,alphaMap:X,alphaTest:nt,alphaHash:Mt,combine:E.combine,mapUv:Nt&&v(E.map.channel),aoMapUv:te&&v(E.aoMap.channel),lightMapUv:Wt&&v(E.lightMap.channel),bumpMapUv:qt&&v(E.bumpMap.channel),normalMapUv:vt&&v(E.normalMap.channel),displacementMapUv:ee&&v(E.displacementMap.channel),emissiveMapUv:At&&v(E.emissiveMap.channel),metalnessMapUv:Ct&&v(E.metalnessMap.channel),roughnessMapUv:T&&v(E.roughnessMap.channel),anisotropyMapUv:st&&v(E.anisotropyMap.channel),clearcoatMapUv:ct&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:ut&&v(E.sheenRoughnessMap.channel),specularMapUv:wt&&v(E.specularMap.channel),specularColorMapUv:It&&v(E.specularColorMap.channel),specularIntensityMapUv:Kt&&v(E.specularIntensityMap.channel),transmissionMapUv:P&&v(E.transmissionMap.channel),thicknessMapUv:tt&&v(E.thicknessMap.channel),alphaMapUv:X&&v(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(vt||g),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Y.attributes.uv&&(Nt||X),fog:!!j,useFog:E.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:z.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Ft,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:Nt&&E.map.isVideoTexture===!0&&kt.getTransfer(E.map.colorSpace)===jt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Qe,flipSided:E.side===Se,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Bt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&E.extensions.multiDraw===!0||Rt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ue.vertexUv1s=c.has(1),ue.vertexUv2s=c.has(2),ue.vertexUv3s=c.has(3),c.clear(),ue}function d(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)M.push(C),M.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(y(M,E),S(M,E),M.push(i.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function y(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function S(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.doubleSided&&o.enable(10),M.flipSided&&o.enable(11),M.useDepthPacking&&o.enable(12),M.dithering&&o.enable(13),M.transmission&&o.enable(14),M.sheen&&o.enable(15),M.opaque&&o.enable(16),M.pointsUvs&&o.enable(17),M.decodeVideoTexture&&o.enable(18),M.alphaToCoverage&&o.enable(19),E.push(o.mask)}function b(E){const M=_[E.type];let C;if(M){const G=Ve[M];C=jc.clone(G.uniforms)}else C=E.uniforms;return C}function B(E,M){let C;for(let G=0,z=h.length;G<z;G++){const j=h[G];if(j.cacheKey===M){C=j,++C.usedTimes;break}}return C===void 0&&(C=new lp(i,M,E,r),h.push(C)),C}function A(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function R(E){l.remove(E)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:b,acquireProgram:B,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:F}}function fp(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function pp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function lo(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function co(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,m,_,v,p){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:_,renderOrder:u.renderOrder,z:v,group:p},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=v,d.group=p),t++,d}function o(u,f,m,_,v,p){const d=a(u,f,m,_,v,p);m.transmission>0?n.push(d):m.transparent===!0?s.push(d):e.push(d)}function l(u,f,m,_,v,p){const d=a(u,f,m,_,v,p);m.transmission>0?n.unshift(d):m.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||pp),n.length>1&&n.sort(f||lo),s.length>1&&s.sort(f||lo)}function h(){for(let u=t,f=i.length;u<f;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function mp(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new co,i.set(n,[a])):s>=r.length?(a=new co,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function _p(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Ut};break;case"SpotLight":e={position:new U,direction:new U,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function gp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let vp=0;function xp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Mp(i){const t=new _p,e=gp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const s=new U,r=new Zt,a=new Zt;function o(c){let h=0,u=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let m=0,_=0,v=0,p=0,d=0,y=0,S=0,b=0,B=0,A=0,R=0;c.sort(xp);for(let E=0,M=c.length;E<M;E++){const C=c[E],G=C.color,z=C.intensity,j=C.distance,Y=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=G.r*z,u+=G.g*z,f+=G.b*z;else if(C.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(C.sh.coefficients[k],z);R++}else if(C.isDirectionalLight){const k=t.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Z=C.shadow,H=e.get(C);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=Y,n.directionalShadowMatrix[m]=C.shadow.matrix,y++}n.directional[m]=k,m++}else if(C.isSpotLight){const k=t.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(G).multiplyScalar(z),k.distance=j,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,n.spot[v]=k;const Z=C.shadow;if(C.map&&(n.spotLightMap[B]=C.map,B++,Z.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[v]=Z.matrix,C.castShadow){const H=e.get(C);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.spotShadow[v]=H,n.spotShadowMap[v]=Y,b++}v++}else if(C.isRectAreaLight){const k=t.get(C);k.color.copy(G).multiplyScalar(z),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=k,p++}else if(C.isPointLight){const k=t.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),k.distance=C.distance,k.decay=C.decay,C.castShadow){const Z=C.shadow,H=e.get(C);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=Y,n.pointShadowMatrix[_]=C.shadow.matrix,S++}n.point[_]=k,_++}else if(C.isHemisphereLight){const k=t.get(C);k.skyColor.copy(C.color).multiplyScalar(z),k.groundColor.copy(C.groundColor).multiplyScalar(z),n.hemi[d]=k,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const F=n.hash;(F.directionalLength!==m||F.pointLength!==_||F.spotLength!==v||F.rectAreaLength!==p||F.hemiLength!==d||F.numDirectionalShadows!==y||F.numPointShadows!==S||F.numSpotShadows!==b||F.numSpotMaps!==B||F.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=p,n.point.length=_,n.hemi.length=d,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=b+B-A,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,F.directionalLength=m,F.pointLength=_,F.spotLength=v,F.rectAreaLength=p,F.hemiLength=d,F.numDirectionalShadows=y,F.numPointShadows=S,F.numSpotShadows=b,F.numSpotMaps=B,F.numLightProbes=R,n.version=vp++)}function l(c,h){let u=0,f=0,m=0,_=0,v=0;const p=h.matrixWorldInverse;for(let d=0,y=c.length;d<y;d++){const S=c[d];if(S.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),u++}else if(S.isSpotLight){const b=n.spot[m];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),m++}else if(S.isRectAreaLight){const b=n.rectArea[_];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){const b=n.hemi[v];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:n}}function ho(i){const t=new Mp(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Sp(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new ho(i),t.set(s,[o])):r>=a.length?(o=new ho(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Ep extends rn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class yp extends rn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Tp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ap(i,t,e){let n=new sa;const s=new Tt,r=new Tt,a=new ae,o=new Ep({depthPacking:ic}),l=new yp,c={},h=e.maxTextureSize,u={[nn]:Se,[Se]:nn,[Qe]:Qe},f=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:Tp,fragmentShader:bp}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new ze;_.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Be(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Po;let d=this.type;this.render=function(A,R,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const E=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),G=i.state;G.setBlending(mn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const z=d!==Je&&this.type===Je,j=d===Je&&this.type!==Je;for(let Y=0,k=A.length;Y<k;Y++){const Z=A[Y],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const at=H.getFrameExtents();if(s.multiply(at),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/at.x),s.x=r.x*at.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/at.y),s.y=r.y*at.y,H.mapSize.y=r.y)),H.map===null||z===!0||j===!0){const mt=this.type!==Je?{minFilter:Pe,magFilter:Pe}:{};H.map!==null&&H.map.dispose(),H.map=new Dn(s.x,s.y,mt),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ht=H.getViewportCount();for(let mt=0;mt<ht;mt++){const Ft=H.getViewport(mt);a.set(r.x*Ft.x,r.y*Ft.y,r.x*Ft.z,r.y*Ft.w),G.viewport(a),H.updateMatrices(Z,mt),n=H.getFrustum(),b(R,F,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===Je&&y(H,F),H.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(E,M,C)};function y(A,R){const F=t.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Dn(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,F,f,v,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,F,m,v,null)}function S(A,R,F,E){let M=null;const C=F.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)M=C;else if(M=F.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const G=M.uuid,z=R.uuid;let j=c[G];j===void 0&&(j={},c[G]=j);let Y=j[z];Y===void 0&&(Y=M.clone(),j[z]=Y,R.addEventListener("dispose",B)),M=Y}if(M.visible=R.visible,M.wireframe=R.wireframe,E===Je?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=i.properties.get(M);G.light=F}return M}function b(A,R,F,E,M){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Je)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,A.matrixWorld);const z=t.update(A),j=A.material;if(Array.isArray(j)){const Y=z.groups;for(let k=0,Z=Y.length;k<Z;k++){const H=Y[k],at=j[H.materialIndex];if(at&&at.visible){const ht=S(A,at,E,M);A.onBeforeShadow(i,A,R,F,z,ht,H),i.renderBufferDirect(F,null,z,ht,A,H),A.onAfterShadow(i,A,R,F,z,ht,H)}}}else if(j.visible){const Y=S(A,j,E,M);A.onBeforeShadow(i,A,R,F,z,Y,null),i.renderBufferDirect(F,null,z,Y,A,null),A.onAfterShadow(i,A,R,F,z,Y,null)}}const G=A.children;for(let z=0,j=G.length;z<j;z++)b(G[z],R,F,E,M)}function B(A){A.target.removeEventListener("dispose",B);for(const F in c){const E=c[F],M=A.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}function wp(i){function t(){let P=!1;const tt=new ae;let W=null;const X=new ae(0,0,0,0);return{setMask:function(nt){W!==nt&&!P&&(i.colorMask(nt,nt,nt,nt),W=nt)},setLocked:function(nt){P=nt},setClear:function(nt,Mt,Bt,ne,ue){ue===!0&&(nt*=ne,Mt*=ne,Bt*=ne),tt.set(nt,Mt,Bt,ne),X.equals(tt)===!1&&(i.clearColor(nt,Mt,Bt,ne),X.copy(tt))},reset:function(){P=!1,W=null,X.set(-1,0,0,0)}}}function e(){let P=!1,tt=null,W=null,X=null;return{setTest:function(nt){nt?pt(i.DEPTH_TEST):lt(i.DEPTH_TEST)},setMask:function(nt){tt!==nt&&!P&&(i.depthMask(nt),tt=nt)},setFunc:function(nt){if(W!==nt){switch(nt){case zl:i.depthFunc(i.NEVER);break;case Hl:i.depthFunc(i.ALWAYS);break;case Vl:i.depthFunc(i.LESS);break;case xs:i.depthFunc(i.LEQUAL);break;case Gl:i.depthFunc(i.EQUAL);break;case kl:i.depthFunc(i.GEQUAL);break;case Wl:i.depthFunc(i.GREATER);break;case Xl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}W=nt}},setLocked:function(nt){P=nt},setClear:function(nt){X!==nt&&(i.clearDepth(nt),X=nt)},reset:function(){P=!1,tt=null,W=null,X=null}}}function n(){let P=!1,tt=null,W=null,X=null,nt=null,Mt=null,Bt=null,ne=null,ue=null;return{setTest:function(zt){P||(zt?pt(i.STENCIL_TEST):lt(i.STENCIL_TEST))},setMask:function(zt){tt!==zt&&!P&&(i.stencilMask(zt),tt=zt)},setFunc:function(zt,Xe,He){(W!==zt||X!==Xe||nt!==He)&&(i.stencilFunc(zt,Xe,He),W=zt,X=Xe,nt=He)},setOp:function(zt,Xe,He){(Mt!==zt||Bt!==Xe||ne!==He)&&(i.stencilOp(zt,Xe,He),Mt=zt,Bt=Xe,ne=He)},setLocked:function(zt){P=zt},setClear:function(zt){ue!==zt&&(i.clearStencil(zt),ue=zt)},reset:function(){P=!1,tt=null,W=null,X=null,nt=null,Mt=null,Bt=null,ne=null,ue=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,f=[],m=null,_=!1,v=null,p=null,d=null,y=null,S=null,b=null,B=null,A=new Ut(0,0,0),R=0,F=!1,E=null,M=null,C=null,G=null,z=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,k=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(Z)[1]),Y=k>=1):Z.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),Y=k>=2);let H=null,at={};const ht=i.getParameter(i.SCISSOR_BOX),mt=i.getParameter(i.VIEWPORT),Ft=new ae().fromArray(ht),Xt=new ae().fromArray(mt);function V(P,tt,W,X){const nt=new Uint8Array(4),Mt=i.createTexture();i.bindTexture(P,Mt),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<W;Bt++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(tt,0,i.RGBA,1,1,X,0,i.RGBA,i.UNSIGNED_BYTE,nt):i.texImage2D(tt+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,nt);return Mt}const J={};J[i.TEXTURE_2D]=V(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=V(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=V(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=V(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),pt(i.DEPTH_TEST),r.setFunc(xs),qt(!1),vt(ma),pt(i.CULL_FACE),te(mn);function pt(P){c[P]!==!0&&(i.enable(P),c[P]=!0)}function lt(P){c[P]!==!1&&(i.disable(P),c[P]=!1)}function Et(P,tt){return h[P]!==tt?(i.bindFramebuffer(P,tt),h[P]=tt,P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=tt),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=tt),!0):!1}function Rt(P,tt){let W=f,X=!1;if(P){W=u.get(tt),W===void 0&&(W=[],u.set(tt,W));const nt=P.textures;if(W.length!==nt.length||W[0]!==i.COLOR_ATTACHMENT0){for(let Mt=0,Bt=nt.length;Mt<Bt;Mt++)W[Mt]=i.COLOR_ATTACHMENT0+Mt;W.length=nt.length,X=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,X=!0);X&&i.drawBuffers(W)}function Nt(P){return m!==P?(i.useProgram(P),m=P,!0):!1}const $t={[wn]:i.FUNC_ADD,[El]:i.FUNC_SUBTRACT,[yl]:i.FUNC_REVERSE_SUBTRACT};$t[Tl]=i.MIN,$t[bl]=i.MAX;const w={[Al]:i.ZERO,[wl]:i.ONE,[Rl]:i.SRC_COLOR,[mr]:i.SRC_ALPHA,[Il]:i.SRC_ALPHA_SATURATE,[Dl]:i.DST_COLOR,[Pl]:i.DST_ALPHA,[Cl]:i.ONE_MINUS_SRC_COLOR,[_r]:i.ONE_MINUS_SRC_ALPHA,[Ul]:i.ONE_MINUS_DST_COLOR,[Ll]:i.ONE_MINUS_DST_ALPHA,[Nl]:i.CONSTANT_COLOR,[Fl]:i.ONE_MINUS_CONSTANT_COLOR,[Ol]:i.CONSTANT_ALPHA,[Bl]:i.ONE_MINUS_CONSTANT_ALPHA};function te(P,tt,W,X,nt,Mt,Bt,ne,ue,zt){if(P===mn){_===!0&&(lt(i.BLEND),_=!1);return}if(_===!1&&(pt(i.BLEND),_=!0),P!==Sl){if(P!==v||zt!==F){if((p!==wn||S!==wn)&&(i.blendEquation(i.FUNC_ADD),p=wn,S=wn),zt)switch(P){case si:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _a:i.blendFunc(i.ONE,i.ONE);break;case ga:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case va:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case si:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _a:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ga:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case va:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}d=null,y=null,b=null,B=null,A.set(0,0,0),R=0,v=P,F=zt}return}nt=nt||tt,Mt=Mt||W,Bt=Bt||X,(tt!==p||nt!==S)&&(i.blendEquationSeparate($t[tt],$t[nt]),p=tt,S=nt),(W!==d||X!==y||Mt!==b||Bt!==B)&&(i.blendFuncSeparate(w[W],w[X],w[Mt],w[Bt]),d=W,y=X,b=Mt,B=Bt),(ne.equals(A)===!1||ue!==R)&&(i.blendColor(ne.r,ne.g,ne.b,ue),A.copy(ne),R=ue),v=P,F=!1}function Wt(P,tt){P.side===Qe?lt(i.CULL_FACE):pt(i.CULL_FACE);let W=P.side===Se;tt&&(W=!W),qt(W),P.blending===si&&P.transparent===!1?te(mn):te(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),r.setFunc(P.depthFunc),r.setTest(P.depthTest),r.setMask(P.depthWrite),s.setMask(P.colorWrite);const X=P.stencilWrite;a.setTest(X),X&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),At(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?pt(i.SAMPLE_ALPHA_TO_COVERAGE):lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function qt(P){E!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),E=P)}function vt(P){P!==vl?(pt(i.CULL_FACE),P!==M&&(P===ma?i.cullFace(i.BACK):P===xl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):lt(i.CULL_FACE),M=P}function ee(P){P!==C&&(Y&&i.lineWidth(P),C=P)}function At(P,tt,W){P?(pt(i.POLYGON_OFFSET_FILL),(G!==tt||z!==W)&&(i.polygonOffset(tt,W),G=tt,z=W)):lt(i.POLYGON_OFFSET_FILL)}function Ct(P){P?pt(i.SCISSOR_TEST):lt(i.SCISSOR_TEST)}function T(P){P===void 0&&(P=i.TEXTURE0+j-1),H!==P&&(i.activeTexture(P),H=P)}function g(P,tt,W){W===void 0&&(H===null?W=i.TEXTURE0+j-1:W=H);let X=at[W];X===void 0&&(X={type:void 0,texture:void 0},at[W]=X),(X.type!==P||X.texture!==tt)&&(H!==W&&(i.activeTexture(W),H=W),i.bindTexture(P,tt||J[P]),X.type=P,X.texture=tt)}function O(){const P=at[H];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xt(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function st(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ct(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pt(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ot(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ot(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function bt(P){Ft.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Ft.copy(P))}function ut(P){Xt.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),Xt.copy(P))}function wt(P,tt){let W=l.get(tt);W===void 0&&(W=new WeakMap,l.set(tt,W));let X=W.get(P);X===void 0&&(X=i.getUniformBlockIndex(tt,P.name),W.set(P,X))}function It(P,tt){const X=l.get(tt).get(P);o.get(tt)!==X&&(i.uniformBlockBinding(tt,X,P.__bindingPointIndex),o.set(tt,X))}function Kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},H=null,at={},h={},u=new WeakMap,f=[],m=null,_=!1,v=null,p=null,d=null,y=null,S=null,b=null,B=null,A=new Ut(0,0,0),R=0,F=!1,E=null,M=null,C=null,G=null,z=null,Ft.set(0,0,i.canvas.width,i.canvas.height),Xt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:pt,disable:lt,bindFramebuffer:Et,drawBuffers:Rt,useProgram:Nt,setBlending:te,setMaterial:Wt,setFlipSided:qt,setCullFace:vt,setLineWidth:ee,setPolygonOffset:At,setScissorTest:Ct,activeTexture:T,bindTexture:g,unbindTexture:O,compressedTexImage2D:q,compressedTexImage3D:$,texImage2D:ot,texImage3D:Ot,updateUBOMapping:wt,uniformBlockBinding:It,texStorage2D:Pt,texStorage3D:Q,texSubImage2D:K,texSubImage3D:xt,compressedTexSubImage2D:st,compressedTexSubImage3D:ct,scissor:bt,viewport:ut,reset:Kt}}function uo(i,t,e,n){const s=Rp(n);switch(e){case No:return i*t;case Oo:return i*t;case Bo:return i*t*2;case zo:return i*t/s.components*s.byteLength;case Qr:return i*t/s.components*s.byteLength;case Ho:return i*t*2/s.components*s.byteLength;case ta:return i*t*2/s.components*s.byteLength;case Fo:return i*t*3/s.components*s.byteLength;case Oe:return i*t*4/s.components*s.byteLength;case ea:return i*t*4/s.components*s.byteLength;case ds:case fs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ps:case ms:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Sr:case yr:return Math.max(i,16)*Math.max(t,8)/4;case Mr:case Er:return Math.max(i,8)*Math.max(t,8)/2;case Tr:case br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Rr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Cr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Pr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Lr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Dr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ur:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Ir:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Nr:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Or:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Br:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case zr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Hr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case _s:case Vr:case Gr:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Vo:case kr:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Wr:case Xr:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rp(i){switch(i){case sn:case Do:return{byteLength:1,components:1};case wi:case Uo:case Li:return{byteLength:2,components:1};case $r:case Jr:return{byteLength:2,components:4};case Ln:case Zr:case tn:return{byteLength:4,components:1};case Io:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Cp(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,g){return m?new OffscreenCanvas(T,g):Ci("canvas")}function v(T,g,O){let q=1;const $=Ct(T);if(($.width>O||$.height>O)&&(q=O/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const K=Math.floor(q*$.width),xt=Math.floor(q*$.height);u===void 0&&(u=_(K,xt));const st=g?_(K,xt):u;return st.width=K,st.height=xt,st.getContext("2d").drawImage(T,0,0,K,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+K+"x"+xt+")."),st}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function p(T){return T.generateMipmaps&&T.minFilter!==Pe&&T.minFilter!==Fe}function d(T){i.generateMipmap(T)}function y(T,g,O,q,$=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=g;if(g===i.RED&&(O===i.FLOAT&&(K=i.R32F),O===i.HALF_FLOAT&&(K=i.R16F),O===i.UNSIGNED_BYTE&&(K=i.R8)),g===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.R8UI),O===i.UNSIGNED_SHORT&&(K=i.R16UI),O===i.UNSIGNED_INT&&(K=i.R32UI),O===i.BYTE&&(K=i.R8I),O===i.SHORT&&(K=i.R16I),O===i.INT&&(K=i.R32I)),g===i.RG&&(O===i.FLOAT&&(K=i.RG32F),O===i.HALF_FLOAT&&(K=i.RG16F),O===i.UNSIGNED_BYTE&&(K=i.RG8)),g===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(K=i.RG8UI),O===i.UNSIGNED_SHORT&&(K=i.RG16UI),O===i.UNSIGNED_INT&&(K=i.RG32UI),O===i.BYTE&&(K=i.RG8I),O===i.SHORT&&(K=i.RG16I),O===i.INT&&(K=i.RG32I)),g===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),g===i.RGBA){const xt=$?Ss:kt.getTransfer(q);O===i.FLOAT&&(K=i.RGBA32F),O===i.HALF_FLOAT&&(K=i.RGBA16F),O===i.UNSIGNED_BYTE&&(K=xt===jt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function S(T,g){let O;return T?g===null||g===Ln||g===ci?O=i.DEPTH24_STENCIL8:g===tn?O=i.DEPTH32F_STENCIL8:g===wi&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ln||g===ci?O=i.DEPTH_COMPONENT24:g===tn?O=i.DEPTH_COMPONENT32F:g===wi&&(O=i.DEPTH_COMPONENT16),O}function b(T,g){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Pe&&T.minFilter!==Fe?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function B(T){const g=T.target;g.removeEventListener("dispose",B),R(g),g.isVideoTexture&&h.delete(g)}function A(T){const g=T.target;g.removeEventListener("dispose",A),E(g)}function R(T){const g=n.get(T);if(g.__webglInit===void 0)return;const O=T.source,q=f.get(O);if(q){const $=q[g.__cacheKey];$.usedTimes--,$.usedTimes===0&&F(T),Object.keys(q).length===0&&f.delete(O)}n.remove(T)}function F(T){const g=n.get(T);i.deleteTexture(g.__webglTexture);const O=T.source,q=f.get(O);delete q[g.__cacheKey],a.memory.textures--}function E(T){const g=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(g.__webglFramebuffer[q]))for(let $=0;$<g.__webglFramebuffer[q].length;$++)i.deleteFramebuffer(g.__webglFramebuffer[q][$]);else i.deleteFramebuffer(g.__webglFramebuffer[q]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[q])}else{if(Array.isArray(g.__webglFramebuffer))for(let q=0;q<g.__webglFramebuffer.length;q++)i.deleteFramebuffer(g.__webglFramebuffer[q]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let q=0;q<g.__webglColorRenderbuffer.length;q++)g.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[q]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=T.textures;for(let q=0,$=O.length;q<$;q++){const K=n.get(O[q]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(O[q])}n.remove(T)}let M=0;function C(){M=0}function G(){const T=M;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),M+=1,T}function z(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function j(T,g){const O=n.get(T);if(T.isVideoTexture&&ee(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xt(O,T,g);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+g)}function Y(T,g){const O=n.get(T);if(T.version>0&&O.__version!==T.version){Xt(O,T,g);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+g)}function k(T,g){const O=n.get(T);if(T.version>0&&O.__version!==T.version){Xt(O,T,g);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+g)}function Z(T,g){const O=n.get(T);if(T.version>0&&O.__version!==T.version){V(O,T,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+g)}const H={[Ms]:i.REPEAT,[Cn]:i.CLAMP_TO_EDGE,[xr]:i.MIRRORED_REPEAT},at={[Pe]:i.NEAREST,[ec]:i.NEAREST_MIPMAP_NEAREST,[Bi]:i.NEAREST_MIPMAP_LINEAR,[Fe]:i.LINEAR,[Os]:i.LINEAR_MIPMAP_NEAREST,[Pn]:i.LINEAR_MIPMAP_LINEAR},ht={[rc]:i.NEVER,[uc]:i.ALWAYS,[ac]:i.LESS,[ko]:i.LEQUAL,[oc]:i.EQUAL,[hc]:i.GEQUAL,[lc]:i.GREATER,[cc]:i.NOTEQUAL};function mt(T,g){if(g.type===tn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Fe||g.magFilter===Os||g.magFilter===Bi||g.magFilter===Pn||g.minFilter===Fe||g.minFilter===Os||g.minFilter===Bi||g.minFilter===Pn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,H[g.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,H[g.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,H[g.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,at[g.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,at[g.minFilter]),g.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ht[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Pe||g.minFilter!==Bi&&g.minFilter!==Pn||g.type===tn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Ft(T,g){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",B));const q=g.source;let $=f.get(q);$===void 0&&($={},f.set(q,$));const K=z(g);if(K!==T.__cacheKey){$[K]===void 0&&($[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),$[K].usedTimes++;const xt=$[T.__cacheKey];xt!==void 0&&($[T.__cacheKey].usedTimes--,xt.usedTimes===0&&F(g)),T.__cacheKey=K,T.__webglTexture=$[K].texture}return O}function Xt(T,g,O){let q=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(q=i.TEXTURE_3D);const $=Ft(T,g),K=g.source;e.bindTexture(q,T.__webglTexture,i.TEXTURE0+O);const xt=n.get(K);if(K.version!==xt.__version||$===!0){e.activeTexture(i.TEXTURE0+O);const st=kt.getPrimaries(kt.workingColorSpace),ct=g.colorSpace===pn?null:kt.getPrimaries(g.colorSpace),Pt=g.colorSpace===pn||st===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let Q=v(g.image,!1,s.maxTextureSize);Q=At(g,Q);const ot=r.convert(g.format,g.colorSpace),Ot=r.convert(g.type);let bt=y(g.internalFormat,ot,Ot,g.colorSpace,g.isVideoTexture);mt(q,g);let ut;const wt=g.mipmaps,It=g.isVideoTexture!==!0,Kt=xt.__version===void 0||$===!0,P=K.dataReady,tt=b(g,Q);if(g.isDepthTexture)bt=S(g.format===hi,g.type),Kt&&(It?e.texStorage2D(i.TEXTURE_2D,1,bt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,bt,Q.width,Q.height,0,ot,Ot,null));else if(g.isDataTexture)if(wt.length>0){It&&Kt&&e.texStorage2D(i.TEXTURE_2D,tt,bt,wt[0].width,wt[0].height);for(let W=0,X=wt.length;W<X;W++)ut=wt[W],It?P&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,ut.width,ut.height,ot,Ot,ut.data):e.texImage2D(i.TEXTURE_2D,W,bt,ut.width,ut.height,0,ot,Ot,ut.data);g.generateMipmaps=!1}else It?(Kt&&e.texStorage2D(i.TEXTURE_2D,tt,bt,Q.width,Q.height),P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,ot,Ot,Q.data)):e.texImage2D(i.TEXTURE_2D,0,bt,Q.width,Q.height,0,ot,Ot,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){It&&Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,tt,bt,wt[0].width,wt[0].height,Q.depth);for(let W=0,X=wt.length;W<X;W++)if(ut=wt[W],g.format!==Oe)if(ot!==null)if(It){if(P)if(g.layerUpdates.size>0){const nt=uo(ut.width,ut.height,g.format,g.type);for(const Mt of g.layerUpdates){const Bt=ut.data.subarray(Mt*nt/ut.data.BYTES_PER_ELEMENT,(Mt+1)*nt/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,Mt,ut.width,ut.height,1,ot,Bt,0,0)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,ut.width,ut.height,Q.depth,ot,ut.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,bt,ut.width,ut.height,Q.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?P&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,ut.width,ut.height,Q.depth,ot,Ot,ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,bt,ut.width,ut.height,Q.depth,0,ot,Ot,ut.data)}else{It&&Kt&&e.texStorage2D(i.TEXTURE_2D,tt,bt,wt[0].width,wt[0].height);for(let W=0,X=wt.length;W<X;W++)ut=wt[W],g.format!==Oe?ot!==null?It?P&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,ut.width,ut.height,ot,ut.data):e.compressedTexImage2D(i.TEXTURE_2D,W,bt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?P&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,ut.width,ut.height,ot,Ot,ut.data):e.texImage2D(i.TEXTURE_2D,W,bt,ut.width,ut.height,0,ot,Ot,ut.data)}else if(g.isDataArrayTexture)if(It){if(Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,tt,bt,Q.width,Q.height,Q.depth),P)if(g.layerUpdates.size>0){const W=uo(Q.width,Q.height,g.format,g.type);for(const X of g.layerUpdates){const nt=Q.data.subarray(X*W/Q.data.BYTES_PER_ELEMENT,(X+1)*W/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,X,Q.width,Q.height,1,ot,Ot,nt)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ot,Ot,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,bt,Q.width,Q.height,Q.depth,0,ot,Ot,Q.data);else if(g.isData3DTexture)It?(Kt&&e.texStorage3D(i.TEXTURE_3D,tt,bt,Q.width,Q.height,Q.depth),P&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ot,Ot,Q.data)):e.texImage3D(i.TEXTURE_3D,0,bt,Q.width,Q.height,Q.depth,0,ot,Ot,Q.data);else if(g.isFramebufferTexture){if(Kt)if(It)e.texStorage2D(i.TEXTURE_2D,tt,bt,Q.width,Q.height);else{let W=Q.width,X=Q.height;for(let nt=0;nt<tt;nt++)e.texImage2D(i.TEXTURE_2D,nt,bt,W,X,0,ot,Ot,null),W>>=1,X>>=1}}else if(wt.length>0){if(It&&Kt){const W=Ct(wt[0]);e.texStorage2D(i.TEXTURE_2D,tt,bt,W.width,W.height)}for(let W=0,X=wt.length;W<X;W++)ut=wt[W],It?P&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,ot,Ot,ut):e.texImage2D(i.TEXTURE_2D,W,bt,ot,Ot,ut);g.generateMipmaps=!1}else if(It){if(Kt){const W=Ct(Q);e.texStorage2D(i.TEXTURE_2D,tt,bt,W.width,W.height)}P&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot,Ot,Q)}else e.texImage2D(i.TEXTURE_2D,0,bt,ot,Ot,Q);p(g)&&d(q),xt.__version=K.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function V(T,g,O){if(g.image.length!==6)return;const q=Ft(T,g),$=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+O);const K=n.get($);if($.version!==K.__version||q===!0){e.activeTexture(i.TEXTURE0+O);const xt=kt.getPrimaries(kt.workingColorSpace),st=g.colorSpace===pn?null:kt.getPrimaries(g.colorSpace),ct=g.colorSpace===pn||xt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const Pt=g.isCompressedTexture||g.image[0].isCompressedTexture,Q=g.image[0]&&g.image[0].isDataTexture,ot=[];for(let X=0;X<6;X++)!Pt&&!Q?ot[X]=v(g.image[X],!0,s.maxCubemapSize):ot[X]=Q?g.image[X].image:g.image[X],ot[X]=At(g,ot[X]);const Ot=ot[0],bt=r.convert(g.format,g.colorSpace),ut=r.convert(g.type),wt=y(g.internalFormat,bt,ut,g.colorSpace),It=g.isVideoTexture!==!0,Kt=K.__version===void 0||q===!0,P=$.dataReady;let tt=b(g,Ot);mt(i.TEXTURE_CUBE_MAP,g);let W;if(Pt){It&&Kt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,tt,wt,Ot.width,Ot.height);for(let X=0;X<6;X++){W=ot[X].mipmaps;for(let nt=0;nt<W.length;nt++){const Mt=W[nt];g.format!==Oe?bt!==null?It?P&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,nt,0,0,Mt.width,Mt.height,bt,Mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,nt,wt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,nt,0,0,Mt.width,Mt.height,bt,ut,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,nt,wt,Mt.width,Mt.height,0,bt,ut,Mt.data)}}}else{if(W=g.mipmaps,It&&Kt){W.length>0&&tt++;const X=Ct(ot[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,tt,wt,X.width,X.height)}for(let X=0;X<6;X++)if(Q){It?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ot[X].width,ot[X].height,bt,ut,ot[X].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,wt,ot[X].width,ot[X].height,0,bt,ut,ot[X].data);for(let nt=0;nt<W.length;nt++){const Bt=W[nt].image[X].image;It?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,nt+1,0,0,Bt.width,Bt.height,bt,ut,Bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,nt+1,wt,Bt.width,Bt.height,0,bt,ut,Bt.data)}}else{It?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,bt,ut,ot[X]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,wt,bt,ut,ot[X]);for(let nt=0;nt<W.length;nt++){const Mt=W[nt];It?P&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,nt+1,0,0,bt,ut,Mt.image[X]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+X,nt+1,wt,bt,ut,Mt.image[X])}}}p(g)&&d(i.TEXTURE_CUBE_MAP),K.__version=$.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function J(T,g,O,q,$,K){const xt=r.convert(O.format,O.colorSpace),st=r.convert(O.type),ct=y(O.internalFormat,xt,st,O.colorSpace);if(!n.get(g).__hasExternalTextures){const Q=Math.max(1,g.width>>K),ot=Math.max(1,g.height>>K);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,K,ct,Q,ot,g.depth,0,xt,st,null):e.texImage2D($,K,ct,Q,ot,0,xt,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),vt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,$,n.get(O).__webglTexture,0,qt(g)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,$,n.get(O).__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(T,g,O){if(i.bindRenderbuffer(i.RENDERBUFFER,T),g.depthBuffer){const q=g.depthTexture,$=q&&q.isDepthTexture?q.type:null,K=S(g.stencilBuffer,$),xt=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=qt(g);vt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,K,g.width,g.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,K,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,K,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,T)}else{const q=g.textures;for(let $=0;$<q.length;$++){const K=q[$],xt=r.convert(K.format,K.colorSpace),st=r.convert(K.type),ct=y(K.internalFormat,xt,st,K.colorSpace),Pt=qt(g);O&&vt(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,ct,g.width,g.height):vt(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pt,ct,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ct,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function lt(T,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),j(g.depthTexture,0);const q=n.get(g.depthTexture).__webglTexture,$=qt(g);if(g.depthTexture.format===ri)vt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,q,0);else if(g.depthTexture.format===hi)vt(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,q,0);else throw new Error("Unknown depthTexture format")}function Et(T){const g=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),q){const $=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,q.removeEventListener("dispose",$)};q.addEventListener("dispose",$),g.__depthDisposeCallback=$}g.__boundDepthTexture=q}if(T.depthTexture&&!g.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");lt(g.__webglFramebuffer,T)}else if(O){g.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[q]),g.__webglDepthbuffer[q]===void 0)g.__webglDepthbuffer[q]=i.createRenderbuffer(),pt(g.__webglDepthbuffer[q],T,!1);else{const $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=g.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,K)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),pt(g.__webglDepthbuffer,T,!1);else{const q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,$)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Rt(T,g,O){const q=n.get(T);g!==void 0&&J(q.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Et(T)}function Nt(T){const g=T.texture,O=n.get(T),q=n.get(g);T.addEventListener("dispose",A);const $=T.textures,K=T.isWebGLCubeRenderTarget===!0,xt=$.length>1;if(xt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=g.version,a.memory.textures++),K){O.__webglFramebuffer=[];for(let st=0;st<6;st++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[st]=[];for(let ct=0;ct<g.mipmaps.length;ct++)O.__webglFramebuffer[st][ct]=i.createFramebuffer()}else O.__webglFramebuffer[st]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let st=0;st<g.mipmaps.length;st++)O.__webglFramebuffer[st]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(xt)for(let st=0,ct=$.length;st<ct;st++){const Pt=n.get($[st]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&vt(T)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let st=0;st<$.length;st++){const ct=$[st];O.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[st]);const Pt=r.convert(ct.format,ct.colorSpace),Q=r.convert(ct.type),ot=y(ct.internalFormat,Pt,Q,ct.colorSpace,T.isXRRenderTarget===!0),Ot=qt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,ot,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,O.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),mt(i.TEXTURE_CUBE_MAP,g);for(let st=0;st<6;st++)if(g.mipmaps&&g.mipmaps.length>0)for(let ct=0;ct<g.mipmaps.length;ct++)J(O.__webglFramebuffer[st][ct],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,ct);else J(O.__webglFramebuffer[st],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);p(g)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let st=0,ct=$.length;st<ct;st++){const Pt=$[st],Q=n.get(Pt);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),mt(i.TEXTURE_2D,Pt),J(O.__webglFramebuffer,T,Pt,i.COLOR_ATTACHMENT0+st,i.TEXTURE_2D,0),p(Pt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(st=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,q.__webglTexture),mt(st,g),g.mipmaps&&g.mipmaps.length>0)for(let ct=0;ct<g.mipmaps.length;ct++)J(O.__webglFramebuffer[ct],T,g,i.COLOR_ATTACHMENT0,st,ct);else J(O.__webglFramebuffer,T,g,i.COLOR_ATTACHMENT0,st,0);p(g)&&d(st),e.unbindTexture()}T.depthBuffer&&Et(T)}function $t(T){const g=T.textures;for(let O=0,q=g.length;O<q;O++){const $=g[O];if(p($)){const K=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,xt=n.get($).__webglTexture;e.bindTexture(K,xt),d(K),e.unbindTexture()}}}const w=[],te=[];function Wt(T){if(T.samples>0){if(vt(T)===!1){const g=T.textures,O=T.width,q=T.height;let $=i.COLOR_BUFFER_BIT;const K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(T),st=g.length>1;if(st)for(let ct=0;ct<g.length;ct++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let ct=0;ct<g.length;ct++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[ct]);const Pt=n.get(g[ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pt,0)}i.blitFramebuffer(0,0,O,q,0,0,O,q,$,i.NEAREST),l===!0&&(w.length=0,te.length=0,w.push(i.COLOR_ATTACHMENT0+ct),T.depthBuffer&&T.resolveDepthBuffer===!1&&(w.push(K),te.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,te)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,w))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let ct=0;ct<g.length;ct++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,xt.__webglColorRenderbuffer[ct]);const Pt=n.get(g[ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,Pt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const g=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function qt(T){return Math.min(s.maxSamples,T.samples)}function vt(T){const g=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ee(T){const g=a.render.frame;h.get(T)!==g&&(h.set(T,g),T.update())}function At(T,g){const O=T.colorSpace,q=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==vn&&O!==pn&&(kt.getTransfer(O)===jt?(q!==Oe||$!==sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),g}function Ct(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=C,this.setTexture2D=j,this.setTexture2DArray=Y,this.setTexture3D=k,this.setTextureCube=Z,this.rebindTextures=Rt,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=J,this.useMultisampledRTT=vt}function Pp(i,t){function e(n,s=pn){let r;const a=kt.getTransfer(s);if(n===sn)return i.UNSIGNED_BYTE;if(n===$r)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Io)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Do)return i.BYTE;if(n===Uo)return i.SHORT;if(n===wi)return i.UNSIGNED_SHORT;if(n===Zr)return i.INT;if(n===Ln)return i.UNSIGNED_INT;if(n===tn)return i.FLOAT;if(n===Li)return i.HALF_FLOAT;if(n===No)return i.ALPHA;if(n===Fo)return i.RGB;if(n===Oe)return i.RGBA;if(n===Oo)return i.LUMINANCE;if(n===Bo)return i.LUMINANCE_ALPHA;if(n===ri)return i.DEPTH_COMPONENT;if(n===hi)return i.DEPTH_STENCIL;if(n===zo)return i.RED;if(n===Qr)return i.RED_INTEGER;if(n===Ho)return i.RG;if(n===ta)return i.RG_INTEGER;if(n===ea)return i.RGBA_INTEGER;if(n===ds||n===fs||n===ps||n===ms)if(a===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ds)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ms)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ds)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ps)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ms)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Mr||n===Sr||n===Er||n===yr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Mr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Er)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Tr||n===br||n===Ar)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Tr||n===br)return a===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ar)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wr||n===Rr||n===Cr||n===Pr||n===Lr||n===Dr||n===Ur||n===Ir||n===Nr||n===Fr||n===Or||n===Br||n===zr||n===Hr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Lr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Dr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ur)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ir)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Or)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Br)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hr)return a===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_s||n===Vr||n===Gr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===_s)return a===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vo||n===kr||n===Wr||n===Xr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===_s)return r.COMPRESSED_RED_RGTC1_EXT;if(n===kr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ci?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Lp extends Ce{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ei extends he{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dp={type:"move"};class lr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,n),d=this._getHandJoint(c,v);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ei;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Up=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ip=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Np{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new xe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new gn({vertexShader:Up,fragmentShader:Ip,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Be(new Ls(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fp extends In{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,_=null;const v=new Np,p=e.getContextAttributes();let d=null,y=null;const S=[],b=[],B=new Tt;let A=null;const R=new Ce;R.layers.enable(1),R.viewport=new ae;const F=new Ce;F.layers.enable(2),F.viewport=new ae;const E=[R,F],M=new Lp;M.layers.enable(1),M.layers.enable(2);let C=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let J=S[V];return J===void 0&&(J=new lr,S[V]=J),J.getTargetRaySpace()},this.getControllerGrip=function(V){let J=S[V];return J===void 0&&(J=new lr,S[V]=J),J.getGripSpace()},this.getHand=function(V){let J=S[V];return J===void 0&&(J=new lr,S[V]=J),J.getHandSpace()};function z(V){const J=b.indexOf(V.inputSource);if(J===-1)return;const pt=S[J];pt!==void 0&&(pt.update(V.inputSource,V.frame,c||a),pt.dispatchEvent({type:V.type,data:V.inputSource}))}function j(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",Y);for(let V=0;V<S.length;V++){const J=b[V];J!==null&&(b[V]=null,S[V].disconnect(J))}C=null,G=null,v.reset(),t.setRenderTarget(d),m=null,f=null,u=null,s=null,y=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",j),s.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(B),s.renderState.layers===void 0){const J={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Dn(m.framebufferWidth,m.framebufferHeight,{format:Oe,type:sn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let J=null,pt=null,lt=null;p.depth&&(lt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=p.stencil?hi:ri,pt=p.stencil?ci:Ln);const Et={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Et),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Dn(f.textureWidth,f.textureHeight,{format:Oe,type:sn,depthTexture:new il(f.textureWidth,f.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Xt.setContext(s),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Y(V){for(let J=0;J<V.removed.length;J++){const pt=V.removed[J],lt=b.indexOf(pt);lt>=0&&(b[lt]=null,S[lt].disconnect(pt))}for(let J=0;J<V.added.length;J++){const pt=V.added[J];let lt=b.indexOf(pt);if(lt===-1){for(let Rt=0;Rt<S.length;Rt++)if(Rt>=b.length){b.push(pt),lt=Rt;break}else if(b[Rt]===null){b[Rt]=pt,lt=Rt;break}if(lt===-1)break}const Et=S[lt];Et&&Et.connect(pt)}}const k=new U,Z=new U;function H(V,J,pt){k.setFromMatrixPosition(J.matrixWorld),Z.setFromMatrixPosition(pt.matrixWorld);const lt=k.distanceTo(Z),Et=J.projectionMatrix.elements,Rt=pt.projectionMatrix.elements,Nt=Et[14]/(Et[10]-1),$t=Et[14]/(Et[10]+1),w=(Et[9]+1)/Et[5],te=(Et[9]-1)/Et[5],Wt=(Et[8]-1)/Et[0],qt=(Rt[8]+1)/Rt[0],vt=Nt*Wt,ee=Nt*qt,At=lt/(-Wt+qt),Ct=At*-Wt;if(J.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ct),V.translateZ(At),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Et[10]===-1)V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const T=Nt+At,g=$t+At,O=vt-Ct,q=ee+(lt-Ct),$=w*$t/g*T,K=te*$t/g*T;V.projectionMatrix.makePerspective(O,q,$,K,T,g),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function at(V,J){J===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(J.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let J=V.near,pt=V.far;v.texture!==null&&(v.depthNear>0&&(J=v.depthNear),v.depthFar>0&&(pt=v.depthFar)),M.near=F.near=R.near=J,M.far=F.far=R.far=pt,(C!==M.near||G!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,G=M.far);const lt=V.parent,Et=M.cameras;at(M,lt);for(let Rt=0;Rt<Et.length;Rt++)at(Et[Rt],lt);Et.length===2?H(M,R,F):M.projectionMatrix.copy(R.projectionMatrix),ht(V,M,lt)};function ht(V,J,pt){pt===null?V.matrix.copy(J.matrixWorld):(V.matrix.copy(pt.matrixWorld),V.matrix.invert(),V.matrix.multiply(J.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ri*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(V){l=V,f!==null&&(f.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let mt=null;function Ft(V,J){if(h=J.getViewerPose(c||a),_=J,h!==null){const pt=h.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let lt=!1;pt.length!==M.cameras.length&&(M.cameras.length=0,lt=!0);for(let Rt=0;Rt<pt.length;Rt++){const Nt=pt[Rt];let $t=null;if(m!==null)$t=m.getViewport(Nt);else{const te=u.getViewSubImage(f,Nt);$t=te.viewport,Rt===0&&(t.setRenderTargetTextures(y,te.colorTexture,f.ignoreDepthValues?void 0:te.depthStencilTexture),t.setRenderTarget(y))}let w=E[Rt];w===void 0&&(w=new Ce,w.layers.enable(Rt),w.viewport=new ae,E[Rt]=w),w.matrix.fromArray(Nt.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(Nt.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set($t.x,$t.y,$t.width,$t.height),Rt===0&&(M.matrix.copy(w.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),lt===!0&&M.cameras.push(w)}const Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")){const Rt=u.getDepthInformation(pt[0]);Rt&&Rt.isValid&&Rt.texture&&v.init(t,Rt,s.renderState)}}for(let pt=0;pt<S.length;pt++){const lt=b[pt],Et=S[pt];lt!==null&&Et!==void 0&&Et.update(lt,J,c||a)}mt&&mt(V,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),_=null}const Xt=new el;Xt.setAnimationLoop(Ft),this.setAnimationLoop=function(V){mt=V},this.dispose=function(){}}}const bn=new We,Op=new Zt;function Bp(i,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Jo(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,y,S,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,b)):d.isMeshMatcapMaterial?(r(p,d),_(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),v(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,y,S):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Se&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Se&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const y=t.get(d),S=y.envMap,b=y.envMapRotation;S&&(p.envMap.value=S,bn.copy(b),bn.x*=-1,bn.y*=-1,bn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(bn.y*=-1,bn.z*=-1),p.envMapRotation.value.setFromMatrix4(Op.makeRotationFromEuler(bn)),p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,y,S){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*y,p.scale.value=S*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,y){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Se&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function v(p,d){const y=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function zp(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){const b=S.program;n.uniformBlockBinding(y,b)}function c(y,S){let b=s[y.id];b===void 0&&(_(y),b=h(y),s[y.id]=b,y.addEventListener("dispose",p));const B=S.program;n.updateUBOMapping(y,B);const A=t.render.frame;r[y.id]!==A&&(f(y),r[y.id]=A)}function h(y){const S=u();y.__bindingPointIndex=S;const b=i.createBuffer(),B=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,B,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const S=s[y.id],b=y.uniforms,B=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let A=0,R=b.length;A<R;A++){const F=Array.isArray(b[A])?b[A]:[b[A]];for(let E=0,M=F.length;E<M;E++){const C=F[E];if(m(C,A,E,B)===!0){const G=C.__offset,z=Array.isArray(C.value)?C.value:[C.value];let j=0;for(let Y=0;Y<z.length;Y++){const k=z[Y],Z=v(k);typeof k=="number"||typeof k=="boolean"?(C.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,G+j,C.__data)):k.isMatrix3?(C.__data[0]=k.elements[0],C.__data[1]=k.elements[1],C.__data[2]=k.elements[2],C.__data[3]=0,C.__data[4]=k.elements[3],C.__data[5]=k.elements[4],C.__data[6]=k.elements[5],C.__data[7]=0,C.__data[8]=k.elements[6],C.__data[9]=k.elements[7],C.__data[10]=k.elements[8],C.__data[11]=0):(k.toArray(C.__data,j),j+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,S,b,B){const A=y.value,R=S+"_"+b;if(B[R]===void 0)return typeof A=="number"||typeof A=="boolean"?B[R]=A:B[R]=A.clone(),!0;{const F=B[R];if(typeof A=="number"||typeof A=="boolean"){if(F!==A)return B[R]=A,!0}else if(F.equals(A)===!1)return F.copy(A),!0}return!1}function _(y){const S=y.uniforms;let b=0;const B=16;for(let R=0,F=S.length;R<F;R++){const E=Array.isArray(S[R])?S[R]:[S[R]];for(let M=0,C=E.length;M<C;M++){const G=E[M],z=Array.isArray(G.value)?G.value:[G.value];for(let j=0,Y=z.length;j<Y;j++){const k=z[j],Z=v(k),H=b%B,at=H%Z.boundary,ht=H+at;b+=at,ht!==0&&B-ht<Z.storage&&(b+=B-ht),G.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=b,b+=Z.storage}}}const A=b%B;return A>0&&(b+=B-A),y.__size=b,y.__cache={},this}function v(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function p(y){const S=y.target;S.removeEventListener("dispose",p);const b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function d(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}class Hp{constructor(t={}){const{canvas:e=Cc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),_=new Int32Array(4);let v=null,p=null;const d=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this.toneMapping=_n,this.toneMappingExposure=1;const S=this;let b=!1,B=0,A=0,R=null,F=-1,E=null;const M=new ae,C=new ae;let G=null;const z=new Ut(0);let j=0,Y=e.width,k=e.height,Z=1,H=null,at=null;const ht=new ae(0,0,Y,k),mt=new ae(0,0,Y,k);let Ft=!1;const Xt=new sa;let V=!1,J=!1;const pt=new Zt,lt=new U,Et=new ae,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function $t(){return R===null?Z:1}let w=n;function te(x,L){return e.getContext(x,L)}try{const x={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${jr}`),e.addEventListener("webglcontextlost",W,!1),e.addEventListener("webglcontextrestored",X,!1),e.addEventListener("webglcontextcreationerror",nt,!1),w===null){const L="webgl2";if(w=te(L,x),w===null)throw te(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let Wt,qt,vt,ee,At,Ct,T,g,O,q,$,K,xt,st,ct,Pt,Q,ot,Ot,bt,ut,wt,It,Kt;function P(){Wt=new Xd(w),Wt.init(),wt=new Pp(w,Wt),qt=new zd(w,Wt,t,wt),vt=new wp(w),ee=new jd(w),At=new fp,Ct=new Cp(w,Wt,vt,At,qt,wt,ee),T=new Vd(S),g=new Wd(S),O=new eh(w),It=new Od(w,O),q=new qd(w,O,ee,It),$=new Zd(w,q,O,ee),Ot=new Kd(w,qt,Ct),Pt=new Hd(At),K=new dp(S,T,g,Wt,qt,It,Pt),xt=new Bp(S,At),st=new mp,ct=new Sp(Wt),ot=new Fd(S,T,g,vt,$,f,l),Q=new Ap(S,$,qt),Kt=new zp(w,ee,qt,vt),bt=new Bd(w,Wt,ee),ut=new Yd(w,Wt,ee),ee.programs=K.programs,S.capabilities=qt,S.extensions=Wt,S.properties=At,S.renderLists=st,S.shadowMap=Q,S.state=vt,S.info=ee}P();const tt=new Fp(S,w);this.xr=tt,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const x=Wt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Wt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(x){x!==void 0&&(Z=x,this.setSize(Y,k,!1))},this.getSize=function(x){return x.set(Y,k)},this.setSize=function(x,L,I=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=x,k=L,e.width=Math.floor(x*Z),e.height=Math.floor(L*Z),I===!0&&(e.style.width=x+"px",e.style.height=L+"px"),this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(Y*Z,k*Z).floor()},this.setDrawingBufferSize=function(x,L,I){Y=x,k=L,Z=I,e.width=Math.floor(x*I),e.height=Math.floor(L*I),this.setViewport(0,0,x,L)},this.getCurrentViewport=function(x){return x.copy(M)},this.getViewport=function(x){return x.copy(ht)},this.setViewport=function(x,L,I,N){x.isVector4?ht.set(x.x,x.y,x.z,x.w):ht.set(x,L,I,N),vt.viewport(M.copy(ht).multiplyScalar(Z).round())},this.getScissor=function(x){return x.copy(mt)},this.setScissor=function(x,L,I,N){x.isVector4?mt.set(x.x,x.y,x.z,x.w):mt.set(x,L,I,N),vt.scissor(C.copy(mt).multiplyScalar(Z).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(x){vt.setScissorTest(Ft=x)},this.setOpaqueSort=function(x){H=x},this.setTransparentSort=function(x){at=x},this.getClearColor=function(x){return x.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor.apply(ot,arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha.apply(ot,arguments)},this.clear=function(x=!0,L=!0,I=!0){let N=0;if(x){let D=!1;if(R!==null){const et=R.texture.format;D=et===ea||et===ta||et===Qr}if(D){const et=R.texture.type,rt=et===sn||et===Ln||et===wi||et===ci||et===$r||et===Jr,dt=ot.getClearColor(),ft=ot.getClearAlpha(),St=dt.r,yt=dt.g,_t=dt.b;rt?(m[0]=St,m[1]=yt,m[2]=_t,m[3]=ft,w.clearBufferuiv(w.COLOR,0,m)):(_[0]=St,_[1]=yt,_[2]=_t,_[3]=ft,w.clearBufferiv(w.COLOR,0,_))}else N|=w.COLOR_BUFFER_BIT}L&&(N|=w.DEPTH_BUFFER_BIT),I&&(N|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",W,!1),e.removeEventListener("webglcontextrestored",X,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),st.dispose(),ct.dispose(),At.dispose(),T.dispose(),g.dispose(),$.dispose(),It.dispose(),Kt.dispose(),K.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",He),tt.removeEventListener("sessionend",la),xn.stop()};function W(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function X(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const x=ee.autoReset,L=Q.enabled,I=Q.autoUpdate,N=Q.needsUpdate,D=Q.type;P(),ee.autoReset=x,Q.enabled=L,Q.autoUpdate=I,Q.needsUpdate=N,Q.type=D}function nt(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Mt(x){const L=x.target;L.removeEventListener("dispose",Mt),Bt(L)}function Bt(x){ne(x),At.remove(x)}function ne(x){const L=At.get(x).programs;L!==void 0&&(L.forEach(function(I){K.releaseProgram(I)}),x.isShaderMaterial&&K.releaseShaderCache(x))}this.renderBufferDirect=function(x,L,I,N,D,et){L===null&&(L=Rt);const rt=D.isMesh&&D.matrixWorld.determinant()<0,dt=pl(x,L,I,N,D);vt.setMaterial(N,rt);let ft=I.index,St=1;if(N.wireframe===!0){if(ft=q.getWireframeAttribute(I),ft===void 0)return;St=2}const yt=I.drawRange,_t=I.attributes.position;let Ht=yt.start*St,Jt=(yt.start+yt.count)*St;et!==null&&(Ht=Math.max(Ht,et.start*St),Jt=Math.min(Jt,(et.start+et.count)*St)),ft!==null?(Ht=Math.max(Ht,0),Jt=Math.min(Jt,ft.count)):_t!=null&&(Ht=Math.max(Ht,0),Jt=Math.min(Jt,_t.count));const Qt=Jt-Ht;if(Qt<0||Qt===1/0)return;It.setup(D,N,dt,I,ft);let Ee,Vt=bt;if(ft!==null&&(Ee=O.get(ft),Vt=ut,Vt.setIndex(Ee)),D.isMesh)N.wireframe===!0?(vt.setLineWidth(N.wireframeLinewidth*$t()),Vt.setMode(w.LINES)):Vt.setMode(w.TRIANGLES);else if(D.isLine){let gt=N.linewidth;gt===void 0&&(gt=1),vt.setLineWidth(gt*$t()),D.isLineSegments?Vt.setMode(w.LINES):D.isLineLoop?Vt.setMode(w.LINE_LOOP):Vt.setMode(w.LINE_STRIP)}else D.isPoints?Vt.setMode(w.POINTS):D.isSprite&&Vt.setMode(w.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Vt.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))Vt.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const gt=D._multiDrawStarts,de=D._multiDrawCounts,Gt=D._multiDrawCount,Le=ft?O.get(ft).bytesPerElement:1,Fn=At.get(N).currentProgram.getUniforms();for(let ye=0;ye<Gt;ye++)Fn.setValue(w,"_gl_DrawID",ye),Vt.render(gt[ye]/Le,de[ye])}else if(D.isInstancedMesh)Vt.renderInstances(Ht,Qt,D.count);else if(I.isInstancedBufferGeometry){const gt=I._maxInstanceCount!==void 0?I._maxInstanceCount:1/0,de=Math.min(I.instanceCount,gt);Vt.renderInstances(Ht,Qt,de)}else Vt.render(Ht,Qt)};function ue(x,L,I){x.transparent===!0&&x.side===Qe&&x.forceSinglePass===!1?(x.side=Se,x.needsUpdate=!0,Oi(x,L,I),x.side=nn,x.needsUpdate=!0,Oi(x,L,I),x.side=Qe):Oi(x,L,I)}this.compile=function(x,L,I=null){I===null&&(I=x),p=ct.get(I),p.init(L),y.push(p),I.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),x!==I&&x.traverseVisible(function(D){D.isLight&&D.layers.test(L.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),p.setupLights();const N=new Set;return x.traverse(function(D){const et=D.material;if(et)if(Array.isArray(et))for(let rt=0;rt<et.length;rt++){const dt=et[rt];ue(dt,I,D),N.add(dt)}else ue(et,I,D),N.add(et)}),y.pop(),p=null,N},this.compileAsync=function(x,L,I=null){const N=this.compile(x,L,I);return new Promise(D=>{function et(){if(N.forEach(function(rt){At.get(rt).currentProgram.isReady()&&N.delete(rt)}),N.size===0){D(x);return}setTimeout(et,10)}Wt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let zt=null;function Xe(x){zt&&zt(x)}function He(){xn.stop()}function la(){xn.start()}const xn=new el;xn.setAnimationLoop(Xe),typeof self<"u"&&xn.setContext(self),this.setAnimationLoop=function(x){zt=x,tt.setAnimationLoop(x),x===null?xn.stop():xn.start()},tt.addEventListener("sessionstart",He),tt.addEventListener("sessionend",la),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(L),L=tt.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,L,R),p=ct.get(x,y.length),p.init(L),y.push(p),pt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Xt.setFromProjectionMatrix(pt),J=this.localClippingEnabled,V=Pt.init(this.clippingPlanes,J),v=st.get(x,d.length),v.init(),d.push(v),tt.enabled===!0&&tt.isPresenting===!0){const et=S.xr.getDepthSensingMesh();et!==null&&Us(et,L,-1/0,S.sortObjects)}Us(x,L,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(H,at),Nt=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,Nt&&ot.addToRenderList(v,x),this.info.render.frame++,V===!0&&Pt.beginShadows();const I=p.state.shadowsArray;Q.render(I,x,L),V===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const N=v.opaque,D=v.transmissive;if(p.setupLights(),L.isArrayCamera){const et=L.cameras;if(D.length>0)for(let rt=0,dt=et.length;rt<dt;rt++){const ft=et[rt];ha(N,D,x,ft)}Nt&&ot.render(x);for(let rt=0,dt=et.length;rt<dt;rt++){const ft=et[rt];ca(v,x,ft,ft.viewport)}}else D.length>0&&ha(N,D,x,L),Nt&&ot.render(x),ca(v,x,L);R!==null&&(Ct.updateMultisampleRenderTarget(R),Ct.updateRenderTargetMipmap(R)),x.isScene===!0&&x.onAfterRender(S,x,L),It.resetDefaultState(),F=-1,E=null,y.pop(),y.length>0?(p=y[y.length-1],V===!0&&Pt.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function Us(x,L,I,N){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)I=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(L);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Xt.intersectsSprite(x)){N&&Et.setFromMatrixPosition(x.matrixWorld).applyMatrix4(pt);const rt=$.update(x),dt=x.material;dt.visible&&v.push(x,rt,dt,I,Et.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Xt.intersectsObject(x))){const rt=$.update(x),dt=x.material;if(N&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Et.copy(x.boundingSphere.center)):(rt.boundingSphere===null&&rt.computeBoundingSphere(),Et.copy(rt.boundingSphere.center)),Et.applyMatrix4(x.matrixWorld).applyMatrix4(pt)),Array.isArray(dt)){const ft=rt.groups;for(let St=0,yt=ft.length;St<yt;St++){const _t=ft[St],Ht=dt[_t.materialIndex];Ht&&Ht.visible&&v.push(x,rt,Ht,I,Et.z,_t)}}else dt.visible&&v.push(x,rt,dt,I,Et.z,null)}}const et=x.children;for(let rt=0,dt=et.length;rt<dt;rt++)Us(et[rt],L,I,N)}function ca(x,L,I,N){const D=x.opaque,et=x.transmissive,rt=x.transparent;p.setupLightsView(I),V===!0&&Pt.setGlobalState(S.clippingPlanes,I),N&&vt.viewport(M.copy(N)),D.length>0&&Fi(D,L,I),et.length>0&&Fi(et,L,I),rt.length>0&&Fi(rt,L,I),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function ha(x,L,I,N){if((I.isScene===!0?I.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[N.id]===void 0&&(p.state.transmissionRenderTarget[N.id]=new Dn(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?Li:sn,minFilter:Pn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:kt.workingColorSpace}));const et=p.state.transmissionRenderTarget[N.id],rt=N.viewport||M;et.setSize(rt.z,rt.w);const dt=S.getRenderTarget();S.setRenderTarget(et),S.getClearColor(z),j=S.getClearAlpha(),j<1&&S.setClearColor(16777215,.5),S.clear(),Nt&&ot.render(I);const ft=S.toneMapping;S.toneMapping=_n;const St=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),p.setupLightsView(N),V===!0&&Pt.setGlobalState(S.clippingPlanes,N),Fi(x,I,N),Ct.updateMultisampleRenderTarget(et),Ct.updateRenderTargetMipmap(et),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let yt=!1;for(let _t=0,Ht=L.length;_t<Ht;_t++){const Jt=L[_t],Qt=Jt.object,Ee=Jt.geometry,Vt=Jt.material,gt=Jt.group;if(Vt.side===Qe&&Qt.layers.test(N.layers)){const de=Vt.side;Vt.side=Se,Vt.needsUpdate=!0,ua(Qt,I,N,Ee,Vt,gt),Vt.side=de,Vt.needsUpdate=!0,yt=!0}}yt===!0&&(Ct.updateMultisampleRenderTarget(et),Ct.updateRenderTargetMipmap(et))}S.setRenderTarget(dt),S.setClearColor(z,j),St!==void 0&&(N.viewport=St),S.toneMapping=ft}function Fi(x,L,I){const N=L.isScene===!0?L.overrideMaterial:null;for(let D=0,et=x.length;D<et;D++){const rt=x[D],dt=rt.object,ft=rt.geometry,St=N===null?rt.material:N,yt=rt.group;dt.layers.test(I.layers)&&ua(dt,L,I,ft,St,yt)}}function ua(x,L,I,N,D,et){x.onBeforeRender(S,L,I,N,D,et),x.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),D.onBeforeRender(S,L,I,N,x,et),D.transparent===!0&&D.side===Qe&&D.forceSinglePass===!1?(D.side=Se,D.needsUpdate=!0,S.renderBufferDirect(I,L,N,D,x,et),D.side=nn,D.needsUpdate=!0,S.renderBufferDirect(I,L,N,D,x,et),D.side=Qe):S.renderBufferDirect(I,L,N,D,x,et),x.onAfterRender(S,L,I,N,D,et)}function Oi(x,L,I){L.isScene!==!0&&(L=Rt);const N=At.get(x),D=p.state.lights,et=p.state.shadowsArray,rt=D.state.version,dt=K.getParameters(x,D.state,et,L,I),ft=K.getProgramCacheKey(dt);let St=N.programs;N.environment=x.isMeshStandardMaterial?L.environment:null,N.fog=L.fog,N.envMap=(x.isMeshStandardMaterial?g:T).get(x.envMap||N.environment),N.envMapRotation=N.environment!==null&&x.envMap===null?L.environmentRotation:x.envMapRotation,St===void 0&&(x.addEventListener("dispose",Mt),St=new Map,N.programs=St);let yt=St.get(ft);if(yt!==void 0){if(N.currentProgram===yt&&N.lightsStateVersion===rt)return fa(x,dt),yt}else dt.uniforms=K.getUniforms(x),x.onBeforeCompile(dt,S),yt=K.acquireProgram(dt,ft),St.set(ft,yt),N.uniforms=dt.uniforms;const _t=N.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(_t.clippingPlanes=Pt.uniform),fa(x,dt),N.needsLights=_l(x),N.lightsStateVersion=rt,N.needsLights&&(_t.ambientLightColor.value=D.state.ambient,_t.lightProbe.value=D.state.probe,_t.directionalLights.value=D.state.directional,_t.directionalLightShadows.value=D.state.directionalShadow,_t.spotLights.value=D.state.spot,_t.spotLightShadows.value=D.state.spotShadow,_t.rectAreaLights.value=D.state.rectArea,_t.ltc_1.value=D.state.rectAreaLTC1,_t.ltc_2.value=D.state.rectAreaLTC2,_t.pointLights.value=D.state.point,_t.pointLightShadows.value=D.state.pointShadow,_t.hemisphereLights.value=D.state.hemi,_t.directionalShadowMap.value=D.state.directionalShadowMap,_t.directionalShadowMatrix.value=D.state.directionalShadowMatrix,_t.spotShadowMap.value=D.state.spotShadowMap,_t.spotLightMatrix.value=D.state.spotLightMatrix,_t.spotLightMap.value=D.state.spotLightMap,_t.pointShadowMap.value=D.state.pointShadowMap,_t.pointShadowMatrix.value=D.state.pointShadowMatrix),N.currentProgram=yt,N.uniformsList=null,yt}function da(x){if(x.uniformsList===null){const L=x.currentProgram.getUniforms();x.uniformsList=gs.seqWithValue(L.seq,x.uniforms)}return x.uniformsList}function fa(x,L){const I=At.get(x);I.outputColorSpace=L.outputColorSpace,I.batching=L.batching,I.batchingColor=L.batchingColor,I.instancing=L.instancing,I.instancingColor=L.instancingColor,I.instancingMorph=L.instancingMorph,I.skinning=L.skinning,I.morphTargets=L.morphTargets,I.morphNormals=L.morphNormals,I.morphColors=L.morphColors,I.morphTargetsCount=L.morphTargetsCount,I.numClippingPlanes=L.numClippingPlanes,I.numIntersection=L.numClipIntersection,I.vertexAlphas=L.vertexAlphas,I.vertexTangents=L.vertexTangents,I.toneMapping=L.toneMapping}function pl(x,L,I,N,D){L.isScene!==!0&&(L=Rt),Ct.resetTextureUnits();const et=L.fog,rt=N.isMeshStandardMaterial?L.environment:null,dt=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:vn,ft=(N.isMeshStandardMaterial?g:T).get(N.envMap||rt),St=N.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,yt=!!I.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),_t=!!I.morphAttributes.position,Ht=!!I.morphAttributes.normal,Jt=!!I.morphAttributes.color;let Qt=_n;N.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Qt=S.toneMapping);const Ee=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Vt=Ee!==void 0?Ee.length:0,gt=At.get(N),de=p.state.lights;if(V===!0&&(J===!0||x!==E)){const Ae=x===E&&N.id===F;Pt.setState(N,x,Ae)}let Gt=!1;N.version===gt.__version?(gt.needsLights&&gt.lightsStateVersion!==de.state.version||gt.outputColorSpace!==dt||D.isBatchedMesh&&gt.batching===!1||!D.isBatchedMesh&&gt.batching===!0||D.isBatchedMesh&&gt.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&gt.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&gt.instancing===!1||!D.isInstancedMesh&&gt.instancing===!0||D.isSkinnedMesh&&gt.skinning===!1||!D.isSkinnedMesh&&gt.skinning===!0||D.isInstancedMesh&&gt.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&gt.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&gt.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&gt.instancingMorph===!1&&D.morphTexture!==null||gt.envMap!==ft||N.fog===!0&&gt.fog!==et||gt.numClippingPlanes!==void 0&&(gt.numClippingPlanes!==Pt.numPlanes||gt.numIntersection!==Pt.numIntersection)||gt.vertexAlphas!==St||gt.vertexTangents!==yt||gt.morphTargets!==_t||gt.morphNormals!==Ht||gt.morphColors!==Jt||gt.toneMapping!==Qt||gt.morphTargetsCount!==Vt)&&(Gt=!0):(Gt=!0,gt.__version=N.version);let Le=gt.currentProgram;Gt===!0&&(Le=Oi(N,L,D));let Fn=!1,ye=!1,Is=!1;const ie=Le.getUniforms(),an=gt.uniforms;if(vt.useProgram(Le.program)&&(Fn=!0,ye=!0,Is=!0),N.id!==F&&(F=N.id,ye=!0),Fn||E!==x){ie.setValue(w,"projectionMatrix",x.projectionMatrix),ie.setValue(w,"viewMatrix",x.matrixWorldInverse);const Ae=ie.map.cameraPosition;Ae!==void 0&&Ae.setValue(w,lt.setFromMatrixPosition(x.matrixWorld)),qt.logarithmicDepthBuffer&&ie.setValue(w,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&ie.setValue(w,"isOrthographic",x.isOrthographicCamera===!0),E!==x&&(E=x,ye=!0,Is=!0)}if(D.isSkinnedMesh){ie.setOptional(w,D,"bindMatrix"),ie.setOptional(w,D,"bindMatrixInverse");const Ae=D.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),ie.setValue(w,"boneTexture",Ae.boneTexture,Ct))}D.isBatchedMesh&&(ie.setOptional(w,D,"batchingTexture"),ie.setValue(w,"batchingTexture",D._matricesTexture,Ct),ie.setOptional(w,D,"batchingIdTexture"),ie.setValue(w,"batchingIdTexture",D._indirectTexture,Ct),ie.setOptional(w,D,"batchingColorTexture"),D._colorsTexture!==null&&ie.setValue(w,"batchingColorTexture",D._colorsTexture,Ct));const Ns=I.morphAttributes;if((Ns.position!==void 0||Ns.normal!==void 0||Ns.color!==void 0)&&Ot.update(D,I,Le),(ye||gt.receiveShadow!==D.receiveShadow)&&(gt.receiveShadow=D.receiveShadow,ie.setValue(w,"receiveShadow",D.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(an.envMap.value=ft,an.flipEnvMap.value=ft.isCubeTexture&&ft.isRenderTargetTexture===!1?-1:1),N.isMeshStandardMaterial&&N.envMap===null&&L.environment!==null&&(an.envMapIntensity.value=L.environmentIntensity),ye&&(ie.setValue(w,"toneMappingExposure",S.toneMappingExposure),gt.needsLights&&ml(an,Is),et&&N.fog===!0&&xt.refreshFogUniforms(an,et),xt.refreshMaterialUniforms(an,N,Z,k,p.state.transmissionRenderTarget[x.id]),gs.upload(w,da(gt),an,Ct)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(gs.upload(w,da(gt),an,Ct),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&ie.setValue(w,"center",D.center),ie.setValue(w,"modelViewMatrix",D.modelViewMatrix),ie.setValue(w,"normalMatrix",D.normalMatrix),ie.setValue(w,"modelMatrix",D.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Ae=N.uniformsGroups;for(let Fs=0,gl=Ae.length;Fs<gl;Fs++){const pa=Ae[Fs];Kt.update(pa,Le),Kt.bind(pa,Le)}}return Le}function ml(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function _l(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(x,L,I){At.get(x.texture).__webglTexture=L,At.get(x.depthTexture).__webglTexture=I;const N=At.get(x);N.__hasExternalTextures=!0,N.__autoAllocateDepthBuffer=I===void 0,N.__autoAllocateDepthBuffer||Wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,L){const I=At.get(x);I.__webglFramebuffer=L,I.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(x,L=0,I=0){R=x,B=L,A=I;let N=!0,D=null,et=!1,rt=!1;if(x){const ft=At.get(x);if(ft.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(w.FRAMEBUFFER,null),N=!1;else if(ft.__webglFramebuffer===void 0)Ct.setupRenderTarget(x);else if(ft.__hasExternalTextures)Ct.rebindTextures(x,At.get(x.texture).__webglTexture,At.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const _t=x.depthTexture;if(ft.__boundDepthTexture!==_t){if(_t!==null&&At.has(_t)&&(x.width!==_t.image.width||x.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ct.setupDepthRenderbuffer(x)}}const St=x.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(rt=!0);const yt=At.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(yt[L])?D=yt[L][I]:D=yt[L],et=!0):x.samples>0&&Ct.useMultisampledRTT(x)===!1?D=At.get(x).__webglMultisampledFramebuffer:Array.isArray(yt)?D=yt[I]:D=yt,M.copy(x.viewport),C.copy(x.scissor),G=x.scissorTest}else M.copy(ht).multiplyScalar(Z).floor(),C.copy(mt).multiplyScalar(Z).floor(),G=Ft;if(vt.bindFramebuffer(w.FRAMEBUFFER,D)&&N&&vt.drawBuffers(x,D),vt.viewport(M),vt.scissor(C),vt.setScissorTest(G),et){const ft=At.get(x.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+L,ft.__webglTexture,I)}else if(rt){const ft=At.get(x.texture),St=L||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,ft.__webglTexture,I||0,St)}F=-1},this.readRenderTargetPixels=function(x,L,I,N,D,et,rt){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=At.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&rt!==void 0&&(dt=dt[rt]),dt){vt.bindFramebuffer(w.FRAMEBUFFER,dt);try{const ft=x.texture,St=ft.format,yt=ft.type;if(!qt.textureFormatReadable(St)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=x.width-N&&I>=0&&I<=x.height-D&&w.readPixels(L,I,N,D,wt.convert(St),wt.convert(yt),et)}finally{const ft=R!==null?At.get(R).__webglFramebuffer:null;vt.bindFramebuffer(w.FRAMEBUFFER,ft)}}},this.readRenderTargetPixelsAsync=async function(x,L,I,N,D,et,rt){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=At.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&rt!==void 0&&(dt=dt[rt]),dt){vt.bindFramebuffer(w.FRAMEBUFFER,dt);try{const ft=x.texture,St=ft.format,yt=ft.type;if(!qt.textureFormatReadable(St))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=x.width-N&&I>=0&&I<=x.height-D){const _t=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,_t),w.bufferData(w.PIXEL_PACK_BUFFER,et.byteLength,w.STREAM_READ),w.readPixels(L,I,N,D,wt.convert(St),wt.convert(yt),0),w.flush();const Ht=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);await Pc(w,Ht,4);try{w.bindBuffer(w.PIXEL_PACK_BUFFER,_t),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,et)}finally{w.deleteBuffer(_t),w.deleteSync(Ht)}return et}}finally{const ft=R!==null?At.get(R).__webglFramebuffer:null;vt.bindFramebuffer(w.FRAMEBUFFER,ft)}}},this.copyFramebufferToTexture=function(x,L=null,I=0){x.isTexture!==!0&&(Ai("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,x=arguments[1]);const N=Math.pow(2,-I),D=Math.floor(x.image.width*N),et=Math.floor(x.image.height*N),rt=L!==null?L.x:0,dt=L!==null?L.y:0;Ct.setTexture2D(x,0),w.copyTexSubImage2D(w.TEXTURE_2D,I,0,0,rt,dt,D,et),vt.unbindTexture()},this.copyTextureToTexture=function(x,L,I=null,N=null,D=0){x.isTexture!==!0&&(Ai("WebGLRenderer: copyTextureToTexture function signature has changed."),N=arguments[0]||null,x=arguments[1],L=arguments[2],D=arguments[3]||0,I=null);let et,rt,dt,ft,St,yt;I!==null?(et=I.max.x-I.min.x,rt=I.max.y-I.min.y,dt=I.min.x,ft=I.min.y):(et=x.image.width,rt=x.image.height,dt=0,ft=0),N!==null?(St=N.x,yt=N.y):(St=0,yt=0);const _t=wt.convert(L.format),Ht=wt.convert(L.type);Ct.setTexture2D(L,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,L.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,L.unpackAlignment);const Jt=w.getParameter(w.UNPACK_ROW_LENGTH),Qt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Ee=w.getParameter(w.UNPACK_SKIP_PIXELS),Vt=w.getParameter(w.UNPACK_SKIP_ROWS),gt=w.getParameter(w.UNPACK_SKIP_IMAGES),de=x.isCompressedTexture?x.mipmaps[D]:x.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,de.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,de.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,dt),w.pixelStorei(w.UNPACK_SKIP_ROWS,ft),x.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,D,St,yt,et,rt,_t,Ht,de.data):x.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,D,St,yt,de.width,de.height,_t,de.data):w.texSubImage2D(w.TEXTURE_2D,D,St,yt,et,rt,_t,Ht,de),w.pixelStorei(w.UNPACK_ROW_LENGTH,Jt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Qt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ee),w.pixelStorei(w.UNPACK_SKIP_ROWS,Vt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,gt),D===0&&L.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),vt.unbindTexture()},this.copyTextureToTexture3D=function(x,L,I=null,N=null,D=0){x.isTexture!==!0&&(Ai("WebGLRenderer: copyTextureToTexture3D function signature has changed."),I=arguments[0]||null,N=arguments[1]||null,x=arguments[2],L=arguments[3],D=arguments[4]||0);let et,rt,dt,ft,St,yt,_t,Ht,Jt;const Qt=x.isCompressedTexture?x.mipmaps[D]:x.image;I!==null?(et=I.max.x-I.min.x,rt=I.max.y-I.min.y,dt=I.max.z-I.min.z,ft=I.min.x,St=I.min.y,yt=I.min.z):(et=Qt.width,rt=Qt.height,dt=Qt.depth,ft=0,St=0,yt=0),N!==null?(_t=N.x,Ht=N.y,Jt=N.z):(_t=0,Ht=0,Jt=0);const Ee=wt.convert(L.format),Vt=wt.convert(L.type);let gt;if(L.isData3DTexture)Ct.setTexture3D(L,0),gt=w.TEXTURE_3D;else if(L.isDataArrayTexture||L.isCompressedArrayTexture)Ct.setTexture2DArray(L,0),gt=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,L.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,L.unpackAlignment);const de=w.getParameter(w.UNPACK_ROW_LENGTH),Gt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Le=w.getParameter(w.UNPACK_SKIP_PIXELS),Fn=w.getParameter(w.UNPACK_SKIP_ROWS),ye=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Qt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Qt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,ft),w.pixelStorei(w.UNPACK_SKIP_ROWS,St),w.pixelStorei(w.UNPACK_SKIP_IMAGES,yt),x.isDataTexture||x.isData3DTexture?w.texSubImage3D(gt,D,_t,Ht,Jt,et,rt,dt,Ee,Vt,Qt.data):L.isCompressedArrayTexture?w.compressedTexSubImage3D(gt,D,_t,Ht,Jt,et,rt,dt,Ee,Qt.data):w.texSubImage3D(gt,D,_t,Ht,Jt,et,rt,dt,Ee,Vt,Qt),w.pixelStorei(w.UNPACK_ROW_LENGTH,de),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Gt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Le),w.pixelStorei(w.UNPACK_SKIP_ROWS,Fn),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ye),D===0&&L.generateMipmaps&&w.generateMipmap(gt),vt.unbindTexture()},this.initRenderTarget=function(x){At.get(x).__webglFramebuffer===void 0&&Ct.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?Ct.setTextureCube(x,0):x.isData3DTexture?Ct.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?Ct.setTexture2DArray(x,0):Ct.setTexture2D(x,0),vt.unbindTexture()},this.resetState=function(){B=0,A=0,R=null,vt.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return en}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===na?"display-p3":"srgb",e.unpackColorSpace=kt.workingColorSpace===Cs?"display-p3":"srgb"}}class Vp extends he{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new We,this.environmentIntensity=1,this.environmentRotation=new We,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class vs extends rn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const bs=new U,As=new U,fo=new Zt,Mi=new Ps,as=new Ui,cr=new U,po=new U;class Gp extends he{constructor(t=new ze,e=new vs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)bs.fromBufferAttribute(e,s-1),As.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=bs.distanceTo(As);t.setAttribute("lineDistance",new ve(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere),as.applyMatrix4(s),as.radius+=r,t.ray.intersectsSphere(as)===!1)return;fo.copy(s).invert(),Mi.copy(t.ray).applyMatrix4(fo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const m=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let v=m,p=_-1;v<p;v+=c){const d=h.getX(v),y=h.getX(v+1),S=os(this,t,Mi,l,d,y);S&&e.push(S)}if(this.isLineLoop){const v=h.getX(_-1),p=h.getX(m),d=os(this,t,Mi,l,v,p);d&&e.push(d)}}else{const m=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let v=m,p=_-1;v<p;v+=c){const d=os(this,t,Mi,l,v,v+1);d&&e.push(d)}if(this.isLineLoop){const v=os(this,t,Mi,l,_-1,m);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function os(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(bs.fromBufferAttribute(a,s),As.fromBufferAttribute(a,r),e.distanceSqToSegment(bs,As,cr,po)>n)return;cr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(cr);if(!(l<t.near||l>t.far))return{distance:l,point:po.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,object:i}}const mo=new U,_o=new U;class go extends Gp{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)mo.fromBufferAttribute(e,s),_o.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+mo.distanceTo(_o);t.setAttribute("lineDistance",new ve(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yi extends rn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const vo=new Zt,Yr=new Ps,ls=new Ui,cs=new U;class hr extends he{constructor(t=new ze,e=new yi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(s),ls.radius+=r,t.ray.intersectsSphere(ls)===!1)return;vo.copy(s).invert(),Yr.copy(t.ray).applyMatrix4(vo);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=f,v=m;_<v;_++){const p=c.getX(_);cs.fromBufferAttribute(u,p),xo(cs,p,l,s,t,e,this)}}else{const f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=f,v=m;_<v;_++)cs.fromBufferAttribute(u,_),xo(cs,_,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function xo(i,t,e,n,s,r,a){const o=Yr.distanceSqToPoint(i);if(o<e){const l=new U;Yr.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class ll extends rn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ut(16777215),this.specular=new Ut(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Go,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new We,this.combine=Kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const ws={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class kp{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const m=c[u],_=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return _}return null}}}const cl=new kp;class pi{constructor(t){this.manager=t!==void 0?t:cl,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}pi.DEFAULT_MATERIAL_NAME="__DEFAULT";const $e={};class Wp extends Error{constructor(t,e){super(t),this.response=e}}class hl extends pi{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=ws.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if($e[t]!==void 0){$e[t].push({onLoad:e,onProgress:n,onError:s});return}$e[t]=[],$e[t].push({onLoad:e,onProgress:n,onError:s});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=$e[t],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=f?parseInt(f):0,_=m!==0;let v=0;const p=new ReadableStream({start(d){y();function y(){u.read().then(({done:S,value:b})=>{if(S)d.close();else{v+=b.byteLength;const B=new ProgressEvent("progress",{lengthComputable:_,loaded:v,total:m});for(let A=0,R=h.length;A<R;A++){const F=h[A];F.onProgress&&F.onProgress(B)}d.enqueue(b),y()}},S=>{d.error(S)})}}});return new Response(p)}else throw new Wp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(_=>m.decode(_))}}}).then(c=>{ws.add(t,c);const h=$e[t];delete $e[t];for(let u=0,f=h.length;u<f;u++){const m=h[u];m.onLoad&&m.onLoad(c)}}).catch(c=>{const h=$e[t];if(h===void 0)throw this.manager.itemError(t),c;delete $e[t];for(let u=0,f=h.length;u<f;u++){const m=h[u];m.onError&&m.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Xp extends pi{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=ws.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=Ci("img");function l(){h(),ws.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class qp extends pi{constructor(t){super(t)}load(t,e,n,s){const r=new xe,a=new Xp(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class ul extends he{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const ur=new Zt,Mo=new U,So=new U;class Yp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sa,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Mo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Mo),So.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(So),e.updateMatrixWorld(),ur.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ur),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ur)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class jp extends Yp{constructor(){super(new nl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kp extends ul{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(he.DEFAULT_UP),this.updateMatrix(),this.target=new he,this.shadow=new jp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Zp extends ul{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class $p{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Eo{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Jp extends In{constructor(t,e){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jr);const Qp=/^[og]\s*(.+)?/,tm=/^mtllib /,em=/^usemtl /,nm=/^usemap /,yo=/\s+/,To=new U,dr=new U,bo=new U,Ao=new U,Re=new U,hs=new Ut;function im(){const i={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,e){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=e!==!1;return}const n=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:e!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,r){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const o={index:this.materials.length,name:s||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(l){const c={index:typeof l=="number"?l:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return c.clone=this.clone.bind(c),c}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),s&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},n&&n.name&&typeof n.clone=="function"){const s=n.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseNormalIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/3)*3},parseUVIndex:function(t,e){const n=parseInt(t,10);return(n>=0?n-1:n+e/2)*2},addVertex:function(t,e,n){const s=this.vertices,r=this.object.geometry.vertices;r.push(s[t+0],s[t+1],s[t+2]),r.push(s[e+0],s[e+1],s[e+2]),r.push(s[n+0],s[n+1],s[n+2])},addVertexPoint:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addVertexLine:function(t){const e=this.vertices;this.object.geometry.vertices.push(e[t+0],e[t+1],e[t+2])},addNormal:function(t,e,n){const s=this.normals,r=this.object.geometry.normals;r.push(s[t+0],s[t+1],s[t+2]),r.push(s[e+0],s[e+1],s[e+2]),r.push(s[n+0],s[n+1],s[n+2])},addFaceNormal:function(t,e,n){const s=this.vertices,r=this.object.geometry.normals;To.fromArray(s,t),dr.fromArray(s,e),bo.fromArray(s,n),Re.subVectors(bo,dr),Ao.subVectors(To,dr),Re.cross(Ao),Re.normalize(),r.push(Re.x,Re.y,Re.z),r.push(Re.x,Re.y,Re.z),r.push(Re.x,Re.y,Re.z)},addColor:function(t,e,n){const s=this.colors,r=this.object.geometry.colors;s[t]!==void 0&&r.push(s[t+0],s[t+1],s[t+2]),s[e]!==void 0&&r.push(s[e+0],s[e+1],s[e+2]),s[n]!==void 0&&r.push(s[n+0],s[n+1],s[n+2])},addUV:function(t,e,n){const s=this.uvs,r=this.object.geometry.uvs;r.push(s[t+0],s[t+1]),r.push(s[e+0],s[e+1]),r.push(s[n+0],s[n+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const e=this.uvs;this.object.geometry.uvs.push(e[t+0],e[t+1])},addFace:function(t,e,n,s,r,a,o,l,c){const h=this.vertices.length;let u=this.parseVertexIndex(t,h),f=this.parseVertexIndex(e,h),m=this.parseVertexIndex(n,h);if(this.addVertex(u,f,m),this.addColor(u,f,m),o!==void 0&&o!==""){const _=this.normals.length;u=this.parseNormalIndex(o,_),f=this.parseNormalIndex(l,_),m=this.parseNormalIndex(c,_),this.addNormal(u,f,m)}else this.addFaceNormal(u,f,m);if(s!==void 0&&s!==""){const _=this.uvs.length;u=this.parseUVIndex(s,_),f=this.parseUVIndex(r,_),m=this.parseUVIndex(a,_),this.addUV(u,f,m),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const e=this.vertices.length;for(let n=0,s=t.length;n<s;n++){const r=this.parseVertexIndex(t[n],e);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(t,e){this.object.geometry.type="Line";const n=this.vertices.length,s=this.uvs.length;for(let r=0,a=t.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(t[r],n));for(let r=0,a=e.length;r<a;r++)this.addUVLine(this.parseUVIndex(e[r],s))}};return i.startObject("",!1),i}class sm extends pi{constructor(t){super(t),this.materials=null}load(t,e,n,s){const r=this,a=new hl(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(o){try{e(r.parse(o))}catch(l){s?s(l):console.error(l),r.manager.itemError(t)}},n,s)}setMaterials(t){return this.materials=t,this}parse(t){const e=new im;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const n=t.split(`
`);let s=[];for(let o=0,l=n.length;o<l;o++){const c=n[o].trimStart();if(c.length===0)continue;const h=c.charAt(0);if(h!=="#")if(h==="v"){const u=c.split(yo);switch(u[0]){case"v":e.vertices.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3])),u.length>=7?(hs.setRGB(parseFloat(u[4]),parseFloat(u[5]),parseFloat(u[6])).convertSRGBToLinear(),e.colors.push(hs.r,hs.g,hs.b)):e.colors.push(void 0,void 0,void 0);break;case"vn":e.normals.push(parseFloat(u[1]),parseFloat(u[2]),parseFloat(u[3]));break;case"vt":e.uvs.push(parseFloat(u[1]),parseFloat(u[2]));break}}else if(h==="f"){const f=c.slice(1).trim().split(yo),m=[];for(let v=0,p=f.length;v<p;v++){const d=f[v];if(d.length>0){const y=d.split("/");m.push(y)}}const _=m[0];for(let v=1,p=m.length-1;v<p;v++){const d=m[v],y=m[v+1];e.addFace(_[0],d[0],y[0],_[1],d[1],y[1],_[2],d[2],y[2])}}else if(h==="l"){const u=c.substring(1).trim().split(" ");let f=[];const m=[];if(c.indexOf("/")===-1)f=u;else for(let _=0,v=u.length;_<v;_++){const p=u[_].split("/");p[0]!==""&&f.push(p[0]),p[1]!==""&&m.push(p[1])}e.addLineGeometry(f,m)}else if(h==="p"){const f=c.slice(1).trim().split(" ");e.addPointGeometry(f)}else if((s=Qp.exec(c))!==null){const u=(" "+s[0].slice(1).trim()).slice(1);e.startObject(u)}else if(em.test(c))e.object.startMaterial(c.substring(7).trim(),e.materialLibraries);else if(tm.test(c))e.materialLibraries.push(c.substring(7).trim());else if(nm.test(c))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(h==="s"){if(s=c.split(" "),s.length>1){const f=s[1].trim().toLowerCase();e.object.smooth=f!=="0"&&f!=="off"}else e.object.smooth=!0;const u=e.object.currentMaterial();u&&(u.smooth=e.object.smooth)}else{if(c==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+c+'"')}}e.finalize();const r=new Ei;if(r.materialLibraries=[].concat(e.materialLibraries),!(e.objects.length===1&&e.objects[0].geometry.vertices.length===0)===!0)for(let o=0,l=e.objects.length;o<l;o++){const c=e.objects[o],h=c.geometry,u=c.materials,f=h.type==="Line",m=h.type==="Points";let _=!1;if(h.vertices.length===0)continue;const v=new ze;v.setAttribute("position",new ve(h.vertices,3)),h.normals.length>0&&v.setAttribute("normal",new ve(h.normals,3)),h.colors.length>0&&(_=!0,v.setAttribute("color",new ve(h.colors,3))),h.hasUVIndices===!0&&v.setAttribute("uv",new ve(h.uvs,2));const p=[];for(let y=0,S=u.length;y<S;y++){const b=u[y],B=b.name+"_"+b.smooth+"_"+_;let A=e.materials[B];if(this.materials!==null){if(A=this.materials.create(b.name),f&&A&&!(A instanceof vs)){const R=new vs;rn.prototype.copy.call(R,A),R.color.copy(A.color),A=R}else if(m&&A&&!(A instanceof yi)){const R=new yi({size:10,sizeAttenuation:!1});rn.prototype.copy.call(R,A),R.color.copy(A.color),R.map=A.map,A=R}}A===void 0&&(f?A=new vs:m?A=new yi({size:1,sizeAttenuation:!1}):A=new ll,A.name=b.name,A.flatShading=!b.smooth,A.vertexColors=_,e.materials[B]=A),p.push(A)}let d;if(p.length>1){for(let y=0,S=u.length;y<S;y++){const b=u[y];v.addGroup(b.groupStart,b.groupCount,y)}f?d=new go(v,p):m?d=new hr(v,p):d=new Be(v,p)}else f?d=new go(v,p[0]):m?d=new hr(v,p[0]):d=new Be(v,p[0]);d.name=c.name,r.add(d)}else if(e.vertices.length>0){const o=new yi({size:1,sizeAttenuation:!1}),l=new ze;l.setAttribute("position",new ve(e.vertices,3)),e.colors.length>0&&e.colors[0]!==void 0&&(l.setAttribute("color",new ve(e.colors,3)),o.vertexColors=!0);const c=new hr(l,o);r.add(c)}return r}}class rm extends pi{constructor(t){super(t)}load(t,e,n,s){const r=this,a=this.path===""?$p.extractUrlBase(t):this.path,o=new hl(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){try{e(r.parse(l,a))}catch(c){s?s(c):console.error(c),r.manager.itemError(t)}},n,s)}setMaterialOptions(t){return this.materialOptions=t,this}parse(t,e){const n=t.split(`
`);let s={};const r=/\s+/,a={};for(let l=0;l<n.length;l++){let c=n[l];if(c=c.trim(),c.length===0||c.charAt(0)==="#")continue;const h=c.indexOf(" ");let u=h>=0?c.substring(0,h):c;u=u.toLowerCase();let f=h>=0?c.substring(h+1):"";if(f=f.trim(),u==="newmtl")s={name:f},a[f]=s;else if(u==="ka"||u==="kd"||u==="ks"||u==="ke"){const m=f.split(r,3);s[u]=[parseFloat(m[0]),parseFloat(m[1]),parseFloat(m[2])]}else s[u]=f}const o=new am(this.resourcePath||e,this.materialOptions);return o.setCrossOrigin(this.crossOrigin),o.setManager(this.manager),o.setMaterials(a),o}}class am{constructor(t="",e={}){this.baseUrl=t,this.options=e,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.crossOrigin="anonymous",this.side=this.options.side!==void 0?this.options.side:nn,this.wrap=this.options.wrap!==void 0?this.options.wrap:Ms}setCrossOrigin(t){return this.crossOrigin=t,this}setManager(t){this.manager=t}setMaterials(t){this.materialsInfo=this.convert(t),this.materials={},this.materialsArray=[],this.nameLookup={}}convert(t){if(!this.options)return t;const e={};for(const n in t){const s=t[n],r={};e[n]=r;for(const a in s){let o=!0,l=s[a];const c=a.toLowerCase();switch(c){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(l=[l[0]/255,l[1]/255,l[2]/255]),this.options&&this.options.ignoreZeroRGBs&&l[0]===0&&l[1]===0&&l[2]===0&&(o=!1);break}o&&(r[c]=l)}}return e}preload(){for(const t in this.materialsInfo)this.create(t)}getIndex(t){return this.nameLookup[t]}getAsArray(){let t=0;for(const e in this.materialsInfo)this.materialsArray[t]=this.create(e),this.nameLookup[e]=t,t++;return this.materialsArray}create(t){return this.materials[t]===void 0&&this.createMaterial_(t),this.materials[t]}createMaterial_(t){const e=this,n=this.materialsInfo[t],s={name:t,side:this.side};function r(o,l){return typeof l!="string"||l===""?"":/^https?:\/\//i.test(l)?l:o+l}function a(o,l){if(s[o])return;const c=e.getTextureParams(l,s),h=e.loadTexture(r(e.baseUrl,c.url));h.repeat.copy(c.scale),h.offset.copy(c.offset),h.wrapS=e.wrap,h.wrapT=e.wrap,(o==="map"||o==="emissiveMap")&&(h.colorSpace=Ne),s[o]=h}for(const o in n){const l=n[o];let c;if(l!=="")switch(o.toLowerCase()){case"kd":s.color=new Ut().fromArray(l).convertSRGBToLinear();break;case"ks":s.specular=new Ut().fromArray(l).convertSRGBToLinear();break;case"ke":s.emissive=new Ut().fromArray(l).convertSRGBToLinear();break;case"map_kd":a("map",l);break;case"map_ks":a("specularMap",l);break;case"map_ke":a("emissiveMap",l);break;case"norm":a("normalMap",l);break;case"map_bump":case"bump":a("bumpMap",l);break;case"map_d":a("alphaMap",l),s.transparent=!0;break;case"ns":s.shininess=parseFloat(l);break;case"d":c=parseFloat(l),c<1&&(s.opacity=c,s.transparent=!0);break;case"tr":c=parseFloat(l),this.options&&this.options.invertTrProperty&&(c=1-c),c>0&&(s.opacity=1-c,s.transparent=!0);break}}return this.materials[t]=new ll(s),this.materials[t]}getTextureParams(t,e){const n={scale:new Tt(1,1),offset:new Tt(0,0)},s=t.split(/\s+/);let r;return r=s.indexOf("-bm"),r>=0&&(e.bumpScale=parseFloat(s[r+1]),s.splice(r,2)),r=s.indexOf("-s"),r>=0&&(n.scale.set(parseFloat(s[r+1]),parseFloat(s[r+2])),s.splice(r,4)),r=s.indexOf("-o"),r>=0&&(n.offset.set(parseFloat(s[r+1]),parseFloat(s[r+2])),s.splice(r,4)),n.url=s.join(" ").trim(),n}loadTexture(t,e,n,s,r){const a=this.manager!==void 0?this.manager:cl;let o=a.getHandler(t);o===null&&(o=new qp(a)),o.setCrossOrigin&&o.setCrossOrigin(this.crossOrigin);const l=o.load(t,n,s,r);return e!==void 0&&(l.mapping=e),l}}const wo={type:"change"},aa={type:"start"},dl={type:"end"},us=new Ps,Ro=new fn,om=Math.cos(70*Rc.DEG2RAD),re=new U,Me=2*Math.PI,Yt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},fr=1e-6;class lm extends Jp{constructor(t,e=null){super(t,e),this.state=Yt.NONE,this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ii.ROTATE,MIDDLE:ii.DOLLY,RIGHT:ii.PAN},this.touches={ONE:ei.ROTATE,TWO:ei.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new Un,this._lastTargetPosition=new U,this._quat=new Un().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Eo,this._sphericalDelta=new Eo,this._scale=1,this._panOffset=new U,this._rotateStart=new Tt,this._rotateEnd=new Tt,this._rotateDelta=new Tt,this._panStart=new Tt,this._panEnd=new Tt,this._panDelta=new Tt,this._dollyStart=new Tt,this._dollyEnd=new Tt,this._dollyDelta=new Tt,this._dollyDirection=new U,this._mouse=new Tt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=hm.bind(this),this._onPointerDown=cm.bind(this),this._onPointerUp=um.bind(this),this._onContextMenu=vm.bind(this),this._onMouseWheel=pm.bind(this),this._onKeyDown=mm.bind(this),this._onTouchStart=_m.bind(this),this._onTouchMove=gm.bind(this),this._onMouseDown=dm.bind(this),this._onMouseMove=fm.bind(this),this._interceptControlDown=xm.bind(this),this._interceptControlUp=Mm.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(wo),this.update(),this.state=Yt.NONE}update(t=null){const e=this.object.position;re.copy(e).sub(this.target),re.applyQuaternion(this._quat),this._spherical.setFromVector3(re),this.autoRotate&&this.state===Yt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Me:n>Math.PI&&(n-=Me),s<-Math.PI?s+=Me:s>Math.PI&&(s-=Me),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(re.setFromSpherical(this._spherical),re.applyQuaternion(this._quatInverse),e.copy(this.target).add(re),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=re.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new U(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=re.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(us.origin.copy(this.object.position),us.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(us.direction))<om?this.object.lookAt(this.target):(Ro.setFromNormalAndCoplanarPoint(this.object.up,this.target),us.intersectPlane(Ro,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>fr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>fr||this._lastTargetPosition.distanceToSquared(this.target)>fr?(this.dispatchEvent(wo),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Me/60*this.autoRotateSpeed*t:Me/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){re.setFromMatrixColumn(e,0),re.multiplyScalar(-t),this._panOffset.add(re)}_panUp(t,e){this.screenSpacePanning===!0?re.setFromMatrixColumn(e,1):(re.setFromMatrixColumn(e,0),re.crossVectors(this.object.up,re)),re.multiplyScalar(t),this._panOffset.add(re)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;re.copy(s).sub(this.target);let r=re.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Me*this._rotateDelta.x/e.clientHeight),this._rotateUp(Me*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Me*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Me*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Me*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Me*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Me*this._rotateDelta.x/e.clientHeight),this._rotateUp(Me*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Tt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function cm(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function hm(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function um(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(dl),this.state=Yt.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function dm(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ii.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Yt.DOLLY;break;case ii.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Yt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Yt.ROTATE}break;case ii.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Yt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Yt.PAN}break;default:this.state=Yt.NONE}this.state!==Yt.NONE&&this.dispatchEvent(aa)}function fm(i){switch(this.state){case Yt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Yt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Yt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function pm(i){this.enabled===!1||this.enableZoom===!1||this.state!==Yt.NONE||(i.preventDefault(),this.dispatchEvent(aa),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(dl))}function mm(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function _m(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ei.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Yt.TOUCH_ROTATE;break;case ei.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Yt.TOUCH_PAN;break;default:this.state=Yt.NONE}break;case 2:switch(this.touches.TWO){case ei.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Yt.TOUCH_DOLLY_PAN;break;case ei.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Yt.TOUCH_DOLLY_ROTATE;break;default:this.state=Yt.NONE}break;default:this.state=Yt.NONE}this.state!==Yt.NONE&&this.dispatchEvent(aa)}function gm(i){switch(this._trackPointer(i),this.state){case Yt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Yt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Yt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Yt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Yt.NONE}}function vm(i){this.enabled!==!1&&i.preventDefault()}function xm(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Mm(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Pi=document.querySelector("#viewer-container"),Nn=new Vp;Nn.background=new Ut(16774625);const oa=new Ce(75,Pi.offsetWidth/Pi.offsetHeight,.1,1e3),Sm=new Zp(4210752,25),Em=new Kp(4210752,80);Nn.add(Em);Nn.add(Sm);const ym=document.querySelector(".components-list"),Ni=new Hp;Ni.setSize(Pi.offsetWidth,Pi.offsetHeight);Ni.setAnimationLoop(Am);Pi.appendChild(Ni.domElement);const Tm=new lm(oa,Ni.domElement),Co=new sm,bm=new rm;bm.load("/MESX/MTLfiles/structurev1.mtl",i=>{i.preload(),Co.setMaterials(i),Co.load("/MESX/OBJfiles/structurev1.obj",t=>{Nn.add(t);const e=wm();Rm(e),ym.addEventListener("click",()=>{Pm()}),console.log(e)},function(t){console.log(t.loaded/t.total*100+"% loaded")},function(t){console.error("An error occurred while loading the OBJ file:",t)})});oa.position.z=25;Tm.update();function Am(){Ni.render(Nn,oa)}const wm=()=>Nn.children.find(t=>t.type==="Group").children,Rm=i=>{i.forEach(t=>{const e=t.name;Cm(e)})},Cm=i=>{const t=document.querySelector(".components-list"),e=i,n=document.createElement("li"),s=document.createElement("label"),r=document.createElement("input");r.type="checkbox",s.name=e,r.name=e,s.innerHTML=e,n.appendChild(r),n.appendChild(s),t.appendChild(n),r.checked=!0,n.classList.add("components"),r.classList.add("component-input")},Pm=i=>{document.querySelectorAll(".component-input").forEach(e=>{let n=Nn.getObjectByName(e.name);e.checked?(n.visible=!0,console.log(n)):(n.visible=!1,console.log(n))})};let pr=document.querySelector(".structures-list");document.querySelector(".parts-list");let fl=document.querySelector(".structure-title");document.querySelector(".parts-title");console.log(fl);fl.addEventListener("click",()=>{pr.classList.contains("hidden")?pr.classList.remove("hidden"):pr.classList.add("hidden")});
