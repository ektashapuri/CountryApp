import React, {Component} from 'react';

export default class IndividualContinentComp extends Component {
  constructor(props){
    super(props);
  }
  render () {
    const {continent} = this.props.continentData;

    return(
      <div className='individualContinent'>
        <div className="continentName">{continent}</div>
      </div>
    )
  }
}
