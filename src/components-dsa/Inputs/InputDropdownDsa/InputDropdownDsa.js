import "./inputDropdownDsa.css"
import preview from "/assets/components-preview/DropdownDsa.png"

const InputDropdownDsa = document.createElement("div")

const codeSnippet = `- InputDropdownDsa:
    Control: GroupContainer
    Variant: verticalAutoLayoutContainer
    Properties:
      DropShadow: =DropShadow.None
      Height: '=labelDropdown.Height + 40   '
      LayoutDirection: =LayoutDirection.Vertical
      LayoutJustifyContent: =LayoutJustifyContent.Center
      LayoutMode: =LayoutMode.Auto
      RadiusBottomLeft: =8
      RadiusBottomRight: =8
      RadiusTopLeft: =8
      RadiusTopRight: =8
      Width: =160
      X: =581
      Y: |+
        =172
    Children:
    - labelDropdown:
        Control: Label
        Properties:
          Text: ="Label"
          AutoHeight: =true
          Color: |-
            =ColorValue(
            dsaTokens.colorContrastLight
            )
          Height: =0
          PaddingBottom: =4
          PaddingLeft: =8
          PaddingRight: =0
          PaddingTop: =4
          Size: =dsaTokens.fontLabel
          Width: =Parent.Width
    - dropDownContainer:
        Control: GroupContainer
        Variant: manualLayoutContainer
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
            Control: Classic/DropDown
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