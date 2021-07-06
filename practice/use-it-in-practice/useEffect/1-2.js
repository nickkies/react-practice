function Profile({ userId }) {
  const [user, setUser] = useState();
  const fetchAndSetUser = useCallback(
    async function (needDetail) {
      const data = await fetchUser(userId, needDetail);
      setUser(data);
    }
  );

  useEffect(() => {
    fetchAndSetUser(false);
  }, [fetchAndSetUser]);

  if ( !user ) {
    return <h1>로딩...</h1>
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <button onClick={() => fetchAndSetUser(true)}>더보기</button>
    </div>
  )
}