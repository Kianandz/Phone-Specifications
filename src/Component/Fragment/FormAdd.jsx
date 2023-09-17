import React, { useState, useEffect, useRef } from "react";
import { API_BASE_URL } from "../../API_BASE_URL";
import Label from "../Element/Label";
import Input from "../Element/Input";
import Button from "../Element/Button";
import Title from "../Element/Title";
import IconGoogle from "../Element/IconGoogle";
import Img from "../Element/Img";
import Alert from "./Alert";

const FormAdd = (props) => {
  const inputFileTrigger = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showAlertError, setShowAlertError] = useState(false);

  const handleInputFileTrigger = () => {
    inputFileTrigger.current.click();
  };

  const handleFileSelect = (e) => {
    if (previewURL) {
      URL.revokeObjectURL(previewURL);
    }

    const file = e.target.files[0];
    setSelectedFile(file);
    const url = URL.createObjectURL(file);
    setPreviewURL(url);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch(`${API_BASE_URL}/postPhone`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setShowAlertSuccess(true);
      } else {
        const data = await response.json();
        alert(`Terjadi kesalahan: ${data.message}`);
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      setShowAlertError(true);
    }
  };
  return (
    <>
      {showAlertSuccess && (
        <Alert
          bgColor="bg-green-200"
          colorMessage="text-green-800"
          alertMessage="Insert Data Success!"
          position="fixed top-0 right-4"
          padding="px-6 py-4 rounded-lg"
        />
      )}
      {showAlertError && (
        <Alert
        bgColor="bg-red-200"
        colorMessage="text-red-800"
        alertMessage="Something Error When Insert Data"
        position="fixed top-0 right-4"
        padding="px-6 py-4 rounded-lg"
      />
      )}
      <form onSubmit={handleFormSubmit}>
        <Title className="font-semibold text-xl" Title="Basic Info" />
        <div className="grid grid-cols-4 gap-8 mt-2">
          <div className="w-full col-span-3 ">
            <div className="relative w-full flex gap-8">
              <div className="w-full relative flex-1">
                <Label
                  htmlFor="name"
                  className="text-base block mb-1"
                  label="Name"
                />
                <Input
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="name"
                  className="px-2 py-2 text-sm w-full bg-gray-200 rounded-lg border border-gray-400"
                />
              </div>
              <div className="w-full relative flex-1">
                <Label
                  htmlFor="brands"
                  className="text-base block mb-1"
                  label="Brands"
                />
                <Input
                  type="text"
                  placeholder="Brands"
                  name="brands"
                  id="brands"
                  className="px-2 py-2 text-sm w-full bg-gray-200 rounded-lg border border-gray-400"
                />
              </div>
            </div>
            <Title className="font-semibold text-xl mt-4" Title="Network" />
            <div className="relative w-full grid grid-cols-3 gap-6 mt-2">
              <div className="w-full relative">
                <Label
                  htmlFor="phone_network"
                  className="text-base block mb-1"
                  label="Network"
                />
                <Input
                  type="text"
                  placeholder="Network"
                  name="phone_network"
                  id="phone_network"
                  className="px-2 py-2 text-sm w-full bg-gray-200 rounded-lg border border-gray-400"
                />
              </div>
              <div className="w-full relative">
                <Label
                  htmlFor="phone_sim"
                  className="text-base block mb-1"
                  label="Sim"
                />
                <Input
                  type="text"
                  placeholder="Sim"
                  name="phone_sim"
                  id="phone_sim"
                  className="px-2 py-2 text-sm w-full bg-gray-200 rounded-lg border border-gray-400"
                />
              </div>
              <div className="w-full relative">
                <Label
                  htmlFor="phone_sim_type"
                  className="text-base block mb-1"
                  label="Sim Type"
                />
                <Input
                  type="text"
                  placeholder="Sim Type"
                  name="phone_sim_type"
                  id="phone_sim_type"
                  className="px-2 py-2 text-sm w-full bg-gray-200 rounded-lg border border-gray-400"
                />
              </div>
            </div>
            <Title className="font-semibold text-xl mt-4" Title="Design" />
            <div className="relative w-full grid grid-cols-4 gap-6 mt-2">
              <div className="w-full relative">
                <Label
                  htmlFor="material"
                  className="text-base block mb-1"
                  label="Material"
                />
                <Input
                  type="text"
                  placeholder="Material"
                  name="material"
                  id="material"
                  className="px-2 py-2 text-sm w-full bg-gray-200 rounded-lg border border-gray-400"
                />
              </div>
              <div className="w-full relative">
                <Label
                  htmlFor="dimensions"
                  className="text-base block mb-1"
                  label="Dimensions"
                />
                <Input
                  type="text"
                  placeholder="Dimensions"
                  name="dimensions"
                  id="dimensions"
                  className="px-2 py-2 text-sm w-full bg-gray-200 rounded-lg border border-gray-400"
                />
              </div>
              <div className="w-full relative">
                <Label
                  htmlFor="weight"
                  className="text-base block mb-1"
                  label="Weight"
                />
                <Input
                  type="text"
                  placeholder="Weight"
                  name="weight"
                  id="weight"
                  className="px-2 py-2 text-sm w-full bg-gray-200 rounded-lg border border-gray-400"
                />
              </div>
              <div className="w-full relative">
                <Label
                  htmlFor="color"
                  className="text-base block mb-1"
                  label="Color"
                />
                <Input
                  type="text"
                  placeholder="Color"
                  name="color"
                  id="color"
                  className="px-2 py-2 text-sm w-full bg-gray-200 rounded-lg border border-gray-400"
                />
              </div>
            </div>
          </div>
          <div className="relative">
            <Label label="Image" className="block text-base mb-1" />
            <div
              className="relative w-[250px] h-[250px] flex items-center justify-center cursor-pointer bg-gray-200
            hover:bg-gray-300 rounded-lg transition-all border border-gray-300 object-center overflow-hidden"
              onClick={handleInputFileTrigger}
            >
              <IconGoogle
                className={`${selectedFile ? "hidden" : ""}`}
                iconValue="add"
              />
              {previewURL && (
                <Img
                  className={`h-full mx-auto`}
                  srcImage={previewURL}
                  altImage={selectedFile ? selectedFile.name : ""}
                />
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              name="phone_image"
              id="phone_image"
              className="hidden"
              ref={inputFileTrigger}
              onChange={handleFileSelect}
            />
          </div>
          <div className="w-full col-span-4">
            <Title className="font-semibold text-xl" Title="Screen" />
            <div className="relative w-full grid grid-cols-3 gap-6 mt-2">
              <div className="w-full relative">
                <Label
                  htmlFor="resolution"
                  className="text-base block mb-1"
                  label="Resolution"
                />
                <Input
                  type="text"
                  placeholder="Resolution"
                  name="resolution"
                  id="resolution"
                  className="px-2 py-2 text-sm w-full bg-gray-200 rounded-lg border border-gray-400"
                />
              </div>
              <div className="w-full relative">
                <Label
                  htmlFor="screen_size"
                  className="text-base block mb-1"
                  label="Screen Size"
                />
                <Input
                  type="text"
                  placeholder="Screen Size"
                  name="screen_size"
                  id="screen_size"
                  className="px-2 py-2 text-sm w-full bg-gray-200 rounded-lg border border-gray-400"
                />
              </div>
              <div className="w-full relative">
                <Label
                  htmlFor="technology"
                  className="text-base block mb-1"
                  label="Technology"
                />
                <Input
                  type="text"
                  placeholder="Technology"
                  name="technology"
                  id="technology"
                  className="px-2 py-2 text-sm w-full bg-gray-200 rounded-lg border border-gray-400"
                />
              </div>
            </div>
            <Title className="font-semibold text-xl mt-4" Title="Software" />
            <div className="relative w-full grid grid-cols-2 gap-6 mt-2">
              <div className="w-full relative">
                <Label
                  htmlFor="os"
                  className="text-base block mb-1"
                  label="Os"
                />
                <select
                  name="os"
                  id="os"
                  className="px-2 py-2 text-sm w-full bg-gray-200 rounded-lg border border-gray-400"
                >
                  <option value="Android">Android</option>
                  <option value="IOS">IOS</option>
                </select>
              </div>
              <div className="w-full relative">
                <Label
                  htmlFor="os_version"
                  className="text-base block mb-1"
                  label="OS Version"
                />
                <Input
                  type="text"
                  placeholder="OS Version"
                  name="os_version"
                  id="os_version"
                  className="px-2 py-2 text-sm w-full bg-gray-200 rounded-lg border border-gray-400"
                />
              </div>
            </div>
            <Title className="font-semibold text-xl mt-4" Title="Hardware" />
            <div className="relative w-full grid grid-cols-3 gap-6 mt-2">
              <div className="w-full relative">
                <Label
                  htmlFor="chipset"
                  className="text-base block mb-1"
                  label="Chipset"
                />
                <Input
                  type="text"
                  placeholder="Chipset"
                  name="chipset"
                  id="chipset"
                  className="px-2 py-2 text-sm w-full bg-gray-200 rounded-lg border border-gray-400"
                />
              </div>
              <div className="w-full relative">
                <Label
                  htmlFor="cpu"
                  className="text-base block mb-1"
                  label="Cpu"
                />
                <Input
                  type="text"
                  placeholder="Cpu"
                  name="cpu"
                  id="cpu"
                  className="px-2 py-2 text-sm w-full bg-gray-200 rounded-lg border border-gray-400"
                />
              </div>
              <div className="w-full relative">
                <Label
                  htmlFor="gpu"
                  className="text-base block mb-1"
                  label="Gpu"
                />
                <Input
                  type="text"
                  placeholder="Gpu"
                  name="gpu"
                  id="gpu"
                  className="px-2 py-2 text-sm w-full bg-gray-200 rounded-lg border border-gray-400"
                />
              </div>
            </div>
            <Title className="font-semibold text-xl mt-4" Title="Memory" />
            <div className="relative w-full grid grid-cols-3 gap-6 mt-2">
              <div className="w-full relative">
                <Label
                  htmlFor="ram"
                  className="text-base block mb-1"
                  label="Ram"
                />
                <Input
                  type="text"
                  placeholder="Ram"
                  name="ram"
                  id="ram"
                  className="px-2 py-2 text-sm w-full bg-gray-200 rounded-lg border border-gray-400"
                />
              </div>
              <div className="w-full relative">
                <Label
                  htmlFor="storage"
                  className="text-base block mb-1"
                  label="Storage"
                />
                <Input
                  type="text"
                  placeholder="Storage"
                  name="storage"
                  id="storage"
                  className="px-2 py-2 text-sm w-full bg-gray-200 rounded-lg border border-gray-400"
                />
              </div>
              <div className="w-full relative">
                <Label
                  htmlFor="storage_type"
                  className="text-base block mb-1"
                  label="Storage Type"
                />
                <Input
                  type="text"
                  placeholder="Storage Type"
                  name="storage_type"
                  id="storage_type"
                  className="px-2 py-2 text-sm w-full bg-gray-200 rounded-lg border border-gray-400"
                />
              </div>
            </div>
            <Title className="font-semibold text-xl mt-4" Title="Camera" />
            <div className="relative w-full grid grid-cols-2 gap-6 mt-2">
              <div className="w-full relative">
                <Label
                  htmlFor="main_camera"
                  className="text-base block mb-1"
                  label="Main Camera"
                />
                <Input
                  type="text"
                  placeholder="Main Camera"
                  name="main_camera"
                  id="main_camera"
                  className="px-2 py-2 text-sm w-full bg-gray-200 rounded-lg border border-gray-400"
                />
              </div>
              <div className="w-full relative">
                <Label
                  htmlFor="selfie_camera"
                  className="text-base block mb-1"
                  label="Selfie Camera"
                />
                <Input
                  type="text"
                  placeholder="Selfie Camera"
                  name="selfie_camera"
                  id="selfie_camera"
                  className="px-2 py-2 text-sm w-full bg-gray-200 rounded-lg border border-gray-400"
                />
              </div>
            </div>
            <Title
              className="font-semibold text-xl mt-4"
              Title="Connectivity"
            />
            <div className="relative w-full grid grid-cols-5 gap-6 mt-2">
              <div className="w-full relative">
                <Label
                  htmlFor="nfc"
                  className="text-base block mb-1"
                  label="NFC"
                />
                <select
                  name="nfc"
                  id="nfc"
                  className="px-2 py-2 text-sm w-full bg-gray-200 rounded-lg border border-gray-400"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="w-full relative">
                <Label
                  htmlFor="usb"
                  className="text-base block mb-1"
                  label="USB"
                />
                <Input
                  type="text"
                  placeholder="USB"
                  name="usb"
                  id="usb"
                  className="px-2 py-2 text-sm w-full bg-gray-200 rounded-lg border border-gray-400"
                />
              </div>
              <div className="w-full relative">
                <Label
                  htmlFor="bluetooth"
                  className="text-base block mb-1"
                  label="Bluetooth"
                />
                <Input
                  type="text"
                  placeholder="Bluetooth"
                  name="bluetooth"
                  id="bluetooth"
                  className="px-2 py-2 text-sm w-full bg-gray-200 rounded-lg border border-gray-400"
                />
              </div>
              <div className="w-full relative">
                <Label
                  htmlFor="gps"
                  className="text-base block mb-1"
                  label="Gps"
                />
                <Input
                  type="text"
                  placeholder="Gps"
                  name="gps"
                  id="gps"
                  className="px-2 py-2 text-sm w-full bg-gray-200 rounded-lg border border-gray-400"
                />
              </div>
              <div className="w-full relative">
                <Label
                  htmlFor="wifi"
                  className="text-base block mb-1"
                  label="Wi-Fi"
                />
                <Input
                  type="text"
                  placeholder="Wi-Fi"
                  name="wifi"
                  id="wifi"
                  className="px-2 py-2 text-sm w-full bg-gray-200 rounded-lg border border-gray-400"
                />
              </div>
            </div>
            <Title className="font-semibold text-xl mt-4" Title="Battery" />
            <div className="relative w-full grid grid-cols-2 gap-6 mt-2">
              <div className="w-full relative">
                <Label
                  htmlFor="battery"
                  className="text-base block mb-1"
                  label="Battery"
                />
                <Input
                  type="text"
                  placeholder="Battery"
                  name="battery"
                  id="battery"
                  className="px-2 py-2 text-sm w-full bg-gray-200 rounded-lg border border-gray-400"
                />
              </div>
              <div className="w-full relative">
                <Label
                  htmlFor="battery_type"
                  className="text-base block mb-1"
                  label="Battery Type"
                />
                <select
                  name="battery_type"
                  id="battery_type"
                  className="px-2 py-2 text-sm w-full bg-gray-200 rounded-lg border border-gray-400"
                >
                  <option value="Removable">Removable</option>
                  <option value="Non - Removable">Non - Removable</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <Button
          className="bg-gray-600 hover:bg-gray-700 text-white transition-all px-6 py-3 rounded-lg w-full mt-5"
          buttonValue="Insert New Data"
        />
      </form>
    </>
  );
};

export default FormAdd;
