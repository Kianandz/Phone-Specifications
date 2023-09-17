import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../API_BASE_URL";
import Navbar from "../Fragment/Navbar";
import Title from "../Element/Title";
import Text from "../Element/Text";
import Img from "../Element/Img";
import IconFA from "../Element/IconFA";
import AlertAction from "../Fragment/AlertAction";
import "../../assets/Css/Animation.css";
import "../../assets/Css/Detail.css";

const Detail = () => {
  const Navigate = useNavigate();
  const { id } = useParams();
  const [Data, setData] = useState([]);
  const [action, setAction] = useState(false);
  const role = localStorage.getItem("role");
  const [showAlertConfirm, setShowAlertConfirm] = useState(false);
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);

  const handleAlert = () => {
    setShowAlertConfirm(!showAlertConfirm);
  };

  const prevPage = () => {
    Navigate(-1);
  };

  const handleDelete = () => {
    fetch(`${API_BASE_URL}/delPhone/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setShowAlertConfirm(false);
          setShowAlertSuccess(true);
        } else {
          console.error("Error deleting item");
        }
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
      });
  };

  const updateViewCount = (itemId) => {
    fetch(`${API_BASE_URL}/update-view-count/${itemId}`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("success update", data);
      })
      .catch((error) => {
        console.error("Error updating view_count: ", error);
      });
  };

  useEffect(() => {
    fetch(`${API_BASE_URL}/phone/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        updateViewCount(id);
      })
      .catch((error) => {
        console.error("Error Fetching Phones : ", error);
      });
  }, [id]);

  useEffect(() => {
    if (role === "admin") {
      setAction(true);
    } else {
      setAction(false);
    }
  }, [role]);

  const handleEditPage = () => {
    Navigate(`/admin/updatePhone/${id}`);
  };

  useEffect(() => {
    document.title = `Detail - ${Data.name}`;
  });

  return (
    <>
      {showAlertConfirm && (
        <AlertAction
          message="Delete This Data?"
          valueBtnLeft="Cancel"
          valueBtnRight="Delete"
          onLeftBtn={handleAlert}
          onRightBtn={handleDelete}
          bgColorLeftBtn="bg-gray-600 hover:bg-gray-800"
          bgColorRightBtn="bg-red-600 hover:bg-red-800"
        />
      )}
      {showAlertSuccess && (
        <AlertAction
          message="Delete Success!"
          valueBtnRight="Confirm"
          onRightBtn={prevPage}
          displayLeftBtn="hidden"
          bgColorRightBtn="bg-blue-600 hover:bg-blue-800"
        />
      )}
      <Navbar moreClass="sticky" moreResponsiveClass="sticky" />
      <div className="detail-container fade-in relative w-full py-8">
        <div className="detail-header relative flex mx-8 p-6 bg-[#fafafa] shadow-xl drop-shadow-xl rounded-xl">
          {action && (
            <div className="fixed top-4 right-4 flex items-center gap-6 z-50 px-4 py-2">
              <IconFA
                className="fa-solid fa-edit cursor-pointer hover:text-blue-600 transition-all text-[18px]"
                onClick={handleEditPage}
              />
              <IconFA
                className="fa-solid fa-trash cursor-pointer hover:text-red-600 transition-all text-[18px]"
                onClick={handleAlert}
              />
            </div>
          )}
          {Data && (
            <>
              <div className="img-wrapper relative w-72 h-72 mx-24 border border-gray-400 rounded-xl object-center overflow-hidden">
                <Img
                  srcImage={`${API_BASE_URL}/ImageData/${Data.phone_image}`}
                  altImage={Data.name}
                  className="object-center h-full mx-auto"
                />
              </div>
              <div className="wrapper-detail-header flex-1 capitalize">
                <Title className="title font-bold text-2xl" Title={Data.name} />
                <div className="wrapper-subtitle-header mt-2">
                  <div className="subtitle-header flex items-center justify-start mb-2">
                    <Text
                      className="font-semibold text-sm w-20"
                      Text="Brands"
                    />
                    <Text
                      className="font-semibold text-sm ml-2 mr-4"
                      Text=":"
                    />
                    <Text className="text-sm" Text={Data.brands} />
                  </div>
                  <div className="subtitle-header flex items-center justify-start">
                    <Text
                      className="font-semibold text-sm w-20"
                      Text="Release Year"
                    />
                    <Text
                      className="font-semibold text-sm ml-2 mr-4"
                      Text=":"
                    />
                    <Text className="text-sm" Text={Data.release_date} />
                  </div>
                </div>
                <Title
                  className="title-header-spec font-bold text-lg my-4"
                  Title="Essential specifications"
                />
                <div className="container-header-spec grid grid-cols-2 gap-2">
                  <div className="wrapper-spec py-2 flex items-center justify-center border border-gray-400">
                    <div className="icon-wrapper w-6 mx-4">
                      <IconFA className="fa-solid fa-memory text-center text-xl" />
                    </div>
                    <div className="text-head-spec-wrapper flex-1 mr-2">
                      <Text className="font-bold text-base" Text="Memory Ram" />
                      <Text className="text-base" Text={Data.ram} />
                    </div>
                  </div>
                  <div className="wrapper-spec py-2 flex items-center justify-center border border-gray-400">
                    <div className="icon-wrapper w-6 mx-4">
                      <IconFA className="fa-solid fa-camera text-center text-xl" />
                    </div>
                    <div className="text-head-spec-wrapper flex-1 mr-2">
                      <Text
                        className="font-bold text-base"
                        Text="Camera Resolution"
                      />
                      <Text className="text-base" Text={Data.main_camera} />
                    </div>
                  </div>
                  <div className="wrapper-spec py-2 flex items-center justify-center border border-gray-400">
                    <div className="icon-wrapper w-6 mx-4">
                      <IconFA className="fa-solid fa-mobile text-center text-xl" />
                    </div>
                    <div className="text-head-spec-wrapper flex-1 mr-2">
                      <Text
                        className="font-bold text-base"
                        Text="Screen Size"
                      />
                      <Text className="text-base" Text={Data.screen_size} />
                    </div>
                  </div>
                  <div className="wrapper-spec py-2 flex items-center justify-center border border-gray-400">
                    <div className="icon-wrapper w-6 mx-4">
                      <IconFA className="fa-solid fa-battery text-center text-xl" />
                    </div>
                    <div className="text-head-spec-wrapper flex-1">
                      <Text
                        className="font-bold text-base"
                        Text="Battery Capacity"
                      />
                      <Text className="text-base" Text={Data.battery} />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="relative bg-[#fafafa] shadow-xl drop-shadow-xl rounded-xl my-12 mx-8 p-8">
          {Data && (
            <>
              <Title
                className="title-content font-bold text-2xl"
                Title="Spesification Detail"
              />
              {/* Basic Info */}
              <div className="mt-6">
                <Title
                  className="subtitle-spec font-semibold text-lg mb-2"
                  Title="Basic Info"
                />
                <div className="wrapper-spec-detail flex items-center justify-start w-full border border-gray-400 gap-4">
                  <Title
                    className="w-40 font-semibold text-sm border-r border-gray-400 p-2"
                    Title="Phone Name"
                  />
                  <Text className="w-full text-sm p-2" Text={Data.name} />
                </div>
                <div className="wrapper-spec-detail flex items-center justify-start w-full border-b border-x border-gray-400 gap-4">
                  <Title
                    className="w-40 font-semibold text-sm border-r border-gray-400 p-2"
                    Title="Brands"
                  />
                  <Text className="w-full text-sm p-2" Text={Data.brands} />
                </div>
                <div className="wrapper-spec-detail flex items-center justify-start w-full border-b border-x border-gray-400 gap-4">
                  <Title
                    className="w-40 font-semibold text-sm border-r border-gray-400 p-2"
                    Title="Release Years"
                  />
                  <Text
                    className="w-full text-sm p-2"
                    Text={Data.release_date}
                  />
                </div>
              </div>
              {/* Network */}
              <div className="mt-6">
                <Title
                  className="subtitle-spec font-semibold text-lg mb-2"
                  Title="Network"
                />
                <div className="wrapper-spec-detail flex items-center justify-start w-full border border-gray-400 gap-4">
                  <Title
                    className="w-40 font-semibold text-sm border-r border-gray-400 p-2"
                    Title="Network"
                  />
                  <Text
                    className="w-full text-sm p-2"
                    Text={Data.phone_network}
                  />
                </div>
                <div className="wrapper-spec-detail flex items-center justify-start w-full border-b border-x border-gray-400 gap-4">
                  <Title
                    className="w-40 font-semibold text-sm border-r border-gray-400 p-2"
                    Title="Sim"
                  />
                  <Text className="w-full text-sm p-2" Text={Data.phone_sim} />
                </div>
                <div className="wrapper-spec-detail flex items-center justify-start w-full border-b border-x border-gray-400 gap-4">
                  <Title
                    className="w-40 font-semibold text-sm border-r border-gray-400 p-2"
                    Title="Sim Type"
                  />
                  <Text
                    className="w-full text-sm p-2"
                    Text={Data.phone_sim_type}
                  />
                </div>
              </div>
              {/* Design */}
              <div className="mt-6">
                <Title
                  className="subtitle-spec font-semibold text-lg mb-2"
                  Title="Design"
                />
                <div className="wrapper-spec-detail flex items-center justify-start w-full border border-gray-400 gap-4">
                  <Title
                    className="w-40 font-semibold text-sm border-r border-gray-400 p-2"
                    Title="Material"
                  />
                  <Text className="w-full text-sm p-2" Text={Data.material} />
                </div>
                <div className="wrapper-spec-detail flex items-center justify-start w-full border-b border-x border-gray-400 gap-4">
                  <Title
                    className="w-40 font-semibold text-sm border-r border-gray-400 p-2"
                    Title="Dimension"
                  />
                  <Text className="w-full text-sm p-2" Text={Data.dimensions} />
                </div>
                <div className="wrapper-spec-detail flex items-center justify-start w-full border-b border-x border-gray-400 gap-4">
                  <Title
                    className="w-40 font-semibold text-sm border-r border-gray-400 p-2"
                    Title="Weight"
                  />
                  <Text className="w-full text-sm p-2" Text={Data.weight} />
                </div>
                <div className="wrapper-spec-detail flex items-center justify-start w-full border-b border-x border-gray-400 gap-4">
                  <Title
                    className="w-40 font-semibold text-sm border-r border-gray-400 p-2"
                    Title="Color"
                  />
                  <Text className="w-full text-sm p-2" Text={Data.color} />
                </div>
              </div>
              {/* Screen */}
              <div className="mt-6">
                <Title
                  className="subtitle-spec font-semibold text-lg mb-2"
                  Title="Screen"
                />
                <div className="wrapper-spec-detail flex items-center justify-start w-full border border-gray-400 gap-4">
                  <Title
                    className="w-40 font-semibold text-sm border-r border-gray-400 p-2"
                    Title="Resolution"
                  />
                  <Text className="w-full text-sm p-2" Text={Data.resolution} />
                </div>
                <div className="wrapper-spec-detail flex items-center justify-start w-full border-b border-x border-gray-400 gap-4">
                  <Title
                    className="w-40 font-semibold text-sm border-r border-gray-400 p-2"
                    Title="Screen Size"
                  />
                  <Text
                    className="w-full text-sm p-2"
                    Text={Data.screen_size}
                  />
                </div>
                <div className="wrapper-spec-detail flex items-center justify-start w-full border-b border-x border-gray-400 gap-4">
                  <Title
                    className="w-40 font-semibold text-sm border-r border-gray-400 p-2"
                    Title="Technology"
                  />
                  <Text className="w-full text-sm p-2" Text={Data.technology} />
                </div>
              </div>
              {/* Software */}
              <div className="mt-6">
                <Title
                  className="subtitle-spec font-semibold text-lg mb-2"
                  Title="Software"
                />
                <div className="wrapper-spec-detail flex items-center justify-start w-full border border-gray-400 gap-4">
                  <Title
                    className="w-40 font-semibold text-sm border-r border-gray-400 p-2"
                    Title="OS"
                  />
                  <Text className="w-full text-sm p-2" Text={Data.os} />
                </div>
                <div className="wrapper-spec-detail flex items-center justify-start w-full border-b border-x border-gray-400 gap-4">
                  <Title
                    className="w-40 font-semibold text-sm border-r border-gray-400 p-2"
                    Title="OS Version"
                  />
                  <Text className="w-full text-sm p-2" Text={Data.os_version} />
                </div>
              </div>
              {/* Hardware */}
              <div className="mt-6">
                <Title
                  className="subtitle-spec font-semibold text-lg mb-2"
                  Title="Hardware"
                />
                <div className="wrapper-spec-detail flex items-center justify-start w-full border border-gray-400 gap-4">
                  <Title
                    className="w-40 font-semibold text-sm border-r border-gray-400 p-2"
                    Title="Chipset"
                  />
                  <Text className="w-full text-sm p-2" Text={Data.chipset} />
                </div>
                <div className="wrapper-spec-detail flex items-center justify-start w-full border-b border-x border-gray-400 gap-4">
                  <Title
                    className="w-40 font-semibold text-sm border-r border-gray-400 p-2"
                    Title="Cpu"
                  />
                  <Text className="w-full text-sm p-2" Text={Data.cpu} />
                </div>
                <div className="wrapper-spec-detail flex items-center justify-start w-full border-b border-x border-gray-400 gap-4">
                  <Title
                    className="w-40 font-semibold text-sm border-r border-gray-400 p-2"
                    Title="Gpu"
                  />
                  <Text className="w-full text-sm p-2" Text={Data.gpu} />
                </div>
              </div>
              {/* Memory */}
              <div className="mt-6">
                <Title
                  className="subtitle-spec font-semibold text-lg mb-2"
                  Title="Memory"
                />
                <div className="wrapper-spec-detail flex items-center justify-start w-full border border-gray-400 gap-4">
                  <Title
                    className="w-40 font-semibold text-sm border-r border-gray-400 p-2"
                    Title="Ram"
                  />
                  <Text className="w-full text-sm p-2" Text={Data.ram} />
                </div>
                <div className="wrapper-spec-detail flex items-center justify-start w-full border-b border-x border-gray-400 gap-4">
                  <Title
                    className="w-40 font-semibold text-sm border-r border-gray-400 p-2"
                    Title="Storage"
                  />
                  <Text className="w-full text-sm p-2" Text={Data.storage} />
                </div>
                <div className="wrapper-spec-detail flex items-center justify-start w-full border-b border-x border-gray-400 gap-4">
                  <Title
                    className="w-40 font-semibold text-sm border-r border-gray-400 p-2"
                    Title="Storage Type"
                  />
                  <Text
                    className="w-full text-sm p-2"
                    Text={Data.storage_type}
                  />
                </div>
              </div>
              {/* Camera */}
              <div className="mt-6">
                <Title
                  className="subtitle-spec font-semibold text-lg mb-2"
                  Title="Camera"
                />
                <div className="wrapper-spec-detail flex items-center justify-start w-full border border-gray-400 gap-4">
                  <Title
                    className="w-40 font-semibold text-sm border-r border-gray-400 p-2"
                    Title="Main Camera"
                  />
                  <Text
                    className="w-full text-sm p-2"
                    Text={Data.main_camera}
                  />
                </div>
                <div className="wrapper-spec-detail flex items-center justify-start w-full border-b border-x border-gray-400 gap-4">
                  <Title
                    className="w-40 font-semibold text-sm border-r border-gray-400 p-2"
                    Title="Selfie Camera"
                  />
                  <Text
                    className="w-full text-sm p-2"
                    Text={Data.selfie_camera}
                  />
                </div>
              </div>
              {/* Connectivity */}
              <div className="mt-6">
                <Title
                  className="subtitle-spec font-semibold text-lg mb-2"
                  Title="Connectivity"
                />
                <div className="wrapper-spec-detail flex items-center justify-start w-full border border-gray-400 gap-4">
                  <Title
                    className="w-40 font-semibold text-sm border-r border-gray-400 p-2"
                    Title="NFC"
                  />
                  <Text className="w-full text-sm p-2" Text={Data.nfc} />
                </div>
                <div className="wrapper-spec-detail flex items-center justify-start w-full border-b border-x border-gray-400 gap-4">
                  <Title
                    className="w-40 font-semibold text-sm border-r border-gray-400 p-2"
                    Title="USB"
                  />
                  <Text className="w-full text-sm p-2" Text={Data.usb} />
                </div>
                <div className="wrapper-spec-detail flex items-center justify-start w-full border-b border-x border-gray-400 gap-4">
                  <Title
                    className="w-40 font-semibold text-sm border-r border-gray-400 p-2"
                    Title="Bluetooth"
                  />
                  <Text className="w-full text-sm p-2" Text={Data.bluetooth} />
                </div>
                <div className="wrapper-spec-detail flex items-center justify-start w-full border-b border-x border-gray-400 gap-4">
                  <Title
                    className="w-40 font-semibold text-sm border-r border-gray-400 p-2"
                    Title="GPS"
                  />
                  <Text className="w-full text-sm p-2" Text={Data.gps} />
                </div>
                <div className="wrapper-spec-detail flex items-center justify-start w-full border-b border-x border-gray-400 gap-4">
                  <Title
                    className="w-40 font-semibold text-sm border-r border-gray-400 p-2"
                    Title="Wi-Fi"
                  />
                  <Text className="w-full text-sm p-2" Text={Data.wifi} />
                </div>
              </div>
              {/* Battery */}
              <div className="mt-6">
                <Title
                  className="subtitle-spec font-semibold text-lg mb-2"
                  Title="Battery"
                />
                <div className="wrapper-spec-detail flex items-center justify-start w-full border border-gray-400 gap-4">
                  <Title
                    className="w-40 font-semibold text-sm border-r border-gray-400 p-2"
                    Title="Battery"
                  />
                  <Text className="w-full text-sm p-2" Text={Data.battery} />
                </div>
                <div className="wrapper-spec-detail flex items-center justify-start w-full border-b border-x border-gray-400 gap-4">
                  <Title
                    className="w-40 font-semibold text-sm border-r border-gray-400 p-2"
                    Title="Battery Type"
                  />
                  <Text
                    className="w-full text-sm p-2"
                    Text={Data.battery_type}
                  />
                </div>
              </div>
            </>
          )}
          <Title
            className="disclaimer font-bold text-sm my-6"
            Title="Disclaimer We can not guarantee that the information on this page is 100% correct."
          />
        </div>
      </div>
    </>
  );
};

export default Detail;
