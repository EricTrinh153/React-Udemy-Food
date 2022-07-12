import {useState} from 'react';
import {Header,Meals,Cart,CartProvider} from './components';
function App() {
const [cartIsShown,setCartIsShown]=useState(false);

const showCartHandler = ()=>{
  setCartIsShown(true);
}
const hideCartHandler = ()=>{
  setCartIsShown(false);
}
  return (
    <CartProvider>
     
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
     <Header onShowCart={showCartHandler}/>
     <main>
      <Meals/>
     </main>
    
    </CartProvider>
  );
}

export default App;
