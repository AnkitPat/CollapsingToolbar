import React, {Component} from 'react'

import {
    Text,
    View,
    Image,
    TouchableHighlight, ToastAndroid,Linking
} from 'react-native';

import Card from './Card'

import Style from "../stylesheet/Style";
import buttonStyle from "../stylesheet/ButtonStyling"
import CardSection from "./CardSection";

import Button from './Button'

export default class Album extends Component {



    render() {
        return (


            <Card>
                {/* <View style={Style.albumHeaderView}>
                    </View>

                <View style = {Style.coverImage} >
                    <Image/>
                </View>


                <View style={Style.buyNowTopView}>
                    <Button
                        onPress={()=>{}}
                        title={'Buy Now'}
                        style={Style.buyNowButton} />
                </View>
               */}
                <CardSection style={Style.albumHeaderView}>
                    <View style={Style.thumbnailContainerImage}>
                        <Image  style = {Style.thumbnailImageStyle} source={{uri: this.props.album.thumbnail_image}}
                               />
                    </View>
                    <View style={Style.headerTextContainerStyle}>
                        <Text  style={Style.albumName}>{this.props.album.title}</Text>
                        <Text  style={Style.artistName}>{this.props.album.artist}</Text>
                    </View>
                </CardSection>

                <CardSection>
                    <Image style={Style.coverImage} source={{uri: this.props.album.image}}
                    />
                </CardSection>

                <CardSection styleSheet={Style.buyNowTopView}>
                    {/*<TouchableHighlight
                        style={[buttonStyle.core, buttonStyle.primary, buttonStyle.spacer, buttonStyle.specialButtonProperties]}
                        underlayColor="#60b044cc"
                        activeOpacity={0.9}
                    >
                        <Text>Buy Now</Text>
                    </TouchableHighlight>*/}

                    <Button onPress={()=> Linking.openURL(this.props.album.url).catch(err => console.error('An error occurred', err))} title={'Buy Now'}/>
                </CardSection>


            </Card>
        );
    }
}

