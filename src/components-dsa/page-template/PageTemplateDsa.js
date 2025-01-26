  import "./pageTemplateDsa.css"
  import preview from "/assets/components-preview/pageTemplate.png"

  const PageTemplateDsa = document.createElement("div")

  const codeSnippet = `- mainContainer:
    Control: GroupContainer
    Variant: verticalAutoLayoutContainer
    Properties:
      DropShadow: =DropShadow.None
      Height: =Parent.Height
      LayoutDirection: =LayoutDirection.Vertical
      LayoutMode: =LayoutMode.Auto
      RadiusBottomLeft: =0
      RadiusBottomRight: =0
      RadiusTopLeft: =0
      RadiusTopRight: =0
      Width: =Parent.Width
    Children:
    - HeaderDsa:
        Control: GroupContainer
        Variant: manualLayoutContainer
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
            Control: GroupContainer
            Variant: manualLayoutContainer
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
                Control: GroupContainer
                Variant: horizontalAutoLayoutContainer
                Properties:
                  DropShadow: =DropShadow.None
                  Height: =Parent.Height
                  LayoutMode: =LayoutMode.Auto
                  PaddingLeft: =
                  PaddingRight: '=8   '
                  Width: =Parent.Width
                  Y: |
                    =0
                Children:
                - logoContainer_1:
                    Control: GroupContainer
                    Variant: horizontalAutoLayoutContainer
                    Properties:
                      AlignInContainer: =AlignInContainer.SetByContainer
                      DropShadow: =DropShadow.None
                      Fill: =ColorValue("#ffffff00")
                      Height: =Parent.Height
                      LayoutGap: =4
                      LayoutMinHeight: =32
                      LayoutMinWidth: =80
                      LayoutMode: =LayoutMode.Auto
                      PaddingLeft: =4
                      RadiusBottomLeft: =0
                      RadiusBottomRight: =0
                      RadiusTopLeft: =0
                      RadiusTopRight: =0
                      Width: |
                        =
                    Children:
                    - Icon2:
                        Control: Classic/Icon
                        Variant: Hamburger
                        Properties:
                          OnSelect: =Set(constTrigger, !constTrigger)
                          Color: =ColorValue(dsaTokens.colorNeutral100)
                          FocusedBorderThickness: =0
                          Height: =40
                          HoverBorderColor: =ColorValue(dsaTokens.colorNeutral400)
                          HoverColor: =ColorValue(dsaTokens.colorAccentPrimaryHover)
                          HoverFill: =ColorValue("#ffffff00")
                          Icon: =If(!constTrigger, Icon.Hamburger, Icon.Cancel)
                          PaddingLeft: =6
                          PaddingRight: =6
                          PressedColor: =ColorValue(dsaTokens.colorAccentPrimary)
                          Width: =40
                    - apex-logo:
                        Control: Image
                        Properties:
                          OnSelect: |-
                            =Navigate(
                                LookUp(constHeader,true).logoScreen,
                                    ScreenTransition.Fade
                            );
                            Set(constCurrentScreen, LookUp(constHeader,true).logoScreen)
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
                          Height: =Parent.Height
                          PaddingBottom: =8
                          PaddingTop: =8
                          Width: |-
                            =If(
                                App.Width < 500, 32 , 40 
                            )
                    - divisor_1:
                        Control: Rectangle
                        Properties:
                          AlignInContainer: =AlignInContainer.Center
                          Height: '=Parent.Height - 24  '
                          Width: '=2   '
                          Y: '=0   '
                    - bat-logo:
                        Control: Image
                        Properties:
                          OnSelect: |-
                            =Navigate(
                                LookUp(constHeader,true).logoScreen,
                                    ScreenTransition.Fade
                            );
                            Set(constCurrentScreen, LookUp(constHeader,true).logoScreen)
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
                          Height: =Parent.Height
                          LayoutMinWidth: =0
                          PaddingBottom: =8
                          PaddingLeft: =4
                          PaddingTop: =8
                          Width: |-
                            =If(
                                App.Width < 500, 40, 64 
                            )
                - appName:
                    Control: GroupContainer
                    Variant: horizontalAutoLayoutContainer
                    Properties:
                      AlignInContainer: =AlignInContainer.SetByContainer
                      DropShadow: =DropShadow.None
                      Height: =Parent.Height
                      LayoutAlignItems: =LayoutAlignItems.Center
                      LayoutMinHeight: =32
                      LayoutMinWidth: =100
                      LayoutMode: =LayoutMode.Auto
                      PaddingBottom: =4
                      PaddingTop: =4
                      RadiusBottomLeft: =0
                      RadiusBottomRight: =0
                      RadiusTopLeft: =0
                      RadiusTopRight: =0
                      Width: =
                    Children:
                    - appTitle_1:
                        Control: Label
                        Properties:
                          Text: |+
                            =LookUp(constHeader,true).appName

                          Align: =Align.Center
                          Color: |-
                            =ColorValue(
                            dsaTokens.colorNeutral200
                            )
                          FillPortions: =1
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
                          Width: =Parent.Width
                - userContainer_1:
                    Control: GroupContainer
                    Variant: horizontalAutoLayoutContainer
                    Properties:
                      AlignInContainer: =AlignInContainer.SetByContainer
                      DropShadow: =DropShadow.None
                      Fill: =ColorValue("#ffffff00")
                      Height: =Parent.Height
                      LayoutAlignItems: =LayoutAlignItems.Center
                      LayoutGap: =16
                      LayoutJustifyContent: =LayoutJustifyContent.End
                      LayoutMinHeight: =32
                      LayoutMinWidth: =80
                      LayoutMode: =LayoutMode.Auto
                      RadiusBottomLeft: =0
                      RadiusBottomRight: =0
                      RadiusTopLeft: =0
                      RadiusTopRight: =0
                      Width: =
                    Children:
                    - userName_1:
                        Control: Label
                        Properties:
                          Text: |
                            ="Olá, " &LookUp(constHeader,true).userData.FullName
                          Align: =Align.Right
                          Color: |-
                            =ColorValue(
                            dsaTokens.colorContrastLight
                            )
                          FillPortions: =1
                          LayoutMinWidth: =40
                          Size: =dsaTokens.fontLabel
                          Visible: =If(App.Width < 768, false, true)
                          Width: |-
                            =
                            If(App.Width < 500, 0, Parent.Width - userImage_1.Width - Parent.LayoutGap)
                          Wrap: =false
                    - userImage_1:
                        Control: Image
                        Properties:
                          Image: =LookUp(constHeader,true).userData.Image
                          Height: =Parent.Height - 8
                          RadiusBottomLeft: =Parent.Height /2
                          RadiusBottomRight: =Parent.Height /2
                          RadiusTopLeft: =Parent.Height /2
                          RadiusTopRight: =Parent.Height /2
                          Width: '=Parent.Height - 8   '
                          Y: '=0   '
    - container:
        Control: GroupContainer
        Variant: horizontalAutoLayoutContainer
        Properties:
          DropShadow: =DropShadow.None
          LayoutMode: =LayoutMode.Auto
          RadiusBottomLeft: =0
          RadiusBottomRight: =0
          RadiusTopLeft: =0
          RadiusTopRight: =0
        Children:
        - navBarDsa:
            Control: GroupContainer
            Variant: manualLayoutContainer
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
                Control: GroupContainer
                Variant: verticalAutoLayoutContainer
                Properties:
                  DropShadow: =DropShadow.None
                  Height: =Parent.Height
                  LayoutDirection: =LayoutDirection.Vertical
                  LayoutMode: =LayoutMode.Auto
                  RadiusBottomLeft: =0
                  RadiusBottomRight: =0
                  RadiusTopLeft: =0
                  RadiusTopRight: =0
                  Width: =Parent.Width
                Children:
                - navLinks_2:
                    Control: GroupContainer
                    Variant: verticalAutoLayoutContainer
                    Properties:
                      AlignInContainer: =AlignInContainer.SetByContainer
                      DropShadow: =DropShadow.None
                      FillPortions: =3
                      LayoutDirection: =LayoutDirection.Vertical
                      LayoutMinHeight: =0
                      LayoutMode: =LayoutMode.Auto
                      RadiusBottomLeft: =0
                      RadiusBottomRight: =0
                      RadiusTopLeft: =0
                      RadiusTopRight: =0
                      Width: =Parent.Width
                    Children:
                    - appSettings_2:
                        Control: Gallery
                        Variant: BrowseLayout_Vertical_OneTextOneImageVariant_ver5.0
                        Properties:
                          Items: =constNavMenu
                          AlignInContainer: =AlignInContainer.SetByContainer
                          DelayItemLoading: =true
                          Layout: =Layout.Vertical
                          LayoutMinHeight: =0
                          LoadingSpinner: =LoadingSpinner.Data
                          ShowScrollbar: =If(App.Height < 500, true, false)
                          TemplateFill: =
                          TemplatePadding: =0
                          TemplateSize: =link_2.Height
                          Transition: =Transition.Pop
                          Width: =Parent.Width
                        Children:
                        - link_2:
                            Control: Classic/Button
                            Properties:
                              OnSelect: |-
                                =Set(constCurrentScreen, ThisItem.toScreen);
                                Navigate(ThisItem.toScreen,ScreenTransition.Fade);
                                Set(constTrigger, false)
                              Text: =ThisItem.linkName
                              Align: =Align.Left
                              BorderStyle: =BorderStyle.None
                              Color: |-
                                =If(hoverEffect_2.Visible,
                                ColorValue(dsaTokens.colorAccentPrimaryHover),
                                ColorValue(dsaTokens.colorContrastLight)
                                )
                              Fill: =ColorValue("#ffffff00")
                              FontWeight: =FontWeight.Normal
                              HoverColor: =ColorValue(dsaTokens.colorAccentPrimaryHover)
                              HoverFill: =ColorValue("#ffffff00")
                              PaddingBottom: =8
                              PaddingLeft: =56
                              PaddingRight: =8
                              PaddingTop: =8
                              PressedFill: =Self.Fill
                              Size: =dsaTokens.fontLabel
                              Width: =Parent.Width
                        - icon_2:
                            Control: Classic/Icon
                            Variant: Add
                            Properties:
                              OnSelect: =Select(Parent)
                              AutoDisableOnSelect: =false
                              Color: |-
                                =If(hoverEffect_2.Visible,
                                ColorValue(dsaTokens.colorAccentPrimaryHover),
                                ColorValue(dsaTokens.colorContrastLight)
                                )
                              DisplayMode: =DisplayMode.View
                              Height: =28
                              HoverColor: =ColorValue("#ffffff00")
                              Icon: =ThisItem.icon
                              Width: =20
                              X: |-
                                =If(constTrigger,
                                12,
                                Parent.Width/2 - Self.Width/2
                                )
                              Y: =link_2.Height/2 - Self.Height/2
                        - hoverEffect_2:
                            Control: GroupContainer
                            Variant: manualLayoutContainer
                            Properties:
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
                                    constTrigger, Parent.Width - 16, widthMenuClosed - 8
                                )
                              X: |-
                                =
                                0
                - menuSettings_2:
                    Control: GroupContainer
                    Variant: verticalAutoLayoutContainer
                    Properties:
                      DropShadow: =DropShadow.None
                      Height: =Parent.Height
                      LayoutDirection: =LayoutDirection.Vertical
                      LayoutJustifyContent: =LayoutJustifyContent.End
                      LayoutMinHeight: =80
                      LayoutMinWidth: =56
                      LayoutMode: =LayoutMode.Auto
                      RadiusBottomLeft: =0
                      RadiusBottomRight: =0
                      RadiusTopLeft: =0
                      RadiusTopRight: =0
                      Width: =Parent.Width
                    Children:
                    - exitContainer_3:
                        Control: GroupContainer
                        Variant: horizontalAutoLayoutContainer
                        Properties:
                          DropShadow: =DropShadow.None
                          Height: =Parent.Height
                          LayoutAlignItems: =LayoutAlignItems.End
                          LayoutMinWidth: =0
                          LayoutMode: =LayoutMode.Auto
                          RadiusBottomLeft: =0
                          RadiusBottomRight: =0
                          RadiusTopLeft: =0
                          RadiusTopRight: =0
                          Width: =Parent.Width
                        Children:
                        - exitIcon_4:
                            Control: Image
                            Properties:
                              OnSelect: =Exit()
                              Image: |-
                                ="data:image/svg+xml;utf8, " & EncodeUrl("
                                    <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='#26262C' viewBox='0 0 256 256'><path d='M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z'></path></svg>
                                ")
                              Height: '=32  '
                              PaddingBottom: =2
                              PaddingTop: =2
                              Width: '=32  '
                              Y: '=Parent.Height- Self.Height - 8  '
                        - link_5:
                            Control: Classic/Button
                            Properties:
                              OnSelect: =Exit()
                              Text: ="Sair"
                              Align: =Align.Left
                              AlignInContainer: =AlignInContainer.End
                              BorderStyle: =BorderStyle.None
                              Color: =ColorValue(dsaTokens.colorContrastLight)
                              Fill: =ColorValue("#ffffff00")
                              FillPortions: =1
                              FontWeight: =FontWeight.Normal
                              Height: =32
                              HoverColor: =ColorValue(dsaTokens.colorAccentPrimaryHover)
                              HoverFill: =ColorValue("#ffffff00")
                              PaddingBottom: =0
                              PaddingLeft: =24
                              PaddingRight: =0
                              PaddingTop: =0
                              PressedColor: =ColorValue(dsaTokens.colorAccentPrimaryHover)
                              PressedFill: =Self.Fill
                              RadiusBottomLeft: =0
                              RadiusBottomRight: =0
                              RadiusTopLeft: =0
                              RadiusTopRight: =0
                              Size: =16
                              Width: '=32  '
                              X: '=0   '
                              Y: =Parent.Height- Self.Height
  `
  PageTemplateDsa.setAttribute("data-code", codeSnippet)

  const properties = `
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
  `
  PageTemplateDsa.setAttribute("data-properties", properties)

  PageTemplateDsa.innerHTML = `
  <img class="ModalDsa" src=${preview} alt="Imagem header e sidebar para para power apps" />
  `

  export default PageTemplateDsa


