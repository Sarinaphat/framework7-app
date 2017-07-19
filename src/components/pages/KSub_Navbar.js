import React from 'react';
import {Page, ContentBlock, Navbar, Subnavbar, ButtonsSegmented, Button} from 'framework7-react';

export const KSub_Navbar = () => {
    return (
        <Page>
            <Navbar title="About" backLink="Back" sliding />
            <Subnavbar>
              <ButtonsSegmented>
                <Button tabLink="#tab1" active>Tab 1</Button>
                <Button tabLink="#tab2">Tab 2</Button>
              </ButtonsSegmented>
            </Subnavbar>
        </Page>
    );
};
