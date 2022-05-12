import {useState} from "react";

function App() {

const [numero, setNumero] = useState(1);


  return (
    <div>
      <p>O número atual é {numero}</p>
<p>
  <button title="Clique aqui homi" onClick={() => setNumero(numero+1)}>Clique aqui homi</button>
</p>

    </div>
    
  );
}

export default App;
