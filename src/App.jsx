import './App.css';
import Home from './components/Home';

const App = () => {
  const sitename = 'WSK Superrrr site';

  return (
    <>
      <h1 className="otsikko">{sitename}</h1>
      <Home />
    </>
  );
};
export default App;
