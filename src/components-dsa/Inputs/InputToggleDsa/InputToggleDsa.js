import "./inputToggleDsa.css"
import preview from "/assets/components-preview/ToggleDsa.png"

const InputToggleDsa = document.createElement("div")

const codeSnippet = `- InputToggleDsa:
    Control: GroupContainer
    Variant: verticalAutoLayoutContainer
    Properties:
      DropShadow: =DropShadow.None
      Height: =labelToggle.Height + Toggle.Height
      LayoutDirection: =LayoutDirection.Vertical
      LayoutMode: =LayoutMode.Auto
      Width: =80
      X: =1081
      Y: =322
    Children:
    - labelToggle:
        Control: Label
        Properties:
          Text: ="Label"
          AutoHeight: =true
          Color: |-
            =ColorValue(
            dsaTokens.colorContrastLight
            )
          Height: =31
          PaddingBottom: =4
          PaddingLeft: =8
          PaddingRight: =0
          PaddingTop: =4
          Size: '=dsaTokens.fontLabel '
          Width: =Parent.Width
          Y: =124
    - Toggle:
        Control: Classic/Toggle
        Properties:
          BorderStyle: =BorderStyle.None
          Color: =ColorValue(dsaTokens.colorContrastLight)
          DisabledBorderColor: |-
            =ColorValue(
            dsaTokens.colorNeutral300
            )
          DisabledColor: =ColorValue(dsaTokens.colorNeutral300)
          FalseFill: =ColorValue(dsaTokens.colorFeedbackInfoAccent)
          FalseHoverFill: |-
            =ColorValue(
                dsaTokens.colorAccentPrimary)
          HandleFill: |-
            =ColorValue(
                dsaTokens.colorAccentSecondaryHover)
          Height: |+
            =28

          HoverBorderColor: =ColorValue(dsaTokens.colorNeutral400)
          PressedBorderColor: |-
            =ColorValue(
                dsaTokens.colorAccentPrimaryHover)
          ShowLabel: =false
          Size: =dsaTokens.fontLabel
          TrueFill: =ColorValue(dsaTokens.colorAccentPrimaryHover)
          Width: =Parent.Width
          X: =1105
          Y: =359
`

InputToggleDsa.setAttribute("data-code", codeSnippet)

InputToggleDsa.innerHTML =
`
<img src=${preview} alt="Imagem combo box para power apps" />
`

export default InputToggleDsa