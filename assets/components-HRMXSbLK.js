import{B as b,a as w,b as F,d as G,e as I,f as M,g as W,c as U}from"./BtnDangerDsa-mZ1jmG2L.js";const l=document.createElement("div"),E=`- BtnIcnRtDsa:
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

`;l.setAttribute("data-code",E);const O='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>';l.innerHTML=`

<button class="BtnIcnRtDsa">Teste${O}</button>
`;const d=document.createElement("div"),N=`- BtnIconDangerDsa:
    Control: GroupContainer@1.3.0
    Variant: ManualLayout
    Properties:
      DropShadow: =DropShadow.None
      Height: =40
      RadiusBottomLeft: =200
      RadiusBottomRight: =200
      RadiusTopLeft: =200
      RadiusTopRight: =200
      Width: =40
      X: =1158
      Y: =422
    Children:
      - btnIconPrimaryButton_1:
          Control: Classic/Button@2.2.0
          Properties:
            BorderColor: |-
              =ColorValue(
              dsaTokens.colorFeedbackErrorAccent)
            BorderThickness: =0
            Color: |-
              =ColorValue(
              dsaTokens.colorContrastDark
              )
            DisabledBorderColor: =RGBA(166, 166, 166, 1)
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
            Font: =Font.'Open Sans'
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
              dsaTokens.colorFeedbackErrorAccent
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
            Text: =
            Tooltip: =
            Width: =Parent.Width
            Y: '=0   '
      - btnIconPrimaryIcon_1:
          Control: Classic/Icon@2.5.0
          Properties:
            BorderColor: =RGBA(0, 18, 107, 1)
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

`;d.setAttribute("data-code",N);const Z='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>';d.innerHTML=`<button class="BtnIcnDangerDsa">${Z}</button>`;const s=document.createElement("div"),z=`- InputTextDsa:
    Control: GroupContainer@1.3.0
    Variant: AutoLayout
    Properties:
      DropShadow: =DropShadow.None
      Height: =labelText.Height + 40
      LayoutDirection: =LayoutDirection.Vertical
      LayoutJustifyContent: =LayoutJustifyContent.Center
      Width: =160
      X: =68
      Y: =132
    Children:
      - labelText:
          Control: Label@2.5.1
          Properties:
            AutoHeight: =true
            BorderColor: =RGBA(0, 18, 107, 1)
            Color: |-
              =ColorValue(
              dsaTokens.colorContrastLight
              )
            Font: =Font.'Open Sans'
            Height: =0
            PaddingBottom: =4
            PaddingLeft: =8
            PaddingRight: =0
            PaddingTop: =4
            Size: |
              =dsaTokens.fontLabel
            Text: ="Label"
            Width: =Parent.Width
      - textInput:
          Control: Classic/TextInput@2.3.2
          Properties:
            BorderColor: |-
              =ColorValue(
              dsaTokens.colorAccentSecondaryHover
              )
            BorderStyle: =BorderStyle.None
            Color: |-
              =ColorValue(
              dsaTokens.colorContrastLight
              )
            Default: =
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
            Font: =Font.'Open Sans'
            Height: =Parent.Height - labelText.Height
            HintText: ="Placeholder"
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

`;s.setAttribute("data-code",z);s.innerHTML=`
<div class="inputTextDsa">
    <label for="textInputDsa">Label</label>
    <input id="textInputDsa" type="text" placeholder="Placeholder">
</div>
`;const Y="/design-system-apex/assets/components-preview/ComboBoxDsa.png",C=document.createElement("div"),X=`- comboBoxDsa:
    Control: GroupContainer@1.3.0
    Variant: AutoLayout
    Properties:
      DropShadow: =DropShadow.None
      Height: '=labelComboBoxDsa.Height + 40   '
      LayoutDirection: =LayoutDirection.Vertical
      LayoutJustifyContent: =LayoutJustifyContent.Center
      RadiusBottomLeft: =8
      RadiusBottomRight: =8
      RadiusTopLeft: =8
      RadiusTopRight: =8
      Width: =160
      X: =311
      Y: =132
    Children:
      - labelComboBoxDsa:
          Control: Label@2.5.1
          Properties:
            AutoHeight: =true
            BorderColor: =RGBA(0, 18, 107, 1)
            Color: |-
              =ColorValue(
              dsaTokens.colorContrastLight
              )
            Font: =Font.'Open Sans'
            Height: =0
            PaddingBottom: =4
            PaddingLeft: =8
            PaddingRight: =0
            PaddingTop: =4
            Size: =dsaTokens.fontLabel
            Text: ="Label"
            Width: =Parent.Width
      - comboBoxDsaContainer:
          Control: GroupContainer@1.3.0
          Variant: ManualLayout
          Properties:
            AlignInContainer: =AlignInContainer.SetByContainer
            DropShadow: =DropShadow.None
            FillPortions: =0
            Height: =Parent.Height - labelComboBoxDsa.Height
            LayoutMinWidth: =0
            RadiusBottomLeft: =8
            RadiusBottomRight: =8
            RadiusTopLeft: =8
            RadiusTopRight: =8
            Width: =Parent.Width
            X: =220
            Y: =330
          Children:
            - comboBox:
                Control: Classic/ComboBox@2.4.0
                Properties:
                  BorderColor: |-
                    =ColorValue(
                       "#ffffff00"
                    )
                  BorderStyle: =BorderStyle.None
                  BorderThickness: =0
                  ChevronBackground: |-
                    =ColorValue(
                        "#ffffff00"
                    )
                  ChevronDisabledBackground: |-
                    =ColorValue(
                     dsaTokens.colorNeutral400
                    )
                  ChevronDisabledFill: |-
                    =ColorValue(
                    dsaTokens.colorNeutral400
                    )
                  ChevronFill: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimary
                    )
                  ChevronHoverBackground: |-
                    =ColorValue(
                      dsaTokens.colorAccentPrimaryHover
                    )
                  ChevronHoverFill: |-
                    =ColorValue(
                     dsaTokens.colorContrastDark
                    )
                  Color: |-
                    =ColorValue(
                    dsaTokens.colorContrastLight
                    )
                  DisabledBorderColor: =ColorValue(dsaTokens.colorNeutral400)
                  DisabledColor: =ColorValue(dsaTokens.colorNeutral300)
                  DisabledFill: =ColorValue(dsaTokens.colorNeutral500)
                  Fill: |-
                    =ColorValue(
                    dsaTokens.colorAccentSecondary
                    )
                  Font: =Font.'Open Sans'
                  Height: =Parent.Height
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
                  PressedBorderColor: =RGBA(0, 0, 0, 0)
                  PressedColor: |-
                    =ColorValue(
                    dsaTokens.colorContrastDark
                    )
                  PressedFill: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimaryHover
                    )
                  SelectionColor: |-
                    =ColorValue(
                    dsaTokens.colorContrastDark
                    )
                  SelectionFill: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimary
                    )
                  SelectionTagColor: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimary
                    )
                  SelectionTagFill: |-
                    =ColorValue(
                    dsaTokens.colorAccentSecondaryHover
                    )
                  Size: =dsaTokens.fontLabel
                  Width: =Parent.Width

`;C.setAttribute("data-code",X);C.innerHTML=`
<img src=${Y} alt="Imagem combo box para power apps" />
`;const $="/design-system-apex/assets/components-preview/CheckboxDsa.png",c=document.createElement("div"),J=`- InputCheckBoxHzDsa:
    Control: GroupContainer@1.3.0
    Variant: AutoLayout
    Properties:
      DropShadow: =DropShadow.None
      Height: =labelCheckBox.Height + 40
      LayoutDirection: =LayoutDirection.Vertical
      RadiusBottomLeft: =8
      RadiusBottomRight: =8
      RadiusTopLeft: =8
      RadiusTopRight: =8
      Width: =430
      X: =68
      Y: =332
    Children:
      - labelCheckBox:
          Control: Label@2.5.1
          Properties:
            AutoHeight: =true
            BorderColor: =RGBA(0, 18, 107, 1)
            Color: |-
              =ColorValue(
                 dsaTokens.colorContrastLight
              )
            DisabledColor: |-
              =ColorValue(
                  dsaTokens.colorNeutral400
                  )
            Font: =Font.'Open Sans'
            Height: =0
            PaddingBottom: =4
            PaddingLeft: =8
            PaddingRight: =0
            PaddingTop: =4
            Size: =dsaTokens.fontLabel
            Text: ="Label"
            Width: =Parent.Width
      - checkboxContainer:
          Control: GroupContainer@1.3.0
          Variant: AutoLayout
          Properties:
            AlignInContainer: =AlignInContainer.SetByContainer
            DropShadow: =DropShadow.None
            Height: =Parent.Height - labelCheckBox.Height
            LayoutDirection: =LayoutDirection.Horizontal
            LayoutGap: =16
            LayoutMinHeight: =0
            LayoutMinWidth: =0
            Width: =Parent.Width
          Children:
            - Checkbox1:
                Control: Classic/CheckBox@2.1.0
                Properties:
                  BorderColor: |-
                    =ColorValue(
                     "#ffffff00"
                    )
                  BorderStyle: =BorderStyle.None
                  CheckboxBackgroundFill: |-
                    =ColorValue(
                    dsaTokens.colorAccentSecondary
                    )
                  CheckboxBorderColor: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimaryHover
                    )
                  CheckmarkFill: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimary
                    )
                  Color: |-
                    =ColorValue(
                    dsaTokens.colorContrastLight
                    )
                  DisabledBorderColor: |-
                    =ColorValue(
                    dsaTokens.colorNeutral400
                    )
                  DisabledColor: |-
                    =ColorValue(
                    dsaTokens.colorNeutral300
                    )
                  DisabledFill: |-
                    =ColorValue(
                        "#ffffff00"
                    )
                  FillPortions: =1
                  Font: =Font.'Open Sans'
                  Height: =40
                  HoverColor: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimaryHover
                    )
                  LayoutMinWidth: =0
                  PressedColor: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimaryHover
                    )
                  Size: =dsaTokens.fontLabel
                  Text: ="Option 1"
                  Width: =Parent.Width
                  X: =10
            - Checkbox2:
                Control: Classic/CheckBox@2.1.0
                Properties:
                  BorderColor: |-
                    =ColorValue(
                     "#ffffff00"
                    )
                  BorderStyle: =BorderStyle.None
                  CheckboxBackgroundFill: |-
                    =ColorValue(
                    dsaTokens.colorAccentSecondary
                    )
                  CheckboxBorderColor: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimaryHover
                    )
                  CheckmarkFill: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimary
                    )
                  Color: |-
                    =ColorValue(
                    dsaTokens.colorContrastLight
                    )
                  DisabledBorderColor: |-
                    =ColorValue(
                    dsaTokens.colorNeutral400
                    )
                  DisabledColor: |-
                    =ColorValue(
                    dsaTokens.colorNeutral300
                    )
                  DisabledFill: |-
                    =ColorValue(
                        "#ffffff00"
                    )
                  FillPortions: =1
                  Font: =Font.'Open Sans'
                  Height: =40
                  HoverColor: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimaryHover
                    )
                  LayoutMinWidth: =0
                  PressedColor: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimaryHover
                    )
                  Size: =dsaTokens.fontLabel
                  Text: ="Option 2"
                  Width: =Parent.Width
                  X: =10
            - Checkbox3:
                Control: Classic/CheckBox@2.1.0
                Properties:
                  BorderColor: |-
                    =ColorValue(
                     "#ffffff00"
                    )
                  BorderStyle: =BorderStyle.None
                  CheckboxBackgroundFill: |-
                    =ColorValue(
                    dsaTokens.colorAccentSecondary
                    )
                  CheckboxBorderColor: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimaryHover
                    )
                  CheckmarkFill: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimary
                    )
                  Color: |-
                    =ColorValue(
                    dsaTokens.colorContrastLight
                    )
                  DisabledBorderColor: |-
                    =ColorValue(
                    dsaTokens.colorNeutral400
                    )
                  DisabledColor: |-
                    =ColorValue(
                    dsaTokens.colorNeutral300
                    )
                  DisabledFill: |-
                    =ColorValue(
                        "#ffffff00"
                    )
                  FillPortions: =1
                  Font: =Font.'Open Sans'
                  Height: =40
                  HoverColor: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimaryHover
                    )
                  LayoutMinWidth: =0
                  PressedColor: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimaryHover
                    )
                  Size: =dsaTokens.fontLabel
                  Text: ="Option 3"
                  Width: =Parent.Width
                  X: =10

`;c.setAttribute("data-code",J);c.innerHTML=`
<img src=${$} alt="Imagem combo box para power apps" />
`;const j="/design-system-apex/assets/components-preview/DropdownDsa.png",p=document.createElement("div"),q=`- InputDropdownDsa:
    Control: GroupContainer@1.3.0
    Variant: AutoLayout
    Properties:
      DropShadow: =DropShadow.None
      Height: '=labelDropdown.Height + 40   '
      LayoutDirection: =LayoutDirection.Vertical
      LayoutJustifyContent: =LayoutJustifyContent.Center
      RadiusBottomLeft: =8
      RadiusBottomRight: =8
      RadiusTopLeft: =8
      RadiusTopRight: =8
      Width: =160
      X: =557
      Y: =132
    Children:
      - labelDropdown:
          Control: Label@2.5.1
          Properties:
            AutoHeight: =true
            BorderColor: =RGBA(0, 18, 107, 1)
            Color: |-
              =ColorValue(
              dsaTokens.colorContrastLight
              )
            Font: =Font.'Open Sans'
            Height: =0
            PaddingBottom: =4
            PaddingLeft: =8
            PaddingRight: =0
            PaddingTop: =4
            Size: =dsaTokens.fontLabel
            Text: ="Label"
            Width: =Parent.Width
      - dropDownContainer:
          Control: GroupContainer@1.3.0
          Variant: ManualLayout
          Properties:
            BorderThickness: '=0   '
            DropShadow: =DropShadow.None
            FillPortions: =0
            Height: =Parent.Height - labelDropdown.Height
            LayoutMinWidth: =0
            RadiusBottomLeft: =8
            RadiusBottomRight: =8
            RadiusTopLeft: =8
            RadiusTopRight: =8
            Width: =Parent.Width
            X: =220
            Y: =330
          Children:
            - dropdown:
                Control: Classic/DropDown@2.3.1
                Properties:
                  BorderColor: |-
                    =ColorValue(
                       "#ffffff00"
                    )
                  BorderStyle: =BorderStyle.None
                  ChevronBackground: |-
                    =ColorValue(
                        "#ffffff00"
                    )
                  ChevronDisabledBackground: |-
                    =ColorValue(
                    dsaTokens.colorNeutral400
                    )
                  ChevronDisabledFill: |-
                    =ColorValue(
                    dsaTokens.colorNeutral300
                    )
                  ChevronFill: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimary
                    )
                  ChevronHoverBackground: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimaryHover
                    )
                  ChevronHoverFill: |-
                    =ColorValue(
                    dsaTokens.colorContrastDark
                    )
                  Color: |-
                    =ColorValue(
                    dsaTokens.colorContrastLight
                    )
                  DisabledBorderColor: =RGBA(0, 0, 0, 0)
                  DisabledColor: |-
                    =ColorValue(
                    dsaTokens.colorNeutral300
                    )
                  DisabledFill: |-
                    =ColorValue(
                      dsaTokens.colorNeutral500
                    )
                  Fill: |-
                    =ColorValue(
                    dsaTokens.colorAccentSecondary
                    )
                  Font: =Font.'Open Sans'
                  Height: =Parent.Height
                  HoverBorderColor: |-
                    =ColorValue(
                    dsaTokens.colorAccentSecondary
                    )
                  HoverColor: |-
                    =ColorValue(
                    dsaTokens.colorContrastLight
                    )
                  HoverFill: |-
                    =ColorValue(
                    dsaTokens.colorAccentSecondaryHover
                    )
                  Items.Value: =Value
                  PaddingBottom: =0
                  PaddingLeft: =8
                  PaddingRight: =0
                  PaddingTop: =0
                  PressedColor: |-
                    =ColorValue(
                    dsaTokens.colorContrastDark
                    )
                  PressedFill: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimaryHover
                    )
                  SelectionColor: |-
                    =ColorValue(
                    dsaTokens.colorContrastDark
                    )
                  SelectionFill: |-
                    =ColorValue(
                     dsaTokens.colorAccentPrimary
                    )
                  Size: =dsaTokens.fontLabel
                  Width: =Parent.Width

`;p.setAttribute("data-code",q);p.innerHTML=`
<img src=${j} alt="Imagem combo box para power apps" />
`;const K="/design-system-apex/assets/components-preview/calendarDsa.png",u=document.createElement("div"),Q=`- DatePickerDsa:
    Control: GroupContainer@1.3.0
    Variant: AutoLayout
    Properties:
      DropShadow: =DropShadow.None
      Height: '=InputDataPickerDsa.Height + 40   '
      LayoutDirection: =LayoutDirection.Vertical
      LayoutJustifyContent: =LayoutJustifyContent.Center
      RadiusBottomLeft: =8
      RadiusBottomRight: =8
      RadiusTopLeft: =8
      RadiusTopRight: =8
      Width: =234
      X: =815
      Y: =132
    Children:
      - InputDataPickerDsa:
          Control: Label@2.5.1
          Properties:
            AutoHeight: =true
            BorderColor: =RGBA(0, 18, 107, 1)
            Color: |-
              =ColorValue(
              dsaTokens.colorContrastLight
              )
            Font: =Font.'Open Sans'
            PaddingBottom: =4
            PaddingLeft: =8
            PaddingRight: =0
            PaddingTop: =4
            Size: '=dsaTokens.fontLabel '
            Text: ="Label"
            Width: =Parent.Width
      - datePickerContainer:
          Control: GroupContainer@1.3.0
          Variant: ManualLayout
          Properties:
            AlignInContainer: =AlignInContainer.SetByContainer
            DropShadow: =DropShadow.None
            FillPortions: =0
            Height: =Parent.Height - InputDataPickerDsa.Height
            LayoutMinWidth: =0
            RadiusBottomLeft: =8
            RadiusBottomRight: =8
            RadiusTopLeft: =8
            RadiusTopRight: =8
            Width: =Parent.Width
            X: =220
            Y: =330
          Children:
            - datePickerInput:
                Control: Classic/DatePicker@2.6.0
                Properties:
                  BorderColor: |-
                    =ColorValue(
                    dsaTokens.colorAccentSecondaryHover
                    )
                  BorderThickness: =0
                  Color: |-
                    =ColorValue(
                    dsaTokens.colorContrastLight
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
                    dsaTokens.colorNeutral500
                    )
                  Fill: |-
                    =ColorValue(
                    dsaTokens.colorAccentSecondary
                    )
                  FocusedBorderColor: |-
                    =ColorValue(
                    dsaTokens.colorNeutral300
                    )
                  FocusedBorderThickness: =0
                  Font: =Font.'Open Sans'
                  IconBackground: |-
                    =ColorValue(
                    dsaTokens.colorAccentSecondary
                    )
                  IconFill: |-
                    =ColorValue(
                    dsaTokens.colorAccentPrimary
                    )
                  PaddingBottom: =0
                  PaddingLeft: '=8   '
                  PaddingRight: =0
                  Size: =dsaTokens.fontLabel
                  Width: =Parent.Width

`;u.setAttribute("data-code",Q);u.innerHTML=`
<img src=${K} alt="Imagem combo box para power apps" />
`;const o1="/design-system-apex/assets/components-preview/ToggleDsa.png",h=document.createElement("div"),e1=`- InputToggleDsa:
    Control: GroupContainer@1.3.0
    Variant: AutoLayout
    Properties:
      DropShadow: =DropShadow.None
      Height: =labelToggle.Height + Toggle.Height
      LayoutDirection: =LayoutDirection.Vertical
      Width: |+
        =100


      X: =1119
      Y: =144
    Children:
      - labelToggle:
          Control: Label@2.5.1
          Properties:
            AutoHeight: =true
            BorderColor: =RGBA(0, 18, 107, 1)
            Color: |-
              =ColorValue(
              dsaTokens.colorContrastLight
              )
            Font: =Font.'Open Sans'
            Height: =31
            PaddingBottom: =4
            PaddingLeft: =8
            PaddingRight: =0
            PaddingTop: =4
            Size: '=dsaTokens.fontLabel '
            Text: ="Label"
            Width: =Parent.Width
            Y: =124
      - Toggle:
          Control: Classic/Toggle@2.1.0
          Properties:
            BorderColor: =RGBA(0, 18, 107, 1)
            BorderStyle: =BorderStyle.None
            Color: =ColorValue(dsaTokens.colorContrastLight)
            DisabledBorderColor: |-
              =ColorValue(
              dsaTokens.colorNeutral300
              )
            DisabledColor: =ColorValue(dsaTokens.colorNeutral300)
            FalseFill: =ColorValue(dsaTokens.colorFeedbackInfoAccent)
            FalseHoverFill: |-
              =ColorValue(
                  dsaTokens.colorAccentPrimary)
            Font: =Font.'Open Sans'
            HandleFill: |-
              =ColorValue(
                  dsaTokens.colorAccentSecondaryHover)
            Height: |+
              =28

            HoverBorderColor: =ColorValue(dsaTokens.colorNeutral400)
            PressedBorderColor: |-
              =ColorValue(
                  dsaTokens.colorAccentPrimaryHover)
            Size: =dsaTokens.fontLabel
            TrueFill: =ColorValue(dsaTokens.colorAccentPrimaryHover)
            Width: =Parent.Width
            X: =1105
            Y: =359

`;h.setAttribute("data-code",e1);h.innerHTML=`
<img src=${o1} alt="Imagem combo box para power apps" />
`;const t1="/design-system-apex/assets/components-preview/RadioDsa.png",f=document.createElement("div"),r1=`- InputRadioHzDsa:
    Control: GroupContainer@1.3.0
    Variant: AutoLayout
    Properties:
      DropShadow: =DropShadow.None
      Height: |
        =80
      LayoutDirection: =LayoutDirection.Vertical
      RadiusBottomLeft: =8
      RadiusBottomRight: =8
      RadiusTopLeft: =8
      RadiusTopRight: =8
      Width: =460
      X: =739
      Y: =332
    Children:
      - labelRadio:
          Control: Label@2.5.1
          Properties:
            AutoHeight: =true
            BorderColor: =RGBA(0, 18, 107, 1)
            Color: |-
              =ColorValue(
              dsaTokens.colorContrastLight
              )
            Font: =Font.'Open Sans'
            Height: =0
            PaddingBottom: =4
            PaddingLeft: =8
            PaddingRight: =0
            PaddingTop: =4
            Size: =dsaTokens.fontLabel
            Text: ="Label"
            Width: =Parent.Width
      - radioContainer:
          Control: GroupContainer@1.3.0
          Variant: AutoLayout
          Properties:
            AlignInContainer: =AlignInContainer.SetByContainer
            DropShadow: =DropShadow.None
            Height: =Parent.Height - labelRadio.Height
            LayoutDirection: =LayoutDirection.Horizontal
            LayoutGap: =16
            LayoutMinHeight: =0
            LayoutMinWidth: =0
            Width: =Parent.Width
          Children:
            - radio:
                Control: Classic/Radio@2.3.0
                Properties:
                  AlignInContainer: =AlignInContainer.Start
                  BorderColor: =ColorValue("#ffffff00")
                  BorderStyle: =BorderStyle.None
                  Color: |-
                    =ColorValue(
                    dsaTokens.colorContrastLight
                    )
                  Default: ="Option 1"
                  FillPortions: =1
                  Font: =Font.'Open Sans'
                  Height: =Parent.Height
                  HoverColor: |-
                    =ColorValue(
                     dsaTokens.colorAccentPrimaryHover
                    )
                  Items: |
                    =["Option 1", "Option 2", "Option 3"]
                  Items.Value: =Value
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

`;f.setAttribute("data-code",r1);f.innerHTML=`
<img src=${t1} alt="Imagem combo box para power apps" />
`;const a1="/design-system-apex/assets/components-preview/pageTemplate.png",t=document.createElement("div"),i1=`- mainContainer:
    Control: GroupContainer@1.3.0
    Variant: AutoLayout
    Properties:
      DropShadow: =DropShadow.None
      Height: =App.Height
      LayoutDirection: =LayoutDirection.Vertical
      RadiusBottomLeft: =0
      RadiusBottomRight: =0
      RadiusTopLeft: =0
      RadiusTopRight: =0
      Width: =App.Width
    Children:
      - HeaderDsa:
          Control: GroupContainer@1.3.0
          Variant: ManualLayout
          Properties:
            DropShadow: =DropShadow.None
            FillPortions: =0
            Height: |
              =40
            RadiusBottomLeft: =0
            RadiusBottomRight: =0
            RadiusTopLeft: =0
            RadiusTopRight: =0
          Children:
            - HeaderContainer:
                Control: GroupContainer@1.3.0
                Variant: ManualLayout
                Properties:
                  DropShadow: =DropShadow.None
                  Fill: =ColorValue(dsaTokens.colorBgPrimary)
                  Height: =Parent.Height
                  RadiusBottomLeft: =0
                  RadiusBottomRight: =0
                  RadiusTopLeft: =0
                  RadiusTopRight: =0
                  Width: =Parent.Width
                Children:
                  - headerContent_1:
                      Control: GroupContainer@1.3.0
                      Variant: AutoLayout
                      Properties:
                        DropShadow: =DropShadow.None
                        Height: =Parent.Height
                        LayoutDirection: =LayoutDirection.Horizontal
                        PaddingLeft: =
                        PaddingRight: '=8   '
                        Width: =Parent.Width
                        Y: |
                          =0
                      Children:
                        - logoContainer_1:
                            Control: GroupContainer@1.3.0
                            Variant: AutoLayout
                            Properties:
                              AlignInContainer: =AlignInContainer.SetByContainer
                              DropShadow: =DropShadow.None
                              Fill: =ColorValue("#ffffff00")
                              Height: =Parent.Height
                              LayoutDirection: =LayoutDirection.Horizontal
                              LayoutGap: =4
                              LayoutMinHeight: =32
                              LayoutMinWidth: =80
                              PaddingLeft: =4
                              RadiusBottomLeft: =0
                              RadiusBottomRight: =0
                              RadiusTopLeft: =0
                              RadiusTopRight: =0
                              Width: |
                                =
                            Children:
                              - Icon2:
                                  Control: Classic/Icon@2.5.0
                                  Properties:
                                    BorderColor: =RGBA(0, 18, 107, 1)
                                    Color: =ColorValue(dsaTokens.colorNeutral100)
                                    FocusedBorderThickness: =0
                                    Height: =40
                                    HoverBorderColor: =ColorValue(dsaTokens.colorNeutral400)
                                    HoverColor: =ColorValue(dsaTokens.colorAccentPrimaryHover)
                                    HoverFill: =ColorValue("#ffffff00")
                                    Icon: =If(!constTrigger, Icon.Hamburger, Icon.Cancel)
                                    OnSelect: =Set(constTrigger, !constTrigger)
                                    PaddingLeft: =6
                                    PaddingRight: =6
                                    PressedColor: =ColorValue(dsaTokens.colorAccentPrimary)
                                    Width: =40
                              - apex-logo:
                                  Control: Image@2.2.3
                                  Properties:
                                    BorderColor: =RGBA(0, 18, 107, 1)
                                    Height: =Parent.Height
                                    Image: |-
                                      ="data:image/svg+xml;utf8, " & EncodeUrl("
                                          <svg width='303' height='303' viewBox='0 0 303 303' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                      <g clip-path='url(#clip0_3_10)'>
                                      <path d='M265.474 0H36.8881C16.5153 0 -6.10352e-05 16.5154 -6.10352e-05 36.8881V265.474C-6.10352e-05 285.847 16.5153 302.362 36.8881 302.362H265.474C285.847 302.362 302.362 285.847 302.362 265.474V36.8881C302.362 16.5154 285.847 0 265.474 0Z' fill='url(#paint0_linear_3_10)'/>
                                      <path d='M34.0644 195.906C33.1227 194.012 57.2763 152.466 71.4265 140.368C75.2612 137.09 85.0643 130.015 93.2199 129.869C102.721 129.699 111.101 137.853 111.101 137.853L126.51 152.146C126.51 152.146 138.681 158.232 149.301 154.55C159.922 150.868 168.64 137.295 168.64 137.295L183.282 115.875C183.282 115.875 190.951 102.504 200.26 101.454C207.979 100.583 217.876 111.382 217.876 111.382C247.538 142.489 268.267 198.015 268.324 200.742C268.381 203.469 236.132 179.521 236.132 179.521L210.18 160.795C200.671 156.999 194.987 155.964 185.102 164.95L172.001 178.596C172.001 178.596 163.647 188.073 157.593 188.826C151.539 189.578 131.015 176.262 131.015 176.262L106.396 162.342C106.396 162.342 99.6995 157.227 89.3149 157.265C78.9304 157.303 72.7883 162.139 72.7883 162.139L39.503 194.686C39.503 194.686 34.8914 197.57 34.0644 195.906Z' fill='url(#paint1_linear_3_10)'/>
                                      <path d='M34.0644 195.906C33.1227 194.012 57.2763 152.466 71.4265 140.368C75.2612 137.09 85.0643 130.015 93.2199 129.869C102.721 129.699 111.101 137.853 111.101 137.853L123.299 149.431C123.299 149.431 127.599 153.358 134.81 154.838C137.179 155.324 140.379 155.964 143.161 155.818C146.623 155.636 149.478 154.451 149.478 154.451C149.478 154.451 143.99 158.428 137.463 160.617C131.726 162.54 127.404 163.443 122.313 163.796C114.037 164.371 106.396 162.342 106.396 162.342C106.396 162.342 99.6995 157.227 89.3149 157.265C78.9304 157.303 69.2187 165.55 69.2187 165.55L39.503 194.686C39.503 194.686 34.8914 197.57 34.0644 195.906Z' fill='url(#paint2_linear_3_10)'/>
                                      <path d='M207.493 135.789C207.493 135.789 211.614 131.496 220.982 131.501C233.105 131.509 239.168 139.799 239.168 139.799C247.656 149.948 268.267 198.015 268.324 200.742C268.381 203.469 236.132 179.521 236.132 179.521L210.18 160.795C200.671 156.999 195.063 155.597 183.754 166.285C185.288 161.356 200.494 141.323 207.493 135.789Z' fill='url(#paint3_linear_3_10)'/>
                                      </g>
                                      <defs>
                                      <linearGradient id='paint0_linear_3_10' x1='-8.63149e-05' y1='151.181' x2='302.362' y2='151.181' gradientUnits='userSpaceOnUse'>
                                      <stop stop-color='#01B7F1'/>
                                      <stop offset='0.892881' stop-color='#563F9A'/>
                                      </linearGradient>
                                      <linearGradient id='paint1_linear_3_10' x1='34.0377' y1='151.206' x2='268.324' y2='151.206' gradientUnits='userSpaceOnUse'>
                                      <stop offset='0.301908' stop-color='#B1BFBA'/>
                                      <stop offset='1' stop-color='#F9FFFF'/>
                                      </linearGradient>
                                      <linearGradient id='paint2_linear_3_10' x1='34.0377' y1='163.145' x2='149.478' y2='163.145' gradientUnits='userSpaceOnUse'>
                                      <stop offset='0.213502' stop-color='#B1BFBA'/>
                                      <stop offset='0.872725' stop-color='#F9FFFF'/>
                                      </linearGradient>
                                      <linearGradient id='paint3_linear_3_10' x1='185.211' y1='166.23' x2='268.324' y2='166.23' gradientUnits='userSpaceOnUse'>
                                      <stop offset='0.166348' stop-color='#B1BFBA'/>
                                      <stop offset='1' stop-color='#F9FFFF'/>
                                      </linearGradient>
                                      <clipPath id='clip0_3_10'>
                                      <rect width='302.362' height='302.362' fill='white'/>
                                      </clipPath>
                                      </defs>
                                      </svg>
                                      ")
                                    OnSelect: |-
                                      =Navigate(
                                          LookUp(constHeader,true).logoScreen,
                                              ScreenTransition.Fade
                                      );
                                      Set(constCurrentScreen, LookUp(constHeader,true).logoScreen)
                                    PaddingBottom: =8
                                    PaddingTop: =8
                                    Width: |-
                                      =If(
                                          App.Width < 500, 32 , 40 
                                      )
                              - divisor_1:
                                  Control: Rectangle@2.3.0
                                  Properties:
                                    AlignInContainer: =AlignInContainer.Center
                                    BorderColor: =RGBA(0, 18, 107, 1)
                                    Fill: =RGBA(56, 96, 178, 1)
                                    Height: '=Parent.Height - 24  '
                                    Width: '=2   '
                                    Y: '=0   '
                              - bat-logo:
                                  Control: Image@2.2.3
                                  Properties:
                                    BorderColor: =RGBA(0, 18, 107, 1)
                                    Height: =Parent.Height
                                    Image: |-
                                      ="data:image/svg+xml;utf8, " & EncodeUrl("
                                          <svg
                                         version='1.1'
                                         id='svg1'
                                         width='335.49332'
                                         height='141.38667'
                                         viewBox='0 0 335.49332 141.38667'
                                         sodipodi:docname='bat.svg'
                                         inkscape:version='1.3.2 (091e20ef0f, 2023-11-25, custom)'
                                         xmlns:inkscape='http://www.inkscape.org/namespaces/inkscape'
                                         xmlns:sodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd'
                                         xmlns='http://www.w3.org/2000/svg'
                                         xmlns:svg='http://www.w3.org/2000/svg'>
                                        <defs
                                           id='defs1' />
                                        <sodipodi:namedview
                                           id='namedview1'
                                           pagecolor='#505050'
                                           bordercolor='#eeeeee'
                                           borderopacity='1'
                                           inkscape:showpageshadow='0'
                                           inkscape:pageopacity='0'
                                           inkscape:pagecheckerboard='0'
                                           inkscape:deskcolor='#505050'
                                           inkscape:zoom='1.2146293'
                                           inkscape:cx='190.59313'
                                           inkscape:cy='125.96436'
                                           inkscape:window-width='1920'
                                           inkscape:window-height='1043'
                                           inkscape:window-x='0'
                                           inkscape:window-y='0'
                                           inkscape:window-maximized='1'
                                           inkscape:current-layer='g1'>
                                          <inkscape:page
                                             x='0'
                                             y='0'
                                             inkscape:label='1'
                                             id='page1'
                                             width='335.49332'
                                             height='141.38667'
                                             margin='0'
                                             bleed='0' />
                                        </sodipodi:namedview>
                                        <g
                                           id='g1'
                                           inkscape:groupmode='layer'
                                           inkscape:label='1'>
                                          <g
                                             id='group-R5'>
                                            <path
                                               id='path2'
                                               d='m 923.02,425.949 101.01,133.313 270.69,-357.278 h 131.17 L 1024.04,732.387 622.152,201.984 h 131.172 l 90.477,119.426 h 285.829 l -79.22,104.539 z m 664.69,-223.965 h 104.55 v 336.282 h -104.55 z m -260.7,395.871 h 625.94 V 702.406 H 1327.01 Z M 491.117,494.301 c 7.153,17.566 11.129,36.758 11.129,56.867 0,83.387 -67.848,151.238 -151.242,151.238 H 0 V 563.961 h 104.551 v 33.894 h 246.453 c 25.789,0 46.691,-20.91 46.691,-46.687 0,-25.793 -20.902,-46.691 -46.691,-46.691 L 0,504.469 V 399.914 h 436.699 c 25.785,0 46.688,-20.898 46.688,-46.687 0,-25.782 -20.903,-46.692 -46.688,-46.692 H 104.551 v 33.899 H 0 v -138.45 0 h 436.699 c 83.399,0 151.242,67.856 151.242,151.243 0,64.218 -40.246,119.179 -96.824,141.074 z M 2081.75,1019.38 c 74.75,-3.05 150.81,-10.5 219.95,-40.997 56.96,-25.125 107.65,-71.758 119.38,-135.305 7.96,-43.074 1.19,-89.297 -14.28,-130.035 -0.4,-1.066 1.01,-1.887 1.75,-1.02 2.35,2.778 4.69,5.559 7,8.364 37.3,45.027 72.49,95.172 90.55,151.375 9.29,28.918 13.96,60.722 6.28,90.566 -11.75,45.662 -55.32,68.552 -97.79,80.552 -17.04,4.82 -34.44,8.3 -51.96,10.8 -78,11.13 -159.02,6.62 -236.83,-0.88 -45.23,-4.37 -90.31,-10.37 -135.17,-17.58 -28.19,-4.54 -56.32,-9.53 -84.32,-15.19 -1.23,-0.25 -0.98,-2.08 0.28,-2.02 58.33,2.62 116.8,3.75 175.16,1.37 z m -541.02,-94.525 c -1.26,-0.117 -1.58,1.704 -0.35,2.012 4.06,1.02 8.12,2.024 12.18,3.012 37.51,9.109 75.33,16.441 113.35,23.086 38.3,6.687 77.02,11.531 115.72,15.211 40.11,3.801 80.37,5.976 120.64,6.504 79.25,1.047 158.95,-4.551 236.38,-22.176 44.45,-10.051 88.27,-24.113 128.15,-46.492 59.89,-33.606 107.67,-95.469 101.46,-166.996 -3.33,-38.297 -22.29,-74.879 -44.77,-105.371 -62.78,-85.125 -155.45,-149.239 -242.97,-206.434 -1.1,-0.723 -2.22,0.859 -1.16,1.66 109.76,83.508 168.53,177.891 152.45,266.727 -30.89,170.668 -327.52,263.664 -691.08,229.257 z M 1391.13,44.8789 v 27.5469 h 28.82 c 10.63,0 14.6,-6.336 14.6,-13.6758 0,-7.4414 -3.97,-13.8711 -14.6,-13.8711 z m 53.06,13.8711 c 0,16.5586 -12.28,24.3281 -23.13,24.3281 h -40 V 4.10938 h 10.07 V 34.3203 h 21.84 l 20.6,-30.10155 h 12.17 l -20.59,30.42965 c 9.63,1.7813 19.04,9.5508 19.04,24.1016 z M 1285.67,44.8789 v 27.5469 h 28.82 c 10.62,0 14.61,-6.336 14.61,-13.6758 0,-7.4414 -3.99,-13.8711 -14.61,-13.8711 z m 53.05,13.8711 c 0,16.5586 -12.28,24.3281 -23.12,24.3281 h -40 V 4.10938 h 10.07 V 34.3203 h 21.84 L 1328.1,4.21875 h 12.18 l -20.59,30.42965 c 9.63,1.7813 19.03,9.5508 19.03,24.1016 z M 1190.88,12.6602 c -17.16,0 -30.77,13.7695 -30.77,31 0,17.2109 13.61,30.9804 30.77,30.9804 17.16,0 30.88,-13.7695 30.88,-30.9804 0,-17.2305 -13.72,-31 -30.88,-31 z m 0,72.3125 c -22.14,0 -40.07,-18.5508 -40.07,-41.4336 0,-22.7696 17.93,-41.21097 40.07,-41.21097 22.25,0 40.18,18.44137 40.18,41.21097 0,22.8828 -17.93,41.4336 -40.18,41.4336 z M 1068.9,32.5391 1110.96,87.6406 V 4.10938 h -10.18 V 57.4297 L 1068.9,15.2188 1037.25,57.4297 V 4.10938 h -10.29 V 87.6406 Z m 451.55,-19.8789 c -17.16,0 -30.77,13.7695 -30.77,31 0,17.2109 13.61,30.9804 30.77,30.9804 17.15,0 30.88,-13.7695 30.88,-30.9804 0,-17.2305 -13.73,-31 -30.88,-31 z m 0,72.3125 c -22.14,0 -40.07,-18.5508 -40.07,-41.4336 0,-22.7696 17.93,-41.21097 40.07,-41.21097 22.25,0 40.18,18.44137 40.18,41.21097 0,22.8828 -17.93,41.4336 -40.18,41.4336 z M 948.02,12.6602 c -17.145,0 -30.77,13.7695 -30.77,31 0,17.2109 13.625,30.9804 30.77,30.9804 17.16,0 30.878,-13.7695 30.878,-30.9804 0,-17.2305 -13.718,-31 -30.878,-31 z m 0,72.3125 c -22.137,0 -40.055,-18.5508 -40.055,-41.4336 0,-22.7696 17.918,-41.21097 40.055,-41.21097 22.246,0 40.187,18.44137 40.187,41.21097 0,22.8828 -17.941,41.4336 -40.187,41.4336 z m 734.27,-1.8946 h 9.96 L 1659.82,0 1637.57,60.1992 1615.33,0 1583.01,83.0781 h 11.17 l 21.81,-56.3086 21.58,60.8711 22.25,-61.2109 z m -1319.231,0 h 65.523 V 73.4219 H 400.91 V 4.10938 H 390.727 V 73.4219 h -27.668 z m 447.265,0 h 65.528 V 73.4219 H 848.176 V 4.10938 H 837.992 V 73.4219 h -27.668 z m -348.011,0 h 65.523 V 73.4219 H 500.164 V 4.10938 h -10.18 V 73.4219 H 462.313 Z M 200.805,14.7695 h -26.004 v 23.7696 h 26.336 c 6.422,0 14.168,-1.3282 14.168,-11 0,-10.6602 -8.297,-12.7696 -14.5,-12.7696 z m -26.004,57.6563 h 19.918 c 5.976,0 15.051,-0.2266 15.051,-10.6719 0,-8.7734 -7.747,-12.6523 -12.836,-12.6523 h -22.133 z m 37.074,-27.0039 c 2.988,2.5586 7.527,7.1094 7.527,16.4453 0,18.2148 -13.836,21.2109 -24.574,21.2109 H 164.727 V 4.10938 h 36.3 c 10.848,0 23.907,6.87892 23.907,23.76172 0,11.1172 -6.969,15.1094 -13.059,17.5508 z m 56.43,37.6562 h 53.793 V 73.3047 H 278.379 V 50.4219 h 35.75 V 40.6484 H 278.266 V 13.9883 h 43.832 V 4.10938 H 268.305 Z M 24.2383,32.3203 39.1836,64.9727 54.125,32.4414 Z M 0,4.10938 H 11.0664 L 19.8125,22.6602 58.5469,22.5391 67.293,4.10938 H 78.25 L 39.1836,87.1914 Z M 568.797,83.0781 h 53.797 V 73.3047 H 578.871 V 50.4219 h 35.75 V 40.6484 H 578.758 V 13.9883 h 43.836 V 4.10938 H 568.797 Z M 673.621,44.8789 v 27.5469 h 28.82 c 10.625,0 14.61,-6.336 14.61,-13.6758 0,-7.4414 -3.985,-13.8711 -14.61,-13.8711 z M 726.684,58.75 c 0,16.5586 -12.289,24.3281 -23.133,24.3281 h -40 V 4.10938 h 10.07 V 34.3203 h 21.848 L 716.055,4.21875 h 12.172 L 707.641,34.6484 c 9.632,1.7813 19.043,9.5508 19.043,24.1016'
                                               style='fill:#222e5f;fill-opacity:1;fill-rule:nonzero;stroke:none'
                                               transform='matrix(0.13333333,0,0,-0.13333333,0,141.38667)' />
                                          </g>
                                        </g>
                                      </svg>
                                      ")
                                    LayoutMinWidth: =0
                                    OnSelect: |-
                                      =Navigate(
                                          LookUp(constHeader,true).logoScreen,
                                              ScreenTransition.Fade
                                      );
                                      Set(constCurrentScreen, LookUp(constHeader,true).logoScreen)
                                    PaddingBottom: =8
                                    PaddingLeft: =4
                                    PaddingTop: =8
                                    Width: |-
                                      =If(
                                          App.Width < 500, 40, 64 
                                      )
                        - appName:
                            Control: GroupContainer@1.3.0
                            Variant: AutoLayout
                            Properties:
                              AlignInContainer: =AlignInContainer.SetByContainer
                              DropShadow: =DropShadow.None
                              Height: =Parent.Height
                              LayoutAlignItems: =LayoutAlignItems.Center
                              LayoutDirection: =LayoutDirection.Horizontal
                              LayoutMinHeight: =32
                              LayoutMinWidth: =100
                              PaddingBottom: =4
                              PaddingTop: =4
                              RadiusBottomLeft: =0
                              RadiusBottomRight: =0
                              RadiusTopLeft: =0
                              RadiusTopRight: =0
                              Width: =
                            Children:
                              - appTitle_1:
                                  Control: Label@2.5.1
                                  Properties:
                                    Align: =Align.Center
                                    BorderColor: =RGBA(0, 18, 107, 1)
                                    Color: |-
                                      =ColorValue(
                                      dsaTokens.colorNeutral200
                                      )
                                    FillPortions: =1
                                    Font: =Font.'Open Sans'
                                    FontWeight: =FontWeight.Semibold
                                    Height: =Parent.Height
                                    LayoutMinWidth: =80
                                    PaddingBottom: =0
                                    PaddingLeft: =16
                                    PaddingRight: =16
                                    PaddingTop: =0
                                    Size: |-
                                      =If(
                                          App.Width < 768, dsaTokens.fontSmallLabel, dsaTokens.fontTextMedium
                                      )
                                    Text: |+
                                      =LookUp(constHeader,true).appName

                                    Width: =Parent.Width
                        - userContainer_1:
                            Control: GroupContainer@1.3.0
                            Variant: AutoLayout
                            Properties:
                              AlignInContainer: =AlignInContainer.SetByContainer
                              DropShadow: =DropShadow.None
                              Fill: =ColorValue("#ffffff00")
                              Height: =Parent.Height
                              LayoutAlignItems: =LayoutAlignItems.Center
                              LayoutDirection: =LayoutDirection.Horizontal
                              LayoutGap: =16
                              LayoutJustifyContent: =LayoutJustifyContent.End
                              LayoutMinHeight: =32
                              LayoutMinWidth: =80
                              RadiusBottomLeft: =0
                              RadiusBottomRight: =0
                              RadiusTopLeft: =0
                              RadiusTopRight: =0
                              Width: =
                            Children:
                              - userName_1:
                                  Control: Label@2.5.1
                                  Properties:
                                    Align: =Align.Right
                                    BorderColor: =RGBA(0, 18, 107, 1)
                                    Color: |-
                                      =ColorValue(
                                      dsaTokens.colorContrastLight
                                      )
                                    FillPortions: =1
                                    Font: =Font.'Open Sans'
                                    LayoutMinWidth: =40
                                    Size: =dsaTokens.fontLabel
                                    Text: |
                                      ="Olá, " &LookUp(constHeader,true).userData.FullName
                                    Visible: =If(App.Width < 768, false, true)
                                    Width: |-
                                      =
                                      If(App.Width < 500, 0, Parent.Width - userImage_1.Width - Parent.LayoutGap)
                                    Wrap: =false
                              - userImage_1:
                                  Control: Image@2.2.3
                                  Properties:
                                    BorderColor: =RGBA(0, 18, 107, 1)
                                    Height: =Parent.Height - 8
                                    Image: =LookUp(constHeader,true).userData.Image
                                    RadiusBottomLeft: =Parent.Height /2
                                    RadiusBottomRight: =Parent.Height /2
                                    RadiusTopLeft: =Parent.Height /2
                                    RadiusTopRight: =Parent.Height /2
                                    Width: '=Parent.Height - 8   '
                                    Y: '=0   '
      - container:
          Control: GroupContainer@1.3.0
          Variant: AutoLayout
          Properties:
            DropShadow: =DropShadow.None
            LayoutDirection: =LayoutDirection.Horizontal
            RadiusBottomLeft: =0
            RadiusBottomRight: =0
            RadiusTopLeft: =0
            RadiusTopRight: =0
          Children:
            - navBarDsa:
                Control: GroupContainer@1.3.0
                Variant: ManualLayout
                Properties:
                  DropShadow: =DropShadow.None
                  Fill: =ColorValue(dsaTokens.colorBgPrimary)
                  FillPortions: =0
                  RadiusBottomLeft: =0
                  RadiusBottomRight: =0
                  RadiusTopLeft: =0
                  RadiusTopRight: =0
                  Width: |-
                    =If(constTrigger, 
                    widthMenuOpen, 
                    widthMenuClosed,
                    If(
                        App.Width < 500, 0 , widthMenuClosed > 0, widthMenuClosed 
                    )
                    )
                Children:
                  - navBar:
                      Control: GroupContainer@1.3.0
                      Variant: AutoLayout
                      Properties:
                        DropShadow: =DropShadow.None
                        Height: =Parent.Height
                        LayoutDirection: =LayoutDirection.Vertical
                        RadiusBottomLeft: =0
                        RadiusBottomRight: =0
                        RadiusTopLeft: =0
                        RadiusTopRight: =0
                        Width: =Parent.Width
                      Children:
                        - navLinks_2:
                            Control: GroupContainer@1.3.0
                            Variant: AutoLayout
                            Properties:
                              AlignInContainer: =AlignInContainer.SetByContainer
                              DropShadow: =DropShadow.None
                              FillPortions: =3
                              LayoutDirection: =LayoutDirection.Vertical
                              LayoutMinHeight: =0
                              RadiusBottomLeft: =0
                              RadiusBottomRight: =0
                              RadiusTopLeft: =0
                              RadiusTopRight: =0
                              Width: =Parent.Width
                            Children:
                              - appSettings_2:
                                  Control: Gallery@2.15.0
                                  Variant: BrowseLayout_Vertical_OneTextOneImageVariant_ver5.0
                                  Properties:
                                    AlignInContainer: =AlignInContainer.SetByContainer
                                    BorderColor: =RGBA(0, 18, 107, 1)
                                    Items: =constNavMenu
                                    LayoutMinHeight: =0
                                    ShowScrollbar: =If(App.Height < 500, true, false)
                                    TemplateFill: =
                                    TemplateSize: =link_2.Height
                                    Transition: =Transition.Pop
                                    Width: =Parent.Width
                                  Children:
                                    - hoverEffect_2:
                                        Control: GroupContainer@1.3.0
                                        Variant: ManualLayout
                                        Properties:
                                          BorderColor: =ColorValue(dsaTokens.colorAccentPrimary)
                                          BorderThickness: '=2   '
                                          DropShadow: =DropShadow.None
                                          Fill: |
                                            =ColorValue(
                                            dsaTokens.colorBgSecondary
                                            )
                                          Height: =40
                                          RadiusBottomLeft: '=0   '
                                          RadiusBottomRight: '=link_2.Height '
                                          RadiusTopLeft: '=0   '
                                          RadiusTopRight: '=link_2.Height '
                                          Visible: =If(ThisItem.toScreen = constCurrentScreen, true, false)
                                          Width: |-
                                            =If(
                                                constTrigger, Parent.Width - 16, widthMenuClosed - 4
                                            )
                                          X: |-
                                            =
                                            0
                                          Y: =2
                                    - icon_2:
                                        Control: Classic/Icon@2.5.0
                                        Properties:
                                          AutoDisableOnSelect: =false
                                          BorderColor: =RGBA(0, 18, 107, 1)
                                          Color: |-
                                            =If(hoverEffect_2.Visible,
                                            ColorValue(dsaTokens.colorAccentPrimaryHover),
                                            ColorValue(dsaTokens.colorContrastLight)
                                            )
                                          DisplayMode: =DisplayMode.View
                                          Height: =28
                                          HoverColor: =ColorValue("#ffffff00")
                                          Icon: =ThisItem.icon
                                          OnSelect: =Select(Parent)
                                          Width: =20
                                          X: |-
                                            =If(constTrigger,
                                            12,
                                            Parent.Width/2 - Self.Width/2
                                            )
                                          Y: =link_2.Height/2 - Self.Height/2
                                    - link_2:
                                        Control: Classic/Button@2.2.0
                                        Properties:
                                          Align: =Align.Left
                                          BorderColor: =ColorFade(Self.Fill, -15%)
                                          BorderStyle: =BorderStyle.None
                                          Color: |-
                                            =If(hoverEffect_2.Visible,
                                            ColorValue(dsaTokens.colorAccentPrimaryHover),
                                            ColorValue(dsaTokens.colorContrastLight)
                                            )
                                          DisabledBorderColor: =RGBA(166, 166, 166, 1)
                                          Fill: =ColorValue("#ffffff00")
                                          Font: =Font.'Open Sans'
                                          FontWeight: =FontWeight.Normal
                                          HoverBorderColor: =ColorFade(Self.BorderColor, 20%)
                                          HoverColor: =ColorValue(dsaTokens.colorAccentPrimaryHover)
                                          HoverFill: =ColorValue("#ffffff00")
                                          OnSelect: |-
                                            =Set(constCurrentScreen, ThisItem.toScreen);
                                            Navigate(ThisItem.toScreen,ScreenTransition.Fade);
                                            Set(constTrigger, false)
                                          PaddingBottom: =8
                                          PaddingLeft: =56
                                          PaddingRight: =8
                                          PaddingTop: =8
                                          PressedBorderColor: =Self.Fill
                                          PressedColor: =Self.Fill
                                          PressedFill: =Self.Fill
                                          Size: =dsaTokens.fontLabel
                                          Text: =ThisItem.linkName
                                          Width: =Parent.Width
                        - menuSettings_2:
                            Control: GroupContainer@1.3.0
                            Variant: AutoLayout
                            Properties:
                              DropShadow: =DropShadow.None
                              Height: =Parent.Height
                              LayoutDirection: =LayoutDirection.Vertical
                              LayoutJustifyContent: =LayoutJustifyContent.End
                              LayoutMinHeight: =80
                              LayoutMinWidth: =56
                              RadiusBottomLeft: =0
                              RadiusBottomRight: =0
                              RadiusTopLeft: =0
                              RadiusTopRight: =0
                              Width: =Parent.Width
                            Children:
                              - exitContainer_3:
                                  Control: GroupContainer@1.3.0
                                  Variant: AutoLayout
                                  Properties:
                                    DropShadow: =DropShadow.None
                                    Height: =Parent.Height
                                    LayoutAlignItems: =LayoutAlignItems.End
                                    LayoutDirection: =LayoutDirection.Horizontal
                                    LayoutMinWidth: =0
                                    RadiusBottomLeft: =0
                                    RadiusBottomRight: =0
                                    RadiusTopLeft: =0
                                    RadiusTopRight: =0
                                    Width: =Parent.Width
                                  Children:
                                    - exitIcon_4:
                                        Control: Image@2.2.3
                                        Properties:
                                          BorderColor: =RGBA(0, 18, 107, 1)
                                          Height: '=32  '
                                          Image: |-
                                            ="data:image/svg+xml;utf8, " & EncodeUrl("
                                                <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='#26262C' viewBox='0 0 256 256'><path d='M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z'></path></svg>
                                            ")
                                          OnSelect: =Exit()
                                          PaddingBottom: =2
                                          PaddingTop: =2
                                          Width: '=32  '
                                          Y: '=Parent.Height- Self.Height - 8  '
                                    - link_5:
                                        Control: Classic/Button@2.2.0
                                        Properties:
                                          Align: =Align.Left
                                          AlignInContainer: =AlignInContainer.End
                                          BorderColor: =ColorFade(Self.Fill, -15%)
                                          BorderStyle: =BorderStyle.None
                                          Color: =ColorValue(dsaTokens.colorContrastLight)
                                          DisabledBorderColor: =RGBA(166, 166, 166, 1)
                                          Fill: =ColorValue("#ffffff00")
                                          FillPortions: =1
                                          Font: =Font.'Open Sans'
                                          FontWeight: =FontWeight.Normal
                                          Height: =32
                                          HoverBorderColor: =ColorFade(Self.BorderColor, 20%)
                                          HoverColor: =ColorValue(dsaTokens.colorAccentPrimaryHover)
                                          HoverFill: =ColorValue("#ffffff00")
                                          OnSelect: =Exit()
                                          PaddingBottom: =0
                                          PaddingLeft: =24
                                          PaddingRight: =0
                                          PaddingTop: =0
                                          PressedBorderColor: =Self.Fill
                                          PressedColor: =ColorValue(dsaTokens.colorAccentPrimaryHover)
                                          PressedFill: =Self.Fill
                                          RadiusBottomLeft: =0
                                          RadiusBottomRight: =0
                                          RadiusTopLeft: =0
                                          RadiusTopRight: =0
                                          Size: =16
                                          Text: ="Sair"
                                          Width: '=32  '
                                          X: '=0   '
                                          Y: =Parent.Height- Self.Height
            - Container8:
                Control: GroupContainer@1.3.0
                Variant: AutoLayout
                Properties:
                  LayoutDirection: =LayoutDirection.Vertical

  `;t.setAttribute("data-code",i1);const n1=`
  // settings for nav menu
  <pre>
    <code>
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
    </code>
  </pre>

  <section class="details">
  <div class="code-details">
  <h6>constCurrentScreen</h6>
  <p>Efeito de focus para página de Home, você pode trocar para outra página quando estiver usando uma naveção de sub-níveis e precisar realçar no menu lateral o nome da página pai.</p>
  </div>
   <div class="code-details">
  <h6>widthMenuOpen</h6>
  <p>Largura da barra lateral aberto.</p>
  </div>
  <div class="code-details">
  <h6>widthMenuClosed</h6>
  <p>Largura da barra lateral fechada somente com os ícones.</p>
  </div>
  <div class="code-details">
  <h6>icon: Icon.Home,</h6>
  <p>Define o icone Home para o primeiro item do menu da barra lateral.</p>
  </div>
  <div class="code-details">
  <h6>linkName: "Inicio",</h6>
  <p>Define o nome para o primeiro item do menu da barra lateral.</p>
  </div>
  <div class="code-details">
  <h6>toScreen: Home</h6>
  <p>Define para qual tela o usuário vai ao clicar no primeiro item do menu da barra lateral.</p>
  </div>
  <div class="tips">
    <p>Para criar mais links de navegação no seu app, basta adicionar mais um objeto a collection alterando as propriedades abaixo.</p>
    <pre><code>  {
    icon: Icon.Add,
    linkName: "Adicionar Chamado",
    toScreen: Support
  }
    </code></pre>
  </div>
  </section>
  `;t.setAttribute("data-properties",n1);t.innerHTML=`
  <img class="ModalDsa" src=${a1} alt="Imagem header e sidebar para para power apps" />
  `;const l1="/design-system-apex/assets/components-preview/CardHzDsa.png",g=document.createElement("div"),d1=`- CardHzDsa:
    Control: GroupContainer@1.3.0
    Variant: AutoLayout
    Properties:
      DropShadow: =DropShadow.None
      FillPortions: =0
      Height: |
        =Title.Height + Text.Height + cardHorizontalDivisor.Height + 40
      LayoutDirection: =LayoutDirection.Vertical
      LayoutGap: =8
      RadiusBottomLeft: =0
      RadiusBottomRight: =0
      RadiusTopLeft: =0
      RadiusTopRight: =0
      Width: =878
      X: '=0   '
      Y: =588
    Children:
      - TitleBadge:
          Control: GroupContainer@1.3.0
          Variant: AutoLayout
          Properties:
            DropShadow: =DropShadow.None
            FillPortions: =0
            Height: |
              =Title.Height
            LayoutAlignItems: =LayoutAlignItems.Center
            LayoutDirection: =LayoutDirection.Horizontal
            PaddingRight: =2
            RadiusBottomLeft: =0
            RadiusBottomRight: =0
            RadiusTopLeft: =0
            RadiusTopRight: =0
          Children:
            - Title:
                Control: Label@2.5.1
                Properties:
                  AutoHeight: =true
                  BorderColor: =RGBA(0, 18, 107, 1)
                  Color: =ColorValue(dsaTokens.colorAccentPrimaryHover)
                  FillPortions: =1
                  Font: =Font.'Open Sans'
                  FontWeight: =FontWeight.Semibold
                  LayoutMinWidth: =0
                  PaddingBottom: =0
                  PaddingLeft: =0
                  PaddingRight: =0
                  PaddingTop: =0
                  Size: =dsaTokens.fontText
                  Text: ="Main Title"
                  Width: =Parent.Width
                  Wrap: =false
            - BadgeDsa_2:
                Control: GroupContainer@1.3.0
                Variant: AutoLayout
                Properties:
                  AlignInContainer: =AlignInContainer.Center
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
                  FillPortions: =0
                  Height: =26
                  LayoutAlignItems: =LayoutAlignItems.Center
                  LayoutDirection: =LayoutDirection.Horizontal
                  LayoutJustifyContent: =LayoutJustifyContent.Center
                  LayoutMinHeight: =0
                  LayoutMinWidth: =180
                  RadiusBottomLeft: =8
                  RadiusBottomRight: =8
                  RadiusTopLeft: =8
                  RadiusTopRight: =8
                  Width: =actionCardHzContainer.Width
                  X: =583
                  Y: =344
                Children:
                  - LabelBadge_3:
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
      - content-container:
          Control: GroupContainer@1.3.0
          Variant: AutoLayout
          Properties:
            DropShadow: =DropShadow.None
            Height: |+
              =200


            LayoutDirection: =LayoutDirection.Horizontal
            LayoutMinHeight: =0
            LayoutMinWidth: =0
            RadiusBottomLeft: =0
            RadiusBottomRight: =0
            RadiusTopLeft: =0
            RadiusTopRight: =0
          Children:
            - content:
                Control: GroupContainer@1.3.0
                Variant: AutoLayout
                Properties:
                  AlignInContainer: =AlignInContainer.Start
                  DropShadow: =DropShadow.None
                  Height: =Parent.Height
                  LayoutDirection: =LayoutDirection.Horizontal
                  LayoutMinHeight: =0
                  LayoutMinWidth: =0
                  RadiusBottomLeft: =0
                  RadiusBottomRight: =0
                  RadiusTopLeft: =0
                  RadiusTopRight: =0
                  Visible: =If(App.Width < 578, false, true)
                  Width: =Parent.Width
                Children:
                  - SubTitle:
                      Control: Label@2.5.1
                      Properties:
                        AlignInContainer: =AlignInContainer.Start
                        BorderColor: =RGBA(0, 18, 107, 1)
                        FillPortions: =1
                        Font: =Font.'Open Sans'
                        Height: =Parent.Height
                        LayoutMinWidth: =0
                        PaddingBottom: =0
                        PaddingLeft: =0
                        PaddingRight: =8
                        PaddingTop: =0
                        Size: =dsaTokens.fontLabel
                        Text: ="Sub Title"
                        VerticalAlign: =VerticalAlign.Top
                        Width: =Parent.Width
                  - cardDivisor:
                      Control: Rectangle@2.3.0
                      Properties:
                        AlignInContainer: =AlignInContainer.Center
                        BorderColor: =RGBA(0, 18, 107, 1)
                        DisplayMode: =DisplayMode.View
                        Fill: =RGBA(56, 96, 178, 1)
                        Height: =16
                        Width: '=2   '
                  - Text:
                      Control: Label@2.5.1
                      Properties:
                        AlignInContainer: =AlignInContainer.Start
                        AutoHeight: =true
                        BorderColor: =RGBA(0, 18, 107, 1)
                        FillPortions: =1
                        Font: =Font.'Open Sans'
                        Height: =Parent.Height
                        LayoutMinWidth: =0
                        PaddingBottom: =0
                        PaddingLeft: =16
                        PaddingRight: =8
                        PaddingTop: =0
                        Size: =dsaTokens.fontSmallLabel
                        Text: ="Text description for your long textText description for your long textText description for your long textText description for your long text"
                        Width: =Parent.Width
            - action:
                Control: GroupContainer@1.3.0
                Variant: AutoLayout
                Properties:
                  DropShadow: =DropShadow.None
                  FillPortions: =0
                  Height: =Parent.Height
                  LayoutAlignItems: =LayoutAlignItems.End
                  LayoutDirection: =LayoutDirection.Horizontal
                  LayoutJustifyContent: =LayoutJustifyContent.End
                  LayoutMinHeight: =0
                  LayoutMinWidth: =0
                  RadiusBottomLeft: =0
                  RadiusBottomRight: =0
                  RadiusTopLeft: =0
                  RadiusTopRight: =0
                  Width: =BtnIcnPriDsa_2.Width + BtnIcnSecDsa_2.Width + BtnIcnTerDsa_2.Width + actionCardHzContainer.LayoutGap * 3
                Children:
                  - actionCardHzContainer:
                      Control: GroupContainer@1.3.0
                      Variant: AutoLayout
                      Properties:
                        AlignInContainer: =AlignInContainer.Center
                        DropShadow: =DropShadow.None
                        FillPortions: =0
                        Height: =40
                        LayoutAlignItems: =LayoutAlignItems.Center
                        LayoutDirection: =LayoutDirection.Horizontal
                        LayoutGap: =16
                        LayoutJustifyContent: =LayoutJustifyContent.End
                        LayoutMinHeight: =0
                        LayoutMinWidth: =0
                        RadiusBottomLeft: =0
                        RadiusBottomRight: =0
                        RadiusTopLeft: =0
                        RadiusTopRight: =0
                        Width: =Parent.Width
                        X: =300
                        Y: =468
                      Children:
                        - BtnIcnPriDsa_2:
                            Control: GroupContainer@1.3.0
                            Variant: ManualLayout
                            Properties:
                              AlignInContainer: =AlignInContainer.Start
                              DropShadow: =DropShadow.None
                              FillPortions: =0
                              Height: =40
                              RadiusBottomLeft: =200
                              RadiusBottomRight: =200
                              RadiusTopLeft: =200
                              RadiusTopRight: =200
                              Width: =40
                              X: =162
                              Y: =298
                            Children:
                              - BtnIcnPri_2:
                                  Control: Classic/Button@2.2.0
                                  Properties:
                                    BorderColor: |-
                                      =ColorValue(
                                      dsaTokens.colorAccentPrimary)
                                    BorderThickness: =0
                                    Color: |-
                                      =ColorValue(
                                      dsaTokens.colorContrastDark
                                      )
                                    DisabledBorderColor: =RGBA(166, 166, 166, 1)
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
                                      dsaTokens.colorAccentPrimary
                                      )
                                    Font: =Font.'Open Sans'
                                    Height: =Parent.Height
                                    HoverBorderColor: |-
                                      =ColorValue(
                                      dsaTokens.colorAccentPrimaryHover
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
                                    Text: =
                                    Tooltip: =
                                    Width: =Parent.Width
                                    Y: '=0   '
                              - iconPriBtn_2:
                                  Control: Classic/Icon@2.5.0
                                  Properties:
                                    BorderColor: =RGBA(0, 18, 107, 1)
                                    Color: |-
                                      =If(
                                          BtnIcnPri_2.DisplayMode = DisplayMode.Disabled,
                                          ColorValue(dsaTokens.colorNeutral300),
                                          ColorValue(dsaTokens.colorContrastDark)
                                      )
                                    FocusedBorderThickness: =0
                                    Height: =18
                                    HoverColor: |-
                                      =ColorValue(
                                          dsaTokens.colorContrastDark
                                      )
                                    Icon: =Icon.Search
                                    Width: =18
                                    X: =Parent.Width/2 - Self.Width/2
                                    Y: =BtnIcnPri_2.Height /2 - Self.Height /2
                        - BtnIcnSecDsa_2:
                            Control: GroupContainer@1.3.0
                            Variant: ManualLayout
                            Properties:
                              AlignInContainer: =AlignInContainer.Start
                              DropShadow: =DropShadow.None
                              FillPortions: =0
                              Height: =40
                              RadiusBottomLeft: =200
                              RadiusBottomRight: =200
                              RadiusTopLeft: =200
                              RadiusTopRight: =200
                              Width: =40
                              X: =208
                              Y: =298
                            Children:
                              - BtnIcnSec_2:
                                  Control: Classic/Button@2.2.0
                                  Properties:
                                    BorderColor: |-
                                      =ColorValue(
                                        dsaTokens.colorAccentPrimary)
                                    BorderThickness: =0
                                    Color: |-
                                      =ColorValue(
                                      dsaTokens.colorContrastLight
                                      )
                                    DisabledBorderColor: =RGBA(166, 166, 166, 1)
                                    DisabledColor: |-
                                      =ColorValue(
                                      dsaTokens.colorNeutral200
                                      )
                                    DisabledFill: |-
                                      =ColorValue(
                                      dsaTokens.colorNeutral400
                                      )
                                    Fill: |-
                                      =ColorValue(
                                      dsaTokens.colorAccentSecondary
                                      )
                                    Font: =Font.'Open Sans'
                                    Height: =Parent.Height
                                    HoverBorderColor: |-
                                      =ColorValue(
                                      dsaTokens.colorAccentSecondaryHover
                                      )
                                    HoverColor: |-
                                      =ColorValue(
                                      dsaTokens.colorContrastDark
                                      )
                                    HoverFill: |-
                                      =ColorValue(
                                      dsaTokens.colorAccentSecondaryHover
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
                                      dsaTokens.colorAccentSecondary
                                      )
                                    RadiusBottomLeft: =200
                                    RadiusBottomRight: =200
                                    RadiusTopLeft: =200
                                    RadiusTopRight: =200
                                    Size: =16
                                    Text: =
                                    Width: =Parent.Width
                                    Y: '=0   '
                              - IconSecBtn_2:
                                  Control: Classic/Icon@2.5.0
                                  Properties:
                                    BorderColor: =RGBA(0, 18, 107, 1)
                                    Color: |-
                                      =If(
                                          BtnIcnSec_2.DisplayMode = DisplayMode.Disabled,
                                          ColorValue(dsaTokens.colorNeutral300),
                                          ColorValue(dsaTokens.colorContrastLight)
                                      )
                                    FocusedBorderThickness: =0
                                    Height: =18
                                    HoverColor: |-
                                      =ColorValue(
                                          dsaTokens.colorNeutral100
                                      )
                                    Icon: =Icon.Edit
                                    PressedColor: =ColorFade(Self.Color, -40%)
                                    Width: =18
                                    X: =Parent.Width/2 - Self.Width/2
                                    Y: =BtnIcnSec_2.Height /2 - Self.Height /2
                        - BtnIcnTerDsa_2:
                            Control: GroupContainer@1.3.0
                            Variant: ManualLayout
                            Properties:
                              AlignInContainer: =AlignInContainer.Start
                              DropShadow: =DropShadow.None
                              FillPortions: =0
                              Height: =40
                              RadiusBottomLeft: =200
                              RadiusBottomRight: =200
                              RadiusTopLeft: =200
                              RadiusTopRight: =200
                              Width: =40
                              X: =417
                              Y: =298
                            Children:
                              - BtnTerSec_2:
                                  Control: Classic/Button@2.2.0
                                  Properties:
                                    BorderColor: =ColorValue("#ffffff00")
                                    BorderThickness: =0
                                    Color: |-
                                      =ColorValue(
                                      dsaTokens.colorAccentPrimary
                                      )
                                    DisabledBorderColor: =RGBA(166, 166, 166, 1)
                                    DisabledColor: |-
                                      =ColorValue(
                                      dsaTokens.colorNeutral200
                                      )
                                    DisabledFill: |-
                                      =ColorValue(
                                         "#ffffff00"
                                      )
                                    Fill: |-
                                      =ColorValue(
                                         "#ffffff00"
                                      )
                                    Font: =Font.'Open Sans'
                                    Height: =Parent.Height
                                    HoverBorderColor: =ColorValue("#ffffff00")
                                    HoverColor: |-
                                      =ColorValue(
                                      dsaTokens.colorContrastDark
                                      )
                                    HoverFill: |-
                                      =ColorValue(
                                         "#ffffff00"
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
                                         "#ffffff00"
                                      )
                                    RadiusBottomLeft: =200
                                    RadiusBottomRight: =200
                                    RadiusTopLeft: =200
                                    RadiusTopRight: =200
                                    Size: =16
                                    Text: =
                                    Width: =Parent.Width
                                    Y: '=0   '
                              - IconTerBtn_2:
                                  Control: Classic/Icon@2.5.0
                                  Properties:
                                    BorderColor: =RGBA(0, 18, 107, 1)
                                    Color: |-
                                      =If(
                                          BtnTerSec_2.DisplayMode = DisplayMode.Disabled,
                                          ColorValue(dsaTokens.colorNeutral300),
                                          ColorValue(dsaTokens.colorAccentPrimary)
                                      )
                                    FocusedBorderThickness: =0
                                    Height: =18
                                    HoverColor: |-
                                      =ColorValue(
                                          dsaTokens.colorAccentPrimary
                                      )
                                    HoverFill: |-
                                      =   ColorValue(
                                          "#ffffff00"
                                         )
                                    Icon: =Icon.Trash
                                    PressedColor: |-
                                      =ColorValue(
                                      dsaTokens.colorAccentPrimaryHover
                                      )
                                    Width: =18
                                    X: =Parent.Width/2 - Self.Width/2
                                    Y: =BtnTerSec_2.Height /2 - Self.Height /2
      - cardHorizontalDivisor:
          Control: Rectangle@2.3.0
          Properties:
            BorderColor: =RGBA(0, 18, 107, 1)
            Fill: =ColorValue(dsaTokens.colorNeutral400)
            Height: '=2   '
            Width: =Parent.Width

`;g.setAttribute("data-code",d1);g.innerHTML=`
<img class="CardHzDsa" src=${l1} alt="Imagem Card para power apps" />
`;const s1="/design-system-apex/assets/components-preview/CardThumbDsa.png",_=document.createElement("div"),C1=`- CardThumbDsa:
    Control: GroupContainer@1.3.0
    Variant: AutoLayout
    Properties:
      DropShadow: =DropShadow.None
      Fill: =ColorValue(dsaTokens.colorBgPrimary)
      FillPortions: =0
      Height: =thumbContainer.Height + cardThumbTitle.Height + cardThumbText.Height + 40 + cardThumbContent.PaddingBottom + cardThumbContent.PaddingBottom + 24
      LayoutDirection: =LayoutDirection.Vertical
      LayoutMinHeight: =0
      RadiusBottomLeft: =16
      RadiusBottomRight: =16
      RadiusTopLeft: =16
      RadiusTopRight: =16
      Width: =240
      X: =959
      Y: =392
    Children:
      - thumbContainer:
          Control: GroupContainer@1.3.0
          Variant: ManualLayout
          Properties:
            DropShadow: =DropShadow.Regular
            FillPortions: =0
            Height: '=200 '
            LayoutMinHeight: =0
            LayoutMinWidth: =0
            RadiusBottomLeft: =16
            RadiusBottomRight: =16
            RadiusTopLeft: =16
            RadiusTopRight: =16
            Width: =Parent.Width
          Children:
            - thumb:
                Control: Image@2.2.3
                Properties:
                  BorderColor: =RGBA(0, 18, 107, 1)
                  DisplayMode: =DisplayMode.View
                  Height: =Parent.Height
                  ImagePosition: =ImagePosition.Fill
                  Width: =Parent.Width
      - cardThumbContent:
          Control: GroupContainer@1.3.0
          Variant: AutoLayout
          Properties:
            DropShadow: =DropShadow.None
            Height: '=0   '
            LayoutDirection: =LayoutDirection.Vertical
            LayoutGap: =4
            LayoutMinHeight: =0
            LayoutMinWidth: =0
            PaddingBottom: =8
            PaddingLeft: =16
            PaddingRight: =16
            PaddingTop: =8
            RadiusBottomLeft: =0
            RadiusBottomRight: =0
            RadiusTopLeft: =0
            RadiusTopRight: =0
            Width: =Parent.Width
            X: =300
            Y: =468
          Children:
            - cardThumbTitle:
                Control: Label@2.5.1
                Properties:
                  AutoHeight: =true
                  BorderColor: =RGBA(0, 18, 107, 1)
                  Color: =ColorValue(dsaTokens.colorNeutral100)
                  Font: =Font.'Open Sans'
                  FontWeight: =FontWeight.Semibold
                  PaddingBottom: =0
                  PaddingLeft: =0
                  PaddingRight: =0
                  PaddingTop: =0
                  Size: =dsaTokens.fontText
                  Text: ="Title"
                  Width: =Parent.Width - 32
            - cardThumbText:
                Control: Label@2.5.1
                Properties:
                  AutoHeight: =true
                  BorderColor: =RGBA(0, 18, 107, 1)
                  Color: =ColorValue(dsaTokens.colorNeutral200)
                  Font: =Font.'Open Sans'
                  PaddingBottom: =0
                  PaddingLeft: =0
                  PaddingRight: =0
                  PaddingTop: =0
                  Size: =dsaTokens.fontLabel
                  Text: |-
                    ="Text description for your long text.
                    "
                  Width: =Parent.Width - 32
            - BtnTerDsa_1:
                Control: Classic/Button@2.2.0
                Properties:
                  Align: =Align.Right
                  AlignInContainer: =AlignInContainer.End
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
                  Size: =16
                  Text: ="More ..."
                  Underline: =true
                  X: =519
                  Y: =150

`;_.setAttribute("data-code",C1);_.innerHTML=`
<img class="CardThumbDsa" src=${s1} alt="Imagem Card para power apps" />
`;const c1="/design-system-apex/assets/components-preview/CardSmDsa.png",y=document.createElement("div"),p1=`- CardSmDsa:
    Control: GroupContainer@1.3.0
    Variant: AutoLayout
    Properties:
      DropShadow: =DropShadow.None
      Fill: =ColorValue(dsaTokens.colorBgPrimary)
      FillPortions: =0
      Height: = cardSmtext.Height + cardSmAction.Height + cardSmTtitleAccent.Height + Self.PaddingBottom + Self.PaddingTop + Self.LayoutGap
      LayoutDirection: =LayoutDirection.Vertical
      LayoutGap: =8
      PaddingBottom: =16
      PaddingLeft: =16
      PaddingRight: =16
      PaddingTop: =16
      RadiusBottomLeft: =8
      RadiusBottomRight: =8
      RadiusTopLeft: =8
      RadiusTopRight: =8
      Width: |
        =If(App.Width < 768, Parent.Width, 200)
      X: =60
      Y: =395
    Children:
      - cardSmTtitleAccent:
          Control: Label@2.5.1
          Properties:
            AutoHeight: =true
            BorderColor: =RGBA(0, 18, 107, 1)
            Color: =ColorValue(dsaTokens.colorNeutral100)
            Font: =Font.'Open Sans'
            FontWeight: =FontWeight.Semibold
            PaddingBottom: =0
            PaddingLeft: =0
            PaddingRight: =0
            PaddingTop: =0
            Size: =dsaTokens.fontText
            Text: ="Title"
            Width: =Parent.Width - 32
      - cardSmtext:
          Control: Label@2.5.1
          Properties:
            AutoHeight: =true
            BorderColor: =RGBA(0, 18, 107, 1)
            Color: =ColorValue(dsaTokens.colorNeutral200)
            Font: =Font.'Open Sans'
            PaddingBottom: =0
            PaddingLeft: =0
            PaddingRight: =0
            PaddingTop: =0
            Size: =dsaTokens.fontLabel
            Text: |-
              ="18/10/24
              "
            Width: =Parent.Width - 32
      - cardSmAction:
          Control: GroupContainer@1.3.0
          Variant: AutoLayout
          Properties:
            DropShadow: =DropShadow.None
            FillPortions: =0
            Height: |
              =40
            LayoutAlignItems: =LayoutAlignItems.Center
            LayoutDirection: =LayoutDirection.Horizontal
            LayoutJustifyContent: =LayoutJustifyContent.SpaceBetween
            LayoutMinHeight: =0
            LayoutMinWidth: =0
            RadiusBottomLeft: =0
            RadiusBottomRight: =0
            RadiusTopLeft: =0
            RadiusTopRight: =0
            Width: =Parent.Width
            X: =300
            Y: =468
          Children:
            - BtnIcnPriDsa_3:
                Control: GroupContainer@1.3.0
                Variant: ManualLayout
                Properties:
                  AlignInContainer: =AlignInContainer.Center
                  DropShadow: =DropShadow.None
                  FillPortions: =0
                  Height: =40
                  RadiusBottomLeft: =200
                  RadiusBottomRight: =200
                  RadiusTopLeft: =200
                  RadiusTopRight: =200
                  Width: =40
                  X: =644
                  Y: =293
                Children:
                  - BtnIcnPri_3:
                      Control: Classic/Button@2.2.0
                      Properties:
                        BorderColor: |-
                          =ColorValue(
                          dsaTokens.colorAccentPrimary)
                        BorderThickness: =0
                        Color: |-
                          =ColorValue(
                          dsaTokens.colorContrastDark
                          )
                        DisabledBorderColor: =RGBA(166, 166, 166, 1)
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
                          dsaTokens.colorAccentPrimary
                          )
                        Font: =Font.'Open Sans'
                        Height: =Parent.Height
                        HoverBorderColor: |-
                          =ColorValue(
                          dsaTokens.colorAccentPrimaryHover
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
                        Text: =
                        Tooltip: =
                        Width: =Parent.Width
                        Y: '=0   '
                  - iconPriBtn_3:
                      Control: Classic/Icon@2.5.0
                      Properties:
                        BorderColor: =RGBA(0, 18, 107, 1)
                        Color: |-
                          =If(
                              BtnIcnPri_3.DisplayMode = DisplayMode.Disabled,
                              ColorValue(dsaTokens.colorNeutral300),
                              ColorValue(dsaTokens.colorContrastDark)
                          )
                        FocusedBorderThickness: =0
                        Height: =18
                        HoverColor: |-
                          =ColorValue(
                              dsaTokens.colorContrastDark
                          )
                        Icon: =Icon.Add
                        Width: =18
                        X: =Parent.Width/2 - Self.Width/2
                        Y: =BtnIcnPri_3.Height /2 - Self.Height /2
            - BtnIcnSecDsa_3:
                Control: GroupContainer@1.3.0
                Variant: ManualLayout
                Properties:
                  AlignInContainer: =AlignInContainer.Center
                  DropShadow: =DropShadow.None
                  FillPortions: =0
                  Height: =40
                  RadiusBottomLeft: =200
                  RadiusBottomRight: =200
                  RadiusTopLeft: =200
                  RadiusTopRight: =200
                  Width: =40
                  X: =852
                  Y: =293
                Children:
                  - BtnIcnSec_3:
                      Control: Classic/Button@2.2.0
                      Properties:
                        BorderColor: =ColorValue("#ffffff00")
                        BorderThickness: =0
                        Color: |-
                          =ColorValue(
                          dsaTokens.colorContrastLight
                          )
                        DisabledBorderColor: =RGBA(166, 166, 166, 1)
                        DisabledColor: |-
                          =ColorValue(
                          dsaTokens.colorNeutral200
                          )
                        DisabledFill: |-
                          =ColorValue(
                          dsaTokens.colorNeutral400
                          )
                        Fill: |-
                          =ColorValue(
                          dsaTokens.colorAccentSecondary
                          )
                        Font: =Font.'Open Sans'
                        Height: =Parent.Height
                        HoverBorderColor: |-
                          =ColorValue(
                          dsaTokens.colorAccentSecondaryHover
                          )
                        HoverColor: |-
                          =ColorValue(
                          dsaTokens.colorContrastDark
                          )
                        HoverFill: |-
                          =ColorValue(
                          dsaTokens.colorAccentSecondaryHover
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
                          dsaTokens.colorAccentSecondary
                          )
                        RadiusBottomLeft: =200
                        RadiusBottomRight: =200
                        RadiusTopLeft: =200
                        RadiusTopRight: =200
                        Size: =16
                        Text: =
                        Width: =Parent.Width
                        Y: '=0   '
                  - IconSecBtn_3:
                      Control: Classic/Icon@2.5.0
                      Properties:
                        BorderColor: =RGBA(0, 18, 107, 1)
                        Color: |-
                          =If(
                              BtnIcnSec_3.DisplayMode = DisplayMode.Disabled,
                              ColorValue(dsaTokens.colorNeutral300),
                              ColorValue(dsaTokens.colorContrastLight)
                          )
                        FocusedBorderThickness: =0
                        Height: =18
                        HoverColor: |-
                          =ColorValue(
                              dsaTokens.colorNeutral100
                          )
                        Icon: =Icon.Search
                        PressedColor: =ColorFade(Self.Color, -40%)
                        Width: =18
                        X: =Parent.Width/2 - Self.Width/2
                        Y: =BtnIcnSec_3.Height /2 - Self.Height /2
            - BtnIcnTerDsa_3:
                Control: GroupContainer@1.3.0
                Variant: ManualLayout
                Properties:
                  AlignInContainer: =AlignInContainer.Center
                  DropShadow: =DropShadow.None
                  FillPortions: =0
                  Height: =40
                  RadiusBottomLeft: =200
                  RadiusBottomRight: =200
                  RadiusTopLeft: =200
                  RadiusTopRight: =200
                  Width: =40
                  X: =988
                  Y: =293
                Children:
                  - BtnTerSec_3:
                      Control: Classic/Button@2.2.0
                      Properties:
                        BorderColor: =ColorValue("#ffffff00")
                        BorderThickness: =0
                        Color: |-
                          =ColorValue(
                          dsaTokens.colorAccentPrimary
                          )
                        DisabledBorderColor: =RGBA(166, 166, 166, 1)
                        DisabledColor: |-
                          =ColorValue(
                          dsaTokens.colorNeutral200
                          )
                        DisabledFill: |-
                          =ColorValue(
                             "#ffffff00"
                          )
                        Fill: |-
                          =ColorValue(
                             "#ffffff00"
                          )
                        Font: =Font.'Open Sans'
                        Height: =Parent.Height
                        HoverBorderColor: =ColorValue("#ffffff00")
                        HoverColor: |-
                          =ColorValue(
                          dsaTokens.colorContrastDark
                          )
                        HoverFill: |-
                          =ColorValue(
                             "#ffffff00"
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
                             "#ffffff00"
                          )
                        RadiusBottomLeft: =200
                        RadiusBottomRight: =200
                        RadiusTopLeft: =200
                        RadiusTopRight: =200
                        Size: =16
                        Text: =
                        Width: =Parent.Width
                        Y: '=0   '
                  - IconTerBtn_3:
                      Control: Classic/Icon@2.5.0
                      Properties:
                        BorderColor: =RGBA(0, 18, 107, 1)
                        Color: |-
                          =If(
                              BtnTerSec_3.DisplayMode = DisplayMode.Disabled,
                              ColorValue(dsaTokens.colorNeutral300),
                              ColorValue(dsaTokens.colorAccentPrimary)
                          )
                        FocusedBorderThickness: =0
                        Height: =18
                        HoverColor: |-
                          =ColorValue(
                              dsaTokens.colorAccentPrimary
                          )
                        HoverFill: |-
                          =   ColorValue(
                              "#ffffff00"
                             )
                        Icon: =Icon.Trash
                        PressedColor: |-
                          =ColorValue(
                          dsaTokens.colorAccentPrimaryHover
                          )
                        Width: =18
                        X: =Parent.Width/2 - Self.Width/2
                        Y: =BtnTerSec_3.Height /2 - Self.Height /2

`;y.setAttribute("data-code",p1);y.innerHTML=`
<img class="CardThumbDsa" src=${c1} alt="Imagem Card para power apps" />
`;const u1="/design-system-apex/assets/components-preview/cardSmallBtnDsa.png",B=document.createElement("div"),h1=`- CardSmBtnDsa:
    Control: GroupContainer@1.3.0
    Variant: AutoLayout
    Properties:
      DropShadow: =DropShadow.None
      Fill: =ColorValue(dsaTokens.colorBgPrimary)
      FillPortions: =0
      Height: |
        = cardSmBtntext.Height + cardBtnAction.Height + cardSmBtnTtitleAccent.Height + Self.PaddingBottom + Self.PaddingTop + Self.LayoutGap
      LayoutDirection: =LayoutDirection.Vertical
      LayoutGap: =8
      PaddingBottom: =16
      PaddingLeft: =16
      PaddingRight: =16
      PaddingTop: =16
      RadiusBottomLeft: =8
      RadiusBottomRight: =8
      RadiusTopLeft: =8
      RadiusTopRight: =8
      Width: |+
        =If(App.Width < 768, Parent.Width, 256)
      X: =428
      Y: =71
    Children:
      - cardSmBtnTtitleAccent:
          Control: Label@2.5.1
          Properties:
            AutoHeight: =true
            BorderColor: =RGBA(0, 18, 107, 1)
            Color: =ColorValue(dsaTokens.colorNeutral100)
            Font: =Font.'Open Sans'
            FontWeight: =FontWeight.Semibold
            PaddingBottom: =0
            PaddingLeft: =0
            PaddingRight: =0
            PaddingTop: =0
            Size: =dsaTokens.fontText
            Text: ="Title"
            Width: =Parent.Width - 32
      - cardSmBtntext:
          Control: Label@2.5.1
          Properties:
            AutoHeight: =true
            BorderColor: =RGBA(0, 18, 107, 1)
            Color: =ColorValue(dsaTokens.colorNeutral200)
            Font: =Font.'Open Sans'
            PaddingBottom: =0
            PaddingLeft: =0
            PaddingRight: =0
            PaddingTop: =0
            Size: =dsaTokens.fontLabel
            Text: |-
              ="Text description for your long text
              "
            Width: =Parent.Width - 32
      - cardBtnAction:
          Control: GroupContainer@1.3.0
          Variant: AutoLayout
          Properties:
            DropShadow: =DropShadow.None
            FillPortions: =0
            Height: |
              =40
            LayoutAlignItems: =LayoutAlignItems.Center
            LayoutDirection: =LayoutDirection.Horizontal
            LayoutJustifyContent: =LayoutJustifyContent.End
            LayoutMinHeight: =0
            LayoutMinWidth: =0
            RadiusBottomLeft: =0
            RadiusBottomRight: =0
            RadiusTopLeft: =0
            RadiusTopRight: =0
            Width: =Parent.Width
            X: =300
            Y: =468
          Children:
            - BtnIconRightDsa_1:
                Control: GroupContainer@1.3.0
                Variant: ManualLayout
                Properties:
                  DropShadow: =DropShadow.None
                  FillPortions: =0
                  Height: =40
                  LayoutMinHeight: =0
                  RadiusBottomLeft: =200
                  RadiusBottomRight: =200
                  RadiusTopLeft: =200
                  RadiusTopRight: =200
                  Width: =160
                  X: =942
                  Y: =150
                Children:
                  - ButtonIconRight_1:
                      Control: Classic/Button@2.2.0
                      Properties:
                        BorderColor: |-
                          =ColorValue(
                          dsaTokens.colorAccentPrimary
                          )
                        Color: |-
                          =ColorValue(
                          dsaTokens.colorContrastDark
                          )
                        DisabledBorderColor: =RGBA(166, 166, 166, 1)
                        Fill: |-
                          =ColorValue(
                          dsaTokens.colorAccentPrimary
                          )
                        Font: =Font.'Open Sans'
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
                        OnSelect: =
                        PaddingBottom: =8
                        PaddingLeft: =8
                        PaddingRight: =8
                        PaddingTop: =8
                        PressedBorderColor: |-
                          =ColorValue(
                          dsaTokens.colorAccentSecondaryHover
                          )
                        PressedColor: =ColorValue(dsaTokens.colorContrastDark)
                        PressedFill: |-
                          =ColorValue(
                          dsaTokens.colorAccentPrimaryHover
                          )
                        RadiusBottomLeft: =200
                        RadiusBottomRight: =200
                        RadiusTopLeft: =200
                        RadiusTopRight: =200
                        Size: =16
                        Text: ="Explore"
                        Width: =Parent.Width
                        Y: '=0   '
                  - IconRightBtn_1:
                      Control: Classic/Icon@2.5.0
                      Properties:
                        BorderColor: =RGBA(0, 18, 107, 1)
                        Color: |-
                          =If(
                              ButtonIconRight_1.DisplayMode = DisplayMode.Disabled,
                              ColorValue(dsaTokens.colorNeutral300),
                              ColorValue(dsaTokens.colorContrastDark)
                          )
                        Height: =ButtonIconRight_1.Size
                        Icon: =Icon.Search
                        Width: =ButtonIconRight_1.Size
                        X: = ButtonIconRight_1.Width - Self.Width - 16
                        Y: =ButtonIconRight_1.Height /2 - Self.Height /2

`;B.setAttribute("data-code",h1);B.innerHTML=`
<img class="CardThumbDsa" src=${u1} alt="Imagem Card para power apps" />
`;const f1="/design-system-apex/assets/components-preview/modal.png",r=document.createElement("div"),g1=`- ModalContainer:
    Control: GroupContainer@1.3.0
    Variant: ManualLayout
    Properties:
      DropShadow: =DropShadow.None
      Fill: =RGBA(0,0,0, 0.8)
      Height: =App.Height
      Visible: =dsaModalShow
      Width: =App.Width
    Children:
      - ModalDsa:
          Control: GroupContainer@1.3.0
          Variant: AutoLayout
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
                Control: GroupContainer@1.3.0
                Variant: AutoLayout
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
                  LayoutDirection: =LayoutDirection.Horizontal
                  LayoutJustifyContent: =LayoutJustifyContent.Center
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
                      Control: Classic/Icon@2.5.0
                      Properties:
                        BorderColor: =RGBA(0, 18, 107, 1)
                        Color: |
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
                        Icon: |-
                          =Switch(true, 
                          dsaModalType = "info", Icon.Note,
                          dsaModalType = "warning", Icon.Information,
                          dsaModalType = "error", Icon.Warning,
                          dsaModalType = "success", Icon.Check
                          )
            - messageModal:
                Control: Label@2.5.1
                Properties:
                  AutoHeight: =true
                  BorderColor: =RGBA(0, 18, 107, 1)
                  FillPortions: =1
                  Font: =Font.'Open Sans'
                  Height: =Self.Size
                  LayoutMinHeight: =0
                  PaddingBottom: =0
                  PaddingLeft: =0
                  PaddingRight: =0
                  PaddingTop: =0
                  Size: |+
                    =dsaTokens.fontLabel
                  Text: =dsaModalMessage
                  Width: =Parent.Width - Parent.PaddingLeft - Parent.PaddingRight
                  X: =677
                  Y: =176
            - buttonsContainer:
                Control: GroupContainer@1.3.0
                Variant: AutoLayout
                Properties:
                  AlignInContainer: =AlignInContainer.SetByContainer
                  DropShadow: =DropShadow.None
                  FillPortions: =0
                  Height: '=48  '
                  LayoutAlignItems: =LayoutAlignItems.Center
                  LayoutDirection: =LayoutDirection.Horizontal
                  LayoutGap: =24
                  LayoutJustifyContent: =LayoutJustifyContent.SpaceBetween
                  LayoutMinHeight: =0
                  LayoutMinWidth: =0
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
                  - BtnSecDsa_1:
                      Control: Classic/Button@2.2.0
                      Properties:
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
                        FocusedBorderColor: |-
                          =ColorValue(
                          dsaTokens.colorNeutral200
                          )
                        FocusedBorderThickness: '=2 '
                        Font: =Font.'Open Sans'
                        HoverBorderColor: |-
                          =ColorValue(
                          dsaTokens.colorAccentPrimary
                          )
                        HoverColor: |-
                          =ColorValue(
                          dsaTokens.colorContrastLight
                          )
                        HoverFill: '=ColorValue(dsaTokens.colorAccentSecondaryHover)   '
                        OnSelect: =Set(dsaModalShow, false)
                        PaddingBottom: =8
                        PaddingLeft: =16
                        PaddingRight: =16
                        PaddingTop: =8
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
                          dsaTokens.colorAccentSecondary
                          )
                        RadiusBottomLeft: =200
                        RadiusBottomRight: =200
                        RadiusTopLeft: =200
                        RadiusTopRight: =200
                        Size: =dsaTokens.fontText
                        Text: ="Back Action"
                        X: =243
                        Y: =237
                  - BtnPriDsa_2:
                      Control: Classic/Button@2.2.0
                      Properties:
                        BorderColor: |-
                          =If(dsaModalType =  "error", 
                          ColorValue(dsaTokens.colorFeedbackErrorAccent),
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
                        FocusedBorderColor: |-
                          =ColorValue(
                          dsaTokens.colorNeutral200
                          )
                        FocusedBorderThickness: '=2 '
                        Font: =Font.'Open Sans'
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
                          ColorValue(dsaTokens.colorAccentSecondaryHover))
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
                        Size: =dsaTokens.fontText
                        Text: ="Execute"
                        X: =42
                        Y: =237

`,_1=`
// settings for modal
<pre>
  <code>
Set(dsaModalShow, true);
Set(dsaModalType, "success");
Set(dsaModalIcon, Icon.Add);
Set(dsaModalMessage, "Your message here!")
  </code>
</pre>

<section class="details">
  <div class="code-details">
    <h6>dsaModalShow</h6>
    <p>Ao setar para "true" o Modal aparece na tela.</p>
  </div>
  <div class="code-details">
    <h6>dsaModalType</h6>
    <p>Mude o tipo do Modal ao setar essa variavel para "info", "warning", "success" ou "error" conforme o tipo de mensagem que voce deseja mostrar para o usuário.</p>
  </div>
  <div class="code-details">
    <h6>dsaModalIcon</h6>
    <p>Icone personalizavel de acordo com o tipo do model, você pode alterar para outro ícone se desejar.</p>
  </div>
  <div class="code-details">
    <h6>dsaModalMessage</h6>
    <p>Use essa variável para escrever a mensagem que voce deseja mostrar para o usuário, ex. "Projeto adicionado com sucesso".</p>
  </div>
</section>
`;r.setAttribute("data-code",g1);r.setAttribute("data-properties",_1);r.innerHTML=`
<img class="ModalDsa" src=${f1} alt="Imagem combo box para power apps" />
`;const y1="/design-system-apex/assets/components-preview/toastDsa.png",o=document.createElement("div");o.classList.add("hasProperties");const B1=`- ToastDsa:
    Control: GroupContainer@1.3.0
    Variant: ManualLayout
    Properties:
      DropShadow: =DropShadow.None
      Height: =If(dsaToastShow, 120, 0)
      RadiusBottomLeft: =0
      RadiusBottomRight: =0
      RadiusTopLeft: =0
      RadiusTopRight: =0
      Width: =316
      X: =If(App.Width < 768, App.Width/2 - Self.Width/2, App.Width - Self.Width - 16)
      Y: =48
    Children:
      - toastContainer_4:
          Control: GroupContainer@1.3.0
          Variant: AutoLayout
          Properties:
            DropShadow: =DropShadow.None
            Fill: |
              =ColorValue(
                  If(dsaToastType = "info", dsaTokens.colorFeedbackInfo,
                   dsaToastType = "error", dsaTokens.colorFeedbackError,
                   dsaToastType = "warning", dsaTokens.colorFeedbackWarning,
                   dsaToastType = "success", dsaTokens.colorFeedbackSuccess
                   )
              )
            Height: =Parent.Height
            LayoutDirection: =LayoutDirection.Horizontal
            RadiusBottomLeft: =12
            RadiusBottomRight: =12
            RadiusTopLeft: =12
            RadiusTopRight: =12
            Visible: =dsaToastShow
            Width: =Parent.Width
          Children:
            - toastRectangle_3:
                Control: Rectangle@2.3.0
                Properties:
                  BorderColor: =RGBA(0, 18, 107, 1)
                  Fill: |-
                    =ColorValue(
                        If( dsaToastType = "info", dsaTokens.colorFeedbackInfoAccent,
                         dsaToastType = "error", dsaTokens.colorFeedbackErrorAccent,
                         dsaToastType = "warning", dsaTokens.colorFeedbackWarningAccent,
                         dsaToastType = "success", dsaTokens.colorFeedbackSuccessAccent
                         )
                    )
                  Height: =Parent.Height
                  Width: '=8   '
            - toastContainer_5:
                Control: GroupContainer@1.3.0
                Variant: AutoLayout
                Properties:
                  DropShadow: =DropShadow.None
                  Height: =Parent.Height
                  LayoutDirection: =LayoutDirection.Vertical
                  PaddingLeft: =8
                  PaddingTop: =8
                  RadiusBottomLeft: =0
                  RadiusBottomRight: =0
                  RadiusTopLeft: =0
                  RadiusTopRight: =0
                Children:
                  - titleToast_3:
                      Control: Label@2.5.1
                      Properties:
                        BorderColor: =RGBA(0, 18, 107, 1)
                        Color: =ColorValue(dsaTokens.colorNeutral200)
                        Font: =Font.'Open Sans'
                        FontWeight: =FontWeight.Semibold
                        PaddingBottom: =0
                        PaddingLeft: =0
                        PaddingRight: =0
                        PaddingTop: =0
                        Size: =16
                        Text: =dsaToastType
                        Width: =Parent.Width - 8
                  - messageToast_3:
                      Control: Label@2.5.1
                      Properties:
                        AutoHeight: =true
                        BorderColor: =RGBA(0, 18, 107, 1)
                        Color: =ColorValue(dsaTokens.colorContrastLight)
                        Font: =Font.'Open Sans'
                        Height: =Parent.Height - titleToast_3.Height
                        PaddingBottom: =0
                        PaddingLeft: =0
                        PaddingRight: =0
                        PaddingTop: =0
                        Size: =14
                        Text: =dsaToastMessage
                        Width: =Parent.Width   - 8
            - Icon1_3:
                Control: Classic/Icon@2.5.0
                Properties:
                  BorderColor: =RGBA(0, 18, 107, 1)
                  Color: |-
                    =ColorValue(
                    dsaTokens.colorFeedbackErrorAccent
                    )
                  Fill: =ColorValue("#ffffff00")
                  Height: '=44  '
                  Icon: =Icon.CancelBadge
                  OnSelect: =Set(dsaToastShow, !dsaToastShow)
                  PaddingBottom: =8
                  PaddingLeft: =8
                  PaddingRight: =8
                  PaddingTop: =8
                  Width: '=44  '
            - timerToast_3:
                Control: Timer@2.1.0
                Properties:
                  BorderColor: =ColorFade(Self.Fill, -15%)
                  BorderStyle: =BorderStyle.None
                  Color: =RGBA(255, 255, 255, 1)
                  DisabledBorderColor: =ColorFade(Self.BorderColor, 70%)
                  DisabledColor: =ColorFade(Self.Fill, 90%)
                  DisabledFill: =ColorFade(Self.Fill, 70%)
                  DisplayMode: =DisplayMode.Disabled
                  Duration: =5000
                  Fill: =RGBA(56, 96, 178, 1)
                  Font: =Font.'Open Sans'
                  FontWeight: =FontWeight.Lighter
                  HoverBorderColor: =ColorFade(Self.BorderColor, 20%)
                  HoverColor: =RGBA(255, 255, 255, 1)
                  HoverFill: =ColorFade(RGBA(56, 96, 178, 1), -20%)
                  OnTimerEnd: =Set(dsaToastShow, false)
                  PaddingBottom: =0
                  PaddingLeft: =0
                  PaddingRight: =0
                  PaddingTop: =0
                  PressedBorderColor: =Self.Fill
                  PressedColor: =Self.Fill
                  PressedFill: =Self.Color
                  RadiusBottomLeft: =0
                  RadiusBottomRight: =0
                  RadiusTopLeft: =0
                  RadiusTopRight: =0
                  Size: =8
                  Start: =dsaToastShow
                  Visible: =false
                  Width: =24
                  X: =636
                  Y: =288

`,T1=`
// settings for nav menu
<pre>
  <code>
Set(dsaToastShow, true);
Set(dsaToastType, "error");
Set(dsaToastMessage, "Your message!");
  </code>
</pre>

<section class="details">
  <div class="code-details">
    <h6>dsaToastShow</h6>
    <p>Ao setar para "true" o Toast aparece na tela.</p>
  </div>
  <div class="code-details">
    <h6>dsaToastType</h6>
    <p>Mude o tipo do Toast ao setar essa variavel para "info", "warning", "success" ou "error" conforme o tipo de mensagem que voce deseja mostrar para o usuario.</p>
  </div>
  <div class="code-details">
    <h6>dsaToastMessage</h6>
    <p>Use essa variavel para escrever a mensagem que voce deseja mostrar para o usuario, ex. "Projeto adicionado com sucess".</p>
  </div>
</section>
`;o.setAttribute("data-properties",T1);o.setAttribute("data-code",B1);o.innerHTML=`
<img class="ModalDsa" src=${y1} alt="Imagem modal para power apps" />
`;const T=document.createElement("div"),m1=`
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
`;T.setAttribute("data-code",m1);T.innerHTML=`
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
`;const m=document.createElement("div"),P1=`- loaderApexContainer:
    Control: GroupContainer@1.3.0
    Variant: AutoLayout
    Properties:
      AlignInContainer: =AlignInContainer.Center
      DropShadow: =DropShadow.None
      FillPortions: =0
      Height: =If(App.Width < 768, 140, 200 )
      LayoutAlignItems: =LayoutAlignItems.Center
      LayoutDirection: =LayoutDirection.Horizontal
      LayoutJustifyContent: =LayoutJustifyContent.Center
      LayoutMinHeight: =0
      RadiusBottomLeft: =0
      RadiusBottomRight: =0
      RadiusTopLeft: =0
      RadiusTopRight: =0
      Width: =If(App.Width < 768, 140, 200 )
      X: =App.Width /2 - Self.Width /2
      Y: =App.Height /2 - Self.Height /2
    Children:
      - loaderApex:
          Control: Image@2.2.3
          Properties:
            BorderColor: =RGBA(0, 18, 107, 1)
            Height: |
              =Parent.Height
            Image: |-
              ="data:image/svg+xml;utf8, " & EncodeUrl("
              <svg width='157' height='157' viewBox='0 0 157 157' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <style>
                      @keyframes showBlock {
                          0% {
                              opacity: 0;
                              transform: translateY(-80px);
                          }

                          50% {
                              opacity: 1;
                              transform: translateY(0px);
                          }

                          90% {
                              opacity: 1;
                              transform: translateY(0px);
                          }

                          100% {
                              opacity: 0;
                              transform: translateY(0px);
                          }
                      }

                      #b1lf {
                          animation: showBlock 4s 0.2s ease-in-out forwards infinite;
                      }

                      #b1lf2 {
                          animation: showBlock 4s 0.4s ease-in-out forwards infinite;
                      }

                      #b1rg2 {
                          animation: showBlock 4s 0.6s ease-in-out forwards infinite;
                      }

                      #b1rg {
                          animation: showBlock 4s 0.8s ease-in-out forwards infinite;
                      }

                      #b2lf {
                          animation: showBlock 4s 0.4s ease-in-out forwards infinite;
                      }

                      #b2lf2 {
                          animation: showBlock 4s 0.6s ease-in-out forwards infinite;
                      }

                      #b2rg2 {
                          animation: showBlock 4s 0.8s ease-in-out forwards infinite;
                      }

                      #b2rg {
                          animation: showBlock 4s 1s ease-in-out forwards infinite;
                      }

                      #b3lf {
                          animation: showBlock 4s 0.6s ease-in-out forwards infinite;
                      }

                      #b3lf2 {
                          animation: showBlock 4s 0.8s ease-in-out forwards infinite;
                      }

                      #b3rg2 {
                          animation: showBlock 4s 1s ease-in-out forwards infinite;
                      }

                      #b3rg {
                          animation: showBlock 4s 1.2s ease-in-out forwards infinite;
                      }

                      #b4lf {
                          animation: showBlock 4s 0.8s ease-in-out forwards infinite;
                      }

                      #b4lf2 {
                          animation: showBlock 4s 1s ease-in-out forwards infinite;
                      }

                      #b4rg2 {
                          animation: showBlock 4s 1.2s ease-in-out forwards infinite;
                      }

                      #b4rg {
                          animation: showBlock 4s 1.4s ease-in-out forwards infinite;
                      }
                  </style>
                  <g id='loader'>
                      <path id='b4rg' fill-rule='evenodd' clip-rule='evenodd' d='M138.365 0H118V39H157L157 18.6346C157 13.6924 155.037 8.95263 151.542 5.45796C148.047 1.96329 143.308 0 138.365 0Z' fill='url(#paint0_linear_1356_364)' />
                      <path id='b1lf2' fill-rule='evenodd' clip-rule='evenodd' d='M78 156.997H39V117H78V156.997Z' fill='url(#paint1_linear_1356_364)' />
                      <path id='b4rg2' fill-rule='evenodd' clip-rule='evenodd' d='M118 0H78V39H118V0Z' fill='url(#paint2_linear_1356_364)' />
                      <path id='b4lf2' fill-rule='evenodd' clip-rule='evenodd' d='M78 0H39V39H78V0Z' fill='url(#paint3_linear_1356_364)' />
                      <path id='b1rg2' fill-rule='evenodd' clip-rule='evenodd' d='M118 156.997H78V117H118V156.997Z' fill='url(#paint4_linear_1356_364)' />
                      <path id='b1lf' fill-rule='evenodd' clip-rule='evenodd' d='M0 117V138.365C0 143.307 1.96299 148.046 5.45715 151.54C8.9513 155.034 13.6904 156.997 18.6319 156.997H39V117H0Z' fill='url(#paint5_linear_1356_364)' />
                      <path id='b1rg' fill-rule='evenodd' clip-rule='evenodd' d='M157 117H118V156.997H138.368C143.31 156.997 148.049 155.034 151.543 151.54C155.037 148.046 157 143.307 157 138.365L157 117Z' fill='url(#paint6_linear_1356_364)' />
                      <path id='b4lf' fill-rule='evenodd' clip-rule='evenodd' d='M0 18.6346V39H39V0H18.6346C13.6924 0 8.95263 1.96329 5.45796 5.45796C1.96329 8.95263 0 13.6924 0 18.6346Z' fill='url(#paint7_linear_1356_364)' />
                      <g id='b2rg'>
                          <path id='Intersect' fill-rule='evenodd' clip-rule='evenodd' d='M157 117V78H118V117H157Z' fill='url(#paint8_linear_1356_364)' />
                          <path id='Intersect_2' fill-rule='evenodd' clip-rule='evenodd' d='M130.306 78H118V84.821C127.551 91.4682 139.064 99.7163 140.801 100.96C140.93 101.053 141.005 101.107 141.021 101.118C137.116 92.0299 133.56 84.3848 130.306 78Z' fill='url(#paint9_linear_1356_364)' />
                      </g>
                      <g id='b3rg'>
                          <path id='Intersect_3' fill-rule='evenodd' clip-rule='evenodd' d='M157 78V39H118V78H157Z' fill='url(#paint10_linear_1356_364)' />
                          <path id='Intersect_4' fill-rule='evenodd' clip-rule='evenodd' d='M130.306 78.0003C129.017 75.4709 127.776 73.1394 126.579 70.9942C123.851 66.6947 120.926 64.6866 118 64.2109V78.0003H130.306Z' fill='url(#paint11_linear_1356_364)' />
                          <path id='Intersect_5' fill-rule='evenodd' clip-rule='evenodd' d='M118 57.7256V64.2175C120.924 64.696 123.847 66.7044 126.574 70.9992C123.427 65.3583 120.587 61.0039 118 57.7256Z' fill='url(#paint12_linear_1356_364)' />
                      </g>
                      <g id='b3rg2'>
                          <path id='Intersect_6' fill-rule='evenodd' clip-rule='evenodd' d='M118 39H78V78H118V39Z' fill='url(#paint13_linear_1356_364)' />
                          <path id='Intersect_7' fill-rule='evenodd' clip-rule='evenodd' d='M118 64.2104C110.491 62.9899 102.972 71.861 98.7462 77.9998H118V64.2104Z' fill='url(#paint14_linear_1356_364)' />
                          <path id='Intersect_8' fill-rule='evenodd' clip-rule='evenodd' d='M118 57.7259C105.13 41.4169 98.5134 51.7388 91.4316 62.7865C89.6986 65.49 87.9377 68.237 86.0505 70.6478L86.0311 70.6783C85.5188 71.329 84.9954 71.9604 84.4637 72.5558L84.4305 72.6002C82.7855 74.4362 81.027 75.9593 79.1079 76.9452C78.7524 77.1683 78.3832 77.389 78 77.6056V78.0002H98.7384C102.966 71.8591 110.487 62.9885 118 64.2178V57.7259Z' fill='url(#paint15_linear_1356_364)' />
                      </g>
                      <g id='b2rg2'>
                          <path id='Intersect_9' fill-rule='evenodd' clip-rule='evenodd' d='M118 78H78V117H118V78Z' fill='url(#paint16_linear_1356_364)' />
                          <path id='Intersect_10' fill-rule='evenodd' clip-rule='evenodd' d='M107.238 78.759C102.378 77.7593 98.5733 80.2517 95.2889 83.5555L95.2902 83.553C95.3627 83.4193 96.6491 81.046 98.7462 78H118V84.821C116.244 83.5989 114.554 82.4309 113.004 81.3705C110.924 79.9498 109.011 79.1218 107.238 78.759Z' fill='url(#paint17_linear_1356_364)' />
                          <path id='Intersect_11' fill-rule='evenodd' clip-rule='evenodd' d='M98.7383 78C96.6255 81.0693 95.3355 83.4568 95.2806 83.5608C93.86 84.9863 92.5365 86.5637 91.2667 88.077C88.2591 91.6615 85.5526 94.8872 82.5695 94.8872C81.323 94.8872 79.7714 94.4112 78 93.6168V78H98.7383Z' fill='url(#paint18_linear_1356_364)' />
                      </g>
                      <g id='b2lf2'>
                          <path id='Intersect_12' fill-rule='evenodd' clip-rule='evenodd' d='M78 78H39V117H78V78Z' fill='url(#paint19_linear_1356_364)' />
                          <path id='Intersect_13' fill-rule='evenodd' clip-rule='evenodd' d='M78 93.6168C74.9248 92.2376 71.187 89.8987 67.2329 87.4243C62.9744 84.7595 58.4649 81.9377 54.2617 79.9884C64.4174 82.6506 72.0411 80.76 77.2774 78H78V93.6168Z' fill='url(#paint20_linear_1356_364)' />
                          <path id='Intersect_14' fill-rule='evenodd' clip-rule='evenodd' d='M72.2977 78H48.9442C50.6316 78.4325 52.426 79.1237 54.2783 79.9858C64.4156 82.6519 72.0359 80.7642 77.2718 78H76.045C74.8606 78.2182 73.6152 78.2315 72.2977 78ZM39 79.8063C40.1632 79.0199 41.317 78.3971 42.4529 78H39V79.8063Z' fill='url(#paint21_linear_1356_364)' />
                      </g>
                      <g id='b3lf2'>
                          <path id='Intersect_15' fill-rule='evenodd' clip-rule='evenodd' d='M78 39H39V78H78V39Z' fill='url(#paint22_linear_1356_364)' />
                          <path id='Intersect_16' fill-rule='evenodd' clip-rule='evenodd' d='M78 77.4397C77.3666 77.6873 76.7156 77.8765 76.045 78H77.2718C77.5199 77.869 77.7626 77.7361 78 77.6016V77.4397ZM48.9442 78H72.2977C70.7612 77.7301 69.1268 77.1272 67.3771 76.1281C64.641 74.569 61.6253 72.0379 58.2661 68.2993C51.5101 62.1742 44.942 63.4207 39 68.0066V78H42.4529C43.1405 77.7596 43.8216 77.6019 44.4944 77.5405C45.855 77.4141 47.352 77.5919 48.9442 78Z' fill='url(#paint23_linear_1356_364)' />
                      </g>
                      <g id='b3lf'>
                          <path id='Intersect_17' fill-rule='evenodd' clip-rule='evenodd' d='M0 39V78H39V39H0Z' fill='url(#paint24_linear_1356_364)' />
                          <path id='Intersect_18' fill-rule='evenodd' clip-rule='evenodd' d='M39.0001 68.0068C35.7132 70.5436 32.6179 74.1023 29.7884 78.0002H39.0001V68.0068Z' fill='url(#paint25_linear_1356_364)' />
                      </g>
                      <g id='b2lf'>
                          <path id='Intersect_19' fill-rule='evenodd' clip-rule='evenodd' d='M0 78V117H39V78H0Z' fill='url(#paint26_linear_1356_364)' />
                          <path id='Intersect_20' fill-rule='evenodd' clip-rule='evenodd' d='M28.8356 89.2833C24.6066 93.7653 20.5787 98.0342 17.1697 98.997C17.7609 97.9547 18.4092 96.7797 19.1108 95.5082C21.9072 90.4403 25.5495 83.8394 29.7883 78H39V79.8063C35.6234 82.0894 32.1671 85.7524 28.8356 89.2833Z' fill='url(#paint27_linear_1356_364)' />
                      </g>
                  </g>
                  <defs>
                      <linearGradient id='paint0_linear_1356_364' x1='4.67896e-06' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
                          <stop stop-color='#00B1EB' />
                          <stop offset='1' stop-color='#5A328A' />
                      </linearGradient>
                      <linearGradient id='paint1_linear_1356_364' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
                          <stop stop-color='#00B1EB' />
                          <stop offset='1' stop-color='#5A328A' />
                      </linearGradient>
                      <linearGradient id='paint2_linear_1356_364' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
                          <stop stop-color='#00B1EB' />
                          <stop offset='1' stop-color='#5A328A' />
                      </linearGradient>
                      <linearGradient id='paint3_linear_1356_364' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
                          <stop stop-color='#00B1EB' />
                          <stop offset='1' stop-color='#5A328A' />
                      </linearGradient>
                      <linearGradient id='paint4_linear_1356_364' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
                          <stop stop-color='#00B1EB' />
                          <stop offset='1' stop-color='#5A328A' />
                      </linearGradient>
                      <linearGradient id='paint5_linear_1356_364' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
                          <stop stop-color='#00B1EB' />
                          <stop offset='1' stop-color='#5A328A' />
                      </linearGradient>
                      <linearGradient id='paint6_linear_1356_364' x1='4.67896e-06' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
                          <stop stop-color='#00B1EB' />
                          <stop offset='1' stop-color='#5A328A' />
                      </linearGradient>
                      <linearGradient id='paint7_linear_1356_364' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
                          <stop stop-color='#00B1EB' />
                          <stop offset='1' stop-color='#5A328A' />
                      </linearGradient>
                      <linearGradient id='paint8_linear_1356_364' x1='4.67896e-06' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
                          <stop stop-color='#00B1EB' />
                          <stop offset='1' stop-color='#5A328A' />
                      </linearGradient>
                      <linearGradient id='paint9_linear_1356_364' x1='137.33' y1='83.9681' x2='100.487' y2='77.8202' gradientUnits='userSpaceOnUse'>
                          <stop stop-color='white' />
                          <stop offset='1' stop-color='#B2B2B2' />
                      </linearGradient>
                      <linearGradient id='paint10_linear_1356_364' x1='4.67896e-06' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
                          <stop stop-color='#00B1EB' />
                          <stop offset='1' stop-color='#5A328A' />
                      </linearGradient>
                      <linearGradient id='paint11_linear_1356_364' x1='137.33' y1='83.9683' x2='100.487' y2='77.8205' gradientUnits='userSpaceOnUse'>
                          <stop stop-color='white' />
                          <stop offset='1' stop-color='#B2B2B2' />
                      </linearGradient>
                      <linearGradient id='paint12_linear_1356_364' x1='108.753' y1='64.9788' x2='72.1348' y2='82.4032' gradientUnits='userSpaceOnUse'>
                          <stop stop-color='white' />
                          <stop offset='1' stop-color='#C6C6C6' />
                      </linearGradient>
                      <linearGradient id='paint13_linear_1356_364' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
                          <stop stop-color='#00B1EB' />
                          <stop offset='1' stop-color='#5A328A' />
                      </linearGradient>
                      <linearGradient id='paint14_linear_1356_364' x1='137.33' y1='83.9678' x2='100.487' y2='77.82' gradientUnits='userSpaceOnUse'>
                          <stop stop-color='white' />
                          <stop offset='1' stop-color='#B2B2B2' />
                      </linearGradient>
                      <linearGradient id='paint15_linear_1356_364' x1='108.753' y1='64.979' x2='72.1348' y2='82.4035' gradientUnits='userSpaceOnUse'>
                          <stop stop-color='white' />
                          <stop offset='1' stop-color='#C6C6C6' />
                      </linearGradient>
                      <linearGradient id='paint16_linear_1356_364' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
                          <stop stop-color='#00B1EB' />
                          <stop offset='1' stop-color='#5A328A' />
                      </linearGradient>
                      <linearGradient id='paint17_linear_1356_364' x1='137.33' y1='83.9681' x2='100.487' y2='77.8202' gradientUnits='userSpaceOnUse'>
                          <stop stop-color='white' />
                          <stop offset='1' stop-color='#B2B2B2' />
                      </linearGradient>
                      <linearGradient id='paint18_linear_1356_364' x1='108.753' y1='64.9788' x2='72.1348' y2='82.4032' gradientUnits='userSpaceOnUse'>
                          <stop stop-color='white' />
                          <stop offset='1' stop-color='#C6C6C6' />
                      </linearGradient>
                      <linearGradient id='paint19_linear_1356_364' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
                          <stop stop-color='#00B1EB' />
                          <stop offset='1' stop-color='#5A328A' />
                      </linearGradient>
                      <linearGradient id='paint20_linear_1356_364' x1='108.753' y1='64.9788' x2='72.1348' y2='82.4032' gradientUnits='userSpaceOnUse'>
                          <stop stop-color='white' />
                          <stop offset='1' stop-color='#C6C6C6' />
                      </linearGradient>
                      <linearGradient id='paint21_linear_1356_364' x1='76.9866' y1='81.2236' x2='30.7365' y2='81.5809' gradientUnits='userSpaceOnUse'>
                          <stop stop-color='white' />
                          <stop offset='0.45' stop-color='#E8E8E8' />
                          <stop offset='1' stop-color='#C6C6C6' />
                      </linearGradient>
                      <linearGradient id='paint22_linear_1356_364' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
                          <stop stop-color='#00B1EB' />
                          <stop offset='1' stop-color='#5A328A' />
                      </linearGradient>
                      <linearGradient id='paint23_linear_1356_364' x1='76.9866' y1='81.2236' x2='30.7365' y2='81.5809' gradientUnits='userSpaceOnUse'>
                          <stop stop-color='white' />
                          <stop offset='0.45' stop-color='#E8E8E8' />
                          <stop offset='1' stop-color='#C6C6C6' />
                      </linearGradient>
                      <linearGradient id='paint24_linear_1356_364' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
                          <stop stop-color='#00B1EB' />
                          <stop offset='1' stop-color='#5A328A' />
                      </linearGradient>
                      <linearGradient id='paint25_linear_1356_364' x1='76.9866' y1='81.2239' x2='30.7365' y2='81.5811' gradientUnits='userSpaceOnUse'>
                          <stop stop-color='white' />
                          <stop offset='0.45' stop-color='#E8E8E8' />
                          <stop offset='1' stop-color='#C6C6C6' />
                      </linearGradient>
                      <linearGradient id='paint26_linear_1356_364' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
                          <stop stop-color='#00B1EB' />
                          <stop offset='1' stop-color='#5A328A' />
                      </linearGradient>
                      <linearGradient id='paint27_linear_1356_364' x1='76.9866' y1='81.2236' x2='30.7365' y2='81.5809' gradientUnits='userSpaceOnUse'>
                          <stop stop-color='white' />
                          <stop offset='0.45' stop-color='#E8E8E8' />
                          <stop offset='1' stop-color='#C6C6C6' />
                      </linearGradient>
                  </defs>
              </svg>
              ")
            Width: =Parent.Width
            X: '=0   '
            Y: '=0   '

`;m.setAttribute("data-code",P1);m.innerHTML=`
<svg width='157' height='157' viewBox='0 0 157 157' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <style>
            @keyframes showBlock {
                0%{
                    opacity: 0;
                    transform: translateY(-80px);
                }
                50%{
                    opacity: 1;
                    transform: translateY(0px);
                }
                90%{
                    opacity: 1;
                    transform: translateY(0px);
                }
                100%{
                    opacity: 0;
                    transform: translateY(0px);
                }
            }
            
            #b1lf{
                animation: showBlock 4s 0.2s ease-in-out forwards infinite;
            }
            
            #b1lf2{
                animation: showBlock 4s 0.4s ease-in-out forwards infinite;
            }
            
            #b1rg2{
                animation: showBlock 4s 0.6s ease-in-out forwards infinite;
            }
            
            #b1rg{
                animation: showBlock 4s 0.8s ease-in-out forwards infinite;
            }
            
            
            #b2lf{
                animation: showBlock 4s 0.4s ease-in-out forwards infinite;
            }
            
            #b2lf2{
                animation: showBlock 4s 0.6s ease-in-out forwards infinite;
            }
            
            #b2rg2{
                animation: showBlock 4s 0.8s ease-in-out forwards infinite;
            }
            
            #b2rg{
                animation: showBlock 4s 1s ease-in-out forwards infinite;
            }
            
            
            #b3lf{
                animation: showBlock 4s 0.6s ease-in-out forwards infinite;
            }
            
            #b3lf2{
                animation: showBlock 4s 0.8s ease-in-out forwards infinite;
            }
            
            #b3rg2{
                animation: showBlock 4s 1s ease-in-out forwards infinite;
            }
            
            #b3rg{
                animation: showBlock 4s 1.2s ease-in-out forwards infinite;
            }
            
            
            #b4lf{
                animation: showBlock 4s 0.8s ease-in-out forwards infinite;
            }
            
            #b4lf2{
                animation: showBlock 4s 1s ease-in-out forwards infinite;
            }
            
            #b4rg2{
                animation: showBlock 4s 1.2s ease-in-out forwards infinite;
            }
            
            #b4rg{
                animation: showBlock 4s 1.4s ease-in-out forwards infinite;
            }
                </style>
        <g id='loader'>
        <path id='b4rg' fill-rule='evenodd' clip-rule='evenodd' d='M138.365 0H118V39H157L157 18.6346C157 13.6924 155.037 8.95263 151.542 5.45796C148.047 1.96329 143.308 0 138.365 0Z' fill='url(#paint0_linear_1356_364)'/>
        <path id='b1lf2' fill-rule='evenodd' clip-rule='evenodd' d='M78 156.997H39V117H78V156.997Z' fill='url(#paint1_linear_1356_364)'/>
        <path id='b4rg2' fill-rule='evenodd' clip-rule='evenodd' d='M118 0H78V39H118V0Z' fill='url(#paint2_linear_1356_364)'/>
        <path id='b4lf2' fill-rule='evenodd' clip-rule='evenodd' d='M78 0H39V39H78V0Z' fill='url(#paint3_linear_1356_364)'/>
        <path id='b1rg2' fill-rule='evenodd' clip-rule='evenodd' d='M118 156.997H78V117H118V156.997Z' fill='url(#paint4_linear_1356_364)'/>
        <path id='b1lf' fill-rule='evenodd' clip-rule='evenodd' d='M0 117V138.365C0 143.307 1.96299 148.046 5.45715 151.54C8.9513 155.034 13.6904 156.997 18.6319 156.997H39V117H0Z' fill='url(#paint5_linear_1356_364)'/>
        <path id='b1rg' fill-rule='evenodd' clip-rule='evenodd' d='M157 117H118V156.997H138.368C143.31 156.997 148.049 155.034 151.543 151.54C155.037 148.046 157 143.307 157 138.365L157 117Z' fill='url(#paint6_linear_1356_364)'/>
        <path id='b4lf' fill-rule='evenodd' clip-rule='evenodd' d='M0 18.6346V39H39V0H18.6346C13.6924 0 8.95263 1.96329 5.45796 5.45796C1.96329 8.95263 0 13.6924 0 18.6346Z' fill='url(#paint7_linear_1356_364)'/>
        <g id='b2rg'>
        <path id='Intersect' fill-rule='evenodd' clip-rule='evenodd' d='M157 117V78H118V117H157Z' fill='url(#paint8_linear_1356_364)'/>
        <path id='Intersect_2' fill-rule='evenodd' clip-rule='evenodd' d='M130.306 78H118V84.821C127.551 91.4682 139.064 99.7163 140.801 100.96C140.93 101.053 141.005 101.107 141.021 101.118C137.116 92.0299 133.56 84.3848 130.306 78Z' fill='url(#paint9_linear_1356_364)'/>
        </g>
        <g id='b3rg'>
        <path id='Intersect_3' fill-rule='evenodd' clip-rule='evenodd' d='M157 78V39H118V78H157Z' fill='url(#paint10_linear_1356_364)'/>
        <path id='Intersect_4' fill-rule='evenodd' clip-rule='evenodd' d='M130.306 78.0003C129.017 75.4709 127.776 73.1394 126.579 70.9942C123.851 66.6947 120.926 64.6866 118 64.2109V78.0003H130.306Z' fill='url(#paint11_linear_1356_364)'/>
        <path id='Intersect_5' fill-rule='evenodd' clip-rule='evenodd' d='M118 57.7256V64.2175C120.924 64.696 123.847 66.7044 126.574 70.9992C123.427 65.3583 120.587 61.0039 118 57.7256Z' fill='url(#paint12_linear_1356_364)'/>
        </g>
        <g id='b3rg2'>
        <path id='Intersect_6' fill-rule='evenodd' clip-rule='evenodd' d='M118 39H78V78H118V39Z' fill='url(#paint13_linear_1356_364)'/>
        <path id='Intersect_7' fill-rule='evenodd' clip-rule='evenodd' d='M118 64.2104C110.491 62.9899 102.972 71.861 98.7462 77.9998H118V64.2104Z' fill='url(#paint14_linear_1356_364)'/>
        <path id='Intersect_8' fill-rule='evenodd' clip-rule='evenodd' d='M118 57.7259C105.13 41.4169 98.5134 51.7388 91.4316 62.7865C89.6986 65.49 87.9377 68.237 86.0505 70.6478L86.0311 70.6783C85.5188 71.329 84.9954 71.9604 84.4637 72.5558L84.4305 72.6002C82.7855 74.4362 81.027 75.9593 79.1079 76.9452C78.7524 77.1683 78.3832 77.389 78 77.6056V78.0002H98.7384C102.966 71.8591 110.487 62.9885 118 64.2178V57.7259Z' fill='url(#paint15_linear_1356_364)'/>
        </g>
        <g id='b2rg2'>
        <path id='Intersect_9' fill-rule='evenodd' clip-rule='evenodd' d='M118 78H78V117H118V78Z' fill='url(#paint16_linear_1356_364)'/>
        <path id='Intersect_10' fill-rule='evenodd' clip-rule='evenodd' d='M107.238 78.759C102.378 77.7593 98.5733 80.2517 95.2889 83.5555L95.2902 83.553C95.3627 83.4193 96.6491 81.046 98.7462 78H118V84.821C116.244 83.5989 114.554 82.4309 113.004 81.3705C110.924 79.9498 109.011 79.1218 107.238 78.759Z' fill='url(#paint17_linear_1356_364)'/>
        <path id='Intersect_11' fill-rule='evenodd' clip-rule='evenodd' d='M98.7383 78C96.6255 81.0693 95.3355 83.4568 95.2806 83.5608C93.86 84.9863 92.5365 86.5637 91.2667 88.077C88.2591 91.6615 85.5526 94.8872 82.5695 94.8872C81.323 94.8872 79.7714 94.4112 78 93.6168V78H98.7383Z' fill='url(#paint18_linear_1356_364)'/>
        </g>
        <g id='b2lf2'>
        <path id='Intersect_12' fill-rule='evenodd' clip-rule='evenodd' d='M78 78H39V117H78V78Z' fill='url(#paint19_linear_1356_364)'/>
        <path id='Intersect_13' fill-rule='evenodd' clip-rule='evenodd' d='M78 93.6168C74.9248 92.2376 71.187 89.8987 67.2329 87.4243C62.9744 84.7595 58.4649 81.9377 54.2617 79.9884C64.4174 82.6506 72.0411 80.76 77.2774 78H78V93.6168Z' fill='url(#paint20_linear_1356_364)'/>
        <path id='Intersect_14' fill-rule='evenodd' clip-rule='evenodd' d='M72.2977 78H48.9442C50.6316 78.4325 52.426 79.1237 54.2783 79.9858C64.4156 82.6519 72.0359 80.7642 77.2718 78H76.045C74.8606 78.2182 73.6152 78.2315 72.2977 78ZM39 79.8063C40.1632 79.0199 41.317 78.3971 42.4529 78H39V79.8063Z' fill='url(#paint21_linear_1356_364)'/>
        </g>
        <g id='b3lf2'>
        <path id='Intersect_15' fill-rule='evenodd' clip-rule='evenodd' d='M78 39H39V78H78V39Z' fill='url(#paint22_linear_1356_364)'/>
        <path id='Intersect_16' fill-rule='evenodd' clip-rule='evenodd' d='M78 77.4397C77.3666 77.6873 76.7156 77.8765 76.045 78H77.2718C77.5199 77.869 77.7626 77.7361 78 77.6016V77.4397ZM48.9442 78H72.2977C70.7612 77.7301 69.1268 77.1272 67.3771 76.1281C64.641 74.569 61.6253 72.0379 58.2661 68.2993C51.5101 62.1742 44.942 63.4207 39 68.0066V78H42.4529C43.1405 77.7596 43.8216 77.6019 44.4944 77.5405C45.855 77.4141 47.352 77.5919 48.9442 78Z' fill='url(#paint23_linear_1356_364)'/>
        </g>
        <g id='b3lf'>
        <path id='Intersect_17' fill-rule='evenodd' clip-rule='evenodd' d='M0 39V78H39V39H0Z' fill='url(#paint24_linear_1356_364)'/>
        <path id='Intersect_18' fill-rule='evenodd' clip-rule='evenodd' d='M39.0001 68.0068C35.7132 70.5436 32.6179 74.1023 29.7884 78.0002H39.0001V68.0068Z' fill='url(#paint25_linear_1356_364)'/>
        </g>
        <g id='b2lf'>
        <path id='Intersect_19' fill-rule='evenodd' clip-rule='evenodd' d='M0 78V117H39V78H0Z' fill='url(#paint26_linear_1356_364)'/>
        <path id='Intersect_20' fill-rule='evenodd' clip-rule='evenodd' d='M28.8356 89.2833C24.6066 93.7653 20.5787 98.0342 17.1697 98.997C17.7609 97.9547 18.4092 96.7797 19.1108 95.5082C21.9072 90.4403 25.5495 83.8394 29.7883 78H39V79.8063C35.6234 82.0894 32.1671 85.7524 28.8356 89.2833Z' fill='url(#paint27_linear_1356_364)'/>
        </g>
        </g>
        <defs>
        <linearGradient id='paint0_linear_1356_364' x1='4.67896e-06' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#00B1EB'/>
        <stop offset='1' stop-color='#5A328A'/>
        </linearGradient>
        <linearGradient id='paint1_linear_1356_364' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#00B1EB'/>
        <stop offset='1' stop-color='#5A328A'/>
        </linearGradient>
        <linearGradient id='paint2_linear_1356_364' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#00B1EB'/>
        <stop offset='1' stop-color='#5A328A'/>
        </linearGradient>
        <linearGradient id='paint3_linear_1356_364' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#00B1EB'/>
        <stop offset='1' stop-color='#5A328A'/>
        </linearGradient>
        <linearGradient id='paint4_linear_1356_364' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#00B1EB'/>
        <stop offset='1' stop-color='#5A328A'/>
        </linearGradient>
        <linearGradient id='paint5_linear_1356_364' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#00B1EB'/>
        <stop offset='1' stop-color='#5A328A'/>
        </linearGradient>
        <linearGradient id='paint6_linear_1356_364' x1='4.67896e-06' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#00B1EB'/>
        <stop offset='1' stop-color='#5A328A'/>
        </linearGradient>
        <linearGradient id='paint7_linear_1356_364' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#00B1EB'/>
        <stop offset='1' stop-color='#5A328A'/>
        </linearGradient>
        <linearGradient id='paint8_linear_1356_364' x1='4.67896e-06' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#00B1EB'/>
        <stop offset='1' stop-color='#5A328A'/>
        </linearGradient>
        <linearGradient id='paint9_linear_1356_364' x1='137.33' y1='83.9681' x2='100.487' y2='77.8202' gradientUnits='userSpaceOnUse'>
        <stop stop-color='white'/>
        <stop offset='1' stop-color='#B2B2B2'/>
        </linearGradient>
        <linearGradient id='paint10_linear_1356_364' x1='4.67896e-06' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#00B1EB'/>
        <stop offset='1' stop-color='#5A328A'/>
        </linearGradient>
        <linearGradient id='paint11_linear_1356_364' x1='137.33' y1='83.9683' x2='100.487' y2='77.8205' gradientUnits='userSpaceOnUse'>
        <stop stop-color='white'/>
        <stop offset='1' stop-color='#B2B2B2'/>
        </linearGradient>
        <linearGradient id='paint12_linear_1356_364' x1='108.753' y1='64.9788' x2='72.1348' y2='82.4032' gradientUnits='userSpaceOnUse'>
        <stop stop-color='white'/>
        <stop offset='1' stop-color='#C6C6C6'/>
        </linearGradient>
        <linearGradient id='paint13_linear_1356_364' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#00B1EB'/>
        <stop offset='1' stop-color='#5A328A'/>
        </linearGradient>
        <linearGradient id='paint14_linear_1356_364' x1='137.33' y1='83.9678' x2='100.487' y2='77.82' gradientUnits='userSpaceOnUse'>
        <stop stop-color='white'/>
        <stop offset='1' stop-color='#B2B2B2'/>
        </linearGradient>
        <linearGradient id='paint15_linear_1356_364' x1='108.753' y1='64.979' x2='72.1348' y2='82.4035' gradientUnits='userSpaceOnUse'>
        <stop stop-color='white'/>
        <stop offset='1' stop-color='#C6C6C6'/>
        </linearGradient>
        <linearGradient id='paint16_linear_1356_364' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#00B1EB'/>
        <stop offset='1' stop-color='#5A328A'/>
        </linearGradient>
        <linearGradient id='paint17_linear_1356_364' x1='137.33' y1='83.9681' x2='100.487' y2='77.8202' gradientUnits='userSpaceOnUse'>
        <stop stop-color='white'/>
        <stop offset='1' stop-color='#B2B2B2'/>
        </linearGradient>
        <linearGradient id='paint18_linear_1356_364' x1='108.753' y1='64.9788' x2='72.1348' y2='82.4032' gradientUnits='userSpaceOnUse'>
        <stop stop-color='white'/>
        <stop offset='1' stop-color='#C6C6C6'/>
        </linearGradient>
        <linearGradient id='paint19_linear_1356_364' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#00B1EB'/>
        <stop offset='1' stop-color='#5A328A'/>
        </linearGradient>
        <linearGradient id='paint20_linear_1356_364' x1='108.753' y1='64.9788' x2='72.1348' y2='82.4032' gradientUnits='userSpaceOnUse'>
        <stop stop-color='white'/>
        <stop offset='1' stop-color='#C6C6C6'/>
        </linearGradient>
        <linearGradient id='paint21_linear_1356_364' x1='76.9866' y1='81.2236' x2='30.7365' y2='81.5809' gradientUnits='userSpaceOnUse'>
        <stop stop-color='white'/>
        <stop offset='0.45' stop-color='#E8E8E8'/>
        <stop offset='1' stop-color='#C6C6C6'/>
        </linearGradient>
        <linearGradient id='paint22_linear_1356_364' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#00B1EB'/>
        <stop offset='1' stop-color='#5A328A'/>
        </linearGradient>
        <linearGradient id='paint23_linear_1356_364' x1='76.9866' y1='81.2236' x2='30.7365' y2='81.5809' gradientUnits='userSpaceOnUse'>
        <stop stop-color='white'/>
        <stop offset='0.45' stop-color='#E8E8E8'/>
        <stop offset='1' stop-color='#C6C6C6'/>
        </linearGradient>
        <linearGradient id='paint24_linear_1356_364' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#00B1EB'/>
        <stop offset='1' stop-color='#5A328A'/>
        </linearGradient>
        <linearGradient id='paint25_linear_1356_364' x1='76.9866' y1='81.2239' x2='30.7365' y2='81.5811' gradientUnits='userSpaceOnUse'>
        <stop stop-color='white'/>
        <stop offset='0.45' stop-color='#E8E8E8'/>
        <stop offset='1' stop-color='#C6C6C6'/>
        </linearGradient>
        <linearGradient id='paint26_linear_1356_364' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#00B1EB'/>
        <stop offset='1' stop-color='#5A328A'/>
        </linearGradient>
        <linearGradient id='paint27_linear_1356_364' x1='76.9866' y1='81.2236' x2='30.7365' y2='81.5809' gradientUnits='userSpaceOnUse'>
        <stop stop-color='white'/>
        <stop offset='0.45' stop-color='#E8E8E8'/>
        <stop offset='1' stop-color='#C6C6C6'/>
        </linearGradient>
        </defs>
        </svg>
`;const P=document.createElement("div"),V1=`- splashContainer:
    Control: GroupContainer@1.3.0
    Variant: AutoLayout
    Properties:
      AlignInContainer: =AlignInContainer.Center
      DropShadow: =DropShadow.None
      FillPortions: =0
      Height: '=130 '
      LayoutDirection: =LayoutDirection.Vertical
      LayoutGap: =24
      RadiusBottomLeft: =0
      RadiusBottomRight: =0
      RadiusTopLeft: =0
      RadiusTopRight: =0
      Width: =If(App.Width < 768, 200, 400)
      X: =App.Width /2 - Self.Width/2
      Y: =App.Height /2 - Self.Height/2
    Children:
      - splash-apex:
          Control: Image@2.2.3
          Properties:
            BorderColor: =RGBA(0, 18, 107, 1)
            Height: =130
            Image: |-
              ="data:image/svg+xml;utf8, " & EncodeUrl("
              <svg width='497' height='162' viewBox='0 0 497 162' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <style>
                          @keyframes showBlock {
                              0%{
                                  opacity: 0;
                                  transform: translateY(-80px);
                              }
                              50%{
                                  opacity: 1;
                                  transform: translateY(0px);
                              }
                              90%{
                                  opacity: 1;
                                  transform: translateY(0px);
                              }
                              100%{
                                  opacity: 0;
                                  transform: translateY(0px);
                              }
                          }
                          @keyframes fromLeft {
                              0%{
                                  opacity: 0;
                                  transform: translateX(-80px);
                              }
                              100%{
                                  opacity: 1;
                                  transform: translateX(0px);
                              }
                          }
                          @keyframes showFade {
                              0%{
                                  opacity: 0;
                              }
                              95%{
                                  opacity: 0;
                              }
                              100%{
                                  opacity: 1;
                              }
                          }
                          #b1lf{
                              animation: showBlock 4s 0.2s ease-in-out forwards 2;
                          }
                          #b1lf2{
                              animation: showBlock 4s 0.4s ease-in-out forwards 2;
                          }
                          #b1rg2{
                              animation: showBlock 4s 0.6s ease-in-out forwards 2;
                          }
                          #b1rg{
                              animation: showBlock 4s 0.8s ease-in-out forwards 2;
                          }
                          #b2lf{
                              animation: showBlock 4s 0.4s ease-in-out forwards 2;
                          }
                          #b2lf2{
                              animation: showBlock 4s 0.6s ease-in-out forwards 2;
                          }
                          #b2rg2{
                              animation: showBlock 4s 0.8s ease-in-out forwards 2;
                          }
                          #b2rg{
                              animation: showBlock 4s 1s ease-in-out forwards 2;
                          }
                          #b3lf{
                              animation: showBlock 4s 0.6s ease-in-out forwards 2;
                          }
                          #b3lf2{
                              animation: showBlock 4s 0.8s ease-in-out forwards 2;
                          }  
                          #b3rg2{
                              animation: showBlock 4s 1s ease-in-out forwards 2;
                          }
                          #b3rg{
                              animation: showBlock 4s 1.2s ease-in-out forwards 2;
                          } 
                          #b4lf{
                              animation: showBlock 4s 0.8s ease-in-out forwards 2;
                          } 
                          #b4lf2{
                              animation: showBlock 4s 1s ease-in-out forwards 2;
                          }
                          #b4rg2{
                              animation: showBlock 4s 1.2s ease-in-out forwards 2;
                          }
                          #b4rg{
                              animation: showBlock 4s 1.4s ease-in-out forwards 2;
                          }
                          #a{
                              opacity: 0;
                              animation: fromLeft 1s 5.2s ease-in-out forwards;
                          }
                          #p{
                              opacity: 0;
                              animation: fromLeft 1s 5.4s ease-in-out forwards;
                          }
                          #e{
                              opacity: 0;
                              animation: fromLeft 1s 5.5s ease-in-out forwards;
                          }
                          #x{
                              opacity: 0;
                              animation: fromLeft 1s 5.8s ease-in-out forwards;
                          }
                          #building{
                              opacity: 0;
                              animation: fromLeft 1s 5.4s ease-in-out forwards;
                          }
                          #normal-logo{
                              animation: showFade 4s 4s ease-in-out forwards;
                              opacity: 0;
                          }
                  </style>
                      <g id='apex-loader'>
                      <g id='building'>
                      <path id='Vector' fill-rule='evenodd' clip-rule='evenodd' d='M295.423 149.16C295.428 148.506 295.295 147.859 295.033 147.26C294.802 146.687 294.462 146.164 294.033 145.72C293.583 145.281 293.058 144.925 292.483 144.67C291.882 144.417 291.235 144.288 290.583 144.29C289.94 144.287 289.304 144.417 288.713 144.67C288.136 144.916 287.612 145.272 287.173 145.72C286.718 146.171 286.357 146.708 286.11 147.299C285.864 147.89 285.737 148.524 285.737 149.165C285.737 149.806 285.864 150.44 286.11 151.031C286.357 151.622 286.718 152.159 287.173 152.61C287.614 153.043 288.138 153.384 288.713 153.61C289.302 153.871 289.939 154.004 290.583 154C291.237 154.004 291.884 153.871 292.483 153.61C293.056 153.374 293.581 153.035 294.033 152.61C294.462 152.162 294.802 151.636 295.033 151.06L295.423 149.16ZM297.093 149.16C297.081 150.441 296.697 151.69 295.986 152.756C295.276 153.821 294.271 154.657 293.093 155.16C292.292 155.51 291.427 155.687 290.553 155.68C289.964 155.684 289.377 155.6 288.813 155.43C288.268 155.283 287.746 155.061 287.263 154.77C286.296 154.203 285.49 153.397 284.923 152.43C284.633 151.948 284.408 151.43 284.253 150.89C284.084 150.329 284 149.746 284.003 149.16V137.89C283.992 137.766 284.011 137.642 284.058 137.527C284.105 137.413 284.179 137.311 284.273 137.23C284.422 137.083 284.623 137 284.833 137C285.048 137.004 285.254 137.086 285.413 137.23C285.503 137.313 285.574 137.416 285.619 137.53C285.664 137.644 285.682 137.767 285.673 137.89V144.78C286.27 144.108 287.003 143.569 287.823 143.2C288.669 142.809 289.591 142.611 290.523 142.62C291.109 142.634 291.691 142.725 292.253 142.89C292.801 143.045 293.328 143.267 293.823 143.55C294.304 143.825 294.748 144.161 295.143 144.55C295.528 144.948 295.864 145.391 296.143 145.87C296.429 146.364 296.654 146.892 296.813 147.44L297.093 149.16Z' fill='url(#paint0_linear_1344_63)'/>
                      <path id='Vector_2' fill-rule='evenodd' clip-rule='evenodd' d='M388.903 143.45C388.901 143.66 388.823 143.863 388.683 144.02C388.602 144.114 388.5 144.188 388.386 144.235C388.271 144.282 388.146 144.301 388.023 144.29H383.933V150.05C383.948 151.097 384.363 152.099 385.093 152.85C385.461 153.211 385.891 153.503 386.363 153.71C386.856 153.932 387.392 154.045 387.933 154.04C388.055 154.031 388.177 154.048 388.291 154.091C388.405 154.135 388.508 154.202 388.593 154.29C388.733 154.445 388.811 154.646 388.811 154.855C388.811 155.064 388.733 155.265 388.593 155.42C388.511 155.512 388.409 155.585 388.294 155.632C388.18 155.678 388.056 155.698 387.933 155.69C387.174 155.696 386.422 155.546 385.723 155.25C384.376 154.671 383.302 153.597 382.723 152.25C382.421 151.56 382.267 150.814 382.273 150.06V137.89C382.262 137.766 382.281 137.642 382.328 137.527C382.375 137.413 382.449 137.311 382.543 137.23C382.693 137.085 382.894 137.002 383.103 137C383.318 137.004 383.524 137.086 383.683 137.23C383.774 137.313 383.844 137.416 383.889 137.53C383.934 137.644 383.953 137.767 383.943 137.89V142.62H388.033C388.154 142.609 388.276 142.625 388.39 142.667C388.504 142.708 388.607 142.774 388.693 142.86L388.903 143.45Z' fill='url(#paint1_linear_1344_63)'/>
                      <path id='Vector_3' fill-rule='evenodd' clip-rule='evenodd' d='M434.573 143.45C434.571 143.66 434.493 143.863 434.353 144.02C434.272 144.114 434.17 144.188 434.056 144.235C433.941 144.282 433.817 144.301 433.693 144.29H429.603V154.89C429.613 155.016 429.596 155.142 429.551 155.26C429.505 155.377 429.435 155.483 429.343 155.57C429.181 155.708 428.976 155.785 428.763 155.79C428.556 155.787 428.357 155.708 428.203 155.57C428.108 155.486 428.034 155.38 427.987 155.262C427.94 155.144 427.922 155.017 427.933 154.89V142.79C427.927 142.037 428.081 141.29 428.383 140.6C428.67 139.929 429.076 139.315 429.583 138.79C430.108 138.266 430.732 137.851 431.419 137.569C432.105 137.288 432.841 137.145 433.583 137.15C433.705 137.14 433.827 137.157 433.941 137.2C434.055 137.244 434.159 137.312 434.243 137.4C434.378 137.556 434.456 137.754 434.463 137.96C434.456 138.169 434.378 138.37 434.243 138.53C434.161 138.623 434.059 138.696 433.945 138.743C433.83 138.789 433.706 138.809 433.583 138.8C433.044 138.793 432.509 138.899 432.013 139.11C431.541 139.321 431.11 139.616 430.743 139.98C430.395 140.328 430.117 140.738 429.923 141.19C429.712 141.663 429.596 142.172 429.583 142.69H433.673C433.794 142.679 433.916 142.695 434.03 142.737C434.144 142.778 434.247 142.844 434.333 142.93L434.573 143.45Z' fill='url(#paint2_linear_1344_63)'/>
                      <path id='Vector_4' fill-rule='evenodd' clip-rule='evenodd' d='M311.483 150.05C311.492 150.809 311.342 151.562 311.043 152.26C310.744 152.932 310.328 153.545 309.813 154.07C309.291 154.584 308.677 154.994 308.003 155.28C307.306 155.583 306.553 155.74 305.793 155.74C305.033 155.74 304.28 155.583 303.583 155.28C302.904 154.997 302.287 154.586 301.763 154.07C301.242 153.552 300.827 152.937 300.543 152.26C300.233 151.565 300.076 150.811 300.083 150.05V143.52C300.072 143.396 300.091 143.272 300.138 143.157C300.185 143.042 300.259 142.941 300.353 142.86C300.508 142.717 300.712 142.638 300.923 142.64C301.133 142.642 301.336 142.72 301.493 142.86C301.587 142.941 301.661 143.042 301.708 143.157C301.755 143.272 301.774 143.396 301.763 143.52V150.05C301.758 150.586 301.864 151.117 302.073 151.61C302.278 152.092 302.573 152.53 302.943 152.9C303.308 153.269 303.743 153.561 304.223 153.76C304.718 153.978 305.252 154.09 305.793 154.09C306.334 154.09 306.868 153.978 307.363 153.76C307.837 153.556 308.268 153.264 308.633 152.9C308.997 152.524 309.291 152.088 309.503 151.61C309.712 151.117 309.818 150.586 309.813 150.05V143.52C309.803 143.397 309.822 143.274 309.867 143.16C309.912 143.046 309.982 142.943 310.073 142.86C310.233 142.719 310.439 142.64 310.653 142.64C310.864 142.64 311.067 142.718 311.223 142.86C311.315 142.942 311.387 143.044 311.432 143.159C311.478 143.273 311.495 143.397 311.483 143.52V150.05Z' fill='url(#paint3_linear_1344_63)'/>
                      <path id='Vector_5' fill-rule='evenodd' clip-rule='evenodd' d='M316.583 154.89C316.596 155.016 316.579 155.143 316.534 155.261C316.488 155.379 316.416 155.485 316.323 155.57C316.165 155.712 315.96 155.79 315.748 155.79C315.536 155.79 315.331 155.712 315.173 155.57C315.08 155.485 315.007 155.379 314.962 155.261C314.917 155.143 314.9 155.016 314.913 154.89V143.46C314.902 143.336 314.919 143.211 314.965 143.094C315.01 142.978 315.081 142.874 315.173 142.79C315.328 142.641 315.534 142.558 315.748 142.558C315.962 142.558 316.168 142.641 316.323 142.79C316.415 142.874 316.486 142.978 316.531 143.094C316.576 143.211 316.594 143.336 316.583 143.46V154.89ZM317.023 139.63C317.023 139.791 316.992 139.95 316.933 140.1C316.869 140.255 316.774 140.394 316.653 140.51C316.54 140.626 316.403 140.718 316.253 140.78C316.092 140.852 315.919 140.889 315.743 140.89C315.57 140.889 315.4 140.851 315.243 140.78C315.09 140.724 314.952 140.631 314.843 140.51C314.725 140.394 314.633 140.254 314.573 140.1C314.503 139.953 314.465 139.793 314.463 139.63C314.464 139.457 314.501 139.287 314.573 139.13C314.699 138.817 314.938 138.564 315.243 138.42C315.403 138.359 315.572 138.329 315.743 138.33C315.917 138.329 316.09 138.359 316.253 138.42C316.4 138.496 316.535 138.594 316.653 138.71C316.772 138.831 316.867 138.973 316.933 139.13L317.023 139.63Z' fill='url(#paint4_linear_1344_63)'/>
                      <path id='Vector_6' fill-rule='evenodd' clip-rule='evenodd' d='M321.683 154.89C321.693 155.016 321.675 155.142 321.63 155.26C321.585 155.377 321.514 155.483 321.423 155.57C321.26 155.708 321.056 155.785 320.843 155.79C320.635 155.788 320.436 155.71 320.283 155.57C320.188 155.486 320.114 155.38 320.067 155.262C320.02 155.144 320.001 155.017 320.013 154.89V137.89C320.002 137.766 320.021 137.642 320.068 137.527C320.115 137.413 320.189 137.311 320.283 137.23C320.432 137.083 320.633 137 320.843 137C321.058 137.004 321.264 137.086 321.423 137.23C321.513 137.313 321.584 137.416 321.629 137.53C321.674 137.644 321.692 137.767 321.683 137.89V154.89Z' fill='url(#paint5_linear_1344_63)'/>
                      <path id='Vector_7' fill-rule='evenodd' clip-rule='evenodd' d='M336.063 149.16C336.071 148.507 335.942 147.86 335.683 147.26C335.436 146.683 335.079 146.16 334.633 145.72C334.184 145.279 333.659 144.923 333.083 144.67C332.482 144.416 331.835 144.286 331.183 144.29C330.54 144.287 329.904 144.417 329.313 144.67C328.736 144.916 328.212 145.272 327.773 145.72C327.347 146.167 327.008 146.689 326.773 147.26C326.514 147.86 326.384 148.507 326.393 149.16C326.387 149.813 326.516 150.46 326.773 151.06C327.008 151.634 327.347 152.159 327.773 152.61C328.214 153.043 328.738 153.384 329.313 153.61C329.902 153.871 330.539 154.004 331.183 154C331.837 154.005 332.484 153.872 333.083 153.61C333.657 153.376 334.183 153.037 334.633 152.61C335.08 152.166 335.436 151.64 335.683 151.06L336.063 149.16ZM337.743 149.16C337.744 150.017 337.574 150.865 337.242 151.655C336.911 152.445 336.425 153.16 335.813 153.76C335.222 154.361 334.518 154.84 333.743 155.17C332.938 155.519 332.07 155.696 331.193 155.69C330.607 155.694 330.024 155.61 329.463 155.44C328.917 155.295 328.396 155.073 327.913 154.78C327.427 154.507 326.98 154.171 326.583 153.78C326.19 153.388 325.854 152.944 325.583 152.46C325.301 151.973 325.083 151.452 324.933 150.91C324.769 150.348 324.685 149.765 324.683 149.18C324.68 148.307 324.857 147.442 325.203 146.64C325.53 145.863 326.006 145.156 326.603 144.56C327.2 143.969 327.902 143.494 328.673 143.16C329.475 142.827 330.335 142.657 331.203 142.66C332.141 142.649 333.071 142.847 333.923 143.24C334.744 143.612 335.48 144.15 336.083 144.82V137.89C336.072 137.766 336.091 137.642 336.138 137.527C336.185 137.413 336.259 137.311 336.353 137.23C336.508 137.085 336.711 137.003 336.923 137C337.135 137.004 337.338 137.086 337.493 137.23C337.587 137.311 337.661 137.413 337.708 137.527C337.755 137.642 337.774 137.766 337.763 137.89L337.743 149.16Z' fill='url(#paint6_linear_1344_63)'/>
                      <path id='Vector_8' fill-rule='evenodd' clip-rule='evenodd' d='M342.843 154.89C342.856 155.016 342.839 155.143 342.794 155.261C342.749 155.379 342.676 155.485 342.583 155.57C342.425 155.708 342.223 155.786 342.013 155.79C341.8 155.785 341.595 155.707 341.433 155.57C341.341 155.483 341.271 155.377 341.226 155.259C341.181 155.142 341.163 155.015 341.173 154.89V143.46C341.164 143.336 341.183 143.212 341.228 143.096C341.273 142.98 341.343 142.875 341.433 142.79C341.592 142.646 341.798 142.564 342.013 142.56C342.225 142.563 342.428 142.645 342.583 142.79C342.675 142.874 342.746 142.978 342.791 143.094C342.836 143.211 342.854 143.336 342.843 143.46V154.89ZM343.293 139.63C343.29 139.791 343.256 139.951 343.193 140.1C343.129 140.255 343.034 140.394 342.913 140.51C342.802 140.629 342.665 140.721 342.513 140.78C342.353 140.852 342.179 140.889 342.003 140.89C341.834 140.889 341.666 140.852 341.513 140.78C341.356 140.725 341.215 140.633 341.103 140.51C340.988 140.391 340.897 140.252 340.833 140.1C340.765 139.952 340.731 139.792 340.733 139.63C340.73 139.458 340.765 139.288 340.833 139.13C340.899 138.976 340.99 138.834 341.103 138.71C341.221 138.589 341.36 138.491 341.513 138.42C341.669 138.359 341.835 138.329 342.003 138.33C342.177 138.329 342.35 138.359 342.513 138.42C342.662 138.493 342.797 138.591 342.913 138.71C343.032 138.831 343.127 138.973 343.193 139.13L343.293 139.63Z' fill='url(#paint7_linear_1344_63)'/>
                      <path id='Vector_9' fill-rule='evenodd' clip-rule='evenodd' d='M357.673 154.89C357.686 155.016 357.669 155.143 357.624 155.261C357.579 155.379 357.506 155.485 357.413 155.57C357.255 155.712 357.05 155.791 356.838 155.791C356.626 155.791 356.421 155.712 356.263 155.57C356.17 155.485 356.097 155.379 356.052 155.261C356.007 155.143 355.99 155.016 356.003 154.89V148.38C356.007 147.85 355.906 147.324 355.705 146.833C355.504 146.342 355.208 145.895 354.833 145.52C354.466 145.156 354.035 144.861 353.563 144.65C353.066 144.442 352.532 144.337 351.993 144.34C351.454 144.335 350.92 144.44 350.423 144.65C349.945 144.856 349.51 145.151 349.143 145.52C348.771 145.885 348.475 146.32 348.273 146.8C348.057 147.299 347.948 147.837 347.953 148.38V154.89C347.965 155.017 347.946 155.144 347.899 155.262C347.852 155.38 347.778 155.486 347.683 155.57C347.521 155.708 347.316 155.785 347.103 155.79C346.896 155.785 346.698 155.707 346.543 155.57C346.444 155.488 346.366 155.383 346.316 155.265C346.265 155.147 346.244 155.018 346.253 154.89V148.38C346.265 146.878 346.869 145.44 347.933 144.38C348.458 143.865 349.071 143.449 349.743 143.15C351.161 142.564 352.755 142.564 354.173 143.15C354.845 143.449 355.458 143.865 355.983 144.38C356.499 144.9 356.916 145.51 357.213 146.18C357.505 146.884 357.655 147.638 357.653 148.4L357.673 154.89Z' fill='url(#paint8_linear_1344_63)'/>
                      <path id='Vector_10' fill-rule='evenodd' clip-rule='evenodd' d='M372.053 149.16C372.061 148.507 371.932 147.859 371.673 147.26C371.423 146.685 371.066 146.163 370.623 145.72C370.174 145.279 369.649 144.923 369.073 144.67C368.472 144.416 367.825 144.286 367.173 144.29C366.53 144.287 365.894 144.417 365.303 144.67C364.726 144.916 364.202 145.272 363.763 145.72C363.319 146.163 362.963 146.685 362.713 147.26C362.454 147.859 362.324 148.507 362.333 149.16C362.327 149.813 362.456 150.46 362.713 151.06C362.963 151.638 363.319 152.163 363.763 152.61C364.204 153.043 364.728 153.384 365.303 153.61C365.892 153.871 366.529 154.004 367.173 154C367.827 154.005 368.474 153.872 369.073 153.61C369.647 153.376 370.173 153.037 370.623 152.61C371.066 152.163 371.423 151.638 371.673 151.06L372.053 149.16ZM373.733 154.65C373.737 155.541 373.557 156.422 373.203 157.24C372.863 158.029 372.374 158.745 371.763 159.35C371.151 159.964 370.429 160.456 369.633 160.8C368.812 161.153 367.927 161.333 367.033 161.33C366.179 161.328 365.334 161.162 364.543 160.84C364.153 160.681 363.778 160.487 363.423 160.26C363.067 160.038 362.732 159.783 362.423 159.5C362.331 159.416 362.257 159.314 362.205 159.201C362.154 159.087 362.126 158.965 362.123 158.84C362.119 158.735 362.136 158.63 362.174 158.532C362.212 158.434 362.269 158.345 362.343 158.27C362.418 158.192 362.508 158.13 362.608 158.089C362.708 158.048 362.815 158.028 362.923 158.03C363.029 158.032 363.134 158.053 363.233 158.09C363.352 158.14 363.463 158.207 363.563 158.29C364.018 158.734 364.564 159.075 365.163 159.29C365.452 159.402 365.75 159.493 366.053 159.56C366.383 159.615 366.718 159.641 367.053 159.64C367.741 159.653 368.423 159.516 369.053 159.24C369.651 158.982 370.194 158.612 370.653 158.15C371.11 157.691 371.48 157.152 371.743 156.56C372.002 155.943 372.135 155.28 372.133 154.61V153.49C371.521 154.152 370.783 154.686 369.963 155.06C369.114 155.455 368.189 155.656 367.253 155.65C366.667 155.655 366.084 155.57 365.523 155.4C364.974 155.255 364.449 155.033 363.963 154.74C363.482 154.465 363.038 154.128 362.643 153.74C362.25 153.348 361.914 152.904 361.643 152.42C361.361 151.933 361.143 151.412 360.993 150.87C360.825 150.309 360.74 149.726 360.743 149.14C360.736 148.266 360.913 147.401 361.263 146.6C361.59 145.822 362.066 145.116 362.663 144.52C363.26 143.929 363.962 143.454 364.733 143.12C365.534 142.786 366.395 142.616 367.263 142.62C367.85 142.62 368.435 142.697 369.003 142.85C369.554 143.006 370.085 143.227 370.583 143.51C371.064 143.785 371.508 144.121 371.903 144.51C372.288 144.908 372.624 145.351 372.903 145.83C373.503 146.825 373.812 147.968 373.793 149.13L373.733 154.65Z' fill='url(#paint9_linear_1344_63)'/>
                      <path id='Vector_11' fill-rule='evenodd' clip-rule='evenodd' d='M403.253 154.89C403.266 155.016 403.249 155.143 403.204 155.261C403.158 155.379 403.086 155.485 402.993 155.57C402.834 155.707 402.633 155.785 402.423 155.79C402.21 155.785 402.005 155.708 401.843 155.57C401.751 155.483 401.68 155.377 401.635 155.26C401.59 155.142 401.572 155.016 401.583 154.89V148.38C401.587 147.85 401.486 147.323 401.285 146.832C401.084 146.341 400.788 145.895 400.413 145.52C400.046 145.156 399.615 144.861 399.143 144.65C398.646 144.442 398.112 144.337 397.573 144.34C397.037 144.334 396.506 144.44 396.013 144.65C395.53 144.853 395.092 145.148 394.723 145.52C394.351 145.885 394.055 146.32 393.853 146.8C393.637 147.298 393.528 147.837 393.533 148.38V154.89C393.544 155.017 393.526 155.144 393.479 155.262C393.432 155.38 393.358 155.486 393.263 155.57C393.103 155.705 392.902 155.783 392.693 155.79C392.483 155.786 392.281 155.708 392.123 155.57C392.028 155.486 391.954 155.38 391.907 155.262C391.86 155.144 391.841 155.017 391.853 154.89V137.89C391.842 137.766 391.861 137.642 391.908 137.527C391.955 137.413 392.029 137.311 392.123 137.23C392.278 137.085 392.481 137.003 392.693 137C392.904 137.006 393.107 137.087 393.263 137.23C393.357 137.311 393.431 137.413 393.478 137.527C393.525 137.642 393.544 137.766 393.533 137.89V144.29C394.059 143.752 394.688 143.327 395.383 143.04C396.797 142.467 398.379 142.467 399.793 143.04C401.13 143.633 402.2 144.703 402.793 146.04C403.09 146.742 403.24 147.498 403.233 148.26L403.253 154.89Z' fill='url(#paint10_linear_1344_63)'/>
                      <path id='Vector_12' fill-rule='evenodd' clip-rule='evenodd' d='M419.393 149.27C419.391 149.374 419.367 149.476 419.323 149.57C419.274 149.669 419.21 149.76 419.133 149.84C419.052 149.913 418.961 149.973 418.863 150.02C418.768 150.071 418.661 150.099 418.553 150.1H408.023C408.138 150.669 408.351 151.214 408.653 151.71C408.943 152.2 409.319 152.634 409.763 152.99C410.196 153.35 410.686 153.634 411.213 153.83C412.081 154.158 413.026 154.228 413.933 154.03C414.259 153.965 414.577 153.868 414.883 153.74C415.511 153.477 416.076 153.085 416.543 152.59C416.629 152.487 416.734 152.402 416.853 152.34C416.96 152.309 417.071 152.292 417.183 152.29C417.402 152.286 417.614 152.369 417.773 152.52C417.85 152.596 417.911 152.686 417.952 152.786C417.994 152.885 418.014 152.992 418.013 153.1C418.002 153.339 417.907 153.566 417.743 153.74C417.442 154.065 417.107 154.357 416.743 154.61C416.369 154.869 415.97 155.09 415.553 155.27C415.154 155.451 414.734 155.582 414.303 155.66C413.852 155.749 413.393 155.793 412.933 155.79C412.337 155.793 411.744 155.709 411.173 155.54C410.625 155.381 410.097 155.156 409.603 154.87C409.108 154.603 408.653 154.266 408.253 153.87C407.86 153.471 407.524 153.02 407.253 152.53C406.965 152.037 406.74 151.51 406.583 150.96C406.419 150.388 406.335 149.796 406.333 149.2C406.336 147.446 407.025 145.763 408.253 144.51C408.847 143.903 409.553 143.417 410.333 143.08C411.143 142.726 412.019 142.545 412.903 142.55C413.783 142.546 414.655 142.723 415.463 143.07C416.233 143.414 416.932 143.899 417.523 144.5C418.131 145.103 418.613 145.82 418.943 146.61C419.282 147.389 419.456 148.23 419.453 149.08V149.31L419.393 149.27ZM417.673 148.45C417.54 147.379 417.059 146.381 416.303 145.61C415.849 145.171 415.321 144.815 414.743 144.56C414.142 144.307 413.495 144.181 412.843 144.19C412.245 144.188 411.652 144.296 411.093 144.51C410.555 144.719 410.057 145.02 409.623 145.4C409.189 145.783 408.827 146.24 408.553 146.75C408.264 147.277 408.078 147.854 408.003 148.45H417.673Z' fill='url(#paint11_linear_1344_63)'/>
                      <path id='Vector_13' fill-rule='evenodd' clip-rule='evenodd' d='M448.963 150.05C448.972 150.809 448.822 151.562 448.523 152.26C448.224 152.932 447.808 153.545 447.293 154.07C446.771 154.584 446.157 154.994 445.483 155.28C444.788 155.589 444.034 155.746 443.273 155.74C442.512 155.748 441.758 155.591 441.063 155.28C440.384 154.997 439.767 154.586 439.243 154.07C438.722 153.552 438.307 152.937 438.023 152.26C437.713 151.565 437.556 150.811 437.563 150.05V143.52C437.552 143.396 437.571 143.272 437.618 143.157C437.665 143.042 437.739 142.941 437.833 142.86C437.988 142.717 438.192 142.638 438.403 142.64C438.613 142.642 438.816 142.72 438.973 142.86C439.067 142.941 439.141 143.042 439.188 143.157C439.235 143.272 439.254 143.396 439.243 143.52V150.05C439.238 150.586 439.344 151.117 439.553 151.61C439.758 152.092 440.053 152.53 440.423 152.9C440.788 153.269 441.223 153.561 441.703 153.76C442.198 153.978 442.732 154.09 443.273 154.09C443.814 154.09 444.348 153.978 444.843 153.76C445.317 153.556 445.748 153.264 446.113 152.9C446.477 152.524 446.771 152.088 446.983 151.61C447.192 151.117 447.298 150.586 447.293 150.05V143.52C447.283 143.397 447.302 143.274 447.347 143.16C447.392 143.046 447.462 142.943 447.553 142.86C447.713 142.719 447.919 142.64 448.133 142.64C448.344 142.64 448.547 142.718 448.703 142.86C448.795 142.942 448.867 143.044 448.912 143.159C448.958 143.273 448.975 143.397 448.963 143.52V150.05Z' fill='url(#paint12_linear_1344_63)'/>
                      <path id='Vector_14' fill-rule='evenodd' clip-rule='evenodd' d='M458.583 143.45C458.58 143.658 458.506 143.86 458.373 144.02C458.291 144.112 458.189 144.185 458.074 144.232C457.96 144.278 457.836 144.298 457.713 144.29H453.623V150.05C453.625 151.098 454.038 152.103 454.773 152.85C455.144 153.211 455.578 153.503 456.053 153.71C456.543 153.932 457.075 154.045 457.613 154.04C457.735 154.028 457.857 154.045 457.972 154.088C458.086 154.132 458.189 154.201 458.273 154.29C458.413 154.445 458.491 154.646 458.491 154.855C458.491 155.064 458.413 155.265 458.273 155.42C458.192 155.514 458.09 155.588 457.976 155.635C457.861 155.682 457.736 155.701 457.613 155.69C456.854 155.695 456.102 155.545 455.403 155.25C454.738 154.964 454.133 154.553 453.623 154.04C453.104 153.522 452.687 152.911 452.393 152.24C452.091 151.55 451.937 150.804 451.943 150.05V137.89C451.932 137.766 451.951 137.642 451.998 137.527C452.045 137.413 452.119 137.311 452.213 137.23C452.368 137.085 452.571 137.003 452.783 137C452.994 137.006 453.197 137.087 453.353 137.23C453.447 137.311 453.521 137.413 453.568 137.527C453.615 137.642 453.634 137.766 453.623 137.89V142.62H457.713C457.834 142.611 457.955 142.628 458.068 142.67C458.182 142.711 458.286 142.776 458.373 142.86L458.583 143.45Z' fill='url(#paint13_linear_1344_63)'/>
                      <path id='Vector_15' fill-rule='evenodd' clip-rule='evenodd' d='M472.983 150.05C472.988 150.81 472.835 151.563 472.533 152.26C471.953 153.606 470.879 154.68 469.533 155.26C468.834 155.568 468.077 155.725 467.313 155.72C466.552 155.726 465.798 155.569 465.103 155.26C463.749 154.69 462.672 153.613 462.103 152.26C461.801 151.563 461.647 150.81 461.653 150.05V143.52C461.643 143.397 461.662 143.274 461.707 143.16C461.752 143.046 461.822 142.943 461.913 142.86C462.068 142.717 462.272 142.638 462.483 142.64C462.694 142.64 462.897 142.718 463.053 142.86C463.147 142.941 463.221 143.042 463.268 143.157C463.315 143.272 463.334 143.396 463.323 143.52V150.05C463.318 150.586 463.424 151.117 463.633 151.61C463.837 152.092 464.133 152.53 464.503 152.9C464.87 153.271 465.309 153.564 465.793 153.76C466.286 153.977 466.819 154.09 467.358 154.09C467.897 154.09 468.43 153.977 468.923 153.76C469.398 153.558 469.829 153.266 470.193 152.9C470.56 152.527 470.855 152.09 471.063 151.61C471.272 151.117 471.377 150.586 471.373 150.05V143.52C471.362 143.396 471.381 143.272 471.428 143.157C471.475 143.042 471.549 142.941 471.643 142.86C471.799 142.719 472.002 142.64 472.213 142.64C472.423 142.64 472.627 142.719 472.783 142.86C472.877 142.941 472.951 143.042 472.998 143.157C473.045 143.272 473.064 143.396 473.053 143.52L472.983 150.05Z' fill='url(#paint14_linear_1344_63)'/>
                      <path id='Vector_16' fill-rule='evenodd' clip-rule='evenodd' d='M482.553 143.45C482.551 143.66 482.473 143.863 482.333 144.02C482.252 144.114 482.15 144.188 482.036 144.235C481.921 144.282 481.796 144.301 481.673 144.29C481.136 144.284 480.604 144.393 480.113 144.61C479.631 144.824 479.191 145.122 478.813 145.49C478.432 145.857 478.13 146.298 477.927 146.787C477.724 147.276 477.624 147.801 477.633 148.33V154.89C477.644 155.017 477.626 155.144 477.579 155.262C477.532 155.38 477.458 155.486 477.363 155.57C477.207 155.711 477.003 155.789 476.793 155.789C476.582 155.789 476.379 155.711 476.223 155.57C476.131 155.483 476.06 155.377 476.015 155.26C475.97 155.142 475.952 155.016 475.963 154.89V148.38C475.953 147.617 476.103 146.861 476.403 146.16C477.003 144.81 478.093 143.738 479.453 143.16C480.156 142.865 480.911 142.715 481.673 142.72C481.794 142.709 481.915 142.725 482.029 142.767C482.144 142.808 482.247 142.874 482.333 142.96L482.553 143.45Z' fill='url(#paint15_linear_1344_63)'/>
                      <path id='Vector_17' fill-rule='evenodd' clip-rule='evenodd' d='M496.813 149.27C496.811 149.374 496.787 149.476 496.743 149.57C496.694 149.672 496.626 149.764 496.543 149.84C496.465 149.912 496.378 149.973 496.283 150.02C496.183 150.07 496.074 150.097 495.963 150.1H485.433C485.551 150.67 485.768 151.215 486.073 151.71C486.36 152.202 486.736 152.637 487.183 152.99C487.756 153.464 488.429 153.8 489.152 153.974C489.875 154.147 490.628 154.153 491.353 153.99C491.678 153.924 491.996 153.827 492.303 153.7C492.929 153.434 493.494 153.042 493.963 152.55C494.046 152.445 494.152 152.359 494.273 152.3C494.377 152.269 494.484 152.252 494.593 152.25C494.701 152.246 494.809 152.264 494.911 152.303C495.012 152.342 495.104 152.401 495.182 152.477C495.259 152.553 495.321 152.644 495.362 152.744C495.404 152.844 495.424 152.952 495.423 153.06C495.415 153.298 495.323 153.524 495.163 153.7C494.862 154.025 494.527 154.317 494.163 154.57C493.788 154.827 493.389 155.048 492.973 155.23C492.573 155.41 492.154 155.54 491.723 155.62C491.272 155.709 490.813 155.753 490.353 155.75C489.757 155.755 489.164 155.67 488.593 155.5C488.044 155.341 487.517 155.116 487.023 154.83C486.528 154.563 486.073 154.226 485.673 153.83C485.281 153.431 484.944 152.98 484.673 152.49C484.385 151.997 484.16 151.469 484.003 150.92C483.606 149.483 483.704 147.954 484.283 146.58C484.605 145.793 485.077 145.077 485.673 144.47C486.269 143.865 486.975 143.38 487.753 143.04C488.565 142.694 489.44 142.515 490.323 142.515C491.206 142.515 492.08 142.694 492.893 143.04C493.663 143.384 494.362 143.869 494.953 144.47C495.554 145.078 496.036 145.794 496.373 146.58C496.712 147.359 496.886 148.2 496.883 149.05V149.28L496.813 149.27ZM495.093 148.45C494.952 147.379 494.468 146.383 493.713 145.61C493.263 145.171 492.738 144.816 492.163 144.56C491.561 144.309 490.915 144.183 490.263 144.19C489.662 144.19 489.066 144.299 488.503 144.51C487.969 144.721 487.475 145.022 487.043 145.4C486.606 145.78 486.243 146.238 485.973 146.75C485.685 147.279 485.496 147.854 485.413 148.45H495.093Z' fill='url(#paint16_linear_1344_63)'/>
                      </g>
                      <path id='b4rg' fill-rule='evenodd' clip-rule='evenodd' d='M138.365 0H118V39H157L157 18.6346C157 13.6924 155.037 8.95263 151.542 5.45796C148.047 1.96329 143.308 0 138.365 0Z' fill='url(#paint17_linear_1344_63)'/>
                      <path id='b1lf2' fill-rule='evenodd' clip-rule='evenodd' d='M78 156.997H39V117H78V156.997Z' fill='url(#paint18_linear_1344_63)'/>
                      <path id='b4rg2' fill-rule='evenodd' clip-rule='evenodd' d='M118 0H78V39H118V0Z' fill='url(#paint19_linear_1344_63)'/>
                      <path id='b4lf2' fill-rule='evenodd' clip-rule='evenodd' d='M78 0H39V39H78V0Z' fill='url(#paint20_linear_1344_63)'/>
                      <path id='b1rg2' fill-rule='evenodd' clip-rule='evenodd' d='M118 156.997H78V117H118V156.997Z' fill='url(#paint21_linear_1344_63)'/>
                      <path id='b1lf' fill-rule='evenodd' clip-rule='evenodd' d='M0 117V138.365C0 143.307 1.96299 148.046 5.45715 151.54C8.9513 155.034 13.6904 156.997 18.6319 156.997H39V117H0Z' fill='url(#paint22_linear_1344_63)'/>
                      <path id='b1rg' fill-rule='evenodd' clip-rule='evenodd' d='M157 117H118V156.997H138.368C143.31 156.997 148.049 155.034 151.543 151.54C155.037 148.046 157 143.307 157 138.365L157 117Z' fill='url(#paint23_linear_1344_63)'/>
                      <path id='b4lf' fill-rule='evenodd' clip-rule='evenodd' d='M0 18.6346V39H39V0H18.6346C13.6924 0 8.95263 1.96329 5.45796 5.45796C1.96329 8.95263 0 13.6924 0 18.6346Z' fill='url(#paint24_linear_1344_63)'/>
                      <g id='b2rg'>
                      <path id='Intersect' fill-rule='evenodd' clip-rule='evenodd' d='M157 117V78H118V117H157Z' fill='url(#paint25_linear_1344_63)'/>
                      <path id='Intersect_2' fill-rule='evenodd' clip-rule='evenodd' d='M130.306 78H118V84.821C127.551 91.4682 139.064 99.7163 140.801 100.96C140.93 101.053 141.005 101.107 141.021 101.118C137.116 92.0299 133.56 84.3848 130.306 78Z' fill='url(#paint26_linear_1344_63)'/>
                      </g>
                      <g id='b3rg'>
                      <path id='Intersect_3' fill-rule='evenodd' clip-rule='evenodd' d='M157 78V39H118V78H157Z' fill='url(#paint27_linear_1344_63)'/>
                      <path id='Intersect_4' fill-rule='evenodd' clip-rule='evenodd' d='M130.306 78.0003C129.017 75.4709 127.776 73.1394 126.579 70.9942C123.851 66.6947 120.926 64.6866 118 64.2109V78.0003H130.306Z' fill='url(#paint28_linear_1344_63)'/>
                      <path id='Intersect_5' fill-rule='evenodd' clip-rule='evenodd' d='M118 57.7256V64.2175C120.924 64.696 123.847 66.7044 126.574 70.9992C123.427 65.3583 120.587 61.0039 118 57.7256Z' fill='url(#paint29_linear_1344_63)'/>
                      </g>
                      <g id='b3rg2'>
                      <path id='Intersect_6' fill-rule='evenodd' clip-rule='evenodd' d='M118 39H78V78H118V39Z' fill='url(#paint30_linear_1344_63)'/>
                      <path id='Intersect_7' fill-rule='evenodd' clip-rule='evenodd' d='M118 64.2104C110.491 62.9899 102.972 71.861 98.7462 77.9998H118V64.2104Z' fill='url(#paint31_linear_1344_63)'/>
                      <path id='Intersect_8' fill-rule='evenodd' clip-rule='evenodd' d='M118 57.7259C105.13 41.4169 98.5134 51.7388 91.4316 62.7865C89.6986 65.49 87.9377 68.237 86.0505 70.6478L86.0311 70.6783C85.5188 71.329 84.9954 71.9604 84.4637 72.5558L84.4305 72.6002C82.7855 74.4362 81.027 75.9593 79.1079 76.9452C78.7524 77.1683 78.3832 77.389 78 77.6056V78.0002H98.7384C102.966 71.8591 110.487 62.9885 118 64.2178V57.7259Z' fill='url(#paint32_linear_1344_63)'/>
                      </g>
                      <g id='b2rg2'>
                      <path id='Intersect_9' fill-rule='evenodd' clip-rule='evenodd' d='M118 78H78V117H118V78Z' fill='url(#paint33_linear_1344_63)'/>
                      <path id='Intersect_10' fill-rule='evenodd' clip-rule='evenodd' d='M107.238 78.759C102.378 77.7593 98.5733 80.2517 95.2889 83.5555L95.2902 83.553C95.3627 83.4193 96.6491 81.046 98.7462 78H118V84.821C116.244 83.5989 114.554 82.4309 113.004 81.3705C110.924 79.9498 109.011 79.1218 107.238 78.759Z' fill='url(#paint34_linear_1344_63)'/>
                      <path id='Intersect_11' fill-rule='evenodd' clip-rule='evenodd' d='M98.7383 78C96.6255 81.0693 95.3355 83.4568 95.2806 83.5608C93.86 84.9863 92.5365 86.5637 91.2667 88.077C88.2591 91.6615 85.5526 94.8872 82.5695 94.8872C81.323 94.8872 79.7714 94.4112 78 93.6168V78H98.7383Z' fill='url(#paint35_linear_1344_63)'/>
                      </g>
                      <g id='b2lf2'>
                      <path id='Intersect_12' fill-rule='evenodd' clip-rule='evenodd' d='M78 78H39V117H78V78Z' fill='url(#paint36_linear_1344_63)'/>
                      <path id='Intersect_13' fill-rule='evenodd' clip-rule='evenodd' d='M78 93.6168C74.9248 92.2376 71.1871 89.8987 67.2329 87.4243C62.9744 84.7595 58.465 81.9377 54.2617 79.9884C64.4174 82.6506 72.0412 80.76 77.2774 78H78V93.6168Z' fill='url(#paint37_linear_1344_63)'/>
                      <path id='Intersect_14' fill-rule='evenodd' clip-rule='evenodd' d='M72.2977 78H48.9442C50.6316 78.4325 52.426 79.1237 54.2783 79.9858C64.4156 82.6519 72.0359 80.7642 77.2718 78H76.045C74.8606 78.2182 73.6152 78.2315 72.2977 78ZM39 79.8063C40.1632 79.0199 41.317 78.3971 42.4529 78H39V79.8063Z' fill='url(#paint38_linear_1344_63)'/>
                      </g>
                      <g id='b3lf2'>
                      <path id='Intersect_15' fill-rule='evenodd' clip-rule='evenodd' d='M78 39H39V78H78V39Z' fill='url(#paint39_linear_1344_63)'/>
                      <path id='Intersect_16' fill-rule='evenodd' clip-rule='evenodd' d='M78 77.4397C77.3666 77.6873 76.7156 77.8765 76.045 78H77.2718C77.5199 77.869 77.7626 77.7361 78 77.6016V77.4397ZM48.9442 78H72.2977C70.7612 77.7301 69.1268 77.1272 67.3771 76.1281C64.641 74.569 61.6253 72.0379 58.2661 68.2993C51.5101 62.1742 44.942 63.4207 39 68.0066V78H42.4529C43.1405 77.7596 43.8216 77.6019 44.4944 77.5405C45.855 77.4141 47.352 77.5919 48.9442 78Z' fill='url(#paint40_linear_1344_63)'/>
                      </g>
                      <g id='b3lf'>
                      <path id='Intersect_17' fill-rule='evenodd' clip-rule='evenodd' d='M0 39V78H39V39H0Z' fill='url(#paint41_linear_1344_63)'/>
                      <path id='Intersect_18' fill-rule='evenodd' clip-rule='evenodd' d='M39.0001 68.0068C35.7131 70.5436 32.6178 74.1023 29.7883 78.0002H39.0001V68.0068Z' fill='url(#paint42_linear_1344_63)'/>
                      </g>
                      <g id='b2lf'>
                      <path id='Intersect_19' fill-rule='evenodd' clip-rule='evenodd' d='M0 78V117H39V78H0Z' fill='url(#paint43_linear_1344_63)'/>
                      <path id='Intersect_20' fill-rule='evenodd' clip-rule='evenodd' d='M28.8356 89.2833C24.6066 93.7653 20.5787 98.0342 17.1697 98.997C17.7609 97.9547 18.4092 96.7797 19.1108 95.5082C21.9072 90.4403 25.5495 83.8394 29.7883 78H39V79.8063C35.6234 82.0894 32.1671 85.7524 28.8356 89.2833Z' fill='url(#paint44_linear_1344_63)'/>
                      </g>
                      <path id='a' fill-rule='evenodd' clip-rule='evenodd' d='M248.341 88.4274C248.369 84.7484 247.591 81.1059 246.061 77.7435C244.598 74.4908 242.499 71.5478 239.881 69.0792C237.227 66.5891 234.121 64.6038 230.721 63.225C227.177 61.7407 223.357 60.9866 219.501 61.0101C215.693 60.9779 211.92 61.7189 208.421 63.186C201.619 65.9674 196.158 71.173 193.151 77.7435C191.647 81.1176 190.871 84.7577 190.871 88.4372C190.871 92.1166 191.647 95.7567 193.151 99.1309C195.399 104.125 199.087 108.373 203.765 111.357C208.444 114.342 213.911 115.935 219.501 115.942C223.347 115.97 227.159 115.229 230.701 113.766C234.101 112.388 237.207 110.402 239.861 107.912C242.495 105.412 244.595 102.427 246.041 99.1309L248.321 88.3981L248.341 88.4274ZM258.231 120.265C258.283 120.961 258.169 121.659 257.896 122.304C257.624 122.95 257.201 123.524 256.661 123.982C255.715 124.778 254.51 125.221 253.261 125.231C252.028 125.231 250.838 124.786 249.921 123.982C249.379 123.525 248.954 122.951 248.68 122.306C248.406 121.66 248.289 120.961 248.341 120.265V113.074C244.714 116.826 240.364 119.843 235.541 121.953C230.5 124.162 225.027 125.274 219.501 125.211C216.041 125.225 212.596 124.759 209.271 123.826C206.063 122.987 202.983 121.737 200.111 120.108C197.253 118.547 194.628 116.61 192.311 114.352C189.966 112.154 187.947 109.649 186.311 106.907C184.634 104.16 183.339 101.207 182.461 98.1259C181.483 94.9617 180.991 91.6737 181.001 88.3689C180.967 83.4471 182.017 78.5757 184.081 74.0846C186.018 69.6872 188.829 65.7078 192.351 62.3761C199.599 55.4367 209.367 51.5781 219.521 51.6434C222.994 51.6605 226.45 52.1197 229.801 53.0094C233.034 53.8891 236.15 55.1403 239.081 56.7366C241.919 58.3003 244.544 60.2083 246.891 62.4152C249.211 64.6652 251.252 67.1737 252.971 69.889C254.656 72.6447 255.983 75.5945 256.921 78.6704C257.806 81.8503 258.246 85.1323 258.231 88.4274V120.265Z' fill='#102A63'/>
                      <path id='p' fill-rule='evenodd' clip-rule='evenodd' d='M334.901 88.4274C334.927 84.7496 334.153 81.1081 332.631 77.7435C331.16 74.4929 329.058 71.5507 326.441 69.0793C323.787 66.5892 320.681 64.6038 317.281 63.225C313.74 61.7568 309.928 61.0161 306.081 61.0492C302.273 61.019 298.5 61.7599 295.001 63.225C291.606 64.5737 288.516 66.5631 285.911 69.0793C283.3 71.5537 281.202 74.4953 279.731 77.7435C278.227 81.1177 277.451 84.7577 277.451 88.4372C277.451 92.1167 278.227 95.7568 279.731 99.1309C281.184 102.424 283.283 105.407 285.911 107.912C291.292 113.075 298.534 115.972 306.081 115.981C309.927 116.009 313.739 115.268 317.281 113.805C320.681 112.427 323.787 110.441 326.441 107.951C329.075 105.449 331.178 102.465 332.631 99.1699L334.901 88.4372V88.4274ZM344.791 88.4274C344.829 93.3654 343.789 98.2546 341.741 102.77C339.769 107.141 336.947 111.098 333.431 114.42C329.882 117.778 325.711 120.447 321.141 122.284C316.377 124.248 311.253 125.244 306.081 125.211C300.595 125.254 295.166 124.118 290.181 121.884C285.371 119.833 281.052 116.826 277.501 113.054V151.956C277.549 152.663 277.433 153.371 277.161 154.029C276.889 154.686 276.469 155.275 275.931 155.751C274.988 156.545 273.787 156.988 272.541 157C271.304 157.002 270.111 156.557 269.191 155.751C268.652 155.275 268.23 154.687 267.956 154.03C267.683 153.372 267.565 152.663 267.611 151.956V88.4274C267.577 83.5057 268.627 78.6343 270.691 74.1432C272.628 69.7458 275.439 65.7663 278.961 62.4347C286.209 55.4953 295.977 51.6367 306.131 51.702C309.585 51.7042 313.023 52.1437 316.361 53.0094C319.598 53.8789 322.714 55.1305 325.641 56.7366C328.479 58.3003 331.104 60.2083 333.451 62.4152C335.764 64.6554 337.798 67.1542 339.511 69.8598C341.183 72.6403 342.503 75.6087 343.441 78.6997L344.791 88.4274Z' fill='#102A63'/>
                      <path id='e' fill-rule='evenodd' clip-rule='evenodd' d='M431.601 89.1107C431.591 89.6957 431.451 90.2716 431.191 90.7987C430.909 91.3553 430.522 91.8552 430.051 92.272C429.586 92.7069 429.053 93.066 428.471 93.3355C427.898 93.6109 427.269 93.7544 426.631 93.7551H364.431C365.115 96.9725 366.389 100.043 368.191 102.819C369.894 105.597 372.112 108.042 374.731 110.03C379.975 114.22 386.543 116.509 393.321 116.508C395.337 116.505 397.347 116.303 399.321 115.904C401.243 115.531 403.125 114.982 404.941 114.264C408.63 112.778 411.966 110.566 414.741 107.766C415.242 107.182 415.87 106.716 416.581 106.4C417.195 106.193 417.84 106.084 418.491 106.078C419.788 106.065 421.039 106.545 421.981 107.415C422.435 107.833 422.795 108.338 423.038 108.899C423.281 109.46 423.401 110.065 423.391 110.674C423.315 112.009 422.767 113.278 421.841 114.264C420.021 116.091 418.01 117.726 415.841 119.143C413.625 120.591 411.283 121.845 408.841 122.89C406.474 123.9 403.994 124.637 401.451 125.085C398.777 125.551 396.067 125.783 393.351 125.778C389.845 125.79 386.354 125.324 382.981 124.392C379.734 123.51 376.613 122.235 373.691 120.597C370.752 119.027 368.058 117.055 365.691 114.742C363.293 112.501 361.221 109.95 359.531 107.161C357.802 104.397 356.457 101.421 355.531 98.3116C354.571 95.0943 354.089 91.7591 354.101 88.4082C354.069 83.4079 355.108 78.4563 357.151 73.8702C359.082 69.4336 361.88 65.4069 365.391 62.0154C368.928 58.5878 373.111 55.861 377.711 53.9854C382.513 52.0263 387.664 51.0118 392.869 51.0001C398.074 50.9884 403.23 51.9797 408.041 53.9171C417.23 57.7791 424.582 64.8897 428.621 73.8214C430.601 78.2226 431.622 82.9772 431.621 87.7838V89.1107H431.601ZM421.501 84.4566C421.068 81.403 420.133 78.4377 418.731 75.6753C417.355 72.9854 415.538 70.5332 413.351 68.416C410.688 65.9365 407.584 63.9525 404.191 62.5618C399.191 60.5537 393.72 59.9329 388.382 60.768C383.044 61.6031 378.046 63.8616 373.941 67.294C368.716 71.6918 365.305 77.7902 364.341 84.4566H421.501Z' fill='#102A63'/>
                      <g id='x'>
                      <path id='Vector_18' fill-rule='evenodd' clip-rule='evenodd' d='M496.831 121.007C496.835 121.601 496.705 122.19 496.449 122.729C496.193 123.269 495.818 123.747 495.351 124.129C494.383 124.947 493.141 125.388 491.861 125.368C491.173 125.364 490.492 125.224 489.861 124.958C489.057 124.609 488.351 124.077 487.801 123.407L464.941 95.1797L442.001 123.407C441.505 124.074 440.845 124.607 440.081 124.958C439.388 125.23 438.648 125.369 437.901 125.368C436.641 125.39 435.42 124.947 434.481 124.129C434.011 123.748 433.632 123.271 433.373 122.731C433.114 122.192 432.98 121.603 432.981 121.007C433.061 119.817 433.511 118.681 434.271 117.748L458.701 87.5009L435.701 59.2055C434.917 58.3201 434.463 57.2029 434.411 56.0344C434.402 55.4074 434.532 54.7859 434.79 54.2119C435.049 53.6379 435.431 53.1248 435.911 52.7073C436.87 51.8877 438.106 51.443 439.381 51.4584C440.112 51.461 440.836 51.6035 441.511 51.8779C442.283 52.2424 442.945 52.7973 443.431 53.4879L464.951 79.8318L486.331 53.4879C486.851 52.7988 487.538 52.2458 488.331 51.8779C488.979 51.5971 489.681 51.4541 490.391 51.4584C491.665 51.4466 492.899 51.8909 493.861 52.7073C494.34 53.1248 494.722 53.6379 494.981 54.2119C495.24 54.7859 495.369 55.4074 495.361 56.0344C495.308 57.2011 494.858 58.3172 494.081 59.2055L471.081 87.5009L495.641 117.748C496.081 118.251 496.42 118.83 496.641 119.455L496.831 121.007Z' fill='#102A63'/>
                      <path id='Vector_19' fill-rule='evenodd' clip-rule='evenodd' d='M441.941 123.719C441.441 124.388 440.778 124.925 440.011 125.28C439.316 125.558 438.572 125.701 437.821 125.7C436.551 125.728 435.319 125.277 434.381 124.441C433.906 124.057 433.524 123.576 433.263 123.031C433.002 122.486 432.868 121.891 432.871 121.289C432.947 120.094 433.397 118.949 434.161 118.011L458.741 87.5789L435.601 59.0298C434.812 58.1393 434.354 57.0152 434.301 55.8392C434.294 55.2063 434.426 54.5792 434.688 54.0002C434.95 53.4213 435.336 52.9038 435.821 52.4828C436.78 51.655 438.021 51.2062 439.301 51.2242C440.039 51.2267 440.769 51.3692 441.451 51.6437C442.228 52.0148 442.893 52.5762 443.381 53.2731C477.891 95.5796 444.831 54.9806 471.171 87.5789L441.941 123.719Z' fill='url(#paint45_linear_1344_63)'/>
                      </g>
                      <g id='normal-logo'>
                      <path id='Vector_20' d='M138.363 0H18.6372C8.34417 0 0 8.39733 0 18.756V139.244C0 149.603 8.34417 158 18.6372 158H138.363C148.656 158 157 149.603 157 139.244V18.756C157 8.39733 148.656 0 138.363 0Z' fill='url(#paint46_linear_1344_63)'/>
                      <path id='Vector_21' fill-rule='evenodd' clip-rule='evenodd' d='M95.3951 84.1784C98.6871 80.8451 102.485 78.3375 107.368 79.3467C109.443 79.8298 111.402 80.7238 113.131 81.9766C123.756 89.2854 140.915 101.681 141.178 101.874C136.869 91.5217 132.044 81.3935 126.724 71.5282C113.475 50.5193 95.6079 83.7809 95.3951 84.1784Z' fill='url(#paint47_linear_1344_63)'/>
                      <path id='Vector_22' fill-rule='evenodd' clip-rule='evenodd' d='M79.1888 77.5217C81.2112 76.3976 83.016 74.9163 84.5167 73.1486C85.0535 72.5472 85.5296 71.9152 86.0867 71.2526C97.2286 56.9001 103.995 30.7333 126.653 71.6094C113.405 50.6005 95.5371 83.8417 95.3244 84.2596C90.5435 89.1015 86.8565 95.6662 82.6023 95.6662C76.8592 95.6662 64.6334 85.4726 54.241 80.6613C65.7476 83.597 73.9623 80.8244 79.1888 77.5217Z' fill='url(#paint48_linear_1344_63)'/>
                      <path id='Vector_23' fill-rule='evenodd' clip-rule='evenodd' d='M17.1991 99.7334C24.7756 97.5826 35.4314 78.959 44.5475 78.1129C47.3532 77.8581 50.7363 78.8978 54.3423 80.5797C65.7475 83.6378 73.9622 80.8244 79.1888 77.5217C75.8766 79.2342 72.0984 79.3463 67.4492 76.7062C64.0186 74.5731 60.9423 71.9107 58.3331 68.8164C40.7694 52.8227 24.5629 86.6551 17.1991 99.7334Z' fill='url(#paint49_linear_1344_63)'/>
                      </g>
                      </g>
                      <defs>
                      <linearGradient id='paint0_linear_1344_63' x1='294.533' y1='178.89' x2='289.803' y2='143.69' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#5A328A'/>
                      <stop offset='1' stop-color='#009CE1'/>
                      </linearGradient>
                      <linearGradient id='paint1_linear_1344_63' x1='388.403' y1='167.95' x2='383.503' y2='131.5' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#5A328A'/>
                      <stop offset='1' stop-color='#009CE1'/>
                      </linearGradient>
                      <linearGradient id='paint2_linear_1344_63' x1='433.163' y1='160.95' x2='428.583' y2='126.87' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#5A328A'/>
                      <stop offset='1' stop-color='#009CE1'/>
                      </linearGradient>
                      <linearGradient id='paint3_linear_1344_63' x1='309.803' y1='176.79' x2='305.123' y2='141.98' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#5A328A'/>
                      <stop offset='1' stop-color='#009CE1'/>
                      </linearGradient>
                      <linearGradient id='paint4_linear_1344_63' x1='319.943' y1='176.85' x2='315.083' y2='140.65' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#5A328A'/>
                      <stop offset='1' stop-color='#009CE1'/>
                      </linearGradient>
                      <linearGradient id='paint5_linear_1344_63' x1='324.883' y1='176.41' x2='319.983' y2='139.95' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#5A328A'/>
                      <stop offset='1' stop-color='#009CE1'/>
                      </linearGradient>
                      <linearGradient id='paint6_linear_1344_63' x1='335.043' y1='172.24' x2='330.683' y2='139.81' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#5A328A'/>
                      <stop offset='1' stop-color='#009CE1'/>
                      </linearGradient>
                      <linearGradient id='paint7_linear_1344_63' x1='345.753' y1='173.45' x2='340.883' y2='137.25' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#5A328A'/>
                      <stop offset='1' stop-color='#009CE1'/>
                      </linearGradient>
                      <linearGradient id='paint8_linear_1344_63' x1='354.703' y1='171.71' x2='350.023' y2='136.9' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#5A328A'/>
                      <stop offset='1' stop-color='#009CE1'/>
                      </linearGradient>
                      <linearGradient id='paint9_linear_1344_63' x1='369.883' y1='169.15' x2='365.333' y2='135.26' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#5A328A'/>
                      <stop offset='1' stop-color='#009CE1'/>
                      </linearGradient>
                      <linearGradient id='paint10_linear_1344_63' x1='399.623' y1='166.49' x2='394.713' y2='130' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#5A328A'/>
                      <stop offset='1' stop-color='#009CE1'/>
                      </linearGradient>
                      <linearGradient id='paint11_linear_1344_63' x1='414.703' y1='162.99' x2='410.283' y2='130.09' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#5A328A'/>
                      <stop offset='1' stop-color='#009CE1'/>
                      </linearGradient>
                      <linearGradient id='paint12_linear_1344_63' x1='444.973' y1='159.65' x2='440.293' y2='124.84' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#5A328A'/>
                      <stop offset='1' stop-color='#009CE1'/>
                      </linearGradient>
                      <linearGradient id='paint13_linear_1344_63' x1='456.873' y1='158.86' x2='451.973' y2='122.41' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#5A328A'/>
                      <stop offset='1' stop-color='#009CE1'/>
                      </linearGradient>
                      <linearGradient id='paint14_linear_1344_63' x1='468.583' y1='156.66' x2='463.903' y2='121.85' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#5A328A'/>
                      <stop offset='1' stop-color='#009CE1'/>
                      </linearGradient>
                      <linearGradient id='paint15_linear_1344_63' x1='480.053' y1='155.15' x2='475.623' y2='122.18' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#5A328A'/>
                      <stop offset='1' stop-color='#009CE1'/>
                      </linearGradient>
                      <linearGradient id='paint16_linear_1344_63' x1='490.893' y1='153.87' x2='486.473' y2='120.98' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#5A328A'/>
                      <stop offset='1' stop-color='#009CE1'/>
                      </linearGradient>
                      <linearGradient id='paint17_linear_1344_63' x1='4.67896e-06' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#00B1EB'/>
                      <stop offset='1' stop-color='#5A328A'/>
                      </linearGradient>
                      <linearGradient id='paint18_linear_1344_63' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#00B1EB'/>
                      <stop offset='1' stop-color='#5A328A'/>
                      </linearGradient>
                      <linearGradient id='paint19_linear_1344_63' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#00B1EB'/>
                      <stop offset='1' stop-color='#5A328A'/>
                      </linearGradient>
                      <linearGradient id='paint20_linear_1344_63' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#00B1EB'/>
                      <stop offset='1' stop-color='#5A328A'/>
                      </linearGradient>
                      <linearGradient id='paint21_linear_1344_63' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#00B1EB'/>
                      <stop offset='1' stop-color='#5A328A'/>
                      </linearGradient>
                      <linearGradient id='paint22_linear_1344_63' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#00B1EB'/>
                      <stop offset='1' stop-color='#5A328A'/>
                      </linearGradient>
                      <linearGradient id='paint23_linear_1344_63' x1='4.67896e-06' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#00B1EB'/>
                      <stop offset='1' stop-color='#5A328A'/>
                      </linearGradient>
                      <linearGradient id='paint24_linear_1344_63' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#00B1EB'/>
                      <stop offset='1' stop-color='#5A328A'/>
                      </linearGradient>
                      <linearGradient id='paint25_linear_1344_63' x1='4.67896e-06' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#00B1EB'/>
                      <stop offset='1' stop-color='#5A328A'/>
                      </linearGradient>
                      <linearGradient id='paint26_linear_1344_63' x1='137.33' y1='83.9681' x2='100.487' y2='77.8202' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='white'/>
                      <stop offset='1' stop-color='#B2B2B2'/>
                      </linearGradient>
                      <linearGradient id='paint27_linear_1344_63' x1='4.67896e-06' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#00B1EB'/>
                      <stop offset='1' stop-color='#5A328A'/>
                      </linearGradient>
                      <linearGradient id='paint28_linear_1344_63' x1='137.33' y1='83.9683' x2='100.487' y2='77.8205' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='white'/>
                      <stop offset='1' stop-color='#B2B2B2'/>
                      </linearGradient>
                      <linearGradient id='paint29_linear_1344_63' x1='108.753' y1='64.9788' x2='72.1348' y2='82.4032' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='white'/>
                      <stop offset='1' stop-color='#C6C6C6'/>
                      </linearGradient>
                      <linearGradient id='paint30_linear_1344_63' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#00B1EB'/>
                      <stop offset='1' stop-color='#5A328A'/>
                      </linearGradient>
                      <linearGradient id='paint31_linear_1344_63' x1='137.33' y1='83.9678' x2='100.487' y2='77.82' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='white'/>
                      <stop offset='1' stop-color='#B2B2B2'/>
                      </linearGradient>
                      <linearGradient id='paint32_linear_1344_63' x1='108.753' y1='64.979' x2='72.1348' y2='82.4035' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='white'/>
                      <stop offset='1' stop-color='#C6C6C6'/>
                      </linearGradient>
                      <linearGradient id='paint33_linear_1344_63' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#00B1EB'/>
                      <stop offset='1' stop-color='#5A328A'/>
                      </linearGradient>
                      <linearGradient id='paint34_linear_1344_63' x1='137.33' y1='83.9681' x2='100.487' y2='77.8202' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='white'/>
                      <stop offset='1' stop-color='#B2B2B2'/>
                      </linearGradient>
                      <linearGradient id='paint35_linear_1344_63' x1='108.753' y1='64.9788' x2='72.1348' y2='82.4032' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='white'/>
                      <stop offset='1' stop-color='#C6C6C6'/>
                      </linearGradient>
                      <linearGradient id='paint36_linear_1344_63' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#00B1EB'/>
                      <stop offset='1' stop-color='#5A328A'/>
                      </linearGradient>
                      <linearGradient id='paint37_linear_1344_63' x1='108.753' y1='64.9788' x2='72.1348' y2='82.4032' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='white'/>
                      <stop offset='1' stop-color='#C6C6C6'/>
                      </linearGradient>
                      <linearGradient id='paint38_linear_1344_63' x1='76.9866' y1='81.2236' x2='30.7365' y2='81.5809' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='white'/>
                      <stop offset='0.45' stop-color='#E8E8E8'/>
                      <stop offset='1' stop-color='#C6C6C6'/>
                      </linearGradient>
                      <linearGradient id='paint39_linear_1344_63' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#00B1EB'/>
                      <stop offset='1' stop-color='#5A328A'/>
                      </linearGradient>
                      <linearGradient id='paint40_linear_1344_63' x1='76.9866' y1='81.2236' x2='30.7365' y2='81.5809' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='white'/>
                      <stop offset='0.45' stop-color='#E8E8E8'/>
                      <stop offset='1' stop-color='#C6C6C6'/>
                      </linearGradient>
                      <linearGradient id='paint41_linear_1344_63' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#00B1EB'/>
                      <stop offset='1' stop-color='#5A328A'/>
                      </linearGradient>
                      <linearGradient id='paint42_linear_1344_63' x1='76.9866' y1='81.2239' x2='30.7364' y2='81.5811' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='white'/>
                      <stop offset='0.45' stop-color='#E8E8E8'/>
                      <stop offset='1' stop-color='#C6C6C6'/>
                      </linearGradient>
                      <linearGradient id='paint43_linear_1344_63' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#00B1EB'/>
                      <stop offset='1' stop-color='#5A328A'/>
                      </linearGradient>
                      <linearGradient id='paint44_linear_1344_63' x1='76.9866' y1='81.2236' x2='30.7365' y2='81.5809' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='white'/>
                      <stop offset='0.45' stop-color='#E8E8E8'/>
                      <stop offset='1' stop-color='#C6C6C6'/>
                      </linearGradient>
                      <linearGradient id='paint45_linear_1344_63' x1='466.951' y1='84.8371' x2='432.42' y2='89.4658' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#00B1EB'/>
                      <stop offset='1' stop-color='#5A328A'/>
                      </linearGradient>
                      <linearGradient id='paint46_linear_1344_63' x1='0' y1='78.9949' x2='157' y2='78.9949' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='#00B1EB'/>
                      <stop offset='1' stop-color='#5A328A'/>
                      </linearGradient>
                      <linearGradient id='paint47_linear_1344_63' x1='137.481' y1='84.5964' x2='100.579' y2='78.4748' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='white'/>
                      <stop offset='1' stop-color='#B2B2B2'/>
                      </linearGradient>
                      <linearGradient id='paint48_linear_1344_63' x1='108.867' y1='65.4627' x2='72.1243' y2='82.835' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='white'/>
                      <stop offset='1' stop-color='#C6C6C6'/>
                      </linearGradient>
                      <linearGradient id='paint49_linear_1344_63' x1='77.0718' y1='81.8335' x2='30.772' y2='82.1858' gradientUnits='userSpaceOnUse'>
                      <stop stop-color='white'/>
                      <stop offset='0.45' stop-color='#E8E8E8'/>
                      <stop offset='1' stop-color='#C6C6C6'/>
                      </linearGradient>
                      </defs>
                      </svg>  ")
            Width: =Parent.Width
    
`;P.setAttribute("data-code",V1);P.innerHTML=`
<svg width='497' height='162' viewBox='0 0 497 162' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <style>
            @keyframes showBlock {
                0%{
                    opacity: 0;
                    transform: translateY(-80px);
                }
                50%{
                    opacity: 1;
                    transform: translateY(0px);
                }
                90%{
                    opacity: 1;
                    transform: translateY(0px);
                }
                100%{
                    opacity: 0;
                    transform: translateY(0px);
                }
            }
            @keyframes fromLeft {
                0%{
                    opacity: 0;
                    transform: translateX(-80px);
                }
                100%{
                    opacity: 1;
                    transform: translateX(0px);
                }
            }
            @keyframes showFade {
                0%{
                    opacity: 0;
                }
                95%{
                    opacity: 0;
                }
                100%{
                    opacity: 1;
                }
            }
            #b1lf{
                animation: showBlock 4s 0.2s ease-in-out forwards 2;
            }
            #b1lf2{
                animation: showBlock 4s 0.4s ease-in-out forwards 2;
            }
            #b1rg2{
                animation: showBlock 4s 0.6s ease-in-out forwards 2;
            }
            #b1rg{
                animation: showBlock 4s 0.8s ease-in-out forwards 2;
            }
            #b2lf{
                animation: showBlock 4s 0.4s ease-in-out forwards 2;
            }
            #b2lf2{
                animation: showBlock 4s 0.6s ease-in-out forwards 2;
            }
            #b2rg2{
                animation: showBlock 4s 0.8s ease-in-out forwards 2;
            }
            #b2rg{
                animation: showBlock 4s 1s ease-in-out forwards 2;
            }
            #b3lf{
                animation: showBlock 4s 0.6s ease-in-out forwards 2;
            }
            #b3lf2{
                animation: showBlock 4s 0.8s ease-in-out forwards 2;
            }  
            #b3rg2{
                animation: showBlock 4s 1s ease-in-out forwards 2;
            }
            #b3rg{
                animation: showBlock 4s 1.2s ease-in-out forwards 2;
            } 
            #b4lf{
                animation: showBlock 4s 0.8s ease-in-out forwards 2;
            } 
            #b4lf2{
                animation: showBlock 4s 1s ease-in-out forwards 2;
            }
            #b4rg2{
                animation: showBlock 4s 1.2s ease-in-out forwards 2;
            }
            #b4rg{
                animation: showBlock 4s 1.4s ease-in-out forwards 2;
            }
            #a{
                opacity: 0;
                animation: fromLeft 1s 5.2s ease-in-out forwards;
            }
            #p{
                opacity: 0;
                animation: fromLeft 1s 5.4s ease-in-out forwards;
            }
            #e{
                opacity: 0;
                animation: fromLeft 1s 5.5s ease-in-out forwards;
            }
            #x{
                opacity: 0;
                animation: fromLeft 1s 5.8s ease-in-out forwards;
            }
            #building{
                opacity: 0;
                animation: fromLeft 1s 5.4s ease-in-out forwards;
            }
            #normal-logo{
                animation: showFade 4s 4s ease-in-out forwards;
                opacity: 0;
            }
    </style>
        <g id='apex-loader'>
        <g id='building'>
        <path id='Vector' fill-rule='evenodd' clip-rule='evenodd' d='M295.423 149.16C295.428 148.506 295.295 147.859 295.033 147.26C294.802 146.687 294.462 146.164 294.033 145.72C293.583 145.281 293.058 144.925 292.483 144.67C291.882 144.417 291.235 144.288 290.583 144.29C289.94 144.287 289.304 144.417 288.713 144.67C288.136 144.916 287.612 145.272 287.173 145.72C286.718 146.171 286.357 146.708 286.11 147.299C285.864 147.89 285.737 148.524 285.737 149.165C285.737 149.806 285.864 150.44 286.11 151.031C286.357 151.622 286.718 152.159 287.173 152.61C287.614 153.043 288.138 153.384 288.713 153.61C289.302 153.871 289.939 154.004 290.583 154C291.237 154.004 291.884 153.871 292.483 153.61C293.056 153.374 293.581 153.035 294.033 152.61C294.462 152.162 294.802 151.636 295.033 151.06L295.423 149.16ZM297.093 149.16C297.081 150.441 296.697 151.69 295.986 152.756C295.276 153.821 294.271 154.657 293.093 155.16C292.292 155.51 291.427 155.687 290.553 155.68C289.964 155.684 289.377 155.6 288.813 155.43C288.268 155.283 287.746 155.061 287.263 154.77C286.296 154.203 285.49 153.397 284.923 152.43C284.633 151.948 284.408 151.43 284.253 150.89C284.084 150.329 284 149.746 284.003 149.16V137.89C283.992 137.766 284.011 137.642 284.058 137.527C284.105 137.413 284.179 137.311 284.273 137.23C284.422 137.083 284.623 137 284.833 137C285.048 137.004 285.254 137.086 285.413 137.23C285.503 137.313 285.574 137.416 285.619 137.53C285.664 137.644 285.682 137.767 285.673 137.89V144.78C286.27 144.108 287.003 143.569 287.823 143.2C288.669 142.809 289.591 142.611 290.523 142.62C291.109 142.634 291.691 142.725 292.253 142.89C292.801 143.045 293.328 143.267 293.823 143.55C294.304 143.825 294.748 144.161 295.143 144.55C295.528 144.948 295.864 145.391 296.143 145.87C296.429 146.364 296.654 146.892 296.813 147.44L297.093 149.16Z' fill='url(#paint0_linear_1344_63)'/>
        <path id='Vector_2' fill-rule='evenodd' clip-rule='evenodd' d='M388.903 143.45C388.901 143.66 388.823 143.863 388.683 144.02C388.602 144.114 388.5 144.188 388.386 144.235C388.271 144.282 388.146 144.301 388.023 144.29H383.933V150.05C383.948 151.097 384.363 152.099 385.093 152.85C385.461 153.211 385.891 153.503 386.363 153.71C386.856 153.932 387.392 154.045 387.933 154.04C388.055 154.031 388.177 154.048 388.291 154.091C388.405 154.135 388.508 154.202 388.593 154.29C388.733 154.445 388.811 154.646 388.811 154.855C388.811 155.064 388.733 155.265 388.593 155.42C388.511 155.512 388.409 155.585 388.294 155.632C388.18 155.678 388.056 155.698 387.933 155.69C387.174 155.696 386.422 155.546 385.723 155.25C384.376 154.671 383.302 153.597 382.723 152.25C382.421 151.56 382.267 150.814 382.273 150.06V137.89C382.262 137.766 382.281 137.642 382.328 137.527C382.375 137.413 382.449 137.311 382.543 137.23C382.693 137.085 382.894 137.002 383.103 137C383.318 137.004 383.524 137.086 383.683 137.23C383.774 137.313 383.844 137.416 383.889 137.53C383.934 137.644 383.953 137.767 383.943 137.89V142.62H388.033C388.154 142.609 388.276 142.625 388.39 142.667C388.504 142.708 388.607 142.774 388.693 142.86L388.903 143.45Z' fill='url(#paint1_linear_1344_63)'/>
        <path id='Vector_3' fill-rule='evenodd' clip-rule='evenodd' d='M434.573 143.45C434.571 143.66 434.493 143.863 434.353 144.02C434.272 144.114 434.17 144.188 434.056 144.235C433.941 144.282 433.817 144.301 433.693 144.29H429.603V154.89C429.613 155.016 429.596 155.142 429.551 155.26C429.505 155.377 429.435 155.483 429.343 155.57C429.181 155.708 428.976 155.785 428.763 155.79C428.556 155.787 428.357 155.708 428.203 155.57C428.108 155.486 428.034 155.38 427.987 155.262C427.94 155.144 427.922 155.017 427.933 154.89V142.79C427.927 142.037 428.081 141.29 428.383 140.6C428.67 139.929 429.076 139.315 429.583 138.79C430.108 138.266 430.732 137.851 431.419 137.569C432.105 137.288 432.841 137.145 433.583 137.15C433.705 137.14 433.827 137.157 433.941 137.2C434.055 137.244 434.159 137.312 434.243 137.4C434.378 137.556 434.456 137.754 434.463 137.96C434.456 138.169 434.378 138.37 434.243 138.53C434.161 138.623 434.059 138.696 433.945 138.743C433.83 138.789 433.706 138.809 433.583 138.8C433.044 138.793 432.509 138.899 432.013 139.11C431.541 139.321 431.11 139.616 430.743 139.98C430.395 140.328 430.117 140.738 429.923 141.19C429.712 141.663 429.596 142.172 429.583 142.69H433.673C433.794 142.679 433.916 142.695 434.03 142.737C434.144 142.778 434.247 142.844 434.333 142.93L434.573 143.45Z' fill='url(#paint2_linear_1344_63)'/>
        <path id='Vector_4' fill-rule='evenodd' clip-rule='evenodd' d='M311.483 150.05C311.492 150.809 311.342 151.562 311.043 152.26C310.744 152.932 310.328 153.545 309.813 154.07C309.291 154.584 308.677 154.994 308.003 155.28C307.306 155.583 306.553 155.74 305.793 155.74C305.033 155.74 304.28 155.583 303.583 155.28C302.904 154.997 302.287 154.586 301.763 154.07C301.242 153.552 300.827 152.937 300.543 152.26C300.233 151.565 300.076 150.811 300.083 150.05V143.52C300.072 143.396 300.091 143.272 300.138 143.157C300.185 143.042 300.259 142.941 300.353 142.86C300.508 142.717 300.712 142.638 300.923 142.64C301.133 142.642 301.336 142.72 301.493 142.86C301.587 142.941 301.661 143.042 301.708 143.157C301.755 143.272 301.774 143.396 301.763 143.52V150.05C301.758 150.586 301.864 151.117 302.073 151.61C302.278 152.092 302.573 152.53 302.943 152.9C303.308 153.269 303.743 153.561 304.223 153.76C304.718 153.978 305.252 154.09 305.793 154.09C306.334 154.09 306.868 153.978 307.363 153.76C307.837 153.556 308.268 153.264 308.633 152.9C308.997 152.524 309.291 152.088 309.503 151.61C309.712 151.117 309.818 150.586 309.813 150.05V143.52C309.803 143.397 309.822 143.274 309.867 143.16C309.912 143.046 309.982 142.943 310.073 142.86C310.233 142.719 310.439 142.64 310.653 142.64C310.864 142.64 311.067 142.718 311.223 142.86C311.315 142.942 311.387 143.044 311.432 143.159C311.478 143.273 311.495 143.397 311.483 143.52V150.05Z' fill='url(#paint3_linear_1344_63)'/>
        <path id='Vector_5' fill-rule='evenodd' clip-rule='evenodd' d='M316.583 154.89C316.596 155.016 316.579 155.143 316.534 155.261C316.488 155.379 316.416 155.485 316.323 155.57C316.165 155.712 315.96 155.79 315.748 155.79C315.536 155.79 315.331 155.712 315.173 155.57C315.08 155.485 315.007 155.379 314.962 155.261C314.917 155.143 314.9 155.016 314.913 154.89V143.46C314.902 143.336 314.919 143.211 314.965 143.094C315.01 142.978 315.081 142.874 315.173 142.79C315.328 142.641 315.534 142.558 315.748 142.558C315.962 142.558 316.168 142.641 316.323 142.79C316.415 142.874 316.486 142.978 316.531 143.094C316.576 143.211 316.594 143.336 316.583 143.46V154.89ZM317.023 139.63C317.023 139.791 316.992 139.95 316.933 140.1C316.869 140.255 316.774 140.394 316.653 140.51C316.54 140.626 316.403 140.718 316.253 140.78C316.092 140.852 315.919 140.889 315.743 140.89C315.57 140.889 315.4 140.851 315.243 140.78C315.09 140.724 314.952 140.631 314.843 140.51C314.725 140.394 314.633 140.254 314.573 140.1C314.503 139.953 314.465 139.793 314.463 139.63C314.464 139.457 314.501 139.287 314.573 139.13C314.699 138.817 314.938 138.564 315.243 138.42C315.403 138.359 315.572 138.329 315.743 138.33C315.917 138.329 316.09 138.359 316.253 138.42C316.4 138.496 316.535 138.594 316.653 138.71C316.772 138.831 316.867 138.973 316.933 139.13L317.023 139.63Z' fill='url(#paint4_linear_1344_63)'/>
        <path id='Vector_6' fill-rule='evenodd' clip-rule='evenodd' d='M321.683 154.89C321.693 155.016 321.675 155.142 321.63 155.26C321.585 155.377 321.514 155.483 321.423 155.57C321.26 155.708 321.056 155.785 320.843 155.79C320.635 155.788 320.436 155.71 320.283 155.57C320.188 155.486 320.114 155.38 320.067 155.262C320.02 155.144 320.001 155.017 320.013 154.89V137.89C320.002 137.766 320.021 137.642 320.068 137.527C320.115 137.413 320.189 137.311 320.283 137.23C320.432 137.083 320.633 137 320.843 137C321.058 137.004 321.264 137.086 321.423 137.23C321.513 137.313 321.584 137.416 321.629 137.53C321.674 137.644 321.692 137.767 321.683 137.89V154.89Z' fill='url(#paint5_linear_1344_63)'/>
        <path id='Vector_7' fill-rule='evenodd' clip-rule='evenodd' d='M336.063 149.16C336.071 148.507 335.942 147.86 335.683 147.26C335.436 146.683 335.079 146.16 334.633 145.72C334.184 145.279 333.659 144.923 333.083 144.67C332.482 144.416 331.835 144.286 331.183 144.29C330.54 144.287 329.904 144.417 329.313 144.67C328.736 144.916 328.212 145.272 327.773 145.72C327.347 146.167 327.008 146.689 326.773 147.26C326.514 147.86 326.384 148.507 326.393 149.16C326.387 149.813 326.516 150.46 326.773 151.06C327.008 151.634 327.347 152.159 327.773 152.61C328.214 153.043 328.738 153.384 329.313 153.61C329.902 153.871 330.539 154.004 331.183 154C331.837 154.005 332.484 153.872 333.083 153.61C333.657 153.376 334.183 153.037 334.633 152.61C335.08 152.166 335.436 151.64 335.683 151.06L336.063 149.16ZM337.743 149.16C337.744 150.017 337.574 150.865 337.242 151.655C336.911 152.445 336.425 153.16 335.813 153.76C335.222 154.361 334.518 154.84 333.743 155.17C332.938 155.519 332.07 155.696 331.193 155.69C330.607 155.694 330.024 155.61 329.463 155.44C328.917 155.295 328.396 155.073 327.913 154.78C327.427 154.507 326.98 154.171 326.583 153.78C326.19 153.388 325.854 152.944 325.583 152.46C325.301 151.973 325.083 151.452 324.933 150.91C324.769 150.348 324.685 149.765 324.683 149.18C324.68 148.307 324.857 147.442 325.203 146.64C325.53 145.863 326.006 145.156 326.603 144.56C327.2 143.969 327.902 143.494 328.673 143.16C329.475 142.827 330.335 142.657 331.203 142.66C332.141 142.649 333.071 142.847 333.923 143.24C334.744 143.612 335.48 144.15 336.083 144.82V137.89C336.072 137.766 336.091 137.642 336.138 137.527C336.185 137.413 336.259 137.311 336.353 137.23C336.508 137.085 336.711 137.003 336.923 137C337.135 137.004 337.338 137.086 337.493 137.23C337.587 137.311 337.661 137.413 337.708 137.527C337.755 137.642 337.774 137.766 337.763 137.89L337.743 149.16Z' fill='url(#paint6_linear_1344_63)'/>
        <path id='Vector_8' fill-rule='evenodd' clip-rule='evenodd' d='M342.843 154.89C342.856 155.016 342.839 155.143 342.794 155.261C342.749 155.379 342.676 155.485 342.583 155.57C342.425 155.708 342.223 155.786 342.013 155.79C341.8 155.785 341.595 155.707 341.433 155.57C341.341 155.483 341.271 155.377 341.226 155.259C341.181 155.142 341.163 155.015 341.173 154.89V143.46C341.164 143.336 341.183 143.212 341.228 143.096C341.273 142.98 341.343 142.875 341.433 142.79C341.592 142.646 341.798 142.564 342.013 142.56C342.225 142.563 342.428 142.645 342.583 142.79C342.675 142.874 342.746 142.978 342.791 143.094C342.836 143.211 342.854 143.336 342.843 143.46V154.89ZM343.293 139.63C343.29 139.791 343.256 139.951 343.193 140.1C343.129 140.255 343.034 140.394 342.913 140.51C342.802 140.629 342.665 140.721 342.513 140.78C342.353 140.852 342.179 140.889 342.003 140.89C341.834 140.889 341.666 140.852 341.513 140.78C341.356 140.725 341.215 140.633 341.103 140.51C340.988 140.391 340.897 140.252 340.833 140.1C340.765 139.952 340.731 139.792 340.733 139.63C340.73 139.458 340.765 139.288 340.833 139.13C340.899 138.976 340.99 138.834 341.103 138.71C341.221 138.589 341.36 138.491 341.513 138.42C341.669 138.359 341.835 138.329 342.003 138.33C342.177 138.329 342.35 138.359 342.513 138.42C342.662 138.493 342.797 138.591 342.913 138.71C343.032 138.831 343.127 138.973 343.193 139.13L343.293 139.63Z' fill='url(#paint7_linear_1344_63)'/>
        <path id='Vector_9' fill-rule='evenodd' clip-rule='evenodd' d='M357.673 154.89C357.686 155.016 357.669 155.143 357.624 155.261C357.579 155.379 357.506 155.485 357.413 155.57C357.255 155.712 357.05 155.791 356.838 155.791C356.626 155.791 356.421 155.712 356.263 155.57C356.17 155.485 356.097 155.379 356.052 155.261C356.007 155.143 355.99 155.016 356.003 154.89V148.38C356.007 147.85 355.906 147.324 355.705 146.833C355.504 146.342 355.208 145.895 354.833 145.52C354.466 145.156 354.035 144.861 353.563 144.65C353.066 144.442 352.532 144.337 351.993 144.34C351.454 144.335 350.92 144.44 350.423 144.65C349.945 144.856 349.51 145.151 349.143 145.52C348.771 145.885 348.475 146.32 348.273 146.8C348.057 147.299 347.948 147.837 347.953 148.38V154.89C347.965 155.017 347.946 155.144 347.899 155.262C347.852 155.38 347.778 155.486 347.683 155.57C347.521 155.708 347.316 155.785 347.103 155.79C346.896 155.785 346.698 155.707 346.543 155.57C346.444 155.488 346.366 155.383 346.316 155.265C346.265 155.147 346.244 155.018 346.253 154.89V148.38C346.265 146.878 346.869 145.44 347.933 144.38C348.458 143.865 349.071 143.449 349.743 143.15C351.161 142.564 352.755 142.564 354.173 143.15C354.845 143.449 355.458 143.865 355.983 144.38C356.499 144.9 356.916 145.51 357.213 146.18C357.505 146.884 357.655 147.638 357.653 148.4L357.673 154.89Z' fill='url(#paint8_linear_1344_63)'/>
        <path id='Vector_10' fill-rule='evenodd' clip-rule='evenodd' d='M372.053 149.16C372.061 148.507 371.932 147.859 371.673 147.26C371.423 146.685 371.066 146.163 370.623 145.72C370.174 145.279 369.649 144.923 369.073 144.67C368.472 144.416 367.825 144.286 367.173 144.29C366.53 144.287 365.894 144.417 365.303 144.67C364.726 144.916 364.202 145.272 363.763 145.72C363.319 146.163 362.963 146.685 362.713 147.26C362.454 147.859 362.324 148.507 362.333 149.16C362.327 149.813 362.456 150.46 362.713 151.06C362.963 151.638 363.319 152.163 363.763 152.61C364.204 153.043 364.728 153.384 365.303 153.61C365.892 153.871 366.529 154.004 367.173 154C367.827 154.005 368.474 153.872 369.073 153.61C369.647 153.376 370.173 153.037 370.623 152.61C371.066 152.163 371.423 151.638 371.673 151.06L372.053 149.16ZM373.733 154.65C373.737 155.541 373.557 156.422 373.203 157.24C372.863 158.029 372.374 158.745 371.763 159.35C371.151 159.964 370.429 160.456 369.633 160.8C368.812 161.153 367.927 161.333 367.033 161.33C366.179 161.328 365.334 161.162 364.543 160.84C364.153 160.681 363.778 160.487 363.423 160.26C363.067 160.038 362.732 159.783 362.423 159.5C362.331 159.416 362.257 159.314 362.205 159.201C362.154 159.087 362.126 158.965 362.123 158.84C362.119 158.735 362.136 158.63 362.174 158.532C362.212 158.434 362.269 158.345 362.343 158.27C362.418 158.192 362.508 158.13 362.608 158.089C362.708 158.048 362.815 158.028 362.923 158.03C363.029 158.032 363.134 158.053 363.233 158.09C363.352 158.14 363.463 158.207 363.563 158.29C364.018 158.734 364.564 159.075 365.163 159.29C365.452 159.402 365.75 159.493 366.053 159.56C366.383 159.615 366.718 159.641 367.053 159.64C367.741 159.653 368.423 159.516 369.053 159.24C369.651 158.982 370.194 158.612 370.653 158.15C371.11 157.691 371.48 157.152 371.743 156.56C372.002 155.943 372.135 155.28 372.133 154.61V153.49C371.521 154.152 370.783 154.686 369.963 155.06C369.114 155.455 368.189 155.656 367.253 155.65C366.667 155.655 366.084 155.57 365.523 155.4C364.974 155.255 364.449 155.033 363.963 154.74C363.482 154.465 363.038 154.128 362.643 153.74C362.25 153.348 361.914 152.904 361.643 152.42C361.361 151.933 361.143 151.412 360.993 150.87C360.825 150.309 360.74 149.726 360.743 149.14C360.736 148.266 360.913 147.401 361.263 146.6C361.59 145.822 362.066 145.116 362.663 144.52C363.26 143.929 363.962 143.454 364.733 143.12C365.534 142.786 366.395 142.616 367.263 142.62C367.85 142.62 368.435 142.697 369.003 142.85C369.554 143.006 370.085 143.227 370.583 143.51C371.064 143.785 371.508 144.121 371.903 144.51C372.288 144.908 372.624 145.351 372.903 145.83C373.503 146.825 373.812 147.968 373.793 149.13L373.733 154.65Z' fill='url(#paint9_linear_1344_63)'/>
        <path id='Vector_11' fill-rule='evenodd' clip-rule='evenodd' d='M403.253 154.89C403.266 155.016 403.249 155.143 403.204 155.261C403.158 155.379 403.086 155.485 402.993 155.57C402.834 155.707 402.633 155.785 402.423 155.79C402.21 155.785 402.005 155.708 401.843 155.57C401.751 155.483 401.68 155.377 401.635 155.26C401.59 155.142 401.572 155.016 401.583 154.89V148.38C401.587 147.85 401.486 147.323 401.285 146.832C401.084 146.341 400.788 145.895 400.413 145.52C400.046 145.156 399.615 144.861 399.143 144.65C398.646 144.442 398.112 144.337 397.573 144.34C397.037 144.334 396.506 144.44 396.013 144.65C395.53 144.853 395.092 145.148 394.723 145.52C394.351 145.885 394.055 146.32 393.853 146.8C393.637 147.298 393.528 147.837 393.533 148.38V154.89C393.544 155.017 393.526 155.144 393.479 155.262C393.432 155.38 393.358 155.486 393.263 155.57C393.103 155.705 392.902 155.783 392.693 155.79C392.483 155.786 392.281 155.708 392.123 155.57C392.028 155.486 391.954 155.38 391.907 155.262C391.86 155.144 391.841 155.017 391.853 154.89V137.89C391.842 137.766 391.861 137.642 391.908 137.527C391.955 137.413 392.029 137.311 392.123 137.23C392.278 137.085 392.481 137.003 392.693 137C392.904 137.006 393.107 137.087 393.263 137.23C393.357 137.311 393.431 137.413 393.478 137.527C393.525 137.642 393.544 137.766 393.533 137.89V144.29C394.059 143.752 394.688 143.327 395.383 143.04C396.797 142.467 398.379 142.467 399.793 143.04C401.13 143.633 402.2 144.703 402.793 146.04C403.09 146.742 403.24 147.498 403.233 148.26L403.253 154.89Z' fill='url(#paint10_linear_1344_63)'/>
        <path id='Vector_12' fill-rule='evenodd' clip-rule='evenodd' d='M419.393 149.27C419.391 149.374 419.367 149.476 419.323 149.57C419.274 149.669 419.21 149.76 419.133 149.84C419.052 149.913 418.961 149.973 418.863 150.02C418.768 150.071 418.661 150.099 418.553 150.1H408.023C408.138 150.669 408.351 151.214 408.653 151.71C408.943 152.2 409.319 152.634 409.763 152.99C410.196 153.35 410.686 153.634 411.213 153.83C412.081 154.158 413.026 154.228 413.933 154.03C414.259 153.965 414.577 153.868 414.883 153.74C415.511 153.477 416.076 153.085 416.543 152.59C416.629 152.487 416.734 152.402 416.853 152.34C416.96 152.309 417.071 152.292 417.183 152.29C417.402 152.286 417.614 152.369 417.773 152.52C417.85 152.596 417.911 152.686 417.952 152.786C417.994 152.885 418.014 152.992 418.013 153.1C418.002 153.339 417.907 153.566 417.743 153.74C417.442 154.065 417.107 154.357 416.743 154.61C416.369 154.869 415.97 155.09 415.553 155.27C415.154 155.451 414.734 155.582 414.303 155.66C413.852 155.749 413.393 155.793 412.933 155.79C412.337 155.793 411.744 155.709 411.173 155.54C410.625 155.381 410.097 155.156 409.603 154.87C409.108 154.603 408.653 154.266 408.253 153.87C407.86 153.471 407.524 153.02 407.253 152.53C406.965 152.037 406.74 151.51 406.583 150.96C406.419 150.388 406.335 149.796 406.333 149.2C406.336 147.446 407.025 145.763 408.253 144.51C408.847 143.903 409.553 143.417 410.333 143.08C411.143 142.726 412.019 142.545 412.903 142.55C413.783 142.546 414.655 142.723 415.463 143.07C416.233 143.414 416.932 143.899 417.523 144.5C418.131 145.103 418.613 145.82 418.943 146.61C419.282 147.389 419.456 148.23 419.453 149.08V149.31L419.393 149.27ZM417.673 148.45C417.54 147.379 417.059 146.381 416.303 145.61C415.849 145.171 415.321 144.815 414.743 144.56C414.142 144.307 413.495 144.181 412.843 144.19C412.245 144.188 411.652 144.296 411.093 144.51C410.555 144.719 410.057 145.02 409.623 145.4C409.189 145.783 408.827 146.24 408.553 146.75C408.264 147.277 408.078 147.854 408.003 148.45H417.673Z' fill='url(#paint11_linear_1344_63)'/>
        <path id='Vector_13' fill-rule='evenodd' clip-rule='evenodd' d='M448.963 150.05C448.972 150.809 448.822 151.562 448.523 152.26C448.224 152.932 447.808 153.545 447.293 154.07C446.771 154.584 446.157 154.994 445.483 155.28C444.788 155.589 444.034 155.746 443.273 155.74C442.512 155.748 441.758 155.591 441.063 155.28C440.384 154.997 439.767 154.586 439.243 154.07C438.722 153.552 438.307 152.937 438.023 152.26C437.713 151.565 437.556 150.811 437.563 150.05V143.52C437.552 143.396 437.571 143.272 437.618 143.157C437.665 143.042 437.739 142.941 437.833 142.86C437.988 142.717 438.192 142.638 438.403 142.64C438.613 142.642 438.816 142.72 438.973 142.86C439.067 142.941 439.141 143.042 439.188 143.157C439.235 143.272 439.254 143.396 439.243 143.52V150.05C439.238 150.586 439.344 151.117 439.553 151.61C439.758 152.092 440.053 152.53 440.423 152.9C440.788 153.269 441.223 153.561 441.703 153.76C442.198 153.978 442.732 154.09 443.273 154.09C443.814 154.09 444.348 153.978 444.843 153.76C445.317 153.556 445.748 153.264 446.113 152.9C446.477 152.524 446.771 152.088 446.983 151.61C447.192 151.117 447.298 150.586 447.293 150.05V143.52C447.283 143.397 447.302 143.274 447.347 143.16C447.392 143.046 447.462 142.943 447.553 142.86C447.713 142.719 447.919 142.64 448.133 142.64C448.344 142.64 448.547 142.718 448.703 142.86C448.795 142.942 448.867 143.044 448.912 143.159C448.958 143.273 448.975 143.397 448.963 143.52V150.05Z' fill='url(#paint12_linear_1344_63)'/>
        <path id='Vector_14' fill-rule='evenodd' clip-rule='evenodd' d='M458.583 143.45C458.58 143.658 458.506 143.86 458.373 144.02C458.291 144.112 458.189 144.185 458.074 144.232C457.96 144.278 457.836 144.298 457.713 144.29H453.623V150.05C453.625 151.098 454.038 152.103 454.773 152.85C455.144 153.211 455.578 153.503 456.053 153.71C456.543 153.932 457.075 154.045 457.613 154.04C457.735 154.028 457.857 154.045 457.972 154.088C458.086 154.132 458.189 154.201 458.273 154.29C458.413 154.445 458.491 154.646 458.491 154.855C458.491 155.064 458.413 155.265 458.273 155.42C458.192 155.514 458.09 155.588 457.976 155.635C457.861 155.682 457.736 155.701 457.613 155.69C456.854 155.695 456.102 155.545 455.403 155.25C454.738 154.964 454.133 154.553 453.623 154.04C453.104 153.522 452.687 152.911 452.393 152.24C452.091 151.55 451.937 150.804 451.943 150.05V137.89C451.932 137.766 451.951 137.642 451.998 137.527C452.045 137.413 452.119 137.311 452.213 137.23C452.368 137.085 452.571 137.003 452.783 137C452.994 137.006 453.197 137.087 453.353 137.23C453.447 137.311 453.521 137.413 453.568 137.527C453.615 137.642 453.634 137.766 453.623 137.89V142.62H457.713C457.834 142.611 457.955 142.628 458.068 142.67C458.182 142.711 458.286 142.776 458.373 142.86L458.583 143.45Z' fill='url(#paint13_linear_1344_63)'/>
        <path id='Vector_15' fill-rule='evenodd' clip-rule='evenodd' d='M472.983 150.05C472.988 150.81 472.835 151.563 472.533 152.26C471.953 153.606 470.879 154.68 469.533 155.26C468.834 155.568 468.077 155.725 467.313 155.72C466.552 155.726 465.798 155.569 465.103 155.26C463.749 154.69 462.672 153.613 462.103 152.26C461.801 151.563 461.647 150.81 461.653 150.05V143.52C461.643 143.397 461.662 143.274 461.707 143.16C461.752 143.046 461.822 142.943 461.913 142.86C462.068 142.717 462.272 142.638 462.483 142.64C462.694 142.64 462.897 142.718 463.053 142.86C463.147 142.941 463.221 143.042 463.268 143.157C463.315 143.272 463.334 143.396 463.323 143.52V150.05C463.318 150.586 463.424 151.117 463.633 151.61C463.837 152.092 464.133 152.53 464.503 152.9C464.87 153.271 465.309 153.564 465.793 153.76C466.286 153.977 466.819 154.09 467.358 154.09C467.897 154.09 468.43 153.977 468.923 153.76C469.398 153.558 469.829 153.266 470.193 152.9C470.56 152.527 470.855 152.09 471.063 151.61C471.272 151.117 471.377 150.586 471.373 150.05V143.52C471.362 143.396 471.381 143.272 471.428 143.157C471.475 143.042 471.549 142.941 471.643 142.86C471.799 142.719 472.002 142.64 472.213 142.64C472.423 142.64 472.627 142.719 472.783 142.86C472.877 142.941 472.951 143.042 472.998 143.157C473.045 143.272 473.064 143.396 473.053 143.52L472.983 150.05Z' fill='url(#paint14_linear_1344_63)'/>
        <path id='Vector_16' fill-rule='evenodd' clip-rule='evenodd' d='M482.553 143.45C482.551 143.66 482.473 143.863 482.333 144.02C482.252 144.114 482.15 144.188 482.036 144.235C481.921 144.282 481.796 144.301 481.673 144.29C481.136 144.284 480.604 144.393 480.113 144.61C479.631 144.824 479.191 145.122 478.813 145.49C478.432 145.857 478.13 146.298 477.927 146.787C477.724 147.276 477.624 147.801 477.633 148.33V154.89C477.644 155.017 477.626 155.144 477.579 155.262C477.532 155.38 477.458 155.486 477.363 155.57C477.207 155.711 477.003 155.789 476.793 155.789C476.582 155.789 476.379 155.711 476.223 155.57C476.131 155.483 476.06 155.377 476.015 155.26C475.97 155.142 475.952 155.016 475.963 154.89V148.38C475.953 147.617 476.103 146.861 476.403 146.16C477.003 144.81 478.093 143.738 479.453 143.16C480.156 142.865 480.911 142.715 481.673 142.72C481.794 142.709 481.915 142.725 482.029 142.767C482.144 142.808 482.247 142.874 482.333 142.96L482.553 143.45Z' fill='url(#paint15_linear_1344_63)'/>
        <path id='Vector_17' fill-rule='evenodd' clip-rule='evenodd' d='M496.813 149.27C496.811 149.374 496.787 149.476 496.743 149.57C496.694 149.672 496.626 149.764 496.543 149.84C496.465 149.912 496.378 149.973 496.283 150.02C496.183 150.07 496.074 150.097 495.963 150.1H485.433C485.551 150.67 485.768 151.215 486.073 151.71C486.36 152.202 486.736 152.637 487.183 152.99C487.756 153.464 488.429 153.8 489.152 153.974C489.875 154.147 490.628 154.153 491.353 153.99C491.678 153.924 491.996 153.827 492.303 153.7C492.929 153.434 493.494 153.042 493.963 152.55C494.046 152.445 494.152 152.359 494.273 152.3C494.377 152.269 494.484 152.252 494.593 152.25C494.701 152.246 494.809 152.264 494.911 152.303C495.012 152.342 495.104 152.401 495.182 152.477C495.259 152.553 495.321 152.644 495.362 152.744C495.404 152.844 495.424 152.952 495.423 153.06C495.415 153.298 495.323 153.524 495.163 153.7C494.862 154.025 494.527 154.317 494.163 154.57C493.788 154.827 493.389 155.048 492.973 155.23C492.573 155.41 492.154 155.54 491.723 155.62C491.272 155.709 490.813 155.753 490.353 155.75C489.757 155.755 489.164 155.67 488.593 155.5C488.044 155.341 487.517 155.116 487.023 154.83C486.528 154.563 486.073 154.226 485.673 153.83C485.281 153.431 484.944 152.98 484.673 152.49C484.385 151.997 484.16 151.469 484.003 150.92C483.606 149.483 483.704 147.954 484.283 146.58C484.605 145.793 485.077 145.077 485.673 144.47C486.269 143.865 486.975 143.38 487.753 143.04C488.565 142.694 489.44 142.515 490.323 142.515C491.206 142.515 492.08 142.694 492.893 143.04C493.663 143.384 494.362 143.869 494.953 144.47C495.554 145.078 496.036 145.794 496.373 146.58C496.712 147.359 496.886 148.2 496.883 149.05V149.28L496.813 149.27ZM495.093 148.45C494.952 147.379 494.468 146.383 493.713 145.61C493.263 145.171 492.738 144.816 492.163 144.56C491.561 144.309 490.915 144.183 490.263 144.19C489.662 144.19 489.066 144.299 488.503 144.51C487.969 144.721 487.475 145.022 487.043 145.4C486.606 145.78 486.243 146.238 485.973 146.75C485.685 147.279 485.496 147.854 485.413 148.45H495.093Z' fill='url(#paint16_linear_1344_63)'/>
        </g>
        <path id='b4rg' fill-rule='evenodd' clip-rule='evenodd' d='M138.365 0H118V39H157L157 18.6346C157 13.6924 155.037 8.95263 151.542 5.45796C148.047 1.96329 143.308 0 138.365 0Z' fill='url(#paint17_linear_1344_63)'/>
        <path id='b1lf2' fill-rule='evenodd' clip-rule='evenodd' d='M78 156.997H39V117H78V156.997Z' fill='url(#paint18_linear_1344_63)'/>
        <path id='b4rg2' fill-rule='evenodd' clip-rule='evenodd' d='M118 0H78V39H118V0Z' fill='url(#paint19_linear_1344_63)'/>
        <path id='b4lf2' fill-rule='evenodd' clip-rule='evenodd' d='M78 0H39V39H78V0Z' fill='url(#paint20_linear_1344_63)'/>
        <path id='b1rg2' fill-rule='evenodd' clip-rule='evenodd' d='M118 156.997H78V117H118V156.997Z' fill='url(#paint21_linear_1344_63)'/>
        <path id='b1lf' fill-rule='evenodd' clip-rule='evenodd' d='M0 117V138.365C0 143.307 1.96299 148.046 5.45715 151.54C8.9513 155.034 13.6904 156.997 18.6319 156.997H39V117H0Z' fill='url(#paint22_linear_1344_63)'/>
        <path id='b1rg' fill-rule='evenodd' clip-rule='evenodd' d='M157 117H118V156.997H138.368C143.31 156.997 148.049 155.034 151.543 151.54C155.037 148.046 157 143.307 157 138.365L157 117Z' fill='url(#paint23_linear_1344_63)'/>
        <path id='b4lf' fill-rule='evenodd' clip-rule='evenodd' d='M0 18.6346V39H39V0H18.6346C13.6924 0 8.95263 1.96329 5.45796 5.45796C1.96329 8.95263 0 13.6924 0 18.6346Z' fill='url(#paint24_linear_1344_63)'/>
        <g id='b2rg'>
        <path id='Intersect' fill-rule='evenodd' clip-rule='evenodd' d='M157 117V78H118V117H157Z' fill='url(#paint25_linear_1344_63)'/>
        <path id='Intersect_2' fill-rule='evenodd' clip-rule='evenodd' d='M130.306 78H118V84.821C127.551 91.4682 139.064 99.7163 140.801 100.96C140.93 101.053 141.005 101.107 141.021 101.118C137.116 92.0299 133.56 84.3848 130.306 78Z' fill='url(#paint26_linear_1344_63)'/>
        </g>
        <g id='b3rg'>
        <path id='Intersect_3' fill-rule='evenodd' clip-rule='evenodd' d='M157 78V39H118V78H157Z' fill='url(#paint27_linear_1344_63)'/>
        <path id='Intersect_4' fill-rule='evenodd' clip-rule='evenodd' d='M130.306 78.0003C129.017 75.4709 127.776 73.1394 126.579 70.9942C123.851 66.6947 120.926 64.6866 118 64.2109V78.0003H130.306Z' fill='url(#paint28_linear_1344_63)'/>
        <path id='Intersect_5' fill-rule='evenodd' clip-rule='evenodd' d='M118 57.7256V64.2175C120.924 64.696 123.847 66.7044 126.574 70.9992C123.427 65.3583 120.587 61.0039 118 57.7256Z' fill='url(#paint29_linear_1344_63)'/>
        </g>
        <g id='b3rg2'>
        <path id='Intersect_6' fill-rule='evenodd' clip-rule='evenodd' d='M118 39H78V78H118V39Z' fill='url(#paint30_linear_1344_63)'/>
        <path id='Intersect_7' fill-rule='evenodd' clip-rule='evenodd' d='M118 64.2104C110.491 62.9899 102.972 71.861 98.7462 77.9998H118V64.2104Z' fill='url(#paint31_linear_1344_63)'/>
        <path id='Intersect_8' fill-rule='evenodd' clip-rule='evenodd' d='M118 57.7259C105.13 41.4169 98.5134 51.7388 91.4316 62.7865C89.6986 65.49 87.9377 68.237 86.0505 70.6478L86.0311 70.6783C85.5188 71.329 84.9954 71.9604 84.4637 72.5558L84.4305 72.6002C82.7855 74.4362 81.027 75.9593 79.1079 76.9452C78.7524 77.1683 78.3832 77.389 78 77.6056V78.0002H98.7384C102.966 71.8591 110.487 62.9885 118 64.2178V57.7259Z' fill='url(#paint32_linear_1344_63)'/>
        </g>
        <g id='b2rg2'>
        <path id='Intersect_9' fill-rule='evenodd' clip-rule='evenodd' d='M118 78H78V117H118V78Z' fill='url(#paint33_linear_1344_63)'/>
        <path id='Intersect_10' fill-rule='evenodd' clip-rule='evenodd' d='M107.238 78.759C102.378 77.7593 98.5733 80.2517 95.2889 83.5555L95.2902 83.553C95.3627 83.4193 96.6491 81.046 98.7462 78H118V84.821C116.244 83.5989 114.554 82.4309 113.004 81.3705C110.924 79.9498 109.011 79.1218 107.238 78.759Z' fill='url(#paint34_linear_1344_63)'/>
        <path id='Intersect_11' fill-rule='evenodd' clip-rule='evenodd' d='M98.7383 78C96.6255 81.0693 95.3355 83.4568 95.2806 83.5608C93.86 84.9863 92.5365 86.5637 91.2667 88.077C88.2591 91.6615 85.5526 94.8872 82.5695 94.8872C81.323 94.8872 79.7714 94.4112 78 93.6168V78H98.7383Z' fill='url(#paint35_linear_1344_63)'/>
        </g>
        <g id='b2lf2'>
        <path id='Intersect_12' fill-rule='evenodd' clip-rule='evenodd' d='M78 78H39V117H78V78Z' fill='url(#paint36_linear_1344_63)'/>
        <path id='Intersect_13' fill-rule='evenodd' clip-rule='evenodd' d='M78 93.6168C74.9248 92.2376 71.1871 89.8987 67.2329 87.4243C62.9744 84.7595 58.465 81.9377 54.2617 79.9884C64.4174 82.6506 72.0412 80.76 77.2774 78H78V93.6168Z' fill='url(#paint37_linear_1344_63)'/>
        <path id='Intersect_14' fill-rule='evenodd' clip-rule='evenodd' d='M72.2977 78H48.9442C50.6316 78.4325 52.426 79.1237 54.2783 79.9858C64.4156 82.6519 72.0359 80.7642 77.2718 78H76.045C74.8606 78.2182 73.6152 78.2315 72.2977 78ZM39 79.8063C40.1632 79.0199 41.317 78.3971 42.4529 78H39V79.8063Z' fill='url(#paint38_linear_1344_63)'/>
        </g>
        <g id='b3lf2'>
        <path id='Intersect_15' fill-rule='evenodd' clip-rule='evenodd' d='M78 39H39V78H78V39Z' fill='url(#paint39_linear_1344_63)'/>
        <path id='Intersect_16' fill-rule='evenodd' clip-rule='evenodd' d='M78 77.4397C77.3666 77.6873 76.7156 77.8765 76.045 78H77.2718C77.5199 77.869 77.7626 77.7361 78 77.6016V77.4397ZM48.9442 78H72.2977C70.7612 77.7301 69.1268 77.1272 67.3771 76.1281C64.641 74.569 61.6253 72.0379 58.2661 68.2993C51.5101 62.1742 44.942 63.4207 39 68.0066V78H42.4529C43.1405 77.7596 43.8216 77.6019 44.4944 77.5405C45.855 77.4141 47.352 77.5919 48.9442 78Z' fill='url(#paint40_linear_1344_63)'/>
        </g>
        <g id='b3lf'>
        <path id='Intersect_17' fill-rule='evenodd' clip-rule='evenodd' d='M0 39V78H39V39H0Z' fill='url(#paint41_linear_1344_63)'/>
        <path id='Intersect_18' fill-rule='evenodd' clip-rule='evenodd' d='M39.0001 68.0068C35.7131 70.5436 32.6178 74.1023 29.7883 78.0002H39.0001V68.0068Z' fill='url(#paint42_linear_1344_63)'/>
        </g>
        <g id='b2lf'>
        <path id='Intersect_19' fill-rule='evenodd' clip-rule='evenodd' d='M0 78V117H39V78H0Z' fill='url(#paint43_linear_1344_63)'/>
        <path id='Intersect_20' fill-rule='evenodd' clip-rule='evenodd' d='M28.8356 89.2833C24.6066 93.7653 20.5787 98.0342 17.1697 98.997C17.7609 97.9547 18.4092 96.7797 19.1108 95.5082C21.9072 90.4403 25.5495 83.8394 29.7883 78H39V79.8063C35.6234 82.0894 32.1671 85.7524 28.8356 89.2833Z' fill='url(#paint44_linear_1344_63)'/>
        </g>
        <path id='a' fill-rule='evenodd' clip-rule='evenodd' d='M248.341 88.4274C248.369 84.7484 247.591 81.1059 246.061 77.7435C244.598 74.4908 242.499 71.5478 239.881 69.0792C237.227 66.5891 234.121 64.6038 230.721 63.225C227.177 61.7407 223.357 60.9866 219.501 61.0101C215.693 60.9779 211.92 61.7189 208.421 63.186C201.619 65.9674 196.158 71.173 193.151 77.7435C191.647 81.1176 190.871 84.7577 190.871 88.4372C190.871 92.1166 191.647 95.7567 193.151 99.1309C195.399 104.125 199.087 108.373 203.765 111.357C208.444 114.342 213.911 115.935 219.501 115.942C223.347 115.97 227.159 115.229 230.701 113.766C234.101 112.388 237.207 110.402 239.861 107.912C242.495 105.412 244.595 102.427 246.041 99.1309L248.321 88.3981L248.341 88.4274ZM258.231 120.265C258.283 120.961 258.169 121.659 257.896 122.304C257.624 122.95 257.201 123.524 256.661 123.982C255.715 124.778 254.51 125.221 253.261 125.231C252.028 125.231 250.838 124.786 249.921 123.982C249.379 123.525 248.954 122.951 248.68 122.306C248.406 121.66 248.289 120.961 248.341 120.265V113.074C244.714 116.826 240.364 119.843 235.541 121.953C230.5 124.162 225.027 125.274 219.501 125.211C216.041 125.225 212.596 124.759 209.271 123.826C206.063 122.987 202.983 121.737 200.111 120.108C197.253 118.547 194.628 116.61 192.311 114.352C189.966 112.154 187.947 109.649 186.311 106.907C184.634 104.16 183.339 101.207 182.461 98.1259C181.483 94.9617 180.991 91.6737 181.001 88.3689C180.967 83.4471 182.017 78.5757 184.081 74.0846C186.018 69.6872 188.829 65.7078 192.351 62.3761C199.599 55.4367 209.367 51.5781 219.521 51.6434C222.994 51.6605 226.45 52.1197 229.801 53.0094C233.034 53.8891 236.15 55.1403 239.081 56.7366C241.919 58.3003 244.544 60.2083 246.891 62.4152C249.211 64.6652 251.252 67.1737 252.971 69.889C254.656 72.6447 255.983 75.5945 256.921 78.6704C257.806 81.8503 258.246 85.1323 258.231 88.4274V120.265Z' fill='#102A63'/>
        <path id='p' fill-rule='evenodd' clip-rule='evenodd' d='M334.901 88.4274C334.927 84.7496 334.153 81.1081 332.631 77.7435C331.16 74.4929 329.058 71.5507 326.441 69.0793C323.787 66.5892 320.681 64.6038 317.281 63.225C313.74 61.7568 309.928 61.0161 306.081 61.0492C302.273 61.019 298.5 61.7599 295.001 63.225C291.606 64.5737 288.516 66.5631 285.911 69.0793C283.3 71.5537 281.202 74.4953 279.731 77.7435C278.227 81.1177 277.451 84.7577 277.451 88.4372C277.451 92.1167 278.227 95.7568 279.731 99.1309C281.184 102.424 283.283 105.407 285.911 107.912C291.292 113.075 298.534 115.972 306.081 115.981C309.927 116.009 313.739 115.268 317.281 113.805C320.681 112.427 323.787 110.441 326.441 107.951C329.075 105.449 331.178 102.465 332.631 99.1699L334.901 88.4372V88.4274ZM344.791 88.4274C344.829 93.3654 343.789 98.2546 341.741 102.77C339.769 107.141 336.947 111.098 333.431 114.42C329.882 117.778 325.711 120.447 321.141 122.284C316.377 124.248 311.253 125.244 306.081 125.211C300.595 125.254 295.166 124.118 290.181 121.884C285.371 119.833 281.052 116.826 277.501 113.054V151.956C277.549 152.663 277.433 153.371 277.161 154.029C276.889 154.686 276.469 155.275 275.931 155.751C274.988 156.545 273.787 156.988 272.541 157C271.304 157.002 270.111 156.557 269.191 155.751C268.652 155.275 268.23 154.687 267.956 154.03C267.683 153.372 267.565 152.663 267.611 151.956V88.4274C267.577 83.5057 268.627 78.6343 270.691 74.1432C272.628 69.7458 275.439 65.7663 278.961 62.4347C286.209 55.4953 295.977 51.6367 306.131 51.702C309.585 51.7042 313.023 52.1437 316.361 53.0094C319.598 53.8789 322.714 55.1305 325.641 56.7366C328.479 58.3003 331.104 60.2083 333.451 62.4152C335.764 64.6554 337.798 67.1542 339.511 69.8598C341.183 72.6403 342.503 75.6087 343.441 78.6997L344.791 88.4274Z' fill='#102A63'/>
        <path id='e' fill-rule='evenodd' clip-rule='evenodd' d='M431.601 89.1107C431.591 89.6957 431.451 90.2716 431.191 90.7987C430.909 91.3553 430.522 91.8552 430.051 92.272C429.586 92.7069 429.053 93.066 428.471 93.3355C427.898 93.6109 427.269 93.7544 426.631 93.7551H364.431C365.115 96.9725 366.389 100.043 368.191 102.819C369.894 105.597 372.112 108.042 374.731 110.03C379.975 114.22 386.543 116.509 393.321 116.508C395.337 116.505 397.347 116.303 399.321 115.904C401.243 115.531 403.125 114.982 404.941 114.264C408.63 112.778 411.966 110.566 414.741 107.766C415.242 107.182 415.87 106.716 416.581 106.4C417.195 106.193 417.84 106.084 418.491 106.078C419.788 106.065 421.039 106.545 421.981 107.415C422.435 107.833 422.795 108.338 423.038 108.899C423.281 109.46 423.401 110.065 423.391 110.674C423.315 112.009 422.767 113.278 421.841 114.264C420.021 116.091 418.01 117.726 415.841 119.143C413.625 120.591 411.283 121.845 408.841 122.89C406.474 123.9 403.994 124.637 401.451 125.085C398.777 125.551 396.067 125.783 393.351 125.778C389.845 125.79 386.354 125.324 382.981 124.392C379.734 123.51 376.613 122.235 373.691 120.597C370.752 119.027 368.058 117.055 365.691 114.742C363.293 112.501 361.221 109.95 359.531 107.161C357.802 104.397 356.457 101.421 355.531 98.3116C354.571 95.0943 354.089 91.7591 354.101 88.4082C354.069 83.4079 355.108 78.4563 357.151 73.8702C359.082 69.4336 361.88 65.4069 365.391 62.0154C368.928 58.5878 373.111 55.861 377.711 53.9854C382.513 52.0263 387.664 51.0118 392.869 51.0001C398.074 50.9884 403.23 51.9797 408.041 53.9171C417.23 57.7791 424.582 64.8897 428.621 73.8214C430.601 78.2226 431.622 82.9772 431.621 87.7838V89.1107H431.601ZM421.501 84.4566C421.068 81.403 420.133 78.4377 418.731 75.6753C417.355 72.9854 415.538 70.5332 413.351 68.416C410.688 65.9365 407.584 63.9525 404.191 62.5618C399.191 60.5537 393.72 59.9329 388.382 60.768C383.044 61.6031 378.046 63.8616 373.941 67.294C368.716 71.6918 365.305 77.7902 364.341 84.4566H421.501Z' fill='#102A63'/>
        <g id='x'>
        <path id='Vector_18' fill-rule='evenodd' clip-rule='evenodd' d='M496.831 121.007C496.835 121.601 496.705 122.19 496.449 122.729C496.193 123.269 495.818 123.747 495.351 124.129C494.383 124.947 493.141 125.388 491.861 125.368C491.173 125.364 490.492 125.224 489.861 124.958C489.057 124.609 488.351 124.077 487.801 123.407L464.941 95.1797L442.001 123.407C441.505 124.074 440.845 124.607 440.081 124.958C439.388 125.23 438.648 125.369 437.901 125.368C436.641 125.39 435.42 124.947 434.481 124.129C434.011 123.748 433.632 123.271 433.373 122.731C433.114 122.192 432.98 121.603 432.981 121.007C433.061 119.817 433.511 118.681 434.271 117.748L458.701 87.5009L435.701 59.2055C434.917 58.3201 434.463 57.2029 434.411 56.0344C434.402 55.4074 434.532 54.7859 434.79 54.2119C435.049 53.6379 435.431 53.1248 435.911 52.7073C436.87 51.8877 438.106 51.443 439.381 51.4584C440.112 51.461 440.836 51.6035 441.511 51.8779C442.283 52.2424 442.945 52.7973 443.431 53.4879L464.951 79.8318L486.331 53.4879C486.851 52.7988 487.538 52.2458 488.331 51.8779C488.979 51.5971 489.681 51.4541 490.391 51.4584C491.665 51.4466 492.899 51.8909 493.861 52.7073C494.34 53.1248 494.722 53.6379 494.981 54.2119C495.24 54.7859 495.369 55.4074 495.361 56.0344C495.308 57.2011 494.858 58.3172 494.081 59.2055L471.081 87.5009L495.641 117.748C496.081 118.251 496.42 118.83 496.641 119.455L496.831 121.007Z' fill='#102A63'/>
        <path id='Vector_19' fill-rule='evenodd' clip-rule='evenodd' d='M441.941 123.719C441.441 124.388 440.778 124.925 440.011 125.28C439.316 125.558 438.572 125.701 437.821 125.7C436.551 125.728 435.319 125.277 434.381 124.441C433.906 124.057 433.524 123.576 433.263 123.031C433.002 122.486 432.868 121.891 432.871 121.289C432.947 120.094 433.397 118.949 434.161 118.011L458.741 87.5789L435.601 59.0298C434.812 58.1393 434.354 57.0152 434.301 55.8392C434.294 55.2063 434.426 54.5792 434.688 54.0002C434.95 53.4213 435.336 52.9038 435.821 52.4828C436.78 51.655 438.021 51.2062 439.301 51.2242C440.039 51.2267 440.769 51.3692 441.451 51.6437C442.228 52.0148 442.893 52.5762 443.381 53.2731C477.891 95.5796 444.831 54.9806 471.171 87.5789L441.941 123.719Z' fill='url(#paint45_linear_1344_63)'/>
        </g>
        <g id='normal-logo'>
        <path id='Vector_20' d='M138.363 0H18.6372C8.34417 0 0 8.39733 0 18.756V139.244C0 149.603 8.34417 158 18.6372 158H138.363C148.656 158 157 149.603 157 139.244V18.756C157 8.39733 148.656 0 138.363 0Z' fill='url(#paint46_linear_1344_63)'/>
        <path id='Vector_21' fill-rule='evenodd' clip-rule='evenodd' d='M95.3951 84.1784C98.6871 80.8451 102.485 78.3375 107.368 79.3467C109.443 79.8298 111.402 80.7238 113.131 81.9766C123.756 89.2854 140.915 101.681 141.178 101.874C136.869 91.5217 132.044 81.3935 126.724 71.5282C113.475 50.5193 95.6079 83.7809 95.3951 84.1784Z' fill='url(#paint47_linear_1344_63)'/>
        <path id='Vector_22' fill-rule='evenodd' clip-rule='evenodd' d='M79.1888 77.5217C81.2112 76.3976 83.016 74.9163 84.5167 73.1486C85.0535 72.5472 85.5296 71.9152 86.0867 71.2526C97.2286 56.9001 103.995 30.7333 126.653 71.6094C113.405 50.6005 95.5371 83.8417 95.3244 84.2596C90.5435 89.1015 86.8565 95.6662 82.6023 95.6662C76.8592 95.6662 64.6334 85.4726 54.241 80.6613C65.7476 83.597 73.9623 80.8244 79.1888 77.5217Z' fill='url(#paint48_linear_1344_63)'/>
        <path id='Vector_23' fill-rule='evenodd' clip-rule='evenodd' d='M17.1991 99.7334C24.7756 97.5826 35.4314 78.959 44.5475 78.1129C47.3532 77.8581 50.7363 78.8978 54.3423 80.5797C65.7475 83.6378 73.9622 80.8244 79.1888 77.5217C75.8766 79.2342 72.0984 79.3463 67.4492 76.7062C64.0186 74.5731 60.9423 71.9107 58.3331 68.8164C40.7694 52.8227 24.5629 86.6551 17.1991 99.7334Z' fill='url(#paint49_linear_1344_63)'/>
        </g>
        </g>
        <defs>
        <linearGradient id='paint0_linear_1344_63' x1='294.533' y1='178.89' x2='289.803' y2='143.69' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#5A328A'/>
        <stop offset='1' stop-color='#009CE1'/>
        </linearGradient>
        <linearGradient id='paint1_linear_1344_63' x1='388.403' y1='167.95' x2='383.503' y2='131.5' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#5A328A'/>
        <stop offset='1' stop-color='#009CE1'/>
        </linearGradient>
        <linearGradient id='paint2_linear_1344_63' x1='433.163' y1='160.95' x2='428.583' y2='126.87' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#5A328A'/>
        <stop offset='1' stop-color='#009CE1'/>
        </linearGradient>
        <linearGradient id='paint3_linear_1344_63' x1='309.803' y1='176.79' x2='305.123' y2='141.98' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#5A328A'/>
        <stop offset='1' stop-color='#009CE1'/>
        </linearGradient>
        <linearGradient id='paint4_linear_1344_63' x1='319.943' y1='176.85' x2='315.083' y2='140.65' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#5A328A'/>
        <stop offset='1' stop-color='#009CE1'/>
        </linearGradient>
        <linearGradient id='paint5_linear_1344_63' x1='324.883' y1='176.41' x2='319.983' y2='139.95' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#5A328A'/>
        <stop offset='1' stop-color='#009CE1'/>
        </linearGradient>
        <linearGradient id='paint6_linear_1344_63' x1='335.043' y1='172.24' x2='330.683' y2='139.81' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#5A328A'/>
        <stop offset='1' stop-color='#009CE1'/>
        </linearGradient>
        <linearGradient id='paint7_linear_1344_63' x1='345.753' y1='173.45' x2='340.883' y2='137.25' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#5A328A'/>
        <stop offset='1' stop-color='#009CE1'/>
        </linearGradient>
        <linearGradient id='paint8_linear_1344_63' x1='354.703' y1='171.71' x2='350.023' y2='136.9' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#5A328A'/>
        <stop offset='1' stop-color='#009CE1'/>
        </linearGradient>
        <linearGradient id='paint9_linear_1344_63' x1='369.883' y1='169.15' x2='365.333' y2='135.26' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#5A328A'/>
        <stop offset='1' stop-color='#009CE1'/>
        </linearGradient>
        <linearGradient id='paint10_linear_1344_63' x1='399.623' y1='166.49' x2='394.713' y2='130' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#5A328A'/>
        <stop offset='1' stop-color='#009CE1'/>
        </linearGradient>
        <linearGradient id='paint11_linear_1344_63' x1='414.703' y1='162.99' x2='410.283' y2='130.09' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#5A328A'/>
        <stop offset='1' stop-color='#009CE1'/>
        </linearGradient>
        <linearGradient id='paint12_linear_1344_63' x1='444.973' y1='159.65' x2='440.293' y2='124.84' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#5A328A'/>
        <stop offset='1' stop-color='#009CE1'/>
        </linearGradient>
        <linearGradient id='paint13_linear_1344_63' x1='456.873' y1='158.86' x2='451.973' y2='122.41' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#5A328A'/>
        <stop offset='1' stop-color='#009CE1'/>
        </linearGradient>
        <linearGradient id='paint14_linear_1344_63' x1='468.583' y1='156.66' x2='463.903' y2='121.85' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#5A328A'/>
        <stop offset='1' stop-color='#009CE1'/>
        </linearGradient>
        <linearGradient id='paint15_linear_1344_63' x1='480.053' y1='155.15' x2='475.623' y2='122.18' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#5A328A'/>
        <stop offset='1' stop-color='#009CE1'/>
        </linearGradient>
        <linearGradient id='paint16_linear_1344_63' x1='490.893' y1='153.87' x2='486.473' y2='120.98' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#5A328A'/>
        <stop offset='1' stop-color='#009CE1'/>
        </linearGradient>
        <linearGradient id='paint17_linear_1344_63' x1='4.67896e-06' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#00B1EB'/>
        <stop offset='1' stop-color='#5A328A'/>
        </linearGradient>
        <linearGradient id='paint18_linear_1344_63' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#00B1EB'/>
        <stop offset='1' stop-color='#5A328A'/>
        </linearGradient>
        <linearGradient id='paint19_linear_1344_63' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#00B1EB'/>
        <stop offset='1' stop-color='#5A328A'/>
        </linearGradient>
        <linearGradient id='paint20_linear_1344_63' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#00B1EB'/>
        <stop offset='1' stop-color='#5A328A'/>
        </linearGradient>
        <linearGradient id='paint21_linear_1344_63' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#00B1EB'/>
        <stop offset='1' stop-color='#5A328A'/>
        </linearGradient>
        <linearGradient id='paint22_linear_1344_63' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#00B1EB'/>
        <stop offset='1' stop-color='#5A328A'/>
        </linearGradient>
        <linearGradient id='paint23_linear_1344_63' x1='4.67896e-06' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#00B1EB'/>
        <stop offset='1' stop-color='#5A328A'/>
        </linearGradient>
        <linearGradient id='paint24_linear_1344_63' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#00B1EB'/>
        <stop offset='1' stop-color='#5A328A'/>
        </linearGradient>
        <linearGradient id='paint25_linear_1344_63' x1='4.67896e-06' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#00B1EB'/>
        <stop offset='1' stop-color='#5A328A'/>
        </linearGradient>
        <linearGradient id='paint26_linear_1344_63' x1='137.33' y1='83.9681' x2='100.487' y2='77.8202' gradientUnits='userSpaceOnUse'>
        <stop stop-color='white'/>
        <stop offset='1' stop-color='#B2B2B2'/>
        </linearGradient>
        <linearGradient id='paint27_linear_1344_63' x1='4.67896e-06' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#00B1EB'/>
        <stop offset='1' stop-color='#5A328A'/>
        </linearGradient>
        <linearGradient id='paint28_linear_1344_63' x1='137.33' y1='83.9683' x2='100.487' y2='77.8205' gradientUnits='userSpaceOnUse'>
        <stop stop-color='white'/>
        <stop offset='1' stop-color='#B2B2B2'/>
        </linearGradient>
        <linearGradient id='paint29_linear_1344_63' x1='108.753' y1='64.9788' x2='72.1348' y2='82.4032' gradientUnits='userSpaceOnUse'>
        <stop stop-color='white'/>
        <stop offset='1' stop-color='#C6C6C6'/>
        </linearGradient>
        <linearGradient id='paint30_linear_1344_63' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#00B1EB'/>
        <stop offset='1' stop-color='#5A328A'/>
        </linearGradient>
        <linearGradient id='paint31_linear_1344_63' x1='137.33' y1='83.9678' x2='100.487' y2='77.82' gradientUnits='userSpaceOnUse'>
        <stop stop-color='white'/>
        <stop offset='1' stop-color='#B2B2B2'/>
        </linearGradient>
        <linearGradient id='paint32_linear_1344_63' x1='108.753' y1='64.979' x2='72.1348' y2='82.4035' gradientUnits='userSpaceOnUse'>
        <stop stop-color='white'/>
        <stop offset='1' stop-color='#C6C6C6'/>
        </linearGradient>
        <linearGradient id='paint33_linear_1344_63' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#00B1EB'/>
        <stop offset='1' stop-color='#5A328A'/>
        </linearGradient>
        <linearGradient id='paint34_linear_1344_63' x1='137.33' y1='83.9681' x2='100.487' y2='77.8202' gradientUnits='userSpaceOnUse'>
        <stop stop-color='white'/>
        <stop offset='1' stop-color='#B2B2B2'/>
        </linearGradient>
        <linearGradient id='paint35_linear_1344_63' x1='108.753' y1='64.9788' x2='72.1348' y2='82.4032' gradientUnits='userSpaceOnUse'>
        <stop stop-color='white'/>
        <stop offset='1' stop-color='#C6C6C6'/>
        </linearGradient>
        <linearGradient id='paint36_linear_1344_63' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#00B1EB'/>
        <stop offset='1' stop-color='#5A328A'/>
        </linearGradient>
        <linearGradient id='paint37_linear_1344_63' x1='108.753' y1='64.9788' x2='72.1348' y2='82.4032' gradientUnits='userSpaceOnUse'>
        <stop stop-color='white'/>
        <stop offset='1' stop-color='#C6C6C6'/>
        </linearGradient>
        <linearGradient id='paint38_linear_1344_63' x1='76.9866' y1='81.2236' x2='30.7365' y2='81.5809' gradientUnits='userSpaceOnUse'>
        <stop stop-color='white'/>
        <stop offset='0.45' stop-color='#E8E8E8'/>
        <stop offset='1' stop-color='#C6C6C6'/>
        </linearGradient>
        <linearGradient id='paint39_linear_1344_63' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#00B1EB'/>
        <stop offset='1' stop-color='#5A328A'/>
        </linearGradient>
        <linearGradient id='paint40_linear_1344_63' x1='76.9866' y1='81.2236' x2='30.7365' y2='81.5809' gradientUnits='userSpaceOnUse'>
        <stop stop-color='white'/>
        <stop offset='0.45' stop-color='#E8E8E8'/>
        <stop offset='1' stop-color='#C6C6C6'/>
        </linearGradient>
        <linearGradient id='paint41_linear_1344_63' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#00B1EB'/>
        <stop offset='1' stop-color='#5A328A'/>
        </linearGradient>
        <linearGradient id='paint42_linear_1344_63' x1='76.9866' y1='81.2239' x2='30.7364' y2='81.5811' gradientUnits='userSpaceOnUse'>
        <stop stop-color='white'/>
        <stop offset='0.45' stop-color='#E8E8E8'/>
        <stop offset='1' stop-color='#C6C6C6'/>
        </linearGradient>
        <linearGradient id='paint43_linear_1344_63' x1='0' y1='78.4986' x2='157' y2='78.4986' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#00B1EB'/>
        <stop offset='1' stop-color='#5A328A'/>
        </linearGradient>
        <linearGradient id='paint44_linear_1344_63' x1='76.9866' y1='81.2236' x2='30.7365' y2='81.5809' gradientUnits='userSpaceOnUse'>
        <stop stop-color='white'/>
        <stop offset='0.45' stop-color='#E8E8E8'/>
        <stop offset='1' stop-color='#C6C6C6'/>
        </linearGradient>
        <linearGradient id='paint45_linear_1344_63' x1='466.951' y1='84.8371' x2='432.42' y2='89.4658' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#00B1EB'/>
        <stop offset='1' stop-color='#5A328A'/>
        </linearGradient>
        <linearGradient id='paint46_linear_1344_63' x1='0' y1='78.9949' x2='157' y2='78.9949' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#00B1EB'/>
        <stop offset='1' stop-color='#5A328A'/>
        </linearGradient>
        <linearGradient id='paint47_linear_1344_63' x1='137.481' y1='84.5964' x2='100.579' y2='78.4748' gradientUnits='userSpaceOnUse'>
        <stop stop-color='white'/>
        <stop offset='1' stop-color='#B2B2B2'/>
        </linearGradient>
        <linearGradient id='paint48_linear_1344_63' x1='108.867' y1='65.4627' x2='72.1243' y2='82.835' gradientUnits='userSpaceOnUse'>
        <stop stop-color='white'/>
        <stop offset='1' stop-color='#C6C6C6'/>
        </linearGradient>
        <linearGradient id='paint49_linear_1344_63' x1='77.0718' y1='81.8335' x2='30.772' y2='82.1858' gradientUnits='userSpaceOnUse'>
        <stop stop-color='white'/>
        <stop offset='0.45' stop-color='#E8E8E8'/>
        <stop offset='1' stop-color='#C6C6C6'/>
        </linearGradient>
        </defs>
        </svg> 
`;const a=document.createElement("div"),L1=`- BtnDangerDsa:
    Control: Classic/Button
    Properties:
      BorderColor: =ColorValue(dsaTokens.colorFeedbackError)
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
        dsaTokens.colorAccentSecondary
        )
      Fill: |-
        =ColorValue(
        dsaTokens.colorFeedbackErrorAccent
        )
      FocusedBorderColor: |-
        =ColorValue(
        dsaTokens.colorNeutral200
        )
      FocusedBorderThickness: '=2 '
      HoverBorderColor: |-
        =ColorValue(
        dsaTokens.colorFeedbackErrorAccent
        )
      HoverColor: |-
        =ColorValue(
        dsaTokens.colorFeedbackErrorAccent
        )
      HoverFill: =ColorValue(dsaTokens.colorFeedbackError)
      PaddingBottom: =8
      PaddingLeft: =16
      PaddingRight: =16
      PaddingTop: =8
      PressedBorderColor: |-
        =ColorValue(
        dsaTokens.colorFeedbackError
        )
      PressedColor: =ColorValue(dsaTokens.colorFeedbackErrorAccent)
      PressedFill: =ColorValue(dsaTokens.colorFeedbackError)
      RadiusBottomLeft: =200
      RadiusBottomRight: =200
      RadiusTopLeft: =200
      RadiusTopRight: =200
      Size: =dsaTokens.fontText
      X: =1089
      Y: =237
`,S1=`
// settings for nav menu
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
</section>
`;a.setAttribute("data-code",L1);a.setAttribute("data-properties",S1);a.innerHTML='<div class="BadgeDsa">Label</div>';const H1="/design-system-apex/assets/components-preview/galleryCardHzDsa.png",V=document.createElement("div"),A1=`- GalleryCardHzDsa:
    Control: Gallery@2.15.0
    Variant: VariableHeight
    Properties:
      BorderColor: =RGBA(0, 18, 107, 1)
      Items: =StarWarsCharacters
      ShowScrollbar: =false
      TemplatePadding: =8
    Children:
      - CardHzDsa_1:
          Control: GroupContainer@1.3.0
          Variant: AutoLayout
          Properties:
            DropShadow: =DropShadow.None
            Height: |
              =Title_1.Height + Text_1.Height + cardHorizontalDivisor_1.Height + 40
            LayoutDirection: =LayoutDirection.Vertical
            LayoutGap: =8
            RadiusBottomLeft: =0
            RadiusBottomRight: =0
            RadiusTopLeft: =0
            RadiusTopRight: =0
            Width: =Parent.Width - Parent.TemplatePadding * 3
            X: '=0   '
          Children:
            - TitleBadge_1:
                Control: GroupContainer@1.3.0
                Variant: AutoLayout
                Properties:
                  DropShadow: =DropShadow.None
                  FillPortions: =0
                  Height: |
                    =Title_1.Height
                  LayoutAlignItems: =LayoutAlignItems.Center
                  LayoutDirection: =LayoutDirection.Horizontal
                  PaddingRight: =2
                  RadiusBottomLeft: =0
                  RadiusBottomRight: =0
                  RadiusTopLeft: =0
                  RadiusTopRight: =0
                Children:
                  - Title_1:
                      Control: Label@2.5.1
                      Properties:
                        AutoHeight: =true
                        BorderColor: =RGBA(0, 18, 107, 1)
                        Color: =ColorValue(dsaTokens.colorAccentPrimaryHover)
                        FillPortions: =1
                        Font: =Font.'Open Sans'
                        FontWeight: =FontWeight.Semibold
                        LayoutMinWidth: =0
                        PaddingBottom: =0
                        PaddingLeft: =0
                        PaddingRight: =0
                        PaddingTop: =0
                        Size: =dsaTokens.fontText
                        Text: ="Main Title"
                        Width: =Parent.Width
                        Wrap: =false
                  - BadgeDsa_3:
                      Control: GroupContainer@1.3.0
                      Variant: AutoLayout
                      Properties:
                        AlignInContainer: =AlignInContainer.Center
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
                        FillPortions: =0
                        Height: =26
                        LayoutAlignItems: =LayoutAlignItems.Center
                        LayoutDirection: =LayoutDirection.Horizontal
                        LayoutJustifyContent: =LayoutJustifyContent.Center
                        LayoutMinHeight: =0
                        LayoutMinWidth: =180
                        RadiusBottomLeft: =8
                        RadiusBottomRight: =8
                        RadiusTopLeft: =8
                        RadiusTopRight: =8
                        Width: =actionCardHzContainer_1.Width
                        X: =583
                        Y: =344
                      Children:
                        - LabelBadge_5:
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
            - content-container_1:
                Control: GroupContainer@1.3.0
                Variant: AutoLayout
                Properties:
                  DropShadow: =DropShadow.None
                  Height: |+
                    =200


                  LayoutDirection: =LayoutDirection.Horizontal
                  LayoutMinHeight: =0
                  LayoutMinWidth: =0
                  RadiusBottomLeft: =0
                  RadiusBottomRight: =0
                  RadiusTopLeft: =0
                  RadiusTopRight: =0
                Children:
                  - content_1:
                      Control: GroupContainer@1.3.0
                      Variant: AutoLayout
                      Properties:
                        AlignInContainer: =AlignInContainer.Start
                        DropShadow: =DropShadow.None
                        Height: =Parent.Height
                        LayoutDirection: =LayoutDirection.Horizontal
                        LayoutMinHeight: =0
                        LayoutMinWidth: =0
                        RadiusBottomLeft: =0
                        RadiusBottomRight: =0
                        RadiusTopLeft: =0
                        RadiusTopRight: =0
                        Visible: =If(App.Width < 578, false, true)
                        Width: =Parent.Width
                      Children:
                        - SubTitle_1:
                            Control: Label@2.5.1
                            Properties:
                              AlignInContainer: =AlignInContainer.Start
                              BorderColor: =RGBA(0, 18, 107, 1)
                              FillPortions: =1
                              Font: =Font.'Open Sans'
                              Height: =Parent.Height
                              LayoutMinWidth: =0
                              PaddingBottom: =0
                              PaddingLeft: =0
                              PaddingRight: =8
                              PaddingTop: =0
                              Size: =dsaTokens.fontLabel
                              Text: ="Sub Title"
                              VerticalAlign: =VerticalAlign.Top
                              Width: =Parent.Width
                        - cardDivisor_1:
                            Control: Rectangle@2.3.0
                            Properties:
                              AlignInContainer: =AlignInContainer.Center
                              BorderColor: =RGBA(0, 18, 107, 1)
                              DisplayMode: =DisplayMode.View
                              Fill: =RGBA(56, 96, 178, 1)
                              Height: =16
                              Width: '=2   '
                        - Text_1:
                            Control: Label@2.5.1
                            Properties:
                              AlignInContainer: =AlignInContainer.Start
                              AutoHeight: =true
                              BorderColor: =RGBA(0, 18, 107, 1)
                              FillPortions: =1
                              Font: =Font.'Open Sans'
                              Height: =Parent.Height
                              LayoutMinWidth: =0
                              PaddingBottom: =0
                              PaddingLeft: =16
                              PaddingRight: =8
                              PaddingTop: =0
                              Size: =dsaTokens.fontSmallLabel
                              Text: ="Text description for your long textText description for your long textText description for your long textText description for your long text"
                              Width: =Parent.Width
                  - action_1:
                      Control: GroupContainer@1.3.0
                      Variant: AutoLayout
                      Properties:
                        DropShadow: =DropShadow.None
                        FillPortions: =0
                        Height: =Parent.Height
                        LayoutAlignItems: =LayoutAlignItems.End
                        LayoutDirection: =LayoutDirection.Horizontal
                        LayoutJustifyContent: =LayoutJustifyContent.End
                        LayoutMinHeight: =0
                        LayoutMinWidth: =0
                        RadiusBottomLeft: =0
                        RadiusBottomRight: =0
                        RadiusTopLeft: =0
                        RadiusTopRight: =0
                        Width: =BtnIcnPriDsa_4.Width + BtnIcnSecDsa_4.Width + BtnIcnTerDsa_4.Width + actionCardHzContainer_1.LayoutGap * 3
                      Children:
                        - actionCardHzContainer_1:
                            Control: GroupContainer@1.3.0
                            Variant: AutoLayout
                            Properties:
                              AlignInContainer: =AlignInContainer.Center
                              DropShadow: =DropShadow.None
                              FillPortions: =0
                              Height: =40
                              LayoutAlignItems: =LayoutAlignItems.Center
                              LayoutDirection: =LayoutDirection.Horizontal
                              LayoutGap: =16
                              LayoutJustifyContent: =LayoutJustifyContent.End
                              LayoutMinHeight: =0
                              LayoutMinWidth: =0
                              RadiusBottomLeft: =0
                              RadiusBottomRight: =0
                              RadiusTopLeft: =0
                              RadiusTopRight: =0
                              Width: =Parent.Width
                              X: =300
                              Y: =468
                            Children:
                              - BtnIcnPriDsa_4:
                                  Control: GroupContainer@1.3.0
                                  Variant: ManualLayout
                                  Properties:
                                    AlignInContainer: =AlignInContainer.Start
                                    DropShadow: =DropShadow.None
                                    FillPortions: =0
                                    Height: =40
                                    RadiusBottomLeft: =200
                                    RadiusBottomRight: =200
                                    RadiusTopLeft: =200
                                    RadiusTopRight: =200
                                    Width: =40
                                    X: =162
                                    Y: =298
                                  Children:
                                    - BtnIcnPri_4:
                                        Control: Classic/Button@2.2.0
                                        Properties:
                                          BorderColor: |-
                                            =ColorValue(
                                            dsaTokens.colorAccentPrimary)
                                          BorderThickness: =0
                                          Color: |-
                                            =ColorValue(
                                            dsaTokens.colorContrastDark
                                            )
                                          DisabledBorderColor: =RGBA(166, 166, 166, 1)
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
                                            dsaTokens.colorAccentPrimary
                                            )
                                          Font: =Font.'Open Sans'
                                          Height: =Parent.Height
                                          HoverBorderColor: |-
                                            =ColorValue(
                                            dsaTokens.colorAccentPrimaryHover
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
                                          Text: =
                                          Tooltip: =
                                          Width: =Parent.Width
                                          Y: '=0   '
                                    - iconPriBtn_4:
                                        Control: Classic/Icon@2.5.0
                                        Properties:
                                          BorderColor: =RGBA(0, 18, 107, 1)
                                          Color: |-
                                            =If(
                                                BtnIcnPri_4.DisplayMode = DisplayMode.Disabled,
                                                ColorValue(dsaTokens.colorNeutral300),
                                                ColorValue(dsaTokens.colorContrastDark)
                                            )
                                          FocusedBorderThickness: =0
                                          Height: =18
                                          HoverColor: |-
                                            =ColorValue(
                                                dsaTokens.colorContrastDark
                                            )
                                          Icon: =Icon.Search
                                          Width: =18
                                          X: =Parent.Width/2 - Self.Width/2
                                          Y: =BtnIcnPri_4.Height /2 - Self.Height /2
                              - BtnIcnSecDsa_4:
                                  Control: GroupContainer@1.3.0
                                  Variant: ManualLayout
                                  Properties:
                                    AlignInContainer: =AlignInContainer.Start
                                    DropShadow: =DropShadow.None
                                    FillPortions: =0
                                    Height: =40
                                    RadiusBottomLeft: =200
                                    RadiusBottomRight: =200
                                    RadiusTopLeft: =200
                                    RadiusTopRight: =200
                                    Width: =40
                                    X: =208
                                    Y: =298
                                  Children:
                                    - BtnIcnSec_4:
                                        Control: Classic/Button@2.2.0
                                        Properties:
                                          BorderColor: |-
                                            =ColorValue(
                                              dsaTokens.colorAccentPrimary)
                                          BorderThickness: =0
                                          Color: |-
                                            =ColorValue(
                                            dsaTokens.colorContrastLight
                                            )
                                          DisabledBorderColor: =RGBA(166, 166, 166, 1)
                                          DisabledColor: |-
                                            =ColorValue(
                                            dsaTokens.colorNeutral200
                                            )
                                          DisabledFill: |-
                                            =ColorValue(
                                            dsaTokens.colorNeutral400
                                            )
                                          Fill: |-
                                            =ColorValue(
                                            dsaTokens.colorAccentSecondary
                                            )
                                          Font: =Font.'Open Sans'
                                          Height: =Parent.Height
                                          HoverBorderColor: |-
                                            =ColorValue(
                                            dsaTokens.colorAccentSecondaryHover
                                            )
                                          HoverColor: |-
                                            =ColorValue(
                                            dsaTokens.colorContrastDark
                                            )
                                          HoverFill: |-
                                            =ColorValue(
                                            dsaTokens.colorAccentSecondaryHover
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
                                            dsaTokens.colorAccentSecondary
                                            )
                                          RadiusBottomLeft: =200
                                          RadiusBottomRight: =200
                                          RadiusTopLeft: =200
                                          RadiusTopRight: =200
                                          Size: =16
                                          Text: =
                                          Width: =Parent.Width
                                          Y: '=0   '
                                    - IconSecBtn_4:
                                        Control: Classic/Icon@2.5.0
                                        Properties:
                                          BorderColor: =RGBA(0, 18, 107, 1)
                                          Color: |-
                                            =If(
                                                BtnIcnSec_4.DisplayMode = DisplayMode.Disabled,
                                                ColorValue(dsaTokens.colorNeutral300),
                                                ColorValue(dsaTokens.colorContrastLight)
                                            )
                                          FocusedBorderThickness: =0
                                          Height: =18
                                          HoverColor: |-
                                            =ColorValue(
                                                dsaTokens.colorNeutral100
                                            )
                                          Icon: =Icon.Edit
                                          PressedColor: =ColorFade(Self.Color, -40%)
                                          Width: =18
                                          X: =Parent.Width/2 - Self.Width/2
                                          Y: =BtnIcnSec_4.Height /2 - Self.Height /2
                              - BtnIcnTerDsa_4:
                                  Control: GroupContainer@1.3.0
                                  Variant: ManualLayout
                                  Properties:
                                    AlignInContainer: =AlignInContainer.Start
                                    DropShadow: =DropShadow.None
                                    FillPortions: =0
                                    Height: =40
                                    RadiusBottomLeft: =200
                                    RadiusBottomRight: =200
                                    RadiusTopLeft: =200
                                    RadiusTopRight: =200
                                    Width: =40
                                    X: =417
                                    Y: =298
                                  Children:
                                    - BtnTerSec_4:
                                        Control: Classic/Button@2.2.0
                                        Properties:
                                          BorderColor: |-
                                            =ColorValue(
                                            dsaTokens.colorAccentPrimary)
                                          BorderThickness: =0
                                          Color: |-
                                            =ColorValue(
                                            dsaTokens.colorAccentPrimary
                                            )
                                          DisabledBorderColor: =RGBA(166, 166, 166, 1)
                                          DisabledColor: |-
                                            =ColorValue(
                                            dsaTokens.colorNeutral200
                                            )
                                          DisabledFill: |-
                                            =ColorValue(
                                               "#ffffff00"
                                            )
                                          Fill: |-
                                            =ColorValue(
                                               "#ffffff00"
                                            )
                                          Font: =Font.'Open Sans'
                                          Height: =Parent.Height
                                          HoverBorderColor: |-
                                            =ColorValue(
                                            dsaTokens.colorAccentSecondaryHover
                                            )
                                          HoverColor: |-
                                            =ColorValue(
                                            dsaTokens.colorContrastDark
                                            )
                                          HoverFill: |-
                                            =ColorValue(
                                               "#ffffff00"
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
                                               "#ffffff00"
                                            )
                                          RadiusBottomLeft: =200
                                          RadiusBottomRight: =200
                                          RadiusTopLeft: =200
                                          RadiusTopRight: =200
                                          Size: =16
                                          Text: =
                                          Width: =Parent.Width
                                          Y: '=0   '
                                    - IconTerBtn_4:
                                        Control: Classic/Icon@2.5.0
                                        Properties:
                                          BorderColor: =RGBA(0, 18, 107, 1)
                                          Color: |-
                                            =If(
                                                BtnTerSec_4.DisplayMode = DisplayMode.Disabled,
                                                ColorValue(dsaTokens.colorNeutral300),
                                                ColorValue(dsaTokens.colorAccentPrimary)
                                            )
                                          FocusedBorderThickness: =0
                                          Height: =18
                                          HoverColor: |-
                                            =ColorValue(
                                                dsaTokens.colorAccentPrimary
                                            )
                                          HoverFill: |-
                                            =   ColorValue(
                                                "#ffffff00"
                                               )
                                          Icon: =Icon.Trash
                                          PressedColor: |-
                                            =ColorValue(
                                            dsaTokens.colorAccentPrimaryHover
                                            )
                                          Width: =18
                                          X: =Parent.Width/2 - Self.Width/2
                                          Y: =BtnTerSec_4.Height /2 - Self.Height /2
            - cardHorizontalDivisor_1:
                Control: Rectangle@2.3.0
                Properties:
                  BorderColor: =RGBA(0, 18, 107, 1)
                  Fill: =ColorValue(dsaTokens.colorNeutral400)
                  Height: '=2   '
                  Width: =Parent.Width

`;V.setAttribute("data-code",A1);V.innerHTML=`
<img style="width: 100%" src=${H1} alt="Galeria com cards horozintal design system">
`;const k1="/design-system-apex/assets/components-preview/galleryCardSmallDsa.png",L=document.createElement("div"),R1=`- GalleryCardSmDsa:
    Control: Gallery@2.15.0
    Variant: Vertical
    Properties:
      BorderColor: =RGBA(0, 18, 107, 1)
      Items: =StarWarsCharacters
      LayoutMinHeight: =0
      LayoutMinWidth: =0
      ShowScrollbar: =false
      TemplatePadding: =0
      TemplateSize: =CardSmDsa_1.Height + 24
      WrapCount: |-
        =Switch(
            true,
            App.Width < 768, 1,
            App.Width < 1280, 3,     
            App.Width < 1600, 5,
            App.Width > 1600, 8  
        )
    Children:
      - CardSmDsa_1:
          Control: GroupContainer@1.3.0
          Variant: AutoLayout
          Properties:
            DropShadow: =DropShadow.None
            Fill: =ColorValue(dsaTokens.colorBgPrimary)
            Height: = cardSmtext_1.Height + cardSmAction_1.Height + cardSmTtitleAccent_1.Height + Self.PaddingBottom + Self.PaddingTop + Self.LayoutGap
            LayoutDirection: =LayoutDirection.Vertical
            LayoutGap: =8
            PaddingBottom: =16
            PaddingLeft: =16
            PaddingRight: =16
            PaddingTop: =16
            RadiusBottomLeft: =8
            RadiusBottomRight: =8
            RadiusTopLeft: =8
            RadiusTopRight: =8
            Width: |
              =If(App.Width < 768, Parent.Width, 200)
            X: '=0 '
          Children:
            - cardSmTtitleAccent_1:
                Control: Label@2.5.1
                Properties:
                  AutoHeight: =true
                  BorderColor: =RGBA(0, 18, 107, 1)
                  Color: =ColorValue(dsaTokens.colorNeutral100)
                  Font: =Font.'Open Sans'
                  FontWeight: =FontWeight.Semibold
                  PaddingBottom: =0
                  PaddingLeft: =0
                  PaddingRight: =0
                  PaddingTop: =0
                  Size: =dsaTokens.fontText
                  Text: ="Title"
                  Width: =Parent.Width - 32
            - cardSmtext_1:
                Control: Label@2.5.1
                Properties:
                  AutoHeight: =true
                  BorderColor: =RGBA(0, 18, 107, 1)
                  Color: =ColorValue(dsaTokens.colorNeutral200)
                  Font: =Font.'Open Sans'
                  PaddingBottom: =0
                  PaddingLeft: =0
                  PaddingRight: =0
                  PaddingTop: =0
                  Size: =dsaTokens.fontLabel
                  Text: |-
                    ="18/10/24
                    "
                  Width: =Parent.Width - 32
            - cardSmAction_1:
                Control: GroupContainer@1.3.0
                Variant: AutoLayout
                Properties:
                  DropShadow: =DropShadow.None
                  FillPortions: =0
                  Height: |
                    =40
                  LayoutAlignItems: =LayoutAlignItems.Center
                  LayoutDirection: =LayoutDirection.Horizontal
                  LayoutJustifyContent: =LayoutJustifyContent.SpaceBetween
                  LayoutMinHeight: =0
                  LayoutMinWidth: =0
                  RadiusBottomLeft: =0
                  RadiusBottomRight: =0
                  RadiusTopLeft: =0
                  RadiusTopRight: =0
                  Width: =Parent.Width
                  X: =300
                  Y: =468
                Children:
                  - BtnIcnPriDsa_5:
                      Control: GroupContainer@1.3.0
                      Variant: ManualLayout
                      Properties:
                        AlignInContainer: =AlignInContainer.Center
                        DropShadow: =DropShadow.None
                        FillPortions: =0
                        Height: =40
                        RadiusBottomLeft: =200
                        RadiusBottomRight: =200
                        RadiusTopLeft: =200
                        RadiusTopRight: =200
                        Width: =40
                        X: =644
                        Y: =293
                      Children:
                        - BtnIcnPri_5:
                            Control: Classic/Button@2.2.0
                            Properties:
                              BorderColor: |-
                                =ColorValue(
                                dsaTokens.colorAccentPrimary)
                              BorderThickness: =0
                              Color: |-
                                =ColorValue(
                                dsaTokens.colorContrastDark
                                )
                              DisabledBorderColor: =RGBA(166, 166, 166, 1)
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
                                dsaTokens.colorAccentPrimary
                                )
                              Font: =Font.'Open Sans'
                              Height: =Parent.Height
                              HoverBorderColor: |-
                                =ColorValue(
                                dsaTokens.colorAccentPrimaryHover
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
                              Text: =
                              Tooltip: =
                              Width: =Parent.Width
                              Y: '=0   '
                        - iconPriBtn_5:
                            Control: Classic/Icon@2.5.0
                            Properties:
                              BorderColor: =RGBA(0, 18, 107, 1)
                              Color: |-
                                =If(
                                    BtnIcnPri_5.DisplayMode = DisplayMode.Disabled,
                                    ColorValue(dsaTokens.colorNeutral300),
                                    ColorValue(dsaTokens.colorContrastDark)
                                )
                              FocusedBorderThickness: =0
                              Height: =18
                              HoverColor: |-
                                =ColorValue(
                                    dsaTokens.colorContrastDark
                                )
                              Icon: =Icon.Add
                              Width: =18
                              X: =Parent.Width/2 - Self.Width/2
                              Y: =BtnIcnPri_5.Height /2 - Self.Height /2
                  - BtnIcnSecDsa_5:
                      Control: GroupContainer@1.3.0
                      Variant: ManualLayout
                      Properties:
                        AlignInContainer: =AlignInContainer.Center
                        DropShadow: =DropShadow.None
                        FillPortions: =0
                        Height: =40
                        RadiusBottomLeft: =200
                        RadiusBottomRight: =200
                        RadiusTopLeft: =200
                        RadiusTopRight: =200
                        Width: =40
                        X: =852
                        Y: =293
                      Children:
                        - BtnIcnSec_5:
                            Control: Classic/Button@2.2.0
                            Properties:
                              BorderColor: |-
                                =ColorValue(
                                  dsaTokens.colorAccentPrimary)
                              BorderThickness: =0
                              Color: |-
                                =ColorValue(
                                dsaTokens.colorContrastLight
                                )
                              DisabledBorderColor: =RGBA(166, 166, 166, 1)
                              DisabledColor: |-
                                =ColorValue(
                                dsaTokens.colorNeutral200
                                )
                              DisabledFill: |-
                                =ColorValue(
                                dsaTokens.colorNeutral400
                                )
                              Fill: |-
                                =ColorValue(
                                dsaTokens.colorAccentSecondary
                                )
                              Font: =Font.'Open Sans'
                              Height: =Parent.Height
                              HoverBorderColor: |-
                                =ColorValue(
                                dsaTokens.colorAccentSecondaryHover
                                )
                              HoverColor: |-
                                =ColorValue(
                                dsaTokens.colorContrastDark
                                )
                              HoverFill: |-
                                =ColorValue(
                                dsaTokens.colorAccentSecondaryHover
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
                                dsaTokens.colorAccentSecondary
                                )
                              RadiusBottomLeft: =200
                              RadiusBottomRight: =200
                              RadiusTopLeft: =200
                              RadiusTopRight: =200
                              Size: =16
                              Text: =
                              Width: =Parent.Width
                              Y: '=0   '
                        - IconSecBtn_5:
                            Control: Classic/Icon@2.5.0
                            Properties:
                              BorderColor: =RGBA(0, 18, 107, 1)
                              Color: |-
                                =If(
                                    BtnIcnSec_5.DisplayMode = DisplayMode.Disabled,
                                    ColorValue(dsaTokens.colorNeutral300),
                                    ColorValue(dsaTokens.colorContrastLight)
                                )
                              FocusedBorderThickness: =0
                              Height: =18
                              HoverColor: |-
                                =ColorValue(
                                    dsaTokens.colorNeutral100
                                )
                              Icon: =Icon.Search
                              PressedColor: =ColorFade(Self.Color, -40%)
                              Width: =18
                              X: =Parent.Width/2 - Self.Width/2
                              Y: =BtnIcnSec_5.Height /2 - Self.Height /2
                  - BtnIcnTerDsa_5:
                      Control: GroupContainer@1.3.0
                      Variant: ManualLayout
                      Properties:
                        AlignInContainer: =AlignInContainer.Center
                        DropShadow: =DropShadow.None
                        FillPortions: =0
                        Height: =40
                        RadiusBottomLeft: =200
                        RadiusBottomRight: =200
                        RadiusTopLeft: =200
                        RadiusTopRight: =200
                        Width: =40
                        X: =988
                        Y: =293
                      Children:
                        - BtnTerSec_5:
                            Control: Classic/Button@2.2.0
                            Properties:
                              BorderColor: |-
                                =ColorValue(
                                dsaTokens.colorAccentPrimary)
                              BorderThickness: =0
                              Color: |-
                                =ColorValue(
                                dsaTokens.colorAccentPrimary
                                )
                              DisabledBorderColor: =RGBA(166, 166, 166, 1)
                              DisabledColor: |-
                                =ColorValue(
                                dsaTokens.colorNeutral200
                                )
                              DisabledFill: |-
                                =ColorValue(
                                   "#ffffff00"
                                )
                              Fill: |-
                                =ColorValue(
                                   "#ffffff00"
                                )
                              Font: =Font.'Open Sans'
                              Height: =Parent.Height
                              HoverBorderColor: |-
                                =ColorValue(
                                dsaTokens.colorAccentSecondaryHover
                                )
                              HoverColor: |-
                                =ColorValue(
                                dsaTokens.colorContrastDark
                                )
                              HoverFill: |-
                                =ColorValue(
                                   "#ffffff00"
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
                                   "#ffffff00"
                                )
                              RadiusBottomLeft: =200
                              RadiusBottomRight: =200
                              RadiusTopLeft: =200
                              RadiusTopRight: =200
                              Size: =16
                              Text: =
                              Width: =Parent.Width
                              Y: '=0   '
                        - IconTerBtn_5:
                            Control: Classic/Icon@2.5.0
                            Properties:
                              BorderColor: =RGBA(0, 18, 107, 1)
                              Color: |-
                                =If(
                                    BtnTerSec_5.DisplayMode = DisplayMode.Disabled,
                                    ColorValue(dsaTokens.colorNeutral300),
                                    ColorValue(dsaTokens.colorAccentPrimary)
                                )
                              FocusedBorderThickness: =0
                              Height: =18
                              HoverColor: |-
                                =ColorValue(
                                    dsaTokens.colorAccentPrimary
                                )
                              HoverFill: |-
                                =   ColorValue(
                                    "#ffffff00"
                                   )
                              Icon: =Icon.Trash
                              PressedColor: |-
                                =ColorValue(
                                dsaTokens.colorAccentPrimaryHover
                                )
                              Width: =18
                              X: =Parent.Width/2 - Self.Width/2
                              Y: =BtnTerSec_5.Height /2 - Self.Height /2

`;L.setAttribute("data-code",R1);L.innerHTML=`
<img style="width: 100%" src=${k1} alt="Galeria com cards horozintal design system">
`;const v1="/design-system-apex/assets/components-preview/galleryCardBtnDsa.png",S=document.createElement("div"),D1=`---
- GalleryCardSmBtnDsa:
    Control: Gallery@2.15.0
    Variant: Vertical
    Properties:
      BorderColor: =RGBA(0, 18, 107, 1)
      Items: =StarWarsCharacters
      LayoutMinHeight: =0
      LayoutMinWidth: =0
      ShowScrollbar: =false
      TemplatePadding: =0
      TemplateSize: =CardSmBtnDsa_1.Height + 24
      WrapCount: |-
        =Switch(
            true,
            App.Width < 768, 1,
            App.Width < 1280, 2,     
            App.Width < 1600, 4,
            App.Width > 1600, 6  
        )
    Children:
      - CardSmBtnDsa_1:
          Control: GroupContainer@1.3.0
          Variant: AutoLayout
          Properties:
            DropShadow: =DropShadow.None
            Fill: =ColorValue(dsaTokens.colorBgPrimary)
            Height: = cardSmBtntext_1.Height + cardBtnAction_1.Height +
              cardSmBtnTtitleAccent_1.Height + Self.PaddingBottom +
              Self.PaddingTop + Self.LayoutGap
            LayoutDirection: =LayoutDirection.Vertical
            LayoutGap: =8
            PaddingBottom: =16
            PaddingLeft: =16
            PaddingRight: =16
            PaddingTop: =16
            RadiusBottomLeft: =8
            RadiusBottomRight: =8
            RadiusTopLeft: =8
            RadiusTopRight: =8
            Width: =If(App.Width < 768, Parent.Width, 256)
          Children:
            - cardSmBtnTtitleAccent_1:
                Control: Label@2.5.1
                Properties:
                  AutoHeight: =true
                  BorderColor: =RGBA(0, 18, 107, 1)
                  Color: =ColorValue(dsaTokens.colorNeutral100)
                  Font: =Font.'Open Sans'
                  FontWeight: =FontWeight.Semibold
                  PaddingBottom: =0
                  PaddingLeft: =0
                  PaddingRight: =0
                  PaddingTop: =0
                  Size: =dsaTokens.fontText
                  Text: ="Title"
                  Width: =Parent.Width - 32
            - cardSmBtntext_1:
                Control: Label@2.5.1
                Properties:
                  AutoHeight: =true
                  BorderColor: =RGBA(0, 18, 107, 1)
                  Color: =ColorValue(dsaTokens.colorNeutral200)
                  Font: =Font.'Open Sans'
                  PaddingBottom: =0
                  PaddingLeft: =0
                  PaddingRight: =0
                  PaddingTop: =0
                  Size: =dsaTokens.fontLabel
                  Text: ="Text description for your long text for your long text for your long
                    text"
                  Width: =Parent.Width - 32
            - cardBtnAction_1:
                Control: GroupContainer@1.3.0
                Variant: AutoLayout
                Properties:
                  DropShadow: =DropShadow.None
                  FillPortions: =0
                  Height: |
                    =40
                  LayoutAlignItems: =LayoutAlignItems.Center
                  LayoutDirection: =LayoutDirection.Horizontal
                  LayoutJustifyContent: =LayoutJustifyContent.End
                  LayoutMinHeight: =0
                  LayoutMinWidth: =0
                  RadiusBottomLeft: =0
                  RadiusBottomRight: =0
                  RadiusTopLeft: =0
                  RadiusTopRight: =0
                  Width: =Parent.Width
                  X: =300
                  Y: =468
                Children:
                  - BtnIconRightDsa_2:
                      Control: GroupContainer@1.3.0
                      Variant: ManualLayout
                      Properties:
                        DropShadow: =DropShadow.None
                        FillPortions: =0
                        Height: =40
                        LayoutMinHeight: =0
                        RadiusBottomLeft: =200
                        RadiusBottomRight: =200
                        RadiusTopLeft: =200
                        RadiusTopRight: =200
                        Width: =160
                        X: =942
                        Y: =150
                      Children:
                        - ButtonIconRight_2:
                            Control: Classic/Button@2.2.0
                            Properties:
                              BorderColor: |-
                                =ColorValue(
                                dsaTokens.colorAccentPrimary
                                )
                              Color: |-
                                =ColorValue(
                                dsaTokens.colorContrastDark
                                )
                              DisabledBorderColor: =RGBA(166, 166, 166, 1)
                              Fill: |-
                                =ColorValue(
                                dsaTokens.colorAccentPrimary
                                )
                              Font: =Font.'Open Sans'
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
                              OnSelect: =
                              PaddingBottom: =8
                              PaddingLeft: =8
                              PaddingRight: =8
                              PaddingTop: =8
                              PressedBorderColor: |-
                                =ColorValue(
                                dsaTokens.colorAccentSecondaryHover
                                )
                              PressedColor: =ColorValue(dsaTokens.colorContrastDark)
                              PressedFill: |-
                                =ColorValue(
                                dsaTokens.colorAccentPrimaryHover
                                )
                              RadiusBottomLeft: =200
                              RadiusBottomRight: =200
                              RadiusTopLeft: =200
                              RadiusTopRight: =200
                              Size: =16
                              Text: ="Explore"
                              Width: =Parent.Width
                              Y: "=0   "
                        - IconRightBtn_2:
                            Control: Classic/Icon@2.5.0
                            Properties:
                              BorderColor: =RGBA(0, 18, 107, 1)
                              Color: >-
                                =If(
                                    ButtonIconRight_2.DisplayMode = DisplayMode.Disabled,
                                    ColorValue(dsaTokens.colorNeutral300),
                                    ColorValue(dsaTokens.colorContrastDark)
                                )
                              Height: =ButtonIconRight_2.Size
                              Icon: =Icon.Search
                              Width: =ButtonIconRight_2.Size
                              X: = ButtonIconRight_2.Width - Self.Width - 16
                              Y: =ButtonIconRight_2.Height /2 - Self.Height /2
`;S.setAttribute("data-code",D1);S.innerHTML=`
<img style="width: 100%" src=${v1} alt="Galeria com cards horozintal design system">
`;const x1="/design-system-apex/assets/components-preview/galleryCardThumbDsa.png",H=document.createElement("div"),b1=`- GalleryCardThumbDsa:
    Control: Gallery@2.15.0
    Variant: Vertical
    Properties:
      BorderColor: =RGBA(0, 18, 107, 1)
      Height: =Parent.Height
      Items: =StarWarsCharacters
      LayoutMinHeight: =0
      LayoutMinWidth: =0
      ShowScrollbar: =false
      TemplatePadding: =0
      TemplateSize: =CardThumbDsa_1.Height + 24
      Width: =Parent.Width
      WrapCount: |-
        =Switch(
            true,
            App.Width < 768, 1,
            App.Width < 1280, 2,     
            App.Width < 1600, 5,
            App.Width > 1600, 8  
        )
    Children:
      - CardThumbDsa_1:
          Control: GroupContainer@1.3.0
          Variant: AutoLayout
          Properties:
            DropShadow: =DropShadow.None
            Fill: =ColorValue(dsaTokens.colorBgPrimary)
            Height: =dsaTokens.Height340
            LayoutDirection: =LayoutDirection.Vertical
            RadiusBottomLeft: =16
            RadiusBottomRight: =16
            RadiusTopLeft: =16
            RadiusTopRight: =16
            Width: =If(App.Width < 768, Parent.Width, 240)
            X: '=0   '
          Children:
            - thumbContainer_1:
                Control: GroupContainer@1.3.0
                Variant: ManualLayout
                Properties:
                  AlignInContainer: =AlignInContainer.SetByContainer
                  DropShadow: =DropShadow.Regular
                  FillPortions: =0
                  Height: '=200 '
                  LayoutMinHeight: =0
                  LayoutMinWidth: =0
                  RadiusBottomLeft: =16
                  RadiusBottomRight: =16
                  RadiusTopLeft: =16
                  RadiusTopRight: =16
                  Width: =Parent.Width
                Children:
                  - thumb_1:
                      Control: Image@2.2.3
                      Properties:
                        BorderColor: =RGBA(0, 18, 107, 1)
                        DisplayMode: =DisplayMode.View
                        Height: =Parent.Height
                        ImagePosition: =ImagePosition.Fill
                        Width: =Parent.Width
            - cardThumbContent_1:
                Control: GroupContainer@1.3.0
                Variant: AutoLayout
                Properties:
                  AlignInContainer: =AlignInContainer.SetByContainer
                  DropShadow: =DropShadow.None
                  Height: '=0   '
                  LayoutDirection: =LayoutDirection.Vertical
                  LayoutGap: =4
                  LayoutMinHeight: =0
                  LayoutMinWidth: =0
                  PaddingBottom: =8
                  PaddingLeft: =16
                  PaddingRight: =16
                  PaddingTop: =8
                  RadiusBottomLeft: =0
                  RadiusBottomRight: =0
                  RadiusTopLeft: =0
                  RadiusTopRight: =0
                  Width: =Parent.Width
                  X: =300
                  Y: =468
                Children:
                  - cardThumbTitle_1:
                      Control: Label@2.5.1
                      Properties:
                        AutoHeight: =true
                        BorderColor: =RGBA(0, 18, 107, 1)
                        Color: =ColorValue(dsaTokens.colorNeutral100)
                        Font: =Font.'Open Sans'
                        FontWeight: =FontWeight.Semibold
                        PaddingBottom: =0
                        PaddingLeft: =0
                        PaddingRight: =0
                        PaddingTop: =0
                        Size: =dsaTokens.fontText
                        Text: ="Title"
                        Width: =Parent.Width - 32
                  - cardThumbText_1:
                      Control: Label@2.5.1
                      Properties:
                        AutoHeight: =true
                        BorderColor: =RGBA(0, 18, 107, 1)
                        Color: =ColorValue(dsaTokens.colorNeutral200)
                        Font: =Font.'Open Sans'
                        PaddingBottom: =0
                        PaddingLeft: =0
                        PaddingRight: =0
                        PaddingTop: =0
                        Size: =dsaTokens.fontLabel
                        Text: |-
                          ="Text description for your long text.
                          "
                        Width: =Parent.Width - 32
                  - BtnTerDsa_2:
                      Control: Classic/Button@2.2.0
                      Properties:
                        Align: =Align.Right
                        AlignInContainer: =AlignInContainer.End
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
                        Size: =16
                        Text: ="More ..."
                        Underline: =true
                        X: =519
                        Y: =150

`;H.setAttribute("data-code",b1);H.innerHTML=`
<img style="width: 100%" src=${x1} alt="Galeria com cards horozintal design system">
`;const w1={TokensDsa:T,BtnPriDsa:b,BtnSecDsa:w,BtnTerDsa:F,BtnIcnLtDsa:G,BtnIcnRtDsa:l,BtnIcnPriDsa:I,BtnIcnSecDsa:M,BtnIcnTerDsa:W,BtnIcnDangerDsa:d,BtnDangerDsa:U,InputTextDsa:s,InputComboBoxDsa:C,InputCheckBoxHzDsa:c,InputDropdownDsa:p,InputDataPickerDsa:u,InputRadioHzDsa:f,InputToggleDsa:h,BadgeDsa:a,CardHzDsa:g,CardSmDsa:y,CardThumbDsa:_,cardSmBtnDsa:B,ModalDsa:r,ToastDsa:o,PageTemplateDsa:t,LoaderApex:m,SplashApex:P,GalleryCardHzDsa:V,GalleryCardSmDsa:L,GalleryCardSmBtnDsa:S,GalleryCardThumbDsa:H},F1=document.querySelector(".copy-components"),R=document.querySelectorAll(".component-selected");for(let i=0;i<R.length;i++){const A=R[i];A.addEventListener("click",()=>{F1.classList.add("d-block");const v=A.dataset.component,e=w1[v],k=document.querySelector(".output-component");k.innerHTML="",k.appendChild(e);const n=document.querySelector(".properties");n.classList.remove("showProperties"),e.dataset.properties&&(n.classList.add("showProperties"),n.innerHTML=e.dataset.properties);const D=document.querySelector(".get-code"),x=e.dataset.code;D.addEventListener("click",()=>{navigator.clipboard.writeText(x)})})}
