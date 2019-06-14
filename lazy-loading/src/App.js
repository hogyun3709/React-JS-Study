import React, { Component } from "react";
import { css } from "@emotion/core";
import data from "./data";
import LazyLoad from "react-lazyload";
import { HashLoader } from "react-spinners";

const override = css`
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
`;

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

const Loading = () => (
  <div className="post loading">
    <h5>Loading..</h5>
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
            <div className="post loading">
              <LazyLoad
                key={post.id}
                height={100}
                offset={[-100, 100]}
                placeholder={
                  <HashLoader
                    css={override}
                    sizeUnit={"px"}
                    size={70}
                    color={"#36D7B7"}
                    loading={this.state.loading}
                  />
                }
              >
                <Post key={post.id} {...post} />
              </LazyLoad>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
