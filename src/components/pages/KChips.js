import React from 'react';
import {Page, ContentBlock, Navbar, Chip} from 'framework7-react';

export const KChips = () => {
    return (
        <Page>
            <Navbar title="About" backLink="Back" sliding />

            <Chip text="Example Chip"></Chip>

            <Chip text="Another Chip" bg="red" color="white"></Chip>

            <Chip text="Jane Doe" media='<img src="http://lorempixel.com/100/100/people/9/">'></Chip>

            <Chip text="Another Chip" deleteable onDelete={{}}></Chip>

            <Chip text="Jane Doe" media='<img src="http://lorempixel.com/100/100/people/9/">' media-bg="red" deleteable onDelete={{}}></Chip>
        </Page>
    );
};
