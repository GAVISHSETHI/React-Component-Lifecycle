import React, { Component } from 'react';
import Wrapper from './update-no.jsx';
import {  Sidebar, Segment, Button,Grid, Menu, Image, Icon } from 'semantic-ui-react';

class Home extends Component {
state = { visible: false, render: '' };

toggleVisibility = () => this.setState({ visible: !this.state.visible })

handleUpdate = () => {
  this.setState({render: 'update'});
};

handleShouldUpdate = () => {
  this.setState({render: 'shouldupdate'});
};
renderHome = () => {
  switch(this.state.render) {
    case "update":
      return (<Wrapper />);
    case "shouldupdate":
      return (<a href="/should"> <Button>Should</Button></a>);
    default:
      return  (<Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlNE0n8qVxqUhmOSzabM771RD6nHyitZaJT1Okg5hdK15EAWm0GA' />);

  }
};

  render() {
    const { visible } = this.state;
    return (
      <div className="home" >
        <header as='h3' >
          <Image src='https://goevive.com/wp-content/uploads/2017/09/evive-logo_k131x34.jpg' />
        </header>

        <Grid>
          <Grid.Column computer={7}>

            <Button onClick={this.toggleVisibility}>MENU</Button>
            <Sidebar.Pushable   as={Segment}>
              <Sidebar as={Menu} animation='push' width='thin'  visible={visible} icon='labeled' vertical inverted>
                <Menu.Item name='Update' onClick={() => this.handleUpdate()}>
                  <Icon name='motorcycle' />
                  Update
                </Menu.Item>
                <Menu.Item name='shouldupdate' onClick={() => this.handleShouldUpdate()}>
                  <Icon name='rocket'/>
                  Should Update
                </Menu.Item>
              </Sidebar>
              <Sidebar.Pusher>
                <Segment basic style={{ minHeight:'300px'}}>
                  {this.renderHome()}
                </Segment>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </Grid.Column>
        </Grid>
      </div>

    );
  }
}

export default Home;
