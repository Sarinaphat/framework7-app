import React from 'react';
import {Page, ContentBlock, Navbar, LoginScreen, LoginScreenTitle, List, ListItem, FormLabel, FormInput, ListButton, ListLabel, View, Pages} from 'framework7-react';

export const KLogin = () => {
    return (
        <Page>
            <Navbar title="About" backLink="Back" sliding />

              <View>
                <Pages LoginScreen>
                  <Page loginScreen>
                    <LoginScreenTitle>My App</LoginScreenTitle>
                    <List form>
                      <ListItem>
                        <FormLabel>Username</FormLabel>
                        <FormInput name="username" type="text" placeholder="Username"></FormInput>
                      </ListItem>
                      <ListItem>
                        <FormLabel>Password</FormLabel>
                        <FormInput name="password" type="password" placeholder="Password"></FormInput>
                      </ListItem>
                    </List>
                    <List>
                      <ListButton title="Sign In" closeLoginScreen></ListButton>
                      <ListLabel>
                        <p>Click Sign In to close Login Screen</p>
                      </ListLabel>
                    </List>
                  </Page>
                </Pages>
              </View>

        </Page>
    );
};
