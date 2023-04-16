import { Dimensions } from 'react-native';

const useViewportUnits = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const vw = (percentage) => {
    return ((screenWidth * percentage) / 100 ) + 'px';
  };

  const vh = (percentage) => {
    return ((screenHeight * percentage) / 100) +'px';
  };

  return { vw, vh };
};


export default useViewportUnits