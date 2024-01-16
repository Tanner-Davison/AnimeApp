import media from './media'

const text = {
  headline: `
  ${media.fullWidth} {
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
  }

  ${media.desktop} {
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 700;
    font-size: 1.944vw;
    line-height: 2.222vw;
  }

  ${media.tablet} {
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 700;
    font-size: 2.734vw;
    line-height: 3.125vw;
  }

  ${media.mobile} {
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 700;
    font-size: 6.542vw;
    line-height: 7.477vw;
  }
  `,
  stat: `
  ${media.fullWidth} {
    font-family: 'Orbitron';
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 48px;
  }

  ${media.desktop} {
    font-family: 'Orbitron';
    font-style: normal;
    font-weight: 500;
    font-size: 3.333vw;
    line-height: 3.333vw;
  }

  ${media.tablet} {
    font-family: 'Orbitron';
    font-style: normal;
    font-weight: 500;
    font-size: 4.688vw;
    line-height: 4.688vw;
  }

  ${media.mobile} {
    font-family: 'Orbitron';
    font-style: normal;
    font-weight: 500;
    font-size: 9.813vw;
    line-height: 9.813vw;
  }
  `,
  h1: `
    ${media.fullWidth} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 60px;
      line-height: 64px;
    }

    ${media.desktop} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 4.167vw;
      line-height: 4.444vw;
    }

    ${media.tablet} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 5.859vw;
      line-height: 6.25vw;
    }

    ${media.mobile} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 11.215vw;
      line-height: 13.084vw;
    }
    `,
  h2: `
    ${media.fullWidth} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      line-height: 56px;
    }
    
    ${media.desktop} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 3.333vw;
      line-height: 3.889vw;
    }

    ${media.tablet} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 4.688vw;
      line-height: 5.469vw;
    }

    ${media.mobile} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 8.879vw;
      line-height: 9.813vw;
    }
    `,
  h3: `
    ${media.fullWidth} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 34px;
      line-height: 40px;
    }
    
    ${media.desktop} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 2.361vw;
      line-height: 2.778vw;
    }

    ${media.tablet} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 3.32vw;
      line-height: 3.906vw;
    }

    ${media.mobile} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 7.009vw;
      line-height: 8.411vw;
    }
    `,
  h4: `
    ${media.fullWidth} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
    }
    
    ${media.desktop} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 1.667vw;
      line-height: 2.222vw;
    }

    ${media.tablet} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 2.344vw;
      line-height: 3.125vw;
    }

    ${media.mobile} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 4.673vw;
      line-height: 5.607vw;
    }
  `,
  h5: `
    ${media.fullWidth} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
    }
    
    ${media.desktop} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 1.389vw;
      line-height: 1.667vw;
    }

    ${media.tablet} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 1.953vw;
      line-height: 2.344vw;
    }

    ${media.mobile} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 4.673vw;
      line-height: 5.607vw;
    }
  `,
  h5Bold: `
  ${media.fullWidth} {
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
  }
  
  ${media.desktop} {
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 700;
    font-size: 1.389vw;
    line-height: 1.667vw;
  }

  ${media.tablet} {
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 700;
    font-size: 1.953vw;
    line-height: 2.344vw;
  }

  ${media.mobile} {
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 700;
    font-size: 4.673vw;
    line-height: 5.607vw;
  }
`,
  h6: `
${media.fullWidth} {
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
}

${media.desktop} {
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 700;
  font-size: 1.111vw;
  line-height: 1.389vw;
}

${media.tablet} {
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 700;
  font-size: 1.563vw;
  line-height: 1.953vw;
}

${media.mobile} {
  font-family: 'Archivo';
  font-style: normal;
  font-weight: 700;
  font-size: 3.738vw;
  line-height: 4.673vw;
}
`,
  m1: `
    ${media.fullWidth} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 16px;
      text-transform: uppercase;
    }
    
    ${media.desktop} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 400;
      font-size: 1.042vw;
      line-height: 1.111vw;
      text-transform: uppercase;
    }

    ${media.tablet} {
      font-family: 'Archivo Regular';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 16px;
      text-transform: uppercase;
    }

    ${media.mobile} {
      font-family: 'Archivo Regular';
      font-style: normal;
      font-weight: 400;
      font-size: 3.505vw;
      line-height: 3.738vw;
      text-transform: uppercase;
    }
    `,
  m2: `
    ${media.fullWidth} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 20px;
      text-transform: capitalize;
    }
    
    ${media.desktop} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 500;
      font-size: 1.25vw;
      line-height: 1.389vw;
      text-transform: capitalize;
    }

    ${media.tablet} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 500;
      font-size: 1.758vw;
      line-height: 1.953vw;
      text-transform: capitalize;
    }

    ${media.mobile} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 500;
      font-size: 4.206vw;
      line-height: 4.673vw;
    }
    `,
  m3: `
    ${media.fullWidth} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 21px;
    }
    
    ${media.desktop} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 500;
      font-size: 1.111vw;
      line-height: 1.458vw;
    }

    ${media.tablet} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 500;
      font-size: 1.563vw;
      line-height: 2.051vw;
    }

    ${media.mobile} {
      
    }
    `,
  buttonL: `
      ${media.fullWidth} {
        font-family: 'Archivo';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 17px;
        text-transform: uppercase;
      }

      ${media.desktop} {
        font-family: 'Archivo';
        font-style: normal;
        font-weight: 700;
        font-size: 1.111vw;
        line-height: 1.181vw;
        text-transform: uppercase;
      }

      ${media.tablet} {
        font-family: 'Archivo';
        font-style: normal;
        font-weight: 700;
        font-size: 1.563vw;
        line-height: 1.66vw;
        text-transform: uppercase;
      }
      
      ${media.mobile} {
        font-family: 'Archivo';
        font-style: normal;
        font-weight: 700;
        font-size: 3.738vw;
        line-height: 3.972vw;
        text-transform: uppercase;
      }
    `,
  button2: `
    ${media.fullWidth} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 16px;
      text-transform: uppercase;
    }
    
    ${media.desktop} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 400;
      font-size: 1.042vw;
      line-height: 1.111vw;
      text-transform: uppercase;
    }

    ${media.tablet} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 400;
      font-size: 1.465vw;
      line-height: 1.563vw;
      text-transform: uppercase;
    }

    ${media.mobile} {
      
    }
    `,
  bodyXXL: `
    ${media.fullWidth} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 400;
      font-size: 48px;
      line-height: 72px;
    }
    
    ${media.desktop} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 400;
      font-size: 3.333vw;
      line-height: 5vw;
    }

    ${media.tablet} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 400;
      font-size: 4.688vw;
      line-height: 7.031vw;
    }

    ${media.mobile} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 400;
      font-size: 11.215vw;
      line-height: 16.822vw;
    }
  `,
  bodyXXLBold: `
    ${media.fullWidth} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      line-height: 72px;
    }
    
    ${media.desktop} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 3.333vw;
      line-height: 5vw;
    }

    ${media.tablet} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 4.688vw;
      line-height: 7.031vw;
    }

    ${media.mobile} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 11.215vw;
      line-height: 16.822vw;
    }
  `,
  bodyXL: `
    ${media.fullWidth} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 400;
      font-size: 34px;
      line-height: 51px;
    }
    
    ${media.desktop} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 400;
      font-size: 2.361vw;
      line-height: 3.542vw;
    }

    ${media.tablet} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 400;
      font-size: 3.32vw;
      line-height: 4.98vw;
    }

    ${media.mobile} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 400;
      font-size: 7.944vw;
      line-height: 11.916vw;
    }
  `,
  bodyXLBold: `
    ${media.fullWidth} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 34px;
      line-height: 51px;
    }
    
    ${media.desktop} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 2.361vw;
      line-height: 3.542vw;
    }

    ${media.tablet} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 3.32vw;
      line-height: 4.98vw;
    }

    ${media.mobile} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 7.944vw;
      line-height: 11.916vw;
    }
    `,
  bodyL: `
    ${media.fullWidth} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 36px;
    }
    
    ${media.desktop} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 400;
      font-size: 1.667vw;
      line-height: 2.5vw;
    }

    ${media.tablet} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 400;
      font-size: 2.344vw;
      line-height: 3.516vw;
    }

    ${media.mobile} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 400;
      font-size: 5.607vw;
      line-height: 8.411vw;
    }
    `,
  bodyLBold: `
    ${media.fullWidth} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 36px;
    }
    
    ${media.desktop} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 1.667vw;
      line-height: 2.5vw;
    }

    ${media.tablet} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 2.344vw;
      line-height: 3.516vw;
    }

    ${media.mobile} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 5.607vw;
      line-height: 8.411vw;
    }
    `,
  bodyM: `
    ${media.fullWidth} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 27px;
    }
    
    ${media.desktop} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 400;
      font-size: 1.25vw;
      line-height: 1.875vw;
    }

    ${media.tablet} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 400;
      font-size: 1.758vw;
      line-height: 2.637vw;
    }

    ${media.mobile} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 400;
      font-size: 4.206vw;
      line-height: 6.308vw;
    }
    `,
  bodyMBold: `
    ${media.fullWidth} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 27px;
    }
    
    ${media.desktop} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 1.25vw;
      line-height: 1.875vw;
    }

    ${media.tablet} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 1.758vw;
      line-height: 2.637vw;
    }

    ${media.mobile} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 4.206vw;
      line-height: 6.308vw;
    }
    `,
  bodyS: `
    ${media.fullWidth} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }
    
    ${media.desktop} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 400;
      font-size: 1.111vw;
      line-height: 1.667vw;
    }

    ${media.tablet} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 400;
      font-size: 1.563vw;
      line-height: 2.344vw;
    }

    ${media.mobile} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 400;
      font-size: 3.738vw;
      line-height: 5.607vw;
    }
    `,
  bodySBold: `
    ${media.fullWidth} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
    }
    
    ${media.desktop} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 1.111vw;
      line-height: 1.667vw;
    }

    ${media.tablet} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 1.563vw;
      line-height: 2.344vw;
    }

    ${media.mobile} {
      font-family: 'Archivo';
      font-style: normal;
      font-weight: 700;
      font-size: 3.738vw;
      line-height: 5.607vw;
    }
    `,
  eyebrow: `
      ${media.fullWidth} {
        font-family: Archivo;
        font-size: 14px;
        font-style: normal;
        font-weight: 800;
        line-height: 18px; /* 128.571% */
        letter-spacing: 3px;
        text-transform: uppercase;
      }

      ${media.desktop} {
        font-family: Archivo;
        font-size: 0.972vw;
        font-style: normal;
        font-weight: 800;
        line-height: 1.25vw; /* 128.571% */
        letter-spacing: 0.208vw;
        text-transform: uppercase;
      }
      
      ${media.tablet} {
        font-family: Archivo;
        font-size: 1.367vw;
        font-style: normal;
        font-weight: 800;
        line-height: 1.758vw; /* 128.571% */
        letter-spacing: 0.293vw;
        text-transform: uppercase;
      }
      
      ${media.mobile} {
        font-family: Archivo;
        font-size: 3.271vw;
        font-style: normal;
        font-weight: 800;
        line-height: 4.206vw; /* 128.571% */
        letter-spacing: 0.701vw;
        text-transform: uppercase;
      }
    `,
  h1Mobile: `
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 700;
    font-size: 11.215vw;
    line-height: 13.084vw;
  `,
  h2Mobile: `
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 700;
    font-size: 8.879vw;
    line-height: 9.813vw;
  `,
  h3Mobile: `
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 700;
    font-size: 7.009vw;
    line-height: 8.411vw;
  `,
  h4Mobile: `
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 700;
    font-size: 4.673vw;
    line-height: 5.607vw;
  `,
  h5Mobile: `
    font-family: 'Archivo';
    font-style: normal;
    font-weight: 700;
    font-size: 3.738vw;
    line-height: 4.673vw;
  `,
  body: `
  font-family: SangBleu Sunrise, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 5.333vw;
  line-height: 150%;
  `,
  nav: `
    font-family: SangBleu Sunrise, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 4vw;
    line-height: 90%;
  `,
  navSmall: `
    font-family: SangBleu Sunrise, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 3.2vw;
    line-height: 90%;
  `,
  transparentText: `
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  background-size: 100%;
  background-clip: text;
`,
  strokeText: `
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  background-size: 100%;
  background-clip: text;
  -webkit-text-stroke-width: 0.07vw;
`,
  strokeTextTransparent: `
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  background-size: 100%;
  background-clip: text;
  -webkit-text-stroke-width: 0.07vw;
`,
};
export default text;
