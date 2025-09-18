import "./BadgeDsa.css"


const BadgeDsa = document.createElement("div")

const codeSnippet = `- BadgeDsa:
    Control: GroupContainer@1.3.0
    Variant: ManualLayout
    Properties:
      BorderColor: |-
        =ColorValue(
            If( dsaBadgeType = "info", dsaTokens.colorFeedbackInfoAccent,
             dsaBadgeType = "error", dsaTokens.colorFeedbackErrorAccent,
             dsaBadgeType = "warning", dsaTokens.colorFeedbackWarningAccent,
             dsaBadgeType = "success", dsaTokens.colorFeedbackSuccessAccent
             )
        )
      BorderThickness: =2
      DropShadow: =DropShadow.None
      Fill: |-
        =ColorValue(
            If( dsaBadgeType = "info", dsaTokens.colorFeedbackInfo,
             dsaBadgeType = "error", dsaTokens.colorFeedbackError,
             dsaBadgeType = "warning", dsaTokens.colorFeedbackWarning,
             dsaBadgeType = "success", dsaTokens.colorFeedbackSuccess
             )
        )
      Height: =28
      RadiusBottomLeft: =8
      RadiusBottomRight: =8
      RadiusTopLeft: =8
      RadiusTopRight: =8
      Width: =140
      X: =42
      Y: =160
    Children:
      - LabelBadge:
          Control: Label@2.5.1
          Properties:
            Align: =Align.Center
            BorderColor: =RGBA(0, 18, 107, 1)
            Color: |-
              =ColorValue(
              dsaTokens.colorNeutral100
              )
            DisplayMode: =DisplayMode.View
            Font: =Font.'Open Sans'
            Height: =Parent.Height
            PaddingBottom: =0
            PaddingLeft: =0
            PaddingRight: =0
            PaddingTop: =0
            Size: =dsaTokens.fontSmallLabel
            Text: =dsaBadgeLabel
            Width: =Parent.Width
            Wrap: =false
      - BadgeAction:
          Control: Classic/Button@2.2.0
          Properties:
            AutoDisableOnSelect: =false
            BorderColor: =ColorFade(Self.Fill, -15%)
            Color: =RGBA(0, 0, 0, 0)
            DisabledBorderColor: =RGBA(166, 166, 166, 1)
            Fill: =RGBA(0, 0, 0, 0)
            Font: =Font.'Open Sans'
            Height: =Parent.Height
            HoverBorderColor: =ColorFade(Self.BorderColor, 20%)
            HoverColor: =RGBA(0, 0, 0, 0)
            HoverFill: =Self.Color
            OnSelect: =
            PaddingBottom: =0
            PaddingLeft: =0
            PaddingRight: =0
            PaddingTop: =0
            PressedBorderColor: =Self.Fill
            PressedColor: =Self.Fill
            PressedFill: =Self.Color
            Text: =
            Width: =Parent.Width
`
const properties = `
// settings for badge
<pre>
  <code>
  Set(dsaBadgeType, "info");
  </code>
</pre>

<section class="details">
  <div class="code-details">
    <h6>dsaBadgeType</h6>
    <p>Mude o tipo do Badge ao setar essa variavel para "info", "warning", "success" ou "error" conforme o tipo de mensagem que voce deseja mostrar para o usuario.</p>
  </div>
    <div class="code-details">
    <h6>dsaBadgeLabel</h6>
    <p>Altere o texto manipulando essa variavel com um Set(dsaBadgeLabel, "novo texto") ou utilize o seu texto.</p>
  </div>
</section>

Set(dsaBadgeLabel, "Label badge warning")
`

BadgeDsa.setAttribute('data-code', codeSnippet)
BadgeDsa.setAttribute('data-properties', properties)

BadgeDsa.innerHTML = `<div class="BadgeDsa">Label</div>`

export default BadgeDsa