import React from "react";
import { Table, Collapse, Icon, Typography } from "antd";

const { Panel } = Collapse;
const { Text } = Typography;

function TableList({ tables }) {
  return (
    <div>
      <Collapse accordion>
        {tables.map((table, idx) => (
          <Panel
            header={table.name}
            key={idx}
            extra={
              <Text type="secondary">
                {table.dataSource.length} <Icon type="number" />
              </Text>
            }
          >
            <Table columns={table.columns} dataSource={table.dataSource} />
          </Panel>
        ))}
      </Collapse>
    </div>
  );
}

export default TableList;
