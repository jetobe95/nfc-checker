import { useState } from "react";

const NfcReader = () => {
  const [log,setLog] =useState('')
  const append=(newLog)=>setLog(log=>`${newLog}\n${log}`)
  const scanNfc = () => {
    setLog('')
    try {
      append('...')
      append('...')
      append('...')
      const ndef = new NDEFReader();
      append('...')
      ndef
        .scan()
        .then(() => {
          append("Scan started successfully.");
          ndef.onreadingerror = () => {
            append("Cannot read data from the NFC tag. Try another one?");
          };
          ndef.onreading = (event) => {
            append("NDEF message read.");
            append(JSON.stringify(event));
          };
        })
        .catch((error) => {
          append(`Error! Scan failed to start: ${error}.`);
        });
    } catch (error) {
      append(`Error! Scan failed to start: ${error}.`);
    }
  };
  return (
    <div style={{textAlign:'center'}}>
      <button onClick={scanNfc}>Iniciar lectura de NFC</button>
      <hr />
      {log && <pre>{log}</pre>}
    </div>
  );
};

export default NfcReader;
