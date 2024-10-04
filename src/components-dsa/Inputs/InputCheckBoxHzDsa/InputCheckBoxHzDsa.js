import "./inputCheckBoxHzDsa.css"
import preview from "/assets/components-preview/CheckboxDsa.png"

const InputCheckBoxHzDsa = document.createElement("div")

const codeSnippet = `- InputCheckBoxHzDsa:
    Control: GroupContainer
    Variant: verticalAutoLayoutContainer
    Properties:
      DropShadow: =DropShadow.None
      Height: =labelCheckBox.Height + 40
      LayoutDirection: =LayoutDirection.Vertical
      LayoutMode: =LayoutMode.Auto
      RadiusBottomLeft: =8
      RadiusBottomRight: =8
      RadiusTopLeft: =8
      RadiusTopRight: =8
      Width: =430
      X: =134
      Y: =316
    Children:
    - labelCheckBox:
        Control: Label
        Properties:
          Text: ="Label"
          AutoHeight: =true
          Color: |-
            =ColorValue(
               dsaTokens.colorContrastLight
            )
          DisabledColor: |-
            =ColorValue(
                dsaTokens.colorNeutral400
                )
          Height: =0
          PaddingBottom: =4
          PaddingLeft: =8
          PaddingRight: =0
          PaddingTop: =4
          Size: =dsaTokens.fontLabel
          Width: =Parent.Width
    - checkboxContainer:
        Control: GroupContainer
        Variant: horizontalAutoLayoutContainer
        Properties:
          AlignInContainer: =AlignInContainer.SetByContainer
          DropShadow: =DropShadow.None
          Height: =Parent.Height - labelCheckBox.Height
          LayoutGap: =16
          LayoutMinHeight: =0
          LayoutMinWidth: =0
          LayoutMode: =LayoutMode.Auto
          Width: =Parent.Width
        Children:
        - Checkbox1:
            Control: Classic/CheckBox
            Properties:
              Text: ="Option 1"
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
              Width: =Parent.Width
              X: =10
        - Checkbox2:
            Control: Classic/CheckBox
            Properties:
              Text: ="Option 2"
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
              Width: =Parent.Width
              X: =10
        - Checkbox3:
            Control: Classic/CheckBox
            Properties:
              Text: ="Option 3"
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
              Width: =Parent.Width
              X: =10

`

InputCheckBoxHzDsa.setAttribute("data-code", codeSnippet)

InputCheckBoxHzDsa.innerHTML = `
<img src=${preview} alt="Imagem combo box para power apps" />
`

export default InputCheckBoxHzDsa