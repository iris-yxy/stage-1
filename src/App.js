import React,{useState}from 'react';
const data = {
  Fruits: ['Apple', 'Banana', 'Pear', 'Watermelon', 'Grape', 'Strawberry', 'Mango', 'Blackberry'],
  Spices: ['Salt', 'Pepper', 'Chilli', 'Herbs', 'Curry'],
  Vegetables: ['Carrot', 'Cucumber'],
};

function App() {
  const tabs = Object.keys(data);
  const [activeTab,setAcitiveTab]=useState('Fruits');
  return(
    <div>
      <h1>Item Selector</h1>
      <div>
        {tabs.map((tab)=>(
          <button
          key={tab}
          onClick={()=>setAcitiveTab(tab)}>{tab}
          </button>
        ))}
      </div>
      </div>
  );
}
export default App;