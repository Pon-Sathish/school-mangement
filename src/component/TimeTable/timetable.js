import axios from 'axios';
import './timetable.css'
import { useEffect, useState } from "react";
function TimeTable() {
    const [data, setdata] = useState([])


    useEffect(() => {
        axios.get('http://localhost:3001/TimeTable')
            .then((res) => {
                setdata(res.data.name)
            })
            .catch((err) => {
                console.log("err");
            })

        console.log(data);

    }, [])
    return <>
        <table>
            {/* <tr>
                <th>No</th>
                <th>Day</th>
                <th>I</th>
                <th>II</th>
                <th>III</th>
                <th>IV</th>
                <th>V</th>
                <th>VI</th>
                <th>VII</th>
                <th>VIII</th>
            </tr>
            {
                data.map((ele) => {
                    return (<tr>
                        <td>1</td>
                        <td>MONDAY</td>
                        <td>{ele.one}</td>
                        <td>{ele.two}</td>
                        <td>{ele.three}</td>
                        <td>{ele.four}</td>
                        <td>{ele.five}</td>
                        <td>{ele.six}</td>
                        <td>{ele.seven}</td>
                        <td>{ele.eight}</td>
                    </tr>)
                })
            } */}
        </table>
    </>
}
export default TimeTable