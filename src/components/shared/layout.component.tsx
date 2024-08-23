import React, { FC } from "react";
import {
  StyleSheet,
  ScrollView,
  ScrollViewProps,
  RefreshControlProps,
} from "react-native";
import { styled } from "nativewind";

interface Props extends ScrollViewProps {
  layoutRef?: React.LegacyRef<ScrollView>;

  refreshControlProps?: RefreshControlProps;
}

const StyledScrollView = styled(ScrollView);

export const Layout: FC<Props> = ({
  children,
  contentContainerStyle,
  layoutRef,
  refreshControlProps,
  ...props
}) => {
  return (
    <StyledScrollView
      contentContainerStyle={[styles.container, contentContainerStyle]}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      ref={layoutRef}
      bounces={Boolean(refreshControlProps)}
      {...props}
    >
      {children}
    </StyledScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
