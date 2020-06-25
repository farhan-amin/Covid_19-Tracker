import React from 'react';
import './App.css';
import { Cards } from './Component/Card/Cards';
import { Chart } from './Component/Chart/Chart';
import { CountryPick } from './Component/CountryPick/CountryPick';
import {fatchData} from './Api/indexapi';
import coronaImage from './Pics/rendered-3.jpg';






export default class App extends React.Component{
  state={
    data: [],
    country: '',
  }
  async componentDidMount(){
    const fatchedData = await fatchData();
    this.setState ({data: fatchedData});
    //console.log(fatchedData);
    
  }
   handleCountryChange= async (country)  => {
    const fatchedData = await fatchData(country);
    this.setState ({data: fatchedData , country: country});

    //console.log(fatchedData);
  }
  render() {
    
    return (
      <div>
      
       <div className='Container'>
       
      <img className='image' src={coronaImage} alt='Covid-19' />
     
    <Cards data={this.state.data} />
    <CountryPick handleCountryChange= {this.handleCountryChange} />
    <div>
      <h4 className='Design'> <i>global statistics of COVID-19</i></h4>
      </div>
    <Chart data={this.state.data}  country={this.state.country} />
<br />
<br />
      <h3 className='copyRight'> © — Syed Farhan Amin</h3>
      </div>
      </div>
    )
  }
}






