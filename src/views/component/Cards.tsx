import { Avatar, Card, Image } from "antd";
import RocketPreparedData from "features/spaces/space.interfaces";
import placeHolderImage from "views/variables";

const { Meta } = Card;

type CardType = {
  loading: boolean;
  card: RocketPreparedData;
};

const Cards = ({ loading, card }: CardType) => {
  return (
    <Card
      key={card.flightNumber}
      loading={loading}
      style={{ width: 300, height: 500 }}
      size="small"
      cover={
        <Image
          preview={{ visible: false }}
          src={card?.links?.missionPatch}
          fallback={placeHolderImage}
        />
      }
    >
      <Meta
        key={card.flightNumber}
        avatar={<Avatar src={card?.links?.missionPatch} />}
        title={card?.missionName} // rocket?.rocketName
        description={
          <>
            <p>Rocket name: {card?.rocket?.rocketName}</p>
            <p>
              {card?.details
                ? `${card?.details?.substring(0, 100)}... see more`
                : ""}
            </p>
          </>
        }
      />
    </Card>
  );
};

export default Cards;
