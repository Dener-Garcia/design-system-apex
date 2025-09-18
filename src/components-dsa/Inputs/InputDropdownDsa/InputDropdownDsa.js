import "./inputDropdownDsa.css"
import preview from "/assets/components-preview/DropdownDsa.png"

const InputDropdownDsa = document.createElement("div")

const codeSnippet = `- InputDropdownDsa:
    Control: GroupContainer@1.3.0
    Variant: AutoLayout
    Properties:
      DropShadow: =DropShadow.None
      Height: '=labelDropdown.Height + 40   '
      LayoutDirection: =LayoutDirection.Vertical
      LayoutJustifyContent: =LayoutJustifyContent.Center
      RadiusBottomLeft: =8
      RadiusBottomRight: =8
      RadiusTopLeft: =8
      RadiusTopRight: =8
      Width: =160
      X: =557
      Y: =132
    Children:
      - labelDropdown:
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
      - dropDownContainer:
          Control: GroupContainer@1.3.0
          Variant: ManualLayout
          Properties:
            BorderThickness: '=0   '
            DropShadow: =DropShadow.None
            FillPortions: =0
            Height: =Parent.Height - labelDropdown.Height
            LayoutMinWidth: =0
            RadiusBottomLeft: =8
            RadiusBottomRight: =8
            RadiusTopLeft: =8
            RadiusTopRight: =8
            Width: =Parent.Width
            X: =220
            Y: =330
          Children:
            - dropdown:
                Control: Classic/DropDown@2.3.1
                Properties:
                  BorderColor: |-
                    =ColorValue(
                       "#ffffff00"
                    )
                  BorderStyle: =BorderStyle.None
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
                    dsaTokens.colorNeutral300
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
                  DisabledBorderColor: =RGBA(0, 0, 0, 0)
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
                  Font: =Font.'Open Sans'
                  Height: =Parent.Height
                  HoverBorderColor: |-
                    =ColorValue(
                    dsaTokens.colorAccentSecondary
                    )
                  HoverColor: |-
                    =ColorValue(
                    dsaTokens.colorContrastLight
                    )
                  HoverFill: |-
                    =ColorValue(
                    dsaTokens.colorAccentSecondaryHover
                    )
                  Items.Value: =Value
                  PaddingBottom: =0
                  PaddingLeft: =8
                  PaddingRight: =0
                  PaddingTop: =0
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
                  Size: =dsaTokens.fontLabel
                  Width: =Parent.Width
`

InputDropdownDsa.setAttribute("data-code", codeSnippet)

InputDropdownDsa.innerHTML = `
<img src=${preview} alt="Imagem combo box para power apps" />
`

export default InputDropdownDsa