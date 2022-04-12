import logo from './logo.svg';
import './App.css';
import Footer from './Footer'
import Header from './Header'
import TopPickles from './TopPickles'
import PickleCard from './PickleCard'
import { useEffect, useState } from "react";
import Counter from './features/counter/Counter'


function App() {

  // const [pickles, setPickles] = useState;

//   useEffect(() => {
//       fetch("http://localhost:6001/pickles")
//       .then(res => res.json())
//       .then(data => setPickles(data))
//   }, [])
// console.log(pickles)
  // const pickleList = pickles.map(pickle => <PickleCard key={pickle.id} pickle={pickle} />)

  return (
    <div className="App">
      <Header /> 
      <Counter></Counter>
      {/* <TopPickles />     */}
      <Footer />
      
    </div>
  );
}

export default App;
