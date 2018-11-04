import React from 'react';

import VideoItem from './videoItem';

const VideoList = ({videos, selectVideo}) => {
    if (!videos ) {
        return ("Loading...")
    }    

    if (videos.lenght < 1) {
        console.log('fuck');
        
    }

    const videoList = videos.map((video) => {    
        return (
            <div key={video.etag}>
                <div>
                    <VideoItem 
                        video={video}
                        selectVideo={selectVideo}
                    />
                </div>
            </div>
        )
    });        

    return (
        <div className='list-videos'>
            <ul className="col-md-12 list-group">
                {videoList}
            </ul>
        </div>
    );
}

export default VideoList;