import { useState } from 'react';

const DynamicDivGenerator = () => {
  const [divs, setDivs] = useState([]);
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    
    if (!height || !width || !backgroundColor) {
      alert('Please fill in all fields.');
      return;
    }

   
    const newDiv = {
      height: `${height}px`,
      width: `${width}px`,
      backgroundColor,
    };

    
    setDivs([...divs, newDiv]);

    
    setHeight('');
    setWidth('');
    setBackgroundColor('');
  };

  return (
    <div>
      <h5>Dynamic Div Generator</h5>
      <form onSubmit={handleFormSubmit}>
        <label>
          Height (px):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
        <br />
        <label>
          Width (px):
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </label>
        <br />
        <label>
          Background Color:
          <input
            type="text"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add Div</button>
      </form>
      <div>
        {divs.map((div, index) => (
          <div
            key={index}
            style={{
              height: div.height,
              width: div.width,
              backgroundColor: div.backgroundColor,
              margin: '10px',
              alignItems: 'center',
            }}
          >
            <center>{`Div ${index + 1}`}</center>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default DynamicDivGenerator;
