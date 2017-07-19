import React from 'react';
import {Page, ContentBlock, Navbar, Messagebar} from 'framework7-react';

export const KMessage_Bar = () => {
    return (
        <Page>
            <Navbar title="About" backLink="Back" sliding />
            <Messagebar placeholder="Message" sendLink="Send" onSubmit={{}}></Messagebar>
        </Page>
    );
};
