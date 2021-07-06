function Timer({ initalTotalSeconds }) {
  const [hour, setHour] = useState(Math.floor(initalTotalSeconds / 3600));
  const [minute, setMinute] = useState(
    Math.floor((initalTotalSeconds % 3600) / 60),
  );
  const [seconds, setSeconds] = useState(initalTotalSeconds % 60);
  useEffect(() => {
    const id = setInterval(() => {
      if ( seconds ) {
        setSeconds(seconds - 1);
      } else if ( minute ) {
        setMinute(minute - 1);
        setSeconds(59);
      } else if ( hour ) {
        setHour(hour - 1);
        setMinute(59);
        setSeconds(59);
      }
    }, 1000);
    return () => clearInterval(id);
  }, [hour, minute, second]);
  // ...
}