import NfcReader from "./NfcReader";

function App() {
  const hasNFC = ("NDEFReader" in window);
  return (
    <div
      style={{
        background: hasNFC ? "green" : "red",
        width: "100vw",
        minHeight: "100vh",
        fontFamily: "system-ui",
        display: "flex",
        flexDirection:'column',
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {process.env.NODE_ENV === "development" && (
        <>
          <NfcReader />
        </>
      )}
      {hasNFC ? (
        <>
          <h1 style={{ color: "white" }}>TIENE NFC ✅</h1>
          <br />
          <NfcReader />
        </>
      ) : (
        <h1 style={{ color: "white" }}>NO TIENE NFC 😢</h1>
      )}
    </div>
  );
}

export default App;
