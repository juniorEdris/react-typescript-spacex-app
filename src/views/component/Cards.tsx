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
      loading={loading}
      style={{ width: 300 }}
      cover={
        <img alt={card?.rocket?.rocketName} src={card?.links?.missionPatch} />
      }
    >
      <Meta
        avatar={<Avatar src={card?.links?.missionPatch} />}
        title={card?.rocket?.rocketName}
        description={card?.details}
      />
    </Card>
  );
};

export default Cards;
