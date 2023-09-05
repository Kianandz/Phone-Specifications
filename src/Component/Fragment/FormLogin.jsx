import React from "react";
import Input from "../Element/Input";
import Button from "../Element/Button";
import Label from "../Element/Label";

const FormLogin = (props) => {
  return (
    <>
      <form onSubmit={props.onSubmit} className="text-center">
        <div className="w-full relative">
          <Label htmlFor="name" className="block text-sm mb-1 text-left" label="Username" />
          <Input
            type="text"
            placeholder="Username"
            name="uname"
            id="uname"
            className="p-2 w-full bg-[#f0f0f0] border border-gray-400 rounded-lg text-left text-sm"
            value={props.unameValue}
            onChange={props.unameOnChange}
          />
        </div>
        <div className="w-full relative mt-2">
          <Label htmlFor="passwd" className="block text-sm mb-1 text-left" label="Password" />
          <Input
            type="password"
            placeholder="Password"
            name="passwd"
            id="passwd"
            className="p-2 w-full bg-[#f0f0f0] border border-gray-400 rounded-lg text-left text-sm"
            value={props.passValue}
            onChange={props.passOnChange}
          />
        </div>
        <Button
        className="px-4 py-2 bg-gray-700 hover:bg-gray-800 transition-all rounded text-sm text-white mt-4"
        buttonValue="Login"
        />
      </form>
    </>
  );
};

export default FormLogin;
