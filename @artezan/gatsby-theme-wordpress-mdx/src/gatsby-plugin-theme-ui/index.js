const headings = {
  color: 'text',
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'normal',
  wordBreak: 'break-word',
  margin: 0
}

const anchors = {
  color: 'primary',
  cursor: 'pointer',
  fontSize: [1, 2],
  outline: 'none',
  transition: '.2s linear all',
  ':hover': {
    color: 'text'
  },
  ':focus': {
    color: 'text'
  }
}

export default {
  useCustomProperties: true,
  space: [0, 4, 8, 16, 24, 32, 48, 64],

  radii: [4, 8, 50],

  borderWidths: [1, 4],

  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace'
  },

  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64],

  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },

  initialColorModeName: 'dark',

  colors: {
    text: '#ffffff',
    textSecondary: '#ccd0d6',
    textMuted: '#667284',
    primary: '#04d0d9',
    secondary: '#FBF8EF',
    muted: '#262c35',
    background: '#353e4a',
    transparent: `rgba(0,0,0,0)`,
    imgShadow: '11px 7px 20px 12px rgb(0, 0, 0)',
    shadowCard: '',
    backgroundNavBar: '#353e4a',
    backgroundSideBar: '#353e4a',
    activeTextBar: '#FBF8EF',
    textBar: '#04d0d9',
    backgroundCard: '#262c35',
    borderRadiusCard: 1,
    hoverCard: {
      filter: 'brightness(105%)'
    },
    onClickLink: {},
    onClickCard: { filter: 'brightness(105%)' },

    modes: {
      light: {
        text: '#0e3c61',
        textSecondary: 'hsl(10, 20%, 20%)',
        textMuted: '#c7a9ce',
        primary: '#ff94c2',
        secondary: '#90caf9',
        muted: '#fbf4fc',
        background: 'hsl(10, 10%, 98%)',
        transparent: `rgba(0,0,0,0)`,
        imgShadow: '4px 10px 20px 0px rgb(43,43,47)',
        backgroundNavBar: 'hsl(10, 10%, 98%)',
        backgroundSideBar: 'hsl(10, 10%, 98%)',
        activeTextBar: '#90caf9',
        textBar: '#ff94c2',
        backgroundCard: '#fbf4fc'
      },
      purple: {
        text: '#ffffff',
        textSecondary: '#d2d2f1',
        textMuted: '#4e4c7a',
        primary: '#a92aeb',
        secondary: '#688ce0',
        muted: '#1a1832',
        background: '#131127',
        transparent: `rgba(0,0,0,0)`,
        imgShadow: '11px 7px 20px 12px rgb(0, 0, 0)',
        shadowCard: '',
        backgroundNavBar: '#131127',
        backgroundSideBar: '#131127',
        activeTextBar: '#688ce0',
        textBar: '#a92aeb',
        backgroundCard: '#1a1832'
      },
      deep: {
        text: 'hsl(210, 50%, 96%)',
        textSecondary: 'hsl(210, 50%, 96%)',
        primary: 'hsl(260, 100%, 80%)',
        secondary: 'hsl(290, 100%, 80%)',
        accent: 'hsl(290, 100%, 80%)',
        muted: 'hsla(230, 20%, 0%, 20%)',
        background: 'hsl(230, 25%, 18%)',
        backgroundNavBar: 'hsl(230, 25%, 18%)',
        backgroundSideBar: 'hsl(230, 25%, 18%)',
        activeTextBar: 'hsl(290, 100%, 80%)',
        textBar: 'hsl(260, 100%, 80%)',
        backgroundCard: 'hsla(230, 20%, 0%, 20%)'
      },
      swiss: {
        text: '#207588',
        // background: 'hsl(10, 10%, 98%)',
        background: '#F7F7F7',
        textSecondary: '#4b6f77',
        textMuted: '#c7a9ce',
        primary: '#AAD0D9',
        secondary: '#EED5D1',
        highlight: 'hsl(10, 40%, 90%)',
        accent: '#E5B9B6⁣',
        muted: '#ffffffba',
        gray: 'hsl(10, 20%, 50%)',
        shadowCard: '9px 8px 50px rgba(32,32,35,.1)',
        imgShadow: '6px 7px 20px 0px rgb(43, 43, 47)',
        backgroundNavBar: '#AAD0D9',
        backgroundSideBar: '#AAD0D9',
        activeTextBar: '#4b6f77',
        textBar: '#207588',
        backgroundCard: '#ffffffba'
      }
      /*   neumorphism: {
        text: '#faf9f9',
        textSecondary: '#D5CCCC',
        textMuted: '#667284',
        primary: '#EEEBE8',
        secondary: '#D55F8F',
        muted: '#1e2129',
        background: '#333745',
        transparent: `rgba(0,0,0,0)`,
        backgroundNavBar: 'background',
        backgroundSideBar: 'background',
        activeTextBar: 'secondary',
        textBar: 'primary',
        borderRadiusCard: '50px',
        shadowCard: `10px 10px 20px #2b2f3b, -10px -10px 20px #3b3f4f`,
        imgShadow: `10px 10px 20px #2b2f3b, -10px -10px 20px #3b3f4f`,
        backgroundCard: '#333745',
        hoverCard: {
          boxShadow: `inset 10px 10px 20px #2b2f3b, inset -10px -10px 20px #3b3f4f`
        },
        onClickLink: {
          outline: 'none',
          boxShadow: 'unset'
        },
        onClickCard: {
          boxShadow: `inset 10px 10px 20px #2b2f3b, inset -10px -10px 20px #3b3f4f`
        }
      } */
    }
  },
  // custom styles

  breakpoints: ['576px', '768px', '992px', '1200px'],

  transitions: {
    sideBarTransition: '.3s ease-in-out margin-left'
  },

  shadows: [
    '11px 7px 20px 12px rgb(0, 0, 0)',
    `0 0 0 2px`,
    '27px 24px 50px rgba(32,32,35,.1)'
  ],
  cardsMdxWp: {
    primary: {
      display: 'flex',
      flexDirection: 'column',
      flex: '1 1 auto',
      color: 'text',
      fontFamily: 'body',
      backgroundColor: theme => theme.colors.backgroundCard,
      overflow: 'hidden',
      borderRadius: theme => theme.colors.borderRadiusCard,
      transition: '.2s linear all',
      ':hover': theme => theme.colors.hoverCard,
      boxShadow: theme => theme.colors.shadowCard,
      cursor: 'pointer'
    }
  },

  searchMdxWp: {
    input: {
      backgroundColor: 'muted',
      display: 'flex',
      flexBasis: '100%',
      outline: 'none',
      borderWidth: 0,
      borderStyle: 'solid',
      borderColor: 'background',
      borderRadius: 2,
      appearance: 'none',
      p: 3,
      mr: 2,
      fontFamily: 'body',
      fontSize: 2,
      color: 'inherit',
      '::placeholder': {
        color: 'textMuted'
      },
      ':focus ': {
        boxShadow: theme => `${theme.shadows[1]} ${theme.colors.textMuted}`
      }
    },
    divWrapper: {
      backgroundColor: 'muted',
      borderRadius: 1,
      zIndex: 2,
      mt: 3
    },
    ul: {
      m: 0,
      pl: 0,
      overflowY: 'scroll',
      WbkitOverflowScrolling: 'touch',
      borderRadius: 1
    },
    li: {
      cursor: 'pointer',
      p: 3,
      margin: 0,
      borderBottomStyle: 'solid',
      borderBottomWidth: '2px',
      borderColor: 'background',
      listStyle: 'none',

      ':hover': {
        backgroundColor: 'muted'
      }
    },
    tags: {
      appearance: 'none',
      textAlign: 'center',
      lineHeight: 'inherit',
      textDecoration: 'none',
      fontSize: 'inherit',
      fontWeight: 'bold',
      m: 0,
      px: 1,
      border: 0,
      borderRadius: 4,
      bg: 'primary',
      color: 'background',
      display: 'flex',
      alignItems: 'center'
    }
  },

  buttonIconMdxWp: {
    appearance: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: 'primary',
    backgroundColor: 'muted',
    textAlign: 'center',
    lineHeight: 'inherit',
    textDecoration: 'none',
    fontSize: 'inherit',
    fontWeight: 'bold',
    m: 0,
    p: 0,
    border: 0,
    borderRadius: 2,
    outline: 'none',
    minWidth: 48,
    height: 48,
    transition: '.2s linear all',
    ':focus ': {
      boxShadow: theme => `${theme.shadows[1]}${theme.colors.textMuted}`
    },
    ':hover ': {
      backgroundColor: 'primary',
      color: 'background'
    }
  },
  buttonSimpleMdxWp: {
    appearance: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: 'background',
    backgroundColor: 'primary',
    textAlign: 'center',
    lineHeight: 'inherit',
    textDecoration: 'none',
    fontSize: 'inherit',
    fontWeight: 'bold',
    m: 0,
    p: 0,
    border: 0
  },
  svgMdxWpx: {},

  navItemMdxWp: {
    normal: {
      color: theme => theme.colors.textBar,
      backgroundColor: 'transparent',
      display: 'flex',
      alignItems: 'center',
      borderRadius: 2,
      textTransform: 'capitalize',
      pt: 3,
      pb: 3,
      pl: 4,
      pr: 4,
      transition: '.2s linear background-color, .2s linear color',
      fontFamily: 'body',
      fontSize: 2,
      fontWeight: theme => theme.fontWeights.body,
      lineHeight: 'normal',
      textDecoration: 'none',
      outline: 'none',
      svg: {
        marginRight: 2
      },

      ':hover': {
        color: theme => theme.colors.activeTextBar,
        backgroundColor: 'muted'
      }
    },
    active: {
      variant: 'navItemMdxWp.normal',
      color: theme => theme.colors.activeTextBar,
      backgroundColor: 'muted'
    }
  },

  layout: {
    content: {
      maxWidth: ['1140px']
    }
  },
  logo: {
    width: '3.5em'
  },

  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'normal',
      bg: 'background'
    },
    div: {
      // color: 'text',
      color: 'textSecondary',
      fontFamily: 'body',
      fontSize: [2, 3],
      fontWeight: 'body',
      lineHeight: '28px',
      wordBreak: 'break-word'
    },

    h1: {
      ...headings,
      marginBottom: 3,
      fontSize: [6, 7, 8]
    },

    h2: {
      ...headings,
      marginBottom: 3,
      fontSize: [5, 7]
    },

    h3: {
      ...headings,
      marginBottom: 3,
      fontSize: [4, 6]
    },

    h4: {
      ...headings,
      marginBottom: 3,
      fontSize: [4, 5]
    },

    h5: {
      ...headings,
      marginBottom: 2,
      fontSize: [3, 4]
    },

    h6: {
      ...headings,
      marginBottom: 2,
      fontSize: [2, 3],
      fontWeight: 'body'
    },

    p: {
      color: 'textSecondary',
      fontFamily: 'body',
      fontSize: [2, 3],
      fontWeight: 'body',
      lineHeight: '28px',
      wordBreak: 'break-word',
      marginTop: 0,
      marginBottom: 4,
      a: {
        ...anchors
      }
    },

    ul: { color: 'text', fontFamily: 'body', marginTop: 3, paddingLeft: 3 },

    ol: { color: 'text', fontFamily: 'body', marginTop: 3, paddingLeft: 3 },

    li: {
      color: 'text',
      fontFamily: 'body',
      marginBottom: 3,
      p: {
        color: 'text'
      }
    },

    a: {
      ...anchors
    },

    pre: {
      backgroundColor: 'muted',
      fontFamily: 'monospace',
      fontSize: 0,
      px: 3,
      py: 3,
      borderRadius: 1,
      borderStyle: 'solid',
      borderWidth: 0,
      borderColor: 'background'
    },

    code: {
      fontFamily: 'monospace',
      fontSize: 0
    },

    blockquote: {
      backgroundColor: 'background',
      borderLeftStyle: 'solid',
      borderLeftWidth: 4,
      borderColor: 'secondary',
      px: 3,
      py: 3,
      my: 3,
      mx: [2, 3]
    },

    table: {
      color: 'textSecondary',
      fontFamily: 'body',
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    },

    tr: {},

    th: {
      backgroundColor: 'background',
      color: 'text',
      borderTopColor: 'textMuted',
      borderLeftColor: 'textMuted',
      borderBottomColor: 'transparent',
      borderRightColor: 'textMuted',
      borderStyle: 'solid',
      borderWidth: 0,
      px: 2,
      py: 2
    },

    td: {
      borderStyle: 'solid',
      borderWidth: 0,
      borderColor: 'textMuted',
      px: 2,
      py: 2
    },

    hr: {
      opacity: 0
    },

    img: {
      width: '100%',
      height: 'auto'
    }
  }
}
