import "./BtnIcnSecDsa.css"
const BtnIcnSecDsa = document.createElement("div")

const codeSnippet = `- BtnIcnSecDsa:
    Control: GroupContainer@1.3.0
    Variant: ManualLayout
    Properties:
      DropShadow: =DropShadow.None
      Height: =40
      RadiusBottomLeft: =200
      RadiusBottomRight: =200
      RadiusTopLeft: =200
      RadiusTopRight: =200
      Width: =40
      X: =312
      Y: =422
    Children:
      - BtnIcnSec:
          Control: Classic/Button@2.2.0
          Properties:
            BorderColor: |-
              =ColorValue(
                dsaTokens.colorAccentPrimary)
            BorderThickness: =0
            Color: |-
              =ColorValue(
              dsaTokens.colorContrastLight
              )
            DisabledBorderColor: =RGBA(166, 166, 166, 1)
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
            Font: =Font.'Open Sans'
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
            Text: =
            Width: =Parent.Width
            Y: '=0   '
      - IconSecBtn:
          Control: Classic/Icon@2.5.0
          Properties:
            BorderColor: =RGBA(0, 18, 107, 1)
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

`

BtnIcnSecDsa.setAttribute("data-code", codeSnippet)

const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-plus"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M9 15h6"/><path d="M12 18v-6"/></svg>`

BtnIcnSecDsa.innerHTML = `<button class="BtnIcnSecDsa">${icon}</button>`

export default BtnIcnSecDsa