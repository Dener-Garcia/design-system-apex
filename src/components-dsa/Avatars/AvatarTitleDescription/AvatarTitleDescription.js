import "./AvatarTitleDescription.css"
import preview from "/assets/components-preview/AvatarTitleDescription.png"

const AvatarTitleDescription = document.createElement("div")

const codeSnippet = `- AvatarTitleDescription:
    Control: GroupContainer@1.3.0
    Variant: AutoLayout
    Properties:
      DropShadow: =DropShadow.None
      Height: =If(avatar.Height > AvatarDescription.Height, avatar.Height + Self.PaddingBottom * 2, AvatarDescription.Height+ Self.PaddingBottom * 2)
      LayoutDirection: =LayoutDirection.Horizontal
      LayoutGap: =8
      PaddingBottom: =4
      PaddingLeft: =4
      PaddingRight: =4
      PaddingTop: =4
      RadiusBottomLeft: =0
      RadiusBottomRight: =0
      RadiusTopLeft: =0
      RadiusTopRight: =0
      Width: =200
      X: =42
      Y: =144
    Children:
      - avatar:
          Control: Image@2.2.3
          Properties:
            AlignInContainer: =AlignInContainer.Start
            BorderColor: =ColorValue(dsaTokens.colorBgPrimary)
            BorderThickness: =1
            Height: =40
            ImagePosition: =ImagePosition.Fill
            RadiusBottomLeft: =200
            RadiusBottomRight: =200
            RadiusTopLeft: =200
            RadiusTopRight: =200
            Width: =40
            X: =40
            Y: =40
      - AvatarDescription:
          Control: GroupContainer@1.3.0
          Variant: AutoLayout
          Properties:
            AlignInContainer: =AlignInContainer.Start
            DropShadow: =DropShadow.None
            Height: =avatarName.Height + avatarSubtitle.Height
            LayoutDirection: =LayoutDirection.Vertical
            LayoutMinHeight: =0
            LayoutMinWidth: =0
            RadiusBottomLeft: =0
            RadiusBottomRight: =0
            RadiusTopLeft: =0
            RadiusTopRight: =0
            Width: |
              =Parent.Width - avatar.Height - Parent.LayoutGap
            X: =394
            Y: =150
          Children:
            - avatarName:
                Control: Label@2.5.1
                Properties:
                  AutoHeight: =true
                  Color: =ColorValue(dsaTokens.colorContrastLight)
                  Height: =false
                  LineHeight: =1
                  PaddingBottom: =0
                  PaddingLeft: =0
                  PaddingRight: =0
                  PaddingTop: =0
                  Size: =dsaTokens.fontLabel
                  Width: =Parent.Width
                  X: =330
                  Y: =129
            - avatarSubtitle:
                Control: Label@2.5.1
                Properties:
                  AutoHeight: =true
                  Color: =ColorValue(dsaTokens.colorNeutral200)
                  Height: =false
                  LineHeight: =1
                  PaddingBottom: =0
                  PaddingLeft: =0
                  PaddingRight: =0
                  PaddingTop: =0
                  Size: =dsaTokens.fontSmallLabel
                  Text: ="Sub title your avatar"
                  Width: =Parent.Width
`

AvatarTitleDescription.setAttribute("data-code", codeSnippet)

AvatarTitleDescription.innerHTML =
`
<img class="AvatarTitleDescription" src=${preview} alt="Imagem input attachment para power apps" />
`

export default AvatarTitleDescription