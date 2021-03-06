import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import CreateDeckPage from "./components/CreateDeck";
import QuestionForm from "./components/QuestionForm";
import ShowDecks from "./components/ShowDecks";
import PlayDeck from "./components/PlayDeck";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";
import image1 from "./assets/images/image1.jpg"


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {/* <img src={image1} alt=''/> */}
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <SplashPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/newdeck'>
            <CreateDeckPage />
          </Route>
          <Route path='/createquestion'>
            <QuestionForm />
          </Route>
          <Route path='/decks/:userId'>
            <ShowDecks />
          </Route>
          <Route path='/play/decks/:deckId'>
            <PlayDeck />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
