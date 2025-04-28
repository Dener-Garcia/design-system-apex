import "./toastDsa.css"
import preview from "/assets/components-preview/toastDsa.png"

const ToastDsa = document.createElement("div")
ToastDsa.classList.add("hasProperties")

const codeSnippet = `- ToastDsa:
    Control: GroupContainer@1.3.0
    Variant: ManualLayout
    Properties:
      DropShadow: =DropShadow.None
      Height: =If(dsaToastShow, 120, 0)
      RadiusBottomLeft: =0
      RadiusBottomRight: =0
      RadiusTopLeft: =0
      RadiusTopRight: =0
      Width: =316
      X: =If(App.Width < 768, App.Width/2 - Self.Width/2, App.Width - Self.Width - 16)
      Y: =48
    Children:
      - toastContainer_4:
          Control: GroupContainer@1.3.0
          Variant: AutoLayout
          Properties:
            DropShadow: =DropShadow.None
            Fill: |
              =ColorValue(
                  If(dsaToastType = "info", dsaTokens.colorFeedbackInfo,
                   dsaToastType = "error", dsaTokens.colorFeedbackError,
                   dsaToastType = "warning", dsaTokens.colorFeedbackWarning,
                   dsaToastType = "success", dsaTokens.colorFeedbackSuccess
                   )
              )
            Height: =Parent.Height
            LayoutDirection: =LayoutDirection.Horizontal
            RadiusBottomLeft: =12
            RadiusBottomRight: =12
            RadiusTopLeft: =12
            RadiusTopRight: =12
            Visible: =dsaToastShow
            Width: =Parent.Width
          Children:
            - toastRectangle_3:
                Control: Rectangle@2.3.0
                Properties:
                  BorderColor: =RGBA(0, 18, 107, 1)
                  Fill: |-
                    =ColorValue(
                        If( dsaToastType = "info", dsaTokens.colorFeedbackInfoAccent,
                         dsaToastType = "error", dsaTokens.colorFeedbackErrorAccent,
                         dsaToastType = "warning", dsaTokens.colorFeedbackWarningAccent,
                         dsaToastType = "success", dsaTokens.colorFeedbackSuccessAccent
                         )
                    )
                  Height: =Parent.Height
                  Width: '=8   '
            - toastContainer_5:
                Control: GroupContainer@1.3.0
                Variant: AutoLayout
                Properties:
                  DropShadow: =DropShadow.None
                  Height: =Parent.Height
                  LayoutDirection: =LayoutDirection.Vertical
                  PaddingLeft: =8
                  PaddingTop: =8
                  RadiusBottomLeft: =0
                  RadiusBottomRight: =0
                  RadiusTopLeft: =0
                  RadiusTopRight: =0
                Children:
                  - titleToast_3:
                      Control: Label@2.5.1
                      Properties:
                        BorderColor: =RGBA(0, 18, 107, 1)
                        Color: =ColorValue(dsaTokens.colorNeutral200)
                        Font: =Font.'Open Sans'
                        FontWeight: =FontWeight.Semibold
                        PaddingBottom: =0
                        PaddingLeft: =0
                        PaddingRight: =0
                        PaddingTop: =0
                        Size: =16
                        Text: =dsaToastType
                        Width: =Parent.Width - 8
                  - messageToast_3:
                      Control: Label@2.5.1
                      Properties:
                        AutoHeight: =true
                        BorderColor: =RGBA(0, 18, 107, 1)
                        Color: =ColorValue(dsaTokens.colorContrastLight)
                        Font: =Font.'Open Sans'
                        Height: =Parent.Height - titleToast_3.Height
                        PaddingBottom: =0
                        PaddingLeft: =0
                        PaddingRight: =0
                        PaddingTop: =0
                        Size: =14
                        Text: =dsaToastMessage
                        Width: =Parent.Width   - 8
            - Icon1_3:
                Control: Classic/Icon@2.5.0
                Properties:
                  BorderColor: =RGBA(0, 18, 107, 1)
                  Color: |-
                    =ColorValue(
                    dsaTokens.colorFeedbackErrorAccent
                    )
                  Fill: =ColorValue("#ffffff00")
                  Height: '=44  '
                  Icon: =Icon.CancelBadge
                  OnSelect: =Set(dsaToastShow, !dsaToastShow)
                  PaddingBottom: =8
                  PaddingLeft: =8
                  PaddingRight: =8
                  PaddingTop: =8
                  Width: '=44  '
            - timerToast_3:
                Control: Timer@2.1.0
                Properties:
                  BorderColor: =ColorFade(Self.Fill, -15%)
                  BorderStyle: =BorderStyle.None
                  Color: =RGBA(255, 255, 255, 1)
                  DisabledBorderColor: =ColorFade(Self.BorderColor, 70%)
                  DisabledColor: =ColorFade(Self.Fill, 90%)
                  DisabledFill: =ColorFade(Self.Fill, 70%)
                  DisplayMode: =DisplayMode.Disabled
                  Duration: =5000
                  Fill: =RGBA(56, 96, 178, 1)
                  Font: =Font.'Open Sans'
                  FontWeight: =FontWeight.Lighter
                  HoverBorderColor: =ColorFade(Self.BorderColor, 20%)
                  HoverColor: =RGBA(255, 255, 255, 1)
                  HoverFill: =ColorFade(RGBA(56, 96, 178, 1), -20%)
                  OnTimerEnd: =Set(dsaToastShow, false)
                  PaddingBottom: =0
                  PaddingLeft: =0
                  PaddingRight: =0
                  PaddingTop: =0
                  PressedBorderColor: =Self.Fill
                  PressedColor: =Self.Fill
                  PressedFill: =Self.Color
                  RadiusBottomLeft: =0
                  RadiusBottomRight: =0
                  RadiusTopLeft: =0
                  RadiusTopRight: =0
                  Size: =8
                  Start: =dsaToastShow
                  Visible: =false
                  Width: =24
                  X: =636
                  Y: =288

`

const properties = `
// settings for nav menu
<pre>
  <code>
Set(dsaToastShow, true);
Set(dsaToastType, "error");
Set(dsaToastMessage, "Your message!");
  </code>
</pre>

<section class="details">
  <div class="code-details">
    <h6>dsaToastShow</h6>
    <p>Ao setar para "true" o Toast aparece na tela.</p>
  </div>
  <div class="code-details">
    <h6>dsaToastType</h6>
    <p>Mude o tipo do Toast ao setar essa variavel para "info", "warning", "success" ou "error" conforme o tipo de mensagem que voce deseja mostrar para o usuario.</p>
  </div>
  <div class="code-details">
    <h6>dsaToastMessage</h6>
    <p>Use essa variavel para escrever a mensagem que voce deseja mostrar para o usuario, ex. "Projeto adicionado com sucess".</p>
  </div>
</section>
`

ToastDsa.setAttribute("data-properties", properties)

ToastDsa.setAttribute("data-code", codeSnippet)

ToastDsa.innerHTML =
`
<img class="ModalDsa" src=${preview} alt="Imagem modal para power apps" />
`

export default ToastDsa