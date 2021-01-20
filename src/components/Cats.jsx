import React from 'react';
import { useState, useEffect } from 'react';

import axios from 'axios';

const Cats = ({Cats}) => {


    const [catUrl, setCatUrl] = useState('')
    
    const consultarAPI = () => {

      axios.get('https://api.thecatapi.com/v1/images/search')
      .then((response) => {
        console.log(response);
        setCatUrl(response.data[0])
      })
     .catch((error)=>{
        console.log(error);
     });
    }
  
    useEffect(() => {
      consultarAPI();

    }, [])
    

    return (

        <div className="card mt-4 text-center">
          <h1>Gatos api</h1>
            <div className="card-body">
              <img src={catUrl.url} className="img-fluid rounded" alt="200"/>
            </div>
            
            <button onClick={() =>consultarAPI()} className="btn btn-success mt-2" >Obtener</button>
        </div>

    )
}

export default Cats
