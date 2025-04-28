import "./BtnTerDsa.css"

const BtnTerDsa = document.createElement("div")

const codeSnippet = `- BtnTerDsa:
    Control: Classic/Button@2.2.0
    Properties:
      BorderColor: |-
        =ColorValue(
            "#ffffff00"
        )
      BorderStyle: =BorderStyle.None
      Color: |-
        =ColorValue(
        dsaTokens.colorAccentPrimary
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
            "#ffffff00"
        )
      Fill: |-
        =ColorValue(
            "#ffffff00"
        )
      FocusedBorderColor: |-
        =ColorValue(
        dsaTokens.colorNeutral200
        )
      FocusedBorderThickness: '=2 '
      Font: =Font.'Open Sans'
      HoverBorderColor: |-
        =ColorValue(
            "#ffffff00"
        )
      HoverColor: |-
        =ColorValue(
         dsaTokens.colorAccentPrimaryHover
        )
      HoverFill: |-
        =ColorValue(
            "#ffffff00"
        )
      PaddingBottom: =8
      PaddingLeft: =16
      PaddingRight: =16
      PaddingTop: =8
      PressedBorderColor: |-
        =ColorValue(
            "#ffffff00"
        )
      PressedColor: |-
        =ColorValue(
        dsaTokens.colorAccentPrimary
        )
      PressedFill: |-
        =ColorValue(
            "#ffffff00"
        )
      RadiusBottomLeft: =200
      RadiusBottomRight: =200
      RadiusTopLeft: =200
      RadiusTopRight: =200
      Size: =dsaTokens.fontText
      Underline: =true
      X: =458
      Y: =237


`

BtnTerDsa.setAttribute("data-code", codeSnippet)

BtnTerDsa.innerHTML = `<button class="BtnTerDsa">Label</button>`

export default BtnTerDsa