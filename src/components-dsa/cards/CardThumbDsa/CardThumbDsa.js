import "./cardThumbDsa.css"
import preview from "/assets/components-preview/CardThumbDsa.png"

const CardThumbDsa = document.createElement("div")

const codeSnippet = `
- CardThumbDsa:
    Control: GroupContainer
    Variant: verticalAutoLayoutContainer
    Properties:
      DropShadow: =DropShadow.None
      Fill: =ColorValue(dsaTokens.colorBgPrimary)
      Height: =thumbContainer.Height + cardThumbTitle.Height + cardThumbText.Height + BtnTerDsa.Height + cardThumbContent.PaddingBottom + cardThumbContent.PaddingBottom
      LayoutDirection: =LayoutDirection.Vertical
      LayoutMode: =LayoutMode.Auto
      RadiusBottomLeft: =16
      RadiusBottomRight: =16
      RadiusTopLeft: =16
      RadiusTopRight: =16
      Width: =264
      X: =959
      Y: =392
    Children:
    - thumbContainer:
        Control: GroupContainer
        Variant: manualLayoutContainer
        Properties:
          DropShadow: =DropShadow.Regular
          FillPortions: =0
          Height: '=200 '
          LayoutMinHeight: =0
          RadiusBottomLeft: =16
          RadiusBottomRight: =16
          RadiusTopLeft: =16
          RadiusTopRight: =16
        Children:
        - thumb:
            Control: Image
            Properties:
              DisplayMode: =DisplayMode.View
              Height: =Parent.Height
              ImagePosition: =ImagePosition.Fill
              Width: =Parent.Width
    - cardThumbContent:
        Control: GroupContainer
        Variant: horizontalAutoLayoutContainer
        Properties:
          DropShadow: =DropShadow.None
          Height: '=0   '
          LayoutDirection: =LayoutDirection.Vertical
          LayoutGap: =4
          LayoutMode: =LayoutMode.Auto
          PaddingBottom: =16
          PaddingLeft: =16
          PaddingRight: =16
          PaddingTop: =16
          RadiusBottomLeft: =0
          RadiusBottomRight: =0
          RadiusTopLeft: =0
          RadiusTopRight: =0
          Width: =Parent.Width
          X: =300
          Y: =468
        Children:
        - cardThumbTitle:
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
        - cardThumbText:
            Control: Label
            Properties:
              Text: |-
                ="Text description for your long text.
                "
              AutoHeight: =true
              Color: =ColorValue(dsaTokens.colorNeutral200)
              PaddingBottom: =0
              PaddingLeft: =0
              PaddingRight: =0
              PaddingTop: =0
              Size: =dsaTokens.fontLabel
              Width: =Parent.Width - 32
        - BtnTerDsa_1:
            Control: Classic/Button
            Properties:
              Text: ="More ..."
              Align: =Align.Right
              AlignInContainer: =AlignInContainer.End
              BorderColor: |-
                =ColorValue(
                    "#ffffff00"
                )
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