import React from 'react'

function Education() {
    return ( 
   <div className="container">
        <div className="row mt-5">
            <div className="col-6">  
                <img src  ='/media/education.svg' style={{textDecoration :"none"}}></img></div>
            <div className="col-6">
                <h1 style={{width:'100%' , alignItems:'start', }}>Free and open market education</h1>
                <p style={{width:'100%' ,  display:'block',  marginInlineStart: '0',    marginBlockStart: '1em',
    }}>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
              <a href ='versity' style={{textDecoration :"none"}}></a>
                   

                  
                <p>TradingQ&A, the most active trading and investment community in India for all your market related queries..</p>
              <a href ='TradingQ&A' style={{textDecoration :"none"}}></a>
                   
                    </div>
                    </div>
                    </div>

     );
}

export default Education;