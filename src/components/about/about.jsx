import "./about.scss"
import {
    createTheme,
    responsiveFontSizes,
    MuiThemeProvider,
    Typography,
    Box
} from '@material-ui/core';

let theme = createTheme(); // just for customizing text
theme = responsiveFontSizes(theme);


const heading = "About Me";
const text = "Hi! I'm Kiana. I graduated from the University of California, Riverside in 2020 with a Bachelor's Degree in Computer Science. On my free time, I enjoy coding and spending time with my cat (on the right), who also inspired me to create my first mobile game, Cozy Cat Home. I am actively seeking for an entry level position that can further advance my computer and technical skills.";

export default function About() {
    return (
        <div className="about" id="about">
            <div className="text">
                <MuiThemeProvider theme={theme}>
                    <Box mt={14} p={8}>
                        <Typography variant='h2' gutterBottom>{heading}</Typography>
                        <Typography variant='subtitle1' gutterBottom>{text}</Typography>
                    </Box>
                </MuiThemeProvider>
                <a href="/resume/Resume_Kiana_McCullough.pdf" download>
                    Click here for resume
                </a>
            </div>

            <div className="imgContainer">
                    <img src={process.env.PUBLIC_URL + "/assets/yume1.JPG"} alt="" />
            </div>
        </div>

        
    )
}
