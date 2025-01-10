import { useRecoilState, useRecoilValue } from "recoil";
import { textState } from "./states/textState";
import { charCountState } from "./states/charCountState";

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

export default function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}
