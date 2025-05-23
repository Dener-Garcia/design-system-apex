import preview from "/assets/components-preview/galleryCardHzDsa.png"

const GalleryCardHzDsa = document.createElement("div")

const codeSnipped = `- GalleryCardHzDsa:
    Control: Gallery@2.15.0
    Variant: VariableHeight
    Properties:
      BorderColor: =RGBA(0, 18, 107, 1)
      Items: =StarWarsCharacters
      ShowScrollbar: =false
      TemplatePadding: =8
    Children:
      - CardHzDsa_1:
          Control: GroupContainer@1.3.0
          Variant: AutoLayout
          Properties:
            DropShadow: =DropShadow.None
            Height: |
              =Title_1.Height + Text_1.Height + cardHorizontalDivisor_1.Height + 40
            LayoutDirection: =LayoutDirection.Vertical
            LayoutGap: =8
            RadiusBottomLeft: =0
            RadiusBottomRight: =0
            RadiusTopLeft: =0
            RadiusTopRight: =0
            Width: =Parent.Width - Parent.TemplatePadding * 3
            X: '=0   '
          Children:
            - TitleBadge_1:
                Control: GroupContainer@1.3.0
                Variant: AutoLayout
                Properties:
                  DropShadow: =DropShadow.None
                  FillPortions: =0
                  Height: |
                    =Title_1.Height
                  LayoutAlignItems: =LayoutAlignItems.Center
                  LayoutDirection: =LayoutDirection.Horizontal
                  PaddingRight: =2
                  RadiusBottomLeft: =0
                  RadiusBottomRight: =0
                  RadiusTopLeft: =0
                  RadiusTopRight: =0
                Children:
                  - Title_1:
                      Control: Label@2.5.1
                      Properties:
                        AutoHeight: =true
                        BorderColor: =RGBA(0, 18, 107, 1)
                        Color: =ColorValue(dsaTokens.colorAccentPrimaryHover)
                        FillPortions: =1
                        Font: =Font.'Open Sans'
                        FontWeight: =FontWeight.Semibold
                        LayoutMinWidth: =0
                        PaddingBottom: =0
                        PaddingLeft: =0
                        PaddingRight: =0
                        PaddingTop: =0
                        Size: =dsaTokens.fontText
                        Text: ="Main Title"
                        Width: =Parent.Width
                        Wrap: =false
                  - BadgeDsa_3:
                      Control: GroupContainer@1.3.0
                      Variant: AutoLayout
                      Properties:
                        AlignInContainer: =AlignInContainer.Center
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
                        Height: =26
                        LayoutAlignItems: =LayoutAlignItems.Center
                        LayoutDirection: =LayoutDirection.Horizontal
                        LayoutJustifyContent: =LayoutJustifyContent.Center
                        LayoutMinHeight: =0
                        LayoutMinWidth: =180
                        RadiusBottomLeft: =8
                        RadiusBottomRight: =8
                        RadiusTopLeft: =8
                        RadiusTopRight: =8
                        Width: =actionCardHzContainer_1.Width
                        X: =583
                        Y: =344
                      Children:
                        - LabelBadge_5:
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
            - content-container_1:
                Control: GroupContainer@1.3.0
                Variant: AutoLayout
                Properties:
                  DropShadow: =DropShadow.None
                  Height: |+
                    =200


                  LayoutDirection: =LayoutDirection.Horizontal
                  LayoutMinHeight: =0
                  LayoutMinWidth: =0
                  RadiusBottomLeft: =0
                  RadiusBottomRight: =0
                  RadiusTopLeft: =0
                  RadiusTopRight: =0
                Children:
                  - content_1:
                      Control: GroupContainer@1.3.0
                      Variant: AutoLayout
                      Properties:
                        AlignInContainer: =AlignInContainer.Start
                        DropShadow: =DropShadow.None
                        Height: =Parent.Height
                        LayoutDirection: =LayoutDirection.Horizontal
                        LayoutMinHeight: =0
                        LayoutMinWidth: =0
                        RadiusBottomLeft: =0
                        RadiusBottomRight: =0
                        RadiusTopLeft: =0
                        RadiusTopRight: =0
                        Visible: =If(App.Width < 578, false, true)
                        Width: =Parent.Width
                      Children:
                        - SubTitle_1:
                            Control: Label@2.5.1
                            Properties:
                              AlignInContainer: =AlignInContainer.Start
                              BorderColor: =RGBA(0, 18, 107, 1)
                              FillPortions: =1
                              Font: =Font.'Open Sans'
                              Height: =Parent.Height
                              LayoutMinWidth: =0
                              PaddingBottom: =0
                              PaddingLeft: =0
                              PaddingRight: =8
                              PaddingTop: =0
                              Size: =dsaTokens.fontLabel
                              Text: ="Sub Title"
                              VerticalAlign: =VerticalAlign.Top
                              Width: =Parent.Width
                        - cardDivisor_1:
                            Control: Rectangle@2.3.0
                            Properties:
                              AlignInContainer: =AlignInContainer.Center
                              BorderColor: =RGBA(0, 18, 107, 1)
                              DisplayMode: =DisplayMode.View
                              Fill: =RGBA(56, 96, 178, 1)
                              Height: =16
                              Width: '=2   '
                        - Text_1:
                            Control: Label@2.5.1
                            Properties:
                              AlignInContainer: =AlignInContainer.Start
                              AutoHeight: =true
                              BorderColor: =RGBA(0, 18, 107, 1)
                              FillPortions: =1
                              Font: =Font.'Open Sans'
                              Height: =Parent.Height
                              LayoutMinWidth: =0
                              PaddingBottom: =0
                              PaddingLeft: =16
                              PaddingRight: =8
                              PaddingTop: =0
                              Size: =dsaTokens.fontSmallLabel
                              Text: ="Text description for your long textText description for your long textText description for your long textText description for your long text"
                              Width: =Parent.Width
                  - action_1:
                      Control: GroupContainer@1.3.0
                      Variant: AutoLayout
                      Properties:
                        DropShadow: =DropShadow.None
                        FillPortions: =0
                        Height: =Parent.Height
                        LayoutAlignItems: =LayoutAlignItems.End
                        LayoutDirection: =LayoutDirection.Horizontal
                        LayoutJustifyContent: =LayoutJustifyContent.End
                        LayoutMinHeight: =0
                        LayoutMinWidth: =0
                        RadiusBottomLeft: =0
                        RadiusBottomRight: =0
                        RadiusTopLeft: =0
                        RadiusTopRight: =0
                        Width: =BtnIcnPriDsa_4.Width + BtnIcnSecDsa_4.Width + BtnIcnTerDsa_4.Width + actionCardHzContainer_1.LayoutGap * 3
                      Children:
                        - actionCardHzContainer_1:
                            Control: GroupContainer@1.3.0
                            Variant: AutoLayout
                            Properties:
                              AlignInContainer: =AlignInContainer.Center
                              DropShadow: =DropShadow.None
                              FillPortions: =0
                              Height: =40
                              LayoutAlignItems: =LayoutAlignItems.Center
                              LayoutDirection: =LayoutDirection.Horizontal
                              LayoutGap: =16
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
                              - BtnIcnPriDsa_4:
                                  Control: GroupContainer@1.3.0
                                  Variant: ManualLayout
                                  Properties:
                                    AlignInContainer: =AlignInContainer.Start
                                    DropShadow: =DropShadow.None
                                    FillPortions: =0
                                    Height: =40
                                    RadiusBottomLeft: =200
                                    RadiusBottomRight: =200
                                    RadiusTopLeft: =200
                                    RadiusTopRight: =200
                                    Width: =40
                                    X: =162
                                    Y: =298
                                  Children:
                                    - BtnIcnPri_4:
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
                                    - iconPriBtn_4:
                                        Control: Classic/Icon@2.5.0
                                        Properties:
                                          BorderColor: =RGBA(0, 18, 107, 1)
                                          Color: |-
                                            =If(
                                                BtnIcnPri_4.DisplayMode = DisplayMode.Disabled,
                                                ColorValue(dsaTokens.colorNeutral300),
                                                ColorValue(dsaTokens.colorContrastDark)
                                            )
                                          FocusedBorderThickness: =0
                                          Height: =18
                                          HoverColor: |-
                                            =ColorValue(
                                                dsaTokens.colorContrastDark
                                            )
                                          Icon: =Icon.Search
                                          Width: =18
                                          X: =Parent.Width/2 - Self.Width/2
                                          Y: =BtnIcnPri_4.Height /2 - Self.Height /2
                              - BtnIcnSecDsa_4:
                                  Control: GroupContainer@1.3.0
                                  Variant: ManualLayout
                                  Properties:
                                    AlignInContainer: =AlignInContainer.Start
                                    DropShadow: =DropShadow.None
                                    FillPortions: =0
                                    Height: =40
                                    RadiusBottomLeft: =200
                                    RadiusBottomRight: =200
                                    RadiusTopLeft: =200
                                    RadiusTopRight: =200
                                    Width: =40
                                    X: =208
                                    Y: =298
                                  Children:
                                    - BtnIcnSec_4:
                                        Control: Classic/Button@2.2.0
                                        Properties:
                                          BorderColor: |-
                                            =ColorValue(
                                              dsaTokens.colorAccentPrimary)
                                          BorderThickness: =0
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
                                            dsaTokens.colorAccentSecondary
                                            )
                                          Font: =Font.'Open Sans'
                                          Height: =Parent.Height
                                          HoverBorderColor: |-
                                            =ColorValue(
                                            dsaTokens.colorAccentSecondaryHover
                                            )
                                          HoverColor: |-
                                            =ColorValue(
                                            dsaTokens.colorContrastDark
                                            )
                                          HoverFill: |-
                                            =ColorValue(
                                            dsaTokens.colorAccentSecondaryHover
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
                                            dsaTokens.colorAccentSecondary
                                            )
                                          RadiusBottomLeft: =200
                                          RadiusBottomRight: =200
                                          RadiusTopLeft: =200
                                          RadiusTopRight: =200
                                          Size: =16
                                          Text: =
                                          Width: =Parent.Width
                                          Y: '=0   '
                                    - IconSecBtn_4:
                                        Control: Classic/Icon@2.5.0
                                        Properties:
                                          BorderColor: =RGBA(0, 18, 107, 1)
                                          Color: |-
                                            =If(
                                                BtnIcnSec_4.DisplayMode = DisplayMode.Disabled,
                                                ColorValue(dsaTokens.colorNeutral300),
                                                ColorValue(dsaTokens.colorContrastLight)
                                            )
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
                                          Y: =BtnIcnSec_4.Height /2 - Self.Height /2
                              - BtnIcnTerDsa_4:
                                  Control: GroupContainer@1.3.0
                                  Variant: ManualLayout
                                  Properties:
                                    AlignInContainer: =AlignInContainer.Start
                                    DropShadow: =DropShadow.None
                                    FillPortions: =0
                                    Height: =40
                                    RadiusBottomLeft: =200
                                    RadiusBottomRight: =200
                                    RadiusTopLeft: =200
                                    RadiusTopRight: =200
                                    Width: =40
                                    X: =417
                                    Y: =298
                                  Children:
                                    - BtnTerSec_4:
                                        Control: Classic/Button@2.2.0
                                        Properties:
                                          BorderColor: |-
                                            =ColorValue(
                                            dsaTokens.colorAccentPrimary)
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
                                          HoverBorderColor: |-
                                            =ColorValue(
                                            dsaTokens.colorAccentSecondaryHover
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
                                    - IconTerBtn_4:
                                        Control: Classic/Icon@2.5.0
                                        Properties:
                                          BorderColor: =RGBA(0, 18, 107, 1)
                                          Color: |-
                                            =If(
                                                BtnTerSec_4.DisplayMode = DisplayMode.Disabled,
                                                ColorValue(dsaTokens.colorNeutral300),
                                                ColorValue(dsaTokens.colorAccentPrimary)
                                            )
                                          FocusedBorderThickness: =0
                                          Height: =18
                                          HoverColor: |-
                                            =ColorValue(
                                                dsaTokens.colorAccentPrimary
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
                                          Y: =BtnTerSec_4.Height /2 - Self.Height /2
            - cardHorizontalDivisor_1:
                Control: Rectangle@2.3.0
                Properties:
                  BorderColor: =RGBA(0, 18, 107, 1)
                  Fill: =ColorValue(dsaTokens.colorNeutral400)
                  Height: '=2   '
                  Width: =Parent.Width

`

GalleryCardHzDsa.setAttribute('data-code', codeSnipped)

GalleryCardHzDsa.innerHTML = `
<img style="width: 100%" src=${preview} alt="Galeria com cards horozintal design system">
`

export default GalleryCardHzDsa