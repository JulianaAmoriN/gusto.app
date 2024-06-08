import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyCJw3i_UX947mDrX_O2fSnyrGCS2dD9QBg',
    authDomain: 'gusto-reviews.firebaseapp.com',
    projectId: 'gusto-reviews',
    storageBucket: 'gusto-reviews.appspot.com',
    messagingSenderId: '667814639839',
    appId: '1:667814639839:web:9ddcc9bb23d412b9f2516a',
    measurementId: 'G-N27ZW4L2TX'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
