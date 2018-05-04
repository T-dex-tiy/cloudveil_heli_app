import React, { Component } from "react";
import moment from "moment";

class Calendar extends Component {
  state = {
    dateContext: moment(),
    today: moment(),
    showMonthPopUp: false,
    showYearPopup: false,
    showYearEdit: false
  };
  constructor(props) {
    super(props);
    this.width = props.width || "350px";
    this.style = props.style || {};
    this.style.width = this.width;
  }

  weekdays = moment.weekdays();
  weekdaysShort = moment.weekdaysShort();
  months = moment.months();

  year = () => {
    return this.state.dateContext.format("Y");
  };
  month = () => {
    return this.state.dateContext.format("MMMM");
  };
  daysInMonth = () => {
    return this.state.dateContext.daysInMonth();
  };
  currentDate = () => {
    return this.state.dateContext.get("date");
  };
  currentDay = () => {
    return this.state.dateContext.format("D");
  };
  firstDayOfMonth = () => {
    let dateContext = this.state.dateContext;
    let firstDay = moment(dateContext)
      .startOf("month")
      .format("d");
    return firstDay;
  };
  setMonth = month => {
    let headMonth = this.months.indexOf(month);
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).set("month", headMonth);
    this.setState({
      dateContext: dateContext
    });
  };

  nextMonth = () => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).add(1, "month");
    this.setState({
      dateContext: dateContext
    });
    this.props.onNextMonth && this.props.onNextMonth();
  };
  prevMonth = () => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).subtract(1, "month");
    this.setState({
      dateContext: dateContext
    });
    this.props.onPreviousMonth && this.props.onPreviousMonth();
  };
  onSelectChange = (e, data) => {
    this.setMonth(data);
    this.props.onMonthChange && this.props.onChangeMonth();
  };
  SelectList = props => {
    let popup = props.data.map(data => {
      return (
        <div key={data}>
          <a
            href="#"
            onClick={e => {
              this.onSelectChange(e, data);
            }}
          >
            {data}
          </a>
        </div>
      );
    });
    return <div className="month-popup">{popup}</div>;
  };
  onChangeMonth = (e, month) => {
    this.setState({
      showMonthPopUp: !this.state.showMonthPopUp
    });
  };
  MonthNav = () => {
    return (
      <span
        className="label-month"
        onClick={e => {
          this.onChangeMonth(e, this.month());
        }}
      >
        {this.month()}
        {this.state.showMonthPopUp && <this.SelectList data={this.months} />}
      </span>
    );
  };
  setYear = year => {
    let dateContext = Object.assign({}, this.state.dateContext);
    dateContext = moment(dateContext).set("year", year);
    this.setState({
      dateContext: dateContext
    });
  };
  onYearChange = e => {
    this.setYear(e.target.value);
    this.props.onYearChange && this.props.onYearChange(e, e.target.value);
  };
  showYearEdit = () => {
    this.setState({
      showYearEdit: true
    });
  };
  onKeyUpYear = e => {
    if (e.which === 13 || e.which === 27) {
      this.setYear(e.target.value);
      this.setState({
        showYearEdit: false
      });
    }
  };
  YearNav = () => {
    return this.state.showYearEdit ? (
      <input
        defaultValue={this.year()}
        className="editor-year"
        ref={yearInput => {
          this.yearInput = yearInput;
        }}
        onKeyUp={e => this.onKeyUpYear(e)}
        onChange={e => this.onYearChange(e)}
        type="number"
        placeholder="year"
      />
    ) : (
      <span
        className="label-year"
        onDoubleClick={e => {
          this.showYearEdit();
        }}
      >
        {this.year()}
      </span>
    );
  };
  onDayClick = (e, day) => {
    this.props.onDayClick && this.props.onDayClick(e, day);
  };
  render() {
    const weekdays = this.weekdaysShort.map(day => {
      return (
        <td key={day} className="week-day">
          {day}
        </td>
      );
    });
    const blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(
        <td key={i * 666} className="emptySlot">
          {""}
        </td>
      );
    }

    let daysInMonth = [];
    for (let day = 1; day <= this.daysInMonth(); day++) {
      let className = day == this.currentDay() ? "day current-day" : "day";
      let selectedClass = day == this.state.selectedDay ? " selected-day " : "";
      daysInMonth.push(
        <td key={day} className={className + selectedClass}>
          <span
            onClick={e => {
              this.onDayClick(e, day);
            }}
          >
            {day}
          </span>
        </td>
      );
    }

    var totalDays = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalDays.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row);
      } else {
        let newRow = cells.slice();
        rows.push(newRow);
        cells = [];
        cells.push(row);
      }
      if (i === totalDays.length - 1) {
        let newRow = cells.slice();
        rows.push(newRow);
      }
    });

    const calElements = rows.map((day, index) => {
      return <tr key={index * 100}>{day}</tr>;
    });
    console.log(blanks);
    console.log(daysInMonth);
    return (
      <div className="calendar-container" style={this.style}>
        <table className="calendar">
          <thead>
            <tr className="calendar-header">
              <td colSpan="5">
                <this.MonthNav /> <this.YearNav />
              </td>
              <td colSpan="2" className="nav-month">
                <i
                  className="prev fa fa-fw fa-chevron-left"
                  onClick={e => {
                    this.prevMonth();
                  }}
                />
                <i
                  className="prev fa fa-fw fa-chevron-right"
                  onClick={e => {
                    this.nextMonth();
                  }}
                />
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>{weekdays}</tr>
            {calElements}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calendar;
