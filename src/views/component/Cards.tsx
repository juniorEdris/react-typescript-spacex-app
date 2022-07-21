import { Avatar, Card } from "antd";
import RocketPreparedData from "features/spaces/space.interfaces";

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
      style={{ width: 300, height: 450 }}
      size="small"
      cover={
        <img alt={card?.rocket?.rocketName} src={card?.links?.missionPatch} />
      }
    >
      <Meta
        key={card.flightNumber}
        avatar={<Avatar src={card?.links?.missionPatch} />}
        title={card?.rocket?.rocketName}
        description={
          card?.details ? `${card?.details?.substring(0, 100)}... see more` : ""
        }
      />
    </Card>
  );
};

export default Cards;
