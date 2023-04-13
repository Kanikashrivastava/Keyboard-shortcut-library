import './App.css';
import { ComponentA, ComponentB, ComponentC } from './components';
import { useEffect, useState } from 'react';
import keypress from 'dmauro-Keypress-70a58fb/keypress';
import ShortcutKeyboard from './components/shortcutKeyboard';
import { getRandomColor } from './utils';


function App() {
  const [ComponentAbgColor, setComponentA] = useState(getRandomColor());
  const [ComponentBbgColor, setComponentB] = useState(getRandomColor());
  const [ComponentCbgColor, setComponentC] = useState(getRandomColor());
  var listener = new keypress.Listener();

  useEffect(() => {
    init()
  }, [listener]);

  useEffect(() => {
    return () => {
      listener.reset();
    };
  }, []);

  const init = () => {
    listener.simple_combo("shift s", function() {
      setComponentA(getRandomColor())
    });
    listener.simple_combo("shift a", function() {
      setComponentB(getRandomColor())
    });
    listener.simple_combo("shift c", function() {
      setComponentC(getRandomColor())
    });
  }
  

  listener.simple_combo("esc", function() {
    listener.unregister_combo("shift s");
  });       
  
  
  return (
    <div  style={{ display: 'flex', }}>
      <div className="App">
      <ComponentA bgColor={ComponentAbgColor}/>
      <ComponentB bgColor={ComponentBbgColor}/>
      <ComponentC bgColor={ComponentCbgColor}/>
      </div>
      <div className="shortcut-guide">
        <ShortcutKeyboard combo="shift s" comp="ComponentA" description="‘Shift S’ toggles component A colour to another colour (randomised)." />
        <ShortcutKeyboard combo="shift a" comp="ComponentB" description="‘Shift A’ toggles component B colour to another colour (randomised)." />
        <ShortcutKeyboard combo="shift c" comp="ComponentC" description="‘Shift C’ toggles component C colour to another colour (randomised)." />
      </div>
    </div>
  );
}

export default App;
