import React, {Component} from 'react';

import VideoItem from './videoItem';

class SelectedVideo extends Component {
    constructor(props) {
        super();
        // console.log('my video: ' + props.video.snippet.title);
    }

    render() {
        return (
            <div>
                <VideoItem video={this.props.video} />
            </div>
        );
    }
}

export default SelectedVideo;