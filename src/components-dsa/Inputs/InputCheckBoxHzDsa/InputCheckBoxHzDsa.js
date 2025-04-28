import "./inputCheckBoxHzDsa.css"
import preview from "/assets/components-preview/CheckboxDsa.png"

const InputCheckBoxHzDsa = document.createElement("div")

const codeSnippet = `- InputCheckBoxHzDsa:
    Control: GroupContainer@1.3.0
    Variant: AutoLayout
    Properties:
      DropShadow: =DropShadow.None
      Height: =labelCheckBox.Height + 40
      LayoutDirection: =LayoutDirection.Vertical
      RadiusBottomLeft: =8
      RadiusBottomRight: =8
      RadiusTopLeft: =8
      RadiusTopRight: =8
      Width: =430
      X: =68
      Y: =332
    Children:
      - labelCheckBox:
          Control: Label@2.5.1
          Properties:
            AutoHeight: =true
            BorderColor: =RGBA(0, 18, 107, 1)
            Color: |-
              =ColorValue(
                 dsaTokens.colorContrastLight
              )
            DisabledColor: |-
              =ColorValue(
                  dsaTokens.colorNeutral400
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
      - checkboxContainer:
          Control: GroupContainer@1.3.0
          Variant: AutoLayout
          Properties:
            AlignInContainer: =AlignInContainer.SetByContainer
            DropShadow: =DropShadow.None
            Height: =Parent.Height - labelCheckBox.Height
            LayoutDirection: =LayoutDirection.Horizontal
            LayoutGap: =16
            LayoutMinHeight: =0
            LayoutMinWidth: =0
            Width: =Parent.Width
          Children:
            - Checkbox1:
                Control: Classic/CheckBox@2.1.0
                Properties:
                  BorderColor: |-
                    =ColorValue(
                     "#ffffff00"
                    )
                  BorderStyle: =BorderStyle.None
                  CheckboxBackgroundFill: |-
                    =ColorValue(
                    dsaTokens.colorAccentSecondary
                    )
                  CheckboxBorderColor: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimaryHover
                    )
                  CheckmarkFill: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimary
                    )
                  Color: |-
                    =ColorValue(
                    dsaTokens.colorContrastLight
                    )
                  DisabledBorderColor: |-
                    =ColorValue(
                    dsaTokens.colorNeutral400
                    )
                  DisabledColor: |-
                    =ColorValue(
                    dsaTokens.colorNeutral300
                    )
                  DisabledFill: |-
                    =ColorValue(
                        "#ffffff00"
                    )
                  FillPortions: =1
                  Font: =Font.'Open Sans'
                  Height: =40
                  HoverColor: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimaryHover
                    )
                  LayoutMinWidth: =0
                  PressedColor: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimaryHover
                    )
                  Size: =dsaTokens.fontLabel
                  Text: ="Option 1"
                  Width: =Parent.Width
                  X: =10
            - Checkbox2:
                Control: Classic/CheckBox@2.1.0
                Properties:
                  BorderColor: |-
                    =ColorValue(
                     "#ffffff00"
                    )
                  BorderStyle: =BorderStyle.None
                  CheckboxBackgroundFill: |-
                    =ColorValue(
                    dsaTokens.colorAccentSecondary
                    )
                  CheckboxBorderColor: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimaryHover
                    )
                  CheckmarkFill: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimary
                    )
                  Color: |-
                    =ColorValue(
                    dsaTokens.colorContrastLight
                    )
                  DisabledBorderColor: |-
                    =ColorValue(
                    dsaTokens.colorNeutral400
                    )
                  DisabledColor: |-
                    =ColorValue(
                    dsaTokens.colorNeutral300
                    )
                  DisabledFill: |-
                    =ColorValue(
                        "#ffffff00"
                    )
                  FillPortions: =1
                  Font: =Font.'Open Sans'
                  Height: =40
                  HoverColor: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimaryHover
                    )
                  LayoutMinWidth: =0
                  PressedColor: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimaryHover
                    )
                  Size: =dsaTokens.fontLabel
                  Text: ="Option 2"
                  Width: =Parent.Width
                  X: =10
            - Checkbox3:
                Control: Classic/CheckBox@2.1.0
                Properties:
                  BorderColor: |-
                    =ColorValue(
                     "#ffffff00"
                    )
                  BorderStyle: =BorderStyle.None
                  CheckboxBackgroundFill: |-
                    =ColorValue(
                    dsaTokens.colorAccentSecondary
                    )
                  CheckboxBorderColor: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimaryHover
                    )
                  CheckmarkFill: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimary
                    )
                  Color: |-
                    =ColorValue(
                    dsaTokens.colorContrastLight
                    )
                  DisabledBorderColor: |-
                    =ColorValue(
                    dsaTokens.colorNeutral400
                    )
                  DisabledColor: |-
                    =ColorValue(
                    dsaTokens.colorNeutral300
                    )
                  DisabledFill: |-
                    =ColorValue(
                        "#ffffff00"
                    )
                  FillPortions: =1
                  Font: =Font.'Open Sans'
                  Height: =40
                  HoverColor: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimaryHover
                    )
                  LayoutMinWidth: =0
                  PressedColor: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimaryHover
                    )
                  Size: =dsaTokens.fontLabel
                  Text: ="Option 3"
                  Width: =Parent.Width
                  X: =10

`

InputCheckBoxHzDsa.setAttribute("data-code", codeSnippet)

InputCheckBoxHzDsa.innerHTML = `
<img src=${preview} alt="Imagem combo box para power apps" />
`

export default InputCheckBoxHzDsa