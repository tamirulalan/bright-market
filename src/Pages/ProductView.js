import { useParams } from 'react-router-dom';
import Navbar from './Header';
import Footer from './Footer';

function ProductScreen() {
  
  const params = useParams();
  const { slug } = params;
  return (
    <div className="d-flex flex-column site-container">
    <Navbar/>
      <h1>{slug}</h1>
      <Footer/>
    </div>
  );
}
export default ProductScreen;
