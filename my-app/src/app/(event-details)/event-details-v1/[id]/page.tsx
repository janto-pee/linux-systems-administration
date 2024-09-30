import { eventData } from "@/data/Event";
import React from "react";

const EventDetailsV1 = ({ params }: { params: { id: string } }) => {
  const event =
    eventData.find((item, index) => item.id.toString() == params.id) ||
    eventData[0];
  return <div>{event.author}</div>;
};

export default EventDetailsV1;
