import './var.less';
import { Button } from 'antd';
import { userInfo } from '@/store/user/type';
import { useStateUserInfo, useDispatchUser } from '@/store/hook';
import { useEffect } from 'react';

type setUserInfoType = {
  stateSetUser: (info: userInfo) => {
    type: string;
    info: userInfo;
  };
};
enum sex {
  w,
  n,
}
function useLogin({ stateSetUser }: setUserInfoType) {
  const onFinish = () => {
    const data = {
      info: { id: 1, username: '11', avatar: '11', sex: sex.w, phone: '111', createTime: '222' },
    };
    stateSetUser(data.info);
  };
  return [onFinish];
}

function App() {
  const userInfo = useStateUserInfo();
  const { stateSetUser } = useDispatchUser();
  const [onFinish] = useLogin({ stateSetUser });

  useEffect(() => {
    onFinish();
  }, []);
  return (
    <>
      <p>{userInfo.username}</p>
    </>
  );
}

export default App;
