import "./BtnTerDsa.css"

const BtnTerDsa = document.createElement("div")

const codeSnippet = `- BtnSecDsa:
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
`
BtnTerDsa.setAttribute("data-code", codeSnippet)

BtnTerDsa.innerHTML = `<button class="BtnTerDsa">teste</button>`

export default BtnTerDsa