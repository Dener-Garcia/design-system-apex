import "./InputTextDsa.css"

const InputTextDsa = document.createElement("div")

const codeSnippet = `- InputTextDsa:
    Control: GroupContainer
    Variant: verticalAutoLayoutContainer
    Properties:
      DropShadow: =DropShadow.None
      Height: =labelText.Height + 40
      LayoutDirection: =LayoutDirection.Vertical
      LayoutJustifyContent: =LayoutJustifyContent.Center
      LayoutMode: =LayoutMode.Auto
      Width: =160
      X: =134
      Y: =172
    Children:
    - labelText:
        Control: Label
        Properties:
          Text: ="Label"
          AutoHeight: =true
          Color: |-
            =ColorValue(
            dsaTokens.colorContrastLight
            )
          Height: =0
          PaddingBottom: =4
          PaddingLeft: =8
          PaddingRight: =0
          PaddingTop: =4
          Size: |+
            =dsaTokens.fontLabel
          Width: =Parent.Width
    - textInput:
        Control: Classic/TextInput
        Properties:
          Default: =
          HintText: ="Placeholder"
          BorderColor: |-
            =ColorValue(
            dsaTokens.colorAccentSecondaryHover
            )
          BorderStyle: =BorderStyle.None
          Color: |-
            =ColorValue(
            dsaTokens.colorContrastLight
            )
          DisabledBorderColor: |-
            =ColorValue(
             dsaTokens.colorNeutral500
            )
          DisabledColor: |-
            =ColorValue(
            dsaTokens.colorNeutral400
            )
          DisabledFill: =ColorValue(dsaTokens.colorNeutral500)
          Fill: |-
            =ColorValue(
            dsaTokens.colorAccentSecondary
            )
          FocusedBorderThickness: '=2   '
          Height: =Parent.Height - labelText.Height
          HoverBorderColor: |-
            =ColorValue(
            dsaTokens.colorAccentSecondaryHover
            )
          HoverColor: |-
            =ColorValue(
            dsaTokens.colorContrastLight
            )
          HoverFill: |-
            =ColorValue(
                dsaTokens.colorAccentSecondaryHover
            )
          PaddingBottom: =0
          PaddingLeft: =8
          PaddingRight: =0
          PaddingTop: =0
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
            dsaTokens.colorAccentSecondaryHover
            )
          RadiusBottomLeft: =8
          RadiusBottomRight: =8
          RadiusTopLeft: =8
          RadiusTopRight: =8
          Size: =dsaTokens.fontLabel
          Width: =Parent.Width
          X: =360
          Y: =462
`

InputTextDsa.setAttribute("data-code", codeSnippet)

InputTextDsa.innerHTML =
    `
<div class="inputTextDsa">
    <label for="textInputDsa">Label</label>
    <input id="textInputDsa" type="text" placeholder="Placeholder">
</div>
`

export default InputTextDsa