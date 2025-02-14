import "./BtnDangerDsa.css"


const BtnDangerDsa = document.createElement("div")

const codeSnippet = `- BtnDangerDsa:
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
`

BtnDangerDsa.setAttribute('data-code', codeSnippet)

BtnDangerDsa.innerHTML = `<button class="BtnDangerDsa">teste</button>`

export default BtnDangerDsa