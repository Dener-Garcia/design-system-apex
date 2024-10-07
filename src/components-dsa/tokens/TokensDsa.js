import "./tokensDsa.css"

const TokensDsa = document.createElement("div")

const codeSnippet = `
// Design system tokens
    Set(dsaTokens,
        {
            colorBgPrimary: "#F3F3F6",
            colorBgSecondary: "#ffffff",
            colorAccentPrimary: "#2525D0",
            colorAccentPrimaryHover: "#2929A3",
            colorAccentSecondary: "#F8F8FC",
            colorAccentSecondaryHover: "#EAEAF6",
            colorAccentTertiary: "#BC5AED",
            colorFeedbackInfo: "#EEF2FC",
            colorFeedbackInfoAccent: "#A8BDF0",
            colorFeedbackError: "#FDEDF2",
            colorFeedbackErrorAccent: "#ED5A8B",
            colorFeedbackWarning: "#F8FAD1",
            colorFeedbackWarningAccent: "#E9C534",
            colorFeedbackSuccess: "#BCF0D6",
            colorFeedbackSuccessAccent: "#16CA52",
            colorContrastDark: "#F4F4F6",
            colorContrastLight: "#26262C",
            colorNeutral100: "#383842",
            colorNeutral200: "#676779",
            colorNeutral300: "#9C9CAB",
            colorNeutral400: "#D8D8DE",
            colorNeutral500: "#E9E9EC",
            fontTitleHero: 48,
            fontSubTitle: 32,
            fontTextLarge: 24,
            fontTextMedium: 20,
            fontText: 16,
            fontLabel: 14,
            fontSmallLabel: 12
        }
    );
    `

TokensDsa.setAttribute("data-code", codeSnippet)

TokensDsa.innerHTML =
`
<pre>
<code class="tokensDsa">
// Tokens, copy into App.OnStart or OnVissible of home screen
    Set(dsaTokens,
        {
            colorBgPrimary: "#F3F3F6",
            colorBgSecondary: "#ffffff",
            colorAccentPrimary: "#2525D0",
            colorAccentPrimaryHover: "#2929A3",
            colorAccentSecondary: "#F8F8FC",
            colorAccentSecondaryHover: "#EAEAF6",
            colorAccentTertiary: "#BC5AED",
            colorFeedbackInfo: "#EEF2FC",
            colorFeedbackInfoAccent: "#A8BDF0",
            colorFeedbackError: "#FDEDF2",
            colorFeedbackErrorAccent: "#ED5A8B",
            colorFeedbackWarning: "#F8FAD1",
            colorFeedbackWarningAccent: "#E9C534",
            colorFeedbackSuccess: "#BCF0D6",
            colorFeedbackSuccessAccent: "#16CA52",
            colorContrastDark: "#F4F4F6",
            colorContrastLight: "#26262C",
            colorNeutral100: "#383842",
            colorNeutral200: "#676779",
            colorNeutral300: "#9C9CAB",
            colorNeutral400: "#D8D8DE",
            colorNeutral500: "#E9E9EC",
            fontTitleHero: 48,
            fontSubTitle: 32,
            fontTextLarge: 24,
            fontTextMedium: 20,
            fontText: 16,
            fontLabel: 14,
            fontSmallLabel: 12
        }
    );
    </code>
    </pre>
`

export default TokensDsa