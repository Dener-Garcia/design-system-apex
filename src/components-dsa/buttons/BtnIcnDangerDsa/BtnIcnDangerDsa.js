import "./BtnIcnDangerDsa.css"
const BtnIcnDangerDsa = document.createElement("div")

const codeSnippet = `
- BtnIconDangerDsa:
    Control: GroupContainer
    Variant: manualLayoutContainer
    Properties:
      DropShadow: =DropShadow.None
      Height: =40
      RadiusBottomLeft: =200
      RadiusBottomRight: =200
      RadiusTopLeft: =200
      RadiusTopRight: =200
      Width: =40
      X: =1218
      Y: =298
    Children:
    - btnIconPrimaryButton_1:
        Control: Classic/Button
        Properties:
          Text: =
          Tooltip: =
          BorderColor: |-
            =ColorValue(
            dsaTokens.colorFeedbackErrorAccent)
          BorderThickness: =0
          Color: |-
            =ColorValue(
            dsaTokens.colorContrastDark
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
            =ColorValue(
            dsaTokens.colorFeedbackErrorAccent
            )
          Height: =Parent.Height
          HoverBorderColor: |-
            =ColorValue(
            dsaTokens.colorFeedbackErrorAccent
            )
          HoverColor: |-
            =ColorValue(
            dsaTokens.colorFeedbackErrorAccent
            )
          HoverFill: |-
            =ColorValue(
            dsaTokens.colorFeedbackError
            )
          PaddingBottom: =8
          PaddingLeft: =8
          PaddingRight: =8
          PaddingTop: =8
          PressedBorderColor: |-
            =ColorValue(
            dsaTokens.colorFeedbackErrorAccent
            )
          PressedColor: |-
            =ColorValue(
            dsaTokens.colorFeedbackErrorAccent
            )
          PressedFill: |-
            =ColorValue(
            dsaTokens.colorFeedbackError
            )
          RadiusBottomLeft: =200
          RadiusBottomRight: =200
          RadiusTopLeft: =200
          RadiusTopRight: =200
          Size: =16
          Width: =Parent.Width
          Y: '=0   '
    - btnIconPrimaryIcon_1:
        Control: Classic/Icon
        Variant: Add
        Properties:
          Color: |-
            =If(
                BtnIconDangerDsa.DisplayMode = DisplayMode.Disabled,
                ColorValue(dsaTokens.colorNeutral300),
                ColorValue(dsaTokens.colorNeutral400)
            )
          FocusedBorderThickness: =0
          Height: =18
          HoverColor: |-
            =ColorValue(
            dsaTokens.colorFeedbackError
            )
          HoverFill: |-
            =ColorValue(
            "#ffffff00"
            )
          Icon: =Icon.Trash
          PressedColor: |-
            =ColorValue(
            dsaTokens.colorNeutral400
            )
          Width: =18
          X: =Parent.Width/2 - Self.Width/2
          Y: =btnIconPrimaryButton_1.Height /2 - Self.Height /2
`

BtnIcnDangerDsa.setAttribute("data-code", codeSnippet)

const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>`

BtnIcnDangerDsa.innerHTML = `<button class="BtnIcnDangerDsa">${icon}</button>`

export default BtnIcnDangerDsa