/* eslint-disable no-unused-vars */
import React, { FC, useEffect } from "react";
import "antd/dist/antd.css";
import { Layout, Space, Table, Tag } from "antd";
import { useAppDispatch, useAppSelector } from "./store/store";
import { getSpaces } from "./features/spaces/spaceSlice";

const { ColumnGroup, Column } = Table;

const App: FC = () => {
  const dispatch = useAppDispatch();
  // const { isLoading, movies } = useAppSelector(state=> state.spaces)
  useEffect(() => {
    dispatch(getSpaces());
  }, [dispatch]);
  interface DataType {
    key: React.Key;
    firstName: string;
    lastName: string;
    age: number;
    address: string;
    tags: string[];
  }

  const data: DataType[] = [
    {
      key: "1",
      firstName: "John",
      lastName: "Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      firstName: "Jim",
      lastName: "Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      firstName: "Joe",
      lastName: "Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  return (
    <div className="App">
      <Layout>
        <Table dataSource={data}>
          <ColumnGroup title="Name">
            <Column title="First Name" dataIndex="firstName" key="firstName" />
            <Column title="Last Name" dataIndex="lastName" key="lastName" />
          </ColumnGroup>
          <Column title="Age" dataIndex="age" key="age" />
          <Column title="Address" dataIndex="address" key="address" />
          <Column
            title="Tags"
            dataIndex="tags"
            key="tags"
            render={(tags: string[]) => (
              <>
                {tags.map((tag) => (
                  <Tag color="blue" key={tag}>
                    {tag}
                  </Tag>
                ))}
              </>
            )}
          />
          <Column
            title="Action"
            key="action"
            render={(_: any, record: DataType) => (
              <Space size="middle">
                <a href="/">Invite {record.lastName}</a>
                <a href="/">Delete</a>
              </Space>
            )}
          />
        </Table>
      </Layout>
    </div>
  );
};

export default App;
