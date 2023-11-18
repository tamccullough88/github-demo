import { useState } from "react";

import Input from "./Components/Input";
import Display from "./Components/Display";

function App() {
  const [user, setUser] = useState(null)

  const display = user && <Display user={user} />
  return (
    <div className="App">
      <Input setUser={setUser} />
      {display}
    </div>
  );
}

export default App;
//app

//input

//display

// stateful variables,
// user data
//username


//step 1: get the data
//state (userdata), input, form, functionality to retrieve the data

//step 2: display the data