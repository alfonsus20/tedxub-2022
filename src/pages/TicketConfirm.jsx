import ticketBackground from "../assets/images/ticket-background.jpg";
import ticketData from "../assets/images/ticket-confirm-data.png";
import ticketDataMobile from "../assets/images/ticket-confirm-data-mobile.png";
import { Icon } from "@iconify/react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  CarouselProvider,
  Slider,
  Slide,
  Dot
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../style/ticket-confirm.scss";
import { useEffect, useRef, useState } from "react";
import TicketConfirmModal from "../components/TicketConfirmModal";
import useDisclosure from "../hooks/useDisclosure";
import { createPayment } from "../models/payment";
import Spinner from "../components/Spinner";
import ReCAPTCHA from "react-google-recaptcha";

const TicketConfirm = () => {

  const { state } = useLocation();
  let navigate = useNavigate();
  const reCAPTCHARef = useRef();

  const [isLoading, setisLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState("");
  const { onOpen, onOpenSpinner, isOpen, isOpenSpinner, onClose, onCloseSpinner } = useDisclosure();

  const handlePrevPage = () => {
    return navigate(-1);
  };

  const handleOpenModal = () => {
    onOpen();
  };

  const handleOpenSpinner = () => {
    onOpenSpinner();
  };

  const handleCloseModal = () => {
    onClose();
  };

  const handleCloseSpinner = () => {
    onCloseSpinner();
  };
  
  const onChange = (value) => {
    setAuthenticated(value);
  };

  const onFailed = () => {
    setAuthenticated("");
  };

  const resetCaptcha = () => {
    reCAPTCHARef.current?.reset();
    setAuthenticated("");
  };

  const handleCreatePayment = async () => {
    try {
      handleOpenSpinner();

      const { data } = await createPayment(
        {
          buyer: state?.buyer,
          ticketType: state?.ticketType,
          amount: state?.amount,
          quantity: state?.quantity,
        }
      )
      
      if( data.message == "Success create invoice" || data.message == "There is still pending transaction"){
        return window.location.replace(data.data.invoice_url);
      }
    } catch (error) {
      console.log(error)
    } finally {
      handleCloseSpinner();
    }
  };

  useEffect(() => {
    if(!state){
      return navigate("/ticket");
    }
  }, []);

  return (
    <div className="confirm relative ticket-container min-h-screen bg-[#1D1B21] shrink-0" style={{backgroundImage: `url(${ticketBackground})`}}>
      <TicketConfirmModal isOpen={isOpen} onClose={handleCloseModal} handleCreatePayment={handleCreatePayment} resetCaptcha={resetCaptcha} />
      <Spinner isOpenSpinner={isOpenSpinner} onCloseSpinner={handleCloseSpinner}/>
      <div className="m-auto z-10">
        <div className="heading text-center mb-5 relative m-auto">
          <h1 className="font-sedgwick text-8xl text-main-3 opacity-75 h-24">Tickets</h1>
          <h1 className="font-akira text-white text-4xl absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">Tickets</h1>
        </div>

        <div className="flex flex-col max-w-6xl m-auto gap-2 px-10 mb-10">
          <h2 className="font-jakartaBold text-main-3 text-2xl md:text-3xl">Order Data</h2>
          <div className="bg-main-2 w-full rounded-xl flex flex-col md:flex-row p-0 md:p-5 gap-0 md:gap-2 overflow-hidden">
            <div className="bg-main-1 h-36 bg-cover bg-no-repeat bg-top block md:hidden" style={{backgroundImage: `url(${ticketDataMobile})`}} />
            <img className="hidden md:block w-36 h-36" src={ticketData} alt="Ticket" />
            <div className="font-jakarta flex flex-col gap-2 justify-center p-5 md:p-0">
              <p className="font-jakartaBold">{state?.ticketType}</p>
              <div className="flex flex-row gap-2 items-center">
                <Icon 
                  icon="akar-icons:calendar"
                  className="text-lg shrink-0"
                />
                <p>2 Oct 2022</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <Icon 
                  icon="akar-icons:clock"
                  className="text-lg shrink-0"
                />
                <p>09.00 - 16.16 WIB</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <Icon 
                  icon="akar-icons:pin"
                  className="text-lg shrink-0"
                />
                <p>Graha Widyaloka, Universitas Brawijaya, Malang</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl m-auto px-10 mb-2">
          <h2 className="font-jakartaBold text-main-3 text-2xl md:text-3xl">Buyers Information</h2>
        </div>

        <div className="flex flex-col mb-10 relative h-full">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={30}
            totalSlides={state?.quantity}
            visibleSlides={1}
            className="carousel-container"
            touchEnabled={state?.quantity > 1 ? true : false}
            dragEnabled={state?.quantity > 1 ? true : false}
          >
            <Slider>
              {state?.buyer.map((buy, idx) => {
                return (
                  <Slide index={idx} key={idx}>
                    <div className="bg-main-2 w-full rounded-xl flex flex-col">
                      <div className="text-main-3 text-center p-5 font-jakartaBold border-gray-500 border-b-[1px]">
                        <p className="text-xl">Ticket {idx+1}</p>
                      </div>
                      <div className="flex flex-col gap-2 md:flex-row p-5 justify-between break-words">
                        <div className="flex flex-col gap-2 flex-grow">
                          <div className="flex flex-col font-jakarta">
                            <p className="text-sm text-gray-500">Nama</p>
                            <p>{buy.nama}</p>
                          </div>
                          <div className="flex flex-col font-jakarta">
                            <p className="text-sm text-gray-500">Email</p>
                            <p>{buy.email}</p>
                          </div>
                          <div className="flex flex-col font-jakarta">
                            <p className="text-sm text-gray-500">Phone Number</p>
                            <p>{buy.nomorTelp}</p>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 justify-starts flex-grow">
                          <div className="flex flex-col font-jakarta">
                            <p className="text-sm text-gray-500">Asal Instansi</p>
                            <p>{buy.asalInstansi}</p>
                          </div>
                          <div className="flex flex-col font-jakarta">
                            <p className="text-sm text-gray-500">Nama Instansi</p>
                            <p>{buy.namaInstansi}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slide>
                );
              })}
            </Slider>
            <div className="text-white flex gap-5 justify-center">
              { state?.buyer.length > 1 && state?.buyer.map((buy, idx) => {
                return (
                  <Dot slide={idx} key={idx}>
                    o
                  </Dot>
                );
              })}
            </div>
          </CarouselProvider>
        </div>

        <div className="flex flex-col max-w-6xl m-auto gap-2 px-10">
          <h2 className="font-jakartaBold text-main-3 text-2xl md:text-3xl">Transaction Detail</h2>
          <div className="bg-main-2 w-full rounded-xl flex flex-col">
            <div className="flex flex-row justify-between text-main-1 text-center p-5 font-jakarta border-gray-500 border-b-[1px]">
              <p>{state?.ticketType}</p>
              <p>{state?.quantity}</p>
            </div>
            <div className="flex flex-row justify-between text-main-1 text-center p-5 font-jakarta border-gray-500 border-b-[1px]">
              <p>Ticket Price</p>
              <p><span className="font-jakartaBold">Rp {state?.amount}</span> x {state?.quantity}</p>
            </div>
            <div className="flex flex-row justify-between text-main-1 text-center p-5 font-jakarta">
              <p className="text-2xl font-jakartaBold">Total</p>
              <p className="text-2xl font-jakartaBold text-main-3">Rp {state?.amount * state?.quantity}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10">
          <ReCAPTCHA
            ref={reCAPTCHARef}
            sitekey="6Ldx3BEiAAAAAFuTAzqoXEAwrXH4pwCjMF8t-mWl"
            onChange={onChange}
            onExpired={onFailed}
            onError={onFailed}
          />
        </div>
        <div className="font-jakartaBold flex flex-row flex-wrap justify-center items-center mt-5 gap-3">
          <button onClick={handlePrevPage} type="button" className="px-10 py-2 bg-main-2 text-main-1 hover:bg-gray-500 hover:text-main-2 duration-200 rounded-full">Cancel</button>
          <button disabled={authenticated == "" ? true : false} onClick={handleOpenModal} className={`px-10 py-2 bg-main-3 text-main-2 duration-200 rounded-full ${authenticated == "" ? "bg-gray-500 cursor-not-allowed" : "hover:bg-main-2 hover:text-main-3"}`}>Pay Now</button>
        </div>

      </div>
    </div>
  );
}
 
export default TicketConfirm;