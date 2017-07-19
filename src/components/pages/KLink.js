import React from 'react';
import {Page, Navbar, Link} from 'framework7-react';

export const KLink = () => {
    return (
        <Page>
            <Navbar title="About" backLink="Back" sliding />
            <Link href="http://google.com" external>Google</Link>
        </Page>
    );
};
