import {useState} from 'react';
import { faker } from '@faker-js/faker';

const FakerGenarator = ()=>{
    const generateNames = (count) => {
        const names = [];
        for (let i = 0; i < count; i++) {
          names.push(faker.person.fullName());
        }
        return names;
      };
    
      const [nameCount, setNameCount] = useState(1);
      const [generatedNames, setGeneratedNames] = useState([]);
    
      const handleGenerateNames = () => {
        const names = generateNames(nameCount);
        setGeneratedNames(names);
      };
    
      const handleInputChange = (event) => {
        const count = parseInt(event.target.value, 10);
        setNameCount(count);
      };
      return(
        <div >
        <h1 className='justify-center text-bg-primary'>Generador de Nombres</h1>
        <label>
        Cantidad de nombres a generar:
        <input type="number" value={nameCount} onChange={handleInputChange} />
        </label>
        <br />
        <button type="button" className="btn btn-success" onClick={handleGenerateNames}>Generar Nombres</button>
        <ul>
        {generatedNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
        </ul>
        </div>
      )
}

export {FakerGenarator}