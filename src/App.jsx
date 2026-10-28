import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import Header from "./assets/components/Header.jsx";
import Navbar from "./assets/components/Navbar.jsx";
import Footer from "./assets/components/Footer.jsx";
import StudentCard from "./assets/components/StudentCard.jsx";
 
import salem from './salem.jpg';
import sara from './sara.jpg';
import marem from './marem.jpg';

const students = [
  {
  "nom" : "Chakroun",
  "pre" : "Montassar",
  "mail" : "montassarchakroun65@gmail.com",
  "num" : "+216 25104468",
  "fil" : "Genie Logiciel et systemes d'information",
  "groupe" : "GLSID",
  "ville" : "Moknin",
  "image" : "montassar.JPEG",
},

  {
    nom: "Boubaker",
    pre: "Slim",
    mail: "slim@gmail.com",
    num: "12345678",
    fil: "Informatique",
    groupe: "A",
    ville: "Tunis",
    image: salem
  },
  {
    nom: "Trabelsi",
    pre: "Sarra",
    mail: "sarra@gmail.com",
    num: "22345678",
    fil: "Informatique",
    groupe: "B",
    ville: "Sousse",
    image: sara
  },
  {
    nom: "Khalfallah",
    pre: "Mariem",
    mail: "mariem@gmail.com",
    num: "32345678",
    fil: "Informatique",
    groupe: "A",
    ville: "Monastir",
    image: marem
  }
];


function App() {
  return (
    <div>
      <Header />

      <Navbar />

      <main id="etudiants">
        <h2>Liste des étudiants</h2>

        <div className="students-list">
          {students.map((student) => (
            <StudentCard
              key={student.mail}
              nom={student.nom}
              pre={student.pre}
              mail={student.mail}
              num={student.num}
              fil={student.fil}
              groupe={student.groupe}
              ville={student.ville}
              image={student.image}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;