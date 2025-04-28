import "./inputComboBox.css"
import preview from "/assets/components-preview/ComboBoxDsa.png"

const InputComboBoxDsa = document.createElement("div")

const codeSnippet = `- comboBoxDsa:
    Control: GroupContainer@1.3.0
    Variant: AutoLayout
    Properties:
      DropShadow: =DropShadow.None
      Height: '=labelComboBoxDsa.Height + 40   '
      LayoutDirection: =LayoutDirection.Vertical
      LayoutJustifyContent: =LayoutJustifyContent.Center
      RadiusBottomLeft: =8
      RadiusBottomRight: =8
      RadiusTopLeft: =8
      RadiusTopRight: =8
      Width: =160
      X: =311
      Y: =132
    Children:
      - labelComboBoxDsa:
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
      - comboBoxDsaContainer:
          Control: GroupContainer@1.3.0
          Variant: ManualLayout
          Properties:
            AlignInContainer: =AlignInContainer.SetByContainer
            DropShadow: =DropShadow.None
            FillPortions: =0
            Height: =Parent.Height - labelComboBoxDsa.Height
            LayoutMinWidth: =0
            RadiusBottomLeft: =8
            RadiusBottomRight: =8
            RadiusTopLeft: =8
            RadiusTopRight: =8
            Width: =Parent.Width
            X: =220
            Y: =330
          Children:
            - comboBox:
                Control: Classic/ComboBox@2.4.0
                Properties:
                  BorderColor: |-
                    =ColorValue(
                       "#ffffff00"
                    )
                  BorderStyle: =BorderStyle.None
                  BorderThickness: =0
                  ChevronBackground: |-
                    =ColorValue(
                        "#ffffff00"
                    )
                  ChevronDisabledBackground: |-
                    =ColorValue(
                     dsaTokens.colorNeutral400
                    )
                  ChevronDisabledFill: |-
                    =ColorValue(
                    dsaTokens.colorNeutral400
                    )
                  ChevronFill: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimary
                    )
                  ChevronHoverBackground: |-
                    =ColorValue(
                      dsaTokens.colorAccentPrimaryHover
                    )
                  ChevronHoverFill: |-
                    =ColorValue(
                     dsaTokens.colorContrastDark
                    )
                  Color: |-
                    =ColorValue(
                    dsaTokens.colorContrastLight
                    )
                  DisabledBorderColor: =ColorValue(dsaTokens.colorNeutral400)
                  DisabledColor: =ColorValue(dsaTokens.colorNeutral300)
                  DisabledFill: =ColorValue(dsaTokens.colorNeutral500)
                  Fill: |-
                    =ColorValue(
                    dsaTokens.colorAccentSecondary
                    )
                  Font: =Font.'Open Sans'
                  Height: =Parent.Height
                  HoverColor: |-
                    =ColorValue(
                    dsaTokens.colorContrastLight
                    )
                  HoverFill: |-
                    =ColorValue(
                    dsaTokens.colorAccentSecondaryHover
                    )
                  PaddingBottom: =0
                  PaddingLeft: =8
                  PaddingRight: =0
                  PaddingTop: =0
                  PressedBorderColor: =RGBA(0, 0, 0, 0)
                  PressedColor: |-
                    =ColorValue(
                    dsaTokens.colorContrastDark
                    )
                  PressedFill: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimaryHover
                    )
                  SelectionColor: |-
                    =ColorValue(
                    dsaTokens.colorContrastDark
                    )
                  SelectionFill: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimary
                    )
                  SelectionTagColor: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimary
                    )
                  SelectionTagFill: |-
                    =ColorValue(
                    dsaTokens.colorAccentSecondaryHover
                    )
                  Size: =dsaTokens.fontLabel
                  Width: =Parent.Width

`

InputComboBoxDsa.setAttribute("data-code", codeSnippet)

InputComboBoxDsa.innerHTML = `
<img src=${preview} alt="Imagem combo box para power apps" />
`

export default InputComboBoxDsa