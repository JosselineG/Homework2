import React from 'react'
import Form from './Form';
import Table from './Table';


class LinkContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {favLinks: [] }
    /* TODO - Create state object for storing favLinks */
  }

  handleRemove = (index) => {

    const favLinksdeleted = this.state.favLinks;
     favLinksdeleted.splice(index, 1);

    this.setState({favLinks: favLinksdeleted})
   
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
  }

  handleSubmit = (favLink) => {

    let oldData = this.state.favLinks
    console.log(...oldData, favLink)
        
    this.setState({favLinks: [...oldData, favLink]})



    /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
  }

  render() {
    return (
      <div className="container">
        <h1>My Favorite Links</h1>
        <p>Add a new url with a name and link to the table.</p>
        
        
        <Table linkData = {this.state.favLinks} removeLink = {this.handleRemove} />
        
    
        {/*TODO - Add Table Component */}

        <br />

        <h3>Add New</h3>
        <Form onNewSubmit = {this.handleSubmit}/>
        {/*TODO - Add Form Component */}
      </div>
    )
  }
}

export default LinkContainer
