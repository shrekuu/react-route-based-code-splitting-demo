import { Resource, ListGuesser } from "react-admin";

export default function Comments() {
  return <Resource key="/comments" name="comments" list={ListGuesser} />;
}
