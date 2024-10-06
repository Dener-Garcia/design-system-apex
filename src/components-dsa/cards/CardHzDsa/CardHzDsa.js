import "./cardHzDsa.css"
import preview from "/assets/components-preview/CardHzDsa.png"

const CardHzDsa = document.createElement("div")

const codeSnippet = `
- CardHzDsa:
    Control: GroupContainer
    Variant: verticalAutoLayoutContainer
    Properties:
      DropShadow: =DropShadow.None
      Height: |+
        =Title.Height + Text.Height + cardHorizontalDivisor.Height + 40
      LayoutDirection: =LayoutDirection.Vertical
      LayoutGap: =8
      LayoutMode: =LayoutMode.Auto
      RadiusBottomLeft: =0
      RadiusBottomRight: =0
      RadiusTopLeft: =0
      RadiusTopRight: =0
      Width: =878
      X: '=0   '
      Y: =588
    Children:
    - TitleBadge:
        Control: GroupContainer
        Variant: horizontalAutoLayoutContainer
        Properties:
          DropShadow: =DropShadow.None
          FillPortions: =0
          Height: |+
            =Title.Height
          LayoutMode: =LayoutMode.Auto
          RadiusBottomLeft: =0
          RadiusBottomRight: =0
          RadiusTopLeft: =0
          RadiusTopRight: =0
        Children:
        - Title:
            Control: Label
            Properties:
              Text: ="Main Title"
              AutoHeight: =true
              Color: =ColorValue(dsaTokens.colorAccentPrimaryHover)
              FillPortions: =1
              FontWeight: =FontWeight.Semibold
              LayoutMinWidth: =0
              PaddingBottom: =0
              PaddingLeft: =0
              PaddingRight: =0
              PaddingTop: =0
              Size: =dsaTokens.fontText
              Width: =Parent.Width
              Wrap: =false
        - Badge_1:
            Control: GroupContainer
            Variant: horizontalAutoLayoutContainer
            Properties:
              BorderColor: |-
                =ColorValue(
                dsaTokens.colorNeutral500
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
              Height: =Parent.Height
              LayoutAlignItems: =LayoutAlignItems.Center
              LayoutJustifyContent: =LayoutJustifyContent.Center
              LayoutMinHeight: =0
              LayoutMode: =LayoutMode.Auto
              Width: =BtnIcnPriDsa_2.Width + BtnIcnSecDsa_2.Width + BtnIcnTerDsa_2.Width + actionCardHzContainer.LayoutGap * 3
              X: =583
              Y: =344
            Children:
            - LabelBadge_1:
                Control: Label
                Properties:
                  Text: =dsaBadgeLabel
                  Align: =Align.Center
                  Color: |-
                    =ColorValue(
                    dsaTokens.colorNeutral200
                    )
                  DisplayMode: =DisplayMode.View
                  Height: =Parent.Height
                  PaddingBottom: =0
                  PaddingLeft: =0
                  PaddingRight: =0
                  PaddingTop: =0
                  Size: =dsaTokens.fontSmallLabel
                  Width: =Parent.Width
                  Wrap: =false
    - content-container:
        Control: GroupContainer
        Variant: horizontalAutoLayoutContainer
        Properties:
          DropShadow: =DropShadow.None
          Height: |+
            =200


          LayoutMinHeight: =0
          LayoutMinWidth: =0
          LayoutMode: =LayoutMode.Auto
          RadiusBottomLeft: =0
          RadiusBottomRight: =0
          RadiusTopLeft: =0
          RadiusTopRight: =0
        Children:
        - content:
            Control: GroupContainer
            Variant: horizontalAutoLayoutContainer
            Properties:
              AlignInContainer: =AlignInContainer.Start
              DropShadow: =DropShadow.None
              Height: =Parent.Height
              LayoutMinHeight: =0
              LayoutMinWidth: =0
              LayoutMode: =LayoutMode.Auto
              RadiusBottomLeft: =0
              RadiusBottomRight: =0
              RadiusTopLeft: =0
              RadiusTopRight: =0
              Visible: =If(App.Width < 578, false, true)
              Width: =Parent.Width
            Children:
            - SubTitle:
                Control: Label
                Properties:
                  Text: ="Sub Title"
                  AlignInContainer: =AlignInContainer.Start
                  FillPortions: =1
                  Height: =Parent.Height
                  LayoutMinWidth: =0
                  PaddingBottom: =0
                  PaddingLeft: =0
                  PaddingRight: =8
                  PaddingTop: =0
                  Size: =dsaTokens.fontLabel
                  VerticalAlign: =VerticalAlign.Top
                  Width: =Parent.Width
            - cardDivisor:
                Control: Rectangle
                Properties:
                  AlignInContainer: =AlignInContainer.Center
                  DisplayMode: =DisplayMode.View
                  Height: =16
                  Width: '=2   '
            - Text:
                Control: Label
                Properties:
                  Text: ="Text description for your long textText description for your long textText description for your long textText description for your long text"
                  AlignInContainer: =AlignInContainer.Center
                  AutoHeight: =true
                  FillPortions: =1
                  Height: =Parent.Height
                  LayoutMinWidth: =0
                  PaddingBottom: =0
                  PaddingLeft: =16
                  PaddingRight: =8
                  PaddingTop: =0
                  Size: =dsaTokens.fontSmallLabel
                  Width: =Parent.Width
        - action:
            Control: GroupContainer
            Variant: horizontalAutoLayoutContainer
            Properties:
              DropShadow: =DropShadow.None
              FillPortions: =0
              Height: =Parent.Height
              LayoutAlignItems: =LayoutAlignItems.End
              LayoutJustifyContent: =LayoutJustifyContent.End
              LayoutMinHeight: =0
              LayoutMinWidth: =0
              LayoutMode: =LayoutMode.Auto
              RadiusBottomLeft: =0
              RadiusBottomRight: =0
              RadiusTopLeft: =0
              RadiusTopRight: =0
              Width: =BtnIcnPriDsa_2.Width + BtnIcnSecDsa_2.Width + BtnIcnTerDsa_2.Width + actionCardHzContainer.LayoutGap * 3
            Children:
            - actionCardHzContainer:
                Control: GroupContainer
                Variant: horizontalAutoLayoutContainer
                Properties:
                  AlignInContainer: =AlignInContainer.Center
                  DropShadow: =DropShadow.None
                  FillPortions: =0
                  Height: =BtnIcnPriDsa.Height
                  LayoutAlignItems: =LayoutAlignItems.Center
                  LayoutGap: =16
                  LayoutJustifyContent: =LayoutJustifyContent.End
                  LayoutMinHeight: =0
                  LayoutMinWidth: =0
                  LayoutMode: =LayoutMode.Auto
                  RadiusBottomLeft: =0
                  RadiusBottomRight: =0
                  RadiusTopLeft: =0
                  RadiusTopRight: =0
                  Width: =Parent.Width
                  X: =300
                  Y: =468
                Children:
                - BtnIcnPriDsa_2:
                    Control: GroupContainer
                    Variant: manualLayoutContainer
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
                    - BtnIcnPri_2:
                        Control: Classic/Button
                        Properties:
                          Text: =
                          Tooltip: =
                          BorderColor: |-
                            =ColorValue(
                            dsaTokens.colorAccentPrimary)
                          BorderThickness: =0
                          Color: |-
                            =ColorValue(
                            dsaTokens.colorContrastDark
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
                            dsaTokens.colorAccentPrimary
                            )
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
                          Width: =Parent.Width
                          Y: '=0   '
                    - iconPriBtn_2:
                        Control: Classic/Icon
                        Variant: Add
                        Properties:
                          Color: |-
                            =If(
                                BtnIcnPri_2.DisplayMode = DisplayMode.Disabled,
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
                          Y: =BtnIcnPri_2.Height /2 - Self.Height /2
                - BtnIcnSecDsa_2:
                    Control: GroupContainer
                    Variant: manualLayoutContainer
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
                    - BtnIcnSec_2:
                        Control: Classic/Button
                        Properties:
                          Text: =
                          BorderColor: |-
                            =ColorValue(
                              dsaTokens.colorAccentPrimary)
                          BorderThickness: =0
                          Color: |-
                            =ColorValue(
                            dsaTokens.colorContrastLight
                            )
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
                          Width: =Parent.Width
                          Y: '=0   '
                    - IconSecBtn_2:
                        Control: Classic/Icon
                        Variant: Add
                        Properties:
                          Color: |-
                            =If(
                                BtnIcnSec_2.DisplayMode = DisplayMode.Disabled,
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
                          Y: =BtnIcnSec_2.Height /2 - Self.Height /2
                - BtnIcnTerDsa_2:
                    Control: GroupContainer
                    Variant: manualLayoutContainer
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
                    - BtnTerSec_2:
                        Control: Classic/Button
                        Properties:
                          Text: =
                          BorderColor: |-
                            =ColorValue(
                            dsaTokens.colorAccentPrimary)
                          BorderThickness: =0
                          Color: |-
                            =ColorValue(
                            dsaTokens.colorAccentPrimary
                            )
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
                          Width: =Parent.Width
                          Y: '=0   '
                    - IconTerBtn_2:
                        Control: Classic/Icon
                        Variant: Add
                        Properties:
                          Color: |-
                            =If(
                                BtnTerSec_2.DisplayMode = DisplayMode.Disabled,
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
                          Y: =BtnTerSec_2.Height /2 - Self.Height /2
    - cardHorizontalDivisor:
        Control: Rectangle
        Properties:
          Fill: =ColorValue(dsaTokens.colorNeutral400)
          Height: '=2   '
          Width: =Parent.Width

`

CardHzDsa.setAttribute("data-code", codeSnippet)

CardHzDsa.innerHTML =
`
<img class="CardHzDsa" src=${preview} alt="Imagem Card para power apps" />
`

export default CardHzDsa