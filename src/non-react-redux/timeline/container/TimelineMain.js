import React from 'react';
import { getNextTimeline } from '../../common/mockData';
import { addTimeline } from '../state';
import TimelineList from '../component/TimelineList';
import { useSelector, useDispatch } from 'react-redux';

function TimelineMain() {
  const timelines = useSelector(state => state.timeline.timelines);
  const dispatch = useDispatch();
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