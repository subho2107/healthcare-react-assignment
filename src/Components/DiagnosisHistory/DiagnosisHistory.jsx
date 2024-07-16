import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import DropDown from '../../assets/expand_more.svg'
import CustomLegend from "../CustomLegend/CustomLegend";
import Vitals from "../Vitals/Vitals";
import respiratoryRateIcon from "../../assets/respiratory-rate.svg";
import heartRateIcon from "../../assets/HeartBPM.svg";
import Temperature from "../../assets/temperature.svg";

export default function DiagnosisHistory({ user }) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current && user?.diagnosis_history) {
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      const labels = user.diagnosis_history.map(row => `${row.month.substring(0, 3)}, ${row.year}`).slice(0, 6).reverse();
      const systolicData = user.diagnosis_history.map(row => row.blood_pressure.systolic.value).slice(0, 6).reverse();
      const diastolicData = user.diagnosis_history.map(row => row.blood_pressure.diastolic.value).slice(0, 6).reverse();
      
      chartRef.current = new Chart(canvasRef.current, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Systolic",
              data: systolicData,
              tension: 0.5,
              borderColor: "#E66FD2",
              pointRadius: 7,
              pointBackgroundColor: "#E66FD2",
            },
            {
              label: "Diastolic",
              data: diastolicData,
              tension: 0.5,
              borderColor: "#8C6FE6",
              pointRadius: 7,
              pointBackgroundColor: "#8C6FE6",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: {
            padding: 20
          },
          plugins: {
            legend: {
              display: false,
            }
          },
          scales: {
            x: {
              grid: {
                display: false, 
              },
              ticks: {
                font: {
                  size: 12
                },
              },
            },
            y: {
              ticks: {
                font: {
                  size: 12
                },
              },
            }
          },
        },
      });
    }
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [user]);


  return (
    <div className="h-fit w-full rounded-lg  bg-white p-5 mb-8" >
        <h1 className="text-2xl font-bold mb-10">Diagnosis History</h1>
        <div className="bg-violet-50 w-full h-[21rem] grid grid-cols-[5fr_2fr]">
          <div>
            <div className="flex justify-between p-8 py-3 items-center">
              <h1 className="text-lg font-bold">Blood Pressure</h1>
              <div className="flex">
                <span className="text-sm mr-4">Last 6 months</span>
                <img src={DropDown} alt="dropdown" height='6' width='10'/>
              </div>
            </div>
            <div className="w-full h-[240px]">
              <canvas ref={canvasRef}/>
            </div>
          </div>
          <div className="flex flex-col">
            <CustomLegend  title="Systolic" color="#E66FD2" latestData={user?.diagnosis_history[0]?.blood_pressure?.systolic.value} pressureLevels={user?.diagnosis_history[0]?.blood_pressure?.systolic?.levels}/>
            <span className="border-solid border-b-2 border-b-gray-200 w-40"></span>
            <CustomLegend title="Diastolic" color="#8C6FE6" latestData={user?.diagnosis_history[0].blood_pressure?.diastolic.value} pressureLevels={user?.diagnosis_history[0]?.blood_pressure?.diastolic?.levels}/>
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <Vitals icon={respiratoryRateIcon} vitalType='Respiratory Rate' value={`${user?.diagnosis_history[0]?.respiratory_rate?.value} bpm`} level={user?.diagnosis_history[0]?.respiratory_rate?.levels} color='#E0F3FA'/>
          <Vitals icon={Temperature} vitalType='Temperature' value={`${user?.diagnosis_history[0]?.temperature?.value} °F`} level={user?.diagnosis_history[0]?.temperature?.levels} color='#FFE6E9'/>
          <Vitals icon={heartRateIcon} vitalType='Heart Rate' value={`${user?.diagnosis_history[0]?.heart_rate?.value} bpm`} level={user?.diagnosis_history[0]?.heart_rate?.levels} color='#FFE6F1'/>
        </div>
    </div>
  );
}