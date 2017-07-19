import React from 'react';
import {Page, ContentBlock, Navbar, Preloader} from 'framework7-react';

export const KPreloader = () => {
    return (
        <Page>
            <Navbar title="About" backLink="Back" sliding />
            <Preloader>
                <p>Hello</p>
            </Preloader>

            <Preloader color="red"></Preloader>
            <Preloader color="blue" size="44px"></Preloader>
        </Page>
    );
};
