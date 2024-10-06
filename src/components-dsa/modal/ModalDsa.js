import "./modalDsa.css"
import preview from "/assets/components-preview/modal.png"

const ModalDsa = document.createElement("div")

const codeSnippet = `- ModalContainer:
    Control: GroupContainer
    Variant: manualLayoutContainer
    Properties:
      DropShadow: =DropShadow.None
      Fill: =RGBA(0,0,0, 0.8)
      Height: =App.Height
      Visible: =dsaModalShow
      Width: =App.Width
      X: |-
        =
        0
    Children:
    - ModalDsa:
        Control: GroupContainer
        Variant: verticalAutoLayoutContainer
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
          LayoutMode: =LayoutMode.Auto
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
            Control: GroupContainer
            Variant: horizontalAutoLayoutContainer
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
              LayoutJustifyContent: =LayoutJustifyContent.Center
              LayoutMode: =LayoutMode.Auto
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
                Control: Classic/Icon
                Variant: Check
                Properties:
                  Color: |+
                    =ColorValue(
                        If( dsaModalType = "info", dsaTokens.colorFeedbackInfo,
                         dsaModalType = "error", dsaTokens.colorFeedbackError,
                         dsaModalType = "warning", dsaTokens.colorFeedbackWarning,
                         dsaModalType = "success", dsaTokens.colorFeedbackSuccess
                         )
                    )

                  DisplayMode: =DisplayMode.View
                  FillPortions: =1
                  Height: =52
                  Icon: =dsaModalIcon
                  Width: '=64  '
                  Y: '=0   '
        - messageModal:
            Control: Label
            Properties:
              Text: =dsaModalMessage
              AutoHeight: =true
              FillPortions: =1
              Height: =Self.Size
              LayoutMinHeight: =0
              PaddingBottom: =0
              PaddingLeft: =0
              PaddingRight: =0
              PaddingTop: =0
              Size: =14
              Width: =Parent.Width - Parent.PaddingLeft - Parent.PaddingRight
              X: =677
              Y: =176
        - buttonsContainer:
            Control: GroupContainer
            Variant: horizontalAutoLayoutContainer
            Properties:
              AlignInContainer: =AlignInContainer.SetByContainer
              DropShadow: =DropShadow.None
              FillPortions: =0
              Height: '=48  '
              LayoutAlignItems: =LayoutAlignItems.Center
              LayoutGap: =24
              LayoutJustifyContent: =LayoutJustifyContent.SpaceBetween
              LayoutMinHeight: =0
              LayoutMinWidth: =0
              LayoutMode: =LayoutMode.Auto
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
            - BtnSecundary_modal:
                Control: Classic/Button
                Properties:
                  OnSelect: =Set(dsaModalShow, false)
                  Text: ="Back Action"
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
                  FillPortions: =1
                  FocusedBorderColor: |-
                    =ColorValue(
                    dsaTokens.colorNeutral200
                    )
                  FocusedBorderThickness: '=2 '
                  HoverBorderColor: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimary
                    )
                  HoverColor: |-
                    =ColorValue(
                    dsaTokens.colorContrastLight
                    )
                  HoverFill: |-
                    =ColorValue(
                     dsaTokens.colorAccentSecondaryHover
                    )
                  PaddingBottom: =8
                  PaddingLeft: =16
                  PaddingRight: =16
                  PaddingTop: =8
                  PressedBorderColor: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimary
                    )
                  PressedColor: |-
                    =ColorValue(
                    dsaTokens.colorContrastLight
                    )
                  PressedFill: |-
                    =ColorValue(
                    dsaTokens.colorAccentSecondaryHover
                    )
                  RadiusBottomLeft: =200
                  RadiusBottomRight: =200
                  RadiusTopLeft: =200
                  RadiusTopRight: =200
                  Size: =16
                  Width: =Parent.Width
                  X: =594
                  Y: =440
            - BtnPrimary_modal:
                Control: Classic/Button
                Properties:
                  Text: ="Execute"
                  BorderColor: |-
                    =If(dsaModalType =  "error", 
                    ColorValue(dsaTokens.colorFeedbackError),
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
                  FillPortions: =1
                  FocusedBorderColor: |-
                    =ColorValue(
                    dsaTokens.colorNeutral200
                    )
                  FocusedBorderThickness: '=2 '
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
                    ColorValue(dsaTokens.colorAccentPrimary))
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
                  Size: =16
                  Width: =Parent.Width
                  X: =198
                  Y: =440
`

ModalDsa.setAttribute("data-code", codeSnippet)

ModalDsa.innerHTML =
`
<img class="ModalDsa" src=${preview} alt="Imagem combo box para power apps" />
`

export default ModalDsa