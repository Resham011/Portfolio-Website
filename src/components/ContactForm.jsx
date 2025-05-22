// import { useState } from "react";

// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [status, setStatus] = useState(""); // success or error message
//   const [isLoading, setIsLoading] = useState(false);

//   const validateEmail = (email) => {
//     return /^\S+@\S+\.\S+$/.test(email);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("");

//     const { name, email, message } = formData;

//     // Basic validations
//     if (!name || !email || !message) {
//       setStatus("All fields are required.");
//       return;
//     }

//     if (!validateEmail(email)) {
//       setStatus("Please enter a valid email address.");
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const response = await fetch("http://localhost:5000/send-email", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (data.success) {
//         setStatus("Message sent successfully!");
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         setStatus(data.message || "Something went wrong.");
//       }
//     } catch (error) {
//       setStatus("Failed to send message. Please try again later.");
//     }

//     setIsLoading(false);
//   };

//   return (
//     <section id="contact" className="py-20 bg-white dark:bg-gray-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-center mb-12 dark:text-white ">
//           Get In Touch
//         </h2>

//         <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
//           <input
//             type="text"
//             placeholder="Name"
//             className=" w-full p-3 mb-4 rounded-lg border bg-gray-200 purple-shadow dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:shadow-none"
//             value={formData.name}
//             onChange={(e) =>
//               setFormData({ ...formData, name: e.target.value })
//             }
//           />

//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full p-3 mb-4 rounded-lg border bg-gray-200 purple-shadow dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:shadow-none"
//             value={formData.email}
//             onChange={(e) =>
//               setFormData({ ...formData, email: e.target.value })
//             }
//           />

//           <textarea
//             placeholder="Message"
//             rows="5"
//             className="w-full p-3 mb-4 rounded-lg border bg-gray-200 purple-shadow dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:shadow-none"
//             value={formData.message}
//             onChange={(e) =>
//               setFormData({ ...formData, message: e.target.value })
//             }
//           />

//           <button
//             type="submit"
//             className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg text-white font-semibold w-full transition"
//             disabled={isLoading}
//           >
//             {isLoading ? "Sending..." : "Send Message"}
//           </button>

//           {status && (
//             <p
//               className={`mt-4 text-center font-medium ${
//                 status.includes("success")
//                   ? "text-green-600"
//                   : "text-red-600"
//               }`}
//             >
//               {status}
//             </p>
//           )}
//         </form>
//       </div>
//     </section>
//   );
// }



import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setStatus("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(data.message || "Something went wrong.");
      }
    } catch (error) {
      setStatus("Failed to send message. Please try again later.");
    }

    setIsLoading(false);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 dark:text-white animate-fade-in-down">
          Contact Me
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side */}
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-semibold mb-4 text-purple-600 dark:text-purple-500">
              Let's Talk
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of your vision. Feel free to reach out using the form or through
              my contact information.
            </p>
            <div className="text-gray-800 dark:text-gray-200 space-y-4">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:resham2987@gmail.com"
                  className="text-purple-600 hover:underline dark:text-purple-500"
                >
                  resham2987@gmail.com
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+919058670701"
                  className="text-purple-600 hover:underline dark:text-purple-500"
                >
                  +91 9058670701
                </a>
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <form onSubmit={handleSubmit} className="max-w-lg w-full mx-auto animate-fade-in-up">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white text-center">
              Send Message
            </h3>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 mb-4 rounded-lg border bg-gray-200 purple-shadow dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:shadow-[3px_3px_8px_rgba(190,144,255,0.4)]"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 rounded-lg border bg-gray-200 purple-shadow dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:shadow-[3px_3px_8px_rgba(190,144,255,0.4)]"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full p-3 mb-4 rounded-lg border bg-gray-200 purple-shadow dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:shadow-[3px_3px_8px_rgba(190,144,255,0.4)]"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            <button
              type="submit"
              className="px-6 py-3 bg-purple-700 hover:bg-purple-600 rounded-lg text-white font-semibold w-full transition"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
            {status && (
              <p
                className={`mt-4 text-center font-medium ${
                  status.includes("success") ? "text-green-600" : "text-red-600"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}


