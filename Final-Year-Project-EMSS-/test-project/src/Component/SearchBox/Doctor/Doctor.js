import React, {Component} from 'react'
import DAutosuggest from 'react-autosuggest';
import './Doctor.css'
const languages = [
  {
name: 'Pediatric and Neonatology',
},
{
name: 'Anesthesiology',
},
{
name: 'Blood Bank',
},
{
name: 'Burn, Plastic & Cosmetic Surgery',
},
{
name: 'Cardiac Surgery',
},
{
name: 'Cardiology',
},
{
name: 'Dental Clinic',
},
{
name: 'Dermatology & Hair Transplant Surgery',
},
{
name: 'Dermatology & Venereology',
},
{
name: 'Diabetology & Endocrinology',
},
{
name: 'Emergency',
},
{
name: 'Endocrinology',
},
{
name: 'ENT ( Ear,Nose & Throat)',
},
{
name: 'Eye Centre',
},
{
name: 'Fertility Centre',
},
{
name: 'Gastroenterology',
},
{
name: 'General & Colorectal Surgery',
},
{
name: 'General & Pancreatic Surgery',
},
{
name: 'General Surgery',
},
{
name: 'Gynecology  & Obstetrics',
},
{
name: 'Health Check-Up & Corporate Services',
},
{
name: 'Hematology',
},
{
name: 'Hepatology',
},
{
name: 'Internal Medicine',
},
{
name: 'Internal Medicine & Reumatology',
},
{
name: 'Interventional Cardiology',
},
{
name: 'Interventional Neurology',
},
{
name: 'Laparoscopic & Colorectal Surgery',
},
{
name: 'Liver & Medicine',
},
{
name: 'Medicine',
},
{
name: 'Nephrology',
},
{
name: 'Neurology',
},
{
name: 'Neuromedicine',
},
{
name: 'Neurosurgery',
},
{
name: 'Nursing',
},
{
name: 'Nutrition & Dietetics',
},
{
name: 'Oncology',
},
{
name: 'Ophthalmology',
},
{
name: 'Orthopedic',
},
{
name: 'Orthopedic & Trauma',
},
{
name: 'Paediatric Cardiology',
},
{
name: 'Paediatric Nephrology',
},
{
name: 'Physical Medicine',
},
{
name: 'Physical Medicine & Physiotherapy',
},
{
name: 'Psychiatry',
},
{
name: 'Pulmonology',
},
{
name: 'Radiology and Imaging',
},
{
name: 'Rheumatology',
},
{
name: 'Skin & VD',
},
{
name: 'Thorasic Surgery',
},
{
name: 'Urology',
},
{
name: 'Vaccination',
},
{
name: 'Vascular Surgery',
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

class Doctor extends React.Component {
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
      placeholder: "Search by Doctor specialty or disease...",
      value,
      onChange: this.onChange
    };

    return (
      <DAutosuggest className="Doctor-SearchBox"
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps} />
    );
  }
}
export default Doctor
