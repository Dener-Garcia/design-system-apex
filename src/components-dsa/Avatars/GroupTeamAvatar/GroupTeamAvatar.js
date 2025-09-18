import "./GroupTeamAvatar.css"
import preview from "/assets/components-preview/GroupTeamAvatar.png"

const GroupTeamAvatar = document.createElement("div")

const codeSnippet = `- GroupTeamAvatar:
    Control: GroupContainer@1.3.0
    Variant: AutoLayout
    Properties:
      DropShadow: =DropShadow.None
      Height: =75
      LayoutAlignItems: =LayoutAlignItems.Stretch
      LayoutDirection: =LayoutDirection.Vertical
      RadiusBottomLeft: =0
      RadiusBottomRight: =0
      RadiusTopLeft: =0
      RadiusTopRight: =0
      Width: =120
      X: =42
      Y: =215
    Children:
      - LabelGroup:
          Control: Label@2.5.1
          Properties:
            AutoHeight: =true
            BorderColor: =RGBA(0, 18, 107, 1)
            Color: =ColorValue(dsaTokens.colorNeutral200)
            Font: =Font.'Open Sans'
            FontWeight: =FontWeight.Semibold
            LayoutMinWidth: =0
            Size: =dsaTokens.fontLabel
            Text: ="Team Group"
            Width: =Parent.Width
      - AvatarGroupContainer:
          Control: GroupContainer@1.3.0
          Variant: ManualLayout
          Properties:
            AlignInContainer: =AlignInContainer.SetByContainer
            DropShadow: =DropShadow.None
            FillPortions: =0
            Height: =Parent.Height- LabelGroup.Height
            LayoutMinHeight: =0
            LayoutMinWidth: =0
            RadiusBottomLeft: =0
            RadiusBottomRight: =0
            RadiusTopLeft: =0
            RadiusTopRight: =0
            Width: '=Parent.Width '
          Children:
            - avatarsgallery:
                Control: Gallery@2.15.0
                Variant: Horizontal
                Properties:
                  BorderColor: =RGBA(0, 18, 107, 1)
                  Height: =Parent.Height
                  ShowScrollbar: =false
                  TemplatePadding: =0
                  TemplateSize: =AvatarDsa.Width - AvatarDsa.Width /3
                  Width: =Parent.Width
                Children:
                  - AvatarDsa:
                      Control: Image@2.2.3
                      Properties:
                        BorderColor: =ColorValue(dsaTokens.colorBgPrimary)
                        BorderThickness: =1
                        Height: =35
                        Image: '=SampleImage '
                        ImagePosition: =ImagePosition.Fill
                        RadiusBottomLeft: =200
                        RadiusBottomRight: =200
                        RadiusTopLeft: =200
                        RadiusTopRight: =200
                        Width: =40
`

GroupTeamAvatar.setAttribute("data-code", codeSnippet)

GroupTeamAvatar.innerHTML = `
<img class="GroupTeamAvatar" src=${preview} alt="Imagem combo box para power apps" />
`

export default GroupTeamAvatar