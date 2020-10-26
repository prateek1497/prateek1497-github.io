import React, { Component } from 'react'
import MUIDataTable from "mui-datatables";

 class DisplayTable extends Component {
  calculateCompoundedIR(principalAmount, yearValue, interestRate){

    // Final Amount = A(1+R/100)^t
    let rate=(1+interestRate/100)
    return principalAmount * Math.pow(rate,yearValue)
}
    render() {

        const options = {
            filterType: "checkbox",
          };

          const columns = [
            {
              name: "year",
              label: "Year",
              
            },
            {
              name: "loanAmount",
              label: "Loan Amount",
              
            },
            
            {
              name: "openingBalance",
              label: "Opening Balance",
             
            },
            {
              name: "monthlyEMI",
              label: "EMI *12"
            },
            {
              name: "closingBalance",
              label: "Closing Balance",
              
            },
          ];

          const data = [
            {
              name: "Joe James",
              company: "Test Corp",
              city: "Yonkers",
              state: "NY",
            },
            {
              name: "John Walsh",
              company: "Test Corp",
              city: "Hartford",
              state: "CT",
            },
            {
              name: "Bob Herm",
              company: "Test Corp",
              city: "Tampa",
              state: "FL",
            },
            {
              name: "James Houston",
              company: "Test Corp",
              city: "Dallas",
              state: "TX",
            },
          ];
        
        const {loanAmount, interestRate, yearValue} = this.props
        const arr = []
        // arr[0] = {
        //     index : 'Year',
        //     loanAmount : 'Loan Amount',
        //     openingBalance : 'OpeningBalance',
        //     interestPaid: 'Interest Paid',
        //     principalPaid: 'Principal Paid',
        //     closingBalance: 'Closing Balance'
        // }
        let openingBalance = loanAmount;
        let interestPaid = loanAmount * interestRate/100;
        let finalAmount = this.calculateCompoundedIR(loanAmount, yearValue,interestRate)
        let monthlyEMI = finalAmount/yearValue/12
        monthlyEMI = Math.trunc(monthlyEMI)
        let closingBalance = openingBalance - interestPaid;

        for(let i=0; i<yearValue && closingBalance>=0 ;i++){
          openingBalance = loanAmount - monthlyEMI * 12 * (i+1)
           closingBalance = openingBalance - interestPaid;
         
            arr.push({
              year: i+1,
              loanAmount,
              openingBalance,
              monthlyEMI: monthlyEMI *12,
              closingBalance: openingBalance - monthlyEMI*12
            })
            openingBalance = closingBalance
        }


        return (
            <MUIDataTable
                title={"Amortization Schedule"}
                data={arr}
                columns={columns}
                options={options}
                />
        )
    }
}

export default DisplayTable
