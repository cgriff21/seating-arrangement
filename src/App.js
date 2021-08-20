import {React, useState} from 'react';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

import SelectSearch, { fuzzySearch }  from 'react-select-search';
import 'react-select-search/style.css';

import './App.css';
import arrangement from './misc/arrangement.jpg'

// import samplePDF from './arrangement.pdf';
import people from './misc/list.js';


function App() {
  // const width = window.innerWidth;
  
  const [value, setValue] = useState("");
  const [person, setPerson] = useState({})


  // const [pageNumber] = useState(1);


  function change(option){    
    setValue();
    setPerson({table: option.table, chair: option.chair, name: option.name })
  }

  return (
    <div className="App">
      <header className="App-header">
      <SelectSearch
          options={people}
          value={value}
          onChange={(value , option) =>change(option)}
          search
          filterOptions={fuzzySearch}
          emptyMessage="Not found"
          placeholder="Please enter your name"
      />

      <div>
        {value !== "" &&
          <div className="welcome-div">
            <p className="welcome-text-main">Welcome {person.name}! </p>
            <p className="welcome-text">You are seated at: </p>
            <p className="welcome-text">Table {person.table} </p>
          </div>
        }
      </div>
    <div className="pdf">
      <img  className="pic" src={arrangement} alt="seating chart" />
    {/* <Document
        file={"https://www.dropbox.com/s/lwgszl6q64e155t/arrangement.pdf?dl=0"}
        renderMode='canvas'
        >
        <Page pageNumber={pageNumber}
         width={Math.min(width * 0.9)}
         />
      </Document> */}
         </div>
      </header>
    </div>
  );
}

export default App;
