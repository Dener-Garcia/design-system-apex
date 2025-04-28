import "./inputDataPickerDsa.css"
import preview from "/assets/components-preview/calendarDsa.png"

const InputDataPickerDsa = document.createElement("div")

const codeSnippet = `- DatePickerDsa:
    Control: GroupContainer@1.3.0
    Variant: AutoLayout
    Properties:
      DropShadow: =DropShadow.None
      Height: '=InputDataPickerDsa.Height + 40   '
      LayoutDirection: =LayoutDirection.Vertical
      LayoutJustifyContent: =LayoutJustifyContent.Center
      RadiusBottomLeft: =8
      RadiusBottomRight: =8
      RadiusTopLeft: =8
      RadiusTopRight: =8
      Width: =234
      X: =815
      Y: =132
    Children:
      - InputDataPickerDsa:
          Control: Label@2.5.1
          Properties:
            AutoHeight: =true
            BorderColor: =RGBA(0, 18, 107, 1)
            Color: |-
              =ColorValue(
              dsaTokens.colorContrastLight
              )
            Font: =Font.'Open Sans'
            PaddingBottom: =4
            PaddingLeft: =8
            PaddingRight: =0
            PaddingTop: =4
            Size: '=dsaTokens.fontLabel '
            Text: ="Label"
            Width: =Parent.Width
      - datePickerContainer:
          Control: GroupContainer@1.3.0
          Variant: ManualLayout
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
                Control: Classic/DatePicker@2.6.0
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
                  Font: =Font.'Open Sans'
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