import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import { youtubeSearch} from "../apis";

class App extends React.Component {
  state = { videos: [], selectedVideo: null, language: "en" };

  componentDidMount() {
    this.onTermSubmit("norway");
  }

  onTermSubmit = async term => {
    const response = await youtubeSearch(term);
    this.setState({
      videos: response.items,
      selectedVideo: response.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  handleSelect = e => {
    this.setState({ language: e.target.value });
    
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar
          onFormSubmit={this.onTermSubmit}
          handleSelect={this.handleSelect}
        />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail
                video={this.state.selectedVideo}
                language={this.state.language}
              />
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
