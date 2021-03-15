import Head from 'next/head';
import Calendar from '../components/content/calendar';
import Form from '../components/content/form';
import Home from '../components/content/home';
import { DAYS, MONTHS } from './constants';

import { useSelector, useDispatch } from 'react-redux';
import { CHANGE_POPAP } from '../redux/types';

const usePopup = () => {
  const currentDate = useSelector((state) => state.changeDate);
  const dispatch = useDispatch()
  const popup = () =>
    dispatch({
      type: CHANGE_POPAP,
    });
  return { currentDate, popup }
}


const _Home = () => {
  const { currentDate, popup } = usePopup();
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className="grid home_wrapper">
        {currentDate.isPopap && <Form MONTHS={MONTHS} DAYS={DAYS} currentDate={currentDate} popup={() => popup()} />}
        <Home />
        <Calendar MONTHS={MONTHS} currentDate={currentDate} popup={() => popup()} />
      </main>
    </>
  )
}

export default _Home;