import React from 'react';
import './index.css';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import {
  Space,
  Table,
  Switch,
  TablePaginationConfig,
  CheckboxProps,
} from 'antd';

import type { TableProps } from 'antd';
import { TableRowSelection } from 'antd/es/table/interface';

interface DataType {
  id: string;
  missing: boolean;
  number: number;
  country: string;
}

const App: React.FC = () => {
  const [stickers, setStickers] = React.useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = React.useState([]);

  const getContryFlag = (country, size = 24) => {
    let str = country.substring(0, country.length - 1);
    if (country === 'CHI') {
      str = 'CL';
    }
    if (country === 'MEX') {
      str = 'MX';
    }
    if (country === 'JAM') {
      str = 'JM';
    }

    if (country === 'URU') {
      str = 'UY';
    }

    if (country === 'PAR') {
      str = 'PY';
    }

    if (country === 'HON') {
      str = 'HN';
    }

    if (country === 'TRI') {
      str = 'TT';
    }

    return <span style={{ fontSize: size }}>{getUnicodeFlagIcon(str)} </span>;
  };

  const filters = [];
  stickers.forEach((s) => {
    const found = filters.find((e) => e.value === s.country);
    if (!found) {
      filters.push({ text: getContryFlag(s.country, 18), value: s.country });
    }
  });

  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Sticker #',
      dataIndex: 'id',
      key: 'id',
      render: (_, record) => {
        const { country, number } = record;
        return `${country} ${number}`;
      },
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
      render: (_, record) => {
        const { country } = record;
        return getContryFlag(country, 32);
      },
      filters,
      onFilter: (value, record) =>
        record.country.indexOf(value as string) === 0,
    },
    Table.SELECTION_COLUMN,
  ];

  const createAlbum = () => {
    const album =
      '[{"country":"ARG","number":1,"missing":true},{"country":"ARG","number":2,"missing":true},{"country":"ARG","number":3,"missing":true},{"country":"ARG","number":4,"missing":true},{"country":"ARG","number":5,"missing":true},{"country":"ARG","number":6,"missing":true},{"country":"ARG","number":7,"missing":true},{"country":"ARG","number":8,"missing":true},{"country":"ARG","number":9,"missing":true},{"country":"ARG","number":10,"missing":true},{"country":"ARG","number":11,"missing":true},{"country":"ARG","number":12,"missing":true},{"country":"ARG","number":13,"missing":true},{"country":"ARG","number":14,"missing":true},{"country":"ARG","number":15,"missing":true},{"country":"ARG","number":16,"missing":true},{"country":"ARG","number":17,"missing":true},{"country":"ARG","number":18,"missing":true},{"country":"ARG","number":19,"missing":true},{"country":"ARG","number":20,"missing":true},{"country":"ARG","number":21,"missing":true},{"country":"ARG","number":22,"missing":true},{"country":"PER","number":1,"missing":true},{"country":"PER","number":2,"missing":true},{"country":"PER","number":3,"missing":true},{"country":"PER","number":4,"missing":true},{"country":"PER","number":5,"missing":true},{"country":"PER","number":6,"missing":true},{"country":"PER","number":7,"missing":true},{"country":"PER","number":8,"missing":true},{"country":"PER","number":9,"missing":true},{"country":"PER","number":10,"missing":true},{"country":"PER","number":11,"missing":true},{"country":"PER","number":12,"missing":true},{"country":"PER","number":13,"missing":true},{"country":"PER","number":14,"missing":true},{"country":"PER","number":15,"missing":true},{"country":"PER","number":16,"missing":true},{"country":"PER","number":17,"missing":true},{"country":"PER","number":18,"missing":true},{"country":"PER","number":19,"missing":true},{"country":"PER","number":20,"missing":true},{"country":"PER","number":21,"missing":true},{"country":"PER","number":22,"missing":true},{"country":"CHI","number":1,"missing":true},{"country":"CHI","number":2,"missing":true},{"country":"CHI","number":3,"missing":true},{"country":"CHI","number":4,"missing":true},{"country":"CHI","number":5,"missing":true},{"country":"CHI","number":6,"missing":true},{"country":"CHI","number":7,"missing":true},{"country":"CHI","number":8,"missing":true},{"country":"CHI","number":9,"missing":true},{"country":"CHI","number":10,"missing":true},{"country":"CHI","number":11,"missing":true},{"country":"CHI","number":12,"missing":true},{"country":"CHI","number":13,"missing":true},{"country":"CHI","number":14,"missing":true},{"country":"CHI","number":15,"missing":true},{"country":"CHI","number":16,"missing":true},{"country":"CHI","number":17,"missing":true},{"country":"CHI","number":18,"missing":true},{"country":"CHI","number":19,"missing":true},{"country":"CHI","number":20,"missing":true},{"country":"CHI","number":21,"missing":true},{"country":"CHI","number":22,"missing":true},{"country":"MEX","number":1,"missing":true},{"country":"MEX","number":2,"missing":true},{"country":"MEX","number":3,"missing":true},{"country":"MEX","number":4,"missing":true},{"country":"MEX","number":5,"missing":true},{"country":"MEX","number":6,"missing":true},{"country":"MEX","number":7,"missing":true},{"country":"MEX","number":8,"missing":true},{"country":"MEX","number":9,"missing":true},{"country":"MEX","number":10,"missing":true},{"country":"MEX","number":11,"missing":true},{"country":"MEX","number":12,"missing":true},{"country":"MEX","number":13,"missing":true},{"country":"MEX","number":14,"missing":true},{"country":"MEX","number":15,"missing":true},{"country":"MEX","number":16,"missing":true},{"country":"MEX","number":17,"missing":true},{"country":"MEX","number":18,"missing":true},{"country":"MEX","number":19,"missing":true},{"country":"MEX","number":20,"missing":true},{"country":"MEX","number":21,"missing":true},{"country":"MEX","number":22,"missing":true},{"country":"ECU","number":1,"missing":true},{"country":"ECU","number":2,"missing":true},{"country":"ECU","number":3,"missing":true},{"country":"ECU","number":4,"missing":true},{"country":"ECU","number":5,"missing":true},{"country":"ECU","number":6,"missing":true},{"country":"ECU","number":7,"missing":true},{"country":"ECU","number":8,"missing":true},{"country":"ECU","number":9,"missing":true},{"country":"ECU","number":10,"missing":true},{"country":"ECU","number":11,"missing":true},{"country":"ECU","number":12,"missing":true},{"country":"ECU","number":13,"missing":true},{"country":"ECU","number":14,"missing":true},{"country":"ECU","number":15,"missing":true},{"country":"ECU","number":16,"missing":true},{"country":"ECU","number":17,"missing":true},{"country":"ECU","number":18,"missing":true},{"country":"ECU","number":19,"missing":true},{"country":"ECU","number":20,"missing":true},{"country":"ECU","number":21,"missing":true},{"country":"ECU","number":22,"missing":true},{"country":"VEN","number":1,"missing":true},{"country":"VEN","number":2,"missing":true},{"country":"VEN","number":3,"missing":true},{"country":"VEN","number":4,"missing":true},{"country":"VEN","number":5,"missing":true},{"country":"VEN","number":6,"missing":true},{"country":"VEN","number":7,"missing":true},{"country":"VEN","number":8,"missing":true},{"country":"VEN","number":9,"missing":true},{"country":"VEN","number":10,"missing":true},{"country":"VEN","number":11,"missing":true},{"country":"VEN","number":12,"missing":true},{"country":"VEN","number":13,"missing":true},{"country":"VEN","number":14,"missing":true},{"country":"VEN","number":15,"missing":true},{"country":"VEN","number":16,"missing":true},{"country":"VEN","number":17,"missing":true},{"country":"VEN","number":18,"missing":true},{"country":"VEN","number":19,"missing":true},{"country":"VEN","number":20,"missing":true},{"country":"VEN","number":21,"missing":true},{"country":"VEN","number":22,"missing":true},{"country":"JAM","number":1,"missing":true},{"country":"JAM","number":2,"missing":true},{"country":"JAM","number":3,"missing":true},{"country":"JAM","number":4,"missing":true},{"country":"JAM","number":5,"missing":true},{"country":"JAM","number":6,"missing":true},{"country":"JAM","number":7,"missing":true},{"country":"JAM","number":8,"missing":true},{"country":"JAM","number":9,"missing":true},{"country":"JAM","number":10,"missing":true},{"country":"JAM","number":11,"missing":true},{"country":"JAM","number":12,"missing":true},{"country":"JAM","number":13,"missing":true},{"country":"JAM","number":14,"missing":true},{"country":"JAM","number":15,"missing":true},{"country":"JAM","number":16,"missing":true},{"country":"JAM","number":17,"missing":true},{"country":"JAM","number":18,"missing":true},{"country":"JAM","number":19,"missing":true},{"country":"JAM","number":20,"missing":true},{"country":"JAM","number":21,"missing":true},{"country":"JAM","number":22,"missing":true},{"country":"USA","number":1,"missing":true},{"country":"USA","number":2,"missing":true},{"country":"USA","number":3,"missing":true},{"country":"USA","number":4,"missing":true},{"country":"USA","number":5,"missing":true},{"country":"USA","number":6,"missing":true},{"country":"USA","number":7,"missing":true},{"country":"USA","number":8,"missing":true},{"country":"USA","number":9,"missing":true},{"country":"USA","number":10,"missing":true},{"country":"USA","number":11,"missing":true},{"country":"USA","number":12,"missing":true},{"country":"USA","number":13,"missing":true},{"country":"USA","number":14,"missing":true},{"country":"USA","number":15,"missing":true},{"country":"USA","number":16,"missing":true},{"country":"USA","number":17,"missing":true},{"country":"USA","number":18,"missing":true},{"country":"USA","number":19,"missing":true},{"country":"USA","number":20,"missing":true},{"country":"USA","number":21,"missing":true},{"country":"USA","number":22,"missing":true},{"country":"URU","number":1,"missing":true},{"country":"URU","number":2,"missing":true},{"country":"URU","number":3,"missing":true},{"country":"URU","number":4,"missing":true},{"country":"URU","number":5,"missing":true},{"country":"URU","number":6,"missing":true},{"country":"URU","number":7,"missing":true},{"country":"URU","number":8,"missing":true},{"country":"URU","number":9,"missing":true},{"country":"URU","number":10,"missing":true},{"country":"URU","number":11,"missing":true},{"country":"URU","number":12,"missing":true},{"country":"URU","number":13,"missing":true},{"country":"URU","number":14,"missing":true},{"country":"URU","number":15,"missing":true},{"country":"URU","number":16,"missing":true},{"country":"URU","number":17,"missing":true},{"country":"URU","number":18,"missing":true},{"country":"URU","number":19,"missing":true},{"country":"URU","number":20,"missing":true},{"country":"URU","number":21,"missing":true},{"country":"URU","number":22,"missing":true},{"country":"PAN","number":1,"missing":true},{"country":"PAN","number":2,"missing":true},{"country":"PAN","number":3,"missing":true},{"country":"PAN","number":4,"missing":true},{"country":"PAN","number":5,"missing":true},{"country":"PAN","number":6,"missing":true},{"country":"PAN","number":7,"missing":true},{"country":"PAN","number":8,"missing":true},{"country":"PAN","number":9,"missing":true},{"country":"PAN","number":10,"missing":true},{"country":"PAN","number":11,"missing":true},{"country":"PAN","number":12,"missing":true},{"country":"PAN","number":13,"missing":true},{"country":"PAN","number":14,"missing":true},{"country":"PAN","number":15,"missing":true},{"country":"PAN","number":16,"missing":true},{"country":"PAN","number":17,"missing":true},{"country":"PAN","number":18,"missing":true},{"country":"PAN","number":19,"missing":true},{"country":"PAN","number":20,"missing":true},{"country":"PAN","number":21,"missing":true},{"country":"PAN","number":22,"missing":true},{"country":"BOL","number":1,"missing":true},{"country":"BOL","number":2,"missing":true},{"country":"BOL","number":3,"missing":true},{"country":"BOL","number":4,"missing":true},{"country":"BOL","number":5,"missing":true},{"country":"BOL","number":6,"missing":true},{"country":"BOL","number":7,"missing":true},{"country":"BOL","number":8,"missing":true},{"country":"BOL","number":9,"missing":true},{"country":"BOL","number":10,"missing":true},{"country":"BOL","number":11,"missing":true},{"country":"BOL","number":12,"missing":true},{"country":"BOL","number":13,"missing":true},{"country":"BOL","number":14,"missing":true},{"country":"BOL","number":15,"missing":true},{"country":"BOL","number":16,"missing":true},{"country":"BOL","number":17,"missing":true},{"country":"BOL","number":18,"missing":true},{"country":"BOL","number":19,"missing":true},{"country":"BOL","number":20,"missing":true},{"country":"BOL","number":21,"missing":true},{"country":"BOL","number":22,"missing":true},{"country":"BRA","number":1,"missing":true},{"country":"BRA","number":2,"missing":true},{"country":"BRA","number":3,"missing":true},{"country":"BRA","number":4,"missing":true},{"country":"BRA","number":5,"missing":true},{"country":"BRA","number":6,"missing":true},{"country":"BRA","number":7,"missing":true},{"country":"BRA","number":8,"missing":true},{"country":"BRA","number":9,"missing":true},{"country":"BRA","number":10,"missing":true},{"country":"BRA","number":11,"missing":true},{"country":"BRA","number":12,"missing":true},{"country":"BRA","number":13,"missing":true},{"country":"BRA","number":14,"missing":true},{"country":"BRA","number":15,"missing":true},{"country":"BRA","number":16,"missing":true},{"country":"BRA","number":17,"missing":true},{"country":"BRA","number":18,"missing":true},{"country":"BRA","number":19,"missing":true},{"country":"BRA","number":20,"missing":true},{"country":"BRA","number":21,"missing":true},{"country":"BRA","number":22,"missing":true},{"country":"COL","number":1,"missing":true},{"country":"COL","number":2,"missing":true},{"country":"COL","number":3,"missing":true},{"country":"COL","number":4,"missing":true},{"country":"COL","number":5,"missing":true},{"country":"COL","number":6,"missing":true},{"country":"COL","number":7,"missing":true},{"country":"COL","number":8,"missing":true},{"country":"COL","number":9,"missing":true},{"country":"COL","number":10,"missing":true},{"country":"COL","number":11,"missing":true},{"country":"COL","number":12,"missing":true},{"country":"COL","number":13,"missing":true},{"country":"COL","number":14,"missing":true},{"country":"COL","number":15,"missing":true},{"country":"COL","number":16,"missing":true},{"country":"COL","number":17,"missing":true},{"country":"COL","number":18,"missing":true},{"country":"COL","number":19,"missing":true},{"country":"COL","number":20,"missing":true},{"country":"COL","number":21,"missing":true},{"country":"COL","number":22,"missing":true},{"country":"PAR","number":1,"missing":true},{"country":"PAR","number":2,"missing":true},{"country":"PAR","number":3,"missing":true},{"country":"PAR","number":4,"missing":true},{"country":"PAR","number":5,"missing":true},{"country":"PAR","number":6,"missing":true},{"country":"PAR","number":7,"missing":true},{"country":"PAR","number":8,"missing":true},{"country":"PAR","number":9,"missing":true},{"country":"PAR","number":10,"missing":true},{"country":"PAR","number":11,"missing":true},{"country":"PAR","number":12,"missing":true},{"country":"PAR","number":13,"missing":true},{"country":"PAR","number":14,"missing":true},{"country":"PAR","number":15,"missing":true},{"country":"PAR","number":16,"missing":true},{"country":"PAR","number":17,"missing":true},{"country":"PAR","number":18,"missing":true},{"country":"PAR","number":19,"missing":true},{"country":"PAR","number":20,"missing":true},{"country":"PAR","number":21,"missing":true},{"country":"PAR","number":22,"missing":true},{"country":"CAN","number":1,"missing":true},{"country":"CAN","number":2,"missing":true},{"country":"CAN","number":3,"missing":true},{"country":"CAN","number":4,"missing":true},{"country":"CAN","number":5,"missing":true},{"country":"CAN","number":6,"missing":true},{"country":"CAN","number":7,"missing":true},{"country":"CAN","number":8,"missing":true},{"country":"CAN","number":9,"missing":true},{"country":"CAN","number":10,"missing":true},{"country":"CAN","number":11,"missing":true},{"country":"CAN","number":12,"missing":true},{"country":"CAN","number":13,"missing":true},{"country":"CAN","number":14,"missing":true},{"country":"CAN","number":15,"missing":true},{"country":"CAN","number":16,"missing":true},{"country":"CAN","number":17,"missing":true},{"country":"CAN","number":18,"missing":true},{"country":"CAN","number":19,"missing":true},{"country":"CAN","number":20,"missing":true},{"country":"CAN","number":21,"missing":true},{"country":"CAN","number":22,"missing":true},{"country":"CRC","number":1,"missing":true},{"country":"CRC","number":2,"missing":true},{"country":"CRC","number":3,"missing":true},{"country":"CRC","number":4,"missing":true},{"country":"CRC","number":5,"missing":true},{"country":"CRC","number":6,"missing":true},{"country":"CRC","number":7,"missing":true},{"country":"CRC","number":8,"missing":true},{"country":"CRC","number":9,"missing":true},{"country":"CRC","number":10,"missing":true},{"country":"CRC","number":11,"missing":true},{"country":"CRC","number":12,"missing":true},{"country":"CRC","number":13,"missing":true},{"country":"CRC","number":14,"missing":true},{"country":"CRC","number":15,"missing":true},{"country":"CRC","number":16,"missing":true},{"country":"CRC","number":17,"missing":true},{"country":"CRC","number":18,"missing":true},{"country":"CRC","number":19,"missing":true},{"country":"CRC","number":20,"missing":true},{"country":"CRC","number":21,"missing":true},{"country":"CRC","number":22,"missing":true},{"country":"HON","number":1,"missing":true},{"country":"HON","number":2,"missing":true},{"country":"HON","number":3,"missing":true},{"country":"HON","number":4,"missing":true},{"country":"HON","number":5,"missing":true},{"country":"HON","number":6,"missing":true},{"country":"HON","number":7,"missing":true},{"country":"HON","number":8,"missing":true},{"country":"HON","number":9,"missing":true},{"country":"HON","number":10,"missing":true},{"country":"HON","number":11,"missing":true},{"country":"HON","number":12,"missing":true},{"country":"HON","number":13,"missing":true},{"country":"HON","number":14,"missing":true},{"country":"HON","number":15,"missing":true},{"country":"HON","number":16,"missing":true},{"country":"HON","number":17,"missing":true},{"country":"HON","number":18,"missing":true},{"country":"HON","number":19,"missing":true},{"country":"HON","number":20,"missing":true},{"country":"HON","number":21,"missing":true},{"country":"HON","number":22,"missing":true},{"country":"TRI","number":1,"missing":true},{"country":"TRI","number":2,"missing":true},{"country":"TRI","number":3,"missing":true},{"country":"TRI","number":4,"missing":true},{"country":"TRI","number":5,"missing":true},{"country":"TRI","number":6,"missing":true},{"country":"TRI","number":7,"missing":true},{"country":"TRI","number":8,"missing":true},{"country":"TRI","number":9,"missing":true},{"country":"TRI","number":10,"missing":true},{"country":"TRI","number":11,"missing":true},{"country":"TRI","number":12,"missing":true},{"country":"TRI","number":13,"missing":true},{"country":"TRI","number":14,"missing":true},{"country":"TRI","number":15,"missing":true},{"country":"TRI","number":16,"missing":true},{"country":"TRI","number":17,"missing":true},{"country":"TRI","number":18,"missing":true},{"country":"TRI","number":19,"missing":true},{"country":"TRI","number":20,"missing":true},{"country":"TRI","number":21,"missing":true},{"country":"TRI","number":22,"missing":true}]';
    localStorage.setItem('album', album);
  };

  const getRowKey = (record) => {
    const { country, number } = record;
    return `${country}_${number}`;
  };

  React.useEffect(() => {
    const result = localStorage.getItem('album');
    if (result) {
      const stickers = JSON.parse(result);

      const selected = stickers.filter((i) => !i.missing).map(getRowKey);

      setSelectedRowKeys(selected);
      setStickers(stickers);
    } else {
      createAlbum();
    }
  }, []);

  const rowSelectionConfig: TableRowSelection<DataType> = {
    //columnTitle: '#',

    hideSelectAll: true,

    selectedRowKeys,

    onChange: (selectedRowKeys, selectedRows) => {
      const updated = stickers.map((s) => {
        const { country, number } = s;
        const found = selectedRows.find(
          (e) => e.country === country && e.number === number
        );

        if (found) {
          s.missing = false;
        } else {
          s.missing = true;
        }
        return s;
      });

      localStorage.setItem('album', JSON.stringify(updated));

      setSelectedRowKeys(selectedRowKeys);
    },
  };
  return (
    <Table
      columns={columns}
      rowSelection={rowSelectionConfig}
      dataSource={stickers}
      rowKey={(record) => getRowKey(record)}
      pagination={{ defaultPageSize: 22 } as TablePaginationConfig}
    />
  );
};

export default App;
