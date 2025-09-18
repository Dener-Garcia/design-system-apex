import "./BtnSelectorDsa.css"
import preview from "/assets/components-preview/BtnSelectorDsa.png"


const BtnSelectorDsa = document.createElement("div")

const codeSnippet = `- BtnSelectorDsa:
    Control: GroupContainer@1.3.0
    Variant: AutoLayout
    Properties:
      DropShadow: =DropShadow.None
      Height: =32
      LayoutDirection: =LayoutDirection.Horizontal
      RadiusBottomLeft: =8
      RadiusBottomRight: =8
      RadiusTopLeft: =8
      RadiusTopRight: =8
      Width: =320
      X: =640
      Y: =560
    Children:
      - BtnSelectorLeft:
          Control: Classic/Button@2.2.0
          Properties:
            AlignInContainer: =AlignInContainer.Stretch
            BorderColor: |-
              =ColorValue(
              dsaTokens.colorAccentPrimary
              )
            BorderStyle: =BorderStyle.None
            BorderThickness: =0
            Color: |-
              =ColorValue(
              selectorLeftColorText
              )
            DisabledBorderColor: |-
              =ColorValue(
              dsaTokens.colorNeutral300
              )
            DisabledColor: |-
              =ColorValue(
              dsaTokens.colorNeutral300
              )
            DisabledFill: |-
              =ColorValue(
              dsaTokens.colorNeutral400
              )
            Fill: |-
              =ColorValue(
              selectorLeftBgFocus
              )
            FillPortions: =1
            FocusedBorderColor: |-
              =ColorValue(
              dsaTokens.colorNeutral200
              )
            FocusedBorderThickness: '=2 '
            Font: =Font.'Open Sans'
            HoverBorderColor: |-
              =ColorValue(
              dsaTokens.colorAccentPrimary
              )
            HoverColor: |-
              =ColorValue(
              dsaTokens.colorContrastDark
              )
            HoverFill: =ColorValue(dsaTokens.colorAccentPrimary)
            LayoutMinHeight: =0
            LayoutMinWidth: =0
            OnSelect: |-
              =Set(selectorLeftBgFocus, dsaTokens.colorAccentPrimaryHover);
              Set(selectorRightBgDefault, dsaTokens.colorAccentSecondaryHover);
              Set(selectorLeftColorText, dsaTokens.colorContrastDark);
              Set(selectorRightColorText, dsaTokens.colorContrastLight);

              // type your code bellow
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
              dsaTokens.colorContrastDark
              )
            PressedFill: |-
              =ColorValue(
              dsaTokens.colorAccentPrimaryHover
              )
            RadiusBottomLeft: =0
            RadiusBottomRight: =0
            RadiusTopLeft: =0
            RadiusTopRight: =0
            Size: =If(App.Width < 768, dsaTokens.fontSmallLabel,dsaTokens.fontLabel)
            Text: ="Selector Left"
            X: =42
            Y: =237
      - BtnSelectorRight:
          Control: Classic/Button@2.2.0
          Properties:
            AlignInContainer: =AlignInContainer.Stretch
            BorderColor: |-
              =ColorValue(
              dsaTokens.colorAccentPrimary
              )
            BorderStyle: =BorderStyle.None
            BorderThickness: =0
            Color: |-
              =ColorValue(
              selectorRightColorText
              )
            DisabledBorderColor: |-
              =ColorValue(
              dsaTokens.colorNeutral300
              )
            DisabledColor: |-
              =ColorValue(
              dsaTokens.colorNeutral300
              )
            DisabledFill: |-
              =ColorValue(
              dsaTokens.colorNeutral400
              )
            Fill: =ColorValue(selectorRightBgDefault)
            FillPortions: =1
            FocusedBorderColor: |-
              =ColorValue(
              dsaTokens.colorNeutral200
              )
            FocusedBorderThickness: '=2 '
            Font: =Font.'Open Sans'
            Height: =0
            HoverBorderColor: |-
              =ColorValue(
              dsaTokens.colorAccentPrimary
              )
            HoverColor: |-
              =ColorValue(
              dsaTokens.colorContrastDark
              )
            HoverFill: =ColorValue(dsaTokens.colorAccentPrimary)
            LayoutMinHeight: =0
            OnSelect: |
              =Set(selectorRightBgDefault, dsaTokens.colorAccentPrimaryHover);
              Set(selectorLeftBgFocus, dsaTokens.colorAccentSecondaryHover);
              Set(selectorLeftColorText, dsaTokens.colorContrastLight);
              Set(selectorRightColorText, dsaTokens.colorContrastDark);

              // type your code bellow
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
              dsaTokens.colorContrastDark
              )
            PressedFill: |-
              =ColorValue(
              dsaTokens.colorAccentPrimaryHover
              )
            RadiusBottomLeft: =0
            RadiusBottomRight: =0
            RadiusTopLeft: =0
            RadiusTopRight: =0
            Size: =If(App.Width < 768, dsaTokens.fontSmallLabel,dsaTokens.fontLabel)
            Text: ="Selector Right"
            X: =42
            Y: =237
`

BtnSelectorDsa.setAttribute('data-code', codeSnippet)

BtnSelectorDsa.innerHTML =
`
<img class="BtnSelectorDsa" src=${preview} alt="Imagem combo box para power apps" />
`

export default BtnSelectorDsa