import React, { Component } from 'react';
import Searchbox from './Searchbox';
import Profileslist from './Profileslist';
import Filterbutton from './Filterbutton';
import './App.css';



class App extends Component {

constructor(){  

    super()
    this.state= {
        profiles:[],
        searchfield: '',
        option: '',
    }
}


onchangesearch= (event) => this.setState({searchfield: event.target.value});
onfilterchange= (event) =>{
    this.setState({option: event.target.value })
    
    };




    render() { 
        //Destructuring
     const {searchfield,profiles,option}= this.state;
     console.log(option)
     const newprofiles=()=>{
        this.setState((state, props)=>({
            profiles: state.profiles.filter(i=>(
                 i.Gender.Male.toLowerCase()=== state.option.toLowerCase()
            ))
    
        }))
    }

     
     const filteredprofiles= profiles.filter(items=> (items.FirstName.toLowerCase().includes(searchfield.toLowerCase())))

    
        //if and else statement below (ternary operators)
        return(
            
        <div className="tc">
        <h1 className="f1" >ENYE PROJECT</h1>
        <Searchbox  searchChange={this.onchangesearch}/>
        <Filterbutton filterChange={(e)=>{this.onfilterchange(e)}}   newprofiles={newprofiles} />
        <Profileslist profiles={filteredprofiles}/>
        </div>
        )
}

componentDidMount(){
    fetch('https://api.enye.tech/v1/challenge/records')
    .then(response=>{
        return response.json();
    })
    .then(
      users=>{
          console.log(users)
        this.setState({profiles:users.records.profiles})})
}
}




export default App;