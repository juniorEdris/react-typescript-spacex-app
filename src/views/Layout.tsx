import { Layout, Input } from "antd";
import React, { Dispatch, SetStateAction } from "react";

const { Header, Content, Footer } = Layout;
const { Search } = Input;

type ContainerProps = {
  children: React.ReactChild;
  setSearch: Dispatch<SetStateAction<string>>;
};

const Container = ({ children, setSearch }: ContainerProps) => {
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <Search
          style={{
            width: 400,
          }}
          placeholder="Search by mission name..."
          allowClear
          enterButton="Search"
          size="large"
          onSearch={(data) => {
            setSearch(data);
          }}
        />
      </Header>
      <Content>{children}</Content>
      <Footer />
    </Layout>
  );
};

export default Container;
