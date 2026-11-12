import './App.css';
import Greeting from './components/Greeting';

const App = () => {
  const sitename = 'WSK Super site';

  return (
    <>
      <h1>{sitename}</h1>
      <p>Moro tässä on mahtava sivustoni {3 + 4}</p>
      <Greeting name="Ulla" age={23} insTeacher={true} />
      <Greeting name="Matti" />
      <Greeting name="Liisa" />
    </>
  );
};
export default App;
