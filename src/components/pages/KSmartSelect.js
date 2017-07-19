import React from 'react';
import {Page, ContentBlock, Navbar, List, ListItem, select } from 'framework7-react';

export const KSmartSelect = () => {
    return (
        <Page>
            <Navbar title="About" backLink="Back" sliding />
            <List form>

            <ListItem smartSelect title="Fruit">
              <select>
                <option value="apple">Apple</option>
                <option value="pineapple">Pineapple</option>
                <option value="pear">Pear</option>
                <option value="orange">Orange</option>
                <option value="melon">Melon</option>
                <option value="peach">Peach</option>
                <option value="banana">Banana</option>
              </select>
            </ListItem>

            <ListItem smartSelect smartSelectSearchbar title="Car">
              <select name="car" multiple="multiple" defaultValue={['honda', 'audi', 'ford']}>
                <optgroup label="Japanese">
                  <option value="honda">Honda</option>
                  <option value="lexus">Lexus</option>
                  <option value="mazda">Mazda</option>
                  <option value="nissan">Nissan</option>
                  <option value="toyota">Toyota</option>
                </optgroup>
                <optgroup label="German">
                  <option value="audi">Audi</option>
                  <option value="bmw">BMW</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="vw">Volkswagen</option>
                  <option value="volvo">Volvo</option>
                </optgroup>
                <optgroup label="American">
                  <option value="cadillac">Cadillac</option>
                  <option value="chrysler">Chrysler</option>
                  <option value="dodge">Dodge</option>
                  <option value="ford">Ford</option>
                </optgroup>
              </select>
            </ListItem>

            <ListItem smartSelect smartSelectBackOnSelect title="Mac or Windows">
              <select name="mac-windows">
                <option value="mac">Mac</option>
                <option value="windows">Windows</option>
              </select>
            </ListItem>
          </List>
        </Page>
    );
};
