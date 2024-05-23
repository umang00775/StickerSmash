import { Image, StyleSheet } from "react-native";

export default ImageViewer = ({placeholderImageSource}) => {
    return (
        <Image source={placeholderImageSource} style={styles.image} />
    )
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
})