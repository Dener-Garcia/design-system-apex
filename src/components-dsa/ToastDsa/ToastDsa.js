import "./toastDsa.css"
import preview from "/assets/components-preview/toastDsa.png"

const ToastDsa = document.createElement("div")

const codeSnippet = `- ToastDsa:
    Control: GroupContainer
    Variant: manualLayoutContainer
    Properties:
      DropShadow: =DropShadow.None
      Height: =If(dsaToastShow, 120, 0)
      RadiusBottomLeft: =0
      RadiusBottomRight: =0
      RadiusTopLeft: =0
      RadiusTopRight: =0
      Width: =316
      X: =482
      Y: =287
    Children:
    - toastContainer_4:
        Control: GroupContainer
        Variant: horizontalAutoLayoutContainer
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
          LayoutMode: =LayoutMode.Auto
          RadiusBottomLeft: =12
          RadiusBottomRight: =12
          RadiusTopLeft: =12
          RadiusTopRight: =12
          Visible: =dsaToastShow
          Width: =Parent.Width
        Children:
        - toastRectangle_3:
            Control: Rectangle
            Properties:
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
            Control: GroupContainer
            Variant: verticalAutoLayoutContainer
            Properties:
              DropShadow: =DropShadow.None
              Height: =Parent.Height
              LayoutDirection: =LayoutDirection.Vertical
              LayoutMode: =LayoutMode.Auto
              PaddingLeft: =8
              PaddingTop: =8
              RadiusBottomLeft: =0
              RadiusBottomRight: =0
              RadiusTopLeft: =0
              RadiusTopRight: =0
            Children:
            - titleToast_3:
                Control: Label
                Properties:
                  Text: =dsaToastType
                  Color: =ColorValue(dsaTokens.colorNeutral200)
                  FontWeight: =FontWeight.Semibold
                  PaddingBottom: =0
                  PaddingLeft: =0
                  PaddingRight: =0
                  PaddingTop: =0
                  Size: =16
                  Width: =Parent.Width - 8
            - messageToast_3:
                Control: Label
                Properties:
                  Text: =dsaToastMessage
                  AutoHeight: =true
                  Color: =ColorValue(dsaTokens.colorContrastLight)
                  Height: =Parent.Height - titleToast_3.Height
                  PaddingBottom: =0
                  PaddingLeft: =0
                  PaddingRight: =0
                  PaddingTop: =0
                  Size: =14
                  Width: =Parent.Width   - 8
        - Icon1_3:
            Control: Classic/Icon
            Variant: Add
            Properties:
              OnSelect: =Set(dsaToastShow, !dsaToastShow)
              Color: |-
                =ColorValue(
                dsaTokens.colorFeedbackErrorAccent
                )
              Fill: =ColorValue("#ffffff00")
              Height: '=44  '
              Icon: =Icon.CancelBadge
              PaddingBottom: =8
              PaddingLeft: =8
              PaddingRight: =8
              PaddingTop: =8
              Width: '=44  '
        - timerToast_3:
            Control: Timer
            Properties:
              OnTimerEnd: =Set(dsaToastShow, false)
              Duration: =5000
              Start: =dsaToastShow
              BorderStyle: =BorderStyle.None
              DisplayMode: =DisplayMode.Disabled
              FontWeight: =FontWeight.Lighter
              PaddingBottom: =0
              PaddingLeft: =0
              PaddingRight: =0
              PaddingTop: =0
              RadiusBottomLeft: =0
              RadiusBottomRight: =0
              RadiusTopLeft: =0
              RadiusTopRight: =0
              Size: =8
              Visible: =false
              Width: =24
              X: =636
              Y: =288
`

ToastDsa.setAttribute("data-code", codeSnippet)

ToastDsa.innerHTML =
`
<img class="ModalDsa" src=${preview} alt="Imagem modal para power apps" />
`

export default ToastDsa