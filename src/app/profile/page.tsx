"use client";
import React, { useState } from "react";
import Image from "next/image";
import previmg2 from "../../assets/images/previmg.png";
import { ButtonArrow, EditImgIcon } from "@/utils/svgicon";
import success from "../../assets/images/succes.png";

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    dob: string;
    phoneNumber: string;
    gender: string;
    state: string;
    city: string;
    address: string;
    about: string;
    preferredConsultation: string;
    preferredLanguage: string;
    startTime: string;
    endTime: string;
    image: string;
    repeatDays: string[]; // Explicitly define repeatDays as an array of strings
  };

  
const Page = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        email: "",
        dob: "",
        phoneNumber: "",
        gender: "",
        state: "",
        city: "",
        address: "",
        about: "",
        preferredConsultation: "",
        preferredLanguage: "",
        startTime: "",
        endTime: "",
        image: "",
        repeatDays: [], // Initialize as an empty array
      });
      
const [imagePreview, setImagePreview] = useState<string | null>(null);
const [notification, setNotification] = useState<string | null>(null);

const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setImagePreview(result);
        setFormData((prevData) => ({
          ...prevData,
          image: result,
        }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const triggerFileInputClick = () => {
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (day: string) => {
    setFormData((prevData) => {
      const updatedDays = prevData.repeatDays.includes(day)
        ? prevData.repeatDays.filter((d) => d !== day)
        : [...prevData.repeatDays, day];
      return { ...prevData, repeatDays: updatedDays };
    });
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //console.log("Form Data Submitted: ", formData);

    setNotification("Payment Request Submitted");
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  return (
    <div>
      <h1 className=" mb-[20px] md:mb-[50px]"> My Profile </h1>
      <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-[20px] p-5 md:p-[30px]">   
          <h2 className="mb-[30px]">Personal details</h2>  
          <div className="custom relative w-[177px] h-[177px] mb-[50px]">
          <input
            className="absolute top-0 left-0 h-full w-full opacity-0 p-0 cursor-pointer"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {imagePreview ? (
            <div className="relative h-full">
              <Image
                src={imagePreview}
                alt="Preview"
                width={177}
                height={177}
                className="rounded-full h-full object-cover"
              />
              <button
                type="button"
                onClick={triggerFileInputClick}
                className="absolute bottom-[16px] right-1"
              >
                <EditImgIcon />
              </button>
            </div>
          ) : (
            <div className="grid place-items-center h-full w-full">
              <div>
                <Image
                  src={previmg2}
                  alt="upload"
                  width={177}
                  height={177}
                  className="rounded-full"
                />
                <p className="absolute bottom-[16px] right-1 pointer-events-none">
                  <EditImgIcon />
                </p>
              </div>
            </div>
          )}
        </div>
            <div className="profile-form flex flex-wrap gap-[30px]">
              <div className="md:w-[calc(30%-30px)]">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="md:w-[calc(30%-30px)]">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="md:w-[40%]">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="md:w-[calc(20%-30px)]">
                <input
                  type="date"
                  name="dob"
                  placeholder="Date of Birth"
                  value={formData.dob}
                  onChange={handleChange}
                />
              </div>
              <div className="md:w-[calc(35%-30px)]">
                <input
                  type="number"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="md:w-[calc(20%-30px)]">
                <select name="gender" value={formData.gender} onChange={handleChange}>
                  <option value="">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="md:w-[25%]">
                <select name="state" value={formData.state} onChange={handleChange}>
                  <option value="">State</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
              <div className="md:w-[calc(25%-30px)]">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div className="md:w-[75%]">
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="md:w-[100%]">
                <textarea
                  name="about"
                  rows={4}
                  placeholder="About"
                  value={formData.about}
                  onChange={handleChange}
                />
              </div>
            </div>
            </div>
      <div className="bg-white rounded-[20px] p-5 md:p-[30px] mt-[30px]">
        <h2 className="mb-[50px]">Availability</h2>
        <div className="max-w-[870px]">
          <div className="grid gap-[10px] md:gap-7 md:grid-cols-[minmax(0,_5.5fr)_minmax(0,_6.5fr)] items-center md:mb-[35px]">
            <label className="text-[#283c63] text-sm">
              Which are your preferred means of online consultation?
            </label>
            <select
              name="preferredConsultation"
              value={formData.preferredConsultation}
              onChange={handleChange}
              className="h-[45px]"
            >
              <option value="">Audio, Video, Chat</option>
              <option value="Audio">Audio</option>
              <option value="Video">Video</option>
              <option value="Chat">Chat</option>
            </select>
          </div>
          <div className="grid gap-[10px] md:gap-7 md:grid-cols-[minmax(0,_5.5fr)_minmax(0,_6.5fr)] items-center md:mb-[35px]">
            <label className="text-[#283c63] text-sm">Preferred language</label>
            <input
              type="text"
              name="preferredLanguage"
              value={formData.preferredLanguage}
              onChange={handleChange}
              className="h-[45px]"
            />
          </div>
          <div className="grid gap-[10px] md:gap-7 md:grid-cols-[minmax(0,_5.5fr)_minmax(0,_6.5fr)] items-center md:mb-[35px]">
            <label className="text-[#283c63] text-sm">Start Time</label>
            <input
              type="time"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              className="h-[45px]"
            />
          </div>
          <div className="grid gap-[10px] md:gap-7 md:grid-cols-[minmax(0,_5.5fr)_minmax(0,_6.5fr)] items-center md:mb-[35px]">
            <label className="text-[#283c63] text-sm">End Time</label>
            <input
              type="time"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              className="h-[45px]"
            />
          </div>
          <div className="grid gap-[10px] md:gap-7 md:grid-cols-[minmax(0,_5.5fr)_minmax(0,_6.5fr)] items-center md:mb-[35px]">
            <label className="text-[#283c63] text-sm">Repeat on</label>
            <div className="grid grid-cols-[repeat(7,_minmax(0,_1fr))]">
              {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
                <div key={day} className="custom-checkbox relative flex items-center">
                  <input
                    type="checkbox"
                    id={day}
                    name="repeatDays"
                    checked={formData.repeatDays.includes(day)}
                    onChange={() => handleCheckboxChange(day)}
                  />
                  <label htmlFor={day} className="text-[#283c63] text-sm">
                    {day}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='mt-[30px] flex justify-end '>
         <button type="submit" className="button px-[30px]">Confirm & Update <ButtonArrow /> </button>
         </div>
         </form>
         {notification && (
        <div className="fixed inset-0 grid place-items-center w-full h-full bg-gray-500 bg-opacity-75">
          <div className="bg-white text-[#283C63] py-[60px] rounded-[20px] shadow-lg max-w-[584px] w-full">
            <Image src={success} alt="success" height={130} width={115} className="mx-auto" />
            <h2 className="text-center mt-[40px]">{notification}</h2>
          </div>
        </div>
      )}
       </div>
 
  );
};

export default Page;
