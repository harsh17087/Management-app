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
import { fetch_students, delete_student } from '../Redux/Student/studentAction';
import { useDispatch } from 'react-redux';

export default function StudentListComp() {
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
        if (window.confirm(`Are you sure You want to delete student with id :${id}`)){;
            dispatch(delete_student(id));   
        } 
      }

  const {data} = useSelector((state)=>state.student)


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
    dispatch(fetch_students(), setLoading(true));
    
  },[]);

  return (
    <Root >
      <Link to="../addstudent" className='btn btn-primary' style={{marginTop:'10px',marginLeft:'10px'}}><AddIcon/>Add</Link>
      <table aria-label="custom pagination table" variant='black' className='table table-striped '>
        <thead className='thead-dark'>
          <tr>
            <th>Std Id</th>
            <th >Name</th>
            <th>Date Of Birth</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          
          {(rowsPerPage > 0 ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage): data).map((val,index) => (
            <tr key={val.id}>
              <td>{index + 1+page*rowsPerPage }</td>
              <td >
                {val.studName}
              </td>
              <td>
                {val.studDob}
              </td>
              <td>
                {val.studPnum}
              </td>
              <td><button onClick={()=>{handleShow(val)}} className='btn btn-outline-primary btn-sm'><VisibilityIcon/></button>{' '}
                    <Link type='button'  className='btn btn-outline-primary btn-sm' to={`../editstudent/${val.id}`}><EditNoteOutlinedIcon/></Link>{' '}
                  <button type='button' className='btn btn-outline-danger btn-sm' onClick={()=>handleDelete(val.id)}><DeleteOutlineOutlinedIcon/></button></td>

            </tr>
          ))}
          
        </tbody>
        <tfoot>
          <tr>
            <CustomTablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={5}
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

        <Modal.Header closeButton className='bg-primary' style={{marginTop:'30px'}}>
          <Modal.Title >User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <label>ID: </label><strong>{show.studId}</strong><br />
          <label>NAME: </label><strong>{show.studName}</strong><br />
          <label>FATHER'S NAME: </label><strong>{show.studFname}</strong><br />
          <label>GENDER: </label><strong>{show.studGender}</strong><br />
          <label>COURSE: </label><strong>{show.studCourse}</strong><br />
          <label>SPECIALIZATION: </label><strong>{show.studSpec}</strong><br />
          <label>DATE OF BIRTH: </label><strong>{show.studDob}</strong><br />
          <label>EMAIL ID: </label><strong>{show.studEmail}</strong><br />
          <label>ADDRESS: </label><strong>{show.studAdd}</strong><br />
          <label>NATIONALITY: </label><strong>{show.studNat}</strong><br />
          <label>PERSONAL NUMBER: </label><strong>{show.studPnum}</strong><br />
          <label>GUARDIAN NUMBER: </label><strong>{show.studGnum}</strong><br />
          <label>BLOOD GROUP: </label><strong>{show.studBgroup}</strong>
          
          

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>Understood</Button>
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

