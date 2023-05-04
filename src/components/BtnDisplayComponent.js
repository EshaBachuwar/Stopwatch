import React from 'react'

export const BtnDisplayComponent = (props) => {
  return (
    <div className='BtnDisplayComponent'>
    {(props.status===0 )?<button className='stopwatch-btn stopwatch-btn-gre' onClick={props.start}>Start</button>:
        ""
    }
    {(props.status===1 )?
    <div>
        <button className='stopwatch-btn stopwatch-btn-red' onClick={props.stop}>Pause</button>
        <button className='stopwatch-btn stopwatch-btn-gre'  onClick={props.timeStamp}>Timestamp</button>
        <button className='stopwatch-btn stopwatch-btn-yel' onClick={props.reset}>Reset</button>
    </div>
    :
        ""
    }

    {(props.status===2)?
    <div>
        <button className='stopwatch-btn stopwatch-btn-green' onClick={props.resume}>Resume</button>
        <button className='stopwatch-btn stopwatch-btn-gre' onClick={props.timeStamp}>Timestamp</button>
        <button className='stopwatch-btn stopwatch-btn-yel' onClick={props.reset}>Reset</button>
    </div>
    :" "
    }
        
    </div>
  )
}
