function MyComponent({ onClick }) {
  useEffect(() => {
    window.addEventListener('click', () => {
      onClick();
      // ...
    });
  }, [onClick]);
  // ...
}