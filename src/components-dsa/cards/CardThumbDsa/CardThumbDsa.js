import "./cardThumbDsa.css"
import preview from "/assets/components-preview/CardThumbDsa.png"

const CardThumbDsa = document.createElement("div")

const codeSnippet = `- CardThumbDsa:
    Control: GroupContainer@1.3.0
    Variant: AutoLayout
    Properties:
      DropShadow: =DropShadow.None
      Fill: =ColorValue(dsaTokens.colorBgPrimary)
      FillPortions: =0
      Height: =thumbContainer.Height + cardThumbTitle.Height + cardThumbText.Height + 40 + cardThumbContent.PaddingBottom + cardThumbContent.PaddingBottom + 24
      LayoutDirection: =LayoutDirection.Vertical
      LayoutMinHeight: =0
      RadiusBottomLeft: =16
      RadiusBottomRight: =16
      RadiusTopLeft: =16
      RadiusTopRight: =16
      Width: =240
      X: =959
      Y: =392
    Children:
      - thumbContainer:
          Control: GroupContainer@1.3.0
          Variant: ManualLayout
          Properties:
            DropShadow: =DropShadow.Regular
            FillPortions: =0
            Height: '=200 '
            LayoutMinHeight: =0
            LayoutMinWidth: =0
            RadiusBottomLeft: =16
            RadiusBottomRight: =16
            RadiusTopLeft: =16
            RadiusTopRight: =16
            Width: =Parent.Width
          Children:
            - thumb:
                Control: Image@2.2.3
                Properties:
                  BorderColor: =RGBA(0, 18, 107, 1)
                  DisplayMode: =DisplayMode.View
                  Height: =Parent.Height
                  ImagePosition: =ImagePosition.Fill
                  Width: =Parent.Width
      - cardThumbContent:
          Control: GroupContainer@1.3.0
          Variant: AutoLayout
          Properties:
            DropShadow: =DropShadow.None
            Height: '=0   '
            LayoutDirection: =LayoutDirection.Vertical
            LayoutGap: =4
            LayoutMinHeight: =0
            LayoutMinWidth: =0
            PaddingBottom: =8
            PaddingLeft: =16
            PaddingRight: =16
            PaddingTop: =8
            RadiusBottomLeft: =0
            RadiusBottomRight: =0
            RadiusTopLeft: =0
            RadiusTopRight: =0
            Width: =Parent.Width
            X: =300
            Y: =468
          Children:
            - cardThumbTitle:
                Control: Label@2.5.1
                Properties:
                  AutoHeight: =true
                  BorderColor: =RGBA(0, 18, 107, 1)
                  Color: =ColorValue(dsaTokens.colorNeutral100)
                  Font: =Font.'Open Sans'
                  FontWeight: =FontWeight.Semibold
                  PaddingBottom: =0
                  PaddingLeft: =0
                  PaddingRight: =0
                  PaddingTop: =0
                  Size: =dsaTokens.fontText
                  Text: ="Title"
                  Width: =Parent.Width - 32
            - cardThumbText:
                Control: Label@2.5.1
                Properties:
                  AutoHeight: =true
                  BorderColor: =RGBA(0, 18, 107, 1)
                  Color: =ColorValue(dsaTokens.colorNeutral200)
                  Font: =Font.'Open Sans'
                  PaddingBottom: =0
                  PaddingLeft: =0
                  PaddingRight: =0
                  PaddingTop: =0
                  Size: =dsaTokens.fontLabel
                  Text: |-
                    ="Text description for your long text.
                    "
                  Width: =Parent.Width - 32
            - BtnTerDsa_1:
                Control: Classic/Button@2.2.0
                Properties:
                  Align: =Align.Right
                  AlignInContainer: =AlignInContainer.End
                  BorderColor: |-
                    =ColorValue(
                        "#ffffff00"
                    )
                  BorderStyle: =BorderStyle.None
                  Color: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimary
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
                        "#ffffff00"
                    )
                  Fill: |-
                    =ColorValue(
                        "#ffffff00"
                    )
                  FocusedBorderColor: |-
                    =ColorValue(
                    dsaTokens.colorNeutral200
                    )
                  FocusedBorderThickness: '=2 '
                  Font: =Font.'Open Sans'
                  HoverBorderColor: |-
                    =ColorValue(
                        "#ffffff00"
                    )
                  HoverColor: |-
                    =ColorValue(
                     dsaTokens.colorAccentPrimaryHover
                    )
                  HoverFill: |-
                    =ColorValue(
                        "#ffffff00"
                    )
                  PaddingBottom: =8
                  PaddingLeft: =16
                  PaddingRight: =16
                  PaddingTop: =8
                  PressedBorderColor: |-
                    =ColorValue(
                        "#ffffff00"
                    )
                  PressedColor: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimary
                    )
                  PressedFill: |-
                    =ColorValue(
                        "#ffffff00"
                    )
                  RadiusBottomLeft: =200
                  RadiusBottomRight: =200
                  RadiusTopLeft: =200
                  RadiusTopRight: =200
                  Size: =16
                  Text: ="More ..."
                  Underline: =true
                  X: =519
                  Y: =150

`

CardThumbDsa.setAttribute("data-code", codeSnippet)

CardThumbDsa.innerHTML =
`
<img class="CardThumbDsa" src=${preview} alt="Imagem Card para power apps" />
`

export default CardThumbDsa