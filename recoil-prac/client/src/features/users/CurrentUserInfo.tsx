import { useRecoilValue } from "recoil";
import { currentUserNameState } from "./states/currentUserNameState";
import { currentUserNameQuery } from "./states/currentUserNameQuery";
import { userNameQuery } from "./states/userNameQuery";
import { currentUserIDState } from "./states/currentUserIdState";

export default function CurrentUserInfo() {
  const userId = useRecoilValue(currentUserIDState);
  const userNameFromSyncFetch = useRecoilValue(currentUserNameState);
  const userNameFromAsyncFetch = useRecoilValue(currentUserNameQuery);

  return (
    <div>
      <p>
        sync - id: {userId}, name: {userNameFromSyncFetch}
      </p>
      <p>
        async - id: {userId}, name: {userNameFromAsyncFetch}
      </p>
      <UserInfo userId={1} />
      <UserInfo userId={2} />
      <UserInfo userId={3} />
    </div>
  );
}

function UserInfo({ userId }: { userId: number }) {
  const userName = useRecoilValue(userNameQuery(userId));
  return (
    <div>
      id: {userId}, name: {userName}
    </div>
  );
}
