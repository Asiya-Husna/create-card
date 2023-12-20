import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState , useEffect } from "react";

const Bigcard = () => {
    // const [windowSize, setWindowSize] = useState({
    //     width: window.innerWidth,
    //     height: window.innerHeight,
    //   });
    
    //   useEffect(() => {
    //     const handleResize = () => {
    //       setWindowSize({
    //         width: window.innerWidth,
    //         height: window.innerHeight,
    //       });
    //     };
    
    //     // Attach event listener when component mounts
    //     window.addEventListener('resize', handleResize);
    
    //     // Detach event listener when component unmounts
    //     return () => {
    //       window.removeEventListener('resize', handleResize);
    //     };
    //   }, []); // Empty dependency array means this effect runs once after the initial render
  return (
    <div className="bigCard">
        {/* <p>Window size: {windowSize.width} x {windowSize.height}</p> */}
      <Card color={"pink"} icon={"fa-phone-volume"} title={"Apple"} size = {12} />
      <Card color={"orange"} icon={"coffee"} title = {"Coffee"} size = {14} />
      <Card color={"purple"} icon={"cog"} title = {"Cog"} size = {14} />
      <Card color={"red"} icon={"spinner"} title = {"spinner"} size = {12} />
    </div>
  );
};

const Card = (props) => {
    const[dSize , setDsize] = useState(props.size)
    function handleClick(){
        setDsize(dSize + 3)
    }
    function handleDec(){
        setDsize(dSize - 3)
    }

    
    

    useEffect(()=>{
        console.log('dynamic data changed',dSize)
    },[dSize])

  return (
    <div className="card" style={{ border: `2px solid ${props.color}` }}>
      <h5>{props.title}</h5>
      <p>
        <FontAwesomeIcon icon={props.icon} style={{ color: props.color , fontSize:`${dSize}px`}} />
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
        maiores hic eius obcaecati cupiditate!
      </p>
      <button onClick={handleClick}>Inc</button>
      <button onClick={handleDec}>Dec</button>
    </div>
  );
};

export default Bigcard;
