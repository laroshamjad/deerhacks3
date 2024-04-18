  import React, { useState, useEffect } from 'react';
  import User from './User';
  //import { Queue } from 'your-queue-library';

  const MainPage = () => {
    const [userStack, setUserStack] = useState([]);
    const [linkStack, setLinkStack] = useState([]);
    const [showMessage, setShowMessage] = useState(false);
    const [currentLink, setcurrentLink] = useState("sYc1MsexWKE");
    const [currentUser, setCurrentUser] = useState(new User("Emma Davis", "$30", "I am 23 years old and I tutor math and English!", "./4.png", "./Emma.png", 10));

    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const response = await fetch('info.txt');
          const text = await response.text();
          const lines = text.split('\n').filter(line => line.trim());      
          const newUserStack = lines.map(line => {
            const [name, hourlyRate, description, rating, fname, iD] = line.split(',');
            return new User(name.trim(), hourlyRate.trim(), description.trim(), rating.trim(), fname.trim(), iD);
          });

          setUserStack(newUserStack);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

      const fetchLinkData = async () => {
        try {
          const response = await fetch('links.txt');
          const text = await response.text();
          const videoIds = text.split('\n').filter(id => id.trim());
          setLinkStack(videoIds);
        } catch (error) {
          console.error('Error fetching link data:', error);
        }
      };

      fetchUserData();
      fetchLinkData();
    }, []);

    const toggleMessage = () => {
      setShowMessage(!showMessage);
      const user = userStack.pop();
      const link = linkStack.pop();
      setCurrentUser(user);
      setcurrentLink(link);
    };

    const handleSendMessage = (iD) => {
      if (iD > 5){
        return;
      }
      if (iD == 1) {

      }

    };
    
    const displayInfo = (user) => {
      if (user) {
        return (
          <div style={{ textAlign: 'center', marginTop: '20px'}}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img src={user.fname} alt={user.fname} style={{ width: '100px', height: '100px', marginRight: '10px' }} />
              <div style={{ textAlign: 'left' }}>
                <p><strong>Name:</strong> {user.name}</p>
                <img src={user.rating} alt={user.rating} style={{ width: '200px', height: '40px', margin: '10px auto 0', display: 'block' }} />
                <p><strong>Hourly Rate:</strong> {user.hourlyRate}</p>
                <p><strong>Description:</strong> {user.description}</p>
                {/* <button onClick={() => handleSendMessage(user.iD)} style={{ backgroundColor: 'black', color: 'white', padding: '15px 20px', borderRadius: '3px', marginTop: '3px' }}>Message {user.name}</button>  */}
                <button
                  onClick={() => handleSendMessage(user.iD)}
                  style={{
                    backgroundColor: 'black',
                    color: 'transparent', // Make text transparent
                    padding: '15px 20px',
                    borderRadius: '3px',
                    marginTop: '3px',
                    border: 'none', // Remove button border if needed
                    position: 'relative', // Ensure proper positioning of the image
                  }}
                >
                  <img
                    src="tutor-message.png" // Replace '/path/to/image.jpg' with the actual path to your image
                    alt={`Message ${user.name}`}
                    style={{
                      width: '100%', // Make sure the image takes the full button width
                      height: '100%', // Make sure the image takes the full button height
                      borderRadius: '3px', // Match button border radius if needed
                      position: 'absolute', // Position the image within the button
                      top: 0, // Center the image vertically
                      left: 0, // Center the image horizontally
                    }}
                  />
                </button>
              
              </div>
            </div>
          </div>
        );
      } else {
        return <p>No user data available.</p>;
      }
    };

    return (
      <React.Fragment>
        <section>
          <div className='w-screen h-screen grid grid-rows-2 text-white text-4xl md:grid-cols-3'>
            <div className='w-full h-full centered md:h-screen md:col-span-2 inline-flex flex justify-center align-center'>
            <button onClick={toggleMessage} style={{ border: 'none', backgroundColor: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img src="down_arrow.png" alt="Button" style={{width: 30, height: 30 }} />
              </button>
              {showMessage}
              {/* Page1 JSX code */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width:'60vw', height: '100%' }}>
                <h1>Page 1</h1>
                {/* Embed YouTube video */}
                <div style={{ display: 'inline-flex', width: '100%', height: '60%', maxWidth: '1200px' }}> {/* Adjust width as needed */}
                  <div className="iframe-wrapper">
                    <iframe
                      width="100%" 
                      height="100%" 
                      src={`https://www.youtube.com/embed/${currentLink}`} 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            {/* Display user info */}
              <div style={{ height: '100vh', width:'100%', color: 'black', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{ height: '60%', width:'100%', backgroundColor: 'white', borderRadius: '60', border:'solid black 4px', color: 'black', display:'flex', justifyContent: 'center', alignItems: 'center',  marginTop: '30px'}}>
                  <div style={{ textAlign: 'center' }}>
                    {displayInfo(currentUser)}
                  </div>
                </div>
              </div>
          </div>
        </section>
      </React.Fragment>
    );
  };

  export default MainPage;
