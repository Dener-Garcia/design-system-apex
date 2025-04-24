import preview from "/assets/components-preview/galleryCardSmallDsa.png"
const GalleryCardSmDsa = document.createElement("div")

const codeSnipped = 
`- GalleryCardSmDsa:
    Control: Gallery@2.15.0
    Variant: Vertical
    Properties:
      BorderColor: =RGBA(0, 18, 107, 1)
      Items: =StarWarsCharacters
      LayoutMinHeight: =0
      LayoutMinWidth: =0
      ShowScrollbar: =false
      TemplatePadding: =0
      TemplateSize: =CardSmDsa_1.Height + 24
      WrapCount: |-
        =Switch(
            true,
            App.Width < 768, 1,
            App.Width < 1280, 3,     
            App.Width < 1600, 5,
            App.Width > 1600, 8  
        )
    Children:
      - CardSmDsa_1:
          Control: GroupContainer@1.3.0
          Variant: AutoLayout
          Properties:
            DropShadow: =DropShadow.None
            Fill: =ColorValue(dsaTokens.colorBgPrimary)
            Height: = cardSmtext_1.Height + cardSmAction_1.Height + cardSmTtitleAccent_1.Height + Self.PaddingBottom + Self.PaddingTop + Self.LayoutGap
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
            Width: |
              =If(App.Width < 768, Parent.Width, 200)
            X: '=0 '
          Children:
            - cardSmTtitleAccent_1:
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
            - cardSmtext_1:
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
                    ="18/10/24
                    "
                  Width: =Parent.Width - 32
            - cardSmAction_1:
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
                  - BtnIcnPriDsa_5:
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
                        X: =644
                        Y: =293
                      Children:
                        - BtnIcnPri_5:
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
                        - iconPriBtn_5:
                            Control: Classic/Icon@2.5.0
                            Properties:
                              BorderColor: =RGBA(0, 18, 107, 1)
                              Color: |-
                                =If(
                                    BtnIcnPri_5.DisplayMode = DisplayMode.Disabled,
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
                              Y: =BtnIcnPri_5.Height /2 - Self.Height /2
                  - BtnIcnSecDsa_5:
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
                        X: =852
                        Y: =293
                      Children:
                        - BtnIcnSec_5:
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
                        - IconSecBtn_5:
                            Control: Classic/Icon@2.5.0
                            Properties:
                              BorderColor: =RGBA(0, 18, 107, 1)
                              Color: |-
                                =If(
                                    BtnIcnSec_5.DisplayMode = DisplayMode.Disabled,
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
                              Y: =BtnIcnSec_5.Height /2 - Self.Height /2
                  - BtnIcnTerDsa_5:
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
                        X: =988
                        Y: =293
                      Children:
                        - BtnTerSec_5:
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
                        - IconTerBtn_5:
                            Control: Classic/Icon@2.5.0
                            Properties:
                              BorderColor: =RGBA(0, 18, 107, 1)
                              Color: |-
                                =If(
                                    BtnTerSec_5.DisplayMode = DisplayMode.Disabled,
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
                              Y: =BtnTerSec_5.Height /2 - Self.Height /2

`


GalleryCardSmDsa.setAttribute('data-code', codeSnipped)

GalleryCardSmDsa.innerHTML = `
<img style="width: 100%" src=${preview} alt="Galeria com cards horozintal design system">
`

export default GalleryCardSmDsa