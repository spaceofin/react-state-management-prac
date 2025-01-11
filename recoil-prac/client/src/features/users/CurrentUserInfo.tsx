import { useRecoilValue } from "recoil";
// import { currentUserNameState } from "./states/currentUserNameState";
import { currentUserNameQuery } from "./states/currentUserNameQuery";

export default function CurrentUserInfo() {
  //   const userName = useRecoilValue(currentUserNameState);
  const userName = useRecoilValue(currentUserNameQuery);
  return <div>{userName}</div>;
}
