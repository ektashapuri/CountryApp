import React, {Component} from 'react';
import SearchInputComponent from './SearchInputComponent';
import TypeaAheadComp from './TypeaAheadComp';
import IndividualContinentComp from './IndividualContinentComp';
import IndividualCountryComp from './IndividualCountryComp';

export default class MainContainer extends Component {

  constructor(props){
    super(props);
  }

  render() {
    const countryList = [
    	{
    		"continent": "Africa",
    		"countries": [
    			{
    				"name": "Nigeria",
    				"flag": "🇳🇬"
    			},
    			{
    				"name": "Ethiopia",
    				"flag": "🇪🇹"
    			},
    			{
    				"name": "Egypt",
    				"flag": "🇪🇬"
    			},
    			{
    				"name": "DR Congo",
    				"flag": "🇨🇩"
    			},
    			{
    				"name": "South Africa",
    				"flag": "🇿🇦"
    			}
    		]
    	},
    	{
    		"continent": "America",
    		"countries": [
    			{
    				"name": "USA",
    				"flag": "🇺🇸"
    			},
    			{
    				"name": "Brazil",
    				"flag": "🇧🇷"
    			},
    			{
    				"name": "Mexico",
    				"flag": "🇲🇽"
    			},
    			{
    				"name": "Colombia",
    				"flag": "🇨🇴"
    			},
    			{
    				"name": "Argentina",
    				"flag": "🇦🇷"
    			}
    		]
    	},
    	{
    		"continent": "Asia",
    		"countries": [
    			{
    				"name": "China",
    				"flag": "🇨🇳"
    			},
    			{
    				"name": "India",
    				"flag": "🇮🇳"
    			},
    			{
    				"name": "Indonesia",
    				"flag": "🇮🇩"
    			},
    			{
    				"name": "Pakistan",
    				"flag": "🇵🇰"
    			},
    			{
    				"name": "Bangladesh",
    				"flag": "🇧🇩"
    			}
    		]
    	},
    	{
    		"continent": "Europe",
    		"countries": [
    			{
    				"name": "Russia",
    				"flag": "🇷🇺"
    			},
    			{
    				"name": "Germany",
    				"flag": "🇩🇪"
    			},
    			{
    				"name": "UK",
    				"flag": "🇬🇧"
    			},
    			{
    				"name": "France",
    				"flag": "🇫🇷"
    			},
    			{
    				"name": "Italy",
    				"flag": "🇮🇹"
    			}
    		]
    	},
    	{
    		"continent": "Oceania",
    		"countries": [
    			{
    				"name": "Australia",
    				"flag": "🇦🇺"
    			},
    			{
    				"name": "Papua New Guinea",
    				"flag": "🇵🇬"
    			},
    			{
    				"name": "New Zealand",
    				"flag": "🇳🇿"
    			},
    			{
    				"name": "Fiji",
    				"flag": "🇫🇯"
    			},
    			{
    				"name": "Solomon Islands",
    				"flag": "🇸🇧"
    			}
    		]
    	}
    ]

    return (
      <div>
        <div className="header">
          <h1 className="">Flag Picker</h1>
          <div className="">This app will help you learn flags around the world in 3 steps</div>
        </div>
        {countryList.length &&
          <SearchInputComponent data={countryList} />
        }
      </div>
    )
  }
}
