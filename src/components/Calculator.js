import React, { Component } from 'react'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import DisplayCharts from './DisplayCharts'
import '../styles/Calculator.css'
import DisplayTable from './DisplayTable'

class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            loanAmount: 100000,
            yearValue: 1,
            interestRate: 1
        }
    }
    handleLoanAmountChange = (value) => {
        this.setState({
            loanAmount: value
        })
    }

    handleInterestRateChange = value => {
        this.setState({
            interestRate: value
        })
    }

    handleYearValueChange = value => {
        this.setState({
            yearValue: value
        })
    }


    render() {
        const {loanAmount, yearValue, interestRate} = this.state
        return (
            <React.Fragment>
            <div className="container">

                <div className = "input-box">
                    <h6> Loan Amount ₹{loanAmount}</h6>
                    <InputRange
                        step={100}
                        maxValue={10000000}
                        minValue={100000}
                        value={loanAmount}
                        onChange={this.handleLoanAmountChange}
                    
                    />
                    
                    <h6> Tenure (Years) {yearValue}</h6>
                    <InputRange
                        step={1}
                        maxValue={30}
                        minValue={1}
                        value={yearValue}
                        onChange={this.handleYearValueChange}
                    
                    /><h6> Interest Rate @ {interestRate} % Per Annum</h6>
                    <InputRange
                        step={1}
                        maxValue={15}
                        minValue={1}
                        value={interestRate}
                        onChange={this.handleInterestRateChange}
                    
                    />
                </div>
                <div className="pie">
                     <DisplayCharts
                      loanAmount = {loanAmount} 
                      yearValue = {yearValue}
                      interestRate = {interestRate}
                     />
                 </div>

            </div>

            <div>
                <DisplayTable 
                    loanAmount = {loanAmount}
                    interestRate = {interestRate}
                    yearValue = {yearValue}
                />

            </div>
            </React.Fragment>

        )
    }
}

export default Calculator
