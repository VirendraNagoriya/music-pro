import React, { useState } from "react";

import "./styles.css";

const Music = {
  "hip hop":
    "1-Grandmaster Flash and the Furious Five, 'The Message'\n2-Sugarhill Gang, Rapper's Delight  \n 3-Afrika Bambaataa and the Soulsonic Force, 'Planet Rock' \n 4-Run-DMC, 'Sucker M.C.'s' \n  5-Run-DMC, 'Sucker M.C.'s'\n ",
  jazz:
    "1-Autumn Leaves – Cannonball Adderley\n 2-Georgia On My Mind – Billie Holiday. ...3-Round Midnight – Thelonious Monk. ...\n4-The Girl From Ipanema – Stan Getz. ...\n 5-Body and Soul – Coleman Hawkins. ...",
  folk:
    "1-This Land is Your Land Woody Guthrie	2:19\n2-Blowin' in the Wind Bob Dylan	2:45\n3-City of New Orleans Steve Goodman	3:50\n4-If I Had a Hammer (Hammer Song) Pete Seeger	1:56\n5-Where Have All The Flowers Gone? - Remastered The Kingston Trio	3:04\n",
  pop:
    "1-Single Ladies (Put a Ring on It)' by Beyoncé ...\n2-Umbrella' by Rihanna featuring Jay-Z. ..\n3-Shake it Off' by Taylor Swift. \n4-Toxic' by Britney Spears. ...\n5-Rolling in the Deep by Adele. ..\n",
  bollywood:
    "1-Chamak Challo (RaOne) -2011. ...\n2-Tumhi Ho Bandhu (Cocktail) – 2012. ...\n3-Tum Hi Ho (Aashiqui 2) – 2013. ...\n4-Galliyan (Ek Villain) – 2014. ...\n5-Banno Tera Swagger (Tanu Weds Manu Return) – 2015. ...\n",
  RnB: " "
};

export default function App() {
  const [meaning, setmeaning] = useState("  ");

  function changehandler(event) {
    var userinput = event.target.value;

    var meaning = Music[userinput];

    if (meaning === undefined) {
      meaning = (
        <span style={{ color: "red" }}>"sorry, Not present in DataBase"</span>
      );
    }

    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h2>
        <span style={{ fontSize: "50px" }}>
          <span style={{ color: "black" }}>M</span>
          <span style={{ color: "black" }}>U</span>
          <span style={{ color: "black" }}>I</span>
          <span style={{ color: "black" }}>S</span>
          <span style={{ color: "black" }}>I</span>
          <span style={{ color: "black" }}>C</span>
          <span style={{ color: "black" }}>-</span>
          <span style={{ color: "purple" }}>P</span>
          <span style={{ color: "purple" }}>R</span>
          <span style={{ color: "purple" }}>O</span>
        </span>
      </h2>

      <input
        style={{
          height: "60%",
          width: "80%",
          blockSize: 25,
          backgroundColor: "white",
          alignSelf: "center"
        }}
        placeholder="search like hip hop,jazz,pop,folk,bollywood........🔍"
        onChange={changehandler}
      />

      <h2>{meaning} </h2>
    </div>
  );
}
