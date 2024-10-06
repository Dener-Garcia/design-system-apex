import "./cardSmDsa.css"
import preview from "/assets/components-preview/CardSmDsa.png"

const CardSmDsa = document.createElement("div")

const codeSnippet = `
- CardSmDsa:
    Control: GroupContainer
    Variant: verticalAutoLayoutContainer
    Properties:
      DropShadow: =DropShadow.None
      Fill: =ColorValue(dsaTokens.colorBgPrimary)
      Height: |+
        = cardSmtext.Height + cardSmAction.Height + cardSmTtitleAccent.Height + Self.PaddingBottom + Self.PaddingTop + Self.LayoutGap 




      LayoutDirection: =LayoutDirection.Vertical
      LayoutGap: =8
      LayoutMode: =LayoutMode.Auto
      PaddingBottom: =16
      PaddingLeft: =16
      PaddingRight: =16
      PaddingTop: =16
      RadiusBottomLeft: =8
      RadiusBottomRight: =8
      RadiusTopLeft: =8
      RadiusTopRight: =8
      Width: |+
        =180
      X: =60
      Y: =395
    Children:
    - cardSmTtitleAccent:
        Control: Label
        Properties:
          Text: ="Title"
          AutoHeight: =true
          Color: =ColorValue(dsaTokens.colorNeutral100)
          FontWeight: =FontWeight.Semibold
          PaddingBottom: =0
          PaddingLeft: =0
          PaddingRight: =0
          PaddingTop: =0
          Size: =dsaTokens.fontText
          Width: =Parent.Width - 32
    - cardSmtext:
        Control: Label
        Properties:
          Text: |-
            ="18/10/24
            "
          AutoHeight: =true
          Color: =ColorValue(dsaTokens.colorNeutral200)
          PaddingBottom: =0
          PaddingLeft: =0
          PaddingRight: =0
          PaddingTop: =0
          Size: =dsaTokens.fontLabel
          Width: =Parent.Width - 32
    - cardSmAction:
        Control: GroupContainer
        Variant: horizontalAutoLayoutContainer
        Properties:
          DropShadow: =DropShadow.None
          FillPortions: =0
          Height: |+
            =40
          LayoutAlignItems: =LayoutAlignItems.Center
          LayoutJustifyContent: =LayoutJustifyContent.SpaceBetween
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
        - BtnIcnPriDsa_3:
            Control: GroupContainer
            Variant: manualLayoutContainer
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
              X: =644
              Y: =293
            Children:
            - BtnIcnPri_3:
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
            - iconPriBtn_3:
                Control: Classic/Icon
                Variant: Add
                Properties:
                  Color: |-
                    =If(
                        BtnIcnPri_3.DisplayMode = DisplayMode.Disabled,
                        ColorValue(dsaTokens.colorNeutral300),
                        ColorValue(dsaTokens.colorContrastDark)
                    )
                  FocusedBorderThickness: =0
                  Height: =18
                  HoverColor: |-
                    =ColorValue(
                        dsaTokens.colorContrastDark
                    )
                  Icon: =Icon.Add
                  Width: =18
                  X: =Parent.Width/2 - Self.Width/2
                  Y: =BtnIcnPri_3.Height /2 - Self.Height /2
        - BtnIcnSecDsa_3:
            Control: GroupContainer
            Variant: manualLayoutContainer
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
              X: =852
              Y: =293
            Children:
            - BtnIcnSec_3:
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
            - IconSecBtn_3:
                Control: Classic/Icon
                Variant: Add
                Properties:
                  Color: |-
                    =If(
                        BtnIcnSec_3.DisplayMode = DisplayMode.Disabled,
                        ColorValue(dsaTokens.colorNeutral300),
                        ColorValue(dsaTokens.colorContrastLight)
                    )
                  FocusedBorderThickness: =0
                  Height: =18
                  HoverColor: |-
                    =ColorValue(
                        dsaTokens.colorNeutral100
                    )
                  Icon: =Icon.Search
                  PressedColor: =ColorFade(Self.Color, -40%)
                  Width: =18
                  X: =Parent.Width/2 - Self.Width/2
                  Y: =BtnIcnSec_3.Height /2 - Self.Height /2
        - BtnIcnTerDsa_3:
            Control: GroupContainer
            Variant: manualLayoutContainer
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
              X: =988
              Y: =293
            Children:
            - BtnTerSec_3:
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
            - IconTerBtn_3:
                Control: Classic/Icon
                Variant: Add
                Properties:
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
                  Y: =BtnTerSec_3.Height /2 - Self.Height /2
`

CardSmDsa.setAttribute("data-code", codeSnippet)

CardSmDsa.innerHTML =
`
<img class="CardThumbDsa" src=${preview} alt="Imagem Card para power apps" />
`

export default CardSmDsa