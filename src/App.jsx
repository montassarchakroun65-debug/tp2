import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

const student = {
  "nom" : "Chakroun",
  "pre" : "Montassar",
  "mail" : "montassarchakroun65@gmail.com",
  "num" : "+216 25104468",
  "fil" : "Genie Logiciel et systemes d'information",
  "groupe" : "GLSID",
  "ville" : "Moknin",
  "image" : "montassar.JPEG",
}
function App() {
  return (
      <div>
        <img src={student.image} alt={student.nom} />
        <h1>Fiche étudiant</h1>
        <p>Nom & Prénom : {student.nom} {student.pre}</p>
        <p>Email : {student.mail}</p>
        <p>Telephone : {student.num}</p>
        <p>Filiere : {student.fil}</p>
        <p>Année d'étude : </p>
        <p>Groupe : {student.groupe}</p>
        <p>Ville : {student.ville}</p>
        <button>contacter</button>
      </div>
  );
}

export default App
