import "./modalDsa.css"
import preview from "/assets/components-preview/modal.png"

const ModalDsa = document.createElement("div")

const codeSnippet = `
- ModalContainer:
    Control: GroupContainer@1.3.0
    Variant: ManualLayout
    Properties:
      DropShadow: =DropShadow.None
      Fill: =RGBA(0,0,0, 0.8)
      Height: =App.Height
      Visible: =dsaModalShow
      Width: =App.Width
    Children:
      - ModalDsa:
          Control: GroupContainer@1.3.0
          Variant: AutoLayout
          Properties:
            DropShadow: =DropShadow.None
            Fill: |-
              =ColorValue(
              dsaTokens.colorBgPrimary
              )
            Height: =303
            LayoutAlignItems: =LayoutAlignItems.Center
            LayoutDirection: =LayoutDirection.Vertical
            LayoutGap: =24
            PaddingBottom: =24
            PaddingLeft: =24
            PaddingRight: =24
            PaddingTop: =24
            RadiusBottomLeft: =8
            RadiusBottomRight: =8
            RadiusTopLeft: =8
            RadiusTopRight: =8
            Width: =399
            X: =Parent.Width / 2 - Self.Width /2
            Y: =Parent.Height / 2 - Self.Height /2
          Children:
            - iconBackground:
                Control: GroupContainer@1.3.0
                Variant: AutoLayout
                Properties:
                  AlignInContainer: =AlignInContainer.SetByContainer
                  DropShadow: =DropShadow.None
                  Fill: |-
                    =ColorValue(
                        If( dsaModalType = "info", dsaTokens.colorFeedbackInfoAccent,
                         dsaModalType = "error", dsaTokens.colorFeedbackErrorAccent,
                         dsaModalType = "warning", dsaTokens.colorFeedbackWarningAccent,
                         dsaModalType = "success", dsaTokens.colorFeedbackSuccessAccent
                         )
                    )
                  FillPortions: =0
                  Height: =80
                  LayoutAlignItems: =LayoutAlignItems.Center
                  LayoutDirection: =LayoutDirection.Horizontal
                  LayoutJustifyContent: =LayoutJustifyContent.Center
                  PaddingBottom: =8
                  PaddingLeft: =8
                  PaddingRight: =8
                  PaddingTop: =8
                  RadiusBottomLeft: =500
                  RadiusBottomRight: =500
                  RadiusTopLeft: =500
                  RadiusTopRight: =500
                  Width: =80
                  X: =35
                  Y: =128
                Children:
                  - iconModal:
                      Control: Classic/Icon@2.5.0
                      Properties:
                        BorderColor: =RGBA(0, 18, 107, 1)
                        Color: |
                          =ColorValue(
                              If( dsaModalType = "info", dsaTokens.colorFeedbackInfo,
                               dsaModalType = "error", dsaTokens.colorFeedbackError,
                               dsaModalType = "warning", dsaTokens.colorFeedbackWarning,
                               dsaModalType = "success", dsaTokens.colorFeedbackSuccess
                               )
                          )
                        DisplayMode: =DisplayMode.View
                        Height: =52
                        Icon: |-
                          =Switch(true, 
                          dsaModalType = "info", Icon.Note,
                          dsaModalType = "warning", Icon.Information,
                          dsaModalType = "error", Icon.Warning,
                          dsaModalType = "success", Icon.Check
                          )
                        LayoutMinWidth: =0
                        Width: =52
            - messageModal:
                Control: Label@2.5.1
                Properties:
                  AutoHeight: =true
                  BorderColor: =RGBA(0, 18, 107, 1)
                  FillPortions: =1
                  Font: =Font.'Open Sans'
                  Height: =Self.Size
                  LayoutMinHeight: =0
                  PaddingBottom: =0
                  PaddingLeft: =0
                  PaddingRight: =0
                  PaddingTop: =0
                  Size: |
                    =dsaTokens.fontLabel
                  Text: =dsaModalMessage
                  Width: =Parent.Width - Parent.PaddingLeft - Parent.PaddingRight
                  X: =677
                  Y: =176
            - buttonsContainer:
                Control: GroupContainer@1.3.0
                Variant: AutoLayout
                Properties:
                  AlignInContainer: =AlignInContainer.SetByContainer
                  DropShadow: =DropShadow.None
                  FillPortions: =0
                  Height: '=48  '
                  LayoutAlignItems: =LayoutAlignItems.Center
                  LayoutDirection: =LayoutDirection.Horizontal
                  LayoutGap: =24
                  LayoutJustifyContent: =LayoutJustifyContent.SpaceBetween
                  LayoutMinHeight: =0
                  LayoutMinWidth: =0
                  PaddingBottom: =8
                  PaddingLeft: =4
                  PaddingRight: =4
                  PaddingTop: =8
                  RadiusBottomLeft: =0
                  RadiusBottomRight: =0
                  RadiusTopLeft: =0
                  RadiusTopRight: =0
                  Width: =Parent.Width - Parent.PaddingLeft - Parent.PaddingRight
                  X: =518
                  Y: =369
                Children:
                  - BtnSecDsa_1:
                      Control: Classic/Button@2.2.0
                      Properties:
                        BorderColor: |-
                          =ColorValue(
                          dsaTokens.colorAccentPrimary
                          )
                        Color: |-
                          =ColorValue(
                          dsaTokens.colorContrastLight
                          )
                        DisabledBorderColor: |-
                          =ColorValue(
                          dsaTokens.colorNeutral300
                          )
                        DisabledColor: |-
                          =ColorValue(
                          dsaTokens.colorNeutral300
                          )
                        DisabledFill: |-
                          =ColorValue(
                          dsaTokens.colorAccentSecondary
                          )
                        Fill: |-
                          =ColorValue(
                          dsaTokens.colorAccentSecondary
                          )
                        FocusedBorderColor: |-
                          =ColorValue(
                          dsaTokens.colorNeutral200
                          )
                        FocusedBorderThickness: '=2 '
                        Font: =Font.'Open Sans'
                        HoverBorderColor: |-
                          =ColorValue(
                          dsaTokens.colorAccentPrimary
                          )
                        HoverColor: |-
                          =ColorValue(
                          dsaTokens.colorContrastLight
                          )
                        HoverFill: '=ColorValue(dsaTokens.colorAccentSecondaryHover)   '
                        OnSelect: =Set(dsaModalShow, false)
                        PaddingBottom: =8
                        PaddingLeft: =16
                        PaddingRight: =16
                        PaddingTop: =8
                        PressedBorderColor: |-
                          =ColorValue(
                          dsaTokens.colorAccentSecondaryHover
                          )
                        PressedColor: |-
                          =ColorValue(
                          dsaTokens.colorContrastLight
                          )
                        PressedFill: |-
                          =ColorValue(
                          dsaTokens.colorAccentSecondary
                          )
                        RadiusBottomLeft: =200
                        RadiusBottomRight: =200
                        RadiusTopLeft: =200
                        RadiusTopRight: =200
                        Size: =dsaTokens.fontText
                        Text: ="Back Action"
                        X: =243
                        Y: =237
                  - BtnPriDsa_2:
                      Control: Classic/Button@2.2.0
                      Properties:
                        BorderColor: |-
                          =If(dsaModalType =  "error", 
                          ColorValue(dsaTokens.colorFeedbackErrorAccent),
                          ColorValue(dsaTokens.colorAccentPrimary))
                        Color: |-
                          =ColorValue(
                          dsaTokens.colorContrastDark
                          )
                        DisabledBorderColor: |-
                          =ColorValue(
                          dsaTokens.colorNeutral300
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
                          =If(dsaModalType =  "error", 
                          ColorValue(dsaTokens.colorFeedbackErrorAccent),
                          ColorValue(dsaTokens.colorAccentPrimary))
                        FocusedBorderColor: |-
                          =ColorValue(
                          dsaTokens.colorNeutral200
                          )
                        FocusedBorderThickness: '=2 '
                        Font: =Font.'Open Sans'
                        HoverBorderColor: |-
                          =If(dsaModalType =  "error", 
                          ColorValue(dsaTokens.colorFeedbackErrorAccent),
                          ColorValue(dsaTokens.colorAccentPrimary))
                        HoverColor: |-
                          =If(dsaModalType =  "error", 
                          ColorValue(dsaTokens.colorFeedbackErrorAccent),
                          ColorValue(dsaTokens.colorContrastDark))
                        HoverFill: |-
                          =If(dsaModalType =  "error", 
                          ColorValue(dsaTokens.colorFeedbackError),
                          ColorValue(dsaTokens.colorAccentPrimaryHover))
                        PaddingBottom: =8
                        PaddingLeft: =16
                        PaddingRight: =16
                        PaddingTop: =8
                        PressedBorderColor: |-
                          =If(dsaModalType =  "error", 
                          ColorValue(dsaTokens.colorFeedbackError),
                          ColorValue(dsaTokens.colorAccentSecondaryHover))
                        PressedColor: |-
                          =If(dsaModalType =  "error", 
                          ColorValue(dsaTokens.colorFeedbackErrorAccent),
                          ColorValue(dsaTokens.colorContrastDark))
                        PressedFill: |-
                          =If(dsaModalType =  "error", 
                          ColorValue(dsaTokens.colorFeedbackError),
                          ColorValue(dsaTokens.colorAccentPrimaryHover))
                        RadiusBottomLeft: =200
                        RadiusBottomRight: =200
                        RadiusTopLeft: =200
                        RadiusTopRight: =200
                        Size: =dsaTokens.fontText
                        Text: ="Main action"
                        X: =42
                        Y: =237
`

const properties = `
// settings for modal
<pre>
  <code>
Set(dsaModalShow, true);
Set(dsaModalType, "success");
Set(dsaModalMessage, "Your message here!")
  </code>
</pre>

<section class="details">
  <div class="code-details">
    <h6>dsaModalShow</h6>
    <p>Ao setar para "true" o Modal aparece na tela.</p>
  </div>
  <div class="code-details">
    <h6>dsaModalType</h6>
    <p>Mude o tipo do Modal ao setar essa variavel para "info", "warning", "success" ou "error" conforme o tipo de mensagem que voce deseja mostrar para o usuário.</p>
  </div>
  <div class="code-details">
    <h6>dsaModalMessage</h6>
    <p>Use essa variável para escrever a mensagem que voce deseja mostrar para o usuário, ex. "Projeto adicionado com sucesso".</p>
  </div>
</section>
`

ModalDsa.setAttribute("data-code", codeSnippet)
ModalDsa.setAttribute("data-properties", properties)


ModalDsa.innerHTML =
`
<img class="ModalDsa" src=${preview} alt="Imagem combo box para power apps" />
`

export default ModalDsa