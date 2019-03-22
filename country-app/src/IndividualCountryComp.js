import React, {Component} from 'react';

export default class IndividualCountryComp extends Component {
  constructor(props){
    super(props);
  }
  render () {
    const {country} = this.props.countryData;

    return(
      <div className='individualCountry'>
        <div className="countryName">{country}</div>
      </div>
    )
  }
}
