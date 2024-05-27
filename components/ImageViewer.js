import { Image, StyleSheet } from "react-native";

export default ImageViewer = ({placeholderImageSource, selectedImage}) => {
    const imageResource = selectedImage ? {uri : selectedImage} : {placeholderImageSource}

    return (
        <Image source={imageResource} style={styles.image} />
    )
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
})