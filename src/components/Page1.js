import React from 'react';

const Page1 = ({ videoId }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width:'60vw', height: '100%' }}>
      <h1>Page 1</h1>
      {/* Embed YouTube video */}
      <div style={{ display: 'inline-flex', width: '100%', height: '60%', maxWidth: '1200px' }}> {/* Adjust width as needed */}
      <div class="iframe-wrapper">
        <iframe
          width="100%" 
          height="100%" 
          src={`https://www.youtube.com/embed/${videoId}`} 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          // style="border-radius:60px"
        ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Page1;
