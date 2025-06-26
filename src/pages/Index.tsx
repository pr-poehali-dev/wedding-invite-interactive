import React from "react";
import WeddingCover from "@/components/WeddingCover";
import CoupleStory from "@/components/CoupleStory";
import RSVPForm from "@/components/RSVPForm";
import VenueMap from "@/components/VenueMap";

const Index = () => {
  return (
    <div className="min-h-screen">
      <WeddingCover />
      <CoupleStory />
      <RSVPForm />
      <VenueMap />
    </div>
  );
};

export default Index;
