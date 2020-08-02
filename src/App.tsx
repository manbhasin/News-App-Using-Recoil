import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {RecoilRoot} from "recoil";
import {createMuiTheme} from "@material-ui/core";
import {ThemeProvider} from '@material-ui/styles';
import APIKeyManager from "./components/api-key-manager/APIKeyManager";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <RecoilRoot>
                <BrowserRouter>
                    <Switch>
                        <Route exact path={'/'} component={APIKeyManager}/>
                    </Switch>
                </BrowserRouter>
            </RecoilRoot>
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
