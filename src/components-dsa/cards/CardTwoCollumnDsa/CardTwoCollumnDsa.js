import "./CardTwoCollumnDsa.css"
import preview from "/assets/components-preview/CardTwoCollumnDsa.png"

const CardTwoCollumnDsa = document.createElement("div")

const codeSnippet = `- CardTwoCollumnDsa:
    Control: GroupContainer@1.3.0
    Variant: AutoLayout
    Properties:
      DropShadow: =DropShadow.None
      Fill: =ColorValue(dsaTokens.colorBgPrimary)
      Height: =cardhTwoColHeaderContainer.Height+horizontalContent.Height+helperContent.Height+cardTwoColSmAction.Height+Self.LayoutGap*3+Self.PaddingBottom*2
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
        =If(App.Width < 768, Parent.Width, 350   )
      X: =42
      Y: =104
    Children:
      - cardhTwoColHeaderContainer:
          Control: GroupContainer@1.3.0
          Variant: AutoLayout
          Properties:
            DropShadow: =DropShadow.None
            FillPortions: =0
            Height: |-
              =If(cardSmTtitleAccent_5.Height > badgeCardTwoCollumn_3.Height,
              cardSmTtitleAccent_5.Height, badgeCardTwoCollumn_3.Height + 4)
            LayoutDirection: =LayoutDirection.Horizontal
            LayoutGap: =16
            LayoutMinHeight: =cardSmTtitleAccent_5.Height + 4
            PaddingBottom: =2
            PaddingRight: =2
            PaddingTop: =2
          Children:
            - cardSmTtitleAccent_5:
                Control: Label@2.5.1
                Properties:
                  AutoHeight: =true
                  BorderColor: =RGBA(0, 18, 107, 1)
                  Color: =ColorValue(dsaTokens.colorNeutral100)
                  FillPortions: =1
                  Font: =Font.'Open Sans'
                  FontWeight: =FontWeight.Semibold
                  Height: =0
                  LayoutMinHeight: =0
                  PaddingBottom: =0
                  PaddingLeft: =0
                  PaddingRight: =0
                  PaddingTop: =0
                  Size: =dsaTokens.fontText
                  Text: ="Title card Title"
                  Width: =Parent.Width - 32
            - badgeCardTwoCollumn_3:
                Control: GroupContainer@1.3.0
                Variant: AutoLayout
                Properties:
                  AlignInContainer: =AlignInContainer.SetByContainer
                  BorderColor: |-
                    =ColorValue(
                        If( dsaBadgeType = "info", dsaTokens.colorFeedbackInfoAccent,
                         dsaBadgeType = "error", dsaTokens.colorFeedbackErrorAccent,
                         dsaBadgeType = "warning", dsaTokens.colorFeedbackWarningAccent,
                         dsaBadgeType = "success", dsaTokens.colorFeedbackSuccessAccent
                         )
                    )
                  BorderThickness: =2
                  DropShadow: =DropShadow.None
                  Fill: |-
                    =ColorValue(
                        If( dsaBadgeType = "info", dsaTokens.colorFeedbackInfo,
                         dsaBadgeType = "error", dsaTokens.colorFeedbackError,
                         dsaBadgeType = "warning", dsaTokens.colorFeedbackWarning,
                         dsaBadgeType = "success", dsaTokens.colorFeedbackSuccess
                         )
                    )
                  FillPortions: =0
                  Height: '=28  '
                  LayoutAlignItems: =LayoutAlignItems.Center
                  LayoutDirection: =LayoutDirection.Horizontal
                  LayoutJustifyContent: =LayoutJustifyContent.Center
                  LayoutMinHeight: =0
                  LayoutMinWidth: =180
                  RadiusBottomLeft: =8
                  RadiusBottomRight: =8
                  RadiusTopLeft: =8
                  RadiusTopRight: =8
                  Width: =120
                  X: =583
                  Y: =344
                Children:
                  - LabelBadge_15:
                      Control: Label@2.5.1
                      Properties:
                        Align: =Align.Center
                        BorderColor: =RGBA(0, 18, 107, 1)
                        Color: |-
                          =ColorValue(
                          dsaTokens.colorNeutral100
                          )
                        DisplayMode: =DisplayMode.View
                        Font: =Font.'Open Sans'
                        Height: =Parent.Height
                        PaddingBottom: =0
                        PaddingLeft: =0
                        PaddingRight: =0
                        PaddingTop: =0
                        Size: =dsaTokens.fontSmallLabel
                        Text: =dsaBadgeLabel
                        Width: =Parent.Width
                        Wrap: =false
      - horizontalContent:
          Control: GroupContainer@1.3.0
          Variant: AutoLayout
          Properties:
            DropShadow: =DropShadow.None
            FillPortions: =0
            Height: =If(hzContentLabel2_3.Height > hzSecContentLabel2_3.Height,hzContentLabel1_3.Height + hzContentLabel2_3.Height + 4,hzSecContentLabel1_3.Height + hzSecContentLabel2_3.Height + 4)
            LayoutDirection: =LayoutDirection.Horizontal
            LayoutGap: =16
            LayoutMinHeight: =
            RadiusBottomLeft: =0
            RadiusBottomRight: =0
            RadiusTopLeft: =0
            RadiusTopRight: =0
          Children:
            - firstHzContent_3:
                Control: GroupContainer@1.3.0
                Variant: AutoLayout
                Properties:
                  DropShadow: =DropShadow.None
                  LayoutAlignItems: =LayoutAlignItems.Stretch
                  LayoutDirection: =LayoutDirection.Vertical
                  LayoutGap: =4
                  LayoutMinHeight: =0
                  LayoutMinWidth: =0
                  RadiusBottomLeft: =0
                  RadiusBottomRight: =0
                  RadiusTopLeft: =0
                  RadiusTopRight: =0
                Children:
                  - hzContentLabel1_3:
                      Control: Label@2.5.1
                      Properties:
                        AutoHeight: =true
                        BorderColor: =RGBA(0, 18, 107, 1)
                        Color: =ColorValue(dsaTokens.colorContrastLight)
                        Font: =Font.'Open Sans'
                        FontWeight: =FontWeight.Semibold
                        Height: =0
                        PaddingBottom: =0
                        PaddingLeft: =0
                        PaddingRight: =0
                        PaddingTop: =0
                        Size: =dsaTokens.fontSmallLabel
                        Text: ="Label Left"
                  - hzContentLabel2_3:
                      Control: Label@2.5.1
                      Properties:
                        AutoHeight: =true
                        BorderColor: =RGBA(0, 18, 107, 1)
                        Color: =ColorValue(dsaTokens.colorNeutral200)
                        Font: =Font.'Open Sans'
                        Height: =0
                        PaddingBottom: =0
                        PaddingLeft: =0
                        PaddingRight: =0
                        PaddingTop: =0
                        Size: =dsaTokens.fontLabel
                        Text: ="short text left."
            - secondtHzContent_3:
                Control: GroupContainer@1.3.0
                Variant: AutoLayout
                Properties:
                  DropShadow: =DropShadow.None
                  LayoutAlignItems: =LayoutAlignItems.Stretch
                  LayoutDirection: =LayoutDirection.Vertical
                  LayoutGap: =4
                  LayoutMinHeight: =0
                  LayoutMinWidth: =0
                  RadiusBottomLeft: =0
                  RadiusBottomRight: =0
                  RadiusTopLeft: =0
                  RadiusTopRight: =0
                Children:
                  - hzSecContentLabel1_3:
                      Control: Label@2.5.1
                      Properties:
                        AutoHeight: =true
                        BorderColor: =RGBA(0, 18, 107, 1)
                        Color: =ColorValue(dsaTokens.colorContrastLight)
                        Font: =Font.'Open Sans'
                        FontWeight: =FontWeight.Semibold
                        Height: =0
                        LayoutMinHeight: =0
                        PaddingBottom: =0
                        PaddingLeft: =0
                        PaddingRight: =0
                        PaddingTop: =0
                        Size: =dsaTokens.fontSmallLabel
                        Text: ="Label Right"
                  - hzSecContentLabel2_3:
                      Control: Label@2.5.1
                      Properties:
                        AutoHeight: =true
                        BorderColor: =RGBA(0, 18, 107, 1)
                        Color: =ColorValue(dsaTokens.colorNeutral200)
                        Font: =Font.'Open Sans'
                        Height: =0
                        LayoutMinHeight: =0
                        PaddingBottom: =0
                        PaddingLeft: =0
                        PaddingRight: =0
                        PaddingTop: =0
                        Size: =dsaTokens.fontLabel
                        Text: ="short text left."
      - helperContent:
          Control: GroupContainer@1.3.0
          Variant: AutoLayout
          Properties:
            DropShadow: =DropShadow.None
            FillPortions: =0
            Height: =helperText1_3.Height + helperText2_3.Height + Self.LayoutGap
            LayoutAlignItems: =LayoutAlignItems.Stretch
            LayoutDirection: =LayoutDirection.Vertical
            LayoutGap: =4
            LayoutMinHeight: =0
            LayoutMinWidth: =0
            RadiusBottomLeft: =0
            RadiusBottomRight: =0
            RadiusTopLeft: =0
            RadiusTopRight: =0
          Children:
            - helperText1_3:
                Control: Label@2.5.1
                Properties:
                  AutoHeight: =true
                  BorderColor: =RGBA(0, 18, 107, 1)
                  Color: =ColorValue(dsaTokens.colorContrastLight)
                  Font: =Font.'Open Sans'
                  FontWeight: =FontWeight.Semibold
                  Height: =0
                  LayoutMinWidth: =0
                  PaddingBottom: =0
                  PaddingLeft: =0
                  PaddingRight: =0
                  PaddingTop: =0
                  Size: =dsaTokens.fontSmallLabel
                  Text: ="label Accent"
            - helperText2_3:
                Control: Label@2.5.1
                Properties:
                  AutoHeight: =true
                  BorderColor: =RGBA(0, 18, 107, 1)
                  Color: =ColorValue(dsaTokens.colorNeutral200)
                  Font: =Font.'Open Sans'
                  Height: =0
                  LayoutMinWidth: =0
                  PaddingBottom: =0
                  PaddingLeft: =0
                  PaddingRight: =0
                  PaddingTop: =0
                  Size: =dsaTokens.fontLabel
                  Text: ="Long text for your card with helper."
      - cardTwoColSmAction:
          Control: GroupContainer@1.3.0
          Variant: AutoLayout
          Properties:
            DropShadow: =DropShadow.None
            FillPortions: =0
            Height: |
              =40
            LayoutAlignItems: =LayoutAlignItems.Center
            LayoutDirection: =LayoutDirection.Horizontal
            LayoutGap: =24
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
            - BtnIcnTerDsa_1:
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
                  X: =527
                  Y: =422
                Children:
                  - IconTerBtn_1:
                      Control: Classic/Icon@2.5.0
                      Properties:
                        BorderColor: =RGBA(0, 18, 107, 1)
                        Color: |-
                          =If(
                              BtnTerSec_1.DisplayMode = DisplayMode.Disabled,
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
                        Y: =BtnTerSec_1.Height /2 - Self.Height /2
                  - BtnTerSec_1:
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
            - BtnIcnSecDsa_1:
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
                  X: =312
                  Y: =422
                Children:
                  - IconSecBtn_1:
                      Control: Classic/Icon@2.5.0
                      Properties:
                        BorderColor: =RGBA(0, 18, 107, 1)
                        Color: |-
                          =If(
                              BtnIcnSec_1.DisplayMode = DisplayMode.Disabled,
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
                        Y: =BtnIcnSec_1.Height /2 - Self.Height /2
                  - BtnIcnSec_1:
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
            - BtnIcnPriDsa_1:
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
                  - BtnIcnPri_1:
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
                  - iconPriBtn_1:
                      Control: Classic/Icon@2.5.0
                      Properties:
                        BorderColor: =RGBA(0, 18, 107, 1)
                        Color: |-
                          =If(
                              BtnIcnPri_1.DisplayMode = DisplayMode.Disabled,
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
                        Y: =BtnIcnPri_1.Height /2 - Self.Height /2

`

CardTwoCollumnDsa.setAttribute("data-code", codeSnippet)

CardTwoCollumnDsa.innerHTML =
`
<img class="CardTwoCollumnDsa" src=${preview} alt="Imagem Card para power apps" />
`

export default CardTwoCollumnDsa