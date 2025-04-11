(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.ep=!0;const l=r(o);fetch(o.href,l)}})();/**
 * @license lucide v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=(e,t,r=[])=>{const a=document.createElementNS("http://www.w3.org/2000/svg",e);return Object.keys(t).forEach(o=>{a.setAttribute(o,String(t[o]))}),r.length&&r.forEach(o=>{const l=h(...o);a.appendChild(l)}),a};var H=([e,t,r])=>h(e,t,r);/**
 * @license lucide v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=e=>Array.from(e.attributes).reduce((t,r)=>(t[r.name]=r.value,t),{}),R=e=>typeof e=="string"?e:!e||!e.class?"":e.class&&typeof e.class=="string"?e.class.split(" "):e.class&&Array.isArray(e.class)?e.class:"",A=e=>e.flatMap(R).map(r=>r.trim()).filter(Boolean).filter((r,a,o)=>o.indexOf(r)===a).join(" "),S=e=>e.replace(/(\w)(\w*)(_|-|\s*)/g,(t,r,a)=>r.toUpperCase()+a.toLowerCase()),C=(e,{nameAttr:t,icons:r,attrs:a})=>{var u;const o=e.getAttribute(t);if(o==null)return;const l=S(o),s=r[l];if(!s)return console.warn(`${e.outerHTML} icon name was not found in the provided icons object.`);const d=b(e),[V,v,D]=s,i={...v,"data-lucide":o,...a,...d},c=A(["lucide",`lucide-${o}`,d,a]);c&&Object.assign(i,{class:c});const y=H([V,i,D]);return(u=e.parentNode)==null?void 0:u.replaceChild(y,e)};/**
 * @license lucide v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=["svg",n,[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"}]]];/**
 * @license lucide v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L=["svg",n,[["path",{d:"m6 9 6 6 6-6"}]]];/**
 * @license lucide v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=["svg",n,[["path",{d:"m18 16 4-4-4-4"}],["path",{d:"m6 8-4 4 4 4"}],["path",{d:"m14.5 4-5 16"}]]];/**
 * @license lucide v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=["svg",n,[["path",{d:"m9 10 2 2 4-4"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["path",{d:"M12 17v4"}],["path",{d:"M8 21h8"}]]];/**
 * @license lucide v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=["svg",n,[["path",{d:"M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"}]]];/**
 * @license lucide v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=["svg",n,[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{cx:"9",cy:"7",r:"4"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75"}]]];/**
 * @license lucide v0.446.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=({icons:e={},nameAttr:t="data-lucide",attrs:r={}}={})=>{if(!Object.values(e).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const a=document.querySelectorAll(`[${t}]`);if(Array.from(a).forEach(o=>C(o,{nameAttr:t,icons:e,attrs:r})),t==="data-lucide"){const o=document.querySelectorAll("[icon-name]");o.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(o).forEach(l=>C(l,{nameAttr:"icon-name",icons:e,attrs:r})))}};E({icons:{Users:N,ChartSpline:w,MonitorCheck:I,Puzzle:M,ChevronDown:L,CodeXml:F}});const f=document.createElement("div"),W=`- BtnPriDsa:
    Control: Classic/Button
    Properties:
      BorderColor: |-
        =ColorValue(
        dsaTokens.colorAccentPrimary
        )
      Color: |-
        =ColorValue(
        dsaTokens.colorContrastDark
        )
      DisabledBorderColor: |-
        =ColorValue(
        dsaTokens.colorNeutral300
        )
      DisabledColor: |-
        =ColorValue(
        dsaTokens.colorNeutral300
        )
      DisabledFill: |-
        =ColorValue(
        dsaTokens.colorNeutral400
        )
      Fill: |-
        =ColorValue(
        dsaTokens.colorAccentPrimary
        )
      FocusedBorderColor: |-
        =ColorValue(
        dsaTokens.colorNeutral200
        )
      FocusedBorderThickness: '=2 '
      HoverBorderColor: |-
        =ColorValue(
        dsaTokens.colorAccentPrimary
        )
      HoverColor: |-
        =ColorValue(
        dsaTokens.colorContrastDark
        )
      HoverFill: =ColorValue(dsaTokens.colorAccentPrimaryHover)
      PaddingBottom: =8
      PaddingLeft: =16
      PaddingRight: =16
      PaddingTop: =8
      PressedBorderColor: |-
        =ColorValue(
        dsaTokens.colorAccentSecondaryHover
        )
      PressedColor: |-
        =ColorValue(
        dsaTokens.colorContrastDark
        )
      PressedFill: |-
        =ColorValue(
        dsaTokens.colorAccentPrimaryHover
        )
      RadiusBottomLeft: =200
      RadiusBottomRight: =200
      RadiusTopLeft: =200
      RadiusTopRight: =200
      Size: =dsaTokens.fontText
      X: =102
      Y: =150
`;f.setAttribute("data-code",W);f.innerHTML='<button class="BtnPriDsa">teste</button>';const p=document.createElement("div"),x=`
- BtnIcnPriDsa:
    Control: GroupContainer
    Variant: manualLayoutContainer
    Properties:
      DropShadow: =DropShadow.None
      Height: =40
      RadiusBottomLeft: =200
      RadiusBottomRight: =200
      RadiusTopLeft: =200
      RadiusTopRight: =200
      Width: =40
      X: =162
      Y: =298
    Children:
    - BtnIcnPri:
        Control: Classic/Button
        Properties:
          Text: =
          Tooltip: =
          BorderColor: |-
            =ColorValue(
            dsaTokens.colorAccentPrimary)
          BorderThickness: =0
          Color: |-
            =ColorValue(
            dsaTokens.colorContrastDark
            )
          DisabledColor: |-
            =ColorValue(
            dsaTokens.colorNeutral300
            )
          DisabledFill: |-
            =ColorValue(
            dsaTokens.colorNeutral400
            )
          Fill: |-
            =ColorValue(
            dsaTokens.colorAccentPrimary
            )
          Height: =Parent.Height
          HoverBorderColor: |-
            =ColorValue(
            dsaTokens.colorAccentPrimaryHover
            )
          HoverColor: |-
            =ColorValue(
            dsaTokens.colorContrastDark
            )
          HoverFill: |-
            =ColorValue(
            dsaTokens.colorAccentPrimaryHover
            )
          PaddingBottom: =8
          PaddingLeft: =8
          PaddingRight: =8
          PaddingTop: =8
          PressedBorderColor: |-
            =ColorValue(
            dsaTokens.colorAccentSecondaryHover
            )
          PressedColor: |-
            =ColorValue(
            dsaTokens.colorContrastDark
            )
          PressedFill: |-
            =ColorValue(
            dsaTokens.colorAccentPrimaryHover
            )
          RadiusBottomLeft: =200
          RadiusBottomRight: =200
          RadiusTopLeft: =200
          RadiusTopRight: =200
          Size: =16
          Width: =Parent.Width
          Y: '=0   '
    - iconPriBtn:
        Control: Classic/Icon
        Variant: Add
        Properties:
          Color: |-
            =If(
                BtnIcnPri.DisplayMode = DisplayMode.Disabled,
                ColorValue(dsaTokens.colorNeutral300),
                ColorValue(dsaTokens.colorContrastDark)
            )
          FocusedBorderThickness: =0
          Height: =18
          HoverColor: |-
            =ColorValue(
                dsaTokens.colorContrastDark
            )
          Icon: =Icon.AddDocument
          Width: =18
          X: =Parent.Width/2 - Self.Width/2
          Y: =BtnIcnPri.Height /2 - Self.Height /2
`;p.setAttribute("data-code",x);const $='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-plus"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M9 15h6"/><path d="M12 18v-6"/></svg>';p.innerHTML=`<button class="BtnIcnPriDsa">${$}</button>`;const T=document.createElement("div"),Y=`
- BtnIcnSecDsa:
    Control: GroupContainer
    Variant: manualLayoutContainer
    Properties:
      DropShadow: =DropShadow.None
      Height: =40
      RadiusBottomLeft: =200
      RadiusBottomRight: =200
      RadiusTopLeft: =200
      RadiusTopRight: =200
      Width: =40
      X: =370
      Y: =298
    Children:
    - BtnIcnSec:
        Control: Classic/Button
        Properties:
          Text: =
          BorderColor: |-
            =ColorValue(
              dsaTokens.colorAccentPrimary)
          BorderThickness: =0
          Color: |-
            =ColorValue(
            dsaTokens.colorContrastLight
            )
          DisabledColor: |-
            =ColorValue(
            dsaTokens.colorNeutral200
            )
          DisabledFill: |-
            =ColorValue(
            dsaTokens.colorNeutral400
            )
          Fill: |-
            =ColorValue(
            dsaTokens.colorAccentSecondary
            )
          Height: =Parent.Height
          HoverBorderColor: |-
            =ColorValue(
            dsaTokens.colorAccentSecondaryHover
            )
          HoverColor: |-
            =ColorValue(
            dsaTokens.colorContrastDark
            )
          HoverFill: |-
            =ColorValue(
            dsaTokens.colorAccentSecondaryHover
            )
          PaddingBottom: =8
          PaddingLeft: =8
          PaddingRight: =8
          PaddingTop: =8
          PressedBorderColor: |-
            =ColorValue(
            dsaTokens.colorAccentSecondaryHover
            )
          PressedColor: |-
            =ColorValue(
            dsaTokens.colorContrastDark
            )
          PressedFill: |-
            =ColorValue(
            dsaTokens.colorAccentSecondary
            )
          RadiusBottomLeft: =200
          RadiusBottomRight: =200
          RadiusTopLeft: =200
          RadiusTopRight: =200
          Size: =16
          Width: =Parent.Width
          Y: '=0   '
    - IconSecBtn:
        Control: Classic/Icon
        Variant: Add
        Properties:
          Color: |-
            =If(
                BtnIcnSec.DisplayMode = DisplayMode.Disabled,
                ColorValue(dsaTokens.colorNeutral300),
                ColorValue(dsaTokens.colorContrastLight)
            )
          FocusedBorderThickness: =0
          Height: =18
          HoverColor: |-
            =ColorValue(
                dsaTokens.colorNeutral100
            )
          Icon: =Icon.AddDocument
          PressedColor: =ColorFade(Self.Color, -40%)
          Width: =18
          X: =Parent.Width/2 - Self.Width/2
          Y: =BtnIcnSec.Height /2 - Self.Height /2
`;T.setAttribute("data-code",Y);const X='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-plus"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M9 15h6"/><path d="M12 18v-6"/></svg>';T.innerHTML=`<button class="BtnIcnSecDsa">${X}</button>`;const g=document.createElement("div"),z=`- BtnIcnTerDsa:
    Control: GroupContainer
    Variant: manualLayoutContainer
    Properties:
      DropShadow: =DropShadow.None
      Height: =40
      RadiusBottomLeft: =200
      RadiusBottomRight: =200
      RadiusTopLeft: =200
      RadiusTopRight: =200
      Width: =40
      X: =579
      Y: =298
    Children:
    - BtnTerSec:
        Control: Classic/Button
        Properties:
          Text: =
          BorderColor: |-
            =ColorValue(
            dsaTokens.colorAccentPrimary)
          BorderThickness: =0
          Color: |-
            =ColorValue(
            dsaTokens.colorAccentPrimary
            )
          DisabledColor: |-
            =ColorValue(
            dsaTokens.colorNeutral200
            )
          DisabledFill: |-
            =ColorValue(
               "#ffffff00"
            )
          Fill: |-
            =ColorValue(
               "#ffffff00"
            )
          Height: =Parent.Height
          HoverBorderColor: |-
            =ColorValue(
            dsaTokens.colorAccentSecondaryHover
            )
          HoverColor: |-
            =ColorValue(
            dsaTokens.colorContrastDark
            )
          HoverFill: |-
            =ColorValue(
               "#ffffff00"
            )
          PaddingBottom: =8
          PaddingLeft: =8
          PaddingRight: =8
          PaddingTop: =8
          PressedBorderColor: |-
            =ColorValue(
            dsaTokens.colorAccentSecondaryHover
            )
          PressedColor: |-
            =ColorValue(
            dsaTokens.colorContrastDark
            )
          PressedFill: |-
            =ColorValue(
               "#ffffff00"
            )
          RadiusBottomLeft: =200
          RadiusBottomRight: =200
          RadiusTopLeft: =200
          RadiusTopRight: =200
          Size: =16
          Width: =Parent.Width
          Y: '=0   '
    - IconTerBtn:
        Control: Classic/Icon
        Variant: Add
        Properties:
          Color: |-
            =If(
                BtnTerSec.DisplayMode = DisplayMode.Disabled,
                ColorValue(dsaTokens.colorNeutral300),
                ColorValue(dsaTokens.colorAccentPrimary)
            )
          FocusedBorderThickness: =0
          Height: =18
          HoverColor: |-
            =ColorValue(
                dsaTokens.colorAccentPrimary
            )
          HoverFill: |-
            =   ColorValue(
                "#ffffff00"
               )
          Icon: =Icon.AddDocument
          PressedColor: |-
            =ColorValue(
            dsaTokens.colorAccentPrimaryHover
            )
          Width: =18
          X: =Parent.Width/2 - Self.Width/2
          Y: =BtnTerSec.Height /2 - Self.Height /2
`;g.setAttribute("data-code",z);const j='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-plus"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M9 15h6"/><path d="M12 18v-6"/></svg>';g.innerHTML=`<button class="BtnIcnTerDsa">${j}</button>`;const k=document.createElement("div"),O=`- BtnTerDsa:
    Control: Classic/Button@2.2.0
    Properties:
      BorderColor: |-
        =ColorValue(
            "#ffffff00"
        )
      BorderStyle: =BorderStyle.None
      Color: |-
        =ColorValue(
        dsaTokens.colorAccentPrimary
        )
      DisabledBorderColor: |-
        =ColorValue(
            "#ffffff00"
        )
      DisabledColor: |-
        =ColorValue(
         dsaTokens.colorNeutral300
        )
      DisabledFill: |-
        =ColorValue(
            "#ffffff00"
        )
      Fill: |-
        =ColorValue(
            "#ffffff00"
        )
      FocusedBorderColor: |-
        =ColorValue(
        dsaTokens.colorNeutral200
        )
      FocusedBorderThickness: '=2 '
      Font: =Font.'Open Sans'
      HoverBorderColor: |-
        =ColorValue(
            "#ffffff00"
        )
      HoverColor: |-
        =ColorValue(
         dsaTokens.colorAccentPrimaryHover
        )
      HoverFill: |-
        =ColorValue(
            "#ffffff00"
        )
      PaddingBottom: =8
      PaddingLeft: =16
      PaddingRight: =16
      PaddingTop: =8
      PressedBorderColor: |-
        =ColorValue(
            "#ffffff00"
        )
      PressedColor: |-
        =ColorValue(
        dsaTokens.colorAccentPrimary
        )
      PressedFill: |-
        =ColorValue(
            "#ffffff00"
        )
      RadiusBottomLeft: =200
      RadiusBottomRight: =200
      RadiusTopLeft: =200
      RadiusTopRight: =200
      Size: =dsaTokens.fontText
      Underline: =true
      X: =458
      Y: =237
`;k.setAttribute("data-code",O);k.innerHTML='<button class="BtnTerDsa">Label</button>';const m=document.createElement("div"),G=`- BtnSecDsa:
    Control: Classic/Button
    Properties:
      BorderColor: |-
        =ColorValue(
        dsaTokens.colorAccentPrimary
        )
      Color: |-
        =ColorValue(
        dsaTokens.colorContrastLight
        )
      DisabledBorderColor: |-
        =ColorValue(
        dsaTokens.colorNeutral300
        )
      DisabledColor: |-
        =ColorValue(
        dsaTokens.colorNeutral300
        )
      DisabledFill: |-
        =ColorValue(
        dsaTokens.colorAccentSecondary
        )
      Fill: |-
        =ColorValue(
        dsaTokens.colorAccentSecondary
        )
      FocusedBorderColor: |-
        =ColorValue(
        dsaTokens.colorNeutral200
        )
      FocusedBorderThickness: '=2 '
      HoverBorderColor: |-
        =ColorValue(
        dsaTokens.colorAccentPrimary
        )
      HoverColor: |-
        =ColorValue(
        dsaTokens.colorContrastLight
        )
      HoverFill: '=ColorValue(dsaTokens.colorAccentSecondaryHover)   '
      PaddingBottom: =8
      PaddingLeft: =16
      PaddingRight: =16
      PaddingTop: =8
      PressedBorderColor: |-
        =ColorValue(
        dsaTokens.colorAccentSecondaryHover
        )
      PressedColor: |-
        =ColorValue(
        dsaTokens.colorContrastLight
        )
      PressedFill: |-
        =ColorValue(
        dsaTokens.colorAccentSecondary
        )
      RadiusBottomLeft: =200
      RadiusBottomRight: =200
      RadiusTopLeft: =200
      RadiusTopRight: =200
      Size: =16
      X: =315
      Y: =150
`;m.setAttribute("data-code",G);m.innerHTML='<button class="BtnSecDsa">teste</button>';const P=document.createElement("div"),Z=`- BtnIcnLfDsa:
    Control: GroupContainer
    Variant: manualLayoutContainer
    Properties:
      DropShadow: =DropShadow.None
      Height: =40
      RadiusBottomLeft: =200
      RadiusBottomRight: =200
      RadiusTopLeft: =200
      RadiusTopRight: =200
      Width: =160
      X: =727
      Y: =150
    Children:
    - btniconLt:
        Control: Classic/Button
        Properties:
          BorderColor: |-
            =ColorValue(
            dsaTokens.colorAccentPrimary
            )
          Color: |-
            =ColorValue(
            dsaTokens.colorContrastDark
            )
          Fill: |-
            =ColorValue(
            dsaTokens.colorAccentPrimary
            )
          Height: =Parent.Height
          HoverBorderColor: |-
            =ColorValue(
            dsaTokens.colorAccentPrimary
            )
          HoverColor: =ColorValue(dsaTokens.colorContrastDark)
          HoverFill: |-
            =ColorValue(
            dsaTokens.colorAccentPrimaryHover
            )
          PaddingBottom: =8
          PaddingLeft: '=8   '
          PaddingRight: =8
          PaddingTop: =8
          PressedBorderColor: |-
            =ColorValue(
            dsaTokens.colorAccentSecondaryHover
            )
          PressedColor: =ColorValue(dsaTokens.colorContrastDark)
          PressedFill: |-
            =ColorValue(
            dsaTokens.colorAccentPrimaryHover
            )
          RadiusBottomLeft: =200
          RadiusBottomRight: =200
          RadiusTopLeft: =200
          RadiusTopRight: =200
          Size: =16
          Width: =Parent.Width
          Y: '=0   '
    - btnIcnLt:
        Control: Classic/Icon
        Variant: Add
        Properties:
          Color: |-
            =If(
                btniconLt.DisplayMode = DisplayMode.Disabled,
                ColorValue(dsaTokens.colorNeutral300),
                ColorValue(dsaTokens.colorContrastDark)
            )
          Height: =btniconLt.Size
          Icon: =Icon.ChevronDown
          Width: =btniconLt.Size
          X: = Self.Width + 8
          Y: =btniconLt.Height /2 - Self.Height /2
`;P.setAttribute("data-code",Z);const q='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>';P.innerHTML=`

<button class="BtnIcnLtDsa">${q}Teste</button>
`;const B=document.createElement("div"),U=`- BtnDangerDsa:
    Control: Classic/Button
    Properties:
      BorderColor: =ColorValue(dsaTokens.colorFeedbackError)
      Color: |-
        =ColorValue(
        dsaTokens.colorContrastDark
        )
      DisabledBorderColor: |-
        =ColorValue(
        dsaTokens.colorNeutral300
        )
      DisabledColor: |-
        =ColorValue(
        dsaTokens.colorNeutral300
        )
      DisabledFill: |-
        =ColorValue(
        dsaTokens.colorAccentSecondary
        )
      Fill: |-
        =ColorValue(
        dsaTokens.colorFeedbackErrorAccent
        )
      FocusedBorderColor: |-
        =ColorValue(
        dsaTokens.colorNeutral200
        )
      FocusedBorderThickness: '=2 '
      HoverBorderColor: |-
        =ColorValue(
        dsaTokens.colorFeedbackErrorAccent
        )
      HoverColor: |-
        =ColorValue(
        dsaTokens.colorFeedbackErrorAccent
        )
      HoverFill: =ColorValue(dsaTokens.colorFeedbackError)
      PaddingBottom: =8
      PaddingLeft: =16
      PaddingRight: =16
      PaddingTop: =8
      PressedBorderColor: |-
        =ColorValue(
        dsaTokens.colorFeedbackError
        )
      PressedColor: =ColorValue(dsaTokens.colorFeedbackErrorAccent)
      PressedFill: =ColorValue(dsaTokens.colorFeedbackError)
      RadiusBottomLeft: =200
      RadiusBottomRight: =200
      RadiusTopLeft: =200
      RadiusTopRight: =200
      Size: =dsaTokens.fontText
      X: =1089
      Y: =237
`;B.setAttribute("data-code",U);B.innerHTML='<button class="BtnDangerDsa">teste</button>';export{f as B,m as a,k as b,B as c,P as d,p as e,T as f,g};
