import React from 'react';
import {Page, ContentBlock, Navbar, Toolbar, Link} from 'framework7-react';

export const KToolbar = () => {
    return (
        <Page>
            <Navbar title="About" backLink="Back" sliding />
            <Toolbar>
              <Link>Left Link</Link>
              <Link>Right Link</Link>
            </Toolbar>
        </Page>
    );
};
