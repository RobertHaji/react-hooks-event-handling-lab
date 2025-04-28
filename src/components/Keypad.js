// Code Keypad Component Here

function Keypad() {
     const handleChange = (e) => {
       console.log("Entering password...");
     };

    return (
      <div>
        <input
          type="password"
          onChange={(e) => {
            e.target.value;
            console.log("Entering password...");
          }}
        />
        <input type="password" onChange={handleChange} />
      </div>
    );

    
}

export default Keypad;