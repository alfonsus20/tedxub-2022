import { ErrorMessage, Field, Form, Formik, useFormikContext } from "formik";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ticketBackground from "../assets/images/ticket-background.jpg";
import useDisclosure from "../hooks/useDisclosure";
import * as Yup from 'yup';
import { fakultas } from "../utils/data";
import "../style/ticket-form.scss";
import { getAllTicket } from "../models/ticket";
import Alert from "../components/Alert";
import Spinner from "../components/Spinner";
import { Helmet } from "react-helmet";

const TicketForm = () => {

  const { state } = useLocation();
  let navigate = useNavigate();
  const { isOpen, isOpenSpinner, onOpen, onOpenSpinner, onClose, onCloseSpinner } = useDisclosure();

  const [alertStatus, setAlertStatus] = useState('');

  const SetInitialFormik = () =>{
    const { values } = useFormikContext();

    useEffect(() => {
      if(state){
        values.buyer.length = state?.quantity;
      }
    }, [])
  };

  const handleOpenAlert = () => {
    onOpen();
    const timeoutAlert = setTimeout(() => {
      onClose();
    }, 3000);
    return () => {
      clearTimeout(timeoutAlert)
    }
  };

  const handleCloseAlert = () => {
    onClose();
  };

  const handleOpenSpinner = () => {
    onOpenSpinner();
  };

  const handleCloseSpinner = () => {
    onCloseSpinner();
  };

  const handleCheckRemainingTicket = async(values) => {
    try {
      handleOpenSpinner();

      const { data } = await getAllTicket();
      
      for (let item of data.data) {
        if (item.jenis_tiket == state?.type && item.remaining_ticket < state?.quantity ){
          setAlertStatus(`Maaf, tiket tersisa ${item.remaining_ticket} lagi.`);
          handleOpenAlert();
        } else if (item.jenis_tiket == state?.type && item.remaining_ticket == 0 ) {
          setAlertStatus(`Maaf, tiket sudah habis.`);
          handleOpenAlert();
        } else if (item.jenis_tiket == state?.type && item.remaining_ticket >= state?.quantity ) {
          return navigate("/ticket-confirm", { state: { buyer: values.buyer, ticketType: values.ticketType, amount: values.amount, quantity: values.quantity } });
        }
      }
    } catch (error) {
      console.log(error)
    } finally {
      handleCloseSpinner();
    }
  }

  useEffect(() => {
    if(!state){
      return navigate("/ticket");
    }
  }, []);
  
  return (
    <div className="relative ticket-container bg-[#1D1B21]" style={{backgroundImage: `url(${ticketBackground})`}}>
      <Helmet>
        <title>Ticket Form</title>
        <meta name="description" content="Ticket Form" />
      </Helmet>
      <Spinner isOpenSpinner={isOpenSpinner} onCloseSpinner={handleCloseSpinner}/>
      <div className="m-auto z-10">
        <div className="heading text-center mb-5 relative m-auto">
          <h1 className="font-sedgwick text-8xl text-main-3 opacity-75 h-24">Tickets</h1>
          <h1 className="font-akira text-white text-4xl absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">Tickets</h1>
        </div>

        <Formik 
          initialValues= {{
            buyer: 
              new Array(state?.quantity).fill({
                id: '',
                external_id: nanoid(),
                nama: '',
                email: '',
                nomorTelp: '',
                asalInstansi: '',
                namaInstansi: '',
              })
            ,
            ticketType: state?.type,
            amount: state?.price,
            quantity: state?.quantity,
          }}
          validationSchema= {
            Yup.object({
              buyer: Yup.array()
                .of(
                  Yup.object().shape({
                    nama: Yup.string()
                      .required('Required'),
                    email: Yup.string()
                      .email('Invalid email')
                      .required('Required'),
                    nomorTelp: Yup.string()
                      // .min(8, "Dimulai dari angka 8")
                      .matches(/^(\+62)8/, "Please start with +62")
                      .matches(/^[0-9+]*$/, 'Invalid Phone Number')
                      .min(10, "Too short")
                      .max(15, "Too long")
                      .required('Required'),
                    asalInstansi: Yup.string()
                      .required('Required'),
                    namaInstansi: Yup.string()
                      .required('Required'),
                  })
                )
            })
          }
          onSubmit={ values => {
            values.buyer = values.buyer.map((buy) => {
              return(
                {...buy, id: nanoid()}
              );
            })
            // window.location.replace('https://dev.xen.to/sp-vjoXD');
            // alert(JSON.stringify(values, null, 2));
            // return navigate("/ticket-confirm", { state: { buyer: values.buyer, ticketType: values.ticketType, amount: values.amount, quantity: values.quantity } });
            handleCheckRemainingTicket(values);
            // console.log(JSON.stringify(values, null, 2))
            }}
          >
          {({values}) => (
            <Form>
              <SetInitialFormik />
              <div className="container max-w-6xl gap-5 m-auto text-main-2 text-left flex flex-col font-jakarta px-10">
                <div className="flex flex-col px-10 text-center lg:text-left">
                  <h2 className="font-jakartaBold text-3xl">Data Tiket Pemesan</h2>
                  <p>*Pemesan akan dikirimkan bukti pembayaran melalui email</p>
                </div>

                <div className="bg-main-1 rounded-xl w-full p-10">
                  <h2 className="font-jakartaBold text-3xl mb-5 text-center lg:text-left">Tiket 1</h2>
                  <div className="flex flex-col lg:flex-row flex-wrap gap-5">
                    <div className="flex flex-col w-full lg:w-1/2 gap-3">
                      <div>
                        <p>Nama</p>
                        <Field
                          id="nama"
                          name="buyer.0.nama"
                          type="text"
                          className="p-2 bg-main-2 rounded-lg w-full text-main-1"
                        />
                        <ErrorMessage className="text-main-3" component="div" name="buyer.0.nama" />
                      </div>
                      <div>
                        <p>Email</p>
                        <Field
                          id="email"
                          name="buyer.0.email"
                          type="email"
                          className="p-2 bg-main-2 rounded-lg w-full text-main-1"
                        />
                        <ErrorMessage className="text-main-3" component="div" name="buyer.0.email" />
                      </div>
                      <div>
                        <p>Nomor Telepon (WhatsApp)</p>
                        <Field
                          id="nomorTelp"
                          name="buyer.0.nomorTelp"
                          type="text"
                          className="p-2 bg-main-2 rounded-lg w-full text-main-1"
                          placeholder="Example: +62812345678"
                        />
                        <ErrorMessage className="text-main-3" component="div" name="buyer.0.nomorTelp" />
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 gap-3">
                      <div>
                        <p>Asal Instansi</p>
                        {/* <div className="flex flex-row flex-wrap gap-3"> */}
                          <Field
                            component="select"
                            id="asalInstansi"
                            name="buyer.0.asalInstansi"
                            style={{ display: "block" }}
                            className="p-2 bg-main-2 rounded-lg w-full text-main-1 h-10"
                          >
                            <option disabled value="" label="Pilih Asal Instansi">
                              Pilih Asal Instansi
                            </option>
                            <option value="Universitas Brawijaya" label="Universitas Brawijaya">
                              Universitas Brawijaya
                            </option>
                            <option value="Lainnya" label="Lainnya">
                              Lainnya
                            </option>
                          </Field> 
                          {/* <Field type="button" id="asalInstansi" name="buyer.0.asalInstansi" value={"Universitas Brawijaya"} className="p-2 bg-main-2 rounded-lg text-main-1">Universitas Brawijaya</Fie> */}
                          {/* <Field type="button" id="asalInstansi" name="buyer.0.asalInstansi" value={"Lainnya"} className="p-2 bg-main-2 rounded-lg text-main-1">Lainnya</Field> */}
                        {/* </div> */}
                        <ErrorMessage className="text-main-3" component="div" name="buyer.0.asalInstansi" />
                      </div>
                      { values.buyer[0]?.asalInstansi == "Universitas Brawijaya" ?
                        <div>
                          <p>Fakultas</p>
                          <Field
                            component="select"
                            id="namaInstansi"
                            name="buyer.0.namaInstansi"
                            style={{ display: "block" }}
                            className="p-2 bg-main-2 rounded-lg w-full text-main-1 h-10"
                          >
                            <option disabled value="">
                              Pilih Fakultas
                            </option>
                            {
                              fakultas.map((fak, idx) => {
                                return (
                                  <option value={fak} key={idx} >
                                    {fak}
                                  </option>
                                );
                              })
                            }
                          </Field>   
                          <ErrorMessage className="text-main-3" component="div" name="buyer.0.namaInstansi" />
                        </div>
                        :
                        <div className={`${values.buyer[0]?.asalInstansi ? "block" : "hidden"}`}>
                          <p>Nama Instansi</p>
                          <Field
                            id="namaInstansi"
                            name="buyer.0.namaInstansi"
                            type="text"
                            className="p-2 bg-main-2 rounded-lg w-full text-main-1"
                          />  
                          <ErrorMessage className="text-main-3" component="div" name="buyer.0.namaInstansi" />
                        </div>
                      } 
                    </div>
                  </div>
                </div>
                
                { state?.quantity > 1 &&
                  <div className="gap-5 flex flex-col">

                    <div className="flex flex-col px-10 text-center lg:text-left">
                      <h2 className="font-jakartaBold text-3xl">Data Tiket Lainnya</h2>
                    </div>
                    
                    { Array.from({ length: state?.quantity - 1 }, (_, i) => {
                      return(
                        <div className="bg-main-1 rounded-xl w-full p-10" key={i}>
                          <h2 className="font-jakartaBold text-3xl mb-5 text-center lg:text-left">Tiket {i+2}</h2>
                          <div className="flex flex-col lg:flex-row flex-wrap gap-5">
                            <div className="flex flex-col w-full lg:w-1/2 gap-3">
                              <div>
                                <p>Nama</p>
                                <Field
                                  // id="nama"
                                  name={`buyer.${i+1}.nama`}
                                  type="text"
                                  className="p-2 bg-main-2 rounded-lg w-full text-main-1"
                                />
                                <ErrorMessage className="text-main-3" component="div" name={`buyer.${i+1}.nama`} />
                              </div>
                              <div>
                                <p>Email</p>
                                <Field
                                  id="email"
                                  name={`buyer.${i+1}.email`}
                                  type="email"
                                  className="p-2 bg-main-2 rounded-lg w-full text-main-1"
                                />
                                <ErrorMessage className="text-main-3" component="div" name={`buyer.${i+1}.email`} />
                              </div>
                              <div>
                                <p>Nomor Telepon (WhatsApp)</p>
                                <Field
                                  id="nomorTelp"
                                  name={`buyer.${i+1}.nomorTelp`}
                                  type="text"
                                  className="p-2 bg-main-2 rounded-lg w-full text-main-1"
                                  placeholder="Example: +62812345678"
                                />
                                <ErrorMessage className="text-main-3" component="div" name={`buyer.${i+1}.nomorTelp`} />
                              </div>
                            </div>
                            <div className="flex flex-col flex-1 gap-3">
                              <div>
                                <p>Asal Instansi</p>
                                {/* <div className="flex flex-col flex-wrap gap-3"> */}
                                  <Field
                                    component="select"
                                    id="asalInstansi"
                                    name={`buyer.${i+1}.asalInstansi`}
                                    style={{ display: "block" }}
                                    className="p-2 bg-main-2 rounded-lg w-full text-main-1 h-10"
                                  >
                                    <option disabled value="" label="Pilih Asal Instansi">
                                      Pilih Asal Instansi
                                    </option>
                                    <option value="Universitas Brawijaya" label="Universitas Brawijaya">
                                      Universitas Brawijaya
                                    </option>
                                    <option value="Lainnya" label="Lainnya">
                                      Lainnya
                                    </option>
                                  </Field>  
                                  <ErrorMessage className="text-main-3" component="div" name={`buyer.${i+1}.asalInstansi`} />
                                  {/* <button type="button" id="asalInstansi" name={`buyer.${i+1}.asalInstansi`} value={"Universitas Brawijaya"} className="p-2 bg-main-2 rounded-lg text-main-1">Universitas Brawijaya</button>
                                  <button type="button" id="asalInstansi" name={`buyer.${i+1}.asalInstansi`} value={"Lainnya"} className="p-2 bg-main-2 rounded-lg text-main-1">Lainnya</button> */}
                                {/* </div> */}
                              </div>
                              { values.buyer[i+1]?.asalInstansi == "Universitas Brawijaya" ?
                                <div>
                                  <p>Fakultas</p>
                                  <Field
                                    component="select"
                                    id="namaInstansi"
                                    name={`buyer.${i+1}.namaInstansi`}
                                    style={{ display: "block" }}
                                    className="p-2 bg-main-2 rounded-lg w-full text-main-1 h-10"
                                  >
                                    <option disabled value="">
                                      Pilih Fakultas
                                    </option>
                                    {
                                      fakultas.map((fak, idx) => {
                                        return (
                                          <option value={fak} key={idx} >
                                            {fak}
                                          </option>
                                        );
                                      })
                                    }
                                  </Field>   
                                  <ErrorMessage className="text-main-3" component="div" name={`buyer.${i+1}.namaInstansi`} />
                                </div>
                                :
                                <div className={`${values.buyer[i+1]?.asalInstansi ? "block" : "hidden"}`}>
                                  <p>Nama Instansi</p>
                                  <Field
                                    id="namaInstansi"
                                    name={`buyer.${i+1}.namaInstansi`}
                                    type="text"
                                    className="p-2 bg-main-2 rounded-lg w-full text-main-1"
                                  />  
                                  <ErrorMessage className="text-main-3" component="div" name={`buyer.${i+1}.namaInstansi`} />
                                </div>
                              }
                            </div>
                          </div>  
                        </div>
                      );
                    })}
                  </div>
                }
                <div className="flex flex-col lg:flex-row flex-wrap font-jakartaBold rounded-lg overflow-hidden">
                  <div className="bg-main-2 p-2 lg:p-5 flex-1 flex justify-center lg:justify-start items-center">
                    <p className="text-main-1">{state?.quantity} {state?.quantity > 1 ? "pcs" : "pc"} {state?.type}</p>
                  </div>
                  <div className="bg-main-3 p-2 lg:p-5 flex justify-center lg:justify-start items-center">
                    <p className="text-main-2 text-xl lg:text-base">Rp {state?.quantity * state?.price}</p>
                  </div>
                </div>
                
                <div className="font-jakartaBold flex flex-row flex-wrap justify-center items-center mt-5 gap-3">
                  <Link to="/ticket"><button type="button" className="px-10 py-2 bg-main-2 text-main-1 hover:bg-gray-500 hover:text-main-2 duration-200 rounded-full">Cancel</button></Link>
                  {/* <button type="button" onClick={handleConfirmTicket} className="px-10 py-2 bg-main-3 text-main-2 rounded-full">Checkout</button> */}
                  <button type="submit" className="px-10 py-2 bg-main-3 text-main-2 hover:bg-main-2 hover:text-main-3 duration-200 rounded-full">Checkout</button>
                  {/* <button type="button" onClick={handleOpenOyCashier} className="px-10 py-2 bg-blue-500 text-main-2 rounded-full">Open Oy!</button> */}
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <Alert alertStatus={alertStatus} isOpenAlert={isOpen} onCloseAlert={handleCloseAlert} />
    </div>
  );
}
 
export default TicketForm;