import "./inputToggleDsa.css"
import preview from "/assets/components-preview/ToggleDsa.png"

const InputToggleDsa = document.createElement("div")

const codeSnippet = `- InputToggleDsa:
    Control: GroupContainer@1.3.0
    Variant: AutoLayout
    Properties:
      DropShadow: =DropShadow.None
      Height: =labelToggle.Height + Toggle.Height
      LayoutDirection: =LayoutDirection.Vertical
      Width: |+
        =100


      X: =1119
      Y: =144
    Children:
      - labelToggle:
          Control: Label@2.5.1
          Properties:
            AutoHeight: =true
            BorderColor: =RGBA(0, 18, 107, 1)
            Color: |-
              =ColorValue(
              dsaTokens.colorContrastLight
              )
            Font: =Font.'Open Sans'
            Height: =31
            PaddingBottom: =4
            PaddingLeft: =8
            PaddingRight: =0
            PaddingTop: =4
            Size: '=dsaTokens.fontLabel '
            Text: ="Label"
            Width: =Parent.Width
            Y: =124
      - Toggle:
          Control: Classic/Toggle@2.1.0
          Properties:
            BorderColor: =RGBA(0, 18, 107, 1)
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
            Font: =Font.'Open Sans'
            HandleFill: |-
              =ColorValue(
                  dsaTokens.colorAccentSecondaryHover)
            Height: |+
              =28

            HoverBorderColor: =ColorValue(dsaTokens.colorNeutral400)
            PressedBorderColor: |-
              =ColorValue(
                  dsaTokens.colorAccentPrimaryHover)
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