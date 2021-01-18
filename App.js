import React, { Component } from 'react';
import Searchbox from './Searchbox';
import Profileslist from './Profileslist';
import FilterButton from './FilterButton';
import './App.css';



class App extends Component {
    constructor(props){  
        super(props);

        this.state= {
            profiles:[],
            searchfield: '',
            option: '',
            //if you can include a loader mad
            loading : true
        };

        this.onFilterChange = this.onFilterChange.bind(this);
        this.onChangeSearch = this.onChangeSearch.bind(this);
    };
    
    componentDidMount(){
        fetch('https://api.enye.tech/v1/challenge/records')
        .then(response=>{
            return response.json();
        })
        .then(users => {
            console.log(users)
            this.setState({profiles:users.records.profiles})
        })
        .catch(e => {
            console.log(e.message);
            //HANDLE ERROR APPROPRIATELY..
        });
    };

    onChangeSearch = e => this.setState({searchfield: e.target.value});
    
    onFilterChange = e => {
        this.setState({option: e.target.value});
    };

    render() { 
        //Destructuring
        const { searchfield, profiles, option } = this.state;
             
        const newProfiles = profiles.filter(profile => {
            if(option === ''){
                return true;
            }
            return profile.Gender === option;
        });
     
        const filteredProfiles = newProfiles.filter(profile => profile.FirstName.toLowerCase().includes(searchfield.toLowerCase()));
    
        return(
            <div className="tc">
                <h1 className="f1" >ENYE PROJECT</h1>
                <Searchbox  searchChange={e => this.onChangeSearch(e)}/>
                <FilterButton filterChange={e => this.onFilterChange(e) } />
                <Profileslist profiles={filteredProfiles}/>
            </div>
        );
    };
};




export default App;