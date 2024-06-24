import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreeen from 'expo-splash-screen';

SplashScreeen.preventAutoHideAsync();

const Layout = () => {
  // Add fonts
  const [fontsLoaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
  })

  // Load fonts
  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded) {
      await SplashScreeen.hideAsync();
    }
  }, [fontsLoaded])

  if (!fontsLoaded) return null;

  return <Stack onLayout={onLayoutRootView}/>
}

export default Layout;