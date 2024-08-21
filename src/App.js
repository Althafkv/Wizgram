import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Footer from './comps/Footer';

function App() {

  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div>
      
      <div className="App">
      <Footer />
        <Title/>
        <UploadForm />
        <ImageGrid setSelectedImg={setSelectedImg} />
        { selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
          )}
        
      </div>
          <h6 style={{textAlign:"center",color:"black"}}>ⓒ Althaf Kv</h6>
    </div>
  );
}

export default App;
