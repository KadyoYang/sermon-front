import { createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import {ThemeProvider} from 'styled-components';




const ColorThemeProvider: React.FC = ({children}) => {
    const theme = createMuiTheme({

        palette:{
            primary:{
                main: '#1a237e',
            },
            secondary:{
                main: '#40c4ff',
            }
        },


        overrides: {
          // Style sheet name ⚛️
          MuiButton: {
            // Name of the rule
            text: {
              // Some CSS
              color: 'white',
            },
          },
        },


      });


      return (
          <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
          </MuiThemeProvider>
      )
}

export default ColorThemeProvider;