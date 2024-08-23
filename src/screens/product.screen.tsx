import React from "react";
import { Image, Text, View } from "react-native";

import { useRoute } from "@react-navigation/native";
import AntDesignIcon from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { Button } from "@/components/shared/button.component";
import { Loading } from "@/components/shared/loading.component";
import { Section } from "@/components/shared/section.component";
import { STATUS_BAR_PADDING } from "@/constants/status-bar.constant";
import { useGetProductByIdQuery } from "@/redux/apis/product.api";
import { RootStackScreenProps } from "@/types/navigation.type";
import { Spacer } from "@/components/shared/spacer.component";
import { useColors } from "@/hooks/colors.hook";
import { Layout } from "@/components/shared/layout.component";
import { addToCart } from "@/redux/slices/cart.slice";
import { useDispatch } from "react-redux";

type NavigationProps = RootStackScreenProps<"Product">;

export const ProductScreen = () => {
  const { params } = useRoute<NavigationProps["route"]>();
  const colors = useColors();
  const dispatch = useDispatch();

  const { data, isLoading } = useGetProductByIdQuery(params.productId);

  const handleAddToCart = () => {
    dispatch(addToCart(data));
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View className="flex-1">
      <Section
        className="h-1/2 bg-card py-4"
        style={{
          paddingTop: STATUS_BAR_PADDING + 16,
        }}
      >
        <Image
          source={{ uri: data.image }}
          className="w-full h-full mt-[-24px]"
          resizeMode="contain"
        />
      </Section>
      <Section className="flex-1 bg-background rounded-t-3xl mt-[-24px] py-6">
        <Layout>
          <Text className="text-xl font-bold text-text">{data.title}</Text>

          <Spacer />
          <View className="flex-row ">
            <BellComponent>
              <AntDesignIcon name="star" color={"#96D1C7"} size={18} />
              <Spacer dir="horizontal" size={2} />
              <Text className="font-bold text-text">{data.rating.rate}</Text>
              <Spacer dir="horizontal" size={2} />
              <Text className="text-xs text-gray-600">
                {data.rating.count} reviews
              </Text>
            </BellComponent>

            <BellComponent>
              <AntDesignIcon name="like1" color={colors.primary} size={18} />
              <Spacer dir="horizontal" size={2} />
              <Text className="font-bold text-text">
                {((data.rating.rate / 5) * 100).toFixed(2)}%
              </Text>
            </BellComponent>

            <BellComponent>
              <MaterialCommunityIcons
                name="comment-question"
                color={colors.subtext}
                size={18}
              />
              <Spacer dir="horizontal" size={2} />
              <Text className="font-bold text-text">5</Text>
            </BellComponent>
          </View>

          <Spacer />

          <View className="flex-row items-center justify-between bg-card rounded-xl p-4">
            <View className="flex-row items-center">
              <Text className="font-bold text-text text-base">
                ${data.price.toFixed(2)}
              </Text>
              <Spacer dir="horizontal" size={4} />

              <Text className="font-light text-gray-600">
                from ${(data.price / 12).toFixed(2)} per month
              </Text>
            </View>
            <AntDesignIcon
              name="exclamationcircleo"
              color={colors.subtext}
              size={18}
            />
          </View>

          <Spacer />

          <Text className="font-light flex-1">{data.description}</Text>
        </Layout>
        <View>
          <Spacer />
          <Button onPress={handleAddToCart}>Add to cart</Button>
          <Spacer />
          <Text className="text-center">Delivery on 26Sep</Text>
          <Spacer />
        </View>
      </Section>
    </View>
  );
};

const BellComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <View className="self-start flex-row justify-between items-center py-1 px-3 border border-divider rounded-2xl mr-2">
      {children}
    </View>
  );
};
