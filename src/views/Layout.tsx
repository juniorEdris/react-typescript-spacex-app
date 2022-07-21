import { Layout } from "antd";
import React from "react";

const { Header, Content, Footer } = Layout;

type ContainerProps = {
  children: React.ReactChild;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default Container;
