import { Routes, Route } from 'react-router-dom';
import { RoutePath } from './common/constants/RoutePath';
import { Landing, Work, WorksList, Contacts, NotFoundPage } from './pages';
import { Layout } from './common/components';

import '../src/common/styles/global.scss';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path={RoutePath.Landing} element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path={RoutePath.WorksList} element={<WorksList />} />
          <Route path={`${RoutePath.Work}/:id`} element={<Work />} />
          <Route path={RoutePath.Contacts} element={<Contacts />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;