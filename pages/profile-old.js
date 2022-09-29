import React from 'react'
import { useState } from 'react'
import ViewPageButton from '../components/view-page-button';

function ProfileOld() {

    const [theme, setTheme] = useState("dark"); // light or dark


    const [dropdownList, setDropdownList] = useState([
        {
            id: 0,
            open: false,
        },
        {
            id: 1,
            open: false,
        },

    ]);


    function OpenDropdownItem(id) {
        const newList = dropdownList.map((v) => {
            if (v.id == id && v.open == false) {
                v.open = true;
            }
            else {
                v.open = false;
            }

            return v;
        });
        setDropdownList(newList);
    }

    return (
        <>

            {/**      <div className='alert-popup-bg'>
                <div className='alert-popup'>
                    <div className='alert-icon'>
                        <i className="fa-solid fa-triangle-exclamation"></i>
                    </div>
                    <div className='alert-text'>
                        Deneme hesabınızın kullanım süresi dolmuştur,    lütfen kartınızı satın alınız.
                    </div>
                    <div className='global-button alert-button'>
                        Kart Satın Al
                    </div>
                </div>
            </div>
*/}
            <div className={'profile-page ' + (theme == "light" ? 'profile-page-light ' : 'profile-page-dark')}>
                <div className='header-image'>
                    <div className='header-gradient'></div>
                    <img src='images/headerimage.png' />
                </div>
                <div className='profile-area'>
                    <div className='profile-image'>

                        <div className='image'>
                            <img src='images/profile-example.png' />
                        </div>
                        <div className='share-icon'>
                            {theme == "light" ? <img src='icons/External link-black.svg' /> : <img src='icons/External link-white.svg' />}
                        </div>
                    </div>
                    <div className='infos'>
                        <div className='profile-name'>
                            Ayşe Yılmaz
                        </div>
                        <div className='profile-info'>
                            Diş Hekimi
                        </div>
                        <div className='profile-description'>
                            Merhablar, bilgilerime aşağıdaki
                            sekmelerden erişebilirsiniz.
                        </div>
                    </div>

                </div>
                <div className='profile-social-items'>
                    <div className='profile-social-item'><i className="fa-brands fa-facebook-f"></i></div>
                    <div className='profile-social-item'><i className="fa-brands fa-linkedin-in"></i></div>
                    <div className='profile-social-item'><i className="fa-brands fa-twitter"></i></div>
                    <div className='profile-social-item'><i className="fa-brands fa-instagram"></i></div>
                </div>
                <div className='profile-content'>

                    {dropdownList.map((v) =>
                        <div key={v.id} className='profile-dropdown'>
                            <div onClick={() => OpenDropdownItem(v.id)} className='dropdown-header'>
                                <div className='dropdown-left-icon'>
                                    {theme == "light" ? <img src='icons/Phone-AEAEB4.svg' /> : <img src='icons/Phone-333333.svg' />}
                                </div>
                                <div className='dropdown-text'>
                                    <div>İletişim Bilgileri</div>
                                </div>
                                <div className='dropdown-riht-icon'>
                                    {v.open == false ? <i className="fa-solid fa-angle-down"></i> : <i className="fa-solid fa-angle-up"></i>}
                                </div>
                            </div>
                            <div className={'dropdown-content ' + (v.open == true ? "dopen" : "dclose")} >
                                <div className='content-header'>
                                    <div className='profile-name'>
                                        Ayşe Yılmaz
                                    </div>
                                    <div className='profile-info'>
                                        Dento - Diş Hekimi
                                    </div>
                                </div>
                                <div className='content-in'>
                                    <div className='in-item'>
                                        <div className='image'>
                                            {theme == "light" ? <img src='icons/Phone-AEAEB4.svg' /> : <img src='icons/Phone-666666.svg' />}

                                        </div>
                                        <div className='text'>
                                            <a href='' target="_blank">+90 123 456 78 90</a>
                                        </div>
                                    </div>
                                    <div className='in-item'>
                                        <div className='image'>
                                            {theme == "light" ? <img src='icons/Phone-AEAEB4.svg' /> : <img src='icons/Phone-666666.svg' />}

                                        </div>
                                        <div className='text'>
                                            <a href='' target="_blank">ayse.yilmaz@example.com</a>
                                        </div>
                                        {/**  <div className='global-button profile-in-button'>
                                                <img src='icons/Send-gray.png' />
                                                <span>Git</span>
                                            </div> */}
                                    </div>

                                    <div className={'global-button ' + (theme == "light" ? "profile-in-button" : "profile-in-button-dark")}>

                                        <span>Rehbere Ekle</span>
                                    </div>
                                </div>
                            </div>


                        </div>



                    )}



                </div>

                {/**  <div className='profile-social-items'>
                    <div className='profile-social-item'><i className="fa-brands fa-instagram"></i></div>
                    <div className='profile-social-item'><i className="fa-brands fa-instagram"></i></div>
                    <div className='profile-social-item'><i className="fa-brands fa-instagram"></i></div>
                    <div className='profile-social-item'><i className="fa-brands fa-instagram"></i></div>
                </div> */}
                <div className='mini-logo'>
                    {theme == "light" ? <img src='images/hibritcard-black-logo.svg' /> : <img src='images/hibritcard-white-logo.svg' />}
                </div>
            </div>
            <ViewPageButton />
        </>
    )
}

export default ProfileOld