import React, { useState } from 'react';
import './style-y.css';

const Streams = () => {

    const toggledisplayCS=()=>{
        isCS(!CS);
    }
    const toggledisplayECE=()=>{
        isECE(!ECE);
    }
    const toggledisplayEE=()=>{
        isEE(!EE);
    }
    const toggledisplayME=()=>{
        isME(!ME);
    }
    const toggledisplayCH=()=>{
        isCH(!CH);
    }
    const toggledisplayCE=()=>{
        isCE(!CE);
    }
    const toggledisplayMT=()=>{
        isMT(!MT);
    }
    const [CS, isCS] = useState(false);
    const [ECE, isECE] = useState(false);
    const [EE, isEE] = useState(false);
    const [ME, isME] = useState(false);
    const [CH, isCH] = useState(false);
    const [CE,isCE]=useState(false);
    const [MT,isMT]=useState(false);


    return (
        <div>
            <div className="flex-container">
                {
                    CS ?(
                        <div>
                            <h3>Enter kar chuka he</h3>
                        Computer Science<button onClick={()=>{toggledisplayCS()}} className="enter">Leave</button>
                        </div>
                    ):(
                        <div>
                        Computer Science<button onClick={()=>{toggledisplayCS()}} className="enter">Enter</button>
                        </div>
                    )
                }
                {
                    ECE ?(
                        <div>
                            <h3>Enter kar chuka he</h3>
                        Electronics<button onClick={()=>{toggledisplayECE()}} className="enter">Leave</button>
                        </div>
                    ):(
                        <div>
                        Electronics<button onClick={()=>{toggledisplayECE()}} className="enter">Enter</button>
                        </div>
                    )
                }
                {
                    EE ?(
                        <div>
                            <h3>Enter kar chuka he</h3>
                        Electrical<button onClick={()=>{toggledisplayEE()}} className="enter">Leave</button>
                        </div>
                    ):(
                        <div>
                        Electrical<button onClick={()=>{toggledisplayEE()}} className="enter">Enter</button>
                        </div>
                    )
                }
                {
                    ME?(
                        <div>
                            <h3>Enter kar chuka he</h3>
                        Mechanical<button onClick={()=>{toggledisplayME()}} className="enter">Leave</button>
                        </div>
                    ):(
                        <div>
                        Mechanical<button onClick={()=>{toggledisplayME()}} className="enter">Enter</button>
                        </div>
                    )
                }
                {
                    CH?(
                        <div>
                            <h3>Enter kar chuka he</h3>
                        Chemical<button onClick={()=>{toggledisplayCH()}} className="enter">Leave</button>
                        </div>
                    ):(
                        <div>
                        Chemical<button onClick={()=>{toggledisplayCH()}} className="enter">Enter</button>
                        </div>
                    )
                }
                  {
                    CE?(
                        <div>
                            <h3>Enter kar chuka he</h3>
                        Civil<button onClick={()=>{toggledisplayCE()}} className="enter">Leave</button>
                        </div>
                    ):(
                        <div>
                        Civil<button onClick={()=>{toggledisplayCE()}} className="enter">Enter</button>
                        </div>
                    )
                }
                {
                    MT?(
                        <div>
                            <h3>Enter kar chuka he</h3>
                        Metallurgy<button onClick={()=>{toggledisplayMT()}} className="enter">Leave</button>
                        </div>
                    ):(
                        <div>
                        Metallurgy<button onClick={()=>{toggledisplayMT()}} className="enter">Enter</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Streams;