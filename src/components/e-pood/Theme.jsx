import React from 'react';
import ProductImage from "../../assets/Images/photo-collage.png";

const Theme = () => {
    return (
        <>
            <div
                className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-6 md:px-10"
                style={{
                    backgroundImage: `url(${ProductImage})`,
                }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-white text-6xl sm:text-7xl md:text-6xl lg:text-7xl font-bold text-center">
                    E-pood
                </div>
            </div>

            <div className="text-center mb-12  mt-10">
                <h2 className="text-3xl font-bold text-gray-900">Kuidas vormistada tellimust?</h2>
                <p className="text-gray-700 mt-2 text-lg max-w-3xl mx-auto text-center px-4">
                    E-poest tellimine on lihtne. Lisage toode/tooted ostukorvi ning sealt suunatakse teid edasi tellimust sooritama,
                    kus saate ise valida, kas soovite tulla tootele/toodetele ise järgi või saadame teile pakiautomaati.
                </p>
                <div className="text-center">
                    <p className="text-gray-700 text-lg mt-12 mb-4">
                        Pakke saadan läbi kolme firma: Omniva, DPD ja Smartpost
                    </p>
                    
                    <div className="flex flex-col items-center space-y-2">
                        <p className="text-gray-700">
                            Omniva hinnakirja leiate - 
                            <a href="https://www.omniva.ee/wp-content/uploads/sites/7/2024/11/hinnakiri-pakk-pakiteenus-era-est-ee-2024_update.pdf" 
                               className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-1">
                                Siit
                            </a>
                        </p>
                        
                        <p className="text-gray-700">
                            DPD hinnakirja leiate - 
                            <a href="https://www.dpd.com/ee/et/saatmine/eraklient/hinnakiri/" 
                               className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-1">
                                Siit
                            </a>
                        </p>
                        
                        <p className="text-gray-700">
                            Smarposti hinnakirja leiate - 
                            <a href="https://www.smartposti.ee/paki-saatmine/hinnakirjad" 
                               className="font-medium text-blue-600 dark:text-blue-500 hover:underline ml-1">
                                Siit
                            </a>
                        </p>

                        <p className="text-gray-700 mt-2 text-lg max-w-3xl mx-auto text-center px-4">
                          NB:"Tellimus alates 100€-st on  Tasuta "
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Theme;