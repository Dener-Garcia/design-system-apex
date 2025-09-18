import "./CardAvatarDsa.css"
import preview from "/assets/components-preview/CardAvatarDsa.png"

const CardAvatarDsa = document.createElement("div")

const codeSnippet = `- CardAvatarDsa:
    Control: GroupContainer@1.3.0
    Variant: AutoLayout
    Properties:
      DropShadow: =DropShadow.None
      Fill: =ColorValue(dsaTokens.colorBgSecondary)
      Height: =avatarContianer.Height + cardThumbTitle_9.Height + cardThumbText_9.Height + BtnTerDsa_10.Height + cardAvatarContent.PaddingBottom + cardAvatarContent.PaddingBottom + Self.PaddingTop + Self.LayoutGap * 2
      LayoutDirection: =LayoutDirection.Vertical
      LayoutGap: =8
      PaddingBottom: =8
      PaddingTop: =8
      RadiusBottomLeft: =16
      RadiusBottomRight: =16
      RadiusTopLeft: =16
      RadiusTopRight: =16
      Width: =If(Parent.Width < 768, Parent.Width, 224)
      X: =600
      Y: =362
    Children:
      - avatarContianer:
          Control: GroupContainer@1.3.0
          Variant: ManualLayout
          Properties:
            AlignInContainer: =AlignInContainer.Start
            DropShadow: =DropShadow.None
            FillPortions: =0
            Height: =Self.Width
            LayoutMinHeight: =0
            LayoutMinWidth: =0
            PaddingBottom: =16
            PaddingLeft: =16
            PaddingRight: =16
            PaddingTop: =16
            RadiusBottomLeft: =9999
            RadiusBottomRight: =9999
            RadiusTopLeft: =9999
            RadiusTopRight: =9999
            Width: =If(App.Width < 768, 60, 80)
          Children:
            - thumb_9:
                Control: Image@2.2.3
                Properties:
                  DisplayMode: =DisplayMode.View
                  Height: =Parent.Height
                  ImagePosition: =ImagePosition.Fill
                  Width: =Parent.Width
      - cardAvatarContent:
          Control: GroupContainer@1.3.0
          Variant: AutoLayout
          Properties:
            DropShadow: =DropShadow.None
            Fill: =ColorValue(dsaTokens.colorBgSecondary)
            Height: '=0   '
            LayoutDirection: =LayoutDirection.Vertical
            LayoutGap: =4
            LayoutMinWidth: =0
            PaddingBottom: =4
            PaddingLeft: =8
            PaddingRight: =4
            PaddingTop: =8
            RadiusBottomLeft: =0
            RadiusBottomRight: =0
            RadiusTopLeft: =0
            RadiusTopRight: =0
            Width: =Parent.Width
            X: =300
            Y: =468
          Children:
            - cardThumbTitle_9:
                Control: Label@2.5.1
                Properties:
                  AutoHeight: =true
                  Color: =ColorValue(dsaTokens.colorNeutral100)
                  FontWeight: =FontWeight.Semibold
                  PaddingBottom: =0
                  PaddingLeft: =0
                  PaddingRight: =0
                  PaddingTop: =0
                  Size: =dsaTokens.fontText
                  Text: ="Title"
                  Width: =Parent.Width - 32
            - cardThumbText_9:
                Control: Label@2.5.1
                Properties:
                  AutoHeight: =true
                  Color: =ColorValue(dsaTokens.colorNeutral200)
                  PaddingBottom: =0
                  PaddingLeft: =0
                  PaddingRight: =0
                  PaddingTop: =0
                  Size: =dsaTokens.fontLabel
                  Text: |-
                    ="Text description for your long text.
                    "
                  Width: =Parent.Width - 32
            - BtnTerDsa_10:
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

CardAvatarDsa.setAttribute("data-code", codeSnippet)

CardAvatarDsa.innerHTML = `
<img class="CardAvatarDsa" src=${preview} alt="Imagem Card para power apps" />
`

export default CardAvatarDsa