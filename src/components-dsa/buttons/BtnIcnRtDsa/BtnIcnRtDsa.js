import "./BtnIcnRtDsa.css"

const BtnIcnRtDsa = document.createElement("div")

const codeSnippet = `- BtnIcnRtDsa:
    Control: GroupContainer
    Variant: manualLayoutContainer
    Properties:
      DropShadow: =DropShadow.None
      Height: =40
      RadiusBottomLeft: =200
      RadiusBottomRight: =200
      RadiusTopLeft: =200
      RadiusTopRight: =200
      Width: =160
      X: =942
      Y: =150
    Children:
    - ButtonIconRight:
        Control: Classic/Button
        Properties:
          OnSelect: =
          BorderColor: |-
            =ColorValue(
            dsaTokens.colorAccentPrimary
            )
          Color: |-
            =ColorValue(
            dsaTokens.colorContrastDark
            )
          Fill: |-
            =ColorValue(
            dsaTokens.colorAccentPrimary
            )
          Height: =Parent.Height
          HoverBorderColor: |-
            =ColorValue(
            dsaTokens.colorAccentPrimary
            )
          HoverColor: |-
            =ColorValue(
            dsaTokens.colorContrastDark
            )
          HoverFill: |-
            =ColorValue(
            dsaTokens.colorAccentPrimaryHover
            )
          PaddingBottom: =8
          PaddingLeft: =8
          PaddingRight: =8
          PaddingTop: =8
          PressedBorderColor: |-
            =ColorValue(
            dsaTokens.colorAccentSecondaryHover
            )
          PressedColor: |-
            =ColorValue(
            dsaTokens.colorContrastDark
            )
          PressedFill: |-
            =ColorValue(
            dsaTokens.colorAccentPrimaryHover
            )
          RadiusBottomLeft: =200
          RadiusBottomRight: =200
          RadiusTopLeft: =200
          RadiusTopRight: =200
          Size: =16
          Width: =Parent.Width
          Y: '=0   '
    - btnIcnRt:
        Control: Classic/Icon
        Variant: Add
        Properties:
          Color: |-
            =If(
                ButtonIconRight.DisplayMode = DisplayMode.Disabled,
                ColorValue(dsaTokens.colorNeutral300),
                ColorValue(dsaTokens.colorContrastDark)
            )
          Height: =ButtonIconRight.Size
          Icon: =Icon.ChevronDown
          Width: =ButtonIconRight.Size
          X: = ButtonIconRight.Width - Self.Width - 16
          Y: =ButtonIconRight.Height /2 - Self.Height /2

`

BtnIcnRtDsa.setAttribute("data-code", codeSnippet)

const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>`

BtnIcnRtDsa.innerHTML = `

<button class="BtnIcnRtDsa">Teste${icon}</button>
`

export default BtnIcnRtDsa