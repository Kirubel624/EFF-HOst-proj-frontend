import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import Dialog from "../../components/dialog";
import Modal from "../../components/modal";
import { fetchCoaches, resetCoaches } from "../../store/coach/actions";
import { baseURL } from "../../utils/axios";
import 'antd/dist/antd.css'
// import Checkbox from "antd/lib/checkbox/Checkbox";
// import {baseURL} from '../../utils/axios'
import {Button, Checkbox } from "antd";
const Coaches = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [education, setEducation] = useState("");
  const [coaches, setCoaches] = useState([]);
  const [firstLevel, setFirstLevel] = useState("");
  const [secondLevel,setsecondLevel]=useState("")
  const [CAFDCoach, setCAFDCoach] = useState("");
  const [CAFCCoach,setCAFCCoach]=useState("")
  const [CAFBCoach,setCAFBCoach]=useState("")
  const [CAFACoach,setCAFACoach]=useState("")
  const [CAFPROCoach,setCAFPROCoach]=useState("")
  console.log(education)
  // const {
  //   loading: coachesLoading,
  //   data: coaches,
  //   error: coachesError,
  // } = useSelector((state) => state.fetchCoaches);
  useEffect(() => {
    const feachData =async ()=> {
      const data = await axios.get("http://localhost:8000/coaches");
      let ff = [];
      let gg;
      if (firstLevel) {
        ff = [
          ...ff,
          ...data.data.paylaod.filter((education) => education.educational_state ==="First Level"
          ,console.log(education.education)
          ),
         
        ];
      }
        if (secondLevel) {
          ff = [
            ...ff,
            ...data.data.paylaod.filter((education) => education.educational_state ==="Second Level"
            ,console.log(education.education)
            ),
           
          ];


          
        }
          if (CAFDCoach) {
            ff = [
              ...ff,
              ...data.data.paylaod.filter((education) => education.educational_state ==="CAF D COACH"
              ,console.log(education.education)
              ),
             
            ];
          }
            if (CAFCCoach) {
              ff = [
                ...ff,
                ...data.data.paylaod.filter((education) => education.educational_state ==="CAF C Coach"
                ,console.log(education.education)
                ),
               
              ];
            }
              if (CAFBCoach) {
                ff = [
                  ...ff,
                  ...data.data.paylaod.filter((education) => education.educational_state ==="CAF B Coach"
                  ,console.log(education.education)
                  ),
                 
                ];
        // console.log(education.education);
      }

      if (CAFACoach) {
        ff = [
          ...ff,
          ...data.data.paylaod.filter((education) => education.educational_state ==="CAF A Coach"
          ,console.log(education.education)
          ),
         
        ];
// console.log(education.education);
}
if (CAFPROCoach) {
  ff = [
    ...ff,
    ...data.data.paylaod.filter((education) => education.educational_state ==="CAF Pro Coach"
    ,console.log(education.education)
    ),
   
  ];
// console.log(education.education);
}

      if (ff.length === 0) {
        ff = [...data.data.paylaod];
      }
      console.log("ppppppppppppppppppp", data.data.paylaod);
      setCoaches(ff);
      console.log("::::::::::::::::::::::::::::::::::::::::::::::", ff);

    };   
     feachData();
    
  }, [firstLevel,secondLevel,CAFDCoach,CAFCCoach,CAFBCoach,CAFACoach,CAFPROCoach]);
  const handleFirstLevel = () => {
    setFirstLevel(!firstLevel);
  };
  const handleSecondLevel =()=>{
    setsecondLevel(!secondLevel);
  }
  const handleCAFDCOACH =()=>{
    setCAFDCoach(!CAFDCoach);
  }
  const handleCAFCCOACH=()=>{
    setCAFCCoach(!CAFCCoach);
  }
  const handleCAFBCOACH =()=>{
    setCAFBCoach(!CAFBCoach);
  }
  const handleCAFACOACH=()=>{
    setCAFACoach(!CAFACoach);

  }
  const handleCAFPROCOACH=()=>{
    setCAFPROCoach(!CAFPROCoach);
    
  }
  return (
    <div>
      {/* <Modal open={coachesError}>
        <Dialog
          severity="failure"
          message="adding coach failed !"
          close={() => dispatch(resetCoaches())}
        />
      </Modal>
      <Modal open={coachesLoading}>
        <div className="bg-black bg-opacity-40 h-screen w-screen absolute flex items-center justify-center z-40">
          <PulseLoader color="white" />
        </div>
      </Modal> */}
      <div className="p-7 space-y-4">
        <div className="flex justify-end">
          <button
            className="px-2 py-1 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-md space-x-2 flex items-center"
            onClick={() => navigate("/admin/coaches/new")}
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span> Add Coach</span>
          </button>
        </div>

        <div className="bg-white   p-7 shadow-lg rounded-lg">
          <div className="my-2">
            <div className="pl-2">
              <span>Educational Status</span>
            </div>
            <div className="px-2 py-2 my-4 border rounded-md shadow-sm flex space-x-2 w-fit mb-8">
            <Checkbox onChange={(e) => handleFirstLevel()}>First Level</Checkbox>
            <Checkbox name="freelance" onChange={(e) => handleSecondLevel()}>
            Second Level
          </Checkbox>
{/* <Button>not working</Button> */}
<Checkbox name="freelance" onChange={(e) => handleCAFDCOACH()}>
CAF D COACH
          </Checkbox>
          <Checkbox onChange={(e) => handleCAFCCOACH()}>CAF C COACH</Checkbox>
      
         
          <Checkbox onChange={(e) => handleCAFBCOACH()}>CAF B COACH</Checkbox>
          <Checkbox onChange={(e) => handleCAFACOACH()}>CAF A COACH</Checkbox>
          <Checkbox onChange={(e) => handleCAFPROCOACH()}>CAF PRO COACH</Checkbox>
            </div>
          </div>
          <table className="w-full   p-2 shadow-md rounded-lg ">
            <thead>
              <tr>
                <td className="border-b"></td>
                <td className="font-semibold capitalize py-1 border-b pb-4 ">
                  first name
                </td>
                <td className="font-semibold capitalize py-1 border-b pb-4 ">
                  middle name
                </td>
                <td className="font-semibold capitalize py-1 border-b pb-4 ">
                  last name
                </td>
                <td className="font-semibold capitalize py-1 border-b pb-4 ">
                  gender
                </td>
              </tr>
            </thead>
            <tbody className="text-sm">
              {coaches.map((coach) => {
                return (
                  <tr
                    key={coach._id}
                    className=" hover:bg-slate-50 hover:cursor-pointer"
                    onClick={() =>
                      navigate(`/admin/coaches/${coach._id}/detail`)
                    }
                  >
                    <td className="p border-b py-2">
                      <div className="flex items-center justify-center">
                        <img
                          className="h-14 w-14 rounded-full object-cover"
                          src={`${baseURL}/${coach.photo}`}
                          alt= "profileimage"
                        />
                      </div>
                    </td>
                    <td className=" border-b ">{coach.first_name}</td>
                    <td className="border-b ">{coach.middle_name}</td>
                    <td className="border-b ">{coach.last_name}</td>
                    <td className="border-b">{coach.gender}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Coaches;
