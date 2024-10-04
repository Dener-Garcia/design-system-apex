import "./inputDataPickerDsa.css"
import preview from "/assets/components-preview/calendarDsa.png"

const InputDataPickerDsa = document.createElement("div")

const codeSnippet = `- DatePickerDsa:
    Control: GroupContainer
    Variant: verticalAutoLayoutContainer
    Properties:
      DropShadow: =DropShadow.None
      Height: '=InputDataPickerDsa.Height + 40   '
      LayoutDirection: =LayoutDirection.Vertical
      LayoutJustifyContent: =LayoutJustifyContent.Center
      LayoutMode: =LayoutMode.Auto
      RadiusBottomLeft: =8
      RadiusBottomRight: =8
      RadiusTopLeft: =8
      RadiusTopRight: =8
      Width: =273
      X: =832
      Y: =172
    Children:
    - InputDataPickerDsa:
        Control: Label
        Properties:
          AutoHeight: =true
          Color: |-
            =ColorValue(
            dsaTokens.colorContrastLight
            )
          PaddingBottom: =4
          PaddingLeft: =8
          PaddingRight: =0
          PaddingTop: =4
          Size: '=dsaTokens.fontLabel '
          Width: =Parent.Width
    - datePickerContainer:
        Control: GroupContainer
        Variant: manualLayoutContainer
        Properties:
          AlignInContainer: =AlignInContainer.SetByContainer
          DropShadow: =DropShadow.None
          FillPortions: =0
          Height: =Parent.Height - InputDataPickerDsa.Height
          LayoutMinWidth: =0
          RadiusBottomLeft: =8
          RadiusBottomRight: =8
          RadiusTopLeft: =8
          RadiusTopRight: =8
          Width: =Parent.Width
          X: =220
          Y: =330
        Children:
        - datePickerInput:
            Control: Classic/DatePicker
            Properties:
              BorderColor: |-
                =ColorValue(
                dsaTokens.colorAccentSecondaryHover
                )
              BorderThickness: =0
              Color: |-
                =ColorValue(
                dsaTokens.colorContrastLight
                )
              DisabledBorderColor: |-
                =ColorValue(
                    "#ffffff00"
                )
              DisabledColor: |-
                =ColorValue(
                dsaTokens.colorNeutral300
                )
              DisabledFill: |-
                =ColorValue(
                dsaTokens.colorNeutral500
                )
              Fill: |-
                =ColorValue(
                dsaTokens.colorAccentSecondary
                )
              FocusedBorderColor: |-
                =ColorValue(
                dsaTokens.colorNeutral300
                )
              FocusedBorderThickness: =0
              IconBackground: |-
                =ColorValue(
                dsaTokens.colorAccentSecondary
                )
              IconFill: |-
                =ColorValue(
                dsaTokens.colorAccentPrimary
                )
              PaddingBottom: =0
              PaddingLeft: '=8   '
              PaddingRight: =0
              Size: =dsaTokens.fontLabel
              Width: =Parent.Width
`

InputDataPickerDsa.setAttribute("data-code", codeSnippet)

InputDataPickerDsa.innerHTML = `
<img src=${preview} alt="Imagem combo box para power apps" />
`

export default InputDataPickerDsa