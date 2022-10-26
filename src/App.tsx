import {
  Admin,
  Menu,
  Layout,
  CustomRoutes,
  ListGuesser,
  Resource,
} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { lazy, Suspense } from "react";
import { createBrowserHistory as createHistory } from "history";
import { BrowserRouter, Route } from "react-router-dom";
import Posts from "./Posts";
// import Comments from "./Comments";

const history = createHistory();

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const MyMenu = () => (
  <Menu>
    <Menu.Item to="/posts" primaryText="Posts" />
    <Menu.Item to="/comments" primaryText="Comments" />
  </Menu>
);

export const MyLayout = (props) => <Layout {...props} menu={MyMenu} />;

// const Posts = lazy(() => import("./Posts"));
const Comments = lazy(() => import("./Comments"));

const App = () => {
  return (
    <Suspense>
      <Admin layout={MyLayout} dataProvider={dataProvider} history={history}>
        <Resource key="/posts" name="posts" list={ListGuesser} />
        <CustomRoutes>
          {/* <Route path="/posts" element={<Posts />} /> */}
          <Route path="/comments" element={<Comments />} />
        </CustomRoutes>
      </Admin>
    </Suspense>
  );
};

export default App;
