// //fatura bilgileri Mehmet KALDIRDIK.



// {  selectedProfilData.companyStatus && 
          
//     (
//       <div className="profile-dropdown">
//         <div
//           onClick={() => OpenDropdownItem(1)}
//           className="dropdown-header"
//         >
//           <div className="dropdown-left-icon">
//             {selectedProfilData &&
//             selectedProfilData.profileTheme == "light" ? (
//               <img src="/icons/file-text-AEAEB4.svg" />
//             ) : (
//               <img src="/icons/file-text-333333.svg" />
//             )}
//           </div>
//           <div className="dropdown-text">
//             <div>Fatura Bilgileri</div>
//           </div>
//           <div className="dropdown-riht-icon">
//             {dropdownList[1].open == false ? (
//               <i className="fa-solid fa-angle-down"></i>
//             ) : (
//               <i className="fa-solid fa-angle-up"></i>
//             )}
//           </div>
//         </div>
//         <div
//           className={
//             "dropdown-content " +
//             (dropdownList[1].open == true ? "dopen" : "dclose")
//           }
//         >
//           {selectedProfilData && selectedProfilData.companyStatus && (
//             <div className="content-header">
//               <div className="profile-name">
//                 {selectedProfilData && selectedProfilData.companyStatus}
//               </div>
//               {/*  <div className='profile-info'>
//                   </div>*/}
//             </div>
//           )}
//           <div className="content-in-grid ">
//             {selectedProfilData && selectedProfilData.taxNumber && (
//               <>
//                 <div className="content-header-text">Vergi Numarası</div>
//                 <div className="content-header-space">:</div>
//                 <div className="text">
//                   {selectedProfilData && selectedProfilData.taxNumber}
//                 </div>
//               </>
//             )}
//             {selectedProfilData && selectedProfilData.taxAdministration && (
//               <>
//                 {" "}
//                 <div className="content-header-text">Vergi Dairesi</div>
//                 <div className="content-header-space">:</div>
//                 <div className="text">
//                   {selectedProfilData &&
//                     selectedProfilData.taxAdministration}
//                 </div>
//               </>
//             )}
//             {selectedProfilData && selectedProfilData.companyStatus && (
//               <>
//                 {" "}
//                 <div className="content-header-text">Firma Unvanı</div>
//                 <div className="content-header-space">:</div>
//                 <div className="text">
//                   {selectedProfilData && selectedProfilData.companyStatus}
//                 </div>
//               </>
//             )}
//             {selectedProfilData && selectedProfilData.officeEmail && (
//               <>
//                 {" "}
//                 <div className="content-header-text">Ofis E-Postası</div>
//                 <div className="content-header-space">:</div>
//                 <div className="text">
//                   <a
//                     href={`mailto:${
//                       selectedProfilData && selectedProfilData.officeEmail
//                     }`}
//                   >
//                     {selectedProfilData && selectedProfilData.officeEmail}
//                   </a>
//                 </div>
//               </>
//             )}

//             {selectedProfilData && selectedProfilData.officePhoneNumber && (
//               <>
//                 {" "}
//                 <div className="content-header-text">Ofis Telefonu</div>
//                 <div className="content-header-space">:</div>
//                 <div className="text">
//                   <a
//                     href={`tel:+${
//                       selectedProfilData &&
//                       selectedProfilData.officePhoneNumber
//                     }`}
//                   >
//                     {" "}
//                     +
//                     {selectedProfilData &&
//                       selectedProfilData.officePhoneNumber}
//                   </a>
//                 </div>
//               </>
//             )}

//             {selectedProfilData && selectedProfilData.location && (
//               <>
//                 {" "}
//                 <div className="content-header-text">Adres</div>
//                 <div className="content-header-space">:</div>
//                 <div className="text">
//                   <Link
//                     href={`https://maps.google.com/?q=${
//                       selectedProfilData && selectedProfilData.location
//                     }`}
//                   >
//                     <a target="_blank">
//                       {" "}
//                       {selectedProfilData && selectedProfilData.location}
//                     </a>
//                   </Link>
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     )
    
//     }




//     //*********************aPRES uYGUNsEÇ pRO */

//     <FormControl
//     fullWidth
//     error={Boolean(touched.phoneNumber && errors.phoneNumber)}
//     sx={{ ...theme.typography.customInput }}
//   >
//     {/* spacing={matchDownSM ? 0 : 2} */}
//     <Grid container>
//       <Grid item xs={12} sm={4} md={4} lg={4} className="md:pr-1" >

        
//         <TextField
//           id="phoneHeader"
//           select
//           label="Seçiniz"
//           margin="normal"
//           value={values.phoneHeader}
//           fullWidth
//           name="phoneHeader"
//           onChange={(e)=>{handleChange(e); console.log("Number changes:", e.target.value)}}
//         >
//            {touched.phoneHeader && errors.phoneHeader && (
//           <FormHelperText
//             error
//             id="standard-weight-helper-text--register"
//           >
//             {errors.phoneHeader}
//           </FormHelperText>
//         )}
//           {numbersAll.map((option) => (
//             <MenuItem key={option.value} value={option.value} autoFocus={true}  disableGutters={false} divider={true}>
//               {option.label}
//             </MenuItem>
//           ))}
//         </TextField>
//       </Grid>
//       <Grid item xs={12} sm={8} md={8} lg={8} className="md:pl-1">
//         <TextField
//         id="phoneNumber"
//           fullWidth
//           type="text"
//           label="Numara"
//           margin="normal"
//           name="phoneNumber"
//           defaultValue=""
//           onBlur={handleBlur}
//           value={values.phoneNumber}
//           onChange={(e) => 
//             e.target.value === "" || numberOnly.test(e.target.value) ? 
//             handleChange(e): ""
//           }
//           inputProps={{ maxLength: 7 }}
//         />

//         {touched.phoneNumber && errors.phoneNumber && (
//           <FormHelperText
//             error
//             id="standard-weight-helper-text--register"
//           >
//             {errors.phoneNumber}
//           </FormHelperText>
//         )}
//       </Grid>
//     </Grid>
//   </FormControl>



// // ana syafa here 
// <div>
// <Grid xs={12} md={12} sm={12} lg={12} style={{textAlign:"center", justifyContent:"center"}}>

// <h1 className=" text-[2.5rem]  font-bold tracking-wide text-white " style={{textAlign:"right !important"}}>
// Sigortada Güvenin Adresi
// </h1>
// {/* <p className="text-[2.5rem]  font-bold tracking-wide text-white">
//   Sigortada Güvenin
//   <span >
//     Adresi
//   </span>
// </p> */}
// <p className="text-white items-center justify-center">
// Doğru Ürün. İyi Fiyat. 7/24 Hizmet.
// </p>
// <div className="flex"
//  style={{
//   width:"50%",
//   height: "auto",
// margin:"0 auto",
// padding: "10px",
// position: "relative",
// marginTop:"50px"
// }}
// >
// <button
//   type="button"
//   className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 flex rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
//   style={{
//     textAlign: "center",
//     justifyContent: "center",
//     minWidth: "260px"
//   }}
// >
//   <MdLocalGroceryStore className="mt-1"/> &nbsp; Teklif Al
// </button>
// <button
//   type="button"
//   className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 flex rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 ml-4"
//   style={{
//     textAlign: "center",
//     justifyContent: "center",
//     minWidth: "260px"
//   }}
// >
//   <MdLocalGroceryStore className="mt-1"/> &nbsp; Hemen Ara
// </button>
// </div>
// </Grid>
// </div>



// id,
// accountOwner,
// bankIban,
// bankName,
// bankStation,
// BankDataId,
// type,
// newOrderId,
// profileCity,
// profileCountry,
// profileNot,
// profilePosition,
// takenPhoneNumberState,
// takenEmailEpostaState
// publicName,
// publicOrganization,
// publicsurname,
// streetAdress,
// contactDataId,

// statusNameSurname,
// statusEmail,
// statusTelefon,
// statusMessage,
// emailToSend,
// publicstreetAdress,
// publicDropNot,
// documentDataFormId,

// belgeDocument,
// belgeDocumentId,

// panelUrlLink,
// panelProfileUrlDataId