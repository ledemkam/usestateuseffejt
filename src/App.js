import './App.css';
import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

function App() {
   // a la ligne 8 on a utilliser useState,pour cela on a une constance avec deux variables qui st par exemple data et setData
   // la premieere qui est data est la valeur du state,la second valeur qui est setData est la fonction qui va permettre
   //de mettre a jour le state,ensuite on a useState avec sa valeur initial(valeur initial ou valeur du depart)
   //example de fonction avec useState
   /*
   const [clicked, plusone] = useState(10)
   return(
      <div className="App">
      <p>nombre de fois clique : {clicked}</p>
      <button onClick={() => {plusone(clicked+1);}}>click moi</div>
      </div>
   )
   
   
   
   
   
   */
   const [data, setData] = useState([]);

   // ici on va utilliser useEffectqui est similaires a "componentDidMount et "componentDidupdate"
   // ici on va utilliser fecthData pour aller chercher les donnes
   //le resultat sera mit dans const result avec await axios
   useEffect(() => {
      //
      const fecthData = async () => {
         const result = await axios(
            'https://jsonplaceholder.typicode.com/posts',
         );
         setData(result.data); //ici setData nest utiliser pour mettre les resultats des donnes
      };
      fecthData(); // on lance la fonction pour aller chercher les data
   }, []);
   return (
      <Fragment>
         <ul>
            {data.map((item) => (
               <li key={item.id}>
                  <p>{item.title}</p>
               </li>
            ))}
         </ul>
      </Fragment>
   );
}

export default App;
