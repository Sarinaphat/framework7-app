import React from 'react';
import {Page, Navbar, Actions, ActionsGroup, ActionsLabel, ActionsButton} from 'framework7-react';

export const KAction_Sheet = () => {
    return (
        <Page>
            <Navbar title="About" backLink="Back" sliding />


                <ActionsGroup>
                    <ActionsLabel>Hello</ActionsLabel>
                    <ActionsButton>Button 1</ActionsButton>
                    <ActionsButton onClick={{}}>Button 2</ActionsButton>
                </ActionsGroup>
                <ActionsGroup>
                    <ActionsButton color="red" bold>Cancel</ActionsButton>
                </ActionsGroup>
              

        </Page>
    );
};
