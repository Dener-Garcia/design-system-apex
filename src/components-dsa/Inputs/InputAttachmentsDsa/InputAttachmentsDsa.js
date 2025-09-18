import "./inputAttachmentsDsa.css"
import preview from "/assets/components-preview/InputAttachmentsDsa.png"

const InputAttachmentsDsa = document.createElement("div")

const codeSnippet = `- InputAttachmentsDsa:
    Control: GroupContainer@1.3.0
    Variant: AutoLayout
    Properties:
      DropShadow: =DropShadow.None
      Height: '=labelAttachments.Height + 80    '
      LayoutDirection: =LayoutDirection.Vertical
      LayoutJustifyContent: =LayoutJustifyContent.Center
      RadiusBottomLeft: =8
      RadiusBottomRight: =8
      RadiusTopLeft: =8
      RadiusTopRight: =8
      Width: =347
      X: =933
      Y: =488
    Children:
      - labelAttachments:
          Control: Label@2.5.1
          Properties:
            AutoHeight: =true
            BorderColor: =RGBA(0, 18, 107, 1)
            Color: |-
              =ColorValue(
              dsaTokens.colorContrastLight
              )
            Font: =Font.'Open Sans'
            Height: =0
            PaddingBottom: =4
            PaddingLeft: =8
            PaddingRight: =0
            PaddingTop: =4
            Size: =dsaTokens.fontLabel
            Text: ="Label"
            Width: =Parent.Width
      - attachmentContainer:
          Control: GroupContainer@1.3.0
          Variant: ManualLayout
          Properties:
            BorderStyle: =BorderStyle.None
            DropShadow: =DropShadow.None
            FillPortions: =0
            Height: =Parent.Height - labelAttachments.Height
            LayoutMinHeight: =0
            LayoutMinWidth: =0
            PaddingBottom: =2
            PaddingLeft: =2
            PaddingRight: =2
            PaddingTop: =2
            RadiusBottomLeft: =8
            RadiusBottomRight: =8
            RadiusTopLeft: =8
            RadiusTopRight: =8
            Width: =Parent.Width
            X: =220
            Y: =330
          Children:
            - inputAttachment:
                Control: Attachments@2.3.0
                Properties:
                  BorderColor: =Self.Color
                  BorderStyle: =BorderStyle.None
                  BorderThickness: =0
                  Color: |-
                    =ColorValue(
                    dsaTokens.colorContrastLight
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
                    dsaTokens.colorNeutral500
                    )
                  DisplayMode: =Parent.DisplayMode
                  Fill: |-
                    =ColorValue(
                    dsaTokens.colorAccentSecondary
                    )
                  Font: =Font.'Open Sans'
                  Height: '=Parent.Height '
                  HoverColor: |-
                    =ColorValue(
                    dsaTokens.colorContrastLight
                    )
                  HoverFill: |-
                    =ColorValue(
                    dsaTokens.colorAccentSecondaryHover
                    )
                  ItemColor: =RGBA(255, 255, 255, 1)
                  ItemFill: =RGBA(56, 96, 178, 1)
                  ItemHoverFill: =RGBA(186, 202, 226, 1)
                  PressedColor: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimaryHover
                    )
                  PressedFill: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimaryHover
                    )
                  Size: =dsaTokens.fontSmallLabel
                  Tooltip: ="anexar arquivos"
                  Width: =Parent.Width

`

InputAttachmentsDsa.setAttribute("data-code", codeSnippet)

InputAttachmentsDsa.innerHTML =
`
<img class="inputAttachmentsDsa" src=${preview} alt="Imagem input attachment para power apps" />
`

export default InputAttachmentsDsa