import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
    if(!song) return <div className='details'>Please select a song</div>
    return (
        <div>
            <div className='details'>
                <h3>Details for:</h3>
                <p>Title: {song.title}</p>
                <p>Duration: {song.duration}</p>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return { song: state.selectSong }
}

export default connect(mapStateToProps)(SongDetail);