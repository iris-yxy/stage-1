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
  const[selectedItems,setSelectedItems]=useState({
    Fruits:new Set(),
    Spices:new Set(),
    Vegetables:new Set(),
  });
  const toggleItem=(tab,item)=>{
    const updated=new Set(selectedItems[tab]);
    if(updated.has(item)){
      updated.delete(item);}
      else{
        updated.add(item);
      }
      setSelectedItems({
        ...selectedItems,
        [tab]:updated      });
    };

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
      <ul style={{listStyle:'none',padding:0}}>
        {data[activeTab].map((item)=>(
        <li
        key={item}
        className={selectedItems[activeTab].has(item)?'list-item selected':'list-item'}
        onClick={()=>toggleItem(activeTab,item)}>
        {item}
        </li>
      ))}
      </ul>
      </div>
  );
}
export default App;