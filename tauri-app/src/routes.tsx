/* eslint-disable react-refresh/only-export-components */
import { observer } from "mobx-react-lite";
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./views/login";
import Layout from "./layout";
import Publish from "./views/publish";
import Notes from "./views/notes";
import TitlePage from "./views/TitlePage";
import SettingPage from "./views/SettingPage";
import Error from "./views/Error";

const IRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/notes" element={<Layout children={<Notes />} />} />
        <Route path="/publish" element={<Layout children={<Publish />} />} />
        <Route
          path="/titlePage"
          element={<Layout children={<TitlePage />} />}
        />
        <Route
          path="/setPage"
          element={<Layout children={<SettingPage />} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </HashRouter>
  );
};

export default observer(IRouter);
