import "./BtnSecDsa.css"

const BtnSecDsa = document.createElement("div")

const codeSnippet = `- BtnSecDsa:
    Control: Classic/Button@2.2.0
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
        dsaTokens.colorAccentPrimary
        )
      HoverColor: |-
        =ColorValue(
        dsaTokens.colorContrastLight
        )
      HoverFill: =ColorValue(dsaTokens.colorAccentSecondaryHover)
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
      Size: =dsaTokens.fontText
      X: =243
      Y: =237
`

BtnSecDsa.setAttribute("data-code", codeSnippet)

BtnSecDsa.innerHTML = `<button class="BtnSecDsa">teste</button>`

export default BtnSecDsa