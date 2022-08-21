
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App" style={{height:'100vh',
    backgroundImage:'url(https://stimg.cardekho.com/images/carexteriorimages/630x420/Tesla/Model-X/5253/1611841733029/front-left-side-47.jpg)',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover'
    }}>
     
     <Content />
     <Footer/>
    </div>
  );
}

export default App;
