/** @format */

import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import firebase from '../utils/firebase';
import Spinner from 'react-bootstrap/Spinner';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

export const Table = () => {
  const [dataList, setDataList] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userRef = firebase.database().ref('User');
    userRef.on('value', (snapshot) => {
      const list = snapshot.val();
      const dataList = [];
      for (let id in list) {
        dataList.push({ id, ...list[id] });
      }
      console.log('init', dataList);
      setDataList(dataList);
      setLoading(true);
    });
  }, []);

  const columns = [
    {
      dataField: 'data.firstName',
      text: 'Ime',
      filter: textFilter(),
      sort: true,
    },
    {
      dataField: 'data.lastName',
      text: 'Prezime',
      filter: textFilter(),
      sort: true,
    },
    {
      dataField: 'data.DOB',
      text: 'Datum rođenja',
    },
    { dataField: 'data.typeOfContact', text: 'Vrsta kontakta' },
    { dataField: 'data.contact', text: 'kontakt', filter: textFilter() },
  ];

  return (
    <div>
      {loading ? (
        <BootstrapTable
          striped
          bordered
          hover
          keyField='id'
          data={dataList}
          columns={columns}
          sizePerPageList={5}
          pagination={paginationFactory()}
          filter={filterFactory()}
        />
      ) : (
        <Spinner className='spinner' animation='border' role='status'>
          <span className='sr-only'>Loading</span>
        </Spinner>
      )}
    </div>
  );
};
