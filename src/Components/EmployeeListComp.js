import * as React from 'react';
import { styled } from '@mui/system';
import {
  TablePagination,
  tablePaginationClasses as classes,
} from '@mui/base/TablePagination';
import { useSelector } from 'react-redux';
import { Button , Modal} from 'react-bootstrap'
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link, useNavigate } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';

import VisibilityIcon from '@mui/icons-material/Visibility'
import { useEffect } from 'react';
import {fetch_employees , delete_employee} from '../Redux/Employee/employeeAction'

import { useDispatch } from 'react-redux';

export default function EmployeeListComp() {
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
        if (window.confirm(`Are you sure You want to delete employee with id :${id}`)){;
            dispatch(delete_employee(id));   
        } 
      }

  const {data} = useSelector((state)=>state.employee)


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
    dispatch(fetch_employees(), setLoading(true));
    
  },[]);

  return (
    <Root >
      <Link to="../addemp" className='btn btn-primary' style={{marginTop:'10px',marginLeft:'10px'}}><AddIcon/>Add</Link>

      <table aria-label="custom pagination table" variant='black' className='table table-striped '>
        <thead className='thead-dark'>
          <tr>
            <th>Emp Id</th>
            <th >Name</th>
            <th>Post</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          
          {(rowsPerPage > 0 ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage): data).map((val,index) => (
            <tr key={val.id}>
              <td>{val.id }</td>
              <td>
                {val.name}
              </td>
              <td>
                {val.post}
              </td>
              <td>
                {val.department}
              </td>
              <td><button onClick={()=>{handleShow(val)}} className='btn btn-outline-primary btn-sm'><VisibilityIcon/></button>{' '}
                    <Link type='button'  className='btn btn-outline-primary btn-sm' to={`../editemp/${val.id}`}><EditNoteOutlinedIcon/></Link>{' '}
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
          <label>Name : <strong>{show.name}</strong></label><br/>
          <label>Department Name : <strong>{show.department}</strong></label><br/>
          <label>Gender : <strong>{show.gender}</strong></label><br/>
          <label>Contact : <strong>{show.contact}</strong></label><br/>
          <label>Course : <strong>{show.course}</strong></label><br/>
          <label>Experience : <strong>{show.experience}</strong></label><br/>
          <label>Blood group : <strong>{show.blood_group}</strong></label><br/>
          <label>Emergency Contact : <strong>{show.emergency_contact}</strong></label><br/>
          <label>Qualification : <strong>{show.qualification}</strong></label><br/>
          <label>Address : <strong>{show.address}</strong></label><br/>
          <label>Age : <strong>{show.age}</strong></label><br/>
          <label>Salary : <strong>{show.salary}</strong></label><br/>
          
          <label>Post: <strong>{show.post}</strong></label><br/>
          <label>Employment Type : <strong>{show.employment_type}</strong></label><br/>
          
          
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

