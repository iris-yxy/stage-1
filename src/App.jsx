import React,{useState}from 'react';
import './App.css';
const data = {
  Fruits: ['Apple', 'Banana', 'Pear', 'Watermelon', 'Grape', 'Strawberry', 'Mango', 'Blackberry'],
  Spices: ['Salt', 'Pepper', 'Chilli', 'Herbs', 'Curry'],
  Vegetables: ['Carrot', 'Cucumber'],
};

function App() {
  const tabs = Object.keys(data);
  const [activeTab,setActiveTab]=useState('Fruits');
  return(
    <div className="container">
      <h1 style={{textAlign:'center',marginBottom:'20px'}}>Item Selector</h1>
      <div style={{marginBottom:'20px'}}>
        {tabs.map((tab)=>(
          <button
          key={tab}
          className={activeTab===tab? "tab-button active":"tab-button"}
          onClick={()=>setActiveTab(tab)}>{tab}
          </button>
        ))}
      </div>
      </div>
  );
}
export default App;