import './App.css';
import {useEffect} from 'react'
import Navbar from './components/Navbar';
import Content from './components/Content/Content'
import Footer from './components/Footer';


function App() {
    useEffect(() => {
      document.title = 'Jay Court';
    }, []);
  return (
    <div style={{display: 'flex', flexDirection:'column', height:'100vh', width:'100vw', justifyContent:'space-apart'}}>
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
