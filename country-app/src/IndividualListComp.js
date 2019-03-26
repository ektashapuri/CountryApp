import React, {Component} from 'react';

export default class IndividualListComp extends Component {
  mapdata = () => {
    const {data, dataType} = this.props;
    return data.map((cont, index) => {
      let options;
      if(dataType==='continent'){
        options = <li key={index} className="continentName" onClick={() => this.selectContinent(index)}>
                    {cont[dataType]}
                  </li>
      }else{
        options = <li key={index} className="continentName" onClick={() => this.selectCountry(index)}>
                    <label><input type="checkbox" selected={!!this.isSelected(index)}/>
                      <span>{cont.name}</span>
                    </label>
                  </li>
      }
      return options
    });

  }

  isSelected = (index) => {
    const {data, selectedCountry} = this.props;
    return selectedCountry && selectedCountry.find(country => country.name === data[index].name);
  }

  selectContinent = (idx) => {
    const {onClickContinent, data} = this.props;
    onClickContinent(data[idx]);
  }
  selectCountry = (idx) => {
    const {onClickCountry, data} = this.props;
    onClickCountry(data[idx]);
  }

  render () {
    return(
      <ul>
        {this.mapdata()}
        </ul>
    )
  }
}
