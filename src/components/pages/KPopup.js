import React from 'react';
import {Page, ContentBlock, Navbar, Popup} from 'framework7-react';

export const KPopup = () => {
    return (
        <Page>
            <Navbar title="About" backLink="Back" sliding />
            <Popup>
              <p>Hello</p>
            </Popup>

            <Popup tabletFullscreen>

            </Popup>
        </Page>
    );
};
