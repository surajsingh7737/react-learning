import React from "react";
import Card from "./components/card";
import jobOpenings from "./components/arrayofobject";

const App=()=>{
  return(
   <div className="parent">
    {jobOpenings.map(function(ele,idx){
      return <div key={idx}>
         <Card  company={ele.companyName}  post={ele.post} img={ele.brandLogo} date={ele.datePosted} tag1={ele.tag1} tag2={ele.tag2} pay={ele.pay} location={ele.location}/>
    </div>
    })}

      
     
   </div>
  )
}
export default App