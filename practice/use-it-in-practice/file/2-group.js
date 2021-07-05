import { useEffect } from "react";

// 서로 연관된 코드 모아서 관리하기
// 모아놓으면 커스텀 훅으로 관리하기 용이
function Profile({ userId }) {
  const [user, setUser] = useState(null);
  useEffect(() =>  {
    getUserApi(userId).then(data => setUser(datat));
  }, [userId]);

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    }
  }, []);
  // ...
}