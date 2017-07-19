import React from 'react';
import {Page, ContentBlock, Navbar, Button} from 'framework7-react';

export const KButton = () => {
    return (
        <Page>
        <Navbar title="About" backLink="Back" sliding />
            <Button>Button Text</Button>
        </Page>
    );
};
