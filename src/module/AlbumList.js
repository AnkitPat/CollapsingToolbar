import React, {Component} from 'react'
import {ScrollView} from 'react-native'
import axios from 'axios'
import Style from '../stylesheet/Style'
import Album from "./Album";

export default class AlbumList extends  Component {

    state = {albums: []}


    componentWillMount() {
        try {
            axios.get('https://rallycoding.herokuapp.com/api/music_albums')
                .then(response => this.setState({albums: response.data}))
        } catch (e) {
            console.log(e.message)
        }
    }
    render() {

        console.log(this.state)
        return (
          <ScrollView style={Style.albumListView}>
              {this._renderView()}
          </ScrollView>
        );
    }

    _renderView(){
        return this.state.albums.map(album => <Album key={album.title} album = {album} />);
    }
}