import React from 'react'; 

// Step 1: Define the interface for props
interface GreetingProps {
  name: string; // 'name' should be a string
}

// Step 2: Use the interface for props in the functional component
const Greeting: React.FC<GreetingProps> = ({ name }) => { 
  return <div>Hello, {name}!</div>;
};

export default Greeting;
