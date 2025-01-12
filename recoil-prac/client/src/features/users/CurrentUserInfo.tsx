import { currentUserIDState } from "@/recoil/users/atoms";
import { useRecoilValue } from "recoil";
import {
  currentUserNameQuery,
  currentUserNameState,
  userNameQuery,
} from "@/recoil/users/selectors";

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
