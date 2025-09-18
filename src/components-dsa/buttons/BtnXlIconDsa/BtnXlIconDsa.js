import "./BtnXlIconDsa.css"
import preview from "/assets/components-preview/BtnXlIconDsa.png"

const BtnXlIconDsa = document.createElement("div")

const codeSnippet = `- btnXlIconDsa:
    Control: GroupContainer@1.3.0
    Variant: ManualLayout
    Properties:
      BorderColor: =ColorValue(dsaTokens.colorAccentSecondaryHover)
      BorderStyle: =BorderStyle.None
      DropShadow: =DropShadow.None
      Height: =80
      RadiusBottomLeft: =8
      RadiusBottomRight: =8
      RadiusTopLeft: =8
      RadiusTopRight: =8
      Width: =120
      X: =71
      Y: =536
    Children:
      - buttonXlDsa:
          Control: Classic/Button@2.2.0
          Properties:
            BorderColor: |-
              =ColorValue(
              dsaTokens.colorAccentPrimary
              )
            Color: |-
              =ColorValue(
              dsaTokens.colorAccentPrimaryHover
              )
            DisabledBorderColor: =RGBA(166, 166, 166, 1)
            Fill: |-
              =ColorValue(
              dsaTokens.colorBgPrimary
              )
            Font: =Font.'Open Sans'
            Height: =Parent.Height
            HoverBorderColor: |-
              =ColorValue(
              dsaTokens.colorAccentPrimaryHover
              )
            HoverColor: |-
              =ColorValue(
              dsaTokens.colorAccentPrimaryHover
              )
            HoverFill: |-
              =ColorValue(
              dsaTokens.colorAccentSecondaryHover
              )
            OnSelect: =
            PaddingBottom: =8
            PaddingLeft: =8
            PaddingRight: =8
            PaddingTop: =8
            PressedBorderColor: |-
              =ColorValue(
              dsaTokens.colorAccentSecondaryHover
              )
            PressedColor: |-
              =ColorValue(
              dsaTokens.colorAccentPrimaryHover
              )
            PressedFill: =ColorValue(dsaTokens.colorAccentSecondary)
            RadiusBottomLeft: =8
            RadiusBottomRight: =8
            RadiusTopLeft: =8
            RadiusTopRight: =8
            Size: =dsaTokens.fontSmallLabel
            Text: ="Button label"
            VerticalAlign: =VerticalAlign.Bottom
            Width: '=Parent.Width -1 '
            Y: '=0   '
      - IconXlDsa:
          Control: Classic/Icon@2.5.0
          Properties:
            BorderColor: =RGBA(0, 18, 107, 1)
            Color: |-
              =If(
                  buttonXlDsa.DisplayMode = DisplayMode.Disabled,
                  ColorValue(dsaTokens.colorNeutral300),
                  ColorValue(dsaTokens.colorAccentPrimary)
              )
            DisplayMode: =DisplayMode.View
            Height: =24
            Icon: =Icon.ChevronDown
            Width: '=24  '
            X: = buttonXlDsa.Width/2 - Self.Width/2
            Y: =Self.Height - Self.Height /2
`

BtnXlIconDsa.setAttribute('data-code', codeSnippet)

BtnXlIconDsa.innerHTML = `
<img class="BtnXlIconDsa" src=${preview} alt="Imagem botao grande com icone para power apps" />
`

export default BtnXlIconDsa