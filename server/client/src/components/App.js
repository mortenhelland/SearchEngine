import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import { youtubeSearch, translate } from "../apis";

class App extends React.Component {
  state = { videos: [], selectedVideo: null, translatedText: "", selectedLanguage: "en"};

  componentDidMount() {
    this.onTermSubmit("norway");
  }

  onTermSubmit = async term => {
    const response = await youtubeSearch(term);
    const translatedText = await translate(response.items[0].snippet.description, this.state.selectedLanguage)
    this.setState({
      videos: response.items,
      selectedVideo: response.items[0],
      translatedText
    });

  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  handleSelect = async e => {
    const s = e.target.value;
    const translatedText = await translate(this.state.selectedVideo.snippet.description, s)
    this.setState({translatedText, selectedLanguage: s})
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
                text={this.state.translatedText}

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
