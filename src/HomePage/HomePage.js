import React from 'react';

import AxiosPie from '../AxiosPie/AxiosPie'
import PieChart from '../PieChart/PieChart'


function HomePage() {
  return (
    <div>
      <section className ="container center" aria-label =" main content of budget">
        <div id= "main">
        <div className="page-area">

            <article>
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
    
            <article aria-label="alert">
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
    
            <article aria-label="Results">
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
    
            
            <article>
                <h1><center>Pie Chart using Axios</center></h1>
                <p style={{height:"500px",width:"500px"}}>
                    <AxiosPie />
                </p>
            </article>

            <article>
                <h1><center>Dount Chart using D3JS </center></h1>
                <p style={{height:"500px",width:"500px"}}>
                   <PieChart/>
                </p>
            </article>     
            
        </div>
    </div>

    </section>
     
    </div>
  );
}

export default HomePage;
