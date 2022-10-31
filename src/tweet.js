import React ,{useState} from "react";
import db from "./firebase";
import firebase from 'firebase/compat/app';

const Tweet = () => {
  const [user, setUser] = useState("");
  const [img, setImg] = useState("");

  const postData =  (e) => {
    e.preventDefault();

      db.collection('posts').add({
        displayName: img,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        username: user,
      })
    

    setUser(" ");
    setImg(" ");

  };

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div>
            <button
              type="button"
              className="btn btn-light border border-dark rounded-pill text-primary fw-bold"
            >
              Everyone<i className="fa-solid fa-angle-down"></i>
            </button>
          </div>
          <input
            type="text"
            id="text"
            className="form-control shadow-none border border-white"
            placeholder="What's Happening"  onChange={(e) => setUser(e.target.value)}
            value={user}
            autoComplete="off"
          />
          <hr />
          <input
            type="text"
            id="text"
            className="form-control shadow-none border border-white"
            placeholder="Optional: Enter image URL"  onChange={(e) => setImg(e.target.value)}
            values={img}
            autoComplete="off"
          />
          <hr />
          <i className="fa-solid fa-images text-primary me-sm-2 me-md-3 me-lg-3"></i>
          <i className="fa-solid fa-square-poll-horizontal text-primary me-sm-2 me-md-3 me-lg-3"></i>
          <i className="fa-regular fa-face-smile text-primary me-sm-2 me-md-3 me-lg-3"></i>
          <i className="fa-solid fa-calendar-minus text-primary me-sm-2 me-md-3 me-lg-3"></i>
          <i className="fa-solid fa-location-dot text-primary me-sm-2 me-md-3 me-lg-3"></i>
          <button
            type="button"
            className="btn btn-primary rounded-pill float-end" onClick={postData}
          >
            Tweet
          </button>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Tweet;
