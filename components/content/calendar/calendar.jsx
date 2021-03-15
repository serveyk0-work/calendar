import { useDispatch } from 'react-redux';
import { CHANGE_DATE, CHANGE_SHOW } from '../../../redux/types';
import { FOOTER } from './constants';

const useDate = () => {
  const dispatch = useDispatch()
  const change_Date = (date) =>
    dispatch({
      type: CHANGE_DATE,
      currentDate: date
    });
  const change_Day = (day) =>
    dispatch({
      type: CHANGE_DAY,
      day: day
    });
  const change_Show = (date, cd) =>
    dispatch({
      type: CHANGE_SHOW,
      date: date,
      currentDay: cd % 7
    })
  return { change_Date, change_Show, change_Day }
}

export const Calendar = (props) => {
  const { MONTHS, popup, currentDate } = props;
  const { change_Date, change_Show } = useDate();

  const prevMounth = () => {
    if (currentDate.currentMonth === 0)
      change_Date(new Date(currentDate.currentYear - 1, 11, 1));
    change_Date(new Date(currentDate.currentYear, currentDate.currentMonth - 1, 1))
  }

  const nextMounth = () => {
    if (currentDate.currentMonth === 11)
      change_Date(new Date(currentDate.currentYear + 1, 0, 1));
    change_Date(new Date(currentDate.currentYear, currentDate.currentMonth + 1, 1))
  }

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  }

  const getCountDays = (countDays) => {
    let data = [];
    const start_day = new Date(currentDate.currentYear, currentDate.currentMonth, 1).getDay();

    if (start_day != 0) {
      const last_prev_day = new Date(currentDate.currentYear, currentDate.currentMonth, 0).getDate();
      for (let j = 0, k = start_day - 1; k >= 0; j++, k--)
        data.push(<span key={-j} className="day grid grid-align-center text-center other_dates">{last_prev_day - j}</span>);
    }
    data.reverse();

    for (let i = 1; i <= countDays; i++)
      data.push(<span key={i} className={"day grid grid-align-center text-center " + (currentDate.showDate === i ? "active_date" : "")} onClick={() => { change_Show(i, start_day - 1 + i); popup() }}>{i}</span>);

      console.log(start_day + " = start_day")
      console.log((countDays + start_day) + " = countDays + start_day" )
    const check = (countDays + start_day) % 7;
    console.log(check + "\n\n")
    if (check !== 0) {
      for (let d = 1, i = check; i !== 0; i = ++i % 7, d++) {
        console.log(i + " : " + d)
        data.push(<span key={countDays * (-d)} className="day grid grid-align-center text-center other_dates">{d}</span>);
      }
    }

    return <div className="grid grid-justify-center days">{data}</div>
  }



  return (
    <section className="grid grid-justify-center grid-align-center grid-align-content-center calendar">
      <div className="grid calendar__header">
        <button onClick={() => prevMounth()}>{'<'}</button>
        <span className="text-center header-title">{MONTHS[currentDate.currentMonth] + " " + currentDate.currentYear}</span>
        <button onClick={() => nextMounth()}>{'>'}</button>
      </div>
      <div className="calendar__body">
        {getCountDays(daysInMonth(currentDate.currentMonth, currentDate.currentYear))}
      </div>
      <div className="grid grid-justify-center calendar__footer">
        {
          FOOTER.map((day, index) =>
            <span className="grid grid-align-center text-center" key={index}>{day}</span>
          )
        }
      </div>
    </section>
  );
}