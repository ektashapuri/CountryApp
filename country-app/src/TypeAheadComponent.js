import React, {Component} from 'react';

export default class TypeaAheadComp extends Component {
  constructor(props){
    super(props);
  }
  render () {
    const {continent} = this.props.results;
    const options = this.props.results.map( (cont, index) => {
      return (
        <li key={index}>
          {cont.continent}
        </li>
      )
    })

    return(
      <div>
        <IndividualContinentComp continentData={options} />
      </div>
    )
  }
}
