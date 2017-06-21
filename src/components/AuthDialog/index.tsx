import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import './Auth-Dialog.scss';

interface AuthDialogProps {
    saveAuthenticationData: (idToken: string, username: string, mail: string) => void;
}

const TOKEN_STORAGE_KEY = 'rolloutToken';

interface AuthState {
    token?: string;
}

class AuthDialog extends React.Component<AuthDialogProps, AuthState> {

    constructor(props: any) {
        super(props);
        this.state = {
            token: window.localStorage.getItem(TOKEN_STORAGE_KEY)
        };
    }

    public render() {
        return (
            <Dialog className="auth-dialog" modal={true} open={true}>
                <p> Please authenticate yourself before continuing further </p>
                <TextField
                    className="field"
                    name="token"
                    value={this.state.token}
                    floatingLabelText="Token:"
                    floatingLabelFixed={true}
                    onChange={ (_, value) => {
                      this.updateToken(value);
                  }}/>
                <a href="#!" ref="login" className="btn-login" onClick={this.connect.bind(this)}>
                    Submit
                </a>
            </Dialog>);
    }

    private updateToken(value) {
        this.setState({token: value});
    }

    private connect() {
        const token = this.state.token;
        window.localStorage.setItem(TOKEN_STORAGE_KEY, token);
        this.props.saveAuthenticationData(token, 'admin', 'nomatter@example.com');
    }

}

export default AuthDialog;