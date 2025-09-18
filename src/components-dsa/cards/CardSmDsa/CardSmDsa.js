import "./cardSmDsa.css"
import preview from "/assets/components-preview/CardSmDsa.png"

const CardSmDsa = document.createElement("div")

const codeSnippet = `- CardSmDsa:
    Control: GroupContainer@1.3.0
    Variant: AutoLayout
    Properties:
      DropShadow: =DropShadow.None
      Fill: =ColorValue(dsaTokens.colorBgPrimary)
      Height: = cardSmtext.Height + cardSmAction.Height + cardSmTtitleAccent.Height + Self.PaddingBottom + Self.PaddingTop + Self.LayoutGap * 2
      LayoutDirection: =LayoutDirection.Vertical
      LayoutGap: =8
      PaddingBottom: =8
      PaddingLeft: =8
      PaddingRight: =8
      PaddingTop: =8
      RadiusBottomLeft: =8
      RadiusBottomRight: =8
      RadiusTopLeft: =8
      RadiusTopRight: =8
      Width: |
        =If(App.Width < 768, Parent.Width, 200)
      X: =42
      Y: =362
    Children:
      - cardSmTtitleAccent:
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
      - cardSmtext:
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
      - cardSmAction:
          Control: GroupContainer@1.3.0
          Variant: AutoLayout
          Properties:
            DropShadow: =DropShadow.None
            FillPortions: =0
            Height: |
              =40
            LayoutAlignItems: =LayoutAlignItems.Center
            LayoutDirection: =LayoutDirection.Horizontal
            LayoutJustifyContent: =LayoutJustifyContent.SpaceBetween
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
            - BtnIcnTerDsa_3:
                Control: GroupContainer@1.3.0
                Variant: ManualLayout
                Properties:
                  AlignInContainer: =AlignInContainer.Center
                  DropShadow: =DropShadow.None
                  FillPortions: =0
                  Height: =40
                  RadiusBottomLeft: =200
                  RadiusBottomRight: =200
                  RadiusTopLeft: =200
                  RadiusTopRight: =200
                  Width: =40
                  X: =416
                  Y: =422
                Children:
                  - IconTerBtn_3:
                      Control: Classic/Icon@2.5.0
                      Properties:
                        BorderColor: =RGBA(0, 18, 107, 1)
                        Color: |-
                          =If(
                              BtnTerSec_3.DisplayMode = DisplayMode.Disabled,
                              ColorValue(dsaTokens.colorNeutral300),
                              ColorValue(dsaTokens.colorAccentPrimary)
                          )
                        FocusedBorderThickness: =0
                        Height: =18
                        HoverColor: |-
                          =ColorValue(
                              dsaTokens.colorAccentPrimaryHover
                          )
                        HoverFill: |-
                          =   ColorValue(
                              "#ffffff00"
                             )
                        Icon: =Icon.Trash
                        PressedColor: |-
                          =ColorValue(
                          dsaTokens.colorAccentPrimaryHover
                          )
                        Width: =18
                        X: =Parent.Width/2 - Self.Width/2
                        Y: =BtnTerSec_3.Height /2 - Self.Height /2
                  - BtnTerSec_3:
                      Control: Classic/Button@2.2.0
                      Properties:
                        BorderColor: =ColorValue("#ffffff00")
                        BorderThickness: =0
                        Color: |-
                          =ColorValue(
                          dsaTokens.colorAccentPrimary
                          )
                        DisabledBorderColor: =RGBA(166, 166, 166, 1)
                        DisabledColor: |-
                          =ColorValue(
                          dsaTokens.colorNeutral200
                          )
                        DisabledFill: |-
                          =ColorValue(
                             "#ffffff00"
                          )
                        Fill: |-
                          =ColorValue(
                             "#ffffff00"
                          )
                        Font: =Font.'Open Sans'
                        Height: =Parent.Height
                        HoverBorderColor: =ColorValue("#ffffff00")
                        HoverColor: |-
                          =ColorValue(
                          dsaTokens.colorContrastDark
                          )
                        HoverFill: |-
                          =ColorValue(
                             "#ffffff00"
                          )
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
                             "#ffffff00"
                          )
                        RadiusBottomLeft: =200
                        RadiusBottomRight: =200
                        RadiusTopLeft: =200
                        RadiusTopRight: =200
                        Size: =16
                        Text: =
                        Width: =Parent.Width
                        Y: '=0   '
            - BtnIcnSecDsa_3:
                Control: GroupContainer@1.3.0
                Variant: ManualLayout
                Properties:
                  AlignInContainer: =AlignInContainer.Center
                  DropShadow: =DropShadow.None
                  FillPortions: =0
                  Height: =40
                  RadiusBottomLeft: =200
                  RadiusBottomRight: =200
                  RadiusTopLeft: =200
                  RadiusTopRight: =200
                  Width: =40
                  X: =201
                  Y: =422
                Children:
                  - IconSecBtn_3:
                      Control: Classic/Icon@2.5.0
                      Properties:
                        BorderColor: =RGBA(0, 18, 107, 1)
                        Color: |-
                          =If(
                              BtnIcnSec_3.DisplayMode = DisplayMode.Disabled,
                              ColorValue(dsaTokens.colorNeutral300),
                              ColorValue(dsaTokens.colorContrastLight)
                          )
                        DisplayMode: =DisplayMode.View
                        FocusedBorderThickness: =0
                        Height: =18
                        HoverColor: |-
                          =ColorValue(
                              dsaTokens.colorNeutral100
                          )
                        Icon: =Icon.Edit
                        PressedColor: =ColorFade(Self.Color, -40%)
                        Width: =18
                        X: =Parent.Width/2 - Self.Width/2
                        Y: =BtnIcnSec_3.Height /2 - Self.Height /2
                  - BtnIcnSec_3:
                      Control: Classic/Button@2.2.0
                      Properties:
                        BorderColor: |-
                          =ColorValue(
                          dsaTokens.colorAccentPrimary
                          )
                        Color: |-
                          =ColorValue(
                          dsaTokens.colorContrastLight
                          )
                        DisabledBorderColor: =RGBA(166, 166, 166, 1)
                        DisabledColor: |-
                          =ColorValue(
                          dsaTokens.colorNeutral200
                          )
                        DisabledFill: |-
                          =ColorValue(
                          dsaTokens.colorNeutral400
                          )
                        Fill: |-
                          =ColorValue(
                          "#ffffff00"
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
                          "#ffffff00"
                          )
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
                          "#ffffff00"
                          )
                        RadiusBottomLeft: =200
                        RadiusBottomRight: =200
                        RadiusTopLeft: =200
                        RadiusTopRight: =200
                        Size: =16
                        Text: =
                        Width: =Parent.Width
                        Y: '=0   '
            - BtnIcnPriDsa_3:
                Control: GroupContainer@1.3.0
                Variant: ManualLayout
                Properties:
                  AlignInContainer: =AlignInContainer.Center
                  DropShadow: =DropShadow.None
                  FillPortions: =0
                  Height: =40
                  RadiusBottomLeft: =200
                  RadiusBottomRight: =200
                  RadiusTopLeft: =200
                  RadiusTopRight: =200
                  Width: =40
                  X: =111
                  Y: =422
                Children:
                  - BtnIcnPri_3:
                      Control: Classic/Button@2.2.0
                      Properties:
                        BorderColor: |-
                          =ColorValue(
                          dsaTokens.colorAccentPrimary)
                        BorderThickness: =0
                        Color: |-
                          =ColorValue(
                          dsaTokens.colorContrastDark
                          )
                        DisabledBorderColor: =RGBA(166, 166, 166, 1)
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
                          dsaTokens.colorAccentPrimary
                          )
                        Font: =Font.'Open Sans'
                        Height: =Parent.Height
                        HoverBorderColor: |-
                          =ColorValue(
                          dsaTokens.colorAccentPrimaryHover
                          )
                        HoverColor: |-
                          =ColorValue(
                          dsaTokens.colorContrastDark
                          )
                        HoverFill: |-
                          =ColorValue(
                          dsaTokens.colorAccentPrimaryHover
                          )
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
                        RadiusBottomLeft: =200
                        RadiusBottomRight: =200
                        RadiusTopLeft: =200
                        RadiusTopRight: =200
                        Size: =16
                        Text: =
                        Tooltip: =
                        Width: =Parent.Width
                        Y: '=0   '
                  - iconPriBtn_3:
                      Control: Classic/Icon@2.5.0
                      Properties:
                        BorderColor: =RGBA(0, 18, 107, 1)
                        Color: |-
                          =If(
                              BtnIcnPri_3.DisplayMode = DisplayMode.Disabled,
                              ColorValue(dsaTokens.colorNeutral300),
                              ColorValue(dsaTokens.colorContrastDark)
                          )
                        DisplayMode: =DisplayMode.View
                        FocusedBorderThickness: =0
                        Height: =18
                        HoverColor: |-
                          =ColorValue(
                              dsaTokens.colorContrastDark
                          )
                        Icon: =Icon.Search
                        Width: =18
                        X: =Parent.Width/2 - Self.Width/2
                        Y: =BtnIcnPri_3.Height /2 - Self.Height /2
`

CardSmDsa.setAttribute("data-code", codeSnippet)

CardSmDsa.innerHTML =
`
<img class="CardThumbDsa" src=${preview} alt="Imagem Card para power apps" />
`

export default CardSmDsa