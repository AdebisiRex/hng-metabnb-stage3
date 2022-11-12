import React from "react";
import metamask from "../assets/metamask.png";
import walletconnect from "../assets/walletconnect.png";
import forward from "../assets/forward.png";

const Modal = () => {
  return (
    <>
      {/* <!-- Button trigger modal --> */}

      {/* <!-- Modal --> */}
      <div
        class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
          <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-300 rounded-t-md">
              <h3
                class="text-2xl font-bold my-2  text-gray-800"
                id="exampleModalLabel"
              >
                Connect Wallet
              </h3>
              <button
                type="button"
                class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body relative p-8">
              <p className="mb-3"> Choose your preferred wallet:</p>
              <div className="p-2 px-4 flex mb-4 justify-between bg-gray-100 border items-center font-bold rounded-lg  ">
                <div>
                  <img className="mr-3 inline-block" src={metamask} alt="" />
                  <h5 className="inline-block text-lg ">Metamask</h5>
                </div>
                <img className="h-4" src={forward} alt="" />
              </div>
              <div className="p-3 px-4 flex justify-between bg-gray-100 border items-center font-bold rounded-lg  ">
                <div>
                  <img className="mr-3 inline-block" src={walletconnect} alt="" />
                  <h5 className="inline-block text-lg ">Wallet Connect</h5>
                </div>
                <img className="h-4" src={forward} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
