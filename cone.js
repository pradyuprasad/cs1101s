import {show, rcross, overlay_frac, circle, scale} from "rune";

function g(n, rune) {
   return n === 1 ? rune 
   : overlay_frac(1- 1/n, g(n-1, scale(1- 1/n,rune)), rune);
}


show(g(4, circle));
