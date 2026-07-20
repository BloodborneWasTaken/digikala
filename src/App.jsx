import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Activity from "./pages/Activity";
import Orders from "./pages/Orders";
import Comments from "./pages/Comments";
import Plus from "./pages/Plus";
import Lists from "./pages/Lists";
import NotFound from "./pages/NotFound";
import Empty from "./pages/Empty";
import Favorite from "./pages/Favorite";
import EmptyComment from "./pages/EmptyComment";
import ListsDetail from "./pages/ListsDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />}>
          <Route index element={<Activity />} />
          <Route path="Activity" element={<Activity />} />
          <Route path="Plus" element={<Plus />} />
          <Route path="orders" element={<Orders />}>
            <Route index element={<Empty />} />
            <Route path=":id" element={<Empty />} />
          </Route>
          <Route path="Lists" element={<Lists />}>
            <Route index element={<Favorite />} />
            <Route path=":id" element={<ListsDetail />} />
          </Route>
          <Route path="Comments" element={<Comments />}>
            <Route index element={<EmptyComment />} />
            <Route path=":id" element={<EmptyComment />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
