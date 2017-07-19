import React from 'react';
import {Page, ContentBlock, Navbar, Icon } from 'framework7-react';

export const KIcon = () => {
    return (
        <Page>
            <Navbar title="About" backLink="Back" sliding />

            <Icon icon="icon-back" ></Icon>


            <Icon icon="icon-home"></Icon>


            <Icon f7="home"></Icon>


            <Icon material="home"></Icon>


            <Icon fa="home"></Icon>


            <Icon ion="home"></Icon>


            <Icon f7="home" size="44px" color="blue"></Icon>


            <Icon ifIos="f7:home" ifMaterial="material:home"></Icon>
        </Page>
    );
};
