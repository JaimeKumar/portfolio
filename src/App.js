import './App.css';
import Link from './Link';
import { v4 as uuidv4 } from 'uuid';
import trackLogo from './track-logo.png'
import cryptickleLogo from './cryptickle-logo.png'
import togoLogo from './todoLogo.png'

function App() {
  return (
    <div className="App">
      <div className="title">
        Jaime Kumar Portfolio
      </div>

      <div className="flexList">
        <div className="row">
          <Link id={uuidv4()} link='https://funny-empanada-4680e6.netlify.app/' logo={trackLogo} title='Track' />
          <Link id={uuidv4()} link='https://scintillating-tulumba-084a2f.netlify.app/' logo={cryptickleLogo} title='Cryptickle' />
          <Link id={uuidv4()} link='https://unrivaled-panda-64a9c1.netlify.app/' logo={todoLogo} title='Weekly Todoz' />
        </div>
      </div>
    </div>
  );
}

export default App;
