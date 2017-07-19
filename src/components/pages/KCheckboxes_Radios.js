import React from 'react';
import {Page, ContentBlock, Navbar, List, ListItem} from 'framework7-react';

export const KCheckboxes_Radios = () => {
    return (
        <Page>
            <Navbar title="About" backLink="Back" sliding />
            <List form>
              <ListItem checkbox name="my-checkbox" value="1" title="Checkbox 1" checked></ListItem>
              <ListItem checkbox name="my-checkbox" value="2" title="Checkbox 1"></ListItem>
              <ListItem checkbox name="my-checkbox" value="3" title="Checkbox 1"></ListItem>
            </List>

            <List form>
              <ListItem radio name="my-radio" value="1" title="Radio 1" checked></ListItem>
              <ListItem radio name="my-radio" value="2" title="Radio 2"></ListItem>
              <ListItem radio name="my-radio" value="3" title="Radio 3"></ListItem>
            </List>
        </Page>
    );
};
