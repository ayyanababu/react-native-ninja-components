import { Button, NativeBaseProvider } from "native-base";
import React from "react";

const NCButton = (props) => {
  const {
    colorScheme,
    variant,
    isLoading,
    size,
    startIcon,
    endIcon,
    isLoadingText,
    spinner,
    isDisabled,
    textProps,
    stackProps,
    spinnerPlacement,
    loadingProps,
    disabledProps,
    spinnerProps,
    rightIcon,
    leftIcon,
    styles,
    label,
    onPress,
  } = props;
  return (
    <NativeBaseProvider>
      <Button
        colorScheme={colorScheme}
        variant={variant}
        isLoading={isLoading}
        startIcon={startIcon}
        size={size}
        style={styles}
        endIcon={endIcon}
        isLoadingText={isLoadingText}
        spinner={spinner}
        isDisabled={isDisabled}
        _text={textProps}
        _stack={stackProps}
        spinnerPlacement={spinnerPlacement}
        _loading={loadingProps}
        _disabled={disabledProps}
        _spinner={spinnerProps}
        rightIcon={rightIcon}
        leftIcon={leftIcon}
        onPress={onPress}
      >
        {label}
      </Button>
    </NativeBaseProvider>
  );
};

export default NCButton;
