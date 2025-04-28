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
            fontSmallLabel: 12,
            fontSmallCaption: 8,
            Height340: 340
        }
    );

// Settings for headerDsa
    ClearCollect(
        constHeader,
        {
            logoScreen: Home,
            appName: "App Name",
            userData: User()
        }
    );

// settings for nav menu
    Set(constCurrentScreen, Home);
    Set(widthMenuOpen, 200);
    Set(widthMenuClosed, 44);
    ClearCollect(
        constNavMenu,
        {
            icon: Icon.Home,
            linkName: "Inicio",
            toScreen: Home
        }
    );

// settings for Modal
    Set(dsaModalShow, false);
    Set(dsaModalType, "info");
    Set(dsaModalMessage,  "Choose a modal type using Set at constTypeModal + 'info' or 'error' or 'warning' or 'success'. change this message using set at constMessageModal, change the icon with Set constModalIcon + icon name");
    Set(dsaModalIcon, Icon.Check);

// settings for Toast
    Set(dsaToastShow, true);
    Set(dsaToastType, "info");
    Set(dsaToastMessage, "Your message here!");

// settings for Badge
   Set(dsaBadgeType, "error");
   Set(dsaBadgeLabel, "Label");

// data sample for gallerys
ClearCollect(StarWarsCharacters,
    { Name: "Luke Skywalker" },
    { Name: "Darth Vader" },
    { Name: "Leia Organa" },
    { Name: "Han Solo" },
    { Name: "Obi-Wan Kenobi" },
    { Name: "Yoda" },
    { Name: "Anakin Skywalker" },
    { Name: "Padmé Amidala" },
    { Name: "Chewbacca" },
    { Name: "R2-D2" },
    { Name: "C-3PO" },
    { Name: "Boba Fett" },
    { Name: "Darth Maul" },
    { Name: "Mace Windu" },
    { Name: "Rey" },
    { Name: "Kylo Ren" },
    { Name: "Finn" },
    { Name: "Poe Dameron" },
    { Name: "Lando Calrissian" },
    { Name: "Ahsoka Tano" },
    { Name: "Luke Skywalker" },
    { Name: "Darth Vader" },
    { Name: "Leia Organa" },
    { Name: "Han Solo" },
    { Name: "Obi-Wan Kenobi" },
    { Name: "Yoda" },
    { Name: "Anakin Skywalker" },
    { Name: "Padmé Amidala" }
)
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