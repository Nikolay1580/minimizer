import React, {useState, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import { Canvas, useFrame } from "@react-three/fiber";

function App() {

  const [range, setrange] = useState(100);
  const changeRange = (event: any) => {
    setrange(event.target.value);
  };

  var min: number = (Math.round(Math.cbrt((range*4 )/2) * 100) / 100);
  var derivativeArea: number = range * 8;
  derivativeArea = Math.round(2 + derivativeArea / Math.pow(min, 3) *100) / 100;
  var isDerivativePositive: boolean = derivativeArea >= 0;
  var yvalue: number = Math.round( (range / Math.pow(min, 2)) * 10) / 10;
  console.log(derivativeArea);

  return (
        <div className="body-div">
          <br></br>
          <br></br>
          <h1 className="intro-text">Minimizing Surface Area</h1>
          <h3 className="intro-text">A math IA project </h3>
          <p className="about-text">
            For my math IA I chose to otpimise the surface area needed to fit all of my shirts.
            This meant that I needed to find the lowest surface area needed to fit the volume of the shirts.
            By doing so I not only saved money but also lowered the wasted excess product. 
            This website is done to help others lower down the excess of material needed for packaging.
            You just need to input the volume of your cargo and the website will provide the needed dimensions of a box.
          </p>
          <h4 className="regular-text">Pick the size of your volume!</h4>
          <input
            className="slider"
            type="range" 
            min="0" 
            max="50000"
            onChange={changeRange}
            step={1}
            value={range}>
          </input>
          <p className="range">{range}cm&#179;</p>
          <p className="regular-text"> We know the formula for the Area of a cub</p>
          <p className="equation">A(x) = x&#178; + 4xy </p>
          <p className="regular-text"> we can solve for y with our volume area and we get</p>
          <p className="equation"> y = {range}&frasl;<sub>x</sub> </p>
          <p className="equation"> &there4; A(x) =  x&#178; + {range*4}&frasl;<sub>x&#178;</sub> </p>
          <p className="equation"> &there4; x = &#179;&radic;{range/2} = {min}cm  </p>
          {isDerivativePositive ? (
            <p className="regular-text"> The second derivate {derivativeArea} is &ge; 0 meaning this is a local minimum</p>
          ) : (
            <p className="regular-text"> The second derivate {derivativeArea} is &le; 0 meaning this is not a local minimum, try a different value</p>
          )}
          <h3 className="regular-text"> The last step is to solve for y by inputing x</h3>
          <p className="equation"> y = {range}&frasl;<sub>{min}&#178;</sub> </p>
          <p className="equation"> &there4; y = {yvalue}cm</p>
          <h3 className="regular-text"> To fit {range}cm&#179; you need a cuboid with a base value of x = {min}cm and and a height of y = {yvalue}cm</h3>
          <br></br>
          <br></br>
        </div>
        
  );
}

export default App;
