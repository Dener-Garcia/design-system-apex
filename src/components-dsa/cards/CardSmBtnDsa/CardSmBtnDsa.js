import "./cardSmBtnDsa.css"
import preview from "/assets/components-preview/cardSmallBtnDsa.png"

const cardSmBtnDsa = document.createElement("div")

const codeSnippet = `- CardSmBtnDsa:
    Control: GroupContainer@1.3.0
    Variant: AutoLayout
    Properties:
      DropShadow: =DropShadow.None
      Fill: =ColorValue(dsaTokens.colorBgPrimary)
      FillPortions: =0
      Height: |
        = cardSmBtntext.Height + cardBtnAction.Height + cardSmBtnTtitleAccent.Height + Self.PaddingBottom + Self.PaddingTop + Self.LayoutGap
      LayoutDirection: =LayoutDirection.Vertical
      LayoutGap: =8
      PaddingBottom: =16
      PaddingLeft: =16
      PaddingRight: =16
      PaddingTop: =16
      RadiusBottomLeft: =8
      RadiusBottomRight: =8
      RadiusTopLeft: =8
      RadiusTopRight: =8
      Width: |+
        =If(App.Width < 768, Parent.Width, 256)
      X: =428
      Y: =71
    Children:
      - cardSmBtnTtitleAccent:
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
      - cardSmBtntext:
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
              ="Text description for your long text
              "
            Width: =Parent.Width - 32
      - cardBtnAction:
          Control: GroupContainer@1.3.0
          Variant: AutoLayout
          Properties:
            DropShadow: =DropShadow.None
            FillPortions: =0
            Height: |
              =40
            LayoutAlignItems: =LayoutAlignItems.Center
            LayoutDirection: =LayoutDirection.Horizontal
            LayoutJustifyContent: =LayoutJustifyContent.End
            LayoutMinHeight: =0
            LayoutMinWidth: =0
            RadiusBottomLeft: =0
            RadiusBottomRight: =0
            RadiusTopLeft: =0
            RadiusTopRight: =0
            Width: =Parent.Width
            X: =300
            Y: =468
          Children:
            - BtnIconRightDsa_1:
                Control: GroupContainer@1.3.0
                Variant: ManualLayout
                Properties:
                  DropShadow: =DropShadow.None
                  FillPortions: =0
                  Height: =40
                  LayoutMinHeight: =0
                  RadiusBottomLeft: =200
                  RadiusBottomRight: =200
                  RadiusTopLeft: =200
                  RadiusTopRight: =200
                  Width: =160
                  X: =942
                  Y: =150
                Children:
                  - ButtonIconRight_1:
                      Control: Classic/Button@2.2.0
                      Properties:
                        BorderColor: |-
                          =ColorValue(
                          dsaTokens.colorAccentPrimary
                          )
                        Color: |-
                          =ColorValue(
                          dsaTokens.colorContrastDark
                          )
                        DisabledBorderColor: =RGBA(166, 166, 166, 1)
                        Fill: |-
                          =ColorValue(
                          dsaTokens.colorAccentPrimary
                          )
                        Font: =Font.'Open Sans'
                        Height: =Parent.Height
                        HoverBorderColor: |-
                          =ColorValue(
                          dsaTokens.colorAccentPrimary
                          )
                        HoverColor: |-
                          =ColorValue(
                          dsaTokens.colorContrastDark
                          )
                        HoverFill: |-
                          =ColorValue(
                          dsaTokens.colorAccentPrimaryHover
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
                        PressedColor: =ColorValue(dsaTokens.colorContrastDark)
                        PressedFill: |-
                          =ColorValue(
                          dsaTokens.colorAccentPrimaryHover
                          )
                        RadiusBottomLeft: =200
                        RadiusBottomRight: =200
                        RadiusTopLeft: =200
                        RadiusTopRight: =200
                        Size: =16
                        Text: ="Explore"
                        Width: =Parent.Width
                        Y: '=0   '
                  - IconRightBtn_1:
                      Control: Classic/Icon@2.5.0
                      Properties:
                        BorderColor: =RGBA(0, 18, 107, 1)
                        Color: |-
                          =If(
                              ButtonIconRight_1.DisplayMode = DisplayMode.Disabled,
                              ColorValue(dsaTokens.colorNeutral300),
                              ColorValue(dsaTokens.colorContrastDark)
                          )
                        Height: =ButtonIconRight_1.Size
                        Icon: =Icon.Search
                        Width: =ButtonIconRight_1.Size
                        X: = ButtonIconRight_1.Width - Self.Width - 16
                        Y: =ButtonIconRight_1.Height /2 - Self.Height /2

`

cardSmBtnDsa.setAttribute("data-code", codeSnippet)

cardSmBtnDsa.innerHTML =
`
<img class="CardThumbDsa" src=${preview} alt="Imagem Card para power apps" />
`

export default cardSmBtnDsa