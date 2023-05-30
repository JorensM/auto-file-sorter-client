//Core
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

//Components
import H1 from 'components/typography/H1';
import H2 from 'components/typography/H2';
import Spacer from 'components/layout/Spacer';

//Style
import { page_style, bold, button_secondary } from 'style';

export default function SettingsPage() {

    let linked = false;

    const handleLinkGoogleDrive = (response) => {
        console.log(response);
    }

    return (
        <div
            style={page_style}
        >
            <GoogleOAuthProvider
                clientId='961657177961-9vmvj7hl65296qmcqu75thggdl5a8qp8.apps.googleusercontent.com'
            >
                <H1>Settings</H1>
                <H2>Google Drive</H2>
                <span><span style={bold}>Status:</span> { linked ? 'Linked' : 'Not linked' }</span>
                <Spacer height='8px' />
                { ! linked &&
                    <GoogleLogin
                        onSuccess={response => handleLinkGoogleDrive(response)}
                    />
                }
                {/* <button
                    style={button_secondary}
                    onClick={handleLinkGoogleDrive}
                >
                    {linked ? 'Unlink' : 'Link'}
                </button> */}
            </GoogleOAuthProvider>
        </div>
    )
}