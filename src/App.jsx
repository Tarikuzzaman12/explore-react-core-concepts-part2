
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {
  function handleClick(){
    alert('button clicked')
  }
  const handleClick2 = () => {
    alert('button 2 clicked')
  }
  const addToFive = (num) => {
    alert(num+5)
  }
return (
    <> 
      <h3>React core concepts 2 </h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick= {handleClick}>Click Me </button>
      <button onClick= {handleClick2}>Click Me 2 </button>
      <button onClick= {() => {alert('third buton clicked')}}>Click Me 3 </button>
      <button onClick= {() => addToFive(4)}>click me 4</button>
   </>
  )
}

export default App
