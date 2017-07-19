import React from 'react';
import {Page, ContentBlock, Navbar, NavRight, List ,ListItem, Link} from 'framework7-react';

export const KSortableList = () => {

  this.state = {
    sorting: false,
    items: [1, 2, 3, 4, 5]
  };


  return (
      <Page>
        <Navbar backLink="Back" title="Sortable" sliding>
          <NavRight>
            <Link toggleSortable="#sortable">{'Open'}</Link>
          </NavRight>
        </Navbar>

        <List
          id="sortable"
          sortable
          onSortableSort={{}}
          onSortableOpen={{}}
          onSortableClose={{}}
        >
          {this.state.items.map((item) => (
            <ListItem title={'Item ' + item}></ListItem>
          ))}
        </List>
      </Page>
    );
  };


  // onOpen() {
  //   this.setState({
  //     sorting: !this.state.sorting,
  //     ...this.state
  //   });
  // }
  //
  // onClose() {
  //   this.setState({
  //     sorting: !this.state.sorting,
  //     ...this.state
  //   });
  // }
  //
  // onSort(event, indexes) {
  //     console.log('sort', indexes);
  // }
