import { VFC } from "react";
// FC というのがあり、そちらは暗黙的に children を含むのを許容してしまう
// が、将来的には含まなくなる予定（仕様側でタグ内に何かを置いていたらエラーになる）
// VFC は FC が更新されるまでとりあえずで用意されたもの

type Props = {
  color: string;
  fontSize: string;
};

export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};
