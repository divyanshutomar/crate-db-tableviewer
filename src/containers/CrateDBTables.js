import React, { Component } from "react";
import { Spin, Empty, Typography } from "antd";
import axios from "axios";
import API from "../api";
import TableList from "../components/TableList";
import "./CrateDBTables.css";

const { Title } = Typography;

function reselectTablesData(tableData) {
  const { cols, rows } = tableData;
  const columns = cols.map(col => ({
    title: col,
    dataIndex: col,
    key: col
  }));
  const dataSource = rows.map((row, idx) => {
    const rowObj = { key: idx };
    cols.forEach((col, idx) => {
      rowObj[col] = row[idx];
    });
    return rowObj;
  });
  return { columns, dataSource };
}

class CrateDBTables extends Component {
  state = {
    tables: [],
    isFetchingTables: true
  };
  componentDidMount() {
    this.fetchTablesData();
  }
  async fetchTablesData() {
    try {
      const showTablesData = await axios.post(API.crateRestEndpoint, {
        stmt: "show tables"
      });
      const {
        data: { rows }
      } = showTablesData;
      const tables = rows.reduce((all, arr) => [...all, ...arr], []);
      const tablesData = await axios.all(
        tables.map(table =>
          axios.post(API.crateRestEndpoint, {
            stmt: `select * from ${table}`
          })
        )
      );
      this.setState({
        tables: tablesData.map((tableData, idx) => ({
          ...reselectTablesData(tableData.data),
          name: tables[idx]
        })),
        isFetchingTables: false
      });
    } catch (error) {
      this.setState({ isFetchingTables: false });
    }
  }
  render() {
    const { tables, isFetchingTables } = this.state;
    return (
      <div className="containerRoot">
        <Title level={2} type="secondary">
          Tables
        </Title>
        <hr />
        {isFetchingTables && <Spin />}
        {tables.length ? <TableList tables={tables} /> : <Empty />}
      </div>
    );
  }
}

export default CrateDBTables;
