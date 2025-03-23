import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white py-10 border-t">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <div className="flex items-center space-x-2">
            <div><img src="/Group2.svg" alt="" /></div>
          </div>
          <p className="text-gray-600 mt-2">mikayla_beer@feil.name</p>
          <p className="text-gray-600">906-179-8309</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">Get in Touch</h3>
          <p className="text-gray-600 text-sm mt-2">
            Don’t miss any updates of our new templates and extensions.!
          </p>
          <input
            type="email"
            placeholder="Email id"
            className="mt-3 w-full p-2 border border-gray-300 rounded-md bg-gray-100"
          />
          <button className="mt-2 px-5 py-2 bg-black text-white rounded-md w-full">
            Subscribe
          </button>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">Our Guidelines</h3>
          <ul className="text-gray-600 space-y-2 mt-2">
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">Discover</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">Our Address</h3>
          <p className="text-gray-600 mt-2">518 Schmeler Neck Bartlett, Illinois</p>
          <div className="flex space-x-3 mt-3">
            <a href="#" className="p-2 bg-gray-200 rounded-full">
              <FaFacebookF className="text-gray-700" />
            </a>
            <a href="#" className="p-2 bg-gray-200 rounded-full">
              <FaTwitter className="text-gray-700" />
            </a>
            <a href="#" className="p-2 bg-gray-200 rounded-full">
              <FaInstagram className="text-gray-700" />
            </a>
            <a href="#" className="p-2 bg-gray-200 rounded-full">
              <FaLinkedinIn className="text-gray-700" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-600 text-sm border-t pt-4">
        Copyright © 2019 <span className="text-red-500">Bootstrapdash</span>. All rights reserved. 
        Distributed by <span className="text-red-500">ThemeWagon</span>.
      </div>
    </footer>
  );
}
