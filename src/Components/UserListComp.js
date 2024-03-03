import * as React from 'react';
import { styled } from '@mui/system';
import {
  TablePagination,
  tablePaginationClasses as classes,
} from '@mui/base/TablePagination';
import { useSelector } from 'react-redux';
import { Button , Modal} from 'react-bootstrap'
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link, useNavigate } from 'react-router-dom'

import VisibilityIcon from '@mui/icons-material/Visibility'
import { useEffect } from 'react';
import { fetch_users } from '../Redux/User/userAction';
import { delete_user, update_user } from '../Redux/User/userAction'
import './table.css'

import { useDispatch } from 'react-redux';

export default function UserListComp() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [show, setShow] = React.useState(false);
  const nav = useNavigate()

  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch()

    const handleClose = () => setShow(false);
    const handleShow = (data) => {
        setShow(true);
        setShow(data);
    }

  const handleDelete = (id) => {
        if (window.confirm(`Are you sure You want to delete user with id :${id}`)){;
            dispatch(delete_user(id));   
        } 
      }

  const {data} = useSelector((state)=>state.user)


  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    dispatch(fetch_users(), setLoading(true));
    
  },[]);

  return (
    <Root >
      <Link to="../adduser" className='btn btn-primary' style={{marginTop:'10px',marginLeft:'10px'}}><AddIcon/>Add</Link>
      <table aria-label="custom pagination table" variant='black' className='table table-striped '>
        <thead className='thead-dark'>
          <tr>
            <th>Sr. No</th>
            <th style={{paddingLeft:'50px'}}>User Id</th>
            <th>Password</th>
            <th style={{paddingLeft:'50px'}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          
          {(rowsPerPage > 0 ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage): data).map((val,index) => (
            <tr key={val.name}>
              <td>{index + 1+page*rowsPerPage }</td>
              <td style={{paddingLeft:'50px'}}>
                {val.userid}
              </td>
              <td>
                {val.userpass}
              </td>
              <td style={{paddingLeft:'50px'}}><button onClick={()=>{handleShow(val)}} className='btn btn-outline-primary btn-sm'><VisibilityIcon/></button>{' '}
                    <Link type='button'  className='btn btn-outline-primary btn-sm' to={`../edituser/${val.id}`}><EditNoteOutlinedIcon/></Link>{' '}
                  <button type='button' className='btn btn-outline-danger btn-sm' onClick={()=>handleDelete(val.id)}><DeleteOutlineOutlinedIcon/></button></td>

            </tr>
          ))}
          
        </tbody>
        <tfoot>
          <tr>
            <CustomTablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={4}
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              slotProps={{
                select: {
                  'aria-label': 'rows per page',
                },
                actions: {
                  showFirstButton: true,
                  showLastButton: true,
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </tr>
        </tfoot>
      </table>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >

        <Modal.Header closeButton className='bg-primary'style={{marginTop:'30px'}}>
          <Modal.Title >User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>E-mail : <strong>{show.userid}</strong></label><br/>
          <label>Password : <strong>{show.userpass}</strong></label><br/>
          
          

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </Root>
  );
}

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Root = styled('div')(
  ({ theme }) => `
  
  `,
);

const CustomTablePagination = styled(TablePagination)`
  & .${classes.toolbar} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .${classes.selectLabel} {
    margin: 0;
  }

  & .${classes.displayedRows} {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .${classes.spacer} {
    display: none;
  }

  & .${classes.actions} {
    display: flex;
    gap: 0.25rem;
  }
`;

