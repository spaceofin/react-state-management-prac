import { currentUserIDState } from "@/recoil/users/atoms";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  currentUserInfoQuery,
  currentUserNameQuery,
  currentUserNameState,
  friendsInfoQuery,
  userNameQuery,
} from "@/recoil/users/selectors";
import { User } from "@/types/userTypes";

export default function CurrentUserInfo() {
  const userId = useRecoilValue(currentUserIDState);
  const userNameFromSyncFetch = useRecoilValue(currentUserNameState);
  const userNameFromAsyncFetch = useRecoilValue(currentUserNameQuery);

  const currentUser = useRecoilValue(currentUserInfoQuery);
  const friends = useRecoilValue(friendsInfoQuery);
  const setCurrentUserID = useSetRecoilState(currentUserIDState);

  return (
    <div>
      <div>
        <p>
          sync - id: {userId}, name: {userNameFromSyncFetch}
        </p>
        <p>
          async - id: {userId}, name: {userNameFromAsyncFetch}
        </p>
      </div>
      <div>
        <UserInfo userId={1} />
        <UserInfo userId={2} />
        <UserInfo userId={3} />
      </div>
      <div>
        <h1>{currentUser.name}</h1>
        <ul>
          {friends.map((friend: User) => (
            <li key={friend.id} onClick={() => setCurrentUserID(friend.id)}>
              {friend.name}
            </li>
          ))}
        </ul>
      </div>
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
