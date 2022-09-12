import { useFormik } from "formik";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ticketBackground from "../assets/images/ticket-background.jpg";
import OyCashier from "../components/OyCashier";
import PaymentSuccessModal from "../components/PaymentSuccessModal";
import useDisclosure from "../hooks/useDisclosure";


const TicketForm = () => {

  const { state } = useLocation();
  const { isOpen, isOpenCashier, onOpen, onOpenCashier, onClose, onCloseCashier } = useDisclosure();
  
  const formik = useFormik({
    initialValues: {
      buyer: [
        {
          nama: '',
          email: '',
          nomorTelp: '',
          asalInstansi: '',
          namaInstansi: '',
        }
      ]
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    console.log(state.quantity)
  }, []);

  const handleOpenModal = () => {
    onOpen();
  };

  const handleOpenOyCashier = () => {
    onOpenCashier();
  };

  const handleCloseModal = () => {
    onClose();
  };

  const handleCloseOyCashier = () => {
    onCloseCashier();
  };
  
  return (
    <div className="relative ticket-container bg-cover bg-no-repeat min-h-screen" style={{backgroundImage: `url(${ticketBackground})`}}>
      {/* <PaymentSuccess /> */}
      <PaymentSuccessModal isOpen={isOpen} onClose={handleCloseModal} />
      <OyCashier isOpenCashier={isOpenCashier} onCloseCashier={handleCloseOyCashier} />
      <div className="m-auto z-10">
        <div className="heading text-center py-12 relative m-auto">
          <h1 className="font-sedgwick text-8xl text-main-3 opacity-75 h-24">Tickets</h1>
          <h1 className="font-akira text-white text-4xl absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">Tickets</h1>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="container max-w-6xl gap-5 m-auto text-main-2 text-left flex flex-col font-jakarta px-10">

            <div className="flex flex-col px-10">
              <h2 className="font-jakartaBold text-3xl">Data Tiket Pemesan</h2>
              <p>*Pemesan akan dikirimkan bukti pembayaran melalui email</p>
            </div>

            <div className="bg-main-1 rounded-xl w-full p-10">
              <h2 className="font-jakartaBold text-3xl mb-5">Tiket 1</h2>
              <div className="flex flex-row flex-wrap gap-5">
                <div className="flex flex-col w-1/2 gap-3">
                  <div>
                    <p>Nama</p>
                    <input
                      id="nama"
                      name="buyer.0.nama"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.nama}
                      className="p-2 bg-main-2 rounded-lg w-full text-main-1"
                    />
                  </div>
                  <div>
                    <p>Email</p>
                    <input
                      id="email"
                      name="buyer.0.email"
                      type="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      className="p-2 bg-main-2 rounded-lg w-full text-main-1"
                    />
                  </div>
                  <div>
                    <p>Nomor Telepon</p>
                    <input
                      id="nomorTelp"
                      name="buyer.0.nomorTelp"
                      type="text"
                      onChange={formik.handleChange}
                      value={formik.values.nomorTelp}
                      className="p-2 bg-main-2 rounded-lg w-full text-main-1"
                    />
                  </div>
                </div>
                <div className="flex flex-col flex-1 gap-3">
                  <div>
                    <p>Asal Instansi</p>
                    <div className="flex flex-row flex-wrap gap-3">
                      <button type="button" onClick={formik.handleChange} id="asalInstansi" name="buyer.0.asalInstansi" value={"Universitas Brawijaya"} className="p-2 bg-main-2 rounded-lg text-main-1">Universitas Brawijaya</button>
                      <button type="button" onClick={formik.handleChange} id="asalInstansi" name="buyer.0.asalInstansi" value={"Lainnya"} className="p-2 bg-main-2 rounded-lg text-main-1">Lainnya</button>
                    </div>
                  </div>
                  { formik.values.buyer[0]?.asalInstansi == "Universitas Brawijaya" ?
                    <div>
                      <p>Fakultas</p>
                      <select
                        id="namaInstansi"
                        name="buyer.0.namaInstansi"
                        value={formik.values.namaInstansi}
                        onChange={formik.handleChange}
                        style={{ display: "block" }}
                        className="p-2 bg-main-2 rounded-lg w-full text-main-1"
                      >
                        <option value="" label="Pilih Fakultas">
                          Pilih Fakultas
                        </option>
                        <option value="FILKOM" label="FILKOM">
                          FILKOM
                        </option>
                        <option value="FIA" label="FIA">
                          FIA
                        </option>
                        <option value="FEB" label="FEB">
                          FEB
                        </option>
                      </select>         
                    </div>
                    :
                    <div>
                      <p>Nama Instansi</p>
                      <input
                        id="namaInstansi"
                        name="buyer.0.namaInstansi"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.namaInstansi}
                        className="p-2 bg-main-2 rounded-lg w-full text-main-1"
                      />  
                    </div>
                  }
                </div>
              </div>
            </div>
            {
              state.quantity > 1 &&
              <div className="gap-5 flex flex-col">

                <div className="flex flex-col px-10">
                  <h2 className="font-jakartaBold text-3xl">Data Tiket Lainnya</h2>
                </div>

                { Array.from({ length: state.quantity - 1 }, (_, i) => {
                  return(
                    <div className="bg-main-1 rounded-xl w-full p-10" key={i}>
                      <h2 className="font-jakartaBold text-3xl mb-5">Tiket {i+2}</h2>
                      <div className="flex flex-row flex-wrap gap-5">
                        <div className="flex flex-col w-1/2 gap-3">
                          <div>
                            <p>Nama</p>
                            <input
                              id="nama"
                              name={`buyer.${i+1}.nama`}
                              type="text"
                              onChange={formik.handleChange}
                              value={formik.values.nama}
                              className="p-2 bg-main-2 rounded-lg w-full text-main-1"
                            />
                          </div>
                          <div>
                            <p>Email</p>
                            <input
                              id="email"
                              name={`buyer.${i+1}.email`}
                              type="email"
                              onChange={formik.handleChange}
                              value={formik.values.email}
                              className="p-2 bg-main-2 rounded-lg w-full text-main-1"
                            />
                          </div>
                          <div>
                            <p>Nomor Telepon</p>
                            <input
                              id="nomorTelp"
                              name={`buyer.${i+1}.nomorTelp`}
                              type="text"
                              onChange={formik.handleChange}
                              value={formik.values.nomorTelp}
                              className="p-2 bg-main-2 rounded-lg w-full text-main-1"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col flex-1 gap-3">
                          <div>
                            <p>Asal Instansi</p>
                            <div className="flex flex-row flex-wrap gap-3">
                              <button type="button" onClick={formik.handleChange} id="asalInstansi" name={`buyer.${i+1}.asalInstansi`} value={"Universitas Brawijaya"} className="p-2 bg-main-2 rounded-lg text-main-1">Universitas Brawijaya</button>
                              <button type="button" onClick={formik.handleChange} id="asalInstansi" name={`buyer.${i+1}.asalInstansi`} value={"Lainnya"} className="p-2 bg-main-2 rounded-lg text-main-1">Lainnya</button>
                            </div>
                          </div>
                          { formik.values.buyer[i+1]?.asalInstansi == "Universitas Brawijaya" ?
                            <div>
                              <p>Fakultas</p>
                              <select
                                id="namaInstansi"
                                name={`buyer.${i+1}.namaInstansi`}
                                value={formik.values.namaInstansi}
                                onChange={formik.handleChange}
                                style={{ display: "block" }}
                                className="p-2 bg-main-2 rounded-lg w-full text-main-1"
                              >
                                <option value="" label="Pilih Fakultas">
                                  Pilih Fakultas
                                </option>
                                <option value="FILKOM" label="FILKOM">
                                  FILKOM
                                </option>
                                <option value="FIA" label="FIA">
                                  FIA
                                </option>
                                <option value="FEB" label="FEB">
                                  FEB
                                </option>
                              </select>         
                            </div>
                            :
                            <div>
                              <p>Nama Instansi</p>
                              <input
                                id="namaInstansi"
                                name={`buyer.${i+1}.namaInstansi`}
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.namaInstansi}
                                className="p-2 bg-main-2 rounded-lg w-full text-main-1"
                              />  
                            </div>
                          }
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            }

            <div className="flex flex-row flex-wrap font-jakartaBold rounded-lg overflow-hidden">
              <div className="bg-main-2 p-5 flex-1 flex items-center">
                <p className="text-main-1">{state.quantity} {state.quantity > 1 ? "pcs" : "pc"} {state.type}</p>
              </div>
              <div className="bg-main-3 p-5 flex items-center">
                <p className="text-main-2">Rp {state.quantity * state.price}</p>
              </div>
            </div>
            
            <div className="font-jakartaBold flex flex-row flex-wrap justify-center items-center mt-5 gap-3">
              <Link to="/ticket"><button type="button" className="px-10 py-2 bg-main-2 text-main-1 rounded-full">Cancel</button></Link>
              <button type="button" onClick={handleOpenModal} className="px-10 py-2 bg-main-3 text-main-2 rounded-full">Pay</button>
              <button type="button" onClick={handleOpenOyCashier} className="px-10 py-2 bg-blue-500 text-main-2 rounded-full">Open Oy!</button>
            </div>
          </div>
        </form>
      </div>
      <div>
      </div>
    </div>
  );
}
 
export default TicketForm;