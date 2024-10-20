import React from 'react'
import { assets } from '../assets/assets';

export const Footer = () => {
  return (
    <div className="">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum omnis
            voluptatum a iure, incidunt laboriosam deleniti qui quia beatae
            pariatur assumenda quisquam ducimus aliquid officia dolore voluptate
            sequi ad optio, autem aliquam explicabo unde. Quo facere sint ipsum
            veritatis mollitia doloremque
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 uppercase">Company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 uppercase">Get In Touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-9816048093</li>
            <li>contact@forever.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
            Copyright 2024 @ forever.com - All Right Reserved
        </p>
      </div>
    </div>
  );
}
