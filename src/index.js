import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import createStore from './Store/createStore'


import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as firebase from 'firebase';

const store = createStore()
const config = {
      apiKey: "AIzaSyBFzo3nV-TOh5ZiTiZFR0Z94zDehYQC_G0",
      authDomain: "pwa-hackathon-127ea.firebaseapp.com",
      databaseURL: "https://pwa-hackathon-127ea.firebaseio.com",
      projectId: "pwa-hackathon-127ea",
      storageBucket: "pwa-hackathon-127ea.appspot.com",
      messagingSenderId: "384777688501"

}
firebase.initializeApp(config);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
