import React, { Fragment, useEffect } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './components/HomePage/HomePage';
import Sidebar from './components/Sidebar/Sidebar';
import AllJobsPage from './components/AllJobsPage/AllJobsPage';

toast.configure();

function App() {
  const history = useHistory();
  const location = useLocation();
  const redirect = !false;

  useEffect(() => {
    (function () {
    })();
  });

  const dispatch = useDispatch();
  useEffect(() => {
    history.push('/');

  }, []);

  return (
    <Fragment>
      {<Sidebar />}
      <Switch>
        <div style={{ marginLeft: '250px' }}>
          <Route path='/' component={HomePage} exact />
          <Route path='/jobs' component={AllJobsPage} exact />

          {/* <Route path='/view-job' exact render={() => <Redirect to='/' />} /> */}

          {/* <Route path='/' exact render={() => <Redirect to='/login' />} /> */}

          {/* Hiding Registration temporary */}
          {/* <Route path='/signup' component={Signup} /> */}
        </div>
      </Switch>

      {/* Toaster Container  */}
      <div style={{ position: 'fixed', top: '92px', right: '92px', zIndex: '3' }}>
        <ToastContainer containerId='appLayoutToaster' />
      </div>
    </Fragment>
  );
}

export default App;
