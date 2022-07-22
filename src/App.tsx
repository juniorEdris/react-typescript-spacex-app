import { FC, useEffect, useState } from "react";
import "antd/dist/antd.css";
import Container from "views/Layout";
import Cards from "views/component/Cards";
import { Pagination, Space } from "antd";
import RocketPreparedData from "features/spaces/space.interfaces";
import SpinLoader from "views/component/SpinLoader";
import { useAppDispatch, useAppSelector } from "./store/store";
import { getSpaces } from "./features/spaces/spaceSlice";

const App: FC = () => {
  const dispatch = useAppDispatch();
  const { isLoading, spaces } = useAppSelector((state) => state.spaces);

  const [limit, setLimit] = useState<number>(10);
  const [rocketData, setRocketData] = useState<RocketPreparedData[]>([]);
  const [search, setSearch] = useState<string>("");

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

  useEffect(() => {
    if (search.length > 0) {
      setRocketData(
        spaces.filter((space) =>
          space?.missionName
            ?.toLocaleLowerCase()
            .includes(search.toLocaleLowerCase()),
        ),
      );
    } else {
      setRocketData(spaces.slice(0, limit));
    }
  }, [spaces, search, limit]);

  return (
    <div className="App">
      {isLoading ? (
        <SpinLoader />
      ) : (
        <Container setSearch={setSearch}>
          <Space
            direction="horizontal"
            size={30}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              marginTop: 20,
            }}
          >
            <Space
              direction="horizontal"
              size="middle"
              style={{ display: "flex", justifyContent: "center" }}
              wrap
              id="scrollableDiv"
            >
              {rocketData?.map((card: RocketPreparedData) => (
                <Cards
                  loading={isLoading}
                  card={card}
                  key={card?.flightNumber}
                />
              ))}
            </Space>
            {search.length === 0 && (
              <Pagination
                defaultCurrent={1}
                total={spaces.length}
                onChange={(page, pageSize): void => {
                  setLimit(page * pageSize);
                }}
              />
            )}
          </Space>
        </Container>
      )}
    </div>
  );
};

export default App;
