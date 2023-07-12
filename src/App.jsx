import { Routes, Route } from 'react-router-dom';
import { observer } from 'mobx-react/';
import './app.scss';
import { Auth } from './pages/Auth/Auth';
import { Messages } from './pages/Messages/Messages';
import SingleProducts from './pages/SingleProducts/SingleProducts';
import { Home } from './pages/Home/Home';
import { SingleCategory } from './pages/SingleCategory';
import { Header } from './components/Header';
import { Footer } from './components/Footer/Footer';
import { themeStore } from './store/themeStore';
import { useEffect } from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { buttonStyle } from './styles';
import { DataGrid } from '@mui/x-data-grid';

export const App = observer(() => {

  const themeLocalStore = window.localStorage.getItem('themeStore')
  themeStore.setTheme(themeLocalStore || 'light')

  useEffect(() => {
    window.localStorage.setItem('themeStore', themeStore.theme)
  }, [])
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: ({row}) =>
        `${row.firstName || ''} ${row.lastName || ''} ${row.age || ''}`,
    },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  return (
    <div className='body'>
      <Header />
      <main className='main'>
        <Button sx={buttonStyle} variant="contained">Contained</Button>
        <ButtonGroup variant="text" aria-label="text button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>

        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[1, 2, 5, 10]}
          checkboxSelection
        />
        {/* <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/single-products/:productId' element={<SingleProducts />} />
          <Route path='/single-category/:categoryId' element={<SingleCategory />} />
        </Routes> */}
      </main>
      <Footer />
    </div>
  );
})
