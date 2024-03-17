import './home.css';
import Header from '../../components/Header.jsx';
import Mid from '../../components/mid.jsx';
import Footer from '../../components/Footer.jsx';
import 'https://kit.fontawesome.com/cfdb111d3e.js';

function Home(){
    return(
        <>
        <div className="hbody">
        <Header/>
        <Mid/>
        <Footer/>
        </div>
        </>
    )
}

export default Home;