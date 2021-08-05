import './App.css';
import Navbar from './Component/Navbar/Navbar';
import MediaGallery from './Component/photo';
import Myself from './Component/Myself';

function App() {
  return (
    <div>
      <Navbar />
      <MediaGallery />
      <Myself />
    </div>
  );
}

export default App;
