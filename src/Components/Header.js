import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../Utils/constants';
import { toggleGptSearchView } from '../Utils/gptSlice';
import { changeLanguage } from '../Utils/configSlice';
import Logo from '../assets/logo.svg'

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const showGptSearchPage = useSelector((store) => store.gpt.showGptSearchPage)
  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
   }).catch((error) => {
   navigate("/error");
});
  }

  useEffect(() => {
    const unsubscribe =onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();
    }, []);

    const handleGptSearchClick = () => {
        // Toggle Gpt Search
        dispatch(toggleGptSearchView());
     }
  
      const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value))
      }
     return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
      <img className='w-72 mx-auto md:mx-0'
       src={Logo}
      alt="Logo"/>
      {user && (
        <div className='flex p-2 justify-between items-center'>
          { showGptSearchPage && 
          (<select className="p-2 m-2 bg-gray-900 text-white rounded-sm" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
          </select>
        )}
          <button className='py-2 px-4 mx-4 my-2 h-10 bg-purple-800 text-white rounded-sm'
          onClick={handleGptSearchClick}>
            {showGptSearchPage ? "GPT SearchPage" : "GPT Search"}
          </button>
        <img 
        className='hidden md:block w-12 h-12'
        alt="Usericon" src={user?.photoURL}/>
      <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
      </div>
      )}
      </div>
  );
};

export default Header