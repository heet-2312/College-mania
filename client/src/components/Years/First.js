import React, { useState } from 'react';
import './style-y.css';

const First = () => {

    const toggledisplayPhysics=()=>{
        isPhysicsSet(!physicsSet);
    }

    const toggledisplayChemistry=()=>{
        isChemistrySet(!chemistrySet);
    }
    const [physicsSet, isPhysicsSet] = useState(false);
    const [chemistrySet, isChemistrySet] = useState(false);
    return (
        <div>
            <div className="flex-container">
                {
                    chemistrySet ?(
                        <div>
                            <h3>Enter kar chuka he</h3>
                        Chemistry<button onClick={()=>{toggledisplayChemistry()}} className="enter">Leave</button>
                        </div>
                    ):(
                        <div>
                        Chemistry<button onClick={()=>{toggledisplayChemistry()}} className="enter">Enter</button>
                        </div>
                    )
                }
                {
                    physicsSet ?(
                        <div>
                            <h3>Enter kar chuka he</h3>
                        Physics<button onClick={()=>{toggledisplayPhysics()}} className="enter">Leave</button>
                        </div>
                    ):(
                        <div>
                        Physics<button onClick={()=>{toggledisplayPhysics()}} className="enter">Enter</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default First;