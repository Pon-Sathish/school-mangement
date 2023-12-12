// import logo from './logo.svg';
import './App.css';

import Addteacher from './component/AddTeacher/addteacher';
import AttendanCechart from './component/AttendanceChart/attendancechart';
import DailyAttendance from './component/DailyAttendance/dailyattendance';
import Studentpage from './component/StudentPage/studentpage';
import Teacherpage from './component/TeacherPage/teacherpage';
import TimeTable from './component/TimeTable/timetable';
import Addstudent from './component/addStudent/addstudent';
import Adminlogin from './component/admin/admin';
import Adminpage from './component/adminpage/adminpage';
import Studentlogin from './component/student/student';
import Teacherlogin from './component/teacher/teacher';
import Webpage from './component/webpage/webpage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (

    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Webpage />}></Route>
        <Route path='/Adminlogin' element={<Adminlogin />}></Route>
        <Route path='/Teacherlogin' element={<Teacherlogin />}></Route>
        <Route path='/Studentlogin' element={<Studentlogin />}></Route>
        <Route path='/Adminpage' element={<Adminpage />}></Route>
        <Route path='/Studentpage' element={<Studentpage />}></Route>
        <Route path='/Teacherpage' element={<Teacherpage />}></Route>
        <Route path='/addteacher' element={<Addteacher />}></Route>
        <Route path='/addstudent' element={<Addstudent />} ></Route>
        <Route path='/DailyAttendance' element={<DailyAttendance />}></Route>
        <Route path='/AttendanCechart' element={<AttendanCechart />}></Route>
        <Route path='/TimeTable' element={<TimeTable />}></Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
