import React from 'react';

const Maintenance = () => {

  return (
    <div
      style={{
        position: 'relative',
        textAlign: 'center',
        padding: '150px',
      }}
    >
      <div
        style={{
          padding: '30px',
          borderRadius: '50px',
          backgroundColor: '#fff',
          //boxShadow: '0px 0px 50px rgb(220,220,220)'
        }}
      >
        <h1
          style={{
            fontSize: '60px',
            color: 'black',
            //textShadow: '0px 0px 4px #000',
          }}
        >
          Site under maintenance
        </h1>
        <h2
          style={{
            position: 'relative',
            textAlign: 'center',
            fontSize: '20px',
            padding: '20px',
            color: 'black',
            //textShadow: '0px 0px 2px #000',
          }}
        >
          It should be up and running soon. Thanks for your patience.
        </h2>
        <h3
          style={{
            position: 'relative',
            textAlign: 'center',
            fontSize: '18px',
            padding: '10px',
            color: 'black',
            fontWeight: '400',
            //textShadow: '0px 0px 2px #000',
          }}
        >
          Err 503
        </h3>

      </div>
    </div>
  )
}

export default Maintenance