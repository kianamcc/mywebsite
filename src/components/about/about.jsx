import "./about.scss"
import {
    createTheme,
    responsiveFontSizes,
    MuiThemeProvider,
    Typography,
    Box,
    CssBaseline
} from '@material-ui/core';

let theme = createTheme(); // just for customizing text
theme = responsiveFontSizes(theme);

theme.typography.subtitle1 = {
    fontSize: '1.02rem',
    '@media (min-width:600px)': {
      fontSize: '1.2rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.3rem',
    },
  };

theme.overrides = {
    MuiCssBaseline: {
        '@global': {
            '*': {
            'scrollbar-width': 'thin',
            },
            '*::-webkit-scrollbar': {
            width: '60px',
            height: '4px',
            }
        }
    }
}

const heading = "About Me";
const text = "Hi! I'm Kiana. I graduated from the University of California, Riverside in 2020 with a Bachelor's Degree in Computer Science. Since I was 9 years old, I was always an avid video game fan. Eventually I became curious and started to wonder how video games were made. I took my first video game design class in high school; that is when I decided that I want to become a computer programmer.";
const whitespace = " "
const text2 = "When I am not coding, I enjoy playing video games, drawing, and spending time with my cat whom inspired me to create my first mobile game, Cozy Cat Home."

export default function About() {
    return (
        <div className="about" id="about">
            <div className="text" style={{overflow:'hidden'}}>
                <MuiThemeProvider theme={theme}>
                    <Box mt={14} p={8} style={{overflow: 'hidden'}}>
                        <Typography variant='h2' gutterBottom>{heading}</Typography>
                        <Typography variant='subtitle1' gutterBottom>{text}</Typography>
                        <Typography variant='subtitle1' gutterBottom>{whitespace}</Typography>
                        <Typography variant='subtitle1' gutterBottom>{whitespace}</Typography>
                        <Typography variant='subtitle1' gutterBottom>{text2}</Typography>
                    </Box>
                </MuiThemeProvider>
                <a href="Resume.pdf" download>
                    Click here for resume
                </a>
            </div>

            <div className="imgContainer">
                    <img src={process.env.PUBLIC_URL + "/assets/yume1.JPG"} alt="" />
            </div>
        </div>

        
    )
}
