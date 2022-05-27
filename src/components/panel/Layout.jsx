import Header from "./Header";
import Footer from "./Footer";

const Layout = ({vista, nombre}) => {


    return ( 
        <section className='layout'>
            <div className='header'>
                <Header nombre={nombre}/>
            </div>
            <div className='main'>
                {vista}
            </div>
            <div className='footer'>
                <Footer/>
            </div>
        </section>
     );
}
 
export default Layout;