function Profile({ userId }) {
  const [user, setUser] = useState();
  const [needDetail, setNeedDetail] = useState(false);
  useEffect(() => {
    fetchUser(userId, needDetail).then(data => setUser(data))
  }, [userId, needDetail]);
  // ...
}