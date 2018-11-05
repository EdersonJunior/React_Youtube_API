import React, { Component } from 'react';
import './App.css';

import SearchBar from './components/searchBar';
import SelectedVideo from './components/selectedVideo';
import VideoList from './components/videoList';

import YTSearch from 'youtube-api-search';

import _ from 'lodash';

const YOUTUBE_API_KEY = 'AIzaSyA5g-EqcIY_lMcfkyLg2vGJAlPVIKDvoVA';

class App extends Component {
    
  constructor(props) {
      super(props)
      this.state = {
        term: 'Surf Gold Coast',
        videos: [],
        selectedVideo: null,
        videoId: null
      }
      
      this.searchVideos('Surf Gold Coast');
  }

  searchVideos(term) {
    YTSearch( { key: YOUTUBE_API_KEY, term: term }, (videos) => {
      this.setState({
        videos, 
        selectedVideo: videos[0],        
      });      
    })
  }

  render() {
    if (this.state.selectedVideo === null) {
      return 'Loading...';
    }
    
    const searchWithInterval = _.debounce( (term) => { this.searchVideos(term) }, 500 );

    return (
      <div>
        {/* <SearchBar searchTerm={term => this.searchVideos({term})} /> */}
        <SearchBar searchTerm={searchWithInterval} />
        <SelectedVideo video={this.state.selectedVideo} />
        <VideoList
          selectVideo={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
