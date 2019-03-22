import React, {Component} from 'react';

export default class SearchInputComponent extends Component {
  constructor(props){
    super(props);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.removeFlags = this.removeFlags.bind(this);
  }
  state = {
    inputValue: ''
  }

  updateInputValue(ev){
    this.setState({inputValue: ev.target.value});
    console.log(this.state.inputValue)
  }
  removeFlags(){
    console.log("REMOVE")
  }
  // createIndividualContinentComp = () => {
  //   return this.props.data.map( (continent, index) => {
  //     return (
  //       <IndividualContinentComp
  //         key={index}
  //         continentData={continent}
  //       />
  //     )
  //   })
  // }
  // createIndividualCountryComp = () => {
  //   return this.props.data.map( (country, index) => {
  //     return (
  //       <IndividualCountryComp
  //         key={index}
  //         countryData={country}
  //       />
  //     )
  //   })
  // }
  render() {
    const{list} = this.props.data;

    return(
      <div className='wrapper'>

        <div className="step_one">
          <div>Step 1 </div>
          <div>Select a continent</div>
          <input value={this.state.inputValue} onChange={(event) => this.updateInputValue(event)}/>

        </div>

        <div className="step_two">
          <div>Step 2 </div>
          <div>Now, select a country</div>
          <input/>

        </div>

        <div className="step_three">
          <div>Selected Flags</div>
          <div></div>
          <button onClick={this.removeFlags} className="addBtn">Clear Flags</button>
        </div>

        <TypeAheadComp results={this.props.data}/>

      </div>
    )
  }
}
