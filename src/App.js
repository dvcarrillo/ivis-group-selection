import './App.css';
import Page from './components/Page';

const App = (props) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>IVIS Group Formation</h1>
        <h5>A D3-based tool for Information Visualization group formation</h5>
      </header>
      <div className="App-body">
        <Page />
      </div>
      <div className="App-footer">
          By <a href="https://github.com/guceda">Gonzalo Uceda</a> & <a href="https://github.com/dvcarrillo">David Vargas</a> for DH2321
      </div>
    </div>
  );
}

export default App;
