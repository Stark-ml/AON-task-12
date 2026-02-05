import React from "react";
import image from "../assets/image-9.png";
import logo from "../assets/Frame-10.svg";

function Customers() {
  return (
    <section className="w-full bg-[#F5F7FA] py-12 md:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[40%_60%] items-center gap-8 md:gap-10 px-6 md:px-10">

        <div className="flex justify-center">
          <img
            src={image}
            alt="customer"
            className="w-48 md:w-72 h-48 md:h-72 object-cover rounded-xl"
          />
        </div>

        <div className="flex flex-col gap-4 text-center md:text-left">
          <p className="text-[#717171] text-sm leading-6">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>

          <h3 className="text-[#4CAF4F] text-lg font-semibold">
            Tim Smith
          </h3>

          <p className="text-[#717171] text-sm">
            British Dragon Boat Racing Association
          </p>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mt-4">
            <img src={logo} alt="logo" className="h-10" />
            <a
              href="#"
              className="text-[#4CAF4F] text-sm font-medium flex items-center gap-2 hover:underline"
            >
              Meet all customers →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Customers;