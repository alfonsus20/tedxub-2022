import ticketBackground from "../assets/images/ticket-background.jpg";
import ticketData from "../assets/images/ticket-confirm-data.png";
import { Icon } from "@iconify/react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "../style/ticket-confirm.scss";
import { useEffect } from "react";
import TicketConfirmModal from "../components/TicketConfirmModal";
import useDisclosure from "../hooks/useDisclosure";

const TicketConfirm = () => {

  const { state } = useLocation();
  let navigate = useNavigate();
  const { onOpen, isOpen, isOpenCashier, onClose } = useDisclosure();

  const handlePrevPage = () => {
    return navigate(-1);
  };

  const handleOpenModal = () => {
    onOpen();
  };

  const handleCloseModal = () => {
    onClose();
  };

  useEffect(() => {
    if(!state){
      return navigate("/ticket");
    }
  }, []);

  return (
    <div className="confirm relative ticket-container min-h-screen bg-[#1D1B21] shrink-0" style={{backgroundImage: `url(${ticketBackground})`}}>
      <TicketConfirmModal isOpen={isOpen} onClose={handleCloseModal} />
      <div className="m-auto z-10">
        <div className="heading text-center py-12 relative m-auto">
          <h1 className="font-sedgwick text-8xl text-main-3 opacity-75 h-24">Tickets</h1>
          <h1 className="font-akira text-white text-4xl absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">Tickets</h1>
        </div>

        <div className="flex flex-col max-w-6xl m-auto gap-2 px-5 mb-10">
          <h2 className="font-jakartaBold text-main-3 text-3xl">Order Data</h2>
          <div className="bg-main-2 w-full rounded-xl flex flex-row p-5 gap-2">
            <img className="w-36 h-36" src={ticketData} alt="Ticket" />
            <div className="font-jakarta flex flex-col gap-2 justify-center">
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

        <div className="flex flex-col mb-10 relative h-full">
          <h2 className="max-w-6xl m-auto gap-2 px-5 font-jakartaBold text-main-3 text-3xl mb-2">Buyer Information</h2>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={30}
            totalSlides={state?.quantity}
            visibleSlides={1}
            className="carousel-container"
          >
            <Slider>
              {state?.buyer.map((buy, idx) => {
                return (
                  <Slide index={idx}>
                    <div className="bg-main-2 w-full rounded-xl flex flex-col">
                      <div className="text-main-3 text-center p-5 font-jakartaBold border-gray-500 border-b-2">
                        <p className="text-xl">Ticket {idx+1}</p>
                      </div>
                      <div className="flex flex-col md:flex-row p-5 justify-between">
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
            {/* <Slider>
              <Slide index={0}>
                <div className="bg-main-2 w-full rounded-xl flex flex-col">
                  <div className="text-main-3 text-center p-5 font-jakartaBold border-gray-500 border-b-2">
                    <p className="text-xl">Ticket 1</p>
                  </div>
                  <div className="flex flex-row p-5 justify-between">
                    <div className="flex flex-col gap-2 w-1/2">
                      <div className="flex flex-col font-jakarta">
                        <p className="text-sm text-gray-500">Nama</p>
                        <p>Miftahul Ihsan</p>
                      </div>
                      <div className="flex flex-col font-jakarta">
                        <p className="text-sm text-gray-500">Email</p>
                        <p>miftahulihsan@gmail.com</p>
                      </div>
                      <div className="flex flex-col font-jakarta">
                        <p className="text-sm text-gray-500">Phone Number</p>
                        <p>+628123456789</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 justify-start w-1/2">
                      <div className="flex flex-col font-jakarta">
                        <p className="text-sm text-gray-500">Asal Instansi</p>
                        <p>Universitas Brawijaya</p>
                      </div>
                      <div className="flex flex-col font-jakarta">
                        <p className="text-sm text-gray-500">Nama Instansi</p>
                        <p>Fakultas Ilmu Komputer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
            </Slider> */}
            <div className="text-white flex gap-5 justify-center">
              {state?.buyer.map((buy, idx) => {
                return (
                  <Dot slide={idx} key={idx}>
                    o
                  </Dot>
                );
              })}
            </div>
          </CarouselProvider>
          
        </div>

        <div className="flex flex-col max-w-6xl m-auto gap-2 px-5">
          <h2 className="font-jakartaBold text-main-3 text-3xl">Buyer Information</h2>
          <div className="bg-main-2 w-full rounded-xl flex flex-col">
            <div className="flex flex-row justify-between text-main-1 text-center p-5 font-jakarta border-gray-500 border-b-2">
              <p>{state?.ticketType}</p>
              <p>{state?.quantity}</p>
            </div>
            <div className="flex flex-row justify-between text-main-1 text-center p-5 font-jakarta border-gray-500 border-b-2">
              <p>Ticket Price</p>
              <p><span className="font-jakartaBold">Rp {state?.amount}</span> x {state?.quantity}</p>
            </div>
            <div className="flex flex-row justify-between text-main-1 text-center p-5 font-jakarta">
              <p className="text-2xl font-jakartaBold">Total</p>
              <p className="text-2xl font-jakartaBold text-main-3">Rp {state?.amount * state?.quantity}</p>
            </div>
          </div>
        </div>

        <div className="font-jakartaBold flex flex-row flex-wrap justify-center items-center mt-5 gap-3">
          <button onClick={handlePrevPage} type="button" className="px-10 py-2 bg-main-2 text-main-1 rounded-full">Cancel</button>
          <button onClick={handleOpenModal} className="px-10 py-2 bg-main-3 text-main-2 rounded-full">Pay Now</button>
        </div>

      </div>
    </div>
  );
}
 
export default TicketConfirm;