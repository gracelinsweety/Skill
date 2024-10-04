import React from 'react';
import sampleImage from '../components/images/Sampleimage3.jpeg'; // Import an image file
import sampleImage2 from '../components/images/Sampleimage2.jpeg'; // Import a second image file
import sampleImage3 from '../components/images/Sampleimage.jpeg'; // Import a third image file

function SamplePage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Project Details Page</h1>
      <p>This is a sample web page that demonstrates the project screenshots.</p>
      <img src={sampleImage} alt="Project Sample 1" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
      <img src={sampleImage2} alt="Project Sample 2" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
      <img src={sampleImage3} alt="Project Sample 3" style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }} />
    </div>
  );
}

export default SamplePage;


