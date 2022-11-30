import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {


  const users = [
    { name:"chourabi taher", email:"tchourabi@gmail.com" },
    { name:"chourabi taher", email:"tchourabi@gmail.com" },
    { name:"chourabi taher", email:"tchourabi@gmail.com" },
    { name:"chourabi taher", email:"tchourabi@gmail.com" },
    { name:"chourabi taher", email:"tchourabi@gmail.com" },
    { name:"chourabi taher", email:"tchourabi@gmail.com" },
    { name:"chourabi taher", email:"tchourabi@gmail.com" },
    
  ]




  return (
    <div >

        <Navbar></Navbar>

        <Contact  name="john wick" email="john@gmail.com"   />
        <Contact  name="john wick 2" email="john@gmail.com 2 "   />
        <Contact  name="john wick 3" email="john@gmail.com 3"   />
        

        {
          users.map((user)=>{
            return (
              <Contact  name={user.name  } email={ user.email }  />
            );
          })
        }


    </div>
  );
}

export default App;
