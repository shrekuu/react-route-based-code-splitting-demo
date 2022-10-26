import { Resource, ListGuesser } from "react-admin";

export default function Posts() {
  return <Resource key="/posts" name="posts" list={ListGuesser} />;
}
