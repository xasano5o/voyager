import React from "react";


export default function Modal({
  title,
  closeModal,
  children,
}) {
  const renderButton = (actionType, ) => {
    if (actionType === "view") {
      return null;
    }

    let buttonText;

    switch (actionType) {
      case "delete":
        buttonText = "O'chirish";
        break;
      case "update":
        buttonText = "O'zgartirish";
        break;
      default:
        buttonText = "Saqlash";
        break;
    }

    return (
      <div className="flex gap-4">
 

      </div>
    );
  };

  return (
    <div  className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-20">
    <div  className="  bg-white p-4 rounded shadow-lg flex flex-col gap-4 w-2/3 h-[90vh] overflow-y-auto">
      <div className="flex justify-between">
        <h1>{title}</h1>
        <p onClick={closeModal} className="cursor-pointer hover:text-red-500 duration-150 text-lg">
          ✖︎
        </p>

        
      </div>
      {children}
    </div>
  </div>
  );
}
