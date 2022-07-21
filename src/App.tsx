import { FC, useEffect, useState } from "react";
import "antd/dist/antd.css";
import Container from "views/Layout";
import Cards from "views/component/Cards";
import { Pagination, Space } from "antd";
import RocketPreparedData from "features/spaces/space.interfaces";
import { useAppDispatch, useAppSelector } from "./store/store";
import { getSpaces } from "./features/spaces/spaceSlice";

const App: FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading, spaces } = useAppSelector((state) => state.spaces);

  const [limit, setLimit] = useState<number>(10);
  const [rocketData, setRocketData] = useState<RocketPreparedData[]>([]);

  useEffect(() => {
    dispatch(getSpaces());
  }, [dispatch]);

  useEffect(() => {
    if (spaces.length > 0) {
      setRocketData(spaces);
    }
  }, [spaces]);

  useEffect(() => {
    setRocketData(spaces.slice(0, limit));
  }, [spaces, limit]);

  return (
    <div className="App">
      <Container>
        <Space
          direction="horizontal"
          size={30}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Space
            direction="horizontal"
            size="middle"
            style={{ display: "flex", justifyContent: "center" }}
            wrap
          >
            {rocketData?.map((card: RocketPreparedData) => (
              <Cards loading={isLoading} card={card} />
            ))}
          </Space>
          <Pagination
            defaultCurrent={1}
            total={spaces.length}
            onChange={(page, pageSize): void => {
              setLimit(page * pageSize);
            }}
          />
        </Space>
      </Container>
    </div>
  );
};

export default App;
