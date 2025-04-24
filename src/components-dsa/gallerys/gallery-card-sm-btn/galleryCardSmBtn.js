import preview from "/assets/components-preview/galleryCardBtnDsa.png"

const GalleryCardSmBtnDsa = document.createElement("div")

const codeSnipped = 
`---
- GalleryCardSmBtnDsa:
    Control: Gallery@2.15.0
    Variant: Vertical
    Properties:
      BorderColor: =RGBA(0, 18, 107, 1)
      Items: =StarWarsCharacters
      LayoutMinHeight: =0
      LayoutMinWidth: =0
      ShowScrollbar: =false
      TemplatePadding: =0
      TemplateSize: =CardSmBtnDsa_1.Height + 24
      WrapCount: |-
        =Switch(
            true,
            App.Width < 768, 1,
            App.Width < 1280, 2,     
            App.Width < 1600, 4,
            App.Width > 1600, 6  
        )
    Children:
      - CardSmBtnDsa_1:
          Control: GroupContainer@1.3.0
          Variant: AutoLayout
          Properties:
            DropShadow: =DropShadow.None
            Fill: =ColorValue(dsaTokens.colorBgPrimary)
            Height: = cardSmBtntext_1.Height + cardBtnAction_1.Height +
              cardSmBtnTtitleAccent_1.Height + Self.PaddingBottom +
              Self.PaddingTop + Self.LayoutGap
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
            Width: =If(App.Width < 768, Parent.Width, 256)
          Children:
            - cardSmBtnTtitleAccent_1:
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
            - cardSmBtntext_1:
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
                  Text: ="Text description for your long text for your long text for your long
                    text"
                  Width: =Parent.Width - 32
            - cardBtnAction_1:
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
                  - BtnIconRightDsa_2:
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
                        - ButtonIconRight_2:
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
                              Y: "=0   "
                        - IconRightBtn_2:
                            Control: Classic/Icon@2.5.0
                            Properties:
                              BorderColor: =RGBA(0, 18, 107, 1)
                              Color: >-
                                =If(
                                    ButtonIconRight_2.DisplayMode = DisplayMode.Disabled,
                                    ColorValue(dsaTokens.colorNeutral300),
                                    ColorValue(dsaTokens.colorContrastDark)
                                )
                              Height: =ButtonIconRight_2.Size
                              Icon: =Icon.Search
                              Width: =ButtonIconRight_2.Size
                              X: = ButtonIconRight_2.Width - Self.Width - 16
                              Y: =ButtonIconRight_2.Height /2 - Self.Height /2
`


GalleryCardSmBtnDsa.setAttribute('data-code', codeSnipped)

GalleryCardSmBtnDsa.innerHTML = `
<img style="width: 100%" src=${preview} alt="Galeria com cards horozintal design system">
`

export default GalleryCardSmBtnDsa