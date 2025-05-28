import Swal from 'sweetalert2';
import { useState} from "react";
const Enquiry = () => {
   const [isNavOpen, setIsNavOpen] = useState(false);
  const onSubmit = async (event) => {
    event.preventDefault();
    const keys = [
      "2590ae03-e2d2-4026-ae20-b381caf1bb12"
    ];

    const responses = await Promise.all(
      keys.map(async (key) => {
        const formDataCopy = new FormData(event.target);
        formDataCopy.append("access_key", key);

        try {
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formDataCopy
          });
          return response.json();
        } catch (error) {
          console.error("Error submitting form:", error);
          return { success: false, message: "Network error" };
        }
      })
    );

    const allSuccess = responses.every((res) => res.success);
    const anySuccess = responses.some((res) => res.success);

    if (allSuccess) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully.",
        icon: "success"
      });
      event.target.reset();
    } else if (anySuccess) {
      Swal.fire({
        title: "Partial Success",
        text: "Message sent to some recipients, but there were errors.",
        icon: "warning"
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Message could not be sent. Please try again later.",
        icon: "error"
      });
    }

    console.log("Responses:", responses);
  };

  return (
    <>
    <div id='contact' className='grid lg:p-4 pt-[5vh] lg:grid-cols-2 bg-primary overflow-x-hidden'>
        <h1 className='text-4xl pb-5 font-quicksand text-center'>Contact Me</h1>
    <div className='col-span-1 relative z-0 bg-[#F0A04B] rounded-xl lg:p-6 m-8 mt-1 p-9 lg:m-2  text-black text-lg animate-fadeInUp' >
    <form onSubmit={onSubmit}>
              {/* Form Fields */}
              <div className="mb-4 md:mb-2 ">
                <label className="block text-white mb-1" htmlFor="name">Name</label>
                <input
                  className="w-full px-4 py-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 transition duration-300"
                  placeholder="Enter your name"
                  name='name'
                  type="text"
                  required
                />
              </div>
              <div className="mb-4 mt-4 md:mt-2 md:mb-2">
                <label className="block text-white mb-1" htmlFor="phone_number">Phone Number</label>
                <input
                  className="w-full px-4 py-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 transition duration-300"
                  placeholder="Enter your number"
                  type="tel"
                  name='phone_number'
                  required
                />
              </div>
               <div className="mb-4 mt-4 md:mt-2 md:mb-2">
                <label className="block text-white mb-1" htmlFor="phone_number">Address</label>
                <input
                  className="w-full px-4 py-2 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 transition duration-300"
                  placeholder="Enter your address"
                  type="text"
                  name='address'
                  required
                />
              </div>
              <button
                className="w-full hover:bg-slate bg-white text-black py-2 px-4 rounded-lg transition duration-300"
                type="submit"
              >
                Submit
              </button>
            </form>
    </div>
    </div>
    </>
  )
}

export default Enquiry
