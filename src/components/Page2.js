const Page2 = ({ user }) => {
    const displayInfo = (user) => {
      if (user) {
        return (
          <div style={{ textAlign: 'center', marginTop: '20px', fontFamily: 'nunito'}}>
            <div style={{ display: 'flex', alignItems: 'center' , justifyContent: 'center'}}>
              {/* Image on the left */}
              <img src={user.fname} alt={user.fname} style={{ width: '100px', height: '100px', marginRight: '10px'}} />
              {/* Text elements on the right */}
              <div style={{ textAlign: 'left', color:'black'}}>
                <p><strong>Name:</strong> {user.name}</p>
                <img src={user.rating} alt={user.rating} style={{ width: '200px', height: '40px', margin: '10px auto 0', display: 'block' }} />
                <p><strong>Hourly Rate:</strong> {user.hourlyRate}</p>
                <p><strong></strong> {user.description}</p>
              </div>
            </div>
            {/* Rating centered below the text */}
            <img src={user.rating} alt={user.rating} style={{ width: '200px', height: '40px', margin: '10px auto 0', display: 'block' }} />
          </div>
        );
      } else {
        return <p>No user data available.</p>;
      }
    };
  
    return (
      <div style={{ textAlign: 'center', backgroundColor: 'red', height: 'min-content', color:'black'}}>
        <h1>Page 2</h1>
        <p>This is the content of Page 2.</p>
        {displayInfo(user)}
      </div>
    );
  };
  
  export default Page2;
  