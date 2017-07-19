import React from 'react';
import {Page, ContentBlock, Navbar, List, ListItem, FormLabel, FormInput} from 'framework7-react';

export const KForm_Elements = () => {
    return (
        <Page>
            <Navbar title="About" backLink="Back" sliding />
            <List form>

            <ListItem>
              <FormLabel>Name</FormLabel>
              <FormInput type="text" placeholder="Name"/>
            </ListItem>

            <ListItem>
              <FormLabel>Name</FormLabel>
              <FormInput type="password" placeholder="Password"/>
            </ListItem>

            <ListItem>
              <FormLabel>Gender</FormLabel>
              <FormInput type="select">
                <option value="1">Male</option>
                <option value="1">Female</option>
              </FormInput>
            </ListItem>

            <ListItem>
              <FormLabel>Switch</FormLabel>
              <FormInput type="switch" onChange={{}}></FormInput>
            </ListItem>

            <ListItem>
              <FormLabel>Range</FormLabel>
              <FormInput type="range" min="0" max="100" step="1" value="90"></FormInput>
            </ListItem>

            <ListItem>
              <FormLabel>Textarea</FormLabel>
              <FormInput type="textarea" placeholder="Textarea"></FormInput>
            </ListItem>
          </List>
        </Page>
    );
};
