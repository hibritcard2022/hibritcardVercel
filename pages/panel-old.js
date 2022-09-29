import React from 'react'
import { useState, useEffect } from 'react'
import Header from '../components/header'
import { List, arrayMove } from 'react-movable';
import ProfilePageButton from '../components/profile-page-button';
import { useJwt } from "react-jwt";
let token = "";

function Panel() {


    useEffect(() => {
        token = localStorage.getItem("userToken");
    }, []);




    const { decodedToken, isExpired } = useJwt(token);
    const [newPanel, setNewPanel] = useState(false);

    console.log(decodedToken);

    const [panels, setPanels] = useState([
        {
            id: 0,
            isOpen: false,
            isDeleteOpen: false,
        },
        {
            id: 1,
            isOpen: false,
            isDeleteOpen: false,
        },

    ])

    async function PanelOpen(id) {


        await setPanels((v) => panels.map(s => s.id == id && s.isOpen != true ? { ...s, isOpen: true, isDeleteOpen: false, } : { ...s, isOpen: false, isDeleteOpen: false, }));





    }
    async function DeletePanelOpen(id) {
        await setPanels((v) => panels.map(s => s.id == id && s.isDeleteOpen != true ? { ...s, isOpen: false, isDeleteOpen: true, } : { ...s, isOpen: false, isDeleteOpen: false, }));

    }





    async function NewPanelAdd() {
        await setPanels((v) => [...v, { id: v[v.length - 1].id + 1, isOpen: false }]);

    }

    return (
        <>
            <Header />
            {newPanel ?
                <div className='popup-global'>
                    <div onClick={() => setNewPanel(false)} className='popup-top'></div>
                    <div className='popup'>
                        <div onClick={() => setNewPanel(false)} className='close-button'>
                            <i className="fa-solid fa-xmark"></i>
                        </div>
                        <div className='header-text'>
                            İnstagram hesabını düzenle
                        </div>
                        <div className='description-text'>
                            İnstagram hesabının URL adresini
                            alt kısıma eklemelisin.
                        </div>
                        <div className='panel-types'>
                            <div className='panel-type-item'>
                                <div className='type-icon'><img src='icons/Phone-ABCAFF.svg' /></div>
                                <div className='type-text'>İletişim bilgileriniz (telefon, mail vb.) ekleyebilirsiniz.</div>
                                <div className='type-add'>Ekle</div>

                            </div>
                            <div className='panel-type-item'>
                                <div className='type-icon'><img src='icons/Phone-ABCAFF.svg' /></div>
                                <div className='type-text'>İletişim bilgileriniz (telefon, mail vb.) ekleyebilirsiniz.</div>
                                <div className='type-add'>Ekle</div>

                            </div>
                        </div>

                    </div>
                </div>
                : ""}
            <div className='main-content '>

                <div className='panel-area'>
                    <div className='panel-button'>
                        <div onClick={() => setNewPanel(true)} className='global-button new-panel-button'>
                            <img src='icons/Plus_circle.svg' />
                            <span>Yeni Panel Ekle</span>
                        </div>
                    </div>
                    <div className='panel-content'>


                        <List

                            values={panels}
                            onChange={({ oldIndex, newIndex }) =>
                                setPanels(arrayMove(panels, oldIndex, newIndex))
                            }
                            renderList={({ children, props }) => <div {...props}>{children}</div>}
                            renderItem={({ value, props }) => <div {...props}>{


                                <div key={value.id} className='panel-item'>
                                    <div className='panel-up'>
                                        <div className='scroll-button'>
                                            <img src='icons/scroll-button.svg' />
                                        </div>

                                        <button className='item-content' >
                                            <div onClick={() => PanelOpen(value.id)} className='content-header'>
                                                <div className='header-left'>
                                                    <div className='header-text'>Başlık {value.id} <img src='icons/Edit-888888.svg' /></div>
                                                    <div className='header-url'>url  <img src='icons/Edit-888888.svg' /></div>
                                                </div>
                                                <div className='header-right'>
                                                    <div className='header-switch'>
                                                        <div className='switch-button '>
                                                            <label className="switch">
                                                                <input type="checkbox" />
                                                                <span className="slider round"></span>
                                                            </label>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='footer'>
                                                <div className='footer-left'>
                                                    <div className='icon'><img src='icons/Bar-chart_up-888888.svg' /></div>
                                                    <div className='text'>0 tıklama</div>
                                                </div>
                                                <div className='footer-right'>
                                                    <div onClick={() => DeletePanelOpen(value.id)} className='trash'><img src='icons/Trash_2.svg' /></div>

                                                </div>
                                            </div>

                                        </button>
                                    </div>
                                    <button className={'panel-inner ' + (value.isOpen == true ? 'p-open' : 'p-close')}  >
                                        <div className='panel-inner-header'>
                                            <div className='text'>İletişim Formu</div>
                                            <div className='close-icon' onClick={() => PanelOpen(value.id)}><i className="fa-solid fa-xmark"></i></div>
                                        </div>
                                        <div className='panel-inner-content'>
                                            <div className='panel-inner-content-info'>
                                                Ziyaretçilerinizin ileteceği mesajların içeriğini ne olacağını düzenleyebilirsiniz.
                                            </div>
                                        </div>
                                    </button>
                                    <button className={'panel-inner ' + (value.isDeleteOpen == true ? 'p-open' : 'p-close')}  >
                                        <div className='panel-inner-header'>
                                            <div className='text'>Sil</div>
                                            <div className='close-icon' onClick={() => DeletePanelOpen(value.id)}><i className="fa-solid fa-xmark"></i></div>
                                        </div>
                                        <div className='panel-inner-content'>
                                            <div className='panel-inner-content-info'>
                                                Silmek istediğinizden emin misiniz?
                                            </div>
                                            <div className='yes-no-buttons'>
                                                <div className='global-button no-button'>
                                                    Hayır
                                                </div>
                                                <div className='yes-no-space '></div>
                                                <div className='global-button yes-button'>
                                                    Evet
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </div>

                            }</div>}
                        />







                    </div>

                </div>
            </div>
            <ProfilePageButton />

        </>
    )
}

export default Panel