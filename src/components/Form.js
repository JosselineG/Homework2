import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
        
        this.state = {name:"", URL:""};

        // This binding makes `this` work in the callback
        this.handleChange = this.handleChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
        /*
            TODO - set initial state for link name and URL 

        */
    }

    handleChange = event => {
        
       // prevent page reloads form event
       event.preventDefault(); 

        this.setState({[event.target.name] : event.target.value})
         // update the state everytime the form changes
         /* NOTE: [event.target.name] is used to update object properly, this way 
          I can have multiple react inputs that have a different name prperty 
          and using the same onChange handler. */
      
        /*
            TODO - Logic for changing state based on form changes
        */
    }

    onFormSubmit = (event) => {

        // to prevent page reload on form submit
        event.preventDefault();
       
        let newerLink = {name: this.state.name, URL: this.state.URL};
        this.props.onNewSubmit(newerLink);
       // calls the callback function from LinkContainer and sends data from state
        
        
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */

    }

    render() {

        return(
            <form>
                <label htmlFor = 'name'> Name:  </label>  
                <input
                  type = "text" 
                  name= "name"
                  id = "name"
                  value = {this.state.name}
                  onChange = {this.handleChange}
                />
                 
                <label htmlFor= 'URL'> URL:  </label>
                <input
                type = "text"
                name = "URL"
                id = "URL"
                value = {this.state.URL}
                onChange = {this.handleChange}
                />
                
                 <button type="submit" onClick= {(this.onFormSubmit)}>Submit</button>
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}

            </form>
            
        )
    
    }
}

export default Form;
