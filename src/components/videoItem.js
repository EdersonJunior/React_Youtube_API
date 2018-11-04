import React from 'react';

const VideoItem = ({video, selectVideo}) => {
    const url = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div onClick={ () => {selectVideo(video)} } className='video-detail col-md-4 videoshow'>
            <h3>{video.snippet.title}</h3>
            <div className='embed-responsive embed-responsive-16by9'>
                <iframe 
                    title={video.snippet.title}
                    className='embed-responsive-item' 
                    src={url}>>
                </iframe>
            </div>
        </div>                
    );
}

export default VideoItem;