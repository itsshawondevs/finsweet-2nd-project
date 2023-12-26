tailwind.config = {
    theme: {
      extend: {
        maxWidth: {
            'container': '1280px',
        },
        colors: {
          primary: '#FFD2A4',
          white: '#FFFFFF',
          black: '#161722',
          navbg: '#0D0D0D',
          lightgray: '#FFF5EB',
          lightOrange: '#FFF5EB',
        },
        fontFamily: {
            'roboto': ["'Roboto Condensed', sans-serif;"],
        },
        backgroundImage: {
            'banner': "url('./images/banner.jpg')",
            'benefit-img1': "url('./images/benefit-img1.png')",
            'benefit-img2': "url('./images/benefit-img2.png')",
            'benefit-img3': "url('./images/benefit-img3.png')",
            'benefit-img4': "url('./images/benefit-img4.png')",
            'overlay': "linear-gradient(0deg, #060606 16.68%, rgba(0, 0, 0, 0.02) 96.44%)",
            'text': "linear-gradient(110deg, #A54E2B -53.83%, #DC9853 62.61%)",
            'aroundBg': "url(./images/aroundbg.jpg)"
        },
      }
    }
  }