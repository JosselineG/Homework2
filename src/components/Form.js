import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
        
        this.state = {linkName:"", URL:""};

        this.handleChange = this.handleChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
        /*
            TODO - set initial state for link name and URL 

        */
    }

    handleChange = event => {
        
        
        event.preventDefault(); 
       this.setState({[event.target.name] : event.target.value})
   
      
        /*
            TODO - Logic for changing state based on form changes
        */
    }

    onFormSubmit = (event) => {

        // to prevent page reload on form submit
        event.preventDefault();
       
        this.setState({linkName: "",URL: ""});
        let newerLink ={linkName: this.state.linkName, URL: this.state.URL};
        this.props.onNewSubmit(newerLink);
        
        
        
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */

    }

    render() {

        return(
            <form>
                <label htmlFor = 'linkName'> Name:  </label>  
                <input
                  type = "text" 
                  name= "linkName"
                  id = "linkName"
                  value = {this.state.linkName}
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
