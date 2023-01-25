import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

function ProductScreen() {
  
  const params = useParams();
  const { slug } = params;
  return (
    <div>

    <Navbar/>
      <h1>{slug}</h1>
    </div>
  );
}
export default ProductScreen;
