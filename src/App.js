import "bootstrap/dist/css/bootstrap.min.css";
import Navbar  from "./components/Navbar";
import CardHome from "./components/CardHome"
import CardImmigration from "./components/CardImmigration"
import CardNotarization from "./components/CardNotarization"
import CardTaxes from "./components/CardTaxes"
import CardAbout from "./components/CardAbout"
import CardContact from "./components/CardContact"

import "./App.css"
import { useState } from "react";
function App() {
  const sections = [
    { name: "Home", 
      name_sp: "Inicio",
      id: "home" , 
      },
    { name: "Taxes", 
      name_sp: "Impuestos",
      id: "taxes",
      },
    { name: "Notarization", 
      name_sp: "Notarización",
      id: "notarization",
      },
    { name: "Immigration",
      name_sp: "Inmigración",
      id: "immigration",
       },
    { name: "About", 
      name_sp: "Acerca de",
      id: "about",
    },
    { name: "Contact", 
      name_sp: "Contacto",
      id: "contact",
    }
];
  // false = english
  // true = spanish
  const [language,setLanguage] = useState(true)

  const changeLanguage= () => {
    setLanguage(!language)
  }
  return (
    <div className="App">
      <Navbar
        sections={sections}
        language={language}
        changeLanguage={changeLanguage}
      />
      <div id="home">
        <CardHome language={language} />
      </div>
      <div id="taxes">
        <CardTaxes language={language} />
      </div>
      <div id="notarization">
        <CardNotarization language={language} />
      </div>
      <div id="immigration">
        <CardImmigration language={language} />
      </div>
      <div id="about">
        <CardAbout language={language} />
      </div>
      <div id="contact">
        <CardContact language={language} />
      </div>
    </div>
  );
}

export default App;
