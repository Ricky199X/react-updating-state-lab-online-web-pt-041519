// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {

   constructor() {
      super()

      this.state = {
         errors: [],
         user: null,
            settings: {
            bitrate: 8,
            video: {
               resolution: '1080p'
            }
         }
      }
   }

   changeBitrate = () => {
      this.setState({
         settings: {
           ...this.state.settings,
           bitrate: 12
         }
      })
   }

   handleChangeResolution = () => {
      this.setState({
        settings: {
          ...this.state.settings,
         video: {
            ...this.state.settings.video,
            resolution: '720p'
            }
         }
      })
   }
   
   render() {
      return (
         <div>
            <button class='bitrate' onClick={this.changeBitrate}>Change bitrate</button>
            <button class='resolution' onClick={this.changeResolution}>Change resolution</button>
         </div>
      )
   }

}