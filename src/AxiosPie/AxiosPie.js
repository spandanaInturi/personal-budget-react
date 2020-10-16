import Axios from 'axios';
import React, { useState,useEffect } from 'react';
import {Pie} from 'react-chartjs-2';

const AxiosPie = () =>{
    const [chartData, setChartData] = useState({});
    const [employeeTitle, setEmployeeTitle] = useState([]);
    const [employeeBudget, setEmployeeBudget] = useState([]);

    const chart = () => {
        let empTitle = [];
        let empBudget = []
        Axios.get("http://localhost:5000/budget")
             .then(res =>{
                 console.log(res);
                 for(const dataObj of res.data.myBudget){
                    empTitle.push(dataObj.title);
                    empBudget.push(dataObj.budget);
                 }
                 setChartData({
                    labels : empTitle,
                    datasets : [
                        {
                            label : 'Budget data',
                            data : empBudget,
                            backgroundColor : [
                                                '#ffcd56',
                                                '#ff6384',
                                                '#36a2eb',
                                                '#fd6b19',
                                                '#808000',
                                                '#E74C3C',
                                                '#A569BD',
                                                '#33FFE0',
                                                '#F0FF00'
                                            ]
                            
                        }
                    ]
                })
             })
             .catch(e => {
                 console.log(e)
             }) 
             console.log(empTitle, empBudget)            
        
    }

    useEffect(() => {
        chart()
    },[])

    return(
        <div className="App">
            <div style={{height:"500px",width:"500px"}}>
                <Pie data = {chartData} />
            </div>
        </div>
    )
}


export default AxiosPie;