import React, { Component } from 'react'
import { PieChart } from 'react-minimal-pie-chart';

 class DisplayCharts extends Component {
     constructor(props){
         super(props);
     }

     calculateCompoundedIR(principalAmount, yearValue, interestRate){

        // Final Amount = A(1+R/100)^t
        let rate=(1+interestRate/100)
        return principalAmount * Math.pow(rate,yearValue)
    }

    render() {
        const {loanAmount, yearValue, interestRate} = this.props
        let principalAmount = loanAmount
        let finalAmount = this.calculateCompoundedIR(principalAmount, yearValue,interestRate)
        let interestAmount = finalAmount - principalAmount
        let totalPayments = 180
        let monthlyEMI = finalAmount/yearValue
        finalAmount = Math.trunc(finalAmount)
        interestAmount = Math.trunc(interestAmount)
        monthlyEMI = Math.trunc(monthlyEMI)

        let arr = [{text: 'Principal Amount', value: principalAmount},
        {text: 'Interest Amount', value: interestAmount},
        {text: 'Total Amount Payable', value: finalAmount},
        {text: 'Monthly EMI', value: monthlyEMI}
        ]

        
        let renderItems = arr.map((item)=>{
            return (
                <div className= "pie-label">
                    <label for="">{item.text}</label>
                    
                    <h4>₹{item.value}</h4>                 
                </div>
            )
        })
            


        return (
            <React.Fragment>
                <div className = "pie-text">
                {renderItems}
                    
               </div>
               <div className = "pie-chart">
                <PieChart
                   animate
                   animationDuration={500}
                   animationEasing="ease-out"
                   
                    data={[
                        { title: 'Principal Amount', value: principalAmount, color: '#E38627' },
                        { title: 'Interest Amount', value: interestAmount, color: '#C13C37' },
                    ]}
                    />
                    </div>
            </React.Fragment>
        )
    }
}

export default DisplayCharts
