import React, { Component } from "react";
import data from "./data";
import LazyLoad from "react-lazyload";
import { SyncLoader } from "react-spinners";
const Loading = () => (
  <div className="post loading">
    <h5>Loading...</h5>
  </div>
);

const Post = ({ id, title, body }) => (
  <div className="post">
    <div className="post-img">
      <img src={`https://picsum.photos/id/${id}/1000/1000`} alt="..." />
    </div>
    <div className="post-body">
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  render() {
    return (
      <div className="App">
        <h2>LazyLoad-Loading</h2>
        <div className="post-container">
          {data.map(post => (
            <LazyLoad
              key={post.id}
              height={400}
              offset={[-100, 100]}
              placeholder={
                <SyncLoader
                  sizeUnit={"px"}
                  size={150}
                  color={"#123abc"}
                  loading={this.state.loading}
                />
              }
            >
              <Post key={post.id} {...post} />
            </LazyLoad>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
