import { React, useState, useRef } from "react";
import moment from "moment";

export const PortalLayout = () => {
  const [year, setYear] = useState(0);
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [showToast, setShowToast] = useState(false);

  const startDateRef = useRef();

  const handleCalculateClick = (event) => {
    const now = moment();
    const startDate = moment(startDateRef.current.value);
    const age = moment.duration(now.diff(startDate));
    setDay(age.days());
    setMonth(age.months());
    setYear(age.years());
    console.log(moment.duration(now.diff(startDate)));
  };

  return (
    <div className="bg-blue-200 h-screen">
      <div></div>
      <div className="p-6 ">
        <h2 className="text-2xl font-bold text-black">Age Calculator</h2>
        <div className="py-6 flex flex-wrap gap-4 place-items-center">
          <input
            type="date"
            className="form-input rounded "
            ref={startDateRef}
          />
          <button
            className="bg-blue-500 font-bold py-2 px-4 rounded hover:bg-blue-400 text-white"
            onClick={handleCalculateClick}
          >
            Calculate
          </button>
        </div>
        <div className="">
          <div className="py-6 flex flex-wrap gap-4 place-items-center">
            <input
              value={year}
              type="text"
              className="form-input rounded w-16"
            ></input>
            <div>Years</div>
            <button
              className="bg-blue-500 font-bold py-2 px-4 rounded hover:bg-blue-400 text-white"
              onClick={() => {
                navigator.clipboard.writeText(year);
                setShowToast(true);
                setTimeout(function () {
                  setShowToast(false);
                }, 1000);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16px"
                viewBox="0 0 24 24"
                width="16px"
                fill="#FFFFFF"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
              </svg>
            </button>
          </div>
          <div className="py-6 flex flex-wrap gap-4 place-items-center">
            <input
              value={month}
              type="text"
              className="form-input rounded place-items-center w-16"
            ></input>
            <div>Months</div>
            <button
              className="bg-blue-500 font-bold py-2 px-4 rounded hover:bg-blue-400 text-white"
              onClick={() => {
                navigator.clipboard.writeText(month);
                setShowToast(true);
                setTimeout(function () {
                  setShowToast(false);
                }, 1000);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16px"
                viewBox="0 0 24 24"
                width="16px"
                fill="#FFFFFF"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
              </svg>
            </button>
          </div>
          <div className="py-6 flex flex-wrap gap-4 place-items-center ">
            <input
              value={day}
              type="text"
              className="form-input rounded w-16"
            ></input>
            <div>Days</div>
            <button
              className="bg-blue-500 font-bold py-2 px-4 rounded hover:bg-blue-400 text-white"
              onClick={() => {
                navigator.clipboard.writeText(day);
                setShowToast(true);
                setTimeout(function () {
                  setShowToast(false);
                }, 1000);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16px"
                viewBox="0 0 24 24"
                width="16px"
                fill="#FFFFFF"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={
            "flex flex-col justify-center w-max " + (showToast ? "" : "hidden")
          }
        >
          <div className="flex items-center bg-green-500 border-l-4 border-green-700 py-2 px-3 shadow-md mb-2">
            <div className="text-green-500 rounded-full bg-white mr-3">
              <svg
                width="1.8em"
                height="1.8em"
                viewBox="0 0 16 16"
                className="bi bi-check"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
                />
              </svg>
            </div>
            <div className="text-white max-w-xs ">Copied Successfully</div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
