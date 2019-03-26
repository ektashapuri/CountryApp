import React, {Component} from 'react';
import IndividualListComp from './IndividualListComp';

export default class SearchInputComponent extends Component {
  state = {
    dataList: this.props.data,
    countryData: [],
    continentData: [],
    selectedContinent: {},
    selectedCountry: [],
    selectedContinentName: '',
    continentList: true,
    countryList: false,
    flagList: false
  }

  updateContinentValue = (ev) => {
    const {dataList} = this.state;
    const {value} = ev.target;
    const filteredData = dataList.filter((cont) => {
      return cont.continent.toLowerCase().includes(value.toLowerCase())
    })
    this.setState({continentData: filteredData})
  }

  updateCountryValue(ev){
    const {continentData} = this.state;
    const {value} = ev.target;
    const filteredData = continentData.countries.filter((cont) => {
      return cont.name.toLowerCase().includes(value.toLowerCase())
    })
    this.setState({countryData: filteredData})
  }

  removeFlags = () => {
    this.setState({selectedCountry: [], countryList: false, flagList: false, selectedContinentName: ''});
  }

  selectContinent = (selected) => {
    const {continentData} = this.state;
    this.refs.continentInput.value = selected.continent;
    this.setState({continentList: false, countryList: true, continentData: selected, selectedContinentName: selected.continent})
  }

  selectCountry = (selected) => {
    let selectedCountry = this.state.selectedCountry;
    const isSelecetd = selectedCountry.find(country => country.name === selected.name);
    if (isSelecetd) {
      selectedCountry = selectedCountry.filter(country => country.name !== selected.name)
    } else {
      selectedCountry.push(selected);
    }
    this.setState({selectedCountry, flagList: true})
  }

  showFlag = () => {
    let selectedCountry = this.state.selectedCountry;
    const flags = selectedCountry.map(country => country.flag);
    return flags;
  }

  render() {
    const {continentData, countryData, continentList, countryList, selectedCountry, flagList, selectedContinent, selectedContinentName} = this.state;
    return(
      <div className='wrapper'>

        <div className="step_one">
          <div className="steps">Step 1 </div>
          <div className="instruction">Select a continent</div>
          <input ref='continentInput' onChange={(event) => this.updateContinentValue(event)} onFocus={(event) => this.updateContinentValue(event)} />
          {continentList &&
            <IndividualListComp onClickContinent={this.selectContinent}  dataType='continent' data={continentData}/>
          }
            <div className="selectedContinent">You Selected</div>
            <div className="selContinentName">{selectedContinentName}</div>
        </div>

        {countryList &&
          <div className="step_two">
            <div className="steps">Step 2 </div>
            <div className="instruction">Now, select a country</div>
            <input onFocus={(event) => this.updateCountryValue(event)} onChange={(event) => this.updateCountryValue(event)} />
              <IndividualListComp selectedCountry={selectedCountry} onClickCountry={this.selectCountry} dataType='countries' data={countryData}/>
          </div>
        }
        {flagList &&
          <div className="step_three">
            <div className="steps">Selected flags</div>
            <p className="flag"> {this.showFlag()} </p>
            <button onClick={this.removeFlags} className="addBtn">Clear Flags</button>
          </div>
        }
      </div>
    )
  }
}
