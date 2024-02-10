import "./App.css";

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);

  return (
    <>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
