import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../assets/css/slider.css";

// Images
import grilledTamotoes from "../../assets/images/article/grilled-tomatoes.jpg";
import snacksTravel from "../../assets/images/article/snacks-for-travel.jpg";
import postWorkout from "../../assets/images/article/post-workout-recipes.jpg";
import grillCron from "../../assets/images/article/how-to-grill-corn.jpg";
import crunchwrapSupreme from "../../assets/images/article/crunchwrap-supreme.jpg";
import broccoliCheese from "../../assets/images/article/broccoli-cheese-soup.jpg";




import { Pagination, Navigation } from "swiper/modules";
import Card from "../card/Card";

export default function Slider() {
  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="card-wrap">
          {/* Card #01 */}
          <Card cardImage={grilledTamotoes} cardImage_altText="Grilled  Tomatoes at Home" cardTitle="Grilled  Tomatoes at Home" cardDescription="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..." card_btnLink="#" cardbtn_name="Read More"/>

          {/* Card #02 */}
          <Card cardImage={snacksTravel} cardImage_altText="Snacks for Travel" cardTitle="Snacks for Travel" cardDescription="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..." card_btnLink="#" cardbtn_name="Read More"/>

          {/* Card #03 */}
          <Card cardImage={postWorkout} cardImage_altText="Post-workout Recipes" cardTitle="Post-workout Recipes" cardDescription="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..." card_btnLink="#" cardbtn_name="Read More"/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card-wrap">
          {/* Card #01 */}
          <Card cardImage={grillCron} cardImage_altText="How To Grill Corn" cardTitle="How To Grill Corn" cardDescription="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..." card_btnLink="#" cardbtn_name="Read More"/>

          {/* Card #02 */}
          <Card cardImage={crunchwrapSupreme} cardImage_altText="Crunchwrap Supreme" cardTitle="Crunchwrap Supreme" cardDescription="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..." card_btnLink="#" cardbtn_name="Read More"/>

          {/* Card #03 */}
          <Card cardImage={broccoliCheese} cardImage_altText="Broccoli Cheese Soup" cardTitle="Broccoli Cheese Soup" cardDescription="PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..." card_btnLink="#" cardbtn_name="Read More"/>
        </div>
      </SwiperSlide>

    </Swiper>
  );
}
