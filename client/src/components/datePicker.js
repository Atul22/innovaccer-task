import React from "react";
import { connect } from "react-redux";
import {getCurrentMonthRange, msToDDMMYYYY} from '../utils/helpers';
import ACTIONS from '../actions/actions';
import STATE from '../const/state';
import '../styles/dateRange.css';

class DateRange extends React.Component {

        getDateRange = (currentMonth) => {
            const currentMonthRange = getCurrentMonthRange(currentMonth);
            const firstDay = msToDDMMYYYY(currentMonthRange.firstDay);
            const lastDay = msToDDMMYYYY(currentMonthRange.lastDay);

            return `${firstDay} - ${lastDay}`;
        }

        handleIncrement = (value) => {
            if(value < 11)
                this.props.increment(value);
        }

        handleDecrement = (value) => {
            if(value >= 0)
                this.props.decrement(value);
        }


        render() {
            const {currentMonth} = this.props;
            return (
                <div className='date-container'>
                    <div className='date'>{this.getDateRange(currentMonth)}</div>
                    <div className='actions'>
                        <i 
                            className="fa far fa-angle-left decrement" 
                            style={{
                                fontSize: '25px'
                            }}
                            onClick={() => this.handleDecrement(currentMonth - 1)}
                        ></i>
                        <i 
                            className="fa far fa-angle-right increment" 
                            style={{
                                fontSize: '25px'
                            }}
                            onClick={() => this.handleIncrement(currentMonth + 1)}
                        ></i>
                    </div>
                </div>
            );
        } 
}

const mapStateToProps = (state) => ({
    currentMonth: state.get(STATE.CURRENT_MONTH)
})

const mapDispatchToProps = (dispatch) => ({
    increment(currentMonth) {
        dispatch(ACTIONS.incrementMonth(currentMonth))
    },
    decrement(currentMonth) {
        dispatch(ACTIONS.decrementMonth(currentMonth))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(DateRange);