import React, { useState } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel-v4";

import * as Svgs from "../assets/images/svg/Svg";

const { width } = Dimensions.get("window");

const slides = [
  { id: 1, SvgComponent: Svgs.Slide1 },
  { id: 2, SvgComponent: Svgs.Slide2 },
  { id: 3, SvgComponent: Svgs.Slide3 },
  { id: 4, SvgComponent: Svgs.Slide4 },
];

export default function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <View style={styles.container}>
      <Carousel
        data={slides}
        renderItem={({ item }) => {
          return (
            <View style={styles.slide}>
              <item.SvgComponent width={152} height={200} />
            </View>
          );
        }}
        sliderWidth={width}
        itemWidth={152}
        autoplay
        autoplayInterval={2000}
        inactiveSlideScale={0.9}
        enableMomentum={true}
        inactiveSlideOpacity={1}
        decelerationRate="fast"
        activeSlideAlignment="center"
        snapToAlignment="center"
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={slides.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.activeDot}
        inactiveDotStyle={styles.inactiveDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  slide: {
    alignItems: "center",
    justifyContent: "center",
  },
  paginationContainer: {
    paddingVertical: 10,
    marginTop: 15,
  },
  activeDot: {
    width: 20,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#F6C977",
  },
  inactiveDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
  },
});
