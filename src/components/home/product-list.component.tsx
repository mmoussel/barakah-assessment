/* eslint-disable react/display-name */
import React, { FC, memo, useCallback } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  ViewStyle,
  View,
  Dimensions,
  Text,
} from "react-native";
import { Spacer } from "src/components/shared/spacer.component";
import { Product } from "@/types/product.type";
import { ProductCard } from "./product-card.component";

const keyExtractor = (item: Product, index: number) => {
  return item?.id?.toString() || index.toString();
};

const { width } = Dimensions.get("screen");

const defaultMargins = 16;

const towColItemWidth = (width * 49) / 100 - defaultMargins;

interface Props {
  data: Product[];
  onEndReached?: () => void;
  ListFooterComponent?: JSX.Element;
  ListHeaderComponent?: JSX.Element;
  contentContainerStyle?: StyleProp<ViewStyle>;
  listRef?: React.LegacyRef<FlatList<Product>>;
  onScroll?: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
  ListEmptyComponent?: JSX.Element;
}

export const ProductList: FC<Props> = ({
  data,
  onEndReached = () => null,
  ListFooterComponent,
  ListHeaderComponent,
  contentContainerStyle,
  listRef,
  onScroll,
  ListEmptyComponent,
}) => {
  const PRODUCT_HEIGHT = towColItemWidth * 1.35;

  const DefaultListEmptyComponent = (
    <View style={styles.emptyList}>
      <Text>No Products Found</Text>
    </View>
  );

  const getItemLayout = (_: unknown, index: number) => ({
    length: PRODUCT_HEIGHT,
    offset: PRODUCT_HEIGHT * index,
    index,
  });

  const Item = memo(({ item }: { item: Product }) => (
    <View
      style={[
        styles.productContainer,
        { height: PRODUCT_HEIGHT },
        styles.twoCoulmnsProductContainer,
      ]}
    >
      <ProductCard product={item} />
    </View>
  ));

  const renderItem = useCallback((props) => <Item {...props} />, [Item]);

  return (
    <FlatList
      ref={listRef}
      data={data}
      renderItem={renderItem}
      getItemLayout={getItemLayout}
      keyExtractor={keyExtractor}
      numColumns={2}
      ItemSeparatorComponent={() => <Spacer dir="vertical" size={3} />}
      columnWrapperStyle={styles.columnWrapperStyle}
      showsVerticalScrollIndicator={false}
      onEndReachedThreshold={0.9}
      onEndReached={onEndReached}
      ListFooterComponent={ListFooterComponent}
      ListHeaderComponent={ListHeaderComponent}
      ListEmptyComponent={ListEmptyComponent || DefaultListEmptyComponent}
      contentContainerStyle={[styles.listContainer, contentContainerStyle]}
      onScroll={onScroll}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: { flexGrow: 1 },
  productContainer: {
    flex: 1,
  },
  twoCoulmnsProductContainer: {
    maxWidth: towColItemWidth,
  },
  columnWrapperStyle: {
    justifyContent: "space-between",
  },
  emptyList: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
