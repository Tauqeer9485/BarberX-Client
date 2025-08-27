"use client";
import { useState } from "react";
import Popup from "./GetListedPopup";

// Tag Input Component
function TagInput({ label, initialTags, onChange }) {
  const [tags, setTags] = useState(initialTags);
  const [inputValue, setInputValue] = useState("");

  const handleAddTag = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      const newTags = [...tags, inputValue.trim()];
      setTags(newTags);
      onChange(newTags);
      setInputValue("");
    }
  };

  const handleRemoveTag = (indexToRemove) => {
    const newTags = tags.filter((_, index) => index !== indexToRemove);
    setTags(newTags);
    onChange(newTags);
  };

  return (
    <div className="mb-4">
      <div className="w-full  border px-4 py-2  rounded-lg bg-gray-50 border-gray-400 min-h-[50px] flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className=" bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-1 rounded-full text-sm flex items-center gap-1">
            {tag}
            <button type="button" onClick={() => handleRemoveTag(index)} className="ml-2 font-semibold">
              X
            </button>
          </span>
        ))}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleAddTag}
          className="flex-1 min-w-[4vw] bg-gray-50 border-none ml-2 focus:outline-none"
          placeholder="add more..."
        />
      </div>
    </div>
  );
}


// function TagInput({ label, initialTags }) {
//   const [tags, setTags] = useState(initialTags);
//   const [inputValue, setInputValue] = useState('');

//   const handleAddTag = (e) => {
//     if (e.key === 'Enter' && inputValue.trim() !== '') {
//       e.preventDefault();
//       setTags([...tags, inputValue.trim()]);
//       setInputValue('');
//     }
//   };

//   const handleRemoveTag = (indexToRemove) => {
//     setTags(tags.filter((_, index) => index !== indexToRemove));
//   };

//   return (
//     <div className="mb-4">
//       <div className="w-full  border px-4 py-2  rounded-lg bg-gray-50 border-gray-400 min-h-[50px] flex flex-wrap gap-2">
//         {tags.map((tag, index) => (
//           <span key={index} className=" bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-1 rounded-full text-sm flex items-center gap-1">
//             {tag}
//             <button type="button" onClick={() => handleRemoveTag(index)} className="ml-2 font-semibold">
//               X
//             </button>
//           </span>
//         ))}
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           onKeyDown={handleAddTag}N
//           className="flex-1 min-w-[4vw] bg-gray-50 border-none ml-2 focus:outline-none"
//           placeholder="add more..."
//         />
//       </div>
//     </div>
//   );
// }

const SalonForm = () => {
  const [salonName, setSalonName] = useState("");
  const [fullname, setFullname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [barbers, setBarbers] = useState(["Barber 1", "Barber 2"]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }

      const res = await fetch("/api/auth/o_signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          salonName,
          fullname,       // unified naming
          address,
          email,
          phone,
          barbers,
          password
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Signup failed");

      setShowPopup(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setSalonName("");
    setFullname("");
    setAddress("");
    setEmail("");
    setPhone("");
    setPassword("");
    setConfirmPassword("");
    setBarbers([]);
  };


// const SalonForm = () => {
//   // Form State
//   const [salonName, setSalonName] = useState("");
//   const [ownerName, setOwnerName] = useState("");
//   const [address, setAddress] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [barbers, setBarbers] = useState(["Barber 1", "Barber 2"]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // Submit Handler
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       if (password == confirmPassword) {
//         const res = await fetch("/api/auth/o_signup", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             salonName,
//             fullname:ownerName,
//             address,
//             email,
//             phone,
//             barbers,
//             password // temp, replace with actual password input
//           }),
//         });

//         const data = await res.json();

//         if (!res.ok) throw new Error(data.message || "Signup failed");

//         // Save credentials locally
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("role", "owner");
//         localStorage.setItem("phone", phone);

//         alert("Salon registered successfully 🎉");
//       }
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCancel = () => {
//     setSalonName("");
//     setOwnerName("");
//     setAddress("");
//     setEmail("");
//     setPhone("");
//     setPassword("");
//     setConfirmPassword("");
//     setBarbers([]);
//   };

  return (
    <section className="relative w-full bg-cover bg-center mb-[15vw]">
      <section className="relative w-full mt-[2.8vw] md:mt-[-8vw] flex justify-center">
        <div className="relative w-[90vw] md:w-full h-[50vw] md:h-[50vw]  overflow-hidden rounded-[1vw] md:rounded-[0vw]">
          
          {/* Image */}
          <img
          src="/7978c720ea7332a677a522ce0b8dfb9e7865f880.jpg"
          alt="Barber Shop"
          className="w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>

          {/* Heading */}
          <h2 className="absolute bottom-[20%] md:bottom-[14%] left-[5%] text-white font-poppins font-semibold text-[5vw] md:text-[3.15vw] leading-[7vw] md:leading-[3.5vw]">
          List Your Salon at <span className="text-[#BB23DA]">BarberX</span>
          </h2>
          <h3 className="absolute w-[50vw] bottom-[8%] md:bottom-[5%] left-[5.12%] text-white font-poppins font-semibold text-[2vw] md:text-[1.6vw] leading-[-15vw] md:leading-[2.4vw]">
            Increase your online visibility and reach more potential clients on SalonX.
          </h3>
        </div>
      </section>

      <div className="relative w-[82.2vw] mt-[12vw] md:mt-[5vw] mb-[-4vw] md:mb-[0] mx-auto flex items-start">
        {/* Button */}
        <button
          className="flex flex-row justify-between items-center px-[3vw] md:px-[1vw] py-[3vw] md:py-[1vw] gap-[0.4vw] bg-[#EBEBEB] rounded-[0.5vw]">
          
          {/* Vector / Image */}
          <img
            src="/vector.png"
            alt="Vector"
            className="w-[4.2vw] md:w-[1.2vw] h-[3vw] md:h-[1vw]"
          />
        </button>
      </div>


      <div className="w-[90vw] max-w-[80rem] mx-auto px-[4vw] py-[5vh]">
        <h2 className="text-[3.6vw] md:text-[1.5vw] font-bold text-gray-800 mb-[3vh]">
          Enter Your Details
        </h2>
        

        {/* FORM START */}
        <form onSubmit={handleSubmit}>
          {/* Salon Name */}
          <div className="mb-[3vh]">
              <label className="block text-gray-600 text-[3vw] md:text-[1.2vw] mb-[1vh]">
              Salon Name*
              </label>
              <input
              type="text"
              value={salonName}
              onChange={(e) => setSalonName(e.target.value)}  
              placeholder="Perfect Hair Salon"
              className="w-full border border-gray-400 rounded-lg px-[2vw] py-[2vw] md:py-[1vw] text-[3vw] md:text-[1.2vw] text-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"
              />
          </div>
          
          {/* Owner Name */}
          <div className="mb-[3vh]">
              <label className="block text-gray-600 text-[3vw] md:text-[1.2vw] mb-[1vh]">
              Salon Owner Name*
              </label>
              <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Kalpesh Mankar"
              className="w-full border border-gray-400 rounded-lg px-[2vw] py-[2vw] md:py-[1vw] text-[3vw] md:text-[1.2vw] text-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"
              />
          </div>

          {/* Address */}
          <div className="mb-[3vh]">
              <label className="block text-gray-600 text-[3vw] md:text-[1.2vw] mb-[1vh]">
              Address*
              </label>
              <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="State bank chowk, near postal ground, Yavatmal"
              className="w-full border border-gray-400 rounded-lg px-[2vw] py-[2vw] md:py-[1vw] text-[3vw] md:text-[1.2vw] text-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"
              />
          </div>
          
          {/* Email */}
          <div className="mb-[3vh]">
              <label className="block text-gray-600 text-[3vw] md:text-[1.2vw] mb-[1vh]">
              Email*
              </label>
              <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="kalpesh@gmail.com"
              className="w-full border border-gray-400 rounded-lg px-[2vw] py-[2vw] md:py-[1vw] text-[3vw] md:text-[1.2vw] text-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"
              />
          </div>

          <label className="block text-gray-600 text-[3vw] md:text-[1.2vw] mb-[1vh]">
            Phone*
          </label>
          {/* Phone */}
          <div className="mb-[3vh] flex gap-[2vw] md:gap-[1vw]">
            <div className="w-[10vw] md:w-[6vw] ">
              <input
                  type="text"
                  value="+91"
                  disabled
                  className="w-full border border-gray-400 rounded-lg px-[2vw] py-[2vw] md:py-[1vw] bg-gray-100 text-gray-600 text-[3vw] md:text-[1.2vw]"
              />
            </div>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="9876543210"
              className="flex-1 border border-gray-400 rounded-lg px-[2vw] py-[2vw] md:py-[1vw] text-[3vw] md:text-[1.2vw] text-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
          
          {/* Password */}
          <div className="mb-[3vh]">
              <label className="block text-gray-600 text-[3vw] md:text-[1.2vw] mb-[1vh]">
              Password*
              </label>
              <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="kalpesh@gmail.com"
              className="w-full border border-gray-400 rounded-lg px-[2vw] py-[2vw] md:py-[1vw] text-[3vw] md:text-[1.2vw] text-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"
              />
          </div>
          
          {/* Confirm Password */}
          <div className="mb-[3vh]">
              <label className="block text-gray-600 text-[3vw] md:text-[1.2vw] mb-[1vh]">
              Confirm Password*
              </label>
              <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="kalpesh@gmail.com"
              className="w-full border border-gray-400 rounded-lg px-[2vw] py-[2vw] md:py-[1vw] text-[3vw] md:text-[1.2vw] text-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"
              />
          </div>
          
          {/* Barbers */}
          <div className="mb-[3vh]">
              <label className="block text-gray-600 text-[3vw] md:text-[1.2vw] mb-[1vh]">
              Add Barbers*
              </label>
              
              <TagInput label="Barbers" initialTags={barbers} onChange={setBarbers} />
          </div>

          {/* Error */}
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <label className="block text-gray-600 text-[3vw] md:text-[1.2vw] mb-[1vh]">
            Salon Image*
          </label>
         
          {/* Upload Section */}
          <div className="mb-[4vh] p-[4vw] md:p-[3vw] border border-gray-400 rounded-lg bg-gray-50 flex flex-col items-center">
            <img
              src="/Group.png"
              alt="Barber Shop"
              className="w-[12vw] object-cover mb-[5vw]"
              />
            <button className="px-[4vw] py-[1vh] bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full text-[2.4vw] md:text-[1.5vw] font-semibold">
            + Add Salon Images
            </button>
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-md"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-2 bg-white text-purple-600 font-bold rounded-md border border-purple-500"
            >
              Cancel
            </button>
          </div>
        </form>
        {/* FORM END */}
      </div>
      <Popup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </section>
  );
};

export default SalonForm;



// // export default function SalonForm() {
// "use client";

// import { useState } from 'react';    

// function TagInput({ label, initialTags }) {
//   const [tags, setTags] = useState(initialTags);
//   const [inputValue, setInputValue] = useState('');

//   const handleAddTag = (e) => {
//     if (e.key === 'Enter' && inputValue.trim() !== '') {
//       e.preventDefault();
//       setTags([...tags, inputValue.trim()]);
//       setInputValue('');
//     }
//   };

//   const handleRemoveTag = (indexToRemove) => {
//     setTags(tags.filter((_, index) => index !== indexToRemove));
//   };

//   return (
//     <div className="mb-4">
//       <div className="w-full  border px-4 py-2  rounded-lg bg-gray-50 border-gray-400 min-h-[50px] flex flex-wrap gap-2">
//         {tags.map((tag, index) => (
//           <span key={index} className=" bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-1 rounded-full text-sm flex items-center gap-1">
//             {tag}
//             <button type="button" onClick={() => handleRemoveTag(index)} className="ml-2 font-semibold">
//               X
//             </button>
//           </span>
//         ))}
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           onKeyDown={handleAddTag}
//           className="flex-1 min-w-[4vw] bg-gray-50 border-none ml-2 focus:outline-none"
//           placeholder="add more..."
//         />
//       </div>
//     </div>
//   );
// }
// const SalonForm = () => {
//   return (
  
//     <section  className="relative w-full  bg-cover bg-center mb-[15vw]">
//         <section className="relative w-full mt-[2.8vw] md:mt-[-8vw] flex justify-center">
//             <div className="relative w-[90vw] md:w-full h-[50vw] md:h-[50vw]  overflow-hidden rounded-[1vw] md:rounded-[0vw]">
                
//                 {/* Image */}
//                 <img
//                 src="/7978c720ea7332a677a522ce0b8dfb9e7865f880.jpg"
//                 alt="Barber Shop"
//                 className="w-full h-full object-cover"
//                 />

//                 {/* Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"></div>

//                 {/* Heading */}
//                 <h2 className="absolute bottom-[20%] md:bottom-[14%] left-[5%] text-white font-poppins font-semibold text-[5vw] md:text-[3.15vw] leading-[7vw] md:leading-[3.5vw]">
//                 List Your Salon at <span className="text-[#BB23DA]">BarberX</span>
//                 </h2>
//                 <h3 className="absolute w-[50vw] bottom-[8%] md:bottom-[5%] left-[5.12%] text-white font-poppins font-semibold text-[2vw] md:text-[1.6vw] leading-[-15vw] md:leading-[2.4vw]">
//                     Increase your online visibility and reach more potential clients on SalonX.
//                 </h3>
//             </div>
//         </section>

//         <div className="relative w-[82.2vw] mt-[12vw] md:mt-[5vw] mb-[-4vw] md:mb-[0] mx-auto flex items-start">
//             {/* Button */}
//             <button
//                 className="flex flex-row justify-between items-center px-[3vw] md:px-[1vw] py-[3vw] md:py-[1vw] gap-[0.4vw] bg-[#EBEBEB] rounded-[0.5vw]">
                
//                 {/* Vector / Image */}
//                 <img
//                     src="/vector.png"
//                     alt="Vector"
//                     className="w-[4.2vw] md:w-[1.2vw] h-[3vw] md:h-[1vw]"
//                 />
//             </button>

            
//             </div>


//         <div className="w-[90vw] max-w-[80rem] mx-auto px-[4vw] py-[5vh]">
//         {/* Heading */}
//         <h2 className="text-[3.6vw] md:text-[1.5vw] font-bold text-gray-800 mb-[3vh]">
//             Enter Your Details
//         </h2>

//         {/* Salon Name */}
//         <div className="mb-[3vh]">
//             <label className="block text-gray-600 text-[3vw] md:text-[1.2vw] mb-[1vh]">
//             Salon Name*
//             </label>
//             <input
//             type="text"
//             placeholder="Perfect Hair Salon"
//             className="w-full border border-gray-400 rounded-lg px-[2vw] py-[2vw] md:py-[1vw] text-[3vw] md:text-[1.2vw] text-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"
//             />
//         </div>

//         {/* Owner Name */}
//         <div className="mb-[3vh]">
//             <label className="block text-gray-600 text-[3vw] md:text-[1.2vw] mb-[1vh]">
//             Salon Owner Name*
//             </label>
//             <input
//             type="text"
//             placeholder="Kalpesh Mankar"
//             className="w-full border border-gray-400 rounded-lg px-[2vw] py-[2vw] md:py-[1vw] text-[3vw] md:text-[1.2vw] text-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"
//             />
//         </div>

//         {/* Address */}
//         <div className="mb-[3vh]">
//             <label className="block text-gray-600 text-[3vw] md:text-[1.2vw] mb-[1vh]">
//             Address*
//             </label>
//             <input
//             type="text"
//             placeholder="State bank chowk, near postal ground, Yavatmal"
//             className="w-full border border-gray-400 rounded-lg px-[2vw] py-[2vw] md:py-[1vw] text-[3vw] md:text-[1.2vw] text-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"
//             />
//         </div>

//         {/* Email */}
//         <div className="mb-[3vh]">
//             <label className="block text-gray-600 text-[3vw] md:text-[1.2vw] mb-[1vh]">
//             Email*
//             </label>
//             <input
//             type="email"
//             placeholder="kalpesh@gmail.com"
//             className="w-full border border-gray-400 rounded-lg px-[2vw] py-[2vw] md:py-[1vw] text-[3vw] md:text-[1.2vw] text-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"
//             />
//         </div>

//         {/* Phone */}
//         <div className="mb-[3vh] flex gap-[2vw] md:gap-[1vw]">
//             <div className="w-[10vw] md:w-[6vw] ">
//             <input
//                 type="text"
//                 value="+91"
//                 disabled
//                 className="w-full border border-gray-400 rounded-lg px-[2vw] py-[2vw] md:py-[1vw] bg-gray-100 text-gray-600 text-[3vw] md:text-[1.2vw]"
//             />
//             </div>
//             <input
//             type="tel"
//             placeholder="9876543210"
//             className="flex-1 border border-gray-400 rounded-lg px-[2vw] py-[2vw] md:py-[1vw] text-[3vw] md:text-[1.2vw] text-gray-700 focus:ring-2 focus:ring-purple-500 outline-none"
//             />
//         </div>

//         {/* Barbers */}
//         <div className="mb-[3vh]">
//             <label className="block text-gray-600 text-[3vw] md:text-[1.2vw] mb-[1vh]">
//             Add Barbers*
//             </label>
            
//             <TagInput label="Barbers" initialTags={['Barber 1', 'Barber 2', 'Barber 3', 'Barber 4', 'Barber 5']} />
//         </div>

//         {/* Upload Section */}
//         <div className="mb-[4vh] p-[4vw] md:p-[3vw] border border-gray-400 rounded-lg bg-gray-50 flex flex-col items-center">
//             <img
//                 src="/Group.png"
//                 alt="Barber Shop"
//                 className="w-[12vw] object-cover mb-[5vw]"
//                 />
//             <button className="px-[4vw] py-[1vh] bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full text-[2.4vw] md:text-[1.5vw] font-semibold">
//             + Add Salon Images
//             </button>
//         </div>

//         {/* Buttons */}
//         <div className="flex justify-center gap-[2vw]">
//             <button className="px-[6vw] py-[2vw] md:py-[1vw] bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-md text-[3vw] md:text-[1.2vw]">
//             Submit
//             </button>
//             <div className="p-[1px] rounded-md bg-gradient-to-l from-[#BB23DA] to-[#AD5389] inline-block">
//               <button className="px-[6vw] py-[2vw] md:py-[1vw] bg-white text-purple-600 font-bold rounded-md text-[3vw] md:text-[1.2vw]">
//                 Cancel
//               </button>
//             </div>
//         </div>
//         </div>
//     </section>
//   );
// }

// export default SalonForm;