import "./BtnDangerDsa.css"


const BtnDangerDsa = document.createElement("div")

const codeSnippet = `- BtnIcnLfDsa:
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
      X: =727
      Y: =150
    Children:
    - btniconLt:
        Control: Classic/Button
        Properties:
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
          HoverColor: "=ColorValue(
dsaTokens.colorContrastDark
)   "
          HoverFill: |-
            =ColorValue(
            dsaTokens.colorAccentPrimaryHover
            )
          PaddingBottom: =8
          PaddingLeft: '=8   '
          PaddingRight: =8
          PaddingTop: =8
          PressedBorderColor: |-
            =ColorValue(
            dsaTokens.colorAccentSecondaryHover
            )
          PressedColor: "=ColorValue(
dsaTokens.colorContrastDark
)   "
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
    - btnIcnLt:
        Control: Classic/Icon
        Variant: Add
        Properties:
          Color: |-
            =If(
                btniconLt.DisplayMode = DisplayMode.Disabled,
                ColorValue(dsaTokens.colorNeutral300),
                ColorValue(dsaTokens.colorContrastDark)
            )
          Height: =btniconLt.Size
          Icon: =Icon.ChevronDown
          Width: =btniconLt.Size
          X: = Self.Width + 8
          Y: =btniconLt.Height /2 - Self.Height /2
`

BtnDangerDsa.setAttribute('data-code', codeSnippet)

BtnDangerDsa.innerHTML = `<button class="BtnDangerDsa">teste</button>`

export default BtnDangerDsa