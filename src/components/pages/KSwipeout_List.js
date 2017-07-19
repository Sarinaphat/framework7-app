import React from 'react';
import {Page, ContentBlock, Navbar, List, ListItem, ListItemSwipeoutActions, ListItemSwipeoutButton} from 'framework7-react';

export const KSwipeout_List = () => {
    return (
        <Page>
            <Navbar title="About" backLink="Back" sliding />
            <List>
                <ListItem swipeout title="Item 1" onSwipeoutDeleted={{}}>
                  <ListItemSwipeoutActions>
                    <ListItemSwipeoutButton delete>Delete</ListItemSwipeoutButton>
                  </ListItemSwipeoutActions>
                </ListItem>
                <ListItem swipeout title="Item 2" onSwipeoutDeleted={{}}>
                  <ListItemSwipeoutActions>
                    <ListItemSwipeoutButton delete>Delete</ListItemSwipeoutButton>
                  </ListItemSwipeoutActions>
                </ListItem>
              </List>
        </Page>
    );
};
