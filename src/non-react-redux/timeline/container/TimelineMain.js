import React from 'react';
import { getNextTimeline } from '../../common/mockData';
import { addTimeline } from '../state';
import TimelineList from '../component/TimelineList';
import { useSelector, useDispatch } from 'react-redux';

function TimelineMain() {
  const [, forceupdate] = useReducer(v => v + 1, 0);
  useEffect(() => {
    let prevTimelines = store.getState().timeline.timelines;
    const unsubscribe = store.subscribe(() => {
      const timelines = store.getState().timeline.timelines;
      if ( prevTimelines !== timelines ) {
        forceupdate()
      }
      prevTimelines = timelines;
    });
    return () => unsubscribe;
  }, []);
  function onAdd() {
    const timeline = getNextTimeline();
    dispatch(addTimeline(timeline));
  }
  console.log('TimelineMain render');
  return (
    <div>
      <button onClick={onAdd}>타임라인 추가</button>
      <TimelineList timelines={timelines} />
    </div>
  )
}

export default TimelineMain;