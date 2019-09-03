import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  // Additional state parameter needed to get the video object
  // Selected from VideoItem
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async term => {
    //console.log(term);
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    //console.log(response.data.items);

    // set state
    // take the first video and use as default video
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  // Callback function with a video object
  // the video object is what is obtained from the YouTube API
  // and will ultimately be passed from VideoItem to VideoList and finally
  // to this App component (child to parent), where it will be displayed.
  onVideoSelect = video => {
    //console.log(video);
    this.setState({ selectedVideo: video });
  };

  // Load a default video when the page loads so it's not blank and boring.
  componentDidMount() {
    this.onTermSubmit("best videos");
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>

            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
