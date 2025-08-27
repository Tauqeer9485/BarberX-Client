"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LogOut, User } from "lucide-react";
import { clearSession } from "@/lib/session";


export default function ProfileDropdown({ 
  name = "Guest User", 
  email = "guest@example.com", 
  avatar = "https://i.pravatar.cc/40",
  onProfileClick = () => {},
  onLogoutClick = () => {}
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative ml-[30vw] my-auto " ref={dropdownRef}>
      {/* Profile Picture */}
      <img
        src={avatar}
        alt="Profile"
        className="w-10 h-10 rounded-full cursor-pointer border border-gray-300"
        onClick={() => setOpen(!open)}
      />

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-52 bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden z-50"
          >
            {/* User Info */}
            <div className="flex item-center gap-3 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
              <img
                src={avatar}
                alt="Profile"
                className="w-10 h-10 rounded-full cursor-pointer border border-gray-300"
                onClick={() => setOpen(!open)}
              />
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{email}</p>
              </div>
            </div>

            {/* Actions */}
            <ul className="text-sm text-gray-700 dark:text-gray-200">
              <li
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                onClick={() => {
                  setOpen(false);
                  onProfileClick();
                }}
              >
                <User size={16} /> Profile
              </li>
              <li
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
                onClick={() => {
                  setOpen(false);
                  onLogoutClick();
                }}
              >
                <LogOut size={16} /> Logout
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
