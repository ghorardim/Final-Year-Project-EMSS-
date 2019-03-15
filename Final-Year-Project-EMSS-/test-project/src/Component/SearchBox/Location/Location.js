import React, {Component} from 'react'
import Autosuggest from 'react-autosuggest';
import './Location.css'
const languages = [
  {
name: 'BARGUNA',
},
{
name: 'BARISAL',
},
{
name: 'BHOLA',
},
{
name: 'JHALOKATI',
},
{
name: 'PATUAKHALI',
},
{
name: 'PIROJPUR',
},
{
name: 'BANDARBAN',
},
{
name: 'BRAHMANBARIA',
},
{
name: 'CHANDPUR',
},
{
name: 'CHITTAGONG',
},
{
name: 'COMILLA',
},
{
name: "COX'S BAZAR",
},
{
name: 'FENI',
},
{
name: 'KHAGRACHHARI',
},
{
name: 'LAKSHMIPUR',
},
{
name: 'NOAKHALI',
},
{
name: 'RANGAMATI',
},
{
name: 'DHAKA',
},
{
name: 'FARIDPUR',
},
{
name: 'GAZIPUR',
},
{
name: 'GOPALGANJ',
},
{
name: 'JAMALPUR',
},
{
name: 'KISHOREGONJ',
},
{
name: 'MADARIPUR',
},
{
name: 'MANIKGANJ',
},
{
name: 'MUNSHIGANJ',
},
{
name: 'MYMENSINGH',
},
{
name: 'NARAYANGANJ',
},
{
name: 'NARSINGDI',
},
{
name: 'NETRAKONA',
},
{
name: 'RAJBARI',
},
{
name: 'SHARIATPUR',
},
{
name: 'SHERPUR',
},
{
name: 'TANGAIL',
},
{
name: 'BAGERHAT',
},
{
name: 'CHUADANGA',
},
{
name: 'JESSORE',
},
{
name: 'JHENAIDAH',
},
{
name: 'KHULNA',
},
{
name: 'KUSHTIA',
},
{
name: 'MAGURA',
},
{
name: 'MEHERPUR',
},
{
name: 'NARAIL',
},
{
name: 'SATKHIRA',
},
{
name: 'BOGRA',
},
{
name: 'CHAPAINABABGANJ',
},
{
name: 'JOYPURHAT',
},
{
name: 'PABNA',
},
{
name: 'NAOGAON',
},
{
name: 'NATORE',
},
{
name: 'RAJSHAHI',
},
{
name: 'SIRAJGANJ',
},
{
name: 'DINAJPUR',
},
{
name: 'GAIBANDHA',
},
{
name: 'KURIGRAM,',
},
{
name: 'LALMONIRHAT',
},
{
name: 'NILPHAMARI',
},
{
name: 'PANCHAGARH',
},
{
name: 'RANGPUR',
},
{
name: 'THAKURGAON',
},
{
name: 'HABIGANJ',
},
{
name: 'MAULVIBAZAR',
},
{
name: 'SUNAMGANJ',
},
{
name: 'SYLHET',
}

];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());

  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return languages.filter(language => regex.test(language.name));
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}

class Location extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Location....",
      value,
      onChange: this.onChange
    };

    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps} />
    );
  }
}
export default Location
