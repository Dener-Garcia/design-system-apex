import "./inputRadioHzDsa.css"
import preview from "/assets/components-preview/RadioDsa.png"

const InputRadioHzDsa = document.createElement("div")

const codeSnippet = `- InputRadioHzDsa:
    Control: GroupContainer
    Variant: verticalAutoLayoutContainer
    Properties:
      DropShadow: =DropShadow.None
      Height: |+
        =80
      LayoutDirection: =LayoutDirection.Vertical
      LayoutMode: =LayoutMode.Auto
      RadiusBottomLeft: =8
      RadiusBottomRight: =8
      RadiusTopLeft: =8
      RadiusTopRight: =8
      Width: =446
      X: =134
      Y: =540
    Children:
    - labelRadio:
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
          Size: =dsaTokens.fontLabel
          Width: =Parent.Width
    - radioContainer:
        Control: GroupContainer
        Variant: horizontalAutoLayoutContainer
        Properties:
          AlignInContainer: =AlignInContainer.SetByContainer
          DropShadow: =DropShadow.None
          Height: =Parent.Height - labelRadio.Height
          LayoutGap: =16
          LayoutMinHeight: =0
          LayoutMinWidth: =0
          LayoutMode: =LayoutMode.Auto
          Width: =Parent.Width
        Children:
        - radio:
            Control: Classic/Radio
            Properties:
              Default: ="Option 1"
              Items: |+
                =["Option 1", "Option 2", "Option 3"]
              AlignInContainer: =AlignInContainer.Start
              BorderColor: =ColorValue("#ffffff00")
              BorderStyle: =BorderStyle.None
              Color: |-
                =ColorValue(
                dsaTokens.colorContrastLight
                )
              FillPortions: =1
              Height: =Parent.Height
              HoverColor: |-
                =ColorValue(
                 dsaTokens.colorAccentPrimaryHover
                )
              Layout: =Layout.Horizontal
              LayoutMinWidth: =0
              PaddingBottom: =0
              PaddingTop: '=0   '
              PressedColor: |-
                =ColorValue(
                dsaTokens.colorAccentPrimaryHover
                )
              RadioBackgroundFill: |-
                =ColorValue(
                dsaTokens.colorAccentSecondary
                )
              RadioBorderColor: |-
                =ColorValue(
                dsaTokens.colorAccentPrimary
                )
              RadioSelectionFill: |-
                =ColorValue(
                dsaTokens.colorAccentPrimaryHover
                )
              Size: =dsaTokens.fontLabel
              Width: =Parent.Width
              X: =136
              Y: =364
`

InputRadioHzDsa.setAttribute("data-code", codeSnippet)

InputRadioHzDsa.innerHTML =
`
<img src=${preview} alt="Imagem combo box para power apps" />
`

export default InputRadioHzDsa