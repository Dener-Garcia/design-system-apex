import "./inputRadioHzDsa.css"
import preview from "/assets/components-preview/RadioDsa.png"

const InputRadioHzDsa = document.createElement("div")

const codeSnippet = `- InputRadioHzDsa:
    Control: GroupContainer@1.3.0
    Variant: AutoLayout
    Properties:
      DropShadow: =DropShadow.None
      Height: |
        =80
      LayoutDirection: =LayoutDirection.Vertical
      RadiusBottomLeft: =8
      RadiusBottomRight: =8
      RadiusTopLeft: =8
      RadiusTopRight: =8
      Width: =460
      X: =739
      Y: =332
    Children:
      - labelRadio:
          Control: Label@2.5.1
          Properties:
            AutoHeight: =true
            BorderColor: =RGBA(0, 18, 107, 1)
            Color: |-
              =ColorValue(
              dsaTokens.colorContrastLight
              )
            Font: =Font.'Open Sans'
            Height: =0
            PaddingBottom: =4
            PaddingLeft: =8
            PaddingRight: =0
            PaddingTop: =4
            Size: =dsaTokens.fontLabel
            Text: ="Label"
            Width: =Parent.Width
      - radioContainer:
          Control: GroupContainer@1.3.0
          Variant: AutoLayout
          Properties:
            AlignInContainer: =AlignInContainer.SetByContainer
            DropShadow: =DropShadow.None
            Height: =Parent.Height - labelRadio.Height
            LayoutDirection: =LayoutDirection.Horizontal
            LayoutGap: =16
            LayoutMinHeight: =0
            LayoutMinWidth: =0
            Width: =Parent.Width
          Children:
            - radio:
                Control: Classic/Radio@2.3.0
                Properties:
                  AlignInContainer: =AlignInContainer.Start
                  BorderColor: =ColorValue("#ffffff00")
                  BorderStyle: =BorderStyle.None
                  Color: |-
                    =ColorValue(
                    dsaTokens.colorContrastLight
                    )
                  Default: ="Option 1"
                  FillPortions: =1
                  Font: =Font.'Open Sans'
                  Height: =Parent.Height
                  HoverColor: |-
                    =ColorValue(
                     dsaTokens.colorAccentPrimaryHover
                    )
                  Items: |
                    =["Option 1", "Option 2", "Option 3"]
                  Items.Value: =Value
                  Layout: =Layout.Horizontal
                  LayoutMinWidth: =0
                  PaddingBottom: =0
                  PaddingTop: '=0   '
                  PressedColor: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimaryHover
                    )
                  RadioBackgroundFill: |-
                    =ColorValue(
                    dsaTokens.colorAccentSecondary
                    )
                  RadioBorderColor: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimary
                    )
                  RadioSelectionFill: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimaryHover
                    )
                  Size: =dsaTokens.fontLabel
                  Width: =Parent.Width
                  X: =136
                  Y: =364

`

InputRadioHzDsa.setAttribute("data-code", codeSnippet)

InputRadioHzDsa.innerHTML =
`
<img src=${preview} alt="Imagem combo box para power apps" />
`

export default InputRadioHzDsa