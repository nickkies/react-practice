function MyComponent({ onClick }) {
  const onClickRef = useRef();
  // concurrent mode...
  useEffect(() => {
    onClickRef.current = onClick;
  });
  useEffect(() => {
    window.addEventListener('click', () => {
      onClickRef.current();
      // ...
    });
    // ...
  }, []);
  // ...
}