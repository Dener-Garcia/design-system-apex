import "./BtnImgDsa.css"
import preview from "/assets/components-preview/BtnImgDsa.png"

const BtnImgDsa = document.createElement("div")

const codeSnippet = `- BtnImgDsa:
    Control: GroupContainer@1.3.0
    Variant: ManualLayout
    Properties:
      BorderColor: =ColorValue(dsaTokens.colorAccentPrimary)
      BorderThickness: =2
      DropShadow: =DropShadow.None
      Fill: |-
        =ColorValue(
        If(
           BtnAction.Pressed, dsaTokens.colorAccentSecondaryHover, dsaTokens.colorBgPrimary
        )
        )
      Height: =imgForBtn.Height + 16
      RadiusBottomLeft: =8
      RadiusBottomRight: =8
      RadiusTopLeft: =8
      RadiusTopRight: =8
      Width: =imgForBtn.Width + 180
      X: =289
      Y: =546
    Children:
      - btnImgContent:
          Control: GroupContainer@1.3.0
          Variant: AutoLayout
          Properties:
            DropShadow: =DropShadow.None
            Height: =Parent.Height
            LayoutDirection: =LayoutDirection.Vertical
            PaddingBottom: =8
            PaddingTop: =8
            RadiusBottomLeft: =0
            RadiusBottomRight: =0
            RadiusTopLeft: =0
            RadiusTopRight: =0
            Width: =Parent.Width - imgForBtn.Width - 24
            X: =imgForBtn.Width + 24
          Children:
            - labelBtn:
                Control: Label@2.5.1
                Properties:
                  AlignInContainer: =AlignInContainer.Start
                  AutoHeight: =true
                  BorderColor: =RGBA(0, 18, 107, 1)
                  FillPortions: =1
                  Font: =Font.'Segoe UI'
                  FontWeight: =FontWeight.Semibold
                  LayoutMinHeight: =0
                  LayoutMinWidth: =0
                  LineHeight: =1
                  PaddingBottom: =0
                  PaddingLeft: =0
                  PaddingRight: =0
                  PaddingTop: =0
                  Size: =dsaTokens.fontText
                  Width: =Parent.Width
                  X: =imgForBtn.Width + Parent.PaddingLeft + 16
                  Y: =8
            - supportTxtBtn:
                Control: Label@2.5.1
                Properties:
                  AlignInContainer: =AlignInContainer.Stretch
                  AutoHeight: =true
                  BorderColor: =RGBA(0, 18, 107, 1)
                  Color: =ColorValue(dsaTokens.colorNeutral200)
                  FillPortions: =1
                  Font: =Font.'Segoe UI'
                  LayoutMinHeight: =0
                  LayoutMinWidth: =0
                  LineHeight: =1
                  PaddingBottom: =0
                  PaddingLeft: =0
                  PaddingRight: =0
                  PaddingTop: =0
                  Size: =dsaTokens.fontSmallLabel
                  Width: =156
                  X: =imgForBtn.Width + Parent.PaddingLeft + 16
                  Y: =labelBtn.Height + Self.Height / 2
      - imgForBtn:
          Control: Image@2.2.3
          Properties:
            BorderColor: =RGBA(0, 18, 107, 1)
            DisplayMode: =DisplayMode.View
            Height: =44
            OnSelect: =
            Width: =58
            X: =8
            Y: =8
      - BtnAction:
          Control: Classic/Button@2.2.0
          Properties:
            BorderColor: =ColorFade(Self.Fill, -15%)
            Color: =RGBA(255, 255, 255, 1)
            DisabledBorderColor: =RGBA(166, 166, 166, 1)
            Fill: =RGBA(0, 0, 0, 0)
            Font: =Font.'Open Sans'
            Height: =Parent.Height
            HoverBorderColor: =ColorFade(Self.BorderColor, 20%)
            HoverColor: =Self.Fill
            HoverFill: =Self.Fill
            PaddingBottom: =0
            PaddingLeft: =0
            PaddingRight: =0
            PaddingTop: =0
            PressedBorderColor: =Self.Fill
            PressedColor: =Self.Fill
            PressedFill: =Self.Fill
            Text: =
            Width: =Parent.Width
            X: '=0   '
`

BtnImgDsa.setAttribute('data-code', codeSnippet)

BtnImgDsa.innerHTML = `
<img class="BtnImgDsa" src=${preview} alt="Imagem botao com image para power apps" />
`

export default BtnImgDsa