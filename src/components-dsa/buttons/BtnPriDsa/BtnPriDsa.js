import "./BtnPriDsa.css"

const BtnPriDsa = document.createElement("div")

const codeSnippet = `- BtnPriDsa:
    Control: Classic/Button@2.2.0
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
      Font: =Font.'Open Sans'
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
      X: =42
      Y: =237

`


BtnPriDsa.setAttribute("data-code", codeSnippet)

BtnPriDsa.innerHTML = `<button class="BtnPriDsa">teste</button>`

export default BtnPriDsa
