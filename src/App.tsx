import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from '@material-ui/styles';
import NewsFeed from "./components/NewsFeed"

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Switch>
                    <Route exact path={'/'} component={NewsFeed}/>
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    );
}

const theme = createMuiTheme({
        palette: {
            type: "dark",
            primary: {
                main: '#62efff',
            },
            secondary: {
                main: '#88ffff'
            },
            text: {
                primary: '#e0f2f1'
            },
        },
        typography: {
            fontFamily: [
                'Crimson Text', 'serif'
            ].join(','),
        }
    }
);

export default App;
